import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import WebApplicationLayout from "../../../src/components/Services/WebApplication";

export const metadata = {
  title: "Web Application Development | Technoxis",
  description:
    "Expert web application development company in Vizag delivering scalable, secure and high-performance web solutions worldwide.",
};

export default function WebApplicationPage() {
  return (
    <>
      <Header />
      <WebApplicationLayout />
      <Footer />
    </>
  );
}