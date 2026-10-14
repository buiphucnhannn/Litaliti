"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { homestayInfo } from "@/data/homestayData";
import { smoothScrollTo } from "@/lib/smoothScroll";

// Quick-contact stack (Zalo · call · back to top); appears once the visitor has scrolled past the hero
export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hidden on the hero and again over the footer, where the same contacts are already shown
    const onScroll = () => {
      const nearBottom = window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 220;
      setVisible(window.scrollY > window.innerHeight * 0.6 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base =
    "relative w-12 h-12 rounded-full flex items-center justify-center shadow-[0_10px_24px_-8px_rgba(42,30,22,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 cursor-pointer";

  return (
    <div
      className={`fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-30 flex flex-col items-center gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <a href={homestayInfo.zalo} target="_blank" rel="noopener noreferrer" aria-label="Nhắn Zalo cho Litaliti" className={`${base} bg-[#0068FF] text-white group`}>
        {/* Soft ping so the chat button is noticed without being loud */}
        <span className="absolute inset-0 rounded-full bg-[#0068FF]/40 animate-ping [animation-duration:2.4s]" />
        <span className="relative font-bold text-[13px] tracking-tight">Zalo</span>
        <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-full bg-white text-[#3A2A1F] text-xs font-medium whitespace-nowrap shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
          Tư vấn nhanh qua Zalo
        </span>
      </a>
      <a href={`tel:${homestayInfo.phone}`} aria-label={`Gọi ${homestayInfo.phoneDisplay}`} className={`${base} bg-[#C29A6B] text-[#2A1E16] group`}>
        <Phone className="w-5 h-5" strokeWidth={2} />
        <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-full bg-white text-[#3A2A1F] text-xs font-medium whitespace-nowrap shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
          {homestayInfo.phoneDisplay}
        </span>
      </a>
      {/* Back to top — skipped on phones, where the stack would cover too much of a narrow screen */}
      <button
        onClick={() => smoothScrollTo("hero")}
        aria-label="Lên đầu trang"
        className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center bg-white/90 text-[#3A2A1F] border border-[#C29A6B]/40 backdrop-blur shadow-[0_10px_24px_-8px_rgba(42,30,22,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 cursor-pointer">
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
