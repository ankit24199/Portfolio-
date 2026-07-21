import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import BackToTop from "@/components/layout/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";

// Particle field only rendered client-side (canvas)
const ParticleField = dynamic(() => import("@/components/ui/ParticleField"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background particle system */}
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Resume />
      <Contact />

      {/* Floating back to top */}
      <BackToTop />
    </main>
  );
}
