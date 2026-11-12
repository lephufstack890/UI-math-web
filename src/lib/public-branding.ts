export type PublicBrandIdentity = Readonly<{
  centerName: string | null;
  legalEntityName: string | null;
  regionCode: string | null;
  status: 'fallback' | 'verified';
}>;
// Neutral brand, not a claim that a visitor's location or local center is known.
export const fallbackPublicIdentity: PublicBrandIdentity = {
  centerName: null, legalEntityName: null, regionCode: null, status: 'fallback',
};
export const publicPlatformName = 'Toán Ôn Thi 360';
// This is independent of every local center and must be verified separately.
export const platformOperator = { name: null as string | null, status: 'Chưa xác minh' };
