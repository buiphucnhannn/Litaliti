"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Check, BedDouble, Scan, Bath, Phone, Copy, MessageCircle } from "lucide-react";
import { rooms, packages, homestayInfo } from "@/data/homestayData";
import { lockScroll } from "@/lib/smoothScroll";

const inputClass =
  "w-full px-2.5 sm:px-3.5 py-2 text-[16px] sm:text-xs bg-white border border-stone-300 rounded-xl focus:outline-none focus:border-[#3A2A1F] focus:ring-2 focus:ring-[#C29A6B]/25 transition-shadow";

function formatDate(value) {
  if (!value) return "...";
  const [y, m, d] = value.split("-");
  return `${d}/${m}/${y}`;
}

export default function BookingModal({ onClose, initialRoomId, initialPackageId }) {
  const [packageId, setPackageId] = useState(initialPackageId || "hourly");
  const [roomId, setRoomId] = useState(initialRoomId || "any");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState(null);
  const [copied, setCopied] = useState(false);

  // While open: lock page scroll (without layout jump) and close on Escape
  useEffect(() => {
    lockScroll(true);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const pkg = packages.find((p) => p.id === packageId) || packages[0];
  const room = rooms.find((r) => r.id === roomId);

  // No backend: the request is composed into a ready-to-send message for Zalo / Messenger
  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Chào Litaliti Homestay, mình muốn ${packageId === "monthly" ? "tư vấn thuê theo tháng" : "đặt phòng"} 💛`,
      `• Gói: ${pkg.name}${pkg.id === "hourly" ? " (từ 150K)" : ""}`,
      `• Phòng: ${room ? room.name : "Phòng nào còn trống cũng được"}`,
      `• Ngày nhận: ${formatDate(date)}${time ? ` lúc ${time}` : ""}`,
      `• Tên: ${fullName}`,
      `• SĐT: ${phone}`,
    ];
    if (notes.trim()) lines.push(`• Ghi chú: ${notes.trim()}`);
    setMessage(lines.join("\n"));
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const sendVia = async (url) => {
    await copyMessage();
    window.open(url, "_blank", "noopener");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-[#1C130D]/65 backdrop-blur-sm animate-room-fade"
    >
      {/* Sized to fit one screen; scrolls internally only on very short phones */}
      <div data-lenis-prevent className="relative w-full max-w-2xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[#FBF8F3] rounded-3xl shadow-2xl border border-[#C29A6B]/40 text-[#2E241C]">
        {/* Header */}
        <div className="sticky top-0 z-10 px-12 sm:px-14 py-3 sm:py-3.5 bg-[#3A2A1F] text-white text-center">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 max-w-full">
            <div className="hidden min-[360px]:block w-9 h-9 rounded-full overflow-hidden border border-[#EAD7BC]/50 relative shrink-0">
              <Image src="/logo.jpg" alt="Logo Litaliti" fill sizes="36px" className="object-cover" />
            </div>
            <div className="text-left min-w-0">
              <h3 id="booking-title" className="font-serif text-[15px] min-[360px]:text-base sm:text-lg font-semibold text-[#EAD7BC] leading-tight text-balance">
                Đặt phòng tại Litaliti
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-300 leading-snug">
                <span className="whitespace-nowrap">Check-in tự động —</span>{" "}
                <span className="whitespace-nowrap">tư vấn qua Zalo</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 text-stone-300 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {message ? (
          <div className="p-6 sm:p-8 text-center animate-room-fade">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#C29A6B]/15 flex items-center justify-center text-[#A67C52]">
              <Check className="w-8 h-8" strokeWidth={2.2} />
            </div>
            <h4 className="mt-3 font-serif text-2xl font-bold text-[#3A2A1F]">Sắp xong rồi, {fullName || "bạn"} ơi!</h4>
            <p className="mt-2 text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
              Litaliti đã soạn sẵn tin nhắn bên dưới. Bấm <strong>Gửi qua Zalo</strong> — tin nhắn được sao chép tự động,
              bạn chỉ cần dán vào khung chat là xong.
            </p>

            <pre className="mt-4 text-left whitespace-pre-wrap font-sans text-[13px] leading-relaxed text-stone-700 bg-white border border-[#C29A6B]/30 rounded-2xl p-4">
              {message}
            </pre>

            <div className="mt-5 flex flex-col sm:flex-row gap-2.5 justify-center">
              <button
                type="button"
                onClick={() => sendVia(homestayInfo.zalo)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C29A6B] hover:bg-[#AD8457] text-[#2A1E16] font-semibold rounded-full text-sm transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Gửi qua Zalo
              </button>
              <button
                type="button"
                onClick={() => sendVia(homestayInfo.facebook)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#3A2A1F] hover:bg-[#3A2A1F] hover:text-white text-[#3A2A1F] rounded-full text-sm font-medium transition-all cursor-pointer"
              >
                Nhắn Facebook
              </button>
              <button
                type="button"
                onClick={copyMessage}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-stone-600 hover:text-[#3A2A1F] rounded-full text-sm transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Đã sao chép" : "Sao chép"}
              </button>
            </div>
            <p className="mt-4 text-[12px] text-stone-500">
              Cần gấp? Gọi ngay{" "}
              <a href={`tel:${homestayInfo.phone}`} className="font-semibold text-[#3A2A1F] underline">
                {homestayInfo.phoneDisplay}
              </a>
              {" · "}
              <button type="button" onClick={() => setMessage(null)} className="underline cursor-pointer hover:text-[#3A2A1F]">
                Sửa thông tin
              </button>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-4 sm:px-6 py-4 space-y-3 sm:space-y-3.5">
            {/* Package selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">Gói lưu trú</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                {packages.map((p) => {
                  const active = p.id === packageId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPackageId(p.id)}
                      aria-pressed={active}
                      className={`px-2.5 py-2 rounded-xl border text-left cursor-pointer transition-all ${
                        active
                          ? "border-[#3A2A1F] bg-[#3A2A1F] text-white shadow-sm"
                          : "border-stone-200 bg-white hover:border-[#C29A6B] text-stone-700"
                      }`}
                    >
                      <span className="block text-xs font-bold font-serif leading-tight">{p.name}</span>
                      <span className={`block text-[11px] mt-0.5 whitespace-nowrap ${active ? "text-[#EAD7BC]" : "text-stone-500"}`}>
                        {p.pricePrefix ? `${p.pricePrefix} ${p.price}` : p.price === "Liên hệ" ? "Báo giá nhanh" : p.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Room selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">Chọn phòng</label>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {[{ id: "any", name: "Bất kỳ", cover: "/logo.jpg", area: "Còn trống" }, ...rooms].map((r) => {
                  const active = r.id === roomId;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRoomId(r.id)}
                      aria-pressed={active}
                      className={`group p-1 rounded-xl border text-left cursor-pointer transition-all min-w-0 ${
                        active ? "border-[#3A2A1F] bg-[#3A2A1F] text-white shadow-sm" : "border-stone-200 bg-white hover:border-[#C29A6B]"
                      }`}
                    >
                      <span className="relative block aspect-[4/3] rounded-lg overflow-hidden bg-stone-200">
                        <Image src={r.cover} alt="" fill sizes="120px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </span>
                      <span className="block px-1 pt-1 text-[11px] sm:text-xs font-bold font-serif leading-tight truncate">{r.name}</span>
                      <span className={`block px-1 pb-0.5 text-[10px] sm:text-[11px] ${active ? "text-[#EAD7BC]" : "text-stone-500"}`}>{r.area}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Room highlight */}
            {room && (
              <div key={room.id} className="flex flex-wrap items-center gap-x-4 gap-y-1 px-3 py-2 bg-[#F4EDE4] rounded-xl text-[11px] sm:text-xs text-stone-600 animate-room-fade">
                <span className="font-serif font-bold text-[#3A2A1F]">{room.tag}</span>
                <span className="inline-flex items-center gap-1"><BedDouble className="w-3.5 h-3.5 text-[#A67C52]" strokeWidth={1.6} />{room.bed}</span>
                <span className="inline-flex items-center gap-1"><Scan className="w-3.5 h-3.5 text-[#A67C52]" strokeWidth={1.6} />{room.area}</span>
                <span className="inline-flex items-center gap-1"><Bath className="w-3.5 h-3.5 text-[#A67C52]" strokeWidth={1.6} />{room.bath}</span>
              </div>
            )}

            <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-3">
              <div>
                <label htmlFor="bk-date" className="block text-xs font-medium text-stone-700 mb-1">Ngày nhận phòng</label>
                <input id="bk-date" type="date" required value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label htmlFor="bk-time" className="block text-xs font-medium text-stone-700 mb-1">
                  Giờ nhận phòng {packageId === "hourly" ? "" : "(tuỳ chọn)"}
                </label>
                <input id="bk-time" type="time" required={packageId === "hourly"} value={time} onChange={(e) => setTime(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label htmlFor="bk-name" className="block text-xs font-medium text-stone-700 mb-1">Họ và tên</label>
                <input id="bk-name" type="text" required placeholder="Nguyễn Văn A" value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label htmlFor="bk-phone" className="block text-xs font-medium text-stone-700 mb-1">Số điện thoại / Zalo</label>
                <input
                  id="bk-phone"
                  type="tel"
                  required
                  pattern="[0-9 +.]{9,15}"
                  title="Số điện thoại 9–15 chữ số"
                  placeholder="0912 345 678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="bk-notes" className="block text-xs font-medium text-stone-700 mb-1">Ghi chú (tuỳ chọn)</label>
              <textarea
                id="bk-notes"
                rows={1}
                placeholder={packageId === "monthly" ? "Thời gian dự kiến thuê, số người ở..." : "Số giờ muốn đặt, dịp kỷ niệm, cần chỗ đỗ ô tô..."}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={`${inputClass} block min-h-[66px] sm:min-h-[44px] max-h-48 resize-y [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
              />
            </div>

            <div className="pt-1 flex flex-col sm:flex-row gap-2 sm:gap-2.5">
              <button
                type="submit"
                className="flex-1 py-3 sm:py-2.5 whitespace-nowrap bg-[#C29A6B] cursor-pointer hover:bg-[#AD8457] text-[#2A1E16] font-bold text-sm rounded-full transition-all shadow-md text-center"
              >
                GỬI YÊU CẦU ĐẶT PHÒNG
              </button>
              <a
                href={`tel:${homestayInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 whitespace-nowrap border border-[#3A2A1F] hover:bg-[#3A2A1F] hover:text-white text-[#3A2A1F] font-semibold text-xs rounded-full transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                Gọi {homestayInfo.phoneDisplay}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
