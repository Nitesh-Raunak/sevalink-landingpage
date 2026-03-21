import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type ServiceFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ServicePageTemplateProps = {
  badge: string;
  title: string;
  description: string;
  heroCtaText: string;
  heroCtaHref: string;
  features: ServiceFeature[];
};

export function ServicePageTemplate({
  badge,
  title,
  description,
  heroCtaText,
  heroCtaHref,
  features,
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 sm:space-y-14">
        <section className="rounded-3xl border border-[#DC262625] bg-gradient-to-br from-white/90 to-red-50/70 p-7 sm:p-12 shadow-[0_12px_40px_rgba(220,38,38,0.08)]">
          <p className="inline-flex rounded-full bg-red-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-red-600">
            {badge}
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
            {title}
          </h1>

          <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-gray-700">
            {description}
          </p>

          <div className="mt-8">
            <Link
              href={heroCtaHref}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {heroCtaText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-[#DC262620] bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-gray-700">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-[#DC262630] bg-white p-7 sm:p-10 shadow-sm text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Need urgent help?</h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700">
            Get emergency support in minutes with verified providers and real-time coordination.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/services/emergency-ambulance"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book Ambulance
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
