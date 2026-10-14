import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HueCitadelSketch from "@/components/ui/HueCitadelSketch";
import { BotanicalBranch, TinyHeart, Sprinkles } from "@/components/ui/Decorations";

const stats = [
  { value: "3", label: "phòng riêng tư,\nmỗi phòng một chất" },
  { value: "750m", label: "tới cầu\nTrường Tiền" },
  { value: "100%", label: "check-in\ntự động" },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#FBF8F3] text-[#2E241C] pt-6 md:pt-8 pb-14 md:pb-20 overflow-hidden">
      {/* Botanical accent on the top-left edge */}
      <div className="hidden xl:block absolute top-10 left-6 w-24 h-36 opacity-30 pointer-events-none z-0 -rotate-6">
        <BotanicalBranch />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: heading, story, stats */}
          <div className="lg:col-span-5 relative">
            <div data-reveal="about-text" className="inline-block">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#A67C52] border-b border-[#A67C52]/40 pb-0.5">
                Giới thiệu
              </span>
            </div>

            <h2
              data-reveal="about-text"
              data-reveal-delay="120"
              className="mt-5 lg:mt-6 font-serif text-[28px] sm:text-[34px] lg:text-[38px] xl:text-[42px] font-bold text-[#3A2A1F] leading-[1.18] tracking-tight"
            >
              {/* Brand name: kraft gradient, a step larger, with a short brush underline */}
              <span className="relative inline-block pb-2 mb-1 text-[1.18em] leading-none tracking-[0.01em] bg-gradient-to-r from-[#7A5536] via-[#B48A5E] to-[#7A5536] bg-clip-text text-transparent">
                Litaliti
                <svg viewBox="0 0 120 10" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 w-full h-2.5 text-[#C29A6B]" fill="none">
                  <path d="M2 6 C35 2.5 85 2.5 118 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
              <span className="block">Nơi để hai người</span>
              <span className="block italic font-normal text-[#7A5C43]">trốn khỏi nhịp phố</span>
            </h2>

            <p data-reveal="about-text" data-reveal-delay="240" className="text-justify mt-5 lg:mt-7 text-stone-700 text-[14px] xl:text-[15px] leading-[1.85] max-w-[440px]">
              Nằm trong kiệt lớn đường Hùng Vương, Litaliti là ngôi nhà nhỏ với những căn phòng tối giản, ấm cúng — đèn
              lồng giấy, gỗ trầm, ga gối thơm tho và một chiếc máy chiếu cho những đêm phim chỉ có hai người.
            </p>
            <p data-reveal="about-text" data-reveal-delay="320" className="text-justify mt-3 text-stone-700 text-[14px] xl:text-[15px] leading-[1.85] max-w-[440px]">
              Check-in hoàn toàn tự động, riêng tư từ lúc bước vào. Ra phố chỉ vài phút là tới cầu Trường Tiền, Phố Tây,
              Đại Nội hay Aeon Mall.
            </p>

            {/* Stats */}
            <dl data-reveal="about-text" data-reveal-delay="420" className="mt-7 grid grid-cols-3 max-w-[440px] divide-x divide-[#C29A6B]/30">
              {stats.map((s) => (
                <div key={s.value} className="px-3 first:pl-0">
                  <dt className="font-serif text-[26px] sm:text-[30px] font-bold text-[#3A2A1F] leading-none [font-variant-numeric:lining-nums]">{s.value}</dt>
                  <dd className="mt-1.5 text-[11px] sm:text-[12px] text-stone-500 leading-snug whitespace-pre-line">{s.label}</dd>
                </div>
              ))}
            </dl>

            <div data-reveal="about-text" data-reveal-delay="500" className="mt-7 lg:mt-8">
              <Link
                href="#rooms"
                className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-[#3A2A1F] hover:text-[#A67C52] transition-colors group underline underline-offset-6 decoration-[#A67C52]/50 hover:decoration-[#A67C52]"
              >
                <span>Ghé xem từng căn phòng</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: layered photo composition */}
          <div className="lg:col-span-7 relative lg:-ml-10 xl:-ml-20">
            <div className="relative mx-auto lg:mr-0 w-full max-w-[640px] lg:max-w-[920px] aspect-[640/600] lg:aspect-[920/640]">
              {/* Twinkles in the open space between the badge and the gate photo */}
              <Sprinkles className="hidden sm:block absolute left-[36%] lg:left-[29%] top-[6%] w-20 h-16" />

              {/* Huế sketch behind everything */}
              <div className="absolute -bottom-4 left-0 w-[70%] lg:w-[62%] opacity-50 pointer-events-none">
                <HueCitadelSketch className="w-full h-auto" opacity={0.55} />
              </div>

              {/* Main organic frame: the Litaliti gate (portrait) */}
              <div data-reveal="about-frame" className="absolute right-[4%] top-[4%] w-[58%] lg:right-[2%] lg:w-[50%] aspect-[520/640]">
                <svg viewBox="0 0 520 640" className="w-full h-full drop-shadow-xl overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cổng vào Litaliti Homestay trong kiệt Hùng Vương">
                  <defs>
                    <clipPath id="aboutArchClip">
                      <path d="M 40 250 C 40 95, 150 20, 262 22 C 380 24, 482 100, 482 250 L 486 520 C 488 590, 440 622, 370 620 L 130 616 C 70 615, 36 585, 38 520 Z" />
                    </clipPath>
                  </defs>
                  {/* Contour drawn a touch larger and turned, so it peeks out around the arch */}
                  <path
                    d="M 40 250 C 40 95, 150 20, 262 22 C 380 24, 482 100, 482 250 L 486 520 C 488 590, 440 622, 370 620 L 130 616 C 70 615, 36 585, 38 520 Z"
                    transform="rotate(3 262 320) translate(262 320) scale(1.05) translate(-262 -320)"
                    stroke="#C29A6B"
                    strokeWidth="1.6"
                    strokeOpacity="0.55"
                    vectorEffect="non-scaling-stroke"
                  />
                  <g clipPath="url(#aboutArchClip)">
                    <image href="/photos/gate.jpg" x="20" y="0" width="480" height="640" preserveAspectRatio="xMidYMid slice" />
                  </g>
                </svg>
              </div>

              {/* Secondary frame overlapping bottom-left: a calm room corner */}
              <div
                data-reveal="about-frame"
                data-reveal-delay="250"
                className="group absolute left-[2%] bottom-[6%] w-[42%] lg:left-[9%] lg:w-[40%] aspect-[4/5] rounded-[46%_54%_42%_58%/38%_40%_60%_62%] border-[5px] border-[#FBF8F3] shadow-2xl overflow-hidden z-10"
              >
                <Image
                  src="/photos/room3-1.jpg"
                  alt="Room 3 với bàn trà gỗ và giường thấp"
                  fill
                  sizes="(max-width: 1024px) 40vw, 280px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Logo badge with circular brand text, top-left */}
              <div data-reveal="about-badge" data-reveal-delay="450" className="absolute left-[8%] top-[2%] w-[26%] lg:left-[4%] lg:w-[21%] aspect-square z-20">
                <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_28s_linear_infinite]" aria-hidden="true">
                  <defs>
                    <path id="badgeCircle" d="M100 100 m-84 0 a84 84 0 1 1 168 0 a84 84 0 1 1 -168 0" />
                  </defs>
                  <text fill="#A67C52" fontSize="13.5" letterSpacing="4.2" fontWeight="600">
                    <textPath href="#badgeCircle">LITALITI HOMESTAY • HUẾ • HÙNG VƯƠNG •</textPath>
                  </text>
                </svg>
                <span className="absolute inset-[17%] rounded-full overflow-hidden border-[3px] border-[#FBF8F3] shadow-xl">
                  <Image src="/logo.jpg" alt="Logo Litaliti" fill sizes="120px" className="object-cover" />
                </span>
              </div>

              {/* Handwritten slogan, bottom-right */}
              <div data-reveal="about-script" data-reveal-delay="650" className="absolute right-0 -bottom-2 sm:bottom-0 lg:-bottom-12 z-20 pointer-events-none select-none text-right -rotate-6 origin-right">
                <span className="font-script text-[#9C7148] text-2xl sm:text-[32px] block leading-tight tracking-wide">a little home</span>
                <span className="font-script text-[#7A5536] text-xl sm:text-[26px] leading-tight mt-0.5 pr-4 inline-flex items-center gap-1.5">
                  for the two of us
                  <TinyHeart className="w-4 h-4 sm:w-5 sm:h-5" color="#C29A6B" />
                </span>
              </div>

              {/* Leaf accent */}
              <div className="hidden sm:block absolute right-0 top-[36%] w-20 h-28 opacity-40 pointer-events-none rotate-[14deg]">
                <BotanicalBranch flip />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
