"use client";
import { useEffect, useRef, useState } from "react";
import { skills, skillCategories } from "@/lib/portfolio-data";
import Tilt3DCard from "@/components/ui/Tilt3DCard";

function SkillCard({ s, i }: { s: typeof skills[0]; i: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    // Immediately set width if already in view; else observe
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(bar);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      style={{
        opacity: 0,
        animation: `fadeSlideUp .6s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s both`,
      }}
    >
      <Tilt3DCard maxTilt={8} scale={1.02}>
        <div
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border)",
            borderRadius: "1rem",
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: ".85rem",
            transition: "border-color .25s",
            cursor: "default",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: ".6rem",
                  background: s.bg,
                  border: `1.5px solid ${s.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: ".78rem",
                  fontWeight: 800,
                  color: s.color,
                  fontFamily: "Space Grotesk, sans-serif",
                  flexShrink: 0,
                }}
              >
                {s.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: ".9rem", color: "var(--ink)", lineHeight: 1.2 }}>{s.name}</p>
                <p style={{ color: "var(--ink3)", fontSize: ".72rem", marginTop: ".15rem" }}>{s.category}</p>
              </div>
            </div>
            <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: ".85rem", color: s.color }}>
              {s.level}%
            </span>
          </div>

          {/* Progress bar */}
          <div ref={barRef} className="skill-track">
            <div
              className="skill-fill"
              style={{
                width: animated ? `${s.level}%` : "0%",
                background: `linear-gradient(90deg, ${s.color}, var(--accent2))`,
                transition: `width 1.2s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s`,
              }}
            />
          </div>
        </div>
      </Tilt3DCard>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("All");
  // Force remount on filter change
  const [filterKey, setFilterKey] = useState(0);

  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  const handleFilter = (cat: string) => {
    setActive(cat);
    setFilterKey((k) => k + 1);
  };

  return (
    <section id="skills" style={{ background: "var(--bg)", color: "var(--ink)", padding: "6rem 0", position: "relative" }}>
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-label" style={{ display: "inline-flex", justifyContent: "center" }}>Technical Arsenal</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "var(--ink)", lineHeight: 1.15, marginTop: "1rem", marginBottom: "1rem" }}
          >
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p style={{ color: "var(--ink2)", maxWidth: "42rem", margin: "0 auto 2rem auto" }}>
            A curated set of technologies I use to build modern, scalable web applications.
          </p>

          {/* Filter tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: ".5rem" }}>
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                style={{
                  padding: ".45rem 1rem",
                  borderRadius: ".6rem",
                  fontSize: ".8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all .2s",
                  border: "1.5px solid",
                  borderColor: active === cat ? "var(--accent)" : "var(--border)",
                  background: active === cat ? "var(--accent)" : "transparent",
                  color: active === cat ? "#fff" : "var(--ink2)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div
          key={filterKey}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {filtered.map((s, i) => (
            <SkillCard key={s.name} s={s} i={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem", color: "var(--ink3)" }}>
            No skills found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
