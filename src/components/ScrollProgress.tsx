import { useEffect, useState } from "react";

export default function ScrollProgress({ progress }: { progress: number }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        width: `${progress * 100}%`,
        background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
        zIndex: 10000,
        transition: "width 0.1s linear",
        boxShadow: "0 0 12px var(--accent-glow)",
      }}
    />
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: "50%",
        border: "1px solid var(--border-hover)",
        background: "var(--bg-elevated)",
        color: "var(--text-primary)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        pointerEvents: show ? "auto" : "none",
        transition: "all var(--transition)",
        zIndex: 100,
        backdropFilter: "blur(10px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--accent)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--bg-elevated)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
