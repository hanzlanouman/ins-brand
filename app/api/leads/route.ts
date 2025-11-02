import { NextRequest } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export const runtime = "edge";
export const preferredRegion = ["iad1"]; // keep close to us-east

const Body = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  dealership: z.string().optional().default(""),
  message: z.string().optional().default(""),
  utm: z
    .object({
      source: z.string().optional().default(""),
      medium: z.string().optional().default(""),
      campaign: z.string().optional().default(""),
    })
    .optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY!);

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "";
  const ua = req.headers.get("user-agent") ?? "";
  const site = process.env.NEXT_PUBLIC_SITE_NAME || "Staxly";

  let parsed: z.infer<typeof Body>;
  try {
    parsed = Body.parse(await req.json());
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid body" }), {
      status: 400,
    });
  }

  // Build lean strings up front
  const subj = `New Lead • ${site} • ${parsed.name}${
    parsed.dealership ? ` • ${parsed.dealership}` : ""
  }`;
  const text =
    `New lead for ${site}\n` +
    `Name: ${parsed.name}\n` +
    `Email: ${parsed.email}\n` +
    `Dealership: ${parsed.dealership || "-"}\n` +
    `Message: ${parsed.message || "-"}\n` +
    `UTM.source: ${parsed.utm?.source ?? ""}\n` +
    `UTM.medium: ${parsed.utm?.medium ?? ""}\n` +
    `UTM.campaign: ${parsed.utm?.campaign ?? ""}\n` +
    `IP: ${ip}\n` +
    `UA: ${ua}`;

  // Parallel ops
  const insertP = supabase.from("leads").insert({
      name: parsed.name,
      email: parsed.email,
      dealership: parsed.dealership,
      message: parsed.message,
      utm: parsed.utm ?? null,
      ip,
      user_agent: ua,
    });

  // Email with hard timeout (800 ms)
  const emailP = withTimeout(
    resend.emails.send({
      from: process.env.LEAD_NOTIFY_FROM!,
      to: process.env.LEAD_NOTIFY_TO!,
      subject: subj,
      text,
      replyTo: parsed.email,
    }),
    800
  );

  // wait for DB, race/ignore slow email
  const [dbRes] = await Promise.allSettled([insertP, emailP]);

  if (dbRes.status === "rejected") {
    return new Response(
      JSON.stringify({ ok: false, error: "DB insert failed" }),
      { status: 500 }
    );
  }
  const dbVal = dbRes.value as { error?: { message?: string } | null };
  if (dbVal?.error) {
    return new Response(
      JSON.stringify({ ok: false, error: dbVal.error.message }),
      { status: 500 }
    );
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}

// Promise timeout helper
function withTimeout<T>(p: Promise<T>, ms: number): Promise<T | "timeout"> {
  let t: ReturnType<typeof setTimeout>;
  const timer = new Promise<"timeout">(
    (resolve) => (t = setTimeout(() => resolve("timeout"), ms))
  );
  return Promise.race([p.finally(() => clearTimeout(t)), timer]);
}
