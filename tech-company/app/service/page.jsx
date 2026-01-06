import ServicesSection from "../../src/components/service/ServicesSection"; // Path check chesko
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <Header />
      {/* Ikkada nuvvu munde rasina professional services code call avthundi */}
      <ServicesSection/> 
      <Footer />
    </main>
  );
}