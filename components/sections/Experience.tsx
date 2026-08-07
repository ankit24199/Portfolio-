"use client";
import { experience } from "@/lib/portfolio-data";
import Tilt3DCard from "@/components/layout/Tilt3DCard";

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg2)", color: "var(--ink)", padding: "6rem 0" }}>
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">Work Experience</div>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "var(--ink)", lineHeight: 1.15 }}>
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {experience.map((job) => (
          <div key={job.company} className="reveal exp-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem", alignItems: "start" }}>

            <div style={{ position: "sticky", top: "6.5rem" }}>
              <span className="tag tag-blue" style={{ marginBottom: "1rem", display: "inline-block" }}>{job.type}</span>
              <h3 className="font-display" style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--ink)", lineHeight: 1.2, marginBottom: ".4rem" }}>{job.role}</h3>
              <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem" }}>{job.company}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: ".6rem", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: ".5rem", color: "var(--ink2)", fontSize: ".88rem" }}>
                  📅 <span style={{ fontFamily: "monospace" }}>{job.duration}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: ".5rem", color: "var(--ink2)", fontSize: ".88rem" }}>
                  📍 <span>{job.location}</span>
                </div>
              </div>

              <div className="divider-h" style={{ marginBottom: "1.25rem" }} />
              <p style={{ color: "var(--ink2)", fontSize: ".875rem", lineHeight: 1.75 }}>{job.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginTop: "1.25rem" }}>
                {job.techStack.map((t) => <span key={t} className="tag tag-muted">{t}</span>)}
              </div>
            </div>


            <div className="exp-cards-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {job.responsibilities.map((r, ri) => (
                <Tilt3DCard key={r.title} maxTilt={8} scale={1.02}>
                  <div className={`card reveal delay-${ri + 1}`} style={{ borderTop: `3px solid ${ri % 2 === 0 ? "var(--accent)" : "var(--accent2)"}`, height: "100%" }}>
                    <div style={{ fontSize: "1.75rem", marginBottom: ".75rem" }}>{r.emoji}</div>
                    <h4 className="font-display" style={{ fontWeight: 800, fontSize: ".95rem", color: "var(--ink)", marginBottom: ".5rem" }}>{r.title}</h4>
                    <p style={{ color: "var(--ink2)", fontSize: ".82rem", lineHeight: 1.7 }}>{r.desc}</p>
                  </div>
                </Tilt3DCard>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:860px){ .exp-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
        @media(max-width:600px){ .exp-cards-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
