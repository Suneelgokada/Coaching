import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import OpenSourceLayout from "../../../src/components/Services/OpenSource";

export const metadata = {
  title: "Open Source Development | Technoxis",
  description:
    "Open source development, customization and integration services using WordPress, Drupal, Joomla and other platforms.",
};

export default function OpenSourcePage() {
  return (
    <>
      <Header />
      <OpenSourceLayout />
      <Footer />
    </>
  );
}