# Tài nguyên Toán Ôn Thi 360

## Nguồn người dùng đã lưu
- `public/assets/hero-toan` và `hero-toan.png`: hero Toán đầu tiên, 1774×887, giữ nguyên bản gốc.
- `public/assets/exec-1b632597-94ee-4158-becd-11963bae1c63.png`: sheet 1536×1024, sáu hình Toán, lưới 3×2.
- `public/assets/exec-7f68b0b7-461a-4f16-9e14-b077031b281d.png`: sheet 1774×887, hai cảnh banner và trường học/footer.

## Tài nguyên đang dùng
Trong `public/assets/toan/`:
- `foundation-v3.webp`: học sinh/sách, ô trên trái.
- `exam-v3.webp`: học sinh làm bài, ô trên giữa.
- `geometry-v3.webp`: học sinh tư duy hình học, ô trên phải.
- `family-v3.webp`: phụ huynh/học sinh, ô dưới trái.
- `consultation-v3.webp`: tư vấn viên, ô dưới giữa.
- `educator-v3.webp`: giáo viên Toán, ô dưới phải.
- Sáu ảnh vuông được bỏ 3px mép lưới, còn 506×506, không kéo méo.
- `hero-v4.webp`: cảnh banner 1774×440, chữ HTML đặt giữa vùng trời trên desktop. Mobile tách ảnh và nội dung để giữ trọn nhân vật.
- `footer-v4.webp`: cảnh trường học 1774×441. Desktop chọn phần trường/cây/cỏ phía dưới làm dải thấp, bỏ bớt trời bằng object-fit cover; mobile giữ tỷ lệ toàn cảnh. Không kéo giãn hình.
- `books-detail.webp`: crop 320×172 vào sách/dụng cụ của hero Toán đầu tiên, dùng cho sidebar và tài liệu.
- Auth và các danh mục/câu chuyện tái sử dụng ảnh Toán phù hợp, có nhãn minh họa; không đại diện người thật.

Workspace máy tính/sách dùng icon Lucide và HTML/CSS, không dùng crop mất đầu người. Logo là chữ HTML cùng icon mũ tốt nghiệp, không phải ảnh mockup nguyên trang.

## Favicon
- `public/favicon.svg`: mũ tốt nghiệp xanh, điểm cam, nền xanh nhạt.
- `public/favicon.ico`: các cỡ 16/32/48/64, cùng biểu tượng.
- `public/apple-touch-icon.png`: 180×180.
- Metadata khai báo trong `src/app/layout.tsx`.

## Phạm vi và khác biệt
Không có ảnh hệ thống Tin được tham chiếu trong UI. Tệp cũ còn lưu nhưng không dùng; không xóa ảnh gốc của người dùng.

Bố cục responsive và chữ là HTML/CSS, không khẳng định trùng từng pixel với ảnh thiết kế. Một số ảnh Toán được tái sử dụng; chưa có bộ ảnh riêng cho mọi lớp/giáo viên. Mọi ảnh nhân vật đều là minh họa, không phải xác minh hồ sơ hoặc lời chứng thực.


## Bộ ảnh riêng cho bốn danh mục
Người dùng lưu `public/assets/exec-b6f38fcf-b2d9-47fa-a37c-679e8dd2f3aa.png` (1448×1086). Đã tách lưới 2×2, bỏ 3px mép mỗi ô, thành ảnh 718×537:
- `catalog-classes-v5.webp`: trên trái, lớp học tương tác.
- `catalog-materials-v5.webp`: trên phải, sách và dụng cụ Toán.
- `catalog-practice-v5.webp`: dưới trái, học sinh luyện bài.
- `catalog-teachers-v5.webp`: dưới phải, giáo viên hướng dẫn học sinh.
Bốn danh mục dùng bốn ảnh khác nhau, tái sử dụng trong nội bộ các thẻ cùng danh mục. Không phải mỗi thẻ có một ảnh riêng. Các ảnh giữ nguyên tỷ lệ, không cắt đầu người hoặc kéo méo.

Ảnh học sinh sửa hai tay: public/assets/toan/foundation-v6.png, sao chép nguyên ảnh exec-5e1776b1-28d0-4f26-9ff8-58615f76041e.png. Dùng ở chọn lớp, lộ trình đầu, nhóm Học sinh, câu chuyện học sinh và đăng ký. Các ảnh giáo viên là minh họa, không phải chân dung thật; danh sách giáo viên dùng avatar nhỏ educator-v3.webp cạnh tên.

## Companion banner and button shape (latest)
- `toan/together-full-v7.png`: original teacher/two-student scene saved by the user as `Ảnh ChatGPT 21_29_36 8 thg 11, 2026.png`; copied unchanged, not sourced from Tin.
- CompanionStories uses a full-bleed scene with live HTML text on the left on desktop. Mobile focuses the characters on the right and places readable text in a translucent lower layer within the image box.
- Shared button radius: 9px, matching teacher-profile CTA; functional primary/secondary/danger colors retained. Action buttons min-height 38px; coarse-pointer action buttons 44px.
- QA: `artifacts/together-full-qa.json` (8 combinations), `artifacts/button-shape-qa.json` (28 combinations), general regression 25 checks; production build with isolated `.next-image-qa`.

## Carousel đầu trang chủ (2026-11-09)
- Dùng hai ảnh: `toan/hero-v4.webp` (1774×440) giữ nguyên và luôn hiện đầu tiên; `toan/hero-slide-2-v2.webp` (2170×725) bổ sung cảnh cô giáo áo dài vàng cùng học sinh đọc sách, khám phá hình khối.
- File ảnh mới giữ nguyên byte. CSS crop vùng tranh y=94..630, lùi khoảng 1px nguồn khỏi mép trắng; một tỷ lệ scale đồng nhất phủ kín khung. Không sửa bitmap, kéo méo nhân vật hay hở nền trắng.
- Khung 1774:440, chữ và CTA “Tìm lộ trình của em” giữ nguyên. Mobile giữ ảnh trên, nội dung dưới. Không có bảng điều khiển, mũi tên hoặc chấm hiển thị. Nút tạm dừng chỉ hiện khi người dùng bàn phím focus, không chiếm flow.
- Tự đổi ảnh sau 7 giây và vẫn chạy khi con trỏ nằm trên hero. Dừng khi keyboard focus, ngoài màn hình hoặc tab ẩn. Reduced motion giữ ảnh gốc, không tự đổi hay fade. Ảnh2 phải tải xong trước khi chuyển; nếu tải chậm/thất bại, ảnh gốc vẫn hiển thị. Opacity ban đầu và z-index được đặt rõ để tránh khung trống.
- `hero-slide-3-v2.webp` bỏ khỏi carousel vì bố cục/tư thế gần trùng ảnh gốc; file vẫn giữ. Hai file v1 cũng không được tham chiếu, không xóa tài nguyên khi chưa được yêu cầu.
- QA: `scripts/qa-hero-carousel.mjs` kiểm 12 nhóm, gồm 10 tổ hợp ảnh/viewport 320, 390, 768, 1024, 1440px, tải ảnh2 chậm/thất bại, pause bàn phím, reduced motion và tab ẩn (visibilitychange mô phỏng). Báo cáo hiện hành `artifacts/qa-hero-carousel.json`, bản port3102 `artifacts/qa-hero-carousel-3102.json`.
- Ảnh chụp giao diện hiện tại: `artifacts/hero-auto-{width}-slide-{1,2}.png`, `artifacts/hero-auto-3100-initial.png`. Các ảnh screenshot có panel điều khiển cũ không còn là bản hiện hành. Metadata/SHA: `artifacts/hero-image-v2-manifest.json` (gồm cả ảnh3 lưu nhưng không dùng).
