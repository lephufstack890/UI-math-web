# Toán Ôn Thi 360 — Next.js frontend

Frontend prototype độc lập tại `D:\WEB\Toán Onthi360\frontend`. Không thay backend hoặc dự án Tin học. Chưa triển khai lên mạng.

## Chạy và kiểm tra
- Node.js 22 trở lên; `npm ci` để cài dependency.
- `npm run dev`: http://127.0.0.1:3100.
- Production: `npm run build`, sau đó `npm run start` khi không có server khác chiếm cổng.
- `npm run typecheck`: TypeScript. `npm test`: 25 kiểm tra browser bằng Chrome/Playwright.
- Khi server người dùng đang chạy, build QA dùng PowerShell: `$env:NEXT_DIST_DIR='.next-qa'; npm run build`. Không dừng server của người dùng.
- Các script QA bổ sung: `qa-province-role.mjs`, `qa-sidebar-panels.mjs`, `qa-layout-pagination-auth.mjs`, `qa-pagination.mjs`, `qa-member-pages.mjs`, `qa-catalog-auth.mjs`, `qa-stories-honors.mjs`, `qa-image-fit.mjs`, `qa-brand.mjs`, `audit-art.mjs` trong `scripts/`. Kết quả và ảnh ở `artifacts/`.

## Điều hướng hiện có
Các màn hình dùng cùng route Next.js `/` và query; chưa phải route backend riêng.
- Trang chủ: `/?lop=9`.
- Lớp học, tài liệu, luyện đề, giáo viên: `/?muc=classes|materials|practice|teachers&lop=9` (chọn một giá trị `muc`).
- Bảng vàng: `/?muc=honors&lop=9`.
- Đăng nhập / đăng ký: `/?muc=login`, `/?muc=register`.
- Phân trang danh mục dùng `page=2`; đổi lớp hoặc mục menu về trang 1. Bảng vàng có mười hồ sơ minh họa, năm dòng mỗi trang, cùng query `page=2`.
- URL, Back/Forward, chọn lớp và menu được đồng bộ. Trang menu/auth không render các khối phụ trang chủ.

## Đã dựng
- Header logo một dòng, dòng tên công ty, menu responsive; footer cảnh trường học Toán; favicon SVG/ICO/Apple.
- Trang chủ ba cột, chọn lớp 1–12, lộ trình thay theo lớp; câu chuyện minh họa giữa chocon và SAT; FAQ/tư vấn riêng.
- Sidebar trái: lớp, chuyên đề, sách và hồ sơ giáo viên chờ công bố. Phải: workspace, thống kê chờ dữ liệu, thành tích chờ dữ liệu, tài liệu, mẹo học. Card cô Nguyễn Thị Diện ở cột trái: cảnh trường học minh họa, avatar icon, tên đúng; lời chia sẻ/tiểu sử/chân dung chờ xác nhận. Không có lời trích giả. Trên mobile, card này xuống sau các khối nội dung để ưu tiên chọn lớp và học liệu.
- Thống kê cột phải gồm tổng thành viên, học sinh/phụ huynh/giáo viên, đề thi/bài tập, lượt làm hôm nay; cả bảy chỉ số hiển thị “—”. Biểu đồ 7 ngày là khung chờ dữ liệu, không vẽ số giả.
- Bốn danh mục có sáu mục mẫu, phân trang bốn mục (4 + 2), một hàng bốn thẻ trên desktop (từ 1024px), hai cột tablet/một cột mobile: nhãn, tiêu đề, mô tả, ảnh, ba ý nội dung, CTA mở mô tả mẫu chuyên biệt. Không có đăng ký lớp/tải tài liệu/thi thật.
- Bảng vàng có mười hồ sơ giả định và cột Tỉnh/thành; mọi tên/địa phương/hạng/điểm/danh hiệu ghi rõ minh họa. Bộ chọn lớp chỉ đổi ngữ cảnh bảng mẫu.
- Auth có ảnh Toán và chuyển đăng nhập/đăng ký. Đăng nhập không chọn vai trò. Đăng ký chọn vai trò Học sinh/Phụ huynh/Giáo viên và tỉnh/thành giả định A/B/C; danh mục thật chưa kết nối. Các lựa chọn mẫu chỉ ở bộ nhớ trang, không gửi/lưu hoặc cấp quyền thật. Mobile đặt form trước phần minh họa. Các ô tên/email/mật khẩu/xác nhận bị khóa. Submit/quên mật khẩu chỉ thông báo chưa kết nối, không gửi dữ liệu hoặc tạo phiên/tài khoản.
- Chữ chạy khu vực có nút dừng, không phải hệ thống quảng cáo backend.

## Tổ chức
- `Home.tsx`: shell, điều hướng, trang chủ và trang chi tiết theo URL.
- `MemberPage.tsx`: trang nội dung riêng, Bảng vàng mẫu.
- `SectionCatalog.tsx`: thẻ danh mục theo loại; dữ liệu dùng chung với trang chi tiết ở `src/lib/catalog.ts`.
- `AuthPage.tsx`: giao diện auth an toàn chưa kết nối.
- `CompanionStories.tsx`: câu chuyện minh họa, không phải lời chứng thực.
- `src/lib/roadmaps.ts`: lộ trình mẫu theo lớp.
- CSS được nạp theo thứ tự `globals.css`, `mockup-v2.css`, `visual-system.css`; file cuối giữ hệ chữ/nhịp bố cục và các component mới.
- Hệ chữ Segoe UI/Arial; nội dung thường 12–14px, tiêu đề thẻ 17–19px, phần 21–24px; SAT 17px. Logo, hero và tiêu đề trang có cấp chữ riêng. Chú thích công ty nhỏ theo logo compact, cần chủ sản phẩm duyệt khả năng đọc trên thiết bị thật.

## Giới hạn
- Chưa có API học liệu/auth, chấm bài, thanh toán, quản trị, thống kê trực tiếp, hồ sơ giáo viên thật hoặc gửi tư vấn.
- Không nhận/lưu/gửi credential trong prototype; không đặt session, localStorage hoặc sessionStorage cho auth.
- Không gán tính năng chưa được xác nhận cho chocon. chocon/SAT chưa có URL chính thức.
- Nội dung học, hồ sơ, câu chuyện và Bảng vàng đều là mẫu, cần duyệt và thay bằng dữ liệu được phép công bố trước phát hành.
- Robots đặt noindex/nofollow. Chưa thực hiện kiểm toán accessibility toàn diện hoặc tích hợp bảo mật backend.

Tài nguyên và nguồn: xem `ASSETS.md`. Không sử dụng ảnh hệ thống Tin trong giao diện hiện hành.

## Cập nhật thẻ, tài khoản và SEO
- Thẻ lớp có tỉnh/thành mẫu, hình thức học, giáo viên đứng lớp, trung tâm quản lý, giáo viên đồng hành. Tài liệu có phạm vi, tác giả, đơn vị và định dạng; luyện đề có phạm vi, giáo viên biên soạn, đơn vị, hình thức luyện và giáo viên hỗ trợ. Sao chưa có đánh giá, không phải rating thật.
- Đăng ký có vai trò/tỉnh mẫu và tên trường nhập thử, chỉ giữ trong state phiên xem, không gửi/lưu; không nhập thông tin thật. Login không chọn vai trò/tỉnh/trường, credential vẫn khóa.
- Card cô Nguyễn Thị Diện bên trái có ảnh người minh họa, không phải chân dung thật. Thống kê bên phải chờ dữ liệu.
- SEO từng mục/lớp/trang: title, description, Open Graph, Twitter; noindex/nofollow toàn prototype. Chưa cấu hình canonical, og:url hoặc URL ảnh social vì domain production chưa được xác nhận. Cần hoàn thiện URL chuẩn và chính sách index trước triển khai thật. generateMetadata dùng searchParams, trang chính render động phía server; client metadata đồng bộ điều hướng.
- QA: artifacts/metadata-qa.json, school-person-qa.json, sidebar-stats-inspiration-qa.json, province-role-qa.json, seo-qa.json.

## Cập nhật hồ sơ và tài khoản
- TeacherDirectory.tsx sử dụng avatar nhỏ 58px cạnh tên, không còn ảnh lớn đầu thẻ. Cô Nguyễn Thị Diện là chuyên gia, chủ Trung tâm Bồi dưỡng học sinh giỏi Vĩnh Xuân theo thông tin chủ hệ thống cung cấp; các hồ sơ khác và ảnh là minh họa. Thành tích, địa phương, đánh giá và chỉ số chờ xác minh.
- Chú thích dưới logo vẫn là Trung tâm Bồi dưỡng HSG Nguyễn Viết Xuân, khác tên đơn vị trong hồ sơ cô Diện.
- Lớp học có danh sách nhiều giáo viên đồng hành mẫu, tách giáo viên đứng lớp và trung tâm quản lý.
- Trang tài khoản thu gọn mô tả/khoảng cách, mobile không có khối ảnh phụ; đăng ký giữ vai trò, tỉnh mẫu, tên trường nhập thử và các trường tài khoản khóa. Không truyền/lưu dữ liệu thật.
- Ảnh học sinh đã sửa dùng foundation-v6.png tại 5 vị trí; nguồn exec-5e1776b1-28d0-4f26-9ff8-58615f76041e.png. Code không còn tham chiếu foundation-v3.webp.
- QA: artifacts/teacher-profile-qa.json, school-person-qa.json, fixed-student-qa.json, logo-caption-qa.json.

## Danh sách riêng từ trang chủ
- Trang chủ luôn hiển thị 3 lộ trình và 3 câu chuyện. Xem thêm chuyển sang ?muc=roadmaps hoặc ?muc=stories, không mở rộng tại chỗ.
- Danh sách lộ trình giữ lớp hiện chọn qua tham số lop; có chọn lớp và xem chi tiết từng lộ trình. Sáu lộ trình mẫu được chia 4 + 2 mỗi trang.
- Danh sách câu chuyện gồm sáu tình huống minh họa, chia 4 + 2. Không phải lời chứng thực hoặc người thật.
- Phân trang dùng page=2, hỗ trợ tải lại, Back/Forward; nút Về trang chủ giữ lớp đã chọn. Trang danh sách không có sidebar, hero hoặc các khối phụ trang chủ.
- QA hiện hành: artifacts/discovery-pages-qa.json. Kiểm thử home-show-more-qa là lịch sử UX cũ, không áp dụng nữa.

## Trang chi tiết và liên kết hệ sinh thái — 09/11/2026

- Các nút Xem lộ trình, Xem chi tiết, xem lớp/tài liệu/luyện đề, hồ sơ giáo viên, chuyên đề, chocon, phụ huynh và tư vấn mở trang chi tiết riêng trong shell, không mở dialog.
- URL: `/?muc=detail&loai=roadmap&id=lop-9-1&lop=9&tu=roadmaps`. `tu` lưu danh sách nguồn; `trang=2` giữ trang phân trang nguồn. ID ổn định, không đưa văn bản nội dung vào URL.
- `DetailPage.tsx` và `detail.css` tạo breadcrumb, hero có hình, cấu trúc nội dung, thông tin liên quan và trạng thái chưa phát hành. Dữ liệu chung ở `lib/details.ts`, `catalog.ts`, `teachers.ts` và `roadmaps.ts`.
- Quay lại dùng lịch sử khi mở từ app; đường dẫn trực tiếp có đích quay lại an toàn. Reload và Back/Forward giữ nội dung/lớp/nguồn. ID hoặc loại không hợp lệ có màn hình không tìm thấy, không rơi về nội dung giả định.
- Metadata server/client theo nội dung chi tiết; đồng bộ cả khi Next khôi phục head sau Back. Giữ noindex/nofollow toàn prototype.
- chocon dùng mô tả do chủ hệ thống cung cấp: hệ thống quản lý, giám sát, giáo dục con sử dụng máy tính và bảo vệ con trên môi trường mạng. Chưa có URL chocon chính thức hoặc tích hợp được kiểm chứng.
- Khối SAT đổi thành Ôn luyện Tiếng Anh, mô tả cơ hội giao tiếp quốc tế và ôn thi chuyên. Anchor mở `https://tienganh.onthi360.vn` trong tab mới, có noopener/noreferrer. Đây là địa chỉ do chủ hệ thống cung cấp, chưa chứng nhận website ngoài hoạt động. URL chi tiết `guide/sat` cũ vẫn giải thích tên mới và cung cấp liên kết, không tự chuyển trang.
- Chưa có đăng ký, học liệu tải xuống, bài thi/chấm điểm, hồ sơ được xác minh đầy đủ, gửi tư vấn hay backend mới. Nội dung, ảnh và thông tin tổ chức mẫu tiếp tục được ghi rõ.
- QA `scripts/qa-details.mjs` đã đạt: 108 flow lộ trình (3 home + 6 danh sách × 12 lớp), 24 flow danh mục/giáo viên, 3 guide + 4 chuyên đề + href Tiếng Anh, 36 tổ hợp route/viewport, 6 đường dẫn không hợp lệ và quay lại nguồn từ link trực tiếp. Report: `artifacts/detail-pages-qa.json` (09:38 ngày 09/11/2026).
- Các bộ `qa.mjs`, `qa-discovery-pages.mjs`, `qa-catalog-auth.mjs`, `qa-teacher-profile.mjs` đã đổi assertion modal thành trang chi tiết và hỗ trợ biến `QA_BASE_URL` (mặc định cổng 3100); lần chạy trên 3102 đạt lần lượt 25, 8, 30 và 4 nhóm kiểm tra. Typography detail đạt 12 tổ hợp trong `artifacts/typography-detail-qa.json`.
# UI-math-web
