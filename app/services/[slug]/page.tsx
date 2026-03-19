"use client";

import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServiceHeroSection } from "@/components/sections/service-hero-section";
import { ServiceHowItWorksSection } from "@/components/sections/service-how-it-works-section";
import { ServiceFeaturesSection } from "@/components/sections/service-features-section";
import { ServiceDetailGrid } from "@/components/sections/service-detail-grid";
import { ServiceTrustSection } from "@/components/sections/service-trust-section";
import { ServiceFinalCtaSection } from "@/components/sections/service-final-cta-section";
import {
  Ambulance,
  HousePlus,
  Calendar,
  MapPin,
  Clock,
  AlertCircle,
  HeartHandshake,
  Activity,
  Stethoscope,
  Users,
  Shield,
  CheckCircle,
  Zap,
  Phone,
  MapPinCheck,
  TrendingUp,
  Bed,
  Pill,
  UserCheck,
  Video,
  Lock,
  Star,
  Hospital,
} from "lucide-react";
import { useParams } from "next/navigation";

type StepType = {
  number: number;
  icon: typeof Ambulance;
  title: string;
  description: string;
  time?: string;
};

type FeatureType = {
  icon: typeof Ambulance;
  title: string;
  description: string;
};

type TrustItemType = {
  icon: typeof CheckCircle;
  title: string;
  description: string;
};

const serviceData: Record<
  string,
  {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      icon: typeof Ambulance;
      iconBg: string;
      imageSrc?: string;
      imageAlt?: string;
      ctaText: string;
    };
    howItWorks: {
      title: string;
      description: string;
      steps: StepType[];
    };
    features: {
      title: string;
      description: string;
      items: FeatureType[];
    };
    detailGrid?: {
      title: string;
      description: string;
      items: FeatureType[];
    };
    trust: {
      title: string;
      description: string;
      trustItems: TrustItemType[];
    };
    finalCta: {
      heading: string;
      subheading: string;
      primaryCtaText: string;
    };
  }
> = {
  ambulance: {
    hero: {
      title: "Emergency Ambulance",
      subtitle: "24/7 Emergency Response",
      description:
        "Get the fastest ambulance response in your city. Real-time tracking, smart hospital matching, and trained paramedics ready to help. Book in seconds, save lives in minutes.",
      icon: Ambulance,
      iconBg: "from-red-500 to-orange-500",
      imageSrc: "/images/ambulance.png",
      imageAlt: "Emergency ambulance ready for response",
      ctaText: "Book Ambulance Now",
    },
    howItWorks: {
      title: "How Our Service Works",
      description:
        "From emergency call to safe hospital arrival in just minutes",
      steps: [
        {
          number: 1,
          icon: AlertCircle,
          title: "Call or Request",
          description: "Use our app or call 24/7. Describe your emergency.",
          time: "Instant",
        },
        {
          number: 2,
          icon: MapPin,
          title: "Smart Matching",
          description: "AI finds the nearest ambulance within 5km radius.",
          time: "10-15 sec",
        },
        {
          number: 3,
          icon: MapPinCheck,
          title: "Real-Time Tracking",
          description: "Follow your ambulance live with GPS tracking.",
          time: "Continuous",
        },
        {
          number: 4,
          icon: Hospital,
          title: "Hospital Handover",
          description: "Safe pickup and transport to nearest appropriate hospital.",
          time: "Minutes",
        },
      ],
    },
    features: {
      title: "Why Choose Our Ambulance Service",
      description: "Trusted by thousands for safe and reliable emergency care",
      items: [
        {
          icon: Zap,
          title: "Ultra-Fast Response",
          description: "Average response time under 5km in 8-12 minutes",
        },
        {
          icon: Activity,
          title: "Trained Paramedics",
          description: "Certified BLS/ALS professionals on every ambulance",
        },
        {
          icon: MapPinCheck,
          title: "Smart Hospital Selection",
          description: "AI-powered matching based on emergency type and distance",
        },
        {
          icon: TrendingUp,
          title: "Real-Time Tracking",
          description: "Live GPS updates from dispatch to hospital arrival",
        },
      ],
    },
    detailGrid: {
      title: "Our Ambulance Fleet",
      description: "Specialized ambulances for different emergency types",
      items: [
        {
          icon: Ambulance,
          title: "BLS Ambulance",
          description:
            "Basic Life Support with trained paramedics for non-critical emergencies",
        },
        {
          icon: Activity,
          title: "ALS Ambulance",
          description:
            "Advanced Life Support with advanced cardiac care equipment",
        },
        {
          icon: Bed,
          title: "ICU Ambulance",
          description: "Critical care transport with ventilators and ICU equipment",
        },
        {
          icon: Pill,
          title: "Neonatal Care",
          description: "Special ambulances equipped for newborn emergencies",
        },
      ],
    },
    trust: {
      title: "Trusted by Thousands",
      description:
        "5000+ successful emergency responses with 99.9% on-time delivery",
      trustItems: [
        {
          icon: CheckCircle,
          title: "Verified Paramedics",
          description: "All staff certified and regularly trained",
        },
        {
          icon: Shield,
          title: "Safety First",
          description: "Latest equipment and strict hygiene protocols",
        },
        {
          icon: Clock,
          title: "24/7 Availability",
          description: "Always open, always ready to respond",
        },
        {
          icon: Stethoscope,
          title: "Hospital Network",
          description: "Partnered with 200+ hospitals across the region",
        },
      ],
    },
    finalCta: {
      heading: "Don't Wait in an Emergency",
      subheading:
        "Reach hospital safely with trained professionals. Book now or call 24/7.",
      primaryCtaText: "Book Ambulance",
    },
  },
  homecare: {
    hero: {
      title: "Home Care Services",
      subtitle: "Medical Care at Your Home",
      description:
        "Get professional medical care in the comfort of your home. Nursing support, elderly care, physiotherapy, and post-hospital recovery. Affordable, reliable, and compassionate.",
      icon: HousePlus,
      iconBg: "from-emerald-500 to-teal-600",
      imageSrc: "/images/family-service.webp",
      imageAlt: "Home healthcare professional with family",
      ctaText: "Book Home Care",
    },
    howItWorks: {
      title: "How Our Home Care Works",
      description: "Professional caregivers right at your doorstep",
      steps: [
        {
          number: 1,
          icon: Phone,
          title: "Assessment",
          description:
            "Tell us your health needs. Our team assesses care requirements.",
          time: "24 hours",
        },
        {
          number: 2,
          icon: UserCheck,
          title: "Professional Matching",
          description: "We match certified nurses/caregivers to your needs.",
          time: "Same day",
        },
        {
          number: 3,
          icon: HeartHandshake,
          title: "Care Begins",
          description: "Professional caregiver arrives at scheduled time.",
          time: "Daily/Weekly",
        },
        {
          number: 4,
          icon: TrendingUp,
          title: "Recovery & Support",
          description: "Ongoing care with progress tracking and doctor updates.",
          time: "Continuous",
        },
      ],
    },
    features: {
      title: "Complete Home Care Solutions",
      description: "From nursing to elderly care, all at your home",
      items: [
        {
          icon: Stethoscope,
          title: "Nursing Care",
          description: "Skilled nurses for wound care, injections, and monitoring",
        },
        {
          icon: Users,
          title: "Elderly Care",
          description: "Compassionate care for elderly with chronic conditions",
        },
        {
          icon: Activity,
          title: "Physiotherapy",
          description: "Rehabilitation and mobility support at home",
        },
        {
          icon: Pill,
          title: "Post-Op Recovery",
          description: "Care after surgery with medical supervision",
        },
      ],
    },
    detailGrid: {
      title: "Our Care Services",
      description: "Comprehensive home healthcare options",
      items: [
        {
          icon: Stethoscope,
          title: "General Nursing",
          description: "Daily wound dressing, vitals monitoring, and care",
        },
        {
          icon: Pill,
          title: "Medication Support",
          description: "Medicine management and reminder assistance",
        },
        {
          icon: Activity,
          title: "Physical Therapy",
          description: "Exercise and mobility rehabilitation programs",
        },
        {
          icon: HeartHandshake,
          title: "Companion Care",
          description: "Social support and daily living assistance",
        },
        {
          icon: Users,
          title: "Dementia Care",
          description: "Specialized care for seniors with dementia",
        },
        {
          icon: Bed,
          title: "Critical Care",
          description: "Intensive care at home with medical equipment",
        },
      ],
    },
    trust: {
      title: "Caring Professionals You Can Trust",
      description:
        "Verified caregivers with years of experience and compassion",
      trustItems: [
        {
          icon: CheckCircle,
          title: "Certified Caregivers",
          description: "All professionals are verified and trained",
        },
        {
          icon: Lock,
          title: "Background Checked",
          description: "Complete verification for your safety",
        },
        {
          icon: Shield,
          title: "Insured Service",
          description: "Full insurance coverage for complete peace of mind",
        },
        {
          icon: Star,
          title: "Rated 4.9/5",
          description: "Trusted by 8000+ families with excellent reviews",
        },
      ],
    },
    finalCta: {
      heading: "Bring Professional Care Home",
      subheading:
        "Quality healthcare with compassion. Book your home care visit today.",
      primaryCtaText: "Book Home Care",
    },
  },
  hospital: {
    hero: {
      title: "Hospital Appointment",
      subtitle: "Priority Doctor Booking",
      description:
        "Book doctor appointments with zero waiting time. Priority access to specialists, instant confirmations, and hassle-free scheduling. Healthcare made easy.",
      icon: Calendar,
      iconBg: "from-purple-500 to-blue-600",
      imageSrc: "/images/hospital-appointment.webp",
      imageAlt: "Doctor appointment and hospital consultation",
      ctaText: "Book Appointment",
    },
    howItWorks: {
      title: "Simple 4-Step Booking",
      description: "From searching to confirmed appointment in minutes",
      steps: [
        {
          number: 1,
          icon: Activity,
          title: "Select Problem",
          description: "Choose your medical condition or symptom.",
          time: "30 sec",
        },
        {
          number: 2,
          icon: Stethoscope,
          title: "Find Doctor",
          description: "Browse verified specialists with ratings and availability.",
          time: "1 min",
        },
        {
          number: 3,
          icon: Calendar,
          title: "Choose Time",
          description: "Pick your preferred appointment slot instantly.",
          time: "30 sec",
        },
        {
          number: 4,
          icon: CheckCircle,
          title: "Confirmed",
          description: "Get instant confirmation and reminder notifications.",
          time: "Instant",
        },
      ],
    },
    features: {
      title: "Why Book With Us",
      description: "Convenient, reliable, and patient-first healthcare booking",
      items: [
        {
          icon: Clock,
          title: "Zero Waiting Time",
          description: "See your doctor at scheduled time, no hospital queues",
        },
        {
          icon: Star,
          title: "Verified Doctors",
          description: "All specialists are verified with qualifications and ratings",
        },
        {
          icon: Zap,
          title: "Instant Booking",
          description: "Get confirmed appointments within seconds",
        },
        {
          icon: Shield,
          title: "Insurance Support",
          description: "Direct billing with major insurance providers",
        },
      ],
    },
    detailGrid: {
      title: "Specialist Categories",
      description: "Find doctors across all medical specialties",
      items: [
        {
          icon: Stethoscope,
          title: "General Medicine",
          description: "General practitioners and internal medicine experts",
        },
        {
          icon: Activity,
          title: "Cardiology",
          description: "Heart specialists and cardiac care",
        },
        {
          icon: Users,
          title: "ENT",
          description: "Ear, nose, and throat specialists",
        },
        {
          icon: Pill,
          title: "Orthopedics",
          description: "Bone and joint specialists",
        },
        {
          icon: Activity,
          title: "Pediatrics",
          description: "Child health specialists",
        },
        {
          icon: Stethoscope,
          title: "Dermatology",
          description: "Skin and beauty specialists",
        },
      ],
    },
    trust: {
      title: "Trusted by Healthcare Seekers",
      description: "5000+ appointments booked every month with 98% satisfaction",
      trustItems: [
        {
          icon: CheckCircle,
          title: "Verified Doctors",
          description: "All specialists licensed and background checked",
        },
        {
          icon: Video,
          title: "Video Consultations",
          description: "Option for remote consultations from home",
        },
        {
          icon: Lock,
          title: "Data Privacy",
          description: "HIPAA compliant with secure patient data",
        },
        {
          icon: Star,
          title: "Patient Reviews",
          description: "Real reviews from verified appointments",
        },
      ],
    },
    finalCta: {
      heading: "Book Your Doctor Appointment",
      subheading:
        "No waiting, no hassle. Get confirmed with your choice of specialist now.",
      primaryCtaText: "Book Doctor",
    },
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = serviceData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div style={{ backgroundColor: "#FFF3E0" }}>
      <Header />

      <main>
        <ServiceHeroSection
          title={data.hero.title}
          subtitle={data.hero.subtitle}
          description={data.hero.description}
          icon={data.hero.icon}
          iconBg={data.hero.iconBg}
          imageSrc={data.hero.imageSrc}
          imageAlt={data.hero.imageAlt}
          ctaText={data.hero.ctaText}
          ctaAction={() => {
            alert("Booking feature coming soon!");
          }}
        />

        <ServiceHowItWorksSection
          title={data.howItWorks.title}
          description={data.howItWorks.description}
          steps={data.howItWorks.steps}
        />

        <ServiceFeaturesSection
          title={data.features.title}
          description={data.features.description}
          features={data.features.items}
        />

        {data.detailGrid && (
          <ServiceDetailGrid
            title={data.detailGrid.title}
            description={data.detailGrid.description}
            items={data.detailGrid.items}
            columns={slug === "homecare" ? 3 : 3}
          />
        )}

        <ServiceTrustSection
          title={data.trust.title}
          description={data.trust.description}
          trustItems={data.trust.trustItems}
        />

        <ServiceFinalCtaSection
          heading={data.finalCta.heading}
          subheading={data.finalCta.subheading}
          primaryCta={{
            text: data.finalCta.primaryCtaText,
            onClick: () => {
              alert("Booking feature coming soon!");
            },
          }}
          secondaryCta={{
            text: "Call Support",
            onClick: () => {
              alert("Support: +91 XXXX XXXX XXX");
            },
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
