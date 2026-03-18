import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TechStack from "@/components/landing/TechStack";
import Architecture from "@/components/landing/Architecture";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <TechStack />
      <Architecture />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
