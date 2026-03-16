"use client";

// SVG Logo components — brand colors se inspired, professional look
const ApolloLogo = () => (
  <svg width="110" height="36" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="14" fill="#003399" />
    <path d="M18 8 L22 20 H14 Z" fill="white" />
    <path d="M13 22 H23" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <text x="38" y="23" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" fill="#003399">Apollo</text>
    <text x="38" y="32" fontFamily="Georgia, serif" fontSize="8" fill="#666">HOSPITALS</text>
  </svg>
);

const FortisLogo = () => (
  <svg width="110" height="36" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="28" height="28" rx="4" fill="#e2001a" />
    <rect x="12" y="9" width="8" height="18" fill="white" />
    <rect x="7" y="14" width="18" height="8" fill="white" />
    <text x="36" y="22" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="800" fill="#e2001a" letterSpacing="1">FORTIS</text>
    <text x="36" y="31" fontFamily="Arial, sans-serif" fontSize="7" fill="#888" letterSpacing="2">HEALTHCARE</text>
  </svg>
);

const MaxLogo = () => (
  <svg width="100" height="36" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="26" height="24" rx="6" fill="#00a651" />
    <text x="8" y="23" fontFamily="Arial Black, sans-serif" fontSize="13" fontWeight="900" fill="white">M</text>
    <text x="34" y="21" fontFamily="Arial Black, sans-serif" fontSize="15" fontWeight="900" fill="#00a651">MAX</text>
    <text x="34" y="31" fontFamily="Arial, sans-serif" fontSize="7" fill="#888" letterSpacing="1">HEALTHCARE</text>
  </svg>
);

const MedantaLogo = () => (
  <svg width="110" height="36" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="18" cy="18" rx="14" ry="14" fill="#004B8D" />
    <path d="M10 22 Q14 10 18 18 Q22 10 26 22" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <text x="36" y="21" fontFamily="Georgia, serif" fontSize="14" fontWeight="700" fill="#004B8D">Medanta</text>
    <text x="36" y="31" fontFamily="Georgia, serif" fontSize="7" fill="#888">THE MEDICITY</text>
  </svg>
);

const AIIMSLogo = () => (
  <svg width="100" height="36" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="28" height="28" rx="4" fill="#8B0000" />
    <text x="5" y="23" fontFamily="Arial Black, sans-serif" fontSize="11" fontWeight="900" fill="white">AIIMS</text>
    <text x="36" y="18" fontFamily="Georgia, serif" fontSize="10" fontWeight="700" fill="#8B0000">New Delhi</text>
    <text x="36" y="29" fontFamily="Arial, sans-serif" fontSize="7" fill="#888">Est. 1956</text>
  </svg>
);

const NarayanaLogo = () => (
  <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="14" fill="#f47920" />
    <path d="M11 24 L11 12 L18 20 L25 12 L25 24" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <text x="38" y="20" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" fill="#f47920">Narayana</text>
    <text x="38" y="30" fontFamily="Arial, sans-serif" fontSize="7" fill="#888" letterSpacing="1">HEALTH</text>
  </svg>
);

const partners = [
  { Logo: ApolloLogo },
  { Logo: FortisLogo },
  { Logo: MaxLogo },
  { Logo: MedantaLogo },
  { Logo: AIIMSLogo },
  { Logo: NarayanaLogo },
];

export function PartnersSection() {
  return (
    <section className="min-h-fit flex items-center landing-section-spacing bg-white overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}
        <p className="text-center text-gray-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-8 sm:mb-10">
          Trusted by Leading Hospitals Across India
        </p>

        {/* Marquee */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="marquee-track">
            {[...partners, ...partners].map(({ Logo }, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-6 sm:px-10 py-2 sm:py-3 mx-1.5 sm:mx-2 rounded-lg sm:rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 hover:bg-red-50 transition-colors duration-300 shrink-0"
              >
                <Logo />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}