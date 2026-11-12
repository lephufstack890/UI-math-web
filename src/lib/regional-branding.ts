// Manual demo fixtures only, shared by public selection and the separate admin preview.
// Never use them as verified regional centers or as automatic visitor-location results.
import {platformOperator} from './public-branding';
export {platformOperator};
export type RegionId = 'nationwide' | 'thai-binh' | 'hung-yen' | 'ha-noi';
export type RegionalBrand = {
  id: RegionId;
  label: string;
  centerName: string | null;
  companyName: string | null;
  representative: string | null;
  isDemo: boolean;
  ticker: string;
};
// Display configuration only. Region selection is not a tenant permission grant.
// No operator has been verified; never infer this role from a local company name.

export const regionalBrands: readonly RegionalBrand[] = [
  { id: 'nationwide', label: 'Toàn quốc', centerName: 'TT Bồi dưỡng HSG Nguyễn Viết Xuân', companyName: 'Cty TNHH GD&ĐT Nguyễn Viết Xuân', representative: null, isDemo: false,
    ticker: 'Thông tin khu vực · Nội dung minh họa: chọn Thái Bình hoặc Hà Nội để xem ví dụ giới thiệu lớp học, chuyên đề Toán của đơn vị mẫu. Chưa kết nối quảng cáo thật; không tự định vị.' },
  { id: 'thai-binh', label: 'Thái Bình', centerName: 'Trung tâm mẫu A · Minh họa', companyName: null, representative: 'Admin trung tâm mẫu A · Minh họa', isDemo: true,
    ticker: 'Quảng cáo minh họa tại Thái Bình: Trung tâm mẫu A giới thiệu lớp Toán nhóm nhỏ, luyện kiến thức nền và cách trình bày lời giải. Đây là ví dụ giả định, không phải đơn vị hoặc lịch học thật.' },
  { id: 'hung-yen', label: 'Hưng Yên', centerName: null, companyName: null, representative: null, isDemo: true,
    ticker: 'Minh họa trạng thái tại Hưng Yên: chưa có thông tin đơn vị phù hợp. Chọn khu vực khác để xem ví dụ; không tự thay bằng quảng cáo của địa phương khác.' },
  { id: 'ha-noi', label: 'Hà Nội', centerName: 'Đơn vị mẫu B · Minh họa', companyName: null, representative: 'Admin đơn vị mẫu B · Minh họa', isDemo: true,
    ticker: 'Quảng cáo minh họa tại Hà Nội: Đơn vị mẫu B giới thiệu chuyên đề tư duy Toán, cùng học sinh khám phá nhiều cách giải. Đây là ví dụ giả định, chưa có thông tin liên hệ được xác minh.' },
];
export function parseRegion(value: string | null | undefined): RegionId {
  return regionalBrands.find(region => region.id === value)?.id ?? 'nationwide';
}
export function getRegionalBrand(value: string | null | undefined): RegionalBrand {
  return regionalBrands.find(region => region.id === parseRegion(value))!;
}
export function brandCaption(brand: RegionalBrand) {
  return brand.centerName ?? 'Chưa có trung tâm';
}
export function publicHomeHref(grade = 9) {
  return '/?lop=' + grade;
}


export function manualRegionHomeHref(region: RegionId, grade = 9) {
  const params = new URLSearchParams({lop: String(grade)});
  if(region !== 'nationwide') params.set('region', region);
  return '/?' + params.toString();
}
