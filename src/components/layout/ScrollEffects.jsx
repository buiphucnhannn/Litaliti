"use client";

import { useEffect } from "react";
import { smoothScrollTo, cleanUrlHash } from "@/lib/smoothScroll";

// Site-wide motion:
// 1. Scroll reveal — every [data-reveal] element animates in when it enters the viewport and resets once it
//    has fully left, so the effect replays scrolling down or up, on first load or long after.
//    Optional data-reveal-delay="120" staggers siblings.
// 2. In-page links — any <a href="#section"> glides there smoothly and the URL stays hash-free.
export default function ScrollEffects() {
  useEffect(() => {
    window.__revealReady = true;

    // --- Scroll reveal ---------------------------------------------------------------
    // Runs regardless of prefers-reduced-motion: Windows reports "reduce" whenever its Animation effects
    // setting is off, which would silently disable the site's motion for many visitors.
    let showObserver = null;
    let hideObserver = null;
    let mutationObserver = null;

    {
      // Reveal a little after the element's top crosses the bottom edge, so the motion is actually seen
      showObserver = new IntersectionObserver(
        (entries) => {
          for (const { target, isIntersecting } of entries) {
            if (isIntersecting) target.classList.add("is-revealed");
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0 }
      );
      // Reset only when completely off-screen, so nothing blinks while still partly visible
      hideObserver = new IntersectionObserver(
        (entries) => {
          for (const { target, isIntersecting } of entries) {
            if (!isIntersecting) target.classList.remove("is-revealed");
          }
        },
        { threshold: 0 }
      );

      // Track watched nodes outside the DOM, so React-managed attributes stay untouched
      const watched = new WeakSet();
      const watch = (el) => {
        if (watched.has(el)) return;
        watched.add(el);
        const delay = el.getAttribute("data-reveal-delay");
        if (delay) el.style.setProperty("--rd", `${delay}ms`);
        showObserver.observe(el);
        hideObserver.observe(el);
      };
      document.querySelectorAll("[data-reveal]").forEach(watch);

      // Elements mounted later (room switch, gallery filter, modals...) join automatically
      mutationObserver = new MutationObserver((mutations) => {
        for (const m of mutations) {
          for (const node of m.addedNodes) {
            if (node.nodeType !== 1) continue;
            if (node.matches("[data-reveal]")) watch(node);
            node.querySelectorAll?.("[data-reveal]").forEach(watch);
          }
        }
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    // --- Smooth in-page links -----------------------------------------------------------
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target.closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault(); // also stops next/link from writing the hash
      // Wait a beat: a link in the mobile menu first closes it (which unlocks scrolling), then we glide
      setTimeout(() => smoothScrollTo(target), 60);
    };
    // Capture phase: runs before React/next-link handlers
    document.addEventListener("click", onClick, true);

    // Opened with a hash (shared link, reload): land in the same polished spot, then drop the hash
    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      cleanUrlHash();
      const target = document.getElementById(id);
      if (target) setTimeout(() => smoothScrollTo(target), 120);
    }

    return () => {
      showObserver?.disconnect();
      hideObserver?.disconnect();
      mutationObserver?.disconnect();
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
