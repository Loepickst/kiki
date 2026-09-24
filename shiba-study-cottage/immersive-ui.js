(function(C){
  'use strict';
  const $=id=>document.getElementById(id);
  let initialized=false,game=null,fitQueued=false,fullscreenBusy=false,theater=false,previousScroll=0;
  const expanded=id=>$(id)?.getAttribute('aria-expanded')==='true';
  function setPanel(buttonId,panelId,open,restore=false){
    const button=$(buttonId),panel=$(panelId);if(!button||!panel)return;
    panel.hidden=!open;button.setAttribute('aria-expanded',String(open));
    if(restore)button.focus({preventScroll:true});
  }
  function closePanels(){setPanel('pet-status-button','room-notebook',false);setPanel('more-button','more-menu',false);}
  function toggle(buttonId,panelId){const open=!expanded(buttonId);closePanels();setPanel(buttonId,panelId,open);}
  function fit(){
    fitQueued=false;
    const shell=document.querySelector('.app-shell'),header=document.querySelector('.topbar');
    if(!shell||!header)return;
    // World dimensions never change. Only the CSS display scale uses available space.
    const vv=window.visualViewport,zoomed=vv&&Math.abs(vv.scale-1)>.01;
    const viewportHeight=!zoomed&&vv?Math.min(window.innerHeight,vv.height):window.innerHeight;
    const shellStyle=getComputedStyle(shell),safeBottom=parseFloat(shellStyle.paddingBottom)||0;
    const sideInventory=!!game?.build&&window.innerWidth>640&&window.innerHeight<=540;
    let controls=0;
    for(const node of document.querySelectorAll('.room-column > :not(.game-frame)')){
      if(sideInventory&&node.id==='build-notebook')continue;
      if(node.hidden||getComputedStyle(node).display==='none')continue;
      const style=getComputedStyle(node);
      controls+=node.getBoundingClientRect().height+(parseFloat(style.marginTop)||0)+(parseFloat(style.marginBottom)||0);
    }
    const saveRoom=window.innerWidth<=640&&!game?.build?20:0;
    const width=Math.max(96,shell.clientWidth-8-(sideInventory?230:0)),height=Math.max(72,viewportHeight-header.getBoundingClientRect().height-controls-safeBottom-saveRoom-10);
    const size=game?.worldSize||{width:384,height:288},scale=Math.max(.25,Math.min(width/size.width,height/size.height));
    document.documentElement.style.setProperty('--world-width',size.width+'px');
    document.documentElement.style.setProperty('--world-height',size.height+'px');
    document.documentElement.style.setProperty('--scale',String(scale));
    document.documentElement.dataset.scale='fluid';
    syncArcade();
  }
  function queueFit(){if(!fitQueued){fitQueued=true;requestAnimationFrame(fit);}}
  function syncArcade(){
    const button=$('arcade-button');if(!button||!game)return;
    const module=C.RoomArcade,r=module?.hitRect?module.hitRect(game):module?.rect||{x:18,y:44,w:28,h:50};
    const visible=game.scene==='room'&&!game.build&&!game.blocked&&!!r&&(!module?.available||module.available(game));
    button.hidden=!visible;
    if(!visible)return;
    button.style.left=r.x/384*100+'%';button.style.top=r.y/288*100+'%';
    button.style.width=r.w/384*100+'%';button.style.height=r.h/288*100+'%';
  }
  function sync(){
    if(!game)return;
    if(document.documentElement.dataset.hudScene!==game.scene){document.documentElement.dataset.hudScene=game.scene;queueFit();}
    const fullscreen=$('fullscreen-button'),target=document.querySelector(game.build?'.build-actions':'.toolbar nav');
    if(target&&fullscreen.parentElement!==target){
      // One stable control stays at the bottom even while normal tools are hidden.
      target.insertBefore(fullscreen,game.build?$('finish-build'):document.querySelector('.more-tools'));
      queueFit();
    }
    $('hud-pet-name').textContent=game.store.state.name;
    const n=game.needs.levels,attention=n.hunger>=80||n.thirst>=80||n.energy<=18||n.mood<=25;
    $('pet-attention').hidden=!attention;
    $('pet-status-button').setAttribute('aria-label',`${game.store.state.name}的状态${attention?'，需要关注':''}`);
    $('pet-status-button').disabled=!!game.build;
    if(game.build||game.blocked)closePanels();
    syncArcade();
  }
  function fullscreenState(){
    const active=!!(document.fullscreenElement||document.webkitFullscreenElement)||theater;
    $('fullscreen-button').setAttribute('aria-pressed',String(active));
    $('fullscreen-button').setAttribute('aria-label',active?'退出全屏':'进入全屏');
    $('fullscreen-button').title=active?'退出全屏':'全屏';
    $('fullscreen-label').textContent=active?'退出':'全屏';
    document.body.classList.toggle('theater-mode',theater);queueFit();
  }
  function enterTheater(){previousScroll=window.scrollY;theater=true;fullscreenState();}
  function exitTheater(){theater=false;fullscreenState();window.scrollTo(0,previousScroll);}
  async function toggleFullscreen(){
    if(fullscreenBusy)return;fullscreenBusy=true;closePanels();
    try{
      if(theater){exitTheater();return;}
      if(document.fullscreenElement||document.webkitFullscreenElement){
        const exit=document.exitFullscreen||document.webkitExitFullscreen;if(exit)await exit.call(document);
      }else{
        const root=document.documentElement,request=root.requestFullscreen||root.webkitRequestFullscreen;
        if(!request){enterTheater();return;}
        try{await request.call(root);}catch{enterTheater();}
      }
    }catch{
      // A browser may reject an exit during its own transition. Keep the real
      // fullscreen state and leave the same exit button available for retry.
    }finally{fullscreenBusy=false;fullscreenState();}
  }
  function init(appGame){
    if(initialized)return;initialized=true;game=appGame;
    $('pet-status-button').addEventListener('click',()=>toggle('pet-status-button','room-notebook'));
    $('close-pet-status').addEventListener('click',()=>setPanel('pet-status-button','room-notebook',false,true));
    $('more-button').addEventListener('click',()=>toggle('more-button','more-menu'));
    $('fullscreen-button').addEventListener('click',toggleFullscreen);
    document.addEventListener('pointerdown',e=>{
      if(!e.target.closest('.pet-hud'))setPanel('pet-status-button','room-notebook',false);
      if(!e.target.closest('.more-tools'))setPanel('more-button','more-menu',false);
    });
    document.addEventListener('focusin',e=>{
      if(!e.target.closest('.pet-hud'))setPanel('pet-status-button','room-notebook',false);
      if(!e.target.closest('.more-tools'))setPanel('more-button','more-menu',false);
    });
    // Capture Escape before placement shortcuts. Dialogs retain their native cancel behavior.
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'&&!document.querySelector('dialog[open]')){
        const pet=expanded('pet-status-button'),more=expanded('more-button');
        if(pet||more){e.preventDefault();e.stopImmediatePropagation();closePanels();$(pet?'pet-status-button':'more-button').focus({preventScroll:true});}
        else if(theater&&!game.build&&!game.selectedTreat){e.preventDefault();e.stopImmediatePropagation();exitTheater();$('fullscreen-button').focus({preventScroll:true});}
      }
      // Enter on an actual UI control must never also place selected furniture.
      if(e.target.closest('button,a')&&(e.key==='Enter'||e.key===' '))e.stopPropagation();
    },true);
    for(const type of ['fullscreenchange','webkitfullscreenchange'])document.addEventListener(type,fullscreenState);
    window.addEventListener('resize',queueFit);window.visualViewport?.addEventListener('resize',queueFit);
    if(globalThis.ResizeObserver){const observer=new ResizeObserver(queueFit);for(const node of document.querySelectorAll('.topbar,.toolbar,#build-bar,#build-notebook,#storage-error,#treat-bar'))observer.observe(node);}
    document.addEventListener('cottage:art-ready',syncArcade);
    sync();fullscreenState();fit();
  }
  C.ImmersiveUI={init,sync,fit:queueFit,syncArcade,closePanels};
})(globalThis.Cottage);
