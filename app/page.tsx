import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Recognition from "@/components/Recognition";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Nav />
      <Hero />
      <Recognition />
      <Experience />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}
