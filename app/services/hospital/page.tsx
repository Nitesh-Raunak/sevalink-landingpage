import { CalendarClock, Handshake, ShieldCheck } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export default function HospitalServicePage() {
  return (
    <ServicePageTemplate
      badge="Who We Serve"
      title="Hospital Services"
      description="Enable seamless patient movement and emergency coordination between hospitals, dispatch teams, and providers."
      heroCtaText="Get Started"
      heroCtaHref="/contact"
      features={[
        {
          title: "Manage Bookings",
          description: "Coordinate incoming emergency bookings with streamlined request handling.",
          icon: CalendarClock,
        },
        {
          title: "Patient Coordination",
          description: "Keep patient handover and hospital communication clear and timely.",
          icon: Handshake,
        },
        {
          title: "Care Team Sync",
          description: "Maintain coordinated updates among medical and operations teams.",
          icon: ShieldCheck,
        },
      ]}
    />
  );
}
