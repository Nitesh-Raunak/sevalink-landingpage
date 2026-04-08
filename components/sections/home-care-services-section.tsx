import Link from "next/link";
import { Stethoscope, HeartHandshake, HousePlus, Activity } from "lucide-react";

const HOMECARE_URL = process.env.NEXT_PUBLIC_HOMECARE_URL ?? "https://homecare.sevalinkcare.com";

const homeCareServices = [
  {
    title: "Nurse at Home",
    description: "Skilled nursing support at home for daily care, medication assistance, and recovery monitoring.",
    icon: Stethoscope,
  },
  {
    title: "Elder Care",
    description: "Compassionate elderly care focused on comfort, safety, mobility support, and routine wellbeing.",
    icon: HeartHandshake,
  },
  {
    title: "Doctor Home Visit",
    description: "Verified doctors visit your home for consultation, diagnosis, and treatment guidance.",
    icon: HousePlus,
  },
  {
    title: "Post-Surgery Care",
    description: "Structured post-operative care with wound care support, vitals tracking, and follow-up assistance.",
    icon: Activity,
  },
];

export function HomeCareServicesSection() {
  return (
    <section className="landing-section-spacing bg-gradient-to-b from-emerald-50/80 via-green-50/70 to-emerald-100/40">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 inline-block rounded-full border border-emerald-300 bg-emerald-100 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-700">
            HOME CARE SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Professional <span className="text-emerald-700">Care</span> at Home
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            Quality home nursing services, elderly care, and doctor visits - delivered by verified professionals to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {homeCareServices.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-xl border border-emerald-100/80 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{service.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={HOMECARE_URL}
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-7 py-3 text-sm font-bold !text-white visited:!text-white hover:!text-white active:!text-white shadow-md transition-colors duration-200 hover:bg-emerald-700"
          >
            Book Home Care Now
          </a>
        </div>
      </div>
    </section>
  );
}
