import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import AboutUsLayout from "../../src/components/AboutsUs/index";
import OurMission from "../../src/components/OurMission";

export const metadata = {
  title: "Our Mission",
  description:
    "",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <OurMission />
      <Footer />
    </>
  );
}