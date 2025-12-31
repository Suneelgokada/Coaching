import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import MobileApplicationLayout from "../../../src/components/Services/MobileApplication";

export const metadata = {
  title: "Mobile Application Development | Technoxis",
  description:
    "Expert mobile app development company in Vizag delivering Android, iOS and Hybrid mobile applications worldwide.",
};

export default function MobileApplicationPage() {
  return (
    <>
      <Header />
      <MobileApplicationLayout />
      <Footer />
    </>
  );
}