import { Playfair_Display, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import SmoothScroll from "@/components/layout/SmoothScroll";
import BookingProvider from "@/components/booking/BookingProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://litaliti.vercel.app"),
  title: "Litaliti Homestay Huế | Góc nhỏ riêng tư cho hai người",
  description:
    "Homestay riêng tư, ấm cúng tại 30 Kiệt 246 Hùng Vương, TP. Huế — check-in tự động, máy chiếu + Netflix, combo giờ chỉ từ 150K. Cách cầu Trường Tiền 750m.",
  keywords:
    "Litaliti Homestay, homestay Huế, homestay cặp đôi Huế, combo giờ Huế, phòng máy chiếu Huế, homestay Hùng Vương, đặt phòng Huế",
  openGraph: {
    title: "Litaliti Homestay Huế — Góc nhỏ riêng tư cho hai người",
    description: "Check-in tự động · Máy chiếu + Netflix · Combo giờ chỉ từ 150K · Cách cầu Trường Tiền 750m.",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Litaliti Homestay Huế",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the head script below adds reveal classes to <html> before hydration
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${playfair.variable} ${jakarta.variable} ${dancingScript.variable}`}
    >
      <head>
        {/* Hide [data-reveal] elements before first paint (no flash); if the app never starts, show everything */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;d.classList.add('reveal-on');setTimeout(function(){if(!window.__revealReady)d.classList.add('reveal-fallback')},3500)})();",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FBF8F3] text-[#2E241C] antialiased selection:bg-[#C29A6B] selection:text-[#2A1E16]">
        <SmoothScroll />
        <BookingProvider>
          <Navbar />
          <main className="flex-1 flex flex-col w-full overflow-x-hidden">{children}</main>
          <Footer />
          <FloatingContact />
        </BookingProvider>
      </body>
    </html>
  );
}
