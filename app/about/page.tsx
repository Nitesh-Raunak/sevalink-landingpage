import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36">
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">About</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">About SevaLink</h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-700">
            SevaLink is a real-time emergency response platform designed to connect patients, ambulances,
            hospitals, and homecare providers in one fast and reliable network.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Our mission is simple: reduce emergency response delays and make medical coordination seamless
            for families across India.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
