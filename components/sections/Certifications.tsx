"use client";
import { certifications } from "@/lib/portfolio-data";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";
import MagneticButton from "@/components/ui/MagneticButton";
import Tilt3DCard from "@/components/ui/Tilt3DCard";

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: "var(--bg)", color: "var(--ink)", padding: "6rem 0" }}>
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">Credentials</div>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "var(--ink)", lineHeight: 1.15 }}>
            Certifications &amp; <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "1.5rem", maxWidth: "54rem" }}>
          {certifications.map((cert, i) => (
            <Tilt3DCard key={cert.title} maxTilt={8} scale={1.02}>
              <div className={`card reveal delay-${i + 1}`} style={{ padding: 0, overflow: "hidden", height: "100%" }}>
                {/* Header band */}
                <div style={{ height: "4rem", background: `linear-gradient(135deg, ${cert.color}25, var(--glow))`, display: "flex", alignItems: "center", padding: "0 1.5rem", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ width: "3rem", height: "3rem", borderRadius: ".875rem", background: cert.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Space Grotesk, sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#fff" }}>
                    {cert.letter}
                  </div>
                </div>
                <div style={{ padding: "1.5rem 1.75rem" }}>
                  <h3 className="font-display" style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--ink)", marginBottom: ".2rem" }}>{cert.title}</h3>
                  <p style={{ color: cert.color, fontWeight: 700, fontSize: ".85rem", marginBottom: ".75rem" }}>{cert.issuer}</p>
                  <p style={{ color: "var(--ink2)", fontSize: ".875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{cert.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                    <span style={{ color: "var(--ink3)", fontSize: ".8rem", fontFamily: "monospace" }}>📅 {cert.date}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: ".3rem", color: "#22c55e", fontSize: ".75rem", fontWeight: 700 }}>
                        <FiCheckCircle size={13} /> Verified
                      </span>
                      <MagneticButton>
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: ".3rem .75rem", fontSize: ".75rem", borderRadius: ".5rem" }}>
                          View <FiExternalLink size={10} />
                        </a>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
