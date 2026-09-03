"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Covers the last keyframe in globals.css after a click, plus a little. */
const OPEN_MS = 2000;

/**
 * The envelope you click to open the letter.
 *
 * Whether it appears at all is decided before first paint by the inline script
 * in the root layout, which sets `data-open="letter"` on <html>. This component
 * only drives it from there: click or Enter runs the open sequence, Escape or a
 * scroll dismisses it, and either way the session is marked so it does not ask
 * again. The letter is in the server HTML underneath the whole time.
 */
export function EnvelopeOpen() {
  const [showing, setShowing] = useState(true);
  const finished = useRef(false);

  const remember = useCallback(() => {
    try {
      sessionStorage.setItem("leo:open", "1");
    } catch {
      // Private mode, or storage is blocked. It will ask again next visit.
    }
  }, []);

  /** Play the open, then hand the page over. */
  const open = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    remember();
    document.documentElement.dataset.open = "opening";
    window.setTimeout(() => {
      document.documentElement.dataset.open = "done";
      setShowing(false);
    }, OPEN_MS);
  }, [remember]);

  /** For someone who would rather just read. */
  const dismiss = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    remember();
    document.documentElement.dataset.open = "done";
    setShowing(false);
  }, [remember]);

  useEffect(() => {
    const root = document.documentElement;

    // Not a first visit, reduced motion, or JavaScript arrived too late to
    // matter. CSS already has it hidden, so drop it on the next tick — never
    // synchronously, which would cascade a second render.
    if (root.dataset.open !== "letter") {
      const drop = window.setTimeout(() => setShowing(false), 0);
      return () => window.clearTimeout(drop);
    }

    // Deliberately not focused on mount: a programmatic focus draws a
    // focus-visible ring around the envelope on load, and it would take focus
    // away from wherever the viewer expects it.
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
        return;
      }
      // Escape says "not interested"; Tab says "I am navigating by keyboard",
      // and letting that land on links hidden behind the overlay would be
      // worse than dropping the envelope.
      if (event.key === "Escape" || event.key === "Tab") dismiss();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel", dismiss, { passive: true });
    window.addEventListener("touchmove", dismiss, { passive: true });

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchmove", dismiss);
    };
  }, [dismiss, open]);

  if (!showing) return null;

  return (
    // Clicking anywhere on the overlay opens it; the button carries the
    // keyboard and assistive-technology affordance.
    <div className="open-stage" onClick={open}>
      <button type="button" className="open-hit" aria-label="Open the letter">
        <div className="open-perspective">
          <div className="open-envelope">
            <div className="open-back" aria-hidden="true" />
            <div className="open-letter-wrap" aria-hidden="true">
              <div className="open-letter">
                <span className="font-display text-[1.35rem] leading-none text-ink">
                  Hi, I&apos;m Leo.
                </span>
                <span className="open-letter-line w-full" />
                <span className="open-letter-line w-[94%]" />
                <span className="open-letter-line w-[97%]" />
                <span className="open-letter-line w-[62%] bg-accent-tint" />
                <span className="open-letter-line w-[88%]" />
              </div>
            </div>
            <div className="open-front" aria-hidden="true" />
            <div className="open-flap-wrap" aria-hidden="true">
              <div className="open-flap" />
            </div>
            <div className="open-seal" aria-hidden="true" />
          </div>
        </div>
      </button>
      <p className="open-hint" aria-hidden="true">
        click to open
      </p>
    </div>
  );
}
