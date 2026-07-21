"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/portfolio-data";
import {
  Github, ExternalLink, BookOpen, Shield, Database, Plug, Activity,
  Monitor, Lock, BarChart2, LayoutDashboard, TrendingUp, PieChart,
  FileSpreadsheet, ChevronDown, ChevronUp,
} from "lucide-react";

const featureIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield, Database, Plug, Activity, Monitor, Lock, BarChart2,
  LayoutDashboard, TrendingUp, PieChart, FileSpreadsheet,
};

function ProjectCard({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass border border-white/[0.06] rounded-3xl overflow-hidden group relative"
      style={{
        boxShadow: hovered ? `0 30px 80px ${project.color}25, 0 0 0 1px ${project.color}20` : undefined,
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* Top accent line */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}50, transparent)` }}
      />

      {/* Mock screen / project header */}
      <div
        className="relative h-52 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}18 0%, #050510 60%, #0a0a1a 100%)`,
        }}
      >
        {/* Browser chrome mockup */}
        <div className="absolute top-4 left-4 right-4 bg-[#0d0d1f] rounded-xl border border-white/[0.06] overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.04]">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <div className="flex-1 mx-3 h-4 rounded-full bg-white/[0.04] flex items-center px-2">
              <span className="text-slate-600 text-[9px] font-mono truncate">
                {project.title.toLowerCase().replace(/ /g, "-")}.vercel.app
              </span>
            </div>
          </div>
          {/* Mock UI inside */}
          <div className="p-3 grid grid-cols-3 gap-2 h-28">
            <div className="col-span-1 space-y-1.5">
              {[70, 50, 85, 40].map((w, i) => (
                <div
                  key={i}
                  className="h-2 rounded-full"
                  style={{
                    width: `${w}%`,
                    background: i === 0 ? project.color : "rgba(255,255,255,0.05)",
                  }}
                />
              ))}
            </div>
            <div className="col-span-2 space-y-2">
              <div className="h-14 rounded-lg" style={{ background: `${project.color}15`, border: `1px solid ${project.color}20` }} />
              <div className="grid grid-cols-2 gap-1.5">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="h-7 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 rounded-full blur-2xl opacity-30"
          style={{ background: project.color }}
        />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-1">{project.title}</h3>
            <p className="text-sm font-medium" style={{ color: project.color }}>{project.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl glass border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </motion.a>
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-colors"
              style={{ background: project.color }}
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="tech-badge"
              style={{
                background: `${project.color}10`,
                borderColor: `${project.color}25`,
                color: project.color === "#ffffff" ? "#e2e8f0" : project.color,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
          {project.features.map((f) => {
            const Icon = featureIconMap[f.icon] || Shield;
            return (
              <div
                key={f.label}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.04] text-xs text-slate-400"
              >
                <Icon size={12} style={{ color: project.color }} />
                {f.label}
              </div>
            );
          })}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="text-center rounded-xl py-3"
              style={{ background: `${project.color}08`, border: `1px solid ${project.color}15` }}
            >
              <div className="font-display font-bold text-lg" style={{ color: project.color }}>
                {m.value}
              </div>
              <div className="text-slate-500 text-xs">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Architecture accordion */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between py-3 border-t border-white/[0.05] text-slate-400 hover:text-slate-200 transition-colors text-sm"
        >
          <span className="flex items-center gap-2 font-medium">
            <BookOpen size={14} />
            Architecture Overview
          </span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-slate-400 text-sm leading-relaxed pt-2 pb-1">
                {project.architecture}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Featured Work
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-4 mb-4">
            Projects that{" "}
            <span className="gradient-text">Ship</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Full-stack applications built with production-ready architecture, clean code, and real-world use cases.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ankityadav"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
