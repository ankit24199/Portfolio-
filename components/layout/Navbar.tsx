"use client";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/portfolio-data";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Read saved preference, default to light
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const applied = saved ?? "light";
    setTheme(applied);
    document.documentElement.setAttribute("data-theme", applied);

    const onScroll = () => {
      const s = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (s / max) * 100 : 0);
      setScrolled(s > 40);
      const ids = navLinks.map((l) => l.href.replace("#", "")).reverse();
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const go = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Scroll progress */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      <header
        className="navbar-animate"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "all .4s",
          padding: scrolled ? ".6rem 0" : ".85rem 0",
          background: "var(--nav-bg)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${scrolled ? "var(--nav-border)" : "transparent"}`,
        }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>

          {/* Logo */}
          <button
            onClick={() => go("#home")}
            style={{ border: "none", background: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: ".75rem", flexShrink: 0 }}
          >
            <span className="font-display" style={{ color: "var(--accent)", fontWeight: 800, fontSize: "1.1rem" }}>&lt;/&gt;</span>
            <div>
              <p className="font-display" style={{ color: "var(--ink)", fontWeight: 800, fontSize: ".92rem", lineHeight: 1.1 }}>
                Ankit Yadav
              </p>
              <p style={{ color: "var(--accent)", fontSize: ".65rem", fontWeight: 600, lineHeight: 1 }}>
                MERN Stack Developer
              </p>
            </div>
          </button>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: ".1rem" }} className="hidden-mobile">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className={`nav-link${active === l.href.replace("#", "") ? " active" : ""}`}
              >
                {l.label.toUpperCase()}
              </button>
            ))}
          </nav>

          {/* Right: theme toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem", flexShrink: 0 }}>
            {/* Toggle button — simple, clean */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="hidden-mobile"
              style={{
                width: 40, height: 40, borderRadius: "50%",
                border: "1.5px solid var(--border)",
                background: "var(--card-bg)",
                color: "var(--ink)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all .25s",
                fontSize: "1rem",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--ink)"; }}
            >
              {theme === "light" ? <FiMoon size={17} /> : <FiSun size={17} />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="show-mobile"
              aria-label={open ? "Close menu" : "Open menu"}
              style={{
                width: 44, height: 44, borderRadius: ".65rem",
                border: "1.5px solid var(--border)",
                background: "var(--card-bg)",
                cursor: "pointer", display: "none", alignItems: "center", justifyContent: "center",
                color: "var(--ink)",
              }}
            >
              {open ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div style={{ maxHeight: open ? "600px" : "0", overflow: "hidden", transition: "max-height .35s ease", borderTop: open ? "1px solid var(--border)" : "none" }}>
          <nav className="wrap" style={{ display: "flex", flexDirection: "column", gap: ".25rem", padding: "1rem 2rem" }}>
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                style={{
                  textAlign: "left", padding: ".65rem .75rem", borderRadius: ".6rem",
                  fontSize: ".88rem", fontWeight: 600, border: "none", cursor: "pointer",
                  transition: "all .2s",
                  background: active === l.href.replace("#", "") ? "var(--glow)" : "transparent",
                  color: active === l.href.replace("#", "") ? "var(--accent)" : "var(--ink2)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {l.label}
              </button>
            ))}
            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              style={{
                textAlign: "left", padding: ".65rem .75rem", borderRadius: ".6rem",
                fontSize: ".88rem", fontWeight: 600, border: "none", cursor: "pointer",
                background: "transparent", color: "var(--ink2)", fontFamily: "Inter, sans-serif",
                display: "flex", alignItems: "center", gap: ".5rem",
              }}
            >
              {theme === "light" ? <FiMoon size={15} /> : <FiSun size={15} />}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </nav>
        </div>
      </header>

      <style>{`
        @media(min-width: 900px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media(max-width: 899px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </>
  );
}
