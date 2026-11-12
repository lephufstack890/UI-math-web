import {chromium} from '@playwright/test';import fs from 'node:fs';
const browser=await chromium.launch({channel:'chrome',headless:true});const p=await browser.newPage();const results=[];const errors=[];p.on('pageerror',e=>errors.push(e.message));
for(const width of [390,768,1024,1440])for(const tab of ['classes','materials','practice']){
 await p.setViewportSize({width,height:1000});await p.goto(`http://127.0.0.1:3100/?muc=${tab}&lop=9`,{waitUntil:'networkidle'});await p.locator('.catalog-metadata').first().waitFor();
 if(await p.locator('.catalog-metadata').count()!==4)throw Error('Four cards');
 const rows=await p.locator('.catalog-metadata').first().locator('dt').allTextContents();if(rows.length!==(tab==='materials'?4:5))throw Error('Wrong metadata fields');
 if(await p.locator('.catalog-rating svg').count()!==20)throw Error('Five empty stars/card');
 if(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))throw Error('Overflow');
 const boxes=await p.locator('.section-card').evaluateAll(xs=>xs.map(x=>x.getBoundingClientRect().top));if(width>=1024&&!boxes.every(y=>Math.abs(y-boxes[0])<2))throw Error('Not one desktop row');
 if(width===390||width===1440)await p.screenshot({path:`artifacts/metadata-${tab}-${width}.png`,fullPage:true});
 await p.locator('.catalog-pagination button').filter({hasText:'2'}).click();await p.waitForTimeout(200);if(await p.locator('.catalog-metadata').count()!==2)throw Error('Page two');
 const text=await p.locator('.catalog-metadata').first().textContent();if(!text.includes('05'))throw Error('Metadata index continuity');await p.goBack();await p.waitForTimeout(200);if(await p.locator('.catalog-metadata').count()!==4)throw Error('History');results.push({tab,width,fields:rows,passed:true});
}
if(errors.length)throw Error(errors.join('\n'));fs.writeFileSync('artifacts/metadata-qa.json',JSON.stringify({passed:true,results,errors},null,2));await browser.close();console.log('Metadata: 12 route/viewport checks passed.');
