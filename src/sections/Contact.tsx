import { useState } from "react";
import { profile } from "../data/content";
import { useReveal } from "../hooks/useScroll";

export default function Contact() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    background: "var(--bg-elevated)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-md)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color var(--transition)",
  };

  return (
    <section id="contact">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>

          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            {/* Info side */}
            <div className="contact-info">
              <div
                style={{
                  padding: "32px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <h3 style={{ fontSize: "1.3rem", marginBottom: 24 }}>Get in touch</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Email</span>
                    <p style={{ marginTop: 4 }}>
                      <a href={`mailto:${profile.email}`} style={{ color: "var(--accent-light)" }}>
                        {profile.email}
                      </a>
                    </p>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Phone</span>
                    <p style={{ marginTop: 4 }}>
                      <a href={`tel:${profile.phone}`} style={{ color: "var(--accent-light)" }}>
                        {profile.phone}
                      </a>
                    </p>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Location</span>
                    <p style={{ marginTop: 4 }}>{profile.location}</p>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Socials</span>
                    <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
                      {profile.socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "var(--text-secondary)",
                            fontSize: "0.9rem",
                            fontWeight: 500,
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                        >
                          {social.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form side */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={{ display: "block", marginBottom: 8, fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: 8, fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: 8, fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status !== "idle"}
                style={{
                  padding: "16px 32px",
                  borderRadius: 100,
                  background: "var(--accent)",
                  color: "#fff",
                  border: "none",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  cursor: status === "idle" ? "pointer" : "default",
                  transition: "all var(--transition)",
                  opacity: status === "idle" ? 1 : 0.7,
                }}
                onMouseEnter={(e) => {
                  if (status === "idle") {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 12px 30px var(--accent-glow)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent!"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: 120,
          paddingTop: 40,
          borderTop: "1px solid var(--border)",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            &copy; {new Date().getFullYear()} {profile.name}. Built with care.
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-info {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
}
