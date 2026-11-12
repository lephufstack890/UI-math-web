import {chromium} from '@playwright/test';
import fs from 'node:fs';
const b=await chromium.launch({channel:'chrome',headless:true});const p=await b.newPage();const report=[];
for(const width of [390,768,1024,1280,1440,1920]){
await p.setViewportSize({width,height:1000});await p.goto('http://127.0.0.1:3100',{waitUntil:'networkidle'});
const data=await p.evaluate(()=>{const sels=['.hero-art','.workspace-illustration','.roadmap-picture img','.audience-grid img','.footer-scene'];return {overflow:document.documentElement.scrollWidth>innerWidth+1,images:sels.flatMap(s=>[...document.querySelectorAll(s)].map(i=>{const r=i.getBoundingClientRect();return {selector:s,width:r.width,height:r.height,naturalRatio:i.naturalWidth/i.naturalHeight,renderedRatio:r.width/r.height,fit:getComputedStyle(i).objectFit}}))}});
if(data.overflow||data.images.some(i=>i.fit!=='cover'&&Math.abs(i.naturalRatio-i.renderedRatio)>.04))throw Error(JSON.stringify({width,data}));
report.push({width,passed:true,...data});
if(width===1024||width===1920)await p.screenshot({path:`artifacts/layout-${width}.png`,fullPage:true});
}
fs.writeFileSync('artifacts/image-fit-audit.json',JSON.stringify(report,null,2));console.log('Image sizing (natural ratios or intentional cover) and overflow passed at 390, 768, 1024, 1280, 1440, 1920');await b.close();
