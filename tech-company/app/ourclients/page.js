import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import OurClientsLayout from "../../src/components/OurClients";

export const metadata = {
  title: "Our Clients | VTC Corporation",
  description:
    "VTC Corporation clients across the globe including the USA, Canada, and India. Trusted by startups, enterprises, and government organizations.",
};

export default function OurClientsPage() {
  return (
    <>
      <Header />
      <OurClientsLayout />
      <Footer />
    </>
  );
}