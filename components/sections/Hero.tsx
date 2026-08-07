"use client";
import { useEffect, useRef, useState } from "react";
import { personalInfo, socialLinks, stats } from "@/lib/portfolio-data";
import { FiGithub, FiDownload, FiArrowRight, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import MagneticButton from "@/components/ui/MagneticButton";

const TITLES = [
  "MERN Stack Developer",
  "React.js Developer",
  "Node.js Developer",
  "Full Stack Developer",
];

function TypeWriter({ texts }: { texts: string[] }) {
  const [cur, setCur] = useState(0);
  const [disp, setDisp] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "del">("typing");
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const full = texts[cur];
    if (phase === "typing") {
      if (disp.length < full.length) t.current = setTimeout(() => setDisp(full.slice(0, disp.length + 1)), 65);
      else t.current = setTimeout(() => setPhase("pause"), 2200);
    } else if (phase === "pause") {
      t.current = setTimeout(() => setPhase("del"), 300);
    } else {
      if (disp.length > 0) t.current = setTimeout(() => setDisp(disp.slice(0, -1)), 38);
      else { setCur((c) => (c + 1) % texts.length); setPhase("typing"); }
    }
    return () => { if (t.current) clearTimeout(t.current); };
  }, [disp, phase, cur, texts]);

  return (
    <span style={{ color: "var(--accent)", fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}>
      {disp}
      <span className="animate-blink" style={{ display: "inline-block", marginLeft: 2 }}>|</span>
    </span>
  );
}

export default function Hero() {
  const [imgSrc, setImgSrc] = useState("/images/profile.jpg");

  return (
    <section
      id="home"
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        paddingTop: "5rem",
      }}
    >
      {/* Main content */}
      <div
        className="wrap hero-main-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          alignItems: "center",
          gap: "4rem",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        {/* ─── LEFT: Text content ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div style={{ opacity: 0, animation: "fadeSlideUp .7s cubic-bezier(0.22,1,0.36,1) .1s both" }}>
            <p style={{ color: "var(--ink2)", fontSize: "1.1rem", fontWeight: 500, fontStyle: "italic" }}>
              Hey, I&apos;m
            </p>
          </div>

          <div style={{ opacity: 0, animation: "fadeSlideUp .7s cubic-bezier(0.22,1,0.36,1) .2s both" }}>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                fontWeight: 800,
                color: "var(--ink)",
                lineHeight: 1.05,
                letterSpacing: "-.03em",
              }}
            >
              <span className="gradient-text">ANKIT</span>
              <br />
              <span style={{ textTransform: "uppercase" }}>YADAV</span>
            </h1>
          </div>

          <div
            style={{
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              minHeight: "2rem",
              opacity: 0,
              animation: "fadeSlideUp .7s cubic-bezier(0.22,1,0.36,1) .3s both",
            }}
          >
            <TypeWriter texts={TITLES} />
          </div>

          <p
            style={{
              color: "var(--ink2)",
              lineHeight: 1.75,
              maxWidth: "30rem",
              fontSize: ".92rem",
              opacity: 0,
              animation: "fadeSlideUp .7s cubic-bezier(0.22,1,0.36,1) .4s both",
            }}
          >
            Transforming ideas into scalable web applications — MERN stack development that captivates, 
            engages, and delivers results.
          </p>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".75rem",
              alignItems: "center",
              opacity: 0,
              animation: "fadeSlideUp .7s cubic-bezier(0.22,1,0.36,1) .5s both",
            }}
          >
            <MagneticButton>
              <button
                className="btn btn-dark"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{ borderRadius: "9999px" }}
              >
                Contact Me <FiArrowRight size={16} />
              </button>
            </MagneticButton>
            <MagneticButton>
              <a className="btn btn-ghost" href={personalInfo.resumeUrl} download style={{ borderRadius: "9999px" }}>
                <FiDownload size={16} /> Resume
              </a>
            </MagneticButton>
          </div>

          {/* Socials */}
          <div
            style={{
              display: "flex",
              gap: ".75rem",
              marginTop: ".5rem",
              opacity: 0,
              animation: "fadeSlideUp .7s cubic-bezier(0.22,1,0.36,1) .6s both",
            }}
          >
            {[
              { icon: <FiGithub size={18} />, href: socialLinks.github, label: "GitHub" },
              { icon: <FaLinkedinIn size={16} />, href: socialLinks.linkedin, label: "LinkedIn" },
              { icon: <FiMail size={17} />, href: socialLinks.email, label: "Email" },
            ].map(({ icon, href, label }) => (
              <MagneticButton key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 42, height: 42, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--ink)", textDecoration: "none",
                    background: "var(--card-bg)",
                    border: "1.5px solid var(--border)",
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "var(--card-bg)"; e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                >
                  {icon}
                </a>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* ─── RIGHT: Photo + Stats ─── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            opacity: 0,
            animation: "slideInRight .85s cubic-bezier(0.22,1,0.36,1) .2s both",
          }}
        >
          {/* Photo */}
          <div
            style={{
              width: "clamp(260px, 28vw, 380px)",
              height: "clamp(320px, 36vw, 480px)",
              borderRadius: "40% 40% 42% 42% / 18% 18% 35% 35%",
              overflow: "hidden",
              background: "var(--card-bg2)",
              border: "3px solid var(--border)",
              position: "relative",
            }}
          >
            <img
              src={imgSrc}
              alt="Ankit Yadav"
              onError={() => { if (imgSrc !== "/images/profile.png") setImgSrc("/images/profile.png"); }}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center top",
                display: "block",
              }}
            />
          </div>

          {/* Stats row (like the reference) */}
          <div style={{ display: "flex", gap: "2.5rem", textAlign: "center" }}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  opacity: 0,
                  animation: `fadeSlideUp .6s cubic-bezier(0.22,1,0.36,1) ${0.5 + i * .12}s both`,
                }}
              >
                <div className="font-display" style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--ink)", lineHeight: 1.1 }}>
                  {s.value}{s.suffix}
                </div>
                <div style={{ color: "var(--ink2)", fontSize: ".72rem", fontWeight: 500, marginTop: ".2rem" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Bottom feature strip (like Dominic reference) ─── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "2rem 0",
          opacity: 0,
          animation: "fadeSlideUp .7s cubic-bezier(0.22,1,0.36,1) .7s both",
        }}
      >
        <div
          className="wrap hero-features"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
        >
          {[
            { title: "Full-Stack Development", desc: "End-to-end applications using React, Node, and MongoDB." },
            { title: "REST API Design", desc: "Clean, scalable API architectures with Express.js and JWT auth." },
            { title: "Responsive & Modern UI", desc: "Pixel-perfect designs optimized for all devices and viewports." },
            { title: "Performance Optimization", desc: "Fast load times through code splitting, caching, and best practices." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-display" style={{ fontSize: ".85rem", fontWeight: 800, color: "var(--ink)", textTransform: "uppercase", letterSpacing: ".04em", marginBottom: ".4rem" }}>
                {item.title}
              </h3>
              <p style={{ color: "var(--ink2)", fontSize: ".82rem", lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width: 860px) {
          .hero-main-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-main-grid > div:first-child { align-items: center; }
          .hero-main-grid > div:last-child { order: -1; }
          .hero-features { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width: 640px) {
          .hero-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
