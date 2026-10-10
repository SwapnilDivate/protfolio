import { useEffect, useState } from "react";
import { profile } from "../data/content";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(10, 10, 15, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all var(--transition)",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button
          onClick={() => handleClick("home")}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.25rem",
            fontWeight: 700,
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer",
            letterSpacing: "-0.02em",
          }}
        >
          {profile.name.split(" ").map((w) => w[0]).join("")}.
        </button>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="nav-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              style={{
                background: "none",
                border: "none",
                color: activeSection === item.id ? "var(--text-primary)" : "var(--text-secondary)",
                cursor: "pointer",
                padding: "8px 16px",
                fontSize: "0.9rem",
                fontWeight: 500,
                position: "relative",
                transition: "color var(--transition)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 2,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "var(--accent)",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg-secondary)",
            borderBottom: "1px solid var(--border)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              style={{
                background: "none",
                border: "none",
                color: activeSection === item.id ? "var(--text-primary)" : "var(--text-secondary)",
                cursor: "pointer",
                padding: "12px 16px",
                fontSize: "1rem",
                fontWeight: 500,
                textAlign: "left",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
