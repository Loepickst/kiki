(()=>{var jZ="180";var vZ=0,RQ=1,yZ=2;var MQ=1,fZ=2,Y8=3,y8=0,j0=1,u0=2,f8=0,$6=1,kQ=2,DQ=3,LQ=4,hZ=5,I9=100,bZ=101,xZ=102,gZ=103,pZ=104,lZ=200,dZ=201,mZ=202,uZ=203,cZ=204,nZ=205,sZ=206,oZ=207,iZ=208,aZ=209,rZ=210,tZ=211,eZ=212,JW=213,QW=214,r6=0,t6=1,e6=2,Z6=3,J7=4,Q7=5,$7=6,Z7=7,$W=0,ZW=1,WW=2,J8=0,HW=1,YW=2,XW=3,KW=4,UW=5,GW=6,EW=7;var P9=301,J9=302,W7=303,H7=304,W6=306,w9=1000,Y7=1001,X7=1002,z8=1003,K7=1004;var Q9=1005;var Q8=1006,T9=1007;var B8=1008;var h8=1009,qW=1010,NW=1011,H6=1012,VQ=1013,A9=1014,b8=1015,Y6=1016,zQ=1017,BQ=1018,S9=1020,OW=35902,FW=35899,RW=1021,MW=1022,X8=1023,U7=1026,X6=1027,kW=1028,_Q=1029,DW=1030,CQ=1031;var IQ=1033,G7=33776,E7=33777,q7=33778,N7=33779,PQ=35840,wQ=35841,TQ=35842,AQ=35843,SQ=36196,jQ=37492,vQ=37496,yQ=37808,fQ=37809,hQ=37810,bQ=37811,xQ=37812,gQ=37813,pQ=37814,lQ=37815,dQ=37816,mQ=37817,uQ=37818,cQ=37819,nQ=37820,sQ=37821,oQ=36492,iQ=36494,aQ=36495,rQ=36283,tQ=36284,eQ=36285,J$=36286;var Q$=2300,O7=2301;var $$=0,K6=1,j9=2;var LW=3201;var VW=0,zW=1,_8="",K8="srgb",I0="srgb-linear",Z$="linear",Z0="srgb";var BW=512,_W=513,CW=514,W$=515,IW=516,PW=517,wW=518,TW=519;var H$="300 es",Y$=2000;class x8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,H=Z.length;W<H;W++)Z[W].call(this,J);J.target=null}}}var L0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],a$=1234567,J6=Math.PI/180,t8=180/Math.PI;function t0(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(L0[J&255]+L0[J>>8&255]+L0[J>>16&255]+L0[J>>24&255]+"-"+L0[Q&255]+L0[Q>>8&255]+"-"+L0[Q>>16&15|64]+L0[Q>>24&255]+"-"+L0[$&63|128]+L0[$>>8&255]+"-"+L0[$>>16&255]+L0[$>>24&255]+L0[Z&255]+L0[Z>>8&255]+L0[Z>>16&255]+L0[Z>>24&255]).toLowerCase()}function mJ(J,Q,$){return Math.max(Q,Math.min($,J))}function X$(J,Q){return(J%Q+Q)%Q}function WY(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function HY(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function Q6(J,Q,$){return(1-$)*J+$*Q}function YY(J,Q,$,Z){return Q6(J,Q,1-Math.exp(-$*Z))}function XY(J,Q=1){return Q-Math.abs(X$(J,Q*2)-Q)}function KY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function UY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function GY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function EY(J,Q){return J+Math.random()*(Q-J)}function qY(J){return J*(0.5-Math.random())}function NY(J){if(J!==void 0)a$=J;let Q=a$+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function OY(J){return J*J6}function FY(J){return J*t8}function RY(J){return(J&J-1)===0&&J!==0}function MY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function kY(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function DY(J,Q,$,Z,W){let{cos:H,sin:Y}=Math,X=H($/2),K=Y($/2),U=H((Q+Z)/2),G=Y((Q+Z)/2),E=H((Q-Z)/2),q=Y((Q-Z)/2),F=H((Z-Q)/2),k=Y((Z-Q)/2);switch(W){case"XYX":J.set(X*G,K*E,K*q,X*U);break;case"YZY":J.set(K*q,X*G,K*E,X*U);break;case"ZXZ":J.set(K*E,K*q,X*G,X*U);break;case"XZX":J.set(X*G,K*k,K*F,X*U);break;case"YXY":J.set(K*F,X*G,K*k,X*U);break;case"ZYZ":J.set(K*k,K*F,X*G,X*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function r0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function tJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var g8={DEG2RAD:J6,RAD2DEG:t8,generateUUID:t0,clamp:mJ,euclideanModulo:X$,mapLinear:WY,inverseLerp:HY,lerp:Q6,damp:YY,pingpong:XY,smoothstep:KY,smootherstep:UY,randInt:GY,randFloat:EY,randFloatSpread:qY,seededRandom:NY,degToRad:OY,radToDeg:FY,isPowerOfTwo:RY,ceilPowerOfTwo:MY,floorPowerOfTwo:kY,setQuaternionFromProperEuler:DY,normalize:tJ,denormalize:r0};class xJ{constructor(J=0,Q=0){xJ.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=mJ(this.x,J.x,Q.x),this.y=mJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=mJ(this.x,J,Q),this.y=mJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(mJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(mJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,H=this.y-J.y;return this.x=W*$-H*Z+J.x,this.y=W*Z+H*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $8{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,H,Y){let X=$[Z+0],K=$[Z+1],U=$[Z+2],G=$[Z+3],E=W[H+0],q=W[H+1],F=W[H+2],k=W[H+3];if(Y===0){J[Q+0]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G;return}if(Y===1){J[Q+0]=E,J[Q+1]=q,J[Q+2]=F,J[Q+3]=k;return}if(G!==k||X!==E||K!==q||U!==F){let M=1-Y,N=X*E+K*q+U*F+G*k,O=N>=0?1:-1,I=1-N*N;if(I>Number.EPSILON){let _=Math.sqrt(I),S=Math.atan2(_,N*O);M=Math.sin(M*S)/_,Y=Math.sin(Y*S)/_}let L=Y*O;if(X=X*M+E*L,K=K*M+q*L,U=U*M+F*L,G=G*M+k*L,M===1-Y){let _=1/Math.sqrt(X*X+K*K+U*U+G*G);X*=_,K*=_,U*=_,G*=_}}J[Q]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,W,H){let Y=$[Z],X=$[Z+1],K=$[Z+2],U=$[Z+3],G=W[H],E=W[H+1],q=W[H+2],F=W[H+3];return J[Q]=Y*F+U*G+X*q-K*E,J[Q+1]=X*F+U*E+K*G-Y*q,J[Q+2]=K*F+U*q+Y*E-X*G,J[Q+3]=U*F-Y*G-X*E-K*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:H}=J,Y=Math.cos,X=Math.sin,K=Y($/2),U=Y(Z/2),G=Y(W/2),E=X($/2),q=X(Z/2),F=X(W/2);switch(H){case"XYZ":this._x=E*U*G+K*q*F,this._y=K*q*G-E*U*F,this._z=K*U*F+E*q*G,this._w=K*U*G-E*q*F;break;case"YXZ":this._x=E*U*G+K*q*F,this._y=K*q*G-E*U*F,this._z=K*U*F-E*q*G,this._w=K*U*G+E*q*F;break;case"ZXY":this._x=E*U*G-K*q*F,this._y=K*q*G+E*U*F,this._z=K*U*F+E*q*G,this._w=K*U*G-E*q*F;break;case"ZYX":this._x=E*U*G-K*q*F,this._y=K*q*G+E*U*F,this._z=K*U*F-E*q*G,this._w=K*U*G+E*q*F;break;case"YZX":this._x=E*U*G+K*q*F,this._y=K*q*G+E*U*F,this._z=K*U*F-E*q*G,this._w=K*U*G-E*q*F;break;case"XZY":this._x=E*U*G-K*q*F,this._y=K*q*G-E*U*F,this._z=K*U*F+E*q*G,this._w=K*U*G+E*q*F;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],H=Q[1],Y=Q[5],X=Q[9],K=Q[2],U=Q[6],G=Q[10],E=$+Y+G;if(E>0){let q=0.5/Math.sqrt(E+1);this._w=0.25/q,this._x=(U-X)*q,this._y=(W-K)*q,this._z=(H-Z)*q}else if($>Y&&$>G){let q=2*Math.sqrt(1+$-Y-G);this._w=(U-X)/q,this._x=0.25*q,this._y=(Z+H)/q,this._z=(W+K)/q}else if(Y>G){let q=2*Math.sqrt(1+Y-$-G);this._w=(W-K)/q,this._x=(Z+H)/q,this._y=0.25*q,this._z=(X+U)/q}else{let q=2*Math.sqrt(1+G-$-Y);this._w=(H-Z)/q,this._x=(W+K)/q,this._y=(X+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(mJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:H}=J,Y=Q._x,X=Q._y,K=Q._z,U=Q._w;return this._x=$*U+H*Y+Z*K-W*X,this._y=Z*U+H*X+W*Y-$*K,this._z=W*U+H*K+$*X-Z*Y,this._w=H*U-$*Y-Z*X-W*K,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let $=this._x,Z=this._y,W=this._z,H=this._w,Y=H*J._w+$*J._x+Z*J._y+W*J._z;if(Y<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,Y=-Y;else this.copy(J);if(Y>=1)return this._w=H,this._x=$,this._y=Z,this._z=W,this;let X=1-Y*Y;if(X<=Number.EPSILON){let q=1-Q;return this._w=q*H+Q*this._w,this._x=q*$+Q*this._x,this._y=q*Z+Q*this._y,this._z=q*W+Q*this._z,this.normalize(),this}let K=Math.sqrt(X),U=Math.atan2(K,Y),G=Math.sin((1-Q)*U)/K,E=Math.sin(Q*U)/K;return this._w=H*G+this._w*E,this._x=$*G+this._x*E,this._y=Z*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(J=0,Q=0,$=0){j.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(r$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(r$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,H=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*H,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*H,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*H,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,H=J.y,Y=J.z,X=J.w,K=2*(H*Z-Y*$),U=2*(Y*Q-W*Z),G=2*(W*$-H*Q);return this.x=Q+X*K+H*G-Y*U,this.y=$+X*U+Y*K-W*G,this.z=Z+X*G+W*U-H*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=mJ(this.x,J.x,Q.x),this.y=mJ(this.y,J.y,Q.y),this.z=mJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=mJ(this.x,J,Q),this.y=mJ(this.y,J,Q),this.z=mJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(mJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,H=Q.x,Y=Q.y,X=Q.z;return this.x=Z*X-W*Y,this.y=W*H-$*X,this.z=$*Y-Z*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return d7.copy(this).projectOnVector(J),this.sub(d7)}reflect(J){return this.sub(d7.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(mJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var d7=new j,r$=new $8;class bJ{constructor(J,Q,$,Z,W,H,Y,X,K){if(bJ.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,H,Y,X,K)}set(J,Q,$,Z,W,H,Y,X,K){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=Q,U[4]=W,U[5]=X,U[6]=$,U[7]=H,U[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,H=$[0],Y=$[3],X=$[6],K=$[1],U=$[4],G=$[7],E=$[2],q=$[5],F=$[8],k=Z[0],M=Z[3],N=Z[6],O=Z[1],I=Z[4],L=Z[7],_=Z[2],S=Z[5],C=Z[8];return W[0]=H*k+Y*O+X*_,W[3]=H*M+Y*I+X*S,W[6]=H*N+Y*L+X*C,W[1]=K*k+U*O+G*_,W[4]=K*M+U*I+G*S,W[7]=K*N+U*L+G*C,W[2]=E*k+q*O+F*_,W[5]=E*M+q*I+F*S,W[8]=E*N+q*L+F*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8];return Q*H*U-Q*Y*K-$*W*U+$*Y*X+Z*W*K-Z*H*X}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=U*H-Y*K,E=Y*X-U*W,q=K*W-H*X,F=Q*G+$*E+Z*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let k=1/F;return J[0]=G*k,J[1]=(Z*K-U*$)*k,J[2]=(Y*$-Z*H)*k,J[3]=E*k,J[4]=(U*Q-Z*X)*k,J[5]=(Z*W-Y*Q)*k,J[6]=q*k,J[7]=($*X-K*Q)*k,J[8]=(H*Q-$*W)*k,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,H,Y){let X=Math.cos(W),K=Math.sin(W);return this.set($*X,$*K,-$*(X*H+K*Y)+H+J,-Z*K,Z*X,-Z*(-K*H+X*Y)+Y+Q,0,0,1),this}scale(J,Q){return this.premultiply(m7.makeScale(J,Q)),this}rotate(J){return this.premultiply(m7.makeRotation(-J)),this}translate(J,Q){return this.premultiply(m7.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var m7=new bJ;function K$(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function _9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function AW(){let J=_9("canvas");return J.style.display="block",J}var t$={};function C9(J){if(J in t$)return;t$[J]=!0,console.warn(J)}function SW(J,Q,$){return new Promise(function(Z,W){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(H,$);break;default:Z()}}setTimeout(H,$)})}var e$=new bJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),JZ=new bJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function LY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,H,Y){if(this.enabled===!1||H===Y||!H||!Y)return W;if(this.spaces[H].transfer==="srgb")W.r=D8(W.r),W.g=D8(W.g),W.b=D8(W.b);if(this.spaces[H].primaries!==this.spaces[Y].primaries)W.applyMatrix3(this.spaces[H].toXYZ),W.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")W.r=B9(W.r),W.g=B9(W.g),W.b=B9(W.b);return W},workingToColorSpace:function(W,H){return this.convert(W,this.workingColorSpace,H)},colorSpaceToWorking:function(W,H){return this.convert(W,H,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,H=this.workingColorSpace){return W.fromArray(this.spaces[H].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,H,Y){return W.copy(this.spaces[H].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,H){return C9("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,H)},toWorkingColorSpace:function(W,H){return C9("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,H)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:e$,fromXYZ:JZ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:e$,fromXYZ:JZ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var nJ=LY();function D8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function B9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var U9;class U${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(U9===void 0)U9=_9("canvas");U9.width=J.width,U9.height=J.height;let Z=U9.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=U9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=_9("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let H=0;H<W.length;H++)W[H]=D8(W[H]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(D8(Q[$]/255)*255);else Q[$]=D8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var VY=0;class U6{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VY++}),this.uuid=t0(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(Q instanceof VideoFrame)J.set(Q.displayHeight,Q.displayWidth,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let H=0,Y=Z.length;H<Y;H++)if(Z[H].isDataTexture)W.push(u7(Z[H].image));else W.push(u7(Z[H]))}else W=u7(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function u7(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return U$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var zY=0,c7=new j;class O0 extends x8{constructor(J=O0.DEFAULT_IMAGE,Q=O0.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,H=1008,Y=1023,X=1009,K=O0.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:zY++}),this.uuid=t0(),this.name="",this.source=new U6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=H,this.anisotropy=K,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new xJ(0,0),this.repeat=new xJ(1,1),this.center=new xJ(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(c7).x}get height(){return this.source.getSize(c7).y}get depth(){return this.source.getSize(c7).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}O0.DEFAULT_IMAGE=null;O0.DEFAULT_MAPPING=300;O0.DEFAULT_ANISOTROPY=1;class iJ{constructor(J=0,Q=0,$=0,Z=1){iJ.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*$+H[8]*Z+H[12]*W,this.y=H[1]*Q+H[5]*$+H[9]*Z+H[13]*W,this.z=H[2]*Q+H[6]*$+H[10]*Z+H[14]*W,this.w=H[3]*Q+H[7]*$+H[11]*Z+H[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,H=0.01,Y=0.1,X=J.elements,K=X[0],U=X[4],G=X[8],E=X[1],q=X[5],F=X[9],k=X[2],M=X[6],N=X[10];if(Math.abs(U-E)<0.01&&Math.abs(G-k)<0.01&&Math.abs(F-M)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+k)<0.1&&Math.abs(F+M)<0.1&&Math.abs(K+q+N-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let I=(K+1)/2,L=(q+1)/2,_=(N+1)/2,S=(U+E)/4,C=(G+k)/4,T=(F+M)/4;if(I>L&&I>_)if(I<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(I),Z=S/$,W=C/$;else if(L>_)if(L<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(L),$=S/Z,W=T/Z;else if(_<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(_),$=C/W,Z=T/W;return this.set($,Z,W,Q),this}let O=Math.sqrt((M-F)*(M-F)+(G-k)*(G-k)+(E-U)*(E-U));if(Math.abs(O)<0.001)O=1;return this.x=(M-F)/O,this.y=(G-k)/O,this.z=(E-U)/O,this.w=Math.acos((K+q+N-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=mJ(this.x,J.x,Q.x),this.y=mJ(this.y,J.y,Q.y),this.z=mJ(this.z,J.z,Q.z),this.w=mJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=mJ(this.x,J,Q),this.y=mJ(this.y,J,Q),this.z=mJ(this.z,J,Q),this.w=mJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(mJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G$ extends x8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new iJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new iJ(0,0,J,Q);let Z={width:J,height:Q,depth:$.depth},W=new O0(Z);this.textures=[];let H=$.count;for(let Y=0;Y<H;Y++)this.textures[Y]=W.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new U6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class C8 extends G${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class F7 extends O0{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class E$ extends O0{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c0{constructor(J=new j(1/0,1/0,1/0),Q=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(o0.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(o0.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=o0.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let H=0,Y=W.count;H<Y;H++){if(J.isMesh===!0)J.getVertexPosition(H,o0);else o0.fromBufferAttribute(W,H);o0.applyMatrix4(J.matrixWorld),this.expandByPoint(o0)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();C6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();C6.copy($.boundingBox)}C6.applyMatrix4(J.matrixWorld),this.union(C6)}}let Z=J.children;for(let W=0,H=Z.length;W<H;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,o0),o0.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(n9),I6.subVectors(this.max,n9),G9.subVectors(J.a,n9),E9.subVectors(J.b,n9),q9.subVectors(J.c,n9),w8.subVectors(E9,G9),T8.subVectors(q9,E9),o8.subVectors(G9,q9);let Q=[0,-w8.z,w8.y,0,-T8.z,T8.y,0,-o8.z,o8.y,w8.z,0,-w8.x,T8.z,0,-T8.x,o8.z,0,-o8.x,-w8.y,w8.x,0,-T8.y,T8.x,0,-o8.y,o8.x,0];if(!n7(Q,G9,E9,q9,I6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!n7(Q,G9,E9,q9,I6))return!1;return P6.crossVectors(w8,T8),Q=[P6.x,P6.y,P6.z],n7(Q,G9,E9,q9,I6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,o0).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(o0).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return q8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),q8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),q8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),q8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),q8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),q8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),q8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),q8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(q8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var q8=[new j,new j,new j,new j,new j,new j,new j,new j],o0=new j,C6=new c0,G9=new j,E9=new j,q9=new j,w8=new j,T8=new j,o8=new j,n9=new j,I6=new j,P6=new j,i8=new j;function n7(J,Q,$,Z,W){for(let H=0,Y=J.length-3;H<=Y;H+=3){i8.fromArray(J,H);let X=W.x*Math.abs(i8.x)+W.y*Math.abs(i8.y)+W.z*Math.abs(i8.z),K=Q.dot(i8),U=$.dot(i8),G=Z.dot(i8);if(Math.max(-Math.max(K,U,G),Math.min(K,U,G))>X)return!1}return!0}var BY=new c0,s9=new j,s7=new j;class v0{constructor(J=new j,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else BY.setFromPoints(J).getCenter($);let Z=0;for(let W=0,H=J.length;W<H;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;s9.subVectors(J,this.center);let Q=s9.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(s9,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else s7.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(s9.copy(J.center).add(s7)),this.expandByPoint(s9.copy(J.center).sub(s7));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var N8=new j,o7=new j,w6=new j,A8=new j,i7=new j,T6=new j,a7=new j;class v9{constructor(J=new j,Q=new j(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,N8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=N8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return N8.copy(this.origin).addScaledVector(this.direction,Q),N8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){o7.copy(J).add(Q).multiplyScalar(0.5),w6.copy(Q).sub(J).normalize(),A8.copy(this.origin).sub(o7);let W=J.distanceTo(Q)*0.5,H=-this.direction.dot(w6),Y=A8.dot(this.direction),X=-A8.dot(w6),K=A8.lengthSq(),U=Math.abs(1-H*H),G,E,q,F;if(U>0)if(G=H*X-Y,E=H*Y-X,F=W*U,G>=0)if(E>=-F)if(E<=F){let k=1/U;G*=k,E*=k,q=G*(G+H*E+2*Y)+E*(H*G+E+2*X)+K}else E=W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;else E=-W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;else if(E<=-F)G=Math.max(0,-(-H*W+Y)),E=G>0?-W:Math.min(Math.max(-W,-X),W),q=-G*G+E*(E+2*X)+K;else if(E<=F)G=0,E=Math.min(Math.max(-W,-X),W),q=E*(E+2*X)+K;else G=Math.max(0,-(H*W+Y)),E=G>0?W:Math.min(Math.max(-W,-X),W),q=-G*G+E*(E+2*X)+K;else E=H>0?-W:W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(o7).addScaledVector(w6,E);return q}intersectSphere(J,Q){N8.subVectors(J.center,this.origin);let $=N8.dot(this.direction),Z=N8.dot(N8)-$*$,W=J.radius*J.radius;if(Z>W)return null;let H=Math.sqrt(W-Z),Y=$-H,X=$+H;if(X<0)return null;if(Y<0)return this.at(X,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,H,Y,X,K=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(K>=0)$=(J.min.x-E.x)*K,Z=(J.max.x-E.x)*K;else $=(J.max.x-E.x)*K,Z=(J.min.x-E.x)*K;if(U>=0)W=(J.min.y-E.y)*U,H=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,H=(J.min.y-E.y)*U;if($>H||W>Z)return null;if(W>$||isNaN($))$=W;if(H<Z||isNaN(Z))Z=H;if(G>=0)Y=(J.min.z-E.z)*G,X=(J.max.z-E.z)*G;else Y=(J.max.z-E.z)*G,X=(J.min.z-E.z)*G;if($>X||Y>Z)return null;if(Y>$||$!==$)$=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,N8)!==null}intersectTriangle(J,Q,$,Z,W){i7.subVectors(Q,J),T6.subVectors($,J),a7.crossVectors(i7,T6);let H=this.direction.dot(a7),Y;if(H>0){if(Z)return null;Y=1}else if(H<0)Y=-1,H=-H;else return null;A8.subVectors(this.origin,J);let X=Y*this.direction.dot(T6.crossVectors(A8,T6));if(X<0)return null;let K=Y*this.direction.dot(i7.cross(A8));if(K<0)return null;if(X+K>H)return null;let U=-Y*A8.dot(a7);if(U<0)return null;return this.at(U/H,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hJ{constructor(J,Q,$,Z,W,H,Y,X,K,U,G,E,q,F,k,M){if(hJ.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,H,Y,X,K,U,G,E,q,F,k,M)}set(J,Q,$,Z,W,H,Y,X,K,U,G,E,q,F,k,M){let N=this.elements;return N[0]=J,N[4]=Q,N[8]=$,N[12]=Z,N[1]=W,N[5]=H,N[9]=Y,N[13]=X,N[2]=K,N[6]=U,N[10]=G,N[14]=E,N[3]=q,N[7]=F,N[11]=k,N[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,$=J.elements,Z=1/N9.setFromMatrixColumn(J,0).length(),W=1/N9.setFromMatrixColumn(J,1).length(),H=1/N9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*H,Q[9]=$[9]*H,Q[10]=$[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,H=Math.cos($),Y=Math.sin($),X=Math.cos(Z),K=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let E=H*U,q=H*G,F=Y*U,k=Y*G;Q[0]=X*U,Q[4]=-X*G,Q[8]=K,Q[1]=q+F*K,Q[5]=E-k*K,Q[9]=-Y*X,Q[2]=k-E*K,Q[6]=F+q*K,Q[10]=H*X}else if(J.order==="YXZ"){let E=X*U,q=X*G,F=K*U,k=K*G;Q[0]=E+k*Y,Q[4]=F*Y-q,Q[8]=H*K,Q[1]=H*G,Q[5]=H*U,Q[9]=-Y,Q[2]=q*Y-F,Q[6]=k+E*Y,Q[10]=H*X}else if(J.order==="ZXY"){let E=X*U,q=X*G,F=K*U,k=K*G;Q[0]=E-k*Y,Q[4]=-H*G,Q[8]=F+q*Y,Q[1]=q+F*Y,Q[5]=H*U,Q[9]=k-E*Y,Q[2]=-H*K,Q[6]=Y,Q[10]=H*X}else if(J.order==="ZYX"){let E=H*U,q=H*G,F=Y*U,k=Y*G;Q[0]=X*U,Q[4]=F*K-q,Q[8]=E*K+k,Q[1]=X*G,Q[5]=k*K+E,Q[9]=q*K-F,Q[2]=-K,Q[6]=Y*X,Q[10]=H*X}else if(J.order==="YZX"){let E=H*X,q=H*K,F=Y*X,k=Y*K;Q[0]=X*U,Q[4]=k-E*G,Q[8]=F*G+q,Q[1]=G,Q[5]=H*U,Q[9]=-Y*U,Q[2]=-K*U,Q[6]=q*G+F,Q[10]=E-k*G}else if(J.order==="XZY"){let E=H*X,q=H*K,F=Y*X,k=Y*K;Q[0]=X*U,Q[4]=-G,Q[8]=K*U,Q[1]=E*G+k,Q[5]=H*U,Q[9]=q*G-F,Q[2]=F*G-q,Q[6]=Y*U,Q[10]=k*G+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(_Y,J,CY)}lookAt(J,Q,$){let Z=this.elements;if(A0.subVectors(J,Q),A0.lengthSq()===0)A0.z=1;if(A0.normalize(),S8.crossVectors($,A0),S8.lengthSq()===0){if(Math.abs($.z)===1)A0.x+=0.0001;else A0.z+=0.0001;A0.normalize(),S8.crossVectors($,A0)}return S8.normalize(),A6.crossVectors(A0,S8),Z[0]=S8.x,Z[4]=A6.x,Z[8]=A0.x,Z[1]=S8.y,Z[5]=A6.y,Z[9]=A0.y,Z[2]=S8.z,Z[6]=A6.z,Z[10]=A0.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,H=$[0],Y=$[4],X=$[8],K=$[12],U=$[1],G=$[5],E=$[9],q=$[13],F=$[2],k=$[6],M=$[10],N=$[14],O=$[3],I=$[7],L=$[11],_=$[15],S=Z[0],C=Z[4],T=Z[8],b=Z[12],z=Z[1],V=Z[5],P=Z[9],h=Z[13],l=Z[2],d=Z[6],o=Z[10],c=Z[14],a=Z[3],m=Z[7],HJ=Z[11],KJ=Z[15];return W[0]=H*S+Y*z+X*l+K*a,W[4]=H*C+Y*V+X*d+K*m,W[8]=H*T+Y*P+X*o+K*HJ,W[12]=H*b+Y*h+X*c+K*KJ,W[1]=U*S+G*z+E*l+q*a,W[5]=U*C+G*V+E*d+q*m,W[9]=U*T+G*P+E*o+q*HJ,W[13]=U*b+G*h+E*c+q*KJ,W[2]=F*S+k*z+M*l+N*a,W[6]=F*C+k*V+M*d+N*m,W[10]=F*T+k*P+M*o+N*HJ,W[14]=F*b+k*h+M*c+N*KJ,W[3]=O*S+I*z+L*l+_*a,W[7]=O*C+I*V+L*d+_*m,W[11]=O*T+I*P+L*o+_*HJ,W[15]=O*b+I*h+L*c+_*KJ,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],H=J[1],Y=J[5],X=J[9],K=J[13],U=J[2],G=J[6],E=J[10],q=J[14],F=J[3],k=J[7],M=J[11],N=J[15];return F*(+W*X*G-Z*K*G-W*Y*E+$*K*E+Z*Y*q-$*X*q)+k*(+Q*X*q-Q*K*E+W*H*E-Z*H*q+Z*K*U-W*X*U)+M*(+Q*K*G-Q*Y*q-W*H*G+$*H*q+W*Y*U-$*K*U)+N*(-Z*Y*U-Q*X*G+Q*Y*E+Z*H*G-$*H*E+$*X*U)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=J[9],E=J[10],q=J[11],F=J[12],k=J[13],M=J[14],N=J[15],O=G*M*K-k*E*K+k*X*q-Y*M*q-G*X*N+Y*E*N,I=F*E*K-U*M*K-F*X*q+H*M*q+U*X*N-H*E*N,L=U*k*K-F*G*K+F*Y*q-H*k*q-U*Y*N+H*G*N,_=F*G*X-U*k*X-F*Y*E+H*k*E+U*Y*M-H*G*M,S=Q*O+$*I+Z*L+W*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/S;return J[0]=O*C,J[1]=(k*E*W-G*M*W-k*Z*q+$*M*q+G*Z*N-$*E*N)*C,J[2]=(Y*M*W-k*X*W+k*Z*K-$*M*K-Y*Z*N+$*X*N)*C,J[3]=(G*X*W-Y*E*W-G*Z*K+$*E*K+Y*Z*q-$*X*q)*C,J[4]=I*C,J[5]=(U*M*W-F*E*W+F*Z*q-Q*M*q-U*Z*N+Q*E*N)*C,J[6]=(F*X*W-H*M*W-F*Z*K+Q*M*K+H*Z*N-Q*X*N)*C,J[7]=(H*E*W-U*X*W+U*Z*K-Q*E*K-H*Z*q+Q*X*q)*C,J[8]=L*C,J[9]=(F*G*W-U*k*W-F*$*q+Q*k*q+U*$*N-Q*G*N)*C,J[10]=(H*k*W-F*Y*W+F*$*K-Q*k*K-H*$*N+Q*Y*N)*C,J[11]=(U*Y*W-H*G*W-U*$*K+Q*G*K+H*$*q-Q*Y*q)*C,J[12]=_*C,J[13]=(U*k*Z-F*G*Z+F*$*E-Q*k*E-U*$*M+Q*G*M)*C,J[14]=(F*Y*Z-H*k*Z-F*$*X+Q*k*X+H*$*M-Q*Y*M)*C,J[15]=(H*G*Z-U*Y*Z+U*$*X-Q*G*X-H*$*E+Q*Y*E)*C,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,H=J.x,Y=J.y,X=J.z,K=W*H,U=W*Y;return this.set(K*H+$,K*Y-Z*X,K*X+Z*Y,0,K*Y+Z*X,U*Y+$,U*X-Z*H,0,K*X-Z*Y,U*X+Z*H,W*X*X+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,H){return this.set(1,$,W,0,J,1,H,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,H=Q._y,Y=Q._z,X=Q._w,K=W+W,U=H+H,G=Y+Y,E=W*K,q=W*U,F=W*G,k=H*U,M=H*G,N=Y*G,O=X*K,I=X*U,L=X*G,_=$.x,S=$.y,C=$.z;return Z[0]=(1-(k+N))*_,Z[1]=(q+L)*_,Z[2]=(F-I)*_,Z[3]=0,Z[4]=(q-L)*S,Z[5]=(1-(E+N))*S,Z[6]=(M+O)*S,Z[7]=0,Z[8]=(F+I)*C,Z[9]=(M-O)*C,Z[10]=(1-(E+k))*C,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements,W=N9.set(Z[0],Z[1],Z[2]).length(),H=N9.set(Z[4],Z[5],Z[6]).length(),Y=N9.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;J.x=Z[12],J.y=Z[13],J.z=Z[14],i0.copy(this);let K=1/W,U=1/H,G=1/Y;return i0.elements[0]*=K,i0.elements[1]*=K,i0.elements[2]*=K,i0.elements[4]*=U,i0.elements[5]*=U,i0.elements[6]*=U,i0.elements[8]*=G,i0.elements[9]*=G,i0.elements[10]*=G,Q.setFromRotationMatrix(i0),$.x=W,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,W,H,Y=2000,X=!1){let K=this.elements,U=2*W/(Q-J),G=2*W/($-Z),E=(Q+J)/(Q-J),q=($+Z)/($-Z),F,k;if(X)F=W/(H-W),k=H*W/(H-W);else if(Y===2000)F=-(H+W)/(H-W),k=-2*H*W/(H-W);else if(Y===2001)F=-H/(H-W),k=-H*W/(H-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return K[0]=U,K[4]=0,K[8]=E,K[12]=0,K[1]=0,K[5]=G,K[9]=q,K[13]=0,K[2]=0,K[6]=0,K[10]=F,K[14]=k,K[3]=0,K[7]=0,K[11]=-1,K[15]=0,this}makeOrthographic(J,Q,$,Z,W,H,Y=2000,X=!1){let K=this.elements,U=2/(Q-J),G=2/($-Z),E=-(Q+J)/(Q-J),q=-($+Z)/($-Z),F,k;if(X)F=1/(H-W),k=H/(H-W);else if(Y===2000)F=-2/(H-W),k=-(H+W)/(H-W);else if(Y===2001)F=-1/(H-W),k=-W/(H-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return K[0]=U,K[4]=0,K[8]=0,K[12]=E,K[1]=0,K[5]=G,K[9]=0,K[13]=q,K[2]=0,K[6]=0,K[10]=F,K[14]=k,K[3]=0,K[7]=0,K[11]=0,K[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var N9=new j,i0=new hJ,_Y=new j(0,0,0),CY=new j(1,1,1),S8=new j,A6=new j,A0=new j,QZ=new hJ,$Z=new $8;class e0{constructor(J=0,Q=0,$=0,Z=e0.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],H=Z[4],Y=Z[8],X=Z[1],K=Z[5],U=Z[9],G=Z[2],E=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(mJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-H,W);else this._x=Math.atan2(E,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-mJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,q),this._z=Math.atan2(X,K);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(mJ(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-H,K);else this._y=0,this._z=Math.atan2(X,W);break;case"ZYX":if(this._y=Math.asin(-mJ(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,q),this._z=Math.atan2(X,W);else this._x=0,this._z=Math.atan2(-H,K);break;case"YZX":if(this._z=Math.asin(mJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,K),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(Y,q);break;case"XZY":if(this._z=Math.asin(-mJ(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(E,K),this._y=Math.atan2(Y,W);else this._x=Math.atan2(-U,q),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return QZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(QZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return $Z.setFromEuler(this),this.setFromQuaternion($Z,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}e0.DEFAULT_ORDER="XYZ";class R7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var IY=0,ZZ=new j,O9=new $8,O8=new hJ,S6=new j,o9=new j,PY=new j,wY=new $8,WZ=new j(1,0,0),HZ=new j(0,1,0),YZ=new j(0,0,1),XZ={type:"added"},TY={type:"removed"},F9={type:"childadded",child:null},r7={type:"childremoved",child:null};class H0 extends x8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:IY++}),this.uuid=t0(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=H0.DEFAULT_UP.clone();let J=new j,Q=new e0,$=new $8,Z=new j(1,1,1);function W(){$.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new hJ},normalMatrix:{value:new bJ}}),this.matrix=new hJ,this.matrixWorld=new hJ,this.matrixAutoUpdate=H0.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=H0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return O9.setFromAxisAngle(J,Q),this.quaternion.multiply(O9),this}rotateOnWorldAxis(J,Q){return O9.setFromAxisAngle(J,Q),this.quaternion.premultiply(O9),this}rotateX(J){return this.rotateOnAxis(WZ,J)}rotateY(J){return this.rotateOnAxis(HZ,J)}rotateZ(J){return this.rotateOnAxis(YZ,J)}translateOnAxis(J,Q){return ZZ.copy(J).applyQuaternion(this.quaternion),this.position.add(ZZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(WZ,J)}translateY(J){return this.translateOnAxis(HZ,J)}translateZ(J){return this.translateOnAxis(YZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(O8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)S6.copy(J);else S6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),o9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)O8.lookAt(o9,S6,this.up);else O8.lookAt(S6,o9,this.up);if(this.quaternion.setFromRotationMatrix(O8),Z)O8.extractRotation(Z.matrixWorld),O9.setFromRotationMatrix(O8),this.quaternion.premultiply(O9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(XZ),F9.child=J,this.dispatchEvent(F9),F9.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(TY),r7.child=J,this.dispatchEvent(r7),r7.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),O8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),O8.multiply(J.parent.matrixWorld);return J.applyMatrix4(O8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(XZ),F9.child=J,this.dispatchEvent(F9),F9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let H=this.children[$].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,H=Z.length;W<H;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(o9,J,PY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(o9,wY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let W=0,H=Z.length;W<H;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let K=0,U=X.length;K<U;K++){let G=X[K];W(J.shapes,G)}else W(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,K=this.material.length;X<K;X++)Y.push(W(J.materials,this.material[X]));Z.material=Y}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(W(J.animations,X))}}if(Q){let Y=H(J.geometries),X=H(J.materials),K=H(J.textures),U=H(J.images),G=H(J.shapes),E=H(J.skeletons),q=H(J.animations),F=H(J.nodes);if(Y.length>0)$.geometries=Y;if(X.length>0)$.materials=X;if(K.length>0)$.textures=K;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(E.length>0)$.skeletons=E;if(q.length>0)$.animations=q;if(F.length>0)$.nodes=F}return $.object=Z,$;function H(Y){let X=[];for(let K in Y){let U=Y[K];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}H0.DEFAULT_UP=new j(0,1,0);H0.DEFAULT_MATRIX_AUTO_UPDATE=!0;H0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var a0=new j,F8=new j,t7=new j,R8=new j,R9=new j,M9=new j,KZ=new j,e7=new j,JQ=new j,QQ=new j,$Q=new iJ,ZQ=new iJ,WQ=new iJ;class l0{constructor(J=new j,Q=new j,$=new j){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),a0.subVectors(J,Q),Z.cross(a0);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){a0.subVectors(Z,Q),F8.subVectors($,Q),t7.subVectors(J,Q);let H=a0.dot(a0),Y=a0.dot(F8),X=a0.dot(t7),K=F8.dot(F8),U=F8.dot(t7),G=H*K-Y*Y;if(G===0)return W.set(0,0,0),null;let E=1/G,q=(K*X-Y*U)*E,F=(H*U-Y*X)*E;return W.set(1-q-F,F,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,R8)===null)return!1;return R8.x>=0&&R8.y>=0&&R8.x+R8.y<=1}static getInterpolation(J,Q,$,Z,W,H,Y,X){if(this.getBarycoord(J,Q,$,Z,R8)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(W,R8.x),X.addScaledVector(H,R8.y),X.addScaledVector(Y,R8.z),X}static getInterpolatedAttribute(J,Q,$,Z,W,H){return $Q.setScalar(0),ZQ.setScalar(0),WQ.setScalar(0),$Q.fromBufferAttribute(J,Q),ZQ.fromBufferAttribute(J,$),WQ.fromBufferAttribute(J,Z),H.setScalar(0),H.addScaledVector($Q,W.x),H.addScaledVector(ZQ,W.y),H.addScaledVector(WQ,W.z),H}static isFrontFacing(J,Q,$,Z){return a0.subVectors($,Q),F8.subVectors(J,Q),a0.cross(F8).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return a0.subVectors(this.c,this.b),F8.subVectors(this.a,this.b),a0.cross(F8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return l0.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return l0.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return l0.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return l0.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return l0.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,H,Y;R9.subVectors(Z,$),M9.subVectors(W,$),e7.subVectors(J,$);let X=R9.dot(e7),K=M9.dot(e7);if(X<=0&&K<=0)return Q.copy($);JQ.subVectors(J,Z);let U=R9.dot(JQ),G=M9.dot(JQ);if(U>=0&&G<=U)return Q.copy(Z);let E=X*G-U*K;if(E<=0&&X>=0&&U<=0)return H=X/(X-U),Q.copy($).addScaledVector(R9,H);QQ.subVectors(J,W);let q=R9.dot(QQ),F=M9.dot(QQ);if(F>=0&&q<=F)return Q.copy(W);let k=q*K-X*F;if(k<=0&&K>=0&&F<=0)return Y=K/(K-F),Q.copy($).addScaledVector(M9,Y);let M=U*F-q*G;if(M<=0&&G-U>=0&&q-F>=0)return KZ.subVectors(W,Z),Y=(G-U)/(G-U+(q-F)),Q.copy(Z).addScaledVector(KZ,Y);let N=1/(M+k+E);return H=k*N,Y=E*N,Q.copy($).addScaledVector(R9,H).addScaledVector(M9,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var jW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},j8={h:0,s:0,l:0},j6={h:0,s:0,l:0};function HQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class yJ{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,nJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=nJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,nJ.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=nJ.workingColorSpace){if(J=X$(J,1),Q=mJ(Q,0,1),$=mJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,H=2*$-W;this.r=HQ(H,W,J+0.3333333333333333),this.g=HQ(H,W,J),this.b=HQ(H,W,J-0.3333333333333333)}return nJ.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,H=Z[1],Y=Z[2];switch(H){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],H=W.length;if(H===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=jW[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=D8(J.r),this.g=D8(J.g),this.b=D8(J.b),this}copyLinearToSRGB(J){return this.r=B9(J.r),this.g=B9(J.g),this.b=B9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return nJ.workingToColorSpace(V0.copy(this),J),Math.round(mJ(V0.r*255,0,255))*65536+Math.round(mJ(V0.g*255,0,255))*256+Math.round(mJ(V0.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=nJ.workingColorSpace){nJ.workingToColorSpace(V0.copy(this),Q);let{r:$,g:Z,b:W}=V0,H=Math.max($,Z,W),Y=Math.min($,Z,W),X,K,U=(Y+H)/2;if(Y===H)X=0,K=0;else{let G=H-Y;switch(K=U<=0.5?G/(H+Y):G/(2-H-Y),H){case $:X=(Z-W)/G+(Z<W?6:0);break;case Z:X=(W-$)/G+2;break;case W:X=($-Z)/G+4;break}X/=6}return J.h=X,J.s=K,J.l=U,J}getRGB(J,Q=nJ.workingColorSpace){return nJ.workingToColorSpace(V0.copy(this),Q),J.r=V0.r,J.g=V0.g,J.b=V0.b,J}getStyle(J="srgb"){nJ.workingToColorSpace(V0.copy(this),J);let{r:Q,g:$,b:Z}=V0;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(j8),this.setHSL(j8.h+J,j8.s+Q,j8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(j8),J.getHSL(j6);let $=Q6(j8.h,j6.h,Q),Z=Q6(j8.s,j6.s,Q),W=Q6(j8.l,j6.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var V0=new yJ;yJ.NAMES=jW;var AY=0;class y0 extends x8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:AY++}),this.uuid=t0(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let H=[];for(let Y in W){let X=W[Y];delete X.metadata,H.push(X)}return H}if(Q){let W=Z(J.textures),H=Z(J.images);if(W.length>0)$.textures=W;if(H.length>0)$.images=H}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class U8 extends y0{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new e0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var N0=new j,v6=new xJ,SY=0;class F0{constructor(J,Q,$=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)v6.fromBufferAttribute(this,Q),v6.applyMatrix3(J),this.setXY(Q,v6.x,v6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)N0.fromBufferAttribute(this,Q),N0.applyMatrix3(J),this.setXYZ(Q,N0.x,N0.y,N0.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)N0.fromBufferAttribute(this,Q),N0.applyMatrix4(J),this.setXYZ(Q,N0.x,N0.y,N0.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)N0.fromBufferAttribute(this,Q),N0.applyNormalMatrix(J),this.setXYZ(Q,N0.x,N0.y,N0.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)N0.fromBufferAttribute(this,Q),N0.transformDirection(J),this.setXYZ(Q,N0.x,N0.y,N0.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=r0($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=tJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=r0(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=r0(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=r0(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=r0(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=tJ(Q,this.array),$=tJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=tJ(Q,this.array),$=tJ($,this.array),Z=tJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=tJ(Q,this.array),$=tJ($,this.array),Z=tJ(Z,this.array),W=tJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class M7 extends F0{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class k7 extends F0{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class m0 extends F0{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var jY=0,p0=new hJ,YQ=new H0,k9=new j,S0=new c0,i9=new c0,k0=new j;class f0 extends x8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jY++}),this.uuid=t0(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((K$(J))?k7:M7)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new bJ().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return p0.makeRotationFromQuaternion(J),this.applyMatrix4(p0),this}rotateX(J){return p0.makeRotationX(J),this.applyMatrix4(p0),this}rotateY(J){return p0.makeRotationY(J),this.applyMatrix4(p0),this}rotateZ(J){return p0.makeRotationZ(J),this.applyMatrix4(p0),this}translate(J,Q,$){return p0.makeTranslation(J,Q,$),this.applyMatrix4(p0),this}scale(J,Q,$){return p0.makeScale(J,Q,$),this.applyMatrix4(p0),this}lookAt(J){return YQ.lookAt(J),YQ.updateMatrix(),this.applyMatrix4(YQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(k9).negate(),this.translate(k9.x,k9.y,k9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let H=J[Z];$.push(H.x,H.y,H.z||0)}this.setAttribute("position",new m0($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new c0;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(S0.setFromBufferAttribute(W),this.morphTargetsRelative)k0.addVectors(this.boundingBox.min,S0.min),this.boundingBox.expandByPoint(k0),k0.addVectors(this.boundingBox.max,S0.max),this.boundingBox.expandByPoint(k0);else this.boundingBox.expandByPoint(S0.min),this.boundingBox.expandByPoint(S0.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new v0;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(J){let $=this.boundingSphere.center;if(S0.setFromBufferAttribute(J),Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W];if(i9.setFromBufferAttribute(Y),this.morphTargetsRelative)k0.addVectors(S0.min,i9.min),S0.expandByPoint(k0),k0.addVectors(S0.max,i9.max),S0.expandByPoint(k0);else S0.expandByPoint(i9.min),S0.expandByPoint(i9.max)}S0.getCenter($);let Z=0;for(let W=0,H=J.count;W<H;W++)k0.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(k0));if(Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W],X=this.morphTargetsRelative;for(let K=0,U=Y.count;K<U;K++){if(k0.fromBufferAttribute(Y,K),X)k9.fromBufferAttribute(J,K),k0.add(k9);Z=Math.max(Z,$.distanceToSquared(k0))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new F0(new Float32Array(4*$.count),4));let H=this.getAttribute("tangent"),Y=[],X=[];for(let T=0;T<$.count;T++)Y[T]=new j,X[T]=new j;let K=new j,U=new j,G=new j,E=new xJ,q=new xJ,F=new xJ,k=new j,M=new j;function N(T,b,z){K.fromBufferAttribute($,T),U.fromBufferAttribute($,b),G.fromBufferAttribute($,z),E.fromBufferAttribute(W,T),q.fromBufferAttribute(W,b),F.fromBufferAttribute(W,z),U.sub(K),G.sub(K),q.sub(E),F.sub(E);let V=1/(q.x*F.y-F.x*q.y);if(!isFinite(V))return;k.copy(U).multiplyScalar(F.y).addScaledVector(G,-q.y).multiplyScalar(V),M.copy(G).multiplyScalar(q.x).addScaledVector(U,-F.x).multiplyScalar(V),Y[T].add(k),Y[b].add(k),Y[z].add(k),X[T].add(M),X[b].add(M),X[z].add(M)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let T=0,b=O.length;T<b;++T){let z=O[T],V=z.start,P=z.count;for(let h=V,l=V+P;h<l;h+=3)N(J.getX(h+0),J.getX(h+1),J.getX(h+2))}let I=new j,L=new j,_=new j,S=new j;function C(T){_.fromBufferAttribute(Z,T),S.copy(_);let b=Y[T];I.copy(b),I.sub(_.multiplyScalar(_.dot(b))).normalize(),L.crossVectors(S,b);let V=L.dot(X[T])<0?-1:1;H.setXYZW(T,I.x,I.y,I.z,V)}for(let T=0,b=O.length;T<b;++T){let z=O[T],V=z.start,P=z.count;for(let h=V,l=V+P;h<l;h+=3)C(J.getX(h+0)),C(J.getX(h+1)),C(J.getX(h+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new F0(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,q=$.count;E<q;E++)$.setXYZ(E,0,0,0);let Z=new j,W=new j,H=new j,Y=new j,X=new j,K=new j,U=new j,G=new j;if(J)for(let E=0,q=J.count;E<q;E+=3){let F=J.getX(E+0),k=J.getX(E+1),M=J.getX(E+2);Z.fromBufferAttribute(Q,F),W.fromBufferAttribute(Q,k),H.fromBufferAttribute(Q,M),U.subVectors(H,W),G.subVectors(Z,W),U.cross(G),Y.fromBufferAttribute($,F),X.fromBufferAttribute($,k),K.fromBufferAttribute($,M),Y.add(U),X.add(U),K.add(U),$.setXYZ(F,Y.x,Y.y,Y.z),$.setXYZ(k,X.x,X.y,X.z),$.setXYZ(M,K.x,K.y,K.z)}else for(let E=0,q=Q.count;E<q;E+=3)Z.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),H.fromBufferAttribute(Q,E+2),U.subVectors(H,W),G.subVectors(Z,W),U.cross(G),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)k0.fromBufferAttribute(J,Q),k0.normalize(),J.setXYZ(Q,k0.x,k0.y,k0.z)}toNonIndexed(){function J(Y,X){let{array:K,itemSize:U,normalized:G}=Y,E=new K.constructor(X.length*U),q=0,F=0;for(let k=0,M=X.length;k<M;k++){if(Y.isInterleavedBufferAttribute)q=X[k]*Y.data.stride+Y.offset;else q=X[k]*U;for(let N=0;N<U;N++)E[F++]=K[q++]}return new F0(E,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new f0,$=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],K=J(X,$);Q.setAttribute(Y,K)}let W=this.morphAttributes;for(let Y in W){let X=[],K=W[Y];for(let U=0,G=K.length;U<G;U++){let E=K[U],q=J(E,$);X.push(q)}Q.morphAttributes[Y]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let Y=0,X=H.length;Y<X;Y++){let K=H[Y];Q.addGroup(K.start,K.count,K.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let X=this.parameters;for(let K in X)if(X[K]!==void 0)J[K]=X[K];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let X in $){let K=$[X];J.data.attributes[X]=K.toJSON(J.data)}let Z={},W=!1;for(let X in this.morphAttributes){let K=this.morphAttributes[X],U=[];for(let G=0,E=K.length;G<E;G++){let q=K[G];U.push(q.toJSON(J.data))}if(U.length>0)Z[X]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let K in Z){let U=Z[K];this.setAttribute(K,U.clone(Q))}let W=J.morphAttributes;for(let K in W){let U=[],G=W[K];for(let E=0,q=G.length;E<q;E++)U.push(G[E].clone(Q));this.morphAttributes[K]=U}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let K=0,U=H.length;K<U;K++){let G=H[K];this.addGroup(G.start,G.count,G.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var UZ=new hJ,a8=new v9,y6=new v0,GZ=new j,f6=new j,h6=new j,b6=new j,XQ=new j,x6=new j,EZ=new j,g6=new j;class z0 extends H0{constructor(J=new f0,Q=new U8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,H=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(W&&Y){x6.set(0,0,0);for(let X=0,K=W.length;X<K;X++){let U=Y[X],G=W[X];if(U===0)continue;if(XQ.fromBufferAttribute(G,J),H)x6.addScaledVector(XQ,U);else x6.addScaledVector(XQ.sub(Q),U)}Q.add(x6)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(y6.copy($.boundingSphere),y6.applyMatrix4(W),a8.copy(J.ray).recast(J.near),y6.containsPoint(a8.origin)===!1){if(a8.intersectSphere(y6,GZ)===null)return;if(a8.origin.distanceToSquared(GZ)>(J.far-J.near)**2)return}if(UZ.copy(W).invert(),a8.copy(J.ray).applyMatrix4(UZ),$.boundingBox!==null){if(a8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,a8)}_computeIntersections(J,Q,$){let Z,W=this.geometry,H=this.material,Y=W.index,X=W.attributes.position,K=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,q=W.drawRange;if(Y!==null)if(Array.isArray(H))for(let F=0,k=E.length;F<k;F++){let M=E[F],N=H[M.materialIndex],O=Math.max(M.start,q.start),I=Math.min(Y.count,Math.min(M.start+M.count,q.start+q.count));for(let L=O,_=I;L<_;L+=3){let S=Y.getX(L),C=Y.getX(L+1),T=Y.getX(L+2);if(Z=p6(this,N,J,$,K,U,G,S,C,T),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=M.materialIndex,Q.push(Z)}}else{let F=Math.max(0,q.start),k=Math.min(Y.count,q.start+q.count);for(let M=F,N=k;M<N;M+=3){let O=Y.getX(M),I=Y.getX(M+1),L=Y.getX(M+2);if(Z=p6(this,H,J,$,K,U,G,O,I,L),Z)Z.faceIndex=Math.floor(M/3),Q.push(Z)}}else if(X!==void 0)if(Array.isArray(H))for(let F=0,k=E.length;F<k;F++){let M=E[F],N=H[M.materialIndex],O=Math.max(M.start,q.start),I=Math.min(X.count,Math.min(M.start+M.count,q.start+q.count));for(let L=O,_=I;L<_;L+=3){let S=L,C=L+1,T=L+2;if(Z=p6(this,N,J,$,K,U,G,S,C,T),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=M.materialIndex,Q.push(Z)}}else{let F=Math.max(0,q.start),k=Math.min(X.count,q.start+q.count);for(let M=F,N=k;M<N;M+=3){let O=M,I=M+1,L=M+2;if(Z=p6(this,H,J,$,K,U,G,O,I,L),Z)Z.faceIndex=Math.floor(M/3),Q.push(Z)}}}}function vY(J,Q,$,Z,W,H,Y,X){let K;if(Q.side===1)K=Z.intersectTriangle(Y,H,W,!0,X);else K=Z.intersectTriangle(W,H,Y,Q.side===0,X);if(K===null)return null;g6.copy(X),g6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(g6);if(U<$.near||U>$.far)return null;return{distance:U,point:g6.clone(),object:J}}function p6(J,Q,$,Z,W,H,Y,X,K,U){J.getVertexPosition(X,f6),J.getVertexPosition(K,h6),J.getVertexPosition(U,b6);let G=vY(J,Q,$,Z,f6,h6,b6,EZ);if(G){let E=new j;if(l0.getBarycoord(EZ,f6,h6,b6,E),W)G.uv=l0.getInterpolatedAttribute(W,X,K,U,E,new xJ);if(H)G.uv1=l0.getInterpolatedAttribute(H,X,K,U,E,new xJ);if(Y){if(G.normal=l0.getInterpolatedAttribute(Y,X,K,U,E,new j),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let q={a:X,b:K,c:U,normal:new j,materialIndex:0};l0.getNormal(f6,h6,b6,q.normal),G.face=q,G.barycoord=E}return G}class y9 extends f0{constructor(J=1,Q=1,$=1,Z=1,W=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:H};let Y=this;Z=Math.floor(Z),W=Math.floor(W),H=Math.floor(H);let X=[],K=[],U=[],G=[],E=0,q=0;F("z","y","x",-1,-1,$,Q,J,H,W,0),F("z","y","x",1,-1,$,Q,-J,H,W,1),F("x","z","y",1,1,J,$,Q,Z,H,2),F("x","z","y",1,-1,J,$,-Q,Z,H,3),F("x","y","z",1,-1,J,Q,$,Z,W,4),F("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(X),this.setAttribute("position",new m0(K,3)),this.setAttribute("normal",new m0(U,3)),this.setAttribute("uv",new m0(G,2));function F(k,M,N,O,I,L,_,S,C,T,b){let z=L/C,V=_/T,P=L/2,h=_/2,l=S/2,d=C+1,o=T+1,c=0,a=0,m=new j;for(let HJ=0;HJ<o;HJ++){let KJ=HJ*V-h;for(let BJ=0;BJ<d;BJ++){let dJ=BJ*z-P;m[k]=dJ*O,m[M]=KJ*I,m[N]=l,K.push(m.x,m.y,m.z),m[k]=0,m[M]=0,m[N]=S>0?1:-1,U.push(m.x,m.y,m.z),G.push(BJ/C),G.push(1-HJ/T),c+=1}}for(let HJ=0;HJ<T;HJ++)for(let KJ=0;KJ<C;KJ++){let BJ=E+KJ+d*HJ,dJ=E+KJ+d*(HJ+1),rJ=E+(KJ+1)+d*(HJ+1),gJ=E+(KJ+1)+d*HJ;X.push(BJ,dJ,gJ),X.push(dJ,rJ,gJ),a+=6}Y.addGroup(q,a,b),q+=a,E+=c}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new y9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function $9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function B0(J){let Q={};for(let $=0;$<J.length;$++){let Z=$9(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function yY(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function q$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return nJ.workingColorSpace}var vW={clone:$9,merge:B0},fY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class n0 extends y0{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fY,this.fragmentShader=hY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=$9(J.uniforms),this.uniformsGroups=yY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let H=this.uniforms[Z].value;if(H&&H.isTexture)Q.uniforms[Z]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[Z]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[Z]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[Z]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[Z]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[Z]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[Z]={type:"m4",value:H.toArray()};else Q.uniforms[Z]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class D7 extends H0{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hJ,this.projectionMatrix=new hJ,this.projectionMatrixInverse=new hJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var v8=new j,qZ=new xJ,NZ=new xJ;class D0 extends D7{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=t8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(J6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return t8*2*Math.atan(Math.tan(J6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){v8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(v8.x,v8.y).multiplyScalar(-J/v8.z),v8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(v8.x,v8.y).multiplyScalar(-J/v8.z)}getViewSize(J,Q){return this.getViewBounds(J,qZ,NZ),Q.subVectors(NZ,qZ)}setViewOffset(J,Q,$,Z,W,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(J6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:K}=H;W+=H.offsetX*Z/X,Q-=H.offsetY*$/K,Z*=H.width/X,$*=H.height/K}let Y=this.filmOffset;if(Y!==0)W+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var D9=-90,L9=1;class N$ extends H0{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new D0(D9,L9,J,Q);Z.layers=this.layers,this.add(Z);let W=new D0(D9,L9,J,Q);W.layers=this.layers,this.add(W);let H=new D0(D9,L9,J,Q);H.layers=this.layers,this.add(H);let Y=new D0(D9,L9,J,Q);Y.layers=this.layers,this.add(Y);let X=new D0(D9,L9,J,Q);X.layers=this.layers,this.add(X);let K=new D0(D9,L9,J,Q);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,H,Y,X]=Q;for(let K of Q)this.remove(K);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of Q)this.add(K),K.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,H,Y,X,K,U]=this.children,G=J.getRenderTarget(),E=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let k=$.texture.generateMipmaps;$.texture.generateMipmaps=!1,J.setRenderTarget($,0,Z),J.render(Q,W),J.setRenderTarget($,1,Z),J.render(Q,H),J.setRenderTarget($,2,Z),J.render(Q,Y),J.setRenderTarget($,3,Z),J.render(Q,X),J.setRenderTarget($,4,Z),J.render(Q,K),$.texture.generateMipmaps=k,J.setRenderTarget($,5,Z),J.render(Q,U),J.setRenderTarget(G,E,q),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class L7 extends O0{constructor(J=[],Q=301,$,Z,W,H,Y,X,K,U){super(J,Q,$,Z,W,H,Y,X,K,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class O$ extends C8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new L7(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new y9(5,5,5),W=new n0({name:"CubemapFromEquirect",uniforms:$9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let H=new z0(Z,W),Y=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new N$(1,10,this).update(J,H),Q.minFilter=Y,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,$,Z);J.setRenderTarget(W)}}class d0 extends H0{constructor(){super();this.isGroup=!0,this.type="Group"}}var bY={type:"move"};class G6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new d0,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new d0,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new d0,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,H=null,Y=this._targetRay,X=this._grip,K=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(K&&J.hand){H=!0;for(let k of J.hand.values()){let M=Q.getJointPose(k,$),N=this._getHandJoint(K,k);if(M!==null)N.matrix.fromArray(M.transform.matrix),N.matrix.decompose(N.position,N.rotation,N.scale),N.matrixWorldNeedsUpdate=!0,N.jointRadius=M.radius;N.visible=M!==null}let U=K.joints["index-finger-tip"],G=K.joints["thumb-tip"],E=U.position.distanceTo(G.position),q=0.02,F=0.005;if(K.inputState.pinching&&E>q+F)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&E<=q-F)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(X.matrix.fromArray(W.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,W.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(W.linearVelocity);else X.hasLinearVelocity=!1;if(W.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(W.angularVelocity);else X.hasAngularVelocity=!1}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(bY)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=W!==null;if(K!==null)K.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new d0;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}class V7 extends H0{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new e0,this.environmentIntensity=1,this.environmentRotation=new e0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class E6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=t0()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=t0();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=t0();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var C0=new j;class f9{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)C0.fromBufferAttribute(this,Q),C0.applyMatrix4(J),this.setXYZ(Q,C0.x,C0.y,C0.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)C0.fromBufferAttribute(this,Q),C0.applyNormalMatrix(J),this.setXYZ(Q,C0.x,C0.y,C0.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)C0.fromBufferAttribute(this,Q),C0.transformDirection(J),this.setXYZ(Q,C0.x,C0.y,C0.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=r0($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=tJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=tJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=r0(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=r0(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=r0(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=r0(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=tJ(Q,this.array),$=tJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=tJ(Q,this.array),$=tJ($,this.array),Z=tJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=tJ(Q,this.array),$=tJ($,this.array),Z=tJ(Z,this.array),W=tJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return new F0(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new f9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var OZ=new j,FZ=new iJ,RZ=new iJ,xY=new j,MZ=new hJ,l6=new j,KQ=new v0,kZ=new hJ,UQ=new v9;class z7 extends z0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new hJ,this.bindMatrixInverse=new hJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new c0;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,l6),this.boundingBox.expandByPoint(l6)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new v0;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,l6),this.boundingSphere.expandByPoint(l6)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(KQ.copy(this.boundingSphere),KQ.applyMatrix4(Z),J.ray.intersectsSphere(KQ)===!1)return;if(kZ.copy(Z).invert(),UQ.copy(J.ray).applyMatrix4(kZ),this.boundingBox!==null){if(UQ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,UQ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new iJ,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;FZ.fromBufferAttribute(Z.attributes.skinIndex,J),RZ.fromBufferAttribute(Z.attributes.skinWeight,J),OZ.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let W=0;W<4;W++){let H=RZ.getComponent(W);if(H!==0){let Y=FZ.getComponent(W);MZ.multiplyMatrices($.bones[Y].matrixWorld,$.boneInverses[Y]),Q.addScaledVector(xY.copy(OZ).applyMatrix4(MZ),H)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class q6 extends H0{constructor(){super();this.isBone=!0,this.type="Bone"}}class h9 extends O0{constructor(J=null,Q=1,$=1,Z,W,H,Y,X,K=1003,U=1003,G,E){super(null,H,Y,X,K,U,Z,W,G,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var DZ=new hJ,gY=new hJ;class N6{constructor(J=[],Q=[]){this.uuid=t0(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new hJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new hJ;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let W=0,H=J.length;W<H;W++){let Y=J[W]?J[W].matrixWorld:gY;DZ.multiplyMatrices(Y,Q[W]),DZ.toArray($,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new N6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new h9(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let W=J.bones[$],H=Q[W];if(H===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),H=new q6;this.bones.push(H),this.boneInverses.push(new hJ().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,W=Q.length;Z<W;Z++){let H=Q[Z];J.bones.push(H.uuid);let Y=$[Z];J.boneInverses.push(Y.toArray())}return J}}class e8 extends F0{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var V9=new hJ,LZ=new hJ,d6=[],VZ=new c0,pY=new hJ,a9=new z0,r9=new v0;class B7 extends z0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new e8(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,pY)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new c0;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,V9),VZ.copy(J.boundingBox).applyMatrix4(V9),this.boundingBox.union(VZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new v0;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,V9),r9.copy(J.boundingSphere).applyMatrix4(V9),this.boundingSphere.union(r9)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=$.length+1,H=J*W+1;for(let Y=0;Y<$.length;Y++)$[Y]=Z[H+Y]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(a9.geometry=this.geometry,a9.material=this.material,a9.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(r9.copy(this.boundingSphere),r9.applyMatrix4($),J.ray.intersectsSphere(r9)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,V9),LZ.multiplyMatrices($,V9),a9.matrixWorld=LZ,a9.raycast(J,d6);for(let H=0,Y=d6.length;H<Y;H++){let X=d6[H];X.instanceId=W,X.object=this,Q.push(X)}d6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new e8(new Float32Array(this.instanceMatrix.count*3).fill(1),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new h9(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,H=0;for(let K=0;K<$.length;K++)H+=$[K];let Y=this.geometry.morphTargetsRelative?1:1-H,X=Z*J;W[X]=Y,W.set($,X+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var GQ=new j,lY=new j,dY=new bJ;class k8{constructor(J=new j(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=GQ.subVectors($,Q).cross(lY.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(GQ),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector($,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||dY.getNormalMatrix(J),Z=this.coplanarPoint(GQ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var r8=new v0,mY=new xJ(0.5,0.5),m6=new j;class O6{constructor(J=new k8,Q=new k8,$=new k8,Z=new k8,W=new k8,H=new k8){this.planes=[J,Q,$,Z,W,H]}set(J,Q,$,Z,W,H){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(W),Y[5].copy(H),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,H=W[0],Y=W[1],X=W[2],K=W[3],U=W[4],G=W[5],E=W[6],q=W[7],F=W[8],k=W[9],M=W[10],N=W[11],O=W[12],I=W[13],L=W[14],_=W[15];if(Z[0].setComponents(K-H,q-U,N-F,_-O).normalize(),Z[1].setComponents(K+H,q+U,N+F,_+O).normalize(),Z[2].setComponents(K+Y,q+G,N+k,_+I).normalize(),Z[3].setComponents(K-Y,q-G,N-k,_-I).normalize(),$)Z[4].setComponents(X,E,M,L).normalize(),Z[5].setComponents(K-X,q-E,N-M,_-L).normalize();else if(Z[4].setComponents(K-X,q-E,N-M,_-L).normalize(),Q===2000)Z[5].setComponents(K+X,q+E,N+M,_+L).normalize();else if(Q===2001)Z[5].setComponents(X,E,M,L).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();r8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();r8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(r8)}intersectsSprite(J){r8.center.set(0,0,0);let Q=mY.distanceTo(J.center);return r8.radius=0.7071067811865476+Q,r8.applyMatrix4(J.matrixWorld),this.intersectsSphere(r8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(m6.x=Z.normal.x>0?J.max.x:J.min.x,m6.y=Z.normal.y>0?J.max.y:J.min.y,m6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(m6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class F6 extends y0{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yJ(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var i6=new j,a6=new j,zZ=new hJ,t9=new v9,u6=new v0,EQ=new j,BZ=new j;class b9 extends H0{constructor(J=new f0,Q=new F6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)i6.fromBufferAttribute(Q,Z-1),a6.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=i6.distanceTo(a6);J.setAttribute("lineDistance",new m0($,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(u6.copy($.boundingSphere),u6.applyMatrix4(Z),u6.radius+=W,J.ray.intersectsSphere(u6)===!1)return;zZ.copy(Z).invert(),t9.copy(J.ray).applyMatrix4(zZ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=this.isLineSegments?2:1,U=$.index,E=$.attributes.position;if(U!==null){let q=Math.max(0,H.start),F=Math.min(U.count,H.start+H.count);for(let k=q,M=F-1;k<M;k+=K){let N=U.getX(k),O=U.getX(k+1),I=c6(this,J,t9,X,N,O,k);if(I)Q.push(I)}if(this.isLineLoop){let k=U.getX(F-1),M=U.getX(q),N=c6(this,J,t9,X,k,M,F-1);if(N)Q.push(N)}}else{let q=Math.max(0,H.start),F=Math.min(E.count,H.start+H.count);for(let k=q,M=F-1;k<M;k+=K){let N=c6(this,J,t9,X,k,k+1,k);if(N)Q.push(N)}if(this.isLineLoop){let k=c6(this,J,t9,X,F-1,q,F-1);if(k)Q.push(k)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function c6(J,Q,$,Z,W,H,Y){let X=J.geometry.attributes.position;if(i6.fromBufferAttribute(X,W),a6.fromBufferAttribute(X,H),$.distanceSqToSegment(i6,a6,EQ,BZ)>Z)return;EQ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(EQ);if(U<Q.near||U>Q.far)return;return{distance:U,point:BZ.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var _Z=new j,CZ=new j;class _7 extends b9{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)_Z.fromBufferAttribute(Q,Z),CZ.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+_Z.distanceTo(CZ);J.setAttribute("lineDistance",new m0($,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C7 extends b9{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class R6 extends y0{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yJ(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var IZ=new hJ,FQ=new v9,n6=new v0,s6=new j;class I7 extends H0{constructor(J=new f0,Q=new R6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(n6.copy($.boundingSphere),n6.applyMatrix4(Z),n6.radius+=W,J.ray.intersectsSphere(n6)===!1)return;IZ.copy(Z).invert(),FQ.copy(J.ray).applyMatrix4(IZ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=$.index,G=$.attributes.position;if(K!==null){let E=Math.max(0,H.start),q=Math.min(K.count,H.start+H.count);for(let F=E,k=q;F<k;F++){let M=K.getX(F);s6.fromBufferAttribute(G,M),PZ(s6,M,X,Z,J,Q,this)}}else{let E=Math.max(0,H.start),q=Math.min(G.count,H.start+H.count);for(let F=E,k=q;F<k;F++)s6.fromBufferAttribute(G,F),PZ(s6,F,X,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function PZ(J,Q,$,Z,W,H,Y){let X=FQ.distanceSqToPoint(J);if(X<$){let K=new j;FQ.closestPointToPoint(J,K),K.applyMatrix4(Z);let U=W.ray.origin.distanceTo(K);if(U<W.near||U>W.far)return;H.push({distance:U,distanceToRay:Math.sqrt(X),point:K,index:Q,face:null,faceIndex:null,barycoord:null,object:Y})}}class P7 extends O0{constructor(J,Q,$=1014,Z,W,H,Y=1003,X=1003,K,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:G};super(E,Z,W,H,Y,X,U,$,K);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new U6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class w7 extends O0{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class M6 extends f0{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,H=Q/2,Y=Math.floor($),X=Math.floor(Z),K=Y+1,U=X+1,G=J/Y,E=Q/X,q=[],F=[],k=[],M=[];for(let N=0;N<U;N++){let O=N*E-H;for(let I=0;I<K;I++){let L=I*G-W;F.push(L,-O,0),k.push(0,0,1),M.push(I/Y),M.push(1-N/X)}}for(let N=0;N<X;N++)for(let O=0;O<Y;O++){let I=O+K*N,L=O+K*(N+1),_=O+1+K*(N+1),S=O+1+K*N;q.push(I,L,S),q.push(L,_,S)}this.setIndex(q),this.setAttribute("position",new m0(F,3)),this.setAttribute("normal",new m0(k,3)),this.setAttribute("uv",new m0(M,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new M6(J.width,J.height,J.widthSegments,J.heightSegments)}}class x9 extends y0{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yJ(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new xJ(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new e0,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class h0 extends x9{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xJ(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yJ(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yJ(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yJ(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class F$ extends y0{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class R$ extends y0{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function o6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function uY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function cY(J){function Q(W,H){return J[W]-J[H]}let $=J.length,Z=Array($);for(let W=0;W!==$;++W)Z[W]=W;return Z.sort(Q),Z}function wZ(J,Q,$){let Z=J.length,W=new J.constructor(Z);for(let H=0,Y=0;Y!==Z;++H){let X=$[H]*Q;for(let K=0;K!==Q;++K)W[Y++]=J[X+K]}return W}function yW(J,Q,$,Z){let W=1,H=J[0];while(H!==void 0&&H[Z]===void 0)H=J[W++];if(H===void 0)return;let Y=H[Z];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=H[Z],Y!==void 0)Q.push(H.time),$.push(...Y);H=J[W++]}while(H!==void 0);else if(Y.toArray!==void 0)do{if(Y=H[Z],Y!==void 0)Q.push(H.time),Y.toArray($,$.length);H=J[W++]}while(H!==void 0);else do{if(Y=H[Z],Y!==void 0)Q.push(H.time),$.push(Y);H=J[W++]}while(H!==void 0)}class p8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let H;Q:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(W=Z,Z=Q[++$],J<Z)break J}H=Q.length;break Q}if(!(J>=W)){let Y=Q[1];if(J<Y)$=2,W=Y;for(let X=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===X)break;if(Z=W,W=Q[--$-1],J>=W)break J}H=$,$=0;break Q}break $}while($<H){let Y=$+H>>>1;if(J<Q[Y])H=Y;else $=Y+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let H=0;H!==Z;++H)Q[H]=$[W+H];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class M$ extends p8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,H=J+1,Y=Z[W],X=Z[H];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,Y=2*Q-$;break;case 2402:W=Z.length-2,Y=Q+Z[W]-Z[W+1];break;default:W=J,Y=$}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,X=2*$-Q;break;case 2402:H=1,X=$+Z[1]-Z[0];break;default:H=J-1,X=Q}let K=($-Q)*0.5,U=this.valueSize;this._weightPrev=K/(Q-Y),this._weightNext=K/(X-$),this._offsetPrev=W*U,this._offsetNext=H*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,q=this._weightNext,F=($-Q)/(Z-Q),k=F*F,M=k*F,N=-E*M+2*E*k-E*F,O=(1+E)*M+(-1.5-2*E)*k+(-0.5+E)*F+1,I=(-1-q)*M+(1.5+q)*k+0.5*F,L=q*M-q*k;for(let _=0;_!==Y;++_)W[_]=N*H[U+_]+O*H[K+_]+I*H[X+_]+L*H[G+_];return W}}class k$ extends p8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=($-Q)/(Z-Q),G=1-U;for(let E=0;E!==Y;++E)W[E]=H[K+E]*G+H[X+E]*U;return W}}class D$ extends p8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class b0{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=o6(Q,this.TimeBufferType),this.values=o6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:o6(J.times,Array),values:o6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new D$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new k$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new M$(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return console.warn("THREE.KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,H=Z-1;while(W!==Z&&$[W]<J)++W;while(H!==-1&&$[H]>Q)--H;if(++H,W!==0||H!==Z){if(W>=H)H=Math.max(H,1),W=H-1;let Y=this.getValueSize();this.times=$.slice(W,H),this.values=this.values.slice(W*Y,H*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let Y=0;Y!==W;Y++){let X=$[Y];if(typeof X==="number"&&isNaN(X)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(H!==null&&H>X){console.error("THREE.KeyframeTrack: Out of order keys.",this,Y,X,H),J=!1;break}H=X}if(Z!==void 0){if(uY(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let K=Z[Y];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Y,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,H=1;for(let Y=1;Y<W;++Y){let X=!1,K=J[Y],U=J[Y+1];if(K!==U&&(Y!==1||K!==J[0]))if(!Z){let G=Y*$,E=G-$,q=G+$;for(let F=0;F!==$;++F){let k=Q[G+F];if(k!==Q[E+F]||k!==Q[q+F]){X=!0;break}}}else X=!0;if(X){if(Y!==H){J[H]=J[Y];let G=Y*$,E=H*$;for(let q=0;q!==$;++q)Q[E+q]=Q[G+q]}++H}}if(W>0){J[H]=J[W];for(let Y=W*$,X=H*$,K=0;K!==$;++K)Q[X+K]=Q[Y+K];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}b0.prototype.ValueTypeName="";b0.prototype.TimeBufferType=Float32Array;b0.prototype.ValueBufferType=Float32Array;b0.prototype.DefaultInterpolation=2301;class l8 extends b0{constructor(J,Q,$){super(J,Q,$)}}l8.prototype.ValueTypeName="bool";l8.prototype.ValueBufferType=Array;l8.prototype.DefaultInterpolation=2300;l8.prototype.InterpolantFactoryMethodLinear=void 0;l8.prototype.InterpolantFactoryMethodSmooth=void 0;class T7 extends b0{constructor(J,Q,$,Z){super(J,Q,$,Z)}}T7.prototype.ValueTypeName="color";class L8 extends b0{constructor(J,Q,$,Z){super(J,Q,$,Z)}}L8.prototype.ValueTypeName="number";class L$ extends p8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=($-Q)/(Z-Q),K=J*Y;for(let U=K+Y;K!==U;K+=4)$8.slerpFlat(W,0,H,K-Y,H,K,X);return W}}class I8 extends b0{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new L$(this.times,this.values,this.getValueSize(),J)}}I8.prototype.ValueTypeName="quaternion";I8.prototype.InterpolantFactoryMethodSmooth=void 0;class d8 extends b0{constructor(J,Q,$){super(J,Q,$)}}d8.prototype.ValueTypeName="string";d8.prototype.ValueBufferType=Array;d8.prototype.DefaultInterpolation=2300;d8.prototype.InterpolantFactoryMethodLinear=void 0;d8.prototype.InterpolantFactoryMethodSmooth=void 0;class V8 extends b0{constructor(J,Q,$,Z){super(J,Q,$,Z)}}V8.prototype.ValueTypeName="vector";class A7{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=t0(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let H=0,Y=$.length;H!==Y;++H)Q.push(sY($[H]).scale(Z));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W.userData=JSON.parse(J.userData||"{}"),W}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let W=0,H=$.length;W!==H;++W)Q.push(b0.toJSON($[W]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let W=Q.length,H=[];for(let Y=0;Y<W;Y++){let X=[],K=[];X.push((Y+W-1)%W,Y,(Y+1)%W),K.push(0,1,0);let U=cY(X);if(X=wZ(X,1,U),K=wZ(K,1,U),!Z&&X[0]===0)X.push(W),K.push(K[0]);H.push(new L8(".morphTargetInfluences["+Q[Y].name+"]",X,K).scale(1/$))}return new this(J,-1,H)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=K.name.match(W);if(U&&U.length>1){let G=U[1],E=Z[G];if(!E)Z[G]=E=[];E.push(K)}}let H=[];for(let Y in Z)H.push(this.CreateFromMorphTargetSequence(Y,Z[Y],Q,$));return H}static parseAnimation(J,Q){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let $=function(G,E,q,F,k){if(q.length!==0){let M=[],N=[];if(yW(q,M,N,F),M.length!==0)k.push(new G(E,M,N))}},Z=[],W=J.name||"default",H=J.fps||30,Y=J.blendMode,X=J.length||-1,K=J.hierarchy||[];for(let G=0;G<K.length;G++){let E=K[G].keys;if(!E||E.length===0)continue;if(E[0].morphTargets){let q={},F;for(F=0;F<E.length;F++)if(E[F].morphTargets)for(let k=0;k<E[F].morphTargets.length;k++)q[E[F].morphTargets[k]]=-1;for(let k in q){let M=[],N=[];for(let O=0;O!==E[F].morphTargets.length;++O){let I=E[F];M.push(I.time),N.push(I.morphTarget===k?1:0)}Z.push(new L8(".morphTargetInfluence["+k+"]",M,N))}X=q.length*H}else{let q=".bones["+Q[G].name+"]";$(V8,q+".position",E,"pos",Z),$(I8,q+".quaternion",E,"rot",Z),$(V8,q+".scale",E,"scl",Z)}}if(Z.length===0)return null;return new this(W,X,Z,Y)}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let W=this.tracks[$];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function nY(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return L8;case"vector":case"vector2":case"vector3":case"vector4":return V8;case"color":return T7;case"quaternion":return I8;case"bool":case"boolean":return l8;case"string":return d8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function sY(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=nY(J.type);if(J.times===void 0){let $=[],Z=[];yW(J.keys,$,Z,"value"),J.times=$,J.values=Z}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var H8={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class V${constructor(J,Q,$){let Z=this,W=!1,H=0,Y=0,X=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this.abortController=new AbortController,this.itemStart=function(U){if(Y++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,H,Y)}W=!0},this.itemEnd=function(U){if(H++,Z.onProgress!==void 0)Z.onProgress(U,H,Y);if(H===Y){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,G){return K.push(U,G),this},this.removeHandler=function(U){let G=K.indexOf(U);if(G!==-1)K.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=K.length;G<E;G+=2){let q=K[G],F=K[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var fW=new V$;class P8{constructor(J){this.manager=J!==void 0?J:fW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}P8.DEFAULT_MATERIAL_NAME="__DEFAULT";var M8={};class hW extends Error{constructor(J,Q){super(J);this.response=Q}}class k6 extends P8{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=H8.get(`file:${J}`);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(M8[J]!==void 0){M8[J].push({onLoad:Q,onProgress:$,onError:Z});return}M8[J]=[],M8[J].push({onLoad:Q,onProgress:$,onError:Z});let H=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Y=this.mimeType,X=this.responseType;fetch(H).then((K)=>{if(K.status===200||K.status===0){if(K.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||K.body===void 0||K.body.getReader===void 0)return K;let U=M8[J],G=K.body.getReader(),E=K.headers.get("X-File-Size")||K.headers.get("Content-Length"),q=E?parseInt(E):0,F=q!==0,k=0,M=new ReadableStream({start(N){O();function O(){G.read().then(({done:I,value:L})=>{if(I)N.close();else{k+=L.byteLength;let _=new ProgressEvent("progress",{lengthComputable:F,loaded:k,total:q});for(let S=0,C=U.length;S<C;S++){let T=U[S];if(T.onProgress)T.onProgress(_)}N.enqueue(L),O()}},(I)=>{N.error(I)})}}});return new Response(M)}else throw new hW(`fetch for "${K.url}" responded with ${K.status}: ${K.statusText}`,K)}).then((K)=>{switch(X){case"arraybuffer":return K.arrayBuffer();case"blob":return K.blob();case"document":return K.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return K.json();default:if(Y==="")return K.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(Y),E=G&&G[1]?G[1].toLowerCase():void 0,q=new TextDecoder(E);return K.arrayBuffer().then((F)=>q.decode(F))}}}).then((K)=>{H8.add(`file:${J}`,K);let U=M8[J];delete M8[J];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onLoad)q.onLoad(K)}}).catch((K)=>{let U=M8[J];if(U===void 0)throw this.manager.itemError(J),K;delete M8[J];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onError)q.onError(K)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var z9=new WeakMap;class z$ extends P8{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=H8.get(`image:${J}`);if(H!==void 0){if(H.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0);else{let G=z9.get(H);if(G===void 0)G=[],z9.set(H,G);G.push({onLoad:Q,onError:Z})}return H}let Y=_9("img");function X(){if(U(),Q)Q(this);let G=z9.get(this)||[];for(let E=0;E<G.length;E++){let q=G[E];if(q.onLoad)q.onLoad(this)}z9.delete(this),W.manager.itemEnd(J)}function K(G){if(U(),Z)Z(G);H8.remove(`image:${J}`);let E=z9.get(this)||[];for(let q=0;q<E.length;q++){let F=E[q];if(F.onError)F.onError(G)}z9.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",K,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return H8.add(`image:${J}`,Y),W.manager.itemStart(J),Y.src=J,Y}}class g9 extends P8{constructor(J){super(J)}load(J,Q,$,Z){let W=new O0,H=new z$(this.manager);return H.setCrossOrigin(this.crossOrigin),H.setPath(this.path),H.load(J,function(Y){if(W.image=Y,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}class D6 extends H0{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new yJ(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}var qQ=new hJ,TZ=new j,AZ=new j;class S7{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xJ(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new hJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new O6,this._frameExtents=new xJ(1,1),this._viewportCount=1,this._viewports=[new iJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(TZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(TZ),AZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(AZ),Q.updateMatrixWorld(),qQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qQ,Q.coordinateSystem,Q.reversedDepth),Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(qQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class bW extends S7{constructor(){super(new D0(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=t8*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class j7 extends D6{constructor(J,Q,$=0,Z=Math.PI/3,W=0,H=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(H0.DEFAULT_UP),this.updateMatrix(),this.target=new H0,this.distance=$,this.angle=Z,this.penumbra=W,this.decay=H,this.map=null,this.shadow=new bW}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var SZ=new hJ,e9=new j,NQ=new j;class xW extends S7{constructor(){super(new D0(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new xJ(4,2),this._viewportCount=6,this._viewports=[new iJ(2,1,1,1),new iJ(0,1,1,1),new iJ(3,1,1,1),new iJ(1,1,1,1),new iJ(3,0,1,1),new iJ(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(J,Q=0){let $=this.camera,Z=this.matrix,W=J.distance||$.far;if(W!==$.far)$.far=W,$.updateProjectionMatrix();e9.setFromMatrixPosition(J.matrixWorld),$.position.copy(e9),NQ.copy($.position),NQ.add(this._cubeDirections[Q]),$.up.copy(this._cubeUps[Q]),$.lookAt(NQ),$.updateMatrixWorld(),Z.makeTranslation(-e9.x,-e9.y,-e9.z),SZ.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(SZ,$.coordinateSystem,$.reversedDepth)}}class v7 extends D6{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new xW}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class m8 extends D7{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,H=$+J,Y=Z+Q,X=Z-Q;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=K*this.view.offsetX,H=W+K*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(W,H,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class gW extends S7{constructor(){super(new m8(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class y7 extends D6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(H0.DEFAULT_UP),this.updateMatrix(),this.target=new H0,this.shadow=new gW}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class u8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var OQ=new WeakMap;class f7 extends P8{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=H8.get(`image-bitmap:${J}`);if(H!==void 0){if(W.manager.itemStart(J),H.then){H.then((K)=>{if(OQ.has(H)===!0){if(Z)Z(OQ.get(H));W.manager.itemError(J),W.manager.itemEnd(J)}else{if(Q)Q(K);return W.manager.itemEnd(J),K}});return}return setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0),H}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader,Y.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,Y).then(function(K){return K.blob()}).then(function(K){return createImageBitmap(K,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(K){if(H8.add(`image-bitmap:${J}`,K),Q)Q(K);return W.manager.itemEnd(J),K}).catch(function(K){if(Z)Z(K);OQ.set(X,K),H8.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});H8.add(`image-bitmap:${J}`,X),W.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class B$ extends D0{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var _$="\\[\\]\\.:\\/",oY=new RegExp("["+_$+"]","g"),C$="[^"+_$+"]",iY="[^"+_$.replace("\\.","")+"]",aY=/((?:WC+[\/:])*)/.source.replace("WC",C$),rY=/(WCOD+)?/.source.replace("WCOD",iY),tY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",C$),eY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",C$),JX=new RegExp("^"+aY+rY+tY+eY+"$"),QX=["material","materials","bones","map"];class pW{constructor(J,Q,$){let Z=$||aJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class aJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||aJ.parseTrackName(Q),this.node=aJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new aJ(J,Q,$);else return new aJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(oY,"")}static parseTrackName(J){let Q=JX.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(QX.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let H=0;H<W.length;H++){let Y=W[H];if(Y.name===Q||Y.uuid===Q)return Y;let X=$(Y.children);if(X)return X}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=aJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if($){let K=Q.objectIndex;switch($){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===K){K=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(K!==void 0){if(J[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let H=J[Z];if(H===void 0){let K=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}X=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=W}else if(H.fromArray!==void 0&&H.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))X=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}aJ.Composite=pW;aJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};aJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};aJ.prototype.GetterByBindingType=[aJ.prototype._getValue_direct,aJ.prototype._getValue_array,aJ.prototype._getValue_arrayElement,aJ.prototype._getValue_toArray];aJ.prototype.SetterByBindingTypeAndVersioning=[[aJ.prototype._setValue_direct,aJ.prototype._setValue_direct_setNeedsUpdate,aJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[aJ.prototype._setValue_array,aJ.prototype._setValue_array_setNeedsUpdate,aJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[aJ.prototype._setValue_arrayElement,aJ.prototype._setValue_arrayElement_setNeedsUpdate,aJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[aJ.prototype._setValue_fromArray,aJ.prototype._setValue_fromArray_setNeedsUpdate,aJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sE=new Float32Array(1);function I$(J,Q,$,Z){let W=$X(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function $X(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="180";function GH(){let J=null,Q=!1,$=null,Z=null;function W(H,Y){$(H,Y),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(H){$=H},setContext:function(H){J=H}}}function ZX(J){let Q=new WeakMap;function $(X,K){let{array:U,usage:G}=X,E=U.byteLength,q=J.createBuffer();J.bindBuffer(K,q),J.bufferData(K,U,G),X.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:E}}function Z(X,K,U){let{array:G,updateRanges:E}=K;if(J.bindBuffer(U,X),E.length===0)J.bufferSubData(U,0,G);else{E.sort((F,k)=>F.start-k.start);let q=0;for(let F=1;F<E.length;F++){let k=E[q],M=E[F];if(M.start<=k.start+k.count+1)k.count=Math.max(k.count,M.start+M.count-k.start);else++q,E[q]=M}E.length=q+1;for(let F=0,k=E.length;F<k;F++){let M=E[F];J.bufferSubData(U,M.start*G.BYTES_PER_ELEMENT,G,M.start,M.count)}K.clearUpdateRanges()}K.onUploadCallback()}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function H(X){if(X.isInterleavedBufferAttribute)X=X.data;let K=Q.get(X);if(K)J.deleteBuffer(K.buffer),Q.delete(X)}function Y(X,K){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let G=Q.get(X);if(!G||G.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,$(X,K));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,K),U.version=X.version}}return{get:W,remove:H,update:Y}}var WX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HX=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UX=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GX=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qX=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RX=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,MX=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kX=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DX=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BX=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_X=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IX=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,PX=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wX=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TX=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yX="gl_FragColor = linearToOutputTexel( gl_FragColor );",fX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hX=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xX=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pX=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cX=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oX=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iX=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aX=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tX=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eX=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JK=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QK=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$K=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZK=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WK=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HK=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YK=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XK=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KK=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UK=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GK=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EK=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qK=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NK=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OK=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FK=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RK=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MK=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kK=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DK=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LK=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VK=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zK=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_K=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CK=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IK=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PK=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wK=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TK=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AK=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SK=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jK=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vK=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yK=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fK=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hK=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bK=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xK=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gK=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pK=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lK=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dK=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mK=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uK=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cK=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nK=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sK=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oK=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iK=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aK=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rK=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tK=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eK=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$U=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ZU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WU=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GU=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,EU=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,NU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FU=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RU=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kU=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DU=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VU=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zU=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BU=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_U=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CU=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pJ={alphahash_fragment:WX,alphahash_pars_fragment:HX,alphamap_fragment:YX,alphamap_pars_fragment:XX,alphatest_fragment:KX,alphatest_pars_fragment:UX,aomap_fragment:GX,aomap_pars_fragment:EX,batching_pars_vertex:qX,batching_vertex:NX,begin_vertex:OX,beginnormal_vertex:FX,bsdfs:RX,iridescence_fragment:MX,bumpmap_pars_fragment:kX,clipping_planes_fragment:DX,clipping_planes_pars_fragment:LX,clipping_planes_pars_vertex:VX,clipping_planes_vertex:zX,color_fragment:BX,color_pars_fragment:_X,color_pars_vertex:CX,color_vertex:IX,common:PX,cube_uv_reflection_fragment:wX,defaultnormal_vertex:TX,displacementmap_pars_vertex:AX,displacementmap_vertex:SX,emissivemap_fragment:jX,emissivemap_pars_fragment:vX,colorspace_fragment:yX,colorspace_pars_fragment:fX,envmap_fragment:hX,envmap_common_pars_fragment:bX,envmap_pars_fragment:xX,envmap_pars_vertex:gX,envmap_physical_pars_fragment:aX,envmap_vertex:pX,fog_vertex:lX,fog_pars_vertex:dX,fog_fragment:mX,fog_pars_fragment:uX,gradientmap_pars_fragment:cX,lightmap_pars_fragment:nX,lights_lambert_fragment:sX,lights_lambert_pars_fragment:oX,lights_pars_begin:iX,lights_toon_fragment:rX,lights_toon_pars_fragment:tX,lights_phong_fragment:eX,lights_phong_pars_fragment:JK,lights_physical_fragment:QK,lights_physical_pars_fragment:$K,lights_fragment_begin:ZK,lights_fragment_maps:WK,lights_fragment_end:HK,logdepthbuf_fragment:YK,logdepthbuf_pars_fragment:XK,logdepthbuf_pars_vertex:KK,logdepthbuf_vertex:UK,map_fragment:GK,map_pars_fragment:EK,map_particle_fragment:qK,map_particle_pars_fragment:NK,metalnessmap_fragment:OK,metalnessmap_pars_fragment:FK,morphinstance_vertex:RK,morphcolor_vertex:MK,morphnormal_vertex:kK,morphtarget_pars_vertex:DK,morphtarget_vertex:LK,normal_fragment_begin:VK,normal_fragment_maps:zK,normal_pars_fragment:BK,normal_pars_vertex:_K,normal_vertex:CK,normalmap_pars_fragment:IK,clearcoat_normal_fragment_begin:PK,clearcoat_normal_fragment_maps:wK,clearcoat_pars_fragment:TK,iridescence_pars_fragment:AK,opaque_fragment:SK,packing:jK,premultiplied_alpha_fragment:vK,project_vertex:yK,dithering_fragment:fK,dithering_pars_fragment:hK,roughnessmap_fragment:bK,roughnessmap_pars_fragment:xK,shadowmap_pars_fragment:gK,shadowmap_pars_vertex:pK,shadowmap_vertex:lK,shadowmask_pars_fragment:dK,skinbase_vertex:mK,skinning_pars_vertex:uK,skinning_vertex:cK,skinnormal_vertex:nK,specularmap_fragment:sK,specularmap_pars_fragment:oK,tonemapping_fragment:iK,tonemapping_pars_fragment:aK,transmission_fragment:rK,transmission_pars_fragment:tK,uv_pars_fragment:eK,uv_pars_vertex:JU,uv_vertex:QU,worldpos_vertex:$U,background_vert:ZU,background_frag:WU,backgroundCube_vert:HU,backgroundCube_frag:YU,cube_vert:XU,cube_frag:KU,depth_vert:UU,depth_frag:GU,distanceRGBA_vert:EU,distanceRGBA_frag:qU,equirect_vert:NU,equirect_frag:OU,linedashed_vert:FU,linedashed_frag:RU,meshbasic_vert:MU,meshbasic_frag:kU,meshlambert_vert:DU,meshlambert_frag:LU,meshmatcap_vert:VU,meshmatcap_frag:zU,meshnormal_vert:BU,meshnormal_frag:_U,meshphong_vert:CU,meshphong_frag:IU,meshphysical_vert:PU,meshphysical_frag:wU,meshtoon_vert:TU,meshtoon_frag:AU,points_vert:SU,points_frag:jU,shadow_vert:vU,shadow_frag:yU,sprite_vert:fU,sprite_frag:hU},YJ={common:{diffuse:{value:new yJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bJ},alphaMap:{value:null},alphaMapTransform:{value:new bJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bJ}},envmap:{envMap:{value:null},envMapRotation:{value:new bJ},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bJ},normalScale:{value:new xJ(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new yJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bJ},alphaTest:{value:0},uvTransform:{value:new bJ}},sprite:{diffuse:{value:new yJ(16777215)},opacity:{value:1},center:{value:new xJ(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bJ},alphaMap:{value:null},alphaMapTransform:{value:new bJ},alphaTest:{value:0}}},G8={basic:{uniforms:B0([YJ.common,YJ.specularmap,YJ.envmap,YJ.aomap,YJ.lightmap,YJ.fog]),vertexShader:pJ.meshbasic_vert,fragmentShader:pJ.meshbasic_frag},lambert:{uniforms:B0([YJ.common,YJ.specularmap,YJ.envmap,YJ.aomap,YJ.lightmap,YJ.emissivemap,YJ.bumpmap,YJ.normalmap,YJ.displacementmap,YJ.fog,YJ.lights,{emissive:{value:new yJ(0)}}]),vertexShader:pJ.meshlambert_vert,fragmentShader:pJ.meshlambert_frag},phong:{uniforms:B0([YJ.common,YJ.specularmap,YJ.envmap,YJ.aomap,YJ.lightmap,YJ.emissivemap,YJ.bumpmap,YJ.normalmap,YJ.displacementmap,YJ.fog,YJ.lights,{emissive:{value:new yJ(0)},specular:{value:new yJ(1118481)},shininess:{value:30}}]),vertexShader:pJ.meshphong_vert,fragmentShader:pJ.meshphong_frag},standard:{uniforms:B0([YJ.common,YJ.envmap,YJ.aomap,YJ.lightmap,YJ.emissivemap,YJ.bumpmap,YJ.normalmap,YJ.displacementmap,YJ.roughnessmap,YJ.metalnessmap,YJ.fog,YJ.lights,{emissive:{value:new yJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pJ.meshphysical_vert,fragmentShader:pJ.meshphysical_frag},toon:{uniforms:B0([YJ.common,YJ.aomap,YJ.lightmap,YJ.emissivemap,YJ.bumpmap,YJ.normalmap,YJ.displacementmap,YJ.gradientmap,YJ.fog,YJ.lights,{emissive:{value:new yJ(0)}}]),vertexShader:pJ.meshtoon_vert,fragmentShader:pJ.meshtoon_frag},matcap:{uniforms:B0([YJ.common,YJ.bumpmap,YJ.normalmap,YJ.displacementmap,YJ.fog,{matcap:{value:null}}]),vertexShader:pJ.meshmatcap_vert,fragmentShader:pJ.meshmatcap_frag},points:{uniforms:B0([YJ.points,YJ.fog]),vertexShader:pJ.points_vert,fragmentShader:pJ.points_frag},dashed:{uniforms:B0([YJ.common,YJ.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pJ.linedashed_vert,fragmentShader:pJ.linedashed_frag},depth:{uniforms:B0([YJ.common,YJ.displacementmap]),vertexShader:pJ.depth_vert,fragmentShader:pJ.depth_frag},normal:{uniforms:B0([YJ.common,YJ.bumpmap,YJ.normalmap,YJ.displacementmap,{opacity:{value:1}}]),vertexShader:pJ.meshnormal_vert,fragmentShader:pJ.meshnormal_frag},sprite:{uniforms:B0([YJ.sprite,YJ.fog]),vertexShader:pJ.sprite_vert,fragmentShader:pJ.sprite_frag},background:{uniforms:{uvTransform:{value:new bJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pJ.background_vert,fragmentShader:pJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bJ}},vertexShader:pJ.backgroundCube_vert,fragmentShader:pJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pJ.cube_vert,fragmentShader:pJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pJ.equirect_vert,fragmentShader:pJ.equirect_frag},distanceRGBA:{uniforms:B0([YJ.common,YJ.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:pJ.distanceRGBA_vert,fragmentShader:pJ.distanceRGBA_frag},shadow:{uniforms:B0([YJ.lights,YJ.fog,{color:{value:new yJ(0)},opacity:{value:1}}]),vertexShader:pJ.shadow_vert,fragmentShader:pJ.shadow_frag}};G8.physical={uniforms:B0([G8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bJ},clearcoatNormalScale:{value:new xJ(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bJ},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bJ},sheen:{value:0},sheenColor:{value:new yJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bJ},transmissionSamplerSize:{value:new xJ},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bJ},attenuationDistance:{value:0},attenuationColor:{value:new yJ(0)},specularColor:{value:new yJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bJ},anisotropyVector:{value:new xJ},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bJ}}]),vertexShader:pJ.meshphysical_vert,fragmentShader:pJ.meshphysical_frag};var h7={r:0,b:0,g:0},Z9=new e0,bU=new hJ;function xU(J,Q,$,Z,W,H,Y){let X=new yJ(0),K=H===!0?0:1,U,G,E=null,q=0,F=null;function k(L){let _=L.isScene===!0?L.background:null;if(_&&_.isTexture)_=(L.backgroundBlurriness>0?$:Q).get(_);return _}function M(L){let _=!1,S=k(L);if(S===null)O(X,K);else if(S&&S.isColor)O(S,1),_=!0;let C=J.xr.getEnvironmentBlendMode();if(C==="additive")Z.buffers.color.setClear(0,0,0,1,Y);else if(C==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||_)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function N(L,_){let S=k(_);if(S&&(S.isCubeTexture||S.mapping===W6)){if(G===void 0)G=new z0(new y9(1,1,1),new n0({name:"BackgroundCubeMaterial",uniforms:$9(G8.backgroundCube.uniforms),vertexShader:G8.backgroundCube.vertexShader,fragmentShader:G8.backgroundCube.fragmentShader,side:j0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(C,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(Z9.copy(_.backgroundRotation),Z9.x*=-1,Z9.y*=-1,Z9.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1)Z9.y*=-1,Z9.z*=-1;if(G.material.uniforms.envMap.value=S,G.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(bU.makeRotationFromEuler(Z9)),G.material.toneMapped=nJ.getTransfer(S.colorSpace)!==Z0,E!==S||q!==S.version||F!==J.toneMapping)G.material.needsUpdate=!0,E=S,q=S.version,F=J.toneMapping;G.layers.enableAll(),L.unshift(G,G.geometry,G.material,0,0,null)}else if(S&&S.isTexture){if(U===void 0)U=new z0(new M6(2,2),new n0({name:"BackgroundMaterial",uniforms:$9(G8.background.uniforms),vertexShader:G8.background.vertexShader,fragmentShader:G8.background.fragmentShader,side:y8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=S,U.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,U.material.toneMapped=nJ.getTransfer(S.colorSpace)!==Z0,S.matrixAutoUpdate===!0)S.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(S.matrix),E!==S||q!==S.version||F!==J.toneMapping)U.material.needsUpdate=!0,E=S,q=S.version,F=J.toneMapping;U.layers.enableAll(),L.unshift(U,U.geometry,U.material,0,0,null)}}function O(L,_){L.getRGB(h7,q$(J)),Z.buffers.color.setClear(h7.r,h7.g,h7.b,_,Y)}function I(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(L,_=1){X.set(L),K=_,O(X,K)},getClearAlpha:function(){return K},setClearAlpha:function(L){K=L,O(X,K)},render:M,addToRenderList:N,dispose:I}}function gU(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=q(null),H=W,Y=!1;function X(V,P,h,l,d){let o=!1,c=E(l,h,P);if(H!==c)H=c,U(H.object);if(o=F(V,l,h,d),o)k(V,l,h,d);if(d!==null)Q.update(d,J.ELEMENT_ARRAY_BUFFER);if(o||Y){if(Y=!1,_(V,P,h,l),d!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(d).buffer)}}function K(){return J.createVertexArray()}function U(V){return J.bindVertexArray(V)}function G(V){return J.deleteVertexArray(V)}function E(V,P,h){let l=h.wireframe===!0,d=Z[V.id];if(d===void 0)d={},Z[V.id]=d;let o=d[P.id];if(o===void 0)o={},d[P.id]=o;let c=o[l];if(c===void 0)c=q(K()),o[l]=c;return c}function q(V){let P=[],h=[],l=[];for(let d=0;d<$;d++)P[d]=0,h[d]=0,l[d]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:h,attributeDivisors:l,object:V,attributes:{},index:null}}function F(V,P,h,l){let d=H.attributes,o=P.attributes,c=0,a=h.getAttributes();for(let m in a)if(a[m].location>=0){let KJ=d[m],BJ=o[m];if(BJ===void 0){if(m==="instanceMatrix"&&V.instanceMatrix)BJ=V.instanceMatrix;if(m==="instanceColor"&&V.instanceColor)BJ=V.instanceColor}if(KJ===void 0)return!0;if(KJ.attribute!==BJ)return!0;if(BJ&&KJ.data!==BJ.data)return!0;c++}if(H.attributesNum!==c)return!0;if(H.index!==l)return!0;return!1}function k(V,P,h,l){let d={},o=P.attributes,c=0,a=h.getAttributes();for(let m in a)if(a[m].location>=0){let KJ=o[m];if(KJ===void 0){if(m==="instanceMatrix"&&V.instanceMatrix)KJ=V.instanceMatrix;if(m==="instanceColor"&&V.instanceColor)KJ=V.instanceColor}let BJ={};if(BJ.attribute=KJ,KJ&&KJ.data)BJ.data=KJ.data;d[m]=BJ,c++}H.attributes=d,H.attributesNum=c,H.index=l}function M(){let V=H.newAttributes;for(let P=0,h=V.length;P<h;P++)V[P]=0}function N(V){O(V,0)}function O(V,P){let{newAttributes:h,enabledAttributes:l,attributeDivisors:d}=H;if(h[V]=1,l[V]===0)J.enableVertexAttribArray(V),l[V]=1;if(d[V]!==P)J.vertexAttribDivisor(V,P),d[V]=P}function I(){let{newAttributes:V,enabledAttributes:P}=H;for(let h=0,l=P.length;h<l;h++)if(P[h]!==V[h])J.disableVertexAttribArray(h),P[h]=0}function L(V,P,h,l,d,o,c){if(c===!0)J.vertexAttribIPointer(V,P,h,d,o);else J.vertexAttribPointer(V,P,h,l,d,o)}function _(V,P,h,l){M();let d=l.attributes,o=h.getAttributes(),c=P.defaultAttributeValues;for(let a in o){let m=o[a];if(m.location>=0){let HJ=d[a];if(HJ===void 0){if(a==="instanceMatrix"&&V.instanceMatrix)HJ=V.instanceMatrix;if(a==="instanceColor"&&V.instanceColor)HJ=V.instanceColor}if(HJ!==void 0){let{normalized:KJ,itemSize:BJ}=HJ,dJ=Q.get(HJ);if(dJ===void 0)continue;let{buffer:rJ,type:gJ,bytesPerElement:u}=dJ,ZJ=gJ===J.INT||gJ===J.UNSIGNED_INT||HJ.gpuType===VQ;if(HJ.isInterleavedBufferAttribute){let QJ=HJ.data,VJ=QJ.stride,AJ=HJ.offset;if(QJ.isInstancedInterleavedBuffer){for(let SJ=0;SJ<m.locationSize;SJ++)O(m.location+SJ,QJ.meshPerAttribute);if(V.isInstancedMesh!==!0&&l._maxInstanceCount===void 0)l._maxInstanceCount=QJ.meshPerAttribute*QJ.count}else for(let SJ=0;SJ<m.locationSize;SJ++)N(m.location+SJ);J.bindBuffer(J.ARRAY_BUFFER,rJ);for(let SJ=0;SJ<m.locationSize;SJ++)L(m.location+SJ,BJ/m.locationSize,gJ,KJ,VJ*u,(AJ+BJ/m.locationSize*SJ)*u,ZJ)}else{if(HJ.isInstancedBufferAttribute){for(let QJ=0;QJ<m.locationSize;QJ++)O(m.location+QJ,HJ.meshPerAttribute);if(V.isInstancedMesh!==!0&&l._maxInstanceCount===void 0)l._maxInstanceCount=HJ.meshPerAttribute*HJ.count}else for(let QJ=0;QJ<m.locationSize;QJ++)N(m.location+QJ);J.bindBuffer(J.ARRAY_BUFFER,rJ);for(let QJ=0;QJ<m.locationSize;QJ++)L(m.location+QJ,BJ/m.locationSize,gJ,KJ,BJ*u,BJ/m.locationSize*QJ*u,ZJ)}}else if(c!==void 0){let KJ=c[a];if(KJ!==void 0)switch(KJ.length){case 2:J.vertexAttrib2fv(m.location,KJ);break;case 3:J.vertexAttrib3fv(m.location,KJ);break;case 4:J.vertexAttrib4fv(m.location,KJ);break;default:J.vertexAttrib1fv(m.location,KJ)}}}}I()}function S(){b();for(let V in Z){let P=Z[V];for(let h in P){let l=P[h];for(let d in l)G(l[d].object),delete l[d];delete P[h]}delete Z[V]}}function C(V){if(Z[V.id]===void 0)return;let P=Z[V.id];for(let h in P){let l=P[h];for(let d in l)G(l[d].object),delete l[d];delete P[h]}delete Z[V.id]}function T(V){for(let P in Z){let h=Z[P];if(h[V.id]===void 0)continue;let l=h[V.id];for(let d in l)G(l[d].object),delete l[d];delete h[V.id]}}function b(){if(z(),Y=!0,H===W)return;H=W,U(H.object)}function z(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:X,reset:b,resetDefaultState:z,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:N,disableUnusedAttributes:I}}function pU(J,Q,$){let Z;function W(U){Z=U}function H(U,G){J.drawArrays(Z,U,G),$.update(G,Z,1)}function Y(U,G,E){if(E===0)return;J.drawArraysInstanced(Z,U,G,E),$.update(G,Z,E)}function X(U,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,G,0,E);let F=0;for(let k=0;k<E;k++)F+=G[k];$.update(F,Z,1)}function K(U,G,E,q){if(E===0)return;let F=Q.get("WEBGL_multi_draw");if(F===null)for(let k=0;k<U.length;k++)Y(U[k],G[k],q[k]);else{F.multiDrawArraysInstancedWEBGL(Z,U,0,G,0,q,0,E);let k=0;for(let M=0;M<E;M++)k+=G[M]*q[M];$.update(k,Z,1)}}this.setMode=W,this.render=H,this.renderInstances=Y,this.renderMultiDraw=X,this.renderMultiDrawInstances=K}function lU(J,Q,$,Z){let W;function H(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let T=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function Y(T){if(T!==X8&&Z.convert(T)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(T){let b=T===Y6&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(T!==h8&&Z.convert(T)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==b8&&!b)return!1;return!0}function K(T){if(T==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";T="mediump"}if(T==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=K(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_TEXTURE_SIZE),N=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),I=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),L=J.getParameter(J.MAX_VARYING_VECTORS),_=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),S=k>0,C=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:K,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:q,maxTextures:F,maxVertexTextures:k,maxTextureSize:M,maxCubemapSize:N,maxAttributes:O,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:_,vertexTextures:S,maxSamples:C}}function dU(J){let Q=this,$=null,Z=0,W=!1,H=!1,Y=new k8,X=new bJ,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(E,q){let F=E.length!==0||q||Z!==0||W;return W=q,Z=E.length,F},this.beginShadows=function(){H=!0,G(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(E,q){$=G(E,q,0)},this.setState=function(E,q,F){let{clippingPlanes:k,clipIntersection:M,clipShadows:N}=E,O=J.get(E);if(!W||k===null||k.length===0||H&&!N)if(H)G(null);else U();else{let I=H?0:Z,L=I*4,_=O.clippingState||null;K.value=_,_=G(k,q,L,F);for(let S=0;S!==L;++S)_[S]=$[S];O.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=I}};function U(){if(K.value!==$)K.value=$,K.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(E,q,F,k){let M=E!==null?E.length:0,N=null;if(M!==0){if(N=K.value,k!==!0||N===null){let O=F+M*4,I=q.matrixWorldInverse;if(X.getNormalMatrix(I),N===null||N.length<O)N=new Float32Array(O);for(let L=0,_=F;L!==M;++L,_+=4)Y.copy(E[L]).applyMatrix4(I,X),Y.normal.toArray(N,_),N[_+3]=Y.constant}K.value=N,K.needsUpdate=!0}return Q.numPlanes=M,Q.numIntersection=0,N}}function mU(J){let Q=new WeakMap;function $(Y,X){if(X===W7)Y.mapping=P9;else if(X===H7)Y.mapping=J9;return Y}function Z(Y){if(Y&&Y.isTexture){let X=Y.mapping;if(X===W7||X===H7)if(Q.has(Y)){let K=Q.get(Y).texture;return $(K,Y.mapping)}else{let K=Y.image;if(K&&K.height>0){let U=new O$(K.height);return U.fromEquirectangularTexture(J,Y),Q.set(Y,U),Y.addEventListener("dispose",W),$(U.texture,Y.mapping)}else return null}}return Y}function W(Y){let X=Y.target;X.removeEventListener("dispose",W);let K=Q.get(X);if(K!==void 0)Q.delete(X),K.dispose()}function H(){Q=new WeakMap}return{get:Z,dispose:H}}var l9=4,lW=[0.125,0.215,0.35,0.446,0.526,0.582],Y9=20,P$=new m8,dW=new yJ,w$=null,T$=0,A$=0,S$=!1,H9=(1+Math.sqrt(5))/2,p9=1/H9,mW=[new j(-H9,p9,0),new j(H9,p9,0),new j(-p9,0,H9),new j(p9,0,H9),new j(0,H9,-p9),new j(0,H9,p9),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],uU=new j;class v${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:H=256,position:Y=uU}=W;w$=this._renderer.getRenderTarget(),T$=this._renderer.getActiveCubeFace(),A$=this._renderer.getActiveMipmapLevel(),S$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(H);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,X,Y),Q>0)this._blur(X,0,0,Q);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=nW(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=cW(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(w$,T$,A$),this._renderer.xr.enabled=S$,J.scissorTest=!1,b7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===P9||J.mapping===J9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);w$=this._renderer.getRenderTarget(),T$=this._renderer.getActiveCubeFace(),A$=this._renderer.getActiveMipmapLevel(),S$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:Q8,minFilter:Q8,generateMipmaps:!1,type:Y6,format:X8,colorSpace:I0,depthBuffer:!1},Z=uW(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=uW(J,Q,$);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cU(W)),this._blurMaterial=nU(W,J,Q)}return Z}_compileMaterial(J){let Q=new z0(this._lodPlanes[0],J);this._renderer.compile(Q,P$)}_sceneToCubeUV(J,Q,$,Z,W){let X=new D0(90,1,Q,$),K=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,q=G.toneMapping;if(G.getClearColor(dW),G.toneMapping=J8,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);let k=new U8({name:"PMREM.Background",side:j0,depthWrite:!1,depthTest:!1}),M=new z0(new y9,k),N=!1,O=J.background;if(O){if(O.isColor)k.color.copy(O),J.background=null,N=!0}else k.color.copy(dW),N=!0;for(let I=0;I<6;I++){let L=I%3;if(L===0)X.up.set(0,K[I],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x+U[I],W.y,W.z);else if(L===1)X.up.set(0,0,K[I]),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y+U[I],W.z);else X.up.set(0,K[I],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y,W.z+U[I]);let _=this._cubeSize;if(b7(Z,L*_,I>2?_:0,_,_),G.setRenderTarget(Z),N)G.render(M,X);G.render(J,X)}M.geometry.dispose(),M.material.dispose(),G.toneMapping=q,G.autoClear=E,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===P9||J.mapping===J9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=nW();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=cW();let W=Z?this._cubemapMaterial:this._equirectMaterial,H=new z0(this._lodPlanes[0],W),Y=W.uniforms;Y.envMap.value=J;let X=this._cubeSize;b7(Q,0,0,3*X,2*X),$.setRenderTarget(Q),$.render(H,P$)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let H=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),Y=mW[(Z-W-1)%mW.length];this._blur(J,W-1,W,H,Y)}Q.autoClear=$}_blur(J,Q,$,Z,W){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Q,$,Z,"latitudinal",W),this._halfBlur(H,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,H,Y){let X=this._renderer,K=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new z0(this._lodPlanes[Z],K),E=K.uniforms,q=this._sizeLods[$]-1,F=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*Y9-1),k=W/F,M=isFinite(W)?1+Math.floor(U*k):Y9;if(M>Y9)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Y9}`);let N=[],O=0;for(let C=0;C<Y9;++C){let T=C/k,b=Math.exp(-T*T/2);if(N.push(b),C===0)O+=b;else if(C<M)O+=2*b}for(let C=0;C<N.length;C++)N[C]=N[C]/O;if(E.envMap.value=J.texture,E.samples.value=M,E.weights.value=N,E.latitudinal.value=H==="latitudinal",Y)E.poleAxis.value=Y;let{_lodMax:I}=this;E.dTheta.value=F,E.mipInt.value=I-$;let L=this._sizeLods[Z],_=3*L*(Z>I-l9?Z-I+l9:0),S=4*(this._cubeSize-L);b7(Q,_,S,3*L,2*L),X.setRenderTarget(Q),X.render(G,P$)}}function cU(J){let Q=[],$=[],Z=[],W=J,H=J-l9+1+lW.length;for(let Y=0;Y<H;Y++){let X=Math.pow(2,W);$.push(X);let K=1/X;if(Y>J-l9)K=lW[Y-J+l9-1];else if(Y===0)K=0;Z.push(K);let U=1/(X-2),G=-U,E=1+U,q=[G,G,E,G,E,E,G,G,E,E,G,E],F=6,k=6,M=3,N=2,O=1,I=new Float32Array(M*k*F),L=new Float32Array(N*k*F),_=new Float32Array(O*k*F);for(let C=0;C<F;C++){let T=C%3*2/3-1,b=C>2?0:-1,z=[T,b,0,T+0.6666666666666666,b,0,T+0.6666666666666666,b+1,0,T,b,0,T+0.6666666666666666,b+1,0,T,b+1,0];I.set(z,M*k*C),L.set(q,N*k*C);let V=[C,C,C,C,C,C];_.set(V,O*k*C)}let S=new f0;if(S.setAttribute("position",new F0(I,M)),S.setAttribute("uv",new F0(L,N)),S.setAttribute("faceIndex",new F0(_,O)),Q.push(S),W>l9)W--}return{lodPlanes:Q,sizeLods:$,sigmas:Z}}function uW(J,Q,$){let Z=new C8(J,Q,$);return Z.texture.mapping=W6,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function b7(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function nU(J,Q,$){let Z=new Float32Array(Y9),W=new j(0,1,0);return new n0({name:"SphericalGaussianBlur",defines:{n:Y9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:f$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:f8,depthTest:!1,depthWrite:!1})}function cW(){return new n0({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:f$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:f8,depthTest:!1,depthWrite:!1})}function nW(){return new n0({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:f$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:f8,depthTest:!1,depthWrite:!1})}function f$(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sU(J){let Q=new WeakMap,$=null;function Z(X){if(X&&X.isTexture){let K=X.mapping,U=K===W7||K===H7,G=K===P9||K===J9;if(U||G){let E=Q.get(X),q=E!==void 0?E.texture.pmremVersion:0;if(X.isRenderTargetTexture&&X.pmremVersion!==q){if($===null)$=new v$(J);return E=U?$.fromEquirectangular(X,E):$.fromCubemap(X,E),E.texture.pmremVersion=X.pmremVersion,Q.set(X,E),E.texture}else if(E!==void 0)return E.texture;else{let F=X.image;if(U&&F&&F.height>0||G&&F&&W(F)){if($===null)$=new v$(J);return E=U?$.fromEquirectangular(X):$.fromCubemap(X),E.texture.pmremVersion=X.pmremVersion,Q.set(X,E),X.addEventListener("dispose",H),E.texture}else return null}}}return X}function W(X){let K=0,U=6;for(let G=0;G<U;G++)if(X[G]!==void 0)K++;return K===U}function H(X){let K=X.target;K.removeEventListener("dispose",H);let U=Q.get(K);if(U!==void 0)Q.delete(K),U.dispose()}function Y(){if(Q=new WeakMap,$!==null)$.dispose(),$=null}return{get:Z,dispose:Y}}function oU(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W;switch(Z){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension(Z)}return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)C9("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function iU(J,Q,$,Z){let W={},H=new WeakMap;function Y(E){let q=E.target;if(q.index!==null)Q.remove(q.index);for(let k in q.attributes)Q.remove(q.attributes[k]);q.removeEventListener("dispose",Y),delete W[q.id];let F=H.get(q);if(F)Q.remove(F),H.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function X(E,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",Y),W[q.id]=!0,$.memory.geometries++,q}function K(E){let q=E.attributes;for(let F in q)Q.update(q[F],J.ARRAY_BUFFER)}function U(E){let q=[],F=E.index,k=E.attributes.position,M=0;if(F!==null){let I=F.array;M=F.version;for(let L=0,_=I.length;L<_;L+=3){let S=I[L+0],C=I[L+1],T=I[L+2];q.push(S,C,C,T,T,S)}}else if(k!==void 0){let I=k.array;M=k.version;for(let L=0,_=I.length/3-1;L<_;L+=3){let S=L+0,C=L+1,T=L+2;q.push(S,C,C,T,T,S)}}else return;let N=new((K$(q))?k7:M7)(q,1);N.version=M;let O=H.get(E);if(O)Q.remove(O);H.set(E,N)}function G(E){let q=H.get(E);if(q){let F=E.index;if(F!==null){if(q.version<F.version)U(E)}}else U(E);return H.get(E)}return{get:X,update:K,getWireframeAttribute:G}}function aU(J,Q,$){let Z;function W(q){Z=q}let H,Y;function X(q){H=q.type,Y=q.bytesPerElement}function K(q,F){J.drawElements(Z,F,H,q*Y),$.update(F,Z,1)}function U(q,F,k){if(k===0)return;J.drawElementsInstanced(Z,F,H,q*Y,k),$.update(F,Z,k)}function G(q,F,k){if(k===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,F,0,H,q,0,k);let N=0;for(let O=0;O<k;O++)N+=F[O];$.update(N,Z,1)}function E(q,F,k,M){if(k===0)return;let N=Q.get("WEBGL_multi_draw");if(N===null)for(let O=0;O<q.length;O++)U(q[O]/Y,F[O],M[O]);else{N.multiDrawElementsInstancedWEBGL(Z,F,0,H,q,0,M,0,k);let O=0;for(let I=0;I<k;I++)O+=F[I]*M[I];$.update(O,Z,1)}}this.setMode=W,this.setIndex=X,this.render=K,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function rU(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(H,Y,X){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=X*(H/3);break;case J.LINES:$.lines+=X*(H/2);break;case J.LINE_STRIP:$.lines+=X*(H-1);break;case J.LINE_LOOP:$.lines+=X*H;break;case J.POINTS:$.points+=X*H;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Y);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function tU(J,Q,$){let Z=new WeakMap,W=new iJ;function H(Y,X,K){let U=Y.morphTargetInfluences,G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,E=G!==void 0?G.length:0,q=Z.get(X);if(q===void 0||q.count!==E){let z=function(){T.dispose(),Z.delete(X),X.removeEventListener("dispose",z)};if(q!==void 0)q.texture.dispose();let F=X.morphAttributes.position!==void 0,k=X.morphAttributes.normal!==void 0,M=X.morphAttributes.color!==void 0,N=X.morphAttributes.position||[],O=X.morphAttributes.normal||[],I=X.morphAttributes.color||[],L=0;if(F===!0)L=1;if(k===!0)L=2;if(M===!0)L=3;let _=X.attributes.position.count*L,S=1;if(_>Q.maxTextureSize)S=Math.ceil(_/Q.maxTextureSize),_=Q.maxTextureSize;let C=new Float32Array(_*S*4*E),T=new F7(C,_,S,E);T.type=b8,T.needsUpdate=!0;let b=L*4;for(let V=0;V<E;V++){let P=N[V],h=O[V],l=I[V],d=_*S*4*V;for(let o=0;o<P.count;o++){let c=o*b;if(F===!0)W.fromBufferAttribute(P,o),C[d+c+0]=W.x,C[d+c+1]=W.y,C[d+c+2]=W.z,C[d+c+3]=0;if(k===!0)W.fromBufferAttribute(h,o),C[d+c+4]=W.x,C[d+c+5]=W.y,C[d+c+6]=W.z,C[d+c+7]=0;if(M===!0)W.fromBufferAttribute(l,o),C[d+c+8]=W.x,C[d+c+9]=W.y,C[d+c+10]=W.z,C[d+c+11]=l.itemSize===4?W.w:1}}q={count:E,texture:T,size:new xJ(_,S)},Z.set(X,q),X.addEventListener("dispose",z)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let F=0;for(let M=0;M<U.length;M++)F+=U[M];let k=X.morphTargetsRelative?1:1-F;K.getUniforms().setValue(J,"morphTargetBaseInfluence",k),K.getUniforms().setValue(J,"morphTargetInfluences",U)}K.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),K.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:H}}function eU(J,Q,$,Z){let W=new WeakMap;function H(K){let U=Z.render.frame,G=K.geometry,E=Q.get(K,G);if(W.get(E)!==U)Q.update(E),W.set(E,U);if(K.isInstancedMesh){if(K.hasEventListener("dispose",X)===!1)K.addEventListener("dispose",X);if(W.get(K)!==U){if($.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)$.update(K.instanceColor,J.ARRAY_BUFFER);W.set(K,U)}}if(K.isSkinnedMesh){let q=K.skeleton;if(W.get(q)!==U)q.update(),W.set(q,U)}return E}function Y(){W=new WeakMap}function X(K){let U=K.target;if(U.removeEventListener("dispose",X),$.remove(U.instanceMatrix),U.instanceColor!==null)$.remove(U.instanceColor)}return{update:H,dispose:Y}}var EH=new O0,sW=new P7(1,1),qH=new F7,NH=new E$,OH=new L7,oW=[],iW=[],aW=new Float32Array(16),rW=new Float32Array(9),tW=new Float32Array(4);function d9(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,H=oW[W];if(H===void 0)H=new Float32Array(W),oW[W]=H;if(Q!==0){Z.toArray(H,0);for(let Y=1,X=0;Y!==Q;++Y)X+=$,J[Y].toArray(H,X)}return H}function R0(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function M0(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function g7(J,Q){let $=iW[Q];if($===void 0)$=new Int32Array(Q),iW[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function JG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function QG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(R0($,Q))return;J.uniform2fv(this.addr,Q),M0($,Q)}}function $G(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(R0($,Q))return;J.uniform3fv(this.addr,Q),M0($,Q)}}function ZG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(R0($,Q))return;J.uniform4fv(this.addr,Q),M0($,Q)}}function WG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(R0($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),M0($,Q)}else{if(R0($,Z))return;tW.set(Z),J.uniformMatrix2fv(this.addr,!1,tW),M0($,Z)}}function HG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(R0($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),M0($,Q)}else{if(R0($,Z))return;rW.set(Z),J.uniformMatrix3fv(this.addr,!1,rW),M0($,Z)}}function YG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(R0($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),M0($,Q)}else{if(R0($,Z))return;aW.set(Z),J.uniformMatrix4fv(this.addr,!1,aW),M0($,Z)}}function XG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function KG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(R0($,Q))return;J.uniform2iv(this.addr,Q),M0($,Q)}}function UG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(R0($,Q))return;J.uniform3iv(this.addr,Q),M0($,Q)}}function GG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(R0($,Q))return;J.uniform4iv(this.addr,Q),M0($,Q)}}function EG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function qG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(R0($,Q))return;J.uniform2uiv(this.addr,Q),M0($,Q)}}function NG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(R0($,Q))return;J.uniform3uiv(this.addr,Q),M0($,Q)}}function OG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(R0($,Q))return;J.uniform4uiv(this.addr,Q),M0($,Q)}}function FG(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let H;if(this.type===J.SAMPLER_2D_SHADOW)sW.compareFunction=W$,H=sW;else H=EH;$.setTexture2D(Q||H,W)}function RG(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||NH,W)}function MG(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||OH,W)}function kG(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||qH,W)}function DG(J){switch(J){case 5126:return JG;case 35664:return QG;case 35665:return $G;case 35666:return ZG;case 35674:return WG;case 35675:return HG;case 35676:return YG;case 5124:case 35670:return XG;case 35667:case 35671:return KG;case 35668:case 35672:return UG;case 35669:case 35673:return GG;case 5125:return EG;case 36294:return qG;case 36295:return NG;case 36296:return OG;case 35678:case 36198:case 36298:case 36306:case 35682:return FG;case 35679:case 36299:case 36307:return RG;case 35680:case 36300:case 36308:case 36293:return MG;case 36289:case 36303:case 36311:case 36292:return kG}}function LG(J,Q){J.uniform1fv(this.addr,Q)}function VG(J,Q){let $=d9(Q,this.size,2);J.uniform2fv(this.addr,$)}function zG(J,Q){let $=d9(Q,this.size,3);J.uniform3fv(this.addr,$)}function BG(J,Q){let $=d9(Q,this.size,4);J.uniform4fv(this.addr,$)}function _G(J,Q){let $=d9(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function CG(J,Q){let $=d9(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function IG(J,Q){let $=d9(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function PG(J,Q){J.uniform1iv(this.addr,Q)}function wG(J,Q){J.uniform2iv(this.addr,Q)}function TG(J,Q){J.uniform3iv(this.addr,Q)}function AG(J,Q){J.uniform4iv(this.addr,Q)}function SG(J,Q){J.uniform1uiv(this.addr,Q)}function jG(J,Q){J.uniform2uiv(this.addr,Q)}function vG(J,Q){J.uniform3uiv(this.addr,Q)}function yG(J,Q){J.uniform4uiv(this.addr,Q)}function fG(J,Q,$){let Z=this.cache,W=Q.length,H=g7($,W);if(!R0(Z,H))J.uniform1iv(this.addr,H),M0(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||EH,H[Y])}function hG(J,Q,$){let Z=this.cache,W=Q.length,H=g7($,W);if(!R0(Z,H))J.uniform1iv(this.addr,H),M0(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture3D(Q[Y]||NH,H[Y])}function bG(J,Q,$){let Z=this.cache,W=Q.length,H=g7($,W);if(!R0(Z,H))J.uniform1iv(this.addr,H),M0(Z,H);for(let Y=0;Y!==W;++Y)$.setTextureCube(Q[Y]||OH,H[Y])}function xG(J,Q,$){let Z=this.cache,W=Q.length,H=g7($,W);if(!R0(Z,H))J.uniform1iv(this.addr,H),M0(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture2DArray(Q[Y]||qH,H[Y])}function gG(J){switch(J){case 5126:return LG;case 35664:return VG;case 35665:return zG;case 35666:return BG;case 35674:return _G;case 35675:return CG;case 35676:return IG;case 5124:case 35670:return PG;case 35667:case 35671:return wG;case 35668:case 35672:return TG;case 35669:case 35673:return AG;case 5125:return SG;case 36294:return jG;case 36295:return vG;case 36296:return yG;case 35678:case 36198:case 36298:case 36306:case 35682:return fG;case 35679:case 36299:case 36307:return hG;case 35680:case 36300:case 36308:case 36293:return bG;case 36289:case 36303:case 36311:case 36292:return xG}}class FH{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=DG(Q.type)}}class RH{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=gG(Q.type)}}class MH{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,H=Z.length;W!==H;++W){let Y=Z[W];Y.setValue(J,Q[Y.id],$)}}}var j$=/(\w+)(\])?(\[|\.)?/g;function eW(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function pG(J,Q,$){let Z=J.name,W=Z.length;j$.lastIndex=0;while(!0){let H=j$.exec(Z),Y=j$.lastIndex,X=H[1],K=H[2]==="]",U=H[3];if(K)X=X|0;if(U===void 0||U==="["&&Y+2===W){eW($,U===void 0?new FH(X,J,Q):new RH(X,J,Q));break}else{let E=$.map[X];if(E===void 0)E=new MH(X),eW($,E);$=E}}}class V6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let W=J.getActiveUniform(Q,Z),H=J.getUniformLocation(Q,W.name);pG(W,H,this)}}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,H=Q.length;W!==H;++W){let Y=Q[W],X=$[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let H=J[Z];if(H.id in Q)$.push(H)}return $}}function JH(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var lG=37297,dG=0;function mG(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),H=Math.min(Q+6,$.length);for(let Y=W;Y<H;Y++){let X=Y+1;Z.push(`${X===Q?">":" "} ${X}: ${$[Y]}`)}return Z.join(`
`)}var QH=new bJ;function uG(J){nJ._getMatrix(QH,nJ.workingColorSpace,J);let Q=`mat3( ${QH.elements.map(($)=>$.toFixed(4))} )`;switch(nJ.getTransfer(J)){case Z$:return[Q,"LinearTransferOETF"];case Z0:return[Q,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function $H(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),H=(J.getShaderInfoLog(Q)||"").trim();if(Z&&H==="")return"";let Y=/ERROR: 0:(\d+)/.exec(H);if(Y){let X=parseInt(Y[1]);return $.toUpperCase()+`

`+H+`

`+mG(J.getShaderSource(Q),X)}else return H}function cG(J,Q){let $=uG(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}function nG(J,Q){let $;switch(Q){case HW:$="Linear";break;case YW:$="Reinhard";break;case XW:$="Cineon";break;case KW:$="ACESFilmic";break;case GW:$="AgX";break;case EW:$="Neutral";break;case UW:$="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),$="Linear"}return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var x7=new j;function sG(){nJ.getLuminanceCoefficients(x7);let J=x7.x.toFixed(4),Q=x7.y.toFixed(4),$=x7.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function oG(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(L6).join(`
`)}function iG(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function aG(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let H=J.getActiveAttrib(Q,W),Y=H.name,X=1;if(H.type===J.FLOAT_MAT2)X=2;if(H.type===J.FLOAT_MAT3)X=3;if(H.type===J.FLOAT_MAT4)X=4;$[Y]={type:H.type,location:J.getAttribLocation(Q,Y),locationSize:X}}return $}function L6(J){return J!==""}function ZH(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function WH(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var rG=/^[ \t]*#include +<([\w\d./]+)>/gm;function y$(J){return J.replace(rG,eG)}var tG=new Map;function eG(J,Q){let $=pJ[Q];if($===void 0){let Z=tG.get(Q);if(Z!==void 0)$=pJ[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return y$($)}var JE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function HH(J){return J.replace(JE,QE)}function QE(J,Q,$,Z){let W="";for(let H=parseInt(Q);H<parseInt($);H++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return W}function YH(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}function $E(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===MQ)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===fZ)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===Y8)Q="SHADOWMAP_TYPE_VSM";return Q}function ZE(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case P9:case J9:Q="ENVMAP_TYPE_CUBE";break;case W6:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function WE(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case J9:Q="ENVMAP_MODE_REFRACTION";break}return Q}function HE(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case $W:Q="ENVMAP_BLENDING_MULTIPLY";break;case ZW:Q="ENVMAP_BLENDING_MIX";break;case WW:Q="ENVMAP_BLENDING_ADD";break}return Q}function YE(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function XE(J,Q,$,Z){let W=J.getContext(),H=$.defines,Y=$.vertexShader,X=$.fragmentShader,K=$E($),U=ZE($),G=WE($),E=HE($),q=YE($),F=oG($),k=iG(H),M=W.createProgram(),N,O,I=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(N=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k].filter(L6).join(`
`),N.length>0)N+=`
`;if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k].filter(L6).join(`
`),O.length>0)O+=`
`}else N=[YH($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(L6).join(`
`),O=[YH($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+E:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor||$.batchingColor?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==J8?"#define TONE_MAPPING":"",$.toneMapping!==J8?pJ.tonemapping_pars_fragment:"",$.toneMapping!==J8?nG("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",pJ.colorspace_pars_fragment,cG("linearToOutputTexel",$.outputColorSpace),sG(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(L6).join(`
`);if(Y=y$(Y),Y=ZH(Y,$),Y=WH(Y,$),X=y$(X),X=ZH(X,$),X=WH(X,$),Y=HH(Y),X=HH(X),$.isRawShaderMaterial!==!0)I=`#version 300 es
`,N=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,O=["#define varying in",$.glslVersion===H$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===H$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let L=I+N+Y,_=I+O+X,S=JH(W,W.VERTEX_SHADER,L),C=JH(W,W.FRAGMENT_SHADER,_);if(W.attachShader(M,S),W.attachShader(M,C),$.index0AttributeName!==void 0)W.bindAttribLocation(M,0,$.index0AttributeName);else if($.morphTargets===!0)W.bindAttribLocation(M,0,"position");W.linkProgram(M);function T(P){if(J.debug.checkShaderErrors){let h=W.getProgramInfoLog(M)||"",l=W.getShaderInfoLog(S)||"",d=W.getShaderInfoLog(C)||"",o=h.trim(),c=l.trim(),a=d.trim(),m=!0,HJ=!0;if(W.getProgramParameter(M,W.LINK_STATUS)===!1)if(m=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,M,S,C);else{let KJ=$H(W,S,"vertex"),BJ=$H(W,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(M,W.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+o+`
`+KJ+`
`+BJ)}else if(o!=="")console.warn("THREE.WebGLProgram: Program Info Log:",o);else if(c===""||a==="")HJ=!1;if(HJ)P.diagnostics={runnable:m,programLog:o,vertexShader:{log:c,prefix:N},fragmentShader:{log:a,prefix:O}}}W.deleteShader(S),W.deleteShader(C),b=new V6(W,M),z=aG(W,M)}let b;this.getUniforms=function(){if(b===void 0)T(this);return b};let z;this.getAttributes=function(){if(z===void 0)T(this);return z};let V=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(V===!1)V=W.getProgramParameter(M,lG);return V},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(M),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=dG++,this.cacheKey=Q,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=C,this}var KE=0;class kH{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),W=this._getShaderStage($),H=this._getShaderCacheForMaterial(J);if(H.has(Z)===!1)H.add(Z),Z.usedTimes++;if(H.has(W)===!1)H.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new DH(J),Q.set(J,$);return $}}class DH{constructor(J){this.id=KE++,this.code=J,this.usedTimes=0}}function UE(J,Q,$,Z,W,H,Y){let X=new R7,K=new kH,U=new Set,G=[],E=W.logarithmicDepthBuffer,q=W.vertexTextures,F=W.precision,k={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(z){if(U.add(z),z===0)return"uv";return`uv${z}`}function N(z,V,P,h,l){let d=h.fog,o=l.geometry,c=z.isMeshStandardMaterial?h.environment:null,a=(z.isMeshStandardMaterial?$:Q).get(z.envMap||c),m=!!a&&a.mapping===W6?a.image.height:null,HJ=k[z.type];if(z.precision!==null){if(F=W.getMaxPrecision(z.precision),F!==z.precision)console.warn("THREE.WebGLProgram.getParameters:",z.precision,"not supported, using",F,"instead.")}let KJ=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,BJ=KJ!==void 0?KJ.length:0,dJ=0;if(o.morphAttributes.position!==void 0)dJ=1;if(o.morphAttributes.normal!==void 0)dJ=2;if(o.morphAttributes.color!==void 0)dJ=3;let rJ,gJ,u,ZJ;if(HJ){let eJ=G8[HJ];rJ=eJ.vertexShader,gJ=eJ.fragmentShader}else rJ=z.vertexShader,gJ=z.fragmentShader,K.update(z),u=K.getVertexShaderID(z),ZJ=K.getFragmentShaderID(z);let QJ=J.getRenderTarget(),VJ=J.state.buffers.depth.getReversed(),AJ=l.isInstancedMesh===!0,SJ=l.isBatchedMesh===!0,G0=!!z.map,w=!!z.matcap,r=!!a,NJ=!!z.aoMap,DJ=!!z.lightMap,XJ=!!z.bumpMap,sJ=!!z.normalMap,zJ=!!z.displacementMap,_J=!!z.emissiveMap,E0=!!z.metalnessMap,q0=!!z.roughnessMap,Y0=z.anisotropy>0,B=z.clearcoat>0,R=z.dispersion>0,f=z.iridescence>0,s=z.sheen>0,n=z.transmission>0,x=Y0&&!!z.anisotropyMap,OJ=B&&!!z.clearcoatMap,$J=B&&!!z.clearcoatNormalMap,LJ=B&&!!z.clearcoatRoughnessMap,jJ=f&&!!z.iridescenceMap,JJ=f&&!!z.iridescenceThicknessMap,EJ=s&&!!z.sheenColorMap,CJ=s&&!!z.sheenRoughnessMap,IJ=!!z.specularMap,qJ=!!z.specularColorMap,lJ=!!z.specularIntensityMap,A=n&&!!z.transmissionMap,UJ=n&&!!z.thicknessMap,WJ=!!z.gradientMap,RJ=!!z.alphaMap,t=z.alphaTest>0,i=!!z.alphaHash,kJ=!!z.extensions,fJ=J8;if(z.toneMapped){if(QJ===null||QJ.isXRRenderTarget===!0)fJ=J.toneMapping}let Q0={shaderID:HJ,shaderType:z.type,shaderName:z.name,vertexShader:rJ,fragmentShader:gJ,defines:z.defines,customVertexShaderID:u,customFragmentShaderID:ZJ,isRawShaderMaterial:z.isRawShaderMaterial===!0,glslVersion:z.glslVersion,precision:F,batching:SJ,batchingColor:SJ&&l._colorsTexture!==null,instancing:AJ,instancingColor:AJ&&l.instanceColor!==null,instancingMorph:AJ&&l.morphTexture!==null,supportsVertexTextures:q,outputColorSpace:QJ===null?J.outputColorSpace:QJ.isXRRenderTarget===!0?QJ.texture.colorSpace:I0,alphaToCoverage:!!z.alphaToCoverage,map:G0,matcap:w,envMap:r,envMapMode:r&&a.mapping,envMapCubeUVHeight:m,aoMap:NJ,lightMap:DJ,bumpMap:XJ,normalMap:sJ,displacementMap:q&&zJ,emissiveMap:_J,normalMapObjectSpace:sJ&&z.normalMapType===zW,normalMapTangentSpace:sJ&&z.normalMapType===VW,metalnessMap:E0,roughnessMap:q0,anisotropy:Y0,anisotropyMap:x,clearcoat:B,clearcoatMap:OJ,clearcoatNormalMap:$J,clearcoatRoughnessMap:LJ,dispersion:R,iridescence:f,iridescenceMap:jJ,iridescenceThicknessMap:JJ,sheen:s,sheenColorMap:EJ,sheenRoughnessMap:CJ,specularMap:IJ,specularColorMap:qJ,specularIntensityMap:lJ,transmission:n,transmissionMap:A,thicknessMap:UJ,gradientMap:WJ,opaque:z.transparent===!1&&z.blending===$6&&z.alphaToCoverage===!1,alphaMap:RJ,alphaTest:t,alphaHash:i,combine:z.combine,mapUv:G0&&M(z.map.channel),aoMapUv:NJ&&M(z.aoMap.channel),lightMapUv:DJ&&M(z.lightMap.channel),bumpMapUv:XJ&&M(z.bumpMap.channel),normalMapUv:sJ&&M(z.normalMap.channel),displacementMapUv:zJ&&M(z.displacementMap.channel),emissiveMapUv:_J&&M(z.emissiveMap.channel),metalnessMapUv:E0&&M(z.metalnessMap.channel),roughnessMapUv:q0&&M(z.roughnessMap.channel),anisotropyMapUv:x&&M(z.anisotropyMap.channel),clearcoatMapUv:OJ&&M(z.clearcoatMap.channel),clearcoatNormalMapUv:$J&&M(z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:LJ&&M(z.clearcoatRoughnessMap.channel),iridescenceMapUv:jJ&&M(z.iridescenceMap.channel),iridescenceThicknessMapUv:JJ&&M(z.iridescenceThicknessMap.channel),sheenColorMapUv:EJ&&M(z.sheenColorMap.channel),sheenRoughnessMapUv:CJ&&M(z.sheenRoughnessMap.channel),specularMapUv:IJ&&M(z.specularMap.channel),specularColorMapUv:qJ&&M(z.specularColorMap.channel),specularIntensityMapUv:lJ&&M(z.specularIntensityMap.channel),transmissionMapUv:A&&M(z.transmissionMap.channel),thicknessMapUv:UJ&&M(z.thicknessMap.channel),alphaMapUv:RJ&&M(z.alphaMap.channel),vertexTangents:!!o.attributes.tangent&&(sJ||Y0),vertexColors:z.vertexColors,vertexAlphas:z.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,pointsUvs:l.isPoints===!0&&!!o.attributes.uv&&(G0||RJ),fog:!!d,useFog:z.fog===!0,fogExp2:!!d&&d.isFogExp2,flatShading:z.flatShading===!0&&z.wireframe===!1,sizeAttenuation:z.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:VJ,skinning:l.isSkinnedMesh===!0,morphTargets:o.morphAttributes.position!==void 0,morphNormals:o.morphAttributes.normal!==void 0,morphColors:o.morphAttributes.color!==void 0,morphTargetsCount:BJ,morphTextureStride:dJ,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:z.dithering,shadowMapEnabled:J.shadowMap.enabled&&P.length>0,shadowMapType:J.shadowMap.type,toneMapping:fJ,decodeVideoTexture:G0&&z.map.isVideoTexture===!0&&nJ.getTransfer(z.map.colorSpace)===Z0,decodeVideoTextureEmissive:_J&&z.emissiveMap.isVideoTexture===!0&&nJ.getTransfer(z.emissiveMap.colorSpace)===Z0,premultipliedAlpha:z.premultipliedAlpha,doubleSided:z.side===u0,flipSided:z.side===j0,useDepthPacking:z.depthPacking>=0,depthPacking:z.depthPacking||0,index0AttributeName:z.index0AttributeName,extensionClipCullDistance:kJ&&z.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kJ&&z.extensions.multiDraw===!0||SJ)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:z.customProgramCacheKey()};return Q0.vertexUv1s=U.has(1),Q0.vertexUv2s=U.has(2),Q0.vertexUv3s=U.has(3),U.clear(),Q0}function O(z){let V=[];if(z.shaderID)V.push(z.shaderID);else V.push(z.customVertexShaderID),V.push(z.customFragmentShaderID);if(z.defines!==void 0)for(let P in z.defines)V.push(P),V.push(z.defines[P]);if(z.isRawShaderMaterial===!1)I(V,z),L(V,z),V.push(J.outputColorSpace);return V.push(z.customProgramCacheKey),V.join()}function I(z,V){z.push(V.precision),z.push(V.outputColorSpace),z.push(V.envMapMode),z.push(V.envMapCubeUVHeight),z.push(V.mapUv),z.push(V.alphaMapUv),z.push(V.lightMapUv),z.push(V.aoMapUv),z.push(V.bumpMapUv),z.push(V.normalMapUv),z.push(V.displacementMapUv),z.push(V.emissiveMapUv),z.push(V.metalnessMapUv),z.push(V.roughnessMapUv),z.push(V.anisotropyMapUv),z.push(V.clearcoatMapUv),z.push(V.clearcoatNormalMapUv),z.push(V.clearcoatRoughnessMapUv),z.push(V.iridescenceMapUv),z.push(V.iridescenceThicknessMapUv),z.push(V.sheenColorMapUv),z.push(V.sheenRoughnessMapUv),z.push(V.specularMapUv),z.push(V.specularColorMapUv),z.push(V.specularIntensityMapUv),z.push(V.transmissionMapUv),z.push(V.thicknessMapUv),z.push(V.combine),z.push(V.fogExp2),z.push(V.sizeAttenuation),z.push(V.morphTargetsCount),z.push(V.morphAttributeCount),z.push(V.numDirLights),z.push(V.numPointLights),z.push(V.numSpotLights),z.push(V.numSpotLightMaps),z.push(V.numHemiLights),z.push(V.numRectAreaLights),z.push(V.numDirLightShadows),z.push(V.numPointLightShadows),z.push(V.numSpotLightShadows),z.push(V.numSpotLightShadowsWithMaps),z.push(V.numLightProbes),z.push(V.shadowMapType),z.push(V.toneMapping),z.push(V.numClippingPlanes),z.push(V.numClipIntersection),z.push(V.depthPacking)}function L(z,V){if(X.disableAll(),V.supportsVertexTextures)X.enable(0);if(V.instancing)X.enable(1);if(V.instancingColor)X.enable(2);if(V.instancingMorph)X.enable(3);if(V.matcap)X.enable(4);if(V.envMap)X.enable(5);if(V.normalMapObjectSpace)X.enable(6);if(V.normalMapTangentSpace)X.enable(7);if(V.clearcoat)X.enable(8);if(V.iridescence)X.enable(9);if(V.alphaTest)X.enable(10);if(V.vertexColors)X.enable(11);if(V.vertexAlphas)X.enable(12);if(V.vertexUv1s)X.enable(13);if(V.vertexUv2s)X.enable(14);if(V.vertexUv3s)X.enable(15);if(V.vertexTangents)X.enable(16);if(V.anisotropy)X.enable(17);if(V.alphaHash)X.enable(18);if(V.batching)X.enable(19);if(V.dispersion)X.enable(20);if(V.batchingColor)X.enable(21);if(V.gradientMap)X.enable(22);if(z.push(X.mask),X.disableAll(),V.fog)X.enable(0);if(V.useFog)X.enable(1);if(V.flatShading)X.enable(2);if(V.logarithmicDepthBuffer)X.enable(3);if(V.reversedDepthBuffer)X.enable(4);if(V.skinning)X.enable(5);if(V.morphTargets)X.enable(6);if(V.morphNormals)X.enable(7);if(V.morphColors)X.enable(8);if(V.premultipliedAlpha)X.enable(9);if(V.shadowMapEnabled)X.enable(10);if(V.doubleSided)X.enable(11);if(V.flipSided)X.enable(12);if(V.useDepthPacking)X.enable(13);if(V.dithering)X.enable(14);if(V.transmission)X.enable(15);if(V.sheen)X.enable(16);if(V.opaque)X.enable(17);if(V.pointsUvs)X.enable(18);if(V.decodeVideoTexture)X.enable(19);if(V.decodeVideoTextureEmissive)X.enable(20);if(V.alphaToCoverage)X.enable(21);z.push(X.mask)}function _(z){let V=k[z.type],P;if(V){let h=G8[V];P=vW.clone(h.uniforms)}else P=z.uniforms;return P}function S(z,V){let P;for(let h=0,l=G.length;h<l;h++){let d=G[h];if(d.cacheKey===V){P=d,++P.usedTimes;break}}if(P===void 0)P=new XE(J,V,z,H),G.push(P);return P}function C(z){if(--z.usedTimes===0){let V=G.indexOf(z);G[V]=G[G.length-1],G.pop(),z.destroy()}}function T(z){K.remove(z)}function b(){K.dispose()}return{getParameters:N,getProgramCacheKey:O,getUniforms:_,acquireProgram:S,releaseProgram:C,releaseShaderCache:T,programs:G,dispose:b}}function GE(){let J=new WeakMap;function Q(Y){return J.has(Y)}function $(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function W(Y,X,K){J.get(Y)[X]=K}function H(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:H}}function EE(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function XH(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function KH(){let J=[],Q=0,$=[],Z=[],W=[];function H(){Q=0,$.length=0,Z.length=0,W.length=0}function Y(E,q,F,k,M,N){let O=J[Q];if(O===void 0)O={id:E.id,object:E,geometry:q,material:F,groupOrder:k,renderOrder:E.renderOrder,z:M,group:N},J[Q]=O;else O.id=E.id,O.object=E,O.geometry=q,O.material=F,O.groupOrder=k,O.renderOrder=E.renderOrder,O.z=M,O.group=N;return Q++,O}function X(E,q,F,k,M,N){let O=Y(E,q,F,k,M,N);if(F.transmission>0)Z.push(O);else if(F.transparent===!0)W.push(O);else $.push(O)}function K(E,q,F,k,M,N){let O=Y(E,q,F,k,M,N);if(F.transmission>0)Z.unshift(O);else if(F.transparent===!0)W.unshift(O);else $.unshift(O)}function U(E,q){if($.length>1)$.sort(E||EE);if(Z.length>1)Z.sort(q||XH);if(W.length>1)W.sort(q||XH)}function G(){for(let E=Q,q=J.length;E<q;E++){let F=J[E];if(F.id===null)break;F.id=null,F.object=null,F.geometry=null,F.material=null,F.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:H,push:X,unshift:K,finish:G,sort:U}}function qE(){let J=new WeakMap;function Q(Z,W){let H=J.get(Z),Y;if(H===void 0)Y=new KH,J.set(Z,[Y]);else if(W>=H.length)Y=new KH,H.push(Y);else Y=H[W];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function NE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new j,color:new yJ};break;case"SpotLight":$={position:new j,direction:new j,color:new yJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new j,color:new yJ,distance:0,decay:0};break;case"HemisphereLight":$={direction:new j,skyColor:new yJ,groundColor:new yJ};break;case"RectAreaLight":$={color:new yJ,position:new j,halfWidth:new j,halfHeight:new j};break}return J[Q.id]=$,$}}}function OE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xJ};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xJ};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xJ,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var FE=0;function RE(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function ME(J){let Q=new NE,$=OE(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new j);let W=new j,H=new hJ,Y=new hJ;function X(U){let G=0,E=0,q=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let F=0,k=0,M=0,N=0,O=0,I=0,L=0,_=0,S=0,C=0,T=0;U.sort(RE);for(let z=0,V=U.length;z<V;z++){let P=U[z],h=P.color,l=P.intensity,d=P.distance,o=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)G+=h.r*l,E+=h.g*l,q+=h.b*l;else if(P.isLightProbe){for(let c=0;c<9;c++)Z.probe[c].addScaledVector(P.sh.coefficients[c],l);T++}else if(P.isDirectionalLight){let c=Q.get(P);if(c.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let a=P.shadow,m=$.get(P);m.shadowIntensity=a.intensity,m.shadowBias=a.bias,m.shadowNormalBias=a.normalBias,m.shadowRadius=a.radius,m.shadowMapSize=a.mapSize,Z.directionalShadow[F]=m,Z.directionalShadowMap[F]=o,Z.directionalShadowMatrix[F]=P.shadow.matrix,I++}Z.directional[F]=c,F++}else if(P.isSpotLight){let c=Q.get(P);c.position.setFromMatrixPosition(P.matrixWorld),c.color.copy(h).multiplyScalar(l),c.distance=d,c.coneCos=Math.cos(P.angle),c.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),c.decay=P.decay,Z.spot[M]=c;let a=P.shadow;if(P.map){if(Z.spotLightMap[S]=P.map,S++,a.updateMatrices(P),P.castShadow)C++}if(Z.spotLightMatrix[M]=a.matrix,P.castShadow){let m=$.get(P);m.shadowIntensity=a.intensity,m.shadowBias=a.bias,m.shadowNormalBias=a.normalBias,m.shadowRadius=a.radius,m.shadowMapSize=a.mapSize,Z.spotShadow[M]=m,Z.spotShadowMap[M]=o,_++}M++}else if(P.isRectAreaLight){let c=Q.get(P);c.color.copy(h).multiplyScalar(l),c.halfWidth.set(P.width*0.5,0,0),c.halfHeight.set(0,P.height*0.5,0),Z.rectArea[N]=c,N++}else if(P.isPointLight){let c=Q.get(P);if(c.color.copy(P.color).multiplyScalar(P.intensity),c.distance=P.distance,c.decay=P.decay,P.castShadow){let a=P.shadow,m=$.get(P);m.shadowIntensity=a.intensity,m.shadowBias=a.bias,m.shadowNormalBias=a.normalBias,m.shadowRadius=a.radius,m.shadowMapSize=a.mapSize,m.shadowCameraNear=a.camera.near,m.shadowCameraFar=a.camera.far,Z.pointShadow[k]=m,Z.pointShadowMap[k]=o,Z.pointShadowMatrix[k]=P.shadow.matrix,L++}Z.point[k]=c,k++}else if(P.isHemisphereLight){let c=Q.get(P);c.skyColor.copy(P.color).multiplyScalar(l),c.groundColor.copy(P.groundColor).multiplyScalar(l),Z.hemi[O]=c,O++}}if(N>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=YJ.LTC_FLOAT_1,Z.rectAreaLTC2=YJ.LTC_FLOAT_2;else Z.rectAreaLTC1=YJ.LTC_HALF_1,Z.rectAreaLTC2=YJ.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=E,Z.ambient[2]=q;let b=Z.hash;if(b.directionalLength!==F||b.pointLength!==k||b.spotLength!==M||b.rectAreaLength!==N||b.hemiLength!==O||b.numDirectionalShadows!==I||b.numPointShadows!==L||b.numSpotShadows!==_||b.numSpotMaps!==S||b.numLightProbes!==T)Z.directional.length=F,Z.spot.length=M,Z.rectArea.length=N,Z.point.length=k,Z.hemi.length=O,Z.directionalShadow.length=I,Z.directionalShadowMap.length=I,Z.pointShadow.length=L,Z.pointShadowMap.length=L,Z.spotShadow.length=_,Z.spotShadowMap.length=_,Z.directionalShadowMatrix.length=I,Z.pointShadowMatrix.length=L,Z.spotLightMatrix.length=_+S-C,Z.spotLightMap.length=S,Z.numSpotLightShadowsWithMaps=C,Z.numLightProbes=T,b.directionalLength=F,b.pointLength=k,b.spotLength=M,b.rectAreaLength=N,b.hemiLength=O,b.numDirectionalShadows=I,b.numPointShadows=L,b.numSpotShadows=_,b.numSpotMaps=S,b.numLightProbes=T,Z.version=FE++}function K(U,G){let E=0,q=0,F=0,k=0,M=0,N=G.matrixWorldInverse;for(let O=0,I=U.length;O<I;O++){let L=U[O];if(L.isDirectionalLight){let _=Z.directional[E];_.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),_.direction.sub(W),_.direction.transformDirection(N),E++}else if(L.isSpotLight){let _=Z.spot[F];_.position.setFromMatrixPosition(L.matrixWorld),_.position.applyMatrix4(N),_.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),_.direction.sub(W),_.direction.transformDirection(N),F++}else if(L.isRectAreaLight){let _=Z.rectArea[k];_.position.setFromMatrixPosition(L.matrixWorld),_.position.applyMatrix4(N),Y.identity(),H.copy(L.matrixWorld),H.premultiply(N),Y.extractRotation(H),_.halfWidth.set(L.width*0.5,0,0),_.halfHeight.set(0,L.height*0.5,0),_.halfWidth.applyMatrix4(Y),_.halfHeight.applyMatrix4(Y),k++}else if(L.isPointLight){let _=Z.point[q];_.position.setFromMatrixPosition(L.matrixWorld),_.position.applyMatrix4(N),q++}else if(L.isHemisphereLight){let _=Z.hemi[M];_.direction.setFromMatrixPosition(L.matrixWorld),_.direction.transformDirection(N),M++}}}return{setup:X,setupView:K,state:Z}}function UH(J){let Q=new ME(J),$=[],Z=[];function W(G){U.camera=G,$.length=0,Z.length=0}function H(G){$.push(G)}function Y(G){Z.push(G)}function X(){Q.setup($)}function K(G){Q.setupView($,G)}let U={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:X,setupLightsView:K,pushLight:H,pushShadow:Y}}function kE(J){let Q=new WeakMap;function $(W,H=0){let Y=Q.get(W),X;if(Y===void 0)X=new UH(J),Q.set(W,[X]);else if(H>=Y.length)X=new UH(J),Y.push(X);else X=Y[H];return X}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var DE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VE(J,Q,$){let Z=new O6,W=new xJ,H=new xJ,Y=new iJ,X=new F$({depthPacking:LW}),K=new R$,U={},G=$.maxTextureSize,E={[y8]:j0,[j0]:y8,[u0]:u0},q=new n0({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xJ},radius:{value:4}},vertexShader:DE,fragmentShader:LE}),F=q.clone();F.defines.HORIZONTAL_PASS=1;let k=new f0;k.setAttribute("position",new F0(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new z0(k,q),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=MQ;let O=this.type;this.render=function(C,T,b){if(N.enabled===!1)return;if(N.autoUpdate===!1&&N.needsUpdate===!1)return;if(C.length===0)return;let z=J.getRenderTarget(),V=J.getActiveCubeFace(),P=J.getActiveMipmapLevel(),h=J.state;if(h.setBlending(f8),h.buffers.depth.getReversed()===!0)h.buffers.color.setClear(0,0,0,0);else h.buffers.color.setClear(1,1,1,1);h.buffers.depth.setTest(!0),h.setScissorTest(!1);let l=O!==Y8&&this.type===Y8,d=O===Y8&&this.type!==Y8;for(let o=0,c=C.length;o<c;o++){let a=C[o],m=a.shadow;if(m===void 0){console.warn("THREE.WebGLShadowMap:",a,"has no shadow.");continue}if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;W.copy(m.mapSize);let HJ=m.getFrameExtents();if(W.multiply(HJ),H.copy(m.mapSize),W.x>G||W.y>G){if(W.x>G)H.x=Math.floor(G/HJ.x),W.x=H.x*HJ.x,m.mapSize.x=H.x;if(W.y>G)H.y=Math.floor(G/HJ.y),W.y=H.y*HJ.y,m.mapSize.y=H.y}if(m.map===null||l===!0||d===!0){let BJ=this.type!==Y8?{minFilter:z8,magFilter:z8}:{};if(m.map!==null)m.map.dispose();m.map=new C8(W.x,W.y,BJ),m.map.texture.name=a.name+".shadowMap",m.camera.updateProjectionMatrix()}J.setRenderTarget(m.map),J.clear();let KJ=m.getViewportCount();for(let BJ=0;BJ<KJ;BJ++){let dJ=m.getViewport(BJ);Y.set(H.x*dJ.x,H.y*dJ.y,H.x*dJ.z,H.y*dJ.w),h.viewport(Y),m.updateMatrices(a,BJ),Z=m.getFrustum(),_(T,b,m.camera,a,this.type)}if(m.isPointLightShadow!==!0&&this.type===Y8)I(m,b);m.needsUpdate=!1}O=this.type,N.needsUpdate=!1,J.setRenderTarget(z,V,P)};function I(C,T){let b=Q.update(M);if(q.defines.VSM_SAMPLES!==C.blurSamples)q.defines.VSM_SAMPLES=C.blurSamples,F.defines.VSM_SAMPLES=C.blurSamples,q.needsUpdate=!0,F.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new C8(W.x,W.y);q.uniforms.shadow_pass.value=C.map.texture,q.uniforms.resolution.value=C.mapSize,q.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(T,null,b,q,M,null),F.uniforms.shadow_pass.value=C.mapPass.texture,F.uniforms.resolution.value=C.mapSize,F.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(T,null,b,F,M,null)}function L(C,T,b,z){let V=null,P=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)V=P;else if(V=b.isPointLight===!0?K:X,J.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let h=V.uuid,l=T.uuid,d=U[h];if(d===void 0)d={},U[h]=d;let o=d[l];if(o===void 0)o=V.clone(),d[l]=o,T.addEventListener("dispose",S);V=o}if(V.visible=T.visible,V.wireframe=T.wireframe,z===Y8)V.side=T.shadowSide!==null?T.shadowSide:T.side;else V.side=T.shadowSide!==null?T.shadowSide:E[T.side];if(V.alphaMap=T.alphaMap,V.alphaTest=T.alphaToCoverage===!0?0.5:T.alphaTest,V.map=T.map,V.clipShadows=T.clipShadows,V.clippingPlanes=T.clippingPlanes,V.clipIntersection=T.clipIntersection,V.displacementMap=T.displacementMap,V.displacementScale=T.displacementScale,V.displacementBias=T.displacementBias,V.wireframeLinewidth=T.wireframeLinewidth,V.linewidth=T.linewidth,b.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let h=J.properties.get(V);h.light=b}return V}function _(C,T,b,z,V){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&V===Y8)&&(!C.frustumCulled||Z.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);let l=Q.update(C),d=C.material;if(Array.isArray(d)){let o=l.groups;for(let c=0,a=o.length;c<a;c++){let m=o[c],HJ=d[m.materialIndex];if(HJ&&HJ.visible){let KJ=L(C,HJ,z,V);C.onBeforeShadow(J,C,T,b,l,KJ,m),J.renderBufferDirect(b,null,l,KJ,C,m),C.onAfterShadow(J,C,T,b,l,KJ,m)}}}else if(d.visible){let o=L(C,d,z,V);C.onBeforeShadow(J,C,T,b,l,o,null),J.renderBufferDirect(b,null,l,o,C,null),C.onAfterShadow(J,C,T,b,l,o,null)}}}let h=C.children;for(let l=0,d=h.length;l<d;l++)_(h[l],T,b,z,V)}function S(C){C.target.removeEventListener("dispose",S);for(let b in U){let z=U[b],V=C.target.uuid;if(V in z)z[V].dispose(),delete z[V]}}}var zE={[r6]:t6,[e6]:$7,[J7]:Z7,[Z6]:Q7,[t6]:r6,[$7]:e6,[Z7]:J7,[Q7]:Z6};function BE(J,Q){function $(){let A=!1,UJ=new iJ,WJ=null,RJ=new iJ(0,0,0,0);return{setMask:function(t){if(WJ!==t&&!A)J.colorMask(t,t,t,t),WJ=t},setLocked:function(t){A=t},setClear:function(t,i,kJ,fJ,Q0){if(Q0===!0)t*=fJ,i*=fJ,kJ*=fJ;if(UJ.set(t,i,kJ,fJ),RJ.equals(UJ)===!1)J.clearColor(t,i,kJ,fJ),RJ.copy(UJ)},reset:function(){A=!1,WJ=null,RJ.set(-1,0,0,0)}}}function Z(){let A=!1,UJ=!1,WJ=null,RJ=null,t=null;return{setReversed:function(i){if(UJ!==i){let kJ=Q.get("EXT_clip_control");if(i)kJ.clipControlEXT(kJ.LOWER_LEFT_EXT,kJ.ZERO_TO_ONE_EXT);else kJ.clipControlEXT(kJ.LOWER_LEFT_EXT,kJ.NEGATIVE_ONE_TO_ONE_EXT);UJ=i;let fJ=t;t=null,this.setClear(fJ)}},getReversed:function(){return UJ},setTest:function(i){if(i)QJ(J.DEPTH_TEST);else VJ(J.DEPTH_TEST)},setMask:function(i){if(WJ!==i&&!A)J.depthMask(i),WJ=i},setFunc:function(i){if(UJ)i=zE[i];if(RJ!==i){switch(i){case r6:J.depthFunc(J.NEVER);break;case t6:J.depthFunc(J.ALWAYS);break;case e6:J.depthFunc(J.LESS);break;case Z6:J.depthFunc(J.LEQUAL);break;case J7:J.depthFunc(J.EQUAL);break;case Q7:J.depthFunc(J.GEQUAL);break;case $7:J.depthFunc(J.GREATER);break;case Z7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}RJ=i}},setLocked:function(i){A=i},setClear:function(i){if(t!==i){if(UJ)i=1-i;J.clearDepth(i),t=i}},reset:function(){A=!1,WJ=null,RJ=null,t=null,UJ=!1}}}function W(){let A=!1,UJ=null,WJ=null,RJ=null,t=null,i=null,kJ=null,fJ=null,Q0=null;return{setTest:function(eJ){if(!A)if(eJ)QJ(J.STENCIL_TEST);else VJ(J.STENCIL_TEST)},setMask:function(eJ){if(UJ!==eJ&&!A)J.stencilMask(eJ),UJ=eJ},setFunc:function(eJ,Z8,W8){if(WJ!==eJ||RJ!==Z8||t!==W8)J.stencilFunc(eJ,Z8,W8),WJ=eJ,RJ=Z8,t=W8},setOp:function(eJ,Z8,W8){if(i!==eJ||kJ!==Z8||fJ!==W8)J.stencilOp(eJ,Z8,W8),i=eJ,kJ=Z8,fJ=W8},setLocked:function(eJ){A=eJ},setClear:function(eJ){if(Q0!==eJ)J.clearStencil(eJ),Q0=eJ},reset:function(){A=!1,UJ=null,WJ=null,RJ=null,t=null,i=null,kJ=null,fJ=null,Q0=null}}}let H=new $,Y=new Z,X=new W,K=new WeakMap,U=new WeakMap,G={},E={},q=new WeakMap,F=[],k=null,M=!1,N=null,O=null,I=null,L=null,_=null,S=null,C=null,T=new yJ(0,0,0),b=0,z=!1,V=null,P=null,h=null,l=null,d=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),c=!1,a=0,m=J.getParameter(J.VERSION);if(m.indexOf("WebGL")!==-1)a=parseFloat(/^WebGL (\d)/.exec(m)[1]),c=a>=1;else if(m.indexOf("OpenGL ES")!==-1)a=parseFloat(/^OpenGL ES (\d)/.exec(m)[1]),c=a>=2;let HJ=null,KJ={},BJ=J.getParameter(J.SCISSOR_BOX),dJ=J.getParameter(J.VIEWPORT),rJ=new iJ().fromArray(BJ),gJ=new iJ().fromArray(dJ);function u(A,UJ,WJ,RJ){let t=new Uint8Array(4),i=J.createTexture();J.bindTexture(A,i),J.texParameteri(A,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(A,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let kJ=0;kJ<WJ;kJ++)if(A===J.TEXTURE_3D||A===J.TEXTURE_2D_ARRAY)J.texImage3D(UJ,0,J.RGBA,1,1,RJ,0,J.RGBA,J.UNSIGNED_BYTE,t);else J.texImage2D(UJ+kJ,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,t);return i}let ZJ={};ZJ[J.TEXTURE_2D]=u(J.TEXTURE_2D,J.TEXTURE_2D,1),ZJ[J.TEXTURE_CUBE_MAP]=u(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),ZJ[J.TEXTURE_2D_ARRAY]=u(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),ZJ[J.TEXTURE_3D]=u(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),QJ(J.DEPTH_TEST),Y.setFunc(Z6),XJ(!1),sJ(RQ),QJ(J.CULL_FACE),NJ(f8);function QJ(A){if(G[A]!==!0)J.enable(A),G[A]=!0}function VJ(A){if(G[A]!==!1)J.disable(A),G[A]=!1}function AJ(A,UJ){if(E[A]!==UJ){if(J.bindFramebuffer(A,UJ),E[A]=UJ,A===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=UJ;if(A===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=UJ;return!0}return!1}function SJ(A,UJ){let WJ=F,RJ=!1;if(A){if(WJ=q.get(UJ),WJ===void 0)WJ=[],q.set(UJ,WJ);let t=A.textures;if(WJ.length!==t.length||WJ[0]!==J.COLOR_ATTACHMENT0){for(let i=0,kJ=t.length;i<kJ;i++)WJ[i]=J.COLOR_ATTACHMENT0+i;WJ.length=t.length,RJ=!0}}else if(WJ[0]!==J.BACK)WJ[0]=J.BACK,RJ=!0;if(RJ)J.drawBuffers(WJ)}function G0(A){if(k!==A)return J.useProgram(A),k=A,!0;return!1}let w={[I9]:J.FUNC_ADD,[bZ]:J.FUNC_SUBTRACT,[xZ]:J.FUNC_REVERSE_SUBTRACT};w[gZ]=J.MIN,w[pZ]=J.MAX;let r={[lZ]:J.ZERO,[dZ]:J.ONE,[mZ]:J.SRC_COLOR,[cZ]:J.SRC_ALPHA,[rZ]:J.SRC_ALPHA_SATURATE,[iZ]:J.DST_COLOR,[sZ]:J.DST_ALPHA,[uZ]:J.ONE_MINUS_SRC_COLOR,[nZ]:J.ONE_MINUS_SRC_ALPHA,[aZ]:J.ONE_MINUS_DST_COLOR,[oZ]:J.ONE_MINUS_DST_ALPHA,[tZ]:J.CONSTANT_COLOR,[eZ]:J.ONE_MINUS_CONSTANT_COLOR,[JW]:J.CONSTANT_ALPHA,[QW]:J.ONE_MINUS_CONSTANT_ALPHA};function NJ(A,UJ,WJ,RJ,t,i,kJ,fJ,Q0,eJ){if(A===f8){if(M===!0)VJ(J.BLEND),M=!1;return}if(M===!1)QJ(J.BLEND),M=!0;if(A!==hZ){if(A!==N||eJ!==z){if(O!==I9||_!==I9)J.blendEquation(J.FUNC_ADD),O=I9,_=I9;if(eJ)switch(A){case $6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case kQ:J.blendFunc(J.ONE,J.ONE);break;case DQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case LQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case $6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case kQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case DQ:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case LQ:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}I=null,L=null,S=null,C=null,T.set(0,0,0),b=0,N=A,z=eJ}return}if(t=t||UJ,i=i||WJ,kJ=kJ||RJ,UJ!==O||t!==_)J.blendEquationSeparate(w[UJ],w[t]),O=UJ,_=t;if(WJ!==I||RJ!==L||i!==S||kJ!==C)J.blendFuncSeparate(r[WJ],r[RJ],r[i],r[kJ]),I=WJ,L=RJ,S=i,C=kJ;if(fJ.equals(T)===!1||Q0!==b)J.blendColor(fJ.r,fJ.g,fJ.b,Q0),T.copy(fJ),b=Q0;N=A,z=!1}function DJ(A,UJ){A.side===u0?VJ(J.CULL_FACE):QJ(J.CULL_FACE);let WJ=A.side===j0;if(UJ)WJ=!WJ;XJ(WJ),A.blending===$6&&A.transparent===!1?NJ(f8):NJ(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),Y.setFunc(A.depthFunc),Y.setTest(A.depthTest),Y.setMask(A.depthWrite),H.setMask(A.colorWrite);let RJ=A.stencilWrite;if(X.setTest(RJ),RJ)X.setMask(A.stencilWriteMask),X.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),X.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass);_J(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?QJ(J.SAMPLE_ALPHA_TO_COVERAGE):VJ(J.SAMPLE_ALPHA_TO_COVERAGE)}function XJ(A){if(V!==A){if(A)J.frontFace(J.CW);else J.frontFace(J.CCW);V=A}}function sJ(A){if(A!==vZ){if(QJ(J.CULL_FACE),A!==P)if(A===RQ)J.cullFace(J.BACK);else if(A===yZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else VJ(J.CULL_FACE);P=A}function zJ(A){if(A!==h){if(c)J.lineWidth(A);h=A}}function _J(A,UJ,WJ){if(A){if(QJ(J.POLYGON_OFFSET_FILL),l!==UJ||d!==WJ)J.polygonOffset(UJ,WJ),l=UJ,d=WJ}else VJ(J.POLYGON_OFFSET_FILL)}function E0(A){if(A)QJ(J.SCISSOR_TEST);else VJ(J.SCISSOR_TEST)}function q0(A){if(A===void 0)A=J.TEXTURE0+o-1;if(HJ!==A)J.activeTexture(A),HJ=A}function Y0(A,UJ,WJ){if(WJ===void 0)if(HJ===null)WJ=J.TEXTURE0+o-1;else WJ=HJ;let RJ=KJ[WJ];if(RJ===void 0)RJ={type:void 0,texture:void 0},KJ[WJ]=RJ;if(RJ.type!==A||RJ.texture!==UJ){if(HJ!==WJ)J.activeTexture(WJ),HJ=WJ;J.bindTexture(A,UJ||ZJ[A]),RJ.type=A,RJ.texture=UJ}}function B(){let A=KJ[HJ];if(A!==void 0&&A.type!==void 0)J.bindTexture(A.type,null),A.type=void 0,A.texture=void 0}function R(){try{J.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function f(){try{J.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function s(){try{J.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function n(){try{J.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function x(){try{J.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function OJ(){try{J.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function $J(){try{J.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function LJ(){try{J.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function jJ(){try{J.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function JJ(){try{J.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function EJ(A){if(rJ.equals(A)===!1)J.scissor(A.x,A.y,A.z,A.w),rJ.copy(A)}function CJ(A){if(gJ.equals(A)===!1)J.viewport(A.x,A.y,A.z,A.w),gJ.copy(A)}function IJ(A,UJ){let WJ=U.get(UJ);if(WJ===void 0)WJ=new WeakMap,U.set(UJ,WJ);let RJ=WJ.get(A);if(RJ===void 0)RJ=J.getUniformBlockIndex(UJ,A.name),WJ.set(A,RJ)}function qJ(A,UJ){let RJ=U.get(UJ).get(A);if(K.get(UJ)!==RJ)J.uniformBlockBinding(UJ,RJ,A.__bindingPointIndex),K.set(UJ,RJ)}function lJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},HJ=null,KJ={},E={},q=new WeakMap,F=[],k=null,M=!1,N=null,O=null,I=null,L=null,_=null,S=null,C=null,T=new yJ(0,0,0),b=0,z=!1,V=null,P=null,h=null,l=null,d=null,rJ.set(0,0,J.canvas.width,J.canvas.height),gJ.set(0,0,J.canvas.width,J.canvas.height),H.reset(),Y.reset(),X.reset()}return{buffers:{color:H,depth:Y,stencil:X},enable:QJ,disable:VJ,bindFramebuffer:AJ,drawBuffers:SJ,useProgram:G0,setBlending:NJ,setMaterial:DJ,setFlipSided:XJ,setCullFace:sJ,setLineWidth:zJ,setPolygonOffset:_J,setScissorTest:E0,activeTexture:q0,bindTexture:Y0,unbindTexture:B,compressedTexImage2D:R,compressedTexImage3D:f,texImage2D:jJ,texImage3D:JJ,updateUBOMapping:IJ,uniformBlockBinding:qJ,texStorage2D:$J,texStorage3D:LJ,texSubImage2D:s,texSubImage3D:n,compressedTexSubImage2D:x,compressedTexSubImage3D:OJ,scissor:EJ,viewport:CJ,reset:lJ}}function _E(J,Q,$,Z,W,H,Y){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new xJ,G=new WeakMap,E,q=new WeakMap,F=!1;try{F=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function k(B,R){return F?new OffscreenCanvas(B,R):_9("canvas")}function M(B,R,f){let s=1,n=Y0(B);if(n.width>f||n.height>f)s=f/Math.max(n.width,n.height);if(s<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let x=Math.floor(s*n.width),OJ=Math.floor(s*n.height);if(E===void 0)E=k(x,OJ);let $J=R?k(x,OJ):E;return $J.width=x,$J.height=OJ,$J.getContext("2d").drawImage(B,0,0,x,OJ),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+n.width+"x"+n.height+") to ("+x+"x"+OJ+")."),$J}else{if("data"in B)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+n.width+"x"+n.height+").");return B}return B}function N(B){return B.generateMipmaps}function O(B){J.generateMipmap(B)}function I(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(B,R,f,s,n=!1){if(B!==null){if(J[B]!==void 0)return J[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let x=R;if(R===J.RED){if(f===J.FLOAT)x=J.R32F;if(f===J.HALF_FLOAT)x=J.R16F;if(f===J.UNSIGNED_BYTE)x=J.R8}if(R===J.RED_INTEGER){if(f===J.UNSIGNED_BYTE)x=J.R8UI;if(f===J.UNSIGNED_SHORT)x=J.R16UI;if(f===J.UNSIGNED_INT)x=J.R32UI;if(f===J.BYTE)x=J.R8I;if(f===J.SHORT)x=J.R16I;if(f===J.INT)x=J.R32I}if(R===J.RG){if(f===J.FLOAT)x=J.RG32F;if(f===J.HALF_FLOAT)x=J.RG16F;if(f===J.UNSIGNED_BYTE)x=J.RG8}if(R===J.RG_INTEGER){if(f===J.UNSIGNED_BYTE)x=J.RG8UI;if(f===J.UNSIGNED_SHORT)x=J.RG16UI;if(f===J.UNSIGNED_INT)x=J.RG32UI;if(f===J.BYTE)x=J.RG8I;if(f===J.SHORT)x=J.RG16I;if(f===J.INT)x=J.RG32I}if(R===J.RGB_INTEGER){if(f===J.UNSIGNED_BYTE)x=J.RGB8UI;if(f===J.UNSIGNED_SHORT)x=J.RGB16UI;if(f===J.UNSIGNED_INT)x=J.RGB32UI;if(f===J.BYTE)x=J.RGB8I;if(f===J.SHORT)x=J.RGB16I;if(f===J.INT)x=J.RGB32I}if(R===J.RGBA_INTEGER){if(f===J.UNSIGNED_BYTE)x=J.RGBA8UI;if(f===J.UNSIGNED_SHORT)x=J.RGBA16UI;if(f===J.UNSIGNED_INT)x=J.RGBA32UI;if(f===J.BYTE)x=J.RGBA8I;if(f===J.SHORT)x=J.RGBA16I;if(f===J.INT)x=J.RGBA32I}if(R===J.RGB){if(f===J.UNSIGNED_INT_5_9_9_9_REV)x=J.RGB9_E5;if(f===J.UNSIGNED_INT_10F_11F_11F_REV)x=J.R11F_G11F_B10F}if(R===J.RGBA){let OJ=n?Z$:nJ.getTransfer(s);if(f===J.FLOAT)x=J.RGBA32F;if(f===J.HALF_FLOAT)x=J.RGBA16F;if(f===J.UNSIGNED_BYTE)x=OJ===Z0?J.SRGB8_ALPHA8:J.RGBA8;if(f===J.UNSIGNED_SHORT_4_4_4_4)x=J.RGBA4;if(f===J.UNSIGNED_SHORT_5_5_5_1)x=J.RGB5_A1}if(x===J.R16F||x===J.R32F||x===J.RG16F||x===J.RG32F||x===J.RGBA16F||x===J.RGBA32F)Q.get("EXT_color_buffer_float");return x}function _(B,R){let f;if(B){if(R===null||R===A9||R===S9)f=J.DEPTH24_STENCIL8;else if(R===b8)f=J.DEPTH32F_STENCIL8;else if(R===H6)f=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===A9||R===S9)f=J.DEPTH_COMPONENT24;else if(R===b8)f=J.DEPTH_COMPONENT32F;else if(R===H6)f=J.DEPTH_COMPONENT16;return f}function S(B,R){if(N(B)===!0||B.isFramebufferTexture&&B.minFilter!==z8&&B.minFilter!==Q8)return Math.log2(Math.max(R.width,R.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return R.mipmaps.length;else return 1}function C(B){let R=B.target;if(R.removeEventListener("dispose",C),b(R),R.isVideoTexture)G.delete(R)}function T(B){let R=B.target;R.removeEventListener("dispose",T),V(R)}function b(B){let R=Z.get(B);if(R.__webglInit===void 0)return;let f=B.source,s=q.get(f);if(s){let n=s[R.__cacheKey];if(n.usedTimes--,n.usedTimes===0)z(B);if(Object.keys(s).length===0)q.delete(f)}Z.remove(B)}function z(B){let R=Z.get(B);J.deleteTexture(R.__webglTexture);let f=B.source,s=q.get(f);delete s[R.__cacheKey],Y.memory.textures--}function V(B){let R=Z.get(B);if(B.depthTexture)B.depthTexture.dispose(),Z.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(R.__webglFramebuffer[s]))for(let n=0;n<R.__webglFramebuffer[s].length;n++)J.deleteFramebuffer(R.__webglFramebuffer[s][n]);else J.deleteFramebuffer(R.__webglFramebuffer[s]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[s])}else{if(Array.isArray(R.__webglFramebuffer))for(let s=0;s<R.__webglFramebuffer.length;s++)J.deleteFramebuffer(R.__webglFramebuffer[s]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let s=0;s<R.__webglColorRenderbuffer.length;s++)if(R.__webglColorRenderbuffer[s])J.deleteRenderbuffer(R.__webglColorRenderbuffer[s])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let f=B.textures;for(let s=0,n=f.length;s<n;s++){let x=Z.get(f[s]);if(x.__webglTexture)J.deleteTexture(x.__webglTexture),Y.memory.textures--;Z.remove(f[s])}Z.remove(B)}let P=0;function h(){P=0}function l(){let B=P;if(B>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+W.maxTextures);return P+=1,B}function d(B){let R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function o(B,R){let f=Z.get(B);if(B.isVideoTexture)E0(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&f.__version!==B.version){let s=B.image;if(s===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ZJ(f,B,R);return}}else if(B.isExternalTexture)f.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,f.__webglTexture,J.TEXTURE0+R)}function c(B,R){let f=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&f.__version!==B.version){ZJ(f,B,R);return}$.bindTexture(J.TEXTURE_2D_ARRAY,f.__webglTexture,J.TEXTURE0+R)}function a(B,R){let f=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&f.__version!==B.version){ZJ(f,B,R);return}$.bindTexture(J.TEXTURE_3D,f.__webglTexture,J.TEXTURE0+R)}function m(B,R){let f=Z.get(B);if(B.version>0&&f.__version!==B.version){QJ(f,B,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,f.__webglTexture,J.TEXTURE0+R)}let HJ={[w9]:J.REPEAT,[Y7]:J.CLAMP_TO_EDGE,[X7]:J.MIRRORED_REPEAT},KJ={[z8]:J.NEAREST,[K7]:J.NEAREST_MIPMAP_NEAREST,[Q9]:J.NEAREST_MIPMAP_LINEAR,[Q8]:J.LINEAR,[T9]:J.LINEAR_MIPMAP_NEAREST,[B8]:J.LINEAR_MIPMAP_LINEAR},BJ={[BW]:J.NEVER,[TW]:J.ALWAYS,[_W]:J.LESS,[W$]:J.LEQUAL,[CW]:J.EQUAL,[wW]:J.GEQUAL,[IW]:J.GREATER,[PW]:J.NOTEQUAL};function dJ(B,R){if(R.type===b8&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===Q8||R.magFilter===T9||R.magFilter===Q9||R.magFilter===B8||R.minFilter===Q8||R.minFilter===T9||R.minFilter===Q9||R.minFilter===B8))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,HJ[R.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,HJ[R.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,HJ[R.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,KJ[R.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,KJ[R.minFilter]),R.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,BJ[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===z8)return;if(R.minFilter!==Q9&&R.minFilter!==B8)return;if(R.type===b8&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||Z.get(R).__currentAnisotropy){let f=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,f.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,W.getMaxAnisotropy())),Z.get(R).__currentAnisotropy=R.anisotropy}}}function rJ(B,R){let f=!1;if(B.__webglInit===void 0)B.__webglInit=!0,R.addEventListener("dispose",C);let s=R.source,n=q.get(s);if(n===void 0)n={},q.set(s,n);let x=d(R);if(x!==B.__cacheKey){if(n[x]===void 0)n[x]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,f=!0;n[x].usedTimes++;let OJ=n[B.__cacheKey];if(OJ!==void 0){if(n[B.__cacheKey].usedTimes--,OJ.usedTimes===0)z(R)}B.__cacheKey=x,B.__webglTexture=n[x].texture}return f}function gJ(B,R,f){return Math.floor(Math.floor(B/f)/R)}function u(B,R,f,s){let x=B.updateRanges;if(x.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,f,s,R.data);else{x.sort((JJ,EJ)=>JJ.start-EJ.start);let OJ=0;for(let JJ=1;JJ<x.length;JJ++){let EJ=x[OJ],CJ=x[JJ],IJ=EJ.start+EJ.count,qJ=gJ(CJ.start,R.width,4),lJ=gJ(EJ.start,R.width,4);if(CJ.start<=IJ+1&&qJ===lJ&&gJ(CJ.start+CJ.count-1,R.width,4)===qJ)EJ.count=Math.max(EJ.count,CJ.start+CJ.count-EJ.start);else++OJ,x[OJ]=CJ}x.length=OJ+1;let $J=J.getParameter(J.UNPACK_ROW_LENGTH),LJ=J.getParameter(J.UNPACK_SKIP_PIXELS),jJ=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let JJ=0,EJ=x.length;JJ<EJ;JJ++){let CJ=x[JJ],IJ=Math.floor(CJ.start/4),qJ=Math.ceil(CJ.count/4),lJ=IJ%R.width,A=Math.floor(IJ/R.width),UJ=qJ,WJ=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,lJ),J.pixelStorei(J.UNPACK_SKIP_ROWS,A),$.texSubImage2D(J.TEXTURE_2D,0,lJ,A,UJ,1,f,s,R.data)}B.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,$J),J.pixelStorei(J.UNPACK_SKIP_PIXELS,LJ),J.pixelStorei(J.UNPACK_SKIP_ROWS,jJ)}}function ZJ(B,R,f){let s=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)s=J.TEXTURE_3D;let n=rJ(B,R),x=R.source;$.bindTexture(s,B.__webglTexture,J.TEXTURE0+f);let OJ=Z.get(x);if(x.version!==OJ.__version||n===!0){$.activeTexture(J.TEXTURE0+f);let $J=nJ.getPrimaries(nJ.workingColorSpace),LJ=R.colorSpace===_8?null:nJ.getPrimaries(R.colorSpace),jJ=R.colorSpace===_8||$J===LJ?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,jJ);let JJ=M(R.image,!1,W.maxTextureSize);JJ=q0(R,JJ);let EJ=H.convert(R.format,R.colorSpace),CJ=H.convert(R.type),IJ=L(R.internalFormat,EJ,CJ,R.colorSpace,R.isVideoTexture);dJ(s,R);let qJ,lJ=R.mipmaps,A=R.isVideoTexture!==!0,UJ=OJ.__version===void 0||n===!0,WJ=x.dataReady,RJ=S(R,JJ);if(R.isDepthTexture){if(IJ=_(R.format===X6,R.type),UJ)if(A)$.texStorage2D(J.TEXTURE_2D,1,IJ,JJ.width,JJ.height);else $.texImage2D(J.TEXTURE_2D,0,IJ,JJ.width,JJ.height,0,EJ,CJ,null)}else if(R.isDataTexture)if(lJ.length>0){if(A&&UJ)$.texStorage2D(J.TEXTURE_2D,RJ,IJ,lJ[0].width,lJ[0].height);for(let t=0,i=lJ.length;t<i;t++)if(qJ=lJ[t],A){if(WJ)$.texSubImage2D(J.TEXTURE_2D,t,0,0,qJ.width,qJ.height,EJ,CJ,qJ.data)}else $.texImage2D(J.TEXTURE_2D,t,IJ,qJ.width,qJ.height,0,EJ,CJ,qJ.data);R.generateMipmaps=!1}else if(A){if(UJ)$.texStorage2D(J.TEXTURE_2D,RJ,IJ,JJ.width,JJ.height);if(WJ)u(R,JJ,EJ,CJ)}else $.texImage2D(J.TEXTURE_2D,0,IJ,JJ.width,JJ.height,0,EJ,CJ,JJ.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(A&&UJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,RJ,IJ,lJ[0].width,lJ[0].height,JJ.depth);for(let t=0,i=lJ.length;t<i;t++)if(qJ=lJ[t],R.format!==X8)if(EJ!==null)if(A){if(WJ)if(R.layerUpdates.size>0){let kJ=I$(qJ.width,qJ.height,R.format,R.type);for(let fJ of R.layerUpdates){let Q0=qJ.data.subarray(fJ*kJ/qJ.data.BYTES_PER_ELEMENT,(fJ+1)*kJ/qJ.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,t,0,0,fJ,qJ.width,qJ.height,1,EJ,Q0)}R.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,t,0,0,0,qJ.width,qJ.height,JJ.depth,EJ,qJ.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,t,IJ,qJ.width,qJ.height,JJ.depth,0,qJ.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(A){if(WJ)$.texSubImage3D(J.TEXTURE_2D_ARRAY,t,0,0,0,qJ.width,qJ.height,JJ.depth,EJ,CJ,qJ.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,t,IJ,qJ.width,qJ.height,JJ.depth,0,EJ,CJ,qJ.data)}else{if(A&&UJ)$.texStorage2D(J.TEXTURE_2D,RJ,IJ,lJ[0].width,lJ[0].height);for(let t=0,i=lJ.length;t<i;t++)if(qJ=lJ[t],R.format!==X8)if(EJ!==null)if(A){if(WJ)$.compressedTexSubImage2D(J.TEXTURE_2D,t,0,0,qJ.width,qJ.height,EJ,qJ.data)}else $.compressedTexImage2D(J.TEXTURE_2D,t,IJ,qJ.width,qJ.height,0,qJ.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(A){if(WJ)$.texSubImage2D(J.TEXTURE_2D,t,0,0,qJ.width,qJ.height,EJ,CJ,qJ.data)}else $.texImage2D(J.TEXTURE_2D,t,IJ,qJ.width,qJ.height,0,EJ,CJ,qJ.data)}else if(R.isDataArrayTexture)if(A){if(UJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,RJ,IJ,JJ.width,JJ.height,JJ.depth);if(WJ)if(R.layerUpdates.size>0){let t=I$(JJ.width,JJ.height,R.format,R.type);for(let i of R.layerUpdates){let kJ=JJ.data.subarray(i*t/JJ.data.BYTES_PER_ELEMENT,(i+1)*t/JJ.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,i,JJ.width,JJ.height,1,EJ,CJ,kJ)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,JJ.width,JJ.height,JJ.depth,EJ,CJ,JJ.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,IJ,JJ.width,JJ.height,JJ.depth,0,EJ,CJ,JJ.data);else if(R.isData3DTexture)if(A){if(UJ)$.texStorage3D(J.TEXTURE_3D,RJ,IJ,JJ.width,JJ.height,JJ.depth);if(WJ)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,JJ.width,JJ.height,JJ.depth,EJ,CJ,JJ.data)}else $.texImage3D(J.TEXTURE_3D,0,IJ,JJ.width,JJ.height,JJ.depth,0,EJ,CJ,JJ.data);else if(R.isFramebufferTexture){if(UJ)if(A)$.texStorage2D(J.TEXTURE_2D,RJ,IJ,JJ.width,JJ.height);else{let{width:t,height:i}=JJ;for(let kJ=0;kJ<RJ;kJ++)$.texImage2D(J.TEXTURE_2D,kJ,IJ,t,i,0,EJ,CJ,null),t>>=1,i>>=1}}else if(lJ.length>0){if(A&&UJ){let t=Y0(lJ[0]);$.texStorage2D(J.TEXTURE_2D,RJ,IJ,t.width,t.height)}for(let t=0,i=lJ.length;t<i;t++)if(qJ=lJ[t],A){if(WJ)$.texSubImage2D(J.TEXTURE_2D,t,0,0,EJ,CJ,qJ)}else $.texImage2D(J.TEXTURE_2D,t,IJ,EJ,CJ,qJ);R.generateMipmaps=!1}else if(A){if(UJ){let t=Y0(JJ);$.texStorage2D(J.TEXTURE_2D,RJ,IJ,t.width,t.height)}if(WJ)$.texSubImage2D(J.TEXTURE_2D,0,0,0,EJ,CJ,JJ)}else $.texImage2D(J.TEXTURE_2D,0,IJ,EJ,CJ,JJ);if(N(R))O(s);if(OJ.__version=x.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function QJ(B,R,f){if(R.image.length!==6)return;let s=rJ(B,R),n=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+f);let x=Z.get(n);if(n.version!==x.__version||s===!0){$.activeTexture(J.TEXTURE0+f);let OJ=nJ.getPrimaries(nJ.workingColorSpace),$J=R.colorSpace===_8?null:nJ.getPrimaries(R.colorSpace),LJ=R.colorSpace===_8||OJ===$J?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,LJ);let jJ=R.isCompressedTexture||R.image[0].isCompressedTexture,JJ=R.image[0]&&R.image[0].isDataTexture,EJ=[];for(let i=0;i<6;i++){if(!jJ&&!JJ)EJ[i]=M(R.image[i],!0,W.maxCubemapSize);else EJ[i]=JJ?R.image[i].image:R.image[i];EJ[i]=q0(R,EJ[i])}let CJ=EJ[0],IJ=H.convert(R.format,R.colorSpace),qJ=H.convert(R.type),lJ=L(R.internalFormat,IJ,qJ,R.colorSpace),A=R.isVideoTexture!==!0,UJ=x.__version===void 0||s===!0,WJ=n.dataReady,RJ=S(R,CJ);dJ(J.TEXTURE_CUBE_MAP,R);let t;if(jJ){if(A&&UJ)$.texStorage2D(J.TEXTURE_CUBE_MAP,RJ,lJ,CJ.width,CJ.height);for(let i=0;i<6;i++){t=EJ[i].mipmaps;for(let kJ=0;kJ<t.length;kJ++){let fJ=t[kJ];if(R.format!==X8)if(IJ!==null)if(A){if(WJ)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,kJ,0,0,fJ.width,fJ.height,IJ,fJ.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,kJ,lJ,fJ.width,fJ.height,0,fJ.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(A){if(WJ)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,kJ,0,0,fJ.width,fJ.height,IJ,qJ,fJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,kJ,lJ,fJ.width,fJ.height,0,IJ,qJ,fJ.data)}}}else{if(t=R.mipmaps,A&&UJ){if(t.length>0)RJ++;let i=Y0(EJ[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,RJ,lJ,i.width,i.height)}for(let i=0;i<6;i++)if(JJ){if(A){if(WJ)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,EJ[i].width,EJ[i].height,IJ,qJ,EJ[i].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,lJ,EJ[i].width,EJ[i].height,0,IJ,qJ,EJ[i].data);for(let kJ=0;kJ<t.length;kJ++){let Q0=t[kJ].image[i].image;if(A){if(WJ)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,kJ+1,0,0,Q0.width,Q0.height,IJ,qJ,Q0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,kJ+1,lJ,Q0.width,Q0.height,0,IJ,qJ,Q0.data)}}else{if(A){if(WJ)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,IJ,qJ,EJ[i])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,lJ,IJ,qJ,EJ[i]);for(let kJ=0;kJ<t.length;kJ++){let fJ=t[kJ];if(A){if(WJ)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,kJ+1,0,0,IJ,qJ,fJ.image[i])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,kJ+1,lJ,IJ,qJ,fJ.image[i])}}}if(N(R))O(J.TEXTURE_CUBE_MAP);if(x.__version=n.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function VJ(B,R,f,s,n,x){let OJ=H.convert(f.format,f.colorSpace),$J=H.convert(f.type),LJ=L(f.internalFormat,OJ,$J,f.colorSpace),jJ=Z.get(R),JJ=Z.get(f);if(JJ.__renderTarget=R,!jJ.__hasExternalTextures){let EJ=Math.max(1,R.width>>x),CJ=Math.max(1,R.height>>x);if(n===J.TEXTURE_3D||n===J.TEXTURE_2D_ARRAY)$.texImage3D(n,x,LJ,EJ,CJ,R.depth,0,OJ,$J,null);else $.texImage2D(n,x,LJ,EJ,CJ,0,OJ,$J,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),_J(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,n,JJ.__webglTexture,0,zJ(R));else if(n===J.TEXTURE_2D||n>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&n<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,n,JJ.__webglTexture,x);$.bindFramebuffer(J.FRAMEBUFFER,null)}function AJ(B,R,f){if(J.bindRenderbuffer(J.RENDERBUFFER,B),R.depthBuffer){let s=R.depthTexture,n=s&&s.isDepthTexture?s.type:null,x=_(R.stencilBuffer,n),OJ=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,$J=zJ(R);if(_J(R))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,$J,x,R.width,R.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,$J,x,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,x,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,OJ,J.RENDERBUFFER,B)}else{let s=R.textures;for(let n=0;n<s.length;n++){let x=s[n],OJ=H.convert(x.format,x.colorSpace),$J=H.convert(x.type),LJ=L(x.internalFormat,OJ,$J,x.colorSpace),jJ=zJ(R);if(f&&_J(R)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,jJ,LJ,R.width,R.height);else if(_J(R))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,jJ,LJ,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,LJ,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function SJ(B,R){if(R&&R.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if($.bindFramebuffer(J.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let s=Z.get(R.depthTexture);if(s.__renderTarget=R,!s.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;o(R.depthTexture,0);let n=s.__webglTexture,x=zJ(R);if(R.depthTexture.format===U7)if(_J(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,n,0,x);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,n,0);else if(R.depthTexture.format===X6)if(_J(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,n,0,x);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,n,0);else throw Error("Unknown depthTexture format")}function G0(B){let R=Z.get(B),f=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){let s=B.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(s){let n=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,s.removeEventListener("dispose",n)};s.addEventListener("dispose",n),R.__depthDisposeCallback=n}R.__boundDepthTexture=s}if(B.depthTexture&&!R.__autoAllocateDepthBuffer){if(f)throw Error("target.depthTexture not supported in Cube render targets");let s=B.texture.mipmaps;if(s&&s.length>0)SJ(R.__webglFramebuffer[0],B);else SJ(R.__webglFramebuffer,B)}else if(f){R.__webglDepthbuffer=[];for(let s=0;s<6;s++)if($.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[s]),R.__webglDepthbuffer[s]===void 0)R.__webglDepthbuffer[s]=J.createRenderbuffer(),AJ(R.__webglDepthbuffer[s],B,!1);else{let n=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,x=R.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,x),J.framebufferRenderbuffer(J.FRAMEBUFFER,n,J.RENDERBUFFER,x)}}else{let s=B.texture.mipmaps;if(s&&s.length>0)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),AJ(R.__webglDepthbuffer,B,!1);else{let n=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,x=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,x),J.framebufferRenderbuffer(J.FRAMEBUFFER,n,J.RENDERBUFFER,x)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function w(B,R,f){let s=Z.get(B);if(R!==void 0)VJ(s.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(f!==void 0)G0(B)}function r(B){let R=B.texture,f=Z.get(B),s=Z.get(R);B.addEventListener("dispose",T);let n=B.textures,x=B.isWebGLCubeRenderTarget===!0,OJ=n.length>1;if(!OJ){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=R.version,Y.memory.textures++}if(x){f.__webglFramebuffer=[];for(let $J=0;$J<6;$J++)if(R.mipmaps&&R.mipmaps.length>0){f.__webglFramebuffer[$J]=[];for(let LJ=0;LJ<R.mipmaps.length;LJ++)f.__webglFramebuffer[$J][LJ]=J.createFramebuffer()}else f.__webglFramebuffer[$J]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){f.__webglFramebuffer=[];for(let $J=0;$J<R.mipmaps.length;$J++)f.__webglFramebuffer[$J]=J.createFramebuffer()}else f.__webglFramebuffer=J.createFramebuffer();if(OJ)for(let $J=0,LJ=n.length;$J<LJ;$J++){let jJ=Z.get(n[$J]);if(jJ.__webglTexture===void 0)jJ.__webglTexture=J.createTexture(),Y.memory.textures++}if(B.samples>0&&_J(B)===!1){f.__webglMultisampledFramebuffer=J.createFramebuffer(),f.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,f.__webglMultisampledFramebuffer);for(let $J=0;$J<n.length;$J++){let LJ=n[$J];f.__webglColorRenderbuffer[$J]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,f.__webglColorRenderbuffer[$J]);let jJ=H.convert(LJ.format,LJ.colorSpace),JJ=H.convert(LJ.type),EJ=L(LJ.internalFormat,jJ,JJ,LJ.colorSpace,B.isXRRenderTarget===!0),CJ=zJ(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,CJ,EJ,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+$J,J.RENDERBUFFER,f.__webglColorRenderbuffer[$J])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)f.__webglDepthRenderbuffer=J.createRenderbuffer(),AJ(f.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(x){$.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),dJ(J.TEXTURE_CUBE_MAP,R);for(let $J=0;$J<6;$J++)if(R.mipmaps&&R.mipmaps.length>0)for(let LJ=0;LJ<R.mipmaps.length;LJ++)VJ(f.__webglFramebuffer[$J][LJ],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+$J,LJ);else VJ(f.__webglFramebuffer[$J],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+$J,0);if(N(R))O(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(OJ){for(let $J=0,LJ=n.length;$J<LJ;$J++){let jJ=n[$J],JJ=Z.get(jJ),EJ=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)EJ=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(EJ,JJ.__webglTexture),dJ(EJ,jJ),VJ(f.__webglFramebuffer,B,jJ,J.COLOR_ATTACHMENT0+$J,EJ,0),N(jJ))O(EJ)}$.unbindTexture()}else{let $J=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)$J=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture($J,s.__webglTexture),dJ($J,R),R.mipmaps&&R.mipmaps.length>0)for(let LJ=0;LJ<R.mipmaps.length;LJ++)VJ(f.__webglFramebuffer[LJ],B,R,J.COLOR_ATTACHMENT0,$J,LJ);else VJ(f.__webglFramebuffer,B,R,J.COLOR_ATTACHMENT0,$J,0);if(N(R))O($J);$.unbindTexture()}if(B.depthBuffer)G0(B)}function NJ(B){let R=B.textures;for(let f=0,s=R.length;f<s;f++){let n=R[f];if(N(n)){let x=I(B),OJ=Z.get(n).__webglTexture;$.bindTexture(x,OJ),O(x),$.unbindTexture()}}}let DJ=[],XJ=[];function sJ(B){if(B.samples>0){if(_J(B)===!1){let{textures:R,width:f,height:s}=B,n=J.COLOR_BUFFER_BIT,x=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,OJ=Z.get(B),$J=R.length>1;if($J)for(let jJ=0;jJ<R.length;jJ++)$.bindFramebuffer(J.FRAMEBUFFER,OJ.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+jJ,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,OJ.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+jJ,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,OJ.__webglMultisampledFramebuffer);let LJ=B.texture.mipmaps;if(LJ&&LJ.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,OJ.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,OJ.__webglFramebuffer);for(let jJ=0;jJ<R.length;jJ++){if(B.resolveDepthBuffer){if(B.depthBuffer)n|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)n|=J.STENCIL_BUFFER_BIT}if($J){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,OJ.__webglColorRenderbuffer[jJ]);let JJ=Z.get(R[jJ]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,JJ,0)}if(J.blitFramebuffer(0,0,f,s,0,0,f,s,n,J.NEAREST),K===!0){if(DJ.length=0,XJ.length=0,DJ.push(J.COLOR_ATTACHMENT0+jJ),B.depthBuffer&&B.resolveDepthBuffer===!1)DJ.push(x),XJ.push(x),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,XJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,DJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),$J)for(let jJ=0;jJ<R.length;jJ++){$.bindFramebuffer(J.FRAMEBUFFER,OJ.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+jJ,J.RENDERBUFFER,OJ.__webglColorRenderbuffer[jJ]);let JJ=Z.get(R[jJ]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,OJ.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+jJ,J.TEXTURE_2D,JJ,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,OJ.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&K){let R=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function zJ(B){return Math.min(W.maxSamples,B.samples)}function _J(B){let R=Z.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function E0(B){let R=Y.render.frame;if(G.get(B)!==R)G.set(B,R),B.update()}function q0(B,R){let{colorSpace:f,format:s,type:n}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return R;if(f!==I0&&f!==_8)if(nJ.getTransfer(f)===Z0){if(s!==X8||n!==h8)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",f);return R}function Y0(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)U.width=B.naturalWidth||B.width,U.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)U.width=B.displayWidth,U.height=B.displayHeight;else U.width=B.width,U.height=B.height;return U}this.allocateTextureUnit=l,this.resetTextureUnits=h,this.setTexture2D=o,this.setTexture2DArray=c,this.setTexture3D=a,this.setTextureCube=m,this.rebindTextures=w,this.setupRenderTarget=r,this.updateRenderTargetMipmap=NJ,this.updateMultisampleRenderTarget=sJ,this.setupDepthRenderbuffer=G0,this.setupFrameBufferTexture=VJ,this.useMultisampledRTT=_J}function CE(J,Q){function $(Z,W=_8){let H,Y=nJ.getTransfer(W);if(Z===h8)return J.UNSIGNED_BYTE;if(Z===zQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===BQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===OW)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===FW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===qW)return J.BYTE;if(Z===NW)return J.SHORT;if(Z===H6)return J.UNSIGNED_SHORT;if(Z===VQ)return J.INT;if(Z===A9)return J.UNSIGNED_INT;if(Z===b8)return J.FLOAT;if(Z===Y6)return J.HALF_FLOAT;if(Z===RW)return J.ALPHA;if(Z===MW)return J.RGB;if(Z===X8)return J.RGBA;if(Z===U7)return J.DEPTH_COMPONENT;if(Z===X6)return J.DEPTH_STENCIL;if(Z===kW)return J.RED;if(Z===_Q)return J.RED_INTEGER;if(Z===DW)return J.RG;if(Z===CQ)return J.RG_INTEGER;if(Z===IQ)return J.RGBA_INTEGER;if(Z===G7||Z===E7||Z===q7||Z===N7)if(Y===Z0)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(Z===G7)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===E7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===q7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===N7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if(Z===G7)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===E7)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===q7)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===N7)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===PQ||Z===wQ||Z===TQ||Z===AQ)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(Z===PQ)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===wQ)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===TQ)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===AQ)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===SQ||Z===jQ||Z===vQ)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if(Z===SQ||Z===jQ)return Y===Z0?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(Z===vQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===yQ||Z===fQ||Z===hQ||Z===bQ||Z===xQ||Z===gQ||Z===pQ||Z===lQ||Z===dQ||Z===mQ||Z===uQ||Z===cQ||Z===nQ||Z===sQ)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if(Z===yQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===fQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===hQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===bQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===xQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===gQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===pQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===lQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===dQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===mQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===uQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===cQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===nQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===sQ)return Y===Z0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===oQ||Z===iQ||Z===aQ)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if(Z===oQ)return Y===Z0?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===iQ)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===aQ)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===rQ||Z===tQ||Z===eQ||Z===J$)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if(Z===rQ)return H.COMPRESSED_RED_RGTC1_EXT;if(Z===tQ)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===eQ)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===J$)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===S9)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var IE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LH{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new w7(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new n0({vertexShader:IE,fragmentShader:PE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new z0(new M6(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VH extends x8{constructor(J,Q){super();let $=this,Z=null,W=1,H=null,Y="local-floor",X=1,K=null,U=null,G=null,E=null,q=null,F=null,k=typeof XRWebGLBinding<"u",M=new LH,N={},O=Q.getContextAttributes(),I=null,L=null,_=[],S=[],C=new xJ,T=null,b=new D0;b.viewport=new iJ;let z=new D0;z.viewport=new iJ;let V=[b,z],P=new B$,h=null,l=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(u){let ZJ=_[u];if(ZJ===void 0)ZJ=new G6,_[u]=ZJ;return ZJ.getTargetRaySpace()},this.getControllerGrip=function(u){let ZJ=_[u];if(ZJ===void 0)ZJ=new G6,_[u]=ZJ;return ZJ.getGripSpace()},this.getHand=function(u){let ZJ=_[u];if(ZJ===void 0)ZJ=new G6,_[u]=ZJ;return ZJ.getHandSpace()};function d(u){let ZJ=S.indexOf(u.inputSource);if(ZJ===-1)return;let QJ=_[ZJ];if(QJ!==void 0)QJ.update(u.inputSource,u.frame,K||H),QJ.dispatchEvent({type:u.type,data:u.inputSource})}function o(){Z.removeEventListener("select",d),Z.removeEventListener("selectstart",d),Z.removeEventListener("selectend",d),Z.removeEventListener("squeeze",d),Z.removeEventListener("squeezestart",d),Z.removeEventListener("squeezeend",d),Z.removeEventListener("end",o),Z.removeEventListener("inputsourceschange",c);for(let u=0;u<_.length;u++){let ZJ=S[u];if(ZJ===null)continue;S[u]=null,_[u].disconnect(ZJ)}h=null,l=null,M.reset();for(let u in N)delete N[u];J.setRenderTarget(I),q=null,E=null,G=null,Z=null,L=null,gJ.stop(),$.isPresenting=!1,J.setPixelRatio(T),J.setSize(C.width,C.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(u){if(W=u,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(u){if(Y=u,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||H},this.setReferenceSpace=function(u){K=u},this.getBaseLayer=function(){return E!==null?E:q},this.getBinding=function(){if(G===null&&k)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return F},this.getSession=function(){return Z},this.setSession=async function(u){if(Z=u,Z!==null){if(I=J.getRenderTarget(),Z.addEventListener("select",d),Z.addEventListener("selectstart",d),Z.addEventListener("selectend",d),Z.addEventListener("squeeze",d),Z.addEventListener("squeezestart",d),Z.addEventListener("squeezeend",d),Z.addEventListener("end",o),Z.addEventListener("inputsourceschange",c),O.xrCompatible!==!0)await Q.makeXRCompatible();if(T=J.getPixelRatio(),J.getSize(C),!(k&&("createProjectionLayer"in XRWebGLBinding.prototype))){let QJ={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer(Z,Q,QJ),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),L=new C8(q.framebufferWidth,q.framebufferHeight,{format:X8,type:h8,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let QJ=null,VJ=null,AJ=null;if(O.depth)AJ=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,QJ=O.stencil?X6:U7,VJ=O.stencil?S9:A9;let SJ={colorFormat:Q.RGBA8,depthFormat:AJ,scaleFactor:W};G=this.getBinding(),E=G.createProjectionLayer(SJ),Z.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),L=new C8(E.textureWidth,E.textureHeight,{format:X8,type:h8,depthTexture:new P7(E.textureWidth,E.textureHeight,VJ,void 0,void 0,void 0,void 0,void 0,void 0,QJ),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(X),K=null,H=await Z.requestReferenceSpace(Y),gJ.setContext(Z),gJ.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function c(u){for(let ZJ=0;ZJ<u.removed.length;ZJ++){let QJ=u.removed[ZJ],VJ=S.indexOf(QJ);if(VJ>=0)S[VJ]=null,_[VJ].disconnect(QJ)}for(let ZJ=0;ZJ<u.added.length;ZJ++){let QJ=u.added[ZJ],VJ=S.indexOf(QJ);if(VJ===-1){for(let SJ=0;SJ<_.length;SJ++)if(SJ>=S.length){S.push(QJ),VJ=SJ;break}else if(S[SJ]===null){S[SJ]=QJ,VJ=SJ;break}if(VJ===-1)break}let AJ=_[VJ];if(AJ)AJ.connect(QJ)}}let a=new j,m=new j;function HJ(u,ZJ,QJ){a.setFromMatrixPosition(ZJ.matrixWorld),m.setFromMatrixPosition(QJ.matrixWorld);let VJ=a.distanceTo(m),AJ=ZJ.projectionMatrix.elements,SJ=QJ.projectionMatrix.elements,G0=AJ[14]/(AJ[10]-1),w=AJ[14]/(AJ[10]+1),r=(AJ[9]+1)/AJ[5],NJ=(AJ[9]-1)/AJ[5],DJ=(AJ[8]-1)/AJ[0],XJ=(SJ[8]+1)/SJ[0],sJ=G0*DJ,zJ=G0*XJ,_J=VJ/(-DJ+XJ),E0=_J*-DJ;if(ZJ.matrixWorld.decompose(u.position,u.quaternion,u.scale),u.translateX(E0),u.translateZ(_J),u.matrixWorld.compose(u.position,u.quaternion,u.scale),u.matrixWorldInverse.copy(u.matrixWorld).invert(),AJ[10]===-1)u.projectionMatrix.copy(ZJ.projectionMatrix),u.projectionMatrixInverse.copy(ZJ.projectionMatrixInverse);else{let q0=G0+_J,Y0=w+_J,B=sJ-E0,R=zJ+(VJ-E0),f=r*w/Y0*q0,s=NJ*w/Y0*q0;u.projectionMatrix.makePerspective(B,R,f,s,q0,Y0),u.projectionMatrixInverse.copy(u.projectionMatrix).invert()}}function KJ(u,ZJ){if(ZJ===null)u.matrixWorld.copy(u.matrix);else u.matrixWorld.multiplyMatrices(ZJ.matrixWorld,u.matrix);u.matrixWorldInverse.copy(u.matrixWorld).invert()}this.updateCamera=function(u){if(Z===null)return;let{near:ZJ,far:QJ}=u;if(M.texture!==null){if(M.depthNear>0)ZJ=M.depthNear;if(M.depthFar>0)QJ=M.depthFar}if(P.near=z.near=b.near=ZJ,P.far=z.far=b.far=QJ,h!==P.near||l!==P.far)Z.updateRenderState({depthNear:P.near,depthFar:P.far}),h=P.near,l=P.far;P.layers.mask=u.layers.mask|6,b.layers.mask=P.layers.mask&3,z.layers.mask=P.layers.mask&5;let VJ=u.parent,AJ=P.cameras;KJ(P,VJ);for(let SJ=0;SJ<AJ.length;SJ++)KJ(AJ[SJ],VJ);if(AJ.length===2)HJ(P,b,z);else P.projectionMatrix.copy(b.projectionMatrix);BJ(u,P,VJ)};function BJ(u,ZJ,QJ){if(QJ===null)u.matrix.copy(ZJ.matrixWorld);else u.matrix.copy(QJ.matrixWorld),u.matrix.invert(),u.matrix.multiply(ZJ.matrixWorld);if(u.matrix.decompose(u.position,u.quaternion,u.scale),u.updateMatrixWorld(!0),u.projectionMatrix.copy(ZJ.projectionMatrix),u.projectionMatrixInverse.copy(ZJ.projectionMatrixInverse),u.isPerspectiveCamera)u.fov=t8*2*Math.atan(1/u.projectionMatrix.elements[5]),u.zoom=1}this.getCamera=function(){return P},this.getFoveation=function(){if(E===null&&q===null)return;return X},this.setFoveation=function(u){if(X=u,E!==null)E.fixedFoveation=u;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=u},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(P)},this.getCameraTexture=function(u){return N[u]};let dJ=null;function rJ(u,ZJ){if(U=ZJ.getViewerPose(K||H),F=ZJ,U!==null){let QJ=U.views;if(q!==null)J.setRenderTargetFramebuffer(L,q.framebuffer),J.setRenderTarget(L);let VJ=!1;if(QJ.length!==P.cameras.length)P.cameras.length=0,VJ=!0;for(let w=0;w<QJ.length;w++){let r=QJ[w],NJ=null;if(q!==null)NJ=q.getViewport(r);else{let XJ=G.getViewSubImage(E,r);if(NJ=XJ.viewport,w===0)J.setRenderTargetTextures(L,XJ.colorTexture,XJ.depthStencilTexture),J.setRenderTarget(L)}let DJ=V[w];if(DJ===void 0)DJ=new D0,DJ.layers.enable(w),DJ.viewport=new iJ,V[w]=DJ;if(DJ.matrix.fromArray(r.transform.matrix),DJ.matrix.decompose(DJ.position,DJ.quaternion,DJ.scale),DJ.projectionMatrix.fromArray(r.projectionMatrix),DJ.projectionMatrixInverse.copy(DJ.projectionMatrix).invert(),DJ.viewport.set(NJ.x,NJ.y,NJ.width,NJ.height),w===0)P.matrix.copy(DJ.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale);if(VJ===!0)P.cameras.push(DJ)}let AJ=Z.enabledFeatures;if(AJ&&AJ.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&k){G=$.getBinding();let w=G.getDepthInformation(QJ[0]);if(w&&w.isValid&&w.texture)M.init(w,Z.renderState)}if(AJ&&AJ.includes("camera-access")&&k){J.state.unbindTexture(),G=$.getBinding();for(let w=0;w<QJ.length;w++){let r=QJ[w].camera;if(r){let NJ=N[r];if(!NJ)NJ=new w7,N[r]=NJ;let DJ=G.getCameraImage(r);NJ.sourceTexture=DJ}}}}for(let QJ=0;QJ<_.length;QJ++){let VJ=S[QJ],AJ=_[QJ];if(VJ!==null&&AJ!==void 0)AJ.update(VJ,ZJ,K||H)}if(dJ)dJ(u,ZJ);if(ZJ.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:ZJ});F=null}let gJ=new GH;gJ.setAnimationLoop(rJ),this.setAnimationLoop=function(u){dJ=u},this.dispose=function(){}}}var W9=new e0,wE=new hJ;function TE(J,Q){function $(N,O){if(N.matrixAutoUpdate===!0)N.updateMatrix();O.value.copy(N.matrix)}function Z(N,O){if(O.color.getRGB(N.fogColor.value,q$(J)),O.isFog)N.fogNear.value=O.near,N.fogFar.value=O.far;else if(O.isFogExp2)N.fogDensity.value=O.density}function W(N,O,I,L,_){if(O.isMeshBasicMaterial)H(N,O);else if(O.isMeshLambertMaterial)H(N,O);else if(O.isMeshToonMaterial)H(N,O),E(N,O);else if(O.isMeshPhongMaterial)H(N,O),G(N,O);else if(O.isMeshStandardMaterial){if(H(N,O),q(N,O),O.isMeshPhysicalMaterial)F(N,O,_)}else if(O.isMeshMatcapMaterial)H(N,O),k(N,O);else if(O.isMeshDepthMaterial)H(N,O);else if(O.isMeshDistanceMaterial)H(N,O),M(N,O);else if(O.isMeshNormalMaterial)H(N,O);else if(O.isLineBasicMaterial){if(Y(N,O),O.isLineDashedMaterial)X(N,O)}else if(O.isPointsMaterial)K(N,O,I,L);else if(O.isSpriteMaterial)U(N,O);else if(O.isShadowMaterial)N.color.value.copy(O.color),N.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function H(N,O){if(N.opacity.value=O.opacity,O.color)N.diffuse.value.copy(O.color);if(O.emissive)N.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)N.map.value=O.map,$(O.map,N.mapTransform);if(O.alphaMap)N.alphaMap.value=O.alphaMap,$(O.alphaMap,N.alphaMapTransform);if(O.bumpMap){if(N.bumpMap.value=O.bumpMap,$(O.bumpMap,N.bumpMapTransform),N.bumpScale.value=O.bumpScale,O.side===j0)N.bumpScale.value*=-1}if(O.normalMap){if(N.normalMap.value=O.normalMap,$(O.normalMap,N.normalMapTransform),N.normalScale.value.copy(O.normalScale),O.side===j0)N.normalScale.value.negate()}if(O.displacementMap)N.displacementMap.value=O.displacementMap,$(O.displacementMap,N.displacementMapTransform),N.displacementScale.value=O.displacementScale,N.displacementBias.value=O.displacementBias;if(O.emissiveMap)N.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,N.emissiveMapTransform);if(O.specularMap)N.specularMap.value=O.specularMap,$(O.specularMap,N.specularMapTransform);if(O.alphaTest>0)N.alphaTest.value=O.alphaTest;let I=Q.get(O),L=I.envMap,_=I.envMapRotation;if(L){if(N.envMap.value=L,W9.copy(_),W9.x*=-1,W9.y*=-1,W9.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)W9.y*=-1,W9.z*=-1;N.envMapRotation.value.setFromMatrix4(wE.makeRotationFromEuler(W9)),N.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,N.reflectivity.value=O.reflectivity,N.ior.value=O.ior,N.refractionRatio.value=O.refractionRatio}if(O.lightMap)N.lightMap.value=O.lightMap,N.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,N.lightMapTransform);if(O.aoMap)N.aoMap.value=O.aoMap,N.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,N.aoMapTransform)}function Y(N,O){if(N.diffuse.value.copy(O.color),N.opacity.value=O.opacity,O.map)N.map.value=O.map,$(O.map,N.mapTransform)}function X(N,O){N.dashSize.value=O.dashSize,N.totalSize.value=O.dashSize+O.gapSize,N.scale.value=O.scale}function K(N,O,I,L){if(N.diffuse.value.copy(O.color),N.opacity.value=O.opacity,N.size.value=O.size*I,N.scale.value=L*0.5,O.map)N.map.value=O.map,$(O.map,N.uvTransform);if(O.alphaMap)N.alphaMap.value=O.alphaMap,$(O.alphaMap,N.alphaMapTransform);if(O.alphaTest>0)N.alphaTest.value=O.alphaTest}function U(N,O){if(N.diffuse.value.copy(O.color),N.opacity.value=O.opacity,N.rotation.value=O.rotation,O.map)N.map.value=O.map,$(O.map,N.mapTransform);if(O.alphaMap)N.alphaMap.value=O.alphaMap,$(O.alphaMap,N.alphaMapTransform);if(O.alphaTest>0)N.alphaTest.value=O.alphaTest}function G(N,O){N.specular.value.copy(O.specular),N.shininess.value=Math.max(O.shininess,0.0001)}function E(N,O){if(O.gradientMap)N.gradientMap.value=O.gradientMap}function q(N,O){if(N.metalness.value=O.metalness,O.metalnessMap)N.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,N.metalnessMapTransform);if(N.roughness.value=O.roughness,O.roughnessMap)N.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,N.roughnessMapTransform);if(O.envMap)N.envMapIntensity.value=O.envMapIntensity}function F(N,O,I){if(N.ior.value=O.ior,O.sheen>0){if(N.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),N.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)N.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,N.sheenColorMapTransform);if(O.sheenRoughnessMap)N.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,N.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(N.clearcoat.value=O.clearcoat,N.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)N.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,N.clearcoatMapTransform);if(O.clearcoatRoughnessMap)N.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,N.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(N.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,N.clearcoatNormalMapTransform),N.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===j0)N.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)N.dispersion.value=O.dispersion;if(O.iridescence>0){if(N.iridescence.value=O.iridescence,N.iridescenceIOR.value=O.iridescenceIOR,N.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],N.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)N.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,N.iridescenceMapTransform);if(O.iridescenceThicknessMap)N.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,N.iridescenceThicknessMapTransform)}if(O.transmission>0){if(N.transmission.value=O.transmission,N.transmissionSamplerMap.value=I.texture,N.transmissionSamplerSize.value.set(I.width,I.height),O.transmissionMap)N.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,N.transmissionMapTransform);if(N.thickness.value=O.thickness,O.thicknessMap)N.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,N.thicknessMapTransform);N.attenuationDistance.value=O.attenuationDistance,N.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(N.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)N.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,N.anisotropyMapTransform)}if(N.specularIntensity.value=O.specularIntensity,N.specularColor.value.copy(O.specularColor),O.specularColorMap)N.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,N.specularColorMapTransform);if(O.specularIntensityMap)N.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,N.specularIntensityMapTransform)}function k(N,O){if(O.matcap)N.matcap.value=O.matcap}function M(N,O){let I=Q.get(O).light;N.referencePosition.value.setFromMatrixPosition(I.matrixWorld),N.nearDistance.value=I.shadow.camera.near,N.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function AE(J,Q,$,Z){let W={},H={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(I,L){let _=L.program;Z.uniformBlockBinding(I,_)}function U(I,L){let _=W[I.id];if(_===void 0)k(I),_=G(I),W[I.id]=_,I.addEventListener("dispose",N);let S=L.program;Z.updateUBOMapping(I,S);let C=Q.render.frame;if(H[I.id]!==C)q(I),H[I.id]=C}function G(I){let L=E();I.__bindingPointIndex=L;let _=J.createBuffer(),S=I.__size,C=I.usage;return J.bindBuffer(J.UNIFORM_BUFFER,_),J.bufferData(J.UNIFORM_BUFFER,S,C),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,_),_}function E(){for(let I=0;I<X;I++)if(Y.indexOf(I)===-1)return Y.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(I){let L=W[I.id],_=I.uniforms,S=I.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let C=0,T=_.length;C<T;C++){let b=Array.isArray(_[C])?_[C]:[_[C]];for(let z=0,V=b.length;z<V;z++){let P=b[z];if(F(P,C,z,S)===!0){let h=P.__offset,l=Array.isArray(P.value)?P.value:[P.value],d=0;for(let o=0;o<l.length;o++){let c=l[o],a=M(c);if(typeof c==="number"||typeof c==="boolean")P.__data[0]=c,J.bufferSubData(J.UNIFORM_BUFFER,h+d,P.__data);else if(c.isMatrix3)P.__data[0]=c.elements[0],P.__data[1]=c.elements[1],P.__data[2]=c.elements[2],P.__data[3]=0,P.__data[4]=c.elements[3],P.__data[5]=c.elements[4],P.__data[6]=c.elements[5],P.__data[7]=0,P.__data[8]=c.elements[6],P.__data[9]=c.elements[7],P.__data[10]=c.elements[8],P.__data[11]=0;else c.toArray(P.__data,d),d+=a.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,h,P.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(I,L,_,S){let C=I.value,T=L+"_"+_;if(S[T]===void 0){if(typeof C==="number"||typeof C==="boolean")S[T]=C;else S[T]=C.clone();return!0}else{let b=S[T];if(typeof C==="number"||typeof C==="boolean"){if(b!==C)return S[T]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function k(I){let L=I.uniforms,_=0,S=16;for(let T=0,b=L.length;T<b;T++){let z=Array.isArray(L[T])?L[T]:[L[T]];for(let V=0,P=z.length;V<P;V++){let h=z[V],l=Array.isArray(h.value)?h.value:[h.value];for(let d=0,o=l.length;d<o;d++){let c=l[d],a=M(c),m=_%S,HJ=m%a.boundary,KJ=m+HJ;if(_+=HJ,KJ!==0&&S-KJ<a.storage)_+=S-KJ;h.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),h.__offset=_,_+=a.storage}}}let C=_%S;if(C>0)_+=S-C;return I.__size=_,I.__cache={},this}function M(I){let L={boundary:0,storage:0};if(typeof I==="number"||typeof I==="boolean")L.boundary=4,L.storage=4;else if(I.isVector2)L.boundary=8,L.storage=8;else if(I.isVector3||I.isColor)L.boundary=16,L.storage=12;else if(I.isVector4)L.boundary=16,L.storage=16;else if(I.isMatrix3)L.boundary=48,L.storage=48;else if(I.isMatrix4)L.boundary=64,L.storage=64;else if(I.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I);return L}function N(I){let L=I.target;L.removeEventListener("dispose",N);let _=Y.indexOf(L.__bindingPointIndex);Y.splice(_,1),J.deleteBuffer(W[L.id]),delete W[L.id],delete H[L.id]}function O(){for(let I in W)J.deleteBuffer(W[I]);Y=[],W={},H={}}return{bind:K,update:U,dispose:O}}class h${constructor(J={}){let{canvas:Q=AW(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:H=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:K=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:E=!1}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=H;let F=new Uint32Array(4),k=new Int32Array(4),M=null,N=null,O=[],I=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=J8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,_=!1;this._outputColorSpace=K8;let S=0,C=0,T=null,b=-1,z=null,V=new iJ,P=new iJ,h=null,l=new yJ(0),d=0,o=Q.width,c=Q.height,a=1,m=null,HJ=null,KJ=new iJ(0,0,o,c),BJ=new iJ(0,0,o,c),dJ=!1,rJ=new O6,gJ=!1,u=!1,ZJ=new hJ,QJ=new j,VJ=new iJ,AJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},SJ=!1;function G0(){return T===null?a:1}let w=$;function r(D,v){return Q.getContext(D,v)}try{let D={alpha:!0,depth:Z,stencil:W,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:K,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${jZ}`);if(Q.addEventListener("webglcontextlost",UJ,!1),Q.addEventListener("webglcontextrestored",WJ,!1),Q.addEventListener("webglcontextcreationerror",RJ,!1),w===null){if(w=r("webgl2",D),w===null)if(r("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let NJ,DJ,XJ,sJ,zJ,_J,E0,q0,Y0,B,R,f,s,n,x,OJ,$J,LJ,jJ,JJ,EJ,CJ,IJ,qJ;function lJ(){if(NJ=new oU(w),NJ.init(),CJ=new CE(w,NJ),DJ=new lU(w,NJ,J,CJ),XJ=new BE(w,NJ),DJ.reversedDepthBuffer&&E)XJ.buffers.depth.setReversed(!0);sJ=new rU(w),zJ=new GE,_J=new _E(w,NJ,XJ,zJ,DJ,CJ,sJ),E0=new mU(L),q0=new sU(L),Y0=new ZX(w),IJ=new gU(w,Y0),B=new iU(w,Y0,sJ,IJ),R=new eU(w,B,Y0,sJ),jJ=new tU(w,DJ,_J),OJ=new dU(zJ),f=new UE(L,E0,q0,NJ,DJ,IJ,OJ),s=new TE(L,zJ),n=new qE,x=new kE(NJ),LJ=new xU(L,E0,q0,XJ,R,q,X),$J=new VE(L,R,DJ),qJ=new AE(w,sJ,DJ,XJ),JJ=new pU(w,NJ,sJ),EJ=new aU(w,NJ,sJ),sJ.programs=f.programs,L.capabilities=DJ,L.extensions=NJ,L.properties=zJ,L.renderLists=n,L.shadowMap=$J,L.state=XJ,L.info=sJ}lJ();let A=new VH(L,w);this.xr=A,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let D=NJ.get("WEBGL_lose_context");if(D)D.loseContext()},this.forceContextRestore=function(){let D=NJ.get("WEBGL_lose_context");if(D)D.restoreContext()},this.getPixelRatio=function(){return a},this.setPixelRatio=function(D){if(D===void 0)return;a=D,this.setSize(o,c,!1)},this.getSize=function(D){return D.set(o,c)},this.setSize=function(D,v,g=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=D,c=v,Q.width=Math.floor(D*a),Q.height=Math.floor(v*a),g===!0)Q.style.width=D+"px",Q.style.height=v+"px";this.setViewport(0,0,D,v)},this.getDrawingBufferSize=function(D){return D.set(o*a,c*a).floor()},this.setDrawingBufferSize=function(D,v,g){o=D,c=v,a=g,Q.width=Math.floor(D*g),Q.height=Math.floor(v*g),this.setViewport(0,0,D,v)},this.getCurrentViewport=function(D){return D.copy(V)},this.getViewport=function(D){return D.copy(KJ)},this.setViewport=function(D,v,g,p){if(D.isVector4)KJ.set(D.x,D.y,D.z,D.w);else KJ.set(D,v,g,p);XJ.viewport(V.copy(KJ).multiplyScalar(a).round())},this.getScissor=function(D){return D.copy(BJ)},this.setScissor=function(D,v,g,p){if(D.isVector4)BJ.set(D.x,D.y,D.z,D.w);else BJ.set(D,v,g,p);XJ.scissor(P.copy(BJ).multiplyScalar(a).round())},this.getScissorTest=function(){return dJ},this.setScissorTest=function(D){XJ.setScissorTest(dJ=D)},this.setOpaqueSort=function(D){m=D},this.setTransparentSort=function(D){HJ=D},this.getClearColor=function(D){return D.copy(LJ.getClearColor())},this.setClearColor=function(){LJ.setClearColor(...arguments)},this.getClearAlpha=function(){return LJ.getClearAlpha()},this.setClearAlpha=function(){LJ.setClearAlpha(...arguments)},this.clear=function(D=!0,v=!0,g=!0){let p=0;if(D){let y=!1;if(T!==null){let e=T.texture.format;y=e===IQ||e===CQ||e===_Q}if(y){let e=T.texture.type,GJ=e===h8||e===A9||e===H6||e===S9||e===zQ||e===BQ,MJ=LJ.getClearColor(),FJ=LJ.getClearAlpha(),TJ=MJ.r,vJ=MJ.g,PJ=MJ.b;if(GJ)F[0]=TJ,F[1]=vJ,F[2]=PJ,F[3]=FJ,w.clearBufferuiv(w.COLOR,0,F);else k[0]=TJ,k[1]=vJ,k[2]=PJ,k[3]=FJ,w.clearBufferiv(w.COLOR,0,k)}else p|=w.COLOR_BUFFER_BIT}if(v)p|=w.DEPTH_BUFFER_BIT;if(g)p|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);w.clear(p)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",UJ,!1),Q.removeEventListener("webglcontextrestored",WJ,!1),Q.removeEventListener("webglcontextcreationerror",RJ,!1),LJ.dispose(),n.dispose(),x.dispose(),zJ.dispose(),E0.dispose(),q0.dispose(),R.dispose(),IJ.dispose(),qJ.dispose(),f.dispose(),A.dispose(),A.removeEventListener("sessionstart",Z8),A.removeEventListener("sessionend",W8),n8.stop()};function UJ(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function WJ(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let D=sJ.autoReset,v=$J.enabled,g=$J.autoUpdate,p=$J.needsUpdate,y=$J.type;lJ(),sJ.autoReset=D,$J.enabled=v,$J.autoUpdate=g,$J.needsUpdate=p,$J.type=y}function RJ(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function t(D){let v=D.target;v.removeEventListener("dispose",t),i(v)}function i(D){kJ(D),zJ.remove(D)}function kJ(D){let v=zJ.get(D).programs;if(v!==void 0){if(v.forEach(function(g){f.releaseProgram(g)}),D.isShaderMaterial)f.releaseShaderCache(D)}}this.renderBufferDirect=function(D,v,g,p,y,e){if(v===null)v=AJ;let GJ=y.isMesh&&y.matrixWorld.determinant()<0,MJ=tH(D,v,g,p,y);XJ.setMaterial(p,GJ);let FJ=g.index,TJ=1;if(p.wireframe===!0){if(FJ=B.getWireframeAttribute(g),FJ===void 0)return;TJ=2}let vJ=g.drawRange,PJ=g.attributes.position,cJ=vJ.start*TJ,J0=(vJ.start+vJ.count)*TJ;if(e!==null)cJ=Math.max(cJ,e.start*TJ),J0=Math.min(J0,(e.start+e.count)*TJ);if(FJ!==null)cJ=Math.max(cJ,0),J0=Math.min(J0,FJ.count);else if(PJ!==void 0&&PJ!==null)cJ=Math.max(cJ,0),J0=Math.min(J0,PJ.count);let U0=J0-cJ;if(U0<0||U0===1/0)return;IJ.setup(y,p,MJ,g,FJ);let W0,$0=JJ;if(FJ!==null)W0=Y0.get(FJ),$0=EJ,$0.setIndex(W0);if(y.isMesh)if(p.wireframe===!0)XJ.setLineWidth(p.wireframeLinewidth*G0()),$0.setMode(w.LINES);else $0.setMode(w.TRIANGLES);else if(y.isLine){let wJ=p.linewidth;if(wJ===void 0)wJ=1;if(XJ.setLineWidth(wJ*G0()),y.isLineSegments)$0.setMode(w.LINES);else if(y.isLineLoop)$0.setMode(w.LINE_LOOP);else $0.setMode(w.LINE_STRIP)}else if(y.isPoints)$0.setMode(w.POINTS);else if(y.isSprite)$0.setMode(w.TRIANGLES);if(y.isBatchedMesh)if(y._multiDrawInstances!==null)C9("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$0.renderMultiDrawInstances(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount,y._multiDrawInstances);else if(!NJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:wJ,_multiDrawCounts:X0,_multiDrawCount:oJ}=y,w0=FJ?Y0.get(FJ).bytesPerElement:1,K9=zJ.get(p).currentProgram.getUniforms();for(let T0=0;T0<oJ;T0++)K9.setValue(w,"_gl_DrawID",T0),$0.render(wJ[T0]/w0,X0[T0])}else $0.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else if(y.isInstancedMesh)$0.renderInstances(cJ,U0,y.count);else if(g.isInstancedBufferGeometry){let wJ=g._maxInstanceCount!==void 0?g._maxInstanceCount:1/0,X0=Math.min(g.instanceCount,wJ);$0.renderInstances(cJ,U0,X0)}else $0.render(cJ,U0)};function fJ(D,v,g){if(D.transparent===!0&&D.side===u0&&D.forceSinglePass===!1)D.side=j0,D.needsUpdate=!0,_6(D,v,g),D.side=y8,D.needsUpdate=!0,_6(D,v,g),D.side=u0;else _6(D,v,g)}this.compile=function(D,v,g=null){if(g===null)g=D;if(N=x.get(g),N.init(v),I.push(N),g.traverseVisible(function(y){if(y.isLight&&y.layers.test(v.layers)){if(N.pushLight(y),y.castShadow)N.pushShadow(y)}}),D!==g)D.traverseVisible(function(y){if(y.isLight&&y.layers.test(v.layers)){if(N.pushLight(y),y.castShadow)N.pushShadow(y)}});N.setupLights();let p=new Set;return D.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;let e=y.material;if(e)if(Array.isArray(e))for(let GJ=0;GJ<e.length;GJ++){let MJ=e[GJ];fJ(MJ,g,y),p.add(MJ)}else fJ(e,g,y),p.add(e)}),N=I.pop(),p},this.compileAsync=function(D,v,g=null){let p=this.compile(D,v,g);return new Promise((y)=>{function e(){if(p.forEach(function(GJ){if(zJ.get(GJ).currentProgram.isReady())p.delete(GJ)}),p.size===0){y(D);return}setTimeout(e,10)}if(NJ.get("KHR_parallel_shader_compile")!==null)e();else setTimeout(e,10)})};let Q0=null;function eJ(D){if(Q0)Q0(D)}function Z8(){n8.stop()}function W8(){n8.start()}let n8=new GH;if(n8.setAnimationLoop(eJ),typeof self<"u")n8.setContext(self);this.setAnimationLoop=function(D){Q0=D,A.setAnimationLoop(D),D===null?n8.stop():n8.start()},A.addEventListener("sessionstart",Z8),A.addEventListener("sessionend",W8),this.render=function(D,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(D.matrixWorldAutoUpdate===!0)D.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(A.enabled===!0&&A.isPresenting===!0){if(A.cameraAutoUpdate===!0)A.updateCamera(v);v=A.getCamera()}if(D.isScene===!0)D.onBeforeRender(L,D,v,T);if(N=x.get(D,I.length),N.init(v),I.push(N),ZJ.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),rJ.setFromProjectionMatrix(ZJ,Y$,v.reversedDepth),u=this.localClippingEnabled,gJ=OJ.init(this.clippingPlanes,u),M=n.get(D,O.length),M.init(),O.push(M),A.enabled===!0&&A.isPresenting===!0){let e=L.xr.getDepthSensingMesh();if(e!==null)p7(e,v,-1/0,L.sortObjects)}if(p7(D,v,0,L.sortObjects),M.finish(),L.sortObjects===!0)M.sort(m,HJ);if(SJ=A.enabled===!1||A.isPresenting===!1||A.hasDepthSensing()===!1,SJ)LJ.addToRenderList(M,D);if(this.info.render.frame++,gJ===!0)OJ.beginShadows();let g=N.state.shadowsArray;if($J.render(g,D,v),gJ===!0)OJ.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:p,transmissive:y}=M;if(N.setupLights(),v.isArrayCamera){let e=v.cameras;if(y.length>0)for(let GJ=0,MJ=e.length;GJ<MJ;GJ++){let FJ=e[GJ];n$(p,y,D,FJ)}if(SJ)LJ.render(D);for(let GJ=0,MJ=e.length;GJ<MJ;GJ++){let FJ=e[GJ];c$(M,D,FJ,FJ.viewport)}}else{if(y.length>0)n$(p,y,D,v);if(SJ)LJ.render(D);c$(M,D,v)}if(T!==null&&C===0)_J.updateMultisampleRenderTarget(T),_J.updateRenderTargetMipmap(T);if(D.isScene===!0)D.onAfterRender(L,D,v);if(IJ.resetDefaultState(),b=-1,z=null,I.pop(),I.length>0){if(N=I[I.length-1],gJ===!0)OJ.setGlobalState(L.clippingPlanes,N.state.camera)}else N=null;if(O.pop(),O.length>0)M=O[O.length-1];else M=null};function p7(D,v,g,p){if(D.visible===!1)return;if(D.layers.test(v.layers)){if(D.isGroup)g=D.renderOrder;else if(D.isLOD){if(D.autoUpdate===!0)D.update(v)}else if(D.isLight){if(N.pushLight(D),D.castShadow)N.pushShadow(D)}else if(D.isSprite){if(!D.frustumCulled||rJ.intersectsSprite(D)){if(p)VJ.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ZJ);let GJ=R.update(D),MJ=D.material;if(MJ.visible)M.push(D,GJ,MJ,g,VJ.z,null)}}else if(D.isMesh||D.isLine||D.isPoints){if(!D.frustumCulled||rJ.intersectsObject(D)){let GJ=R.update(D),MJ=D.material;if(p){if(D.boundingSphere!==void 0){if(D.boundingSphere===null)D.computeBoundingSphere();VJ.copy(D.boundingSphere.center)}else{if(GJ.boundingSphere===null)GJ.computeBoundingSphere();VJ.copy(GJ.boundingSphere.center)}VJ.applyMatrix4(D.matrixWorld).applyMatrix4(ZJ)}if(Array.isArray(MJ)){let FJ=GJ.groups;for(let TJ=0,vJ=FJ.length;TJ<vJ;TJ++){let PJ=FJ[TJ],cJ=MJ[PJ.materialIndex];if(cJ&&cJ.visible)M.push(D,GJ,cJ,g,VJ.z,PJ)}}else if(MJ.visible)M.push(D,GJ,MJ,g,VJ.z,null)}}}let e=D.children;for(let GJ=0,MJ=e.length;GJ<MJ;GJ++)p7(e[GJ],v,g,p)}function c$(D,v,g,p){let{opaque:y,transmissive:e,transparent:GJ}=D;if(N.setupLightsView(g),gJ===!0)OJ.setGlobalState(L.clippingPlanes,g);if(p)XJ.viewport(V.copy(p));if(y.length>0)B6(y,v,g);if(e.length>0)B6(e,v,g);if(GJ.length>0)B6(GJ,v,g);XJ.buffers.depth.setTest(!0),XJ.buffers.depth.setMask(!0),XJ.buffers.color.setMask(!0),XJ.setPolygonOffset(!1)}function n$(D,v,g,p){if((g.isScene===!0?g.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[p.id]===void 0)N.state.transmissionRenderTarget[p.id]=new C8(1,1,{generateMipmaps:!0,type:NJ.has("EXT_color_buffer_half_float")||NJ.has("EXT_color_buffer_float")?Y6:h8,minFilter:B8,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nJ.workingColorSpace});let e=N.state.transmissionRenderTarget[p.id],GJ=p.viewport||V;e.setSize(GJ.z*L.transmissionResolutionScale,GJ.w*L.transmissionResolutionScale);let MJ=L.getRenderTarget(),FJ=L.getActiveCubeFace(),TJ=L.getActiveMipmapLevel();if(L.setRenderTarget(e),L.getClearColor(l),d=L.getClearAlpha(),d<1)L.setClearColor(16777215,0.5);if(L.clear(),SJ)LJ.render(g);let vJ=L.toneMapping;L.toneMapping=J8;let PJ=p.viewport;if(p.viewport!==void 0)p.viewport=void 0;if(N.setupLightsView(p),gJ===!0)OJ.setGlobalState(L.clippingPlanes,p);if(B6(D,g,p),_J.updateMultisampleRenderTarget(e),_J.updateRenderTargetMipmap(e),NJ.has("WEBGL_multisampled_render_to_texture")===!1){let cJ=!1;for(let J0=0,U0=v.length;J0<U0;J0++){let W0=v[J0],$0=W0.object,wJ=W0.geometry,X0=W0.material,oJ=W0.group;if(X0.side===u0&&$0.layers.test(p.layers)){let w0=X0.side;X0.side=j0,X0.needsUpdate=!0,s$($0,g,p,wJ,X0,oJ),X0.side=w0,X0.needsUpdate=!0,cJ=!0}}if(cJ===!0)_J.updateMultisampleRenderTarget(e),_J.updateRenderTargetMipmap(e)}if(L.setRenderTarget(MJ,FJ,TJ),L.setClearColor(l,d),PJ!==void 0)p.viewport=PJ;L.toneMapping=vJ}function B6(D,v,g){let p=v.isScene===!0?v.overrideMaterial:null;for(let y=0,e=D.length;y<e;y++){let GJ=D[y],MJ=GJ.object,FJ=GJ.geometry,TJ=GJ.group,vJ=GJ.material;if(vJ.allowOverride===!0&&p!==null)vJ=p;if(MJ.layers.test(g.layers))s$(MJ,v,g,FJ,vJ,TJ)}}function s$(D,v,g,p,y,e){if(D.onBeforeRender(L,v,g,p,y,e),D.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),y.onBeforeRender(L,v,g,p,D,e),y.transparent===!0&&y.side===u0&&y.forceSinglePass===!1)y.side=j0,y.needsUpdate=!0,L.renderBufferDirect(g,v,p,y,D,e),y.side=y8,y.needsUpdate=!0,L.renderBufferDirect(g,v,p,y,D,e),y.side=u0;else L.renderBufferDirect(g,v,p,y,D,e);D.onAfterRender(L,v,g,p,y,e)}function _6(D,v,g){if(v.isScene!==!0)v=AJ;let p=zJ.get(D),y=N.state.lights,e=N.state.shadowsArray,GJ=y.state.version,MJ=f.getParameters(D,y.state,e,v,g),FJ=f.getProgramCacheKey(MJ),TJ=p.programs;if(p.environment=D.isMeshStandardMaterial?v.environment:null,p.fog=v.fog,p.envMap=(D.isMeshStandardMaterial?q0:E0).get(D.envMap||p.environment),p.envMapRotation=p.environment!==null&&D.envMap===null?v.environmentRotation:D.envMapRotation,TJ===void 0)D.addEventListener("dispose",t),TJ=new Map,p.programs=TJ;let vJ=TJ.get(FJ);if(vJ!==void 0){if(p.currentProgram===vJ&&p.lightsStateVersion===GJ)return i$(D,MJ),vJ}else MJ.uniforms=f.getUniforms(D),D.onBeforeCompile(MJ,L),vJ=f.acquireProgram(MJ,FJ),TJ.set(FJ,vJ),p.uniforms=MJ.uniforms;let PJ=p.uniforms;if(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)PJ.clippingPlanes=OJ.uniform;if(i$(D,MJ),p.needsLights=JY(D),p.lightsStateVersion=GJ,p.needsLights)PJ.ambientLightColor.value=y.state.ambient,PJ.lightProbe.value=y.state.probe,PJ.directionalLights.value=y.state.directional,PJ.directionalLightShadows.value=y.state.directionalShadow,PJ.spotLights.value=y.state.spot,PJ.spotLightShadows.value=y.state.spotShadow,PJ.rectAreaLights.value=y.state.rectArea,PJ.ltc_1.value=y.state.rectAreaLTC1,PJ.ltc_2.value=y.state.rectAreaLTC2,PJ.pointLights.value=y.state.point,PJ.pointLightShadows.value=y.state.pointShadow,PJ.hemisphereLights.value=y.state.hemi,PJ.directionalShadowMap.value=y.state.directionalShadowMap,PJ.directionalShadowMatrix.value=y.state.directionalShadowMatrix,PJ.spotShadowMap.value=y.state.spotShadowMap,PJ.spotLightMatrix.value=y.state.spotLightMatrix,PJ.spotLightMap.value=y.state.spotLightMap,PJ.pointShadowMap.value=y.state.pointShadowMap,PJ.pointShadowMatrix.value=y.state.pointShadowMatrix;return p.currentProgram=vJ,p.uniformsList=null,vJ}function o$(D){if(D.uniformsList===null){let v=D.currentProgram.getUniforms();D.uniformsList=V6.seqWithValue(v.seq,D.uniforms)}return D.uniformsList}function i$(D,v){let g=zJ.get(D);g.outputColorSpace=v.outputColorSpace,g.batching=v.batching,g.batchingColor=v.batchingColor,g.instancing=v.instancing,g.instancingColor=v.instancingColor,g.instancingMorph=v.instancingMorph,g.skinning=v.skinning,g.morphTargets=v.morphTargets,g.morphNormals=v.morphNormals,g.morphColors=v.morphColors,g.morphTargetsCount=v.morphTargetsCount,g.numClippingPlanes=v.numClippingPlanes,g.numIntersection=v.numClipIntersection,g.vertexAlphas=v.vertexAlphas,g.vertexTangents=v.vertexTangents,g.toneMapping=v.toneMapping}function tH(D,v,g,p,y){if(v.isScene!==!0)v=AJ;_J.resetTextureUnits();let e=v.fog,GJ=p.isMeshStandardMaterial?v.environment:null,MJ=T===null?L.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:I0,FJ=(p.isMeshStandardMaterial?q0:E0).get(p.envMap||GJ),TJ=p.vertexColors===!0&&!!g.attributes.color&&g.attributes.color.itemSize===4,vJ=!!g.attributes.tangent&&(!!p.normalMap||p.anisotropy>0),PJ=!!g.morphAttributes.position,cJ=!!g.morphAttributes.normal,J0=!!g.morphAttributes.color,U0=J8;if(p.toneMapped){if(T===null||T.isXRRenderTarget===!0)U0=L.toneMapping}let W0=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,$0=W0!==void 0?W0.length:0,wJ=zJ.get(p),X0=N.state.lights;if(gJ===!0){if(u===!0||D!==z){let _0=D===z&&p.id===b;OJ.setState(p,D,_0)}}let oJ=!1;if(p.version===wJ.__version){if(wJ.needsLights&&wJ.lightsStateVersion!==X0.state.version)oJ=!0;else if(wJ.outputColorSpace!==MJ)oJ=!0;else if(y.isBatchedMesh&&wJ.batching===!1)oJ=!0;else if(!y.isBatchedMesh&&wJ.batching===!0)oJ=!0;else if(y.isBatchedMesh&&wJ.batchingColor===!0&&y.colorTexture===null)oJ=!0;else if(y.isBatchedMesh&&wJ.batchingColor===!1&&y.colorTexture!==null)oJ=!0;else if(y.isInstancedMesh&&wJ.instancing===!1)oJ=!0;else if(!y.isInstancedMesh&&wJ.instancing===!0)oJ=!0;else if(y.isSkinnedMesh&&wJ.skinning===!1)oJ=!0;else if(!y.isSkinnedMesh&&wJ.skinning===!0)oJ=!0;else if(y.isInstancedMesh&&wJ.instancingColor===!0&&y.instanceColor===null)oJ=!0;else if(y.isInstancedMesh&&wJ.instancingColor===!1&&y.instanceColor!==null)oJ=!0;else if(y.isInstancedMesh&&wJ.instancingMorph===!0&&y.morphTexture===null)oJ=!0;else if(y.isInstancedMesh&&wJ.instancingMorph===!1&&y.morphTexture!==null)oJ=!0;else if(wJ.envMap!==FJ)oJ=!0;else if(p.fog===!0&&wJ.fog!==e)oJ=!0;else if(wJ.numClippingPlanes!==void 0&&(wJ.numClippingPlanes!==OJ.numPlanes||wJ.numIntersection!==OJ.numIntersection))oJ=!0;else if(wJ.vertexAlphas!==TJ)oJ=!0;else if(wJ.vertexTangents!==vJ)oJ=!0;else if(wJ.morphTargets!==PJ)oJ=!0;else if(wJ.morphNormals!==cJ)oJ=!0;else if(wJ.morphColors!==J0)oJ=!0;else if(wJ.toneMapping!==U0)oJ=!0;else if(wJ.morphTargetsCount!==$0)oJ=!0}else oJ=!0,wJ.__version=p.version;let w0=wJ.currentProgram;if(oJ===!0)w0=_6(p,v,y);let K9=!1,T0=!1,c9=!1,K0=w0.getUniforms(),x0=wJ.uniforms;if(XJ.useProgram(w0.program))K9=!0,T0=!0,c9=!0;if(p.id!==b)b=p.id,T0=!0;if(K9||z!==D){if(XJ.buffers.depth.getReversed()&&D.reversedDepth!==!0)D._reversedDepth=!0,D.updateProjectionMatrix();K0.setValue(w,"projectionMatrix",D.projectionMatrix),K0.setValue(w,"viewMatrix",D.matrixWorldInverse);let P0=K0.map.cameraPosition;if(P0!==void 0)P0.setValue(w,QJ.setFromMatrixPosition(D.matrixWorld));if(DJ.logarithmicDepthBuffer)K0.setValue(w,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2));if(p.isMeshPhongMaterial||p.isMeshToonMaterial||p.isMeshLambertMaterial||p.isMeshBasicMaterial||p.isMeshStandardMaterial||p.isShaderMaterial)K0.setValue(w,"isOrthographic",D.isOrthographicCamera===!0);if(z!==D)z=D,T0=!0,c9=!0}if(y.isSkinnedMesh){K0.setOptional(w,y,"bindMatrix"),K0.setOptional(w,y,"bindMatrixInverse");let _0=y.skeleton;if(_0){if(_0.boneTexture===null)_0.computeBoneTexture();K0.setValue(w,"boneTexture",_0.boneTexture,_J)}}if(y.isBatchedMesh){if(K0.setOptional(w,y,"batchingTexture"),K0.setValue(w,"batchingTexture",y._matricesTexture,_J),K0.setOptional(w,y,"batchingIdTexture"),K0.setValue(w,"batchingIdTexture",y._indirectTexture,_J),K0.setOptional(w,y,"batchingColorTexture"),y._colorsTexture!==null)K0.setValue(w,"batchingColorTexture",y._colorsTexture,_J)}let g0=g.morphAttributes;if(g0.position!==void 0||g0.normal!==void 0||g0.color!==void 0)jJ.update(y,g,w0);if(T0||wJ.receiveShadow!==y.receiveShadow)wJ.receiveShadow=y.receiveShadow,K0.setValue(w,"receiveShadow",y.receiveShadow);if(p.isMeshGouraudMaterial&&p.envMap!==null)x0.envMap.value=FJ,x0.flipEnvMap.value=FJ.isCubeTexture&&FJ.isRenderTargetTexture===!1?-1:1;if(p.isMeshStandardMaterial&&p.envMap===null&&v.environment!==null)x0.envMapIntensity.value=v.environmentIntensity;if(T0){if(K0.setValue(w,"toneMappingExposure",L.toneMappingExposure),wJ.needsLights)eH(x0,c9);if(e&&p.fog===!0)s.refreshFogUniforms(x0,e);s.refreshMaterialUniforms(x0,p,a,c,N.state.transmissionRenderTarget[D.id]),V6.upload(w,o$(wJ),x0,_J)}if(p.isShaderMaterial&&p.uniformsNeedUpdate===!0)V6.upload(w,o$(wJ),x0,_J),p.uniformsNeedUpdate=!1;if(p.isSpriteMaterial)K0.setValue(w,"center",y.center);if(K0.setValue(w,"modelViewMatrix",y.modelViewMatrix),K0.setValue(w,"normalMatrix",y.normalMatrix),K0.setValue(w,"modelMatrix",y.matrixWorld),p.isShaderMaterial||p.isRawShaderMaterial){let _0=p.uniformsGroups;for(let P0=0,l7=_0.length;P0<l7;P0++){let s8=_0[P0];qJ.update(s8,w0),qJ.bind(s8,w0)}}return w0}function eH(D,v){D.ambientLightColor.needsUpdate=v,D.lightProbe.needsUpdate=v,D.directionalLights.needsUpdate=v,D.directionalLightShadows.needsUpdate=v,D.pointLights.needsUpdate=v,D.pointLightShadows.needsUpdate=v,D.spotLights.needsUpdate=v,D.spotLightShadows.needsUpdate=v,D.rectAreaLights.needsUpdate=v,D.hemisphereLights.needsUpdate=v}function JY(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(D,v,g){let p=zJ.get(D);if(p.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,p.__autoAllocateDepthBuffer===!1)p.__useRenderToTexture=!1;zJ.get(D.texture).__webglTexture=v,zJ.get(D.depthTexture).__webglTexture=p.__autoAllocateDepthBuffer?void 0:g,p.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,v){let g=zJ.get(D);g.__webglFramebuffer=v,g.__useDefaultFramebuffer=v===void 0};let QY=w.createFramebuffer();this.setRenderTarget=function(D,v=0,g=0){T=D,S=v,C=g;let p=!0,y=null,e=!1,GJ=!1;if(D){let FJ=zJ.get(D);if(FJ.__useDefaultFramebuffer!==void 0)XJ.bindFramebuffer(w.FRAMEBUFFER,null),p=!1;else if(FJ.__webglFramebuffer===void 0)_J.setupRenderTarget(D);else if(FJ.__hasExternalTextures)_J.rebindTextures(D,zJ.get(D.texture).__webglTexture,zJ.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let PJ=D.depthTexture;if(FJ.__boundDepthTexture!==PJ){if(PJ!==null&&zJ.has(PJ)&&(D.width!==PJ.image.width||D.height!==PJ.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_J.setupDepthRenderbuffer(D)}}let TJ=D.texture;if(TJ.isData3DTexture||TJ.isDataArrayTexture||TJ.isCompressedArrayTexture)GJ=!0;let vJ=zJ.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget){if(Array.isArray(vJ[v]))y=vJ[v][g];else y=vJ[v];e=!0}else if(D.samples>0&&_J.useMultisampledRTT(D)===!1)y=zJ.get(D).__webglMultisampledFramebuffer;else if(Array.isArray(vJ))y=vJ[g];else y=vJ;V.copy(D.viewport),P.copy(D.scissor),h=D.scissorTest}else V.copy(KJ).multiplyScalar(a).floor(),P.copy(BJ).multiplyScalar(a).floor(),h=dJ;if(g!==0)y=QY;if(XJ.bindFramebuffer(w.FRAMEBUFFER,y)&&p)XJ.drawBuffers(D,y);if(XJ.viewport(V),XJ.scissor(P),XJ.setScissorTest(h),e){let FJ=zJ.get(D.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+v,FJ.__webglTexture,g)}else if(GJ){let FJ=v;for(let TJ=0;TJ<D.textures.length;TJ++){let vJ=zJ.get(D.textures[TJ]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+TJ,vJ.__webglTexture,g,FJ)}}else if(D!==null&&g!==0){let FJ=zJ.get(D.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,FJ.__webglTexture,g)}b=-1},this.readRenderTargetPixels=function(D,v,g,p,y,e,GJ,MJ=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let FJ=zJ.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&GJ!==void 0)FJ=FJ[GJ];if(FJ){XJ.bindFramebuffer(w.FRAMEBUFFER,FJ);try{let TJ=D.textures[MJ],vJ=TJ.format,PJ=TJ.type;if(!DJ.textureFormatReadable(vJ)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!DJ.textureTypeReadable(PJ)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=D.width-p&&(g>=0&&g<=D.height-y)){if(D.textures.length>1)w.readBuffer(w.COLOR_ATTACHMENT0+MJ);w.readPixels(v,g,p,y,CJ.convert(vJ),CJ.convert(PJ),e)}}finally{let TJ=T!==null?zJ.get(T).__webglFramebuffer:null;XJ.bindFramebuffer(w.FRAMEBUFFER,TJ)}}},this.readRenderTargetPixelsAsync=async function(D,v,g,p,y,e,GJ,MJ=0){if(!(D&&D.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let FJ=zJ.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&GJ!==void 0)FJ=FJ[GJ];if(FJ)if(v>=0&&v<=D.width-p&&(g>=0&&g<=D.height-y)){XJ.bindFramebuffer(w.FRAMEBUFFER,FJ);let TJ=D.textures[MJ],vJ=TJ.format,PJ=TJ.type;if(!DJ.textureFormatReadable(vJ))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!DJ.textureTypeReadable(PJ))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let cJ=w.createBuffer();if(w.bindBuffer(w.PIXEL_PACK_BUFFER,cJ),w.bufferData(w.PIXEL_PACK_BUFFER,e.byteLength,w.STREAM_READ),D.textures.length>1)w.readBuffer(w.COLOR_ATTACHMENT0+MJ);w.readPixels(v,g,p,y,CJ.convert(vJ),CJ.convert(PJ),0);let J0=T!==null?zJ.get(T).__webglFramebuffer:null;XJ.bindFramebuffer(w.FRAMEBUFFER,J0);let U0=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await SW(w,U0,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,cJ),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,e),w.deleteBuffer(cJ),w.deleteSync(U0),e}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,v=null,g=0){let p=Math.pow(2,-g),y=Math.floor(D.image.width*p),e=Math.floor(D.image.height*p),GJ=v!==null?v.x:0,MJ=v!==null?v.y:0;_J.setTexture2D(D,0),w.copyTexSubImage2D(w.TEXTURE_2D,g,0,0,GJ,MJ,y,e),XJ.unbindTexture()};let $Y=w.createFramebuffer(),ZY=w.createFramebuffer();if(this.copyTextureToTexture=function(D,v,g=null,p=null,y=0,e=null){if(e===null)if(y!==0)C9("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),e=y,y=0;else e=0;let GJ,MJ,FJ,TJ,vJ,PJ,cJ,J0,U0,W0=D.isCompressedTexture?D.mipmaps[e]:D.image;if(g!==null)GJ=g.max.x-g.min.x,MJ=g.max.y-g.min.y,FJ=g.isBox3?g.max.z-g.min.z:1,TJ=g.min.x,vJ=g.min.y,PJ=g.isBox3?g.min.z:0;else{let g0=Math.pow(2,-y);if(GJ=Math.floor(W0.width*g0),MJ=Math.floor(W0.height*g0),D.isDataArrayTexture)FJ=W0.depth;else if(D.isData3DTexture)FJ=Math.floor(W0.depth*g0);else FJ=1;TJ=0,vJ=0,PJ=0}if(p!==null)cJ=p.x,J0=p.y,U0=p.z;else cJ=0,J0=0,U0=0;let $0=CJ.convert(v.format),wJ=CJ.convert(v.type),X0;if(v.isData3DTexture)_J.setTexture3D(v,0),X0=w.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)_J.setTexture2DArray(v,0),X0=w.TEXTURE_2D_ARRAY;else _J.setTexture2D(v,0),X0=w.TEXTURE_2D;w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,v.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,v.unpackAlignment);let oJ=w.getParameter(w.UNPACK_ROW_LENGTH),w0=w.getParameter(w.UNPACK_IMAGE_HEIGHT),K9=w.getParameter(w.UNPACK_SKIP_PIXELS),T0=w.getParameter(w.UNPACK_SKIP_ROWS),c9=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,W0.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,W0.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,TJ),w.pixelStorei(w.UNPACK_SKIP_ROWS,vJ),w.pixelStorei(w.UNPACK_SKIP_IMAGES,PJ);let K0=D.isDataArrayTexture||D.isData3DTexture,x0=v.isDataArrayTexture||v.isData3DTexture;if(D.isDepthTexture){let g0=zJ.get(D),_0=zJ.get(v),P0=zJ.get(g0.__renderTarget),l7=zJ.get(_0.__renderTarget);XJ.bindFramebuffer(w.READ_FRAMEBUFFER,P0.__webglFramebuffer),XJ.bindFramebuffer(w.DRAW_FRAMEBUFFER,l7.__webglFramebuffer);for(let s8=0;s8<FJ;s8++){if(K0)w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,zJ.get(D).__webglTexture,y,PJ+s8),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,zJ.get(v).__webglTexture,e,U0+s8);w.blitFramebuffer(TJ,vJ,GJ,MJ,cJ,J0,GJ,MJ,w.DEPTH_BUFFER_BIT,w.NEAREST)}XJ.bindFramebuffer(w.READ_FRAMEBUFFER,null),XJ.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(y!==0||D.isRenderTargetTexture||zJ.has(D)){let g0=zJ.get(D),_0=zJ.get(v);XJ.bindFramebuffer(w.READ_FRAMEBUFFER,$Y),XJ.bindFramebuffer(w.DRAW_FRAMEBUFFER,ZY);for(let P0=0;P0<FJ;P0++){if(K0)w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,g0.__webglTexture,y,PJ+P0);else w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,g0.__webglTexture,y);if(x0)w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_0.__webglTexture,e,U0+P0);else w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,_0.__webglTexture,e);if(y!==0)w.blitFramebuffer(TJ,vJ,GJ,MJ,cJ,J0,GJ,MJ,w.COLOR_BUFFER_BIT,w.NEAREST);else if(x0)w.copyTexSubImage3D(X0,e,cJ,J0,U0+P0,TJ,vJ,GJ,MJ);else w.copyTexSubImage2D(X0,e,cJ,J0,TJ,vJ,GJ,MJ)}XJ.bindFramebuffer(w.READ_FRAMEBUFFER,null),XJ.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(x0)if(D.isDataTexture||D.isData3DTexture)w.texSubImage3D(X0,e,cJ,J0,U0,GJ,MJ,FJ,$0,wJ,W0.data);else if(v.isCompressedArrayTexture)w.compressedTexSubImage3D(X0,e,cJ,J0,U0,GJ,MJ,FJ,$0,W0.data);else w.texSubImage3D(X0,e,cJ,J0,U0,GJ,MJ,FJ,$0,wJ,W0);else if(D.isDataTexture)w.texSubImage2D(w.TEXTURE_2D,e,cJ,J0,GJ,MJ,$0,wJ,W0.data);else if(D.isCompressedTexture)w.compressedTexSubImage2D(w.TEXTURE_2D,e,cJ,J0,W0.width,W0.height,$0,W0.data);else w.texSubImage2D(w.TEXTURE_2D,e,cJ,J0,GJ,MJ,$0,wJ,W0);if(w.pixelStorei(w.UNPACK_ROW_LENGTH,oJ),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,w0),w.pixelStorei(w.UNPACK_SKIP_PIXELS,K9),w.pixelStorei(w.UNPACK_SKIP_ROWS,T0),w.pixelStorei(w.UNPACK_SKIP_IMAGES,c9),e===0&&v.generateMipmaps)w.generateMipmap(X0);XJ.unbindTexture()},this.initRenderTarget=function(D){if(zJ.get(D).__webglFramebuffer===void 0)_J.setupRenderTarget(D)},this.initTexture=function(D){if(D.isCubeTexture)_J.setTextureCube(D,0);else if(D.isData3DTexture)_J.setTexture3D(D,0);else if(D.isDataArrayTexture||D.isCompressedArrayTexture)_J.setTexture2DArray(D,0);else _J.setTexture2D(D,0);XJ.unbindTexture()},this.resetState=function(){S=0,C=0,T=null,XJ.reset(),IJ.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Y$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=nJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=nJ._getUnpackColorSpace()}}function b$(J,Q){if(Q===$$)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===j9||Q===K6){let $=J.getIndex();if($===null){let Y=[],X=J.getAttribute("position");if(X!==void 0){for(let K=0;K<X.count;K++)Y.push(K);J.setIndex(Y),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,W=[];if(Q===j9)for(let Y=1;Y<=Z;Y++)W.push($.getX(0)),W.push($.getX(Y)),W.push($.getX(Y+1));else for(let Y=0;Y<Z;Y++)if(Y%2===0)W.push($.getX(Y)),W.push($.getX(Y+1)),W.push($.getX(Y+2));else W.push($.getX(Y+2)),W.push($.getX(Y+1)),W.push($.getX(Y));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let H=J.clone();return H.setIndex(W),H.clearGroups(),H}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}class m$ extends P8{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new TH(Q)}),this.register(function(Q){return new AH(Q)}),this.register(function(Q){return new gH(Q)}),this.register(function(Q){return new pH(Q)}),this.register(function(Q){return new lH(Q)}),this.register(function(Q){return new jH(Q)}),this.register(function(Q){return new vH(Q)}),this.register(function(Q){return new yH(Q)}),this.register(function(Q){return new fH(Q)}),this.register(function(Q){return new wH(Q)}),this.register(function(Q){return new hH(Q)}),this.register(function(Q){return new SH(Q)}),this.register(function(Q){return new xH(Q)}),this.register(function(Q){return new bH(Q)}),this.register(function(Q){return new IH(Q)}),this.register(function(Q){return new dH(Q)}),this.register(function(Q){return new mH(Q)})}load(J,Q,$,Z){let W=this,H;if(this.resourcePath!=="")H=this.resourcePath;else if(this.path!==""){let K=u8.extractUrlBase(J);H=u8.resolveURL(K,this.path)}else H=u8.extractUrlBase(J);this.manager.itemStart(J);let Y=function(K){if(Z)Z(K);else console.error(K);W.manager.itemError(J),W.manager.itemEnd(J)},X=new k6(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(K){try{W.parse(K,H,function(U){Q(U),W.manager.itemEnd(J)},Y)}catch(U){Y(U)}},$,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let W,H={},Y={},X=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===uH){try{H[uJ.KHR_BINARY_GLTF]=new cH(J)}catch(G){if(Z)Z(G);return}W=JSON.parse(H[uJ.KHR_BINARY_GLTF].content)}else W=JSON.parse(X.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let K=new aH(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});K.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](K);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[G.name]=G,H[G.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let G=W.extensionsUsed[U],E=W.extensionsRequired||[];switch(G){case uJ.KHR_MATERIALS_UNLIT:H[G]=new PH;break;case uJ.KHR_DRACO_MESH_COMPRESSION:H[G]=new nH(W,this.dracoLoader);break;case uJ.KHR_TEXTURE_TRANSFORM:H[G]=new sH;break;case uJ.KHR_MESH_QUANTIZATION:H[G]=new oH;break;default:if(E.indexOf(G)>=0&&Y[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}K.setExtensions(H),K.setPlugins(Y),K.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,W){$.parse(J,Q,Z,W)})}}function jE(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}var uJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class IH{constructor(J){this.parser=J,this.name=uJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let W=Q.json,X=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],K,U=new yJ(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],I0);let G=X.range!==void 0?X.range:0;switch(X.type){case"directional":K=new y7(U),K.target.position.set(0,0,-1),K.add(K.target);break;case"point":K=new v7(U),K.distance=G;break;case"spot":K=new j7(U),K.distance=G,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,K.angle=X.spot.outerConeAngle,K.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,K.target.position.set(0,0,-1),K.add(K.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(K.position.set(0,0,0),E8(K,X),X.intensity!==void 0)K.intensity=X.intensity;return K.name=Q.createUniqueName(X.name||"light_"+J),Z=Promise.resolve(K),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,W=$.json.nodes[J],Y=(W.extensions&&W.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return $._getNodeRef(Q.cache,Y,X)})}}class PH{constructor(){this.name=uJ.KHR_MATERIALS_UNLIT}getMaterialType(){return U8}extendParams(J,Q,$){let Z=[];J.color=new yJ(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let H=W.baseColorFactor;J.color.setRGB(H[0],H[1],H[2],I0),J.opacity=H[3]}if(W.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",W.baseColorTexture,K8))}return Promise.all(Z)}}class wH{constructor(J){this.parser=J,this.name=uJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name].emissiveStrength;if(W!==void 0)Q.emissiveIntensity=W;return Promise.resolve()}}class TH{constructor(J){this.parser=J,this.name=uJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return h0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.clearcoatFactor!==void 0)Q.clearcoat=H.clearcoatFactor;if(H.clearcoatTexture!==void 0)W.push($.assignTexture(Q,"clearcoatMap",H.clearcoatTexture));if(H.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=H.clearcoatRoughnessFactor;if(H.clearcoatRoughnessTexture!==void 0)W.push($.assignTexture(Q,"clearcoatRoughnessMap",H.clearcoatRoughnessTexture));if(H.clearcoatNormalTexture!==void 0){if(W.push($.assignTexture(Q,"clearcoatNormalMap",H.clearcoatNormalTexture)),H.clearcoatNormalTexture.scale!==void 0){let Y=H.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new xJ(Y,Y)}}return Promise.all(W)}}class AH{constructor(J){this.parser=J,this.name=uJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return h0}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class SH{constructor(J){this.parser=J,this.name=uJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return h0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.iridescenceFactor!==void 0)Q.iridescence=H.iridescenceFactor;if(H.iridescenceTexture!==void 0)W.push($.assignTexture(Q,"iridescenceMap",H.iridescenceTexture));if(H.iridescenceIor!==void 0)Q.iridescenceIOR=H.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if(H.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=H.iridescenceThicknessMinimum;if(H.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=H.iridescenceThicknessMaximum;if(H.iridescenceThicknessTexture!==void 0)W.push($.assignTexture(Q,"iridescenceThicknessMap",H.iridescenceThicknessTexture));return Promise.all(W)}}class jH{constructor(J){this.parser=J,this.name=uJ.KHR_MATERIALS_SHEEN}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return h0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[];Q.sheenColor=new yJ(0,0,0),Q.sheenRoughness=0,Q.sheen=1;let H=Z.extensions[this.name];if(H.sheenColorFactor!==void 0){let Y=H.sheenColorFactor;Q.sheenColor.setRGB(Y[0],Y[1],Y[2],I0)}if(H.sheenRoughnessFactor!==void 0)Q.sheenRoughness=H.sheenRoughnessFactor;if(H.sheenColorTexture!==void 0)W.push($.assignTexture(Q,"sheenColorMap",H.sheenColorTexture,K8));if(H.sheenRoughnessTexture!==void 0)W.push($.assignTexture(Q,"sheenRoughnessMap",H.sheenRoughnessTexture));return Promise.all(W)}}class vH{constructor(J){this.parser=J,this.name=uJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return h0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.transmissionFactor!==void 0)Q.transmission=H.transmissionFactor;if(H.transmissionTexture!==void 0)W.push($.assignTexture(Q,"transmissionMap",H.transmissionTexture));return Promise.all(W)}}class yH{constructor(J){this.parser=J,this.name=uJ.KHR_MATERIALS_VOLUME}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return h0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.thickness=H.thicknessFactor!==void 0?H.thicknessFactor:0,H.thicknessTexture!==void 0)W.push($.assignTexture(Q,"thicknessMap",H.thicknessTexture));Q.attenuationDistance=H.attenuationDistance||1/0;let Y=H.attenuationColor||[1,1,1];return Q.attenuationColor=new yJ().setRGB(Y[0],Y[1],Y[2],I0),Promise.all(W)}}class fH{constructor(J){this.parser=J,this.name=uJ.KHR_MATERIALS_IOR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return h0}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class hH{constructor(J){this.parser=J,this.name=uJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return h0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.specularIntensity=H.specularFactor!==void 0?H.specularFactor:1,H.specularTexture!==void 0)W.push($.assignTexture(Q,"specularIntensityMap",H.specularTexture));let Y=H.specularColorFactor||[1,1,1];if(Q.specularColor=new yJ().setRGB(Y[0],Y[1],Y[2],I0),H.specularColorTexture!==void 0)W.push($.assignTexture(Q,"specularColorMap",H.specularColorTexture,K8));return Promise.all(W)}}class bH{constructor(J){this.parser=J,this.name=uJ.EXT_MATERIALS_BUMP}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return h0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.bumpScale=H.bumpFactor!==void 0?H.bumpFactor:1,H.bumpTexture!==void 0)W.push($.assignTexture(Q,"bumpMap",H.bumpTexture));return Promise.all(W)}}class xH{constructor(J){this.parser=J,this.name=uJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return h0}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.anisotropyStrength!==void 0)Q.anisotropy=H.anisotropyStrength;if(H.anisotropyRotation!==void 0)Q.anisotropyRotation=H.anisotropyRotation;if(H.anisotropyTexture!==void 0)W.push($.assignTexture(Q,"anisotropyMap",H.anisotropyTexture));return Promise.all(W)}}class gH{constructor(J){this.parser=J,this.name=uJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],H=Q.options.ktx2Loader;if(!H)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,H)}}class pH{constructor(J){this.parser=J,this.name=uJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=Z.images[H.source],X=$.textureLoader;if(Y.uri){let K=$.options.manager.getHandler(Y.uri);if(K!==null)X=K}return $.loadTextureImage(J,H.source,X)}}class lH{constructor(J){this.parser=J,this.name=uJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=Z.images[H.source],X=$.textureLoader;if(Y.uri){let K=$.options.manager.getHandler(Y.uri);if(K!==null)X=K}return $.loadTextureImage(J,H.source,X)}}class dH{constructor(J){this.name=uJ.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),H=this.parser.options.meshoptDecoder;if(!H||!H.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(Y){let X=Z.byteOffset||0,K=Z.byteLength||0,U=Z.count,G=Z.byteStride,E=new Uint8Array(Y,X,K);if(H.decodeGltfBufferAsync)return H.decodeGltfBufferAsync(U,G,E,Z.mode,Z.filter).then(function(q){return q.buffer});else return H.ready.then(function(){let q=new ArrayBuffer(U*G);return H.decodeGltfBuffer(new Uint8Array(q),U,G,E,Z.mode,Z.filter),q})})}else return null}}class mH{constructor(J){this.name=uJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let K of Z.primitives)if(K.mode!==s0.TRIANGLES&&K.mode!==s0.TRIANGLE_STRIP&&K.mode!==s0.TRIANGLE_FAN&&K.mode!==void 0)return null;let H=$.extensions[this.name].attributes,Y=[],X={};for(let K in H)Y.push(this.parser.getDependency("accessor",H[K]).then((U)=>{return X[K]=U,X[K]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((K)=>{let U=K.pop(),G=U.isGroup?U.children:[U],E=K[0].count,q=[];for(let F of G){let k=new hJ,M=new j,N=new $8,O=new j(1,1,1),I=new B7(F.geometry,F.material,E);for(let L=0;L<E;L++){if(X.TRANSLATION)M.fromBufferAttribute(X.TRANSLATION,L);if(X.ROTATION)N.fromBufferAttribute(X.ROTATION,L);if(X.SCALE)O.fromBufferAttribute(X.SCALE,L);I.setMatrixAt(L,k.compose(M,N,O))}for(let L in X)if(L==="_COLOR_0"){let _=X[L];I.instanceColor=new e8(_.array,_.itemSize,_.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE")F.geometry.setAttribute(L,X[L]);H0.prototype.copy.call(I,F),this.parser.assignFinalMaterial(I),q.push(I)}if(U.isGroup)return U.clear(),U.add(...q),U;return q[0]})}}var uH="glTF",z6=12,zH={JSON:1313821514,BIN:5130562};class cH{constructor(J){this.name=uJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,z6),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==uH)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-z6,W=new DataView(J,z6),H=0;while(H<Z){let Y=W.getUint32(H,!0);H+=4;let X=W.getUint32(H,!0);if(H+=4,X===zH.JSON){let K=new Uint8Array(J,z6+H,Y);this.content=$.decode(K)}else if(X===zH.BIN){let K=z6+H;this.body=J.slice(K,K+Y)}H+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class nH{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=uJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,H=J.extensions[this.name].attributes,Y={},X={},K={};for(let U in H){let G=l$[U]||U.toLowerCase();Y[G]=H[U]}for(let U in J.attributes){let G=l$[U]||U.toLowerCase();if(H[U]!==void 0){let E=$.accessors[J.attributes[U]],q=m9[E.componentType];K[G]=q.name,X[G]=E.normalized===!0}}return Q.getDependency("bufferView",W).then(function(U){return new Promise(function(G,E){Z.decodeDracoFile(U,function(q){for(let F in q.attributes){let k=q.attributes[F],M=X[F];if(M!==void 0)k.normalized=M}G(q)},Y,K,I0,E)})})}}class sH{constructor(){this.name=uJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);return J.needsUpdate=!0,J}}class oH{constructor(){this.name=uJ.KHR_MESH_QUANTIZATION}}class u$ extends p8{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let H=0;H!==Z;H++)Q[H]=$[W+H];return Q}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=Y*2,K=Y*3,U=Z-Q,G=($-Q)/U,E=G*G,q=E*G,F=J*K,k=F-K,M=-2*q+3*E,N=q-E,O=1-M,I=N-E+G;for(let L=0;L!==Y;L++){let _=H[k+L+Y],S=H[k+L+X]*U,C=H[F+L+Y],T=H[F+L]*U;W[L]=O*_+I*S+M*C+N*T}return W}}var vE=new $8;class iH extends u${interpolate_(J,Q,$,Z){let W=super.interpolate_(J,Q,$,Z);return vE.fromArray(W).normalize().toArray(W),W}}var s0={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},m9={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},BH={9728:z8,9729:Q8,9984:K7,9985:T9,9986:Q9,9987:B8},_H={33071:Y7,33648:X7,10497:w9},x$={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},l$={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},c8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yE={CUBICSPLINE:void 0,LINEAR:O7,STEP:Q$},g$={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fE(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new x9({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:y8});return J.DefaultMaterial}function X9(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function E8(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function hE(J,Q,$){let Z=!1,W=!1,H=!1;for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(E.POSITION!==void 0)Z=!0;if(E.NORMAL!==void 0)W=!0;if(E.COLOR_0!==void 0)H=!0;if(Z&&W&&H)break}if(!Z&&!W&&!H)return Promise.resolve(J);let Y=[],X=[],K=[];for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(Z){let q=E.POSITION!==void 0?$.getDependency("accessor",E.POSITION):J.attributes.position;Y.push(q)}if(W){let q=E.NORMAL!==void 0?$.getDependency("accessor",E.NORMAL):J.attributes.normal;X.push(q)}if(H){let q=E.COLOR_0!==void 0?$.getDependency("accessor",E.COLOR_0):J.attributes.color;K.push(q)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(K)]).then(function(U){let G=U[0],E=U[1],q=U[2];if(Z)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=E;if(H)J.morphAttributes.color=q;return J.morphTargetsRelative=!0,J})}function bE(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,W=$.length;Z<W;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xE(J){let Q,$=J.extensions&&J.extensions[uJ.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+p$($.attributes);else Q=J.indices+":"+p$(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)Q+=":"+p$(J.targets[Z]);return Q}function p$(J){let Q="",$=Object.keys(J).sort();for(let Z=0,W=$.length;Z<W;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function d$(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gE(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var pE=new hJ;class aH{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new jE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,W=!1,H=-1;if(typeof navigator<"u"){let Y=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);Z=$&&X?parseInt(X[1],10):-1,W=Y.indexOf("Firefox")>-1,H=W?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||W&&H<98)this.textureLoader=new g9(this.options.manager);else this.textureLoader=new f7(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new k6(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(H){return H._markDefs&&H._markDefs()}),Promise.all(this._invokeAll(function(H){return H.beforeRoot&&H.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(H){let Y={scene:H[0][Z.scene||0],scenes:H[0],animations:H[1],cameras:H[2],asset:Z.asset,parser:$,userData:{}};return X9(W,Y,Z),E8(Y,Z),Promise.all($._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,W=Q.length;Z<W;Z++){let H=Q[Z].joints;for(let Y=0,X=H.length;Y<X;Y++)J[H[Y]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let H=J[Z];if(H.mesh!==void 0){if(this._addNodeRef(this.meshCache,H.mesh),H.skin!==void 0)$[H.mesh].isSkinnedMesh=!0}if(H.camera!==void 0)this._addNodeRef(this.cameraCache,H.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),W=(H,Y)=>{let X=this.associations.get(H);if(X!=null)this.associations.set(Y,X);for(let[K,U]of H.children.entries())W(U,Y.children[K])};return W($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let W=J(Q[Z]);if(W)$.push(W)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(W,H){return $.getDependency(J,H)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[uJ.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,H){$.load(u8.resolveURL(Q.uri,Z.path),W,void 0,function(){H(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,W=Q.byteOffset||0;return $.slice(W,W+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let H=x$[Z.type],Y=m9[Z.componentType],X=Z.normalized===!0,K=new Y(Z.count*H);return Promise.resolve(new F0(K,H,X))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(H){let Y=H[0],X=x$[Z.type],K=m9[Z.componentType],U=K.BYTES_PER_ELEMENT,G=U*X,E=Z.byteOffset||0,q=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,F=Z.normalized===!0,k,M;if(q&&q!==G){let N=Math.floor(E/q),O="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+N+":"+Z.count,I=Q.cache.get(O);if(!I)k=new K(Y,N*q,Z.count*q/U),I=new E6(k,q/U),Q.cache.add(O,I);M=new f9(I,X,E%q/U,F)}else{if(Y===null)k=new K(Z.count*X);else k=new K(Y,E,Z.count*X);M=new F0(k,X,F)}if(Z.sparse!==void 0){let N=x$.SCALAR,O=m9[Z.sparse.indices.componentType],I=Z.sparse.indices.byteOffset||0,L=Z.sparse.values.byteOffset||0,_=new O(H[1],I,Z.sparse.count*N),S=new K(H[2],L,Z.sparse.count*X);if(Y!==null)M=new F0(M.array.slice(),M.itemSize,M.normalized);M.normalized=!1;for(let C=0,T=_.length;C<T;C++){let b=_[C];if(M.setX(b,S[C*X]),X>=2)M.setY(b,S[C*X+1]);if(X>=3)M.setZ(b,S[C*X+2]);if(X>=4)M.setW(b,S[C*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=F}return M})}loadTexture(J){let Q=this.json,$=this.options,W=Q.textures[J].source,H=Q.images[W],Y=this.textureLoader;if(H.uri){let X=$.manager.getHandler(H.uri);if(X!==null)Y=X}return this.loadTextureImage(J,W,Y)}loadTextureImage(J,Q,$){let Z=this,W=this.json,H=W.textures[J],Y=W.images[Q],X=(Y.uri||Y.bufferView)+":"+H.sampler;if(this.textureCache[X])return this.textureCache[X];let K=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=H.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let E=(W.samplers||{})[H.sampler]||{};return U.magFilter=BH[E.magFilter]||Q8,U.minFilter=BH[E.minFilter]||B8,U.wrapS=_H[E.wrapS]||w9,U.wrapT=_H[E.wrapT]||w9,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==z8&&U.minFilter!==Q8,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=K,K}loadImageSource(J,Q){let $=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let H=Z.images[J],Y=self.URL||self.webkitURL,X=H.uri||"",K=!1;if(H.bufferView!==void 0)X=$.getDependency("bufferView",H.bufferView).then(function(G){K=!0;let E=new Blob([G],{type:H.mimeType});return X=Y.createObjectURL(E),X});else if(H.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(G){return new Promise(function(E,q){let F=E;if(Q.isImageBitmapLoader===!0)F=function(k){let M=new O0(k);M.needsUpdate=!0,E(M)};Q.load(u8.resolveURL(G,W.path),F,void 0,q)})}).then(function(G){if(K===!0)Y.revokeObjectURL(X);return E8(G,H),G.userData.mimeType=H.mimeType||gE(H.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),G});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,Z){let W=this;return this.getDependency("texture",$.index).then(function(H){if(!H)return null;if($.texCoord!==void 0&&$.texCoord>0)H=H.clone(),H.channel=$.texCoord;if(W.extensions[uJ.KHR_TEXTURE_TRANSFORM]){let Y=$.extensions!==void 0?$.extensions[uJ.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=W.associations.get(H);H=W.extensions[uJ.KHR_TEXTURE_TRANSFORM].extendTexture(H,Y),W.associations.set(H,X)}}if(Z!==void 0)H.colorSpace=Z;return J[Q]=H,H})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,H=Q.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new R6,y0.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,X.sizeAttenuation=!1,this.cache.add(Y,X);$=X}else if(J.isLine){let Y="LineBasicMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new F6,y0.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,this.cache.add(Y,X);$=X}if(Z||W||H){let Y="ClonedMaterial:"+$.uuid+":";if(Z)Y+="derivative-tangents:";if(W)Y+="vertex-colors:";if(H)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=$.clone(),W)X.vertexColors=!0;if(H)X.flatShading=!0;if(Z){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get($))}$=X}J.material=$}getMaterialType(){return x9}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,W=$.materials[J],H,Y={},X=W.extensions||{},K=[];if(X[uJ.KHR_MATERIALS_UNLIT]){let G=Z[uJ.KHR_MATERIALS_UNLIT];H=G.getMaterialType(),K.push(G.extendParams(Y,W,Q))}else{let G=W.pbrMetallicRoughness||{};if(Y.color=new yJ(1,1,1),Y.opacity=1,Array.isArray(G.baseColorFactor)){let E=G.baseColorFactor;Y.color.setRGB(E[0],E[1],E[2],I0),Y.opacity=E[3]}if(G.baseColorTexture!==void 0)K.push(Q.assignTexture(Y,"map",G.baseColorTexture,K8));if(Y.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,Y.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)K.push(Q.assignTexture(Y,"metalnessMap",G.metallicRoughnessTexture)),K.push(Q.assignTexture(Y,"roughnessMap",G.metallicRoughnessTexture));H=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(J)}),K.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(J,Y)})))}if(W.doubleSided===!0)Y.side=u0;let U=W.alphaMode||g$.OPAQUE;if(U===g$.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===g$.MASK)Y.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&H!==U8){if(K.push(Q.assignTexture(Y,"normalMap",W.normalTexture)),Y.normalScale=new xJ(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;Y.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&H!==U8){if(K.push(Q.assignTexture(Y,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)Y.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&H!==U8){let G=W.emissiveFactor;Y.emissive=new yJ().setRGB(G[0],G[1],G[2],I0)}if(W.emissiveTexture!==void 0&&H!==U8)K.push(Q.assignTexture(Y,"emissiveMap",W.emissiveTexture,K8));return Promise.all(K).then(function(){let G=new H(Y);if(W.name)G.name=W.name;if(E8(G,W),Q.associations.set(G,{materials:J}),W.extensions)X9(Z,G,W);return G})}createUniqueName(J){let Q=aJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function W(Y){return $[uJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,Q).then(function(X){return CH(X,Y,Q)})}let H=[];for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=xE(K),G=Z[U];if(G)H.push(G.promise);else{let E;if(K.extensions&&K.extensions[uJ.KHR_DRACO_MESH_COMPRESSION])E=W(K);else E=CH(new f0,K,Q);Z[U]={primitive:K,promise:E},H.push(E)}}return Promise.all(H)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,W=$.meshes[J],H=W.primitives,Y=[];for(let X=0,K=H.length;X<K;X++){let U=H[X].material===void 0?fE(this.cache):this.getDependency("material",H[X].material);Y.push(U)}return Y.push(Q.loadGeometries(H)),Promise.all(Y).then(function(X){let K=X.slice(0,X.length-1),U=X[X.length-1],G=[];for(let q=0,F=U.length;q<F;q++){let k=U[q],M=H[q],N,O=K[q];if(M.mode===s0.TRIANGLES||M.mode===s0.TRIANGLE_STRIP||M.mode===s0.TRIANGLE_FAN||M.mode===void 0){if(N=W.isSkinnedMesh===!0?new z7(k,O):new z0(k,O),N.isSkinnedMesh===!0)N.normalizeSkinWeights();if(M.mode===s0.TRIANGLE_STRIP)N.geometry=b$(N.geometry,K6);else if(M.mode===s0.TRIANGLE_FAN)N.geometry=b$(N.geometry,j9)}else if(M.mode===s0.LINES)N=new _7(k,O);else if(M.mode===s0.LINE_STRIP)N=new b9(k,O);else if(M.mode===s0.LINE_LOOP)N=new C7(k,O);else if(M.mode===s0.POINTS)N=new I7(k,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);if(Object.keys(N.geometry.morphAttributes).length>0)bE(N,W);if(N.name=Q.createUniqueName(W.name||"mesh_"+J),E8(N,W),M.extensions)X9(Z,N,M);Q.assignFinalMaterial(N),G.push(N)}for(let q=0,F=G.length;q<F;q++)Q.associations.set(G[q],{meshes:J,primitives:q});if(G.length===1){if(W.extensions)X9(Z,G[0],W);return G[0]}let E=new d0;if(W.extensions)X9(Z,E,W);Q.associations.set(E,{meshes:J});for(let q=0,F=G.length;q<F;q++)E.add(G[q]);return E})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new D0(g8.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new m8(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return E8(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,W=Q.joints.length;Z<W;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let W=Z.pop(),H=Z,Y=[],X=[];for(let K=0,U=H.length;K<U;K++){let G=H[K];if(G){Y.push(G);let E=new hJ;if(W!==null)E.fromArray(W.array,K*16);X.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[K])}return new N6(Y,X)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],W=Z.name?Z.name:"animation_"+J,H=[],Y=[],X=[],K=[],U=[];for(let G=0,E=Z.channels.length;G<E;G++){let q=Z.channels[G],F=Z.samplers[q.sampler],k=q.target,M=k.node,N=Z.parameters!==void 0?Z.parameters[F.input]:F.input,O=Z.parameters!==void 0?Z.parameters[F.output]:F.output;if(k.node===void 0)continue;H.push(this.getDependency("node",M)),Y.push(this.getDependency("accessor",N)),X.push(this.getDependency("accessor",O)),K.push(F),U.push(k)}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(K),Promise.all(U)]).then(function(G){let E=G[0],q=G[1],F=G[2],k=G[3],M=G[4],N=[];for(let I=0,L=E.length;I<L;I++){let _=E[I],S=q[I],C=F[I],T=k[I],b=M[I];if(_===void 0)continue;if(_.updateMatrix)_.updateMatrix();let z=$._createAnimationTracks(_,S,C,T,b);if(z)for(let V=0;V<z.length;V++)N.push(z[V])}let O=new A7(W,void 0,N);return E8(O,Z),O})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(W){let H=$._getNodeRef($.meshCache,Z.mesh,W);if(Z.weights!==void 0)H.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,K=Z.weights.length;X<K;X++)Y.morphTargetInfluences[X]=Z.weights[X]});return H})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],W=$._loadNodeShallow(J),H=[],Y=Z.children||[];for(let K=0,U=Y.length;K<U;K++)H.push($.getDependency("node",Y[K]));let X=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(H),X]).then(function(K){let U=K[0],G=K[1],E=K[2];if(E!==null)U.traverse(function(q){if(!q.isSkinnedMesh)return;q.bind(E,pE)});for(let q=0,F=G.length;q<F;q++)U.add(G[q]);return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],H=W.name?Z.createUniqueName(W.name):"",Y=[],X=Z._invokeOne(function(K){return K.createNodeMesh&&K.createNodeMesh(J)});if(X)Y.push(X);if(W.camera!==void 0)Y.push(Z.getDependency("camera",W.camera).then(function(K){return Z._getNodeRef(Z.cameraCache,W.camera,K)}));return Z._invokeAll(function(K){return K.createNodeAttachment&&K.createNodeAttachment(J)}).forEach(function(K){Y.push(K)}),this.nodeCache[J]=Promise.all(Y).then(function(K){let U;if(W.isBone===!0)U=new q6;else if(K.length>1)U=new d0;else if(K.length===1)U=K[0];else U=new H0;if(U!==K[0])for(let G=0,E=K.length;G<E;G++)U.add(K[G]);if(W.name)U.userData.name=W.name,U.name=H;if(E8(U,W),W.extensions)X9($,U,W);if(W.matrix!==void 0){let G=new hJ;G.fromArray(W.matrix),U.applyMatrix4(G)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,W=new d0;if($.name)W.name=Z.createUniqueName($.name);if(E8(W,$),$.extensions)X9(Q,W,$);let H=$.nodes||[],Y=[];for(let X=0,K=H.length;X<K;X++)Y.push(Z.getDependency("node",H[X]));return Promise.all(Y).then(function(X){for(let U=0,G=X.length;U<G;U++)W.add(X[U]);let K=(U)=>{let G=new Map;for(let[E,q]of Z.associations)if(E instanceof y0||E instanceof O0)G.set(E,q);return U.traverse((E)=>{let q=Z.associations.get(E);if(q!=null)G.set(E,q)}),G};return Z.associations=K(W),W})}_createAnimationTracks(J,Q,$,Z,W){let H=[],Y=J.name?J.name:J.uuid,X=[];if(c8[W.path]===c8.weights)J.traverse(function(E){if(E.morphTargetInfluences)X.push(E.name?E.name:E.uuid)});else X.push(Y);let K;switch(c8[W.path]){case c8.weights:K=L8;break;case c8.rotation:K=I8;break;case c8.translation:case c8.scale:K=V8;break;default:switch($.itemSize){case 1:K=L8;break;case 2:case 3:default:K=V8;break}break}let U=Z.interpolation!==void 0?yE[Z.interpolation]:O7,G=this._getArrayFromAccessor($);for(let E=0,q=X.length;E<q;E++){let F=new K(X[E]+"."+c8[W.path],Q.array,G,U);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(F);H.push(F)}return H}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=d$(Q.constructor),Z=new Float32Array(Q.length);for(let W=0,H=Q.length;W<H;W++)Z[W]=Q[W]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof I8?iH:u$)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lE(J,Q,$){let Z=Q.attributes,W=new c0;if(Z.POSITION!==void 0){let X=$.json.accessors[Z.POSITION],K=X.min,U=X.max;if(K!==void 0&&U!==void 0){if(W.set(new j(K[0],K[1],K[2]),new j(U[0],U[1],U[2])),X.normalized){let G=d$(m9[X.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let H=Q.targets;if(H!==void 0){let X=new j,K=new j;for(let U=0,G=H.length;U<G;U++){let E=H[U];if(E.POSITION!==void 0){let q=$.json.accessors[E.POSITION],F=q.min,k=q.max;if(F!==void 0&&k!==void 0){if(K.setX(Math.max(Math.abs(F[0]),Math.abs(k[0]))),K.setY(Math.max(Math.abs(F[1]),Math.abs(k[1]))),K.setZ(Math.max(Math.abs(F[2]),Math.abs(k[2]))),q.normalized){let M=d$(m9[q.componentType]);K.multiplyScalar(M)}X.max(K)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(X)}J.boundingBox=W;let Y=new v0;W.getCenter(Y.center),Y.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=Y}function CH(J,Q,$){let Z=Q.attributes,W=[];function H(Y,X){return $.getDependency("accessor",Y).then(function(K){J.setAttribute(X,K)})}for(let Y in Z){let X=l$[Y]||Y.toLowerCase();if(X in J.attributes)continue;W.push(H(Z[Y],X))}if(Q.indices!==void 0&&!J.index){let Y=$.getDependency("accessor",Q.indices).then(function(X){J.setIndex(X)});W.push(Y)}if(nJ.workingColorSpace!==I0&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nJ.workingColorSpace}" not supported.`);return E8(J,Q),lE(J,Q,$),Promise.all(W).then(function(){return Q.targets!==void 0?hE(J,Q.targets,$):J})}var dE=`
varying vec2 vUv;
void main() {
  vUv = vec2(uv.x, 1.0 - uv.y);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,u9=`
precision highp float;
varying vec2 vUv;
uniform float uTime, uFoil, uScale, uDepth, uBgDepth, uFinish, uHasLine, uRelief, uSafeScale, uFxDepth, uHasFx;
uniform vec2 uFit, uSafeOffset, uSubjectOffset;
uniform vec3 uView;
uniform float uMotion;
vec3 printedLinear(vec3 c) {
  return mix(c/12.92,pow((c+.055)/1.055,vec3(2.4)),step(vec3(.04045),c));
}
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float inside(vec2 p) { return step(0.,p.x)*step(0.,p.y)*step(p.x,1.)*step(p.y,1.); }
vec2 parallax(vec2 uv, float depth) {
  return uv + uView.xy / max(abs(uView.z), .4) * depth * .14;
}
vec3 spectrum(float phase) {
  return .66 + .25 * cos(6.28318 * (phase + vec3(0., .33, .67)));
}
// Only "original" (uFinish ~ 2) disables the foil; pearl/silver/gold all use it.
float strength() { return abs(uFinish - 2.0) < 0.05 ? 0. : uFoil; }
vec3 film(vec2 uv) {
  float phase = uv.x * .85 + uv.y * .55 + uView.x * 1.5 - uView.y * .9;
  if (uFinish > 2.5) {
    // 烫金 (gold foil): warm gold laminate that shifts with the viewing angle.
    float hi = 0.5 + 0.5 * sin(phase * 6.28318);
    float glint = 0.5 + 0.5 * cos((phase + 0.25) * 6.28318);
    vec3 deep = vec3(.72, .50, .20);
    vec3 bright = vec3(1.00, .90, .60);
    return mix(deep, bright, hi * .7 + glint * .3);
  }
  vec3 color = spectrum(phase);
  return mix(color, vec3(dot(color,vec3(.2126,.7152,.0722))), step(.5,uFinish));
}
float sweep(vec2 uv) {
  return pow(.5+.5*sin((uv.x*.72+uv.y*.45+uView.x*1.2+uView.y*.6)*6.283),10.);
}
`,rH=u9+`
uniform sampler2D tSubject, tBackground, tText, tLine, tEffects;

float region(vec2 p,vec2 center,vec2 radius){return 1.-smoothstep(.25,1.,length((p-center)/radius));}
vec2 subjectMotion(vec2 uv){
 vec2 p=vec2(uv.x,1.-uv.y);
 // Wind falls to exactly zero before the hair meets the shoulder.
 // Head, torso, arms, knees and shoes are fixed anchors.
 float hair=region(p,vec2(.17,.645),vec2(.14,.115));
 hair*=smoothstep(.545,.61,p.y)*(1.-smoothstep(.24,.285,p.x));
 float hem=region(p,vec2(.15,.837),vec2(.24,.074));
 hem*=smoothstep(.764,.80,p.y)*(1.-smoothstep(.29,.385,p.x));
 float wind=sin(uTime*1.65+p.y*12.)+.22*sin(uTime*2.7+p.y*21.);
 p.x-=uMotion*(hair*.007*wind+hem*.0045*sin(uTime*1.45+p.x*13.));
 p.y-=uMotion*(hair*.0022*sin(uTime*1.65+p.y*12.+.8)+hem*.004*sin(uTime*1.45+p.x*13.+.5));
 return vec2(p.x,1.-p.y);
}
float waterMask(vec2 p){
 // Keep the bridge and sloping foreground bank fixed.
 float lower=mix(.625,.787,smoothstep(.05,.90,p.x));
 return smoothstep(.577,.595,p.y)*(1.-smoothstep(lower-.016,lower+.012,p.y));
}
vec2 backgroundMotion(vec2 uv){
 vec2 p=vec2(uv.x,1.-uv.y);
 float water=waterMask(p);
 p.x-=uMotion*water*(.0022*sin(p.y*205.-uTime*1.9)+.0007*sin(p.y*371.+uTime*1.1));
 p.y-=uMotion*water*.0003*sin(p.x*49.+p.y*151.-uTime*1.4);
 return vec2(p.x,1.-p.y);
}
float firelight(vec2 p,vec2 center,vec2 radius,float phase){
 vec2 d=(p-center)/radius;
 float r=length(d);
 float envelope=1.-smoothstep(.70,1.12,r);
 // Brightness travels outward along the existing painted rays.
 float wave=pow(.5+.5*cos(r*13.-uTime*2.5+phase),3.);
 float breath=.5+.5*sin(uTime*1.7+phase);
 return envelope*(-.24+.36*breath+.42*wave);
}
vec3 atmosphere(vec3 col,vec2 uv){
 vec2 p=vec2(uv.x,1.-uv.y);
 float sparks=smoothstep(.43,.80,max(col.r,col.g))*smoothstep(.015,.13,col.r-col.b);
 float light=firelight(p,vec2(.77,.136),vec2(.29,.205),0.)
            +firelight(p,vec2(.614,.291),vec2(.15,.115),2.1)
            +firelight(p,vec2(.9,.335),vec2(.14,.115),4.4)
            +firelight(p,vec2(.472,.199),vec2(.12,.10),1.2);
 col+=vec3(1.,.76,.45)*sparks*light*uMotion;
 float water=waterMask(p);
 float reflection=smoothstep(.38,.80,col.r)*smoothstep(.005,.11,col.r-col.b);
 float glint=pow(.5+.5*sin(p.y*340.+sin(p.x*23.)*2.-uTime*2.),6.);
 col+=vec3(.11,.08,.045)*water*reflection*(glint-.25)*uMotion;
 return col;
}

void main() {
  vec2 uv = vUv;
  vec2 su = ((parallax(uv,uDepth)-.5-uSubjectOffset)*uScale/uFit+.5)*uSafeScale+uSafeOffset;
  vec2 bu = parallax(uv,uBgDepth);
  su = subjectMotion(su);
  vec4 subject = texture2D(tSubject,clamp(su,0.,1.));
  subject.a *= inside(su)*(1.-uRelief);
  bu = (bu-.5)/1.10+.5;
  bu=backgroundMotion(bu);
  vec3 bg = atmosphere(texture2D(tBackground,clamp(bu,0.,1.)).rgb,bu);
  vec3 col = mix(bg,subject.rgb,subject.a);
  if (uFinish > 2.5) col = col * vec3(1.02, .95, .78) + vec3(.05, .012, 0.0);
  // Effects layer floats between the subject and the text: above the character,
  // below the typography, with its own mid-depth parallax.
  vec2 eu = parallax(uv,uFxDepth);
  vec4 fx = texture2D(tEffects,clamp(eu,0.,1.));
  col = mix(col,fx.rgb,fx.a*(1.-uRelief)*uHasFx);
  vec3 foil = film(uv);
  float amount = strength();
  float luminance = dot(col,vec3(.2126,.7152,.0722));
  float band = sweep(uv);
  // Laminate changes with the card-local viewing direction; black print stays readable.
  float goldBoost = uFinish > 2.5 ? 1.7 : 1.0;
  // Preserve printed colour: foil adds reflected light instead of a dark tint.
  col += foil * amount * band * goldBoost * (.10 + .14*(1.-luminance));
  float edge = 1.-smoothstep(.015,.06,min(min(uv.x,1.-uv.x),min(uv.y,1.-uv.y)));
  col = mix(col,foil*.75+.21,edge*amount*(uFinish > 2.5 ? .42 : .3));
  vec2 cell = floor(uv*vec2(480.,720.));
  float flake = step(.994,hash(cell))*pow(.5+.5*sin(hash(cell+8.)*30.+uView.x*20.),10.);
  col += foil*flake*amount*.13;
  float line = (1.-smoothstep(.06,.25,texture2D(tLine,clamp(su,0.,1.)).r))*uHasLine;
  col += line*inside(su)*subject.a*band*amount*.055;
  vec4 text = texture2D(tText,uv);
  col = mix(col,text.rgb,text.a*(1.-uRelief));
  gl_FragColor = vec4(printedLinear(clamp(col,0.,1.)),1.);
  #include <colorspace_fragment>
}
`,mE=u9+`
void main() {
  vec3 col = mix(vec3(.66,.69,.67),film(vUv)*.6+.35,strength()*.7);
  gl_FragColor=vec4(printedLinear(col),1.);
  #include <colorspace_fragment>
}
`,O5=u9+`
uniform sampler2D tBack;
void main() {
  vec2 uv=vec2(1.-vUv.x,vUv.y);
  vec4 art=texture2D(tBack,uv);
  vec3 col=vec3(.055,.082,.13);
  col*=1.-strength()*.12*(1.-film(vUv));
  col+=film(vUv)*sweep(vUv)*strength()*.055;
  col=mix(col,art.rgb,art.a);
  gl_FragColor=vec4(printedLinear(clamp(col,0.,1.)),1.);
  #include <colorspace_fragment>
}
`,F5=u9+`
uniform sampler2D tSubject;
void main() {
  vec4 art=texture2D(tSubject,vUv);
  if(art.a<.06)discard;
  vec2 px=1./vec2(1024.,1630.);
  float inner=min(min(texture2D(tSubject,vUv+vec2(px.x*2.,0.)).a,texture2D(tSubject,vUv-vec2(px.x*2.,0.)).a),min(texture2D(tSubject,vUv+vec2(0.,px.y*2.)).a,texture2D(tSubject,vUv-vec2(0.,px.y*2.)).a));
  vec3 col=art.rgb;
  col+=film(vUv)*sweep(vUv)*strength()*.10;
  col=mix(col,vec3(.86,.72,.40),(1.-inner)*.22);
  gl_FragColor=vec4(printedLinear(clamp(col,0.,1.)),art.a);
  #include <colorspace_fragment>
}
`,R5=u9+`
uniform sampler2D tEffects;
void main() {
  vec4 art=texture2D(tEffects,vUv);
  // The relief effects layer is a pre-cut RGBA asset: use its real alpha so
  // thorn/spark deco keeps its silhouette instead of a color-channel matte.
  float alpha=art.a;
  if(alpha<.015)discard;
  vec3 col=art.rgb;
  col+=film(vUv)*sweep(vUv)*strength()*.08;
  gl_FragColor=vec4(printedLinear(clamp(col,0.,1.)),alpha);
  #include <colorspace_fragment>
}
`,M5=u9+`
uniform sampler2D tText;
void main(){vec4 art=texture2D(tText,vUv);if(art.a<.02)discard;gl_FragColor=vec4(printedLinear(art.rgb),art.a);
  #include <colorspace_fragment>
}
`,uE={nr_wenyu:{name:"wenyu",fit:1,offset:[0,0],depth:0.44,bgDepth:-0.3,line:!0},nr_gaoyu:{name:"gaoyu",fit:0.64,offset:[-0.13,0.14],depth:0.42,bgDepth:-0.26},nr_paoyu:{name:"paoyu",fit:0.56,offset:[0,0.185],depth:0.44,bgDepth:-0.3}};function cE(J,Q,$,Z){let W=!1,H=-1,Y=document.createElement("canvas"),X=document.createElement("canvas"),K=Y.getContext("2d"),U=X.getContext("2d"),G=512,E=768;for(let[_,S]of[["background",Y],["subject",X]])S.width=G,S.height=E,S.dataset.layer=_,S.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;transform-origin:center;will-change:transform;backface-visibility:hidden";let q=(_)=>new Promise((S,C)=>{let T=new Image;T.onload=()=>S(T),T.onerror=C,T.src=_}),F=(_,S,C)=>{let T=Math.max(0,Math.min(1,(C-_)/(S-_)));return T*T*(3-2*T)},k=(_,S,C,T,b,z)=>1-F(0.25,1,Math.hypot((_-C)/b,(S-T)/z)),M,N,O,I,L=(_,S,C=0,T=0)=>{if(W||!O)return;if(Math.abs(_-H)<0.03333333333333333&&C===L.vx&&T===L.vy)return;H=_,L.vx=C,L.vy=T,K.clearRect(0,0,G,E),K.drawImage(O,0,0),K.save(),K.beginPath(),K.moveTo(0,0.588*E),K.lineTo(G,0.588*E),K.lineTo(G,0.778*E),K.lineTo(0.85*G,0.762*E),K.lineTo(0.4*G,0.676*E),K.lineTo(0,0.617*E),K.closePath(),K.clip();for(let P=0.588*E;P<0.79*E;P+=3){let h=P/E,l=S*G*(0.0022*Math.sin(h*205-_*1.9)+0.0007*Math.sin(h*371+_*1.1));K.drawImage(O,0,P,G,3,l,P,G,3)}K.restore();let b=[[0.77,0.136,0.29,0.205,0],[0.614,0.291,0.15,0.115,2.1],[0.9,0.335,0.14,0.115,4.4],[0.472,0.199,0.12,0.1,1.2]];for(let[P,h,l,d,o]of b)K.save(),K.beginPath(),K.ellipse(((P-0.5)*1.1+0.5)*G,((h-0.5)*1.1+0.5)*E,l*G,d*E,0,0,Math.PI*2),K.clip(),K.globalCompositeOperation="screen",K.globalAlpha=S*(0.03+0.32*(0.5+0.5*Math.sin(_*1.7+o))),K.drawImage(I,0,0),K.restore();U.clearRect(0,0,G,E);let z=[0,0.055,0.1,0.15,0.2,0.24,0.285,0.335,0.385,1],V=(P,h)=>{let l=k(P,h,0.17,0.645,0.14,0.115)*F(0.545,0.61,h)*(1-F(0.24,0.285,P)),d=k(P,h,0.15,0.837,0.24,0.074)*F(0.764,0.8,h)*(1-F(0.29,0.385,P));return S*G*(l*0.007*(Math.sin(_*1.65+h*12)+0.22*Math.sin(_*2.7+h*21))+d*0.0045*Math.sin(_*1.45+P*13))};for(let P=0;P<E;P+=3){let h=(P+1.5)/E;if(h<0.545||h>0.912){U.drawImage(N,0,P/E*N.height,N.width,3/E*N.height,0,P,G,3);continue}for(let l=0;l<z.length-1;l++){let d=z[l],o=z[l+1],c=d*G+V(d,h),a=o*G+V(o,h);U.drawImage(N,d*N.width,P/E*N.height,(o-d)*N.width,3/E*N.height,c,P,a-c,3)}}};return Promise.all([q(Q.background),q(Q.subject)]).then((_)=>{if(W)return;[M,N]=_,O=document.createElement("canvas"),O.width=G,O.height=E,O.getContext("2d").drawImage(M,-0.05*G,-0.05*E,1.1*G,1.1*E),I=document.createElement("canvas"),I.width=G,I.height=E;let S=I.getContext("2d");S.drawImage(O,0,0);let C=S.getImageData(0,0,G,E),T=C.data;for(let b=0;b<T.length;b+=4)T[b+3]=255*F(0.43,0.8,Math.max(T[b],T[b+1])/255)*F(0.015,0.13,(T[b]-T[b+2])/255);S.putImageData(C,0,0),J.querySelector('[data-layer="background"]').replaceWith(Y),J.querySelector('[data-layer="subject"]').replaceWith(X),L(0,1),$({background:Y,subject:X})}).catch((_)=>{if(!W)Z(_)}),{draw:L,dispose(){W=!0,Y.remove(),X.remove()}}}function nE(J,Q,$={}){let Z=Q.id==="nr_wenyu",W=(r)=>Z&&$.embeddedAssets?.[r]||new URL(r+"?v=20260922-4",$.assetBase||new URL("assets/nr-holographic/",document.baseURI).href).href,H=uE[Q.id],Y=!!H,X={background:Y?W(H.name+"-background.webp"):Q.icon,subject:Y?W(H.name+"-subject.webp"):null,text:W(Q.id+"-text.png")},K=new AbortController,U=matchMedia("(prefers-reduced-motion: reduce)"),G=!1,E=null,q=null,F=null,k=0,M=0,N=0,O=null,I=null,L=[],_=null,S=Z,C=Z,T=1,b="loading",z=U.matches,V=Z?0:-0.035,P=Z?0:-0.15,h=V,l=P,d=!1,o=!Z&&!U.matches,c={x:0,y:0},a=[],m=[],HJ=[],KJ=new V7,BJ=new m8(-3.6,3.6,5.15,-5.15,0.1,100);BJ.position.z=20;let dJ=new hJ,rJ=new j;J.tabIndex=0,J.setAttribute("role","img"),J.setAttribute("aria-label",Q.title+"、NR。"+Q.desc+"。ドラッグして光と奥行きを楽しめます。");let gJ=(r,NJ,DJ,XJ={})=>r.addEventListener(NJ,DJ,{...XJ,signal:K.signal});function u(){if(!G&&!k&&!document.hidden)k=requestAnimationFrame(AJ)}function ZJ(){if(G||O)return;if(E)E.domElement.remove(),E.dispose(),E=null;O=document.createElement("div"),O.className="nr-holo-fallback";for(let r of["background","subject","text"]){if(!X[r])continue;let NJ=new Image;NJ.src=X[r],NJ.alt="",NJ.draggable=!1,NJ.dataset.layer=r,O.append(NJ);let DJ=Y?{subject:H.depth,background:H.bgDepth,text:0}[r]||0:0,XJ=Y&&r==="subject"?H.offset:[0,0],sJ=Y?r==="subject"?H.fit:r==="background"?1.1:1:1;if(NJ.style.transform=`translate3d(${XJ[0]*100}%,${XJ[1]*100}%,0) scale(${sJ})`,DJ)L.push({img:NJ,depth:DJ,offset:XJ,scale:sJ})}if(I=document.createElement("span"),I.className="nr-holo-sheen",O.insertBefore(I,O.querySelector('[data-layer="text"]')),J.append(O),J.dataset.renderer="compatible",b="compatible",S=!1,J.classList.add("is-ready"),$.onReady?.(b),u(),Z)_=cE(O,X,(r)=>{for(let NJ of L){let DJ=NJ.img.dataset.layer;if(NJ.img=r[DJ],DJ==="background")NJ.scale=1}b="canvas2d",J.dataset.renderer=b,S=!0,$.onReady?.(b),u()},(r)=>{console.error("[Wenyu animation]",r),$.onReady?.("compatible")})}function QJ(){if(!E)return;let{clientWidth:r,clientHeight:NJ}=J;if(!r||!NJ)return;E.setSize(r,NJ,!1),BJ.left=-5.15*r/NJ,BJ.right=5.15*r/NJ,BJ.updateProjectionMatrix(),u()}function VJ(){if(z===U.matches)return;z=U.matches,S=Z,o=!Z&&!z,M=0,$.onMotionPreference?.(S)}function AJ(r){if(VJ(),k=0,G||document.hidden)return;let NJ=M?Math.min((r-M)/1000,0.06):0.016666666666666666;if(M=r,S&&C||o)N+=NJ;if(o)l=Math.sin(N*0.42)*0.32-0.055,h=Math.sin(N*0.53)*0.11-0.018;let DJ=d||U.matches?1:1-Math.exp(-NJ*24);if(V+=(h-V)*DJ,P+=(l-P)*DJ,Math.abs(h-V)<0.0001)V=h;if(Math.abs(l-P)<0.0001)P=l;if(q&&E)q.rotation.set(V,P,0),q.updateMatrixWorld(!0),F.uView.value.copy(BJ.position).applyMatrix4(dJ.copy(q.matrixWorld).invert()).normalize(),F.uTime.value=N,F.uMotion.value=C?T:0,E.render(KJ,BJ);else if(O){rJ.set(-Math.sin(P)*Math.cos(V),Math.sin(V),Math.cos(V)*Math.cos(P));let XJ=Math.max(Math.abs(rJ.z),0.4);O.style.transform=`perspective(950px) rotateX(${V}rad) rotateY(${P}rad)`,_?.draw(N,C?T:0,rJ.x,rJ.y);for(let{img:sJ,depth:zJ,offset:_J,scale:E0}of L)sJ.style.transform=`translate3d(${_J[0]*100-rJ.x/XJ*zJ*14}%,${_J[1]*100-rJ.y/XJ*zJ*14}%,0) scale(${E0})`;I.style.transform=`translate3d(${-rJ.x*65+rJ.y*32.5}%,0,0)`}if(S&&C||o||V!==h||P!==l)u()}gJ(J,"pointerdown",(r)=>{if(r.button!==0||!r.isPrimary)return;d=!0,o=!1,h=V,l=P,c={x:r.clientX,y:r.clientY},J.setPointerCapture(r.pointerId),J.classList.add("is-dragging"),u()}),gJ(J,"pointermove",(r)=>{if(!d||!r.isPrimary)return;l=g8.clamp(l+(r.clientX-c.x)*0.006,-0.65,0.65),h=g8.clamp(h+(r.clientY-c.y)*0.004,-0.36,0.36),c={x:r.clientX,y:r.clientY},u()});for(let r of["pointerup","pointercancel","lostpointercapture"])gJ(J,r,()=>{d=!1,J.classList.remove("is-dragging")});gJ(J,"keydown",(r)=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home"].includes(r.key))return;if(r.preventDefault(),o=!1,r.key==="Home")h=-0.035,l=-0.15;if(r.key==="ArrowLeft")l-=0.08;if(r.key==="ArrowRight")l+=0.08;if(r.key==="ArrowUp")h-=0.06;if(r.key==="ArrowDown")h+=0.06;h=g8.clamp(h,-0.36,0.36),l=g8.clamp(l,-0.65,0.65),u()}),gJ(U,"change",()=>{VJ(),u()}),gJ(document,"visibilitychange",()=>{cancelAnimationFrame(k),k=0,M=0,u()});async function SJ(){try{if(location.protocol==="file:"&&!$.embeddedAssets){ZJ();return}let r=document.createElement("canvas"),NJ=r.getContext("webgl2",{alpha:!0,antialias:!0,powerPreference:"default"});if(!NJ){ZJ();return}E=new h$({canvas:r,context:NJ,alpha:!0,antialias:!0}),E.setPixelRatio(Math.min(devicePixelRatio,1.75)),E.setClearColor(0,0),E.outputColorSpace=K8,E.toneMapping=J8,J.append(r),gJ(r,"webglcontextlost",(n)=>{n.preventDefault(),ZJ()});let DJ=new g9;async function XJ(n){let x=await DJ.loadAsync(n);if(G)throw x.dispose(),Error("closed");return x.colorSpace=_8,x.anisotropy=4,a.push(x),x}let sJ=new h9(new Uint8Array([0,0,0,0]),1,1);sJ.needsUpdate=!0,a.push(sJ);let zJ=new m$().loadAsync(W("card.glb")).then((n)=>{return n.scene.traverse((x)=>{if(x.isMesh){if(HJ.push(x.geometry),G)x.geometry.dispose();for(let OJ of Array.isArray(x.material)?x.material:[x.material])OJ.dispose()}}),n}),[_J,E0,q0,Y0,B]=await Promise.all([XJ(X.background),X.subject?XJ(X.subject):sJ,XJ(X.text),H?.line?XJ(W("wenyu-lineart.png")):sJ,zJ]);if(G){HJ.forEach((n)=>n.dispose());return}F={tSubject:{value:E0},tBackground:{value:_J},tText:{value:q0},tLine:{value:Y0},tEffects:{value:sJ},uTime:{value:0},uMotion:{value:Z?1:0},uFoil:{value:Z?0.35:0.6},uScale:{value:1},uDepth:{value:H?.depth||0},uBgDepth:{value:H?.bgDepth||0},uFinish:{value:0},uHasLine:{value:H?.line?1:0},uRelief:{value:0},uSafeScale:{value:1},uFxDepth:{value:0},uHasFx:{value:0},uFit:{value:new xJ(H?.fit||1,H?.fit||1)},uSubjectOffset:{value:new xJ(H?.offset[0]||0,-(H?.offset[1]||0))},uSafeOffset:{value:new xJ},uView:{value:new j(0,0,1)}};let R=(n)=>{let x=new n0({uniforms:F,vertexShader:dE,fragmentShader:n});return m.push(x),x},f=R(Y?rH:rH.replace("bu = (bu-.5)/1.10+.5;","")),s=R(mE);if(B.scene.traverse((n)=>{if(n.isMesh){let x=n.material.name;n.material=x==="web_front"?f:s}}),q=new d0,q.add(B.scene),KJ.add(q),q.rotation.set(V,P,0),QJ(),E.compile(KJ,BJ),E.render(KJ,BJ),E.info.programs.some((n)=>n.diagnostics&&!n.diagnostics.runnable))throw Error("shader");J.dataset.renderer="webgl",b="webgl",J.classList.add("is-ready"),$.onReady?.(b),u()}catch(r){if(console.error(r),!G)ZJ()}}let G0=new ResizeObserver(QJ);return G0.observe(J),SJ(),Object.assign(()=>{if(G=!0,K.abort(),cancelAnimationFrame(k),G0.disconnect(),a.forEach((r)=>r.dispose()),m.forEach((r)=>r.dispose()),HJ.forEach((r)=>r.dispose()),_?.dispose(),E)E.dispose(),E.forceContextLoss();J.replaceChildren(),J.classList.remove("is-ready","is-dragging"),delete J.dataset.renderer},{setPlaying(r){S=!!r,M=0,$.onPlaybackChange?.(S),u()},setMotion(r){C=!!r,M=0,u()},setIntensity(r){T=Math.max(0.4,Math.min(2,r)),u()},reset(){h=0,l=0,u()},seek(r){N=r,u()},getState(){return{mode:b,playing:S,motion:C,intensity:T,time:N,x:V,y:P,framesScheduled:!!k,reducedMotion:U.matches}}})}window.KikiNRRenderer={mount:nE,version:"20260922-8"};})();
