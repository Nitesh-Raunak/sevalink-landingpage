import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text content */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Available 24/7
            </span>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Emergency Healthcare{" "}
              <span className="text-primary">When You Need It Most</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              SevaLink connects patients, hospitals, and ambulance services for
              faster emergency medical transportation. One click connects you to
              life-saving care.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <Link href="/book">Book Ambulance</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success/10 text-success">
                  ✓
                </span>
                <span>Verified Hospitals</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success/10 text-success">
                  ✓
                </span>
                <span>GPS Tracked</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success/10 text-success">
                  ✓
                </span>
                <span>Under 8 Min Response</span>
              </div>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/images/hero-ambulance.svg"
              alt="SevaLink emergency ambulance illustration"
              width={600}
              height={450}
              className="h-auto w-full max-w-lg lg:max-w-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
