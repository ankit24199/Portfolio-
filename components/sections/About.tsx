"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats, personalInfo } from "@/lib/portfolio-data";
import { Sparkles, Rocket, Heart, Code2 } from "lucide-react";

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stories = [
  {
    icon: Rocket,
    title: "Journey into Web Dev",
    body: "My journey started during my BCA at Vikramaditya Group of Institutions, where I fell in love with the idea of turning code into real, interactive experiences. The satisfaction of building something from scratch ignited a passion that's only grown stronger.",
    color: "#6366f1",
  },
  {
    icon: Heart,
    title: "Passion for Engineering",
    body: "I don't just write code — I architect solutions. Every project is an opportunity to explore new patterns, optimize performance, and deliver something users actually enjoy. I believe great software is equal parts science and craft.",
    color: "#8b5cf6",
  },
  {
    icon: Code2,
    title: "Clean Code Philosophy",
    body: "Maintainability is a feature. I write code with future developers in mind — clear naming, thoughtful structure, and documentation that doesn't lie. Because the best code is the code that doesn't need explaining.",
    color: "#06b6d4",
  },
  {
    icon: Sparkles,
    title: "Always Learning",
    body: "Technology moves fast, and I love keeping pace. Whether it's a new React pattern, a database optimization technique, or a DevOps principle — I embrace continuous learning as a core part of my engineering identity.",
    color: "#f59e0b",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            About Me
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-4 mb-4">
            The Story{" "}
            <span className="gradient-text">Behind the Code</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A MERN Stack Developer who cares deeply about user experience, code quality, and building
            products that scale.
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16" ref={ref}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass border border-white/[0.06] rounded-2xl p-6 text-center card-hover group"
            >
              <div className="font-display font-bold text-4xl gradient-text mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Story cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story, i) => {
            const Icon = story.icon;
            return (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="glass border border-white/[0.06] rounded-2xl p-6 card-hover group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 0% 0%, ${story.color}10 0%, transparent 60%)`,
                  }}
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 relative z-10"
                  style={{ background: `${story.color}18`, border: `1px solid ${story.color}30` }}
                >
                  <Icon size={20} style={{ color: story.color }} />
                </div>

                <h3 className="font-display font-semibold text-lg mb-3 relative z-10">
                  {story.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">
                  {story.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <blockquote className="text-xl lg:text-2xl font-display text-slate-300 max-w-3xl mx-auto leading-relaxed">
            &quot;{personalInfo.tagline}&quot;
          </blockquote>
          <p className="text-slate-500 mt-3 font-mono text-sm">— {personalInfo.name}</p>
        </motion.div>
      </div>
    </section>
  );
}
