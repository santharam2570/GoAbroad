import { NextResponse } from "next/server";

const required = ["name", "qualification", "destination", "goal", "intake", "funding", "contact"] as const;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  for (const key of required) {
    const value = body[key];
    if (typeof value !== "string" || !value.trim() || value.length > 200) {
      return NextResponse.json({ ok: false, error: `Missing or invalid field: ${key}` }, { status: 422 });
    }
  }
  if (body.consent !== true) {
    return NextResponse.json({ ok: false, error: "Consent is required" }, { status: 422 });
  }

  // TODO: forward to the GoAbroad CRM / lead management system before going live.
  return NextResponse.json({ ok: true, stage: "Enquiry received" });
}
