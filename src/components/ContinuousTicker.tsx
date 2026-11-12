'use client';
import {useEffect,useRef,useState,type CSSProperties} from 'react';
export default function ContinuousTicker({children,paused}:{children:string;paused:boolean}){
 const first=useRef<HTMLSpanElement>(null);const [seconds,setSeconds]=useState(60);
 useEffect(()=>{const el=first.current;if(!el)return;const measure=()=>setSeconds(el.getBoundingClientRect().width/20);const observer=new ResizeObserver(measure);observer.observe(el);measure();return()=>observer.disconnect()},[children]);
 return <p className={`ticker continuous-ticker${paused?' paused':''}`} style={{'--ticker-duration':`${seconds}s`} as CSSProperties}><span ref={first} className="ticker-copy">{children}</span><span className="ticker-copy ticker-duplicate" aria-hidden="true">{children}</span></p>
}
