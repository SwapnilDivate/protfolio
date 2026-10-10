import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor]");
      setIsHovering(!!interactive);
    };
    const onLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: isHovering ? 48 : 16,
        height: isHovering ? 48 : 16,
        border: `1.5px solid ${isHovering ? "var(--accent-light)" : "var(--accent)"}`,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: "width 0.25s ease, height 0.25s ease, opacity 0.3s ease, border-color 0.25s ease",
        backgroundColor: isHovering ? "var(--accent-glow)" : "transparent",
        backdropFilter: "invert(0)",
      }}
    />
  );
}
