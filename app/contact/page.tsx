import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <section className="rounded-2xl border border-[#DC262620] bg-white/70 p-6 sm:p-10 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">Contact</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-700">
            We are here to help you 24/7. Reach out to us for any emergency support, queries or assistance.
          </p>

          <p className="mt-6 text-base leading-relaxed text-gray-700">
            SevaLink is committed to providing fast, reliable and transparent emergency medical coordination.
            Whether you need immediate assistance or have general queries, our support team is always available.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="space-y-5 text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Email:</span>{" "}
                <a href="mailto:support@sevalink.com" className="text-red-600 hover:text-red-700 transition-colors underline-offset-2 hover:underline">
                  support@sevalink.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-900">Phone:</span>{" "}
                <a href="tel:+91XXXXXXXXXX" className="text-red-600 hover:text-red-700 transition-colors underline-offset-2 hover:underline">
                  +91 XXXXXXXXXX
                </a>
              </p>
              <p><span className="font-semibold text-gray-900">Hours:</span> 24/7 Emergency Support</p>
              <p><span className="font-semibold text-gray-900">Location:</span> India</p>
            </div>

            <form className="space-y-4" action="#" method="post">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-red-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
