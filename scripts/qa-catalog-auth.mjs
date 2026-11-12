const qaBase=process.env.QA_BASE_URL||'http://127.0.0.1:3100';
import {chromium} from '@playwright/test';import fs from 'node:fs';
const b=await chromium.launch({channel:'chrome',headless:true});const p=await b.newPage();const results=[];const errors=[];p.on('pageerror',e=>errors.push(e.message));
for(const width of [320,390,768,1024,1440]){
 await p.setViewportSize({width,height:1000});
 for(const tab of ['classes','materials','practice','teachers']){
  await p.goto(`${qaBase}/?muc=${tab}&lop=9`,{waitUntil:'networkidle'});await p.locator('.section-card-grid').waitFor();if(await p.locator('.section-card').count()!==4)throw Error('Card count');if(tab!=='teachers'&&await p.locator('.section-card-body > ul > li').count()!==12)throw Error('Three points');
  const cards=await p.locator('.section-card').evaluateAll(xs=>xs.every(x=>x.querySelector('img')?.complete&&x.querySelector('img')?.naturalWidth>0));if(!cards)throw Error('Image load');
  await p.locator('.section-card .button').first().click();await p.locator('.detail-page h1').waitFor();await p.locator('.detail-toolbar button').click();await p.locator('.section-card-grid').waitFor();
  if(await p.locator('.hero,.right-sidebar,.companion-stories').count())throw Error('Home extras');if(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))throw Error(`Overflow ${tab}/${width}`);
  if(tab==='materials'&&(width===390||width===1440))await p.screenshot({path:`artifacts/catalog-${width}.png`,fullPage:true});results.push({width,tab,cards:4,pointsPerCard:tab==='teachers'?null:3,detailPage:true,noOverflow:true});
 }
 for(const mode of ['login','register']){
  await p.goto(`${qaBase}/?muc=${mode}`,{waitUntil:'networkidle'});await p.locator('.auth-shell').waitFor();
  if(!await p.locator('#auth-password').isDisabled()||!await p.locator('#auth-email').isDisabled())throw Error('Credential entry enabled');if(mode==='register'&&(!await p.locator('#auth-name').isDisabled()||!await p.locator('#auth-confirm').isDisabled()))throw Error('Registration fields enabled');
  const sent=[];const handler=r=>sent.push(r.url());p.on('request',handler);await p.locator('.auth-submit').click();await p.getByRole('status').waitFor();await p.waitForTimeout(200);p.off('request',handler);if(sent.length)throw Error('Submit sent request '+sent.join(','));
  const storage=await p.evaluate(()=>({local:localStorage.length,session:sessionStorage.length}));if(storage.local||storage.session)throw Error('Prototype wrote storage');
  if(await p.locator('.hero,.right-sidebar,.member-toolbar,.companion-stories').count())throw Error('Auth extras');if(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))throw Error(`Auth overflow ${mode}/${width}`);
  if(width===390||width===1440)await p.screenshot({path:`artifacts/auth-${mode}-${width}.png`,fullPage:true});
  await p.locator('.auth-switch button').click();await p.waitForURL(url=>url.searchParams.get('muc')===(mode==='login'?'register':'login'));await p.locator('.auth-shell').waitFor();results.push({width,mode,credentialsDisabled:true,noSubmitNetwork:true,noStorage:true,switchWorks:true,noOverflow:true});
 }
}
await p.goto(qaBase,{waitUntil:'networkidle'});await p.locator('.site-header .login').click();await p.locator('.auth-shell').waitFor();if(new URL(p.url()).searchParams.get('muc')!=='login')throw Error('Header login');if(errors.length)throw Error(errors.join('\n'));fs.writeFileSync('artifacts/catalog-auth-qa.json',JSON.stringify({passed:true,checks:results,headerLogin:true,runtimeErrors:errors},null,2));console.log('20 catalog + 10 auth viewport checks passed, disabled credentials, no submit requests/storage, header login works.');await b.close();
