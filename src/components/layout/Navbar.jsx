"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useBooking } from "@/components/booking/BookingProvider";
import { lockScroll } from "@/lib/smoothScroll";
import { navLinks as navItems, homestayInfo } from "@/data/homestayData";

const cn = (...c) => c.filter(Boolean).join(" ");

/**
 * Floating frosted "pill" header (after ButStudio):
 * - over a section tagged data-nav-theme="dark" (hero, reviews, CTA, footer): dark glass, white text;
 *   everywhere else: misty cream glass, espresso text.
 * - centre menu with a solid active pill (scroll-spy), CTA with an arrow circle,
 *   full-screen cream menu on mobile with links that rise in one by one.
 */
export default function Navbar() {
  const { openBooking } = useBooking();
  const [onDark, setOnDark] = useState(true);
  const [activeHref, setActiveHref] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // Theme: whichever tagged section sits under the header's centre line (top 20px + 64/2)
      const y = window.innerWidth < 640 ? 44 : 52;
      let theme = "light";
      document.querySelectorAll("[data-nav-theme]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= y && r.bottom >= y) theme = el.dataset.navTheme;
      });
      setOnDark(theme === "dark");

      // Scroll-spy: the last section whose top has passed ~45% of the screen (none while on the hero)
      let current = null;
      const line = window.innerHeight * 0.45;
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section && section.getBoundingClientRect().top <= line) current = item.href;
      }
      setActiveHref(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    const late = setTimeout(update, 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      clearTimeout(late);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const dark = onDark && !open;

  const handleBooking = () => {
    setOpen(false);
    openBooking();
  };

  return (
    <header className="fixed inset-x-3 top-3 sm:inset-x-5 sm:top-5 z-40">
      {/* One-shot drop-in on load */}
      <div
        data-nav-capsule
        className={cn(
          "animate-[rv-nav_0.8s_var(--rv-ease)_both] mx-auto flex h-[60px] sm:h-[64px] w-full max-w-[1320px] items-center justify-between gap-3 rounded-full border pl-2 pr-2 sm:pl-2.5 backdrop-blur-xl transition-all duration-500",
          dark
            ? "border-white/15 bg-[#2A1E16]/40 text-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]"
            : "border-white/70 bg-[#F4EDE4]/80 text-[#3A2A1F] shadow-[0_12px_40px_-24px_rgba(58,42,31,0.45)]"
        )}
      >
        {/* Logo */}
        <Link href="#hero" onClick={() => setOpen(false)} className="flex items-center gap-2.5 group shrink-0">
          <span
            className={cn(
              "relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border shadow-md transition-all duration-500 group-hover:scale-105 group-hover:-rotate-6",
              dark ? "border-[#EAD7BC]/50" : "border-[#C29A6B]/50"
            )}
          >
            <Image src="/logo.jpg" alt="Litaliti Homestay Huế" fill sizes="44px" loading="eager" className="object-cover" />
          </span>
          <span className="block leading-tight">
            <span className={cn("block font-serif text-[16px] sm:text-[18px] font-bold tracking-[0.06em] transition-colors duration-500", dark ? "text-[#EAD7BC]" : "text-[#3A2A1F]")}>
              Litaliti
            </span>
            <span className={cn("block text-[9px] sm:text-[10px] tracking-[0.26em] uppercase transition-colors duration-500", dark ? "text-white/65" : "text-[#3A2A1F]/55")}>
              Homestay – Huế
            </span>
          </span>
        </Link>

        {/* Desktop menu: solid pill on the active item */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navItems.map((item) => {
            const active = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 xl:px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300",
                  active
                    ? dark
                      ? "bg-white text-[#3A2A1F]"
                      : "bg-[#3A2A1F] text-white"
                    : dark
                      ? "text-white/80 hover:bg-white/10 hover:text-white"
                      : "text-[#3A2A1F]/75 hover:bg-[#3A2A1F]/5 hover:text-[#3A2A1F]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={handleBooking}
            className={cn(
              "group hidden min-[400px]:inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-4 sm:pl-5 text-[13px] font-medium whitespace-nowrap transition-all duration-300 cursor-pointer",
              dark ? "bg-white text-[#3A2A1F] hover:bg-[#F4EDE4]" : "bg-[#3A2A1F] text-white hover:bg-[#2A1E16]"
            )}
          >
            Đặt phòng
            <span
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#C29A6B] text-[#2A1E16] transition-all duration-300 group-hover:translate-x-0.5"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </span>
          </button>

          {/* Mobile menu toggle: three thin lines (middle one shorter) */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Đóng menu" : "Mở menu điều hướng"}
            aria-expanded={open}
            className={cn(
              "lg:hidden flex h-11 w-11 items-center justify-center rounded-full transition cursor-pointer",
              dark ? "text-white hover:bg-white/10" : "text-[#3A2A1F] hover:bg-[#3A2A1F]/5"
            )}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <span className="flex flex-col items-end gap-[5px]">
                <span className="block h-px w-6 bg-current" />
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-6 bg-current" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={cn(
          "fixed inset-0 -z-10 bg-[#FBF8F3] transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav className="flex h-full flex-col px-7 pt-28 pb-8">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between border-b border-[#3A2A1F]/10 py-3.5 font-serif text-2xl transition-all duration-500",
                activeHref === item.href ? "text-[#A67C52]" : "text-[#3A2A1F]",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
            >
              {item.label}
              <ArrowRight className="h-5 w-5 text-[#A67C52]" strokeWidth={1.6} />
            </Link>
          ))}
          <button
            type="button"
            onClick={handleBooking}
            className={cn(
              "mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#3A2A1F] px-6 py-4 text-sm font-medium text-white transition-all duration-500 cursor-pointer",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            style={{ transitionDelay: open ? `${120 + navItems.length * 50}ms` : "0ms" }}
          >
            Đặt phòng ngay <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-auto text-center text-xs text-stone-500">
            Hotline / Zalo:{" "}
            <a href={`tel:${homestayInfo.phone}`} className="font-semibold text-[#3A2A1F]">
              {homestayInfo.phoneDisplay}
            </a>
          </p>
        </nav>
      </div>
    </header>
  );
}
