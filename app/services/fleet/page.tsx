import { Truck, TrendingUp, Users } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export default function FleetServicePage() {
  return (
    <ServicePageTemplate
      badge="Who We Serve"
      title="Fleet Services"
      description="Centralized controls for operators managing multiple ambulances, drivers, and emergency workloads."
      heroCtaText="Get Started"
      heroCtaHref="/contact"
      features={[
        {
          title: "Manage Vehicles",
          description: "Maintain and organize fleet availability for high-demand emergency response.",
          icon: Truck,
        },
        {
          title: "Track Performance",
          description: "Review trip metrics, response times, and operational insights in one place.",
          icon: TrendingUp,
        },
        {
          title: "Monitor Drivers",
          description: "Monitor active drivers and support better field coordination in real time.",
          icon: Users,
        },
      ]}
    />
  );
}
