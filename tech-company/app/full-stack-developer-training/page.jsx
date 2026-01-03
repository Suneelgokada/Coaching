// import Header from "../../src/components/fullStackTraining/Navpage";
import Footer from "../../src/components/Footer";

import HeroSection from "../../src/components/fullStackTraining/HeroSection";
// import InfoStatsSection from "../../src/components/fullStackTraining/InfoStatsSection";
// import HighlightsSection from "../../src/components/fullStackTraining/HighlightsSection";
// import PricingSection from "../../src/components/fullStackTraining/PricingSection";
// import HiringPartnersSection from "../../src/components/fullStackTraining/HiringPartnersSection";
// import TestimonialsSection from "../../src/components/fullStackTraining/TestimonialsSection";
// import FAQSection from "../../src/components/fullStackTraining/FAQSection";
// import CTASection from "../../src/components/fullStackTraining/CTASection";
import HeroInfoStrip from "../../src/components/fullStackTraining/HeroInfoStrip";






import Topfooter from "../../src/components/fullStackTraining/Topfooter";
import Header from "../../src/components/fullStackTraining/Headerpage";
import Navpage from "../../src/components/fullStackTraining/Navpage";





export const metadata = {
  title: "Full Stack Developer Training in Visakhapatnam | Job-Oriented Course",
  description:
    "Join our Full Stack Developer training program with real-time projects, placement assistance, and expert mentorship. Online & offline batches available.",
};

export default function FullStackDeveloperTrainingPage() {
  return (
    <><Topfooter />
      <Header />
<Navpage />


<HeroSection />
{/* <HeroInfoStrip /> */}

{/* 
     

      <InfoStatsSection />
      <HighlightsSection />
      <PricingSection />
      <HiringPartnersSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection /> */}

      <Footer />
    </>
  );
}
