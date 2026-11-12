export type Roadmap = {id:string; grade:number; title:string; summary:string; steps:string[]; theme:'blue'|'mint'|'amber'; icon:'book'|'shapes'|'target'};
const topics: Record<number,string[]> = {
1:['Làm quen với số và phép tính','Quan sát hình và đo độ dài','Giải toán qua tình huống gần gũi'],
2:['Cộng trừ, nhân chia cơ bản','Đo lường và hình học trực quan','Rèn giải toán có lời văn'],
3:['Nhân chia và các số tự nhiên','Phân số qua hình ảnh','Giải toán qua từng bước'],
4:['Số tự nhiên và phân số','Đo lường, hình học và thống kê','Rèn tư duy giải toán lớp 4'],
5:['Phân số và số thập phân','Giải toán có lời văn','Ôn tập kiến thức Toán lớp 5'],
6:['Số tự nhiên và số nguyên','Phân số, số thập phân và tỉ số','Hình học trực quan lớp 6'],
7:['Số hữu tỉ và số thực','Biểu thức đại số và tỉ lệ thức','Hình học và suy luận lớp 7'],
8:['Đa thức và phân thức đại số','Hình học và lập luận chứng minh','Phương trình và bài toán thực tế'],
9:['Củng cố nền tảng Toán lớp 9','Rèn kỹ năng hình học lớp 9','Ôn thi vào lớp 10'],
10:['Mệnh đề, tập hợp và hàm số','Vectơ và hình học tọa độ','Thống kê, xác suất lớp 10'],
11:['Lượng giác, dãy số và giới hạn','Hình học không gian lớp 11','Đạo hàm và bài toán ứng dụng'],
12:['Hàm số, đạo hàm và tích phân','Hình học tọa độ trong không gian','Ôn thi tốt nghiệp THPT']
};
const gradeSteps: Record<number,string[][]> = {
5:[['Ôn phân số','Tính toán với số thập phân','Vận dụng và tự đánh giá'],['Đọc hiểu đề toán','Lập sơ đồ và chọn cách giải','Kiểm tra kết quả'],['Hệ thống kiến thức','Luyện theo chủ đề','Tự đánh giá và ôn lại']],
9:[['Căn thức và biến đổi','Phương trình, hệ phương trình','Hàm số và bài toán vận dụng'],['Hệ thức lượng trong tam giác','Đường tròn và góc','Lập luận và trình bày lời giải'],['Rà soát kiến thức trọng tâm','Luyện dạng bài theo mục tiêu','Luyện đề và phân tích lỗi sai']]
};
export function getRoadmaps(grade:number):Roadmap[]{ if(!topics[grade])return []; return topics[grade].map((title,i)=>({id:`lop-${grade}-${i+1}`,grade,title,summary:['Nắm chắc kiến thức, học từng bước và hiểu bản chất.','Kết nối kiến thức, luyện tư duy qua các dạng bài.','Củng cố có hệ thống, tự tin với mục tiêu tiếp theo.'][i],steps:gradeSteps[grade]?.[i]??['Khởi động và ôn kiến thức','Học chủ đề và luyện kỹ năng','Vận dụng, tự đánh giá và ôn lại'],theme:(['blue','mint','amber'] as const)[i],icon:(['book','shapes','target'] as const)[i]})); }
export const gradeOptions=Array.from({length:12},(_,i)=>i+1);
export function parseGrade(value:string|null){const grade=Number(value);return Number.isInteger(grade)&&grade>=1&&grade<=12?grade:9;}
export function getExtraRoadmaps(grade:number):Roadmap[]{
 const base=getRoadmaps(grade);if(!base.length)return [];
 return [
 {id:`lop-${grade}-practice`,grade,title:`Luyện tập chủ động lớp ${grade}`,summary:'Lộ trình mẫu bổ trợ để luyện đều, nhận ra phần chưa vững và ôn lại đúng chỗ.',steps:[`Chọn chủ đề: ${base[0].title}`,'Luyện một nhóm bài vừa sức','Tự giải thích và ghi lại lỗi cần sửa'],theme:'blue',icon:'book'},
 {id:`lop-${grade}-reasoning`,grade,title:`Diễn đạt lời giải lớp ${grade}`,summary:'Lộ trình mẫu rèn cách trình bày suy nghĩ và giải thích từng bước rõ ràng.',steps:[`Quan sát bài học: ${base[1].title}`,'Nêu dữ kiện và ý tưởng bằng lời','Viết các bước giải và kiểm tra kết luận'],theme:'mint',icon:'shapes'},
 {id:`lop-${grade}-review`,grade,title:`Tự ôn tập Toán lớp ${grade}`,summary:'Lộ trình mẫu giúp sắp xếp nội dung đã học thành kế hoạch ôn tập ngắn.',steps:[`Rà soát mục tiêu: ${base[2].title}`,'Chia nội dung thành từng buổi nhỏ','Tự đánh giá và điều chỉnh buổi tiếp theo'],theme:'amber',icon:'target'},
 ];
}
