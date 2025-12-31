import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import EcommerceSolutionsLayout from "../../../src/components/Services/EcommerceSolutions";

export const metadata = {
  title: "eCommerce Solutions | Technoxis",
  description:
    "Custom eCommerce solutions in Vizag delivering scalable, mobile-friendly and secure online stores worldwide.",
};

export default function EcommerceSolutionsPage() {
  return (
    <>
      <Header />
      <EcommerceSolutionsLayout />
      <Footer />
    </>
  );
}