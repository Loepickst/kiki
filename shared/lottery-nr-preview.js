(function(window){
 'use strict';
 let sequence=0,dispose=null,host=null;
 const moduleUrl=new URL('nr-holographic/renderer.bundle.js?v=20260922-3',document.currentScript.src).href;
 function clear(){sequence++;if(dispose)dispose();dispose=null;if(host){host.remove();host=null;}document.getElementById('previewCard')?.classList.remove('is-nr-holo');}
 async function show(container,card){
  clear();if(card.rarity!=='NR')return;const token=sequence;
  host=document.createElement('div');host.className='nr-holo-stage';container.append(host);const target=host;
  try{const effect=await import(moduleUrl);if(token!==sequence)return;document.getElementById('previewCard').classList.add('is-nr-holo');dispose=effect.mount(target,card);}catch(error){if(token===sequence)clear();}
 }
 window.KikiNRPreview=Object.freeze({show,clear});
})(window);
