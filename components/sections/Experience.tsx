"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/portfolio-data";
import { MapPin, Calendar, Building2, Code2, Layers, Plug, Zap, Users, Server } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2, Layers, Plug, Zap, Users, Server,
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Professional Journey
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-4 mb-4">
            Work{" "}
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 opacity-30 hidden lg:block" />

          {experience.map((job, jobIdx) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: jobIdx * 0.1 }}
              className="relative lg:pl-20 mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 hidden lg:block">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center glow-primary">
                  <Building2 size={14} className="text-white" />
                </div>
              </div>

              {/* Main card */}
              <div className="glass border border-white/[0.06] rounded-2xl p-6 lg:p-8 card-hover group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">{job.role}</h3>
                    <p className="text-indigo-400 font-semibold text-base">{job.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-slate-400 shrink-0">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-indigo-400" />
                      <span className="font-mono">{job.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-indigo-400" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{job.description}</p>

                {/* Responsibility cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                  {job.responsibilities.map((resp, i) => {
                    const Icon = iconMap[resp.icon] || Code2;
                    return (
                      <motion.div
                        key={resp.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-3 group/card hover:border-indigo-500/25 hover:bg-indigo-500/5 transition-all duration-300"
                      >
                        <div className="flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-indigo-500/15 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon size={14} className="text-indigo-400" />
                          </div>
                          <div>
                            <p className="text-white text-xs font-semibold leading-tight">
                              {resp.title}
                            </p>
                            <p className="text-slate-500 text-xs mt-1 leading-relaxed group-hover/card:text-slate-400 transition-colors">
                              {resp.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
