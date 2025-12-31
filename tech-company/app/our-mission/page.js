import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import OurMissionLayout from "../../src/components/OurMission";

export const metadata = {
  title: "Our Mission | VTC Corporation",
  description:
    "VTC Corporation mission and values – delivering innovative, reliable, and cost-effective digital solutions for global enterprises.",
};

export default function OurMissionPage() {
  return (
    <>
      <Header />
      <OurMissionLayout />
      <Footer />
    </>
  );
}