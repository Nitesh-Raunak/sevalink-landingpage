import { ClipboardCheck, Route, Activity } from "lucide-react";
import { ServicePageTemplate } from "@/components/sections/service-page-template";

export default function DriverServicePage() {
  return (
    <ServicePageTemplate
      badge="Who We Serve"
      title="Driver Services"
      description="Tools for faster dispatch, smooth trip handling, and reliable emergency execution for on-road teams."
      heroCtaText="Get Started"
      heroCtaHref="/contact"
      features={[
        {
          title: "Accept Rides",
          description: "Receive and accept emergency requests with clear priority and pickup details.",
          icon: ClipboardCheck,
        },
        {
          title: "Manage Trips",
          description: "Handle active and completed trips with route and patient context in one view.",
          icon: Route,
        },
        {
          title: "Live Status Updates",
          description: "Share live progress updates for dispatch teams, patients, and hospitals.",
          icon: Activity,
        },
      ]}
    />
  );
}
