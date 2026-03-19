import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProviderCatalogSection } from "@/components/sections/provider-catalog-section";

export default function ProviderPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F3F8FF" }}>
      <Header />
      <main className="scroll-smooth">
        <ProviderCatalogSection />
      </main>
      <Footer />
    </div>
  );
}
