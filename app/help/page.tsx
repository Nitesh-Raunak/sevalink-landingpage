import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function HelpPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">Support</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Help Center</h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-700">
            Find quick answers on booking, payments, ambulance tracking, cancellations, and provider details.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>Booking and confirmation support</li>
            <li>Live tracking and ETA updates</li>
            <li>Homecare and appointment assistance</li>
            <li>Account and profile help</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
