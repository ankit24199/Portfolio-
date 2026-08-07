"use client";
import { education } from "@/lib/portfolio-data";
import Tilt3DCard from "@/components/layout/Tilt3DCard";

export default function Education() {
  return (
    <section id="education" style={{ background: "var(--bg2)", color: "var(--ink)", padding: "6rem 0" }}>
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">Academic Background</div>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "var(--ink)", lineHeight: 1.15 }}>
            Education &amp; <span className="gradient-text">Learning</span>
          </h2>
        </div>

        {education.map((edu) => (
          <div key={edu.degree} className="edu-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div className="reveal-left">
              <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", background: "var(--glow)", border: "1.5px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                  🎓
                </div>
                <div>
                  <p style={{ color: "var(--ink3)", fontSize: ".72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em" }}>Bachelor&apos;s Degree</p>
                  <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: ".95rem" }}>{edu.institution}</p>
                </div>
              </div>

              <h3 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--ink)", lineHeight: 1.25, marginBottom: "1rem" }}>{edu.degree}</h3>
              <p style={{ color: "var(--ink2)", fontSize: ".85rem", marginBottom: "1.5rem" }}>{edu.affiliation}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginBottom: "2rem" }}>
                {[{ label: "CGPA", value: edu.cgpa }, { label: "Graduated", value: "2022" }, { label: "Duration", value: "3 Yrs" }].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display" style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent)" }}>{stat.value}</div>
                    <div style={{ color: "var(--ink3)", fontSize: ".75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".06em" }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", borderRadius: "9999px", padding: ".6rem 1.25rem", background: "rgba(34,197,94,.1)", border: "1px solid rgba(34,197,94,.25)" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", animation: "pulseDot 2s ease-in-out infinite" }} />
                <span style={{ color: "#22c55e", fontWeight: 700, fontSize: ".82rem" }}>Graduated — July 2022</span>
              </div>
            </div>

            <div className="reveal-right">
              <p style={{ color: "var(--ink3)", fontSize: ".75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "1.25rem" }}>Key Coursework</p>
              <div style={{ display: "flex", flexDirection: "column", gap: ".65rem" }}>
                {edu.coursework.map((c, ci) => (
                  <Tilt3DCard key={c} maxTilt={5} scale={1.015}>
                    <div
                      className={`delay-${ci + 1} reveal`}
                      style={{ display: "flex", alignItems: "center", gap: ".75rem", padding: ".875rem 1.1rem", borderRadius: ".875rem", border: "1px solid var(--border)", background: "var(--card-bg)", transition: "border-color .2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    >
                      <div style={{ width: "1.75rem", height: "1.75rem", borderRadius: ".4rem", background: "var(--glow)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".68rem", fontWeight: 800, color: "var(--accent)", flexShrink: 0 }}>
                        {String(ci + 1).padStart(2, "0")}
                      </div>
                      <span style={{ color: "var(--ink)", fontSize: ".9rem", fontWeight: 500 }}>{c}</span>
                    </div>
                  </Tilt3DCard>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`@media(max-width:768px){ .edu-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }`}</style>
    </section>
  );
}
