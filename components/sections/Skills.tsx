"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, skillCategories } from "@/lib/portfolio-data";
import {
  SiJavascript, SiC, SiReact, SiHtml5, SiCss3, SiBootstrap,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiRedux,
  SiGit, SiGithub, SiPostman, SiVisualstudiocode, SiJsonwebtokens,
} from "react-icons/si";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  SiJavascript, SiC, SiReact, SiHtml5, SiCss3, SiBootstrap,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiRedux,
  SiGit, SiGithub, SiPostman, SiVisualstudiocode, SiJsonwebtokens,
};

function CircularProgress({
  percentage,
  color,
  size = 56,
}: {
  percentage: number;
  color: string;
  size?: number;
}) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView({ current: ref.current }, { once: true });
  const offset = circumference - (inView ? percentage / 100 : 0) * circumference;

  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth={4}
      />
      <circle
        ref={ref}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="skill-ring"
        style={{
          filter: `drop-shadow(0 0 6px ${color}80)`,
          transition: "stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </svg>
  );
}

function SkillCard({ skill, delay }: { skill: typeof skills[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = iconMap[skill.icon] || SiJavascript;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative glass border border-white/[0.06] rounded-2xl p-5 card-hover group cursor-default overflow-hidden"
      style={{
        boxShadow: hovered ? `0 20px 50px ${skill.color}20` : undefined,
        borderColor: hovered ? `${skill.color}30` : undefined,
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${skill.color}12 0%, transparent 70%)` }}
      />

      <div className="flex items-start justify-between mb-3 relative z-10">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}25` }}
          >
            <IconComponent style={{ color: skill.color }} className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-sm text-white leading-none">{skill.name}</p>
            <p className="text-slate-500 text-xs mt-0.5">{skill.category}</p>
          </div>
        </div>
        <div className="relative">
          <CircularProgress percentage={skill.level} color={skill.color} size={48} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[9px] font-bold font-mono" style={{ color: skill.color }}>
              {skill.level}%
            </span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative z-10">
        <div className="h-1 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Technical Arsenal
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-4 mb-4">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A curated set of technologies I use to build modern, scalable web applications.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {skillCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                  : "glass border border-white/[0.06] text-slate-400 hover:text-white hover:border-indigo-500/30"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skill grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
