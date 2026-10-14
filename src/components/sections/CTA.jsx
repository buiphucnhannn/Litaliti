"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useBooking } from "@/components/booking/BookingProvider";
import { homestayInfo } from "@/data/homestayData";

export default function CTA() {
  const { openBooking } = useBooking();

  return (
    <section data-nav-theme="dark" className="relative w-full h-[380px] sm:h-[410px] md:h-[440px] overflow-hidden flex items-center justify-center text-center text-white">
      {/* Full-bleed warm room photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photos/hero-room.jpg"
          alt="Phòng ngủ ấm áp với đèn lồng giấy tại Litaliti"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-[50%_62%]"
        />
        {/* Soft dark pool behind the text, warm edges kept */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_68%_at_50%_55%,rgba(42,30,22,0.78),rgba(42,30,22,0.45)_70%,rgba(42,30,22,0.2))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#2A1E16]/90 to-transparent" />
      </div>

      {/* Symmetric arc mirroring the top of Testimonials */}
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" className="absolute top-0 inset-x-0 z-[5] w-full h-12 md:h-16 lg:h-20 pointer-events-none">
        <path d="M0 0 V30 Q720 130 1440 30 V0 Z" fill="#3A2A1F" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-10 sm:pt-12 md:pt-16 space-y-4 sm:space-y-6">
        <h2 data-reveal="cta-title" className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#FBF8F3] tracking-tight leading-tight drop-shadow-md">
          Hẹn gặp hai bạn ở{" "}
          <span className="font-script font-semibold text-[#EAD7BC] text-[1.12em]">Litaliti</span>
        </h2>

        <p data-reveal="cta-rise" data-reveal-delay="250" className="text-stone-200 text-sm sm:text-lg font-light tracking-wide max-w-xl mx-auto drop-shadow text-balance">
          Một căn phòng xinh. Một bộ phim hay. Một Huế thật gần.
        </p>

        <div data-reveal="cta-rise" data-reveal-delay="420" className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => openBooking()}
            className="group inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 bg-[#C29A6B] hover:bg-[#AD8457] text-[#2A1E16] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-2xl hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Đặt phòng ngay</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href={`tel:${homestayInfo.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-full border border-white/50 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold tracking-wider transition-all"
          >
            Gọi {homestayInfo.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
