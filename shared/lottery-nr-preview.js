(function(window){
 'use strict';
 let sequence=0,dispose=null,host=null,loading=null;
 const scriptUrl=document.currentScript.src;
 const rendererUrl=new URL('nr-holographic/renderer.living-v3.js?v=20260922-8',scriptUrl).href;
 const assetBase=new URL('../assets/nr-holographic/',scriptUrl).href;
 function loadRenderer(){
  if(window.KikiNRRenderer?.version==='20260922-8')return Promise.resolve(window.KikiNRRenderer);
  if(loading)return loading;
  loading=new Promise((resolve,reject)=>{
   const script=document.createElement('script');script.src=rendererUrl;script.async=true;
   script.onload=()=>{if(window.KikiNRRenderer?.version==='20260922-8')resolve(window.KikiNRRenderer);else{script.remove();loading=null;reject(new Error('NR renderer unavailable'));}};
   script.onerror=()=>{script.remove();loading=null;reject(new Error('NR renderer failed to load: '+rendererUrl));};
   document.head.append(script);
  });return loading;
 }
 let embeddedLoading=null;
 function loadEmbeddedAssets(){
  if(window.KikiWenyuAssets)return Promise.resolve(window.KikiWenyuAssets);
  if(embeddedLoading)return embeddedLoading;
  embeddedLoading=new Promise((resolve,reject)=>{
   const script=document.createElement('script');script.src=new URL('nr-holographic/wenyu-assets.js?v=20260922-8',scriptUrl).href;
   script.onload=()=>{if(window.KikiWenyuAssets)resolve(window.KikiWenyuAssets);else{embeddedLoading=null;script.remove();reject(new Error('Wenyu assets unavailable'));}};
   script.onerror=()=>{embeddedLoading=null;script.remove();reject(new Error('Wenyu assets failed to load'));};
   document.head.append(script);
  });return embeddedLoading;
 }
 function clear(){sequence++;if(dispose)dispose();dispose=null;if(host){host.remove();host=null;}document.getElementById('previewCard')?.classList.remove('is-nr-holo');}
 async function show(container,card){
  clear();if(card.rarity!=='NR')return;const token=sequence;
  host=document.createElement('div');host.className='nr-holo-stage';container.append(host);const target=host;
  try{const [effect,embeddedAssets]=await Promise.all([loadRenderer(),location.protocol==='file:'&&card.id==='nr_wenyu'?loadEmbeddedAssets():Promise.resolve(null)]);if(token!==sequence)return;document.getElementById('previewCard').classList.add('is-nr-holo');dispose=effect.mount(target,card,{assetBase,embeddedAssets});}catch(error){console.error('[NR preview]',error);if(token===sequence)clear();}
 }
 window.KikiNRPreview=Object.freeze({show,clear,getStatus:()=>dispose?.getState()||null});
})(window);
