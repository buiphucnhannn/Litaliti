"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, BedDouble, Scan, Bath } from "lucide-react";
import HueCitadelSketch from "@/components/ui/HueCitadelSketch";
import { LittleHouse, BotanicalBranch, SectionDivider, DiamondMark, Sparkle, TinyHeart } from "@/components/ui/Decorations";
import { useBooking } from "@/components/booking/BookingProvider";
import { rooms } from "@/data/homestayData";

const pad = (n) => String(n).padStart(2, "0");

// Folder-tab silhouette: rounded top-left, sloping right edge that tucks under the next tab
function TabShape({ active }) {
  return (
    <svg
      viewBox="0 0 200 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full transition-all duration-500 ${active ? "drop-shadow-[0_10px_18px_rgba(58,42,31,0.28)]" : ""}`}
    >
      <path
        d="M0 80 V26 Q0 4 22 4 H138 Q156 4 164 20 L182 64 Q189 80 200 80 Z"
        fill={active ? "#3A2A1F" : "rgba(244,237,228,0.85)"}
        stroke={active ? "#3A2A1F" : "rgba(166,124,82,0.35)"}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function NextButton({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      aria-label="Ảnh tiếp theo"
      className={`shrink-0 w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-white text-[#3A2A1F] border border-stone-200/80 shadow-[0_10px_24px_-10px_rgba(58,42,31,0.35)] hover:bg-[#3A2A1F] hover:text-white flex items-center justify-center transition-colors cursor-pointer ${className}`}
    >
      <ChevronRight className="w-5 h-5" strokeWidth={1.6} />
    </button>
  );
}

export default function Rooms() {
  const { openBooking } = useBooking();
  const [roomIndex, setRoomIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const touchStartX = useRef(null);

  const room = rooms[roomIndex];
  const total = room.images.length;

  const selectRoom = (idx) => {
    setRoomIndex(idx);
    setImageIndex(0);
  };
  const prevImage = () => setImageIndex((i) => (i - 1 + total) % total);
  const nextImage = () => setImageIndex((i) => (i + 1) % total);

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? prevImage : nextImage)();
    touchStartX.current = null;
  };

  return (
    <section
      id="rooms"
      className="relative w-full bg-[#FBF8F3] text-[#2E241C] pt-12 sm:pt-16 lg:pt-24 lg:short:pt-[84px] pb-20 sm:pb-24 lg:pb-20 lg:short:pb-16 overflow-hidden"
    >
      <SectionDivider className="top-0" />

      {/* Background illustrations */}
      <div className="absolute top-6 right-4 xl:right-10 w-64 sm:w-[340px] lg:w-[380px] opacity-30 pointer-events-none z-0">
        <HueCitadelSketch className="w-full h-auto" opacity={0.6} />
      </div>
      <div className="hidden 2xl:block absolute top-[50%] right-8 w-[150px] opacity-25 pointer-events-none z-0 rotate-[6deg]">
        <LittleHouse className="w-full h-auto" />
      </div>
      <div className="hidden 2xl:block absolute bottom-12 left-8 w-28 h-40 opacity-35 pointer-events-none z-0 -rotate-6">
        <BotanicalBranch />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section header */}
        {/* Eyebrow, then title + intro on one row (intro centred on the title line), subtitle below */}
        <div data-reveal="rooms-head" className="mb-10 lg:mb-11 lg:short:mb-9">
          <div className="flex items-center gap-2.5 text-[#A67C52]">
            <DiamondMark className="w-3.5 h-3.5" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold">Loại phòng</span>
          </div>
          <div className="mt-3 lg:mt-2 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,400px)] gap-4 xl:gap-10 items-center">
            <div className="min-w-0 flex items-center gap-4">
              <h2 className="font-serif font-medium text-[#3A2A1F] text-[32px] sm:text-[46px] text-balance lg:text-[48px] xl:text-[54px] lg:short:text-[44px] leading-[1.08] xl:whitespace-nowrap tracking-[-0.01em]">
                Ba căn phòng, ba câu chuyện
              </h2>
              <svg viewBox="0 0 120 30" aria-hidden="true" className="hidden md:block w-24 xl:w-28 h-auto text-[#A67C52] shrink-0 mt-3" fill="none" stroke="currentColor" strokeLinecap="round">
                <path d="M4 20 C30 6 70 4 100 10 C82 22 40 28 6 22" strokeWidth="1.1" />
                <circle cx="112" cy="10" r="2" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <p className="text-justify hidden sm:block text-stone-600 text-[13px] sm:text-sm leading-[1.75] max-w-[420px]">
              Mỗi căn phòng tại Litaliti được bày biện tỉ mỉ theo một tâm trạng riêng — chọn căn bạn thấy &ldquo;đúng
              vibe&rdquo; nhất cho buổi hẹn của hai người.
            </p>
          </div>
          <p className="text-justify mt-3 lg:mt-2 text-stone-600 text-sm sm:text-base lg:text-[16px] leading-relaxed">
            3 căn phòng riêng tư với giường 1m6 × 2m, WC khép kín, máy chiếu và máy lạnh.
          </p>
        </div>

        {/* Showcase: wide photo left, tabs + details right (tabs sit above the photo on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] gap-x-10 xl:gap-x-14 gap-y-6 lg:gap-y-4">
          {/* Room tabs */}
          <div
            data-reveal="rooms-side"
            data-reveal-delay="150"
            role="tablist"
            aria-label="Chọn phòng"
            className="lg:col-start-2 lg:row-start-1 flex items-stretch pr-4"
          >
            {rooms.map((r, idx) => {
              const active = idx === roomIndex;
              return (
                <button
                  key={r.id}
                  role="tab"
                  aria-selected={active}
                  aria-controls="room-panel"
                  onClick={() => selectRoom(idx)}
                  style={{ zIndex: active ? 10 : rooms.length - idx }}
                  className="group relative flex-1 min-w-0 -mr-3 sm:-mr-4 h-[60px] sm:h-[68px] lg:h-[58px] xl:h-[62px] lg:short:h-[54px] text-left cursor-pointer"
                >
                  <TabShape active={active} />
                  <span className="relative flex flex-col justify-center h-full pl-3 sm:pl-5 lg:pl-3 xl:pl-5 pr-4 lg:pr-3 xl:pr-4">
                    <span className="flex items-baseline gap-1.5 font-serif text-[20px] sm:text-[26px] lg:text-[22px] xl:text-[24px] leading-none text-[#C29A6B]">
                      <span aria-hidden="true" className={`text-[10px] transition-opacity ${active ? "opacity-100" : "opacity-40 group-hover:opacity-80"}`}>
                        ✦
                      </span>
                      {r.tabCode}
                    </span>
                    <span
                      className={`mt-1 pl-4 text-[11px] sm:text-[13px] lg:text-[12px] xl:text-[13px] leading-none truncate transition-colors ${
                        active ? "text-white" : "text-stone-600 group-hover:text-[#3A2A1F]"
                      }`}
                    >
                      {r.tabName}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main photo */}
          <div className="relative lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:pl-2">
            {/* Curved brand text hugging the top-left arch */}
            <svg viewBox="0 0 260 260" aria-hidden="true" className="hidden lg:block absolute -top-9 -left-6 w-[260px] h-[260px] pointer-events-none z-10 overflow-visible">
              <path id="room-arch-text" d="M16 250 V176 A156 156 0 0 1 172 20 H226" fill="none" stroke="#A67C52" strokeOpacity="0.55" strokeWidth="1" />
              <text fill="#A67C52" fontSize="11" letterSpacing="3.2" dy="-7">
                <textPath href="#room-arch-text" startOffset="5%">
                  LITALITI HOMESTAY — HUẾ
                </textPath>
              </text>
            </svg>

            <div
              id="room-panel"
              data-reveal="rooms-photo"
              role="tabpanel"
              onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
              onTouchEnd={handleTouchEnd}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[clamp(380px,calc(100dvh-290px),520px)] overflow-hidden bg-stone-200 rounded-[28px] sm:rounded-tl-[120px] sm:rounded-tr-[36px] sm:rounded-br-[96px] sm:rounded-bl-[48px] lg:rounded-tl-[140px] shadow-[0_30px_60px_-28px_rgba(58,42,31,0.45)] group"
            >
              {room.images.map((src, idx) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${room.name} — ảnh ${idx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  loading={idx === 0 ? "eager" : "lazy"}
                  // Portrait photos in a landscape frame: favour the lower half, where the bed and furniture are
                  className={`object-cover object-[50%_62%] transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.03] ${
                    idx === imageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

              {/* Counter + progress */}
              <div className="absolute bottom-5 left-6 sm:bottom-7 sm:left-10 lg:left-14 z-20 flex items-center gap-4">
                <span className="text-[13px] sm:text-sm font-medium tabular-nums tracking-wider text-white bg-black/15 border border-white/70 backdrop-blur-sm px-3.5 py-1 rounded-full">
                  {pad(imageIndex + 1)} / {pad(total)}
                </span>
                <span className="relative w-32 sm:w-56 lg:w-72 h-[2px] bg-white/35 rounded-full overflow-hidden">
                  <span
                    className="absolute inset-y-0 left-0 bg-[#C29A6B] rounded-full transition-[width] duration-500"
                    style={{ width: `${((imageIndex + 1) / total) * 100}%` }}
                  />
                </span>
              </div>
            </div>

            {/* Prev arrow straddling the photo's left edge */}
            <button
              onClick={prevImage}
              aria-label="Ảnh trước"
              className="absolute left-3 sm:left-0 lg:left-2 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 z-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-stone-900/20 hover:bg-stone-900/35 border border-white/80 text-white backdrop-blur-md shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />
            </button>
          </div>

          {/* Room details */}
          <div key={room.id} data-reveal="rooms-side" data-reveal-delay="300" className="lg:col-start-2 lg:row-start-2 flex flex-col animate-room-fade">
            <div className="flex items-center gap-2 text-[#A67C52]">
              <DiamondMark className="w-3 h-3" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold">{room.tag}</span>
            </div>

            <h3 className="mt-3 lg:mt-2 font-serif font-medium text-[#3A2A1F] text-[28px] sm:text-[32px] lg:text-[28px] xl:text-[32px] lg:short:text-[26px] leading-[1.18] whitespace-pre-line">
              {room.title}
            </h3>

            <p className="text-justify mt-3 lg:mt-2 text-stone-600 text-[14px] leading-[1.65] max-w-[460px]">{room.description}</p>

            <ul className="mt-5 lg:mt-3.5 lg:short:mt-2.5 flex flex-wrap items-center gap-x-5 sm:gap-x-0 gap-y-2 text-[14px] text-stone-700">
              {[
                { icon: BedDouble, label: room.bed },
                { icon: Scan, label: room.area },
                { icon: Bath, label: room.bath },
              ].map(({ icon: Icon, label }, i) => (
                <li key={label} className="flex items-center">
                  {i > 0 && <span className="hidden sm:block w-px h-5 bg-stone-300 mx-4 xl:mx-5" aria-hidden="true" />}
                  <Icon className="w-5 h-5 xl:w-6 xl:h-6 mr-2 text-stone-700" strokeWidth={1.2} />
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-6 lg:mt-4 lg:short:mt-3">
              <button
                onClick={() => openBooking({ roomId: room.id })}
                className="group inline-flex items-center gap-3 pl-7 pr-6 py-3.5 lg:py-3 lg:short:py-2.5 rounded-full bg-[#C29A6B] hover:bg-[#AD8457] text-[#2A1E16] text-[15px] font-medium shadow-[0_12px_24px_-12px_rgba(166,124,82,0.85)] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Đặt phòng ngay
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
              </button>
            </div>

            {/* Handwritten note fills the space above the thumbnails on desktop */}
            <p className="hidden lg:flex items-center gap-2 mt-auto pt-5 font-script text-[22px] text-[#9C7148] select-none">
              <Sparkle className="w-4 h-4" />
              made for two, made with love
              <TinyHeart className="w-4 h-4" color="#C29A6B" />
            </p>

            {/* Thumbnails: 4 photos per room + next arrow hanging off the right edge */}
            <div className="mt-6 lg:mt-0 lg:pt-3 lg:short:pt-2 relative flex items-center lg:pr-6">
              <div className="flex-1 min-w-0 grid gap-2.5 sm:gap-3 p-1" style={{ gridTemplateColumns: `repeat(${Math.max(4, total)}, minmax(0, 1fr))` }}>
                {room.images.map((src, idx) => {
                  const selected = idx === imageIndex;
                  return (
                    <button
                      key={src}
                      onClick={() => setImageIndex(idx)}
                      aria-label={`Xem ảnh ${idx + 1}`}
                      aria-current={selected}
                      className={`relative aspect-[6/5] lg:aspect-[4/3] lg:short:aspect-[16/11] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                        selected ? "ring-2 ring-[#3A2A1F] ring-offset-2 ring-offset-[#FBF8F3]" : "opacity-75 hover:opacity-100"
                      }`}
                    >
                      <Image src={src} alt="" fill sizes="140px" className="object-cover object-[50%_62%]" />
                    </button>
                  );
                })}
              </div>
              <NextButton onClick={nextImage} className="ml-3 lg:ml-0 lg:absolute lg:-right-7 xl:-right-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
