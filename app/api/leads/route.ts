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

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "";
  const ua = req.headers.get("user-agent") ?? "";
  const site = process.env.NEXT_PUBLIC_SITE_NAME || "Arfah Ali";

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

  const insertP = createLeadInsert(parsed, ip, ua);
  const emailP = createLeadEmail(subj, text, parsed.email);

  const settled = await Promise.allSettled(
    [insertP, emailP].filter(Boolean) as Promise<unknown>[]
  );

  const dbRes = settled[0];
  if (insertP && dbRes?.status === "rejected") {
    return new Response(
      JSON.stringify({ ok: false, error: "DB insert failed" }),
      { status: 500 }
    );
  }

  if (insertP && dbRes?.status === "fulfilled") {
    const dbVal = dbRes.value as { error?: { message?: string } | null };
    if (dbVal?.error) {
      return new Response(
        JSON.stringify({ ok: false, error: dbVal.error.message }),
        { status: 500 }
      );
    }
  }

  return new Response(
    JSON.stringify({
      ok: true,
      integrations: {
        database: Boolean(insertP),
        email: Boolean(emailP),
      },
    }),
    { status: 200 }
  );
}

// Promise timeout helper
function withTimeout<T>(p: Promise<T>, ms: number): Promise<T | "timeout"> {
  let t: ReturnType<typeof setTimeout>;
  const timer = new Promise<"timeout">(
    (resolve) => (t = setTimeout(() => resolve("timeout"), ms))
  );
  return Promise.race([p.finally(() => clearTimeout(t)), timer]);
}

function createLeadInsert(
  parsed: z.infer<typeof Body>,
  ip: string,
  ua: string
) {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) return null;

  const supabase = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });

  return supabase.from("leads").insert({
    name: parsed.name,
    email: parsed.email,
    dealership: parsed.dealership,
    message: parsed.message,
    utm: parsed.utm ?? null,
    ip,
    user_agent: ua,
  });
}

function createLeadEmail(subject: string, text: string, replyTo: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_NOTIFY_FROM;
  const to = process.env.LEAD_NOTIFY_TO;

  if (!apiKey || !from || !to) return null;

  const resend = new Resend(apiKey);

  return withTimeout(
    resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo,
    }),
    800
  );
}
