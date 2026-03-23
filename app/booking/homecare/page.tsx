"use client";

import { FormEvent, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function HomecareBookingPage() {
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [serviceAddress, setServiceAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleBookingSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    setIsSubmitting(true);

    try {
      const response = await fetch("https://sevalink-backend-api.onrender.com/booking/homecare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Removed Authorization header as per requirements to remove authentication
        },
        body: JSON.stringify({
          patientName: patientName.trim(),
          patientPhone: patientPhone.trim(),
          serviceAddress: serviceAddress.trim(),
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json") ? await response.json() : null;

      if (!response.ok) {
        const apiError = data?.message || "Unable to submit booking. Please try again.";
        setErrorMessage(apiError);
        alert(apiError);
        return;
      }

      const successText = data?.message || "Booking successful";
      setSuccessMessage(successText);
      alert("Booking successful");
      setPatientName("");
      setPatientPhone("");
      setServiceAddress("");
    } catch {
      setErrorMessage("Network error. Please try again.");
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="rounded-3xl border border-[#DC262625] bg-white p-7 shadow-sm sm:p-10">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">Book Homecare</h1>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Fill in basic details to continue your homecare/hospital booking.
          </p>

          <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleBookingSubmit}>
            <div className="sm:col-span-1">
              <label htmlFor="patient-name" className="mb-1.5 block text-sm font-semibold text-gray-700">
                Patient Name
              </label>
              <input
                id="patient-name"
                type="text"
                required
                value={patientName}
                onChange={(event) => setPatientName(event.target.value)}
                className="h-11 w-full rounded-xl border border-gray-300 px-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                placeholder="Enter patient name"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="patient-phone" className="mb-1.5 block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                id="patient-phone"
                type="tel"
                required
                value={patientPhone}
                onChange={(event) => setPatientPhone(event.target.value)}
                className="h-11 w-full rounded-xl border border-gray-300 px-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                placeholder="Enter phone number"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="service-address" className="mb-1.5 block text-sm font-semibold text-gray-700">
                Service Address
              </label>
              <input
                id="service-address"
                type="text"
                required
                value={serviceAddress}
                onChange={(event) => setServiceAddress(event.target.value)}
                className="h-11 w-full rounded-xl border border-gray-300 px-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                placeholder="Enter service address"
              />
            </div>

            {successMessage ? (
              <p className="sm:col-span-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
                {successMessage}
              </p>
            ) : null}

            {errorMessage ? (
              <p className="sm:col-span-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                {errorMessage}
              </p>
            ) : null}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Continue"}
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
