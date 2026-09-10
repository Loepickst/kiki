// Small optional adapter for existing games. Standalone games keep their original behavior.
(()=>{
 'use strict';
 const session=new URL(location.href).searchParams.get('cottageSession');
 if(!session||parent===window)return;
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
