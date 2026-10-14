"use client";

import Image from "next/image";
import { ArrowRight, KeyRound, BedDouble, Clapperboard, Snowflake, CookingPot, WashingMachine, ShowerHead, SquareParking, MapPin } from "lucide-react";
import { SectionDivider, LittleHouse, Sprinkles } from "@/components/ui/Decorations";
import { useBooking } from "@/components/booking/BookingProvider";

// USP list from the brief, in the owner's order
const amenities = [
  { icon: KeyRound, name: "Check-in tự động", detail: "riêng tư, không chờ đợi" },
  { icon: BedDouble, name: "Giường rộng, êm ái", detail: "1m6 × 2m, ga gối thơm" },
  { icon: Clapperboard, name: "Máy chiếu + Netflix", detail: "đêm phim cho hai người" },
  { icon: Snowflake, name: "Điều hoà mát lạnh", detail: "ở mọi phòng" },
  { icon: CookingPot, name: "Bếp chung", detail: "đầy đủ tiện nghi" },
  { icon: WashingMachine, name: "Giặt sấy miễn phí", detail: "máy giặt & máy sấy" },
  { icon: ShowerHead, name: "Phòng tắm riêng", detail: "sạch sẽ, khép kín" },
  { icon: SquareParking, name: "Chỗ đỗ xe", detail: "để xe an tâm" },
  { icon: MapPin, name: "Kiệt lớn Hùng Vương", detail: "trung tâm TP. Huế" },
];

export default function Amenities() {
  const { openBooking } = useBooking();

  return (
    <section id="amenities" className="relative w-full bg-[#FBF8F3] text-[#2E241C] pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 lg:pb-20 overflow-hidden">
      <SectionDivider className="top-0" />
      <Sprinkles className="hidden xl:block absolute top-32 left-10 w-24 h-20" />

      {/* Little-house watermark on the right edge */}
      <div className="hidden 2xl:block absolute top-1/2 -translate-y-1/2 right-10 w-44 opacity-[0.16] pointer-events-none z-0">
        <LittleHouse className="w-full h-auto" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: organic photo frames */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start">
            <div data-reveal="amen-frame" className="relative w-full max-w-[540px] px-2 sm:px-0">
              {/* Organic pebble frame, kraft contour hugging it */}
              <svg viewBox="-30 -20 700 540" className="w-full h-auto overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bếp chung đầy đủ tiện nghi tại Litaliti">
                <defs>
                  <clipPath id="amenitiesPebbleClip">
                    <path d="M 130 38 C 270 8, 470 18, 562 82 C 632 130, 642 252, 612 342 C 582 432, 482 482, 332 477 C 192 472, 82 467, 42 392 C 6 322, 12 182, 46 112 C 66 72, 96 50, 130 38 Z" />
                  </clipPath>
                  <filter id="amenitiesShadow" x="-20%" y="-20%" width="140%" height="150%">
                    <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#3A2A1F" floodOpacity="0.22" />
                  </filter>
                </defs>
                <path
                  d="M 130 38 C 270 8, 470 18, 562 82 C 632 130, 642 252, 612 342 C 582 432, 482 482, 332 477 C 192 472, 82 467, 42 392 C 6 322, 12 182, 46 112 C 66 72, 96 50, 130 38 Z"
                  transform="rotate(-3 327 250) translate(327 250) scale(1.06) translate(-327 -250)"
                  stroke="#C29A6B"
                  strokeWidth="1.6"
                  strokeOpacity="0.55"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M 130 38 C 270 8, 470 18, 562 82 C 632 130, 642 252, 612 342 C 582 432, 482 482, 332 477 C 192 472, 82 467, 42 392 C 6 322, 12 182, 46 112 C 66 72, 96 50, 130 38 Z"
                  fill="#FFFFFF"
                  stroke="#FFFFFF"
                  strokeWidth="14"
                  filter="url(#amenitiesShadow)"
                />
                <g clipPath="url(#amenitiesPebbleClip)">
                  <image href="/photos/kitchen.jpg" x="0" y="0" width="660" height="500" preserveAspectRatio="xMidYMid slice" />
                </g>
              </svg>

              {/* Laundry badge overlapping the bottom-right: "giặt sấy miễn phí" */}
              <div className="absolute -bottom-6 right-2 sm:-right-4 w-28 sm:w-36 aspect-[3/4] rounded-[46%_54%_58%_42%/44%_56%_44%_56%] border-[5px] border-[#FBF8F3] shadow-2xl overflow-hidden group">
                <Image src="/photos/laundry.jpg" alt="Máy giặt và máy sấy miễn phí" fill sizes="150px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="absolute -bottom-9 right-[34%] sm:right-[30%] font-script text-[#9C7148] text-xl sm:text-2xl -rotate-6 select-none">
                giặt sấy free!
              </span>
            </div>
          </div>

          {/* Right: heading, description, amenity grid, CTA */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4 pt-6 lg:pt-0">
            <div data-reveal="amen-text" className="inline-block">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A67C52] border-b border-[#A67C52]/40 pb-0.5">Tiện nghi</span>
            </div>

            <h2 data-reveal="amen-text" data-reveal-delay="120" className="font-serif text-[28px] sm:text-4xl lg:text-[42px] font-bold text-[#3A2A1F] leading-[1.2] tracking-tight text-balance">
              Đủ đầy như ở nhà, <br />
              <span className="italic font-normal max-sm:block max-sm:text-balance">riêng tư như của riêng hai người</span>
            </h2>

            <p data-reveal="amen-text" data-reveal-delay="240" className="text-justify text-stone-600 text-sm sm:text-base leading-relaxed font-light max-w-xl">
              Những điều nhỏ được chuẩn bị sẵn để bạn chỉ việc đến, cất balo và tận hưởng.
            </p>

            {/* 3 × 3 amenity grid */}
            <ul className="grid grid-cols-3 gap-x-2 sm:gap-x-4 gap-y-5 pt-2">
              {amenities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={item.name} data-reveal="amen-icon" data-reveal-delay={300 + idx * 80} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-3 group">
                    <span className="w-11 h-11 shrink-0 rounded-2xl bg-[#C29A6B]/10 border border-[#C29A6B]/30 flex items-center justify-center text-[#A67C52] group-hover:bg-[#3A2A1F] group-hover:text-[#EAD7BC] group-hover:-rotate-6 transition-all duration-300">
                      <Icon className="w-5 h-5" strokeWidth={1.7} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-serif font-bold text-[12.5px] sm:text-[14px] text-[#3A2A1F] leading-tight text-balance">{item.name}</span>
                      <span className="hidden sm:block text-[11.5px] text-stone-500 font-light mt-0.5 leading-tight">{item.detail}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <div data-reveal="amen-text" data-reveal-delay="900" className="pt-2">
              <button
                onClick={() => openBooking()}
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#C29A6B] hover:bg-[#AD8457] text-[#2A1E16] font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Giữ phòng cho hai người</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
