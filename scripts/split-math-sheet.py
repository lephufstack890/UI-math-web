from pathlib import Path
from PIL import Image
root=Path(r'D:\WEB\Toán Onthi360\frontend')
src=root/'public/assets/exec-1b632597-94ee-4158-becd-11963bae1c63.png'
im=Image.open(src)
assert im.size==(1536,1024)
out=root/'public/assets/toan';out.mkdir(exist_ok=True)
for name,col,row in [('foundation',0,0),('exam',1,0),('geometry',2,0),('family',0,1),('consultation',1,1),('educator',2,1)]:
    box=(col*512+3,row*512+3,(col+1)*512-3,(row+1)*512-3)
    im.crop(box).save(out/(name+'-v3.webp'),'WEBP',quality=94)
p=root/'src/components/Home.tsx';s=p.read_text(encoding='utf-8')
for name in ['foundation','exam','geometry','family','consultation','educator']:
    s=s.replace('toan/'+name+'.webp','toan/'+name+'-v3.webp')
s=s.replace('toan/student.webp','toan/foundation-v3.webp')
s=s.replace('Minh họa giáo viên Toán đồng hành; ảnh tư vấn viên riêng đang được bổ sung','Tư vấn viên hỗ trợ học sinh và phụ huynh học Toán')
p.write_text(s,encoding='utf-8')
p=root/'src/app/mockup-v2.css';s=p.read_text(encoding='utf-8');s+='''\n/* Six original math illustrations supplied in a 3-by-2 sheet. */\n.roadmap-picture{height:170px}.roadmap-picture img{object-position:center 35%}.audience-grid img{height:160px;object-position:center 30%}.grade-illustration{object-position:center 32%}.support>img{object-position:center center}.support:after{background:linear-gradient(90deg,#e9f8ff 0,#e9f8ff 43%,#e9f8ff50 67%,transparent 85%)}@media(max-width:1250px) and (min-width:701px){.roadmap-picture{height:135px}.audience-grid img{height:135px}}@media(max-width:700px){.roadmap-picture{height:140px}.audience-grid img{height:115px}.support>img{width:65%;opacity:.8}.support:after{background:linear-gradient(90deg,#e9f8fff5,#e9f8ffc0 48%,#e9f8ff30)}}\n''';p.write_text(s,encoding='utf-8')
(root/'public/assets/toan/README.md').write_text('Các ảnh *-v3.webp cắt từ bộ ảnh Toán mới exec-1b632597-94ee-4158-becd-11963bae1c63.png do thầy lưu. Lưới 3x2, bỏ 3 px mép từng ô. Mapping: foundation (0,0), exam (1,0), geometry (2,0), family (0,1), consultation (1,1), educator (2,1). Các ảnh books/workspace còn dùng khung cắt từ hero-toan.png. Không dùng ảnh hệ thống Tin.\n',encoding='utf-8')