import { CatalogSection } from "@/components/CatalogSection";
import { ComplianceFooter } from "@/components/ComplianceFooter";
import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";
import { VisitSection } from "@/components/VisitSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <CatalogSection />
        <VisitSection />
      </main>
      <ComplianceFooter />
    </>
  );
}
