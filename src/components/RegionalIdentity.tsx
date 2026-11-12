import { MapPin } from 'lucide-react';
import { brandCaption, platformOperator, regionalBrands, type RegionalBrand, type RegionId } from '@/lib/regional-branding';
import './regional-identity.css';
export function RegionPicker({region, onChange, id = 'region'}: {region: RegionId; onChange: (value: string) => void; id?: string}) {
  return <div className="region-label"><MapPin size={17}/><label htmlFor={id}>Khu vực</label><select id={id} value={region} onChange={event => onChange(event.target.value)}>{regionalBrands.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}</select></div>;
}
export function RegionalBrandSettings({region, brand, onChange}: {region: RegionId; brand: RegionalBrand; onChange: (value: string) => void}) {
  return <section className="admin-panel regional-settings" aria-labelledby="regional-settings-title">
    <div><h2 id="regional-settings-title">Nhận diện đơn vị theo khu vực</h2><p>Bản xem cấu hình admin tách biệt với bộ chọn thủ công ngoài public. Chọn khu vực chỉ đổi bản mẫu admin, không cấp quyền hoặc lưu dữ liệu.</p></div>
    <RegionPicker id="admin-brand-region" region={region} onChange={onChange}/>
    <dl>{[
      ['Tên dưới logo', brandCaption(brand)],
      ['Tên công ty / pháp nhân địa phương', brand.companyName ?? 'Chưa xác minh'],
      ['Admin trung tâm đại diện', brand.representative ?? 'Chưa cấu hình'],
      ['Trạng thái đơn vị', brand.isDemo ? 'Minh họa · Chưa xác minh' : 'Tên hiện có · Pháp lý chưa xác minh'],
      ['Tổ chức vận hành nền tảng (trường riêng)', platformOperator.name ?? platformOperator.status],
    ].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    <p className="regional-settings-note">Lựa chọn mẫu admin dùng previewRegion; public tạm dùng region để thử luồng thủ công. Chưa tự xác định vị trí. Trong tương lai chỉ tự chọn khi có nguồn vị trí tin cậy và mapping trung tâm đã xác minh. Cần xác thực admin và kiểm tra quyền server trước khi vận hành.</p>
    <button className="admin-btn soft" disabled>Lưu cấu hình · Chưa kết nối</button>
  </section>;
}
