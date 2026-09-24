(function(C){
 'use strict';
 const {store,game}=C.App,M=C.Model,D=C.Data.arcade,$=id=>document.getElementById(id),dialog=$('arcade-dialog'),frame=$('arcade-frame');
 let selected=null,session=null,round=null,pending=null,loadingTimer=null,lastFocus=null,scrollPosition=null,viewportFrame=0;
 const uid=()=>globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;
 // The cabinet menu is presentation only. Keep the play surface, bridge and
 // reward transaction unchanged; every game still launches the original page.
 dialog.classList.add('arcade-cabinet');
 $('arcade-picker').querySelectorAll(':scope > .arcade-rules, :scope > .form-note').forEach(el=>el.remove());
 $('arcade-recent').hidden=true;
 if(!$('arcade-picker').querySelector('#arcade-today')){
  const meter=document.createElement('div');meter.className='arcade-meter';
  const label=document.createElement('span');label.append('今日 ');
  let today=$('arcade-today');if(!today){today=document.createElement('strong');today.id='arcade-today';}label.append(today,` / ${D.dailyCap} 币`);meter.append(label);$('arcade-picker').append(meter);
 }
 const meter=$('arcade-picker').querySelector('.arcade-meter')||$('arcade-today').parentElement;
 const wallet=document.createElement('span');wallet.className='arcade-wallet';meter.append(wallet);
 $('arcade-picker').append(meter);
 function setStatus(text){$('arcade-status').textContent=text;$('arcade-result-summary').textContent=text;}
 function refresh(){
  const stats=M.arcadeStats(store.state);$('arcade-today').textContent=stats.todayCoins;wallet.textContent=`余额 ${store.state.coins} 币`;
  if(!dialog.open||!$('arcade-play').hidden)return;
  setStatus('SELECT GAME');
  const rows=(store.state.gameRuns||[]).slice(-3).reverse();$('arcade-recent').replaceChildren();
  if(rows.length){const title=document.createElement('h3');title.textContent='最近游玩';$('arcade-recent').append(title);}
  for(const row of rows){const p=document.createElement('p'),name=document.createElement('span'),reward=document.createElement('strong');name.textContent=`${D.games.find(g=>g.id===row.game).name} · 答对 ${row.correct} 题`;reward.textContent=`+${row.reward} 币`;p.append(name,reward);$('arcade-recent').append(p);}
 }
 function resetReturnLayout(){for(const key of ['x','y','size'])dialog.style.removeProperty('--arcade-return-'+key);}
 function unload(){resetReturnLayout();clearTimeout(loadingTimer);session=null;selected=null;round=null;pending=null;frame.inert=false;frame.src='about:blank';$('arcade-save-error').hidden=true;$('arcade-exit-confirm').hidden=true;}
 function picker(){unload();$('arcade-title').textContent='小屋街机';dialog.classList.remove('is-playing');$('arcade-play').hidden=true;$('arcade-picker').hidden=false;$('arcade-result-tools').hidden=true;refresh();$('arcade-games').querySelector('button')?.focus();}
 // The visible viewport can change independently of layout height in mobile Safari.
 function syncViewport(){
  viewportFrame=0;if(!scrollPosition)return;
  const v=window.visualViewport;
  if(v&&Math.abs(v.scale-1)>.01)return;
  const values={height:v?.height||innerHeight,width:v?.width||innerWidth,top:v?.offsetTop||0,left:v?.offsetLeft||0};
  for(const [key,value] of Object.entries(values))dialog.style.setProperty('--arcade-viewport-'+key,value+'px');
  if(dialog.classList.contains('is-playing')){dialog.scrollTop=0;dialog.scrollLeft=0;}
 }
 function queueViewport(){if(!viewportFrame)viewportFrame=requestAnimationFrame(syncViewport);}
 function lockPage(){
  scrollPosition={x:scrollX,y:scrollY};document.documentElement.style.setProperty('--arcade-page-top',`${-scrollY}px`);document.documentElement.classList.add('arcade-open');
  window.addEventListener('resize',queueViewport);window.visualViewport?.addEventListener('resize',queueViewport);window.visualViewport?.addEventListener('scroll',queueViewport);syncViewport();
 }
 function unlockPage(){
  if(!scrollPosition)return;cancelAnimationFrame(viewportFrame);viewportFrame=0;window.removeEventListener('resize',queueViewport);window.visualViewport?.removeEventListener('resize',queueViewport);window.visualViewport?.removeEventListener('scroll',queueViewport);for(const key of ['height','width','top','left'])dialog.style.removeProperty('--arcade-viewport-'+key);const position=scrollPosition;scrollPosition=null;document.documentElement.classList.remove('arcade-open');document.documentElement.style.removeProperty('--arcade-page-top');window.scrollTo(position.x,position.y);
 }
 function close(){
  unload();dialog.close();unlockPage();game.pause(false);C.ImmersiveUI?.sync?.();
  // The room hotspot is hidden while a modal is open. Restore its visibility
  // before returning focus; a removed/occluded trigger falls back to the canvas.
  const target=lastFocus?.isConnected&&!lastFocus.disabled&&lastFocus.getClientRects().length?lastFocus:game.canvas;
  target?.focus({preventScroll:true});
 }
 function requestClose(){if(round||pending){$('arcade-exit-confirm').hidden=false;$('arcade-stay').focus();}else close();}
 function open(){if(game.build||game.blocked||dialog.open)return;lastFocus=document.activeElement;C.ImmersiveUI?.closePanels();lockPage();game.needs.flush();game.relationship.flush();game.pause(true);picker();dialog.showModal();refresh();$('arcade-games').querySelector('button')?.focus({preventScroll:true});}
 function launch(id){
  const item=D.games.find(g=>g.id===id);if(!item||pending)return;
  unload();selected=item;session=uid();dialog.classList.add('is-playing');$('arcade-title').textContent=item.name;
  $('arcade-picker').hidden=true;$('arcade-play').hidden=false;$('arcade-result-tools').hidden=true;$('arcade-loading').hidden=false;$('arcade-loading').textContent='正在打开游戏…';
  setStatus('答对 1 题得 1 币 · 完成整局后结算');
  const url=new URL('../'+item.file,location.href);url.searchParams.set('cottageSession',session);frame.title=item.name;frame.src=url.href;dialog.scrollTop=0;dialog.scrollLeft=0;
  loadingTimer=setTimeout(()=>{if(!$('arcade-loading').hidden)$('arcade-loading').textContent='游戏加载较慢，可以回小屋后重试。';},15000);
 }
 function settle(){
  if(!pending)return;
  try{
   store.synchronize();const existing=(store.state.gameRuns||[]).find(r=>r.id===pending.id);
   const result=existing?{reward:existing.reward}:M.rewardGame(store.state,pending);
   if(!existing)store.commit(result.state);
   const correct=pending.correct;pending=null;frame.inert=false;$('arcade-save-error').hidden=true;
   setStatus(`答对 ${correct} 题 · 已存入 ${result.reward} 爪印币${result.reward<Math.min(correct,D.roundCap)?' · 今日游戏奖励已达上限':''}`);
   $('arcade-result-tools').hidden=false;game.onSave(true);refresh();
  }catch(error){frame.inert=true;$('arcade-save-error').hidden=false;$('arcade-save-error').querySelector('span').textContent='奖励还没存入，请重试。'+error.message;setStatus('本局已结束 · 奖励待保存');}
 }
 function message(e){
  const d=e.data;if(e.source!==frame.contentWindow||!d||d.type!=='cottage-arcade'||d.session!==session||!session||!selected||!dialog.open)return;
  if(e.origin!==(location.protocol==='file:'?'null':location.origin))return;
  if(d.event==='layout'){
   const l=d.layout;if(l===null){resetReturnLayout();return;}
   if(!l||![l.x,l.y,l.size].every(Number.isFinite)||l.size<32||l.size>80||l.x<0||l.x+l.size>frame.clientWidth||l.y<0||l.y+l.size>frame.clientHeight)return;
   dialog.style.setProperty('--arcade-return-x',l.x+'px');dialog.style.setProperty('--arcade-return-y',l.y+'px');dialog.style.setProperty('--arcade-return-size',l.size+'px');return;
  }
  if(d.event==='ready'){clearTimeout(loadingTimer);$('arcade-loading').hidden=true;return;}
  if(typeof d.round!=='string'||!d.round.startsWith(session+'-')||d.round.length>120)return;
  if(d.event==='start'){
   if(pending||round?.id===d.round||(store.state.gameRuns||[]).some(r=>r.id===d.round))return;
   round={id:d.round,game:selected.id,correct:0};$('arcade-result-tools').hidden=true;setStatus('本局答对 0 题 · 完成后结算');return;
  }
  if(!round||d.round!==round.id)return;
  if(d.event==='progress'){
   if(!Number.isInteger(d.correct)||d.correct!==round.correct+1||d.correct>2000)return;
   round.correct=d.correct;setStatus(`本局答对 ${round.correct} 题 · 预计 ${Math.max(0,Math.min(round.correct,D.roundCap,D.dailyCap-M.arcadeStats(store.state).todayCoins))} 币`);return;
  }
  if(d.event==='finish'){
   if(d.correct!==round.correct)return;
   pending={...round};round=null;settle();return;
  }
  if(d.event==='cancel'){round=null;setStatus('本局未完成，没有结算奖励');$('arcade-result-tools').hidden=false;}
 }
 for(const [index,item]of D.games.entries()){
  const button=document.createElement('button');button.type='button';button.className='arcade-game';button.dataset.game=item.id;
  const mark=document.createElement('span'),copy=document.createElement('span'),title=document.createElement('strong'),subtitle=document.createElement('small'),number=document.createElement('span'),arrow=document.createElement('span');
  mark.className='arcade-game-mark';mark.textContent=item.mark;mark.setAttribute('aria-hidden','true');
  copy.className='arcade-game-copy';title.textContent=item.name;subtitle.textContent=item.subtitle;
  number.className='arcade-game-number';number.textContent=String(index+1).padStart(2,'0');number.setAttribute('aria-hidden','true');
  arrow.className='arcade-game-arrow';arrow.textContent='▶';arrow.setAttribute('aria-hidden','true');
  copy.append(title,subtitle);button.append(number,mark,copy,arrow);button.addEventListener('click',()=>launch(item.id));$('arcade-games').append(button);
 }
 $('arcade-games').addEventListener('keydown',e=>{
  if(dialog.classList.contains('is-playing')||e.altKey||e.ctrlKey||e.metaKey)return;
  const buttons=[...$('arcade-games').querySelectorAll('button')],index=buttons.indexOf(document.activeElement);if(index<0)return;
  const columns=getComputedStyle($('arcade-games')).gridTemplateColumns.split(' ').length;
  let next=index;
  if(e.key==='ArrowLeft')next=index-1;else if(e.key==='ArrowRight')next=index+1;else if(e.key==='ArrowUp')next=index-columns;else if(e.key==='ArrowDown')next=index+columns;else if(e.key==='Home')next=0;else if(e.key==='End')next=buttons.length-1;else return;
  e.preventDefault();buttons[Math.max(0,Math.min(buttons.length-1,next))].focus({preventScroll:true});
 });
 $('arcade-button').addEventListener('click',open);$('arcade-close').addEventListener('click',requestClose);$('arcade-retry').addEventListener('click',settle);
 $('arcade-stay').onclick=()=>{$('arcade-exit-confirm').hidden=true;frame.focus({preventScroll:true});};$('arcade-leave').onclick=close;
 $('arcade-choose').onclick=picker;$('arcade-shop').onclick=()=>{close();$('shop-button').click();};
 dialog.addEventListener('cancel',e=>{e.preventDefault();requestClose();});dialog.addEventListener('close',()=>{unlockPage();if(!$('panel').open)game.pause(false);});
 window.addEventListener('message',message);window.addEventListener('pagehide',()=>{unload();unlockPage();});
 C.Arcade={open,refresh};refresh();
})(globalThis.Cottage);
