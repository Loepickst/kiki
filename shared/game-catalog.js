/* The single registry for the game collection, offline bundle and cottage arcade.
   Add a game here only after its optional CottageArcade lifecycle is verified. */
(function(root){
 'use strict';
 const entries=[
  {id:'katsuyo',name:'动词变形',title:'活用道場',file:'动词变形游戏.html',mark:'動',scoreKey:'katsuyo-personal-best-v1',practice:'動詞変形',description:'指定された形へ、動詞をすばやく変える',accent:'#a84135',number:'壱'},
  {id:'joshi',name:'格助词',title:'助詞茶寮',file:'格助词练习游戏.html',mark:'助',scoreKey:'joshi-charyo-best-v1',practice:'格助詞',description:'短い語句に合う、格助詞を見切る',accent:'#58785e',number:'弐'},
  {id:'kanji',name:'汉字读音',title:'漢字道場',file:'汉字读音游戏.html',mark:'漢',scoreKey:'kanji-reading-best-v1',practice:'漢字読み',description:'漢字の読みを、ローマ字ですばやく入力',accent:'#b27e36',number:'参'},
  {id:'number',name:'数字读法',title:'数詞道場',file:'数字读法游戏.html',mark:'数',scoreKey:'number-reading-best-v1',practice:'数詞読み',description:'数字と助数詞の読みを、反射で答える',accent:'#6d6688',number:'肆'},
  {id:'keigo',name:'敬语练习',title:'敬語道場',file:'敬语练习游戏.html',mark:'敬',scoreKey:'keigo-dojo-best-v1',practice:'敬語総合',description:'変換・人物関係・構式から、敬語をすばやく見抜く',accent:'#49707a',number:'伍'}
 ];
 const ids=new Set(),files=new Set(),scores=new Set();
 for(const entry of entries){
  if(!/^[a-z][a-z0-9-]*$/.test(entry.id)||ids.has(entry.id)||files.has(entry.file)||scores.has(entry.scoreKey)||!entry.file.endsWith('.html')||/[\/\\?#]/.test(entry.file)||!/^#[a-f0-9]{6}$/i.test(entry.accent))throw new Error('Invalid or duplicate game catalog entry: '+entry.id);
  for(const key of ['name','title','mark','scoreKey','practice','description','number'])if(typeof entry[key]!=='string'||!entry[key].trim())throw new Error('Missing game catalog '+key+': '+entry.id);
  ids.add(entry.id);files.add(entry.file);scores.add(entry.scoreKey);
 }
 const games=Object.freeze(entries.map(entry=>Object.freeze({...entry,path:entry.file,subtitle:entry.title})));
 const catalog=Object.freeze({version:1,games});
 root.KikiGameCatalog=catalog;
 if(typeof module==='object'&&module.exports)module.exports=catalog;
})(globalThis);
