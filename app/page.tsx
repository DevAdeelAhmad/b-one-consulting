import About from "@/components/About";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <main className="bg-[#101010] font-Prompt">
        <Intro />
        <Services />
        <Projects />
        <About />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
