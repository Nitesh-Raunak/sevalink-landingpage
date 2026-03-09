import { MapPin, Zap, ShieldCheck, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description:
      "Track your ambulance location live on a map from the moment it's dispatched until it reaches you.",
  },
  {
    icon: Zap,
    title: "Fast Emergency Response",
    description:
      "Intelligent dispatch matches you with the nearest available ambulance for the quickest arrival.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Hospitals",
    description:
      "Access a trusted network of certified hospitals and emergency care facilities across the region.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Round-the-clock emergency medical support — because emergencies don't wait for business hours.",
  },
] as const;

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Why SevaLink
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for Emergencies, Designed for Speed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every feature is purpose-built to save time when it matters most.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-transparent bg-card shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="size-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
