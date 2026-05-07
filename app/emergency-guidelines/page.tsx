import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Emergency Guidelines — SevaLink",
  description:
    "Steps to follow when booking a SevaLink ambulance. Share your location, keep patient details ready, and follow responder instructions.",
};

export default function EmergencyGuidelinesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 space-y-6">

        {/* Header */}
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">Safety</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Emergency Guidelines</h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700">
            Stay calm. These steps help you get the right help faster — whether you need an
            ambulance, homecare, or hospital appointment through SevaLink.
          </p>
          <p className="mt-3 text-xs text-gray-400">
            This page provides general guidance only. It is not a substitute for professional
            medical advice. In a life-threatening emergency, call <strong>112</strong> immediately.
          </p>
        </section>

        {/* Section 1: Ambulance */}
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">Ambulance Booking</p>
          <h2 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900">When You Need an Ambulance</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            <li>
              <strong>Call 112 first</strong> if the situation is immediately life-threatening — do not wait.
            </li>
            <li>
              <strong>Open the SevaLink app</strong> and tap "Book Ambulance". Select the type you need
              (BLS, ALS, ICU on Wheels, Neonatal, or Patient Transport).
            </li>
            <li>
              <strong>Share your exact location</strong> — use the GPS pin or type the address with a nearby
              landmark (building name, landmark, street name).
            </li>
            <li>
              <strong>Keep patient details ready:</strong> name, age, condition, any known allergies or
              current medications.
            </li>
            <li>
              <strong>Stay on the line</strong> and follow instructions from the dispatch team until the
              ambulance arrives.
            </li>
            <li>
              <strong>Clear the path</strong> — make sure someone is at the entrance to guide the crew in.
              Move vehicles blocking access if safe to do so.
            </li>
          </ol>
        </section>

        {/* Section 2: Homecare */}
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">Homecare</p>
          <h2 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900">Preparing for a Homecare Visit</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            <li>
              <strong>Book in advance</strong> through the SevaLink app. Specify the care type (nurse,
              physiotherapist, attendant) and duration needed.
            </li>
            <li>
              <strong>Keep medical records available:</strong> discharge summary, prescription, doctor notes,
              and any test reports.
            </li>
            <li>
              <strong>Prepare the patient's space</strong> — ensure clean surroundings and easy access to
              the patient's bed or care area.
            </li>
            <li>
              <strong>Verify the caregiver's ID</strong> on arrival against the SevaLink booking confirmation.
            </li>
            <li>
              If anything feels wrong, <strong>contact SevaLink support immediately</strong> via the app
              or email.
            </li>
          </ol>
        </section>

        {/* Section 3: General Safety */}
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">General</p>
          <h2 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900">General Safety Tips</h2>
          <ul className="mt-4 list-disc pl-5 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            <li>Save <strong>112</strong> (national emergency) and the SevaLink support number in your phone.</li>
            <li>Keep a basic first-aid kit at home — bandages, antiseptic, gloves, ORS sachets.</li>
            <li>Note your blood group and major allergies somewhere easily accessible for responders.</li>
            <li>Do not move a patient with a suspected spinal injury unless they are in immediate danger.</li>
            <li>For cardiac arrests, begin CPR if trained — 30 chest compressions to 2 rescue breaths.</li>
            <li>For choking, perform the Heimlich manoeuvre if the person cannot cough or speak.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-8 shadow-sm">
          <p className="text-base font-semibold text-gray-900">Need help right now?</p>
          <p className="mt-1 text-sm text-gray-600">
            Book through SevaLink or reach our support team directly.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Book a Service
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-white"
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
