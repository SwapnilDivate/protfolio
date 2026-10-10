import { useEffect, useRef, useState } from "react";
import { profile } from "../data/content";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "var(--accent-glow)",
          filter: "blur(120px)",
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "var(--accent-2-glow)",
          filter: "blur(120px)",
          transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 100,
            background: "var(--bg-elevated)",
            border: "1px solid var(--border)",
            marginBottom: 32,
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--success)",
              boxShadow: "0 0 8px var(--success)",
              animation: "pulse 2s infinite",
            }}
          />
          Available for new opportunities
        </div>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          Hi, I'm <span style={{
            background: "linear-gradient(135deg, var(--accent-light), var(--accent-2))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>{profile.name}</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            color: "var(--text-secondary)",
            maxWidth: 600,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          {profile.role}
        </p>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-muted)",
            maxWidth: 500,
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
          {profile.tagline}
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            style={primaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 30px var(--accent-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={secondaryButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get In Touch
          </button>
        </div>

        {/* Contact quick links */}
        <div style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 56 }}>
          <a
            href={`mailto:${profile.email}`}
            style={{
              color: "var(--text-muted)",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            Email
          </a>
          <a
            href={`tel:${profile.phone}`}
            style={{
              color: "var(--text-muted)",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            Phone
          </a>
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--text-muted)",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}

const primaryButtonStyle: React.CSSProperties = {
  padding: "14px 32px",
  borderRadius: 100,
  background: "var(--accent)",
  color: "#fff",
  border: "none",
  fontSize: "0.95rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all var(--transition)",
  boxShadow: "none",
};

const secondaryButtonStyle: React.CSSProperties = {
  padding: "14px 32px",
  borderRadius: 100,
  background: "transparent",
  color: "var(--text-primary)",
  border: "1px solid var(--border)",
  fontSize: "0.95rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "all var(--transition)",
};
