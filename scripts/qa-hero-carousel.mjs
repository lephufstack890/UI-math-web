import { chromium, expect } from '@playwright/test';
import fs from 'node:fs';
const base=process.env.QA_BASE_URL||'http://127.0.0.1:3102';
const browser=await chromium.launch({channel:'chrome',headless:true});
const context=await browser.newContext({viewport:{width:1440,height:1000}});
const page=await context.newPage(); const errors=[],passed=[],measurements=[];
page.on('pageerror',e=>errors.push(e.message));
const capture=async(hero,width,slide)=>{
  const geometry=await hero.evaluate(el=>{
    const visible=el.querySelector('[aria-roledescription="ảnh trình chiếu"][aria-hidden="false"]');
    const img=visible.querySelector('img'),frame=visible.parentElement;
    const rect=img.getBoundingClientRect(),box=frame.getBoundingClientRect(),sx=rect.width/img.naturalWidth,sy=rect.height/img.naturalHeight;
    const start=Number(img.dataset.cropStart||0),end=Number(img.dataset.cropEnd||img.naturalHeight);
    const reference=document.createElement('section');reference.className='hero';
    const original=el.querySelector('img').cloneNode();original.className='hero-art';original.removeAttribute('style');
    const copy=el.querySelector('.hero-copy').cloneNode(true);reference.append(original,copy);el.after(reference);
    const current=el.getBoundingClientRect(),baseline=reference.getBoundingClientRect(),a=el.querySelector('.hero-copy').getBoundingClientRect(),b=copy.getBoundingClientRect();
    const result={height:current.height,baselineHeight:baseline.height,copyX:a.x-current.x,baselineCopyX:b.x-baseline.x,copyY:a.y-current.y,baselineCopyY:b.y-baseline.y,fullWidth:rect.width>=box.width-0.2&&rect.left<=box.left+0.2&&rect.right>=box.right-0.2,uniform:Math.abs(sx/sy-1)<0.002,noWhite:rect.top+start*sy<=box.top+0.2&&rect.top+end*sy>=box.bottom-0.2,opacity:[...el.querySelectorAll('[aria-roledescription="ảnh trình chiếu"]')].map(n=>getComputedStyle(n).opacity),zIndex:getComputedStyle(img).zIndex,mask:getComputedStyle(img).maskImage};
    reference.remove();return result;
  });
  if(Math.abs(geometry.height-geometry.baselineHeight)>1||Math.abs(geometry.copyX-geometry.baselineCopyX)>1||Math.abs(geometry.copyY-geometry.baselineCopyY)>1||!geometry.fullWidth||!geometry.uniform||!geometry.noWhite||geometry.zIndex!=='0'||geometry.mask!=='none')throw Error(JSON.stringify({width,slide,geometry}));
  if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))throw Error('Overflow '+width);
  await hero.screenshot({path:`artifacts/hero-auto-${width}-slide-${slide}.png`,animations:'disabled'});
  measurements.push({width,slide,...geometry});
};
try{
  await page.clock.install();
  for(const width of [320,390,768,1024,1440]){
    await page.setViewportSize({width,height:1000});await page.goto(base,{waitUntil:'domcontentloaded'});
    const hero=page.getByRole('region',{name:'Hành trình học Toán'});await hero.waitFor();
    await expect(hero).toHaveAttribute('data-active-slide','1');
    await expect(hero.locator('[aria-roledescription="ảnh trình chiếu"]').first()).toHaveCSS('opacity','1');
    await expect(hero.locator('img')).toHaveCount(2);
    await expect.poll(()=>hero.locator('img').first().evaluate(img=>img.complete&&img.naturalWidth>0)).toBe(true);
    await expect(hero.getByRole('heading',{level:1})).toHaveText('Học Toán vững vàng,tự tin chinh phục.');
    await expect(hero.locator('a[href="#roadmaps"]')).toHaveText('Tìm lộ trình của em');
    if(await hero.getByRole('button').count()!==1||await hero.getByRole('button').evaluate(b=>getComputedStyle(b).clipPath)!=='inset(50%)')throw Error('Visible control panel remains');
    await hero.scrollIntoViewIfNeeded();await hero.hover();await expect(hero).toHaveAttribute('data-autoplay','playing');
    await capture(hero,width,1);await page.clock.fastForward(7100);await expect(hero).toHaveAttribute('data-active-slide','2');await capture(hero,width,2);
    await page.clock.fastForward(7100);await expect(hero).toHaveAttribute('data-active-slide','1');
    passed.push(`${width}px: original visible at load; hover does not stop 1→2→1; no visible controls; both images preserve baseline frame/copy without blank margins.`);
  }
  const hero=page.getByRole('region',{name:'Hành trình học Toán'});
  const pause=hero.getByRole('button');await pause.focus();await expect(pause).toHaveCSS('clip-path','none');await expect(hero).toHaveAttribute('data-autoplay','paused');
  await pause.press('Space');await page.locator('body').click({position:{x:1,y:1}});await page.mouse.move(0,0);await page.clock.fastForward(15000);await expect(hero).toHaveAttribute('data-active-slide','1');
  await pause.focus();await pause.press('Space');await page.locator('body').click({position:{x:1,y:1}});await page.mouse.move(0,0);await expect(hero).toHaveAttribute('data-autoplay','playing');
  passed.push('Keyboard focus reveals only the accessible pause button; explicit pause and resume work.');
  await page.evaluate(()=>{Object.defineProperty(document,'visibilityState',{configurable:true,value:'hidden'});document.dispatchEvent(new Event('visibilitychange'));});await expect(hero).toHaveAttribute('data-autoplay','paused');await page.clock.fastForward(15000);await expect(hero).toHaveAttribute('data-active-slide','1');
  await page.evaluate(()=>{delete document.visibilityState;document.dispatchEvent(new Event('visibilitychange'));});await expect(hero).toHaveAttribute('data-autoplay','playing');
  await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));await expect(hero).toHaveAttribute('data-autoplay','paused');await page.clock.fastForward(15000);await expect(hero).toHaveAttribute('data-active-slide','1');
  passed.push('Hidden-tab handler (simulated visibilitychange) and offscreen pause retain the current image.');
  await hero.scrollIntoViewIfNeeded();await hero.locator('a[href="#roadmaps"]').click();await expect.poll(()=>page.url()).toContain('#roadmaps');passed.push('Original roadmap CTA remains unchanged.');
  const reduced=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});const rp=await reduced.newPage();await rp.clock.install();await rp.goto(base,{waitUntil:'networkidle'});const rh=rp.getByRole('region',{name:'Hành trình học Toán'});await rh.scrollIntoViewIfNeeded();await rp.clock.fastForward(30000);await expect(rh).toHaveAttribute('data-active-slide','1');await expect(rh).toHaveAttribute('data-autoplay','paused');await expect(rh.getByRole('button')).toBeDisabled();if(!(await rh.locator('[aria-roledescription="ảnh trình chiếu"]').evaluateAll(nodes=>nodes.every(n=>getComputedStyle(n).transitionDuration==='0s'))))throw Error('Reduced motion transition');await reduced.close();passed.push('Reduced motion keeps the original image, with no autoplay or fade.');
  const slow=await browser.newContext({viewport:{width:1440,height:1000}});const sp=await slow.newPage();let release;const held=new Promise(resolve=>{release=resolve});await sp.route('**/hero-slide-2-v2.webp',async route=>{await held;await route.continue();});await sp.clock.install();await sp.goto(base,{waitUntil:'domcontentloaded'});const sh=sp.getByRole('region',{name:'Hành trình học Toán'});await sh.waitFor();await expect.poll(()=>sh.locator('img').first().evaluate(img=>img.complete&&img.naturalWidth>0)).toBe(true);await sh.scrollIntoViewIfNeeded();await sp.clock.fastForward(30000);await expect(sh).toHaveAttribute('data-active-slide','1');await expect(sh).toHaveAttribute('data-autoplay','paused');release();await expect(sh).toHaveAttribute('data-autoplay','playing');await sp.clock.fastForward(7100);await expect(sh).toHaveAttribute('data-active-slide','2');await slow.close();passed.push('Delayed second-image load never blanks the hero: original stays until the second image is ready.');
  const failed=await browser.newContext({viewport:{width:1440,height:1000}});const fp=await failed.newPage();await fp.route('**/hero-slide-2-v2.webp',route=>route.abort());await fp.clock.install();await fp.goto(base,{waitUntil:'networkidle'});const fh=fp.getByRole('region',{name:'Hành trình học Toán'});await fh.scrollIntoViewIfNeeded();await fp.clock.fastForward(30000);await expect(fh).toHaveAttribute('data-active-slide','1');await expect(fh.locator('[aria-roledescription="ảnh trình chiếu"]').first()).toHaveCSS('opacity','1');await failed.close();passed.push('Failed second-image load retains the original image instead of advancing to a blank slide.');
  if(errors.length)throw Error(errors.join('\n'));passed.push('No runtime JavaScript errors.');const report={base,passed,measurements,errors};fs.writeFileSync('artifacts/qa-hero-carousel.json',JSON.stringify(report,null,2));console.log(JSON.stringify({base,passed,errors},null,2));
}finally{await browser.close();}
