import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────
interface DeleteAccountPayload {
  name: string;
  phone: string;
  email: string;
  userType: "patient" | "driver" | "fleet_owner";
  reason?: string;
}

// ─── Validation helpers ───────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone: string): boolean {
  // Accepts Indian formats: +91XXXXXXXXXX, 91XXXXXXXXXX, 0XXXXXXXXXX, XXXXXXXXXX
  return /^(\+91|91|0)?[6-9]\d{9}$/.test(phone.replace(/[\s\-()]/g, ""));
}

const ALLOWED_USER_TYPES = ["patient", "driver", "fleet_owner"] as const;

// ─── Route Handler ────────────────────────────────────────────
export async function POST(req: NextRequest): Promise<NextResponse> {
  // 1. Parse body
  let body: Partial<DeleteAccountPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const { name, phone, email, userType, reason } = body;

  // 2. Validate required fields
  const errors: string[] = [];

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Full name is required (minimum 2 characters).");
  }
  if (!phone || !isValidPhone(phone)) {
    errors.push("A valid Indian mobile number is required.");
  }
  if (!email || !isValidEmail(email)) {
    errors.push("A valid email address is required.");
  }
  if (!userType || !ALLOWED_USER_TYPES.includes(userType as typeof ALLOWED_USER_TYPES[number])) {
    errors.push("Account type must be one of: patient, driver, fleet_owner.");
  }

  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, message: errors.join(" "), errors },
      { status: 422 }
    );
  }

  // 3. Sanitize inputs
  const sanitized: DeleteAccountPayload = {
    name: name!.trim().slice(0, 200),
    phone: phone!.trim().slice(0, 20),
    email: email!.trim().toLowerCase().slice(0, 200),
    userType: userType as DeleteAccountPayload["userType"],
    reason: reason ? reason.trim().slice(0, 1000) : undefined,
  };

  // 4. Timestamp the request
  const requestedAt = new Date().toISOString();

  // ─── INTEGRATION POINT ──────────────────────────────────────
  // TODO: Replace the console.log below with your actual backend logic:
  //
  // Option A — Prisma / MongoDB / Supabase:
  //   await db.deletionRequest.create({ data: { ...sanitized, requestedAt, status: "pending" } });
  //
  // Option B — Send admin notification email (Nodemailer / Resend / SendGrid):
  //   await sendAdminEmail({ to: "admin@sevalinkcare.com", subject: "New Account Deletion Request", body: sanitized });
  //
  // Option C — Mark user for deletion in auth system (Firebase / Supabase Auth):
  //   await admin.auth().updateUser(uid, { disabled: true });
  //   await scheduleUserDeletion(uid, { after: "72h" });
  //
  // Option D — Queue a deletion job (BullMQ / Inngest / Upstash):
  //   await deletionQueue.add("delete-user", { ...sanitized, requestedAt });
  // ────────────────────────────────────────────────────────────

  console.log("[SevaLink] Account deletion request received:", {
    ...sanitized,
    requestedAt,
    ip: req.headers.get("x-forwarded-for") ?? "unknown",
    userAgent: req.headers.get("user-agent") ?? "unknown",
  });

  // 5. Return success response
  return NextResponse.json(
    {
      success: true,
      message:
        "Your account deletion request has been received. You will be contacted within 24–72 business hours for identity verification before deletion proceeds.",
      requestedAt,
    },
    { status: 200 }
  );
}

// Block other methods
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { message: "Method Not Allowed. Use POST." },
    { status: 405 }
  );
}
