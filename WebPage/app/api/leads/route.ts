import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import {
  forwardToGoogleSheets,
  sendEmailAlert,
  LeadData,
} from "@/lib/notifications";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      date,
      config,
      typology,
      message,
      formType = "General Enquiry",
    } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone Number are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date();
    const formattedDateString = timestamp.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const leadData: LeadData = {
      formType,
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: email ? String(email).trim() : undefined,
      date: date ? String(date).trim() : undefined,
      config: config ? String(config).trim() : undefined,
      typology: typology ? String(typology).trim() : undefined,
      message: message ? String(message).trim() : undefined,
      submittedAt: formattedDateString,
    };

    let mongoId: string | null = null;
    let mongoSaved = false;

    // 1. Save to MongoDB Atlas
    try {
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB || "godrej_florenne");
      const collection = db.collection("leads");

      const docToInsert = {
        ...leadData,
        createdAt: timestamp,
        status: "new",
        source: "website",
      };

      const result = await collection.insertOne(docToInsert);
      mongoId = result.insertedId.toString();
      mongoSaved = true;
      console.log(`[MongoDB] Lead saved with ID: ${mongoId}`);
    } catch (mongoError: unknown) {
      const msg = mongoError instanceof Error ? mongoError.message : String(mongoError);
      console.error("[MongoDB] Failed to save lead to database:", msg);
      if (msg.includes("SSL alert number 80") || msg.includes("tlsv1 alert internal error")) {
        console.error(
          "[MongoDB IP Access Notice] Atlas dropped connection (SSL alert 80). Your current IP is not in MongoDB Atlas Network Access whitelist. Please add your IP or 0.0.0.0/0 in Atlas Security -> Network Access."
        );
      }
      // We log but continue with background forwarding so lead isn't lost if DB has IP restrictions
    }

    // 2. Background Dispatch: Send to Google Sheets and Email (Non-blocking)
    Promise.allSettled([
      forwardToGoogleSheets(leadData),
      sendEmailAlert(leadData),
    ]).then((results) => {
      console.log("[Background Dispatch] Finished dispatch tasks:", results);
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        mongoSaved,
        id: mongoId,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("[API/Leads] Request processing failed:", errorMsg);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
