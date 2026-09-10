import * as THREE from '../vendor/three.module.min.js';
import {ROOM,ASSETS} from './config.js';
export async function createRoom(){
  const scene=new THREE.Scene();scene.background=new THREE.Color(ROOM.background);
  const loader=new THREE.TextureLoader(),textures={};
  await Promise.all(['floor','wood','wall','cloth','cushion','blanket','book','window','art','shadow','leaves'].map(async name=>{
    const t=await loader.loadAsync(new URL(ASSETS+name+'.png',import.meta.url).href);
    t.magFilter=THREE.NearestFilter;t.minFilter=THREE.NearestFilter;t.generateMipmaps=false;t.colorSpace=THREE.SRGBColorSpace;textures[name]=t;
  }));
  const materials=new Set(),geometries=new Set(),targets=[],roots={};
  const mat=(color,map,extra={})=>{const m=new THREE.MeshLambertMaterial({color,map:map?textures[map]:null,...extra});materials.add(m);return m;};
  const wood=mat('#ffffff','wood'),edge=mat('#866c52'),lightWood=mat('#d1b895'),wall=mat('#ffffff','wall'),trim=mat('#d5d8c9');
  const joinery=mat('#9a7c58'),endgrain=mat('#af916d'),recess=mat('#82755e');
  // Timber texels share a world scale with the dog's 2 px clusters (~16 per unit).
  textures.wood.wrapS=textures.wood.wrapT=THREE.RepeatWrapping;
  function mesh(geo,m,parent=scene){geometries.add(geo);const o=new THREE.Mesh(geo,m);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
  function box(x,y,z,w,h,d,m,parent=scene){
    const geo=new THREE.BoxGeometry(w,h,d);
    if(m.map===textures.wood){const uv=geo.attributes.uv,tw=textures.wood.image.width,th=textures.wood.image.height;for(let face=0;face<6;face++){const [a,b]=face<2?[d,h]:face<4?[w,d]:[w,h];for(let k=0;k<4;k++){const i=face*4+k;uv.setXY(i,uv.getX(i)*a*16/tw,uv.getY(i)*b*16/th);}}}
    const o=mesh(geo,m,parent);o.position.set(x,y,z);return o;
  }
  function plane(x,y,z,w,h,m,rotation=0,parent=scene){const o=mesh(new THREE.PlaneGeometry(w,h),m,parent);o.position.set(x,y,z);o.rotation.x=rotation;return o;}
  function group(id){const g=new THREE.Group();g.userData.interaction=id;roots[id]=g;scene.add(g);targets.push(g);return g;}
  function cushion(x,y,z,w,d,tex,parent=scene){
    // Clipped corners and a raised perimeter explain the fabric; the seat remains y=.23.
    const rose=tex==='cloth',side=mat(rose?'#a77e70':'#7b9081'),piping=mat(rose?'#c39a87':'#a9b7a0'),top=mat('#ffffff',tex);
    const shape=new THREE.Shape(),c=.15;
    shape.moveTo(-w/2+c,-d/2);shape.lineTo(w/2-c,-d/2);shape.lineTo(w/2,-d/2+c);shape.lineTo(w/2,d/2-c);shape.lineTo(w/2-c,d/2);shape.lineTo(-w/2+c,d/2);shape.lineTo(-w/2,d/2-c);shape.lineTo(-w/2,-d/2+c);shape.closePath();
    const geo=new THREE.ExtrudeGeometry(shape,{depth:.13,bevelEnabled:false});geo.rotateX(-Math.PI/2);
    const base=mesh(geo,side,parent);base.position.set(x,y+.045,z);
    // Broad seat, compact padded rim, recessed top rather than several stacked rectangles.
    const seat=box(x,y+.20,z,w-.18,.06,d-.18,top,parent);
    box(x,y+.20,z-d/2+.08,w-.30,.065,.12,piping,parent);box(x,y+.20,z+d/2-.08,w-.30,.065,.12,piping,parent);
    box(x-w/2+.08,y+.20,z,.12,.065,d-.30,piping,parent);box(x+w/2-.08,y+.20,z,.12,.065,d-.30,piping,parent);
    return seat;
  }
  function contact(x,z,w,d,opacity=.12,y=.006){
    const m=mat('#566055','shadow',{transparent:true,opacity,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1});
    const o=plane(x,y,z,w,d,m,-Math.PI/2);o.castShadow=false;return o;
  }
  // A complete square slab, visible timber sides and restrained lower molding.
  box(0,-.34,0,8.16,.16,8.16,mat('#736455'));
  box(0,-.17,0,8.08,.24,8.08,wood);
  box(0,-.025,0,8.2,.07,8.2,lightWood);
  const floor=box(0,.012,0,8,.035,8,mat('#ffffff','floor'));floor.userData.interaction='floor';targets.push(floor);
  box(0,-.28,4.06,8.12,.035,.035,edge);box(4.06,-.28,0,.035,.035,8.12,edge);
  // Low-contrast joinery on the slab side, not stonework or individual outlined blocks.
  for(const x of [-3.4,-1.7,0,1.7,3.4])box(x,-.15,4.065,.025,.16,.008,mat('#a58b71'));
  // A high rear wall anchors the study area; the side cutaway opens toward the viewer.
  box(0,1.69,-4,8.12,3.36,.16,wall);
  box(-4,1.36,-1.02,.16,2.70,6.04,mat('#e2e8dd','wall'));
  box(-4,.60,3.0,.16,1.18,2.0,mat('#e2e8dd','wall'));
  box(0,3.39,-4,8.22,.09,.22,trim);
  box(-4,2.75,-1.02,.22,.09,6.10,trim);box(-4,1.22,3.0,.22,.08,2.1,trim);
  box(-3.96,1.68,-3.95,.12,3.36,.12,trim);box(-3.96,1.36,2.0,.12,2.70,.12,trim);box(-3.96,.60,3.97,.12,1.18,.12,trim);
  box(4,1.68,-3.95,.12,3.35,.12,trim);
  box(0,.13,-3.87,8,.22,.12,wood);box(-3.87,.13,0,.12,.22,8,wood);
  // One low rail, without the repeated hairline panel seams.
  box(0,.55,-3.88,7.8,.60,.045,mat('#bdc9bc'));box(-3.88,.55,0,.045,.60,7.8,mat('#c5cfc1'));
  box(0,.88,-3.84,7.9,.06,.07,trim);box(-3.84,.88,0,.07,.06,7.9,trim);
  // Inset glazing: a dark reveal, narrow jambs and a sill tied into the wall.
  const wx=-1.6,wy=2.22,wz=-3.835;
  box(wx,wy,-3.83,3.04,1.74,.07,mat('#81938a'));
  plane(wx,wy,-3.785,2.78,1.48,mat('#ffffff','window'));
  for(const x of [wx-1.47,wx+1.47])box(x,wy,-3.72,.13,1.85,.19,wood);
  for(const y of [wy-.85,wy+.85])box(wx,y,-3.72,3.06,.13,.19,wood);
  box(wx,wy,-3.665,.10,1.63,.09,lightWood);box(wx,wy-.04,-3.665,2.87,.08,.09,lightWood);
  box(wx,1.29,-3.67,3.20,.10,.39,wood);box(wx,1.35,-3.64,3.26,.035,.43,lightWood);
  // Curtain folds are broad pixel-sized planes, set inside the jambs.
  const linen=mat('#e2e4d8'),fold=mat('#bcc5b7');
  for(const side of [-1,1])for(let i=0;i<2;i++)box(wx+side*(1.32+i*.10),2.20,-3.55,.13,1.47-(i%2)*.08,.09,i%2?fold:linen).castShadow=false;
  // Only a little window-sill plant: low-resolution, alpha-tested leaf planes.
  const plant=new THREE.Group();plant.position.set(-2.83,1.37,-3.56);scene.add(plant);
  const pot=mesh(new THREE.CylinderGeometry(.17,.12,.27,8),mat('#b99a81'),plant);pot.position.y=.135;
  const soil=mesh(new THREE.CylinderGeometry(.14,.14,.018,8),mat('#756c56'),plant);soil.position.y=.275;
  const leafMat=mat('#ffffff','leaves',{alphaTest:.5,side:THREE.DoubleSide});
  const leaf=plane(0,.55,0,.58,.65,leafMat,0,plant);leaf.castShadow=false;
  const leaf2=plane(0,.55,0,.45,.62,leafMat,0,plant);leaf2.rotation.y=Math.PI/2;leaf2.castShadow=false;
  // The same study anchor and footprint; a thinner top exposes connected aprons and feet.
  const desk=group('desk'),dc=ROOM.furniture.find(f=>f.id==='desk').position;
  box(dc[0],.765,dc[2]+.035,3.08,.11,1.36,wood,desk);
  box(dc[0],.824,dc[2]+.035,2.96,.018,1.25,wood,desk);
  box(dc[0],.728,-1.94,3.08,.045,.045,endgrain,desk);
  // Aprons touch the underside and join all four posts. Dark faces indicate construction.
  box(dc[0],.64,-2.13,2.71,.18,.12,joinery,desk);box(dc[0],.64,-3.10,2.71,.18,.12,joinery,desk);
  for(const x of [-2.95,-.35]){
    box(x,.36,-2.15,.19,.70,.19,wood,desk);box(x,.36,-3.12,.19,.70,.19,wood,desk);
    box(x,.64,-2.635,.13,.18,.97,joinery,desk);
    box(x,.23,-2.635,.10,.10,.99,endgrain,desk);
    // One visible mortise cap on each front joint, no ornamental rows of dots.
    box(x,.65,-2.048,.09,.09,.017,endgrain,desk);
  }
  contact(-1.65,-2.65,3.4,1.65,.15);
  const book=plane(-1.4,.866,-2.22,.80,.53,mat('#ffffff','book'),-Math.PI/2,desk);book.rotation.z=-.09;
  box(-1.4,.844,-2.22,.84,.035,.56,mat('#7f8d7e'),desk);
  box(-.56,.85,-2.97,.38,.045,.28,mat('#d9dacc'),desk);box(-.56,.879,-2.97,.38,.014,.28,mat('#ede9d9'),desk);box(-.56,.89,-2.97,.07,.012,.29,mat('#849daa'),desk);
  cushion(-1.45,0,-1.26,1.32,1.12,'cushion');contact(-1.45,-1.26,1.45,1.25,.09);
  const lamp=group('lamp'),lampMetal=mat('#697f76');
  const base=mesh(new THREE.CylinderGeometry(.23,.25,.06,12),lampMetal,lamp);base.position.set(-2.67,.875,-2.83);
  box(-2.67,1.13,-2.83,.048,.5,.048,lampMetal,lamp);box(-2.59,1.37,-2.83,.22,.045,.045,lampMetal,lamp);
  const shade=mesh(new THREE.CylinderGeometry(.18,.31,.23,8,1,true),lampMetal,lamp);shade.position.set(-2.47,1.32,-2.83);
  const bulb=mesh(new THREE.CircleGeometry(.25,8),mat('#e6d8b2'),lamp);bulb.position.set(-2.47,1.205,-2.83);bulb.rotation.x=-Math.PI/2;
  const lampLight=new THREE.PointLight('#fff2d4',.65,2.6,2);lampLight.position.set(-2.47,1.15,-2.83);scene.add(lampLight);
  // A shallower, lower cabinet leaves the desk/window as the back wall's main silhouette.
  // All surfaces stay inside its existing collision footprint; interaction anchors are unchanged.
  const shelf=group('shelf'),sx=2.05,sz=-3.08;
  box(sx,.77,sz-.38,2.64,1.33,.065,recess,shelf);
  for(const x of [sx-1.28,sx+1.28])box(x,.77,sz,.14,1.43,.86,wood,shelf);
  for(const y of [.15,.77,1.46]){
    box(sx,y,sz,2.68,.10,.89,wood,shelf);
    box(sx,y-.04,sz+.457,2.68,.04,.025,joinery,shelf);
  }
  box(sx,1.516,sz,2.58,.018,.80,wood,shelf);
  for(const x of [sx-1.08,sx+1.08])for(const z of [sz-.25,sz+.25])box(x,.08,z,.15,.14,.15,edge,shelf);
  // One partition supports the top; open bays read as real shelf space.
  box(2.30,1.13,sz,.10,.60,.79,wood,shelf);
  const cols=['#82998b','#8f9da6','#b3a185','#a1ad96','#ae8f86'];
  function spine(x,y,w,h,c,lean=0){
    const stack=new THREE.Group();stack.position.set(x,y,sz+.03);stack.rotation.z=lean;shelf.add(stack);
    box(0,h/2,0,w,h,.52,mat(c),stack);
    // Broad paper tab, only one per spine at the common material texel scale.
    box(0,h-.10,.267,Math.max(.0625,w-.05),.0625,.012,mat('#d9d7c1'),stack);
  }
  let bx=.99;[[.17,.45,0],[.14,.50,1],[.22,.40,2],[.13,.48,3],[.16,.44,0]].forEach(([w,h,c],i)=>{spine(bx,.83,w,h,cols[c],i===4?-.08:0);bx+=w+.03;});
  bx=2.63;[[.19,.43,1],[.13,.38,0],[.21,.49,2]].forEach(([w,h,c])=>{spine(bx,.83,w,h,cols[c]);bx+=w+.04;});
  bx=1.02;[[.19,.43,2],[.15,.38,0],[.18,.41,4],[.14,.47,1]].forEach(([w,h,c])=>{spine(bx,.21,w,h,cols[c]);bx+=w+.035;});
  box(2.52,.28,sz+.03,.71,.13,.54,mat('#809387'),shelf);box(2.57,.40,sz+.03,.64,.10,.51,mat('#c3b298'),shelf);box(2.55,.35,sz+.307,.55,.05,.012,mat('#e2dfd0'),shelf);
  contact(sx,sz,2.95,1.21,.14);
  // Low resting mattress with a folded woven blanket to one side, not an enclosed doghouse.
  const bed=group('bed');cushion(2.23,0,1.25,2.1,1.68,'cloth',bed);contact(2.23,1.25,2.35,1.92,.12);
  const blanket=box(2.88,.268,1.25,.59,.075,1.36,mat('#ffffff','blanket'),bed);box(2.88,.315,1.53,.59,.02,.46,mat('#a9b7b8'),bed);box(2.88,.285,1.918,.55,.045,.016,mat('#617f8a'),bed);
  // Small glazed bowl, matte rather than metallic.
  const water=group('water');const bowl=mesh(new THREE.CylinderGeometry(.30,.25,.14,12),mat('#d2ddd9'),water);bowl.position.set(3.33,.09,-1.2);
  const waterSurface=mesh(new THREE.CircleGeometry(.25,12),mat('#8daeb4'),water);waterSurface.position.set(3.33,.166,-1.2);waterSurface.rotation.x=-Math.PI/2;
  contact(3.33,-1.2,.8,.65,.13);
  // One small framed print on the side wall.
  const picture=new THREE.Group();picture.position.set(-3.84,1.83,.35);picture.rotation.y=Math.PI/2;scene.add(picture);
  box(0,0,0,.74,.90,.085,wood,picture);plane(0,0,.048,.60,.76,mat('#ffffff','art'),0,picture);
  // Low-contrast window light and pixel contacts anchor the scene without noisy shadows.
  const ambient=new THREE.HemisphereLight('#f8f9f4','#d5d8d0',2.6);scene.add(ambient);
  const fill=new THREE.DirectionalLight('#f5f6f2',.65);fill.position.set(8,4,10);scene.add(fill);
  const sunlight=new THREE.DirectionalLight('#fffaf2',1.5);sunlight.position.set(-3,7,3);sunlight.castShadow=true;
  sunlight.shadow.mapSize.set(1024,1024);Object.assign(sunlight.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:20});sunlight.shadow.bias=-.0005;sunlight.shadow.normalBias=.03;scene.add(sunlight);
  // A translucent shadow on the neutral background retains the slab's miniature presence.
  contact(.18,.25,9.2,8.9,.09,-.435);
  const bounds=new THREE.Box3(new THREE.Vector3(-4.18,-.45,-4.18),new THREE.Vector3(4.18,3.46,4.18));
  return {scene,textures,targets,roots,floor,bounds,box,plane,mat,contact,lampLight,
    update(t,reduced){const phase=t%24,envelope=!reduced&&phase<6?Math.sin(phase/6*Math.PI):0;plant.rotation.z=Math.sin(t*1.2)*.016*envelope;leaf.rotation.y=.3+Math.sin(t*.8)*.05*envelope;},
    dispose(){for(const g of geometries)g.dispose();for(const m of materials)m.dispose();for(const t of Object.values(textures))t.dispose();}
  };
}
