import { AboutTeaser } from "@/components/home/AboutTeaser";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { JunkRemovalFeature } from "@/components/home/JunkRemovalFeature";
import { PropertyOwners } from "@/components/home/PropertyOwners";
import { QuickServices } from "@/components/home/QuickServices";
import { QuoteSection } from "@/components/home/QuoteSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { ServiceArea } from "@/components/home/ServiceArea";
import { WhyAllGoode } from "@/components/home/WhyAllGoode";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickServices />
      <BeforeAfterSection />
      <JunkRemovalFeature />
      <WhyAllGoode />
      <ReviewsSection />
      <PropertyOwners />
      <AboutTeaser />
      <ServiceArea />
      <InstagramGrid />
      <QuoteSection />
      <FinalCta />
    </>
  );
}
