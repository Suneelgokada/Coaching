import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Technologies from "../../src/components/Technologies";

export const metadata = {
  title: "Full Stack Developer Training in Visakhapatnam | Job-Oriented Course",
  description:
    "Join our Full Stack Developer training program with real-time projects, placement assistance, and expert mentorship. Online & offline batches available.",
};

export default function FullStackDeveloperTrainingPage() {
  return (
    <>
      <Header />
      <Technologies />
      <Footer />
    </>
  );
}
