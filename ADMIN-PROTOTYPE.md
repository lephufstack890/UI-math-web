# Admin prototype — Toán Ôn Thi 360

Route: `/admin` (mục con dùng `?section=...`). Không thay backend hoặc console quản trị hiện hữu.

## Phạm vi
- Tổng quan minh họa; người dùng & giám hộ; trung tâm; lớp; lộ trình; tài liệu; luyện đề/ngân hàng câu; giáo viên; quảng cáo khu vực; Bảng vàng; cấu hình/quyền; nhật ký/hỗ trợ.
- Sidebar, menu mobile, tìm kiếm, lọc trạng thái, phân trang 5 dòng, chi tiết, biểu mẫu xem thử, Back/Forward.
- Dùng màu, logo, font và ảnh Toán của trang công khai.

## Giới hạn bắt buộc
- Dữ liệu và số liệu đều ghi rõ minh họa. Đây không phải dữ liệu hệ thống hoặc trạng thái xét duyệt thật.
- Không có auth/RBAC/tenant guard. Route admin chỉ là prototype công khai noindex; không dùng cho quản trị dữ liệu thật.
- Biểu mẫu bị khóa, không có API, không lưu, không xuất bản, không tạo tài khoản hoặc thay quyền.
- Chưa làm gói/thanh toán, chính sách hoàn chỉnh hoặc audit thật. Các khu vực quản lý thể hiện thiết kế, chưa phải nghiệp vụ vận hành.
- Khi triển khai thật cần kết nối hệ thống hiện có, bảo vệ route phía server và kiểm tra quyền đối tượng/đơn vị/địa bàn.

## Kiểm tra
- Build riêng: `$env:NEXT_DIST_DIR='.next-admin-qa'; npm run build`.
- QA server riêng cổng 3102; script `node scripts/qa-admin.mjs`.
- Kết quả `artifacts/admin-qa.json`, ảnh `artifacts/admin-overview-*.png`, `admin-list-desktop.png`, `admin-list-mobile.png`.
- Không dừng tiến trình người dùng trên cổng 3100.
