import { Navbar } from "./components/sections/navbar";
import HeroSection from "./components/sections/hero-section";
import LegalFeatures from "./components/sections/legal-features";
import WhyLegallyAI from "./components/sections/why-legally-ai";
import FooterLinks from "./components/sections/footer-links";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF7F4] pt-20">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="features">
          <LegalFeatures />
        </div>
        <div id="why-legally-ai">
          <WhyLegallyAI />
        </div>
        <div id="footer">
          <FooterLinks />
        </div>
      </main>
    </>
  );
}