# 💕 Website Thiệp Cưới - Hà Bảo Linh & Đinh Thế Vũ

Website thiệp cưới online hiện đại, lãng mạn với thiết kế responsive, phù hợp để chia sẻ với bạn bè và người thân.

## ✨ Tính năng

- 🎨 Thiết kế lãng mạn với tông màu pastel (hồng nhạt, kem, be, vàng nhạt)
- 📱 Responsive design - tối ưu cho mobile, tablet và desktop
- 🎵 Nhạc nền với player điều khiển (play/pause)
- 📸 Gallery ảnh kỷ niệm với modal xem ảnh lớn
- 📍 Thông tin sự kiện với link Google Maps
- 📞 RSVP - Xác nhận tham dự với form đầy đủ
- 💰 Thông tin mừng cưới (số tài khoản ngân hàng) với nút copy
- ✨ Animation mượt mà với Framer Motion
- 📅 Calendar section với highlight ngày cưới
- ⏰ Timeline section với dresscode

## 🛠️ Công nghệ sử dụng

- **Vite** - Build tool nhanh chóng
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Cài đặt

1. Clone hoặc tải project về máy
2. Cài đặt dependencies:

```bash
npm install
```

## 🚀 Chạy dự án

### Development mode

```bash
npm run dev
```

Mở trình duyệt tại `http://localhost:5173`

### Build cho production

```bash
npm run build
```

File build sẽ được tạo trong thư mục `dist/`

### Preview build

```bash
npm run preview
```

## ⚙️ Tùy chỉnh nội dung

Tất cả thông tin có thể tùy chỉnh trong file `src/data/weddingConfig.ts`:

### Cấu trúc dữ liệu:

- **couple**: Tên cô dâu & chú rể
- **mainDate**: Ngày giờ sự kiện chính
- **brideSide**: Thông tin nhà gái (tên, bố mẹ, địa điểm)
- **groomSide**: Thông tin nhà trai (tên, bố mẹ, địa điểm)
- **timeline**: Lịch trình sự kiện và dresscode
- **calendar**: Thông tin calendar (tháng, năm, ngày highlight)
- **contacts**: Số điện thoại, Zalo
- **bankInfo**: Thông tin tài khoản ngân hàng (cô dâu & chú rể)
- **images**: Đường dẫn các ảnh sử dụng
- **music**: Link YouTube nhạc nền

### Ví dụ cấu hình:

```typescript
export const weddingConfig: WeddingConfig = {
  couple: {
    brideName: "Hà Bảo Linh",
    groomName: "Đinh Thế Vũ",
  },
  mainDate: {
    isoString: "2026-03-08T09:00:00+07:00",
    display: "09:00 - Ngày 08 Tháng 03 Năm 2026",
    day: "08",
    month: "03",
    year: "2026",
  },
  // ... các thông tin khác
};
```

## 🖼️ Thay đổi ảnh

1. Đặt ảnh vào thư mục `public/` hoặc `src/assets/`
2. Cập nhật đường dẫn trong `weddingConfig.ts`:

```typescript
images: {
  stairHero: "/images/hero-couple.jpg",
  saveTheDateMain: "/images/save-the-date.jpg",
  // ...
}
```

## 🎵 Cấu hình nhạc nền

Hiện tại nhạc sử dụng placeholder. Để thêm nhạc thật:

1. **Cách 1: Sử dụng file MP3**
   - Đặt file MP3 vào thư mục `public/music/`
   - Cập nhật `MusicPlayer.tsx`:
   ```typescript
   setAudioSrc('/music/wedding-song.mp3');
   ```

2. **Cách 2: Sử dụng YouTube**
   - Cập nhật `youtubeUrl` trong `weddingConfig.ts`
   - Cần sử dụng service để convert YouTube sang audio (hoặc dùng react-player)

## 📤 Deploy lên Netlify

1. Đăng nhập vào [Netlify](https://www.netlify.com/)
2. Chọn "Add new site" > "Import an existing project"
3. Kết nối với GitHub/GitLab repository hoặc drag & drop thư mục `dist/`
4. Cấu hình build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

### Deploy tự động từ Git

1. Push code lên GitHub/GitLab
2. Trong Netlify, chọn repository
3. Cấu hình build settings như trên
4. Mỗi lần push code, Netlify sẽ tự động deploy

## 📤 Deploy lên Vercel

1. Đăng nhập vào [Vercel](https://vercel.com/)
2. Click "Add New Project"
3. Import repository từ GitHub/GitLab hoặc upload thư mục
4. Vercel sẽ tự động detect Vite project
5. Click "Deploy"

### Deploy từ CLI

```bash
npm i -g vercel
vercel
```

## 📝 Lưu ý

- Đảm bảo thay đổi tất cả thông tin trong `weddingConfig.ts` trước khi deploy
- Thay thế ảnh placeholder trong config bằng ảnh thật của bạn
- Kiểm tra lại tất cả link (Google Maps, Zalo) trước khi chia sẻ
- Test trên nhiều thiết bị để đảm bảo responsive tốt
- RSVP form hiện tại chỉ console.log/alert - có thể tích hợp với backend sau

## 🎨 Tùy chỉnh màu sắc

Màu sắc có thể tùy chỉnh trong file `tailwind.config.cjs`:

```javascript
colors: {
  'wedding-pink': '#FFE5E5',
  'wedding-rose': '#FFB6C1',
  'wedding-cream': '#FFF8E7',
  'wedding-beige': '#F5E6D3',
  'wedding-gold': '#FFD700',
}
```

## 📂 Cấu trúc Components

- `Header.tsx` - Header với navigation
- `SaveTheDateSection.tsx` - Section "Save The Date" với ảnh và thông tin chính
- `TimelineSection.tsx` - Timeline với dresscode và lịch trình
- `CalendarSection.tsx` - Calendar với highlight ngày cưới
- `BrideGroomIntroSection.tsx` - Giới thiệu cô dâu và chú rể
- `FamiliesSection.tsx` - Thông tin gia đình nhà trai và nhà gái
- `RsvpSection.tsx` - Form xác nhận tham dự
- `GiftSection.tsx` - Thông tin mừng cưới (STK)
- `MusicPlayer.tsx` - Player nhạc nền
- `BackToTopButton.tsx` - Nút scroll to top
- `Footer.tsx` - Footer

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

---

Made with ❤️ for Hà Bảo Linh & Đinh Thế Vũ 💕
