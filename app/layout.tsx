// import type { Metadata } from "next";
// import { Inter, Geist_Mono } from "next/font/google";
// import ScrollRestorationControl from "@/components/ui/scroll-restoration";
// import "./globals.css";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap",
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // TODO: Update siteUrl to the final production domain before launch
// const siteUrl = "https://www.sevalinkcare.com";

// export const metadata: Metadata = {
//   metadataBase: new URL(siteUrl),

//   title: {
//     default: "SevaLink — Emergency Ambulance & Healthcare Services in Rajkot",
//     template: "%s — SevaLink",
//   },

//   description:
//     "Book a verified ambulance in under 60 seconds. SevaLink connects patients to BLS, ALS, ICU, and Neonatal ambulances in Rajkot, Gujarat. Homecare and hospital appointment booking also available.",

//   keywords: [
//     "ambulance booking",
//     "emergency ambulance Rajkot",
//     "ambulance service Gujarat",
//     "BLS ambulance",
//     "ALS ambulance",
//     "ICU ambulance",
//     "homecare services Rajkot",
//     "doctor at home Rajkot",
//     "hospital appointment booking",
//     "SevaLink",
//     "medical emergency app India",
//   ],

//   authors: [{ name: "SevaLink" }],

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: { index: true, follow: true },
//   },

//   alternates: {
//     canonical: siteUrl,
//   },

//   openGraph: {
//     type: "website",
//     locale: "en_IN",
//     url: siteUrl,
//     siteName: "SevaLink",
//     title: "SevaLink — Emergency Ambulance & Healthcare in Rajkot",
//     description:
//       "Book a verified ambulance in 60 seconds. SevaLink is Rajkot's emergency response platform for ambulance booking, homecare, and hospital appointments.",
//     // TODO: Add a real OG image (1200×630px) at /public/og-image.jpg before launch
//     images: [
//       {
//         // url: "/assets/brand/SevaLink-logo-r.png",
//         url: "/og-image.jpg", // The 1200x630 file you just made
//         width: 1200,
//         height: 630,
//         alt: "SevaLink — Emergency Healthcare Platform",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "SevaLink — Emergency Ambulance & Healthcare in Rajkot",
//     description:
//       "Book a verified ambulance in 60 seconds. Available 24/7 in Rajkot, Gujarat.",
//     images: ["/og-image.jpg"],
//   },

//   icons: {
//     icon: [{ url: "/assets/brand/SevaLink-icon.png", type: "image/png" }],
//     apple: "/assets/brand/SevaLink-icon.png",
//     // TODO: Add proper favicon set: favicon.ico, apple-touch-icon (180×180), site.webmanifest
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "MedicalBusiness",
//         "@id": `${siteUrl}/#organization`,
//         name: "SevaLink",
//         url: siteUrl,
//         logo: `${siteUrl}/assets/brand/SevaLink-logo-r.png`,
//         description:
//           "Emergency ambulance dispatch, homecare, and hospital appointment platform in Rajkot, Gujarat, India.",
//         areaServed: {
//           "@type": "City",
//           name: "Rajkot",
//           containedInPlace: {
//             "@type": "State",
//             name: "Gujarat",
//             containedInPlace: { "@type": "Country", name: "India" },
//           },
//         },
//         contactPoint: {
//           "@type": "ContactPoint",
//           contactType: "Emergency",
//           availableLanguage: ["English", "Hindi", "Gujarati"],
//           hoursAvailable: "Mo-Su 00:00-24:00",
//         },
//       },
//       {
//         "@type": "WebSite",
//         "@id": `${siteUrl}/#website`,
//         url: siteUrl,
//         name: "SevaLink",
//         publisher: { "@id": `${siteUrl}/#organization` },
//       },
//     ],
//   };

//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//         />
//         <ScrollRestorationControl />
//         {children}
//         {/*
//           Analytics — uncomment once GA4 or Plausible is set up.

//           Google Analytics 4:
//           <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
//           <Script id="ga4-init" strategy="afterInteractive">{`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
//           `}</Script>

//           Plausible (privacy-friendly, no cookie banner needed):
//           <Script defer data-domain="sevalink.in" src="https://plausible.io/js/script.js" strategy="afterInteractive" />
//         */}
//       </body>
//     </html>
//   );
// }




import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import ScrollRestorationControl from "@/components/ui/scroll-restoration";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.sevalinkcare.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "SevaLink — Emergency Ambulance & Healthcare Services in Rajkot",
    template: "%s — SevaLink",
  },

  description:
    "Book a verified ambulance in under 60 seconds. SevaLink connects patients to BLS, ALS, ICU, and Neonatal ambulances in Rajkot, Gujarat. Homecare and hospital appointment booking also available.",

  keywords: [
    "ambulance booking",
    "emergency ambulance Rajkot",
    "ambulance service Gujarat",
    "BLS ambulance",
    "ALS ambulance",
    "ICU ambulance",
    "homecare services Rajkot",
    "doctor at home Rajkot",
    "hospital appointment booking",
    "SevaLink",
    "medical emergency app India",
  ],

  authors: [{ name: "SevaLink" }],

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "SevaLink",
    title: "SevaLink — Emergency Ambulance & Healthcare in Rajkot",
    description:
      "Book a verified ambulance in 60 seconds. SevaLink is Rajkot's emergency response platform for ambulance booking, homecare, and hospital appointments.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SevaLink — Emergency Healthcare Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SevaLink — Emergency Ambulance & Healthcare in Rajkot",
    description:
      "Book a verified ambulance in 60 seconds. Available 24/7 in Rajkot, Gujarat.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/brand/SevaLink-icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/assets/brand/SevaLink-icon.png" },
    ],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${siteUrl}/#organization`,
        name: "SevaLink",
        url: siteUrl,
        logo: `${siteUrl}/assets/brand/SevaLink-logo-r.png`,
        description:
          "Emergency ambulance dispatch, homecare, and hospital appointment platform in Rajkot, Gujarat, India.",
        areaServed: {
          "@type": "City",
          name: "Rajkot",
          containedInPlace: {
            "@type": "State",
            name: "Gujarat",
            containedInPlace: { "@type": "Country", name: "India" },
          },
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Emergency",
          availableLanguage: ["English", "Hindi", "Gujarati"],
          hoursAvailable: "Mo-Su 00:00-24:00",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "SevaLink",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollRestorationControl />
        {children}
      </body>
    </html>
  );
}