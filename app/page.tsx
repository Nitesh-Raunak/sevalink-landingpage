import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { PageLoader } from "@/components/ui/page-loader";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#FFF3E0" }}>
      <PageLoader />
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}