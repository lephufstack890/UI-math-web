import type { Metadata } from 'next';
import AdminDashboard from '../../components/AdminDashboard';
import './admin.css';
export const metadata: Metadata = { title: 'Quản trị | Toán Ôn Thi 360', description: 'Giao diện quản trị thử nghiệm Toán Ôn Thi 360. Không có dữ liệu hoặc phân quyền thật.', robots: { index: false, follow: false } };
export default function AdminPage() { return <AdminDashboard />; }
