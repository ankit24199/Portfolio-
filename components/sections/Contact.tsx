"use client";
import { useState } from "react";
import { personalInfo, socialLinks } from "@/lib/portfolio-data";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiSend, FiCheckCircle, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import MagneticButton from "@/components/ui/MagneticButton";
import Tilt3DCard from "@/components/ui/Tilt3DCard";

const contactItems = [
  { icon: FiMail, label: "Email", value: personalInfo.email, href: socialLinks.email },
  { icon: FiPhone, label: "Phone", value: personalInfo.phone, href: socialLinks.phone },
  { icon: FiMapPin, label: "Location", value: personalInfo.location, href: "#" },
  { icon: FiGithub, label: "GitHub", value: "@ankityadav", href: socialLinks.github },
  { icon: FaLinkedinIn, label: "LinkedIn", value: "in/ankityadav", href: socialLinks.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID_HERE"}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || "New Contact from Portfolio",
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("sent");
      } else {
        const result = await response.json();
        console.error(result);
        setStatus("idle");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" style={{ background: "var(--bg)", color: "var(--ink)", padding: "6rem 0 0" }}>
      <div className="wrap">
        <div className="reveal" style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">Get In Touch</div>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "var(--ink)", lineHeight: 1.15 }}>
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start", marginBottom: 0 }}>
          {/* Left — contact cards */}
          <div className="reveal-left" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ background: "var(--card-bg)", borderRadius: "1rem", padding: "1.5rem", marginBottom: ".5rem", border: "1px solid var(--border)" }}>
              <p style={{ color: "var(--ink2)", lineHeight: 1.8, fontSize: ".9rem" }}>
                I&apos;m currently <span style={{ color: "#22c55e", fontWeight: 700 }}>available for opportunities</span> — full-time roles, freelance projects, or technical collaborations. Feel free to reach out.
              </p>
            </div>

            {contactItems.map((m) => {
              const Icon = m.icon;
              return (
                <Tilt3DCard key={m.label} maxTilt={5} scale={1.01}>
                  <a
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: ".875rem", padding: ".875rem 1rem", borderRadius: ".875rem", background: "var(--card-bg)", border: "1px solid var(--border)", textDecoration: "none", transition: "border-color .25s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  >
                    <div style={{ width: "2.25rem", height: "2.25rem", borderRadius: ".6rem", background: "var(--glow)", border: "1.5px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={15} style={{ color: "var(--accent)" }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ color: "var(--ink3)", fontSize: ".7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: ".1rem" }}>{m.label}</p>
                      <p style={{ color: "var(--ink)", fontSize: ".88rem", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.value}</p>
                    </div>
                    <FiArrowUpRight size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  </a>
                </Tilt3DCard>
              );
            })}
          </div>

          {/* Right — form */}
          <div className="reveal-right">
            <Tilt3DCard maxTilt={4} scale={1.01}>
              <div style={{ background: "var(--card-bg)", borderRadius: "1.25rem", padding: "2rem", border: "1px solid var(--border)" }}>
                <h3 className="font-display" style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--ink)", marginBottom: "1.5rem" }}>Send a Message</h3>

                {status === "sent" ? (
                  <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                    <div style={{ width: "4rem", height: "4rem", borderRadius: "50%", background: "rgba(34,197,94,.1)", border: "1.5px solid rgba(34,197,94,.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                      <FiCheckCircle size={28} style={{ color: "#22c55e" }} />
                    </div>
                    <h4 className="font-display" style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--ink)", marginBottom: ".5rem" }}>Message Sent!</h4>
                    <p style={{ color: "var(--ink2)", fontSize: ".875rem", marginBottom: "1.5rem" }}>I&apos;ll get back to you within 24 hours.</p>
                    <MagneticButton>
                      <button className="btn btn-ghost" onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                        Send Another
                      </button>
                    </MagneticButton>
                  </div>
                ) : (
                  <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: ".875rem" }}>
                    <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".875rem" }}>
                      {[{ name: "name", label: "Name", type: "text", placeholder: "Your full name" }, { name: "email", label: "Email", type: "email", placeholder: "your@email.com" }].map((f) => (
                        <div key={f.name}>
                          <label style={{ display: "block", color: "var(--ink3)", fontSize: ".7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: ".4rem" }}>{f.label}</label>
                          <input className="form-input" name={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name as keyof typeof form]} onChange={handle} required />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label style={{ display: "block", color: "var(--ink3)", fontSize: ".7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: ".4rem" }}>Subject</label>
                      <input className="form-input" name="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={handle} required />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "var(--ink3)", fontSize: ".7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: ".4rem" }}>Message</label>
                      <textarea className="form-input" name="message" rows={5} placeholder="Tell me about your project..." value={form.message} onChange={handle} required />
                    </div>
                    <MagneticButton style={{ width: "100%" }}>
                      <button type="submit" className="btn btn-primary" disabled={status === "sending"} style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? .65 : 1 }}>
                        {status === "sending" ? "Sending…" : <><FiSend size={15} /> Send Message</>}
                      </button>
                    </MagneticButton>
                  </form>
                )}
              </div>
            </Tilt3DCard>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "var(--bg2)", marginTop: "5rem", padding: "2rem 0", borderTop: "1px solid var(--border)" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <p style={{ color: "var(--ink2)", fontSize: ".88rem", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}>
            Designed &amp; Built by <span style={{ color: "var(--accent)", fontWeight: 700 }}>Ankit Yadav</span>
          </p>
          <p style={{ color: "var(--ink3)", fontSize: ".8rem" }}>© {new Date().getFullYear()} — All rights reserved</p>
        </div>
      </div>

      <style>{`
        @media(max-width:860px){ .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
        @media(max-width:600px){ .contact-form-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
