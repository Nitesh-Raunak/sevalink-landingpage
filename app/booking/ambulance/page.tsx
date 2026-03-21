import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AmbulanceBookingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <Header />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="rounded-3xl border border-[#DC262625] bg-white p-7 shadow-sm sm:p-10">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">Book Ambulance</h1>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Fill in basic details to continue your ambulance booking.
          </p>

          <form className="mt-6 grid gap-4 sm:grid-cols-2" action="#" method="post">
            <div className="sm:col-span-1">
              <label htmlFor="patient-name" className="mb-1.5 block text-sm font-semibold text-gray-700">
                Patient Name
              </label>
              <input
                id="patient-name"
                type="text"
                className="h-11 w-full rounded-xl border border-gray-300 px-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                placeholder="Enter patient name"
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="patient-phone" className="mb-1.5 block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                id="patient-phone"
                type="tel"
                className="h-11 w-full rounded-xl border border-gray-300 px-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                placeholder="Enter phone number"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="pickup-location" className="mb-1.5 block text-sm font-semibold text-gray-700">
                Pickup Location
              </label>
              <input
                id="pickup-location"
                type="text"
                className="h-11 w-full rounded-xl border border-gray-300 px-3 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
                placeholder="Enter pickup location"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Continue
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
