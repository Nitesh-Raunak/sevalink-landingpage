# Seva Landing - SevaLink Main Entry Point

A modern, responsive landing page built with **Next.js 16**, **React 19**, and **TypeScript**. This is the main entry point for the SevaLink healthcare ecosystem, serving as a hub that redirects users to their respective portals based on their role.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Portal Links](#portal-links)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Running the Application](#running-the-application)
7. [Available Scripts](#available-scripts)
8. [Project Structure](#project-structure)
9. [Pages to Implement](#pages-to-implement)
10. [UI Components (shadcn/ui)](#ui-components-shadcnui)
11. [Styling with Tailwind CSS v4](#styling-with-tailwind-css-v4)
12. [Theme Support (Dark/Light Mode)](#theme-support-darklight-mode)
13. [SEO & Metadata](#seo--metadata)
14. [Responsive Design](#responsive-design)
15. [Adding New Components](#adding-new-components)
16. [Coding Standards](#coding-standards)
17. [Contributing](#contributing)

---

## Overview

**SevaLink** is an integrated healthcare ambulance management platform. The `seva-landing` project serves as the central gateway where:

- New visitors learn about the platform
- Users are directed to their role-specific portals
- General information (About, Contact, Services) is displayed

### User Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                        SEVA LANDING PAGE                            │
│                     (seva-landing - This Repo)                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │
│   │  Hero       │  │  Services   │  │  About Us   │                │
│   │  Section    │  │  Section    │  │  Section    │                │
│   └─────────────┘  └─────────────┘  └─────────────┘                │
│                                                                     │
│   ┌─────────────────────────────────────────────────┐              │
│   │           PORTAL SELECTION CARDS                 │              │
│   │                                                  │              │
│   │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌────────┐ │              │
│   │  │ Patient │ │ Hospital│ │  Fleet  │ │ Driver │ │              │
│   │  │ Portal  │ │ Portal  │ │  Owner  │ │ Portal │ │              │
│   │  └────┬────┘ └────┬────┘ └────┬────┘ └───┬────┘ │              │
│   └───────┼──────────┼──────────┼────────────┼──────┘              │
│           │          │          │            │                      │
└───────────┼──────────┼──────────┼────────────┼──────────────────────┘
            │          │          │            │
            ▼          ▼          ▼            ▼
      ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
      │   seva-  │ │   seva-  │ │   seva-  │ │   seva-  │
      │  patient │ │ hospital │ │  network │ │  driver  │
      └──────────┘ └──────────┘ └──────────┘ └──────────┘
```

---

## Tech Stack

| Category          | Technology                 | Version  |
| ----------------- | -------------------------- | -------- |
| **Framework**     | Next.js (App Router)       | 16.1.6   |
| **UI Library**    | React                      | 19.2.3   |
| **Language**      | TypeScript                 | ^5.9.3   |
| **Styling**       | Tailwind CSS               | v4       |
| **UI Components** | shadcn/ui (New York style) | Latest   |
| **Icons**         | Lucide React               | ^0.574.0 |
| **Theme**         | next-themes                | ^0.4.6   |
| **Notifications** | Sonner                     | ^2.0.7   |

> **Note:** This is a simpler stack compared to other portals since it's primarily a static landing page with minimal interactivity.

---

## Portal Links

The landing page connects to the following SevaLink portals:

| Portal                 | Description                                     | URL (Example)                          |
| ---------------------- | ----------------------------------------------- | -------------------------------------- |
| **Patient Portal**     | For patients to book ambulances, view records   | `patient.sevalink.com` or `/patient`   |
| **Hospital Portal**    | For hospitals to manage ambulance requests      | `hospital.sevalink.com` or `/hospital` |
| **Fleet Owner Portal** | For fleet owners to manage ambulances & drivers | `network.sevalink.com` or `/network`   |
| **Driver Portal**      | For drivers to receive trip assignments         | `driver.sevalink.com` or `/driver`     |
| **Admin Portal**       | For platform administrators                     | `admin.sevalink.com` or `/admin`       |

### Environment Configuration

```bash
# .env.local
NEXT_PUBLIC_PATIENT_PORTAL_URL=https://patient.sevalink.com
NEXT_PUBLIC_HOSPITAL_PORTAL_URL=https://hospital.sevalink.com
NEXT_PUBLIC_NETWORK_PORTAL_URL=https://network.sevalink.com
NEXT_PUBLIC_DRIVER_PORTAL_URL=https://driver.sevalink.com
NEXT_PUBLIC_ADMIN_PORTAL_URL=https://admin.sevalink.com

# For development (same domain, different ports)
# NEXT_PUBLIC_PATIENT_PORTAL_URL=http://localhost:3001
# NEXT_PUBLIC_HOSPITAL_PORTAL_URL=http://localhost:3002
# NEXT_PUBLIC_NETWORK_PORTAL_URL=http://localhost:3003
# NEXT_PUBLIC_DRIVER_PORTAL_URL=http://localhost:3004
# NEXT_PUBLIC_ADMIN_PORTAL_URL=http://localhost:3005
```

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 18.17.0 (LTS recommended)
- **npm** >= 9.0.0 (comes with Node.js)
- **Git** for version control

To check your versions:

```bash
node -v
npm -v
```

---

## Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd sevalink_frontend_development/seva-landing
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all dependencies listed in `package.json`.

### Step 3: Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Portal URLs
NEXT_PUBLIC_PATIENT_PORTAL_URL=http://localhost:3001
NEXT_PUBLIC_HOSPITAL_PORTAL_URL=http://localhost:3002
NEXT_PUBLIC_NETWORK_PORTAL_URL=http://localhost:3003
NEXT_PUBLIC_DRIVER_PORTAL_URL=http://localhost:3004
NEXT_PUBLIC_ADMIN_PORTAL_URL=http://localhost:3005

# Site Info
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=support@sevalink.com
NEXT_PUBLIC_CONTACT_PHONE=+91-1800-XXX-XXXX
```

---

## Running the Application

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit files.

### Production Build

```bash
npm run build
npm start
```

---

## Available Scripts

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Start development server with hot reload    |
| `npm run build` | Create optimized production build           |
| `npm start`     | Start production server (run `build` first) |
| `npm run lint`  | Run ESLint to check code quality            |

---

## Project Structure

```
seva-landing/
├── app/                          # Next.js App Router directory
│   ├── globals.css               # Global styles & Tailwind config
│   ├── layout.tsx                # Root layout (fonts, metadata)
│   └── page.tsx                  # Home page (/)
│
├── components/                   # Reusable React components
│   └── ui/                       # shadcn/ui components
│       ├── avatar.tsx            # User avatars
│       ├── badge.tsx             # Status badges
│       ├── button.tsx            # Button variants
│       ├── card.tsx              # Card containers
│       ├── dialog.tsx            # Modal dialogs
│       ├── dropdown-menu.tsx     # Dropdown menus
│       ├── input.tsx             # Form inputs
│       ├── label.tsx             # Form labels
│       ├── progress.tsx          # Progress indicators
│       ├── select.tsx            # Select dropdowns
│       ├── separator.tsx         # Visual separators
│       ├── sheet.tsx             # Side panels (mobile nav)
│       ├── skeleton.tsx          # Loading skeletons
│       ├── sonner.tsx            # Toast notifications
│       ├── table.tsx             # Data tables
│       └── tabs.tsx              # Tab navigation
│
├── lib/                          # Utility functions
│   └── utils.ts                  # Tailwind class merge utility (cn)
│
├── public/                       # Static assets
│   ├── images/                   # Images (logo, hero, etc.)
│   └── icons/                    # Favicon, app icons
│
├── components.json               # shadcn/ui configuration
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Project dependencies & scripts
├── postcss.config.mjs            # PostCSS configuration
└── tsconfig.json                 # TypeScript configuration
```

---

## Pages to Implement

Since this is primarily a landing page, the routing is minimal but should include:

### Main Pages

| Route       | File                    | Description                                         |
| ----------- | ----------------------- | --------------------------------------------------- |
| `/`         | `app/page.tsx`          | Main landing page with hero, features, portal links |
| `/about`    | `app/about/page.tsx`    | About SevaLink                                      |
| `/services` | `app/services/page.tsx` | Services overview                                   |
| `/contact`  | `app/contact/page.tsx`  | Contact form                                        |
| `/privacy`  | `app/privacy/page.tsx`  | Privacy policy                                      |
| `/terms`    | `app/terms/page.tsx`    | Terms of service                                    |

### Creating New Pages

```tsx
// app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SevaLink",
  description:
    "Learn about SevaLink - revolutionizing emergency healthcare transportation",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">About SevaLink</h1>
      {/* Content */}
    </main>
  );
}
```

---

## Landing Page Sections (To Implement)

The main landing page (`app/page.tsx`) should contain:

### 1. Header / Navigation

```tsx
// components/layout/header.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="SevaLink" className="h-8" />
          <span className="text-xl font-bold">SevaLink</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>{/* Mobile menu items */}</SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
```

### 2. Hero Section

```tsx
// components/sections/hero.tsx
import { Button } from "@/components/ui/button";
import { Ambulance, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Emergency Healthcare
              <span className="text-primary"> When You Need It Most</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              SevaLink connects patients, hospitals, and ambulance services for
              faster, more efficient emergency medical transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <Ambulance className="h-5 w-5" />
                Book Ambulance
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="h-5 w-5" />
                Emergency: 108
              </Button>
            </div>
          </div>
          <div className="relative">
            {/* Hero image or illustration */}
            <img
              src="/images/hero-ambulance.svg"
              alt="Emergency Services"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

### 3. Portal Selection Cards

```tsx
// components/sections/portals.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Building2, Truck, Car } from "lucide-react";
import Link from "next/link";

const portals = [
  {
    title: "Patient Portal",
    description: "Book ambulances, track rides, access medical records",
    icon: User,
    href: process.env.NEXT_PUBLIC_PATIENT_PORTAL_URL || "/patient",
    color: "bg-blue-500",
  },
  {
    title: "Hospital Portal",
    description: "Manage ambulance requests, coordinate transfers",
    icon: Building2,
    href: process.env.NEXT_PUBLIC_HOSPITAL_PORTAL_URL || "/hospital",
    color: "bg-green-500",
  },
  {
    title: "Fleet Owner Portal",
    description: "Manage your ambulance fleet, drivers, and earnings",
    icon: Truck,
    href: process.env.NEXT_PUBLIC_NETWORK_PORTAL_URL || "/network",
    color: "bg-orange-500",
  },
  {
    title: "Driver Portal",
    description: "Receive trips, navigate, update status",
    icon: Car,
    href: process.env.NEXT_PUBLIC_DRIVER_PORTAL_URL || "/driver",
    color: "bg-purple-500",
  },
];

export function PortalsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Access Your Portal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your role to access the right portal for your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal) => (
            <Card
              key={portal.title}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg ${portal.color} flex items-center justify-center mb-4`}
                >
                  <portal.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{portal.title}</CardTitle>
                <CardDescription>{portal.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={portal.href}>Enter Portal</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 4. Features Section

```tsx
// components/sections/features.tsx
import { Clock, MapPin, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "Average response time under 10 minutes in urban areas",
  },
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Track your ambulance in real-time from booking to arrival",
  },
  {
    icon: Shield,
    title: "Verified Services",
    description: "All ambulances and drivers are verified and certified",
  },
  {
    icon: Heart,
    title: "Quality Care",
    description: "Equipped ambulances with trained medical professionals",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose SevaLink?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best emergency medical
            transportation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 5. Statistics Section

```tsx
// components/sections/stats.tsx
const stats = [
  { value: "500+", label: "Ambulances" },
  { value: "50+", label: "Cities" },
  { value: "100K+", label: "Trips Completed" },
  { value: "4.8", label: "User Rating" },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### 6. Footer

```tsx
// components/layout/footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">SevaLink</h3>
            <p className="text-sm text-muted-foreground">
              Connecting healthcare when it matters most.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-semibold mb-4">Portals</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary">
                  Patient Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Hospital Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Fleet Owner Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Driver Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SevaLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

---

## Complete Landing Page Example

```tsx
// app/page.tsx
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { PortalsSection } from "@/components/sections/portals";
import { StatsSection } from "@/components/sections/stats";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <PortalsSection />
      </main>
      <Footer />
    </>
  );
}
```

---

## UI Components (shadcn/ui)

This project uses **shadcn/ui** with the **New York** style.

### Available Components

| Component | Landing Page Usage                    |
| --------- | ------------------------------------- |
| Button    | CTAs, navigation links                |
| Card      | Portal selection cards, feature cards |
| Dialog    | Login modal, contact form             |
| Sheet     | Mobile navigation menu                |
| Input     | Contact form, newsletter signup       |
| Label     | Form labels                           |
| Separator | Section dividers                      |
| Skeleton  | Loading states                        |
| Sonner    | Toast notifications                   |

### Adding New Components

```bash
npx shadcn@latest add <component-name>

# Recommended for landing page:
npx shadcn@latest add accordion     # FAQ section
npx shadcn@latest add carousel      # Testimonials
npx shadcn@latest add navigation-menu  # Desktop nav
```

---

## Styling with Tailwind CSS v4

### Using the `cn()` Utility

```tsx
import { cn } from "@/lib/utils";

<div
  className={cn("px-4 py-2 rounded-lg", isActive && "bg-primary text-white")}
/>;
```

### Responsive Design Classes

```tsx
// Mobile-first approach
<div className="
  grid
  grid-cols-1        // 1 column on mobile
  sm:grid-cols-2     // 2 columns on tablet
  lg:grid-cols-4     // 4 columns on desktop
  gap-4 sm:gap-6 lg:gap-8
">
```

### Container Utility

```tsx
<div className="container mx-auto px-4">
  {/* Content with max-width and padding */}
</div>
```

---

## Theme Support (Dark/Light Mode)

### Setting Up next-themes

```tsx
// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
```

### Update Root Layout

```tsx
// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### Theme Toggle

```tsx
"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
```

---

## SEO & Metadata

### Root Metadata

```tsx
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SevaLink - Emergency Healthcare Transportation",
    template: "%s | SevaLink",
  },
  description:
    "SevaLink connects patients, hospitals, and ambulance services for faster, more efficient emergency medical transportation.",
  keywords: [
    "ambulance",
    "emergency",
    "healthcare",
    "medical transport",
    "hospital",
  ],
  authors: [{ name: "SevaLink" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sevalink.com",
    siteName: "SevaLink",
    title: "SevaLink - Emergency Healthcare Transportation",
    description: "Connecting healthcare when it matters most",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SevaLink",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SevaLink - Emergency Healthcare Transportation",
    description: "Connecting healthcare when it matters most",
    images: ["/og-image.png"],
  },
};
```

### Page-Specific Metadata

```tsx
// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SevaLink and our mission to revolutionize emergency healthcare.",
};
```

---

## Responsive Design

### Breakpoints

| Breakpoint | Width  | Usage               |
| ---------- | ------ | ------------------- |
| `sm`       | 640px  | Tablets (portrait)  |
| `md`       | 768px  | Tablets (landscape) |
| `lg`       | 1024px | Laptops             |
| `xl`       | 1280px | Desktops            |
| `2xl`      | 1536px | Large screens       |

### Example Responsive Component

```tsx
<section
  className="
  py-12 md:py-16 lg:py-20          // Vertical padding
  px-4 sm:px-6 lg:px-8              // Horizontal padding
"
>
  <h1
    className="
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl  // Font sizes
    font-bold
  "
  >
    Responsive Heading
  </h1>
</section>
```

---

## Adding New Components

### Layout Components

```
components/
├── layout/
│   ├── header.tsx      # Main navigation
│   ├── footer.tsx      # Site footer
│   └── mobile-nav.tsx  # Mobile navigation
```

### Section Components

```
components/
├── sections/
│   ├── hero.tsx        # Hero section
│   ├── features.tsx    # Features grid
│   ├── portals.tsx     # Portal selection cards
│   ├── stats.tsx       # Statistics section
│   ├── testimonials.tsx# User testimonials
│   ├── faq.tsx         # FAQ accordion
│   └── cta.tsx         # Call to action
```

---

## Recommended Folder Structure

```
seva-landing/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── providers.tsx           # Theme provider
│   ├── globals.css             # Global styles
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── privacy/
│   │   └── page.tsx            # Privacy policy
│   └── terms/
│       └── page.tsx            # Terms of service
│
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── layout/                 # Header, Footer, Nav
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── mobile-nav.tsx
│   └── sections/               # Page sections
│       ├── hero.tsx
│       ├── features.tsx
│       ├── portals.tsx
│       ├── stats.tsx
│       ├── testimonials.tsx
│       └── cta.tsx
│
├── lib/
│   ├── utils.ts                # Utility functions
│   └── constants.ts            # Portal URLs, site config
│
├── public/
│   ├── images/                 # Hero images, illustrations
│   ├── logo.svg                # Site logo
│   ├── favicon.ico             # Favicon
│   └── og-image.png            # Open Graph image
│
└── types/
    └── index.ts                # TypeScript types
```

---

## Coding Standards

### File Naming

- **Components**: kebab-case (`hero-section.tsx`) or PascalCase (`HeroSection.tsx`)
- **Pages**: Always `page.tsx` (Next.js requirement)

### Component Structure

```tsx
// 1. Imports
import { Button } from "@/components/ui/button";

// 2. Types (if needed)
interface HeroProps {
  title: string;
}

// 3. Component (export function for Server Components)
export function HeroSection({ title }: HeroProps) {
  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
}
```

### Static vs Interactive

```tsx
// Server Component (default) - no "use client"
export function HeroSection() {
  return <section>...</section>;
}

// Client Component - for interactivity
("use client");
export function ThemeToggle() {
  const [theme, setTheme] = useState();
  // ...
}
```

---

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes following the coding standards
3. Run linting: `npm run lint`
4. Build to check for errors: `npm run build`
5. Commit your changes with clear messages
6. Open a Pull Request

---

## Useful Links

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev/icons)
- [next-themes](https://github.com/pacocoursey/next-themes)

---

**Happy Coding!** If you have questions, reach out to the team lead.
