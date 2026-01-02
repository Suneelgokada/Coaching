// import Header from "../../src/components/fullStackTraining/Navpage";
import Footer from "../../src/components/Footer";
 
import HeroSection from "../../src/components/full-stack-developer-training/LandingSeciton";

 
 
 
 
 
 
import Topfooter from "../../src/components/full-stack-developer-training/Topfooter";
import Header from "../../src/components/full-stack-developer-training/Headerpage";
import Navpage from "../../src/components/full-stack-developer-training/NavPage";
 
 
 
 
 
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
 
      <Footer />
    </>
  );
}
 
 