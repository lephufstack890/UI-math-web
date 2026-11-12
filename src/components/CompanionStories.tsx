'use client';
import { HeartHandshake, Quote, Sparkles, Star } from 'lucide-react';

const stories = [
  {
    image: '/assets/toan/foundation-v6.png',
    alt: 'Minh họa học sinh học Toán cùng sách vở',
    role: 'Góc nhìn học sinh',
    theme: 'student',
    quote: 'Khi biết bắt đầu từ đâu và hiểu từng bước, em thấy học Toán bớt khó hơn. Mỗi bài làm được là một niềm vui nhỏ.',
    initial: 'HS',
  },
  {
    image: '/assets/toan/family-v3.webp',
    alt: 'Minh họa phụ huynh đồng hành cùng con học Toán',
    role: 'Góc nhìn phụ huynh',
    theme: 'parent',
    quote: 'Điều tôi mong không chỉ là một đáp án đúng, mà là được nghe con tự tin giải thích cách nghĩ của mình.',
    initial: 'PH',
  },
  {
    image: '/assets/toan/educator-v3.webp',
    alt: 'Minh họa giáo viên hướng dẫn học sinh môn Toán',
    role: 'Góc nhìn giáo viên',
    theme: 'teacher',
    quote: 'Một câu hỏi vừa sức, một gợi ý đúng lúc có thể giúp học sinh tự tìm ra lời giải và muốn thử thêm lần nữa.',
    initial: 'GV',
  },
];

const extraStories=[
{image:'/assets/toan/exam-v3.webp',alt:'Học sinh ôn tập minh họa',role:'Một buổi tự ôn tập',theme:'student',quote:'Hôm nay em chọn xem lại một lỗi sai, làm chậm từng bước và ghi điều cần hỏi thầy cô.',initial:'HS'},
{image:'/assets/toan/family-v3.webp',alt:'Gia đình trò chuyện về việc học minh họa',role:'Lắng nghe cách con nghĩ',theme:'parent',quote:'Gia đình dành ít phút để con kể cách giải, rồi cùng chọn một mục tiêu nhỏ cho ngày mai.',initial:'PH'},
{image:'/assets/toan/educator-v3.webp',alt:'Giáo viên gợi mở bài học minh họa',role:'Một câu hỏi gợi mở',theme:'teacher',quote:'Thầy cô gợi một câu hỏi vừa sức để học sinh thử lại và tự nói ra điều mình vừa hiểu.',initial:'GV'},
];
export default function CompanionStories({catalog=false,page=1,onMore}:{catalog?:boolean;page?:number;onMore?:()=>void}) {
 const visibleStories=catalog?[...stories,...extraStories].slice((page-1)*4,page*4):stories;
  return (
    <section className="companion-stories" aria-labelledby="companion-title">
      <header className="stories-heading">
        <span className="stories-kicker"><HeartHandshake size={18}/> CÙNG NHAU TIẾN BỘ</span>
        <h2 id="companion-title">Câu chuyện đồng hành</h2>
        <p>Những góc nhìn gần gũi, nuôi dưỡng cảm hứng học Toán.</p>
        <span className="stories-demo">Nội dung minh họa, chưa phải lời chứng thực</span>
      </header>
      <div className="stories-grid" id="home-stories-list">
        {visibleStories.map(story => (
          <article className={`story-card story-${story.theme}`} key={story.role}>
            <div className="story-image"><img src={story.image} alt={story.alt}/><span>Tình huống minh họa</span></div>
            <div className="story-copy">
              <Quote className="story-quote-icon" size={22} aria-hidden="true"/>
              <p className="story-quote">“{story.quote}”</p>
              <div className="story-stars" aria-hidden="true">{[0,1,2,3,4].map(n => <Star size={14} key={n}/>)}</div>
              <div className="story-person"><span className="story-avatar" aria-hidden="true">{story.initial}</span><div><h3>{story.role}</h3><p>Nhân vật minh họa</p></div></div>
            </div>
          </article>
        ))}
      </div>
      {!catalog&&<div className="home-list-actions"><button className="button soft" onClick={onMore}>Xem thêm câu chuyện đồng hành</button></div>}
      <div className="stories-together"><img className="together-art" src="/assets/toan/together-full-v7.png" alt="Minh họa cô giáo và hai học sinh cùng học Toán dưới sân trường"/><div><strong>Mỗi bước tiến đều có người đồng hành</strong><p>Học sinh chủ động · Gia đình thấu hiểu · Thầy cô dẫn dắt</p></div></div>
    </section>
  );
}
