import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import AboutUsLayout from "../../src/components/AboutsUs/index";

export const metadata = {
  title: "About Coding Roots",
  description:
    "VTC Corporation – Excellence in Building Materials. 15+ years of legacy, 40+ global brand partners, and a commitment to quality that lasts generations",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <AboutUsLayout />
      <Footer />
    </>
  );
}