import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicesCatalogSection } from "@/components/sections/services-catalog-section";

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F3F8FF" }}>
      <Header />
      <main className="scroll-smooth">
        <ServicesCatalogSection />
      </main>
      <Footer />
    </div>
  );
}
