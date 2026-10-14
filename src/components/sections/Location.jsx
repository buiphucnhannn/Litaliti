"use client";

import { MapPin, Phone, KeyRound, ArrowRight, Landmark, ShoppingBag, Music, MessageCircle } from "lucide-react";
import { mapLandmarks, homestayInfo } from "@/data/homestayData";
import { BotanicalBranch } from "@/components/ui/Decorations";

// Litaliti's position on the illustrated map, in % of the map area (on Hùng Vương, south of Trường Tiền)
const HOME = { x: 64, y: 50 };

// Little arched-bridge glyph for Trường Tiền
function BridgeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 16h20" />
      <path d="M3 16c1.5-4 4-6 4.5-6S9.5 12 9.5 16" />
      <path d="M9.5 16c1-4 2.2-6 2.5-6s1.5 2 2.5 6" />
      <path d="M14.5 16c0-4 1.6-6 2-6s3 2 4.5 6" />
      <path d="M2 20h20" strokeOpacity="0.5" strokeDasharray="2 2" />
    </svg>
  );
}

const placeIcons = { landmark: Landmark, bridge: BridgeIcon, music: Music, bag: ShoppingBag };

// Deterministic pseudo-random city blocks (same output on server and client)
function buildBlocks() {
  let seed = 11;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const blocks = [];
  for (let row = -4; row < 22; row++) {
    for (let col = -4; col < 30; col++) {
      if (rand() < 0.12) continue; // leave a few gaps: squares, parks
      blocks.push({
        x: col * 46 + rand() * 6,
        y: row * 36 + rand() * 6,
        w: 30 + rand() * 22,
        h: 22 + rand() * 14,
        o: 0.45 + rand() * 0.55,
      });
    }
  }
  return blocks;
}
const blocks = buildBlocks();

const RIVER = "M -40 300 C 180 250 380 140 560 175 C 740 210 860 120 1040 60";

function HueMap() {
  return (
    <svg viewBox="0 0 1000 600" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
      <rect width="1000" height="600" fill="#F5EFE6" />

      {/* Street blocks on a slightly turned grid */}
      <g transform="rotate(-14 500 300)">
        {blocks.map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx="3" fill="#EBE1D3" opacity={b.o * 0.75} />
        ))}
      </g>

      {/* Đại Nội citadel with its moat, north of the river */}
      <g transform="rotate(-14 330 70)">
        <rect x="250" y="-10" width="170" height="150" fill="none" stroke="#CFE0E2" strokeWidth="8" />
        <rect x="268" y="8" width="134" height="114" fill="#E6DAC7" />
      </g>

      {/* Roads: Lê Lợi along the south bank, Hùng Vương running south-east from the bridge, a few cross streets */}
      <g stroke="#FDFBF7" strokeLinecap="round" fill="none">
        <path d="M -20 345 C 200 300 400 220 570 222 C 760 252 880 190 1020 140" strokeWidth="7" />
        <path d="M 572 205 C 640 290 820 430 1020 560" strokeWidth="11" />
        <path d="M 300 -20 C 320 120 330 260 360 620" strokeWidth="6" />
        <path d="M -20 470 C 300 430 600 380 1020 320" strokeWidth="6" />
        <path d="M 760 -20 C 760 200 700 420 720 620" strokeWidth="5" />
      </g>
      {/* Hùng Vương label along the road */}
      <text fontSize="15" fill="#A67C52" letterSpacing="3" fontWeight="600">
        <textPath href="#hung-vuong-path" startOffset="44%">HÙNG VƯƠNG</textPath>
      </text>
      <path id="hung-vuong-path" d="M 572 222 C 640 307 820 447 1020 577" fill="none" />

      {/* Sông Hương */}
      <path d={RIVER} fill="none" stroke="#C7DCE0" strokeWidth="70" strokeLinecap="round" />
      <path d={RIVER} fill="none" stroke="#D5E6E8" strokeWidth="44" strokeLinecap="round" />
      <path d={RIVER} fill="none" stroke="#B3D0D6" strokeWidth="2" strokeDasharray="10 9" />
      <text x="120" y="262" fontSize="16" fontStyle="italic" fill="#7FA6AE" transform="rotate(-12 120 262)" letterSpacing="2">
        sông Hương
      </text>

      {/* Trường Tiền bridge across the river */}
      <g stroke="#B48A5E" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M 552 132 L 576 222" />
        <path d="M 566 132 L 590 222" />
        <path d="M 556 150 q 12 -6 20 4 M 561 170 q 12 -6 20 4 M 566 190 q 12 -6 20 4" strokeWidth="2" strokeOpacity="0.8" />
      </g>

      {/* Dashed route: home → bridge */}
      <path d="M 640 300 C 615 268 592 240 578 212" fill="none" stroke="#3A2A1F" strokeWidth="2.5" strokeDasharray="6 7" strokeLinecap="round" />
    </svg>
  );
}

export default function Location() {
  const info = [
    { icon: MapPin, label: "Địa chỉ", value: homestayInfo.address, note: homestayInfo.addressNote },
    {
      icon: Phone,
      label: "Hotline / Zalo",
      value: (
        <a href={`tel:${homestayInfo.phone}`} className="hover:text-[#A67C52] transition-colors">
          {homestayInfo.phoneDisplay} · {homestayInfo.contactName}
        </a>
      ),
    },
    {
      icon: MessageCircle,
      label: "Fanpage",
      value: (
        <a href={homestayInfo.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#A67C52] transition-colors">
          facebook.com/litalitihomestay
        </a>
      ),
    },
    { icon: KeyRound, label: "Nhận phòng", value: "Check-in hoàn toàn tự động, không cần chờ đợi" },
  ];

  return (
    <section id="contact" className="relative w-full bg-[#FBF8F3] text-[#2E241C] pt-10 md:pt-10 lg:pt-6 pb-14 md:pb-16 lg:pb-12 overflow-hidden">
      <div className="hidden xl:block absolute top-16 left-8 w-24 h-36 opacity-30 pointer-events-none z-0 -rotate-6">
        <BotanicalBranch />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 pointer-events-none">
        {/* Left column; pointer-events restored so the map behind stays hoverable */}
        <div data-reveal="loc-text" className="lg:max-w-[440px] xl:max-w-[460px] pointer-events-auto">
          <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#A67C52] border-b border-[#A67C52]/40 pb-1">
            Liên hệ & vị trí
          </span>

          <h2 className="mt-4 font-serif font-medium text-[#3A2A1F] text-[30px] sm:text-[40px] lg:text-[38px] xl:text-[42px] leading-[1.15] tracking-[-0.01em]">
            Huế ở ngay ngoài cửa
          </h2>

          <p className="text-justify mt-3 text-stone-600 text-[14px] sm:text-[15px] leading-[1.7]">
            Chỉ cách cầu Trường Tiền 750m, rất gần Aeon Mall, Đại Nội, Phố Tây và những điểm check-in cực hot — đi đâu
            cũng gần, về nhà lại yên tĩnh.
          </p>

          {/* Info card */}
          <ul className="mt-4 px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#C29A6B]/25 shadow-[0_14px_30px_-20px_rgba(58,42,31,0.35)] space-y-2.5">
            {info.map(({ icon: Icon, label, value, note }) => (
              <li key={label} className="flex items-start gap-3.5">
                <span className="w-9 h-9 rounded-full bg-[#C29A6B]/15 flex items-center justify-center text-[#A67C52] shrink-0">
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.6} />
                </span>
                <span className="leading-snug min-w-0">
                  <span className="block text-[13px] font-semibold text-[#3A2A1F]">{label}</span>
                  <span className="block text-[13px] text-stone-600 mt-0.5">{value}</span>
                  {note && <span className="block text-[12px] text-stone-400 mt-0.5">{note}</span>}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3">
            <a
              href={homestayInfo.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:pl-7 sm:pr-6 py-3 rounded-full whitespace-nowrap max-sm:!text-[14px] bg-[#C29A6B] hover:bg-[#AD8457] text-[#2A1E16] text-[15px] font-medium shadow-[0_12px_24px_-12px_rgba(166,124,82,0.85)] transition-all hover:-translate-y-0.5"
            >
              Xem chỉ đường
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
            </a>
            <a
              href={homestayInfo.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-full whitespace-nowrap border border-[#3A2A1F]/80 text-[#3A2A1F] hover:bg-[#3A2A1F] hover:text-white text-[14px] font-medium transition-all"
            >
              Nhắn Zalo tư vấn
            </a>
          </div>
        </div>
      </div>

      {/* Illustrated map: in the flow on mobile, a full-bleed right half that fades into the page on desktop */}
      <div
        data-reveal="loc-map"
        className="relative mx-5 sm:mx-8 mt-10 aspect-square sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_40px_-24px_rgba(58,42,31,0.4)] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:mt-0 lg:w-[62%] lg:aspect-auto lg:rounded-none lg:shadow-none lg:[mask-image:linear-gradient(to_right,transparent,black_24%),linear-gradient(to_bottom,transparent,black_14%,black_80%,transparent)] lg:[mask-composite:intersect]"
      >
        <HueMap />

        {/* Landmarks */}
        {mapLandmarks.map((place, idx) => {
          const Icon = placeIcons[place.icon];
          return (
            <div
              key={place.name}
              data-reveal="loc-place"
              data-reveal-delay={500 + idx * 140}
              className={`group absolute z-10 flex items-center gap-2.5 -translate-x-1/2 -translate-y-1/2 ${place.x > 70 ? "max-sm:flex-row-reverse max-sm:text-right max-sm:-translate-x-[85%]" : ""}`}
              style={{ left: `${place.x}%`, top: `${place.y}%` }}
            >
              <span className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-[3px] border-white shadow-[0_8px_18px_-6px_rgba(58,42,31,0.45)] bg-[#F4EDE4] text-[#A67C52] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3A2A1F] group-hover:text-[#EAD7BC]">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.6} />
              </span>
              <span className="leading-tight [text-shadow:0_0_6px_#F5EFE6,0_0_2px_#F5EFE6]">
                <span className="block font-serif font-semibold text-[12px] sm:text-[14px] lg:text-[15px] text-[#3A2A1F] whitespace-nowrap">{place.name}</span>
                <span className="block text-[11px] sm:text-[12px] text-stone-500">{place.time}</span>
              </span>
            </div>
          );
        })}

        {/* Litaliti pin */}
        <div
          data-reveal="loc-pin"
          data-reveal-delay="1000"
          className="absolute z-20 flex items-end gap-2 -translate-x-[16px] -translate-y-full"
          style={{ left: `${HOME.x}%`, top: `${HOME.y}%` }}
        >
          <span className="relative w-8 h-10 sm:w-9 sm:h-11 shrink-0">
            <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-6 h-2 rounded-full bg-[#3A2A1F]/25 blur-[2px]" />
            {/* Pulse ring at the pin tip */}
            <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#C29A6B] animate-ping [animation-duration:2.2s]" />
            <svg viewBox="0 0 32 40" className="relative w-full h-full drop-shadow-md">
              <path d="M16 39 C16 39 3 24 3 15 a13 13 0 0 1 26 0 C29 24 16 39 16 39Z" fill="#3A2A1F" stroke="#FFF" strokeWidth="2" />
              <path d="M10 17 L16 11.5 L22 17 V22 H10 Z" fill="#EAD7BC" />
            </svg>
          </span>
          <span className="mb-4 sm:mb-5 bg-white px-3 py-1 rounded-md shadow-[0_6px_14px_-6px_rgba(58,42,31,0.4)] font-semibold text-[11px] sm:text-[13px] tracking-[0.06em] text-[#3A2A1F] whitespace-nowrap">
            LITALITI<span className="hidden sm:inline"> HOMESTAY</span>
          </span>
        </div>
      </div>

    </section>
  );
}
