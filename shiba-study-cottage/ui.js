(function(C){
  'use strict';
  const $=id=>document.getElementById(id),D=C.Data,M=C.Model,F=D.furniture;
  const icons={paw:'<path d="M7 16c0-5 10-5 10 0 0 4-10 4-10 0Z"/><ellipse cx="5" cy="10" rx="2" ry="2.7"/><ellipse cx="10" cy="5.8" rx="2" ry="2.7"/><ellipse cx="16" cy="6" rx="2" ry="2.7"/><ellipse cx="20" cy="11" rx="2" ry="2.7"/>',book:'<path d="M12 5v15M3 4c4-1 6 0 9 2 3-2 5-3 9-2v14c-4-1-6 0-9 2-3-2-5-3-9-2Z"/><path d="M6 8h3m-3 4h3m6-4h3m-3 4h3"/>',box:'<path d="m3 8 9-5 9 5-9 5Zm0 0v10l9 4 9-4V8M12 13v9M7 5l10 5"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="m9 3-1 3-3 1-2 4 2 2v3l4 3 3-1 3 1 4-3v-3l2-2-2-4-3-1-1-3Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>'};
  Object.assign(icons,{shop:'<path d="M4 10v10h16V10M3 4h18l1 6c-2 2-4 2-5 0-2 2-4 2-5 0-2 2-4 2-5 0-1 2-3 2-5 0Z"/><path d="M9 20v-6h6v6"/>',camera:'<path d="m8 5 2-2h4l2 2h4v15H4V5Z"/><circle cx="12" cy="12" r="4"/>',heart:'<path d="M12 20 4 12C-2 5 6 0 12 7c6-7 14-2 8 5Z"/>',water:'<path d="M12 3c-2 4-7 8-7 12a7 7 0 0 0 14 0c0-4-5-8-7-12Z"/><path d="M8 15c0 2 1 3 3 3"/>',rest:'<path d="M3 17h18v4M3 13v8M6 13V9h5v4m0 0V7h8v10M3 13h16"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',check:'<path d="m5 12 4 4L19 6"/>'});
  function renderIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${icons[el.dataset.icon]||icons.paw}</svg>`;});}
  const esc=text=>String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  icons.storage='<path d="M4 4h16v16H4Z M4 10h16 M10 7h4 M10 14h4"/>';
  renderIcons();
  function storageError(message){$('storage-error').hidden=false;$('storage-error').textContent=message;$('save-state').textContent='存档异常';$('save-state').dataset.state='error';}
  const store=new M.Store(()=>window.localStorage,storageError),audio=new C.CottageAudio(),game=new C.Game($('game'),store,audio),panel=$('panel');
  let toastTimer,currentPanel='',lastFocus=null,buildFilter='all',quickSignature='';
  const uid=()=>globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`;
  function toast(message,duration=3500){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,duration);}
  function refresh(saved=false){
    C.Arcade?.refresh();
    C.WallCards?.sync(store.state.wallCard);
    const s=store.state;$('coin-count').textContent=s.coins;audio.configure(s.settings);
    if(saved){$('storage-error').hidden=true;$('save-state').textContent='已保存';delete $('save-state').dataset.state;}
    game.normalizePlayer();refreshCompanion();refreshControls();
  }
  function refreshCompanion(){
    const s=store.state,labels={waking:'慢慢醒来',play:'玩得正起劲',idle:'陪着你',eat:'吃口粮中',walk:'散步中',settle:'找个舒服的位置',sleep:'睡得香香的',drink:'喝水中',sit:'看云中',celebrate:'为你摇尾巴',pet:'享受摸摸',stretch:'伸个懒腰',yawn:'打个哈欠',scratch:'挠挠头',sniff:'低头嗅嗅',roll:'翻滚玩耍'};
    const activity=game.idleLife.activity,autonomous=game.idleLife.phase==='walking'?{play:'去找小玩具',avoid:'想静一静',eat:'去吃口粮',company:'想靠近你',wander:'散步中',window:'去窗边',drink:'去喝水',sleep:'去休息',roll:'找块空地'}:{play:'专心玩玩具',avoid:'留一点空间',eat:'吃口粮中',company:'想要摸摸',wander:'四处看看',look:'四处张望',window:'看云中',drink:'喝水中',sleep:'睡得香香的',stretch:labels.stretch,yawn:labels.yawn,scratch:labels.scratch,sniff:labels.sniff,roll:labels.roll};
    $('companion-name').textContent=s.name;$('companion-status').textContent=game.isResting?(game.action==='waking'?(game.wakeReason==='bedtime'?'准备回窝':'闻到零食，慢慢醒来'):game.deepSleep?(game.sleepSession?.scheduled?'夜间熟睡':'熟睡中'):'打盹中'):game.blocked?'安静等你':game.build?'等你布置':game.invitationFeedback?.short|| (activity?autonomous[activity.kind]||labels[game.action]||labels.idle:labels[game.action]||labels.idle);
    refreshPetState();
  }
  function refreshPetState(){
    const n=game.needs,l=n.levels;
    for(const id of ['brand-shiba','companion-portrait']){const c=$(id),ctx=c.getContext('2d');ctx.clearRect(0,0,c.width,c.height);ctx.imageSmoothingEnabled=false;C.Art.dog(ctx,16,30,'down','idle',game.time,l.mood);}
    $('relationship-label').textContent=game.relationship.label;$('relationship-label').title=game.relationship.stage.description+' 在手账的「相处手记」查看关系变化。';
    const condition=n.condition;
    const missing=id=>!game.targets.some(t=>t.id===id);
    const missingCare=condition.id==='thirsty'&&missing('water')?'需要摆出水碗':condition.id==='hungry'&&missing('snackRack')?'需要摆出零食架':'';
    $('pet-condition').textContent=game.isResting?(game.deepSleep?'安心熟睡':game.action==='waking'?(game.wakeReason==='bedtime'?'回窝继续睡':'闻到零食香味'):'慢慢放松'):store.state.settings.roam===false?'自在活动已暂停':missingCare||condition.label;
    $('pet-condition').dataset.attention=String(!!missingCare);
    const rows=[['hunger','饱腹',100-l.hunger],['thirst','饮水',100-l.thirst],['energy','精力',l.energy],['mood','心情',l.mood]];
    const signature=rows.map(r=>Math.round(r[2])).join(':');
    if($('pet-state-values').dataset.values!==signature){
      $('pet-state-values').dataset.values=signature;
      $('pet-state-values').innerHTML=rows.map(([key,label,v])=>`<div class="pet-state-row"><span>${label}</span><meter min="0" max="100" value="${Math.round(v)}" aria-label="${label}"></meter><span>${Math.round(v)}</span></div>`).join('');
    }
    const hints={thirsty:missing('water')?'摆出水碗，柴柴才能去喝水。':'柴柴会自己去水碗喝水。',tired:'困了会找空地或小窝休息，白天更喜欢晒得到太阳的地方。',hungry:missing('snackRack')?'摆出零食架，准备一份常备口粮。':'柴柴会到零食架吃一份口粮。',lonely:'摸摸它，陪它待一会儿。',content:'按自己的节奏，吃饭、休息和玩耍。'};
    $('pet-condition').title=game.isResting?'睡醒后会自己活动；零食架里的小零食可以唤醒它。':store.state.settings.roam===false?'可在设置中开启自在活动；仍可点击家具邀请互动。':hints[condition.id];
  }
  function refreshControls(){
    $('wall-frame-button').hidden=!!game.build;
    renderQuickInventory();
  }
  function renderQuickInventory(){
    const s=store.state,selected=game.build?.id,signature=JSON.stringify([s.owned,s.placements,selected,buildFilter]);
    if(signature===quickSignature)return;quickSignature=signature;
    const ids=s.owned.filter(id=>buildFilter==='all'||(buildFilter==='placed')===s.placements.some(p=>p.id===id));
    $('quick-count').textContent=`${ids.length} 件`;
    $('quick-inventory').innerHTML=ids.length?ids.map(id=>`<button class="quick-item ${selected===id?'selected':''}" data-quick-place="${id}" aria-pressed="${selected===id}"><canvas width="80" height="64" data-furniture="${id}" aria-hidden="true"></canvas><strong>${esc(F[id].name)}</strong><small>${s.placements.some(p=>p.id===id)?'已摆放':'收纳中'} · ${F[id].w}×${F[id].h} 格</small></button>`).join(''):'<p class="catalog-empty">暂无家具</p>';
    document.querySelectorAll('[data-build-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.buildFilter===buildFilter)));
    $('quick-inventory').querySelectorAll('[data-quick-place]').forEach(b=>b.addEventListener('click',()=>{game.selectFurniture(b.dataset.quickPlace);game.canvas.focus();}));paintItems();
  }
  function takePhoto(){
    if(game.build){toast('先完成布置，再给小屋拍张照吧。');return;}
    const button=$('snapshot-button');button.disabled=true;
    try{
      game.render();const photo=document.createElement('canvas');photo.width=1152;photo.height=864;const ctx=photo.getContext('2d');ctx.imageSmoothingEnabled=false;ctx.drawImage(game.canvas,0,0,1152,864);
      photo.toBlob(blob=>{
        try{if(!blob)throw new Error('无法生成照片');const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`${store.state.name.replace(/[\\/:*?"<>|]/g,'')||'柴柴'}的小屋-${M.dayKey()}.png`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);toast('小屋照片已生成，请查看浏览器下载。');}
        catch(error){toast('照片没有生成成功，请再试一次。');}finally{button.disabled=false;}
      },'image/png');
    }catch(error){button.disabled=false;toast('暂时无法拍照，请稍后再试。');}
  }
  function commit(next){try{store.commit(next);refresh(true);return true;}catch(error){refresh();throw error;}}
  function openPanel(type,title,html,wide=false){
    if(!panel.open)lastFocus=document.activeElement;currentPanel=type;game.pause(true);$('panel-title').textContent=title;$('panel-body').innerHTML=html;panel.dataset.panel=type;panel.classList.toggle('wide',wide);renderIcons(panel);if(!panel.open)panel.showModal();audio.activate();audio.effect('page');
  }
  function closePanel(){game.pause(false);panel.close();}
  panel.addEventListener('close',()=>{if(panel.open)return;currentPanel='';game.pause(false);if(lastFocus?.isConnected)lastFocus.focus();else $('game').focus();});
  panel.addEventListener('click',e=>{if(e.target===panel){const r=panel.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closePanel();}});
  $('close-panel').addEventListener('click',closePanel);
  function openWallCards(){
    let cards;try{cards=C.WallCards.owned();}catch(error){toast('无法读取抽卡收藏，请检查浏览器存储权限。');return;}
    const selected=cards.some(c=>c.id===store.state.wallCard&&c.available)?store.state.wallCard:null;
    openPanel('wallCard','收藏相框',`<p class="form-note">把抽到的喜欢，挂在小屋里。</p><div class="wall-card-grid"><button type="button" class="wall-card-choice" data-wall-card="" aria-pressed="${!selected}"><canvas id="original-frame-preview" width="60" height="66" aria-hidden="true"></canvas><strong>柴犬画</strong><small>原来的小屋画作</small></button>${cards.map(card=>`<button type="button" class="wall-card-choice" data-wall-card="${esc(card.id)}" ${card.available?'':'disabled'} aria-pressed="${selected===card.id}">${card.available?`<img src="${esc(card.url)}" alt="${esc(card.title)}卡面" loading="lazy">`:'<span class="wall-card-missing">卡面暂缺</span>'}<strong>${esc(card.title)}</strong><small>${esc(card.rarity||'收藏')}${card.fallback&&card.available?' · 原始卡面':''}</small></button>`).join('')}</div>${cards.length?'':'<p class="catalog-empty">还没有抽到卡片，收藏后就能挂在这里。</p>'}<p class="form-note">仅展示，不消耗卡片。</p><p id="wall-card-error" class="form-error" role="alert" hidden></p>`,true);
    const preview=$('original-frame-preview').getContext('2d');preview.imageSmoothingEnabled=false;preview.drawImage(C.Art.background,288,51,20,22,0,0,60,66);
    $('panel-body').querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>{img.hidden=true;}));
    $('panel-body').querySelectorAll('[data-wall-card]').forEach(button=>button.addEventListener('click',async()=>{
      const buttons=[...$('panel-body').querySelectorAll('[data-wall-card]')];buttons.forEach(b=>b.disabled=true);
      try{
        const id=button.dataset.wallCard||null,card=cards.find(c=>c.id===id);
        if(id)await C.WallCards.load(card);
        if(currentPanel!=='wallCard'||!button.isConnected)return;
        commit(C.WallCards.select(store.state,id));closePanel();toast(id?'卡片已挂好。':'已换回柴犬画。');
      }catch(error){if(currentPanel==='wallCard'){$('wall-card-error').textContent=error.message;$('wall-card-error').hidden=false;buttons.forEach(b=>b.disabled=!!b.dataset.wallCard&&!cards.find(c=>c.id===b.dataset.wallCard)?.available);}}
    }));
  }

  function itemCard(id,mode){
    const f=F[id],owned=store.state.owned.includes(id),placed=store.state.placements.some(p=>p.id===id),missing=Math.max(0,(f.price||0)-store.state.coins);
    const behavior=f.behavior||{toyBasket:'可玩耍',sniffMat:'可嗅闻',bed:'可休息',water:'可喝水',lamp:'灯光开关',sofa:'可趴卧',record:'音乐开关',snackRack:'常备口粮'}[id]||(f.rug?'可铺在家具下方':'');
    let action;
    if(mode==='shop')action=owned?`<button class="button secondary" data-place="${id}">${placed?'移动':'摆放'}</button>`:`<button class="button ${missing?'secondary':'primary'}" data-buy="${id}" ${missing?'disabled':''}>${missing?`还差 ${missing} 币`:'购买'}</button>`;
    else action=`<button class="button secondary" data-place="${id}">${placed?'移动':'摆放'}</button>`;
    return `<article class="item-card"><div class="item-art"><canvas width="80" height="64" data-furniture="${id}" aria-label="${esc(f.name)}"></canvas></div><div class="item-info"><h3>${esc(f.name)}</h3><span class="item-size">${f.w} × ${f.h} 格${behavior?` · ${behavior}`:''}</span><span class="item-tag">${owned?(placed?'已摆放':'收纳中'):`${f.price} 爪印币`}</span>${action}</div></article>`;
  }
  function paintItems(){document.querySelectorAll('[data-furniture]').forEach(canvas=>C.Art.icon(canvas,canvas.dataset.furniture));}
  function catalogMarkup(mode){
    const filters=mode==='shop'?[['all','全部'],['furniture','家具'],['snacks','小零食'],['affordable','可购买'],['owned','已拥有']]:[['all','全部'],['placed','已摆放'],['stored','收纳中']];
    return `<div class="catalog-tabs" role="group" aria-label="${mode==='shop'?'商店':'家具'}筛选">${filters.map(([key,label])=>`<button data-catalog-filter="${key}" aria-pressed="${key==='all'}">${label}</button>`).join('')}</div><p id="catalog-count" class="catalog-count" role="status"></p><div id="catalog-items" class="item-grid"></div>`;
  }
  function shopSnackCard(id){
    const item=C.Snacks.items[id],stock=C.Snacks.stock(store.state,id),limit=stock>=D.snacks.stockLimit,missing=Math.max(0,item.price-store.state.coins);
    return `<article class="item-card" data-shop-snack="${id}"><div class="item-art"><canvas width="64" height="64" data-snack-art="${id}" aria-label="${esc(item.name)}"></canvas></div><div class="item-info"><h3>${esc(item.name)}</h3><span class="item-size">小零食 · 库存 ${stock} 份</span><span class="item-tag">${item.price} 爪印币 / 份</span><button class="button ${missing||limit?'secondary':'primary'}" data-catalog-snack="${id}" ${missing||limit?'disabled':''}>${limit?'库存已满':missing?`还差 ${missing} 币`:'买一份'}</button></div></article>`;
  }
  function renderCatalog(mode,filter='all'){
    const s=store.state,all=mode==='shop'?Object.keys(F).filter(id=>F[id].price):s.owned;
    const ids=all.filter(id=>{
      if(filter==='snacks')return false;
      if(filter==='affordable')return !s.owned.includes(id)&&s.coins>=F[id].price;
      if(filter==='owned')return s.owned.includes(id);
      if(filter==='placed'||filter==='stored')return (filter==='placed')===s.placements.some(p=>p.id===id);
      return true;
    });
    const snacks=mode==='shop'&&filter!=='furniture'?Object.keys(C.Snacks.items).filter(id=>filter==='affordable'?s.coins>=C.Snacks.items[id].price&&C.Snacks.stock(s,id)<D.snacks.stockLimit:filter==='owned'?C.Snacks.stock(s,id)>0:true):[];
    $('catalog-count').textContent=mode==='shop'?`${ids.length+snacks.length} 件商品`:`${ids.length} 件家具`;
    const balance=$('catalog-balance');if(balance)balance.textContent=s.coins;
    document.querySelectorAll('[data-catalog-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.catalogFilter===filter)));
    $('catalog-items').innerHTML=ids.length||snacks.length?ids.map(id=>itemCard(id,mode)).concat(snacks.map(shopSnackCard)).join(''):`<div class="catalog-empty"><span data-icon="box"></span><h3>${filter==='affordable'?'暂无可购买商品':filter==='owned'?'暂无已拥有商品':filter==='stored'?'暂无收纳家具':'暂无商品'}</h3><p>${filter==='affordable'?'玩日语小游戏，可以赚取爪印币。':'可以切换到「全部」。'}</p></div>`;
    renderIcons($('catalog-items'));paintItems();bindPlacementButtons();
    $('catalog-items').querySelectorAll('[data-snack-art]').forEach(c=>snackArt(c,c.dataset.snackArt));
    $('catalog-items').querySelectorAll('[data-catalog-snack]').forEach(button=>{
      const id=uid();let submitted=false;
      button.addEventListener('click',e=>{if(submitted||e.detail>1)return;submitted=true;button.disabled=true;
        try{commit(C.Snacks.buy(store.state,{id,item:button.dataset.catalogSnack}));audio.effect('buy');renderCatalog(mode,filter);toast('已放入零食架。');}
        catch(error){toast(error.message);renderCatalog(mode,filter);}
      });
    });
    $('catalog-items').querySelectorAll('[data-buy]').forEach(button=>button.addEventListener('click',()=>{
      button.disabled=true;const id=button.dataset.buy;
      try{commit(M.buy(store.state,id));audio.effect('buy');closePanel();game.beginBuild();game.selectFurniture(id);toast(game.build?`已购买${F[id].name}，点击位置摆放。`:`已购买${F[id].name}，暂存收纳箱，等柴柴睡醒再摆放。`);}
      catch(error){toast(error.message);renderCatalog(mode,filter);}
    }));
  }
  function openShop(){
    openPanel('shop','小屋商店',`<div class="shop-balance"><span>家具限购 1 件 · 零食可补货</span><strong><span id="catalog-balance">${store.state.coins}</span> <small>爪印币</small></strong></div>${catalogMarkup('shop')}`,true);
    renderCatalog('shop');document.querySelectorAll('[data-catalog-filter]').forEach(b=>b.addEventListener('click',()=>renderCatalog('shop',b.dataset.catalogFilter)));
  }
  function snackArt(canvas,id){
    const g=canvas.getContext('2d');g.imageSmoothingEnabled=false;g.clearRect(0,0,64,64);g.save();g.scale(2,2);
    const r=(x,y,w,h,c)=>{g.fillStyle=c;g.fillRect(x,y,w,h);},c=D.snacks.items[id].color;
    r(6,9,20,18,'#78634b');r(7,8,18,19,c);r(8,10,2,14,'#ecd0a0');r(8,6,16,4,'#897c65');r(9,7,14,1,'#d5c8a6');r(7,25,18,2,'#a17e53');r(11,13,11,8,'#fff0d1');
    if(id==='chicken'){r(14,15,5,4,'#b9814c');r(16,14,4,3,'#c89358');r(12,18,3,1,'#c89358');}
    else if(id==='pumpkin'){r(14,15,6,4,'#cf9044');r(15,14,4,6,'#dda94e');r(17,13,1,2,'#718464');}
    else{r(14,15,5,4,'#859c9d');r(19,14,2,2,'#859c9d');r(19,18,2,2,'#859c9d');r(14,16,1,1,'#53696a');}
    g.restore();
  }
  function openSnacks(){
    const S=C.Snacks,s=store.state,ready=s.placements.some(p=>p.id==='snackRack'),busy=!!game.treatRequest||game.finishingAction;
    const tasteText={like:'很喜欢',neutral:'普通接受',dislike:'不太喜欢'};
    openPanel('snacks','零食架',`<div class="shop-balance"><span>小小一份，慢慢认识它</span><strong>${s.coins} <small>爪印币</small></strong></div><div class="snack-grid">${Object.entries(S.items).map(([id,item])=>{const n=S.stock(s,id),taste=S.discovered(s,id);return `<article class="snack-card"><canvas width="64" height="64" data-snack-art="${id}" aria-label="${esc(item.name)}"></canvas><h3>${esc(item.name)}</h3><p class="snack-taste ${taste||''}">${tasteText[taste]||'口味待发现'}</p><p class="snack-stock">架上 <strong>${n}</strong> 份</p><button class="button secondary" data-buy-snack="${id}" ${s.coins<item.price||n>=D.snacks.stockLimit?'disabled':''}>${item.price} 币 · 买一份</button><button class="button primary" data-serve-snack="${id}" ${!ready||!n||busy?'disabled':''}>${game.isResting?'用零食唤醒':'给它尝尝'}</button></article>`;}).join('')}</div><div class="kibble-row"><div><strong>常备口粮</strong><p>免费准备，饿了也会自己来吃。</p></div><button id="serve-kibble" class="button secondary" ${!ready||busy?'disabled':''}>准备口粮</button></div>${!ready?'<p class="form-note">先在房间摆出零食架，就能邀请柴柴来尝。买好的零食会保存在库存里。</p><button id="snack-place-rack" class="button secondary full">'+(s.owned.includes('snackRack')?'摆放零食架':'去家具商店')+'</button>':''}${busy?'<p class="form-note">刚才的动作已暂停；关上面板，让它缓一缓再尝。</p>':''}<details class="settings-help"><summary>怎样喂零食</summary><p>尝过才会记下口味。它会先走到架子旁，吃完才扣一份；不喜欢、拒绝邀请或中途取消都不扣库存。每种最多存 30 份。</p><p>每天前 3 次吃零食可获得心情增益，好感与信任沿用照料冷却。之后仍可吃，但不会反复刷关系。肚子饱了就晚些再来。</p></details><p id="snack-error" class="form-error" role="alert" hidden></p><button id="snack-memories" class="button secondary full">看看我们的回忆</button>`,true);
    document.querySelectorAll('[data-snack-art]').forEach(c=>snackArt(c,c.dataset.snackArt));
    $('panel-body').querySelectorAll('[data-buy-snack]').forEach(button=>{
      const id=uid();let submitted=false;
      button.addEventListener('click',e=>{if(submitted||e.detail>1)return;submitted=true;button.disabled=true;try{commit(S.buy(store.state,{id,item:button.dataset.buySnack}));audio.effect('buy');openSnacks();}catch(error){$('snack-error').hidden=false;$('snack-error').textContent=error.message;button.disabled=false;submitted=false;}});
    });
    $('panel-body').querySelectorAll('[data-serve-snack]').forEach(button=>button.addEventListener('click',()=>{button.disabled=true;const item=button.dataset.serveSnack;closePanel();game.offerTreat(item,uid());}));
    $('serve-kibble').addEventListener('click',()=>{closePanel();game.goToTarget('snackRack');});
    $('snack-place-rack')?.addEventListener('click',()=>{if(store.state.owned.includes('snackRack')){closePanel();game.beginBuild();game.selectFurniture('snackRack');}else openShop();});
    $('snack-memories').addEventListener('click',()=>openJournal('memories'));
  }
  function openMemories(){
    const S=C.Snacks,s=S.data(store.state),first=s.tastings.find(t=>t.outcome!=='dislike'),image=s.memory?.snapshot;
    const descriptions={like:'摇了摇尾巴，这个味道很合心意。',neutral:'慢慢吃完，安静地看了看你。',dislike:'闻了闻后转过头，你把零食收好了。'};
    const known=Object.entries(S.items).filter(([id])=>S.discovered(store.state,id));
    openPanel('memories','小屋手账',`${journalTabs('memories')}${first?`<article class="first-treat-memory">${image?`<img src="${esc(image)}" alt="第一次喂零食时的小屋照片">`:''}<small>${dateLabel(first.at)}</small><h3>第一次，为你准备的小零食</h3><p>你给${esc(store.state.name)}准备了${esc(S.items[first.item].name)}。${descriptions[first.outcome]}</p></article>`:'<div class="catalog-empty"><h3>等一个小小的第一次</h3><p>它第一次吃完你准备的零食时，这里会留下照片和回忆。</p></div>'}<h3 class="taste-heading">慢慢认识你的口味</h3>${known.length?known.map(([id,item])=>`<article class="journal-record"><p>${esc(item.name)} · ${ {like:'很喜欢',neutral:'普通接受',dislike:'不太喜欢'}[S.discovered(store.state,id)]}</p><footer><span>${descriptions[S.discovered(store.state,id)]}</span></footer></article>`).join(''):'<p class="form-note">还没有发现的口味，留到相处时慢慢知道。</p>'}<button id="memory-snacks" class="button secondary full">去零食架看看</button>`);
    bindJournalTabs();$('memory-snacks').addEventListener('click',openSnacks);
  }

  function openInventory(){
    openPanel('inventory','小屋收纳',catalogMarkup('inventory'),true);
    renderCatalog('inventory');document.querySelectorAll('[data-catalog-filter]').forEach(b=>b.addEventListener('click',()=>renderCatalog('inventory',b.dataset.catalogFilter)));
  }
  function bindPlacementButtons(){
    $('panel-body').querySelectorAll('[data-place]').forEach(button=>button.addEventListener('click',()=>{const id=button.dataset.place;closePanel();if(!game.build)game.beginBuild();game.selectFurniture(id);}));
  }
  const dateLabel=time=>new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date(time));
  function journalTabs(active){return `<div class="catalog-tabs" role="group" aria-label="手账内容"><button data-journal-tab="relationship" aria-pressed="${active==='relationship'}">相处手记</button><button data-journal-tab="toys" aria-pressed="${active==='toys'}">玩具偏好</button><button data-journal-tab="memories" aria-pressed="${active==='memories'}">共同回忆</button></div>`;}
  function bindJournalTabs(){document.querySelectorAll('[data-journal-tab]').forEach(b=>b.addEventListener('click',()=>openJournal(b.dataset.journalTab)));}
  function openRelationshipJournal(){
    const r=game.relationship,s=r.data,stage=r.stage;
    const values=[['好感',s.affection,'愿意与你亲近'],['信任',s.trust,'相信你会尊重它'],['自在',s.comfort,'此刻是否想互动']];
    const entries=s.history.map(e=>{
      const changes=[['affection','好感'],['trust','信任'],['comfort','自在']].filter(([key])=>e.delta[key]!==0).map(([key,label])=>`${label} ${e.delta[key]>0?'+':''}${e.delta[key]}`).join(' · ');
      return `<article class="journal-record"><p>${esc(D.relationship.events[e.kind].text)}</p><footer><span>${dateLabel(e.at)}</span><span>${esc(changes)}</span></footer></article>`;
    }).join('');
    openPanel('relationship','小屋手账',`${journalTabs('relationship')}<div class="relationship-intro"><h3>${esc(store.state.name)} · ${esc(r.label)}</h3><p>${esc(stage.description)}</p></div><div class="journal-summary relationship-summary">${values.map(([label,value,hint])=>`<div><small>${label}</small><strong>${Math.round(value)}<span> / 100</span></strong><p>${hint}</p></div>`).join('')}</div><details class="settings-help relationship-help"><summary>怎样好好相处</summary><p>照顾真正的需要、完成温柔摸摸，会增加好感与信任。熟悉后会主动靠近；戒备或不自在时，会保留距离。喝水、吃饭、休息与看云的邀请也会受关系影响：越亲近越愿意回应，关系较差时可能拒绝。真正口渴、饥饿或困倦时仍能接受对应照顾，自主吃喝不受关系限制。自在反映此刻想不想互动，摸摸后也需要缓一缓，安静相处会慢慢恢复。</p><p>第一次拒绝摸摸或家具邀请不会扣分。同类邀请在 12 秒内不重新抽取结果，反复点击不会更容易答应。在吃喝、睡觉或已经想静一静时，10 秒内连续打扰 3 次才会影响关系。留出约一分钟可见的安静时间，它会慢慢放松。</p><p>摸摸带来的关系提升每 45 秒一次，照顾每 120 秒一次。不在场、离线或没有签到不会降低关系；状态好坏也不会扣掉爪印币。最近保留 24 条相处记录。</p></details><h3 class="relationship-log-title">最近相处</h3><div id="relationship-history">${entries||'<p class="empty-note">还没有相处记录。让它慢慢认识你。</p>'}</div>`);
    bindJournalTabs();
  }
  function openToyJournal(){
    const s=store.state;
    openPanel('toys','小屋手账',`${journalTabs('toys')}<p class="form-note">玩过之后，才慢慢知道它喜欢什么。</p><div class="item-grid">${D.toys.ids.map(id=>{const owned=s.owned.includes(id),placed=s.placements.some(p=>p.id===id);return `<article class="snack-card toy-card"><canvas width="80" height="64" data-furniture="${id}" aria-hidden="true"></canvas><h3>${esc(F[id].name)}</h3><p>${C.Toys.preference(s,id)||'偏好待发现'}</p><small>${owned?(placed?'已摆放':'收纳中'):`${F[id].price} 爪印币`}</small><button class="button secondary" data-play-toy="${id}" ${!placed?'disabled':''}>邀请玩耍</button></article>`;}).join('')}</div><p class="form-note">口渴、饿了或困倦时先照顾需要。玩具可重复使用，心情提升有间隔；自主玩耍不会增加与你的关系。</p><button id="toy-shop" class="button secondary full">去商店选玩具</button>`);
    paintItems();bindJournalTabs();$('toy-shop').addEventListener('click',openShop);
    document.querySelectorAll('[data-play-toy]').forEach(b=>b.addEventListener('click',()=>{closePanel();game.goToTarget(b.dataset.playToy);}));
  }
  function openJournal(mode='relationship'){
    if(mode==='memories')openMemories();else if(mode==='toys')openToyJournal();else openRelationshipJournal();
  }
  function openSettings(){
    const s=store.state;
    openPanel('settings','小屋设置',`<form id="settings-form"><label class="form-field">柴犬名字<input id="name-input" value="${esc(s.name)}" maxlength="12" required autocomplete="off"></label><div class="setting-row"><label for="roam-input">自在活动<small>自主散步、喝水和休息</small></label><input type="checkbox" id="roam-input" ${s.settings.roam!==false?'checked':''}></div><div class="setting-row"><label for="sound-input">音效</label><input type="checkbox" id="sound-input" ${s.settings.sound?'checked':''}></div><div class="setting-row"><label for="music-input">背景音乐</label><input type="checkbox" id="music-input" ${s.settings.music?'checked':''}></div><p id="settings-error" class="form-error" role="alert" hidden></p><button class="button primary full" type="submit">保存设置</button></form><details class="settings-help"><summary>操作与存档</summary><div><p>柴犬会按自己的节奏活动。点击家具邀请互动，点击柴犬摸摸。</p><p><kbd>B</kbd> 布置 · <kbd>Esc</kbd> 取消摆放或关闭面板<br>布置时：<kbd>方向键</kbd> 微调 · <kbd>Enter</kbd> 放下 · <kbd>Z</kbd> 撤销</p><p>进度只保存在当前浏览器，清理网站数据会清除进度。</p><p>点击互动家具可邀请柴犬前往；点击空地和移动键不会控制柴犬。背景音乐在主动操作后播放，离开标签页时暂停。</p></div></details>`);
    $('settings-form').addEventListener('submit',e=>{e.preventDefault();try{const name=$('name-input').value.trim();if(!name||name.length>12)throw new Error('给柴柴取一个 1～12 个字的名字吧。');const next=M.clone(store.state);next.name=name;next.settings={...next.settings,sound:$('sound-input').checked,music:$('music-input').checked,roam:$('roam-input').checked};commit(next);audio.activate();closePanel();toast('设置已保存');}catch(error){$('settings-error').hidden=false;$('settings-error').textContent=error.message;}});
  }
  function buildChanged(){
    $('wall-frame-button').hidden=!!game.build;
    const b=game.build;$('build-bar').hidden=!b;$('mode-label').hidden=!b;$('build-button').classList.toggle('active',!!b);
    document.body.classList.toggle('building',!!b);
    $('room-notebook').hidden=!!b;$('arcade-card').hidden=!!b;$('build-notebook').hidden=!b;refreshCompanion();renderQuickInventory();
    $('undo-placement').disabled=!game.canUndo;
    $('store-button').hidden=!b?.id;$('cancel-place').hidden=!b?.id;$('game').style.cursor=b?'crosshair':'default';
    if(!b)return;
    $('build-title').textContent=b.id?`摆放 ${F[b.id].name}`:'选择家具';
    $('build-help').textContent=b.id?(b.check?.ok?'点击放下 · Esc 取消':b.check?.reason):'点击家具开始摆放';
    $('build-help').classList.toggle('invalid',!!b.id&&!b.check?.ok);
  }
  audio.onError=message=>toast(message,4500);
  game.onToast=toast;game.onBuildChange=buildChanged;game.onSave=(saved=true)=>refresh(saved);game.onActivity=refreshCompanion;game.onStatusChange=refreshCompanion;
  game.onInteract=target=>{
    if(target.action==='snackShelf')openSnacks();
    else if(target.action==='wallCard')openWallCards();
    else if(target.action==='shop')openShop();
    else if(target.action==='play')game.perform('play',target);
    else if(target.action==='sleep')game.perform('sleep',target);
    else if(target.action==='drink')game.perform('drink',target);
    else if(target.action==='snacks'){if(game.treatRequest)game.beginTreat(target);else game.perform('eat',target);}
    else if(target.action==='window')game.perform('window',target);
    else if(['lamp','music'].includes(target.action)){
      try{const next=M.clone(store.state);if(target.action==='lamp')next.lampOn=!next.lampOn;else next.settings.music=!next.settings.music;commit(next);audio.activate();toast(target.action==='lamp'?(next.lampOn?'灯光已开启':'灯光已关闭'):(next.settings.music?'音乐已开启':'音乐已暂停'));}catch(error){toast(error.message);}
    }
  };
  $('wall-frame-button').addEventListener('click',()=>{if(!game.build&&!game.blocked)openWallCards();});
  window.addEventListener('storage',e=>{if(e.key===null||['omikujiCollection','omikujiCollectionMeta_v1'].includes(e.key)){C.WallCards.sync(store.state.wallCard);if(currentPanel==='wallCard')openWallCards();}});
  $('journal-button').addEventListener('click',openJournal);$('settings-button').addEventListener('click',openSettings);
  // Let Enter activate navigation even when furniture placement uses Enter too.
  $('home-link').addEventListener('keydown',e=>e.stopPropagation());
  $('shop-button').addEventListener('click',openShop);$('snapshot-button').addEventListener('click',takePhoto);$('room-inventory-button').addEventListener('click',openInventory);
  document.querySelectorAll('[data-build-filter]').forEach(b=>b.addEventListener('click',()=>{buildFilter=b.dataset.buildFilter;renderQuickInventory();}));
  $('build-button').addEventListener('click',()=>game.build?game.endBuild():game.beginBuild());
  $('inventory-button').addEventListener('click',openInventory);$('finish-build').addEventListener('click',()=>game.endBuild());$('cancel-place').addEventListener('click',()=>game.cancelPlacement());$('store-button').addEventListener('click',()=>game.storeSelected());
  $('undo-placement').addEventListener('click',()=>game.undoPlacement());
  function resize(){const compact=window.innerHeight<=800,sidebar=window.innerWidth>=1160?292:0;const roomWidth=Math.min(1520,window.innerWidth-64)-sidebar-12;const scale=Math.max(1,Math.min(3,Math.floor(Math.min(roomWidth/384,(window.innerHeight-(compact?112:136))/288))));document.documentElement.style.setProperty('--scale',scale);document.documentElement.dataset.scale=String(scale);}
  window.addEventListener('resize',resize);resize();
  window.addEventListener('storage',e=>{if(e.key===D.storageKey||e.key===null){
    const business=state=>{const {needs,relationship,revision,...rest}=state;return JSON.stringify(rest);},before=business(store.state);
    if(store.synchronize()){
      game.needs.sync();game.relationship.sync();
      // Background care checkpoints leave the current pet journal open.
      if(before===business(store.state)){refresh();return;}
      game.clearAction();game.history=[];game.cancelPlacement();refresh();if(panel.open)closePanel();toast('另一扇小屋窗口更新了进度，已经同步。');
    }
  }});
  setInterval(refreshPetState,1000);
  // Recalculate the Beijing-day counters without requiring a reload at midnight.
  setInterval(refresh,15000);
  refresh();game.canvas.focus({preventScroll:true});
  C.App={store,game,audio};
})(globalThis.Cottage);
