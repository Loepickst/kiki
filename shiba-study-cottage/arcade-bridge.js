// Small optional adapter for existing games. Standalone games keep their original behavior.
(()=>{
 'use strict';
 const session=new URL(location.href).searchParams.get('cottageSession');
 if(!session||parent===window)return;
 // Embedded mobile games share the host's return control instead of a second header.
 const style=document.createElement('style');
 style.textContent=`@media(max-width:820px){
  #exitButton,#exitBtn{visibility:hidden!important}
  .result-view{min-height:100dvh;max-height:100dvh;overflow-y:auto;justify-content:safe center}.result-scroll{flex-shrink:0}
 }`;
 document.head.append(style);
 let round=null,correct=0,sequence=0;
 const send=type=>parent.postMessage({type:'cottage-arcade',session,event:type,round,correct},'*');
 window.CottageArcade={
  start(){round=session+'-'+(crypto.randomUUID?.()||Date.now().toString(36)+'-'+(++sequence));correct=0;send('start');},
  correct(){if(round){correct++;send('progress');}},
  finish(){if(round){send('finish');round=null;}},
  cancel(){if(round){send('cancel');round=null;}}
 };
 // Measure the original HUD; never take it out of the game's grid flow.
 let layoutFrame=0,lastLayout='',resizeObserver,mutationObserver;
 function reportLayout(){
  layoutFrame=0;const hud=document.querySelector('.practice-view .hud'),r=hud?.getBoundingClientRect();
  const layout=innerWidth<=820&&r?.width>0&&r.height>0?{x:r.left-r.height-8,y:r.top,size:r.height}:null;
  const key=JSON.stringify(layout);if(key===lastLayout)return;lastLayout=key;
  parent.postMessage({type:'cottage-arcade',session,event:'layout',layout},'*');
 }
 function queueLayout(){if(!layoutFrame)layoutFrame=requestAnimationFrame(reportLayout);}
 function observeLayout(){
  const hud=document.querySelector('.practice-view .hud');
  resizeObserver=new ResizeObserver(queueLayout);if(hud)resizeObserver.observe(hud);
  mutationObserver=new MutationObserver(queueLayout);mutationObserver.observe(document.body,{subtree:true,attributes:true,attributeFilter:['hidden','class','data-view']});
  queueLayout();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',observeLayout,{once:true});else observeLayout();
 window.addEventListener('resize',queueLayout);
 window.addEventListener('pagehide',()=>{cancelAnimationFrame(layoutFrame);resizeObserver?.disconnect();mutationObserver?.disconnect();window.removeEventListener('resize',queueLayout);});
 send('ready');
})();
