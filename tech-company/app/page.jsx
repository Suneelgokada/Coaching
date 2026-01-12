import Header from "../src/components/Header/index";
import HeroSection from "../src/components/HeroSection/index";
import WelcomeSection from "../src/components/WelcomeSection/index";
import OurProducts from "../src/components/OurProducts/index";  
import Brands from "../src/components/Brands/index";
import Testimonials from "../src/components/Testimonials";
import Technologies from "../src/components/Technames/Technologies";
import Footer from "../src/components/Footer/index";
import AboutUs from "../src/components/AboutsUs/index";
import ContactUs from "../src/components/ContactUs/index";
import OurProcess from "../src/components/OurProcess";
import PartOfTeam from "../src/components/PartOfTeam";
import HomeAboutSection from "../src/components/HomeAboutSection"
export default function Home() {
  return (
    <main>
      {/* Header ikkada load avthundhi */}
      <Header />
      <HeroSection />
      <HomeAboutSection/>
      <WelcomeSection/>
      <OurProducts/>
      <OurProcess/>
      <Brands/>
       <Technologies heading="Our Expertise" showContent={false}/>
       <PartOfTeam/>
       <Footer/>
    </main>
  );
}