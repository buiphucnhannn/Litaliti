"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WaveHeroBottom } from "@/components/ui/WaveDividers";
import { useBooking } from "@/components/booking/BookingProvider";

const SLIDE_MS = 6000;

const heroSlides = [
  {
    id: "movie",
    image: "/photos/hero-movie.jpg",
    label: "Đêm phim Netflix",
    position: "object-[50%_88%]",
  },
  {
    id: "room",
    image: "/photos/hero-room.jpg",
    label: "Giấc ngủ thật êm",
    position: "object-[50%_80%]",
  },
];

export default function Hero() {
  const { openBooking } = useBooking();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance; restarts the timer whenever the visitor picks a slide
  useEffect(() => {
    const timer = setTimeout(() => setActiveIndex((prev) => (prev + 1) % heroSlides.length), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    // Extra height = WaveHeroBottom height, so the photo fills the whole first screen and the wave only shows on scroll
    <section
      data-nav-theme="dark"
      id="hero"
      className="relative w-full h-[calc(100dvh+3.5rem)] md:h-[calc(100dvh+5rem)] lg:h-[calc(100dvh+6rem)] min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#2A1E16] text-white"
    >
      {/* Full-width stacked crossfading backgrounds, each with a slow push-in while active */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              activeIndex === idx ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.label}
              fill
              preload={idx === 0}
              quality={90}
              sizes="100vw"
              className={`object-cover origin-bottom ${slide.position} ${activeIndex === idx ? "animate-ken-burns" : ""}`}
            />
          </div>
        ))}

        {/* Warm espresso wash: dark on the left for the copy, the room stays bright on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F150F]/90 via-[#1F150F]/60 md:w-3/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F150F]/55 via-transparent to-[#1F150F]/35 pointer-events-none" />
      </div>

      {/* Top spacer for fixed navbar */}
      <div className="h-20 md:h-28 shrink-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full my-auto">
        <div className="max-w-2xl lg:max-w-[880px] space-y-6">
          {/* Eyebrow */}
          <div data-reveal="hero" className="inline-flex items-center gap-2">
            <span className="w-8 h-[2px] rounded-full bg-[#E3C9A4] shadow-[0_1px_6px_rgba(28,18,11,0.6)]" />
            <span className="text-halo text-xs md:text-sm uppercase tracking-[0.28em] text-[#EAD7BC] font-bold">
              Litaliti Homestay – Huế
            </span>
          </div>

          {/* Heading: Playfair Display + Dancing Script */}
          <h1
            data-reveal="hero"
            data-reveal-delay="150"
            className="text-[34px] sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.18] tracking-tight text-halo-strong"
          >
            <span className="font-display font-bold block text-[#FFFCF7]">Một góc nhỏ</span>
            <span className="font-script text-[#EED3AB] text-[1.04em] sm:text-[1.08em] font-semibold block -mt-1 sm:-mt-2 lg:whitespace-nowrap">
              để thương nhau <br className="sm:hidden" />
              giữa lòng Huế
            </span>
          </h1>

          {/* Subtitle */}
          <p data-reveal="hero" data-reveal-delay="320" className="text-justify text-halo text-white/95 text-sm sm:text-base md:text-lg max-w-[600px] font-normal leading-relaxed">
            Không gian riêng tư, ấm cúng và thật lãng mạn cho những buổi hẹn hò — từ vài giờ bên nhau đến cả tháng sống
            chậm ở Huế.
          </p>

          {/* CTAs */}
          <div data-reveal="hero" data-reveal-delay="470" className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => openBooking()}
              className="group inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 bg-[#C29A6B] hover:bg-[#AD8457] text-[#2A1E16] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-[0_10px_30px_-6px_rgba(28,18,11,0.7)] ring-1 ring-[#EAD7BC]/40 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Đặt phòng ngay</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <Link
              href="#rooms"
              className="text-halo inline-flex items-center gap-2 px-5 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white border border-white/40 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm transition-all"
            >
              Xem phòng
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom area: slide picker pinned bottom-right, then the wave */}
      <div className="relative z-10 w-full shrink-0">
        <div className="flex items-end justify-between gap-4 px-5 pb-6 sm:px-7 sm:pb-7 lg:px-8 lg:pb-8">
          {/* Slide picker with progress (the active thumb fills up while its photo is on) */}
          <div
            data-reveal="hero-thumbs"
            data-reveal-delay="650"
            className="ml-auto flex items-center gap-2.5 p-2 bg-black/55 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"
          >
            {heroSlides.map((slide, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveIndex(idx)}
                  title={slide.label}
                  aria-label={`Xem ảnh: ${slide.label}`}
                  aria-current={isActive}
                  className={`group relative flex items-center gap-2.5 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    isActive ? "bg-white/10" : "opacity-65 hover:opacity-95"
                  }`}
                >
                  <span
                    className={`relative w-14 h-10 sm:w-18 sm:h-12 rounded-xl overflow-hidden shrink-0 transition-all ${
                      isActive ? "ring-2 ring-[#C29A6B]" : "ring-1 ring-white/15"
                    }`}
                  >
                    <Image src={slide.image} alt="" fill sizes="80px" className="object-cover" />
                  </span>
                  <span className="hidden md:block pr-3 text-left">
                    <span className="block text-[10px] tabular-nums tracking-[0.2em] text-[#EAD7BC]">0{idx + 1}</span>
                    <span className="block text-[12px] text-white whitespace-nowrap">{slide.label}</span>
                  </span>
                  {/* Progress bar */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white/10">
                    {isActive && (
                      <span
                        key={activeIndex}
                        className="block h-full bg-[#C29A6B] origin-left animate-[hero-progress_linear_both]"
                        style={{ animationDuration: `${SLIDE_MS}ms` }}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Seamless full-width wave into the cream background */}
        <WaveHeroBottom fill="#FBF8F3" />
      </div>
    </section>
  );
}
