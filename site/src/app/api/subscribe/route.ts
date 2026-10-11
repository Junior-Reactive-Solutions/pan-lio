import { NextResponse } from "next/server";

const INTERESTS = ["courses", "coaching", "both"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);
  if (!apiKey || !listId) {
    return NextResponse.json({ error: "Sign-ups are not switched on yet." }, { status: 503 });
  }

  let body: { email?: unknown; interest?: unknown; website?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Hidden field that real visitors never fill in; bots usually do.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const interest = INTERESTS.find((i) => i === body.interest) ?? "both";
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: { "api-key": apiKey, "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      email,
      listIds: [listId],
      attributes: { INTEREST: interest },
      updateEnabled: true,
    }),
  });

  if (!res.ok && res.status !== 204) {
    console.error("Brevo subscribe failed", res.status, await res.text());
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
