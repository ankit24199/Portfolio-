"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/lib/portfolio-data";
import {
  Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Loader2,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: socialLinks.email,
    color: "#6366f1",
    desc: "Best for detailed inquiries",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: socialLinks.phone,
    color: "#06b6d4",
    desc: "Available during business hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: "#",
    color: "#8b5cf6",
    desc: "Open to remote & on-site",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@ankityadav",
    href: socialLinks.github,
    color: "#f8fafc",
    desc: "Check my repositories",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/ankityadav",
    href: socialLinks.linkedin,
    color: "#0ea5e9",
    desc: "Professional network",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-56 h-56 bg-purple-600/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-4 mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Open to full-time roles, freelance projects, and exciting collaborations. Let&apos;s build
            something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="glass border border-white/[0.06] rounded-2xl p-6 mb-6">
              <p className="text-slate-300 leading-relaxed text-sm">
                I&apos;m currently{" "}
                <span className="text-emerald-400 font-semibold">available for opportunities</span> and
                always excited to connect with engineers, founders, and teams building great products. Don&apos;t
                hesitate to reach out.
              </p>
            </div>

            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 glass border border-white/[0.06] rounded-xl p-4 group hover:border-indigo-500/25 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${method.color}15`, border: `1px solid ${method.color}25` }}
                  >
                    <Icon size={18} style={{ color: method.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-0.5">
                      {method.label}
                    </p>
                    <p className="text-white text-sm font-medium truncate">{method.value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{method.desc}</p>
                  </div>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Send size={12} className="text-indigo-400 -rotate-45" />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* RIGHT — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass border border-white/[0.06] rounded-3xl p-6 lg:p-8">
              <h3 className="font-display font-bold text-xl mb-6">Send a Message</h3>

              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h4 className="font-display font-bold text-xl mb-2">Message Sent!</h4>
                  <p className="text-slate-400 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 btn-outline text-sm"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: "name", label: "Name", type: "text", placeholder: "Your full name" },
                      { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={status !== "sending" ? { scale: 1.02, y: -1 } : {}}
                    whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-white/[0.05]"
        >
          <p className="text-slate-500 text-sm font-mono">
            Designed & Built with ♥ by{" "}
            <span className="gradient-text font-bold">Ankit Yadav</span>
          </p>
          <p className="text-slate-600 text-xs mt-1">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  );
}
