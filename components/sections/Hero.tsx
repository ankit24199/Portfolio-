"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/portfolio-data";

const TITLES = [
  "Software Engineer",
  "MERN Stack Developer",
  "React.js Developer",
  "Node.js Developer",
  "Full Stack Developer",
  "JavaScript Developer",
];

const TECH_ICONS = [
  { label: "React", color: "#61DAFB", angle: 0 },
  { label: "Node", color: "#339933", angle: 60 },
  { label: "MongoDB", color: "#47A248", angle: 120 },
  { label: "JS", color: "#F7DF1E", angle: 180 },
  { label: "Git", color: "#F05032", angle: 240 },
  { label: "Express", color: "#ffffff", angle: 300 },
];

function TypeWriter({ texts }: { texts: string[] }) {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fullText = texts[current];

    if (phase === "typing") {
      if (displayed.length < fullText.length) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(fullText.slice(0, displayed.length + 1)),
          60
        );
      } else {
        timeoutRef.current = setTimeout(() => setPhase("pause"), 1800);
      }
    } else if (phase === "pause") {
      timeoutRef.current = setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          35
        );
      } else {
        setCurrent((c) => (c + 1) % texts.length);
        setPhase("typing");
      }
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, phase, current, texts]);

  return (
    <span className="gradient-text font-display font-bold">
      {displayed}
      <span className="animate-blink text-indigo-400">|</span>
    </span>
  );
}

function OrbitingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {TECH_ICONS.map((tech, i) => {
        const radius = 200;
        const rad = (tech.angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <motion.div
            key={tech.label}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              x: x - 24,
              y: y - 24,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{
                duration: 20 + i * 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-xs font-bold font-mono shadow-lg"
              style={{
                color: tech.color,
                border: `1px solid ${tech.color}30`,
                boxShadow: `0 0 15px ${tech.color}20`,
              }}
            >
              {tech.label}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-container w-full grid lg:grid-cols-2 gap-12 items-center py-12">
        {/* LEFT — Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 lg:order-1 order-2"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <span className="section-tag">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-mono text-slate-400 text-sm tracking-widest uppercase"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-5xl lg:text-7xl text-white leading-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-display min-h-[2.5rem]"
          >
            <TypeWriter texts={TITLES} />
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base leading-relaxed max-w-xl"
          >
            {personalInfo.summary}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mt-2"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary flex items-center gap-2 text-sm"
            >
              <ExternalLink size={16} />
              View Projects
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={personalInfo.resumeUrl}
              download
              className="btn-secondary flex items-center gap-2 text-sm"
            >
              <Download size={16} />
              Download Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-outline flex items-center gap-2 text-sm"
            >
              Let&apos;s Connect
            </motion.button>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            {[
              { icon: Github, href: socialLinks.github, label: "GitHub" },
              { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
              { icon: Mail, href: socialLinks.email, label: "Email" },
              { icon: Phone, href: socialLinks.phone, label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-colors border border-white/[0.06]"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative flex items-center justify-center lg:order-2 order-1"
        >
          {/* Outer glow ring */}
          <div className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-600/20 blur-3xl animate-pulse-ring" />

          {/* Spinning border ring 1 */}
          <div className="absolute w-72 h-72 lg:w-80 lg:h-80 rounded-full border border-indigo-500/20 animate-spin-slow" />
          <div className="absolute w-64 h-64 lg:w-72 lg:h-72 rounded-full border border-purple-500/15 animate-spin-reverse" />

          {/* Portrait container */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-56 h-56 lg:w-64 lg:h-64"
          >
            {/* Gradient ring frame */}
            <div className="gradient-border w-full h-full rounded-full p-1">
              <div className="w-full h-full rounded-full overflow-hidden glass-strong relative">
                {/* Profile photo — replace /images/profile.jpg with your actual photo */}
                <img
                  src="/images/profile.jpg"
                  alt="Ankit Yadav — MERN Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 flex items-center justify-center"><span class="font-display font-bold text-5xl text-white">AY</span></div>`;
                    }
                  }}
                />
              </div>
            </div>

            {/* Floating badge card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-8 glass border border-white/[0.1] rounded-xl px-3 py-2 text-xs font-mono"
            >
              <span className="text-emerald-400 font-bold">{"</>"}</span>
              <span className="text-slate-300 ml-1">Full Stack</span>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -left-8 glass border border-white/[0.1] rounded-xl px-3 py-2 text-xs font-mono"
            >
              <span className="text-indigo-400 font-bold">6</span>
              <span className="text-slate-300 ml-1">Mo Exp</span>
            </motion.div>
          </motion.div>

          {/* Orbiting tech icons */}
          <div className="absolute inset-0">
            <OrbitingIcons />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-indigo-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
