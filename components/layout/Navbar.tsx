"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Code2 } from "lucide-react";
import { navLinks } from "@/lib/portfolio-data";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => setProgress(v * 100));
    return unsubscribe;
  }, [scrollYProgress]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Progress bar */}
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      />

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass border-b border-white/[0.06] py-3"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center glow-primary">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg gradient-text">
              AY
            </span>
          </motion.button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`nav-link ${
                  activeSection === link.href.replace("#", "") ? "active" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Moon size={16} /> : <Sun size={16} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("#contact")}
              className="hidden md:block btn-primary text-sm py-2 px-4"
            >
              Hire Me
            </motion.button>

            {/* Mobile menu toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-9 h-9 rounded-lg glass flex items-center justify-center"
              aria-label="Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass-strong border-t border-white/[0.06] mt-3"
            >
              <nav className="section-container py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(link.href)}
                    className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === link.href.replace("#", "")
                        ? "text-white bg-indigo-500/10 border border-indigo-500/20"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
