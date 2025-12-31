import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import TestimonialsLayout from "../../src/components/Testimonials";

export const metadata = {
  title: "Testimonials | Technoxis",
  description:
    "Client testimonials and reviews about working with Technoxis across web, mobile, and enterprise solutions.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <TestimonialsLayout />
      <Footer />
    </>
  );
}