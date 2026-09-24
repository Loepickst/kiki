(function(C){
  'use strict';
  const KEY='shibaStudyCottage.v1';
  const errorBox=document.getElementById('adoption-error');
  const dialog=document.getElementById('adoption-dialog');
  const form=document.getElementById('adoption-form');
  const submit=document.getElementById('adopt-button');
  const start=document.getElementById('start-adoption');
  const choices=[...document.querySelectorAll('.pet-card-action')];
  let selectedBreed='red-shiba';
  const showError=message=>{errorBox.textContent=message;errorBox.hidden=false;};
  const clearError=()=>{errorBox.textContent='';errorBox.hidden=true;};

  C.ShopShowcase.start();

  let store=null,existing=false,reAdoption=false;
  try{
    const raw=localStorage.getItem(KEY);
    let saved=null;
    try{saved=raw===null?null:JSON.parse(raw);}catch{/* Invalid saves still open the cottage's recovery view. */}
    reAdoption=raw!==null&&saved?.awaitingAdoption===true;
    existing=raw!==null&&!reAdoption;
    if(existing){
      document.querySelector('.counter-copy strong').textContent='你的小伙伴已经在家等你';
      document.querySelector('.counter-copy small').textContent='回家陪它待一会儿吧。';
      start.textContent='回到我的小屋 →';
      choices.forEach(button=>button.disabled=true);
      document.querySelectorAll('.available-status').forEach(status=>status.textContent='新家庭可选');
    }else{
      store=new C.Model.Store(()=>localStorage,showError);
      if(store.readOnly)throw new Error('浏览器存储不可用，暂时不能领养。请检查存储权限后刷新。');
      if(reAdoption){
        document.querySelector('.counter-copy strong').textContent='再选一位新伙伴吧';
        document.querySelector('.counter-copy small').textContent=`旧物品已兑换，${store.state.coins} 爪印币会留给新小屋。`;
      }
    }
  }catch(error){start.disabled=true;showError(error.message||'暂时不能读取存档，请刷新后再试。');dialog.showModal();}

  function choose(breed){
    if(existing||!['red-shiba','black-shiba'].includes(breed))return;
    selectedBreed=breed;
    for(const button of choices){const selected=button.dataset.breed===breed;button.setAttribute('aria-pressed',String(selected));button.closest('.pet-card').classList.toggle('selected',selected);}
    const label=breed==='black-shiba'?'黑柴幼犬':'赤柴幼犬';
    document.querySelector('.counter-copy strong').textContent=reAdoption?`${label} · 重新领养`:`${label} · 首次领养免费`;
    document.querySelector('.dialog-kicker').textContent=label;
    C.ShopShowcase.select(breed==='black-shiba'?'black':'red');
  }
  choices.forEach(button=>button.addEventListener('click',()=>choose(button.dataset.breed)));

  start.addEventListener('click',()=>{if(existing){location.replace('index.html');return;}if(!store||store.readOnly)return;clearError();form.reset();dialog.showModal();document.getElementById('pet-name').focus();});
  document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  window.addEventListener('storage',event=>{if(event.key===KEY&&event.newValue!==null){
    try{if(JSON.parse(event.newValue)?.awaitingAdoption===true){location.reload();return;}}catch{/* The cottage will report an invalid save. */}
    location.replace('index.html');
  }});
  form.addEventListener('submit',event=>{
    event.preventDefault();if(existing||!store||store.readOnly||submit.disabled)return;
    clearError();
    const sex=form.elements.sex.value;
    const name=document.getElementById('pet-name').value.trim();
    if(!['female','male'].includes(sex)){showError('先选一下这只小柴的性别吧。');return;}
    if(!name||name.length>12){showError('名字需要是 1～12 个字。');return;}
    if(store.raw!==null&&!store.state.awaitingAdoption){location.replace('index.html');return;}
    const next=C.Model.newState();
    if(store.state.awaitingAdoption){
      next.coins=store.state.restartCredit;
      next.restartCredit=store.state.restartCredit;
    }
    next.name=name;
    next.petIdentity={version:1,id:globalThis.crypto?.randomUUID?.()||`pet-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,species:'dog',breed:selectedBreed,sex,adoptedAt:new Date().toISOString()};
    submit.disabled=true;
    try{store.commit(next);location.replace('index.html');}
    catch(error){submit.disabled=false;if(store.raw!==null&&!store.state.awaitingAdoption)location.replace('index.html');else showError(error.message);}
  });
})(globalThis.Cottage||{});
