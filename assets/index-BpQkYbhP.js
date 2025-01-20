(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ws(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const K={},Ht=[],Le=()=>{},Xc=()=>!1,ur=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Is=t=>t.startsWith("onUpdate:"),te=Object.assign,Es=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qc=Object.prototype.hasOwnProperty,B=(t,e)=>Qc.call(t,e),N=Array.isArray,jt=t=>dr(t)==="[object Map]",Ro=t=>dr(t)==="[object Set]",L=t=>typeof t=="function",Z=t=>typeof t=="string",ht=t=>typeof t=="symbol",X=t=>t!==null&&typeof t=="object",Po=t=>(X(t)||L(t))&&L(t.then)&&L(t.catch),Oo=Object.prototype.toString,dr=t=>Oo.call(t),Zc=t=>dr(t).slice(8,-1),ko=t=>dr(t)==="[object Object]",Ts=t=>Z(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cn=ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},el=/-(\w)/g,ft=fr(t=>t.replace(el,(e,n)=>n?n.toUpperCase():"")),tl=/\B([A-Z])/g,Mt=fr(t=>t.replace(tl,"-$1").toLowerCase()),Do=fr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pr=fr(t=>t?`on${Do(t)}`:""),lt=(t,e)=>!Object.is(t,e),Bn=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},No=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Qr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fi;const hr=()=>fi||(fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ss(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Z(r)?il(r):Ss(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Z(t)||X(t))return t}const nl=/;(?![^(]*\))/g,rl=/:([^]+)/,sl=/\/\*[^]*?\*\//g;function il(t){const e={};return t.replace(sl,"").split(nl).forEach(n=>{if(n){const r=n.split(rl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function As(t){let e="";if(Z(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const r=As(t[n]);r&&(e+=r+" ")}else if(X(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ol="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",al=ws(ol);function Mo(t){return!!t||t===""}const Lo=t=>!!(t&&t.__v_isRef===!0),At=t=>Z(t)?t:t==null?"":N(t)||X(t)&&(t.toString===Oo||!L(t.toString))?Lo(t)?At(t.value):JSON.stringify(t,xo,2):String(t),xo=(t,e)=>Lo(e)?xo(t,e.value):jt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Or(r,i)+" =>"]=s,n),{})}:Ro(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Or(n))}:ht(e)?Or(e):X(e)&&!N(e)&&!ko(e)?String(e):e,Or=(t,e="")=>{var n;return ht(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ve;class cl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ve,!e&&ve&&(this.index=(ve.scopes||(ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ve;try{return ve=this,e()}finally{ve=n}}}on(){ve=this}off(){ve=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ll(){return ve}let q;const kr=new WeakSet;class Uo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ve&&ve.active&&ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,kr.has(this)&&(kr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$o(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hi(this),Bo(this);const e=q,n=Ae;q=this,Ae=!0;try{return this.fn()}finally{Ho(this),q=e,Ae=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ps(e);this.deps=this.depsTail=void 0,hi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?kr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zr(this)&&this.run()}get dirty(){return Zr(this)}}let Fo=0,ln,un;function $o(t,e=!1){if(t.flags|=8,e){t.next=un,un=t;return}t.next=ln,ln=t}function Cs(){Fo++}function Rs(){if(--Fo>0)return;if(un){let e=un;for(un=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ln;){let e=ln;for(ln=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Bo(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ho(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ps(r),ul(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Zr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jo(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jo(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===mn))return;t.globalVersion=mn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Zr(t)){t.flags&=-3;return}const n=q,r=Ae;q=t,Ae=!0;try{Bo(t);const s=t.fn(t._value);(e.version===0||lt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{q=n,Ae=r,Ho(t),t.flags&=-3}}function Ps(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ps(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ul(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ae=!0;const Vo=[];function pt(){Vo.push(Ae),Ae=!1}function gt(){const t=Vo.pop();Ae=t===void 0?!0:t}function hi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=q;q=void 0;try{e()}finally{q=n}}}let mn=0;class dl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Os{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!q||!Ae||q===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==q)n=this.activeLink=new dl(q,this),q.deps?(n.prevDep=q.depsTail,q.depsTail.nextDep=n,q.depsTail=n):q.deps=q.depsTail=n,Wo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=q.depsTail,n.nextDep=void 0,q.depsTail.nextDep=n,q.depsTail=n,q.deps===n&&(q.deps=r)}return n}trigger(e){this.version++,mn++,this.notify(e)}notify(e){Cs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rs()}}}function Wo(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Wo(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const es=new WeakMap,Ct=Symbol(""),ts=Symbol(""),_n=Symbol("");function re(t,e,n){if(Ae&&q){let r=es.get(t);r||es.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Os),s.map=r,s.key=n),s.track()}}function Ke(t,e,n,r,s,i){const o=es.get(t);if(!o){mn++;return}const a=c=>{c&&c.trigger()};if(Cs(),e==="clear")o.forEach(a);else{const c=N(t),l=c&&Ts(n);if(c&&n==="length"){const d=Number(r);o.forEach((h,v)=>{(v==="length"||v===_n||!ht(v)&&v>=d)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(_n)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Ct)),jt(t)&&a(o.get(ts)));break;case"delete":c||(a(o.get(Ct)),jt(t)&&a(o.get(ts)));break;case"set":jt(t)&&a(o.get(Ct));break}}Rs()}function Ut(t){const e=$(t);return e===t?e:(re(e,"iterate",_n),Ie(t)?e:e.map(se))}function pr(t){return re(t=$(t),"iterate",_n),t}const fl={__proto__:null,[Symbol.iterator](){return Dr(this,Symbol.iterator,se)},concat(...t){return Ut(this).concat(...t.map(e=>N(e)?Ut(e):e))},entries(){return Dr(this,"entries",t=>(t[1]=se(t[1]),t))},every(t,e){return Ve(this,"every",t,e,void 0,arguments)},filter(t,e){return Ve(this,"filter",t,e,n=>n.map(se),arguments)},find(t,e){return Ve(this,"find",t,e,se,arguments)},findIndex(t,e){return Ve(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ve(this,"findLast",t,e,se,arguments)},findLastIndex(t,e){return Ve(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ve(this,"forEach",t,e,void 0,arguments)},includes(...t){return Nr(this,"includes",t)},indexOf(...t){return Nr(this,"indexOf",t)},join(t){return Ut(this).join(t)},lastIndexOf(...t){return Nr(this,"lastIndexOf",t)},map(t,e){return Ve(this,"map",t,e,void 0,arguments)},pop(){return nn(this,"pop")},push(...t){return nn(this,"push",t)},reduce(t,...e){return pi(this,"reduce",t,e)},reduceRight(t,...e){return pi(this,"reduceRight",t,e)},shift(){return nn(this,"shift")},some(t,e){return Ve(this,"some",t,e,void 0,arguments)},splice(...t){return nn(this,"splice",t)},toReversed(){return Ut(this).toReversed()},toSorted(t){return Ut(this).toSorted(t)},toSpliced(...t){return Ut(this).toSpliced(...t)},unshift(...t){return nn(this,"unshift",t)},values(){return Dr(this,"values",se)}};function Dr(t,e,n){const r=pr(t),s=r[e]();return r!==t&&!Ie(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const hl=Array.prototype;function Ve(t,e,n,r,s,i){const o=pr(t),a=o!==t&&!Ie(t),c=o[e];if(c!==hl[e]){const h=c.apply(t,i);return a?se(h):h}let l=n;o!==t&&(a?l=function(h,v){return n.call(this,se(h),v,t)}:n.length>2&&(l=function(h,v){return n.call(this,h,v,t)}));const d=c.call(o,l,r);return a&&s?s(d):d}function pi(t,e,n,r){const s=pr(t);let i=n;return s!==t&&(Ie(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,se(a),c,t)}),s[e](i,...r)}function Nr(t,e,n){const r=$(t);re(r,"iterate",_n);const s=r[e](...n);return(s===-1||s===!1)&&Ms(n[0])?(n[0]=$(n[0]),r[e](...n)):s}function nn(t,e,n=[]){pt(),Cs();const r=$(t)[e].apply(t,n);return Rs(),gt(),r}const pl=ws("__proto__,__v_isRef,__isVue"),Ko=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ht));function gl(t){ht(t)||(t=String(t));const e=$(this);return re(e,"has",t),e.hasOwnProperty(t)}class Go{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Sl:Yo:i?Jo:qo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=N(e);if(!s){let c;if(o&&(c=fl[n]))return c;if(n==="hasOwnProperty")return gl}const a=Reflect.get(e,n,ie(e)?e:r);return(ht(n)?Ko.has(n):pl(n))||(s||re(e,"get",n),i)?a:ie(a)?o&&Ts(n)?a:a.value:X(a)?s?Xo(a):Ds(a):a}}class zo extends Go{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Rt(i);if(!Ie(r)&&!Rt(r)&&(i=$(i),r=$(r)),!N(e)&&ie(i)&&!ie(r))return c?!1:(i.value=r,!0)}const o=N(e)&&Ts(n)?Number(n)<e.length:B(e,n),a=Reflect.set(e,n,r,ie(e)?e:s);return e===$(s)&&(o?lt(r,i)&&Ke(e,"set",n,r):Ke(e,"add",n,r)),a}deleteProperty(e,n){const r=B(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ke(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ht(n)||!Ko.has(n))&&re(e,"has",n),r}ownKeys(e){return re(e,"iterate",N(e)?"length":Ct),Reflect.ownKeys(e)}}class ml extends Go{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _l=new zo,vl=new ml,yl=new zo(!0);const ns=t=>t,xn=t=>Reflect.getPrototypeOf(t);function bl(t,e,n){return function(...r){const s=this.__v_raw,i=$(s),o=jt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),d=n?ns:e?rs:se;return!e&&re(i,"iterate",c?ts:Ct),{next(){const{value:h,done:v}=l.next();return v?{value:h,done:v}:{value:a?[d(h[0]),d(h[1])]:d(h),done:v}},[Symbol.iterator](){return this}}}}function Un(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function wl(t,e){const n={get(s){const i=this.__v_raw,o=$(i),a=$(s);t||(lt(s,a)&&re(o,"get",s),re(o,"get",a));const{has:c}=xn(o),l=e?ns:t?rs:se;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&re($(s),"iterate",Ct),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=$(i),a=$(s);return t||(lt(s,a)&&re(o,"has",s),re(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=$(a),l=e?ns:t?rs:se;return!t&&re(c,"iterate",Ct),a.forEach((d,h)=>s.call(i,l(d),l(h),o))}};return te(n,t?{add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear")}:{add(s){!e&&!Ie(s)&&!Rt(s)&&(s=$(s));const i=$(this);return xn(i).has.call(i,s)||(i.add(s),Ke(i,"add",s,s)),this},set(s,i){!e&&!Ie(i)&&!Rt(i)&&(i=$(i));const o=$(this),{has:a,get:c}=xn(o);let l=a.call(o,s);l||(s=$(s),l=a.call(o,s));const d=c.call(o,s);return o.set(s,i),l?lt(i,d)&&Ke(o,"set",s,i):Ke(o,"add",s,i),this},delete(s){const i=$(this),{has:o,get:a}=xn(i);let c=o.call(i,s);c||(s=$(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&Ke(i,"delete",s,void 0),l},clear(){const s=$(this),i=s.size!==0,o=s.clear();return i&&Ke(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=bl(s,t,e)}),n}function ks(t,e){const n=wl(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(B(n,s)&&s in r?n:r,s,i)}const Il={get:ks(!1,!1)},El={get:ks(!1,!0)},Tl={get:ks(!0,!1)};const qo=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,Sl=new WeakMap;function Al(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cl(t){return t.__v_skip||!Object.isExtensible(t)?0:Al(Zc(t))}function Ds(t){return Rt(t)?t:Ns(t,!1,_l,Il,qo)}function Rl(t){return Ns(t,!1,yl,El,Jo)}function Xo(t){return Ns(t,!0,vl,Tl,Yo)}function Ns(t,e,n,r,s){if(!X(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Cl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Vt(t){return Rt(t)?Vt(t.__v_raw):!!(t&&t.__v_isReactive)}function Rt(t){return!!(t&&t.__v_isReadonly)}function Ie(t){return!!(t&&t.__v_isShallow)}function Ms(t){return t?!!t.__v_raw:!1}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function Pl(t){return!B(t,"__v_skip")&&Object.isExtensible(t)&&No(t,"__v_skip",!0),t}const se=t=>X(t)?Ds(t):t,rs=t=>X(t)?Xo(t):t;function ie(t){return t?t.__v_isRef===!0:!1}function ee(t){return Ol(t,!1)}function Ol(t,e){return ie(t)?t:new kl(t,e)}class kl{constructor(e,n){this.dep=new Os,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:$(e),this._value=n?e:se(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ie(e)||Rt(e);e=r?e:$(e),lt(e,n)&&(this._rawValue=e,this._value=r?e:se(e),this.dep.trigger())}}function Dl(t){return ie(t)?t.value:t}const Nl={get:(t,e,n)=>e==="__v_raw"?t:Dl(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ie(s)&&!ie(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qo(t){return Vt(t)?t:new Proxy(t,Nl)}class Ml{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Os(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&q!==this)return $o(this,!0),!0}get value(){const e=this.dep.track();return jo(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ll(t,e,n=!1){let r,s;return L(t)?r=t:(r=t.get,s=t.set),new Ml(r,s,n)}const Fn={},qn=new WeakMap;let Et;function xl(t,e=!1,n=Et){if(n){let r=qn.get(n);r||qn.set(n,r=[]),r.push(t)}}function Ul(t,e,n=K){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>s?O:Ie(O)||s===!1||s===0?Ge(O,1):Ge(O);let d,h,v,g,w=!1,T=!1;if(ie(t)?(h=()=>t.value,w=Ie(t)):Vt(t)?(h=()=>l(t),w=!0):N(t)?(T=!0,w=t.some(O=>Vt(O)||Ie(O)),h=()=>t.map(O=>{if(ie(O))return O.value;if(Vt(O))return l(O);if(L(O))return c?c(O,2):O()})):L(t)?e?h=c?()=>c(t,2):t:h=()=>{if(v){pt();try{v()}finally{gt()}}const O=Et;Et=d;try{return c?c(t,3,[g]):t(g)}finally{Et=O}}:h=Le,e&&s){const O=h,Q=s===!0?1/0:s;h=()=>Ge(O(),Q)}const M=ll(),U=()=>{d.stop(),M&&M.active&&Es(M.effects,d)};if(i&&e){const O=e;e=(...Q)=>{O(...Q),U()}}let x=T?new Array(t.length).fill(Fn):Fn;const j=O=>{if(!(!(d.flags&1)||!d.dirty&&!O))if(e){const Q=d.run();if(s||w||(T?Q.some((be,he)=>lt(be,x[he])):lt(Q,x))){v&&v();const be=Et;Et=d;try{const he=[Q,x===Fn?void 0:T&&x[0]===Fn?[]:x,g];c?c(e,3,he):e(...he),x=Q}finally{Et=be}}}else d.run()};return a&&a(j),d=new Uo(h),d.scheduler=o?()=>o(j,!1):j,g=O=>xl(O,!1,d),v=d.onStop=()=>{const O=qn.get(d);if(O){if(c)c(O,4);else for(const Q of O)Q();qn.delete(d)}},e?r?j(!0):x=d.run():o?o(j.bind(null,!0),!0):d.run(),U.pause=d.pause.bind(d),U.resume=d.resume.bind(d),U.stop=U,U}function Ge(t,e=1/0,n){if(e<=0||!X(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ie(t))Ge(t.value,e,n);else if(N(t))for(let r=0;r<t.length;r++)Ge(t[r],e,n);else if(Ro(t)||jt(t))t.forEach(r=>{Ge(r,e,n)});else if(ko(t)){for(const r in t)Ge(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ge(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tn(t,e,n,r){try{return r?t(...r):t()}catch(s){gr(s,e,n)}}function $e(t,e,n,r){if(L(t)){const s=Tn(t,e,n,r);return s&&Po(s)&&s.catch(i=>{gr(i,e,n)}),s}if(N(t)){const s=[];for(let i=0;i<t.length;i++)s.push($e(t[i],e,n,r));return s}}function gr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||K;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const d=a.ec;if(d){for(let h=0;h<d.length;h++)if(d[h](t,c,l)===!1)return}a=a.parent}if(i){pt(),Tn(i,null,10,[t,c,l]),gt();return}}Fl(t,n,s,r,o)}function Fl(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const ce=[];let De=-1;const Wt=[];let rt=null,Ft=0;const Zo=Promise.resolve();let Jn=null;function $l(t){const e=Jn||Zo;return t?e.then(this?t.bind(this):t):e}function Bl(t){let e=De+1,n=ce.length;for(;e<n;){const r=e+n>>>1,s=ce[r],i=vn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ls(t){if(!(t.flags&1)){const e=vn(t),n=ce[ce.length-1];!n||!(t.flags&2)&&e>=vn(n)?ce.push(t):ce.splice(Bl(e),0,t),t.flags|=1,ea()}}function ea(){Jn||(Jn=Zo.then(na))}function Hl(t){N(t)?Wt.push(...t):rt&&t.id===-1?rt.splice(Ft+1,0,t):t.flags&1||(Wt.push(t),t.flags|=1),ea()}function gi(t,e,n=De+1){for(;n<ce.length;n++){const r=ce[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ce.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ta(t){if(Wt.length){const e=[...new Set(Wt)].sort((n,r)=>vn(n)-vn(r));if(Wt.length=0,rt){rt.push(...e);return}for(rt=e,Ft=0;Ft<rt.length;Ft++){const n=rt[Ft];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}rt=null,Ft=0}}const vn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function na(t){try{for(De=0;De<ce.length;De++){const e=ce[De];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Tn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;De<ce.length;De++){const e=ce[De];e&&(e.flags&=-2)}De=-1,ce.length=0,ta(),Jn=null,(ce.length||Wt.length)&&na()}}let we=null,ra=null;function Yn(t){const e=we;return we=t,ra=t&&t.type.__scopeId||null,e}function jl(t,e=we,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ei(-1);const i=Yn(e);let o;try{o=t(...s)}finally{Yn(i),r._d&&Ei(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Xn(t,e){if(we===null)return t;const n=br(we),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=K]=e[s];i&&(L(i)&&(i={mounted:i,updated:i}),i.deep&&Ge(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function wt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(pt(),$e(c,n,8,[t.el,a,t,e]),gt())}}const Vl=Symbol("_vte"),Wl=t=>t.__isTeleport;function xs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sa(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qn(t,e,n,r,s=!1){if(N(t)){t.forEach((w,T)=>Qn(w,e&&(N(e)?e[T]:e),n,r,s));return}if(dn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qn(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?br(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,d=a.refs===K?a.refs={}:a.refs,h=a.setupState,v=$(h),g=h===K?()=>!1:w=>B(v,w);if(l!=null&&l!==c&&(Z(l)?(d[l]=null,g(l)&&(h[l]=null)):ie(l)&&(l.value=null)),L(c))Tn(c,a,12,[o,d]);else{const w=Z(c),T=ie(c);if(w||T){const M=()=>{if(t.f){const U=w?g(c)?h[c]:d[c]:c.value;s?N(U)&&Es(U,i):N(U)?U.includes(i)||U.push(i):w?(d[c]=[i],g(c)&&(h[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else w?(d[c]=o,g(c)&&(h[c]=o)):T&&(c.value=o,t.k&&(d[t.k]=o))};o?(M.id=-1,_e(M,n)):M()}}}hr().requestIdleCallback;hr().cancelIdleCallback;const dn=t=>!!t.type.__asyncLoader,ia=t=>t.type.__isKeepAlive;function Kl(t,e){oa(t,"a",e)}function Gl(t,e){oa(t,"da",e)}function oa(t,e,n=ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(mr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ia(s.parent.vnode)&&zl(r,e,n,s),s=s.parent}}function zl(t,e,n,r){const s=mr(e,t,r,!0);aa(()=>{Es(r[e],s)},n)}function mr(t,e,n=ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{pt();const a=Sn(n),c=$e(e,n,t,o);return a(),gt(),c});return r?s.unshift(i):s.push(i),i}}const et=t=>(e,n=ue)=>{(!bn||t==="sp")&&mr(t,(...r)=>e(...r),n)},ql=et("bm"),_r=et("m"),Jl=et("bu"),Yl=et("u"),Xl=et("bum"),aa=et("um"),Ql=et("sp"),Zl=et("rtg"),eu=et("rtc");function tu(t,e=ue){mr("ec",t,e)}const nu=Symbol.for("v-ndc");function Kt(t,e,n,r){let s;const i=n,o=N(t);if(o||Z(t)){const a=o&&Vt(t);let c=!1;a&&(c=!Ie(t),t=pr(t)),s=new Array(t.length);for(let l=0,d=t.length;l<d;l++)s[l]=e(c?se(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(X(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const d=a[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const ss=t=>t?Ra(t)?br(t):ss(t.parent):null,fn=te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ss(t.parent),$root:t=>ss(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Us(t),$forceUpdate:t=>t.f||(t.f=()=>{Ls(t.update)}),$nextTick:t=>t.n||(t.n=$l.bind(t.proxy)),$watch:t=>Tu.bind(t)}),Mr=(t,e)=>t!==K&&!t.__isScriptSetup&&B(t,e),ru={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Mr(r,e))return o[e]=1,r[e];if(s!==K&&B(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&B(l,e))return o[e]=3,i[e];if(n!==K&&B(n,e))return o[e]=4,n[e];is&&(o[e]=0)}}const d=fn[e];let h,v;if(d)return e==="$attrs"&&re(t.attrs,"get",""),d(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==K&&B(n,e))return o[e]=4,n[e];if(v=c.config.globalProperties,B(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Mr(s,e)?(s[e]=n,!0):r!==K&&B(r,e)?(r[e]=n,!0):B(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==K&&B(t,o)||Mr(e,o)||(a=i[0])&&B(a,o)||B(r,o)||B(fn,o)||B(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:B(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mi(t){return N(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let is=!0;function su(t){const e=Us(t),n=t.proxy,r=t.ctx;is=!1,e.beforeCreate&&_i(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:d,beforeMount:h,mounted:v,beforeUpdate:g,updated:w,activated:T,deactivated:M,beforeDestroy:U,beforeUnmount:x,destroyed:j,unmounted:O,render:Q,renderTracked:be,renderTriggered:he,errorCaptured:Re,serverPrefetch:tt,expose:je,inheritAttrs:Qt,components:Dn,directives:Nn,filters:Cr}=e;if(l&&iu(l,r,null),o)for(const Y in o){const G=o[Y];L(G)&&(r[Y]=G.bind(n))}if(s){const Y=s.call(n,n);X(Y)&&(t.data=Ds(Y))}if(is=!0,i)for(const Y in i){const G=i[Y],yt=L(G)?G.bind(n,n):L(G.get)?G.get.bind(n,n):Le,Mn=!L(G)&&L(G.set)?G.set.bind(n):Le,bt=Bs({get:yt,set:Mn});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>bt.value,set:Pe=>bt.value=Pe})}if(a)for(const Y in a)ca(a[Y],r,n,Y);if(c){const Y=L(c)?c.call(n):c;Reflect.ownKeys(Y).forEach(G=>{du(G,Y[G])})}d&&_i(d,t,"c");function oe(Y,G){N(G)?G.forEach(yt=>Y(yt.bind(n))):G&&Y(G.bind(n))}if(oe(ql,h),oe(_r,v),oe(Jl,g),oe(Yl,w),oe(Kl,T),oe(Gl,M),oe(tu,Re),oe(eu,be),oe(Zl,he),oe(Xl,x),oe(aa,O),oe(Ql,tt),N(je))if(je.length){const Y=t.exposed||(t.exposed={});je.forEach(G=>{Object.defineProperty(Y,G,{get:()=>n[G],set:yt=>n[G]=yt})})}else t.exposed||(t.exposed={});Q&&t.render===Le&&(t.render=Q),Qt!=null&&(t.inheritAttrs=Qt),Dn&&(t.components=Dn),Nn&&(t.directives=Nn),tt&&sa(t)}function iu(t,e,n=Le){N(t)&&(t=os(t));for(const r in t){const s=t[r];let i;X(s)?"default"in s?i=Hn(s.from||r,s.default,!0):i=Hn(s.from||r):i=Hn(s),ie(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function _i(t,e,n){$e(N(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ca(t,e,n,r){let s=r.includes(".")?Ia(n,r):()=>n[r];if(Z(t)){const i=e[t];L(i)&&xr(s,i)}else if(L(t))xr(s,t.bind(n));else if(X(t))if(N(t))t.forEach(i=>ca(i,e,n,r));else{const i=L(t.handler)?t.handler.bind(n):e[t.handler];L(i)&&xr(s,i,t)}}function Us(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Zn(c,l,o,!0)),Zn(c,e,o)),X(e)&&i.set(e,c),c}function Zn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Zn(t,i,n,!0),s&&s.forEach(o=>Zn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ou[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ou={data:vi,props:yi,emits:yi,methods:sn,computed:sn,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:sn,directives:sn,watch:cu,provide:vi,inject:au};function vi(t,e){return e?t?function(){return te(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function au(t,e){return sn(os(t),os(e))}function os(t){if(N(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ae(t,e){return t?[...new Set([].concat(t,e))]:e}function sn(t,e){return t?te(Object.create(null),t,e):e}function yi(t,e){return t?N(t)&&N(e)?[...new Set([...t,...e])]:te(Object.create(null),mi(t),mi(e??{})):e}function cu(t,e){if(!t)return e;if(!e)return t;const n=te(Object.create(null),t);for(const r in e)n[r]=ae(t[r],e[r]);return n}function la(){return{app:null,config:{isNativeTag:Xc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lu=0;function uu(t,e){return function(r,s=null){L(r)||(r=te({},r)),s!=null&&!X(s)&&(s=null);const i=la(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:lu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Gu,get config(){return i.config},set config(d){},use(d,...h){return o.has(d)||(d&&L(d.install)?(o.add(d),d.install(l,...h)):L(d)&&(o.add(d),d(l,...h))),l},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),l},component(d,h){return h?(i.components[d]=h,l):i.components[d]},directive(d,h){return h?(i.directives[d]=h,l):i.directives[d]},mount(d,h,v){if(!c){const g=l._ceVNode||Ee(r,s);return g.appContext=i,v===!0?v="svg":v===!1&&(v=void 0),h&&e?e(g,d):t(g,d,v),c=!0,l._container=d,d.__vue_app__=l,br(g.component)}},onUnmount(d){a.push(d)},unmount(){c&&($e(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(d,h){return i.provides[d]=h,l},runWithContext(d){const h=Gt;Gt=l;try{return d()}finally{Gt=h}}};return l}}let Gt=null;function du(t,e){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[t]=e}}function Hn(t,e,n=!1){const r=ue||we;if(r||Gt){const s=Gt?Gt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&L(e)?e.call(r&&r.proxy):e}}const ua={},da=()=>Object.create(ua),fa=t=>Object.getPrototypeOf(t)===ua;function fu(t,e,n,r=!1){const s={},i=da();t.propsDefaults=Object.create(null),ha(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Rl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function hu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=$(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let v=d[h];if(vr(t.emitsOptions,v))continue;const g=e[v];if(c)if(B(i,v))g!==i[v]&&(i[v]=g,l=!0);else{const w=ft(v);s[w]=as(c,a,w,g,t,!1)}else g!==i[v]&&(i[v]=g,l=!0)}}}else{ha(t,e,s,i)&&(l=!0);let d;for(const h in a)(!e||!B(e,h)&&((d=Mt(h))===h||!B(e,d)))&&(c?n&&(n[h]!==void 0||n[d]!==void 0)&&(s[h]=as(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!B(e,h))&&(delete i[h],l=!0)}l&&Ke(t.attrs,"set","")}function ha(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(cn(c))continue;const l=e[c];let d;s&&B(s,d=ft(c))?!i||!i.includes(d)?n[d]=l:(a||(a={}))[d]=l:vr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=$(n),l=a||K;for(let d=0;d<i.length;d++){const h=i[d];n[h]=as(s,c,h,l[h],t,!B(l,h))}}return o}function as(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=B(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&L(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const d=Sn(s);r=l[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Mt(n))&&(r=!0))}return r}const pu=new WeakMap;function pa(t,e,n=!1){const r=n?pu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!L(t)){const d=h=>{c=!0;const[v,g]=pa(h,e,!0);te(o,v),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return X(t)&&r.set(t,Ht),Ht;if(N(i))for(let d=0;d<i.length;d++){const h=ft(i[d]);bi(h)&&(o[h]=K)}else if(i)for(const d in i){const h=ft(d);if(bi(h)){const v=i[d],g=o[h]=N(v)||L(v)?{type:v}:te({},v),w=g.type;let T=!1,M=!0;if(N(w))for(let U=0;U<w.length;++U){const x=w[U],j=L(x)&&x.name;if(j==="Boolean"){T=!0;break}else j==="String"&&(M=!1)}else T=L(w)&&w.name==="Boolean";g[0]=T,g[1]=M,(T||B(g,"default"))&&a.push(h)}}const l=[o,a];return X(t)&&r.set(t,l),l}function bi(t){return t[0]!=="$"&&!cn(t)}const ga=t=>t[0]==="_"||t==="$stable",Fs=t=>N(t)?t.map(Ne):[Ne(t)],gu=(t,e,n)=>{if(e._n)return e;const r=jl((...s)=>Fs(e(...s)),n);return r._c=!1,r},ma=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ga(s))continue;const i=t[s];if(L(i))e[s]=gu(s,i,r);else if(i!=null){const o=Fs(i);e[s]=()=>o}}},_a=(t,e)=>{const n=Fs(e);t.slots.default=()=>n},va=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},mu=(t,e,n)=>{const r=t.slots=da();if(t.vnode.shapeFlag&32){const s=e._;s?(va(r,e,n),n&&No(r,"_",s,!0)):ma(e,r)}else e&&_a(t,e)},_u=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=K;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:va(s,e,n):(i=!e.$stable,ma(e,s)),o=e}else e&&(_a(t,e),o={default:1});if(i)for(const a in s)!ga(a)&&o[a]==null&&delete s[a]},_e=ku;function vu(t){return yu(t)}function yu(t,e){const n=hr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:d,parentNode:h,nextSibling:v,setScopeId:g=Le,insertStaticContent:w}=t,T=(u,f,p,y=null,m=null,_=null,S=void 0,E=null,I=!!f.dynamicChildren)=>{if(u===f)return;u&&!rn(u,f)&&(y=Ln(u),Pe(u,m,_,!0),u=null),f.patchFlag===-2&&(I=!1,f.dynamicChildren=null);const{type:b,ref:P,shapeFlag:A}=f;switch(b){case yr:M(u,f,p,y);break;case Pt:U(u,f,p,y);break;case Fr:u==null&&x(f,p,y,S);break;case le:Dn(u,f,p,y,m,_,S,E,I);break;default:A&1?Q(u,f,p,y,m,_,S,E,I):A&6?Nn(u,f,p,y,m,_,S,E,I):(A&64||A&128)&&b.process(u,f,p,y,m,_,S,E,I,en)}P!=null&&m&&Qn(P,u&&u.ref,_,f||u,!f)},M=(u,f,p,y)=>{if(u==null)r(f.el=a(f.children),p,y);else{const m=f.el=u.el;f.children!==u.children&&l(m,f.children)}},U=(u,f,p,y)=>{u==null?r(f.el=c(f.children||""),p,y):f.el=u.el},x=(u,f,p,y)=>{[u.el,u.anchor]=w(u.children,f,p,y,u.el,u.anchor)},j=({el:u,anchor:f},p,y)=>{let m;for(;u&&u!==f;)m=v(u),r(u,p,y),u=m;r(f,p,y)},O=({el:u,anchor:f})=>{let p;for(;u&&u!==f;)p=v(u),s(u),u=p;s(f)},Q=(u,f,p,y,m,_,S,E,I)=>{f.type==="svg"?S="svg":f.type==="math"&&(S="mathml"),u==null?be(f,p,y,m,_,S,E,I):tt(u,f,m,_,S,E,I)},be=(u,f,p,y,m,_,S,E)=>{let I,b;const{props:P,shapeFlag:A,transition:R,dirs:D}=u;if(I=u.el=o(u.type,_,P&&P.is,P),A&8?d(I,u.children):A&16&&Re(u.children,I,null,y,m,Lr(u,_),S,E),D&&wt(u,null,y,"created"),he(I,u,u.scopeId,S,y),P){for(const z in P)z!=="value"&&!cn(z)&&i(I,z,null,P[z],_,y);"value"in P&&i(I,"value",null,P.value,_),(b=P.onVnodeBeforeMount)&&ke(b,y,u)}D&&wt(u,null,y,"beforeMount");const F=bu(m,R);F&&R.beforeEnter(I),r(I,f,p),((b=P&&P.onVnodeMounted)||F||D)&&_e(()=>{b&&ke(b,y,u),F&&R.enter(I),D&&wt(u,null,y,"mounted")},m)},he=(u,f,p,y,m)=>{if(p&&g(u,p),y)for(let _=0;_<y.length;_++)g(u,y[_]);if(m){let _=m.subTree;if(f===_||Ta(_.type)&&(_.ssContent===f||_.ssFallback===f)){const S=m.vnode;he(u,S,S.scopeId,S.slotScopeIds,m.parent)}}},Re=(u,f,p,y,m,_,S,E,I=0)=>{for(let b=I;b<u.length;b++){const P=u[b]=E?st(u[b]):Ne(u[b]);T(null,P,f,p,y,m,_,S,E)}},tt=(u,f,p,y,m,_,S)=>{const E=f.el=u.el;let{patchFlag:I,dynamicChildren:b,dirs:P}=f;I|=u.patchFlag&16;const A=u.props||K,R=f.props||K;let D;if(p&&It(p,!1),(D=R.onVnodeBeforeUpdate)&&ke(D,p,f,u),P&&wt(f,u,p,"beforeUpdate"),p&&It(p,!0),(A.innerHTML&&R.innerHTML==null||A.textContent&&R.textContent==null)&&d(E,""),b?je(u.dynamicChildren,b,E,p,y,Lr(f,m),_):S||G(u,f,E,null,p,y,Lr(f,m),_,!1),I>0){if(I&16)Qt(E,A,R,p,m);else if(I&2&&A.class!==R.class&&i(E,"class",null,R.class,m),I&4&&i(E,"style",A.style,R.style,m),I&8){const F=f.dynamicProps;for(let z=0;z<F.length;z++){const H=F[z],pe=A[H],ne=R[H];(ne!==pe||H==="value")&&i(E,H,pe,ne,m,p)}}I&1&&u.children!==f.children&&d(E,f.children)}else!S&&b==null&&Qt(E,A,R,p,m);((D=R.onVnodeUpdated)||P)&&_e(()=>{D&&ke(D,p,f,u),P&&wt(f,u,p,"updated")},y)},je=(u,f,p,y,m,_,S)=>{for(let E=0;E<f.length;E++){const I=u[E],b=f[E],P=I.el&&(I.type===le||!rn(I,b)||I.shapeFlag&70)?h(I.el):p;T(I,b,P,null,y,m,_,S,!0)}},Qt=(u,f,p,y,m)=>{if(f!==p){if(f!==K)for(const _ in f)!cn(_)&&!(_ in p)&&i(u,_,f[_],null,m,y);for(const _ in p){if(cn(_))continue;const S=p[_],E=f[_];S!==E&&_!=="value"&&i(u,_,E,S,m,y)}"value"in p&&i(u,"value",f.value,p.value,m)}},Dn=(u,f,p,y,m,_,S,E,I)=>{const b=f.el=u?u.el:a(""),P=f.anchor=u?u.anchor:a("");let{patchFlag:A,dynamicChildren:R,slotScopeIds:D}=f;D&&(E=E?E.concat(D):D),u==null?(r(b,p,y),r(P,p,y),Re(f.children||[],p,P,m,_,S,E,I)):A>0&&A&64&&R&&u.dynamicChildren?(je(u.dynamicChildren,R,p,m,_,S,E),(f.key!=null||m&&f===m.subTree)&&ya(u,f,!0)):G(u,f,p,P,m,_,S,E,I)},Nn=(u,f,p,y,m,_,S,E,I)=>{f.slotScopeIds=E,u==null?f.shapeFlag&512?m.ctx.activate(f,p,y,S,I):Cr(f,p,y,m,_,S,I):ii(u,f,I)},Cr=(u,f,p,y,m,_,S)=>{const E=u.component=Bu(u,y,m);if(ia(u)&&(E.ctx.renderer=en),Hu(E,!1,S),E.asyncDep){if(m&&m.registerDep(E,oe,S),!u.el){const I=E.subTree=Ee(Pt);U(null,I,f,p)}}else oe(E,u,f,p,m,_,S)},ii=(u,f,p)=>{const y=f.component=u.component;if(Pu(u,f,p))if(y.asyncDep&&!y.asyncResolved){Y(y,f,p);return}else y.next=f,y.update();else f.el=u.el,y.vnode=f},oe=(u,f,p,y,m,_,S)=>{const E=()=>{if(u.isMounted){let{next:A,bu:R,u:D,parent:F,vnode:z}=u;{const ge=ba(u);if(ge){A&&(A.el=z.el,Y(u,A,S)),ge.asyncDep.then(()=>{u.isUnmounted||E()});return}}let H=A,pe;It(u,!1),A?(A.el=z.el,Y(u,A,S)):A=z,R&&Bn(R),(pe=A.props&&A.props.onVnodeBeforeUpdate)&&ke(pe,F,A,z),It(u,!0);const ne=Ur(u),Se=u.subTree;u.subTree=ne,T(Se,ne,h(Se.el),Ln(Se),u,m,_),A.el=ne.el,H===null&&Ou(u,ne.el),D&&_e(D,m),(pe=A.props&&A.props.onVnodeUpdated)&&_e(()=>ke(pe,F,A,z),m)}else{let A;const{el:R,props:D}=f,{bm:F,m:z,parent:H,root:pe,type:ne}=u,Se=dn(f);if(It(u,!1),F&&Bn(F),!Se&&(A=D&&D.onVnodeBeforeMount)&&ke(A,H,f),It(u,!0),R&&li){const ge=()=>{u.subTree=Ur(u),li(R,u.subTree,u,m,null)};Se&&ne.__asyncHydrate?ne.__asyncHydrate(R,u,ge):ge()}else{pe.ce&&pe.ce._injectChildStyle(ne);const ge=u.subTree=Ur(u);T(null,ge,p,y,u,m,_),f.el=ge.el}if(z&&_e(z,m),!Se&&(A=D&&D.onVnodeMounted)){const ge=f;_e(()=>ke(A,H,ge),m)}(f.shapeFlag&256||H&&dn(H.vnode)&&H.vnode.shapeFlag&256)&&u.a&&_e(u.a,m),u.isMounted=!0,f=p=y=null}};u.scope.on();const I=u.effect=new Uo(E);u.scope.off();const b=u.update=I.run.bind(I),P=u.job=I.runIfDirty.bind(I);P.i=u,P.id=u.uid,I.scheduler=()=>Ls(P),It(u,!0),b()},Y=(u,f,p)=>{f.component=u;const y=u.vnode.props;u.vnode=f,u.next=null,hu(u,f.props,y,p),_u(u,f.children,p),pt(),gi(u),gt()},G=(u,f,p,y,m,_,S,E,I=!1)=>{const b=u&&u.children,P=u?u.shapeFlag:0,A=f.children,{patchFlag:R,shapeFlag:D}=f;if(R>0){if(R&128){Mn(b,A,p,y,m,_,S,E,I);return}else if(R&256){yt(b,A,p,y,m,_,S,E,I);return}}D&8?(P&16&&Zt(b,m,_),A!==b&&d(p,A)):P&16?D&16?Mn(b,A,p,y,m,_,S,E,I):Zt(b,m,_,!0):(P&8&&d(p,""),D&16&&Re(A,p,y,m,_,S,E,I))},yt=(u,f,p,y,m,_,S,E,I)=>{u=u||Ht,f=f||Ht;const b=u.length,P=f.length,A=Math.min(b,P);let R;for(R=0;R<A;R++){const D=f[R]=I?st(f[R]):Ne(f[R]);T(u[R],D,p,null,m,_,S,E,I)}b>P?Zt(u,m,_,!0,!1,A):Re(f,p,y,m,_,S,E,I,A)},Mn=(u,f,p,y,m,_,S,E,I)=>{let b=0;const P=f.length;let A=u.length-1,R=P-1;for(;b<=A&&b<=R;){const D=u[b],F=f[b]=I?st(f[b]):Ne(f[b]);if(rn(D,F))T(D,F,p,null,m,_,S,E,I);else break;b++}for(;b<=A&&b<=R;){const D=u[A],F=f[R]=I?st(f[R]):Ne(f[R]);if(rn(D,F))T(D,F,p,null,m,_,S,E,I);else break;A--,R--}if(b>A){if(b<=R){const D=R+1,F=D<P?f[D].el:y;for(;b<=R;)T(null,f[b]=I?st(f[b]):Ne(f[b]),p,F,m,_,S,E,I),b++}}else if(b>R)for(;b<=A;)Pe(u[b],m,_,!0),b++;else{const D=b,F=b,z=new Map;for(b=F;b<=R;b++){const me=f[b]=I?st(f[b]):Ne(f[b]);me.key!=null&&z.set(me.key,b)}let H,pe=0;const ne=R-F+1;let Se=!1,ge=0;const tn=new Array(ne);for(b=0;b<ne;b++)tn[b]=0;for(b=D;b<=A;b++){const me=u[b];if(pe>=ne){Pe(me,m,_,!0);continue}let Oe;if(me.key!=null)Oe=z.get(me.key);else for(H=F;H<=R;H++)if(tn[H-F]===0&&rn(me,f[H])){Oe=H;break}Oe===void 0?Pe(me,m,_,!0):(tn[Oe-F]=b+1,Oe>=ge?ge=Oe:Se=!0,T(me,f[Oe],p,null,m,_,S,E,I),pe++)}const ui=Se?wu(tn):Ht;for(H=ui.length-1,b=ne-1;b>=0;b--){const me=F+b,Oe=f[me],di=me+1<P?f[me+1].el:y;tn[b]===0?T(null,Oe,p,di,m,_,S,E,I):Se&&(H<0||b!==ui[H]?bt(Oe,p,di,2):H--)}}},bt=(u,f,p,y,m=null)=>{const{el:_,type:S,transition:E,children:I,shapeFlag:b}=u;if(b&6){bt(u.component.subTree,f,p,y);return}if(b&128){u.suspense.move(f,p,y);return}if(b&64){S.move(u,f,p,en);return}if(S===le){r(_,f,p);for(let A=0;A<I.length;A++)bt(I[A],f,p,y);r(u.anchor,f,p);return}if(S===Fr){j(u,f,p);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(_),r(_,f,p),_e(()=>E.enter(_),m);else{const{leave:A,delayLeave:R,afterLeave:D}=E,F=()=>r(_,f,p),z=()=>{A(_,()=>{F(),D&&D()})};R?R(_,F,z):z()}else r(_,f,p)},Pe=(u,f,p,y=!1,m=!1)=>{const{type:_,props:S,ref:E,children:I,dynamicChildren:b,shapeFlag:P,patchFlag:A,dirs:R,cacheIndex:D}=u;if(A===-2&&(m=!1),E!=null&&Qn(E,null,p,u,!0),D!=null&&(f.renderCache[D]=void 0),P&256){f.ctx.deactivate(u);return}const F=P&1&&R,z=!dn(u);let H;if(z&&(H=S&&S.onVnodeBeforeUnmount)&&ke(H,f,u),P&6)Yc(u.component,p,y);else{if(P&128){u.suspense.unmount(p,y);return}F&&wt(u,null,f,"beforeUnmount"),P&64?u.type.remove(u,f,p,en,y):b&&!b.hasOnce&&(_!==le||A>0&&A&64)?Zt(b,f,p,!1,!0):(_===le&&A&384||!m&&P&16)&&Zt(I,f,p),y&&oi(u)}(z&&(H=S&&S.onVnodeUnmounted)||F)&&_e(()=>{H&&ke(H,f,u),F&&wt(u,null,f,"unmounted")},p)},oi=u=>{const{type:f,el:p,anchor:y,transition:m}=u;if(f===le){Jc(p,y);return}if(f===Fr){O(u);return}const _=()=>{s(p),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:E}=m,I=()=>S(p,_);E?E(u.el,_,I):I()}else _()},Jc=(u,f)=>{let p;for(;u!==f;)p=v(u),s(u),u=p;s(f)},Yc=(u,f,p)=>{const{bum:y,scope:m,job:_,subTree:S,um:E,m:I,a:b}=u;wi(I),wi(b),y&&Bn(y),m.stop(),_&&(_.flags|=8,Pe(S,u,f,p)),E&&_e(E,f),_e(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Zt=(u,f,p,y=!1,m=!1,_=0)=>{for(let S=_;S<u.length;S++)Pe(u[S],f,p,y,m)},Ln=u=>{if(u.shapeFlag&6)return Ln(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=v(u.anchor||u.el),p=f&&f[Vl];return p?v(p):f};let Rr=!1;const ai=(u,f,p)=>{u==null?f._vnode&&Pe(f._vnode,null,null,!0):T(f._vnode||null,u,f,null,null,null,p),f._vnode=u,Rr||(Rr=!0,gi(),ta(),Rr=!1)},en={p:T,um:Pe,m:bt,r:oi,mt:Cr,mc:Re,pc:G,pbc:je,n:Ln,o:t};let ci,li;return{render:ai,hydrate:ci,createApp:uu(ai,ci)}}function Lr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function It({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function bu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ya(t,e,n=!1){const r=t.children,s=e.children;if(N(r)&&N(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=st(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ya(o,a)),a.type===yr&&(a.el=o.el)}}function wu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ba(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ba(e)}function wi(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Iu=Symbol.for("v-scx"),Eu=()=>Hn(Iu);function xr(t,e,n){return wa(t,e,n)}function wa(t,e,n=K){const{immediate:r,deep:s,flush:i,once:o}=n,a=te({},n),c=e&&r||!e&&i!=="post";let l;if(bn){if(i==="sync"){const g=Eu();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Le,g.resume=Le,g.pause=Le,g}}const d=ue;a.call=(g,w,T)=>$e(g,d,w,T);let h=!1;i==="post"?a.scheduler=g=>{_e(g,d&&d.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(g,w)=>{w?g():Ls(g)}),a.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,d&&(g.id=d.uid,g.i=d))};const v=Ul(t,e,a);return bn&&(l?l.push(v):c&&v()),v}function Tu(t,e,n){const r=this.proxy,s=Z(t)?t.includes(".")?Ia(r,t):()=>r[t]:t.bind(r,r);let i;L(e)?i=e:(i=e.handler,n=e);const o=Sn(this),a=wa(s,i.bind(r),n);return o(),a}function Ia(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Su=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ft(e)}Modifiers`]||t[`${Mt(e)}Modifiers`];function Au(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||K;let s=n;const i=e.startsWith("update:"),o=i&&Su(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Z(d)?d.trim():d)),o.number&&(s=n.map(Qr)));let a,c=r[a=Pr(e)]||r[a=Pr(ft(e))];!c&&i&&(c=r[a=Pr(Mt(e))]),c&&$e(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$e(l,t,6,s)}}function Ea(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!L(t)){const c=l=>{const d=Ea(l,e,!0);d&&(a=!0,te(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(X(t)&&r.set(t,null),null):(N(i)?i.forEach(c=>o[c]=null):te(o,i),X(t)&&r.set(t,o),o)}function vr(t,e){return!t||!ur(e)?!1:(e=e.slice(2).replace(/Once$/,""),B(t,e[0].toLowerCase()+e.slice(1))||B(t,Mt(e))||B(t,e))}function Ur(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:d,props:h,data:v,setupState:g,ctx:w,inheritAttrs:T}=t,M=Yn(t);let U,x;try{if(n.shapeFlag&4){const O=s||r,Q=O;U=Ne(l.call(Q,O,d,h,g,v,w)),x=a}else{const O=e;U=Ne(O.length>1?O(h,{attrs:a,slots:o,emit:c}):O(h,null)),x=e.props?a:Cu(a)}}catch(O){hn.length=0,gr(O,t,1),U=Ee(Pt)}let j=U;if(x&&T!==!1){const O=Object.keys(x),{shapeFlag:Q}=j;O.length&&Q&7&&(i&&O.some(Is)&&(x=Ru(x,i)),j=Yt(j,x,!1,!0))}return n.dirs&&(j=Yt(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&xs(j,n.transition),U=j,Yn(M),U}const Cu=t=>{let e;for(const n in t)(n==="class"||n==="style"||ur(n))&&((e||(e={}))[n]=t[n]);return e},Ru=(t,e)=>{const n={};for(const r in t)(!Is(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Pu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ii(r,o,l):!!o;if(c&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const v=d[h];if(o[v]!==r[v]&&!vr(l,v))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ii(r,o,l):!0:!!o;return!1}function Ii(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!vr(n,i))return!0}return!1}function Ou({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ta=t=>t.__isSuspense;function ku(t,e){e&&e.pendingBranch?N(t)?e.effects.push(...t):e.effects.push(t):Hl(t)}const le=Symbol.for("v-fgt"),yr=Symbol.for("v-txt"),Pt=Symbol.for("v-cmt"),Fr=Symbol.for("v-stc"),hn=[];let ye=null;function W(t=!1){hn.push(ye=t?null:[])}function Du(){hn.pop(),ye=hn[hn.length-1]||null}let yn=1;function Ei(t,e=!1){yn+=t,t<0&&ye&&e&&(ye.hasOnce=!0)}function Sa(t){return t.dynamicChildren=yn>0?ye||Ht:null,Du(),yn>0&&ye&&ye.push(t),t}function J(t,e,n,r,s,i){return Sa(C(t,e,n,r,s,i,!0))}function cs(t,e,n,r,s){return Sa(Ee(t,e,n,r,s,!0))}function Aa(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const Ca=({key:t})=>t??null,jn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Z(t)||ie(t)||L(t)?{i:we,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,s=null,i=t===le?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ca(e),ref:e&&jn(e),scopeId:ra,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:we};return a?($s(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Z(n)?8:16),yn>0&&!o&&ye&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ye.push(c),c}const Ee=Nu;function Nu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===nu)&&(t=Pt),Aa(t)){const a=Yt(t,e,!0);return n&&$s(a,n),yn>0&&!i&&ye&&(a.shapeFlag&6?ye[ye.indexOf(t)]=a:ye.push(a)),a.patchFlag=-2,a}if(Ku(t)&&(t=t.__vccOpts),e){e=Mu(e);let{class:a,style:c}=e;a&&!Z(a)&&(e.class=As(a)),X(c)&&(Ms(c)&&!N(c)&&(c=te({},c)),e.style=Ss(c))}const o=Z(t)?1:Ta(t)?128:Wl(t)?64:X(t)?4:L(t)?2:0;return C(t,e,n,r,s,o,i,!0)}function Mu(t){return t?Ms(t)||fa(t)?te({},t):t:null}function Yt(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Uu(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ca(l),ref:e&&e.ref?n&&i?N(i)?i.concat(jn(e)):[i,jn(e)]:jn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==le?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yt(t.ssContent),ssFallback:t.ssFallback&&Yt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&xs(d,c.clone(d)),d}function Lu(t=" ",e=0){return Ee(yr,null,t,e)}function xu(t="",e=!1){return e?(W(),cs(Pt,null,t)):Ee(Pt,null,t)}function Ne(t){return t==null||typeof t=="boolean"?Ee(Pt):N(t)?Ee(le,null,t.slice()):Aa(t)?st(t):Ee(yr,null,String(t))}function st(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yt(t)}function $s(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(N(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),$s(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!fa(e)?e._ctx=we:s===3&&we&&(we.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:we},n=32):(e=String(e),r&64?(n=16,e=[Lu(e)]):n=8);t.children=e,t.shapeFlag|=n}function Uu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=As([e.class,r.class]));else if(s==="style")e.style=Ss([e.style,r.style]);else if(ur(s)){const i=e[s],o=r[s];o&&i!==o&&!(N(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ke(t,e,n,r=null){$e(t,e,7,[n,r])}const Fu=la();let $u=0;function Bu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Fu,i={uid:$u++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pa(r,s),emitsOptions:Ea(r,s),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Au.bind(null,i),t.ce&&t.ce(i),i}let ue=null,er,ls;{const t=hr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};er=e("__VUE_INSTANCE_SETTERS__",n=>ue=n),ls=e("__VUE_SSR_SETTERS__",n=>bn=n)}const Sn=t=>{const e=ue;return er(t),t.scope.on(),()=>{t.scope.off(),er(e)}},Ti=()=>{ue&&ue.scope.off(),er(null)};function Ra(t){return t.vnode.shapeFlag&4}let bn=!1;function Hu(t,e=!1,n=!1){e&&ls(e);const{props:r,children:s}=t.vnode,i=Ra(t);fu(t,r,i,e),mu(t,s,n);const o=i?ju(t,e):void 0;return e&&ls(!1),o}function ju(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ru);const{setup:r}=n;if(r){pt();const s=t.setupContext=r.length>1?Wu(t):null,i=Sn(t),o=Tn(r,t,0,[t.props,s]),a=Po(o);if(gt(),i(),(a||t.sp)&&!dn(t)&&sa(t),a){if(o.then(Ti,Ti),e)return o.then(c=>{Si(t,c,e)}).catch(c=>{gr(c,t,0)});t.asyncDep=o}else Si(t,o,e)}else Pa(t,e)}function Si(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:X(e)&&(t.setupState=Qo(e)),Pa(t,n)}let Ai;function Pa(t,e,n){const r=t.type;if(!t.render){if(!e&&Ai&&!r.render){const s=r.template||Us(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=te(te({isCustomElement:i,delimiters:a},o),c);r.render=Ai(s,l)}}t.render=r.render||Le}{const s=Sn(t);pt();try{su(t)}finally{gt(),s()}}}const Vu={get(t,e){return re(t,"get",""),t[e]}};function Wu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Vu),slots:t.slots,emit:t.emit,expose:e}}function br(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qo(Pl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fn)return fn[n](t)},has(e,n){return n in e||n in fn}})):t.proxy}function Ku(t){return L(t)&&"__vccOpts"in t}const Bs=(t,e)=>Ll(t,e,bn),Gu="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let us;const Ci=typeof window<"u"&&window.trustedTypes;if(Ci)try{us=Ci.createPolicy("vue",{createHTML:t=>t})}catch{}const Oa=us?t=>us.createHTML(t):t=>t,zu="http://www.w3.org/2000/svg",qu="http://www.w3.org/1998/Math/MathML",We=typeof document<"u"?document:null,Ri=We&&We.createElement("template"),Ju={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?We.createElementNS(zu,t):e==="mathml"?We.createElementNS(qu,t):n?We.createElement(t,{is:n}):We.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>We.createTextNode(t),createComment:t=>We.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>We.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ri.innerHTML=Oa(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Ri.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yu=Symbol("_vtc");function Xu(t,e,n){const r=t[Yu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Pi=Symbol("_vod"),Qu=Symbol("_vsh"),Zu=Symbol(""),ed=/(^|;)\s*display\s*:/;function td(t,e,n){const r=t.style,s=Z(n);let i=!1;if(n&&!s){if(e)if(Z(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Vn(r,a,"")}else for(const o in e)n[o]==null&&Vn(r,o,"");for(const o in n)o==="display"&&(i=!0),Vn(r,o,n[o])}else if(s){if(e!==n){const o=r[Zu];o&&(n+=";"+o),r.cssText=n,i=ed.test(n)}}else e&&t.removeAttribute("style");Pi in t&&(t[Pi]=i?r.display:"",t[Qu]&&(r.display="none"))}const Oi=/\s*!important$/;function Vn(t,e,n){if(N(n))n.forEach(r=>Vn(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nd(t,e);Oi.test(n)?t.setProperty(Mt(r),n.replace(Oi,""),"important"):t[r]=n}}const ki=["Webkit","Moz","ms"],$r={};function nd(t,e){const n=$r[e];if(n)return n;let r=ft(e);if(r!=="filter"&&r in t)return $r[e]=r;r=Do(r);for(let s=0;s<ki.length;s++){const i=ki[s]+r;if(i in t)return $r[e]=i}return e}const Di="http://www.w3.org/1999/xlink";function Ni(t,e,n,r,s,i=al(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Di,e.slice(6,e.length)):t.setAttributeNS(Di,e,n):n==null||i&&!Mo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ht(n)?String(n):n)}function Mi(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Oa(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Mo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function $t(t,e,n,r){t.addEventListener(e,n,r)}function rd(t,e,n,r){t.removeEventListener(e,n,r)}const Li=Symbol("_vei");function sd(t,e,n,r,s=null){const i=t[Li]||(t[Li]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=id(e);if(r){const l=i[e]=cd(r,s);$t(t,a,l,c)}else o&&(rd(t,a,o,c),i[e]=void 0)}}const xi=/(?:Once|Passive|Capture)$/;function id(t){let e;if(xi.test(t)){e={};let r;for(;r=t.match(xi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mt(t.slice(2)),e]}let Br=0;const od=Promise.resolve(),ad=()=>Br||(od.then(()=>Br=0),Br=Date.now());function cd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$e(ld(r,n.value),e,5,[r])};return n.value=t,n.attached=ad(),n}function ld(t,e){if(N(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ui=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ud=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Xu(t,r,o):e==="style"?td(t,n,r):ur(e)?Is(e)||sd(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dd(t,e,r,o))?(Mi(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ni(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Z(r))?Mi(t,ft(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ni(t,e,r,o))};function dd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ui(e)&&L(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ui(e)&&Z(n)?!1:e in t}const Fi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return N(e)?n=>Bn(e,n):e};function fd(t){t.target.composing=!0}function $i(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hr=Symbol("_assign"),tr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Hr]=Fi(s);const i=r||s.props&&s.props.type==="number";$t(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Qr(a)),t[Hr](a)}),n&&$t(t,"change",()=>{t.value=t.value.trim()}),e||($t(t,"compositionstart",fd),$t(t,"compositionend",$i),$t(t,"change",$i))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Hr]=Fi(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Qr(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},hd=te({patchProp:ud},Ju);let Bi;function pd(){return Bi||(Bi=vu(hd))}const gd=(...t)=>{const e=pd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_d(r);if(!s)return;const i=e._component;!L(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,md(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function md(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _d(t){return Z(t)?document.querySelector(t):t}const vd={id:"app"},yd={id:"player1-board"},bd=["onClick"],wd={key:0},Id={key:2},Ed={__name:"Field1",setup(t){ee(1);const e=ee(""),n=ee(""),r=ee([{text:""}]),s=ee(0),i=ee([]),o=ee([]),a=Bs(()=>Array.from({length:s.value},(g,w)=>String.fromCharCode(65+w))),c=(g,w)=>{for(let T=0;T<i.value.length;T++)if(i.value[T]===g&&o.value[T]===w)return!0;return!1},l=(g,w)=>{const T=(w-1)*s.value+(g-1);return r.value[T]!=="."?r.value[T]:""},d=async(g,w)=>{try{e.value===""&&n.value===""?(e.value=r.value[(g-1)*s.value+(w-1)].text,r.value[(g-1)*s.value+(w-1)].text="🚢"):(n.value=r.value[(g-1)*s.value+(w-1)].text,await h(e.value,n.value),e.value="",n.value="")}catch(T){console.error("Error placing ship:",T)}},h=async(g,w)=>{try{const T=new URLSearchParams;T.append("first",g),T.append("second",w);const M=await fetch("https://parental-annabell-mindwork-6d15eec4.koyeb.app/game/player1/addShip",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:T,mode:"no-cors"});console.log("Request sent (no-cors). Check server for results."),await v()}catch(T){console.error("Error placing ship:",T),await v()}},v=async()=>{try{const w=await(await fetch("https://parental-annabell-mindwork-6d15eec4.koyeb.app/game/addShips1json")).json();s.value=w.size,r.value=Array.from({length:w.size*w.size},(T,M)=>({text:w.board[M]})),i.value=w.ships_x,o.value=w.ships_y}catch(g){console.error("Error fetching game data:",g)}};return _r(()=>{v()}),(g,w)=>(W(),J("div",vd,[w[1]||(w[1]=C("h2",{class:"text-primary"},"Player 1",-1)),C("table",yd,[C("thead",null,[C("tr",null,[w[0]||(w[0]=C("td",null,null,-1)),(W(!0),J(le,null,Kt(a.value,(T,M)=>(W(),J("td",{key:M},At(T),1))),128))])]),C("tbody",null,[(W(!0),J(le,null,Kt(s.value,(T,M)=>(W(),J("tr",{key:M},[C("td",null,At(M+1),1),(W(!0),J(le,null,Kt(s.value,(U,x)=>(W(),J("td",{key:x},[C("button",{class:"shipButton1 btn btn-outline-primary",onClick:j=>d(M+1,x+1)},[c(x+1,M+1)?(W(),J("span",wd,"🚢")):(W(),J("span",Id,At(l(x+1,M+1).text),1))],8,bd)]))),128))]))),128))])])]))}},Td={id:"app"},Sd={id:"player1-board"},Ad=["onClick"],Cd={key:0},Rd={key:2},Pd={__name:"Field2",setup(t){ee(1);const e=ee(""),n=ee(""),r=ee([{text:""}]),s=ee(0),i=ee([]),o=ee([]),a=Bs(()=>Array.from({length:s.value},(g,w)=>String.fromCharCode(65+w))),c=(g,w)=>{for(let T=0;T<i.value.length;T++)if(i.value[T]===g&&o.value[T]===w)return!0;return!1},l=(g,w)=>{const T=(w-1)*s.value+(g-1);return r.value[T]!=="."?r.value[T]:""},d=async(g,w)=>{try{e.value===""&&n.value===""?(e.value=r.value[(g-1)*s.value+(w-1)].text,r.value[(g-1)*s.value+(w-1)].text="🚢"):(n.value=r.value[(g-1)*s.value+(w-1)].text,await h(e.value,n.value),e.value="",n.value="")}catch(T){console.error("Error placing ship:",T)}},h=async(g,w)=>{try{const T=new URLSearchParams;T.append("first",g),T.append("second",w);const M=await fetch("https://parental-annabell-mindwork-6d15eec4.koyeb.app/game/player2/addShip",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:T,mode:"no-cors"});console.log("Request sent (no-cors). Check server for results."),await v()}catch(T){console.error("Error placing ship:",T),await v()}},v=async()=>{try{const w=await(await fetch("https://parental-annabell-mindwork-6d15eec4.koyeb.app/game/addShips2json")).json();s.value=w.size,r.value=Array.from({length:w.size*w.size},(T,M)=>({text:w.board[M]})),i.value=w.ships_x,o.value=w.ships_y}catch(g){console.error("Error fetching game data:",g)}};return _r(()=>{v()}),(g,w)=>(W(),J("div",Td,[w[1]||(w[1]=C("h2",{class:"text-secondary"},"Player 2",-1)),C("table",Sd,[C("thead",null,[C("tr",null,[w[0]||(w[0]=C("td",null,null,-1)),(W(!0),J(le,null,Kt(a.value,(T,M)=>(W(),J("td",{key:M},At(T),1))),128))])]),C("tbody",null,[(W(!0),J(le,null,Kt(s.value,(T,M)=>(W(),J("tr",{key:M},[C("td",null,At(M+1),1),(W(!0),J(le,null,Kt(s.value,(U,x)=>(W(),J("td",{key:x},[C("button",{class:"shipButton1 btn btn-outline-secondary",onClick:j=>d(M+1,x+1)},[c(x+1,M+1)?(W(),J("span",Cd,"🚢")):(W(),J("span",Rd,At(l(x+1,M+1).text),1))],8,Ad)]))),128))]))),128))])])]))}},Hs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Od={},kd={class:"navbar navbar-expand-lg bg-dark","data-bs-theme":"dark"},Dd={class:"container-fluid"},Nd={class:"collapse navbar-collapse",id:"navbarColor02"},Md={class:"navbar-nav me-auto"},Ld={class:"nav-item"},xd={class:"nav-item dropdown"},Ud={class:"dropdown-menu"},Fd={class:"nav-item"};function $d(t,e){return W(),J("nav",kd,[C("div",Dd,[e[5]||(e[5]=C("a",{class:"navbar-brand",href:"#"},"Battelship Game",-1)),e[6]||(e[6]=C("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor02","aria-controls":"navbarColor02","aria-expanded":"false","aria-label":"Toggle navigation"},[C("span",{class:"navbar-toggler-icon"})],-1)),C("div",Nd,[C("ul",Md,[C("li",Ld,[C("a",{class:"nav-link",href:"#",onClick:e[0]||(e[0]=(...n)=>t.startNewGame&&t.startNewGame(...n))},"New Game")]),C("li",xd,[e[4]||(e[4]=C("a",{class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"}," Options ",-1)),C("div",Ud,[C("a",{class:"dropdown-item",href:"#",onClick:e[1]||(e[1]=(...n)=>t.saveGame&&t.saveGame(...n))},"Save Game"),C("a",{class:"dropdown-item",href:"#",onClick:e[2]||(e[2]=(...n)=>t.loadGame&&t.loadGame(...n))},"Load Game")])]),C("li",Fd,[C("a",{class:"nav-link",href:"#",onClick:e[3]||(e[3]=(...n)=>t.exitGame&&t.exitGame(...n))},"Exit")])])])])])}const Bd=Hs(Od,[["render",$d]]),Hd={name:"BattleshipRules",data(){return{player1Name:"",player2Name:""}},methods:{startGame(){this.player1Name.trim(),this.player2Name.trim(),this.$emit("start-game")}}};function jd(t,e,n,r,s,i){return W(),J("div",null,[e[3]||(e[3]=C("h1",null,"Schiffe versenken - Spielregeln",-1)),e[4]||(e[4]=C("ul",{id:"gamerules"},[C("li",null,"Zwei Spieler haben jeweils ein Spielfeld mit einer bestimmten Anzahl an Kästchen."),C("li",null,"Jeder Spieler platziert seine Schiffe verdeckt auf dem eigenen Spielfeld."),C("li",null,"Die Schiffe variieren in der Größe und nehmen mehrere Felder ein (1-5 Felder)."),C("li",null,"Die Spieler schießen abwechselnd auf das Spielfeld des Gegners"),C("li",null,"Trifft ein Schuss ein gegnerisches Schiff, wird dies als Treffer markiert."),C("li",null,"Das Ziel des Spiels ist es, alle gegnerischen Schiffe vollständig zu versenken.")],-1)),Xn(C("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=o=>s.player1Name=o),placeholder:"Spielername 1 eingeben"},null,512),[[tr,s.player1Name]]),Xn(C("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=o=>s.player2Name=o),placeholder:"Spielername 2 eingeben"},null,512),[[tr,s.player2Name]]),C("button",{id:"startbutton",class:"btn btn-success",onClick:e[2]||(e[2]=(...o)=>i.startGame&&i.startGame(...o))}," Spielen ")])}const Vd=Hs(Hd,[["render",jd]]);var Hi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Wd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let v=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(v=64)),r.push(n[d],n[h],n[v],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ka(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Kd;const v=i<<2|a>>4;if(r.push(v),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const w=l<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gd=function(t){const e=ka(t);return Da.encodeByteArray(e,!0)},Na=function(t){return Gd(t).replace(/\./g,"")},Ma=function(t){try{return Da.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=()=>zd().__FIREBASE_DEFAULTS__,Jd=()=>{if(typeof process>"u"||typeof Hi>"u")return;const t=Hi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ma(t[1]);return e&&JSON.parse(e)},js=()=>{try{return qd()||Jd()||Yd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xd=t=>{var e,n;return(n=(e=js())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},La=()=>{var t;return(t=js())===null||t===void 0?void 0:t.config},xa=t=>{var e;return(e=js())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function ef(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ua(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nf(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fa(){try{return typeof indexedDB=="object"}catch{return!1}}function $a(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function rf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="FirebaseError";class He extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sf,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lt.prototype.create)}}class Lt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?of(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new He(s,a,r)}}function of(t,e){return t.replace(af,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const af=/\{\$([^}]+)}/g;function cf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function nr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ji(i)&&ji(o)){if(!nr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ji(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function on(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function an(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lf(t,e){const n=new uf(t,e);return n.subscribe.bind(n)}class uf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");df(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=jr),s.error===void 0&&(s.error=jr),s.complete===void 0&&(s.complete=jr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function df(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=1e3,hf=2,pf=4*60*60*1e3,gf=.5;function Vi(t,e=ff,n=hf){const r=e*Math.pow(n,t),s=Math.round(gf*r*(Math.random()-.5)*2);return Math.min(pf,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class Be{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vf(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_f(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _f(t){return t===Tt?void 0:t}function vf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const bf={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},wf=V.INFO,If={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Ef=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=If[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vs{constructor(e){this.name=e,this._logLevel=wf,this._logHandler=Ef,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const Tf=(t,e)=>e.some(n=>t instanceof n);let Wi,Ki;function Sf(){return Wi||(Wi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Af(){return Ki||(Ki=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ba=new WeakMap,ds=new WeakMap,Ha=new WeakMap,Vr=new WeakMap,Ws=new WeakMap;function Cf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ut(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ba.set(n,t)}).catch(()=>{}),Ws.set(e,t),e}function Rf(t){if(ds.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ds.set(t,e)}let fs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ds.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ha.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pf(t){fs=t(fs)}function Of(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wr(this),e,...n);return Ha.set(r,e.sort?e.sort():[e]),ut(r)}:Af().includes(t)?function(...e){return t.apply(Wr(this),e),ut(Ba.get(this))}:function(...e){return ut(t.apply(Wr(this),e))}}function kf(t){return typeof t=="function"?Of(t):(t instanceof IDBTransaction&&Rf(t),Tf(t,Sf())?new Proxy(t,fs):t)}function ut(t){if(t instanceof IDBRequest)return Cf(t);if(Vr.has(t))return Vr.get(t);const e=kf(t);return e!==t&&(Vr.set(t,e),Ws.set(e,t)),e}const Wr=t=>Ws.get(t);function ja(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ut(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ut(o.result),c.oldVersion,c.newVersion,ut(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Df=["get","getKey","getAll","getAllKeys","count"],Nf=["put","add","delete","clear"],Kr=new Map;function Gi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kr.get(e))return Kr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Nf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Df.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Kr.set(e,i),i}Pf(t=>({...t,get:(e,n,r)=>Gi(e,n)||t.get(e,n,r),has:(e,n)=>!!Gi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hs="@firebase/app",zi="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Vs("@firebase/app"),xf="@firebase/app-compat",Uf="@firebase/analytics-compat",Ff="@firebase/analytics",$f="@firebase/app-check-compat",Bf="@firebase/app-check",Hf="@firebase/auth",jf="@firebase/auth-compat",Vf="@firebase/database",Wf="@firebase/data-connect",Kf="@firebase/database-compat",Gf="@firebase/functions",zf="@firebase/functions-compat",qf="@firebase/installations",Jf="@firebase/installations-compat",Yf="@firebase/messaging",Xf="@firebase/messaging-compat",Qf="@firebase/performance",Zf="@firebase/performance-compat",eh="@firebase/remote-config",th="@firebase/remote-config-compat",nh="@firebase/storage",rh="@firebase/storage-compat",sh="@firebase/firestore",ih="@firebase/vertexai",oh="@firebase/firestore-compat",ah="firebase",ch="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="[DEFAULT]",lh={[hs]:"fire-core",[xf]:"fire-core-compat",[Ff]:"fire-analytics",[Uf]:"fire-analytics-compat",[Bf]:"fire-app-check",[$f]:"fire-app-check-compat",[Hf]:"fire-auth",[jf]:"fire-auth-compat",[Vf]:"fire-rtdb",[Wf]:"fire-data-connect",[Kf]:"fire-rtdb-compat",[Gf]:"fire-fn",[zf]:"fire-fn-compat",[qf]:"fire-iid",[Jf]:"fire-iid-compat",[Yf]:"fire-fcm",[Xf]:"fire-fcm-compat",[Qf]:"fire-perf",[Zf]:"fire-perf-compat",[eh]:"fire-rc",[th]:"fire-rc-compat",[nh]:"fire-gcs",[rh]:"fire-gcs-compat",[sh]:"fire-fst",[oh]:"fire-fst-compat",[ih]:"fire-vertex","fire-js":"fire-js",[ah]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Map,uh=new Map,gs=new Map;function qi(t,e){try{t.container.addComponent(e)}catch(n){Xe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qe(t){const e=t.name;if(gs.has(e))return Xe.debug(`There were multiple attempts to register component ${e}.`),!1;gs.set(e,t);for(const n of rr.values())qi(n,t);for(const n of uh.values())qi(n,t);return!0}function wr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Me(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new Lt("app","Firebase",dh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=ch;function Va(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ps,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw dt.create("bad-app-name",{appName:String(s)});if(n||(n=La()),!n)throw dt.create("no-options");const i=rr.get(s);if(i){if(nr(n,i.options)&&nr(r,i.config))return i;throw dt.create("duplicate-app",{appName:s})}const o=new yf(s);for(const c of gs.values())o.addComponent(c);const a=new fh(n,r,o);return rr.set(s,a),a}function hh(t=ps){const e=rr.get(t);if(!e&&t===ps&&La())return Va();if(!e)throw dt.create("no-app",{appName:t});return e}function xe(t,e,n){var r;let s=(r=lh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xe.warn(a.join(" "));return}Qe(new Be(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="firebase-heartbeat-database",gh=1,wn="firebase-heartbeat-store";let Gr=null;function Wa(){return Gr||(Gr=ja(ph,gh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wn)}catch(n){console.warn(n)}}}}).catch(t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})})),Gr}async function mh(t){try{const n=(await Wa()).transaction(wn),r=await n.objectStore(wn).get(Ka(t));return await n.done,r}catch(e){if(e instanceof He)Xe.warn(e.message);else{const n=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xe.warn(n.message)}}}async function Ji(t,e){try{const r=(await Wa()).transaction(wn,"readwrite");await r.objectStore(wn).put(e,Ka(t)),await r.done}catch(n){if(n instanceof He)Xe.warn(n.message);else{const r=dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xe.warn(r.message)}}}function Ka(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=1024,vh=30*24*60*60*1e3;class yh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yi();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=vh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Xe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yi(),{heartbeatsToSend:r,unsentEntries:s}=bh(this._heartbeatsCache.heartbeats),i=Na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Xe.warn(n),""}}}function Yi(){return new Date().toISOString().substring(0,10)}function bh(t,e=_h){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fa()?$a().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ji(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ji(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xi(t){return Na(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t){Qe(new Be("platform-logger",e=>new Mf(e),"PRIVATE")),Qe(new Be("heartbeat",e=>new yh(e),"PRIVATE")),xe(hs,zi,t),xe(hs,zi,"esm2017"),xe("fire-js","")}Ih("");var Eh="firebase",Th="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe(Eh,Th,"app");function Ks(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ga(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sh=Ga,za=new Lt("auth","Firebase",Ga());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Vs("@firebase/auth");function Ah(t,...e){sr.logLevel<=V.WARN&&sr.warn(`Auth (${Cn}): ${t}`,...e)}function Wn(t,...e){sr.logLevel<=V.ERROR&&sr.error(`Auth (${Cn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(t,...e){throw Gs(t,...e)}function Ue(t,...e){return Gs(t,...e)}function qa(t,e,n){const r=Object.assign(Object.assign({},Sh()),{[e]:n});return new Lt("auth","Firebase",r).create(e,{appName:t.name})}function Ye(t){return qa(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return za.create(t,...e)}function k(t,e,...n){if(!t)throw Gs(e,...n)}function ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wn(e),new Error(e)}function Ze(t,e){t||ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ch(){return Qi()==="http:"||Qi()==="https:"}function Qi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ch()||Ua()||"connection"in navigator)?navigator.onLine:!0}function Ph(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ze(n>e,"Short delay should be less than long delay!"),this.isMobile=Zd()||tf()}get(){return Rh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t,e){Ze(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=new Rn(3e4,6e4);function _t(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vt(t,e,n,r,s={}){return Ya(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=An(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return ef()||(l.referrerPolicy="no-referrer"),Ja.fetch()(Xa(t,t.config.apiHost,n,a),l)})}async function Ya(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Oh),e);try{const s=new Nh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $n(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $n(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $n(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw $n(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw qa(t,d,l);Ce(t,d)}}catch(s){if(s instanceof He)throw s;Ce(t,"network-request-failed",{message:String(s)})}}async function Pn(t,e,n,r,s={}){const i=await vt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ce(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Xa(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zs(t.config,s):`${t.config.apiScheme}://${s}`}function Dh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),kh.get())})}}function $n(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ue(t,e,r);return s.customData._tokenResponse=n,s}function Zi(t){return t!==void 0&&t.enterprise!==void 0}class Mh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Dh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Lh(t,e){return vt(t,"GET","/v2/recaptchaConfig",_t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xh(t,e){return vt(t,"POST","/v1/accounts:delete",e)}async function Qa(t,e){return vt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uh(t,e=!1){const n=mt(t),r=await n.getIdToken(e),s=qs(r);k(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pn(zr(s.auth_time)),issuedAtTime:pn(zr(s.iat)),expirationTime:pn(zr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function zr(t){return Number(t)*1e3}function qs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ma(n);return s?JSON.parse(s):(Wn("Failed to decode base64 JWT payload"),null)}catch(s){return Wn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function eo(t){const e=qs(t);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof He&&Fh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Fh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(t){var e;const n=t.auth,r=await t.getIdToken(),s=await In(t,Qa(n,{idToken:r}));k(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Za(i.providerUserInfo):[],a=Hh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new _s(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function Bh(t){const e=mt(t);await ir(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Za(t){return t.map(e=>{var{providerId:n}=e,r=Ks(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jh(t,e){const n=await Ya(t,{},async()=>{const r=An({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Xa(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ja.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Vh(t,e){return vt(t,"POST","/v2/accounts:revokeToken",_t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){k(e.length!==0,"internal-error");const n=eo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zt;return r&&(k(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(k(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(k(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zt,this.toJSON())}_performRefresh(){return ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){k(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qe{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ks(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $h(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _s(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await In(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Uh(this,e)}reload(){return Bh(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ir(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(Ye(this.auth));const e=await this.getIdToken();return await In(this,xh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,U=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:O,isAnonymous:Q,providerData:be,stsTokenManager:he}=n;k(j&&he,e,"internal-error");const Re=zt.fromJSON(this.name,he);k(typeof j=="string",e,"internal-error"),nt(h,e.name),nt(v,e.name),k(typeof O=="boolean",e,"internal-error"),k(typeof Q=="boolean",e,"internal-error"),nt(g,e.name),nt(w,e.name),nt(T,e.name),nt(M,e.name),nt(U,e.name),nt(x,e.name);const tt=new qe({uid:j,auth:e,email:v,emailVerified:O,displayName:h,isAnonymous:Q,photoURL:w,phoneNumber:g,tenantId:T,stsTokenManager:Re,createdAt:U,lastLoginAt:x});return be&&Array.isArray(be)&&(tt.providerData=be.map(je=>Object.assign({},je))),M&&(tt._redirectEventId=M),tt}static async _fromIdTokenResponse(e,n,r=!1){const s=new zt;s.updateFromServerResponse(n);const i=new qe({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ir(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];k(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Za(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new zt;a.updateFromIdToken(r);const c=new qe({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _s(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=new Map;function Je(t){Ze(t instanceof Function,"Expected a class definition");let e=to.get(t);return e?(Ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,to.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ec.type="NONE";const no=ec;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e,n){return`firebase:${t}:${e}:${n}`}class qt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Kn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Kn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qt(Je(no),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Je(no);const o=Kn(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const d=await l._get(o);if(d){const h=qe._fromJSON(e,d);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new qt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new qt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oc(e))return"Blackberry";if(ac(e))return"Webos";if(nc(e))return"Safari";if((e.includes("chrome/")||rc(e))&&!e.includes("edge/"))return"Chrome";if(ic(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tc(t=de()){return/firefox\//i.test(t)}function nc(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rc(t=de()){return/crios\//i.test(t)}function sc(t=de()){return/iemobile/i.test(t)}function ic(t=de()){return/android/i.test(t)}function oc(t=de()){return/blackberry/i.test(t)}function ac(t=de()){return/webos/i.test(t)}function Js(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Wh(t=de()){var e;return Js(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kh(){return nf()&&document.documentMode===10}function cc(t=de()){return Js(t)||ic(t)||ac(t)||oc(t)||/windows phone/i.test(t)||sc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t,e=[]){let n;switch(t){case"Browser":n=ro(de());break;case"Worker":n=`${ro(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zh(t,e={}){return vt(t,"GET","/v2/passwordPolicy",_t(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=6;class Jh{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:qh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new so(this),this.idTokenSubscription=new so(this),this.beforeStateQueue=new Gh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=za,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Je(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qa(this,{idToken:e}),r=await qe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ir(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ph()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(Ye(this));const n=e?mt(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(Ye(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(Ye(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zh(this),n=new Jh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Je(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await qt.create(this,[Je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ah(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xt(t){return mt(t)}class so{constructor(e){this.auth=e,this.observer=null,this.addObserver=lf(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ir={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Xh(t){Ir=t}function uc(t){return Ir.loadJS(t)}function Qh(){return Ir.recaptchaEnterpriseScript}function Zh(){return Ir.gapiScript}function ep(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class tp{constructor(){this.enterprise=new np}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class np{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const rp="recaptcha-enterprise",dc="NO_RECAPTCHA";class sp{constructor(e){this.type=rp,this.auth=xt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Lh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Mh(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Zi(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(dc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tp().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Zi(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Qh();c.length!==0&&(c+=a),uc(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function io(t,e,n,r=!1,s=!1){const i=new sp(t);let o;if(s)o=dc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function vs(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await io(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await io(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t,e){const n=wr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(nr(i,e??{}))return s;Ce(s,"already-initialized")}return n.initialize({options:e})}function op(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Je);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ap(t,e,n){const r=xt(t);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=fc(e),{host:o,port:a}=cp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),lp()}function fc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cp(t){const e=fc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:oo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:oo(o)}}}function oo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ze("not implemented")}_getIdTokenResponse(e){return ze("not implemented")}_linkToIdToken(e,n){return ze("not implemented")}_getReauthenticationResolver(e){return ze("not implemented")}}async function up(t,e){return vt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(t,e){return Pn(t,"POST","/v1/accounts:signInWithPassword",_t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fp(t,e){return Pn(t,"POST","/v1/accounts:signInWithEmailLink",_t(t,e))}async function hp(t,e){return Pn(t,"POST","/v1/accounts:signInWithEmailLink",_t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Ys{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new En(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new En(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vs(e,n,"signInWithPassword",dp);case"emailLink":return fp(e,{email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vs(e,r,"signUpPassword",up);case"emailLink":return hp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(t,e){return Pn(t,"POST","/v1/accounts:signInWithIdp",_t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="http://localhost";class Ot extends Ys{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ce("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ks(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ot(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jt(e,n)}buildRequest(){const e={requestUri:pp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=An(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mp(t){const e=on(an(t)).link,n=e?on(an(e)).deep_link_id:null,r=on(an(t)).deep_link_id;return(r?on(an(r)).link:null)||r||n||e||t}class Xs{constructor(e){var n,r,s,i,o,a;const c=on(an(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,h=gp((s=c.mode)!==null&&s!==void 0?s:null);k(l&&d&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mp(e);try{return new Xs(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.providerId=Xt.PROVIDER_ID}static credential(e,n){return En._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xs.parseLink(n);return k(r,"argument-error"),En._fromEmailAndCode(e,r.code,r.tenantId)}}Xt.PROVIDER_ID="password";Xt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends hc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends On{constructor(){super("facebook.com")}static credential(e){return Ot._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends On{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ot._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ot.credential(n,r)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends On{constructor(){super("github.com")}static credential(e){return Ot._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends On{constructor(){super("twitter.com")}static credential(e,n){return Ot._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.TWITTER_SIGN_IN_METHOD="twitter.com";ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(t,e){return Pn(t,"POST","/v1/accounts:signUp",_t(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qe._fromIdTokenResponse(e,r,s),o=ao(r);return new kt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ao(r);return new kt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ao(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends He{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,or.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new or(e,n,r,s)}}function pc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?or._fromErrorAndOperation(t,i,e,r):i})}async function vp(t,e,n=!1){const r=await In(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yp(t,e,n=!1){const{auth:r}=t;if(Me(r.app))return Promise.reject(Ye(r));const s="reauthenticate";try{const i=await In(t,pc(r,s,e,t),n);k(i.idToken,r,"internal-error");const o=qs(i.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(t.uid===a,r,"user-mismatch"),kt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ce(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(t,e,n=!1){if(Me(t.app))return Promise.reject(Ye(t));const r="signIn",s=await pc(t,r,e),i=await kt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function bp(t,e){return gc(xt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(t){const e=xt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wp(t,e,n){if(Me(t.app))return Promise.reject(Ye(t));const r=xt(t),o=await vs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_p).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&mc(t),c}),a=await kt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Ip(t,e,n){return Me(t.app)?Promise.reject(Ye(t)):bp(mt(t),Xt.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mc(t),r})}function Ep(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function Tp(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}const ar="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ar,"1"),this.storage.removeItem(ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=1e3,Ap=10;class vc extends _c{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Kh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ap):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Sp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vc.type="LOCAL";const Cp=vc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends _c{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yc.type="SESSION";const bc=yc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Er(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Rp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Er.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Qs("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const v=h;if(v.data.eventId===l)switch(v.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(v.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function Op(t){Fe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function kp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Np(){return wc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="firebaseLocalStorageDb",Mp=1,cr="firebaseLocalStorage",Ec="fbase_key";class kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tr(t,e){return t.transaction([cr],e?"readwrite":"readonly").objectStore(cr)}function Lp(){const t=indexedDB.deleteDatabase(Ic);return new kn(t).toPromise()}function ys(){const t=indexedDB.open(Ic,Mp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cr,{keyPath:Ec})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cr)?e(r):(r.close(),await Lp(),e(await ys()))})})}async function co(t,e,n){const r=Tr(t,!0).put({[Ec]:e,value:n});return new kn(r).toPromise()}async function xp(t,e){const n=Tr(t,!1).get(e),r=await new kn(n).toPromise();return r===void 0?null:r.value}function lo(t,e){const n=Tr(t,!0).delete(e);return new kn(n).toPromise()}const Up=800,Fp=3;class Tc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ys(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Fp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Er._getInstance(Np()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kp(),!this.activeServiceWorker)return;this.sender=new Pp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ys();return await co(e,ar,"1"),await lo(e,ar),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>co(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Tr(s,!1).getAll();return new kn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Up)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tc.type="LOCAL";const $p=Tc;new Rn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t,e){return e?Je(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends Ys{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hp(t){return gc(t.auth,new Zs(t),t.bypassAuthState)}function jp(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),yp(n,new Zs(t),t.bypassAuthState)}async function Vp(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),vp(n,new Zs(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hp;case"linkViaPopup":case"linkViaRedirect":return Vp;case"reauthViaPopup":case"reauthViaRedirect":return jp;default:Ce(this.auth,"internal-error")}}resolve(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=new Rn(2e3,1e4);class Bt extends Sc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){Ze(this.filter.length===1,"Popup operations only handle one event");const e=Qs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Wp.get())};e()}}Bt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="pendingRedirect",Gn=new Map;class Gp extends Sc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gn.get(this.auth._key());if(!e){try{const r=await zp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gn.set(this.auth._key(),e)}return this.bypassAuthState||Gn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zp(t,e){const n=Yp(e),r=Jp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qp(t,e){Gn.set(t._key(),e)}function Jp(t){return Je(t._redirectPersistence)}function Yp(t){return Kn(Kp,t.config.apiKey,t.name)}async function Xp(t,e,n=!1){if(Me(t.app))return Promise.reject(Ye(t));const r=xt(t),s=Bp(r,e),o=await new Gp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=10*60*1e3;class Zp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ac(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ue(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qp&&this.cachedEventUids.clear(),this.cachedEventUids.has(uo(e))}saveEventToCache(e){this.cachedEventUids.add(uo(e)),this.lastProcessedEventTime=Date.now()}}function uo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ac({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ac(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(t,e={}){return vt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rg=/^https?/;async function sg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tg(t);for(const n of e)try{if(ig(n))return}catch{}Ce(t,"unauthorized-domain")}function ig(t){const e=ms(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rg.test(n))return!1;if(ng.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new Rn(3e4,6e4);function fo(){const t=Fe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ag(t){return new Promise((e,n)=>{var r,s,i;function o(){fo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fo(),n(Ue(t,"network-request-failed"))},timeout:og.get()})}if(!((s=(r=Fe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Fe().gapi)===null||i===void 0)&&i.load)o();else{const a=ep("iframefcb");return Fe()[a]=()=>{gapi.load?o():n(Ue(t,"network-request-failed"))},uc(`${Zh()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw zn=null,e})}let zn=null;function cg(t){return zn=zn||ag(t),zn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=new Rn(5e3,15e3),ug="__/auth/iframe",dg="emulator/auth/iframe",fg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pg(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zs(e,dg):`https://${t.config.authDomain}/${ug}`,r={apiKey:e.apiKey,appName:t.name,v:Cn},s=hg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${An(r).slice(1)}`}async function gg(t){const e=await cg(t),n=Fe().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:pg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ue(t,"network-request-failed"),a=Fe().setTimeout(()=>{i(o)},lg.get());function c(){Fe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_g=500,vg=600,yg="_blank",bg="http://localhost";class ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wg(t,e,n,r=_g,s=vg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},mg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=de().toLowerCase();n&&(a=rc(l)?yg:n),tc(l)&&(e=e||bg,c.scrollbars="yes");const d=Object.entries(c).reduce((v,[g,w])=>`${v}${g}=${w},`,"");if(Wh(l)&&a!=="_self")return Ig(e||"",a),new ho(null);const h=window.open(e||"",a,d);k(h,t,"popup-blocked");try{h.focus()}catch{}return new ho(h)}function Ig(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="__/auth/handler",Tg="emulator/auth/handler",Sg=encodeURIComponent("fac");async function po(t,e,n,r,s,i){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cn,eventId:s};if(e instanceof hc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof On){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),l=c?`#${Sg}=${encodeURIComponent(c)}`:"";return`${Ag(t)}?${An(a).slice(1)}${l}`}function Ag({config:t}){return t.emulator?zs(t,Tg):`https://${t.authDomain}/${Eg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="webStorageSupport";class Cg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bc,this._completeRedirectFn=Xp,this._overrideRedirectResult=qp}async _openPopup(e,n,r,s){var i;Ze((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await po(e,n,r,ms(),s);return wg(e,o,Qs())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await po(e,n,r,ms(),s);return Op(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ze(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gg(e),r=new Zp(e);return n.register("authEvent",s=>(k(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qr,{type:qr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qr];o!==void 0&&n(!!o),Ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cc()||nc()||Js()}}const Rg=Cg;var go="@firebase/auth",mo="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kg(t){Qe(new Be("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;k(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lc(t)},l=new Yh(r,s,i,c);return op(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qe(new Be("auth-internal",e=>{const n=xt(e.getProvider("auth").getImmediate());return(r=>new Pg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xe(go,mo,Og(t)),xe(go,mo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=5*60,Ng=xa("authIdTokenMaxAge")||Dg;let _o=null;const Mg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ng)return;const s=n==null?void 0:n.token;_o!==s&&(_o=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Lg(t=hh()){const e=wr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ip(t,{popupRedirectResolver:Rg,persistence:[$p,Cp,bc]}),r=xa("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Mg(i.toString());Tp(n,o,()=>o(n.currentUser)),Ep(n,a=>o(a))}}const s=Xd("auth");return s&&ap(n,`http://${s}`),n}function xg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Xh({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ue("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",xg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kg("Browser");const Cc="@firebase/installations",ei="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=1e4,Pc=`w:${ei}`,Oc="FIS_v2",Ug="https://firebaseinstallations.googleapis.com/v1",Fg=60*60*1e3,$g="installations",Bg="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Dt=new Lt($g,Bg,Hg);function kc(t){return t instanceof He&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc({projectId:t}){return`${Ug}/projects/${t}/installations`}function Nc(t){return{token:t.token,requestStatus:2,expiresIn:Vg(t.expiresIn),creationTime:Date.now()}}async function Mc(t,e){const r=(await e.json()).error;return Dt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Lc({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function jg(t,{refreshToken:e}){const n=Lc(t);return n.append("Authorization",Wg(e)),n}async function xc(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Vg(t){return Number(t.replace("s","000"))}function Wg(t){return`${Oc} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Dc(t),s=Lc(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Oc,appId:t.appId,sdkVersion:Pc},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await xc(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Nc(l.authToken)}}else throw await Mc("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=/^[cdef][\w-]{21}$/,bs="";function qg(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Jg(t);return zg.test(n)?n:bs}catch{return bs}}function Jg(t){return Gg(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new Map;function $c(t,e){const n=Sr(t);Bc(n,e),Yg(n,e)}function Bc(t,e){const n=Fc.get(t);if(n)for(const r of n)r(e)}function Yg(t,e){const n=Xg();n&&n.postMessage({key:t,fid:e}),Qg()}let St=null;function Xg(){return!St&&"BroadcastChannel"in self&&(St=new BroadcastChannel("[Firebase] FID Change"),St.onmessage=t=>{Bc(t.data.key,t.data.fid)}),St}function Qg(){Fc.size===0&&St&&(St.close(),St=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="firebase-installations-database",em=1,Nt="firebase-installations-store";let Jr=null;function ti(){return Jr||(Jr=ja(Zg,em,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nt)}}})),Jr}async function lr(t,e){const n=Sr(t),s=(await ti()).transaction(Nt,"readwrite"),i=s.objectStore(Nt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&$c(t,e.fid),e}async function Hc(t){const e=Sr(t),r=(await ti()).transaction(Nt,"readwrite");await r.objectStore(Nt).delete(e),await r.done}async function Ar(t,e){const n=Sr(t),s=(await ti()).transaction(Nt,"readwrite"),i=s.objectStore(Nt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&$c(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t){let e;const n=await Ar(t.appConfig,r=>{const s=tm(r),i=nm(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===bs?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function tm(t){const e=t||{fid:qg(),registrationStatus:0};return jc(e)}function nm(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Dt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rm(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sm(t)}:{installationEntry:e}}async function rm(t,e){try{const n=await Kg(t,e);return lr(t.appConfig,n)}catch(n){throw kc(n)&&n.customData.serverCode===409?await Hc(t.appConfig):await lr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function sm(t){let e=await vo(t.appConfig);for(;e.registrationStatus===1;)await Uc(100),e=await vo(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ni(t);return r||n}return e}function vo(t){return Ar(t,e=>{if(!e)throw Dt.create("installation-not-found");return jc(e)})}function jc(t){return im(t)?{fid:t.fid,registrationStatus:0}:t}function im(t){return t.registrationStatus===1&&t.registrationTime+Rc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om({appConfig:t,heartbeatServiceProvider:e},n){const r=am(t,n),s=jg(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Pc,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await xc(()=>fetch(r,a));if(c.ok){const l=await c.json();return Nc(l)}else throw await Mc("Generate Auth Token",c)}function am(t,{fid:e}){return`${Dc(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t,e=!1){let n;const r=await Ar(t.appConfig,i=>{if(!Vc(i))throw Dt.create("not-registered");const o=i.authToken;if(!e&&um(o))return i;if(o.requestStatus===1)return n=cm(t,e),i;{if(!navigator.onLine)throw Dt.create("app-offline");const a=fm(i);return n=lm(t,a),a}});return n?await n:r.authToken}async function cm(t,e){let n=await yo(t.appConfig);for(;n.authToken.requestStatus===1;)await Uc(100),n=await yo(t.appConfig);const r=n.authToken;return r.requestStatus===0?ri(t,e):r}function yo(t){return Ar(t,e=>{if(!Vc(e))throw Dt.create("not-registered");const n=e.authToken;return hm(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function lm(t,e){try{const n=await om(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await lr(t.appConfig,r),n}catch(n){if(kc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hc(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await lr(t.appConfig,r)}throw n}}function Vc(t){return t!==void 0&&t.registrationStatus===2}function um(t){return t.requestStatus===2&&!dm(t)}function dm(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Fg}function fm(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hm(t){return t.requestStatus===1&&t.requestTime+Rc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(t){const e=t,{installationEntry:n,registrationPromise:r}=await ni(e);return r?r.catch(console.error):ri(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(t,e=!1){const n=t;return await mm(n),(await ri(n,e)).token}async function mm(t){const{registrationPromise:e}=await ni(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t){if(!t||!t.options)throw Yr("App Configuration");if(!t.name)throw Yr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Yr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Yr(t){return Dt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="installations",vm="installations-internal",ym=t=>{const e=t.getProvider("app").getImmediate(),n=_m(e),r=wr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bm=t=>{const e=t.getProvider("app").getImmediate(),n=wr(e,Wc).getImmediate();return{getId:()=>pm(n),getToken:s=>gm(n,s)}};function wm(){Qe(new Be(Wc,ym,"PUBLIC")),Qe(new Be(vm,bm,"PRIVATE"))}wm();xe(Cc,ei);xe(Cc,ei,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="analytics",Im="firebase_id",Em="origin",Tm=60*1e3,Sm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",si="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new Vs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Te=new Lt("analytics","Analytics",Am);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t){if(!t.startsWith(si)){const e=Te.create("invalid-gtag-resource",{gtagURL:t});return fe.warn(e.message),""}return t}function Kc(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Rm(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Pm(t,e){const n=Rm("firebase-js-sdk-policy",{createScriptURL:Cm}),r=document.createElement("script"),s=`${si}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Om(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function km(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Kc(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){fe.error(a)}t("config",s,i)}async function Dm(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Kc(n);for(const c of o){const l=a.find(h=>h.measurementId===c),d=l&&e[l.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){fe.error(i)}}function Nm(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Dm(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await km(t,e,n,r,a,c)}else if(i==="consent"){const[a,c]=o;t("consent",a,c)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){fe.error(a)}}return s}function Mm(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Nm(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Lm(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(si)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=30,Um=1e3;class Fm{constructor(e={},n=Um){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Gc=new Fm;function $m(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Bm(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:$m(r)},i=Sm.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Te.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Hm(t,e=Gc,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Te.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Te.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Wm;return setTimeout(async()=>{a.abort()},Tm),zc({appId:r,apiKey:s,measurementId:i},o,a,e)}async function zc(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Gc){var i;const{appId:o,measurementId:a}=t;try{await jm(r,e)}catch(c){if(a)return fe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Bm(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Vm(l)){if(s.deleteThrottleMetadata(o),a)return fe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const d=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Vi(n,s.intervalMillis,xm):Vi(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,h),fe.debug(`Calling attemptFetch again in ${d} millis`),zc(t,h,r,s)}}function jm(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Te.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Vm(t){if(!(t instanceof He)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Wm{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Km(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(){if(Fa())try{await $a()}catch(t){return fe.warn(Te.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return fe.warn(Te.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function zm(t,e,n,r,s,i,o){var a;const c=Hm(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&fe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>fe.error(g)),e.push(c);const l=Gm().then(g=>{if(g)return r.getId()}),[d,h]=await Promise.all([c,l]);Lm(i)||Pm(i,d.measurementId),s("js",new Date);const v=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return v[Em]="firebase",v.update=!0,h!=null&&(v[Im]=h),s("config",d.measurementId,v),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.app=e}_delete(){return delete gn[this.app.options.appId],Promise.resolve()}}let gn={},wo=[];const Io={};let Xr="dataLayer",Jm="gtag",Eo,qc,To=!1;function Ym(){const t=[];if(Ua()&&t.push("This is a browser extension environment."),rf()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Te.create("invalid-analytics-context",{errorInfo:e});fe.warn(n.message)}}function Xm(t,e,n){Ym();const r=t.options.appId;if(!r)throw Te.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)fe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Te.create("no-api-key");if(gn[r]!=null)throw Te.create("already-exists",{id:r});if(!To){Om(Xr);const{wrappedGtag:i,gtagCore:o}=Mm(gn,wo,Io,Xr,Jm);qc=i,Eo=o,To=!0}return gn[r]=zm(t,wo,Io,e,Eo,Xr,n),new qm(t)}function Qm(t,e,n,r){t=mt(t),Km(qc,gn[t.app.options.appId],e,n,r).catch(s=>fe.error(s))}const So="@firebase/analytics",Ao="0.10.11";function Zm(){Qe(new Be(bo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Xm(r,s,n)},"PUBLIC")),Qe(new Be("analytics-internal",t,"PRIVATE")),xe(So,Ao),xe(So,Ao,"esm2017");function t(e){try{const n=e.getProvider(bo).getImmediate();return{logEvent:(r,s,i)=>Qm(n,r,s,i)}}catch(n){throw Te.create("interop-component-reg-failed",{reason:n})}}}Zm();const e_={apiKey:"AIzaSyCeanO8Co11tQqG61WRqkn8sgOJ3N535_s",authDomain:"battleship-web-ee919.firebaseapp.com",projectId:"battleship-web-ee919",storageBucket:"battleship-web-ee919.firebasestorage.app",messagingSenderId:"747272421844",appId:"1:747272421844:web:8435ffb685f0f41ec39641",measurementId:"G-4X1BNT6HT2"},t_=Va(e_),Co=Lg(t_),n_={name:"RegisterPage",data(){return{email:"",password:""}},methods:{register(){wp(Co,this.email,this.password).then(t=>{console.log("Successfully registered!"),this.$emit("login-success")}).catch(t=>{console.error(t.code),alert(t.message)})},login(){Ip(Co,this.email,this.password).then(t=>{console.log("Successfully logged in!"),this.$emit("login-success")}).catch(t=>{console.error(t.code),alert(t.message)})}}},r_={id:"box"},s_={id:"btn-group"};function i_(t,e,n,r,s,i){return W(),J("div",r_,[e[4]||(e[4]=C("h1",null,"Register or Sign in",-1)),C("form",null,[Xn(C("input",{type:"text",class:"form-control",placeholder:"Email","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o)},null,512),[[tr,s.email]]),Xn(C("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o)},null,512),[[tr,s.password]]),C("div",s_,[C("button",{type:"button",class:"btn btn-success",onClick:e[2]||(e[2]=(...o)=>i.register&&i.register(...o))},"Register"),C("button",{type:"button",class:"btn btn-success",onClick:e[3]||(e[3]=(...o)=>i.login&&i.login(...o))},"Sign in")])])])}const o_=Hs(n_,[["render",i_],["__scopeId","data-v-015cd954"]]),a_={class:"game"},c_={key:2},l_={class:"Spielfeld"},u_={class:"Spielfeld"},d_={__name:"App",setup(t){const e=ee(!1),n=ee(!1),r=ee(null),s=ee(!1),i=()=>{e.value=!1},o=async()=>{if(r.value){r.value.prompt();const{outcome:c}=await r.value.userChoice;console.log(c==="accepted"?"App installiert":"Installation abgelehnt"),r.value=null,s.value=!1}};_r(()=>(window.addEventListener("beforeinstallprompt",c=>{c.preventDefault(),r.value=c,s.value=!0}),()=>{window.removeEventListener("beforeinstallprompt",()=>{})}));const a=()=>{n.value=!0,e.value=!0};return(c,l)=>(W(),J("div",a_,[Ee(Bd),n.value?e.value?(W(),cs(Vd,{key:1,onStartGame:i})):(W(),J("div",c_,[l[0]||(l[0]=C("h1",null,"Battleship Game",-1)),C("table",null,[C("tbody",null,[C("tr",null,[C("td",l_,[Ee(Ed)]),C("td",u_,[Ee(Pd)])])])])])):(W(),cs(o_,{key:0,onLoginSuccess:a})),s.value?(W(),J("button",{key:3,class:"install-button",onClick:o}," App installieren ")):xu("",!0)]))}};gd(d_).mount("#app");
