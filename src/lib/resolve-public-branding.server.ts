import 'server-only';
// Future design only. Not active: public currently uses an explicit manual demo selection.
import { fallbackPublicIdentity, type PublicBrandIdentity } from './public-branding';

type TrustedVisitorRegion = Readonly<{ regionCode: string; source: 'verified-location-adapter' }>;
type VerifiedCenter = Readonly<{ centerName: string; legalEntityName: string | null; verified: true }>;
// Only verified, approved records may be added. Admin preview fixtures are never imported here.
const verifiedCenters: ReadonlyMap<string, VerifiedCenter> = new Map();

async function readTrustedVisitorRegion(): Promise<TrustedVisitorRegion | null> {
  // No approved location provider is connected. Intentionally do not read URL parameters,
  // client cookies, browser geolocation, or arbitrary geo/IP headers. A future adapter must
  // authenticate its data source and strip/overwrite client-supplied headers at the edge.
  return null;
}

export async function resolvePublicBranding(): Promise<PublicBrandIdentity> {
  const region = await readTrustedVisitorRegion();
  if (!region || region.source !== 'verified-location-adapter') return fallbackPublicIdentity;
  const center = verifiedCenters.get(region.regionCode);
  if (!center || center.verified !== true || !center.centerName.trim()) return fallbackPublicIdentity;
  return {
    centerName: center.centerName,
    legalEntityName: center.legalEntityName,
    regionCode: region.regionCode,
    status: 'verified',
  };
}
