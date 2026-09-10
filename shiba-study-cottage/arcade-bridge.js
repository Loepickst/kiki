// Small optional adapter for existing games. Standalone games keep their original behavior.
(()=>{
 'use strict';
 const session=new URL(location.href).searchParams.get('cottageSession');
 if(!session||parent===window)return;
 // Embedded mobile games share the host's return control instead of a second header.
 const style=document.createElement('style');
 style.textContent=`@media(max-width:820px){
  #exitButton,#exitBtn{visibility:hidden!important}
  /* One bounded play surface. Keep the HUD in its original layout flow. */
  html.cottage-practicing,html.cottage-practicing body{height:100%;min-height:0;overflow:clip;overscroll-behavior:none}
  .practice-view{position:fixed!important;inset:0 0 auto!important;width:100%!important;height:calc(100% - clamp(20px,6vh,56px) - env(safe-area-inset-bottom))!important;min-height:0!important;max-height:none;overflow:clip!important;touch-action:none;overscroll-behavior:none}
  .practice-view .practice-shell{height:100%!important;min-height:0;overflow:clip}
  .practice-view .romaji-keyboard,.practice-view .particle-keyboard{border-radius:16px;margin-left:0;margin-right:0}
  @media(max-height:600px){.practice-view{--mobile-key-height:44px!important}.practice-view .particle-key{min-height:44px}}

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
 let layoutFrame=0,lastLayout='',resizeObserver,mutationObserver,practicing=false;
 function reportLayout(){
  layoutFrame=0;
  const practice=document.querySelector('.practice-view');
  const active=innerWidth<=820&&!!practice?.getClientRects().length;
  if(active!==practicing){practicing=active;document.documentElement.classList.toggle('cottage-practicing',active);if(active)window.scrollTo(0,0);}
  const hud=document.querySelector('.practice-view .hud'),r=hud?.getBoundingClientRect();
  const layout=innerWidth<=820&&r?.width>0&&r.height>0?{x:r.left-r.height-8,y:r.top,size:r.height}:null;
  const key=JSON.stringify(layout);if(key===lastLayout)return;lastLayout=key;
  parent.postMessage({type:'cottage-arcade',session,event:'layout',layout},'*');
 }
 function queueLayout(){if(!layoutFrame)layoutFrame=requestAnimationFrame(reportLayout);}
 function observeLayout(){
  const hud=document.querySelector('.practice-view .hud');
  resizeObserver=new ResizeObserver(queueLayout);if(hud)resizeObserver.observe(hud);const practice=document.querySelector('.practice-view');if(practice)resizeObserver.observe(practice);
  mutationObserver=new MutationObserver(queueLayout);mutationObserver.observe(document.body,{subtree:true,attributes:true,attributeFilter:['hidden','class','data-view']});
  queueLayout();
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',observeLayout,{once:true});else observeLayout();
 window.addEventListener('resize',queueLayout);
 window.addEventListener('pagehide',()=>{cancelAnimationFrame(layoutFrame);resizeObserver?.disconnect();mutationObserver?.disconnect();window.removeEventListener('resize',queueLayout);});
 send('ready');
})();
