// Small optional adapter for existing games. Standalone games keep their original behavior.
(()=>{
 'use strict';
 const session=new URL(location.href).searchParams.get('cottageSession');
 if(!session||parent===window)return;
 // Embedded mobile games share the host's return control instead of a second header.
 const style=document.createElement('style');
 style.textContent=`
 @media(max-width:820px){
  #exitButton,#exitBtn{visibility:hidden!important}
  .practice-view .hud{position:fixed;top:max(13px,env(safe-area-inset-top));left:calc(max(20px,env(safe-area-inset-left)) + 56px);right:8px;width:calc(100vw - max(20px,env(safe-area-inset-left)) - 64px);max-width:none;height:48px;margin:0;justify-self:stretch}
  .result-view{min-height:100dvh;max-height:100dvh;overflow-y:auto;justify-content:safe center}.result-scroll{flex-shrink:0}
 }
 @media(max-width:390px),(max-width:820px) and (max-height:700px){
  .practice-view .hud{top:max(8px,env(safe-area-inset-top));left:calc(max(20px,env(safe-area-inset-left)) + 52px);width:calc(100vw - max(20px,env(safe-area-inset-left)) - 60px);height:44px}
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
 send('ready');
})();
