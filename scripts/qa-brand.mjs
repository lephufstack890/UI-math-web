import {chromium} from '@playwright/test';
const b=await chromium.launch({channel:'chrome',headless:true});const p=await b.newPage();
await p.goto('http://127.0.0.1:3100',{waitUntil:'networkidle'});
const icons=await p.locator('link[rel*="icon"]').evaluateAll(a=>a.map(x=>({rel:x.rel,url:x.href})));if(!icons.some(i=>i.url.endsWith('/favicon.svg')))throw Error('Missing favicon metadata');
for(const i of icons){const r=await p.request.get(i.url);if(!r.ok())throw Error('Icon failed '+i.url);console.log(r.status(),r.headers()['content-type'],i.url)}
for(const width of [320,390,768,1024,1440]){await p.setViewportSize({width,height:900});await p.waitForTimeout(150);const result=await p.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,height:document.querySelector('.site-header').getBoundingClientRect().height,wordmark:document.querySelector('.brand-wordmark')?.textContent}));if(result.overflow||!result.wordmark)throw Error(JSON.stringify({width,result}));await p.locator('.site-header').screenshot({path:`artifacts/header-${width}.png`});console.log(width,result)}
await b.close();
