import Image from "next/image";
import { daySchedule } from "@/data/homestayData";
import { BotanicalBranch, TinyHeart, LittleHouse, Sprinkles, SectionDivider } from "@/components/ui/Decorations";

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-[#FBF8F3] text-[#2E241C] pt-[86px] sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-20 md:pb-24 lg:pb-24 overflow-hidden">
      <SectionDivider className="top-0" />

      <div className="hidden xl:block absolute top-20 right-8 w-24 h-36 opacity-30 pointer-events-none z-10 rotate-[14deg]">
        <BotanicalBranch flip />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2.15fr)] gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left: heading */}
          <div data-reveal="exp-head">
            <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#8A6240] border-b border-[#8A6240]/50 pb-1">
              Trải nghiệm
            </span>

            <h2 className="mt-4 font-serif font-semibold text-[#2E2018] text-[30px] sm:text-[40px] lg:text-[32px] xl:text-[40px] leading-[1.18] tracking-[-0.01em]">
              <span className="block whitespace-nowrap">Một buổi hẹn</span>
              <span className="block">tại Litaliti</span>
            </h2>

            <p className="text-justify mt-4 text-[#4A3B30] font-medium text-[14px] sm:text-[15px] leading-[1.75] max-w-[420px]">
              Không cần lên kế hoạch cầu kỳ. Chỉ cần hai người, một căn phòng ấm và những điều nhỏ xinh Litaliti đã chuẩn
              bị sẵn.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 font-script text-[#9C7148] text-2xl">
              <TinyHeart className="w-4 h-4" color="#C29A6B" />
              slow down, together
            </p>

            {/* Little house + twinkles under the heading, so the left column doesn't feel bare */}
            <div aria-hidden="true" className="hidden lg:flex items-end gap-4 mt-8">
              <LittleHouse className="w-20 h-20 opacity-60" />
              <Sprinkles className="w-20 h-16 -mb-1" />
            </div>
          </div>

          {/* Right: arch cards on a timeline */}
          <ol className="relative grid grid-cols-1 sm:grid-cols-4 gap-x-4 sm:gap-x-5 xl:gap-x-7 gap-y-5 sm:gap-y-10">
            {/* Phones: one vertical thread through the arch photos */}
            <span aria-hidden="true" className="sm:hidden absolute left-[52px] top-8 bottom-8 w-px bg-[#A67C52]/40" />
            {daySchedule.map((item, idx) => (
              <li key={item.time} data-reveal="exp-card" data-reveal-delay={idx * 160} className="group relative flex flex-row sm:flex-col items-center sm:items-stretch gap-4 sm:gap-0">
                <div className="relative aspect-[4/5] w-[104px] sm:w-full shrink-0 rounded-t-full rounded-b-[18px] overflow-hidden border-4 border-white bg-stone-200 shadow-[0_18px_34px_-14px_rgba(58,42,31,0.45)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Timeline: line segments join across the column gap; dot marks each moment */}
                <div className="hidden sm:flex relative h-4 mt-5 mb-4 items-center justify-center" aria-hidden="true">
                  <span
                    className={`absolute top-1/2 h-px bg-[#A67C52]/70 left-[-10px] right-[-10px] xl:left-[-14px] xl:right-[-14px] ${
                      idx === 0 ? "!left-1/2" : ""
                    } ${idx === daySchedule.length - 1 ? "!right-1/2" : ""} ${idx === 1 ? "max-sm:!right-1/2" : ""} ${idx === 2 ? "max-sm:!left-1/2" : ""}`}
                  />
                  <span className="relative w-3.5 h-3.5 rounded-full bg-[#FBF8F3] border-2 border-[#A67C52] shadow-sm transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#A67C52]" />
                </div>

                <div className="text-left min-w-0">
                  <time className="block font-bold text-[15px] text-[#2E2018] tabular-nums tracking-wide">{item.time}</time>
                  <h3 className="mt-1 font-bold text-[14px] sm:text-[15px] text-[#2E2018] leading-snug">{item.title}</h3>
                  <p className="text-justify mt-1.5 text-[13px] font-medium text-[#5A4A3E] leading-[1.6]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
