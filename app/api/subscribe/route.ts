import { NextResponse } from "next/server";
import { google } from "googleapis";

const SHEET_RANGE = "Sheet1!A:B";

function isValidEmail(email: string): boolean {
  if (!email) return false;
  const trimmed = email.trim();
  // Basic email pattern; server-side so we keep it simple but stricter than client
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(trimmed);
}

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };

    if (!isValidEmail(email ?? "")) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      return NextResponse.json(
        {
          success: false,
          error: "Server is not configured correctly.",
        },
        { status: 500 }
      );
    }

    const jwt = new google.auth.JWT({
      email: clientEmail,
      key: privateKey.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth: jwt });

    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: SHEET_RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, timestamp]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving email to Google Sheets:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

