"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import HueCitadelSketch from "@/components/ui/HueCitadelSketch";
import { lockScroll } from "@/lib/smoothScroll";
import { BotanicalBranch, SectionDivider } from "@/components/ui/Decorations";
import { galleryItems } from "@/data/homestayData";

const filters = ["Tất cả", "Phòng nghỉ", "Không gian chung", "Tiện ích"];

// Collage slots (desktop): two tall tilted cards framing a stacked middle pair.
// On mobile the same cards fall back to a plain 2x2 grid.
const slots = [
  "lg:left-[0%] lg:top-[5%] lg:w-[31%] lg:h-[82%] lg:-rotate-[4deg] rounded-[22px] lg:rounded-tl-[90px]",
  "lg:left-[33.5%] lg:top-[0%] lg:w-[31%] lg:h-[44%] lg:rotate-[2.5deg] rounded-[22px] lg:rounded-tr-[48px]",
  "lg:left-[33.5%] lg:top-[47%] lg:w-[31%] lg:h-[50%] lg:-rotate-[2deg] rounded-[22px] lg:rounded-b-[999px]",
  "lg:left-[67.5%] lg:top-[8%] lg:w-[31%] lg:h-[80%] lg:rotate-[6deg] rounded-[22px] lg:rounded-tr-[90px] lg:rounded-bl-[36px]",
];

const pad = (n) => String(n).padStart(2, "0");

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  // Lightbox: the list being browsed + current index (null = closed)
  const [lightbox, setLightbox] = useState(null);
  const touchStartX = useRef(null);

  const filtered = activeFilter === "Tất cả" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);
  const collage =
    activeFilter === "Tất cả" ? galleryItems.filter((item) => item.featured).sort((a, b) => a.featured - b.featured) : filtered.slice(0, 4);

  const openLightbox = (list, index) => setLightbox({ list, index });
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const step = useCallback((dir) => setLightbox((lb) => lb && { ...lb, index: (lb.index + dir + lb.list.length) % lb.list.length }), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    lockScroll(true);
    return () => {
      window.removeEventListener("keydown", onKey);
      lockScroll(false);
    };
  }, [lightbox, closeLightbox, step]);

  const current = lightbox && lightbox.list[lightbox.index];

  return (
    <>
      <section
        id="gallery"
        className="relative w-full bg-[#FBF8F3] text-[#2E241C] pt-16 md:pt-20 lg:pt-28 pb-20 md:pb-20 lg:pb-28 overflow-hidden"
      >
        <SectionDivider className="top-2 md:top-3 lg:top-1.5" />

        <div aria-hidden="true" className="hidden xl:block absolute top-24 right-8 w-24 h-36 opacity-30 rotate-[18deg] pointer-events-none z-0">
          <BotanicalBranch flip />
        </div>

        {/* Huế skyline sketch fading into the bottom-left corner */}
        <div className="absolute bottom-10 -left-10 w-[520px] lg:w-[680px] opacity-40 pointer-events-none z-0 [mask-image:linear-gradient(to_right,black_45%,transparent),linear-gradient(to_top,black_60%,transparent)] [mask-composite:intersect]">
          <HueCitadelSketch className="w-full h-auto" opacity={0.55} />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 lg:gap-14 xl:gap-20 items-center">
            {/* Left: heading, filters, description, CTA */}
            <div data-reveal="gallery-text">
              <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#A67C52] border-b border-[#A67C52]/40 pb-1">
                Hình ảnh
              </span>

              <h2 className="mt-4 font-serif font-medium text-[#3A2A1F] text-[30px] sm:text-[42px] lg:text-[38px] xl:text-[44px] leading-[1.15] text-balance tracking-[-0.01em]">
                Những góc nhỏ,
                <span className="block">những khoảnh khắc thật&nbsp;xinh</span>
              </h2>

              {/* Filter pills */}
              <div role="tablist" aria-label="Lọc hình ảnh" className="mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                {filters.map((filter) => {
                  const active = activeFilter === filter;
                  const count = filter === "Tất cả" ? galleryItems.length : galleryItems.filter((i) => i.category === filter).length;
                  return (
                    <button
                      key={filter}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveFilter(filter)}
                      className={`shrink-0 whitespace-nowrap px-3 sm:px-4 py-2 sm:py-1.5 rounded-full text-[12.5px] sm:text-[13px] transition-all cursor-pointer border ${
                        active
                          ? "bg-[#3A2A1F] border-[#3A2A1F] text-white shadow-[0_6px_14px_-6px_rgba(58,42,31,0.6)]"
                          : "border-transparent text-stone-600 hover:text-[#3A2A1F] hover:border-[#C29A6B]/40 hover:bg-white/60"
                      }`}
                    >
                      {filter}
                      <sup className={`ml-1 text-[10px] ${active ? "text-[#EAD7BC]" : "text-stone-400"}`}>{count}</sup>
                    </button>
                  );
                })}
              </div>

              <p className="text-justify mt-6 text-stone-600 text-[14px] sm:text-[15px] leading-[1.75] max-w-[440px]">
                Đèn lồng giấy, gấu bông, gỗ trầm và ánh vàng của máy chiếu — mỗi góc ở Litaliti đều được chăm chút để bạn
                muốn chụp thật nhiều ảnh.
              </p>

              <button
                onClick={() => openLightbox(filtered, 0)}
                className="group mt-8 inline-flex items-center gap-3 pl-7 pr-6 py-3.5 rounded-full bg-[#C29A6B] hover:bg-[#AD8457] text-[#2A1E16] text-[15px] font-medium shadow-[0_12px_24px_-12px_rgba(166,124,82,0.85)] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Xem toàn bộ {filtered.length} ảnh
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
              </button>
            </div>

            {/* Right: tilted photo collage */}
            <div className="relative lg:pr-4">
              <div key={activeFilter} className="grid grid-cols-2 gap-3 sm:gap-4 lg:block lg:relative lg:aspect-[16/12] animate-room-fade">
                {collage.map((item, idx) => (
                  <button
                    key={item.id}
                    data-reveal="gallery-card"
                    data-reveal-delay={idx * 140}
                    onClick={() => openLightbox(filtered, Math.max(0, filtered.indexOf(item)))}
                    aria-label={`Xem ảnh: ${item.title}`}
                    className={`group relative aspect-[4/5] lg:aspect-auto lg:absolute overflow-hidden border-[5px] border-white bg-stone-200 shadow-[0_22px_40px_-18px_rgba(58,42,31,0.45)] transition-transform duration-500 hover:z-20 hover:scale-[1.03] cursor-pointer ${slots[idx]}`}
                  >
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 50vw, 22vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute inset-x-0 bottom-0 p-3 pt-10 bg-gradient-to-t from-black/55 to-transparent text-left text-white text-[12px] leading-snug opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Handwritten note under the tall left card */}
              <p data-reveal="gallery-note" data-reveal-delay="700" className="hidden lg:block absolute left-[3%] -bottom-14 xl:-bottom-16 -rotate-[8deg] font-script text-[#9C7148] text-[26px] xl:text-[30px] leading-tight pointer-events-none select-none">
                A little home
                <span className="block pl-6">with a warm heart.</span>
              </p>

              <div className="hidden lg:block absolute -right-2 -bottom-14 w-28 h-40 opacity-45 pointer-events-none -z-10 rotate-[12deg]">
                <BotanicalBranch flip />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={closeLightbox}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(dx) > 40) step(dx > 0 ? -1 : 1);
            touchStartX.current = null;
          }}
          className="fixed inset-0 z-[60] bg-[#1C130D]/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10 animate-room-fade"
        >
          <div key={current.id} className="relative w-full max-w-5xl h-[72vh] animate-room-fade" onClick={(e) => e.stopPropagation()}>
            <Image src={current.image} alt={current.title} fill sizes="90vw" className="object-contain" />
          </div>

          <div className="absolute bottom-5 inset-x-0 flex flex-col items-center gap-1 text-white pointer-events-none px-6 text-center">
            <span className="font-serif text-lg">{current.title}</span>
            <span className="text-xs tracking-[0.2em] text-[#C29A6B] tabular-nums">
              {pad(lightbox.index + 1)} / {pad(lightbox.list.length)}
            </span>
          </div>

          {lightbox.list.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Ảnh trước"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 bg-white/10 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Ảnh tiếp theo"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 bg-white/10 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <button
            onClick={closeLightbox}
            aria-label="Đóng"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/40 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
}
