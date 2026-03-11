import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
      </main>

      <Footer />
    </>
  );
}