'use client';
import type {DetailRoute} from '@/lib/details';
import {useEffect} from 'react';
import {seoFor} from '@/lib/seo';

export default function SeoHead({tab,grade,page,detail}:{tab:string;grade:number;page:number;detail?:DetailRoute}){
 useEffect(()=>{
  const seo=seoFor(tab,grade,page,detail);
  const set=(key:string,content:string,property=false)=>{
   const attr=property?'property':'name';let el=document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
   if(!el){el=document.createElement('meta');el.setAttribute(attr,key);document.head.appendChild(el)}
   if(el.content!==content)el.content=content;
  };
  const sync=()=>{
   if(document.title!==seo.title)document.title=seo.title;
   set('description',seo.description);set('robots','noindex, nofollow');
   set('og:title',seo.title,true);set('og:description',seo.description,true);
   set('twitter:title',seo.title);set('twitter:description',seo.description);
  };
  sync();
  // Native history keeps this single-page prototype on /. Next may restore the
  // previous server head after Back; keep its late update aligned with the view.
  const observer=new MutationObserver(sync);
  observer.observe(document.head,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['content']});
  return()=>observer.disconnect();
 },[tab,grade,page,detail]);
 return null;
}
