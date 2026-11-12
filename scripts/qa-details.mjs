import {chromium} from '@playwright/test';
import fs from 'node:fs';
const base='http://127.0.0.1:3102';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];const results=[];
page.on('pageerror',e=>errors.push(e.message));
const assert=(ok,message)=>{if(!ok)throw Error(message)};
async function visit(query){await page.goto(base+query,{waitUntil:'networkidle'});}
async function detail(expected,kind){await page.locator('.detail-page h1').waitFor();assert(await page.locator('.detail-page h1').textContent()===expected,'Wrong title: '+expected);assert(await page.locator('dialog[open]').count()===0,'Modal still open');assert(new URL(page.url()).searchParams.get('loai')===kind,'Wrong kind');assert(await page.locator('.detail-hero img').evaluate(e=>e.complete&&e.naturalWidth>0),'Broken illustration');await page.waitForFunction(expected=>document.title.includes(expected),expected);await page.waitForTimeout(120);assert((await page.title()).includes(expected),'Wrong SEO after history update');assert(!new URL(page.url()).searchParams.has('body'),'Prose URL');}
for(let grade=1;grade<=12;grade++){
 await visit('/?lop='+grade);
 for(let i=0;i<3;i++){
  const card=page.locator('[data-testid="roadmap-card"]').nth(i);const title=await card.locator('h3').textContent();await card.getByRole('button',{name:'Xem lộ trình',exact:true}).click();await detail(title,'roadmap');assert(new URL(page.url()).searchParams.get('id')===`lop-${grade}-${i+1}`,'Wrong roadmap id');await page.locator('.detail-toolbar button').click();await page.locator('[data-testid="roadmap-card"]').first().waitFor();assert(new URL(page.url()).searchParams.get('lop')===String(grade),'Back lost grade');
 }
 for(let n=1;n<=2;n++){
  await visit(`/?muc=roadmaps&lop=${grade}${n===2?'&page=2':''}`);
  const count=await page.locator('.section-card').count();
  for(let i=0;i<count;i++){
   const card=page.locator('.section-card').nth(i);const title=await card.locator('h3').textContent();await card.getByRole('button').click();await detail(title,'roadmap');assert(new URL(page.url()).searchParams.get('tu')==='roadmaps','Source lost');assert(new URL(page.url()).searchParams.get('trang')===(n===2?'2':null),'Source page lost');await page.reload({waitUntil:'networkidle'});await detail(title,'roadmap');await page.locator('.detail-toolbar button').click();await page.locator('.discovery-page').waitFor();assert(await page.locator('.section-card').count()===count,'Back lost list page');
  }
 }
 results.push(`Grade ${grade}: 3 home and 6 discovery detail flows, source, Back and reload passed`);
}
for(const kind of ['classes','materials','practice','teachers'])for(const n of [1,2]){
 await visit(`/?muc=${kind}&lop=5${n===2?'&page=2':''}`);const count=await page.locator('.section-card').count();
 for(let i=0;i<count;i++){
  const card=page.locator('.section-card').nth(i);const title=await card.locator('h3').textContent();await card.getByRole('button').click();await detail(title,kind);await page.reload({waitUntil:'networkidle'});await detail(title,kind);await page.locator('.detail-toolbar button').click();await page.locator('.section-card').first().waitFor();assert(await page.locator('.section-card').count()===count,'Catalog source page lost');await page.goForward();await detail(title,kind);await page.goBack();await page.locator('.section-card').first().waitFor();
 }
 results.push(`${kind} page ${n}: ${count} detail flows, reload, Back, Forward passed`);
}
const guideSelectors=[['.parent-banner button','companion'],['.chocon button','chocon'],['.support button','consultation']];
for(const [selector,id] of guideSelectors){await visit('/?lop=9');await page.locator(selector).click();await page.locator('.detail-page h1').waitFor();assert(new URL(page.url()).searchParams.get('id')===id,'Guide wrong id');assert(new URL(page.url()).origin===base,'Unexpected external navigation');await page.reload({waitUntil:'networkidle'});assert(await page.locator('.detail-hero').count()===1,'Guide reload');}
for(let i=0;i<4;i++){await visit('/?lop=9');const button=page.locator('.topic-panel button').nth(i);const title=(await button.textContent()).slice(1);await button.click();await page.locator('.detail-page h1').waitFor();assert(new URL(page.url()).searchParams.get('loai')==='topic','Topic not detail');}
await visit('/?lop=9');const english=page.locator('.sat a');assert(await english.getAttribute('href')==='https://tienganh.onthi360.vn','English destination');assert(await english.getAttribute('target')==='_blank','English new tab');assert((await page.locator('.sat').textContent()).includes('Ôn luyện Tiếng Anh'),'English label');assert((await page.locator('.chocon').textContent()).includes('bảo vệ con trên môi trường mạng'),'chocon description');results.push('3 guide CTAs, 4 topic CTAs and official English external link passed');
const routes=['?muc=detail&loai=roadmap&id=lop-9-1&lop=9&tu=home','?muc=detail&loai=classes&id=nen-tang&lop=9&tu=classes','?muc=detail&loai=materials&id=so-tay&lop=9&tu=materials','?muc=detail&loai=practice&id=tong-hop&lop=9&tu=practice','?muc=detail&loai=teachers&id=nguyen-thi-dien&lop=9&tu=teachers','?muc=detail&loai=guide&id=chocon&lop=9&tu=home','?muc=detail&loai=guide&id=sat&lop=9&tu=home','?muc=detail&loai=guide&id=companion&lop=9&tu=home','?muc=detail&loai=guide&id=consultation&lop=9&tu=home'];
for(const width of [320,390,768,1440])for(const [i,route] of routes.entries()){
 await page.setViewportSize({width,height:900});await visit('/'+route);await page.locator('.detail-page h1').waitFor();assert(!await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),'Overflow '+width+' '+route);assert(await page.locator('.detail-page h1').count()===1,'H1 count');assert(await page.locator('.detail-page img').evaluateAll(els=>els.every(e=>e.complete&&e.naturalWidth>0)),'Broken images');if((width===390||width===1440)&&[0,1,4,5].includes(i))await page.screenshot({path:`artifacts/detail-${i}-${width}.png`,fullPage:true});
}
results.push('36 route/viewport combinations: images, H1, no horizontal overflow');
for(const query of ['?muc=detail&loai=roadmap&id=lop-5-1&lop=9','?muc=detail&loai=guide&id=nope','?muc=detail','?muc=does-not-exist','?muc=detail&loai=teachers&id=constructor','?muc=detail&loai=guide&id=__proto__']){await visit('/'+query);await page.getByRole('heading',{name:'Không tìm thấy nội dung',exact:true}).waitFor();assert((await page.title()).includes('Không tìm thấy'),'Not-found metadata');}
await visit('/?muc=detail&loai=classes&id=thuc-te&lop=5&tu=classes&trang=2');await page.locator('.detail-toolbar button').click();await page.locator('.section-card').first().waitFor();assert(new URL(page.url()).searchParams.get('page')==='2','Direct link fallback');assert(new URL(page.url()).searchParams.get('muc')==='classes','Direct link source');
results.push('6 invalid detail paths and direct-link source/page fallback passed');
await page.setViewportSize({width:390,height:844});await visit('/?muc=detail&loai=roadmap&id=lop-9-1&lop=9&tu=home');await page.locator('.mobile-toggle').click();await page.locator('.main-nav').getByRole('button',{name:'Tài liệu',exact:true}).click();await page.locator('.section-card').first().waitFor();assert(!new URL(page.url()).searchParams.has('id'),'Stale detail query');
assert(errors.length===0,errors.join('\n'));results.push('Mobile menu clears detail route; no runtime errors');
fs.writeFileSync('artifacts/detail-pages-qa.json',JSON.stringify({passed:true,results,errors},null,2));console.log(results);await browser.close();
