export type CatalogCard={label:string;title:string;summary:string;image:string;points:string[];cta:string;detail:string};
const art={student:'/assets/toan/foundation-v6.png',geometry:'/assets/toan/geometry-v3.webp',exam:'/assets/toan/exam-v3.webp',teacher:'/assets/toan/educator-v3.webp'};
function getCards(tab:string,grade:number):CatalogCard[]{
 if(tab==='classes')return [
  {label:'LỚP HỌC · NỀN TẢNG',title:`Nắm vững Toán lớp ${grade}`,summary:'Củng cố kiến thức trọng tâm qua giải thích từng bước và luyện tập có hướng dẫn.',image:art.student,points:['Hệ thống kiến thức theo chương','Bài học và ví dụ có hướng dẫn','Ôn tập sau từng chủ đề'],cta:'Xem lớp học mẫu',detail:'Khung lớp học nền tảng gồm bài học, ví dụ và hoạt động ôn tập. Chưa có lịch học, giáo viên hoặc học phí được công bố.'},
  {label:'LỚP HỌC · CHUYÊN ĐỀ',title:'Học sâu theo chủ đề',summary:'Tập trung vào một nhóm kiến thức để hiểu rõ cách vận dụng và trình bày.',image:art.geometry,points:['Chủ đề phù hợp với lớp đang chọn','Phân tích các dạng bài điển hình','Thực hành và tự đánh giá'],cta:'Xem lớp chuyên đề',detail:'Đây là cấu trúc minh họa cho lớp chuyên đề. Danh sách buổi học và điều kiện tham gia sẽ được bổ sung sau khi chuyên môn duyệt.'},
  {label:'LỚP HỌC · TƯ DUY',title:'Khơi mở tư duy Toán',summary:'Rèn cách đặt câu hỏi, thử nhiều hướng giải và diễn đạt suy nghĩ rõ ràng.',image:art.exam,points:['Khám phá bài toán mở rộng','Trao đổi các cách giải khác nhau','Rèn lập luận và diễn đạt'],cta:'Khám phá lớp mẫu',detail:'Nội dung minh họa cho hoạt động phát triển tư duy. Chưa mở đăng ký hoặc thu học phí trong bản xem trước.'},
 ];
 if(tab==='materials')return [
  {label:'TÀI LIỆU · KIẾN THỨC',title:`Sổ tay Toán lớp ${grade}`,summary:'Tổng hợp khái niệm, công thức và lưu ý để tra cứu trong quá trình học.',image:art.student,points:['Kiến thức theo từng chương','Ví dụ minh họa ngắn gọn','Lưu ý những nhầm lẫn thường gặp'],cta:'Xem tài liệu mẫu',detail:'Thẻ minh họa tài liệu hệ thống kiến thức. Chưa có tệp tải xuống; nội dung sẽ được giáo viên thẩm định trước khi phát hành.'},
  {label:'TÀI LIỆU · BÀI TẬP',title:'Phiếu luyện theo chủ đề',summary:'Khung bài tập phân nhóm để tự luyện và đối chiếu mức độ hiểu bài.',image:art.geometry,points:['Bài tập theo nhóm kiến thức','Gợi ý phân tích yêu cầu','Phần tự kiểm tra sau khi làm'],cta:'Xem cấu trúc phiếu',detail:'Phiếu minh họa gồm phần yêu cầu, nhóm bài tập và phần tự kiểm tra. Chưa có bộ bài tập hoặc đáp án thực để tải.'},
  {label:'TÀI LIỆU · PHƯƠNG PHÁP',title:'Trình bày lời giải rõ ràng',summary:'Hướng dẫn xây dựng các bước giải và diễn đạt lập luận mạch lạc.',image:art.exam,points:['Đọc đề và xác định dữ kiện','Sắp xếp các bước lập luận','Kiểm tra và kết luận'],cta:'Xem hướng dẫn mẫu',detail:'Khung hướng dẫn minh họa về phương pháp trình bày. Không phải tài liệu đã phát hành và chưa có tệp đính kèm.'},
 ];
 if(tab==='practice')return [
  {label:'LUYỆN ĐỀ · THEO CHƯƠNG',title:'Ôn tập từng chương',summary:'Làm quen cấu trúc bài ôn tập để củng cố kiến thức sau mỗi chương.',image:art.student,points:['Câu hỏi theo kiến thức đã học','Bài tập vận dụng theo mức độ','Phần tự nhìn lại cách làm'],cta:'Xem cấu trúc đề',detail:'Đề minh họa theo chương. Chưa kết nối ngân hàng câu hỏi, thời gian làm bài hoặc hệ thống chấm điểm.'},
  {label:'LUYỆN ĐỀ · TỔNG HỢP',title:`Tự đánh giá Toán lớp ${grade}`,summary:'Xem bố cục đề tổng hợp và cách phân chia nội dung cần ôn luyện.',image:art.exam,points:['Nhóm kiến thức trọng tâm','Bài toán kết hợp nhiều nội dung','Gợi ý kế hoạch ôn tập tiếp theo'],cta:'Xem đề mẫu',detail:'Chỉ minh họa danh mục đề tổng hợp; chưa thể bắt đầu thi, nộp bài hoặc nhận điểm thật.'},
  {label:'LUYỆN ĐỀ · TƯ DUY',title:'Thử sức bài toán suy luận',summary:'Khám phá cách tiếp cận bài toán cần quan sát, liên hệ và lập luận.',image:art.geometry,points:['Quan sát và tìm quy luật','Giải thích lựa chọn của mình','So sánh các cách tiếp cận'],cta:'Xem nhóm bài mẫu',detail:'Khung bài toán tư duy mang tính minh họa. Các câu hỏi và tiêu chí đánh giá cần được biên tập và duyệt trước khi sử dụng.'},
 ];
 return [
  {label:'GIÁO VIÊN · NỀN TẢNG',title:'Đồng hành cùng kiến thức',summary:'Mẫu hồ sơ dành cho giáo viên hướng dẫn học sinh xây dựng nền tảng Toán.',image:art.teacher,points:[`Phạm vi minh họa: Toán lớp ${grade}`,'Hướng dẫn từng bước, rõ ràng','Hỗ trợ hình thành thói quen học'],cta:'Xem hồ sơ mẫu',detail:'Đây là vị trí hồ sơ giả định, không đại diện cho giáo viên thật. Tên, bằng cấp, kinh nghiệm và lịch dạy chưa được công bố.'},
  {label:'GIÁO VIÊN · CHUYÊN ĐỀ',title:'Dẫn dắt học theo chủ đề',summary:'Mẫu hồ sơ cho cách dạy tập trung vào từng nhóm bài và phương pháp giải.',image:art.teacher,points:['Phân tích kiến thức theo chủ đề','Làm rõ các bước suy luận','Phản hồi quá trình luyện tập'],cta:'Xem hồ sơ mẫu',detail:'Mẫu trình bày hồ sơ chuyên đề. Chưa có giáo viên được xác minh hoặc lịch hẹn có thể đăng ký.'},
  {label:'GIÁO VIÊN · TƯ DUY',title:'Khơi gợi cách nghĩ mới',summary:'Mẫu hồ sơ cho hoạt động rèn tư duy, trao đổi và trình bày lời giải.',image:art.teacher,points:['Khuyến khích đặt câu hỏi','Gợi mở nhiều cách giải','Rèn diễn đạt và phản biện'],cta:'Xem hồ sơ mẫu',detail:'Hồ sơ minh họa vai trò giáo viên phát triển tư duy. Chưa có danh tính, thông tin liên hệ hoặc dịch vụ thực.'},
 ];
}
function extraCards(tab:string,grade:number):CatalogCard[]{
 const content:Record<string,{title:string;summary:string;points:string[]}[]>={
 classes:[
 {title:'Luyện cách học độc lập',summary:'Mẫu lớp giúp học sinh xây dựng cách tự học và tự kiểm tra kiến thức.',points:['Lập mục tiêu cho từng buổi','Tự ghi chép và đặt câu hỏi','Nhìn lại nội dung chưa vững']},
 {title:'Toán trong cuộc sống',summary:'Khám phá mối liên hệ giữa kiến thức đang học và những tình huống gần gũi.',points:['Quan sát tình huống thực tế','Mô tả bằng kiến thức Toán','Giải thích kết quả tìm được']},
 {title:'Cùng ôn tập hiệu quả',summary:'Mẫu lớp tổng kết kiến thức và chuẩn bị kế hoạch ôn tập phù hợp.',points:['Sắp xếp nội dung cần ôn','Thực hành từng nhóm kiến thức','Điều chỉnh cách học tiếp theo']},
 ],
 materials:[
 {title:'Mẫu ghi chép bài học',summary:'Khung ghi chép để kết nối ý chính, ví dụ và câu hỏi sau mỗi bài.',points:['Tóm tắt ý chính của bài','Ghi ví dụ và các bước giải','Đánh dấu điều cần hỏi thêm']},
 {title:'Bản đồ kiến thức',summary:'Mẫu sơ đồ kết nối các khái niệm theo mạch kiến thức của lớp học.',points:['Nhận diện các nhóm kiến thức','Liên hệ khái niệm liên quan','Tự bổ sung ví dụ minh họa']},
 {title:'Phiếu tự ôn tập',summary:'Khung tài liệu hỗ trợ nhìn lại kiến thức và kế hoạch luyện tập.',points:['Đánh dấu nội dung đã hiểu','Ghi câu hỏi còn vướng mắc','Chọn việc cần luyện tiếp']},
 ],
 practice:[
 {title:'Luyện đọc và phân tích đề',summary:'Nhóm bài mẫu tập trung vào cách hiểu yêu cầu trước khi giải.',points:['Tìm dữ kiện quan trọng','Xác định điều cần chứng minh','Chọn hướng tiếp cận phù hợp']},
 {title:'Ôn tập bài toán vận dụng',summary:'Mẫu nhóm bài liên hệ nhiều kiến thức trong phạm vi lớp đang chọn.',points:['Kết nối kiến thức đã học','Trình bày lập luận có cơ sở','Kiểm tra tính hợp lý của kết quả']},
 {title:'Tự rà soát lời giải',summary:'Mẫu hoạt động nhận diện sai sót và sửa cách trình bày lời giải.',points:['Kiểm tra từng bước suy luận','Phát hiện chỗ thiếu dữ kiện','Hoàn thiện kết luận của bài']},
 ],
 teachers:[
 {title:'Hỗ trợ cách tự học',summary:'Mẫu hồ sơ dành cho định hướng xây dựng thói quen học Toán độc lập.',points:['Hướng dẫn lập kế hoạch học','Gợi mở cách tự kiểm tra','Theo dõi câu hỏi còn vướng']},
 {title:'Kết nối Toán với thực tế',summary:'Mẫu hồ sơ cho hoạt động khám phá và ứng dụng kiến thức Toán.',points:['Xây dựng tình huống gần gũi','Hướng dẫn mô tả bằng Toán học','Khuyến khích giải thích kết quả']},
 {title:'Đồng hành khi ôn tập',summary:'Mẫu hồ sơ hỗ trợ hệ thống kiến thức và rèn cách giải bài.',points:['Xác định nội dung cần củng cố','Phân tích lỗi thường gặp','Gợi ý bước ôn tập tiếp theo']},
 ]};
 const labels:Record<string,string>={classes:'LỚP HỌC',materials:'TÀI LIỆU',practice:'LUYỆN ĐỀ',teachers:'GIÁO VIÊN'};
 return (content[tab]??content.teachers).map(item=>({...item,label:`${labels[tab]??'GIÁO VIÊN'} · LỚP ${grade}`,image:art.student,cta:tab==='teachers'?'Xem hồ sơ mẫu':'Xem nội dung mẫu',detail:`${item.summary} Đây chỉ là nội dung minh họa cho lớp ${grade}; chưa có học liệu, dịch vụ hoặc hồ sơ thực được công bố.`}));
}
function illustrationFor(tab:string,index:number){
 return `/assets/toan/catalog-${['classes','materials','practice','teachers'].includes(tab)?tab:'teachers'}-v5.webp`;
}
const ids:Record<string,string[]>={classes:['nen-tang','chuyen-de','tu-duy','tu-hoc','thuc-te','on-tap'],materials:['so-tay','phieu-chu-de','loi-giai','ghi-chep','ban-do','tu-on-tap'],practice:['theo-chuong','tong-hop','suy-luan','phan-tich-de','van-dung','ra-soat']};
export function getCatalogCards(tab:string,grade:number){if(!ids[tab])return [];return [...getCards(tab,grade),...extraCards(tab,grade)].map((card,index)=>({...card,id:ids[tab][index],index,image:illustrationFor(tab,index)}));}
