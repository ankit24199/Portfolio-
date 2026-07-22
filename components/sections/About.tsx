"use client";
import { useEffect, useRef, useState } from "react";
import { stats, personalInfo } from "@/lib/portfolio-data";
import Tilt3DCard from "@/components/ui/Tilt3DCard";

const stories = [
  { num: "01", title: "Full-Stack Foundations", color: "var(--accent)", body: "My journey started during my BCA, where I discovered the art of building scalable web applications. Building clean APIs and responsive UIs quickly became a lifelong passion." },
  { num: "02", title: "Clean Architecture First", color: "var(--accent2)", body: "I believe great software is built on clean architecture and modular components. Every application is designed to be maintainable, secure, and performant from day one." },
  { num: "03", title: "Problem-Solving Mindset", color: "var(--accent)", body: "Before writing code, I analyze user requirements and system boundaries. Delivering scalable features that solve real problems is my primary engineering focus." },
  { num: "04", title: "Continuous Evolution", color: "var(--accent2)", body: "From advanced React hooks to server optimizations, I constantly elevate my technical capabilities to stay aligned with modern engineering best practices." },
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let n = 0;
        const step = end / 60;
        const t = setInterval(() => {
          n += step;
          if (n >= end) { setCount(end); clearInterval(t); } else setCount(Math.floor(n));
        }, 24);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function About() {
  return (
    <section id="about" style={{ background: "var(--bg)", color: "var(--ink)", padding: "6rem 0" }}>
      <div className="wrap">
        {/* Header */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start", marginBottom: "4rem" }}>
          <div>
            <div className="section-label">About Me</div>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "var(--ink)", lineHeight: 1.15 }}>
              Engineering Excellence<br />&amp; <span className="gradient-text">Innovation</span>
            </h2>
          </div>
          <div>
            <p style={{ color: "var(--ink2)", lineHeight: 1.8, fontSize: ".95rem" }}>{personalInfo.summary}</p>
            <div className="divider-h" style={{ margin: "1.5rem 0" }} />
            <blockquote style={{ borderLeft: "3px solid var(--accent)", paddingLeft: "1rem", color: "var(--ink)", fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: ".98rem", lineHeight: 1.5 }}>
              &quot;{personalInfo.tagline}&quot;
            </blockquote>
          </div>
        </div>

        {/* Stats strip */}
        <div className="reveal" style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "1.25rem", padding: "2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: "2rem", marginBottom: "4rem" }}>
          {stats.map((s, i) => (
            <div key={s.label} className={`delay-${i + 1}`} style={{ textAlign: "center", borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none" }}>
              <div className="font-display" style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <p style={{ color: "var(--ink2)", fontSize: ".8rem", fontWeight: 600, marginTop: ".4rem", textTransform: "uppercase", letterSpacing: ".06em" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Story cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
          {stories.map((s, i) => (
            <Tilt3DCard key={s.title} maxTilt={8} scale={1.02}>
              <div className={`card reveal delay-${i + 1}`} style={{ borderTop: `3px solid ${s.color}`, height: "100%" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "2.25rem", height: "2.25rem", borderRadius: ".6rem", background: "var(--glow)", border: "1px solid var(--accent)", color: "var(--accent)", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 800, fontSize: ".85rem" }}>{s.num}</span>
                </div>
                <h3 className="font-display" style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--ink)", marginBottom: ".6rem" }}>{s.title}</h3>
                <p style={{ color: "var(--ink2)", fontSize: ".875rem", lineHeight: 1.75 }}>{s.body}</p>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>

      <style>{`@media(max-width:700px){ .reveal { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
