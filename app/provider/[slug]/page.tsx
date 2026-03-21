import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

type ProviderDetail = {
  title: string;
  summary: string;
};

const providerDetails: Record<string, ProviderDetail> = {
  hospital: {
    title: "Hospital",
    summary:
      "Register your hospital to receive emergency patient requests, manage incoming ambulances, and allocate resources efficiently.",
  },
  driver: {
    title: "Individual Driver",
    summary:
      "Join as an independent ambulance driver, accept nearby emergency requests, and earn by providing fast response services.",
  },
  fleet: {
    title: "Fleet Owner",
    summary:
      "Manage multiple ambulances and drivers, accept fallback emergency requests, and grow your ambulance network.",
  },
  homecare: {
    title: "Homecare",
    summary:
      "Get professional healthcare services at home including nursing, elderly care, and medical assistance. Our homecare service bridges the gap between hospital and home, ensuring you or your loved ones receive the best care in a familiar environment.",
  },
};

export default async function ProviderDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = providerDetails[slug];

  if (!detail) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />

      <main className="landing-section-spacing">
        <section className="mx-auto max-w-4xl rounded-3xl border border-orange-200/80 bg-gradient-to-br from-white via-[#fff7ee] to-[#ffe8d0] p-8 shadow-[0_12px_32px_rgba(192,110,60,0.12)] sm:p-12">
          <p className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-red-600">
            Provider Details
          </p>
          <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl">{detail.title}</h1>
          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">{detail.summary}</p>

          <Link
            href="/provider"
            className="mt-8 inline-flex rounded-2xl bg-gray-900 px-5 py-3 text-sm font-black uppercase tracking-wider text-white transition-colors duration-300 hover:bg-red-600"
          >
            Back to Providers
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
