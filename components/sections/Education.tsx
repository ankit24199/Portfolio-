"use client";
import { motion } from "framer-motion";
import { education } from "@/lib/portfolio-data";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Academic Background
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-4 mb-4">
            Education &{" "}
            <span className="gradient-text">Learning</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass border border-white/[0.06] rounded-3xl p-8 relative overflow-hidden group card-hover"
            >
              {/* Accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

              {/* Top bar */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <GraduationCap size={26} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 font-semibold mt-1">{edu.institution}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{edu.affiliation}</p>
                  </div>
                </div>

                {/* CGPA badge */}
                <div className="shrink-0 text-center glass-strong border border-white/[0.1] rounded-2xl px-4 py-3">
                  <div className="font-display font-bold text-2xl gradient-text">{edu.cgpa}</div>
                  <div className="text-slate-500 text-xs">CGPA</div>
                </div>
              </div>

              {/* Meta row */}
              <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-cyan-400" />
                  <span className="font-mono">{edu.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-cyan-400" />
                  <span>Indore, Madhya Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-cyan-400" />
                  <span>Bachelor&apos;s Degree</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-6" />

              {/* Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={15} className="text-indigo-400" />
                  <p className="text-slate-300 text-sm font-semibold">Key Coursework</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, ci) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.07, duration: 0.3 }}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/[0.04] border border-white/[0.06] text-slate-300 hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:text-indigo-300 transition-all duration-200 cursor-default"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Timeline graduation badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-10"
          >
            <div className="inline-flex items-center gap-3 glass border border-emerald-500/20 rounded-full px-6 py-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-semibold text-sm">Graduated — 2025</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
