import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function EmergencyGuidelinesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">Safety</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Emergency Guidelines</h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-700">
            Stay calm, share accurate location details, and keep the patient information ready before assistance arrives.
          </p>
          <ol className="mt-6 list-decimal pl-5 space-y-3 text-gray-700">
            <li>Call local emergency helpline if condition is critical.</li>
            <li>Share exact pickup location and nearby landmarks.</li>
            <li>Keep essential patient details and medication history ready.</li>
            <li>Follow responder instructions until medical help reaches.</li>
          </ol>
        </section>
      </main>
      <Footer />
    </div>
  );
}
