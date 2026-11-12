import type {Metadata} from 'next';
import Home from '@/components/Home';
import {seoFor} from '@/lib/seo';
import {parseRegion} from '@/lib/regional-branding';
type Props={searchParams:Promise<Record<string,string|string[]|undefined>>};
export async function generateMetadata({searchParams}:Props):Promise<Metadata>{const q=await searchParams;const tab=typeof q.muc==='string'?q.muc:'home';const grade=Math.min(12,Math.max(1,Number(q.lop)||9));const page=q.page==='2'?2:1;const seo=seoFor(tab,grade,page,{kind:typeof q.loai==='string'?q.loai:'',id:typeof q.id==='string'?q.id:''});return {...seo,robots:{index:false,follow:false},openGraph:{...seo,type:'website',locale:'vi_VN',siteName:'Toán Ôn Thi 360'},twitter:{card:'summary',...seo}}}
// Temporary manual preview: the query is a user's selection, not their detected location.
export default async function Page({searchParams}:Props){const q=await searchParams;return <Home initialRegion={parseRegion(typeof q.region==='string'?q.region:null)}/>}
