export const homestayInfo = {
  name: "Litaliti Homestay",
  tagline: "Một góc nhỏ thật xinh cho hai người giữa lòng Huế",
  address: "30 Kiệt 246 Hùng Vương, TP. Huế",
  addressNote: "Kiệt lớn Hùng Vương — chỉ cách cầu Trường Tiền 750m",
  phone: "0379196285",
  phoneDisplay: "0379 196 285",
  zalo: "https://zalo.me/0379196285",
  facebook: "https://www.facebook.com/litalitihomestay/",
  maps: "https://maps.app.goo.gl/vxjtVqtBfvjCjdEw6",
  contactName: "Diệu Linh",
};

// Shared by the header and the footer — keep in the same order as the sections on the page
export const navLinks = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Gói lưu trú", href: "#packages" },
  { label: "Loại phòng", href: "#rooms" },
  { label: "Tiện nghi", href: "#amenities" },
  { label: "Hình ảnh", href: "#gallery" },
  { label: "Liên hệ", href: "#contact" },
];

// Sản phẩm / dịch vụ chính theo hồ sơ: Combo giờ từ 150K, Qua đêm, Full ngày, Thuê theo tháng.
// Chỉ "Combo giờ" có giá công bố; các gói còn lại báo giá qua Zalo / điện thoại.
export const packages = [
  {
    id: "hourly",
    name: "Combo giờ",
    short: "Combo giờ",
    price: "150K",
    pricePrefix: "chỉ từ",
    unit: "/ combo",
    desc: "Vài giờ riêng tư để hẹn hò, xem phim hay đơn giản là nằm lười bên nhau.",
    perks: ["Check-in tự động, không cần chờ", "Máy chiếu + Netflix", "Phòng tắm riêng"],
    highlight: true,
  },
  {
    id: "overnight",
    name: "Qua đêm",
    short: "Qua đêm",
    price: "Liên hệ",
    unit: "báo giá nhanh",
    desc: "Một buổi tối thật chậm, một giấc ngủ êm trên giường rộng và buổi sáng không vội.",
    perks: ["Giường 1m6 × 2m êm ái", "Điều hoà mát lạnh", "Bếp chung đầy đủ"],
  },
  {
    id: "fullday",
    name: "Full ngày",
    short: "Full ngày",
    price: "Liên hệ",
    unit: "báo giá nhanh",
    desc: "Trọn một ngày ở Huế: đi chơi, trở về nghỉ, nấu một bữa nhỏ rồi cùng xem phim.",
    perks: ["Giặt sấy miễn phí", "Chỗ đỗ xe an tâm", "Gần Trường Tiền, Phố Tây"],
  },
  {
    id: "monthly",
    name: "Thuê theo tháng",
    short: "Theo tháng",
    price: "Liên hệ",
    unit: "ưu đãi dài hạn",
    desc: "Một căn phòng ấm cúng như nhà cho những ai cần ở Huế lâu hơn một chút.",
    perks: ["Không gian riêng tư", "Khu giặt sấy, bếp chung", "Vị trí trung tâm"],
  },
];

// Ảnh mỗi phòng được cắt từ poster ROOM 1/2/3 của chủ nhà (public/photos/roomN-*.jpg)
export const rooms = [
  {
    id: "room1",
    tabCode: "01",
    tabName: "Room 1",
    name: "Room 1",
    tag: "Phòng ban công lớn",
    title: "Ánh sáng tràn vào\ntừ ban công lớn",
    description:
      "Rèm linen, đèn lồng giấy và chiếc giường thấp tông be — một căn phòng nhẹ nhàng, sáng sủa cho những buổi chiều lười biếng bên nhau.",
    bed: "Giường 1m6 × 2m",
    area: "18m²",
    bath: "WC khép kín",
    feature: "Ban công lớn",
    cover: "/photos/room1-1.jpg",
    images: ["/photos/room1-1.jpg", "/photos/room1-3.jpg", "/photos/room1-2.jpg", "/photos/room1-4.jpg"],
  },
  {
    id: "room2",
    tabCode: "02",
    tabName: "Room 2",
    name: "Room 2",
    tag: "Cửa sổ lớn · góc chiếu phim",
    title: "Gấu bông, đèn ngủ\nvà những đêm phim",
    description:
      "Ga sọc xanh dịu mắt, những chú gấu nhỏ và bức tường trắng để máy chiếu kể chuyện — căn phòng được khách yêu nhất cho các buổi hẹn hò.",
    bed: "Giường 1m6 × 2m",
    area: "20m²",
    bath: "WC khép kín",
    feature: "Cửa sổ lớn",
    cover: "/photos/hero-room.jpg",
    images: ["/photos/hero-room.jpg", "/photos/hero-movie.jpg", "/photos/room2-2.jpg", "/photos/room2-4.jpg"],
  },
  {
    id: "room3",
    tabCode: "03",
    tabName: "Room 3",
    name: "Room 3",
    tag: "Cửa sổ lớn · bàn trà gỗ",
    title: "Gỗ trầm, tranh hoàng hôn\nvà bàn trà nhỏ",
    description:
      "Sàn gỗ ấm, bàn trà hình hạt đậu cùng bức tranh hoàng hôn trên đầu giường — tối giản, yên tĩnh, đúng chất một góc nhỏ để thương nhau.",
    bed: "Giường 1m6 × 2m",
    area: "20m²",
    bath: "WC khép kín",
    feature: "Cửa sổ lớn",
    cover: "/photos/room3-1.jpg",
    images: ["/photos/room3-1.jpg", "/photos/room3-4.jpg", "/photos/room3-3.jpg", "/photos/room3-2.jpg"],
  },
];

// Tiện ích có trong mọi phòng (theo poster)
export const roomPerks = ["Giặt ủi miễn phí", "Máy lạnh", "Bàn trà", "Máy sấy", "Máy chiếu", "Bếp chung"];

// "featured" = 4 ảnh xếp collage khi chọn "Tất cả" (theo thứ tự ô)
export const galleryItems = [
  { id: "g1", title: "Đêm phim với máy chiếu trong Room 2", category: "Phòng nghỉ", image: "/photos/hero-movie.jpg", featured: 1 },
  { id: "g2", title: "Room 1 — đèn lồng giấy & rèm linen", category: "Phòng nghỉ", image: "/photos/room1-1.jpg", featured: 2 },
  { id: "g3", title: "Bếp chung sạch sẽ, đầy đủ", category: "Không gian chung", image: "/photos/kitchen.jpg", featured: 3 },
  { id: "g4", title: "Room 3 — bàn trà và tranh hoàng hôn", category: "Phòng nghỉ", image: "/photos/room3-1.jpg", featured: 4 },
  { id: "g5", title: "Cổng Litaliti trong kiệt lớn Hùng Vương", category: "Không gian chung", image: "/photos/gate.jpg" },
  { id: "g6", title: "Room 2 — ga sọc xanh và gấu bông", category: "Phòng nghỉ", image: "/photos/hero-room.jpg" },
  { id: "g7", title: "Khu giặt sấy miễn phí", category: "Tiện ích", image: "/photos/laundry.jpg" },
  { id: "g8", title: "Bếp từ, nồi chảo cho bữa tối nhỏ", category: "Tiện ích", image: "/photos/stove.jpg" },
  { id: "g9", title: "Góc gương, kệ gỗ và đèn ngủ", category: "Phòng nghỉ", image: "/photos/room1-3.jpg" },
  { id: "g10", title: "Room 3 — giường thấp gỗ trầm", category: "Phòng nghỉ", image: "/photos/room3-4.jpg" },
  { id: "g11", title: "Khăn, máy sấy và dép đi trong phòng", category: "Tiện ích", image: "/photos/room1-4.jpg" },
  { id: "g12", title: "Kệ sách và giá treo đồ Room 2", category: "Phòng nghỉ", image: "/photos/room2-2.jpg" },
  { id: "g13", title: "Đồ ăn vặt cho buổi tối", category: "Không gian chung", image: "/photos/snacks.jpg" },
  { id: "g14", title: "Cửa sổ nhìn ra phố Huế", category: "Phòng nghỉ", image: "/photos/window.jpg" },
];

export const daySchedule = [
  {
    time: "14:00",
    title: "Check-in tự động",
    desc: "Nhận mã, tự mở cửa — không chờ đợi, không ngại ngùng.",
    image: "/photos/gate.jpg",
  },
  {
    time: "18:30",
    title: "Nấu một bữa nhỏ",
    desc: "Bếp chung đủ nồi chảo, bếp từ cho bữa tối hai người.",
    image: "/photos/stove.jpg",
  },
  {
    time: "21:00",
    title: "Đêm phim Netflix",
    desc: "Tắt đèn, bật máy chiếu, cuộn tròn trong chăn êm.",
    image: "/photos/hero-movie.jpg",
  },
  {
    time: "09:00",
    title: "Sáng không vội",
    desc: "Nắng nhẹ qua rèm, ngủ nướng thêm chút nữa cũng được.",
    image: "/photos/room1-1.jpg",
  },
];

// x / y = vị trí trên bản đồ minh hoạ, tính theo % (thời gian di chuyển là ước lượng bằng xe máy)
export const mapLandmarks = [
  { name: "Đại Nội", time: "~ 10 phút", icon: "landmark", x: 33, y: 18 },
  { name: "Cầu Trường Tiền", time: "750m", icon: "bridge", x: 45, y: 34 },
  { name: "Phố Tây", time: "~ 5 phút", icon: "music", x: 40, y: 64 },
  { name: "Aeon Mall Huế", time: "rất gần", icon: "bag", x: 84, y: 82 },
];

// Đánh giá thật từ Google (nội dung lấy nguyên văn từ ảnh feedback của chủ nhà)
export const reviews = [
  {
    quote: "Home đẹp sạch sẽ, gọn gàng, nằm giữa tp nên đi đâu cũng gần. Lần sau đến Huế sẽ ghé ủng hộ tiếp ❤️❤️",
    name: "Hưng Võ Duy",
    when: "Google · 3 tháng trước",
  },
  {
    quote:
      "Mình và gia đình có dịp ghé Huế 5 ngày, book ngẫu nhiên nhưng mình khá bất ngờ vì chất lượng phòng ở home này, phòng sạch đẹp và cskh khá nhanh.",
    name: "Nhi Thục",
    when: "Google · một tháng trước",
  },
];

// Ảnh chụp các feedback của khách (public/photos/feedback-*.jpg)
export const feedbackShots = [
  { image: "/photos/feedback-1.jpg", name: "Hưng Võ Duy" },
  { image: "/photos/feedback-2.jpg", name: "Nhi Thục" },
  { image: "/photos/feedback-3.jpg", name: "Khách của Litaliti" },
  { image: "/photos/feedback-4.jpg", name: "Khách của Litaliti" },
  { image: "/photos/feedback-5.jpg", name: "Khách của Litaliti" },
  { image: "/photos/feedback-6.jpg", name: "Khách của Litaliti" },
];
