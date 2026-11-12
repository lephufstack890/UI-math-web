import type { Metadata } from 'next';
import './globals.css';
import './mockup-v2.css';
import './visual-system.css';
import './typography.css';
export const metadata: Metadata = { title: 'Toán Ôn Thi 360 | Lộ trình rõ ràng, vững vàng tri thức', description: 'Không gian học Toán dành cho học sinh, phụ huynh và giáo viên. Bản giao diện thử nghiệm.', icons: { icon: [{url:'/favicon.svg',type:'image/svg+xml'}, {url:'/favicon.ico',sizes:'any'}], apple: '/apple-touch-icon.png' }, robots: {index: false, follow: false} };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="vi"><body>{children}</body></html>; }