(function(C){
 'use strict';
 const {store,game}=C.App,M=C.Model,D=C.Data.arcade,$=id=>document.getElementById(id),dialog=$('arcade-dialog'),frame=$('arcade-frame');
 let selected=null,session=null,round=null,pending=null,loadingTimer=null,lastFocus=null;
 const uid=()=>globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;
 function refresh(){
  const stats=M.arcadeStats(store.state);$('arcade-today').textContent=stats.todayCoins;
  if(!dialog.open||!$('arcade-play').hidden)return;
  $('arcade-status').textContent=`今日 ${stats.todayCoins} / ${D.dailyCap} 币 · 小屋余额 ${store.state.coins} 币`;
  const rows=(store.state.gameRuns||[]).slice(-3).reverse();$('arcade-recent').replaceChildren();
  if(rows.length){const title=document.createElement('h3');title.textContent='最近游玩';$('arcade-recent').append(title);}
  for(const row of rows){const p=document.createElement('p'),name=document.createElement('span'),reward=document.createElement('strong');name.textContent=`${D.games.find(g=>g.id===row.game).name} · 答对 ${row.correct} 题`;reward.textContent=`+${row.reward} 币`;p.append(name,reward);$('arcade-recent').append(p);}
 }
 function unload(){clearTimeout(loadingTimer);session=null;selected=null;round=null;pending=null;frame.inert=false;frame.src='about:blank';$('arcade-save-error').hidden=true;$('arcade-exit-confirm').hidden=true;}
 function picker(){unload();$('arcade-title').textContent='小屋游艺室';dialog.classList.remove('is-playing');$('arcade-play').hidden=true;$('arcade-picker').hidden=false;$('arcade-result-tools').hidden=true;refresh();$('arcade-games').querySelector('button')?.focus();}
 function close(){unload();dialog.close();game.pause(false);lastFocus?.focus();}
 function requestClose(){if(round||pending){$('arcade-exit-confirm').hidden=false;$('arcade-stay').focus();}else close();}
 function open(){if(game.build||game.blocked)return;lastFocus=document.activeElement;game.needs.flush();game.relationship.flush();game.pause(true);picker();dialog.showModal();refresh();}
 function launch(id){
  const item=D.games.find(g=>g.id===id);if(!item||pending)return;
  unload();selected=item;session=uid();dialog.classList.add('is-playing');$('arcade-title').textContent=item.name;
  $('arcade-picker').hidden=true;$('arcade-play').hidden=false;$('arcade-result-tools').hidden=true;$('arcade-loading').hidden=false;$('arcade-loading').textContent='正在打开游戏…';
  $('arcade-status').textContent='答对 1 题得 1 币 · 完成整局后结算';
  const url=new URL('../'+item.file,location.href);url.searchParams.set('cottageSession',session);frame.title=item.name;frame.src=url.href;
  loadingTimer=setTimeout(()=>{if(!$('arcade-loading').hidden)$('arcade-loading').textContent='游戏加载较慢，可以回小屋后重试。';},15000);
 }
 function settle(){
  if(!pending)return;
  try{
   store.synchronize();const existing=(store.state.gameRuns||[]).find(r=>r.id===pending.id);
   const result=existing?{reward:existing.reward}:M.rewardGame(store.state,pending);
   if(!existing)store.commit(result.state);
   const correct=pending.correct;pending=null;frame.inert=false;$('arcade-save-error').hidden=true;
   $('arcade-status').textContent=`答对 ${correct} 题 · 已存入 ${result.reward} 爪印币${result.reward<Math.min(correct,D.roundCap)?' · 今日游戏奖励已达上限':''}`;
   $('arcade-result-tools').hidden=false;game.onSave(true);refresh();
  }catch(error){frame.inert=true;$('arcade-save-error').hidden=false;$('arcade-save-error').querySelector('span').textContent='奖励还没存入，请重试。'+error.message;$('arcade-status').textContent='本局已结束 · 奖励待保存';}
 }
 function message(e){
  const d=e.data;if(e.source!==frame.contentWindow||!d||d.type!=='cottage-arcade'||d.session!==session||!session||!selected||!dialog.open)return;
  if(e.origin!==(location.protocol==='file:'?'null':location.origin))return;
  if(d.event==='ready'){clearTimeout(loadingTimer);$('arcade-loading').hidden=true;return;}
  if(typeof d.round!=='string'||!d.round.startsWith(session+'-')||d.round.length>120)return;
  if(d.event==='start'){
   if(pending||round?.id===d.round||(store.state.gameRuns||[]).some(r=>r.id===d.round))return;
   round={id:d.round,game:selected.id,correct:0};$('arcade-result-tools').hidden=true;$('arcade-status').textContent='本局答对 0 题 · 完成后结算';return;
  }
  if(!round||d.round!==round.id)return;
  if(d.event==='progress'){
   if(!Number.isInteger(d.correct)||d.correct!==round.correct+1||d.correct>2000)return;
   round.correct=d.correct;$('arcade-status').textContent=`本局答对 ${round.correct} 题 · 预计 ${Math.max(0,Math.min(round.correct,D.roundCap,D.dailyCap-M.arcadeStats(store.state).todayCoins))} 币`;return;
  }
  if(d.event==='finish'){
   if(d.correct!==round.correct)return;
   pending={...round};round=null;settle();return;
  }
  if(d.event==='cancel'){round=null;$('arcade-status').textContent='本局未完成，没有结算奖励';$('arcade-result-tools').hidden=false;}
 }
 for(const item of D.games){const button=document.createElement('button');button.type='button';button.className='arcade-game';const mark=document.createElement('span'),copy=document.createElement('span'),title=document.createElement('strong'),subtitle=document.createElement('small');mark.className='arcade-game-mark';mark.textContent=item.mark;title.textContent=item.name;subtitle.textContent=item.subtitle+' · 2 分钟';copy.append(title,subtitle);button.append(mark,copy);button.addEventListener('click',()=>launch(item.id));$('arcade-games').append(button);}
 $('arcade-button').addEventListener('click',open);$('arcade-close').addEventListener('click',requestClose);$('arcade-retry').addEventListener('click',settle);
 $('arcade-stay').onclick=()=>{$('arcade-exit-confirm').hidden=true;frame.focus();};$('arcade-leave').onclick=close;
 $('arcade-choose').onclick=()=>{picker();$('arcade-title').textContent='小屋游艺室';};$('arcade-shop').onclick=()=>{close();$('shop-button').click();};
 dialog.addEventListener('cancel',e=>{e.preventDefault();requestClose();});dialog.addEventListener('close',()=>{if(!$('panel').open)game.pause(false);});
 window.addEventListener('message',message);window.addEventListener('pagehide',()=>{unload();});
 C.Arcade={open,refresh};refresh();
})(globalThis.Cottage);
