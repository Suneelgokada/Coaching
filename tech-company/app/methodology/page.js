import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import MethodologyLayout from "../../src/components/Methodolgy";

export const metadata = {
  title: " Methodology",
  description:
    " Corporation Methodology – Our structured approach to delivering high-quality, scalable, and reliable technology solutions.",
};

export default function MethodologyPage() {
  return (
    <>
      <Header />
      <MethodologyLayout />
      <Footer />
    </>
  );
}