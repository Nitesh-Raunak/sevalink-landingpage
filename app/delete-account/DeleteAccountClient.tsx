"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  AlertTriangle,
  Trash2,
  Smartphone,
  Globe,
  Mail,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Send,
  User,
  Phone,
  AtSign,
  Users,
  MessageSquare,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────
type UserType = "patient" | "driver" | "fleet_owner" | "";
type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  phone: string;
  email: string;
  userType: UserType;
  reason: string;
}

// ─── Sub-components ───────────────────────────────────────────
function SectionBadge({ label }: { label: string }) {
  return (
    <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-red-600">
      <span className="block h-1.5 w-1.5 rounded-full bg-red-500" />
      {label}
    </p>
  );
}

function StepBadge({ n }: { n: number }) {
  return (
    <span className="flex-shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
      {n}
    </span>
  );
}

// ─── Client Component (all interactive state lives here) ──────
export default function DeleteAccountClient() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    userType: "",
    reason: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/delete-account-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          (data as { message?: string })?.message ??
            "Submission failed. Please try again."
        );
      }

      setStatus("success");
      setForm({ name: "", phone: "", email: "", userType: "", reason: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/40 via-white to-gray-50/60">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20 sm:pt-32 lg:pt-36 space-y-8">

        {/* ── 1. Hero Header ──────────────────────────────────── */}
        <section className="rounded-2xl border border-red-200/60 bg-white p-6 sm:p-10 shadow-sm">
          <SectionBadge label="Account Management" />
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Delete Your SevaLink Account
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600">
            This page lets you permanently remove your SevaLink account and
            associated personal data. You do <strong>not</strong> need to be
            logged in. Simply choose a method below — our team will process
            your request within <strong>24–72 hours</strong>.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            Publicly accessible · No login required · Google Play compliant
          </div>
        </section>

        {/* ── 2. Critical Warning ─────────────────────────────── */}
        <section
          className="rounded-2xl border border-red-300 bg-gradient-to-br from-red-50 to-rose-50 p-6 sm:p-8 shadow-sm"
          aria-label="Important deletion warning"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-red-100 p-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-red-800">
                ⚠️ Before You Proceed — Please Read Carefully
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm sm:text-base text-red-900/80 leading-relaxed">
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                  Account deletion is <strong>permanent and irreversible</strong>.
                  Once completed, it cannot be undone.
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                  All personal data (name, phone, email, location history, app
                  usage) will be permanently erased.
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                  Any active ambulance bookings or ongoing service subscriptions
                  will be cancelled immediately upon deletion.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                  Certain records (transactions, emergency logs) may be retained
                  for legal compliance — see Section 4 for details.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 3. Deletion Methods ──────────────────────────────── */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <SectionBadge label="How to Delete" />
          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Choose a Deletion Method
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            All three methods result in full account deletion. Choose whichever
            is most convenient.
          </p>

          <div className="mt-6 space-y-6">

            {/* Option 1 — In-App */}
            <div className="rounded-xl border border-red-100 bg-red-50/60 p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-red-600 p-2">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">
                    Option 1 — Delete via the App
                    <span className="ml-2 rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      Recommended
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Instant · Secure · In-app verification</p>
                </div>
              </div>
              <ol className="mt-3 space-y-2.5 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <StepBadge n={1} />
                  <span>Open the SevaLink app on your device.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <StepBadge n={2} />
                  <span>
                    Tap your{" "}
                    <code className="mx-1 rounded bg-white border border-gray-200 px-1.5 py-0.5 font-mono text-xs text-gray-800">
                      Profile
                    </code>{" "}
                    icon (bottom-right corner of the app).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <StepBadge n={3} />
                  <span>
                    Navigate to{" "}
                    <code className="mx-1 rounded bg-white border border-gray-200 px-1.5 py-0.5 font-mono text-xs text-gray-800">
                      Settings → Account → Delete Account
                    </code>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <StepBadge n={4} />
                  <span>
                    Enter your OTP or password to verify your identity, then
                    confirm deletion on the final screen.
                  </span>
                </li>
              </ol>
            </div>

            {/* Option 2 — Web Form */}
            <div
              className="rounded-xl border border-gray-200 bg-gray-50/70 p-5 sm:p-6"
              id="deletion-form"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-gray-800 p-2">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">
                    Option 2 — Submit a Request via This Page
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Fill the form below · Processed within 24–72 hours
                  </p>
                </div>
              </div>

              {/* Success State */}
              {status === "success" ? (
                <div className="mt-4 flex flex-col items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                  <h3 className="text-lg font-bold text-green-800">
                    Deletion Request Received
                  </h3>
                  <p className="max-w-md text-sm text-green-700 leading-relaxed">
                    Your account deletion request has been successfully submitted.
                    Our team will process it within{" "}
                    <strong>24–72 hours</strong>. You will receive a confirmation
                    at your registered email or phone number once deletion is
                    complete.
                  </p>
                  <p className="text-xs text-green-600">
                    If you do not hear back within 3 business days, please contact{" "}
                    <a
                      href="mailto:support@sevalinkcare.com"
                      className="underline font-medium hover:text-green-800 transition-colors"
                    >
                      support@sevalinkcare.com
                    </a>
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-4 space-y-4"
                  noValidate
                >
                  {/* Row: Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="del-name"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700 uppercase tracking-wide"
                      >
                        <User className="h-3.5 w-3.5 text-gray-400" />
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="del-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="e.g. Raj Mehta"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="del-phone"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700 uppercase tracking-wide"
                      >
                        <Phone className="h-3.5 w-3.5 text-gray-400" />
                        Registered Mobile <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="del-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
                      />
                    </div>
                  </div>

                  {/* Row: Email + User Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="del-email"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700 uppercase tracking-wide"
                      >
                        <AtSign className="h-3.5 w-3.5 text-gray-400" />
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="del-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="del-userType"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700 uppercase tracking-wide"
                      >
                        <Users className="h-3.5 w-3.5 text-gray-400" />
                        Account Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="del-userType"
                        name="userType"
                        required
                        value={form.userType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select account type…
                        </option>
                        <option value="patient">Patient / Family Member</option>
                        <option value="driver">Driver / Ambulance Crew</option>
                        <option value="fleet_owner">
                          Fleet Owner / Operator
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Reason */}
                  <div>
                    <label
                      htmlFor="del-reason"
                      className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700 uppercase tracking-wide"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-gray-400" />
                      Reason for Deletion{" "}
                      <span className="ml-1 font-normal text-gray-400 normal-case tracking-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="del-reason"
                      name="reason"
                      rows={3}
                      placeholder="Help us improve — tell us why you're leaving (optional)."
                      value={form.reason}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition resize-none"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
                    <input
                      id="del-consent"
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 flex-shrink-0 accent-red-600 cursor-pointer"
                    />
                    <label
                      htmlFor="del-consent"
                      className="text-xs text-amber-800 leading-relaxed cursor-pointer"
                    >
                      I understand that deleting my account is{" "}
                      <strong>permanent and irreversible</strong>. All personal
                      data will be erased and this action cannot be undone. I
                      confirm I want to proceed with account deletion.
                    </label>
                  </div>

                  {/* Error Message */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      <XCircle className="h-4 w-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    id="delete-account-submit-btn"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-red-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Submitting Request…
                      </>
                    ) : (
                      <>
                        <Trash2 className="h-4 w-4" />
                        Request Account Deletion
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-gray-400 leading-snug">
                    By submitting, you agree to our{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-red-600 underline underline-offset-2 hover:text-red-700 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    . We may contact you to verify your identity before
                    processing.
                  </p>
                </form>
              )}
            </div>

            {/* Option 3 — Email */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-slate-700 p-2">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">
                    Option 3 — Email Request
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Send from your registered email · Response within 72 hours
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Send an email from your{" "}
                <strong>registered email address</strong> to:
              </p>
              <a
                href="mailto:support@sevalinkcare.com?subject=Account%20Deletion%20Request&body=Full%20Name%3A%0ARegistered%20Mobile%3A%0AAccount%20Type%20(Patient%20%2F%20Driver%20%2F%20Fleet%20Owner)%3A%0AReason%20(optional)%3A"
                id="email-deletion-link"
                className="mt-3 inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-100 hover:border-red-300 transition-colors"
              >
                <Mail className="h-4 w-4" />
                support@sevalinkcare.com
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>
              <p className="mt-3 text-xs text-gray-500 leading-relaxed">
                Subject line:{" "}
                <code className="rounded bg-gray-100 border border-gray-200 px-1.5 py-0.5 font-mono text-gray-700">
                  Account Deletion Request
                </code>
                . Please include your full name, registered mobile number, and
                account type (Patient / Driver / Fleet Owner).
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. Data Transparency ─────────────────────────────── */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <SectionBadge label="Data Transparency" />
          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            What Happens to Your Data?
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            We are fully transparent about what is deleted and what is retained,
            and why.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Deleted Data */}
            <div className="rounded-xl border border-green-200 bg-green-50/60 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Trash2 className="h-5 w-5 text-green-700" />
                <h3 className="font-bold text-green-800 text-base">
                  ✅ Permanently Deleted
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-green-900/80">
                {[
                  "Full name, phone number, and email address",
                  "Profile photo and personal identifiers",
                  "Real-time and historical GPS / location data",
                  "App usage data and behaviour analytics",
                  "Device tokens and push notification identifiers",
                  "Saved home / work / hospital addresses",
                  "Family member profiles linked to your account",
                  "Chat history with support or drivers",
                  "In-app preferences and notification settings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Retained Data */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="h-5 w-5 text-amber-700" />
                <h3 className="font-bold text-amber-800 text-base">
                  ⚠️ Retained for Legal Compliance
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-amber-900/80">
                {[
                  {
                    item: "Transaction & payment records",
                    reason:
                      "Required by GST, Income Tax Act (minimum 5–7 years)",
                  },
                  {
                    item: "Emergency dispatch and service logs",
                    reason: "Required under healthcare / MCI regulations",
                  },
                  {
                    item: "Invoices and billing history",
                    reason: "Required for legal dispute resolution",
                  },
                  {
                    item: "Anonymised aggregate data",
                    reason:
                      "Used for improving platform safety (non-identifiable)",
                  },
                ].map(({ item, reason }) => (
                  <li key={item} className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                    <span>
                      <strong className="block">{item}</strong>
                      <span className="text-xs text-amber-700/80">{reason}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg border border-amber-300/70 bg-amber-100/60 px-3 py-2 text-xs text-amber-800 leading-relaxed">
                All retained data is stored securely, access-controlled, and
                will be purged after the legally mandated retention period
                expires.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. Timeline ──────────────────────────────────────── */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <SectionBadge label="Deletion Timeline" />
          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            What Happens After You Request
          </h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Send className="h-5 w-5 text-blue-600" />,
                bg: "bg-blue-50 border-blue-200",
                iconBg: "bg-blue-100",
                step: "Step 1",
                title: "Request Received",
                desc: "Immediately after submission, your request is logged and you receive an acknowledgement via email/SMS.",
              },
              {
                icon: <ShieldCheck className="h-5 w-5 text-amber-600" />,
                bg: "bg-amber-50 border-amber-200",
                iconBg: "bg-amber-100",
                step: "Step 2",
                title: "Identity Verified",
                desc: "Within 24 hours, we may contact you to verify identity — this protects against unauthorized deletion requests.",
              },
              {
                icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
                bg: "bg-green-50 border-green-200",
                iconBg: "bg-green-100",
                step: "Step 3",
                title: "Account Deleted",
                desc: "Within 24–72 hours of verification, your account and personal data are permanently deleted. Confirmation sent.",
              },
            ].map(({ icon, bg, iconBg, step, title, desc }) => (
              <div
                key={step}
                className={`rounded-xl border ${bg} p-5 flex flex-col gap-3`}
              >
                <div
                  className={`${iconBg} inline-flex h-10 w-10 items-center justify-center rounded-full`}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    {step}
                  </p>
                  <p className="font-bold text-gray-900 mt-0.5">{title}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
            <Clock className="h-4 w-4 shrink-0 text-blue-600" />
            <span>
              <strong>Processing time:</strong> 24–72 hours from identity
              verification. Business days only (Mon–Sat, 9 AM – 6 PM IST).
            </span>
          </div>
        </section>

        {/* ── 6. Security & Verification ───────────────────────── */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <SectionBadge label="Security" />
          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Identity Verification
          </h2>
          <div className="mt-4 space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              To protect our users from{" "}
              <strong>unauthorized account deletion</strong>, SevaLink may
              perform identity verification before processing any deletion
              request. This may include:
            </p>
            <ul className="ml-4 list-disc space-y-1.5 text-gray-600">
              <li>
                Sending an{" "}
                <strong>OTP to your registered mobile number</strong>
              </li>
              <li>
                Confirming details via your{" "}
                <strong>registered email address</strong>
              </li>
              <li>
                For Driver or Fleet Owner accounts, verifying your{" "}
                <strong>account ID or last transaction reference</strong>
              </li>
            </ul>
            <p className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-xs text-gray-500">
              SevaLink will <strong>never</strong> ask for your password over
              email or phone. If you receive a suspicious request claiming to be
              from SevaLink, please report it immediately to{" "}
              <a
                href="mailto:support@sevalinkcare.com"
                className="text-red-600 hover:text-red-700 underline-offset-2 hover:underline transition-colors"
              >
                support@sevalinkcare.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* ── 7. Privacy Policy Link ────────────────────────────── */}
        <section className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/60 to-rose-50/40 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <SectionBadge label="Legal" />
              <h2 className="mt-2 text-xl font-bold text-gray-900">
                Our Privacy Policy
              </h2>
              <p className="mt-1 text-sm text-gray-600 max-w-lg">
                For complete details on how we collect, use, store, and handle
                your personal data — including your rights under the Digital
                Personal Data Protection (DPDP) Act, 2023 — please read our
                full Privacy Policy.
              </p>
            </div>
            <Link
              href="/privacy-policy#user-rights-and-data-deletion"
              id="privacy-policy-link"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-bold text-red-700 shadow-sm hover:bg-red-50 hover:border-red-300 transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              Read Privacy Policy
            </Link>
          </div>
        </section>

        {/* ── 8. Support ────────────────────────────────────────── */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
          <SectionBadge label="Support" />
          <h2 className="mt-2 text-2xl font-bold text-gray-900">Need Help?</h2>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            If you have questions about the deletion process, want to pause your
            account instead, or are unsure about any step — our support team is
            here to help.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:support@sevalinkcare.com"
              id="support-email-link"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-all"
            >
              <Mail className="h-4 w-4" />
              support@sevalinkcare.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              Contact Support Page
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
