import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import ContactUs from "../../src/components/ContactUs";

export const metadata = {
  title: "Contact VTC",
  description: "VTC Corporation"
}
export default function MainContactUs() {
  return (
    <>
      <Header />
      <ContactUs />
      <Footer />
    </>
  );
}
