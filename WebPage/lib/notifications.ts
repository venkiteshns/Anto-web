import nodemailer from "nodemailer";

export interface LeadData {
  formType: "Book A Visit" | "Exclusive Details Enquiry" | string;
  name: string;
  phone: string;
  email?: string;
  date?: string;
  config?: string;
  typology?: string;
  message?: string;
  submittedAt?: string;
  ip?: string;
  userAgent?: string;
}

/**
 * Forwards lead payload asynchronously to Google Sheets Webhook
 */
export async function forwardToGoogleSheets(lead: LeadData): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log("[Google Sheets] GOOGLE_SHEET_WEBHOOK_URL is not set. Skipping sheet forwarding.");
    return false;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!res.ok) {
      console.error(`[Google Sheets] Webhook responded with status ${res.status}`);
      return false;
    }

    const text = await res.text();
    let result: { status?: string; message?: string } | null = null;
    try {
      result = JSON.parse(text);
    } catch {
      // response might be plain text or HTML redirect
    }

    if (result && result.status === "error") {
      console.error(`[Google Sheets] Webhook returned error from Apps Script: ${result.message}`);
      return false;
    }

    console.log("[Google Sheets] Lead successfully forwarded to Google Sheet.");
    return true;
  } catch (error) {
    console.error("[Google Sheets] Error forwarding to Google Sheet:", error);
    return false;
  }
}

/**
 * Sends an email notification to the estate team if SMTP credentials are provided
 */
export async function sendEmailAlert(lead: LeadData): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.NOTIFICATION_EMAIL || "essentials.nextfootstep@gmail.com";

  if (!host || !user || !pass) {
    // If SMTP is not configured, Google Apps Script can also handle emailing directly
    console.log("[Email Alert] SMTP credentials not set in .env.local. (Google Apps Script can also handle emailing directly).");
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user, pass },
    });

    const isBookVisit = lead.formType === "Book A Visit";
    const subject = `[New Florenne Lead] ${lead.formType} — ${lead.name} (${lead.phone})`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E6E3DC; border-radius: 12px; overflow: hidden; background-color: #FAF8F5;">
        <div style="background-color: #171B21; padding: 24px; color: #FFFFFF; text-align: center;">
          <p style="text-transform: uppercase; letter-spacing: 0.2em; font-size: 11px; margin: 0; color: #A99362;">Godrej Properties Florenne</p>
          <h2 style="margin: 8px 0 0 0; font-weight: 300; font-size: 22px;">New Lead Notification</h2>
        </div>
        <div style="padding: 28px; background-color: #FFFFFF;">
          <p style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.16em; color: #A99362; font-weight: bold; margin-top: 0;">
            ${lead.formType}
          </p>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #73716C; width: 35%;">Full Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #171B21; font-weight: bold;">${lead.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #73716C;">Phone Number:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #171B21; font-weight: bold;">
                <a href="tel:${lead.phone}" style="color: #A99362; text-decoration: none;">${lead.phone}</a>
              </td>
            </tr>
            ${lead.email ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #73716C;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #171B21;">
                <a href="mailto:${lead.email}" style="color: #A99362; text-decoration: none;">${lead.email}</a>
              </td>
            </tr>
            ` : ""}
            ${isBookVisit ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #73716C;">Preferred Date:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #171B21; font-weight: bold;">${lead.date || "-"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #73716C;">Configuration:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #171B21;">${lead.config || "-"}</td>
            </tr>
            ` : `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #73716C;">Interested Typology:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #171B21; font-weight: bold;">${lead.typology || "-"}</td>
            </tr>
            ${lead.message ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #73716C; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #F0ECE4; color: #171B21; white-space: pre-wrap;">${lead.message}</td>
            </tr>
            ` : ""}
            `}
            <tr>
              <td style="padding: 10px 0; color: #73716C;">Submitted At:</td>
              <td style="padding: 10px 0; color: #73716C;">${lead.submittedAt || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
            </tr>
          </table>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Godrej Florenne Concierge" <${user}>`,
      to,
      subject,
      html,
    });

    console.log(`[Email Alert] Notification email sent successfully to ${to}`);
    return true;
  } catch (error) {
    console.error("[Email Alert] Error sending email:", error);
    return false;
  }
}
