from pathlib import Path
from PIL import Image
root=Path(r'D:\WEB\Toán Onthi360\frontend')
im=Image.open(root/'public/assets/hero-toan.png')
out=root/'public/assets/toan';out.mkdir(exist_ok=True)
crops={
'foundation':(650,280,1140,850),
'geometry':(1190,230,1740,820),
'exam':(900,300,1460,860),
'student':(650,270,1150,850),
'family':(925,100,1550,735),
'educator':(1180,95,1630,650),
'books':(680,590,1270,885),
'workspace':(1060,560,1770,885),
'consultation':(1180,95,1630,650)
}
for name,box in crops.items():
    crop=im.crop(box);crop.thumbnail((800,800));crop.save(out/(name+'.webp'),'WEBP',quality=92)
p=root/'src/components/Home.tsx';s=p.read_text(encoding='utf-8')
s=s.replace(' onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src=\'/assets/hero-banner-hsg.jpg\'}}','')
s=s.replace('/assets/workspace-student-hero-v1.png','/assets/toan/foundation.webp')
s=s.replace('/assets/course-img-3.webp','/assets/toan/geometry.webp')
s=s.replace('/assets/workspace-parent-hero-v1.png','/assets/toan/exam.webp')
s=s.replace("['workspace-student-hero-v1.png','Học sinh'","['toan/student.webp','Học sinh'")
s=s.replace("['workspace-parent-hero-v1.png','Phụ huynh'","['toan/family.webp','Phụ huynh'")
s=s.replace("['workspace-teacher-hero-v1.png','Giáo viên'","['toan/educator.webp','Giáo viên'")
s=s.replace('/assets/sidebar-plane.jpg','/assets/toan/books.webp')
s=s.replace('Bầu trời và chiếc máy bay giấy tượng trưng cho ước mơ học tập','Sách và dụng cụ học Toán')
s=s.replace('/assets/support-banner-bg.jpg','/assets/toan/consultation.webp')
s=s.replace('Tư vấn viên sẵn sàng hỗ trợ học sinh và phụ huynh','Minh họa giáo viên Toán đồng hành; ảnh tư vấn viên riêng đang được bổ sung')
s=s.replace('className="workspace-illustration" src="/assets/toan/geometry.webp"','className="workspace-illustration" src="/assets/toan/workspace.webp"')
p.write_text(s,encoding='utf-8')
p=root/'src/app/globals.css';s=p.read_text(encoding='utf-8').replace("url('/assets/footer-bg.jpg')",'none');p.write_text(s,encoding='utf-8')
p=root/'src/app/mockup-v2.css';s=p.read_text(encoding='utf-8');s+='''\n/* All visible artwork now derives from the supplied mathematics image. */\n.roadmap-picture img,.audience-grid img,.grade-illustration{object-position:center 35%}.workspace-illustration{object-position:center}.side-art img{object-position:center}.support>img{width:48%;left:auto;right:0;object-position:center top}.support:after{background:linear-gradient(90deg,#e9f8ff 0,#e9f8ff 43%,#e9f8ff80 65%,transparent)}.support-copy{max-width:63%}.site-footer{background-image:linear-gradient(180deg,#f2fbff,#d6f0ff);background-size:cover}@media(max-width:700px){.support>img{width:65%;opacity:.65}.support-copy{max-width:76%}.support:after{background:linear-gradient(90deg,#e9f8fff5,#e9f8ffb0 58%,transparent)}}\n''';p.write_text(s,encoding='utf-8')
(root/'public/assets/toan/README.md').write_text('Các ảnh WebP này được cắt từ hero-toan.png do thầy cung cấp. Chỉ là tài nguyên Toán tạm trong lúc chờ bộ ảnh riêng theo thiết kế. Không lấy từ hệ thống Tin. Không xem ảnh family/consultation là ảnh đại diện thật hoặc bộ minh họa riêng đã hoàn tất.\n',encoding='utf-8')