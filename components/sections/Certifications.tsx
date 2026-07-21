"use client";
import { motion } from "framer-motion";
import { certifications } from "@/lib/portfolio-data";
import { SiC, SiReact } from "react-icons/si";
import { Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";

const certIconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  SiC, SiReact,
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Credentials
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-4 mb-4">
            Certifications &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Validated expertise through recognized programs and courses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => {
            const TechIcon = certIconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="glass border border-white/[0.06] rounded-3xl p-8 relative overflow-hidden group cursor-default"
                style={{
                  transition: "box-shadow 0.4s ease",
                }}
              >
                {/* Gradient top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}30)` }}
                />

                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ background: cert.color }}
                />

                {/* Certificate decoration */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Award size={80} />
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10"
                  style={{
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                  }}
                >
                  <TechIcon
                    style={{ color: cert.color, width: 28, height: 28 }}
                    className="w-7 h-7"
                  />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-white mb-1 relative z-10">
                  {cert.title}
                </h3>
                <p className="font-semibold text-sm mb-1 relative z-10" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 relative z-10">
                  {cert.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={13} className="text-slate-500" />
                    <span className="font-mono">{cert.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                      <CheckCircle2 size={13} />
                      Verified
                    </div>
                    <motion.a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                      style={{
                        background: `${cert.color}12`,
                        border: `1px solid ${cert.color}25`,
                        color: cert.color,
                      }}
                    >
                      View
                      <ExternalLink size={11} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
