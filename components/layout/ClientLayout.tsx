"use client";
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
import { useReveal } from "@/lib/useReveal";

export default function ClientLayout() {
  useReveal();

  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Resume />
      <Contact />
      <BackToTop />
    </main>
  );
}
