"use client";

// Slow, inertial page scrolling (Lenis, tuned like ButStudio) + eased in-page jumps that land each
// section in its best viewing position and keep the URL free of "#hash" fragments.

export const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

// Bottom edge of the floating header capsule (plus breathing room)
function headerOffset() {
  const capsule = document.querySelector("header [data-nav-capsule]");
  const bottom = capsule ? capsule.getBoundingClientRect().bottom : 84;
  return Math.round(bottom + (window.innerWidth < 768 ? 8 : 12));
}

// Where a section looks best: centred in the space under the header when it fits,
// otherwise its top tucked just under the header.
export function sectionTargetY(el) {
  if (el.id === "hero") return 0;
  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY;
  const offset = headerOffset();
  const available = window.innerHeight - offset;
  const slack = available - rect.height;
  return slack > 0 ? top - offset - slack / 2 : top - offset;
}

export function cleanUrlHash() {
  if (window.location.hash) {
    window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
  }
}

export function smoothScrollTo(target) {
  if (typeof window === "undefined") return;
  const el = typeof target === "string" ? document.getElementById(target.replace(/^#/, "")) : target;
  if (!el) return;

  const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const y = Math.max(0, Math.min(sectionTargetY(el), maxY));
  cleanUrlHash();

  // A long, unhurried glide that settles softly; force: still runs right after a menu unlocks scrolling
  if (window.__lenis) window.__lenis.scrollTo(y, { duration: 1.8, easing: easeOutExpo, force: true });
  else window.scrollTo({ top: y, behavior: "smooth" });
}

// Shared scroll lock for modals, lightboxes and the mobile menu (reference-counted, no layout jump).
// Stopping Lenis matters: with smooth scrolling on, overflow:hidden alone would not stop the wheel.
let lockCount = 0;
export function lockScroll(lock) {
  if (typeof document === "undefined") return;
  lockCount = Math.max(0, lockCount + (lock ? 1 : -1));
  const html = document.documentElement;
  if (lockCount > 0) {
    const scrollbar = window.innerWidth - html.clientWidth;
    html.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    window.__lenis?.stop();
  } else {
    html.style.overflow = "";
    document.body.style.paddingRight = "";
    window.__lenis?.start();
  }
}
