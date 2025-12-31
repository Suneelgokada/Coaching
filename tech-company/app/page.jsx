import Header from "../src/components/Header/index";
import HeroSection from "../src/components/HeroSection/index";
import WelcomeSection from "../src/components/WelcomeSection/index";
import OurProducts from "../src/components/OurProducts/index";  
import Brands from "../src/components/Brands/index";
import SectorsWeServe from "../src/components/SectorsWeServe/index";
import Clients from "../src/components/Clients/index";
import Testimonials from "../src/components/Testimonials/index";
import Count from "../src/components/Count/index";
import Form from "../src/components/Form/index";
import Footer from "../src/components/Footer/index";
import AboutUs from "../src/components/AboutsUs/index";
import ContactUs from "../src/components/ContactUs/index"
export default function Home() {
  return (
    <main>
      {/* Header ikkada load avthundhi */}
      <Header />
      <HeroSection />
      <WelcomeSection/>
      <OurProducts/>
      <Brands/>
       <Footer/>
      {/* Hero Section or Page Content */}
      {/* <AboutUs/>  <-- Deenni ikkada remove cheyandi */}
    </main>
  );
}