import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import FrontendWebAppsLayout from "../../../src/components/Services/FrontendWebApps";

export const metadata = {
  title: "Frontend Web Development | Technoxis",
  description:
    "Expert frontend web development services using ReactJS, AngularJS and VueJS delivering high-performance user experiences worldwide.",
};

export default function FrontendWebAppsPage() {
  return (
    <>
      <Header />
      <FrontendWebAppsLayout />
      <Footer />
    </>
  );
}