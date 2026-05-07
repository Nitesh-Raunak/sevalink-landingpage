import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Help Center — SevaLink",
  description:
    "Find answers about ambulance booking, live tracking, homecare appointments, payments, and cancellations on SevaLink.",
};

const faqs: { section: string; items: { q: string; a: string }[] }[] = [
  {
    section: "Booking & Confirmation",
    items: [
      {
        q: "How do I book an ambulance on SevaLink?",
        a: "Open the SevaLink app, tap 'Book Ambulance', select the ambulance type (BLS, ALS, ICU on Wheels, Neonatal, or Patient Transport), share your location, and confirm. You will receive a booking confirmation with the crew details and ETA.",
      },
      {
        q: "How quickly will an ambulance arrive?",
        a: "Response time depends on your location and traffic. SevaLink dispatches the nearest available unit. You can track the ambulance live on the map after booking.",
      },
      {
        q: "Can I book a homecare service in advance?",
        a: "Yes. Open the app, go to 'Homecare', select the care type and date/time, and confirm. Same-day and scheduled bookings are both supported.",
      },
      {
        q: "How do I book a hospital appointment?",
        a: "Go to 'Hospital Appointments' in the app, choose a partner hospital and available slot, fill in patient details, and confirm. You will receive a booking reference.",
      },
    ],
  },
  {
    section: "Tracking & Status",
    items: [
      {
        q: "Can I track my ambulance in real time?",
        a: "Yes. Once a booking is confirmed, the app shows a live map with the ambulance's current location and estimated arrival time.",
      },
      {
        q: "I booked but have not received a confirmation — what should I do?",
        a: "Check your internet connection and refresh the app. If the issue persists, contact SevaLink support at support@sevalinkcare.com with your booking details.",
      },
    ],
  },
  {
    section: "Cancellations & Changes",
    items: [
      {
        q: "Can I cancel a booking?",
        a: "Yes. Go to 'My Bookings' in the app and tap 'Cancel'. Cancellation policies vary by service type — check the booking screen for details before confirming.",
      },
      {
        q: "Can I reschedule a homecare appointment?",
        a: "Yes, scheduled homecare bookings can be rescheduled up to 2 hours before the appointment time via the app.",
      },
    ],
  },
  {
    section: "Payments",
    items: [
      {
        q: "What payment methods are accepted?",
        a: "SevaLink accepts UPI, debit/credit cards, and net banking. Cash payments may be available for select services — check at the time of booking.",
      },
      {
        q: "Will I receive a receipt or invoice?",
        a: "Yes. A payment receipt is sent to your registered email and is also available under 'My Bookings' in the app.",
      },
    ],
  },
  {
    section: "Account & Profile",
    items: [
      {
        q: "How do I update my phone number or address?",
        a: "Go to 'Profile' in the app and tap 'Edit'. Update your details and save. Phone number changes require OTP verification.",
      },
      {
        q: "I cannot log in to my account — what should I do?",
        a: "Try resetting your password via 'Forgot Password' on the login screen. If the problem continues, contact support@sevalinkcare.com.",
      },
    ],
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 space-y-6">

        {/* Header */}
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">Support</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Help Center</h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700">
            Quick answers to common questions about booking, tracking, payments, and your account.
          </p>
        </section>

        {/* FAQ Sections */}
        {faqs.map((group) => (
          <section
            key={group.section}
            className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-8 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              {group.section}
            </p>
            <div className="mt-4 space-y-5">
              {group.items.map((item) => (
                <div key={item.q}>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.q}</p>
                  <p className="mt-1 text-sm sm:text-base leading-relaxed text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Contact fallback */}
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-8 shadow-sm">
          <p className="font-semibold text-gray-900">Still need help?</p>
          <p className="mt-1 text-sm text-gray-600">
            Our support team is available 24/7. You can also check the{" "}
            <Link
              href="/emergency-guidelines"
              className="text-red-600 hover:text-red-700 underline-offset-2 hover:underline transition-colors"
            >
              Emergency Guidelines
            </Link>{" "}
            for urgent situations.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Contact Support
            </Link>
            <a
              href="mailto:support@sevalinkcare.com"
              className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-white"
            >
              support@sevalinkcare.com
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
