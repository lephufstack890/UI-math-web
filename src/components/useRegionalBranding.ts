'use client';
// Temporary manual demo selection. This is not geolocation, authentication or a tenant grant.
import { useEffect, useState } from 'react';
import { getRegionalBrand, parseRegion, type RegionId } from '@/lib/regional-branding';
export default function useRegionalBranding(initialRegion: RegionId = 'nationwide', queryKey: 'region' | 'previewRegion' = 'previewRegion') {
  const [region, updateRegion] = useState<RegionId>(initialRegion);
  useEffect(() => {
    const sync = () => updateRegion(parseRegion(new URLSearchParams(window.location.search).get(queryKey)));
    sync(); window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, [queryKey]);
  function setRegion(value: string) {
    const next = parseRegion(value);
    if (next === region) return;
    const url = new URL(window.location.href);
    if (next === 'nationwide') url.searchParams.delete(queryKey);
    else url.searchParams.set(queryKey, next);
    window.history.pushState({ ...window.history.state }, '', url);
    updateRegion(next);
  }
  return { region, brand: getRegionalBrand(region), setRegion };
}
