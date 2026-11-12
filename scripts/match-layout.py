from pathlib import Path
p=Path(r'D:\WEB\Toán Onthi360\frontend\src\components\Home.tsx')
s=p.read_text(encoding='utf-8')
a='<div className="roadmap-cover"><span className="roadmap-number">0{i+1}</span><div className="math-symbols" aria-hidden="true">{i===0?\'a² + b²\':i===1?\'△ ∠ ◯\':\'x → ∞\'}</div><span className="roadmap-icon">{i===0?<BookOpen/>:i===1?<Shapes/>:<Target/>}</span></div>'
s=s.replace(a,'')
s=s.replace('<p>{r.summary}</p><ol>', '<p>{r.summary}</p><div className="roadmap-picture"><img src={i===0?"/assets/workspace-student-hero-v1.png":i===1?"/assets/course-img-3.webp":"/assets/workspace-parent-hero-v1.png"} alt="Minh họa hành trình học Toán"/></div><ol>')
s=s.replace('<div className="side-note">','<img className="grade-illustration" src="/assets/workspace-student-hero-v1.png" alt="Học sinh cùng sách vở"/><div className="side-note">')
s=s.replace('<div className="workspace-icon"><Monitor/></div>','<div className="workspace-icon"><Monitor/></div>')
s=s.replace('<small>Dành cho học sinh · Phụ huynh · Giáo viên</small></section>','<small>Dành cho học sinh · Phụ huynh · Giáo viên</small><img className="workspace-illustration" src="/assets/course-img-3.webp" alt="Giáo viên đồng hành cùng học sinh"/></section>')
p.write_text(s,encoding='utf-8')
p=Path(r'D:\WEB\Toán Onthi360\frontend\src\app\layout.tsx');s=p.read_text(encoding='utf-8');s=s.replace("import './globals.css';","import './globals.css';\nimport './mockup-v2.css';");p.write_text(s,encoding='utf-8')