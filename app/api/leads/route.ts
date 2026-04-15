import { NextRequest } from "next/server";
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
  let parsed: z.infer<typeof Body>;
  try {
    parsed = Body.parse(await req.json());
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid body" }), {
      status: 400,
    });
  }

  // Without integrations, just acknowledge the request
  console.log("Received new lead:", parsed);

  return new Response(
    JSON.stringify({
      ok: true,
      message: "Lead received",
    }),
    { status: 200 },
  );
}
