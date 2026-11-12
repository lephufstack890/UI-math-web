'use client';
import {useState} from 'react';
import {MapPin,Pause,Play,ArrowRight} from 'lucide-react';
const examples:Record<string,{name:string;message:string;image:string}>={
 a:{name:'Trung tâm minh họa A',message:'Lớp Toán nhóm nhỏ: ôn kiến thức nền, luyện cách trình bày lời giải và trao đổi cùng giáo viên.',image:'/assets/toan/catalog-classes-v5.webp'},
 b:{name:'Đơn vị giáo dục minh họa B',message:'Chuyên đề tư duy Toán: khám phá nhiều cách giải qua các hoạt động vừa sức theo từng lớp.',image:'/assets/toan/catalog-practice-v5.webp'}
};
export default function RegionalBanner({onDetail}:{onDetail:(title:string,body:string)=>void}){
 const [region,setRegion]=useState(''),[paused,setPaused]=useState(false);const example=examples[region];
 return <section className="regional-demo" aria-label="Thông tin đơn vị theo khu vực">
  <div className="regional-controls"><div className="regional-select"><MapPin size={18} aria-hidden="true"/><label htmlFor="region">Khu vực</label><select id="region" value={region} onChange={e=>setRegion(e.target.value)}><option value="">Chọn khu vực</option><option value="a">Tỉnh/thành A (mẫu)</option><option value="b">Tỉnh/thành B (mẫu)</option><option value="c">Tỉnh/thành C (chưa có mẫu)</option></select></div><span className="regional-label">Quảng cáo · Minh họa</span></div>
  <div className="regional-content" aria-live="polite">
   {example?<><img src={example.image} alt="Minh họa hoạt động học Toán, không phải hình ảnh đơn vị thật"/><div className="regional-copy"><strong>{example.name}</strong><div className="ticker-window"><p className={paused?'ticker paused':'ticker'} key={region}>{example.message}</p></div><small>Tình huống giả định, chưa kết nối đơn vị hoặc quảng cáo thật.</small></div><div className="regional-actions"><button className="button soft" onClick={()=>onDetail(example.name,'Đây là nội dung quảng bá minh họa cho '+(region==='a'?'Tỉnh/thành A':'Tỉnh/thành B')+'. '+example.message+' Chưa có địa chỉ, lịch khai giảng hoặc liên hệ được xác minh. Nút này chỉ mở bản xem trước, không đăng ký hay gửi thông tin.')}>Xem mẫu <ArrowRight size={14}/></button><button className="icon-button" onClick={()=>setPaused(!paused)} aria-label={paused?'Chạy thông tin':'Tạm dừng thông tin'} aria-pressed={paused}>{paused?<Play size={16}/>:<Pause size={16}/>}</button></div></>:<div className="regional-empty"><MapPin size={24} aria-hidden="true"/><div><strong>{region?'Chưa có thông tin đơn vị tại khu vực mẫu này':'Chọn khu vực để xem ví dụ quảng bá phù hợp'}</strong><p>{region?'Thử khu vực mẫu A hoặc B. Hệ thống không tự lấy quảng cáo của khu vực khác.':'Chọn tỉnh/thành A hoặc B để xem minh họa. Không tự định vị hoặc lưu lựa chọn.'}</p></div></div>}
  </div>
 </section>
}
