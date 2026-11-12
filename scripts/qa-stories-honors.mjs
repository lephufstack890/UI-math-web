import {chromium} from '@playwright/test';
import fs from 'node:fs';
const b=await chromium.launch({channel:'chrome',headless:true});const p=await b.newPage();const results=[];
for(const width of [320,390,768,1024,1280,1440]){
 await p.setViewportSize({width,height:1000});await p.goto('http://127.0.0.1:3100',{waitUntil:'networkidle'});
 const order=await p.locator('.main-content').evaluate(e=>[...e.children].map(c=>c.className));const c=order.indexOf('shortcut chocon'),s=order.indexOf('companion-stories'),t=order.indexOf('shortcut sat');if(!(s===c+1&&t===s+1))throw Error('Story order');
 if(await p.locator('.story-card').count()!==3)throw Error('Story count');if(!await p.locator('.stories-demo').isVisible())throw Error('Missing demo label');
 if(width===390||width===1440)await p.locator('.companion-stories').screenshot({path:`artifacts/stories-${width}.png`});
 const toggle=p.getByRole('button',{name:'Mở menu',exact:true});if(await toggle.isVisible())await toggle.click();
 await p.getByRole('button',{name:'Bảng vàng thành tích',exact:true}).click();await p.getByRole('heading',{name:'Bảng vàng lớp 9'}).waitFor();if(new URL(p.url()).searchParams.get('muc')!=='honors')throw Error('Honors URL');
 if(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))throw Error('Overflow '+width);
 await p.locator('.site-header').screenshot({path:`artifacts/header-honors-${width}.png`});results.push({width,storyOrder:true,storyCards:3,demoLabel:true,honorsNavigation:true,noOverflow:true});
}
fs.writeFileSync('artifacts/stories-honors-qa.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results));await b.close();
