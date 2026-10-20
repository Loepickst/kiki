/* Copy a selected GitHub checkout to a Pages artifact; media stays in that same commit. */
'use strict';
const fs=require('node:fs'),path=require('node:path');
function router(base){
 return `/* Only this Pages artifact redirects listening audio. Source checkout keeps local files. */\n(()=>{\n'use strict';\nconst base=${JSON.stringify(base)},site=new URL('../',document.currentScript.src);\nfunction route(value){try{const u=new URL(String(value),document.baseURI);if(u.origin!==site.origin)return value;let p=u.pathname.startsWith(site.pathname)?u.pathname.slice(site.pathname.length):u.pathname.replace(/^\\//,'');if(!/^exam\\/listening\\/.*\\.mp3$/i.test(p))return value;return new URL(p+u.search,base).href;}catch{return value;}}\nconst NativeAudio=window.Audio;function Audio(source){const a=new NativeAudio();if(arguments.length)a.src=route(source);return a;}Audio.prototype=NativeAudio.prototype;Object.setPrototypeOf(Audio,NativeAudio);window.Audio=Audio;\nfor(const Type of [HTMLMediaElement,HTMLSourceElement]){const descriptor=Object.getOwnPropertyDescriptor(Type.prototype,'src');if(descriptor?.set)Object.defineProperty(Type.prototype,'src',{...descriptor,set(value){descriptor.set.call(this,route(value));}});const set=Type.prototype.setAttribute;Type.prototype.setAttribute=function(name,value){return set.call(this,name,String(name).toLowerCase()==='src'?route(value):value);};}\ndocument.addEventListener('loadstart',event=>{const a=event.target;if(a instanceof HTMLMediaElement&&a.src){const next=route(a.src);if(next!==a.src)a.src=next;}},true);\nwindow.KijiGitHubMedia={resolve:route};\n})();\n`;
}
function prepare({root=path.resolve(__dirname,'..'),destination=path.join(root,'_site'),mediaBase=process.env.KIJI_GITHUB_MEDIA_BASE}={}){
 if(!fs.existsSync(path.join(root,'README.md'))||!fs.readFileSync(path.join(root,'README.md'),'utf8').startsWith('# Kiji · GitHub 选择更新版'))throw Error('只允许从已生成的 GitHub 选择更新版构建，不能把原工程整包放入 Pages。');
 if(!mediaBase){const repo=process.env.GITHUB_REPOSITORY,ref=process.env.GITHUB_SHA;if(!/^[\w.-]+\/[\w.-]+$/.test(repo||'')||!/^[a-f0-9]{40}$/i.test(ref||''))throw Error('需要明确同一 Git 仓库和提交版本，或 KIJI_GITHUB_MEDIA_BASE；不会默认读取正式网站。');mediaBase=`https://raw.githubusercontent.com/${repo}/${ref}/`;}
 mediaBase=new URL(mediaBase).href;if(!mediaBase.endsWith('/'))mediaBase+='/';
 if(fs.existsSync(destination))throw Error('输出目录已存在，请保留或移走后重建：'+destination);
 fs.mkdirSync(destination,{recursive:true});let bytes=0,files=0,externalAudioFiles=0,externalAudioBytes=0;
 function walk(dir,relative=''){
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
   if((entry.name.startsWith('.')&&entry.name!=='.nojekyll')||['scripts','_site','node_modules'].includes(entry.name))continue;
   const p=relative?relative+'/'+entry.name:entry.name;if(entry.isSymbolicLink())throw Error('不跟随符号链接：'+p);
   const from=path.join(dir,entry.name);if(entry.isDirectory()){walk(from,p);continue;}
   if(/^exam\/listening\/.*\.mp3$/i.test(p)){externalAudioFiles++;externalAudioBytes+=fs.statSync(from).size;continue;}
   const to=path.join(destination,p);fs.mkdirSync(path.dirname(to),{recursive:true});
   if(p.endsWith('.html')){
    const script=path.posix.relative(path.posix.dirname(p),'shared/github-pages-audio.js');
    let text=fs.readFileSync(from,'utf8');
    if(/<head\b[^>]*>/i.test(text))text=text.replace(/<head\b[^>]*>/i,match=>match+'\n<script src="'+script+'"></script>');
    fs.writeFileSync(to,text);
   }else fs.copyFileSync(from,to,fs.constants.COPYFILE_FICLONE);
   files++;bytes+=fs.statSync(to).size;
  }
 }
 walk(root);
 const runtime=router(mediaBase);fs.mkdirSync(path.join(destination,'shared'),{recursive:true});fs.writeFileSync(path.join(destination,'shared/github-pages-audio.js'),runtime);files++;bytes+=Buffer.byteLength(runtime);
 if(bytes>1000000000)throw Error('Pages 成品仍超过 1 GB，已停止：'+bytes);
 const result={files,bytes,externalAudioFiles,externalAudioBytes,mediaBase};fs.writeFileSync(path.join(destination,'pages-build.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));return result;
}
if(require.main===module)prepare();module.exports={prepare,router};
