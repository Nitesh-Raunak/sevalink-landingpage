import { CalendarCheck, HeartHandshake, UserRound } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export default function HomecareServicePage() {
  return (
    <ServicePageTemplate
      badge="Who We Serve"
      title="Homecare Services"
      description="Coordinate home visits and care continuity with faster communication and transparent service flow."
      heroCtaText="Get Started"
      heroCtaHref="/contact"
      features={[
        {
          title: "Manage Bookings",
          description: "Handle patient visit requests and schedules with cleaner workflows.",
          icon: CalendarCheck,
        },
        {
          title: "Patient Coordination",
          description: "Ensure timely communication between families, caregivers, and coordinators.",
          icon: HeartHandshake,
        },
        {
          title: "Care Team Sync",
          description: "Keep nursing and support teams aligned on patient needs and updates.",
          icon: UserRound,
        },
      ]}
    />
  );
}
