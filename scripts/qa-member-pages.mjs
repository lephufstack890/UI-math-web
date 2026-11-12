import {chromium} from '@playwright/test';
import fs from 'node:fs';
const b=await chromium.launch({channel:'chrome',headless:true});const p=await b.newPage();const results=[];const errors=[];p.on('pageerror',e=>errors.push(e.message));
for(const width of [320,390,768,1024,1280,1440]){
 await p.setViewportSize({width,height:950});
 for(const tab of ['classes','materials','practice','teachers','honors']){
  await p.goto(`http://127.0.0.1:3100/?muc=${tab}&lop=9`,{waitUntil:'networkidle'});await p.locator('.member-heading').waitFor();
  if(await p.locator('.hero,.left-sidebar,.right-sidebar,.help-grid,.shortcut,.companion-stories,.region-bar,.notice,.system-stats').count())throw Error(`Home content leaked: ${width}/${tab}`);
  if(!await p.locator('.site-header').isVisible()||!await p.locator('.site-footer').isVisible())throw Error('Missing shell');
  await p.getByLabel(tab==='honors'?'Xem bảng mẫu cho':'Lớp đang chọn',{exact:true}).selectOption('5');if(new URL(p.url()).searchParams.get('lop')!=='5')throw Error('Grade URL');
  if(tab==='honors'){if(await p.locator('.honors-table tbody tr').count()!==5)throw Error('Rows');await p.getByRole('heading',{name:'Bảng vàng lớp 5'}).waitFor();if(!await p.getByText('Dữ liệu minh họa hoàn toàn',{exact:true}).isVisible())throw Error('Missing sample warning');if(width===390||width===1440)await p.screenshot({path:`artifacts/honors-${width}.png`,fullPage:true});}
  if(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))throw Error(`Page overflow ${width}/${tab}`);
  results.push({width,tab,noHomeContent:true,headerFooter:true,gradeFilter:true,noPageOverflow:true});
 }
 await p.goto('http://127.0.0.1:3100',{waitUntil:'networkidle'});if(await p.locator('.stats-total strong,.stats-role-list b,.stats-resource-grid strong,.stats-today strong').count()!==7)throw Error('Stats count');if(!(await p.locator('.stats-total strong,.stats-role-list b,.stats-resource-grid strong,.stats-today strong').allTextContents()).every(x=>x==='—'))throw Error('Invented live stats');if(await p.locator('.sat h3').evaluate(e=>getComputedStyle(e).fontSize)!=='17px')throw Error('SAT type size');
}
if(errors.length)throw Error(errors.join('\n'));fs.writeFileSync('artifacts/member-pages-qa.json',JSON.stringify({passed:true,checks:results,statsPlaceholder:true,satFont:'17px',runtimeErrors:errors},null,2));console.log('30 member-page/viewport combinations passed; stats placeholders and SAT typography passed.');await b.close();
