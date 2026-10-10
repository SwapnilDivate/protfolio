import { skills } from "../data/content";
import { useReveal } from "../hooks/useScroll";

export default function Skills() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle">
            A blend of frontend, backend, and design tools I use to bring ideas to life.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48 }}>
            {categories.map((category) => (
              <div key={category}>
                <h3
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 24,
                  }}
                >
                  {category}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 8,
                          }}
                        >
                          <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>{skill.name}</span>
                          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{skill.level}%</span>
                        </div>
                        <div
                          style={{
                            height: 6,
                            background: "var(--bg-elevated)",
                            borderRadius: 100,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              width: isVisible ? `${skill.level}%` : "0%",
                              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                              borderRadius: 100,
                              transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
