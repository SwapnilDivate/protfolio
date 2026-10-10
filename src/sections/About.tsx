import { aboutText, profile } from "../data/content";
import { useReveal } from "../hooks/useScroll";

export default function About() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  const stats = [
    { value: "8.17", label: "Current CGPA" },
    { value: "4", label: "Featured Projects" },
    { value: "3+", label: "Years Learning" },
    { value: "14+", label: "Core Skills" },
  ];

  return (
    <section id="about">
      <div className="container">
        <div
          ref={ref}
          className={`reveal ${isVisible ? "visible" : ""}`}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}
        >
          <div className="about-text">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Building a strong foundation in software</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {aboutText.map((paragraph, i) => (
                <p key={i} style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div style={{ marginTop: 32, display: "flex", gap: 24, flexWrap: "wrap" }}>
              <div>
                <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Location</span>
                <p style={{ fontSize: "1rem", marginTop: 4 }}>{profile.location}</p>
              </div>
              <div>
                <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>Email</span>
                <p style={{ fontSize: "1rem", marginTop: 4 }}>{profile.email}</p>
              </div>
            </div>
          </div>

          <div className="about-stats" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: "32px 24px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  transition: "all var(--transition)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                    background: "linear-gradient(135deg, var(--accent-light), var(--accent-2))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-text, .about-stats {
            grid-column: 1 / -1 !important;
          }
          .container > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
