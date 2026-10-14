"use client";

import { ArrowRight, Check, Clock3, Moon, Sun, CalendarDays } from "lucide-react";
import { SectionDivider, DiamondMark, BotanicalBranch, Sprinkles } from "@/components/ui/Decorations";
import { useBooking } from "@/components/booking/BookingProvider";
import { packages, homestayInfo } from "@/data/homestayData";

const icons = { hourly: Clock3, overnight: Moon, fullday: Sun, monthly: CalendarDays };

export default function Packages() {
  const { openBooking } = useBooking();

  return (
    <section id="packages" className="relative w-full bg-[#FBF8F3] text-[#2E241C] pt-[92px] sm:pt-20 lg:pt-24 pb-12 sm:pb-8 lg:pb-8 overflow-hidden">
      <SectionDivider className="top-0" />

      <Sprinkles className="hidden xl:block absolute top-28 left-8 w-24 h-20" />
      <div className="hidden xl:block absolute bottom-10 right-6 w-28 h-40 opacity-30 pointer-events-none rotate-[10deg]">
        <BotanicalBranch flip />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        {/* Eyebrow, then title + intro on one row, the intro centred on the title line */}
        <div data-reveal="pkg-head" className="mb-10 lg:mb-12">
          <div className="flex items-center gap-2.5 text-[#A67C52]">
            <DiamondMark className="w-3.5 h-3.5" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold">Gói lưu trú</span>
          </div>
          <div className="mt-3 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,400px)] gap-4 xl:gap-10 items-center">
            <div className="min-w-0 flex items-center gap-4">
              <h2 className="font-serif font-medium text-[#3A2A1F] text-[32px] sm:text-[44px] lg:text-[48px] xl:text-[52px] leading-[1.08] tracking-[-0.01em] text-balance">
                Chọn nhịp nghỉ của riêng bạn
              </h2>
              <svg viewBox="0 0 120 30" aria-hidden="true" className="hidden md:block w-24 xl:w-28 h-auto text-[#A67C52] shrink-0 mt-3" fill="none" stroke="currentColor" strokeLinecap="round">
                <path d="M4 20 C30 6 70 4 100 10 C82 22 40 28 6 22" strokeWidth="1.1" />
                <circle cx="112" cy="10" r="2" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <p className="text-justify text-stone-600 text-[13px] sm:text-sm leading-[1.75] max-w-[420px]">
              Vài giờ hẹn hò, một đêm thật chậm hay cả tháng ở Huế — gói nào cũng riêng tư, sạch sẽ và check-in tự động.
            </p>
          </div>
        </div>

        {/* Ticket cards */}
        {/* Phones: a swipeable strip of tickets (the next one peeks in); grid from sm up */}
        <ul className="max-sm:flex max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory max-sm:-mx-5 max-sm:px-5 max-sm:pt-4 max-sm:pb-16 max-sm:-mb-12 max-sm:scroll-px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {packages.map((p, idx) => {
            const Icon = icons[p.id];
            const dark = p.highlight;
            return (
              <li
                key={p.id}
                data-reveal="pkg-card"
                data-reveal-delay={idx * 130}
                className={`group relative flex flex-col max-sm:shrink-0 max-sm:basis-[82%] max-sm:snap-start rounded-[28px] transition-all duration-500 hover:-translate-y-2 ${
                  dark
                    ? "bg-[#3A2A1F] text-white shadow-[0_28px_50px_-24px_rgba(42,30,22,0.8)] kraft-grain"
                    : "bg-white text-[#2E241C] border border-[#C29A6B]/25 shadow-[0_18px_40px_-26px_rgba(58,42,31,0.45)] hover:shadow-[0_28px_50px_-24px_rgba(58,42,31,0.5)] hover:border-[#C29A6B]/60"
                }`}
              >
                {dark && (
                  <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#C29A6B] text-[#2A1E16] text-[10px] font-bold uppercase tracking-[0.18em] shadow-md">
                    Hợp hẹn hò
                  </span>
                )}

                {/* Top: name + price */}
                <div className="px-6 pt-7 pb-6">
                  <span
                    className={`inline-flex w-11 h-11 rounded-2xl items-center justify-center transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
                      dark ? "bg-[#C29A6B]/20 text-[#EAD7BC]" : "bg-[#C29A6B]/12 text-[#A67C52]"
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.7} />
                  </span>
                  <h3 className={`mt-4 font-serif text-[22px] font-semibold ${dark ? "text-[#EAD7BC]" : "text-[#3A2A1F]"}`}>{p.name}</h3>
                  <p className="mt-3 flex items-baseline gap-2">
                    {p.pricePrefix && <span className={`text-[12px] ${dark ? "text-white/60" : "text-stone-500"}`}>{p.pricePrefix}</span>}
                    <span className={`font-serif font-bold leading-none ${p.pricePrefix ? "text-[42px]" : "text-[28px]"} ${dark ? "text-white" : "text-[#3A2A1F]"}`}>
                      {p.price}
                    </span>
                  </p>
                  <p className={`mt-1 text-[12px] uppercase tracking-[0.16em] ${dark ? "text-[#C29A6B]" : "text-[#A67C52]"}`}>{p.unit}</p>
                  <p className={`text-justify mt-4 text-[13.5px] leading-relaxed ${dark ? "text-white/75" : "text-stone-600"}`}>{p.desc}</p>
                </div>

                {/* Perforation: dashed rule between two punched notches */}
                <div className="relative h-0" aria-hidden="true">
                  <span className={`absolute -left-3 -top-3 w-6 h-6 rounded-full ${dark ? "bg-[#FBF8F3]" : "bg-[#FBF8F3] border-r border-[#C29A6B]/25"}`} />
                  <span className={`absolute -right-3 -top-3 w-6 h-6 rounded-full ${dark ? "bg-[#FBF8F3]" : "bg-[#FBF8F3] border-l border-[#C29A6B]/25"}`} />
                  <span className={`absolute left-5 right-5 top-0 border-t-2 border-dashed ${dark ? "border-white/15" : "border-[#C29A6B]/25"}`} />
                </div>

                {/* Bottom: perks + action */}
                <div className="px-6 pt-6 pb-6 flex flex-col flex-1">
                  <ul className="space-y-2.5 mb-6">
                    {p.perks.map((perk) => (
                      <li key={perk} className={`flex items-start gap-2.5 text-[13px] ${dark ? "text-white/85" : "text-stone-700"}`}>
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${dark ? "text-[#C29A6B]" : "text-[#A67C52]"}`} strokeWidth={2.2} />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openBooking({ packageId: p.id })}
                    className={`group/btn mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-[13px] font-semibold transition-all cursor-pointer ${
                      dark
                        ? "bg-[#C29A6B] hover:bg-[#D4AE80] text-[#2A1E16] shadow-[0_10px_20px_-10px_rgba(194,154,107,0.9)]"
                        : "border border-[#3A2A1F]/80 text-[#3A2A1F] hover:bg-[#3A2A1F] hover:text-white"
                    }`}
                  >
                    {p.price === "Liên hệ" ? "Nhận báo giá" : "Đặt gói này"}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="sm:hidden mt-1 flex items-center justify-center gap-2 text-[12px] text-[#A67C52] font-medium tracking-wide">
          <span className="w-6 h-px bg-[#C29A6B]/60" />
          Vuốt để xem các gói
          <span className="w-6 h-px bg-[#C29A6B]/60" />
        </p>

        <p className="mt-5 sm:mt-8 text-center text-[13px] text-stone-500 text-balance">
          Muốn biết giá chi tiết từng gói? Nhắn{" "}
          <a href={homestayInfo.zalo} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap font-semibold text-[#3A2A1F] underline underline-offset-4 decoration-[#C29A6B] hover:text-[#A67C52]">
            Zalo {homestayInfo.phoneDisplay}
          </a>{" "}
          để được báo giá theo ngày & khung giờ bạn chọn.
        </p>
      </div>
    </section>
  );
}
