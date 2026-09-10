(function(C){
  'use strict';
  class CottageAudio {
    constructor(){this.context=null;this.sound=true;this.music=false;this.enabled=false;this.timer=null;this.notes=new Set();this.step=0;this.barkVoices=new Set();this.barkToken=0;this.barkBuffer=null;this.barkLoading=null;
      this.resumePending=null;this.onError=()=>{};this.barkVolume=.55;}
    activate(){
      try{if(!this.context){const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return;this.context=new AudioContext();}this.enabled=true;
        // Start resume inside the gesture, then wait for it before playing a voice.
        if(this.context.state!=='running'&&!this.resumePending)this.resumePending=this.context.resume().catch(()=>{}).finally(()=>{this.resumePending=null;});
        this.prepareBark();this.syncMusic();
      }catch(error){/* bark() reports unavailable output without interrupting play. */}
    }
    configure(settings){this.sound=settings.sound;this.music=settings.music;if(!this.sound)this.stopBark();this.syncMusic();}
    prepareBark(){
      if(!this.context)return Promise.resolve(null);
      if(this.barkBuffer)return Promise.resolve(this.barkBuffer);
      if(!this.barkLoading)this.barkLoading=Promise.resolve().then(()=>{
        if(!C.BarkSample)throw new Error('Missing bark sample');
        const bytes=Uint8Array.from(atob(C.BarkSample),c=>c.charCodeAt(0));
        return this.context.decodeAudioData(bytes.buffer);
      }).then(buffer=>this.barkBuffer=buffer).catch(()=>null).finally(()=>{this.barkLoading=null;});
      return this.barkLoading;
    }
    stopBark(){
      this.barkToken++;
      for(const voice of this.barkVoices){try{voice.stop();}catch(error){}}
      this.barkVoices.clear();
    }
    async bark(onStart=()=>{}){
      this.stopBark();const token=this.barkToken;
      if(document.hidden)return false;
      if(!this.sound){onStart();return false;}
      if(!this.context||!this.enabled){onStart();this.onError('声音尚未启动，请再点一下柴犬。');return false;}
      let timeout;
      const buffer=await Promise.race([Promise.all([this.prepareBark(),this.resumePending]).then(([buffer])=>buffer),new Promise(resolve=>timeout=setTimeout(()=>resolve(null),1800))]);clearTimeout(timeout);
      if(token!==this.barkToken||document.hidden)return false;
      if(!this.sound){onStart();return false;}
      if(!buffer||this.context.state!=='running'){onStart();this.onError(!buffer?'叫声加载失败，请刷新小屋后重试。':'声音尚未启动，请再点一下柴犬。');return false;}
      const source=this.context.createBufferSource(),gain=this.context.createGain();source.buffer=buffer;gain.gain.value=this.barkVolume;
      source.connect(gain);gain.connect(this.context.destination);this.barkVoices.add(source);
      source.onended=()=>{this.barkVoices.delete(source);source.disconnect();gain.disconnect();};
      source.start();onStart();return true;
    }
    tone(frequency,duration,volume,type='sine',offset=0){
      if(!this.context||!this.enabled||document.hidden)return;
      const ctx=this.context,osc=ctx.createOscillator(),gain=ctx.createGain(),start=ctx.currentTime+offset;
      osc.type=type;osc.frequency.value=frequency;gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(volume,start+.012);gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
      osc.connect(gain);gain.connect(ctx.destination);osc.start(start);osc.stop(start+duration+.02);this.notes.add(osc);osc.onended=()=>this.notes.delete(osc);
    }
    effect(kind){if(!this.sound)return;const notes={step:[[160,.055,.016,'triangle']],page:[[740,.07,.018,'triangle'],[520,.06,.013,'triangle',.07]],buy:[[523,.16,.03],[659,.17,.027,'sine',.1],[784,.3,.022,'sine',.2]],water:[[880,.12,.022],[1100,.14,.019,'sine',.13]],pet:[[660,.16,.02],[880,.22,.014,'sine',.1]],click:[[440,.075,.015]]};for(const n of notes[kind]||notes.click)this.tone(...n);}
    syncMusic(){
      if(document.hidden)this.stopBark();
      const play=this.music&&this.enabled&&!document.hidden;
      if(play&&!this.timer){this.playBeat();this.timer=setInterval(()=>this.playBeat(),440);}
      if(!play&&this.timer){clearInterval(this.timer);this.timer=null;for(const osc of this.notes){try{osc.stop();}catch(error){}}this.notes.clear();}
    }
    playBeat(){
      // Original, gently repeating pentatonic music; no remote audio dependency.
      const melody=[523,0,659,784,659,0,587,0,523,0,440,523,392,0,0,0,440,0,523,659,784,0,659,587,523,0,440,392,440,0,0,0];
      const note=melody[this.step%melody.length];if(note)this.tone(note,.85,.023);if(this.step%8===0){const bass=[131,110,147,98][Math.floor(this.step/8)%4];this.tone(bass,2.8,.021,'triangle');this.tone(bass*1.5,2,.009);}
      this.step++;
    }
  }
  C.CottageAudio=CottageAudio;
})(globalThis.Cottage);
