import Image from "next/image";
import Link from "next/link";
import { homestayInfo, navLinks } from "@/data/homestayData";

export default function Footer() {
  return (
    <footer data-nav-theme="dark" className="w-full bg-[#2A1E16] text-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Brand · links · contact */}
        <div data-reveal="footer" className="py-8 lg:py-10 grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] items-center gap-7 lg:gap-10 text-center xl:text-left">
          <Link href="#hero" className="inline-flex items-center gap-3.5 justify-self-center xl:justify-self-start group">
            <span className="relative w-14 h-14 rounded-full overflow-hidden border border-[#C29A6B]/50 shrink-0 transition-transform group-hover:scale-105 group-hover:-rotate-6">
              <Image src="/logo.jpg" alt="Litaliti Homestay" fill sizes="56px" className="object-cover" />
            </span>
            <span className="text-left leading-tight">
              <span className="block font-serif text-[17px] xl:text-[19px] font-bold tracking-[0.08em] xl:tracking-[0.12em] text-white whitespace-nowrap">LITALITI HOMESTAY</span>
              <span className="block mt-1 text-[13px] text-white/75">Riêng tư • Ấm cúng • Giữa lòng Huế</span>
            </span>
          </Link>

          {/* Same pill style as the header links (dark variant) */}
          <nav aria-label="Liên kết chân trang" className="flex flex-wrap justify-center gap-1.5 xl:gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 xl:py-1 rounded-full border border-transparent text-[11px] xl:text-xs uppercase tracking-[0.14em] font-medium text-white/85 hover:text-[#EAD7BC] hover:bg-gradient-to-r hover:from-[#C29A6B]/30 hover:to-[#EAD7BC]/15 hover:border-[#C29A6B]/50 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="xl:text-right">
            <p className="text-[15px] text-white/75">
              Hotline / Zalo:{" "}
              <a href={`tel:${homestayInfo.phone}`} className="font-bold text-white hover:text-[#C29A6B] transition-colors">
                {homestayInfo.phoneDisplay}
              </a>
            </p>
            <p className="mt-1.5 text-[13px] text-white/60">{homestayInfo.address}</p>
            <p className="mt-1.5 text-[13px]">
              <a href={homestayInfo.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#EAD7BC] underline underline-offset-4 decoration-white/25">
                facebook.com/litalitihomestay
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div data-reveal="footer" data-reveal-delay="150" className="border-t border-white/10 py-5 text-center text-[13px] text-white/55">
          © 2026 Litaliti Homestay. Một góc nhỏ để thương nhau giữa lòng Huế.
        </div>
      </div>
    </footer>
  );
}
