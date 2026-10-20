// Optional reward/navigation adapter. Standalone games keep their original behavior.
(()=>{
 'use strict';
 const session=new URL(location.href).searchParams.get('cottageSession');
 if(!session||parent===window)return;
 const targetOrigin=location.protocol==='file:'?'*':location.origin;
 let round=null,correct=0,sequence=0,authorizedExit=false,exitRequested=false,lastExitControl=null,completion=null,receiptNode=null,receiptTimer=null;
 const send=event=>parent.postMessage({type:'cottage-arcade',session,event,round,correct},targetOrigin);
 const cancelReceiptTimer=()=>{if(typeof clearTimeout==='function'&&receiptTimer!==null)clearTimeout(receiptTimer);receiptTimer=null;};
 const scheduleReceipt=(fn,delay)=>typeof setTimeout==='function'?setTimeout(fn,delay):null;
 function showReceipt(text){
  const result=byId('resultView')||document.querySelector('[data-game-view="result"]');if(!result)return;
  if(!receiptNode){receiptNode=document.createElement('p');receiptNode.className='cottage-reward-result';receiptNode.setAttribute('role','status');receiptNode.style.cssText='margin:16px auto;color:var(--matcha,#526849);font:600 16px/1.6 system-ui,sans-serif;text-align:center;';result.append(receiptNode);}
  receiptNode.textContent=text;receiptNode.hidden=false;
 }
 function resetReceipt(){cancelReceiptTimer();completion=null;if(receiptNode)receiptNode.hidden=true;}
 function sendCompletion(){
  receiptTimer=null;if(!completion||completion.status!=='pending')return;
  parent.postMessage({type:'cottage-arcade',session,event:'finish',round:completion.round,correct:completion.correct},targetOrigin);
  // A delayed/dropped receipt cannot silently lose a completed round. Keep
  // retries bounded; the parent's ledger makes repeated completion idempotent.
  if(++completion.attempts<5)receiptTimer=scheduleReceipt(sendCompletion,1500);
 }
 window.CottageArcade={
  start(){resetReceipt();round=session+'-'+(crypto.randomUUID?.()||Date.now().toString(36)+'-'+(++sequence));correct=0;send('start');},
  correct(){if(round){correct++;send('progress');}},
  finish(){if(round){completion={round,correct,status:'pending',attempts:0};round=null;showReceipt('爪印币正在结算…');sendCompletion();}},
  cancel(){if(round){send('cancel');round=null;}exitRequested=false;resetReceipt();}
 };
 const byId=id=>document.getElementById(id);
 function onHome(){
  const home=byId('homeView')||document.querySelector('[data-game-view="home"]');
  return document.body?.dataset.view?document.body.dataset.view==='home':!!home&&!home.hidden;
 }
 function nativeExit(){
  const result=byId('resultView')||document.querySelector('[data-game-view="result"]'),home=byId('homeButton')||byId('homeBtn');
  const resultVisible=result&&(document.body?.dataset.view?document.body.dataset.view==='result':!result.hidden);
  return resultVisible&&home?home:byId('exitButton')||byId('exitBtn');
 }
 function invokeExit(authorized=false){
  const control=nativeExit();if(!control)return;
  authorizedExit=authorized;
  try{control.click();}finally{authorizedExit=false;}
 }
 function requestExit(event,control){
  event.preventDefault();event.stopImmediatePropagation();
  if(exitRequested)return;exitRequested=true;lastExitControl=control;send('request-exit');
 }
 document.addEventListener('click',event=>{
  const control=event.target.closest?.('#exitButton,#exitBtn');
  if(control&&round&&!authorizedExit)requestExit(event,control);
 },true);
 // Escape follows the same visible navigation; Enter stays with the game.
 document.addEventListener('keydown',event=>{
  if(event.key!=='Escape'||event.defaultPrevented||event.isComposing)return;
  const modal=document.querySelectorAll('[role="dialog"],dialog,.modal');
  if([...modal].some(item=>!item.hidden&&item.getClientRects().length))return;
  event.preventDefault();event.stopImmediatePropagation();
  if(onHome())send('home-return');else invokeExit();
 },true);
 window.addEventListener('message',event=>{
  if(event.source!==parent||event.origin!==(location.protocol==='file:'?'null':location.origin)||event.data?.session!==session)return;
  if(event.data.type==='cottage:reward-result'){
   const d=event.data;if(!completion||d.round!==completion.round||completion.status==='saved')return;
   if(d.status==='saved'){
    if(d.correct!==completion.correct||!Number.isInteger(d.reward)||d.reward<0||d.reward>completion.correct)return;
    cancelReceiptTimer();completion.status='saved';
    // The cottage says whether the daily cap applied; older cottages only sent the round cap.
    const capped=typeof d.capped==='boolean'?d.capped:d.reward<Math.min(d.correct,d.roundCap);
    showReceipt(`答对 ${d.correct} 题 · +${d.reward} 爪印币 · 已存入小屋${capped?'（今日奖励已达上限）':''}`);
   }else if(d.status==='failed'){cancelReceiptTimer();completion.status='failed';showReceipt('爪印币尚未保存，请点击「重新保存奖励」');}
   return;
  }
  if(event.data.type==='cottage:request-exit'){if(onHome())send('home-return');else invokeExit();return;}
  if(event.data.type==='cottage:confirm-exit'){exitRequested=false;invokeExit(true);return;}
  if(event.data.type==='cottage:resume'){exitRequested=false;lastExitControl?.focus({preventScroll:true});lastExitControl=null;}
 });
 function mountCountdownReturn(){
  const view=byId('countdownView')||document.querySelector('[data-game-view="countdown"]');if(!view||view.querySelector('#countdownExitButton,.cottage-countdown-return'))return;
  const button=document.createElement('button');button.type='button';button.className='cottage-countdown-return';button.textContent='返回';button.setAttribute('aria-label','返回游戏封面');button.addEventListener('click',()=>invokeExit());view.append(button);
  const style=document.createElement('style');
  style.textContent='.cottage-countdown-return{position:absolute;z-index:2;top:max(16px,env(safe-area-inset-top));left:max(16px,env(safe-area-inset-left));min-width:44px;min-height:44px;padding:10px 14px;border:1px solid #ded9cd;border-radius:10px;background:#fcfaf5;color:#1c1d1a;font:500 14px/1.4 "Heiti SC",SimHei,"Hiragino Sans GB","Microsoft YaHei",sans-serif;cursor:pointer;touch-action:manipulation}.cottage-countdown-return:focus-visible{outline:2px solid #a34336;outline-offset:3px}@media(max-width:767px),(pointer:coarse){.cottage-countdown-return{min-width:48px;min-height:48px}}';
  document.head.append(style);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mountCountdownReturn,{once:true});else mountCountdownReturn();
 window.addEventListener('pagehide',cancelReceiptTimer);
 send('ready');
})();
