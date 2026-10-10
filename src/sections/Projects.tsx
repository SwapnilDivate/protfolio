import { projects } from "../data/content";
import { useReveal } from "../hooks/useScroll";

export default function Projects() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            A collection of projects I've built while learning and exploring web development.
          </p>

          <div
            className="projects-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 24,
            }}
          >
            {projects.map((project) => (
              <article
                key={project.id}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  transition: "all var(--transition)",
                  cursor: project.link !== "#" ? "pointer" : "default",
                }}
                onMouseEnter={(e) => {
                  if (project.link === "#") return;
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onClick={() => project.link !== "#" && window.open(project.link, "_blank")}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 10",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(22, 22, 31, 0.9) 0%, transparent 60%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                <div style={{ padding: "28px 24px" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: 10 }}>{project.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 20 }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: project.link !== "#" ? 20 : 0 }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "4px 12px",
                          background: "var(--bg-elevated)",
                          border: "1px solid var(--border)",
                          borderRadius: 100,
                          fontSize: "0.78rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: "var(--accent-light)",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        textDecoration: "none",
                      }}
                    >
                      View Project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
