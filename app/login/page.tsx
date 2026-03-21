"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSendOtp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedPhone = phone.trim();
    if (!trimmedPhone) {
      alert("Please enter a phone number.");
      return;
    }

    const normalizedPhone = trimmedPhone.startsWith("+")
      ? trimmedPhone
      : `+91${trimmedPhone.replace(/\D/g, "")}`;

    setLoading(true);

    try {
      // Attempt to send OTP via API
      const response = await fetch("https://sevalink-backend-api.onrender.com/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: normalizedPhone }),
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json") ? await response.json() : null;

      if (response.ok) {
        console.log("✓ OTP sent successfully:", data?.message);
      } else {
        console.warn("⚠ API error:", data?.message || response.statusText);
      }
    } catch (error) {
      // API call failed, but continue anyway
      console.error("✗ Failed to send OTP:", error);
    }

    // Always save phone and redirect, regardless of API result
    localStorage.setItem("otp_phone", normalizedPhone);
    router.push("/verify-otp");
    setLoading(false);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="rounded-3xl border border-[#DC262625] bg-white p-7 shadow-sm sm:p-10">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">Login</h1>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">Enter your phone number to continue.</p>

          <form onSubmit={handleSendOtp} className="mt-6 space-y-4">
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                placeholder="Enter phone number"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
