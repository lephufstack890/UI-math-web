'use client';

import { useEffect, useId, useRef, useState, type CSSProperties } from 'react';
import { ArrowRight, CheckCircle2, Pause, Play, Sparkles } from 'lucide-react';
import styles from './HeroCarousel.module.css';

type HeroSlide = { src: string; alt: string; width: number; height: number; crop?: { top: number; bottom: number } };

const slides: HeroSlide[] = [
  { src: '/assets/toan/hero-v4.webp', alt: 'Học sinh, giáo viên cùng khám phá Toán học', width: 1774, height: 440 },
  { src: '/assets/toan/hero-slide-2-v2.webp', alt: 'Cô giáo áo dài vàng cùng học sinh đọc sách và khám phá hình khối Toán học', width: 2170, height: 725, crop: { top: 94, bottom: 630 } },
];
const AUTOPLAY_DELAY = 7000;
const FRAME_ASPECT = 1774 / 440;

// Crop the existing bitmap in CSS only. The art bounds are inset by one source
// pixel to avoid exposing antialiased white margins. One scale preserves anatomy.
function cropStyle(slide: HeroSlide): CSSProperties | undefined {
  if (!slide.crop) return undefined;
  const artHeight = slide.crop.bottom - slide.crop.top;
  const scale = Math.max(1 / slide.width, 1 / (artHeight * FRAME_ASPECT));
  const width = slide.width * scale;
  const height = slide.height * scale * FRAME_ASPECT;
  const artFrameHeight = artHeight * scale * FRAME_ASPECT;
  return {
    width: `${width * 100}%`,
    height: `${height * 100}%`,
    left: `${(1 - width) * 50}%`,
    top: `${((1 - artFrameHeight) / 2 - slide.crop.top * scale * FRAME_ASPECT) * 100}%`,
    right: 'auto', bottom: 'auto', maxWidth: 'none', objectPosition: 'center',
  };
}

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(false);
  const [ready, setReady] = useState<boolean[]>(() => slides.map(() => false));
  const root = useRef<HTMLElement>(null);
  const images = useRef<(HTMLImageElement | null)[]>([]);
  const viewportId = useId();
  const next = (active + 1) % slides.length;
  const playing = slides.length > 1 && ready[active] && ready[next] && !paused && !reducedMotion && !focused && visible && pageVisible;

  function markReady(index: number, loaded: boolean) {
    setReady(previous => previous[index] === loaded ? previous : previous.map((value, item) => item === index ? loaded : value));
    if (!loaded && index !== 0) setActive(0);
  }

  useEffect(() => {
    images.current.forEach((image, index) => {
      if (image?.complete && image.naturalWidth > 0) markReady(index, true);
    });
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setPageVisible(document.visibilityState === 'visible');
    updateMotion();
    updateVisibility();
    preference.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.25);
    }, { threshold: [0, 0.25] });
    if (root.current) observer.observe(root.current);
    return () => {
      preference.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % slides.length), AUTOPLAY_DELAY);
    return () => window.clearTimeout(timer);
  }, [active, playing]);

  return (
    <section ref={root} className={`hero ${styles.carousel}`} role="region" aria-roledescription="băng chuyền" aria-label="Hành trình học Toán"
      data-active-slide={active + 1} data-autoplay={playing ? 'playing' : 'paused'}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false); }}>
      <div className={styles.scene} id={viewportId}>
        {slides.map((slide, index) => (
          <div key={slide.src} className={styles.slide} style={{ opacity: index === active ? 1 : 0 }} aria-hidden={index !== active} role="group" aria-roledescription="ảnh trình chiếu" aria-label={`${index + 1} trên ${slides.length}`}>
            <img ref={image => { images.current[index] = image; }} className={`hero-art ${styles.art}`} src={slide.src} alt={slide.alt} width={slide.width} height={slide.height}
              style={cropStyle(slide)} data-crop-start={slide.crop?.top} data-crop-end={slide.crop?.bottom}
              onLoad={() => markReady(index, true)} onError={() => markReady(index, false)}
              loading="eager" fetchPriority={index === 0 ? 'high' : 'low'} decoding="async" />
          </div>
        ))}
        <button type="button" className={styles.pauseControl} onClick={() => setPaused(value => !value)} disabled={reducedMotion}
          aria-label={reducedMotion ? 'Tự chuyển ảnh đã tắt theo cài đặt giảm chuyển động' : paused ? 'Bật tự chuyển ảnh' : 'Tạm dừng tự chuyển ảnh'} aria-controls={viewportId}>
          {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}<span>{paused ? 'Bật tự chuyển ảnh' : 'Tạm dừng tự chuyển ảnh'}</span>
        </button>
      </div>
      <div className="hero-copy">
        <div className="pill"><Sparkles size={14} aria-hidden="true" /> CÙNG EM MỖI NGÀY</div>
        <h1>Học Toán vững vàng,<br /><em>tự tin chinh phục.</em></h1>
        <p>Một lộ trình phù hợp. Từng bước tiến bộ.<br />Cùng thầy cô và gia đình nuôi dưỡng niềm vui học Toán.</p>
        <a className="button yellow" href="#roadmaps">Tìm lộ trình của em <ArrowRight size={17} aria-hidden="true" /></a>
        <div className="hero-benefits"><span><CheckCircle2 aria-hidden="true" /> Dễ hiểu</span><span><CheckCircle2 aria-hidden="true" /> Đúng mục tiêu</span><span><CheckCircle2 aria-hidden="true" /> Có người đồng hành</span></div>
      </div>
    </section>
  );
}
