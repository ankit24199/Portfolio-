"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/portfolio-data";
import { Download, Printer, ExternalLink, FileText, Eye } from "lucide-react";

export default function Resume() {
  const handlePrint = () => window.print();

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            My Resume
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-4 mb-4">
            Full{" "}
            <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A comprehensive overview of my experience, skills, and achievements.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <motion.a
            href={personalInfo.resumeUrl}
            download
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="btn-primary flex items-center gap-2"
          >
            <Download size={16} />
            Download PDF
          </motion.a>

          <motion.button
            onClick={handlePrint}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="btn-secondary flex items-center gap-2"
          >
            <Printer size={16} />
            Print Resume
          </motion.button>

          <motion.a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="btn-outline flex items-center gap-2"
          >
            <ExternalLink size={16} />
            Open in Tab
          </motion.a>
        </motion.div>

        {/* Resume preview frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass border border-white/[0.08] rounded-3xl overflow-hidden relative">
            {/* Preview header bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                <FileText size={12} />
                resume — Ankit Yadav.pdf
              </div>
              <div className="flex items-center gap-1 text-slate-500 text-xs">
                <Eye size={12} />
                Preview
              </div>
            </div>

            {/* Mock resume content */}
            <div className="p-8 bg-gradient-to-b from-white/[0.02] to-transparent">
              {/* Resume header */}
              <div className="text-center border-b border-white/[0.06] pb-6 mb-6">
                <div className="font-display font-bold text-2xl text-white mb-1">Ankit Yadav</div>
                <div className="text-indigo-400 text-sm font-semibold mb-2">MERN Stack Developer</div>
                <div className="flex flex-wrap justify-center gap-4 text-slate-400 text-xs font-mono">
                  <span>ankit.yadav24899@gmail.com</span>
                  <span>7999174410</span>
                  <span>Indore, MP</span>
                </div>
              </div>

              {/* Mock sections */}
              {[
                { label: "Professional Summary", lines: [85, 90, 70] },
                { label: "Technical Skills", lines: [60, 75, 80, 55, 70] },
                { label: "Work Experience", lines: [95, 75, 85, 65] },
                { label: "Projects", lines: [90, 80, 70, 60] },
                { label: "Education", lines: [75, 60] },
              ].map((section, si) => (
                <motion.div
                  key={section.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: si * 0.1 }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-white/[0.06]" />
                    <span className="text-slate-300 text-xs font-bold font-display uppercase tracking-wider px-2">
                      {section.label}
                    </span>
                    <div className="h-px flex-1 bg-white/[0.06]" />
                  </div>
                  <div className="space-y-2 pl-2">
                    {section.lines.map((w, li) => (
                      <div
                        key={li}
                        className="h-2 rounded-full bg-white/[0.05]"
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Overlay CTA */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#050510] via-[#050510]/60 to-transparent rounded-b-3xl">
                <motion.a
                  href={personalInfo.resumeUrl}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2 shadow-2xl shadow-indigo-500/40"
                >
                  <Download size={18} />
                  Download Full Resume
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
