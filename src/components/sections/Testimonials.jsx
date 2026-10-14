"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { feedbackShots, homestayInfo } from "@/data/homestayData";
import { lockScroll } from "@/lib/smoothScroll";
import { BotanicalBranch } from "@/components/ui/Decorations";

const AUTOPLAY_MS = 4500;

function Stars({ className = "w-3.5 h-3.5" }) {
  return (
    <span className="flex items-center gap-1" aria-label="5 sao">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`${className} fill-[#C29A6B] text-[#C29A6B]`} />
      ))}
    </span>
  );
}

export default function Testimonials() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [paused, setPaused] = useState(false);
  const [zoom, setZoom] = useState(null);

  // Cards visible at once = track width / card width
  const measure = useCallback(() => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !card) return null;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
    const perView = Math.max(1, Math.round((track.clientWidth + 1) / step));
    return { track, step, pages: feedbackShots.length - perView + 1 };
  }, []);

  const goTo = useCallback(
    (target) => {
      const m = measure();
      if (!m) return;
      const next = ((target % m.pages) + m.pages) % m.pages; // wrap around at both ends
      m.track.scrollTo({ left: next * m.step, behavior: "smooth" });
    },
    [measure]
  );

  // Keep the dots in sync with native swipes / trackpad scrolling
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const sync = () => {
      frame = 0;
      const m = measure();
      if (!m) return;
      setPageCount(m.pages);
      setPage(Math.min(m.pages - 1, Math.round(track.scrollLeft / m.step)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(sync);
    };
    sync();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [measure]);

  // Gentle autoplay; pauses while the visitor hovers, focuses, touches the carousel or views a screenshot
  useEffect(() => {
    if (paused || zoom) return;
    const timer = setInterval(() => goTo(page + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, zoom, page, goTo]);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e) => e.key === "Escape" && setZoom(null);
    window.addEventListener("keydown", onKey);
    lockScroll(true);
    return () => {
      window.removeEventListener("keydown", onKey);
      lockScroll(false);
    };
  }, [zoom]);

  const arrowClass =
    "hidden lg:flex absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-[#2A1E16] text-stone-300 hover:text-[#2A1E16] hover:bg-[#C29A6B] hover:border-[#C29A6B] items-center justify-center transition-all duration-300 cursor-pointer shadow-lg";

  return (
    <section id="reviews" data-nav-theme="dark" className="relative w-full bg-[#3A2A1F] text-white pt-14 md:pt-16 lg:pt-20 pb-3 md:pb-4 overflow-hidden">
      {/* Cream arc from the Location section dipping into this one: drawn here, over the same grain, so the seam is invisible */}
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" className="absolute top-0 inset-x-0 z-[1] w-full h-10 md:h-14 lg:h-16 pointer-events-none">
        <path d="M0 0 H1440 V70 Q720 -30 0 70 Z" fill="#FBF8F3" />
      </svg>

      <div className="hidden xl:block absolute top-24 right-8 w-28 h-40 opacity-25 pointer-events-none z-0 rotate-[10deg]">
        <BotanicalBranch flip color="#C29A6B" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header row: title left, Google rating link right */}
        {/* Eyebrow, then title + Google link on one row, the link centred on the title line */}
        <div data-reveal="testi-head" className="mb-5 lg:mb-6">
          <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#C29A6B] border-b border-[#C29A6B]/40 pb-1">
            Cảm nhận của khách
          </span>
          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="font-serif font-medium text-[30px] sm:text-[40px] lg:text-[42px] text-white leading-[1.15] tracking-[-0.01em] text-balance">
              Những feedback <span className="font-script text-[#EAD7BC] text-[1.15em] font-semibold">đáng iu</span> của khách
            </h2>
            <a
              href={homestayInfo.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15 hover:border-[#C29A6B]/60 text-[13px] text-stone-300 hover:text-[#EAD7BC] transition-colors self-start md:self-auto"
            >
              <Stars />
              Đánh giá 5★ trên Google Maps →
            </a>
          </div>
        </div>

          {/* Full-width carousel of the owner's feedback screenshots (revealed as a whole: items scroll sideways) */}
          <div data-reveal="testi-card" data-reveal-delay="200">
            <div
              className="relative"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
            >
              <button onClick={() => goTo(page - 1)} className={`${arrowClass} -left-5`} aria-label="Feedback trước">
                <ChevronLeft className="w-5 h-5" />
              </button>

              <ul
                ref={trackRef}
                aria-label="Ảnh feedback của khách"
                className="flex gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth overscroll-x-contain -mx-1 px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {feedbackShots.map((shot) => (
                  <li
                    key={shot.image}
                    className="snap-start shrink-0 basis-[62%] sm:basis-[calc((100%-32px)/3)] lg:basis-[calc((100%-60px)/4)] xl:basis-[calc((100%-80px)/5)]"
                  >
                    <button
                      onClick={() => setZoom(shot)}
                      aria-label={`Xem feedback của ${shot.name}`}
                      className="group relative block w-full aspect-[3/5] rounded-3xl overflow-hidden border border-white/10 hover:border-[#C29A6B]/60 shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-zoom-in"
                    >
                      <Image src={shot.image} alt={`Feedback của khách ${shot.name}`} fill sizes="(max-width: 640px) 62vw, (max-width: 1024px) 32vw, 260px" className="object-cover object-top saturate-[0.8] transition-all duration-700 group-hover:scale-[1.04] group-hover:saturate-100" />
                      {/* The screenshots already carry their own captions: only a zoom hint on hover */}
                      <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#2A1E16]/60 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Expand className="w-4 h-4" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <button onClick={() => goTo(page + 1)} className={`${arrowClass} -right-5`} aria-label="Feedback tiếp">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress dots */}
            <div className="mt-2 flex justify-center">
              {Array.from({ length: pageCount }, (_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Trang feedback ${i + 1}`} aria-current={i === page} className="group p-2.5 cursor-pointer">
                  <span className={`block h-1.5 rounded-full transition-all duration-500 ${i === page ? "w-7 bg-[#C29A6B]" : "w-1.5 bg-white/25 group-hover:bg-white/50"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>

      {/* Screenshot viewer */}
      {zoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Feedback của ${zoom.name}`}
          onClick={() => setZoom(null)}
          className="fixed inset-0 z-[60] bg-[#1C130D]/92 backdrop-blur-sm flex items-center justify-center p-4 animate-room-fade"
        >
          <div className="relative h-[88vh] aspect-[9/16] max-w-full" onClick={(e) => e.stopPropagation()}>
            <Image src={zoom.image} alt={`Feedback của khách ${zoom.name}`} fill sizes="50vh" className="object-contain rounded-2xl" />
          </div>
          <button
            onClick={() => setZoom(null)}
            aria-label="Đóng"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/40 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
