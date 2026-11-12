# Trạng thái dọn dẹp Toán Ôn Thi 360 — 08/11/2026

## Hoàn thành
- Chuyển 4 thư mục rác kỹ thuật vào Thùng rác, có thể khôi phục: `.next-admin-qa`, `.next-image-qa`, `.next-qa` và `artifacts/image-transfer-incomplete-card1`.
- 660 tệp; 92.382.431 byte (88,10 MiB). Nhật ký: `artifacts/cleanup-2026-11-08.json`.
- Không làm trống Thùng rác. Dung lượng vật lý chưa được giải phóng; đây là dọn khỏi thư mục dự án, không phải xóa vĩnh viễn.
- Giữ server cổng 3100, `.next`, `node_modules`, source, assets, scripts, cấu hình, tài liệu và bằng chứng QA. Giữ `01.rar`, `02.zip`, tệp mẫu và Figma pending vì chưa xác minh được là thừa.
- MD phân tích/thiết kế đã cập nhật bản 1.16, mục 32: banner phủ khung, nút 9px, thanh khu vực 20px/giây liên tục và giới hạn prototype.

## Kiểm tra sau dọn
- `npm test`: 25 kiểm tra đạt; ảnh tải được, chọn lớp, Back/Forward, dialog, khu vực, FAQ, menu mobile và không tràn ngang trong phạm vi test.
- `node scripts/qa-ticker-smooth.mjs`: 4 viewport đạt; nối vòng, tốc độ 20px/giây, pause/resume, reduced motion.
- `node scripts/qa-button-shape.mjs`: 28 tổ hợp route/viewport đạt.
- `node scripts/qa-together-full.mjs`: 8 tổ hợp route/viewport đạt.
- `npm run typecheck`: đạt, exit code 0.
- Không chạy lại production build: không thay source trong lượt dọn này; cache build QA cũ đã dọn. Không tuyên bố kiểm thử đầy đủ mọi trình duyệt, accessibility hoặc backend.

## Khôi phục và bảo trì
Có thể vào Thùng rác của Windows, chọn đúng các thư mục theo nhật ký và Khôi phục nếu cần. Cache QA cũng có thể được dựng lại theo README. Không xóa `.next` khi server đang chạy; không dùng các ảnh QA cũ làm chuẩn thiết kế mới.