import {Star} from 'lucide-react';
export default function CatalogMetadata({tab,index}:{tab:string;index:number}){
 if(!['classes','materials','practice'].includes(tab))return null;
 const code=String(index+1).padStart(2,'0');
 const province=`Tỉnh/thành mẫu ${['A','B','C'][index%3]}`;
 const fields:Record<string,[string,string|string[]][]>={
 classes:[['Tỉnh/thành',province],['Hình thức học',['Trực tuyến','Trực tiếp','Kết hợp'][index%3]],['GV đứng lớp',`Giáo viên mẫu ${code}`],['Trung tâm quản lý',`Trung tâm mẫu ${['A','B','C'][index%3]}`],['GV đồng hành',[`GV hỗ trợ mẫu ${code}A`,`GV hỗ trợ mẫu ${code}B`]]],
 materials:[['Phạm vi áp dụng',index%3===1?province:'Toàn quốc (mẫu)'],['Tác giả / biên soạn',`Tác giả mẫu ${code}`],['Đơn vị quản lý',`Đơn vị học liệu mẫu ${['A','B','C'][index%3]}`],['Định dạng',['PDF (dự kiến)','Phiếu bài tập PDF','Sơ đồ kiến thức PDF'][index%3]]],
 practice:[['Phạm vi áp dụng',index%3===1?province:'Toàn quốc (mẫu)'],['GV biên soạn',`Giáo viên mẫu ${code}`],['Đơn vị quản lý',`Đơn vị luyện đề mẫu ${['A','B','C'][index%3]}`],['Hình thức luyện','Trực tuyến (dự kiến)'],['GV hỗ trợ',`GV hỗ trợ mẫu ${code}`]]
 };
 return <div className="catalog-metadata"><span className="metadata-sample">Thông tin minh họa</span><dl>{fields[tab].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{Array.isArray(value)?<ul className="companion-teacher-list">{value.map(name=><li key={name}>{name}</li>)}</ul>:value}</dd></div>)}</dl><div className="catalog-rating" aria-label="Xếp hạng sao: chưa có đánh giá"><span aria-hidden="true">{[0,1,2,3,4].map(n=><Star key={n} size={12}/>)}</span><small>Chưa có đánh giá</small></div></div>;
}