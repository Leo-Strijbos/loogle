"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps a paragraph so it fades and lifts into place the first time it
 * scrolls into view, then stays.
 *
 * The pre-hidden state lives entirely in CSS, gated on the `data-js` flag the
 * root layout's inline script stamps on <html> before first paint (see
 * .reveal in globals.css) — so a visitor with JavaScript off, or a crawler,
 * always gets the paragraph plainly visible, immediately. This component only
 * ever adds the "revealed" class once IntersectionObserver says the element
 * is on screen; it never hides anything itself.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Trigger a little before the paragraph is fully in view, and once only —
    // re-hiding on scroll back up reads as glitchy rather than intentional.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className={`reveal${revealed ? " revealed" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </p>
  );
}
