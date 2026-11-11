import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Recognition from "@/components/Recognition";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-zinc-950">
      <Nav />
      <Hero />
      <Impact />
      <Experience />
      <Recognition />
      <Projects />
      <Skills />
      <Education />
      <CTA />
      <Footer />
    </main>
  );
}
