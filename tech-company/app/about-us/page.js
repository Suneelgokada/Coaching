import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import AboutUs from "../../src/components/AboutsUs";

export const metadata = {
  title: "About VTC",
  description: "VTC Corporation – Excellence in Building Materials. 15+ years of legacy, 40+ global brand partners, and a commitment to quality that lasts generations"
}
export default function MainAboutUs() {
  return (
    <>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
}
