"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Ambulance, HousePlus } from "lucide-react";

export default function PatientServicePage() {
  const router = useRouter();

  const handleBookAmbulance = () => {
    router.push("/booking/ambulance");
  };

  const handleBookHomecareOrHospital = () => {
    router.push("/booking/homecare");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="rounded-3xl border border-[#DC262625] bg-gradient-to-br from-white/90 to-red-50/70 p-7 shadow-[0_12px_40px_rgba(220,38,38,0.08)] sm:p-12">
          <p className="inline-flex rounded-full bg-red-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-red-600">
            Who We Serve
          </p>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Patient Services
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg">
            Fast and transparent emergency support for patients and families.
            Choose the service you need and continue with a clean, guided booking flow.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
            <button
              type="button"
              onClick={handleBookAmbulance}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg"
            >
              <Ambulance className="h-4 w-4" />
              Book Ambulance
            </button>

            <button
              type="button"
              onClick={handleBookHomecareOrHospital}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-50"
            >
              <HousePlus className="h-4 w-4" />
              Book Homecare / Hospital
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
