import { experience } from "../data/content";
import { useReveal } from "../hooks/useScroll";

export default function Experience() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <span className="section-label">Education & Experience</span>
          <h2 className="section-title">My journey so far</h2>
          <p className="section-subtitle">My education, internship, and extracurricular journey so far.</p>

          <div style={{ position: "relative", paddingLeft: 32 }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 8,
                bottom: 8,
                width: 1,
                background: "linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)",
              }}
            />

            {experience.map((item, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  paddingBottom: i === experience.length - 1 ? 0 : 48,
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -37,
                    top: 4,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "var(--bg-primary)",
                    border: "2px solid var(--accent)",
                    boxShadow: "0 0 12px var(--accent-glow)",
                  }}
                />

                <div
                  style={{
                    padding: "24px 28px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    transition: "all var(--transition)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-hover)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      flexWrap: "wrap",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                      {item.role} <span style={{ color: "var(--accent-light)" }}>@ {item.company}</span>
                    </h3>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{item.period}</span>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
