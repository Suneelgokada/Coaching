import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import AIAgentsLayout from "../../../src/components/Services/AIAgents";

export const metadata = {
  title: "AI Agents | Technoxis",
  description:
    "Custom AI agents powered by LLMs, OpenAI, Groq and Gemini to automate workflows and drive business growth.",
};

export default function AIAgentsPage() {
  return (
    <>
      <Header />
      <AIAgentsLayout />
      <Footer />
    </>
  );
}