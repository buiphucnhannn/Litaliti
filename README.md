# Litaliti Homestay - Landing Page

Dự án landing page giới thiệu và đặt phòng cho **Litaliti Homestay** được xây dựng với **Next.js (App Router)**, **Tailwind CSS v4**, và **JavaScript thuần (ES6+ / JSX)** theo cấu trúc component module chuyên nghiệp.

---

## 🚀 Hướng Dẫn Khởi Chạy

### 1. Cài đặt thư viện (nếu clone mới)
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev Mode)
```bash
npm run dev
```
Mở trình duyệt tại [http://localhost:3000](http://localhost:3000) để xem landing page.

### 3. Build & kiểm tra bản Production
```bash
npm run build
npm run start
```

---

## 📁 Cấu Trúc Thư Mục & Chia Component Chuyên Nghiệp

```
litalitiHomestay/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout, Google Fonts (Playfair + Jakarta), SEO metadata
│   │   ├── page.js            # Trang chủ chính tập hợp các sections và điều phối Modal
│   │   └── globals.css        # Cấu hình Tailwind CSS, smooth scroll, theme fonts
│   │
│   ├── components/
│   │   ├── layout/            # Layout dùng chung
│   │   │   ├── Navbar.jsx     # Header cuộn đổi màu, menu mobile, hotline, nút đặt phòng
│   │   │   └── Footer.jsx     # Chân trang, liên kết nhanh, địa chỉ, mạng xã hội (Facebook/Zalo)
│   │   │
│   │   ├── sections/          # Các khối nội dung trên landing page
│   │   │   ├── Hero.jsx            # Banner chính, slogan, thanh tìm kiếm đặt phòng nhanh
│   │   │   ├── About.jsx           # Giới thiệu câu chuyện, ảnh collage, chỉ số nổi bật
│   │   │   ├── RoomList.jsx        # Bộ lọc hạng phòng (Tất cả, Cặp đôi, Gia đình)
│   │   │   ├── RoomCard.jsx        # Thẻ thông tin phòng (ảnh, giá, tiện ích, nút xem/đặt)
│   │   │   ├── Amenities.jsx       # Tiện ích & trải nghiệm (BBQ, cafe sáng, xe đạp, săn mây)
│   │   │   ├── Gallery.jsx         # Thư viện ảnh check-in kèm tính năng xem phóng to (Lightbox)
│   │   │   ├── Testimonials.jsx    # Đánh giá 5 sao từ khách lưu trú thực tế
│   │   │   ├── FAQ.jsx             # Accordion câu hỏi thường gặp (giờ checkin, hủy phòng, pet)
│   │   │   └── BookingSection.jsx  # Form gửi thông tin đặt phòng trực tiếp & nút Zalo/Hotline
│   │   │
│   │   └── ui/                # Các UI component tái sử dụng (Atomic components)
│   │       ├── Button.jsx          # Nút bấm chuẩn hoá (primary, secondary, outline, ghost)
│   │       ├── Badge.jsx           # Thẻ nhãn highlight (loại phòng, khuyến mãi)
│   │       ├── SectionHeading.jsx  # Tiêu đề mục đồng bộ (badge + title + highlight + desc)
│   │       ├── Modal.jsx           # Hộp thoại popup nền mờ, bắt sự kiện ESC & click outside
│   │       ├── BookingModal.jsx    # Popup điền form đặt phòng nhanh từ mọi vị trí
│   │       └── RoomDetailModal.jsx # Popup xem ảnh lớn và chi tiết tiện nghi phòng
│   │
│   └── data/
│       └── homestayData.js    # Tách biệt toàn bộ dữ liệu nội dung, giá phòng, tiện ích, ảnh
│
├── jsconfig.json              # Cấu hình alias `@/*` -> `./src/*`
└── package.json               # Next.js, React 19, Tailwind CSS v4, Lucide React
```

---

## 🛠️ Công Nghệ Sử Dụng

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Ngôn ngữ**: JavaScript thuần (`.js`, `.jsx`)
- **Icon System**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (*Playfair Display* & *Plus Jakarta Sans*)
- **Tính năng nổi bật**:
  - Tối ưu SEO tiếng Việt đầy đủ OpenGraph
  - Thiết kế Responsive 100% trên cả Mobile, Tablet và Desktop
  - Hiệu ứng kính mờ (Glassmorphism), micro-interactions mượt mà
  - Tích hợp gọi điện nhanh và nút chat Zalo trực tiếp
