import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TOPIC_LABELS: Record<string, string> = {
  "press-brake-retrofit": "Lazer Safe press brake retrofit",
  "rear-guarding": "Press brake rear guarding",
  "light-curtain": "Light curtain / safety mat",
  "fencing": "Custom fencing or gate",
  "anti-restart": "Anti-restart control (GS series)",
  "assessment": "Plant safeguarding assessment",
  "service": "Service / spare parts",
  "other": "Something else",
};

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const machine = String(data.get("machine") || "").trim();
    const topic = String(data.get("topic") || "other").trim();
    const message = String(data.get("message") || "").trim();

    // Basic validation
    if (!name || !company || !email) {
      return NextResponse.json(
        { ok: false, error: "Please fill in name, company, and email." },
        { status: 400 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Honeypot — bots will fill this; humans won't see it
    if (data.get("website")) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json(
        { ok: false, error: "Email service not configured. Please call us at (281) 265-2832." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const topicLabel = TOPIC_LABELS[topic] || topic;

    const subject = `[Quote Request] ${topicLabel} — ${company}`;

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #25282A; max-width: 640px; margin: 0 auto; padding: 32px;">
        <div style="border-left: 4px solid #BA0C2F; padding-left: 16px; margin-bottom: 24px;">
          <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; color: #BA0C2F; font-weight: 600;">New Quote Request</div>
          <div style="font-size: 18px; font-weight: 700; margin-top: 4px;">${escapeHtml(topicLabel)}</div>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; width: 110px; color: #A7A8AA; font-size: 13px; vertical-align: top;">Name</td>
            <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A7A8AA; font-size: 13px; vertical-align: top;">Company</td>
            <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(company)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #A7A8AA; font-size: 13px; vertical-align: top;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #BA0C2F;">${escapeHtml(email)}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding: 8px 0; color: #A7A8AA; font-size: 13px; vertical-align: top;">Phone</td>
            <td style="padding: 8px 0;"><a href="tel:${escapeHtml(phone)}" style="color: #BA0C2F;">${escapeHtml(phone)}</a></td>
          </tr>` : ""}
          ${machine ? `<tr>
            <td style="padding: 8px 0; color: #A7A8AA; font-size: 13px; vertical-align: top;">Machine</td>
            <td style="padding: 8px 0;">${escapeHtml(machine)}</td>
          </tr>` : ""}
        </table>

        ${message ? `<div style="border-top: 1px solid #eee; padding-top: 16px;">
          <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; color: #A7A8AA; margin-bottom: 8px;">Message</div>
          <div style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</div>
        </div>` : ""}

        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #A7A8AA;">
          Sent from guardomation.com contact form · Reply directly to email this lead.
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: "Guardomation Web <web@guardomation.com>",
      to: ["info@guardomation.com"],
      replyTo: email,
      subject,
      html,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { ok: false, error: "Couldn't send the email. Please call us at (281) 265-2832." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please call us at (281) 265-2832." },
      { status: 500 },
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
