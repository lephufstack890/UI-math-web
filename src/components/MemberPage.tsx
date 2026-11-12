import {demoProvinces} from '@/lib/demo-provinces';
import SectionCatalog from './SectionCatalog';
import {ArrowLeft, ArrowRight, BookOpen, Info, Search, Trophy} from 'lucide-react';
import {gradeOptions} from '@/lib/roadmaps';

type Props={page:number;onPage:(page:number)=>void;tab:string;title:string;grade:number;onGrade:(grade:number)=>void;onHome:()=>void;onPreview:(kind:string,id:string)=>void};
const sampleResults=[
  {id:'MH-001',name:'Học sinh minh họa 01',achievement:'Hoàn thành lộ trình nền tảng',score:'96/100',badge:'Nỗ lực nổi bật'},
  {id:'MH-002',name:'Học sinh minh họa 02',achievement:'Luyện tập theo chuyên đề',score:'94/100',badge:'Học tập chủ động'},
  {id:'MH-003',name:'Học sinh minh họa 03',achievement:'Hoàn thành bài đánh giá',score:'92/100',badge:'Tiến bộ tích cực'},
  {id:'MH-004',name:'Học sinh minh họa 04',achievement:'Hoàn thành lộ trình nền tảng',score:'90/100',badge:'Kiên trì học tập'},
  {id:'MH-005',name:'Học sinh minh họa 05',achievement:'Luyện tập theo chuyên đề',score:'88/100',badge:'Vững kiến thức'},
  {id:'MH-006',name:'Học sinh minh họa 06',achievement:'Hoàn thành bài đánh giá',score:'86/100',badge:'Chủ động luyện tập'},
  {id:'MH-007',name:'Học sinh minh họa 07',achievement:'Ôn tập theo chương',score:'84/100',badge:'Nỗ lực đều đặn'},
  {id:'MH-008',name:'Học sinh minh họa 08',achievement:'Luyện tập theo chuyên đề',score:'82/100',badge:'Tiến bộ từng bước'},
  {id:'MH-009',name:'Học sinh minh họa 09',achievement:'Hoàn thành bài đánh giá',score:'80/100',badge:'Tự tin học tập'},
  {id:'MH-010',name:'Học sinh minh họa 10',achievement:'Ôn tập theo chương',score:'78/100',badge:'Kiên trì rèn luyện'},
].map((item,index)=>({...item,province:demoProvinces[index%3].label,avatar:['/assets/toan/foundation-v6.png','/assets/toan/exam-v3.webp','/assets/toan/geometry-v3.webp'][index%3]}));

export default function MemberPage({page,onPage,tab,title,grade,onGrade,onHome,onPreview}:Props){
 const honors=tab==='honors';const tablePage=Math.min(Math.max(page,1),2);const tableStart=(tablePage-1)*5;const visibleResults=sampleResults.slice(tableStart,tableStart+5);
 return <div className="member-page">
  <header className="member-heading member-heading-compact"><h1 id="member-title">{title}</h1><div className="member-toolbar"><label htmlFor="member-grade">{honors?'Xem bảng mẫu cho':'Lớp đang chọn'}</label><select id="member-grade" value={grade} onChange={e=>onGrade(Number(e.target.value))}>{gradeOptions.map(g=><option key={g} value={g}>Lớp {g}</option>)}</select></div><button className="button soft" onClick={onHome}><ArrowLeft size={15}/> Về trang chủ</button></header>
  {honors?<section className="honors-panel" aria-labelledby="honors-table-title">
    <div className="honors-demo" role="note"><Info size={21}/><div><strong>Dữ liệu minh họa hoàn toàn</strong><p>Ảnh đại diện, tên, tỉnh/thành, thứ hạng, điểm số và danh hiệu dưới đây đều được tạo để xem bố cục. Không đại diện cho học sinh, kết quả hoặc thành tích thật.</p></div></div>
    <div className="honors-title"><span className="honors-icon"><Trophy size={24}/></span><div><h2 id="honors-table-title">Bảng vàng lớp {grade}</h2><p>Bảng mẫu · 10 hồ sơ minh họa · Chưa có dữ liệu thực được công bố</p></div><span className="sample-badge">MINH HỌA</span></div>
    <p className="honors-scroll-hint">Vuốt ngang bảng để xem tỉnh/thành, điểm và ghi nhận mẫu.</p>
    <div className="honors-table-scroll" role="region" aria-label="Bảng dữ liệu thành tích minh họa" tabIndex={0}><table className="honors-table"><caption>Bảng dữ liệu mẫu lớp {grade}, không phải bảng xếp hạng thực tế.</caption><thead><tr><th scope="col">Thứ hạng mẫu</th><th scope="col">Học sinh minh họa</th><th scope="col">Lớp</th><th scope="col">Tỉnh/thành</th><th scope="col">Hoạt động mẫu</th><th scope="col">Điểm mẫu</th><th scope="col">Ghi nhận mẫu</th></tr></thead><tbody>{visibleResults.map((item,index)=><tr key={item.id}><td><span className={`honors-rank rank-${tableStart+index+1}`}>{tableStart+index+1}</span></td><th scope="row"><div className="honors-student"><img className="honors-avatar" src={item.avatar} alt="Ảnh đại diện học sinh minh họa"/><div><strong>{item.name}</strong><small>{item.id} · Nhân vật giả định</small></div></div></th><td>Lớp {grade}</td><td className="honors-province">{item.province}</td><td>{item.achievement}</td><td><strong className="sample-score">{item.score}</strong></td><td><span className="honors-badge">{item.badge}</span></td></tr>)}</tbody></table></div>
    <nav className="honors-pagination" aria-label="Phân trang Bảng vàng"><span>{tableStart+1}–{tableStart+visibleResults.length} / {sampleResults.length} hồ sơ mẫu · 5 dòng mỗi trang</span><div><button aria-label="Trang trước" disabled={tablePage===1} onClick={()=>onPage(tablePage-1)}>‹</button>{[1,2].map(n=><button key={n} aria-label={`Trang ${n}`} aria-current={n===tablePage?'page':undefined} onClick={()=>onPage(n)}>{n}</button>)}<button aria-label="Trang sau" disabled={tablePage===2} onClick={()=>onPage(tablePage+1)}>›</button></div></nav><p className="honors-footnote">Khi kết nối hệ thống thật, chỉ công bố kết quả đã xác minh và được phép chia sẻ. Bộ lọc hiện chỉ thay lớp của bảng mẫu.</p>
  </section>:<SectionCatalog page={page} onPage={onPage} tab={tab} title={title} grade={grade} onPreview={onPreview} onHome={onHome}/>}
 </div>;
}
