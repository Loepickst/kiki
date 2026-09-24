(function(C){
  'use strict';
  // Soft soil contact: filtered, unpitched noise. No oscillator or drum-like ring.
  // Generated locally at the device sample rate; no remote media or looping hiss.
  function soilSamples(sampleRate,variant=0){
    const samples=new Float32Array(Math.ceil(sampleRate*.18));let seed=137+variant*811,low=0,body=0,mid=0,friction=0;
    const soft=1-Math.exp(-2*Math.PI*(230+variant*12)/sampleRate),rough=1-Math.exp(-2*Math.PI*850/sampleRate);
    for(let i=0;i<samples.length;i++){
      seed=(Math.imul(seed,1664525)+1013904223)>>>0;
      const noise=seed/2147483648-1,t=i/sampleRate;
      low+=(noise-low)*soft;body+=(low-body)*soft;
      mid+=(noise-mid)*rough;friction+=(mid-friction)*rough;
      const attack=Math.min(1,t/.018),tail=Math.max(0,1-t/.18);
      // A broad soft press followed by a small scrape, with no sharp grain clicks.
      const press=attack*tail*tail*Math.exp(-t*9),scrape=Math.min(1,t/.035)*tail*tail;
      samples[i]=body*2.3*press+(friction-body)*.32*scrape;
    }
    return samples;
  }
  class CottageAudio {
    constructor(){this.context=null;this.sound=true;this.music=false;this.enabled=false;this.timer=null;this.notes=new Set();this.step=0;this.barkVoices=new Set();this.barkToken=0;this.barkBuffer=null;this.barkLoading=null;
      this.resumePending=null;this.onError=()=>{};this.barkVolume=.55;this.soilBuffers=[];this.footVoices=new Set();this.footSerial=0;}
    activate(){
      try{if(!this.context){const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return;this.context=new AudioContext();}this.enabled=true;
        // Start resume inside the gesture, then wait for it before playing a voice.
        if(this.context.state!=='running'&&!this.resumePending)this.resumePending=this.context.resume().catch(()=>{}).finally(()=>{this.resumePending=null;});
        this.prepareBark();this.syncMusic();
      }catch(error){/* bark() reports unavailable output without interrupting play. */}
    }
    configure(settings){this.sound=settings.sound;this.music=settings.music;if(!this.sound){this.stopBark();this.stopSteps();}this.syncMusic();}
    stopSteps(){for(const source of this.footVoices){try{source.stop();}catch(error){}}this.footVoices.clear();}
    soilStep(strength=1){
      const ctx=this.context;if(!this.sound||!this.enabled||!ctx||ctx.state!=='running'||document.hidden)return;
      if(!this.soilBuffers.length)for(let i=0;i<4;i++){const samples=soilSamples(ctx.sampleRate,i),buffer=ctx.createBuffer(1,samples.length,ctx.sampleRate);buffer.copyToChannel(samples,0);this.soilBuffers.push(buffer);}
      const index=this.footSerial++%4,source=ctx.createBufferSource(),gain=ctx.createGain();source.buffer=this.soilBuffers[index];
      gain.gain.value=.48*[1,.92,.96,.88][index]*Math.max(.3,Math.min(1.2,strength));source.connect(gain);gain.connect(ctx.destination);this.footVoices.add(source);
      source.onended=()=>{source.disconnect();gain.disconnect();this.footVoices.delete(source);};source.start();
    }
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
    async bark(onStart=()=>{},options={}){
      this.stopBark();const token=this.barkToken;
      if(document.hidden)return false;
      if(!this.sound){onStart();return false;}
      if(!this.context||!this.enabled){onStart();if(!options.silentFailure)this.onError('声音尚未启动，请再点一下柴犬。');return false;}
      let timeout;
      const buffer=await Promise.race([Promise.all([this.prepareBark(),this.resumePending]).then(([buffer])=>buffer),new Promise(resolve=>timeout=setTimeout(()=>resolve(null),1800))]);clearTimeout(timeout);
      if(token!==this.barkToken||document.hidden)return false;
      if(!this.sound){onStart();return false;}
      if(!buffer||this.context.state!=='running'){onStart();if(!options.silentFailure)this.onError(!buffer?'叫声加载失败，请刷新小屋后重试。':'声音尚未启动，请再点一下柴犬。');return false;}
      // Keep the real CC0 bark; soften its high end and vary two short calls,
      // rather than stacking identical samples or synthesizing an electronic yelp.
      const ctx=this.context,count=options.excited?2:1,serial=this.barkSerial=(this.barkSerial||0)+1;
      for(let i=0;i<count;i++){
        const source=ctx.createBufferSource(),gain=ctx.createGain(),low=ctx.createBiquadFilter(),high=ctx.createBiquadFilter(),compressor=ctx.createDynamicsCompressor();
        const rate=(options.puppy?1.1:1)+[0,.025,-.015][(serial+i)%3],start=ctx.currentTime+i*.48,duration=buffer.duration/rate;
        source.buffer=buffer;source.playbackRate.value=rate;
        high.type='highpass';high.frequency.value=100;high.Q.value=.5;low.type='lowpass';low.frequency.value=5200;low.Q.value=.55;
        compressor.threshold.value=-16;compressor.knee.value=12;compressor.ratio.value=2;compressor.attack.value=.003;compressor.release.value=.12;
        const volume=this.barkVolume*(i?.68:.85);gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(volume,start+.008);gain.gain.setValueAtTime(volume,start+Math.max(.01,duration-.06));gain.gain.linearRampToValueAtTime(0,start+duration);
        source.connect(high);high.connect(low);low.connect(compressor);compressor.connect(gain);gain.connect(ctx.destination);this.barkVoices.add(source);
        source.onended=()=>{this.barkVoices.delete(source);for(const node of [source,high,low,compressor,gain])node.disconnect();};source.start(start);
      }
      onStart();return true;
    }
    tone(frequency,duration,volume,type='sine',offset=0){
      if(!this.context||!this.enabled||document.hidden)return;
      const ctx=this.context,osc=ctx.createOscillator(),gain=ctx.createGain(),start=ctx.currentTime+offset;
      osc.type=type;osc.frequency.value=frequency;gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(volume,start+.012);gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
      osc.connect(gain);gain.connect(ctx.destination);osc.start(start);osc.stop(start+duration+.02);this.notes.add(osc);osc.onended=()=>this.notes.delete(osc);
    }
    effect(kind,strength=1){if(!this.sound)return;if(kind==='soilStep'){this.soilStep(strength);return;}const notes={step:[[160,.055,.016,'triangle']],page:[[740,.07,.018,'triangle'],[520,.06,.013,'triangle',.07]],buy:[[523,.16,.03],[659,.17,.027,'sine',.1],[784,.3,.022,'sine',.2]],water:[[880,.12,.022],[1100,.14,.019,'sine',.13]],pet:[[660,.16,.02],[880,.22,.014,'sine',.1]],click:[[440,.075,.015]]};for(const n of notes[kind]||notes.click)this.tone(...n);}
    syncMusic(){
      if(document.hidden){this.stopBark();this.stopSteps();}
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
  C.soilSamples=soilSamples;
})(globalThis.Cottage);
