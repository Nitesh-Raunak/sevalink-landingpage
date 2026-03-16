"use client";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";

type TestimonialItem = CardStackItem & {
  city: string;
  rating: number;
  initials: string;
};

const reviews: TestimonialItem[] = [
  {
    id: 1,
    title: "Rahul Sharma",
    city: "Ahmedabad",
    description:
      "Saved my father's life. The tracking link kept our family calm.",
    rating: 5,
    initials: "R",
  },
  {
    id: 2,
    title: "Priya Verma",
    city: "Delhi",
    description:
      "Fastest response I've seen in Delhi. Driver was very professional.",
    rating: 5,
    initials: "P",
  },
  {
    id: 3,
    title: "Suresh Gupta",
    city: "Mumbai",
    description: "Transparent pricing is a game changer. Highly recommend.",
    rating: 5,
    initials: "S",
  },
  {
    id: 4,
    title: "Ananya Iyer",
    city: "Bengaluru",
    description:
      "Booking process was super smooth. Ambulance arrived in under 9 minutes.",
    rating: 5,
    initials: "A",
  },
  {
    id: 5,
    title: "Mohit Bansal",
    city: "Jaipur",
    description:
      "Live tracking and quick updates really helped us stay calm during emergency.",
    rating: 5,
    initials: "M",
  },
  {
    id: 6,
    title: "Sneha Kulkarni",
    city: "Pune",
    description:
      "Paramedic team was skilled and supportive. Truly reliable emergency service.",
    rating: 5,
    initials: "S",
  },
  {
    id: 7,
    title: "Arvind Mehta",
    city: "Delhi",
    description:
      "No hidden charges and clear fare estimate. Exactly what healthcare transport needs.",
    rating: 5,
    initials: "A",
  },
  {
    id: 8,
    title: "Ritika Nair",
    city: "Chennai",
    description:
      "From booking to hospital drop, everything felt coordinated and professional.",
    rating: 5,
    initials: "R",
  },
  {
    id: 9,
    title: "Karan Sood",
    city: "Mumbai",
    description:
      "Needed an ICU ambulance at midnight and got help quickly. Excellent response.",
    rating: 5,
    initials: "K",
  },
];

export function TestimonialsSection() {
  const [filter, setFilter] = useState("All");
  const [viewportWidth, setViewportWidth] = useState(1280);
  const cities = ["All", ...Array.from(new Set(reviews.map((r) => r.city)))];

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const filteredReviews =
    filter === "All" ? reviews : reviews.filter((r) => r.city === filter);

  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

  const cardWidth = isMobile
    ? Math.max(240, Math.min(300, viewportWidth - 44))
    : isTablet
      ? 320
      : 350;
  const cardHeight = isMobile ? 220 : 240;
  const maxVisible = isMobile ? 3 : 5;
  const overlap = isMobile ? 0.86 : 0.6;
  const spreadDeg = isMobile ? 10 : 26;

  return (
    <section className="min-h-fit sm:min-h-[600px] lg:min-h-screen flex items-center landing-section-spacing bg-white">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-8 sm:mb-12">Trust From <span className="text-red-600">Every Corner</span></h2>
        
        {/* City Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {cities.map(city => (
            <button 
              key={city}
              onClick={() => setFilter(city)}
              className={`px-4 sm:px-6 py-2 rounded-full font-bold transition-all text-xs sm:text-sm ${filter === city ? "bg-red-600 text-white shadow-lg shadow-red-200" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Left-to-right stack cards */}
        <div className="mx-auto w-full max-w-6xl">
          <CardStack<TestimonialItem>
            items={filteredReviews}
            initialIndex={0}
            maxVisible={maxVisible}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            overlap={overlap}
            spreadDeg={spreadDeg}
            tiltXDeg={isMobile ? 5 : 8}
            depthPx={isMobile ? 70 : 110}
            activeLiftPx={isMobile ? 12 : 18}
            activeScale={isMobile ? 1.02 : 1.03}
            inactiveScale={isMobile ? 0.9 : 0.94}
            autoAdvance
            intervalMs={2600}
            pauseOnHover
            showDots
            renderCard={(item, state) => (
              <div
                className={`h-full p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FFF3E0] border text-left relative transition-all ${
                  state.active
                    ? "border-red-200 shadow-lg shadow-red-100"
                    : "border-orange-100"
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} size={14} fill="#DC2626" color="#DC2626" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-5 text-xs sm:text-sm lg:text-base">
                  "{item.description}"
                </p>
                <div className="flex items-center gap-3 absolute bottom-5 left-5 right-5">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-red-200 flex items-center justify-center font-bold text-red-600 text-sm sm:text-base">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base">
                      {item.title}
                    </p>
                    <p className="text-[10px] sm:text-xs text-red-600 font-bold uppercase tracking-tighter">
                      {item.city}
                    </p>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}