"use client";
import { personalInfo } from "@/lib/portfolio-data";
import { FiDownload, FiPrinter, FiExternalLink } from "react-icons/fi";
import MagneticButton from "@/components/ui/MagneticButton";
import Tilt3DCard from "@/components/ui/Tilt3DCard";

export default function Resume() {
  return (
    <section id="resume" style={{ background: "var(--bg2)", color: "var(--ink)", padding: "6rem 0" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          {/* Left */}
          <div className="reveal-left">
            <div className="section-label">My Resume</div>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "var(--ink)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              Full <span className="gradient-text">Credentials</span>
            </h2>
            <p style={{ color: "var(--ink2)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "28rem", fontSize: ".95rem" }}>
              A comprehensive overview of my work experience, technical skills, production projects, and educational background — available for immediate download.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".85rem" }}>
              <MagneticButton><a className="btn btn-primary" href={personalInfo.resumeUrl} download><FiDownload size={16} /> Download PDF</a></MagneticButton>
              <MagneticButton><button className="btn btn-ghost" onClick={() => window.print()}><FiPrinter size={16} /> Print</button></MagneticButton>
              <MagneticButton><a className="btn btn-ghost" href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer"><FiExternalLink size={16} /> Open</a></MagneticButton>
            </div>
          </div>

          {/* Right — preview */}
          <div className="reveal-right">
            <Tilt3DCard maxTilt={8} scale={1.02}>
              <div style={{ background: "var(--card-bg)", borderRadius: "1.25rem", overflow: "hidden", border: "1.5px solid var(--border)" }}>
                <div style={{ padding: ".65rem 1rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: ".5rem", background: "var(--bg)" }}>
                  {["#ef4444", "#f59e0b", "#22c55e"].map((c, i) => <div key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: .7 }} />)}
                  <span style={{ marginLeft: ".5rem", fontSize: ".68rem", color: "var(--ink3)", fontFamily: "monospace" }}>Ankit_Yadav_Resume.pdf</span>
                </div>
                <div style={{ padding: "1.75rem", position: "relative" }}>
                  <div style={{ textAlign: "center", paddingBottom: "1.25rem", borderBottom: "1.5px solid var(--border)", marginBottom: "1.25rem" }}>
                    <div className="font-display" style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--ink)" }}>Ankit Yadav</div>
                    <div style={{ color: "var(--accent)", fontSize: ".78rem", fontWeight: 700, marginBottom: ".4rem" }}>MERN Stack Developer</div>
                    <div style={{ fontSize: ".68rem", color: "var(--ink3)", fontFamily: "monospace" }}>ankit.yadav24899@gmail.com · Indore, MP</div>
                  </div>
                  {[{ l: "Professional Summary", w: [88, 92, 75] }, { l: "Technical Skills", w: [60, 78, 82, 55, 70] }, { l: "Work Experience", w: [95, 75, 85, 60] }, { l: "Projects", w: [90, 80, 70] }, { l: "Education", w: [78, 60] }].map(sec => (
                    <div key={sec.l} style={{ marginBottom: "1rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: ".4rem" }}>
                        <span style={{ fontSize: ".65rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink)" }}>{sec.l}</span>
                        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                      </div>
                      {sec.w.map((w, wi) => <div key={wi} style={{ height: 5, borderRadius: 9, background: wi === 0 ? "var(--accent)" : "var(--border)", width: `${w}%`, marginBottom: ".3rem" }} />)}
                    </div>
                  ))}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "8rem", background: "linear-gradient(to top, var(--card-bg) 50%, transparent)", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "1rem" }}>
                    <MagneticButton>
                      <a className="btn btn-primary" href={personalInfo.resumeUrl} download>
                        <FiDownload size={15} /> Download Full Resume
                      </a>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
