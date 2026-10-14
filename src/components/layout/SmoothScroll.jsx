"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { easeOutExpo } from "@/lib/smoothScroll";

/**
 * Page-wide smooth scrolling (Lenis) — slow and inertial, like ButStudio / Framer sites.
 * - low lerp: the page trails the wheel a little → soft, floaty motion.
 * - wheelMultiplier < 1: each notch travels less → unhurried, easy to look at the photos.
 * - touch keeps native scrolling so phones never feel sticky.
 * Always on (even with "reduce motion"): Windows reports it whenever animations are off.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      wheelMultiplier: 0.78,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.2,
      easing: easeOutExpo,
      duration: 1.6,
      respectReducedMotion: false,
    });
    window.__lenis = lenis;

    let frame;
    const loop = (t) => {
      lenis.raf(t);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return null;
}
