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
 * Forwards lead payload to Google Sheets Webhook
 * (Google Sheets App Script handles sheet storage and email notification)
 */
export async function forwardToGoogleSheets(lead: LeadData): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("[Google Sheets] GOOGLE_SHEET_WEBHOOK_URL is not set. Skipping sheet forwarding.");
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
