"use client";
import { useState } from "react";
import { projects } from "@/lib/portfolio-data";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp, FiArrowUpRight } from "react-icons/fi";
import MagneticButton from "@/components/ui/MagneticButton";
import Tilt3DCard from "@/components/ui/Tilt3DCard";

function ProjectCard({ p, i }: { p: typeof projects[0]; i: number }) {
  const [expanded, setExpanded] = useState(false);
  const isEven = i % 2 === 0;

  return (
    <Tilt3DCard maxTilt={4} scale={1.01}>
      <div
        className="reveal"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          border: "1px solid var(--border)",
          borderRadius: "1.25rem",
          overflow: "hidden",
          marginBottom: "2rem",
          background: "var(--card-bg)",
          transition: "border-color .25s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
      >
        {/* Project Image */}
        <div
          style={{
            order: isEven ? 0 : 1,
            background: `linear-gradient(135deg, ${p.color}12, var(--bg))`,
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "280px",
          }}
        >
          <div style={{ width: "100%", maxWidth: "420px", background: "var(--card-bg)", borderRadius: "1rem", overflow: "hidden", border: "1.5px solid var(--border)", boxShadow: `0 8px 32px ${p.color}15` }}>
            <div style={{ padding: ".5rem .75rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: ".5rem" }}>
              <div style={{ display: "flex", gap: ".3rem" }}>
                {["#ef4444", "#f59e0b", "#22c55e"].map((c, ci) => <div key={ci} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: .7 }} />)}
              </div>
              <div style={{ flex: 1, background: "var(--border2)", borderRadius: "9999px", height: "1rem", display: "flex", alignItems: "center", paddingLeft: ".5rem" }}>
                <span style={{ fontSize: ".6rem", color: "var(--ink3)", fontFamily: "monospace" }}>{p.id}.app</span>
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  objectPosition: "top left",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ order: isEven ? 1 : 0, padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span className="tag tag-blue" style={{ marginBottom: "1rem", display: "inline-block", width: "fit-content" }}>{p.subtitle}</span>
          <h3 className="font-display" style={{ fontSize: "1.7rem", fontWeight: 800, color: "var(--ink)", marginBottom: ".6rem", lineHeight: 1.2 }}>{p.title}</h3>
          <p style={{ color: "var(--ink2)", fontSize: ".875rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>{p.description}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginBottom: "1.25rem" }}>
            {p.techStack.map((t) => <span key={t} className="tag tag-muted">{t}</span>)}
          </div>

          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
            {p.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display" style={{ fontSize: "1.25rem", fontWeight: 800, color: p.color }}>{m.value}</div>
                <div style={{ color: "var(--ink3)", fontSize: ".72rem", fontWeight: 600 }}>{m.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem", marginBottom: "1.5rem" }}>
            {p.features.map((f) => (
              <span key={f} style={{ fontSize: ".72rem", color: "var(--ink2)", background: "var(--border2)", borderRadius: ".5rem", padding: ".2rem .65rem", border: "1px solid var(--border)" }}>✓ {f}</span>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", alignItems: "center" }}>
            {p.githubUrl && (
              <MagneticButton>
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: ".6rem 1.1rem", fontSize: ".82rem" }}>
                  <FiGithub size={14} /> Code
                </a>
              </MagneticButton>
            )}
            {p.liveUrl && (
              <MagneticButton>
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: ".6rem 1.1rem", fontSize: ".82rem" }}>
                  <FiExternalLink size={14} /> Live Demo
                </a>
              </MagneticButton>
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              style={{ display: "flex", alignItems: "center", gap: ".3rem", background: "none", border: "none", cursor: "pointer", color: "var(--ink3)", fontSize: ".78rem", fontWeight: 600, padding: ".6rem .75rem", fontFamily: "Inter, sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink3)")}
            >
              Architecture {expanded ? <FiChevronUp size={13} /> : <FiChevronDown size={13} />}
            </button>
          </div>

          {expanded && (
            <div style={{ marginTop: "1rem", padding: "1rem", borderRadius: ".875rem", background: "var(--border2)", border: "1px solid var(--border)" }}>
              <p style={{ color: "var(--ink2)", fontSize: ".84rem", lineHeight: 1.75 }}>{p.architecture}</p>
            </div>
          )}
        </div>
      </div>
    </Tilt3DCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: "var(--bg)", color: "var(--ink)", padding: "6rem 0" }}>
      <div className="wrap">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3.5rem" }}>
          <div className="reveal">
            <div className="section-label">Featured Work</div>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "var(--ink)", lineHeight: 1.15 }}>
              Projects that <span className="gradient-text">Ship</span>
            </h2>
          </div>
          <MagneticButton>
            <a href={`https://github.com/ankit24199`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost reveal">
              View All <FiArrowUpRight size={15} />
            </a>
          </MagneticButton>
        </div>
        {projects.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
      </div>

      <style>{`@media(max-width:768px){ div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
