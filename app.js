window.__ICE_ASSETS__=Object.fromEntries(["coffee/tide-isle.png","coffee/miss-coco.png","coffee/watermelon.png","coffee/supernova-natural.png","arrow-top-right-svgrepo-com.svg"].map(file=>[file,new URL('./'+file.split('/').pop(),document.currentScript.src).href]));
(()=>{var GA=Object.create;var zx=Object.defineProperty;var kA=Object.getOwnPropertyDescriptor;var XA=Object.getOwnPropertyNames;var WA=Object.getPrototypeOf,qA=Object.prototype.hasOwnProperty;var Es=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var YA=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of XA(t))!qA.call(e,s)&&s!==n&&zx(e,s,{get:()=>t[s],enumerable:!(i=kA(t,s))||i.enumerable});return e};var Wr=(e,t,n)=>(n=e!=null?GA(WA(e)):{},YA(t||!e||!e.__esModule?zx(n,"default",{value:e,enumerable:!0}):n,e));var Kx=Es(Vt=>{"use strict";/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=Symbol.for("react.transitional.element"),ZA=Symbol.for("react.portal"),JA=Symbol.for("react.fragment"),KA=Symbol.for("react.strict_mode"),QA=Symbol.for("react.profiler"),jA=Symbol.for("react.consumer"),$A=Symbol.for("react.context"),tw=Symbol.for("react.forward_ref"),ew=Symbol.for("react.suspense"),nw=Symbol.for("react.memo"),Xx=Symbol.for("react.lazy"),iw=Symbol.for("react.activity"),Vx=Symbol.iterator;function sw(e){return e===null||typeof e!="object"?null:(e=Vx&&e[Vx]||e["@@iterator"],typeof e=="function"?e:null)}var Wx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qx=Object.assign,Yx={};function Wo(e,t,n){this.props=e,this.context=t,this.refs=Yx,this.updater=n||Wx}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zx(){}Zx.prototype=Wo.prototype;function Vm(e,t,n){this.props=e,this.context=t,this.refs=Yx,this.updater=n||Wx}var Hm=Vm.prototype=new Zx;Hm.constructor=Vm;qx(Hm,Wo.prototype);Hm.isPureReactComponent=!0;var Hx=Array.isArray;function Fm(){}var Ue={H:null,A:null,T:null,S:null},Jx=Object.prototype.hasOwnProperty;function Gm(e,t,n){var i=n.ref;return{$$typeof:zm,type:e,key:t,ref:i!==void 0?i:null,props:n}}function aw(e,t){return Gm(e.type,t,e.props)}function km(e){return typeof e=="object"&&e!==null&&e.$$typeof===zm}function rw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gx=/\/+/g;function Bm(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rw(""+e.key):t.toString(36)}function ow(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Fm,Fm):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Xo(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case zm:case ZA:r=!0;break;case Xx:return r=e._init,Xo(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Bm(e,0):i,Hx(s)?(n="",r!=null&&(n=r.replace(Gx,"$&/")+"/"),Xo(s,t,n,"",function(c){return c})):s!=null&&(km(s)&&(s=aw(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Gx,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Hx(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Bm(i,l),r+=Xo(i,t,n,a,s);else if(l=sw(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Bm(i,l++),r+=Xo(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Xo(ow(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Fh(e,t,n){if(e==null)return e;var i=[],s=0;return Xo(e,i,"","",function(a){return t.call(n,a,s++)}),i}function lw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var kx=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},cw={map:Fh,forEach:function(e,t,n){Fh(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fh(e,function(){t++}),t},toArray:function(e){return Fh(e,function(t){return t})||[]},only:function(e){if(!km(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Vt.Activity=iw;Vt.Children=cw;Vt.Component=Wo;Vt.Fragment=JA;Vt.Profiler=QA;Vt.PureComponent=Vm;Vt.StrictMode=KA;Vt.Suspense=ew;Vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ue;Vt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ue.H.useMemoCache(e)}};Vt.cache=function(e){return function(){return e.apply(null,arguments)}};Vt.cacheSignal=function(){return null};Vt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=qx({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!Jx.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Gm(e.type,s,i)};Vt.createContext=function(e){return e={$$typeof:$A,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:jA,_context:e},e};Vt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)Jx.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Gm(e,a,s)};Vt.createRef=function(){return{current:null}};Vt.forwardRef=function(e){return{$$typeof:tw,render:e}};Vt.isValidElement=km;Vt.lazy=function(e){return{$$typeof:Xx,_payload:{_status:-1,_result:e},_init:lw}};Vt.memo=function(e,t){return{$$typeof:nw,type:e,compare:t===void 0?null:t}};Vt.startTransition=function(e){var t=Ue.T,n={};Ue.T=n;try{var i=e(),s=Ue.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Fm,kx)}catch(a){kx(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ue.T=t}};Vt.unstable_useCacheRefresh=function(){return Ue.H.useCacheRefresh()};Vt.use=function(e){return Ue.H.use(e)};Vt.useActionState=function(e,t,n){return Ue.H.useActionState(e,t,n)};Vt.useCallback=function(e,t){return Ue.H.useCallback(e,t)};Vt.useContext=function(e){return Ue.H.useContext(e)};Vt.useDebugValue=function(){};Vt.useDeferredValue=function(e,t){return Ue.H.useDeferredValue(e,t)};Vt.useEffect=function(e,t){return Ue.H.useEffect(e,t)};Vt.useEffectEvent=function(e){return Ue.H.useEffectEvent(e)};Vt.useId=function(){return Ue.H.useId()};Vt.useImperativeHandle=function(e,t,n){return Ue.H.useImperativeHandle(e,t,n)};Vt.useInsertionEffect=function(e,t){return Ue.H.useInsertionEffect(e,t)};Vt.useLayoutEffect=function(e,t){return Ue.H.useLayoutEffect(e,t)};Vt.useMemo=function(e,t){return Ue.H.useMemo(e,t)};Vt.useOptimistic=function(e,t){return Ue.H.useOptimistic(e,t)};Vt.useReducer=function(e,t,n){return Ue.H.useReducer(e,t,n)};Vt.useRef=function(e){return Ue.H.useRef(e)};Vt.useState=function(e){return Ue.H.useState(e)};Vt.useSyncExternalStore=function(e,t,n){return Ue.H.useSyncExternalStore(e,t,n)};Vt.useTransition=function(){return Ue.H.useTransition()};Vt.version="19.2.8"});var Ec=Es((jP,Qx)=>{"use strict";Qx.exports=Kx()});var oy=Es(Be=>{"use strict";/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Ym(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<zh(s,t))e[i]=t,e[n]=s,n=i;else break t}}function As(e){return e.length===0?null:e[0]}function Hh(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>zh(o,n))l<s&&0>zh(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>zh(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function zh(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Be.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(jx=performance,Be.unstable_now=function(){return jx.now()}):(Xm=Date,$x=Xm.now(),Be.unstable_now=function(){return Xm.now()-$x});var jx,Xm,$x,ta=[],Ga=[],uw=1,zi=null,On=3,Zm=!1,Ac=!1,wc=!1,Jm=!1,ny=typeof setTimeout=="function"?setTimeout:null,iy=typeof clearTimeout=="function"?clearTimeout:null,ty=typeof setImmediate<"u"?setImmediate:null;function Vh(e){for(var t=As(Ga);t!==null;){if(t.callback===null)Hh(Ga);else if(t.startTime<=e)Hh(Ga),t.sortIndex=t.expirationTime,Ym(ta,t);else break;t=As(Ga)}}function Km(e){if(wc=!1,Vh(e),!Ac)if(As(ta)!==null)Ac=!0,Yo||(Yo=!0,qo());else{var t=As(Ga);t!==null&&Qm(Km,t.startTime-e)}}var Yo=!1,Cc=-1,sy=5,ay=-1;function ry(){return Jm?!0:!(Be.unstable_now()-ay<sy)}function Wm(){if(Jm=!1,Yo){var e=Be.unstable_now();ay=e;var t=!0;try{t:{Ac=!1,wc&&(wc=!1,iy(Cc),Cc=-1),Zm=!0;var n=On;try{e:{for(Vh(e),zi=As(ta);zi!==null&&!(zi.expirationTime>e&&ry());){var i=zi.callback;if(typeof i=="function"){zi.callback=null,On=zi.priorityLevel;var s=i(zi.expirationTime<=e);if(e=Be.unstable_now(),typeof s=="function"){zi.callback=s,Vh(e),t=!0;break e}zi===As(ta)&&Hh(ta),Vh(e)}else Hh(ta);zi=As(ta)}if(zi!==null)t=!0;else{var a=As(Ga);a!==null&&Qm(Km,a.startTime-e),t=!1}}break t}finally{zi=null,On=n,Zm=!1}t=void 0}}finally{t?qo():Yo=!1}}}var qo;typeof ty=="function"?qo=function(){ty(Wm)}:typeof MessageChannel<"u"?(qm=new MessageChannel,ey=qm.port2,qm.port1.onmessage=Wm,qo=function(){ey.postMessage(null)}):qo=function(){ny(Wm,0)};var qm,ey;function Qm(e,t){Cc=ny(function(){e(Be.unstable_now())},t)}Be.unstable_IdlePriority=5;Be.unstable_ImmediatePriority=1;Be.unstable_LowPriority=4;Be.unstable_NormalPriority=3;Be.unstable_Profiling=null;Be.unstable_UserBlockingPriority=2;Be.unstable_cancelCallback=function(e){e.callback=null};Be.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):sy=0<e?Math.floor(1e3/e):5};Be.unstable_getCurrentPriorityLevel=function(){return On};Be.unstable_next=function(e){switch(On){case 1:case 2:case 3:var t=3;break;default:t=On}var n=On;On=t;try{return e()}finally{On=n}};Be.unstable_requestPaint=function(){Jm=!0};Be.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=On;On=e;try{return t()}finally{On=n}};Be.unstable_scheduleCallback=function(e,t,n){var i=Be.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:uw++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Ym(Ga,e),As(ta)===null&&e===As(Ga)&&(wc?(iy(Cc),Cc=-1):wc=!0,Qm(Km,n-i))):(e.sortIndex=s,Ym(ta,e),Ac||Zm||(Ac=!0,Yo||(Yo=!0,qo()))),e};Be.unstable_shouldYield=ry;Be.unstable_wrapCallback=function(e){var t=On;return function(){var n=On;On=t;try{return e.apply(this,arguments)}finally{On=n}}}});var cy=Es((tO,ly)=>{"use strict";ly.exports=oy()});var hy=Es(qn=>{"use strict";/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hw=Ec();function uy(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ka(){}var Wn={d:{f:ka,r:function(){throw Error(uy(522))},D:ka,C:ka,L:ka,m:ka,X:ka,S:ka,M:ka},p:0,findDOMNode:null},fw=Symbol.for("react.portal");function dw(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fw,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Rc=hw.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Gh(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Wn;qn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(uy(299));return dw(e,t,null,n)};qn.flushSync=function(e){var t=Rc.T,n=Wn.p;try{if(Rc.T=null,Wn.p=2,e)return e()}finally{Rc.T=t,Wn.p=n,Wn.d.f()}};qn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Wn.d.C(e,t))};qn.prefetchDNS=function(e){typeof e=="string"&&Wn.d.D(e)};qn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Gh(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Wn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Wn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};qn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Gh(t.as,t.crossOrigin);Wn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Wn.d.M(e)};qn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Gh(n,t.crossOrigin);Wn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};qn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Gh(t.as,t.crossOrigin);Wn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Wn.d.m(e)};qn.requestFormReset=function(e){Wn.d.r(e)};qn.unstable_batchedUpdates=function(e,t){return e(t)};qn.useFormState=function(e,t,n){return Rc.H.useFormState(e,t,n)};qn.useFormStatus=function(){return Rc.H.useHostTransitionStatus()};qn.version="19.2.8"});var py=Es((nO,dy)=>{"use strict";function fy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fy)}catch(e){console.error(e)}}fy(),dy.exports=hy()});var Ab=Es(pd=>{"use strict";/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cn=cy(),VS=Ec(),pw=py();function et(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function HS(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mu(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function GS(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kS(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function my(e){if(mu(e)!==e)throw Error(et(188))}function mw(e){var t=e.alternate;if(!t){if(t=mu(e),t===null)throw Error(et(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return my(s),e;if(a===i)return my(s),t;a=a.sibling}throw Error(et(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(et(189))}}if(n.alternate!==i)throw Error(et(190))}if(n.tag!==3)throw Error(et(188));return n.stateNode.current===n?e:t}function XS(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=XS(e),t!==null)return t;e=e.sibling}return null}var Pe=Object.assign,gw=Symbol.for("react.element"),kh=Symbol.for("react.transitional.element"),Bc=Symbol.for("react.portal"),$o=Symbol.for("react.fragment"),WS=Symbol.for("react.strict_mode"),U0=Symbol.for("react.profiler"),qS=Symbol.for("react.consumer"),la=Symbol.for("react.context"),Ag=Symbol.for("react.forward_ref"),N0=Symbol.for("react.suspense"),L0=Symbol.for("react.suspense_list"),wg=Symbol.for("react.memo"),Xa=Symbol.for("react.lazy"),P0=Symbol.for("react.activity"),_w=Symbol.for("react.memo_cache_sentinel"),gy=Symbol.iterator;function Dc(e){return e===null||typeof e!="object"?null:(e=gy&&e[gy]||e["@@iterator"],typeof e=="function"?e:null)}var vw=Symbol.for("react.client.reference");function O0(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===vw?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $o:return"Fragment";case U0:return"Profiler";case WS:return"StrictMode";case N0:return"Suspense";case L0:return"SuspenseList";case P0:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Bc:return"Portal";case la:return e.displayName||"Context";case qS:return(e._context.displayName||"Context")+".Consumer";case Ag:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wg:return t=e.displayName||null,t!==null?t:O0(e.type)||"Memo";case Xa:t=e._payload,e=e._init;try{return O0(e(t))}catch{}}return null}var Fc=Array.isArray,Ot=VS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=pw.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Qr={pending:!1,data:null,method:null,action:null},I0=[],tl=-1;function Us(e){return{current:e}}function vn(e){0>tl||(e.current=I0[tl],I0[tl]=null,tl--)}function Ce(e,t){tl++,I0[tl]=e.current,e.current=t}var Ds=Us(null),eu=Us(null),er=Us(null),bf=Us(null);function Tf(e,t){switch(Ce(er,t),Ce(eu,e),Ce(Ds,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bS(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bS(t),e=fb(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vn(Ds),Ce(Ds,e)}function vl(){vn(Ds),vn(eu),vn(er)}function B0(e){e.memoizedState!==null&&Ce(bf,e);var t=Ds.current,n=fb(t,e.type);t!==n&&(Ce(eu,e),Ce(Ds,n))}function Ef(e){eu.current===e&&(vn(Ds),vn(eu)),bf.current===e&&(vn(bf),fu._currentValue=Qr)}var jm,_y;function Yr(e){if(jm===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jm=t&&t[1]||"",_y=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jm+e+_y}var $m=!1;function t0(e,t){if(!e||$m)return"";$m=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(d){var h=d}Reflect.construct(e,[],m)}else{try{m.call()}catch(d){h=d}e.call(m.prototype)}}else{try{throw Error()}catch(d){h=d}(m=e())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(d){if(d&&h&&typeof d.stack=="string")return[d.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{$m=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Yr(n):""}function xw(e,t){switch(e.tag){case 26:case 27:case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return e.child!==t&&t!==null?Yr("Suspense Fallback"):Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 15:return t0(e.type,!1);case 11:return t0(e.type.render,!1);case 1:return t0(e.type,!0);case 31:return Yr("Activity");default:return""}}function vy(e){try{var t="",n=null;do t+=xw(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var F0=Object.prototype.hasOwnProperty,Cg=cn.unstable_scheduleCallback,e0=cn.unstable_cancelCallback,yw=cn.unstable_shouldYield,Sw=cn.unstable_requestPaint,vi=cn.unstable_now,Mw=cn.unstable_getCurrentPriorityLevel,YS=cn.unstable_ImmediatePriority,ZS=cn.unstable_UserBlockingPriority,Af=cn.unstable_NormalPriority,bw=cn.unstable_LowPriority,JS=cn.unstable_IdlePriority,Tw=cn.log,Ew=cn.unstable_setDisableYieldValue,gu=null,xi=null;function Ka(e){if(typeof Tw=="function"&&Ew(e),xi&&typeof xi.setStrictMode=="function")try{xi.setStrictMode(gu,e)}catch{}}var yi=Math.clz32?Math.clz32:Cw,Aw=Math.log,ww=Math.LN2;function Cw(e){return e>>>=0,e===0?32:31-(Aw(e)/ww|0)|0}var Xh=256,Wh=262144,qh=4194304;function Zr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jf(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Zr(i):(r&=o,r!==0?s=Zr(r):n||(n=o&~e,n!==0&&(s=Zr(n))))):(o=i&~a,o!==0?s=Zr(o):r!==0?s=Zr(r):n||(n=i&~e,n!==0&&(s=Zr(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function _u(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Rw(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KS(){var e=qh;return qh<<=1,(qh&62914560)===0&&(qh=4194304),e}function n0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vu(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Dw(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-yi(n),m=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var d=h[u];d!==null&&(d.lane&=-536870913)}n&=~m}i!==0&&QS(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function QS(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-yi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function jS(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-yi(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function $S(e,t){var n=t&-t;return n=(n&42)!==0?1:Rg(n),(n&(e.suspendedLanes|t))!==0?0:n}function Rg(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function t1(){var e=ue.p;return e!==0?e:(e=window.event,e===void 0?32:bb(e.type))}function xy(e,t){var n=ue.p;try{return ue.p=e,t()}finally{ue.p=n}}var pr=Math.random().toString(36).slice(2),bn="__reactFiber$"+pr,si="__reactProps$"+pr,Rl="__reactContainer$"+pr,z0="__reactEvents$"+pr,Uw="__reactListeners$"+pr,Nw="__reactHandles$"+pr,yy="__reactResources$"+pr,xu="__reactMarker$"+pr;function Ug(e){delete e[bn],delete e[si],delete e[z0],delete e[Uw],delete e[Nw]}function el(e){var t=e[bn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rl]||n[bn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=CS(e);e!==null;){if(n=e[bn])return n;e=CS(e)}return t}e=n,n=e.parentNode}return null}function Dl(e){if(e=e[bn]||e[Rl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function zc(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(et(33))}function hl(e){var t=e[yy];return t||(t=e[yy]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function _n(e){e[xu]=!0}var e1=new Set,n1={};function oo(e,t){xl(e,t),xl(e+"Capture",t)}function xl(e,t){for(n1[e]=t,e=0;e<t.length;e++)e1.add(t[e])}var Lw=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sy={},My={};function Pw(e){return F0.call(My,e)?!0:F0.call(Sy,e)?!1:Lw.test(e)?My[e]=!0:(Sy[e]=!0,!1)}function lf(e,t,n){if(Pw(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Yh(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ea(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Hi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function i1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ow(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function V0(e){if(!e._valueTracker){var t=i1(e)?"checked":"value";e._valueTracker=Ow(e,t,""+e[t])}}function s1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=i1(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function wf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Iw=/[\n"\\]/g;function Xi(e){return e.replace(Iw,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function H0(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Hi(t)):e.value!==""+Hi(t)&&(e.value=""+Hi(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?G0(e,r,Hi(t)):n!=null?G0(e,r,Hi(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Hi(o):e.removeAttribute("name")}function a1(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){V0(e);return}n=n!=null?""+Hi(n):"",t=t!=null?""+Hi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),V0(e)}function G0(e,t,n){t==="number"&&wf(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function fl(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Hi(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function r1(e,t,n){if(t!=null&&(t=""+Hi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Hi(n):""}function o1(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(et(92));if(Fc(i)){if(1<i.length)throw Error(et(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Hi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),V0(e)}function yl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function by(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Bw.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function l1(e,t,n){if(t!=null&&typeof t!="object")throw Error(et(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&by(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&by(e,a,t[a])}function Ng(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cf(e){return zw.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ca(){}var k0=null;function Lg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,dl=null;function Ty(e){var t=Dl(e);if(t&&(e=t.stateNode)){var n=e[si]||null;t:switch(e=t.stateNode,t.type){case"input":if(H0(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[si]||null;if(!s)throw Error(et(90));H0(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&s1(i)}break t;case"textarea":r1(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&fl(e,!!n.multiple,t,!1)}}}var i0=!1;function c1(e,t,n){if(i0)return e(t,n);i0=!0;try{var i=e(t);return i}finally{if(i0=!1,(nl!==null||dl!==null)&&(ud(),nl&&(t=nl,e=dl,dl=nl=null,Ty(t),e)))for(t=0;t<e.length;t++)Ty(e[t])}}function nu(e,t){var n=e.stateNode;if(n===null)return null;var i=n[si]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(et(231,t,typeof n));return n}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),X0=!1;if(pa)try{Zo={},Object.defineProperty(Zo,"passive",{get:function(){X0=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{X0=!1}var Zo,Qa=null,Pg=null,uf=null;function u1(){if(uf)return uf;var e,t=Pg,n=t.length,i,s="value"in Qa?Qa.value:Qa.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return uf=s.slice(e,1<i?1-i:void 0)}function hf(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zh(){return!0}function Ey(){return!1}function ai(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zh:Ey,this.isPropagationStopped=Ey,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zh)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zh)},persist:function(){},isPersistent:Zh}),t}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=ai(lo),yu=Pe({},lo,{view:0,detail:0}),Vw=ai(yu),s0,a0,Uc,td=Pe({},yu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Og,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uc&&(Uc&&e.type==="mousemove"?(s0=e.screenX-Uc.screenX,a0=e.screenY-Uc.screenY):a0=s0=0,Uc=e),s0)},movementY:function(e){return"movementY"in e?e.movementY:a0}}),Ay=ai(td),Hw=Pe({},td,{dataTransfer:0}),Gw=ai(Hw),kw=Pe({},yu,{relatedTarget:0}),r0=ai(kw),Xw=Pe({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ww=ai(Xw),qw=Pe({},lo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yw=ai(qw),Zw=Pe({},lo,{data:0}),wy=ai(Zw),Jw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qw[e])?!!t[e]:!1}function Og(){return jw}var $w=Pe({},yu,{key:function(e){if(e.key){var t=Jw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hf(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Og,charCode:function(e){return e.type==="keypress"?hf(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hf(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tC=ai($w),eC=Pe({},td,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cy=ai(eC),nC=Pe({},yu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Og}),iC=ai(nC),sC=Pe({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),aC=ai(sC),rC=Pe({},td,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oC=ai(rC),lC=Pe({},lo,{newState:0,oldState:0}),cC=ai(lC),uC=[9,13,27,32],Ig=pa&&"CompositionEvent"in window,Gc=null;pa&&"documentMode"in document&&(Gc=document.documentMode);var hC=pa&&"TextEvent"in window&&!Gc,h1=pa&&(!Ig||Gc&&8<Gc&&11>=Gc),Ry=" ",Dy=!1;function f1(e,t){switch(e){case"keyup":return uC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var il=!1;function fC(e,t){switch(e){case"compositionend":return d1(t);case"keypress":return t.which!==32?null:(Dy=!0,Ry);case"textInput":return e=t.data,e===Ry&&Dy?null:e;default:return null}}function dC(e,t){if(il)return e==="compositionend"||!Ig&&f1(e,t)?(e=u1(),uf=Pg=Qa=null,il=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return h1&&t.locale!=="ko"?null:t.data;default:return null}}var pC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pC[e.type]:t==="textarea"}function p1(e,t,n,i){nl?dl?dl.push(i):dl=[i]:nl=i,t=Wf(t,"onChange"),0<t.length&&(n=new $f("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var kc=null,iu=null;function mC(e){cb(e,0)}function ed(e){var t=zc(e);if(s1(t))return e}function Ny(e,t){if(e==="change")return t}var m1=!1;pa&&(pa?(Kh="oninput"in document,Kh||(o0=document.createElement("div"),o0.setAttribute("oninput","return;"),Kh=typeof o0.oninput=="function"),Jh=Kh):Jh=!1,m1=Jh&&(!document.documentMode||9<document.documentMode));var Jh,Kh,o0;function Ly(){kc&&(kc.detachEvent("onpropertychange",g1),iu=kc=null)}function g1(e){if(e.propertyName==="value"&&ed(iu)){var t=[];p1(t,iu,e,Lg(e)),c1(mC,t)}}function gC(e,t,n){e==="focusin"?(Ly(),kc=t,iu=n,kc.attachEvent("onpropertychange",g1)):e==="focusout"&&Ly()}function _C(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ed(iu)}function vC(e,t){if(e==="click")return ed(t)}function xC(e,t){if(e==="input"||e==="change")return ed(t)}function yC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mi=typeof Object.is=="function"?Object.is:yC;function su(e,t){if(Mi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!F0.call(t,s)||!Mi(e[s],t[s]))return!1}return!0}function Py(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oy(e,t){var n=Py(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Py(n)}}function _1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function v1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wf(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wf(e.document)}return t}function Bg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var SC=pa&&"documentMode"in document&&11>=document.documentMode,sl=null,W0=null,Xc=null,q0=!1;function Iy(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;q0||sl==null||sl!==wf(i)||(i=sl,"selectionStart"in i&&Bg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Xc&&su(Xc,i)||(Xc=i,i=Wf(W0,"onSelect"),0<i.length&&(t=new $f("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=sl)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var al={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionrun:qr("Transition","TransitionRun"),transitionstart:qr("Transition","TransitionStart"),transitioncancel:qr("Transition","TransitionCancel"),transitionend:qr("Transition","TransitionEnd")},l0={},x1={};pa&&(x1=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function co(e){if(l0[e])return l0[e];if(!al[e])return e;var t=al[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in x1)return l0[e]=t[n];return e}var y1=co("animationend"),S1=co("animationiteration"),M1=co("animationstart"),MC=co("transitionrun"),bC=co("transitionstart"),TC=co("transitioncancel"),b1=co("transitionend"),T1=new Map,Y0="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Y0.push("scrollEnd");function ls(e,t){T1.set(e,t),oo(t,[e])}var Cf=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vi=[],rl=0,Fg=0;function nd(){for(var e=rl,t=Fg=rl=0;t<e;){var n=Vi[t];Vi[t++]=null;var i=Vi[t];Vi[t++]=null;var s=Vi[t];Vi[t++]=null;var a=Vi[t];if(Vi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&E1(n,s,a)}}function id(e,t,n,i){Vi[rl++]=e,Vi[rl++]=t,Vi[rl++]=n,Vi[rl++]=i,Fg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function zg(e,t,n,i){return id(e,t,n,i),Rf(e)}function uo(e,t){return id(e,null,null,t),Rf(e)}function E1(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-yi(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Rf(e){if(50<$c)throw $c=0,pg=null,Error(et(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ol={};function EC(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,i){return new EC(e,t,n,i)}function Vg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ha(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function A1(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ff(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Vg(e)&&(r=1);else if(typeof e=="string")r=C2(e,n,Ds.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case P0:return e=gi(31,n,t,s),e.elementType=P0,e.lanes=a,e;case $o:return jr(n.children,s,a,t);case WS:r=8,s|=24;break;case U0:return e=gi(12,n,t,s|2),e.elementType=U0,e.lanes=a,e;case N0:return e=gi(13,n,t,s),e.elementType=N0,e.lanes=a,e;case L0:return e=gi(19,n,t,s),e.elementType=L0,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case la:r=10;break t;case qS:r=9;break t;case Ag:r=11;break t;case wg:r=14;break t;case Xa:r=16,i=null;break t}r=29,n=Error(et(130,e===null?"null":typeof e,"")),i=null}return t=gi(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function jr(e,t,n,i){return e=gi(7,e,i,t),e.lanes=n,e}function c0(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function w1(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function u0(e,t,n){return t=gi(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var By=new WeakMap;function Wi(e,t){if(typeof e=="object"&&e!==null){var n=By.get(e);return n!==void 0?n:(t={value:e,source:t,stack:vy(t)},By.set(e,t),t)}return{value:e,source:t,stack:vy(t)}}var ll=[],cl=0,Df=null,au=0,Gi=[],ki=0,ur=null,ws=1,Cs="";function ra(e,t){ll[cl++]=au,ll[cl++]=Df,Df=e,au=t}function C1(e,t,n){Gi[ki++]=ws,Gi[ki++]=Cs,Gi[ki++]=ur,ur=e;var i=ws;e=Cs;var s=32-yi(i)-1;i&=~(1<<s),n+=1;var a=32-yi(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,ws=1<<32-yi(t)+s|n<<s|i,Cs=a+e}else ws=1<<a|n<<s|i,Cs=e}function Hg(e){e.return!==null&&(ra(e,1),C1(e,1,0))}function Gg(e){for(;e===Df;)Df=ll[--cl],ll[cl]=null,au=ll[--cl],ll[cl]=null;for(;e===ur;)ur=Gi[--ki],Gi[ki]=null,Cs=Gi[--ki],Gi[ki]=null,ws=Gi[--ki],Gi[ki]=null}function R1(e,t){Gi[ki++]=ws,Gi[ki++]=Cs,Gi[ki++]=ur,ws=t.id,Cs=t.overflow,ur=e}var Tn=null,Le=null,se=!1,nr=null,qi=!1,Z0=Error(et(519));function hr(e){var t=Error(et(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ru(Wi(t,e)),Z0}function Fy(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[bn]=e,t[si]=i,n){case"dialog":Jt("cancel",t),Jt("close",t);break;case"iframe":case"object":case"embed":Jt("load",t);break;case"video":case"audio":for(n=0;n<uu.length;n++)Jt(uu[n],t);break;case"source":Jt("error",t);break;case"img":case"image":case"link":Jt("error",t),Jt("load",t);break;case"details":Jt("toggle",t);break;case"input":Jt("invalid",t),a1(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Jt("invalid",t);break;case"textarea":Jt("invalid",t),o1(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||hb(t.textContent,n)?(i.popover!=null&&(Jt("beforetoggle",t),Jt("toggle",t)),i.onScroll!=null&&Jt("scroll",t),i.onScrollEnd!=null&&Jt("scrollend",t),i.onClick!=null&&(t.onclick=ca),t=!0):t=!1,t||hr(e,!0)}function zy(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:qi=!1;return;case 27:case 3:qi=!0;return;default:Tn=Tn.return}}function Jo(e){if(e!==Tn)return!1;if(!se)return zy(e),se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||xg(e.type,e.memoizedProps)),n=!n),n&&Le&&hr(e),zy(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));Le=wS(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));Le=wS(e)}else t===27?(t=Le,mr(e.type)?(e=bg,bg=null,Le=e):Le=t):Le=Tn?Zi(e.stateNode.nextSibling):null;return!0}function no(){Le=Tn=null,se=!1}function h0(){var e=nr;return e!==null&&(ni===null?ni=e:ni.push.apply(ni,e),nr=null),e}function ru(e){nr===null?nr=[e]:nr.push(e)}var J0=Us(null),ho=null,ua=null;function qa(e,t,n){Ce(J0,t._currentValue),t._currentValue=n}function fa(e){e._currentValue=J0.current,vn(J0)}function K0(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Q0(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),K0(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(et(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),K0(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ul(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(et(387));if(r=r.memoizedProps,r!==null){var o=s.type;Mi(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===bf.current){if(r=s.alternate,r===null)throw Error(et(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(fu):e=[fu])}s=s.return}e!==null&&Q0(t,e,n,i),t.flags|=262144}function Uf(e){for(e=e.firstContext;e!==null;){if(!Mi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function io(e){ho=e,ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return D1(ho,e)}function Qh(e,t){return ho===null&&io(e),D1(e,t)}function D1(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ua===null){if(e===null)throw Error(et(308));ua=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ua=ua.next=t;return n}var AC=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},wC=cn.unstable_scheduleCallback,CC=cn.unstable_NormalPriority,an={$$typeof:la,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kg(){return{controller:new AC,data:new Map,refCount:0}}function Su(e){e.refCount--,e.refCount===0&&wC(CC,function(){e.controller.abort()})}var Wc=null,j0=0,Sl=0,pl=null;function RC(e,t){if(Wc===null){var n=Wc=[];j0=0,Sl=p_(),pl={status:"pending",value:void 0,then:function(i){n.push(i)}}}return j0++,t.then(Vy,Vy),t}function Vy(){if(--j0===0&&Wc!==null){pl!==null&&(pl.status="fulfilled");var e=Wc;Wc=null,Sl=0,pl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function DC(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Hy=Ot.S;Ot.S=function(e,t){XM=vi(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&RC(e,t),Hy!==null&&Hy(e,t)};var $r=Us(null);function Xg(){var e=$r.current;return e!==null?e:Me.pooledCache}function df(e,t){t===null?Ce($r,$r.current):Ce($r,t.pool)}function U1(){var e=Xg();return e===null?null:{parent:an._currentValue,pool:e}}var Nl=Error(et(460)),Wg=Error(et(474)),sd=Error(et(542)),Nf={then:function(){}};function Gy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function N1(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ca,ca),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xy(e),e;default:if(typeof t.status=="string")t.then(ca,ca);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(et(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xy(e),e}throw to=t,Nl}}function Jr(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(to=n,Nl):n}}var to=null;function ky(){if(to===null)throw Error(et(459));var e=to;return to=null,e}function Xy(e){if(e===Nl||e===sd)throw Error(et(483))}var ml=null,ou=0;function jh(e){var t=ou;return ou+=1,ml===null&&(ml=[]),N1(ml,e,t)}function Nc(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $h(e,t){throw t.$$typeof===gw?Error(et(525)):(e=Object.prototype.toString.call(t),Error(et(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function L1(e){function t(p,v){if(e){var S=p.deletions;S===null?(p.deletions=[v],p.flags|=16):S.push(v)}}function n(p,v){if(!e)return null;for(;v!==null;)t(p,v),v=v.sibling;return null}function i(p){for(var v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function s(p,v){return p=ha(p,v),p.index=0,p.sibling=null,p}function a(p,v,S){return p.index=S,e?(S=p.alternate,S!==null?(S=S.index,S<v?(p.flags|=67108866,v):S):(p.flags|=67108866,v)):(p.flags|=1048576,v)}function r(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function o(p,v,S,x){return v===null||v.tag!==6?(v=c0(S,p.mode,x),v.return=p,v):(v=s(v,S),v.return=p,v)}function l(p,v,S,x){var T=S.type;return T===$o?u(p,v,S.props.children,x,S.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Xa&&Jr(T)===v.type)?(v=s(v,S.props),Nc(v,S),v.return=p,v):(v=ff(S.type,S.key,S.props,null,p.mode,x),Nc(v,S),v.return=p,v)}function c(p,v,S,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=u0(S,p.mode,x),v.return=p,v):(v=s(v,S.children||[]),v.return=p,v)}function u(p,v,S,x,T){return v===null||v.tag!==7?(v=jr(S,p.mode,x,T),v.return=p,v):(v=s(v,S),v.return=p,v)}function m(p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=c0(""+v,p.mode,S),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case kh:return S=ff(v.type,v.key,v.props,null,p.mode,S),Nc(S,v),S.return=p,S;case Bc:return v=u0(v,p.mode,S),v.return=p,v;case Xa:return v=Jr(v),m(p,v,S)}if(Fc(v)||Dc(v))return v=jr(v,p.mode,S,null),v.return=p,v;if(typeof v.then=="function")return m(p,jh(v),S);if(v.$$typeof===la)return m(p,Qh(p,v),S);$h(p,v)}return null}function h(p,v,S,x){var T=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return T!==null?null:o(p,v,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case kh:return S.key===T?l(p,v,S,x):null;case Bc:return S.key===T?c(p,v,S,x):null;case Xa:return S=Jr(S),h(p,v,S,x)}if(Fc(S)||Dc(S))return T!==null?null:u(p,v,S,x,null);if(typeof S.then=="function")return h(p,v,jh(S),x);if(S.$$typeof===la)return h(p,v,Qh(p,S),x);$h(p,S)}return null}function d(p,v,S,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return p=p.get(S)||null,o(v,p,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case kh:return p=p.get(x.key===null?S:x.key)||null,l(v,p,x,T);case Bc:return p=p.get(x.key===null?S:x.key)||null,c(v,p,x,T);case Xa:return x=Jr(x),d(p,v,S,x,T)}if(Fc(x)||Dc(x))return p=p.get(S)||null,u(v,p,x,T,null);if(typeof x.then=="function")return d(p,v,S,jh(x),T);if(x.$$typeof===la)return d(p,v,S,Qh(v,x),T);$h(v,x)}return null}function f(p,v,S,x){for(var T=null,b=null,A=v,y=v=0,E=null;A!==null&&y<S.length;y++){A.index>y?(E=A,A=null):E=A.sibling;var C=h(p,A,S[y],x);if(C===null){A===null&&(A=E);break}e&&A&&C.alternate===null&&t(p,A),v=a(C,v,y),b===null?T=C:b.sibling=C,b=C,A=E}if(y===S.length)return n(p,A),se&&ra(p,y),T;if(A===null){for(;y<S.length;y++)A=m(p,S[y],x),A!==null&&(v=a(A,v,y),b===null?T=A:b.sibling=A,b=A);return se&&ra(p,y),T}for(A=i(A);y<S.length;y++)E=d(A,p,y,S[y],x),E!==null&&(e&&E.alternate!==null&&A.delete(E.key===null?y:E.key),v=a(E,v,y),b===null?T=E:b.sibling=E,b=E);return e&&A.forEach(function(D){return t(p,D)}),se&&ra(p,y),T}function _(p,v,S,x){if(S==null)throw Error(et(151));for(var T=null,b=null,A=v,y=v=0,E=null,C=S.next();A!==null&&!C.done;y++,C=S.next()){A.index>y?(E=A,A=null):E=A.sibling;var D=h(p,A,C.value,x);if(D===null){A===null&&(A=E);break}e&&A&&D.alternate===null&&t(p,A),v=a(D,v,y),b===null?T=D:b.sibling=D,b=D,A=E}if(C.done)return n(p,A),se&&ra(p,y),T;if(A===null){for(;!C.done;y++,C=S.next())C=m(p,C.value,x),C!==null&&(v=a(C,v,y),b===null?T=C:b.sibling=C,b=C);return se&&ra(p,y),T}for(A=i(A);!C.done;y++,C=S.next())C=d(A,p,y,C.value,x),C!==null&&(e&&C.alternate!==null&&A.delete(C.key===null?y:C.key),v=a(C,v,y),b===null?T=C:b.sibling=C,b=C);return e&&A.forEach(function(N){return t(p,N)}),se&&ra(p,y),T}function g(p,v,S,x){if(typeof S=="object"&&S!==null&&S.type===$o&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case kh:t:{for(var T=S.key;v!==null;){if(v.key===T){if(T=S.type,T===$o){if(v.tag===7){n(p,v.sibling),x=s(v,S.props.children),x.return=p,p=x;break t}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Xa&&Jr(T)===v.type){n(p,v.sibling),x=s(v,S.props),Nc(x,S),x.return=p,p=x;break t}n(p,v);break}else t(p,v);v=v.sibling}S.type===$o?(x=jr(S.props.children,p.mode,x,S.key),x.return=p,p=x):(x=ff(S.type,S.key,S.props,null,p.mode,x),Nc(x,S),x.return=p,p=x)}return r(p);case Bc:t:{for(T=S.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(p,v.sibling),x=s(v,S.children||[]),x.return=p,p=x;break t}else{n(p,v);break}else t(p,v);v=v.sibling}x=u0(S,p.mode,x),x.return=p,p=x}return r(p);case Xa:return S=Jr(S),g(p,v,S,x)}if(Fc(S))return f(p,v,S,x);if(Dc(S)){if(T=Dc(S),typeof T!="function")throw Error(et(150));return S=T.call(S),_(p,v,S,x)}if(typeof S.then=="function")return g(p,v,jh(S),x);if(S.$$typeof===la)return g(p,v,Qh(p,S),x);$h(p,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(n(p,v.sibling),x=s(v,S),x.return=p,p=x):(n(p,v),x=c0(S,p.mode,x),x.return=p,p=x),r(p)):n(p,v)}return function(p,v,S,x){try{ou=0;var T=g(p,v,S,x);return ml=null,T}catch(A){if(A===Nl||A===sd)throw A;var b=gi(29,A,null,p.mode);return b.lanes=x,b.return=p,b}}}var so=L1(!0),P1=L1(!1),Wa=!1;function qg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ir(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sr(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ce&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Rf(e),E1(e,null,n),t}return id(e,i,t,n),Rf(e)}function qc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,jS(e,n)}}function f0(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var tg=!1;function Yc(){if(tg){var e=pl;if(e!==null)throw e}}function Zc(e,t,n,i){tg=!1;var s=e.updateQueue;Wa=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var m=s.baseState;r=0,u=c=l=null,o=a;do{var h=o.lane&-536870913,d=h!==o.lane;if(d?(te&h)===h:(i&h)===h){h!==0&&h===Sl&&(tg=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var f=e,_=o;h=t;var g=n;switch(_.tag){case 1:if(f=_.payload,typeof f=="function"){m=f.call(g,m,h);break t}m=f;break t;case 3:f.flags=f.flags&-65537|128;case 0:if(f=_.payload,h=typeof f=="function"?f.call(g,m,h):f,h==null)break t;m=Pe({},m,h);break t;case 2:Wa=!0}}h=o.callback,h!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[h]:d.push(h))}else d={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=d,l=m):u=u.next=d,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);u===null&&(l=m),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),dr|=r,e.lanes=r,e.memoizedState=m}}function O1(e,t){if(typeof e!="function")throw Error(et(191,e));e.call(t)}function I1(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)O1(n[e],t)}var Ml=Us(null),Lf=Us(0);function Wy(e,t){e=va,Ce(Lf,e),Ce(Ml,t),va=e|t.baseLanes}function eg(){Ce(Lf,va),Ce(Ml,Ml.current)}function Yg(){va=Lf.current,vn(Ml),vn(Lf)}var bi=Us(null),Yi=null;function Ya(e){var t=e.alternate;Ce(Qe,Qe.current&1),Ce(bi,e),Yi===null&&(t===null||Ml.current!==null||t.memoizedState!==null)&&(Yi=e)}function ng(e){Ce(Qe,Qe.current),Ce(bi,e),Yi===null&&(Yi=e)}function B1(e){e.tag===22?(Ce(Qe,Qe.current),Ce(bi,e),Yi===null&&(Yi=e)):Za(e)}function Za(){Ce(Qe,Qe.current),Ce(bi,bi.current)}function mi(e){vn(bi),Yi===e&&(Yi=null),vn(Qe)}var Qe=Us(0);function Pf(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Sg(n)||Mg(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=0,Gt=null,ye=null,nn=null,Of=!1,gl=!1,ao=!1,If=0,lu=0,_l=null,UC=0;function Ye(){throw Error(et(321))}function Zg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mi(e[n],t[n]))return!1;return!0}function Jg(e,t,n,i,s,a){return ma=a,Gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ot.H=e===null||e.memoizedState===null?pM:r_,ao=!1,a=n(i,s),ao=!1,gl&&(a=z1(t,n,i,s)),F1(e),a}function F1(e){Ot.H=cu;var t=ye!==null&&ye.next!==null;if(ma=0,nn=ye=Gt=null,Of=!1,lu=0,_l=null,t)throw Error(et(300));e===null||rn||(e=e.dependencies,e!==null&&Uf(e)&&(rn=!0))}function z1(e,t,n,i){Gt=e;var s=0;do{if(gl&&(_l=null),lu=0,gl=!1,25<=s)throw Error(et(301));if(s+=1,nn=ye=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ot.H=mM,a=t(n,i)}while(gl);return a}function NC(){var e=Ot.H,t=e.useState()[0];return t=typeof t.then=="function"?Mu(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(Gt.flags|=1024),t}function Kg(){var e=If!==0;return If=0,e}function Qg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function jg(e){if(Of){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Of=!1}ma=0,nn=ye=Gt=null,gl=!1,lu=If=0,_l=null}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Gt.memoizedState=nn=e:nn=nn.next=e,nn}function je(){if(ye===null){var e=Gt.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=nn===null?Gt.memoizedState:nn.next;if(t!==null)nn=t,ye=e;else{if(e===null)throw Gt.alternate===null?Error(et(467)):Error(et(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},nn===null?Gt.memoizedState=nn=e:nn=nn.next=e}return nn}function ad(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mu(e){var t=lu;return lu+=1,_l===null&&(_l=[]),e=N1(_l,e,t),t=Gt,(nn===null?t.memoizedState:nn.next)===null&&(t=t.alternate,Ot.H=t===null||t.memoizedState===null?pM:r_),e}function rd(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mu(e);if(e.$$typeof===la)return En(e)}throw Error(et(438,String(e)))}function $g(e){var t=null,n=Gt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Gt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ad(),Gt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=_w;return t.index++,n}function ga(e,t){return typeof t=="function"?t(e):t}function pf(e){var t=je();return t_(t,ye,e)}function t_(e,t,n){var i=e.queue;if(i===null)throw Error(et(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var m=c.lane&-536870913;if(m!==c.lane?(te&m)===m:(ma&m)===m){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),m===Sl&&(u=!0);else if((ma&h)===h){c=c.next,h===Sl&&(u=!0);continue}else m={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=m,r=a):l=l.next=m,Gt.lanes|=h,dr|=h;m=c.action,ao&&n(a,m),a=c.hasEagerState?c.eagerState:n(a,m)}else h={lane:m,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,Gt.lanes|=m,dr|=m;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Mi(a,e.memoizedState)&&(rn=!0,u&&(n=pl,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function d0(e){var t=je(),n=t.queue;if(n===null)throw Error(et(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Mi(a,t.memoizedState)||(rn=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function V1(e,t,n){var i=Gt,s=je(),a=se;if(a){if(n===void 0)throw Error(et(407));n=n()}else n=t();var r=!Mi((ye||s).memoizedState,n);if(r&&(s.memoizedState=n,rn=!0),s=s.queue,e_(k1.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||nn!==null&&nn.memoizedState.tag&1){if(i.flags|=2048,bl(9,{destroy:void 0},G1.bind(null,i,s,n,t),null),Me===null)throw Error(et(349));a||(ma&127)!==0||H1(i,t,n)}return n}function H1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Gt.updateQueue,t===null?(t=ad(),Gt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function G1(e,t,n,i){t.value=n,t.getSnapshot=i,X1(t)&&W1(e)}function k1(e,t,n){return n(function(){X1(t)&&W1(e)})}function X1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mi(e,n)}catch{return!0}}function W1(e){var t=uo(e,2);t!==null&&ii(t,e,2)}function ig(e){var t=Yn();if(typeof e=="function"){var n=e;if(e=n(),ao){Ka(!0);try{n()}finally{Ka(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:e},t}function q1(e,t,n,i){return e.baseState=n,t_(e,ye,typeof i=="function"?i:ga)}function LC(e,t,n,i,s){if(ld(e))throw Error(et(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ot.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Y1(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Y1(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ot.T,r={};Ot.T=r;try{var o=n(s,i),l=Ot.S;l!==null&&l(r,o),qy(e,t,o)}catch(c){sg(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ot.T=a}}else try{a=n(s,i),qy(e,t,a)}catch(c){sg(e,t,c)}}function qy(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Yy(e,t,i)},function(i){return sg(e,t,i)}):Yy(e,t,n)}function Yy(e,t,n){t.status="fulfilled",t.value=n,Z1(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Y1(e,n)))}function sg(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Z1(t),t=t.next;while(t!==i)}e.action=null}function Z1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function J1(e,t){return t}function Zy(e,t){if(se){var n=Me.formState;if(n!==null){t:{var i=Gt;if(se){if(Le){e:{for(var s=Le,a=qi;s.nodeType!==8;){if(!a){s=null;break e}if(s=Zi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Le=Zi(s.nextSibling),i=s.data==="F!";break t}}hr(i)}i=!1}i&&(t=n[0])}}return n=Yn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:J1,lastRenderedState:t},n.queue=i,n=hM.bind(null,Gt,i),i.dispatch=n,i=ig(!1),a=a_.bind(null,Gt,!1,i.queue),i=Yn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=LC.bind(null,Gt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Jy(e){var t=je();return K1(t,ye,e)}function K1(e,t,n){if(t=t_(e,t,J1)[0],e=pf(ga)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Mu(t)}catch(r){throw r===Nl?sd:r}else i=t;t=je();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Gt.flags|=2048,bl(9,{destroy:void 0},PC.bind(null,s,n),null)),[i,a,e]}function PC(e,t){e.action=t}function Ky(e){var t=je(),n=ye;if(n!==null)return K1(t,n,e);je(),t=t.memoizedState,n=je();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function bl(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Gt.updateQueue,t===null&&(t=ad(),Gt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Q1(){return je().memoizedState}function mf(e,t,n,i){var s=Yn();Gt.flags|=e,s.memoizedState=bl(1|t,{destroy:void 0},n,i===void 0?null:i)}function od(e,t,n,i){var s=je();i=i===void 0?null:i;var a=s.memoizedState.inst;ye!==null&&i!==null&&Zg(i,ye.memoizedState.deps)?s.memoizedState=bl(t,a,n,i):(Gt.flags|=e,s.memoizedState=bl(1|t,a,n,i))}function Qy(e,t){mf(8390656,8,e,t)}function e_(e,t){od(2048,8,e,t)}function OC(e){Gt.flags|=4;var t=Gt.updateQueue;if(t===null)t=ad(),Gt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function j1(e){var t=je().memoizedState;return OC({ref:t,nextImpl:e}),function(){if((ce&2)!==0)throw Error(et(440));return t.impl.apply(void 0,arguments)}}function $1(e,t){return od(4,2,e,t)}function tM(e,t){return od(4,4,e,t)}function eM(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nM(e,t,n){n=n!=null?n.concat([e]):null,od(4,4,eM.bind(null,t,e),n)}function n_(){}function iM(e,t){var n=je();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Zg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function sM(e,t){var n=je();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Zg(t,i[1]))return i[0];if(i=e(),ao){Ka(!0);try{e()}finally{Ka(!1)}}return n.memoizedState=[i,t],i}function i_(e,t,n){return n===void 0||(ma&1073741824)!==0&&(te&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=qM(),Gt.lanes|=e,dr|=e,n)}function aM(e,t,n,i){return Mi(n,t)?n:Ml.current!==null?(e=i_(e,n,i),Mi(e,t)||(rn=!0),e):(ma&42)===0||(ma&1073741824)!==0&&(te&261930)===0?(rn=!0,e.memoizedState=n):(e=qM(),Gt.lanes|=e,dr|=e,t)}function rM(e,t,n,i,s){var a=ue.p;ue.p=a!==0&&8>a?a:8;var r=Ot.T,o={};Ot.T=o,a_(e,!1,t,n);try{var l=s(),c=Ot.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=DC(l,i);Jc(e,t,u,Si(e))}else Jc(e,t,i,Si(e))}catch(m){Jc(e,t,{then:function(){},status:"rejected",reason:m},Si())}finally{ue.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ot.T=r}}function IC(){}function ag(e,t,n,i){if(e.tag!==5)throw Error(et(476));var s=oM(e).queue;rM(e,s,t,Qr,n===null?IC:function(){return lM(e),n(i)})}function oM(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Qr,baseState:Qr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:Qr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function lM(e){var t=oM(e);t.next===null&&(t=e.alternate.memoizedState),Jc(e,t.next.queue,{},Si())}function s_(){return En(fu)}function cM(){return je().memoizedState}function uM(){return je().memoizedState}function BC(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Si();e=ir(n);var i=sr(t,e,n);i!==null&&(ii(i,t,n),qc(i,t,n)),t={cache:kg()},e.payload=t;return}t=t.return}}function FC(e,t,n){var i=Si();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ld(e)?fM(t,n):(n=zg(e,t,n,i),n!==null&&(ii(n,e,i),dM(n,t,i)))}function hM(e,t,n){var i=Si();Jc(e,t,n,i)}function Jc(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ld(e))fM(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Mi(o,r))return id(e,t,s,0),Me===null&&nd(),!1}catch{}if(n=zg(e,t,s,i),n!==null)return ii(n,e,i),dM(n,t,i),!0}return!1}function a_(e,t,n,i){if(i={lane:2,revertLane:p_(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ld(e)){if(t)throw Error(et(479))}else t=zg(e,n,i,2),t!==null&&ii(t,e,2)}function ld(e){var t=e.alternate;return e===Gt||t!==null&&t===Gt}function fM(e,t){gl=Of=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dM(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,jS(e,n)}}var cu={readContext:En,use:rd,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye};cu.useEffectEvent=Ye;var pM={readContext:En,use:rd,useCallback:function(e,t){return Yn().memoizedState=[e,t===void 0?null:t],e},useContext:En,useEffect:Qy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,mf(4194308,4,eM.bind(null,t,e),n)},useLayoutEffect:function(e,t){return mf(4194308,4,e,t)},useInsertionEffect:function(e,t){mf(4,2,e,t)},useMemo:function(e,t){var n=Yn();t=t===void 0?null:t;var i=e();if(ao){Ka(!0);try{e()}finally{Ka(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Yn();if(n!==void 0){var s=n(t);if(ao){Ka(!0);try{n(t)}finally{Ka(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=FC.bind(null,Gt,e),[i.memoizedState,e]},useRef:function(e){var t=Yn();return e={current:e},t.memoizedState=e},useState:function(e){e=ig(e);var t=e.queue,n=hM.bind(null,Gt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:n_,useDeferredValue:function(e,t){var n=Yn();return i_(n,e,t)},useTransition:function(){var e=ig(!1);return e=rM.bind(null,Gt,e.queue,!0,!1),Yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Gt,s=Yn();if(se){if(n===void 0)throw Error(et(407));n=n()}else{if(n=t(),Me===null)throw Error(et(349));(te&127)!==0||H1(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Qy(k1.bind(null,i,a,e),[e]),i.flags|=2048,bl(9,{destroy:void 0},G1.bind(null,i,a,n,t),null),n},useId:function(){var e=Yn(),t=Me.identifierPrefix;if(se){var n=Cs,i=ws;n=(i&~(1<<32-yi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=If++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=UC++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:s_,useFormState:Zy,useActionState:Zy,useOptimistic:function(e){var t=Yn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=a_.bind(null,Gt,!0,n),n.dispatch=t,[e,t]},useMemoCache:$g,useCacheRefresh:function(){return Yn().memoizedState=BC.bind(null,Gt)},useEffectEvent:function(e){var t=Yn(),n={impl:e};return t.memoizedState=n,function(){if((ce&2)!==0)throw Error(et(440));return n.impl.apply(void 0,arguments)}}},r_={readContext:En,use:rd,useCallback:iM,useContext:En,useEffect:e_,useImperativeHandle:nM,useInsertionEffect:$1,useLayoutEffect:tM,useMemo:sM,useReducer:pf,useRef:Q1,useState:function(){return pf(ga)},useDebugValue:n_,useDeferredValue:function(e,t){var n=je();return aM(n,ye.memoizedState,e,t)},useTransition:function(){var e=pf(ga)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Mu(e),t]},useSyncExternalStore:V1,useId:cM,useHostTransitionStatus:s_,useFormState:Jy,useActionState:Jy,useOptimistic:function(e,t){var n=je();return q1(n,ye,e,t)},useMemoCache:$g,useCacheRefresh:uM};r_.useEffectEvent=j1;var mM={readContext:En,use:rd,useCallback:iM,useContext:En,useEffect:e_,useImperativeHandle:nM,useInsertionEffect:$1,useLayoutEffect:tM,useMemo:sM,useReducer:d0,useRef:Q1,useState:function(){return d0(ga)},useDebugValue:n_,useDeferredValue:function(e,t){var n=je();return ye===null?i_(n,e,t):aM(n,ye.memoizedState,e,t)},useTransition:function(){var e=d0(ga)[0],t=je().memoizedState;return[typeof e=="boolean"?e:Mu(e),t]},useSyncExternalStore:V1,useId:cM,useHostTransitionStatus:s_,useFormState:Ky,useActionState:Ky,useOptimistic:function(e,t){var n=je();return ye!==null?q1(n,ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:$g,useCacheRefresh:uM};mM.useEffectEvent=j1;function p0(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rg={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Si(),s=ir(i);s.payload=t,n!=null&&(s.callback=n),t=sr(e,s,i),t!==null&&(ii(t,e,i),qc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Si(),s=ir(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=sr(e,s,i),t!==null&&(ii(t,e,i),qc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Si(),i=ir(n);i.tag=2,t!=null&&(i.callback=t),t=sr(e,i,n),t!==null&&(ii(t,e,n),qc(t,e,n))}};function jy(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!su(n,i)||!su(s,a):!0}function $y(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&rg.enqueueReplaceState(t,t.state,null)}function ro(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Pe({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function gM(e){Cf(e)}function _M(e){console.error(e)}function vM(e){Cf(e)}function Bf(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function tS(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function og(e,t,n){return n=ir(n),n.tag=3,n.payload={element:null},n.callback=function(){Bf(e,t)},n}function xM(e){return e=ir(e),e.tag=3,e}function yM(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){tS(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){tS(t,n,i),typeof s!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function zC(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ul(t,n,s,!0),n=bi.current,n!==null){switch(n.tag){case 31:case 13:return Yi===null?Gf():n.alternate===null&&Ze===0&&(Ze=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Nf?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),E0(e,i,s)),!1;case 22:return n.flags|=65536,i===Nf?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),E0(e,i,s)),!1}throw Error(et(435,n.tag))}return E0(e,i,s),Gf(),!1}if(se)return t=bi.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Z0&&(e=Error(et(422),{cause:i}),ru(Wi(e,n)))):(i!==Z0&&(t=Error(et(423),{cause:i}),ru(Wi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Wi(i,n),s=og(e.stateNode,i,s),f0(e,s),Ze!==4&&(Ze=2)),!1;var a=Error(et(520),{cause:i});if(a=Wi(a,n),jc===null?jc=[a]:jc.push(a),Ze!==4&&(Ze=2),t===null)return!0;i=Wi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=og(n.stateNode,i,e),f0(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ar===null||!ar.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=xM(s),yM(s,e,n,i),f0(n,s),!1}n=n.return}while(n!==null);return!1}var o_=Error(et(461)),rn=!1;function Mn(e,t,n,i){t.child=e===null?P1(t,null,n,i):so(t,e.child,n,i)}function eS(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return io(t),i=Jg(e,t,n,r,a,s),o=Kg(),e!==null&&!rn?(Qg(e,t,s),_a(e,t,s)):(se&&o&&Hg(t),t.flags|=1,Mn(e,t,i,s),t.child)}function nS(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Vg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,SM(e,t,a,i,s)):(e=ff(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!l_(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:su,n(r,i)&&e.ref===t.ref)return _a(e,t,s)}return t.flags|=1,e=ha(a,i),e.ref=t.ref,e.return=t,t.child=e}function SM(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(su(a,i)&&e.ref===t.ref)if(rn=!1,t.pendingProps=i=a,l_(e,s))(e.flags&131072)!==0&&(rn=!0);else return t.lanes=e.lanes,_a(e,t,s)}return lg(e,t,n,i,s)}function MM(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return iS(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&df(t,a!==null?a.cachePool:null),a!==null?Wy(t,a):eg(),B1(t);else return i=t.lanes=536870912,iS(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(df(t,a.cachePool),Wy(t,a),Za(t),t.memoizedState=null):(e!==null&&df(t,null),eg(),Za(t));return Mn(e,t,s,n),t.child}function Vc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function iS(e,t,n,i,s){var a=Xg();return a=a===null?null:{parent:an._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&df(t,null),eg(),B1(t),e!==null&&Ul(e,t,i,!0),t.childLanes=s,null}function gf(e,t){return t=Ff({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sS(e,t,n){return so(t,e.child,null,n),e=gf(t,t.pendingProps),e.flags|=2,mi(t),t.memoizedState=null,e}function VC(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(se){if(i.mode==="hidden")return e=gf(t,i),t.lanes=536870912,Vc(null,e);if(ng(t),(e=Le)?(e=pb(e,qi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ur!==null?{id:ws,overflow:Cs}:null,retryLane:536870912,hydrationErrors:null},n=w1(e),n.return=t,t.child=n,Tn=t,Le=null)):e=null,e===null)throw hr(t);return t.lanes=536870912,null}return gf(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(ng(t),s)if(t.flags&256)t.flags&=-257,t=sS(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(et(558));else if(rn||Ul(e,t,n,!1),s=(n&e.childLanes)!==0,rn||s){if(i=Me,i!==null&&(r=$S(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,uo(e,r),ii(i,e,r),o_;Gf(),t=sS(e,t,n)}else e=a.treeContext,Le=Zi(r.nextSibling),Tn=t,se=!0,nr=null,qi=!1,e!==null&&R1(t,e),t=gf(t,i),t.flags|=4096;return t}return e=ha(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _f(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(et(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function lg(e,t,n,i,s){return io(t),n=Jg(e,t,n,i,void 0,s),i=Kg(),e!==null&&!rn?(Qg(e,t,s),_a(e,t,s)):(se&&i&&Hg(t),t.flags|=1,Mn(e,t,n,s),t.child)}function aS(e,t,n,i,s,a){return io(t),t.updateQueue=null,n=z1(t,i,n,s),F1(e),i=Kg(),e!==null&&!rn?(Qg(e,t,a),_a(e,t,a)):(se&&i&&Hg(t),t.flags|=1,Mn(e,t,n,a),t.child)}function rS(e,t,n,i,s){if(io(t),t.stateNode===null){var a=ol,r=n.contextType;typeof r=="object"&&r!==null&&(a=En(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=rg,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},qg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?En(r):ol,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(p0(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&rg.enqueueReplaceState(a,a.state,null),Zc(t,i,a,s),Yc(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=ro(n,o);a.props=l;var c=a.context,u=n.contextType;r=ol,typeof u=="object"&&u!==null&&(r=En(u));var m=n.getDerivedStateFromProps;u=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&$y(t,a,i,r),Wa=!1;var h=t.memoizedState;a.state=h,Zc(t,i,a,s),Yc(),c=t.memoizedState,o||h!==c||Wa?(typeof m=="function"&&(p0(t,n,m,i),c=t.memoizedState),(l=Wa||jy(t,n,l,i,h,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,$0(e,t),r=t.memoizedProps,u=ro(n,r),a.props=u,m=t.pendingProps,h=a.context,c=n.contextType,l=ol,typeof c=="object"&&c!==null&&(l=En(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==m||h!==l)&&$y(t,a,i,l),Wa=!1,h=t.memoizedState,a.state=h,Zc(t,i,a,s),Yc();var d=t.memoizedState;r!==m||h!==d||Wa||e!==null&&e.dependencies!==null&&Uf(e.dependencies)?(typeof o=="function"&&(p0(t,n,o,i),d=t.memoizedState),(u=Wa||jy(t,n,u,i,h,d,l)||e!==null&&e.dependencies!==null&&Uf(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,_f(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=so(t,e.child,null,s),t.child=so(t,null,n,s)):Mn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=_a(e,t,s),e}function oS(e,t,n,i){return no(),t.flags|=256,Mn(e,t,n,i),t.child}var m0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function g0(e){return{baseLanes:e,cachePool:U1()}}function _0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=_i),e}function bM(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(s?Ya(t):Za(t),(e=Le)?(e=pb(e,qi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ur!==null?{id:ws,overflow:Cs}:null,retryLane:536870912,hydrationErrors:null},n=w1(e),n.return=t,t.child=n,Tn=t,Le=null)):e=null,e===null)throw hr(t);return Mg(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Za(t),s=t.mode,o=Ff({mode:"hidden",children:o},s),i=jr(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=g0(n),i.childLanes=_0(e,r,n),t.memoizedState=m0,Vc(null,i)):(Ya(t),cg(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Ya(t),t.flags&=-257,t=v0(e,t,n)):t.memoizedState!==null?(Za(t),t.child=e.child,t.flags|=128,t=null):(Za(t),o=i.fallback,s=t.mode,i=Ff({mode:"visible",children:i.children},s),o=jr(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,so(t,e.child,null,n),i=t.child,i.memoizedState=g0(n),i.childLanes=_0(e,r,n),t.memoizedState=m0,t=Vc(null,i));else if(Ya(t),Mg(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(et(419)),i.stack="",i.digest=r,ru({value:i,source:null,stack:null}),t=v0(e,t,n)}else if(rn||Ul(e,t,n,!1),r=(n&e.childLanes)!==0,rn||r){if(r=Me,r!==null&&(i=$S(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,uo(e,i),ii(r,e,i),o_;Sg(o)||Gf(),t=v0(e,t,n)}else Sg(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Le=Zi(o.nextSibling),Tn=t,se=!0,nr=null,qi=!1,e!==null&&R1(t,e),t=cg(t,i.children),t.flags|=4096);return t}return s?(Za(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=ha(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ha(c,o):(o=jr(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Vc(null,i),i=t.child,o=e.child.memoizedState,o===null?o=g0(n):(s=o.cachePool,s!==null?(l=an._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=U1(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=_0(e,r,n),t.memoizedState=m0,Vc(e.child,i)):(Ya(t),n=e.child,e=n.sibling,n=ha(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function cg(e,t){return t=Ff({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ff(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function v0(e,t,n){return so(t,e.child,null,n),e=cg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lS(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),K0(e.return,t,n)}function x0(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function TM(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Qe.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ce(Qe,r),Mn(e,t,i,n),i=se?au:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lS(e,n,t);else if(e.tag===19)lS(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Pf(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),x0(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Pf(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}x0(t,!0,n,null,a,i);break;case"together":x0(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function _a(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ul(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(et(153));if(t.child!==null){for(e=t.child,n=ha(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ha(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function l_(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Uf(e)))}function HC(e,t,n){switch(t.tag){case 3:Tf(t,t.stateNode.containerInfo),qa(t,an,e.memoizedState.cache),no();break;case 27:case 5:B0(t);break;case 4:Tf(t,t.stateNode.containerInfo);break;case 10:qa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ng(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ya(t),t.flags|=128,null):(n&t.child.childLanes)!==0?bM(e,t,n):(Ya(t),e=_a(e,t,n),e!==null?e.sibling:null);Ya(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Ul(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return TM(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ce(Qe,Qe.current),i)break;return null;case 22:return t.lanes=0,MM(e,t,n,t.pendingProps);case 24:qa(t,an,e.memoizedState.cache)}return _a(e,t,n)}function EM(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rn=!0;else{if(!l_(e,n)&&(t.flags&128)===0)return rn=!1,HC(e,t,n);rn=(e.flags&131072)!==0}else rn=!1,se&&(t.flags&1048576)!==0&&C1(t,au,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Jr(t.elementType),t.type=e,typeof e=="function")Vg(e)?(i=ro(e,i),t.tag=1,t=rS(null,t,e,i,n)):(t.tag=0,t=lg(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Ag){t.tag=11,t=eS(null,t,e,i,n);break t}else if(s===wg){t.tag=14,t=nS(null,t,e,i,n);break t}}throw t=O0(e)||e,Error(et(306,t,""))}}return t;case 0:return lg(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=ro(i,t.pendingProps),rS(e,t,i,s,n);case 3:t:{if(Tf(t,t.stateNode.containerInfo),e===null)throw Error(et(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,$0(e,t),Zc(t,i,null,n);var r=t.memoizedState;if(i=r.cache,qa(t,an,i),i!==a.cache&&Q0(t,[an],n,!0),Yc(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=oS(e,t,i,n);break t}else if(i!==s){s=Wi(Error(et(424)),t),ru(s),t=oS(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Le=Zi(e.firstChild),Tn=t,se=!0,nr=null,qi=!0,n=P1(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),i===s){t=_a(e,t,n);break t}Mn(e,t,i,n)}t=t.child}return t;case 26:return _f(e,t),e===null?(n=DS(t.type,null,t.pendingProps,null))?t.memoizedState=n:se||(n=t.type,e=t.pendingProps,i=qf(er.current).createElement(n),i[bn]=t,i[si]=e,An(i,n,e),_n(i),t.stateNode=i):t.memoizedState=DS(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return B0(t),e===null&&se&&(i=t.stateNode=mb(t.type,t.pendingProps,er.current),Tn=t,qi=!0,s=Le,mr(t.type)?(bg=s,Le=Zi(i.firstChild)):Le=s),Mn(e,t,t.pendingProps.children,n),_f(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((s=i=Le)&&(i=m2(i,t.type,t.pendingProps,qi),i!==null?(t.stateNode=i,Tn=t,Le=Zi(i.firstChild),qi=!1,s=!0):s=!1),s||hr(t)),B0(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,xg(s,a)?i=null:r!==null&&xg(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Jg(e,t,NC,null,null,n),fu._currentValue=s),_f(e,t),Mn(e,t,i,n),t.child;case 6:return e===null&&se&&((e=n=Le)&&(n=g2(n,t.pendingProps,qi),n!==null?(t.stateNode=n,Tn=t,Le=null,e=!0):e=!1),e||hr(t)),null;case 13:return bM(e,t,n);case 4:return Tf(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=so(t,null,i,n):Mn(e,t,i,n),t.child;case 11:return eS(e,t,t.type,t.pendingProps,n);case 7:return Mn(e,t,t.pendingProps,n),t.child;case 8:return Mn(e,t,t.pendingProps.children,n),t.child;case 12:return Mn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,qa(t,t.type,i.value),Mn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,io(t),s=En(s),i=i(s),t.flags|=1,Mn(e,t,i,n),t.child;case 14:return nS(e,t,t.type,t.pendingProps,n);case 15:return SM(e,t,t.type,t.pendingProps,n);case 19:return TM(e,t,n);case 31:return VC(e,t,n);case 22:return MM(e,t,n,t.pendingProps);case 24:return io(t),i=En(an),e===null?(s=Xg(),s===null&&(s=Me,a=kg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},qg(t),qa(t,an,s)):((e.lanes&n)!==0&&($0(e,t),Zc(t,null,null,n),Yc()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),qa(t,an,i)):(i=a.cache,qa(t,an,i),i!==s.cache&&Q0(t,[an],n,!0))),Mn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(et(156,t.tag))}function na(e){e.flags|=4}function y0(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(JM())e.flags|=8192;else throw to=Nf,Wg}else e.flags&=-16777217}function cS(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vb(t))if(JM())e.flags|=8192;else throw to=Nf,Wg}function tf(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?KS():536870912,e.lanes|=t,Tl|=t)}function Lc(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function GC(e,t,n){var i=t.pendingProps;switch(Gg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),fa(an),vl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Jo(t)?na(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,h0())),Ne(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(na(t),a!==null?(Ne(t),cS(t,a)):(Ne(t),y0(t,s,null,i,n))):a?a!==e.memoizedState?(na(t),Ne(t),cS(t,a)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&na(t),Ne(t),y0(t,s,e,i,n)),null;case 27:if(Ef(t),n=er.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&na(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Ne(t),null}e=Ds.current,Jo(t)?Fy(t,e):(e=mb(s,i,n),t.stateNode=e,na(t))}return Ne(t),null;case 5:if(Ef(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&na(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Ne(t),null}if(a=Ds.current,Jo(t))Fy(t,a);else{var r=qf(er.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[bn]=t,a[si]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(An(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&na(t)}}return Ne(t),y0(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&na(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(et(166));if(e=er.current,Jo(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=Tn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[bn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||hb(e.nodeValue,n)),e||hr(t,!0)}else e=qf(e).createTextNode(i),e[bn]=t,t.stateNode=e}return Ne(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Jo(t),n!==null){if(e===null){if(!i)throw Error(et(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(557));e[bn]=t}else no(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else n=h0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(mi(t),t):(mi(t),null);if((t.flags&128)!==0)throw Error(et(558))}return Ne(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Jo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(et(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(et(317));s[bn]=t}else no(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),s=!1}else s=h0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(mi(t),t):(mi(t),null)}return mi(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),tf(t,t.updateQueue),Ne(t),null);case 4:return vl(),e===null&&m_(t.stateNode.containerInfo),Ne(t),null;case 10:return fa(t.type),Ne(t),null;case 19:if(vn(Qe),i=t.memoizedState,i===null)return Ne(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Lc(i,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Pf(e),a!==null){for(t.flags|=128,Lc(i,!1),e=a.updateQueue,t.updateQueue=e,tf(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)A1(n,e),n=n.sibling;return Ce(Qe,Qe.current&1|2),se&&ra(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&vi()>Vf&&(t.flags|=128,s=!0,Lc(i,!1),t.lanes=4194304)}else{if(!s)if(e=Pf(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,tf(t,e),Lc(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!se)return Ne(t),null}else 2*vi()-i.renderingStartTime>Vf&&n!==536870912&&(t.flags|=128,s=!0,Lc(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=vi(),e.sibling=null,n=Qe.current,Ce(Qe,s?n&1|2:n&1),se&&ra(t,i.treeForkCount),e):(Ne(t),null);case 22:case 23:return mi(t),Yg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),n=t.updateQueue,n!==null&&tf(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&vn($r),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),fa(an),Ne(t),null;case 25:return null;case 30:return null}throw Error(et(156,t.tag))}function kC(e,t){switch(Gg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fa(an),vl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ef(t),null;case 31:if(t.memoizedState!==null){if(mi(t),t.alternate===null)throw Error(et(340));no()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(et(340));no()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return vn(Qe),null;case 4:return vl(),null;case 10:return fa(t.type),null;case 22:case 23:return mi(t),Yg(),e!==null&&vn($r),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return fa(an),null;case 25:return null;default:return null}}function AM(e,t){switch(Gg(t),t.tag){case 3:fa(an),vl();break;case 26:case 27:case 5:Ef(t);break;case 4:vl();break;case 31:t.memoizedState!==null&&mi(t);break;case 13:mi(t);break;case 19:vn(Qe);break;case 10:fa(t.type);break;case 22:case 23:mi(t),Yg(),e!==null&&vn($r);break;case 24:fa(an)}}function bu(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ve(t,t.return,o)}}function fr(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){ve(s,l,u)}}}i=i.next}while(i!==a)}}catch(u){ve(t,t.return,u)}}function wM(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{I1(t,n)}catch(i){ve(e,e.return,i)}}}function CM(e,t,n){n.props=ro(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ve(e,t,i)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){ve(e,t,s)}}function Rs(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ve(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ve(e,t,s)}else n.current=null}function RM(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ve(e,e.return,s)}}function S0(e,t,n){try{var i=e.stateNode;c2(i,e.type,n,t),i[si]=t}catch(s){ve(e,e.return,s)}}function DM(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&mr(e.type)||e.tag===4}function M0(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||DM(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&mr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ug(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ca));else if(i!==4&&(i===27&&mr(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ug(e,t,n),e=e.sibling;e!==null;)ug(e,t,n),e=e.sibling}function zf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&mr(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zf(e,t,n),e=e.sibling;e!==null;)zf(e,t,n),e=e.sibling}function UM(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);An(t,i,n),t[bn]=e,t[si]=n}catch(a){ve(e,e.return,a)}}var oa=!1,sn=!1,b0=!1,uS=typeof WeakSet=="function"?WeakSet:Set,gn=null;function XC(e,t){if(e=e.containerInfo,_g=Kf,e=v1(e),Bg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,u=0,m=e,h=null;e:for(;;){for(var d;m!==n||s!==0&&m.nodeType!==3||(o=r+s),m!==a||i!==0&&m.nodeType!==3||(l=r+i),m.nodeType===3&&(r+=m.nodeValue.length),(d=m.firstChild)!==null;)h=m,m=d;for(;;){if(m===e)break e;if(h===n&&++c===s&&(o=r),h===a&&++u===i&&(l=r),(d=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vg={focusedElem:e,selectionRange:n},Kf=!1,gn=t;gn!==null;)if(t=gn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,gn=e;else for(;gn!==null;){switch(t=gn,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var f=ro(n.type,s);e=i.getSnapshotBeforeUpdate(f,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(_){ve(n,n.return,_)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)yg(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yg(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(et(163))}if(e=t.sibling,e!==null){e.return=t.return,gn=e;break}gn=t.return}}function NM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:sa(e,n),i&4&&bu(5,n);break;case 1:if(sa(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ve(n,n.return,r)}else{var s=ro(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ve(n,n.return,r)}}i&64&&wM(n),i&512&&Kc(n,n.return);break;case 3:if(sa(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{I1(e,t)}catch(r){ve(n,n.return,r)}}break;case 27:t===null&&i&4&&UM(n);case 26:case 5:sa(e,n),t===null&&i&4&&RM(n),i&512&&Kc(n,n.return);break;case 12:sa(e,n);break;case 31:sa(e,n),i&4&&OM(e,n);break;case 13:sa(e,n),i&4&&IM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=$C.bind(null,n),_2(e,n))));break;case 22:if(i=n.memoizedState!==null||oa,!i){t=t!==null&&t.memoizedState!==null||sn,s=oa;var a=sn;oa=i,(sn=t)&&!a?aa(e,n,(n.subtreeFlags&8772)!==0):sa(e,n),oa=s,sn=a}break;case 30:break;default:sa(e,n)}}function LM(e){var t=e.alternate;t!==null&&(e.alternate=null,LM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ug(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fe=null,ei=!1;function ia(e,t,n){for(n=n.child;n!==null;)PM(e,t,n),n=n.sibling}function PM(e,t,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 26:sn||Rs(n,t),ia(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:sn||Rs(n,t);var i=Fe,s=ei;mr(n.type)&&(Fe=n.stateNode,ei=!1),ia(e,t,n),tu(n.stateNode),Fe=i,ei=s;break;case 5:sn||Rs(n,t);case 6:if(i=Fe,s=ei,Fe=null,ia(e,t,n),Fe=i,ei=s,Fe!==null)if(ei)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(n.stateNode)}catch(a){ve(n,t,a)}else try{Fe.removeChild(n.stateNode)}catch(a){ve(n,t,a)}break;case 18:Fe!==null&&(ei?(e=Fe,ES(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Cl(e)):ES(Fe,n.stateNode));break;case 4:i=Fe,s=ei,Fe=n.stateNode.containerInfo,ei=!0,ia(e,t,n),Fe=i,ei=s;break;case 0:case 11:case 14:case 15:fr(2,n,t),sn||fr(4,n,t),ia(e,t,n);break;case 1:sn||(Rs(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&CM(n,t,i)),ia(e,t,n);break;case 21:ia(e,t,n);break;case 22:sn=(i=sn)||n.memoizedState!==null,ia(e,t,n),sn=i;break;default:ia(e,t,n)}}function OM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cl(e)}catch(n){ve(t,t.return,n)}}}function IM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(n){ve(t,t.return,n)}}function WC(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new uS),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new uS),t;default:throw Error(et(435,e.tag))}}function ef(e,t){var n=WC(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=t2.bind(null,e,i);i.then(s,s)}})}function $n(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(mr(o.type)){Fe=o.stateNode,ei=!1;break t}break;case 5:Fe=o.stateNode,ei=!1;break t;case 3:case 4:Fe=o.stateNode.containerInfo,ei=!0;break t}o=o.return}if(Fe===null)throw Error(et(160));PM(a,r,s),Fe=null,ei=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)BM(t,e),t=t.sibling}var os=null;function BM(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$n(t,e),ti(e),i&4&&(fr(3,e,e.return),bu(3,e),fr(5,e,e.return));break;case 1:$n(t,e),ti(e),i&512&&(sn||n===null||Rs(n,n.return)),i&64&&oa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=os;if($n(t,e),ti(e),i&512&&(sn||n===null||Rs(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[xu]||a[bn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),An(a,i,n),a[bn]=e,_n(a),i=a;break t;case"link":var r=NS("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),An(a,i,n),s.head.appendChild(a);break;case"meta":if(r=NS("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),An(a,i,n),s.head.appendChild(a);break;default:throw Error(et(468,i))}a[bn]=e,_n(a),i=a}e.stateNode=i}else LS(s,e.type,e.stateNode);else e.stateNode=US(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?LS(s,e.type,e.stateNode):US(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&S0(e,e.memoizedProps,n.memoizedProps)}break;case 27:$n(t,e),ti(e),i&512&&(sn||n===null||Rs(n,n.return)),n!==null&&i&4&&S0(e,e.memoizedProps,n.memoizedProps);break;case 5:if($n(t,e),ti(e),i&512&&(sn||n===null||Rs(n,n.return)),e.flags&32){s=e.stateNode;try{yl(s,"")}catch(f){ve(e,e.return,f)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,S0(e,s,n!==null?n.memoizedProps:s)),i&1024&&(b0=!0);break;case 6:if($n(t,e),ti(e),i&4){if(e.stateNode===null)throw Error(et(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(f){ve(e,e.return,f)}}break;case 3:if(yf=null,s=os,os=Yf(t.containerInfo),$n(t,e),os=s,ti(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(f){ve(e,e.return,f)}b0&&(b0=!1,FM(e));break;case 4:i=os,os=Yf(e.stateNode.containerInfo),$n(t,e),ti(e),os=i;break;case 12:$n(t,e),ti(e);break;case 31:$n(t,e),ti(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ef(e,i)));break;case 13:$n(t,e),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(cd=vi()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ef(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=oa,u=sn;if(oa=c||s,sn=u||l,$n(t,e),sn=u,oa=c,ti(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||oa||sn||Kr(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var m=l.memoizedProps.style,h=m!=null&&m.hasOwnProperty("display")?m.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(f){ve(l,l.return,f)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(f){ve(l,l.return,f)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;s?AS(d,!0):AS(l.stateNode,!1)}catch(f){ve(l,l.return,f)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ef(e,n))));break;case 19:$n(t,e),ti(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ef(e,i)));break;case 30:break;case 21:break;default:$n(t,e),ti(e)}}function ti(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(DM(i)){n=i;break}i=i.return}if(n==null)throw Error(et(160));switch(n.tag){case 27:var s=n.stateNode,a=M0(e);zf(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(yl(r,""),n.flags&=-33);var o=M0(e);zf(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=M0(e);ug(e,c,l);break;default:throw Error(et(161))}}catch(u){ve(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function FM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;FM(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)NM(e,t.alternate,t),t=t.sibling}function Kr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:fr(4,t,t.return),Kr(t);break;case 1:Rs(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&CM(t,t.return,n),Kr(t);break;case 27:tu(t.stateNode);case 26:case 5:Rs(t,t.return),Kr(t);break;case 22:t.memoizedState===null&&Kr(t);break;case 30:Kr(t);break;default:Kr(t)}e=e.sibling}}function aa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:aa(s,a,n),bu(4,a);break;case 1:if(aa(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ve(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)O1(l[s],o)}catch(c){ve(i,i.return,c)}}n&&r&64&&wM(a),Kc(a,a.return);break;case 27:UM(a);case 26:case 5:aa(s,a,n),n&&i===null&&r&4&&RM(a),Kc(a,a.return);break;case 12:aa(s,a,n);break;case 31:aa(s,a,n),n&&r&4&&OM(s,a);break;case 13:aa(s,a,n),n&&r&4&&IM(s,a);break;case 22:a.memoizedState===null&&aa(s,a,n),Kc(a,a.return);break;case 30:break;default:aa(s,a,n)}t=t.sibling}}function c_(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Su(n))}function u_(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Su(e))}function rs(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zM(e,t,n,i),t=t.sibling}function zM(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:rs(e,t,n,i),s&2048&&bu(9,t);break;case 1:rs(e,t,n,i);break;case 3:rs(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Su(e)));break;case 12:if(s&2048){rs(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ve(t,t.return,l)}}else rs(e,t,n,i);break;case 31:rs(e,t,n,i);break;case 13:rs(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?rs(e,t,n,i):Qc(e,t):a._visibility&2?rs(e,t,n,i):(a._visibility|=2,Qo(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&c_(r,t);break;case 24:rs(e,t,n,i),s&2048&&u_(t.alternate,t);break;default:rs(e,t,n,i)}}function Qo(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Qo(a,r,o,l,s),bu(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?Qo(a,r,o,l,s):Qc(a,r):(u._visibility|=2,Qo(a,r,o,l,s)),s&&c&2048&&c_(r.alternate,r);break;case 24:Qo(a,r,o,l,s),s&&c&2048&&u_(r.alternate,r);break;default:Qo(a,r,o,l,s)}t=t.sibling}}function Qc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Qc(n,i),s&2048&&c_(i.alternate,i);break;case 24:Qc(n,i),s&2048&&u_(i.alternate,i);break;default:Qc(n,i)}t=t.sibling}}var Hc=8192;function Ko(e,t,n){if(e.subtreeFlags&Hc)for(e=e.child;e!==null;)VM(e,t,n),e=e.sibling}function VM(e,t,n){switch(e.tag){case 26:Ko(e,t,n),e.flags&Hc&&e.memoizedState!==null&&R2(n,os,e.memoizedState,e.memoizedProps);break;case 5:Ko(e,t,n);break;case 3:case 4:var i=os;os=Yf(e.stateNode.containerInfo),Ko(e,t,n),os=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Hc,Hc=16777216,Ko(e,t,n),Hc=i):Ko(e,t,n));break;default:Ko(e,t,n)}}function HM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];gn=i,kM(i,e)}HM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)GM(e),e=e.sibling}function GM(e){switch(e.tag){case 0:case 11:case 15:Pc(e),e.flags&2048&&fr(9,e,e.return);break;case 3:Pc(e);break;case 12:Pc(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vf(e)):Pc(e);break;default:Pc(e)}}function vf(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];gn=i,kM(i,e)}HM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:fr(8,t,t.return),vf(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,vf(t));break;default:vf(t)}e=e.sibling}}function kM(e,t){for(;gn!==null;){var n=gn;switch(n.tag){case 0:case 11:case 15:fr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Su(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,gn=i;else t:for(n=e;gn!==null;){i=gn;var s=i.sibling,a=i.return;if(LM(i),i===n){gn=null;break t}if(s!==null){s.return=a,gn=s;break t}gn=a}}}var qC={getCacheForType:function(e){var t=En(an),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return En(an).controller.signal}},YC=typeof WeakMap=="function"?WeakMap:Map,ce=0,Me=null,Kt=null,te=0,_e=0,pi=null,ja=!1,Ll=!1,h_=!1,va=0,Ze=0,dr=0,eo=0,f_=0,_i=0,Tl=0,jc=null,ni=null,hg=!1,cd=0,XM=0,Vf=1/0,Hf=null,ar=null,ln=0,rr=null,El=null,da=0,fg=0,dg=null,WM=null,$c=0,pg=null;function Si(){return(ce&2)!==0&&te!==0?te&-te:Ot.T!==null?p_():t1()}function qM(){if(_i===0)if((te&536870912)===0||se){var e=Wh;Wh<<=1,(Wh&3932160)===0&&(Wh=262144),_i=e}else _i=536870912;return e=bi.current,e!==null&&(e.flags|=32),_i}function ii(e,t,n){(e===Me&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(Al(e,0),$a(e,te,_i,!1)),vu(e,n),((ce&2)===0||e!==Me)&&(e===Me&&((ce&2)===0&&(eo|=n),Ze===4&&$a(e,te,_i,!1)),Ns(e))}function YM(e,t,n){if((ce&6)!==0)throw Error(et(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||_u(e,t),s=i?KC(e,t):T0(e,t,!0),a=i;do{if(s===0){Ll&&!i&&$a(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!ZC(n)){s=T0(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=jc;var l=o.current.memoizedState.isDehydrated;if(l&&(Al(o,r).flags|=256),r=T0(o,r,!1),r!==2){if(h_&&!l){o.errorRecoveryDisabledLanes|=a,eo|=a,s=4;break t}a=ni,ni=s,a!==null&&(ni===null?ni=a:ni.push.apply(ni,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Al(e,0),$a(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(et(345));case 4:if((t&4194048)!==t)break;case 6:$a(i,t,_i,!ja);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(et(329))}if((t&62914560)===t&&(s=cd+300-vi(),10<s)){if($a(i,t,_i,!ja),jf(i,0,!0)!==0)break t;da=t,i.timeoutHandle=db(hS.bind(null,i,n,ni,Hf,hg,t,_i,eo,Tl,ja,a,"Throttled",-0,0),s);break t}hS(i,n,ni,Hf,hg,t,_i,eo,Tl,ja,a,null,-0,0)}}break}while(!0);Ns(e)}function hS(e,t,n,i,s,a,r,o,l,c,u,m,h,d){if(e.timeoutHandle=-1,m=t.subtreeFlags,m&8192||(m&16785408)===16785408){m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},VM(t,a,m);var f=(a&62914560)===a?cd-vi():(a&4194048)===a?XM-vi():0;if(f=D2(m,f),f!==null){da=a,e.cancelPendingCommit=f(dS.bind(null,e,t,a,n,i,s,r,o,l,u,m,null,h,d)),$a(e,a,r,!c);return}}dS(e,t,a,n,i,s,r,o,l)}function ZC(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Mi(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $a(e,t,n,i){t&=~f_,t&=~eo,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-yi(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&QS(e,n,t)}function ud(){return(ce&6)===0?(Tu(0,!1),!1):!0}function d_(){if(Kt!==null){if(_e===0)var e=Kt.return;else e=Kt,ua=ho=null,jg(e),ml=null,ou=0,e=Kt;for(;e!==null;)AM(e.alternate,e),e=e.return;Kt=null}}function Al(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,f2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),da=0,d_(),Me=e,Kt=n=ha(e.current,null),te=t,_e=0,pi=null,ja=!1,Ll=_u(e,t),h_=!1,Tl=_i=f_=eo=dr=Ze=0,ni=jc=null,hg=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-yi(i),a=1<<s;t|=e[s],i&=~a}return va=t,nd(),n}function ZM(e,t){Gt=null,Ot.H=cu,t===Nl||t===sd?(t=ky(),_e=3):t===Wg?(t=ky(),_e=4):_e=t===o_?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pi=t,Kt===null&&(Ze=1,Bf(e,Wi(t,e.current)))}function JM(){var e=bi.current;return e===null?!0:(te&4194048)===te?Yi===null:(te&62914560)===te||(te&536870912)!==0?e===Yi:!1}function KM(){var e=Ot.H;return Ot.H=cu,e===null?cu:e}function QM(){var e=Ot.A;return Ot.A=qC,e}function Gf(){Ze=4,ja||(te&4194048)!==te&&bi.current!==null||(Ll=!0),(dr&134217727)===0&&(eo&134217727)===0||Me===null||$a(Me,te,_i,!1)}function T0(e,t,n){var i=ce;ce|=2;var s=KM(),a=QM();(Me!==e||te!==t)&&(Hf=null,Al(e,t)),t=!1;var r=Ze;t:do try{if(_e!==0&&Kt!==null){var o=Kt,l=pi;switch(_e){case 8:d_(),r=6;break t;case 3:case 2:case 9:case 6:bi.current===null&&(t=!0);var c=_e;if(_e=0,pi=null,ul(e,o,l,c),n&&Ll){r=0;break t}break;default:c=_e,_e=0,pi=null,ul(e,o,l,c)}}JC(),r=Ze;break}catch(u){ZM(e,u)}while(!0);return t&&e.shellSuspendCounter++,ua=ho=null,ce=i,Ot.H=s,Ot.A=a,Kt===null&&(Me=null,te=0,nd()),r}function JC(){for(;Kt!==null;)jM(Kt)}function KC(e,t){var n=ce;ce|=2;var i=KM(),s=QM();Me!==e||te!==t?(Hf=null,Vf=vi()+500,Al(e,t)):Ll=_u(e,t);t:do try{if(_e!==0&&Kt!==null){t=Kt;var a=pi;e:switch(_e){case 1:_e=0,pi=null,ul(e,t,a,1);break;case 2:case 9:if(Gy(a)){_e=0,pi=null,fS(t);break}t=function(){_e!==2&&_e!==9||Me!==e||(_e=7),Ns(e)},a.then(t,t);break t;case 3:_e=7;break t;case 4:_e=5;break t;case 7:Gy(a)?(_e=0,pi=null,fS(t)):(_e=0,pi=null,ul(e,t,a,7));break;case 5:var r=null;switch(Kt.tag){case 26:r=Kt.memoizedState;case 5:case 27:var o=Kt;if(r?vb(r):o.stateNode.complete){_e=0,pi=null;var l=o.sibling;if(l!==null)Kt=l;else{var c=o.return;c!==null?(Kt=c,hd(c)):Kt=null}break e}}_e=0,pi=null,ul(e,t,a,5);break;case 6:_e=0,pi=null,ul(e,t,a,6);break;case 8:d_(),Ze=6;break t;default:throw Error(et(462))}}QC();break}catch(u){ZM(e,u)}while(!0);return ua=ho=null,Ot.H=i,Ot.A=s,ce=n,Kt!==null?0:(Me=null,te=0,nd(),Ze)}function QC(){for(;Kt!==null&&!yw();)jM(Kt)}function jM(e){var t=EM(e.alternate,e,va);e.memoizedProps=e.pendingProps,t===null?hd(e):Kt=t}function fS(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=aS(n,t,t.pendingProps,t.type,void 0,te);break;case 11:t=aS(n,t,t.pendingProps,t.type.render,t.ref,te);break;case 5:jg(t);default:AM(n,t),t=Kt=A1(t,va),t=EM(n,t,va)}e.memoizedProps=e.pendingProps,t===null?hd(e):Kt=t}function ul(e,t,n,i){ua=ho=null,jg(t),ml=null,ou=0;var s=t.return;try{if(zC(e,s,t,n,te)){Ze=1,Bf(e,Wi(n,e.current)),Kt=null;return}}catch(a){if(s!==null)throw Kt=s,a;Ze=1,Bf(e,Wi(n,e.current)),Kt=null;return}t.flags&32768?(se||i===1?e=!0:Ll||(te&536870912)!==0?e=!1:(ja=e=!0,(i===2||i===9||i===3||i===6)&&(i=bi.current,i!==null&&i.tag===13&&(i.flags|=16384))),$M(t,e)):hd(t)}function hd(e){var t=e;do{if((t.flags&32768)!==0){$M(t,ja);return}e=t.return;var n=GC(t.alternate,t,va);if(n!==null){Kt=n;return}if(t=t.sibling,t!==null){Kt=t;return}Kt=t=e}while(t!==null);Ze===0&&(Ze=5)}function $M(e,t){do{var n=kC(e.alternate,e);if(n!==null){n.flags&=32767,Kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Kt=e;return}Kt=e=n}while(e!==null);Ze=6,Kt=null}function dS(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do fd();while(ln!==0);if((ce&6)!==0)throw Error(et(327));if(t!==null){if(t===e.current)throw Error(et(177));if(a=t.lanes|t.childLanes,a|=Fg,Dw(e,n,a,r,o,l),e===Me&&(Kt=Me=null,te=0),El=t,rr=e,da=n,fg=a,dg=s,WM=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,e2(Af,function(){return sb(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ot.T,Ot.T=null,s=ue.p,ue.p=2,r=ce,ce|=4;try{XC(e,t,n)}finally{ce=r,ue.p=s,Ot.T=i}}ln=1,tb(),eb(),nb()}}function tb(){if(ln===1){ln=0;var e=rr,t=El,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Ot.T,Ot.T=null;var i=ue.p;ue.p=2;var s=ce;ce|=4;try{BM(t,e);var a=vg,r=v1(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&_1(o.ownerDocument.documentElement,o)){if(l!==null&&Bg(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var m=o.ownerDocument||document,h=m&&m.defaultView||window;if(h.getSelection){var d=h.getSelection(),f=o.textContent.length,_=Math.min(l.start,f),g=l.end===void 0?_:Math.min(l.end,f);!d.extend&&_>g&&(r=g,g=_,_=r);var p=Oy(o,_),v=Oy(o,g);if(p&&v&&(d.rangeCount!==1||d.anchorNode!==p.node||d.anchorOffset!==p.offset||d.focusNode!==v.node||d.focusOffset!==v.offset)){var S=m.createRange();S.setStart(p.node,p.offset),d.removeAllRanges(),_>g?(d.addRange(S),d.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),d.addRange(S))}}}}for(m=[],d=o;d=d.parentNode;)d.nodeType===1&&m.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<m.length;o++){var x=m[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Kf=!!_g,vg=_g=null}finally{ce=s,ue.p=i,Ot.T=n}}e.current=t,ln=2}}function eb(){if(ln===2){ln=0;var e=rr,t=El,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ot.T,Ot.T=null;var i=ue.p;ue.p=2;var s=ce;ce|=4;try{NM(e,t.alternate,t)}finally{ce=s,ue.p=i,Ot.T=n}}ln=3}}function nb(){if(ln===4||ln===3){ln=0,Sw();var e=rr,t=El,n=da,i=WM;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ln=5:(ln=0,El=rr=null,ib(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ar=null),Dg(n),t=t.stateNode,xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ot.T,s=ue.p,ue.p=2,Ot.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Ot.T=t,ue.p=s}}(da&3)!==0&&fd(),Ns(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===pg?$c++:($c=0,pg=e):$c=0,Tu(0,!1)}}function ib(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Su(t)))}function fd(){return tb(),eb(),nb(),sb()}function sb(){if(ln!==5)return!1;var e=rr,t=fg;fg=0;var n=Dg(da),i=Ot.T,s=ue.p;try{ue.p=32>n?32:n,Ot.T=null,n=dg,dg=null;var a=rr,r=da;if(ln=0,El=rr=null,da=0,(ce&6)!==0)throw Error(et(331));var o=ce;if(ce|=4,GM(a.current),zM(a,a.current,r,n),ce=o,Tu(0,!1),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(gu,a)}catch{}return!0}finally{ue.p=s,Ot.T=i,ib(e,t)}}function pS(e,t,n){t=Wi(n,t),t=og(e.stateNode,t,2),e=sr(e,t,2),e!==null&&(vu(e,2),Ns(e))}function ve(e,t,n){if(e.tag===3)pS(e,e,n);else for(;t!==null;){if(t.tag===3){pS(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){e=Wi(n,e),n=xM(2),i=sr(t,n,2),i!==null&&(yM(n,i,t,e),vu(i,2),Ns(i));break}}t=t.return}}function E0(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new YC;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(h_=!0,s.add(n),e=jC.bind(null,e,t,n),t.then(e,e))}function jC(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Me===e&&(te&n)===n&&(Ze===4||Ze===3&&(te&62914560)===te&&300>vi()-cd?(ce&2)===0&&Al(e,0):f_|=n,Tl===te&&(Tl=0)),Ns(e)}function ab(e,t){t===0&&(t=KS()),e=uo(e,t),e!==null&&(vu(e,t),Ns(e))}function $C(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ab(e,n)}function t2(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(et(314))}i!==null&&i.delete(t),ab(e,n)}function e2(e,t){return Cg(e,t)}var kf=null,jo=null,mg=!1,Xf=!1,A0=!1,tr=0;function Ns(e){e!==jo&&e.next===null&&(jo===null?kf=jo=e:jo=jo.next=e),Xf=!0,mg||(mg=!0,i2())}function Tu(e,t){if(!A0&&Xf){A0=!0;do for(var n=!1,i=kf;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-yi(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,mS(i,a))}else a=te,a=jf(i,i===Me?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||_u(i,a)||(n=!0,mS(i,a));i=i.next}while(n);A0=!1}}function n2(){rb()}function rb(){Xf=mg=!1;var e=0;tr!==0&&h2()&&(e=tr);for(var t=vi(),n=null,i=kf;i!==null;){var s=i.next,a=ob(i,t);a===0?(i.next=null,n===null?kf=s:n.next=s,s===null&&(jo=n)):(n=i,(e!==0||(a&3)!==0)&&(Xf=!0)),i=s}ln!==0&&ln!==5||Tu(e,!1),tr!==0&&(tr=0)}function ob(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-yi(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=Rw(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Me,n=te,n=jf(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&e0(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_u(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&e0(i),Dg(n)){case 2:case 8:n=ZS;break;case 32:n=Af;break;case 268435456:n=JS;break;default:n=Af}return i=lb.bind(null,e),n=Cg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&e0(i),e.callbackPriority=2,e.callbackNode=null,2}function lb(e,t){if(ln!==0&&ln!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(fd()&&e.callbackNode!==n)return null;var i=te;return i=jf(e,e===Me?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(YM(e,i,t),ob(e,vi()),e.callbackNode!=null&&e.callbackNode===n?lb.bind(null,e):null)}function mS(e,t){if(fd())return null;YM(e,t,!0)}function i2(){d2(function(){(ce&6)!==0?Cg(YS,n2):rb()})}function p_(){if(tr===0){var e=Sl;e===0&&(e=Xh,Xh<<=1,(Xh&261888)===0&&(Xh=256)),tr=e}return tr}function gS(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cf(""+e)}function _S(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function s2(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=gS((s[si]||null).action),r=i.submitter;r&&(t=(t=r[si]||null)?gS(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new $f("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(tr!==0){var l=r?_S(s,r):new FormData(s);ag(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?_S(s,r):new FormData(s),ag(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(nf=0;nf<Y0.length;nf++)sf=Y0[nf],vS=sf.toLowerCase(),xS=sf[0].toUpperCase()+sf.slice(1),ls(vS,"on"+xS);var sf,vS,xS,nf;ls(y1,"onAnimationEnd");ls(S1,"onAnimationIteration");ls(M1,"onAnimationStart");ls("dblclick","onDoubleClick");ls("focusin","onFocus");ls("focusout","onBlur");ls(MC,"onTransitionRun");ls(bC,"onTransitionStart");ls(TC,"onTransitionCancel");ls(b1,"onTransitionEnd");xl("onMouseEnter",["mouseout","mouseover"]);xl("onMouseLeave",["mouseout","mouseover"]);xl("onPointerEnter",["pointerout","pointerover"]);xl("onPointerLeave",["pointerout","pointerover"]);oo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oo("onBeforeInput",["compositionend","keypress","textInput","paste"]);oo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uu));function cb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){Cf(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){Cf(u)}s.currentTarget=null,a=l}}}}function Jt(e,t){var n=t[z0];n===void 0&&(n=t[z0]=new Set);var i=e+"__bubble";n.has(i)||(ub(t,e,2,!1),n.add(i))}function w0(e,t,n){var i=0;t&&(i|=4),ub(n,e,i,t)}var af="_reactListening"+Math.random().toString(36).slice(2);function m_(e){if(!e[af]){e[af]=!0,e1.forEach(function(n){n!=="selectionchange"&&(a2.has(n)||w0(n,!1,e),w0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[af]||(t[af]=!0,w0("selectionchange",!1,t))}}function ub(e,t,n,i){switch(bb(t)){case 2:var s=L2;break;case 8:s=P2;break;default:s=x_}n=s.bind(null,t,n,e),s=void 0,!X0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function C0(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=el(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}c1(function(){var c=a,u=Lg(n),m=[];t:{var h=T1.get(e);if(h!==void 0){var d=$f,f=e;switch(e){case"keypress":if(hf(n)===0)break t;case"keydown":case"keyup":d=tC;break;case"focusin":f="focus",d=r0;break;case"focusout":f="blur",d=r0;break;case"beforeblur":case"afterblur":d=r0;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Ay;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Gw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=iC;break;case y1:case S1:case M1:d=Ww;break;case b1:d=aC;break;case"scroll":case"scrollend":d=Vw;break;case"wheel":d=oC;break;case"copy":case"cut":case"paste":d=Yw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Cy;break;case"toggle":case"beforetoggle":d=cC}var _=(t&4)!==0,g=!_&&(e==="scroll"||e==="scrollend"),p=_?h!==null?h+"Capture":null:h;_=[];for(var v=c,S;v!==null;){var x=v;if(S=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||S===null||p===null||(x=nu(v,p),x!=null&&_.push(hu(v,x,S))),g)break;v=v.return}0<_.length&&(h=new d(h,f,null,n,u),m.push({event:h,listeners:_}))}}if((t&7)===0){t:{if(h=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",h&&n!==k0&&(f=n.relatedTarget||n.fromElement)&&(el(f)||f[Rl]))break t;if((d||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,d?(f=n.relatedTarget||n.toElement,d=c,f=f?el(f):null,f!==null&&(g=mu(f),_=f.tag,f!==g||_!==5&&_!==27&&_!==6)&&(f=null)):(d=null,f=c),d!==f)){if(_=Ay,x="onMouseLeave",p="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(_=Cy,x="onPointerLeave",p="onPointerEnter",v="pointer"),g=d==null?h:zc(d),S=f==null?h:zc(f),h=new _(x,v+"leave",d,n,u),h.target=g,h.relatedTarget=S,x=null,el(u)===c&&(_=new _(p,v+"enter",f,n,u),_.target=S,_.relatedTarget=g,x=_),g=x,d&&f)e:{for(_=r2,p=d,v=f,S=0,x=p;x;x=_(x))S++;x=0;for(var T=v;T;T=_(T))x++;for(;0<S-x;)p=_(p),S--;for(;0<x-S;)v=_(v),x--;for(;S--;){if(p===v||v!==null&&p===v.alternate){_=p;break e}p=_(p),v=_(v)}_=null}else _=null;d!==null&&yS(m,h,d,_,!1),f!==null&&g!==null&&yS(m,g,f,_,!0)}}t:{if(h=c?zc(c):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var b=Ny;else if(Uy(h))if(m1)b=xC;else{b=_C;var A=gC}else d=h.nodeName,!d||d.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Ng(c.elementType)&&(b=Ny):b=vC;if(b&&(b=b(e,c))){p1(m,b,n,u);break t}A&&A(e,h,c),e==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&G0(h,"number",h.value)}switch(A=c?zc(c):window,e){case"focusin":(Uy(A)||A.contentEditable==="true")&&(sl=A,W0=c,Xc=null);break;case"focusout":Xc=W0=sl=null;break;case"mousedown":q0=!0;break;case"contextmenu":case"mouseup":case"dragend":q0=!1,Iy(m,n,u);break;case"selectionchange":if(SC)break;case"keydown":case"keyup":Iy(m,n,u)}var y;if(Ig)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else il?f1(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(h1&&n.locale!=="ko"&&(il||E!=="onCompositionStart"?E==="onCompositionEnd"&&il&&(y=u1()):(Qa=u,Pg="value"in Qa?Qa.value:Qa.textContent,il=!0)),A=Wf(c,E),0<A.length&&(E=new wy(E,e,null,n,u),m.push({event:E,listeners:A}),y?E.data=y:(y=d1(n),y!==null&&(E.data=y)))),(y=hC?fC(e,n):dC(e,n))&&(E=Wf(c,"onBeforeInput"),0<E.length&&(A=new wy("onBeforeInput","beforeinput",null,n,u),m.push({event:A,listeners:E}),A.data=y)),s2(m,e,c,n,u)}cb(m,t)})}function hu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wf(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=nu(e,n),s!=null&&i.unshift(hu(e,s,a)),s=nu(e,t),s!=null&&i.push(hu(e,s,a))),e.tag===3)return i;e=e.return}return[]}function r2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function yS(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=nu(n,a),c!=null&&r.unshift(hu(n,c,l))):s||(c=nu(n,a),c!=null&&r.push(hu(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var o2=/\r\n?/g,l2=/\u0000|\uFFFD/g;function SS(e){return(typeof e=="string"?e:""+e).replace(o2,`
`).replace(l2,"")}function hb(e,t){return t=SS(t),SS(e)===t}function xe(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||yl(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&yl(e,""+i);break;case"className":Yh(e,"class",i);break;case"tabIndex":Yh(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Yh(e,n,i);break;case"style":l1(e,i,a);break;case"data":if(t!=="object"){Yh(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=cf(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&xe(e,t,"name",s.name,s,null),xe(e,t,"formEncType",s.formEncType,s,null),xe(e,t,"formMethod",s.formMethod,s,null),xe(e,t,"formTarget",s.formTarget,s,null)):(xe(e,t,"encType",s.encType,s,null),xe(e,t,"method",s.method,s,null),xe(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=cf(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ca);break;case"onScroll":i!=null&&Jt("scroll",e);break;case"onScrollEnd":i!=null&&Jt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(et(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=cf(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Jt("beforetoggle",e),Jt("toggle",e),lf(e,"popover",i);break;case"xlinkActuate":ea(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ea(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ea(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ea(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ea(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ea(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ea(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ea(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ea(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":lf(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Fw.get(n)||n,lf(e,n,i))}}function gg(e,t,n,i,s,a){switch(n){case"style":l1(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(et(60));e.innerHTML=n}}break;case"children":typeof i=="string"?yl(e,i):(typeof i=="number"||typeof i=="bigint")&&yl(e,""+i);break;case"onScroll":i!=null&&Jt("scroll",e);break;case"onScrollEnd":i!=null&&Jt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!n1.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[si]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):lf(e,n,i)}}}function An(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Jt("error",e),Jt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:xe(e,t,a,r,n,null)}}s&&xe(e,t,"srcSet",n.srcSet,n,null),i&&xe(e,t,"src",n.src,n,null);return;case"input":Jt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(et(137,t));break;default:xe(e,t,i,u,n,null)}}a1(e,a,o,l,c,r,s,!1);return;case"select":Jt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:xe(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?fl(e,!!i,t,!1):n!=null&&fl(e,!!i,n,!0);return;case"textarea":Jt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(et(91));break;default:xe(e,t,r,o,n,null)}o1(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":xe(e,t,l,i,n,null));return;case"dialog":Jt("beforetoggle",e),Jt("toggle",e),Jt("cancel",e),Jt("close",e);break;case"iframe":case"object":Jt("load",e);break;case"video":case"audio":for(i=0;i<uu.length;i++)Jt(uu[i],e);break;case"image":Jt("error",e),Jt("load",e);break;case"details":Jt("toggle",e);break;case"embed":case"source":case"link":Jt("error",e),Jt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:xe(e,t,c,i,n,null)}return;default:if(Ng(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&gg(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&xe(e,t,o,i,n,null))}function c2(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(d in n){var m=n[d];if(n.hasOwnProperty(d)&&m!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=m;default:i.hasOwnProperty(d)||xe(e,t,d,null,i,m)}}for(var h in i){var d=i[h];if(m=n[h],i.hasOwnProperty(h)&&(d!=null||m!=null))switch(h){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(et(137,t));break;default:d!==m&&xe(e,t,h,d,i,m)}}H0(e,r,o,l,c,u,a,s);return;case"select":d=r=o=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||xe(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":h=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&xe(e,t,s,a,i,l)}t=o,n=r,i=d,h!=null?fl(e,!!n,h,!1):!!i!=!!n&&(t!=null?fl(e,!!n,t,!0):fl(e,!!n,n?[]:"",!1));return;case"textarea":d=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:xe(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":h=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(et(91));break;default:s!==a&&xe(e,t,r,s,i,a)}r1(e,h,d);return;case"option":for(var f in n)h=n[f],n.hasOwnProperty(f)&&h!=null&&!i.hasOwnProperty(f)&&(f==="selected"?e.selected=!1:xe(e,t,f,null,i,h));for(l in i)h=i[l],d=n[l],i.hasOwnProperty(l)&&h!==d&&(h!=null||d!=null)&&(l==="selected"?e.selected=h&&typeof h!="function"&&typeof h!="symbol":xe(e,t,l,h,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in n)h=n[_],n.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_)&&xe(e,t,_,null,i,h);for(c in i)if(h=i[c],d=n[c],i.hasOwnProperty(c)&&h!==d&&(h!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(et(137,t));break;default:xe(e,t,c,h,i,d)}return;default:if(Ng(t)){for(var g in n)h=n[g],n.hasOwnProperty(g)&&h!==void 0&&!i.hasOwnProperty(g)&&gg(e,t,g,void 0,i,h);for(u in i)h=i[u],d=n[u],!i.hasOwnProperty(u)||h===d||h===void 0&&d===void 0||gg(e,t,u,h,i,d);return}}for(var p in n)h=n[p],n.hasOwnProperty(p)&&h!=null&&!i.hasOwnProperty(p)&&xe(e,t,p,null,i,h);for(m in i)h=i[m],d=n[m],!i.hasOwnProperty(m)||h===d||h==null&&d==null||xe(e,t,m,h,i,d)}function MS(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function u2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&MS(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,m=l.initiatorType;u&&MS(m)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _g=null,vg=null;function qf(e){return e.nodeType===9?e:e.ownerDocument}function bS(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fb(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var R0=null;function h2(){var e=window.event;return e&&e.type==="popstate"?e===R0?!1:(R0=e,!0):(R0=null,!1)}var db=typeof setTimeout=="function"?setTimeout:void 0,f2=typeof clearTimeout=="function"?clearTimeout:void 0,TS=typeof Promise=="function"?Promise:void 0,d2=typeof queueMicrotask=="function"?queueMicrotask:typeof TS<"u"?function(e){return TS.resolve(null).then(e).catch(p2)}:db;function p2(e){setTimeout(function(){throw e})}function mr(e){return e==="head"}function ES(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Cl(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")tu(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,tu(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[xu]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&tu(e.ownerDocument.body);n=s}while(n);Cl(t)}function AS(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function yg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":yg(n),Ug(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function m2(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[xu])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Zi(e.nextSibling),e===null)break}return null}function g2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zi(e.nextSibling),e===null))return null;return e}function pb(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zi(e.nextSibling),e===null))return null;return e}function Sg(e){return e.data==="$?"||e.data==="$~"}function Mg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Zi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var bg=null;function wS(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Zi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function CS(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function mb(e,t,n){switch(t=qf(n),e){case"html":if(e=t.documentElement,!e)throw Error(et(452));return e;case"head":if(e=t.head,!e)throw Error(et(453));return e;case"body":if(e=t.body,!e)throw Error(et(454));return e;default:throw Error(et(451))}}function tu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ug(e)}var Ji=new Map,RS=new Set;function Yf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=ue.d;ue.d={f:v2,r:x2,D:y2,C:S2,L:M2,m:b2,X:E2,S:T2,M:A2};function v2(){var e=xa.f(),t=ud();return e||t}function x2(e){var t=Dl(e);t!==null&&t.tag===5&&t.type==="form"?lM(t):xa.r(e)}var Pl=typeof document>"u"?null:document;function gb(e,t,n){var i=Pl;if(i&&typeof t=="string"&&t){var s=Xi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),RS.has(s)||(RS.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),An(t,"link",e),_n(t),i.head.appendChild(t)))}}function y2(e){xa.D(e),gb("dns-prefetch",e,null)}function S2(e,t){xa.C(e,t),gb("preconnect",e,t)}function M2(e,t,n){xa.L(e,t,n);var i=Pl;if(i&&e&&t){var s='link[rel="preload"][as="'+Xi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Xi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Xi(n.imageSizes)+'"]')):s+='[href="'+Xi(e)+'"]';var a=s;switch(t){case"style":a=wl(e);break;case"script":a=Ol(e)}Ji.has(a)||(e=Pe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ji.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Eu(a))||t==="script"&&i.querySelector(Au(a))||(t=i.createElement("link"),An(t,"link",e),_n(t),i.head.appendChild(t)))}}function b2(e,t){xa.m(e,t);var n=Pl;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Xi(i)+'"][href="'+Xi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Ol(e)}if(!Ji.has(a)&&(e=Pe({rel:"modulepreload",href:e},t),Ji.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Au(a)))return}i=n.createElement("link"),An(i,"link",e),_n(i),n.head.appendChild(i)}}}function T2(e,t,n){xa.S(e,t,n);var i=Pl;if(i&&e){var s=hl(i).hoistableStyles,a=wl(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Eu(a)))o.loading=5;else{e=Pe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ji.get(a))&&g_(e,n);var l=r=i.createElement("link");_n(l),An(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,xf(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function E2(e,t){xa.X(e,t);var n=Pl;if(n&&e){var i=hl(n).hoistableScripts,s=Ol(e),a=i.get(s);a||(a=n.querySelector(Au(s)),a||(e=Pe({src:e,async:!0},t),(t=Ji.get(s))&&__(e,t),a=n.createElement("script"),_n(a),An(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function A2(e,t){xa.M(e,t);var n=Pl;if(n&&e){var i=hl(n).hoistableScripts,s=Ol(e),a=i.get(s);a||(a=n.querySelector(Au(s)),a||(e=Pe({src:e,async:!0,type:"module"},t),(t=Ji.get(s))&&__(e,t),a=n.createElement("script"),_n(a),An(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function DS(e,t,n,i){var s=(s=er.current)?Yf(s):null;if(!s)throw Error(et(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=wl(n.href),n=hl(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=wl(n.href);var a=hl(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Eu(e)))&&!a._p&&(r.instance=a,r.state.loading=5),Ji.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ji.set(e,n),a||w2(s,e,n,r.state))),t&&i===null)throw Error(et(528,""));return r}if(t&&i!==null)throw Error(et(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ol(n),n=hl(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(et(444,e))}}function wl(e){return'href="'+Xi(e)+'"'}function Eu(e){return'link[rel="stylesheet"]['+e+"]"}function _b(e){return Pe({},e,{"data-precedence":e.precedence,precedence:null})}function w2(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),An(t,"link",n),_n(t),e.head.appendChild(t))}function Ol(e){return'[src="'+Xi(e)+'"]'}function Au(e){return"script[async]"+e}function US(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Xi(n.href)+'"]');if(i)return t.instance=i,_n(i),i;var s=Pe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),_n(i),An(i,"style",s),xf(i,n.precedence,e),t.instance=i;case"stylesheet":s=wl(n.href);var a=e.querySelector(Eu(s));if(a)return t.state.loading|=4,t.instance=a,_n(a),a;i=_b(n),(s=Ji.get(s))&&g_(i,s),a=(e.ownerDocument||e).createElement("link"),_n(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),An(a,"link",i),t.state.loading|=4,xf(a,n.precedence,e),t.instance=a;case"script":return a=Ol(n.src),(s=e.querySelector(Au(a)))?(t.instance=s,_n(s),s):(i=n,(s=Ji.get(a))&&(i=Pe({},n),__(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),_n(s),An(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(et(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,xf(i,n.precedence,e));return t.instance}function xf(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function g_(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function __(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var yf=null;function NS(e,t,n){if(yf===null){var i=new Map,s=yf=new Map;s.set(n,i)}else s=yf,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[xu]||a[bn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function LS(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function C2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vb(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function R2(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=wl(i.href),a=t.querySelector(Eu(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,_n(a);return}a=t.ownerDocument||t,i=_b(i),(s=Ji.get(s))&&g_(i,s),a=a.createElement("link"),_n(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),An(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Zf.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var D0=0;function D2(e,t){return e.stylesheets&&e.count===0&&Sf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Sf(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&D0===0&&(D0=62500*u2());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Sf(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>D0?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Zf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jf=null;function Sf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jf=new Map,t.forEach(U2,e),Jf=null,Zf.call(e))}function U2(e,t){if(!(t.state.loading&4)){var n=Jf.get(e);if(n)var i=n.get(null);else{n=new Map,Jf.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Zf.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var fu={$$typeof:la,Provider:null,Consumer:null,_currentValue:Qr,_currentValue2:Qr,_threadCount:0};function N2(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=n0(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=n0(0),this.hiddenUpdates=n0(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function xb(e,t,n,i,s,a,r,o,l,c,u,m){return e=new N2(e,t,n,r,l,c,u,m,o),t=1,a===!0&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=kg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},qg(a),e}function yb(e){return e?(e=ol,e):ol}function Sb(e,t,n,i,s,a){s=yb(s),i.context===null?i.context=s:i.pendingContext=s,i=ir(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=sr(e,i,t),n!==null&&(ii(n,e,t),qc(n,e,t))}function PS(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function v_(e,t){PS(e,t),(e=e.alternate)&&PS(e,t)}function Mb(e){if(e.tag===13||e.tag===31){var t=uo(e,67108864);t!==null&&ii(t,e,67108864),v_(e,67108864)}}function OS(e){if(e.tag===13||e.tag===31){var t=Si();t=Rg(t);var n=uo(e,t);n!==null&&ii(n,e,t),v_(e,t)}}var Kf=!0;function L2(e,t,n,i){var s=Ot.T;Ot.T=null;var a=ue.p;try{ue.p=2,x_(e,t,n,i)}finally{ue.p=a,Ot.T=s}}function P2(e,t,n,i){var s=Ot.T;Ot.T=null;var a=ue.p;try{ue.p=8,x_(e,t,n,i)}finally{ue.p=a,Ot.T=s}}function x_(e,t,n,i){if(Kf){var s=Tg(i);if(s===null)C0(e,t,i,Qf,n),IS(e,i);else if(I2(s,e,t,n,i))i.stopPropagation();else if(IS(e,i),t&4&&-1<O2.indexOf(e)){for(;s!==null;){var a=Dl(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Zr(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-yi(r);o.entanglements[1]|=l,r&=~l}Ns(a),(ce&6)===0&&(Vf=vi()+500,Tu(0,!1))}}break;case 31:case 13:o=uo(a,2),o!==null&&ii(o,a,2),ud(),v_(a,2)}if(a=Tg(i),a===null&&C0(e,t,i,Qf,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else C0(e,t,i,null,n)}}function Tg(e){return e=Lg(e),y_(e)}var Qf=null;function y_(e){if(Qf=null,e=el(e),e!==null){var t=mu(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=GS(t),e!==null)return e;e=null}else if(n===31){if(e=kS(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qf=e,null}function bb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mw()){case YS:return 2;case ZS:return 8;case Af:case bw:return 32;case JS:return 268435456;default:return 32}default:return 32}}var Eg=!1,or=null,lr=null,cr=null,du=new Map,pu=new Map,Ja=[],O2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function IS(e,t){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":du.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pu.delete(t.pointerId)}}function Oc(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Dl(t),t!==null&&Mb(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function I2(e,t,n,i,s){switch(t){case"focusin":return or=Oc(or,e,t,n,i,s),!0;case"dragenter":return lr=Oc(lr,e,t,n,i,s),!0;case"mouseover":return cr=Oc(cr,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return du.set(a,Oc(du.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,pu.set(a,Oc(pu.get(a)||null,e,t,n,i,s)),!0}return!1}function Tb(e){var t=el(e.target);if(t!==null){var n=mu(t);if(n!==null){if(t=n.tag,t===13){if(t=GS(n),t!==null){e.blockedOn=t,xy(e.priority,function(){OS(n)});return}}else if(t===31){if(t=kS(n),t!==null){e.blockedOn=t,xy(e.priority,function(){OS(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tg(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);k0=i,n.target.dispatchEvent(i),k0=null}else return t=Dl(n),t!==null&&Mb(t),e.blockedOn=n,!1;t.shift()}return!0}function BS(e,t,n){Mf(e)&&n.delete(t)}function B2(){Eg=!1,or!==null&&Mf(or)&&(or=null),lr!==null&&Mf(lr)&&(lr=null),cr!==null&&Mf(cr)&&(cr=null),du.forEach(BS),pu.forEach(BS)}function rf(e,t){e.blockedOn===t&&(e.blockedOn=null,Eg||(Eg=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,B2)))}var of=null;function FS(e){of!==e&&(of=e,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,function(){of===e&&(of=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(y_(i||n)===null)continue;break}var a=Dl(n);a!==null&&(e.splice(t,3),t-=3,ag(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Cl(e){function t(l){return rf(l,e)}or!==null&&rf(or,e),lr!==null&&rf(lr,e),cr!==null&&rf(cr,e),du.forEach(t),pu.forEach(t);for(var n=0;n<Ja.length;n++){var i=Ja[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ja.length&&(n=Ja[0],n.blockedOn===null);)Tb(n),n.blockedOn===null&&Ja.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[si]||null;if(typeof a=="function")r||FS(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[si]||null)o=r.formAction;else if(y_(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),FS(n)}}}function Eb(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function S_(e){this._internalRoot=e}dd.prototype.render=S_.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(et(409));var n=t.current,i=Si();Sb(n,i,e,t,null,null)};dd.prototype.unmount=S_.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sb(e.current,2,null,e,null,null),ud(),t[Rl]=null}};function dd(e){this._internalRoot=e}dd.prototype.unstable_scheduleHydration=function(e){if(e){var t=t1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ja.length&&t!==0&&t<Ja[n].priority;n++);Ja.splice(n,0,e),n===0&&Tb(e)}};var zS=VS.version;if(zS!=="19.2.8")throw Error(et(527,zS,"19.2.8"));ue.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(et(188)):(e=Object.keys(e).join(","),Error(et(268,e)));return e=mw(t),e=e!==null?XS(e):null,e=e===null?null:e.stateNode,e};var F2={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Ot,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ic.isDisabled&&Ic.supportsFiber))try{gu=Ic.inject(F2),xi=Ic}catch{}var Ic;pd.createRoot=function(e,t){if(!HS(e))throw Error(et(299));var n=!1,i="",s=gM,a=_M,r=vM;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=xb(e,1,!1,null,null,n,i,null,s,a,r,Eb),e[Rl]=t.current,m_(e),new S_(t)};pd.hydrateRoot=function(e,t,n){if(!HS(e))throw Error(et(299));var i=!1,s="",a=gM,r=_M,o=vM,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=xb(e,1,!0,t,n??null,i,s,l,a,r,o,Eb),t.context=yb(null),n=t.current,i=Si(),i=Rg(i),s=ir(i),s.callback=null,sr(n,s,i),n=i,t.current.lanes=n,vu(t,n),Ns(t),e[Rl]=t.current,m_(e),new dd(t)};pd.version="19.2.8"});var Rb=Es((sO,Cb)=>{"use strict";function wb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wb)}catch(e){console.error(e)}}wb(),Cb.exports=Ab()});var DA=Es(Rm=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qP=Symbol.for("react.transitional.element"),YP=Symbol.for("react.fragment");function RA(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:qP,type:e,key:i,ref:t!==void 0?t:null,props:n}}Rm.Fragment=YP;Rm.jsx=RA;Rm.jsxs=RA});var Eh=Es((xz,UA)=>{"use strict";UA.exports=DA()});var Uz=Wr(Ec(),1),LA=Wr(Rb(),1);var Bi=Wr(Ec(),1);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Zb=0,$_=1,Jb=2;var Zu=1,Kb=2,tc=3,wa=0,Jn=1,zs=2,Vs=0,xo=1,tv=2,ev=3,nv=4,Qb=5;var br=100,jb=101,$b=102,tT=103,eT=104,nT=200,iT=201,sT=202,aT=203,Id=204,Bd=205,rT=206,oT=207,lT=208,cT=209,uT=210,hT=211,fT=212,dT=213,pT=214,Fd=0,zd=1,Vd=2,yo=3,Hd=4,Gd=5,kd=6,Xd=7,iv=0,mT=1,gT=2,ps=0,sv=1,av=2,rv=3,ov=4,lv=5,cv=6,uv=7;var hv=300,Rr=301,To=302,mp=303,gp=304,Ju=306,Wd=1e3,wi=1001,qd=1002,yn=1003,_T=1004;var Ku=1005;var Se=1006,_p=1007;var Hs=1008;var Ui=1009,fv=1010,dv=1011,ec=1012,vp=1013,ms=1014,gs=1015,Gs=1016,xp=1017,yp=1018,nc=1020,pv=35902,mv=35899,gv=1021,_v=1022,$i=1023,Os=1026,Dr=1027,vv=1028,Sp=1029,Ur=1030,Mp=1031;var bp=1033,Qu=33776,ju=33777,$u=33778,th=33779,Tp=35840,Ep=35841,Ap=35842,wp=35843,Cp=36196,Rp=37492,Dp=37496,Up=37488,Np=37489,eh=37490,Lp=37491,Pp=37808,Op=37809,Ip=37810,Bp=37811,Fp=37812,zp=37813,Vp=37814,Hp=37815,Gp=37816,kp=37817,Xp=37818,Wp=37819,qp=37820,Yp=37821,Zp=36492,Jp=36494,Kp=36495,Qp=36283,jp=36284,nh=36285,$p=36286;var Nu=2300,Yd=2301,Od=2302,W_=2303,q_=2400,Y_=2401,Z_=2402;var vT=3200;var xv=0,xT=1,Cn="",Ai="srgb",Lu="srgb-linear",Pu="linear",he="srgb";var _o=7680;var J_=519,yT=512,ST=513,MT=514,tm=515,bT=516,TT=517,em=518,ET=519,K_=35044;var yv="300 es",fs=2e3,Ou=2001;function z2(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function V2(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Iu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function AT(){let e=Iu("canvas");return e.style.display="block",e}var Db={},Jl=null;function Sv(...e){let t="THREE."+e.shift();Jl?Jl("log",t,...e):console.log(t,...e)}function wT(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Lt(...e){e=wT(e);let t="THREE."+e.shift();if(Jl)Jl("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Pt(...e){e=wT(e);let t="THREE."+e.shift();if(Jl)Jl("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function vo(...e){let t=e.join(" ");t in Db||(Db[t]=!0,Lt(...e))}function CT(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var RT={[Fd]:zd,[Vd]:kd,[Hd]:Xd,[yo]:Gd,[zd]:Fd,[kd]:Vd,[Xd]:Hd,[Gd]:yo},Is=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var M_=Math.PI/180,Zd=180/Math.PI;function ih(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[e&255]+In[e>>8&255]+In[e>>16&255]+In[e>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function ae(e,t,n){return Math.max(t,Math.min(n,e))}function H2(e,t){return(e%t+t)%t}function b_(e,t,n){return(1-n)*e+n*t}function wu(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ri(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ht=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ae(this.x,t.x,n.x),this.y=ae(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ae(this.x,t,n),this.y=ae(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bs=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],m=i[s+3],h=a[r+0],d=a[r+1],f=a[r+2],_=a[r+3];if(m!==_||l!==h||c!==d||u!==f){let g=l*h+c*d+u*f+m*_;g<0&&(h=-h,d=-d,f=-f,_=-_,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),S=Math.sin(v);p=Math.sin(p*v)/S,o=Math.sin(o*v)/S,l=l*p+h*o,c=c*p+d*o,u=u*p+f*o,m=m*p+_*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+f*o,m=m*p+_*o;let v=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=v,c*=v,u*=v,m*=v}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=m}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],m=a[r],h=a[r+1],d=a[r+2],f=a[r+3];return t[n]=o*f+u*m+l*d-c*h,t[n+1]=l*f+u*h+c*m-o*d,t[n+2]=c*f+u*d+o*h-l*m,t[n+3]=u*f-o*m-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),m=o(a/2),h=l(i/2),d=l(s/2),f=l(a/2);switch(r){case"XYZ":this._x=h*u*m+c*d*f,this._y=c*d*m-h*u*f,this._z=c*u*f+h*d*m,this._w=c*u*m-h*d*f;break;case"YXZ":this._x=h*u*m+c*d*f,this._y=c*d*m-h*u*f,this._z=c*u*f-h*d*m,this._w=c*u*m+h*d*f;break;case"ZXY":this._x=h*u*m-c*d*f,this._y=c*d*m+h*u*f,this._z=c*u*f+h*d*m,this._w=c*u*m-h*d*f;break;case"ZYX":this._x=h*u*m-c*d*f,this._y=c*d*m+h*u*f,this._z=c*u*f-h*d*m,this._w=c*u*m+h*d*f;break;case"YZX":this._x=h*u*m+c*d*f,this._y=c*d*m+h*u*f,this._z=c*u*f-h*d*m,this._w=c*u*m-h*d*f;break;case"XZY":this._x=h*u*m-c*d*f,this._y=c*d*m-h*u*f,this._z=c*u*f+h*d*m,this._w=c*u*m+h*d*f;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],m=n[10],h=i+o+m;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>m){let d=2*Math.sqrt(1+i-o-m);this._w=(u-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>m){let d=2*Math.sqrt(1+o-i-m);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+m-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ub.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ub.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),m=2*(a*i-r*n);return this.x=n+l*c+r*m-o*u,this.y=i+l*u+o*c-a*m,this.z=s+l*m+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ae(this.x,t.x,n.x),this.y=ae(this.y,t.y,n.y),this.z=ae(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ae(this.x,t,n),this.y=ae(this.y,t,n),this.z=ae(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return T_.copy(this).projectOnVector(t),this.sub(T_)}reflect(t){return this.sub(T_.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},T_=new X,Ub=new Bs,Ft=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],m=i[7],h=i[2],d=i[5],f=i[8],_=s[0],g=s[3],p=s[6],v=s[1],S=s[4],x=s[7],T=s[2],b=s[5],A=s[8];return a[0]=r*_+o*v+l*T,a[3]=r*g+o*S+l*b,a[6]=r*p+o*x+l*A,a[1]=c*_+u*v+m*T,a[4]=c*g+u*S+m*b,a[7]=c*p+u*x+m*A,a[2]=h*_+d*v+f*T,a[5]=h*g+d*S+f*b,a[8]=h*p+d*x+f*A,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=u*r-o*c,h=o*l-u*a,d=c*a-r*l,f=n*m+i*h+s*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return t[0]=m*_,t[1]=(s*c-u*i)*_,t[2]=(o*i-s*r)*_,t[3]=h*_,t[4]=(u*n-s*l)*_,t[5]=(s*a-o*n)*_,t[6]=d*_,t[7]=(i*l-c*n)*_,t[8]=(r*n-i*a)*_,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return vo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(E_.makeScale(t,n)),this}rotate(t){return vo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(E_.makeRotation(-t)),this}translate(t,n){return vo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(E_.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},E_=new Ft,Nb=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lb=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G2(){let e={enabled:!0,workingColorSpace:Lu,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===he&&(s.r=Aa(s.r),s.g=Aa(s.g),s.b=Aa(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===he&&(s.r=Zl(s.r),s.g=Zl(s.g),s.b=Zl(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?Pu:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Lu]:{primaries:t,whitePoint:i,transfer:Pu,toXYZ:Nb,fromXYZ:Lb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:i,transfer:he,toXYZ:Nb,fromXYZ:Lb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),e}var ee=G2();function Aa(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Zl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Il,Jd=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Il===void 0&&(Il=Iu("canvas")),Il.width=t.width,Il.height=t.height;let s=Il.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Il}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Iu("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Aa(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Aa(n[i]/255)*255):n[i]=Aa(n[i]);return{data:n,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},k2=0,Kl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k2++}),this.uuid=ih(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(A_(s[r].image)):a.push(A_(s[r]))}else a=A_(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function A_(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Jd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var X2=0,w_=new X,Zn=class e extends Is{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=wi,s=wi,a=Se,r=Hs,o=$i,l=Ui,c=e.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X2++}),this.uuid=ih(),this.name="",this.source=new Kl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(w_).x}get height(){return this.source.getSize(w_).y}get depth(){return this.source.getSize(w_).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Lt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wd:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case qd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wd:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case qd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=hv;Zn.DEFAULT_ANISOTROPY=1;var ne=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],u=l[4],m=l[8],h=l[1],d=l[5],f=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(m-_)<.01&&Math.abs(f-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(m+_)<.1&&Math.abs(f+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,x=(d+1)/2,T=(p+1)/2,b=(u+h)/4,A=(m+_)/4,y=(f+g)/4;return S>x&&S>T?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=b/i,a=A/i):x>T?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=b/s,a=y/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=A/a,s=y/a),this.set(i,s,a,n),this}let v=Math.sqrt((g-f)*(g-f)+(m-_)*(m-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-f)/v,this.y=(m-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ae(this.x,t.x,n.x),this.y=ae(this.y,t.y,n.y),this.z=ae(this.z,t.z,n.z),this.w=ae(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ae(this.x,t,n),this.y=ae(this.y,t,n),this.z=ae(this.z,t,n),this.w=ae(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kd=class extends Is{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new ne(0,0,t,n),this.scissorTest=!1,this.viewport=new ne(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Zn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:Se,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Kl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends Kd{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Bu=class extends Zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qd=class extends Zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,u,m,h,d,f,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,m,h,d,f,_,g)}set(t,n,i,s,a,r,o,l,c,u,m,h,d,f,_,g){let p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=m,p[14]=h,p[3]=d,p[7]=f,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Bl.setFromMatrixColumn(t,0).length(),a=1/Bl.setFromMatrixColumn(t,1).length(),r=1/Bl.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),m=Math.sin(a);if(t.order==="XYZ"){let h=r*u,d=r*m,f=o*u,_=o*m;n[0]=l*u,n[4]=-l*m,n[8]=c,n[1]=d+f*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=f+d*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*u,d=l*m,f=c*u,_=c*m;n[0]=h+_*o,n[4]=f*o-d,n[8]=r*c,n[1]=r*m,n[5]=r*u,n[9]=-o,n[2]=d*o-f,n[6]=_+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*u,d=l*m,f=c*u,_=c*m;n[0]=h-_*o,n[4]=-r*m,n[8]=f+d*o,n[1]=d+f*o,n[5]=r*u,n[9]=_-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*u,d=r*m,f=o*u,_=o*m;n[0]=l*u,n[4]=f*c-d,n[8]=h*c+_,n[1]=l*m,n[5]=_*c+h,n[9]=d*c-f,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,d=r*c,f=o*l,_=o*c;n[0]=l*u,n[4]=_-h*m,n[8]=f*m+d,n[1]=m,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=d*m+f,n[10]=h-_*m}else if(t.order==="XZY"){let h=r*l,d=r*c,f=o*l,_=o*c;n[0]=l*u,n[4]=-m,n[8]=c*u,n[1]=h*m+_,n[5]=r*u,n[9]=d*m-f,n[2]=f*m-d,n[6]=o*u,n[10]=_*m+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(W2,t,q2)}lookAt(t,n,i){let s=this.elements;return Ti.subVectors(t,n),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),gr.crossVectors(i,Ti),gr.lengthSq()===0&&(Math.abs(i.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),gr.crossVectors(i,Ti)),gr.normalize(),md.crossVectors(Ti,gr),s[0]=gr.x,s[4]=md.x,s[8]=Ti.x,s[1]=gr.y,s[5]=md.y,s[9]=Ti.y,s[2]=gr.z,s[6]=md.z,s[10]=Ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],m=i[5],h=i[9],d=i[13],f=i[2],_=i[6],g=i[10],p=i[14],v=i[3],S=i[7],x=i[11],T=i[15],b=s[0],A=s[4],y=s[8],E=s[12],C=s[1],D=s[5],N=s[9],H=s[13],W=s[2],O=s[6],q=s[10],B=s[14],J=s[3],$=s[7],at=s[11],ft=s[15];return a[0]=r*b+o*C+l*W+c*J,a[4]=r*A+o*D+l*O+c*$,a[8]=r*y+o*N+l*q+c*at,a[12]=r*E+o*H+l*B+c*ft,a[1]=u*b+m*C+h*W+d*J,a[5]=u*A+m*D+h*O+d*$,a[9]=u*y+m*N+h*q+d*at,a[13]=u*E+m*H+h*B+d*ft,a[2]=f*b+_*C+g*W+p*J,a[6]=f*A+_*D+g*O+p*$,a[10]=f*y+_*N+g*q+p*at,a[14]=f*E+_*H+g*B+p*ft,a[3]=v*b+S*C+x*W+T*J,a[7]=v*A+S*D+x*O+T*$,a[11]=v*y+S*N+x*q+T*at,a[15]=v*E+S*H+x*B+T*ft,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],m=t[6],h=t[10],d=t[14],f=t[3],_=t[7],g=t[11],p=t[15],v=l*d-c*h,S=o*d-c*m,x=o*h-l*m,T=r*d-c*u,b=r*h-l*u,A=r*m-o*u;return n*(_*v-g*S+p*x)-i*(f*v-g*T+p*b)+s*(f*S-_*T+p*A)-a*(f*x-_*b+g*A)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return n*(r*u-o*c)-i*(a*u-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=t[9],h=t[10],d=t[11],f=t[12],_=t[13],g=t[14],p=t[15],v=n*o-i*r,S=n*l-s*r,x=n*c-a*r,T=i*l-s*o,b=i*c-a*o,A=s*c-a*l,y=u*_-m*f,E=u*g-h*f,C=u*p-d*f,D=m*g-h*_,N=m*p-d*_,H=h*p-d*g,W=v*H-S*N+x*D+T*C-b*E+A*y;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/W;return t[0]=(o*H-l*N+c*D)*O,t[1]=(s*N-i*H-a*D)*O,t[2]=(_*A-g*b+p*T)*O,t[3]=(h*b-m*A-d*T)*O,t[4]=(l*C-r*H-c*E)*O,t[5]=(n*H-s*C+a*E)*O,t[6]=(g*x-f*A-p*S)*O,t[7]=(u*A-h*x+d*S)*O,t[8]=(r*N-o*C+c*y)*O,t[9]=(i*C-n*N-a*y)*O,t[10]=(f*b-_*x+p*v)*O,t[11]=(m*x-u*b-d*v)*O,t[12]=(o*E-r*D-l*y)*O,t[13]=(n*D-i*E+s*y)*O,t[14]=(_*S-f*T-g*v)*O,t[15]=(u*T-m*S+h*v)*O,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,m=o+o,h=a*c,d=a*u,f=a*m,_=r*u,g=r*m,p=o*m,v=l*c,S=l*u,x=l*m,T=i.x,b=i.y,A=i.z;return s[0]=(1-(_+p))*T,s[1]=(d+x)*T,s[2]=(f-S)*T,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(h+p))*b,s[6]=(g+v)*b,s[7]=0,s[8]=(f+S)*A,s[9]=(g-v)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Bl.set(s[0],s[1],s[2]).length(),o=Bl.set(s[4],s[5],s[6]).length(),l=Bl.set(s[8],s[9],s[10]).length();a<0&&(r=-r),cs.copy(this);let c=1/r,u=1/o,m=1/l;return cs.elements[0]*=c,cs.elements[1]*=c,cs.elements[2]*=c,cs.elements[4]*=u,cs.elements[5]*=u,cs.elements[6]*=u,cs.elements[8]*=m,cs.elements[9]*=m,cs.elements[10]*=m,n.setFromRotationMatrix(cs),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=fs,l=!1){let c=this.elements,u=2*a/(n-t),m=2*a/(i-s),h=(n+t)/(n-t),d=(i+s)/(i-s),f,_;if(l)f=a/(r-a),_=r*a/(r-a);else if(o===fs)f=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===Ou)f=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=m,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=fs,l=!1){let c=this.elements,u=2/(n-t),m=2/(i-s),h=-(n+t)/(n-t),d=-(i+s)/(i-s),f,_;if(l)f=1/(r-a),_=r/(r-a);else if(o===fs)f=-2/(r-a),_=-(r+a)/(r-a);else if(o===Ou)f=-1/(r-a),_=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=m,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Bl=new X,cs=new $e,W2=new X(0,0,0),q2=new X(1,1,1),gr=new X,md=new X,Ti=new X,Pb=new $e,Ob=new Bs,Tr=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ae(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Pb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pb,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Ob.setFromEuler(this),this.setFromQuaternion(Ob,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tr.DEFAULT_ORDER="XYZ";var Fu=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Y2=0,Ib=new X,Fl=new Bs,ya=new $e,gd=new X,Cu=new X,Z2=new X,J2=new Bs,Bb=new X(1,0,0),Fb=new X(0,1,0),zb=new X(0,0,1),Vb={type:"added"},K2={type:"removed"},zl={type:"childadded",child:null},C_={type:"childremoved",child:null},ji=class e extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y2++}),this.uuid=ih(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new X,n=new Tr,i=new Bs,s=new X(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ft}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Fl.setFromAxisAngle(t,n),this.quaternion.multiply(Fl),this}rotateOnWorldAxis(t,n){return Fl.setFromAxisAngle(t,n),this.quaternion.premultiply(Fl),this}rotateX(t){return this.rotateOnAxis(Bb,t)}rotateY(t){return this.rotateOnAxis(Fb,t)}rotateZ(t){return this.rotateOnAxis(zb,t)}translateOnAxis(t,n){return Ib.copy(t).applyQuaternion(this.quaternion),this.position.add(Ib.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Bb,t)}translateY(t){return this.translateOnAxis(Fb,t)}translateZ(t){return this.translateOnAxis(zb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?gd.copy(t):gd.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Cu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(Cu,gd,this.up):ya.lookAt(gd,Cu,this.up),this.quaternion.setFromRotationMatrix(ya),s&&(ya.extractRotation(s.matrixWorld),Fl.setFromRotationMatrix(ya),this.quaternion.premultiply(Fl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vb),zl.child=t,this.dispatchEvent(zl),zl.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(K2),C_.child=t,this.dispatchEvent(C_),C_.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ya.multiply(t.parent.matrixWorld)),t.applyMatrix4(ya),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vb),zl.child=t,this.dispatchEvent(zl),zl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cu,t,Z2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cu,J2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let m=l[c];a(t.shapes,m)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),m=r(t.shapes),h=r(t.skeletons),d=r(t.animations),f=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),m.length>0&&(i.shapes=m),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),f.length>0&&(i.nodes=f)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ji.DEFAULT_UP=new X(0,1,0);ji.DEFAULT_MATRIX_AUTO_UPDATE=!0;ji.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ea=class extends ji{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q2={type:"move"},Ql=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let _ of t.hand.values()){let g=n.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],h=u.position.distanceTo(m.position),d=.02,f=.005;c.inputState.pinching&&h>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ea;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},DT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},_d={h:0,s:0,l:0};function R_(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Zt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ee.workingColorSpace){return this.r=t,this.g=n,this.b=i,ee.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ee.workingColorSpace){if(t=H2(t,1),n=ae(n,0,1),i=ae(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=R_(r,a,t+1/3),this.g=R_(r,a,t),this.b=R_(r,a,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,n=Ai){function i(a){a!==void 0&&parseFloat(a)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ai){let i=DT[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}copyLinearToSRGB(t){return this.r=Zl(t.r),this.g=Zl(t.g),this.b=Zl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return ee.workingToColorSpace(Bn.copy(this),t),Math.round(ae(Bn.r*255,0,255))*65536+Math.round(ae(Bn.g*255,0,255))*256+Math.round(ae(Bn.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ee.workingColorSpace){ee.workingToColorSpace(Bn.copy(this),n);let i=Bn.r,s=Bn.g,a=Bn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let m=r-o;switch(c=u<=.5?m/(r+o):m/(2-r-o),r){case i:l=(s-a)/m+(s<a?6:0);break;case s:l=(a-i)/m+2;break;case a:l=(i-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=ee.workingColorSpace){return ee.workingToColorSpace(Bn.copy(this),n),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Ai){ee.workingToColorSpace(Bn.copy(this),t);let n=Bn.r,i=Bn.g,s=Bn.b;return t!==Ai?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(_r),this.setHSL(_r.h+t,_r.s+n,_r.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(_r),t.getHSL(_d);let i=b_(_r.h,_d.h,n),s=b_(_r.s,_d.s,n),a=b_(_r.l,_d.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new Zt;Zt.NAMES=DT;var zu=class extends ji{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tr,this.environmentIntensity=1,this.environmentRotation=new Tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},us=new X,Sa=new X,D_=new X,Ma=new X,Vl=new X,Hl=new X,Hb=new X,U_=new X,N_=new X,L_=new X,P_=new ne,O_=new ne,I_=new ne,Mr=class e{constructor(t=new X,n=new X,i=new X){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),us.subVectors(t,n),s.cross(us);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){us.subVectors(s,n),Sa.subVectors(i,n),D_.subVectors(t,n);let r=us.dot(us),o=us.dot(Sa),l=us.dot(D_),c=Sa.dot(Sa),u=Sa.dot(D_),m=r*c-o*o;if(m===0)return a.set(0,0,0),null;let h=1/m,d=(c*l-o*u)*h,f=(r*u-o*l)*h;return a.set(1-d-f,f,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ma)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ma.x),l.addScaledVector(r,Ma.y),l.addScaledVector(o,Ma.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return P_.setScalar(0),O_.setScalar(0),I_.setScalar(0),P_.fromBufferAttribute(t,n),O_.fromBufferAttribute(t,i),I_.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(P_,a.x),r.addScaledVector(O_,a.y),r.addScaledVector(I_,a.z),r}static isFrontFacing(t,n,i,s){return us.subVectors(i,n),Sa.subVectors(t,n),us.cross(Sa).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return us.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),us.cross(Sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Vl.subVectors(s,i),Hl.subVectors(a,i),U_.subVectors(t,i);let l=Vl.dot(U_),c=Hl.dot(U_);if(l<=0&&c<=0)return n.copy(i);N_.subVectors(t,s);let u=Vl.dot(N_),m=Hl.dot(N_);if(u>=0&&m<=u)return n.copy(s);let h=l*m-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(Vl,r);L_.subVectors(t,a);let d=Vl.dot(L_),f=Hl.dot(L_);if(f>=0&&d<=f)return n.copy(a);let _=d*c-l*f;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),n.copy(i).addScaledVector(Hl,o);let g=u*f-d*m;if(g<=0&&m-u>=0&&d-f>=0)return Hb.subVectors(a,s),o=(m-u)/(m-u+(d-f)),n.copy(s).addScaledVector(Hb,o);let p=1/(g+_+h);return r=_*p,o=h*p,n.copy(i).addScaledVector(Vl,r).addScaledVector(Hl,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Er=class{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(hs.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(hs.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=hs.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,hs):hs.fromBufferAttribute(a,r),hs.applyMatrix4(t.matrixWorld),this.expandByPoint(hs);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vd.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vd.copy(i.boundingBox)),vd.applyMatrix4(t.matrixWorld),this.union(vd)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hs),hs.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ru),xd.subVectors(this.max,Ru),Gl.subVectors(t.a,Ru),kl.subVectors(t.b,Ru),Xl.subVectors(t.c,Ru),vr.subVectors(kl,Gl),xr.subVectors(Xl,kl),fo.subVectors(Gl,Xl);let n=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-fo.z,fo.y,vr.z,0,-vr.x,xr.z,0,-xr.x,fo.z,0,-fo.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-fo.y,fo.x,0];return!B_(n,Gl,kl,Xl,xd)||(n=[1,0,0,0,1,0,0,0,1],!B_(n,Gl,kl,Xl,xd))?!1:(yd.crossVectors(vr,xr),n=[yd.x,yd.y,yd.z],B_(n,Gl,kl,Xl,xd))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hs).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hs).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ba=[new X,new X,new X,new X,new X,new X,new X,new X],hs=new X,vd=new Er,Gl=new X,kl=new X,Xl=new X,vr=new X,xr=new X,fo=new X,Ru=new X,xd=new X,yd=new X,po=new X;function B_(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){po.fromArray(e,a);let o=s.x*Math.abs(po.x)+s.y*Math.abs(po.y)+s.z*Math.abs(po.z),l=t.dot(po),c=n.dot(po),u=i.dot(po);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var on=new X,Sd=new Ht,j2=0,Ci=class extends Is{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:j2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=K_,this.updateRanges=[],this.gpuType=gs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sd.fromBufferAttribute(this,n),Sd.applyMatrix3(t),this.setXY(n,Sd.x,Sd.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyMatrix3(t),this.setXYZ(n,on.x,on.y,on.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyMatrix4(t),this.setXYZ(n,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyNormalMatrix(t),this.setXYZ(n,on.x,on.y,on.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.transformDirection(t),this.setXYZ(n,on.x,on.y,on.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=wu(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=wu(n,this.array)),n}setX(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=wu(n,this.array)),n}setY(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=wu(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=wu(n,this.array)),n}setW(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),i=ri(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),i=ri(i,this.array),s=ri(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),i=ri(i,this.array),s=ri(s,this.array),a=ri(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==K_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Vu=class extends Ci{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Hu=class extends Ci{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Qi=class extends Ci{constructor(t,n,i){super(new Float32Array(t),n,i)}},$2=new Er,Du=new X,F_=new X,jl=class{constructor(t=new X,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):$2.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Du.subVectors(t,this.center);let n=Du.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Du,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(F_.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Du.copy(t.center).add(F_)),this.expandByPoint(Du.copy(t.center).sub(F_))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},tR=0,Ki=new $e,z_=new ji,Wl=new X,Ei=new Er,Uu=new Er,xn=new X,Fs=class e extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tR++}),this.uuid=ih(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(z2(t)?Hu:Vu)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ft().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ki.makeRotationFromQuaternion(t),this.applyMatrix4(Ki),this}rotateX(t){return Ki.makeRotationX(t),this.applyMatrix4(Ki),this}rotateY(t){return Ki.makeRotationY(t),this.applyMatrix4(Ki),this}rotateZ(t){return Ki.makeRotationZ(t),this.applyMatrix4(Ki),this}translate(t,n,i){return Ki.makeTranslation(t,n,i),this.applyMatrix4(Ki),this}scale(t,n,i){return Ki.makeScale(t,n,i),this.applyMatrix4(Ki),this}lookAt(t){return z_.lookAt(t),z_.updateMatrix(),this.applyMatrix4(z_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wl).negate(),this.translate(Wl.x,Wl.y,Wl.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Qi(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Ei.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jl);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let i=this.boundingSphere.center;if(Ei.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Uu.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(Ei.min,Uu.min),Ei.expandByPoint(xn),xn.addVectors(Ei.max,Uu.max),Ei.expandByPoint(xn)):(Ei.expandByPoint(Uu.min),Ei.expandByPoint(Uu.max))}Ei.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)xn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(xn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xn.fromBufferAttribute(o,c),l&&(Wl.fromBufferAttribute(t,c),xn.add(Wl)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Ci(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new X,l[y]=new X;let c=new X,u=new X,m=new X,h=new Ht,d=new Ht,f=new Ht,_=new X,g=new X;function p(y,E,C){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,E),m.fromBufferAttribute(i,C),h.fromBufferAttribute(a,y),d.fromBufferAttribute(a,E),f.fromBufferAttribute(a,C),u.sub(c),m.sub(c),d.sub(h),f.sub(h);let D=1/(d.x*f.y-f.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(f.y).addScaledVector(m,-d.y).multiplyScalar(D),g.copy(m).multiplyScalar(d.x).addScaledVector(u,-f.x).multiplyScalar(D),o[y].add(_),o[E].add(_),o[C].add(_),l[y].add(g),l[E].add(g),l[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,E=v.length;y<E;++y){let C=v[y],D=C.start,N=C.count;for(let H=D,W=D+N;H<W;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let S=new X,x=new X,T=new X,b=new X;function A(y){T.fromBufferAttribute(s,y),b.copy(T);let E=o[y];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),x.crossVectors(b,E);let D=x.dot(l[y])<0?-1:1;r.setXYZW(y,S.x,S.y,S.z,D)}for(let y=0,E=v.length;y<E;++y){let C=v[y],D=C.start,N=C.count;for(let H=D,W=D+N;H<W;H+=3)A(t.getX(H+0)),A(t.getX(H+1)),A(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new X,a=new X,r=new X,o=new X,l=new X,c=new X,u=new X,m=new X;if(t)for(let h=0,d=t.count;h<d;h+=3){let f=t.getX(h+0),_=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(n,f),a.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),u.subVectors(r,a),m.subVectors(s,a),u.cross(m),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),u.subVectors(r,a),m.subVectors(s,a),u.cross(m),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)xn.fromBufferAttribute(t,n),xn.normalize(),t.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,m=o.normalized,h=new c.constructor(l.length*u),d=0,f=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[f++]=c[d++]}return new Ci(h,u,m)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,m=c.length;u<m;u++){let h=c[u],d=t(h,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let m=0,h=c.length;m<h;m++){let d=c[m];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let a=t.morphAttributes;for(let c in a){let u=[],m=a[c];for(let h=0,d=m.length;h<d;h++)u.push(m[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let m=r[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var eR=0,So=class extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eR++}),this.uuid=ih(),this.name="",this.type="Material",this.blending=xo,this.side=wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Id,this.blendDst=Bd,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Lt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(i.blending=this.blending),this.side!==wa&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Id&&(i.blendSrc=this.blendSrc),this.blendDst!==Bd&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_o&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_o&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_o&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ht().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ta=new X,V_=new X,Md=new X,yr=new X,H_=new X,bd=new X,G_=new X,jd=class{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ta)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ta.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ta.copy(this.origin).addScaledVector(this.direction,n),Ta.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){V_.copy(t).add(n).multiplyScalar(.5),Md.copy(n).sub(t).normalize(),yr.copy(this.origin).sub(V_);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Md),o=yr.dot(this.direction),l=-yr.dot(Md),c=yr.lengthSq(),u=Math.abs(1-r*r),m,h,d,f;if(u>0)if(m=r*l-o,h=r*o-l,f=a*u,m>=0)if(h>=-f)if(h<=f){let _=1/u;m*=_,h*=_,d=m*(m+r*h+2*o)+h*(r*m+h+2*l)+c}else h=a,m=Math.max(0,-(r*h+o)),d=-m*m+h*(h+2*l)+c;else h=-a,m=Math.max(0,-(r*h+o)),d=-m*m+h*(h+2*l)+c;else h<=-f?(m=Math.max(0,-(-r*a+o)),h=m>0?-a:Math.min(Math.max(-a,-l),a),d=-m*m+h*(h+2*l)+c):h<=f?(m=0,h=Math.min(Math.max(-a,-l),a),d=h*(h+2*l)+c):(m=Math.max(0,-(r*a+o)),h=m>0?a:Math.min(Math.max(-a,-l),a),d=-m*m+h*(h+2*l)+c);else h=r>0?-a:a,m=Math.max(0,-(r*h+o)),d=-m*m+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(V_).addScaledVector(Md,h),d}intersectSphere(t,n){Ta.subVectors(t.center,this.origin);let i=Ta.dot(this.direction),s=Ta.dot(Ta)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(a=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(a=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),m>=0?(o=(t.min.z-h.z)*m,l=(t.max.z-h.z)*m):(o=(t.max.z-h.z)*m,l=(t.min.z-h.z)*m),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ta)!==null}intersectTriangle(t,n,i,s,a){H_.subVectors(n,t),bd.subVectors(i,t),G_.crossVectors(H_,bd);let r=this.direction.dot(G_),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;yr.subVectors(this.origin,t);let l=o*this.direction.dot(bd.crossVectors(yr,bd));if(l<0)return null;let c=o*this.direction.dot(H_.cross(yr));if(c<0||l+c>r)return null;let u=-o*yr.dot(G_);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gu=class extends So{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gb=new $e,mo=new jd,Td=new jl,kb=new X,Ed=new X,Ad=new X,wd=new X,k_=new X,Cd=new X,Xb=new X,Rd=new X,Fn=class extends ji{constructor(t=new Fs,n=new Gu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Cd.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],m=a[l];u!==0&&(k_.fromBufferAttribute(m,t),r?Cd.addScaledVector(k_,u):Cd.addScaledVector(k_.sub(n),u))}n.add(Cd)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Td.copy(i.boundingSphere),Td.applyMatrix4(a),mo.copy(t.ray).recast(t.near),!(Td.containsPoint(mo.origin)===!1&&(mo.intersectSphere(Td,kb)===null||mo.origin.distanceToSquared(kb)>(t.far-t.near)**2))&&(Gb.copy(a).invert(),mo.copy(t.ray).applyMatrix4(Gb),!(i.boundingBox!==null&&mo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,mo)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,m=a.attributes.normal,h=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let f=0,_=h.length;f<_;f++){let g=h[f],p=r[g.materialIndex],v=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,T=S;x<T;x+=3){let b=o.getX(x),A=o.getX(x+1),y=o.getX(x+2);s=Dd(this,p,t,i,c,u,m,b,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let f=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=f,p=_;g<p;g+=3){let v=o.getX(g),S=o.getX(g+1),x=o.getX(g+2);s=Dd(this,r,t,i,c,u,m,v,S,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let f=0,_=h.length;f<_;f++){let g=h[f],p=r[g.materialIndex],v=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,T=S;x<T;x+=3){let b=x,A=x+1,y=x+2;s=Dd(this,p,t,i,c,u,m,b,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let f=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=f,p=_;g<p;g+=3){let v=g,S=g+1,x=g+2;s=Dd(this,r,t,i,c,u,m,v,S,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function nR(e,t,n,i,s,a,r,o){let l;if(t.side===Jn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===wa,o),l===null)return null;Rd.copy(o),Rd.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Rd);return c<n.near||c>n.far?null:{distance:c,point:Rd.clone(),object:e}}function Dd(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Ed),e.getVertexPosition(l,Ad),e.getVertexPosition(c,wd);let u=nR(e,t,n,i,Ed,Ad,wd,Xb);if(u){let m=new X;Mr.getBarycoord(Xb,Ed,Ad,wd,m),s&&(u.uv=Mr.getInterpolatedAttribute(s,o,l,c,m,new Ht)),a&&(u.uv1=Mr.getInterpolatedAttribute(a,o,l,c,m,new Ht)),r&&(u.normal=Mr.getInterpolatedAttribute(r,o,l,c,m,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new X,materialIndex:0};Mr.getNormal(Ed,Ad,wd,h.normal),u.face=h,u.barycoord=m}return u}var Mo=class extends Zn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=yn,u=yn,m,h){super(null,r,o,l,c,u,s,a,m,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var X_=new X,iR=new X,sR=new Ft,Ps=class{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=X_.subVectors(i,n).cross(iR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(X_),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||sR.getNormalMatrix(t),s=this.coplanarPoint(X_).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},go=new jl,aR=new Ht(.5,.5),Ud=new X,ku=class{constructor(t=new Ps,n=new Ps,i=new Ps,s=new Ps,a=new Ps,r=new Ps){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=fs,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],m=a[5],h=a[6],d=a[7],f=a[8],_=a[9],g=a[10],p=a[11],v=a[12],S=a[13],x=a[14],T=a[15];if(s[0].setComponents(c-r,d-u,p-f,T-v).normalize(),s[1].setComponents(c+r,d+u,p+f,T+v).normalize(),s[2].setComponents(c+o,d+m,p+_,T+S).normalize(),s[3].setComponents(c-o,d-m,p-_,T-S).normalize(),i)s[4].setComponents(l,h,g,x).normalize(),s[5].setComponents(c-l,d-h,p-g,T-x).normalize();else if(s[4].setComponents(c-l,d-h,p-g,T-x).normalize(),n===fs)s[5].setComponents(c+l,d+h,p+g,T+x).normalize();else if(n===Ou)s[5].setComponents(l,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),go.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(go)}intersectsSprite(t){go.center.set(0,0,0);let n=aR.distanceTo(t.center);return go.radius=.7071067811865476+n,go.applyMatrix4(t.matrixWorld),this.intersectsSphere(go)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ud.x=s.normal.x>0?t.max.x:t.min.x,Ud.y=s.normal.y>0?t.max.y:t.min.y,Ud.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ud)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xu=class extends Zn{constructor(t=[],n=Rr,i,s,a,r,o,l,c,u){super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ds=class extends Zn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ca=class extends Zn{constructor(t,n,i=ms,s,a,r,o=yn,l=yn,c,u=Os,m=1){if(u!==Os&&u!==Dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:m};super(h,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},$d=class extends Ca{constructor(t,n=ms,i=Rr,s,a,r=yn,o=yn,l,c=Os){let u={width:t,height:t,depth:1},m=[u,u,u,u,u,u];super(t,t,n,i,s,a,r,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wu=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$l=class e extends Fs{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],m=[],h=0,d=0;f("z","y","x",-1,-1,i,n,t,r,a,0),f("z","y","x",1,-1,i,n,-t,r,a,1),f("x","z","y",1,1,t,i,n,s,r,2),f("x","z","y",1,-1,t,i,-n,s,r,3),f("x","y","z",1,-1,t,n,i,s,a,4),f("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Qi(c,3)),this.setAttribute("normal",new Qi(u,3)),this.setAttribute("uv",new Qi(m,2));function f(_,g,p,v,S,x,T,b,A,y,E){let C=x/A,D=T/y,N=x/2,H=T/2,W=b/2,O=A+1,q=y+1,B=0,J=0,$=new X;for(let at=0;at<q;at++){let ft=at*D-H;for(let lt=0;lt<O;lt++){let kt=lt*C-N;$[_]=kt*v,$[g]=ft*S,$[p]=W,c.push($.x,$.y,$.z),$[_]=0,$[g]=0,$[p]=b>0?1:-1,u.push($.x,$.y,$.z),m.push(lt/A),m.push(1-at/y),B+=1}}for(let at=0;at<y;at++)for(let ft=0;ft<A;ft++){let lt=h+ft+O*at,kt=h+ft+O*(at+1),Qt=h+(ft+1)+O*(at+1),zt=h+(ft+1)+O*at;l.push(lt,kt,zt),l.push(kt,Qt,zt),J+=6}o.addGroup(d,J,E),d+=J,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ra=class e extends Fs{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,m=t/o,h=n/l,d=[],f=[],_=[],g=[];for(let p=0;p<u;p++){let v=p*h-r;for(let S=0;S<c;S++){let x=S*m-a;f.push(x,-v,0),_.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let S=v+c*p,x=v+c*(p+1),T=v+1+c*(p+1),b=v+1+c*p;d.push(S,x,b),d.push(x,T,b)}this.setIndex(d),this.setAttribute("position",new Qi(f,3)),this.setAttribute("normal",new Qi(_,3)),this.setAttribute("uv",new Qi(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Eo(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(Wb(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(Wb(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function zn(e){let t={};for(let n=0;n<e.length;n++){let i=Eo(e[n]);for(let s in i)t[s]=i[s]}return t}function Wb(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function rR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Mv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var UT={clone:Eo,merge:zn},oR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends So{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oR,this.fragmentShader=lR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Eo(t.uniforms),this.uniformsGroups=rR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"v3":this.uniforms[i].value=new X().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ne().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[i].value=new $e().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},tp=class extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ep=class extends So{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},np=class extends So{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Nd(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var Ar=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ip=class extends Ar{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:q_,endingEnd:q_}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Y_:a=t,o=2*n-i;break;case Z_:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Y_:r=t,l=2*i-n;break;case Z_:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,m=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(i-n)/(s-n),_=f*f,g=_*f,p=-h*g+2*h*_-h*f,v=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*f+1,S=(-1-d)*g+(1.5+d)*_+.5*f,x=d*g-d*_;for(let T=0;T!==o;++T)a[T]=p*r[u+T]+v*r[c+T]+S*r[l+T]+x*r[m+T];return a}},sp=class extends Ar{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),m=1-u;for(let h=0;h!==o;++h)a[h]=r[c+h]*m+r[l+h]*u;return a}},ap=class extends Ar{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rp=class extends Ar{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,m=this.outTangents;if(!u||!m){let f=(i-n)/(s-n),_=1-f;for(let g=0;g!==o;++g)a[g]=r[c+g]*_+r[l+g]*f;return a}let h=o*2,d=t-1;for(let f=0;f!==o;++f){let _=r[c+f],g=r[l+f],p=d*h+f*2,v=m[p],S=m[p+1],x=t*h+f*2,T=u[x],b=u[x+1],A=(i-n)/(s-n),y,E,C,D,N;for(let H=0;H<8;H++){y=A*A,E=y*A,C=1-A,D=C*C,N=D*C;let O=N*n+3*D*A*v+3*C*y*T+E*s-i;if(Math.abs(O)<1e-10)break;let q=3*D*(v-n)+6*C*A*(T-v)+3*y*(s-T);if(Math.abs(q)<1e-10)break;A=A-O/q,A=Math.max(0,Math.min(1,A))}a[f]=N*_+3*D*A*S+3*C*y*b+E*g}return a}},Di=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Nd(n,this.TimeBufferType),this.values=Nd(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Nd(t.times,Array),values:Nd(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ap(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ip(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new rp(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Nu:n=this.InterpolantFactoryMethodDiscrete;break;case Yd:n=this.InterpolantFactoryMethodLinear;break;case Od:n=this.InterpolantFactoryMethodSmooth;break;case W_:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Lt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nu;case this.InterpolantFactoryMethodLinear:return Yd;case this.InterpolantFactoryMethodSmooth:return Od;case this.InterpolantFactoryMethodBezier:return W_}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Pt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&V2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Od,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*i,h=m-i,d=m+i;for(let f=0;f!==i;++f){let _=n[m+f];if(_!==n[h+f]||_!==n[d+f]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let m=o*i,h=r*i;for(let d=0;d!==i;++d)n[h+d]=n[m+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=Yd;var wr=class extends Di{constructor(t,n,i){super(t,n,i)}};wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=Nu;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var op=class extends Di{constructor(t,n,i,s){super(t,n,i,s)}};op.prototype.ValueTypeName="color";var lp=class extends Di{constructor(t,n,i,s){super(t,n,i,s)}};lp.prototype.ValueTypeName="number";var cp=class extends Ar{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)Bs.slerpFlat(a,0,r,c-o,r,c,l);return a}},qu=class extends Di{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new cp(this.times,this.values,this.getValueSize(),t)}};qu.prototype.ValueTypeName="quaternion";qu.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends Di{constructor(t,n,i){super(t,n,i)}};Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=Nu;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var up=class extends Di{constructor(t,n,i,s){super(t,n,i,s)}};up.prototype.ValueTypeName="vector";var hp=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return c.push(u,m),this},this.removeHandler=function(u){let m=c.indexOf(u);return m!==-1&&c.splice(m,2),this},this.getHandler=function(u){for(let m=0,h=c.length;m<h;m+=2){let d=c[m],f=c[m+1];if(d.global&&(d.lastIndex=0),d.test(u))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},NT=new hp,fp=class{constructor(t){this.manager=t!==void 0?t:NT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};fp.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ld=new X,Pd=new Bs,Ls=new X,Yu=class extends ji{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=fs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ld,Pd,Ls),Ls.x===1&&Ls.y===1&&Ls.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ld,Pd,Ls.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Ld,Pd,Ls),Ls.x===1&&Ls.y===1&&Ls.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ld,Pd,Ls.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Sr=new X,qb=new Ht,Yb=new Ht,oi=class extends Yu{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(M_*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(M_*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-t/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sr.x,Sr.y).multiplyScalar(-t/Sr.z)}getViewSize(t,n){return this.getViewBounds(t,qb,Yb),n.subVectors(Yb,qb)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(M_*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var bo=class extends Yu{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var ql=-90,Yl=1,dp=class extends ji{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new oi(ql,Yl,t,n);s.layers=this.layers,this.add(s);let a=new oi(ql,Yl,t,n);a.layers=this.layers,this.add(a);let r=new oi(ql,Yl,t,n);r.layers=this.layers,this.add(r);let o=new oi(ql,Yl,t,n);o.layers=this.layers,this.add(o);let l=new oi(ql,Yl,t,n);l.layers=this.layers,this.add(l);let c=new oi(ql,Yl,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===fs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ou)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,m=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(m,h,d),t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},pp=class extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var bv="\\[\\]\\.:\\/",cR=new RegExp("["+bv+"]","g"),Tv="[^"+bv+"]",uR="[^"+bv.replace("\\.","")+"]",hR=/((?:WC+[\/:])*)/.source.replace("WC",Tv),fR=/(WCOD+)?/.source.replace("WCOD",uR),dR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tv),pR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tv),mR=new RegExp("^"+hR+fR+dR+pR+"$"),gR=["material","materials","bones","map"],Q_=class{constructor(t,n,i){let s=i||Oe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Oe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cR,"")}static parseTrackName(t){let n=mR.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);gR.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Q_;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aO=new Float32Array(1);var j_=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function Ev(e,t,n,i){let s=_R(i);switch(n){case gv:return e*t;case vv:return e*t/s.components*s.byteLength;case Sp:return e*t/s.components*s.byteLength;case Ur:return e*t*2/s.components*s.byteLength;case Mp:return e*t*2/s.components*s.byteLength;case _v:return e*t*3/s.components*s.byteLength;case $i:return e*t*4/s.components*s.byteLength;case bp:return e*t*4/s.components*s.byteLength;case Qu:case ju:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $u:case th:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ep:case wp:return Math.max(e,16)*Math.max(t,8)/4;case Tp:case Ap:return Math.max(e,8)*Math.max(t,8)/2;case Cp:case Rp:case Up:case Np:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Dp:case eh:case Lp:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pp:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Op:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ip:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Bp:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Fp:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case zp:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Vp:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Hp:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Gp:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case kp:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Xp:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Wp:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case qp:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Yp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Zp:case Jp:case Kp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Qp:case jp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case nh:case $p:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _R(e){switch(e){case Ui:case fv:return{byteLength:1,components:1};case ec:case dv:case Gs:return{byteLength:2,components:1};case xp:case yp:return{byteLength:2,components:4};case ms:case vp:case gs:return{byteLength:4,components:1};case pv:case mv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function eE(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function xR(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,m=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,c){let u=l.array,m=l.updateRanges;if(e.bindBuffer(c,o),m.length===0)e.bufferSubData(c,0,u);else{m.sort((d,f)=>d.start-f.start);let h=0;for(let d=1;d<m.length;d++){let f=m[h],_=m[d];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++h,m[h]=_)}m.length=h+1;for(let d=0,f=m.length;d<f;d++){let _=m[d];e.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var yR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SR=`#ifdef USE_ALPHAHASH
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
#endif`,MR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ER=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AR=`#ifdef USE_AOMAP
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
#endif`,wR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CR=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,RR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LR=`#ifdef USE_IRIDESCENCE
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
#endif`,PR=`#ifdef USE_BUMPMAP
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
#endif`,OR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kR=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,XR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WR=`vec3 transformedNormal = objectNormal;
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
#endif`,qR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KR="gl_FragColor = linearToOutputTexel( gl_FragColor );",QR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$R=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,t3=`#ifdef USE_ENVMAP
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
#endif`,e3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o3=`#ifdef USE_GRADIENTMAP
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
}`,l3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h3=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,f3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,d3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,v3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x3=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,S3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,b3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D3=`#if defined( USE_POINTS_UV )
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
#endif`,U3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I3=`#ifdef USE_MORPHTARGETS
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
#endif`,B3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,z3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,V3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,k3=`#ifdef USE_NORMALMAP
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
#endif`,X3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,K3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,aD=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,rD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oD=`#ifdef USE_SKINNING
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
#endif`,lD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cD=`#ifdef USE_SKINNING
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
#endif`,uD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pD=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mD=`#ifdef USE_TRANSMISSION
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
#endif`,gD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_D=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SD=`uniform sampler2D t2D;
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
}`,MD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ED=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AD=`#include <common>
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
}`,wD=`#if DEPTH_PACKING == 3200
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
}`,CD=`#define DISTANCE
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
}`,RD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ND=`uniform float scale;
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
}`,LD=`uniform vec3 diffuse;
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
}`,PD=`#include <common>
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
}`,OD=`uniform vec3 diffuse;
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
}`,ID=`#define LAMBERT
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
}`,BD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,FD=`#define MATCAP
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
}`,zD=`#define MATCAP
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
}`,VD=`#define NORMAL
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
}`,HD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GD=`#define PHONG
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
}`,kD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,XD=`#define STANDARD
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
}`,WD=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,qD=`#define TOON
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
}`,YD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ZD=`uniform float size;
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
}`,JD=`uniform vec3 diffuse;
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
}`,KD=`#include <common>
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
}`,QD=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,jD=`uniform float rotation;
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
}`,$D=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:yR,alphahash_pars_fragment:SR,alphamap_fragment:MR,alphamap_pars_fragment:bR,alphatest_fragment:TR,alphatest_pars_fragment:ER,aomap_fragment:AR,aomap_pars_fragment:wR,batching_pars_vertex:CR,batching_vertex:RR,begin_vertex:DR,beginnormal_vertex:UR,bsdfs:NR,iridescence_fragment:LR,bumpmap_pars_fragment:PR,clipping_planes_fragment:OR,clipping_planes_pars_fragment:IR,clipping_planes_pars_vertex:BR,clipping_planes_vertex:FR,color_fragment:zR,color_pars_fragment:VR,color_pars_vertex:HR,color_vertex:GR,common:kR,cube_uv_reflection_fragment:XR,defaultnormal_vertex:WR,displacementmap_pars_vertex:qR,displacementmap_vertex:YR,emissivemap_fragment:ZR,emissivemap_pars_fragment:JR,colorspace_fragment:KR,colorspace_pars_fragment:QR,envmap_fragment:jR,envmap_common_pars_fragment:$R,envmap_pars_fragment:t3,envmap_pars_vertex:e3,envmap_physical_pars_fragment:f3,envmap_vertex:n3,fog_vertex:i3,fog_pars_vertex:s3,fog_fragment:a3,fog_pars_fragment:r3,gradientmap_pars_fragment:o3,lightmap_pars_fragment:l3,lights_lambert_fragment:c3,lights_lambert_pars_fragment:u3,lights_pars_begin:h3,lights_toon_fragment:d3,lights_toon_pars_fragment:p3,lights_phong_fragment:m3,lights_phong_pars_fragment:g3,lights_physical_fragment:_3,lights_physical_pars_fragment:v3,lights_fragment_begin:x3,lights_fragment_maps:y3,lights_fragment_end:S3,lightprobes_pars_fragment:M3,logdepthbuf_fragment:b3,logdepthbuf_pars_fragment:T3,logdepthbuf_pars_vertex:E3,logdepthbuf_vertex:A3,map_fragment:w3,map_pars_fragment:C3,map_particle_fragment:R3,map_particle_pars_fragment:D3,metalnessmap_fragment:U3,metalnessmap_pars_fragment:N3,morphinstance_vertex:L3,morphcolor_vertex:P3,morphnormal_vertex:O3,morphtarget_pars_vertex:I3,morphtarget_vertex:B3,normal_fragment_begin:F3,normal_fragment_maps:z3,normal_pars_fragment:V3,normal_pars_vertex:H3,normal_vertex:G3,normalmap_pars_fragment:k3,clearcoat_normal_fragment_begin:X3,clearcoat_normal_fragment_maps:W3,clearcoat_pars_fragment:q3,iridescence_pars_fragment:Y3,opaque_fragment:Z3,packing:J3,premultiplied_alpha_fragment:K3,project_vertex:Q3,dithering_fragment:j3,dithering_pars_fragment:$3,roughnessmap_fragment:tD,roughnessmap_pars_fragment:eD,shadowmap_pars_fragment:nD,shadowmap_pars_vertex:iD,shadowmap_vertex:sD,shadowmask_pars_fragment:aD,skinbase_vertex:rD,skinning_pars_vertex:oD,skinning_vertex:lD,skinnormal_vertex:cD,specularmap_fragment:uD,specularmap_pars_fragment:hD,tonemapping_fragment:fD,tonemapping_pars_fragment:dD,transmission_fragment:pD,transmission_pars_fragment:mD,uv_pars_fragment:gD,uv_pars_vertex:_D,uv_vertex:vD,worldpos_vertex:xD,background_vert:yD,background_frag:SD,backgroundCube_vert:MD,backgroundCube_frag:bD,cube_vert:TD,cube_frag:ED,depth_vert:AD,depth_frag:wD,distance_vert:CD,distance_frag:RD,equirect_vert:DD,equirect_frag:UD,linedashed_vert:ND,linedashed_frag:LD,meshbasic_vert:PD,meshbasic_frag:OD,meshlambert_vert:ID,meshlambert_frag:BD,meshmatcap_vert:FD,meshmatcap_frag:zD,meshnormal_vert:VD,meshnormal_frag:HD,meshphong_vert:GD,meshphong_frag:kD,meshphysical_vert:XD,meshphysical_frag:WD,meshtoon_vert:qD,meshtoon_frag:YD,points_vert:ZD,points_frag:JD,shadow_vert:KD,shadow_frag:QD,sprite_vert:jD,sprite_frag:$D},xt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Xs={basic:{uniforms:zn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:zn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:zn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:zn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:zn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:zn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:zn([xt.points,xt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:zn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:zn([xt.common,xt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:zn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:zn([xt.sprite,xt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:zn([xt.common,xt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:zn([xt.lights,xt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Xs.physical={uniforms:zn([Xs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var nm={r:0,b:0,g:0},tU=new $e,nE=new Ft;nE.set(-1,0,0,0,1,0,0,0,1);function eU(e,t,n,i,s,a){let r=new Zt(0),o=s===!0?0:1,l,c,u=null,m=0,h=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let x=v.backgroundBlurriness>0;S=t.get(S,x)}return S}function f(v){let S=!1,x=d(v);x===null?g(r,o):x&&x.isColor&&(g(x,1),S=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(v,S){let x=d(S);x&&(x.isCubeTexture||x.mapping===Ju)?(c===void 0&&(c=new Fn(new $l(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Eo(Xs.backgroundCube.uniforms),vertexShader:Xs.backgroundCube.vertexShader,fragmentShader:Xs.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tU.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(nE),c.material.toneMapped=ee.getTransfer(x.colorSpace)!==he,(u!==x||m!==x.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=x,m=x.version,h=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Fn(new Ra(2,2),new wn({name:"BackgroundMaterial",uniforms:Eo(Xs.background.uniforms),vertexShader:Xs.background.vertexShader,fragmentShader:Xs.background.fragmentShader,side:wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ee.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||m!==x.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=x,m=x.version,h=e.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(nm,Mv(e)),n.buffers.color.setClear(nm.r,nm.g,nm.b,S,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,S=1){r.set(v),o=S,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(r,o)},render:f,addToRenderList:_,dispose:p}}function nU(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(D,N,H,W,O){let q=!1,B=m(D,W,H,N);a!==B&&(a=B,c(a.object)),q=d(D,W,H,O),q&&f(D,W,H,O),O!==null&&t.update(O,e.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,x(D,N,H,W),O!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function u(D){return e.deleteVertexArray(D)}function m(D,N,H,W){let O=W.wireframe===!0,q=i[N.id];q===void 0&&(q={},i[N.id]=q);let B=D.isInstancedMesh===!0?D.id:0,J=q[B];J===void 0&&(J={},q[B]=J);let $=J[H.id];$===void 0&&($={},J[H.id]=$);let at=$[O];return at===void 0&&(at=h(l()),$[O]=at),at}function h(D){let N=[],H=[],W=[];for(let O=0;O<n;O++)N[O]=0,H[O]=0,W[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:W,object:D,attributes:{},index:null}}function d(D,N,H,W){let O=a.attributes,q=N.attributes,B=0,J=H.getAttributes();for(let $ in J)if(J[$].location>=0){let ft=O[$],lt=q[$];if(lt===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor)),ft===void 0||ft.attribute!==lt||lt&&ft.data!==lt.data)return!0;B++}return a.attributesNum!==B||a.index!==W}function f(D,N,H,W){let O={},q=N.attributes,B=0,J=H.getAttributes();for(let $ in J)if(J[$].location>=0){let ft=q[$];ft===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor));let lt={};lt.attribute=ft,ft&&ft.data&&(lt.data=ft.data),O[$]=lt,B++}a.attributes=O,a.attributesNum=B,a.index=W}function _(){let D=a.newAttributes;for(let N=0,H=D.length;N<H;N++)D[N]=0}function g(D){p(D,0)}function p(D,N){let H=a.newAttributes,W=a.enabledAttributes,O=a.attributeDivisors;H[D]=1,W[D]===0&&(e.enableVertexAttribArray(D),W[D]=1),O[D]!==N&&(e.vertexAttribDivisor(D,N),O[D]=N)}function v(){let D=a.newAttributes,N=a.enabledAttributes;for(let H=0,W=N.length;H<W;H++)N[H]!==D[H]&&(e.disableVertexAttribArray(H),N[H]=0)}function S(D,N,H,W,O,q,B){B===!0?e.vertexAttribIPointer(D,N,H,O,q):e.vertexAttribPointer(D,N,H,W,O,q)}function x(D,N,H,W){_();let O=W.attributes,q=H.getAttributes(),B=N.defaultAttributeValues;for(let J in q){let $=q[J];if($.location>=0){let at=O[J];if(at===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(at=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(at=D.instanceColor)),at!==void 0){let ft=at.normalized,lt=at.itemSize,kt=t.get(at);if(kt===void 0)continue;let Qt=kt.buffer,zt=kt.type,tt=kt.bytesPerElement,ct=zt===e.INT||zt===e.UNSIGNED_INT||at.gpuType===vp;if(at.isInterleavedBufferAttribute){let ot=at.data,Nt=ot.stride,It=at.offset;if(ot.isInstancedInterleavedBuffer){for(let Rt=0;Rt<$.locationSize;Rt++)p($.location+Rt,ot.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Rt=0;Rt<$.locationSize;Rt++)g($.location+Rt);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let Rt=0;Rt<$.locationSize;Rt++)S($.location+Rt,lt/$.locationSize,zt,ft,Nt*tt,(It+lt/$.locationSize*Rt)*tt,ct)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<$.locationSize;ot++)p($.location+ot,at.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<$.locationSize;ot++)g($.location+ot);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let ot=0;ot<$.locationSize;ot++)S($.location+ot,lt/$.locationSize,zt,ft,lt*tt,lt/$.locationSize*ot*tt,ct)}}else if(B!==void 0){let ft=B[J];if(ft!==void 0)switch(ft.length){case 2:e.vertexAttrib2fv($.location,ft);break;case 3:e.vertexAttrib3fv($.location,ft);break;case 4:e.vertexAttrib4fv($.location,ft);break;default:e.vertexAttrib1fv($.location,ft)}}}}v()}function T(){E();for(let D in i){let N=i[D];for(let H in N){let W=N[H];for(let O in W){let q=W[O];for(let B in q)u(q[B].object),delete q[B];delete W[O]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;let N=i[D.id];for(let H in N){let W=N[H];for(let O in W){let q=W[O];for(let B in q)u(q[B].object),delete q[B];delete W[O]}}delete i[D.id]}function A(D){for(let N in i){let H=i[N];for(let W in H){let O=H[W];if(O[D.id]===void 0)continue;let q=O[D.id];for(let B in q)u(q[B].object),delete q[B];delete O[D.id]}}}function y(D){for(let N in i){let H=i[N],W=D.isInstancedMesh===!0?D.id:0,O=H[W];if(O!==void 0){for(let q in O){let B=O[q];for(let J in B)u(B[J].object),delete B[J];delete O[q]}delete H[W],Object.keys(H).length===0&&delete i[N]}}}function E(){C(),r=!0,a!==s&&(a=s,c(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function iU(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,u){u!==0&&(e.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];n.update(h,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function sU(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==$i&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===Gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ui&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gs&&!y)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(Lt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let m=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:T,samples:b}}function aU(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Ps,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){let d=m.length!==0||h||i!==0||s;return s=h,i=m.length,d},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,h){n=u(m,h,0)},this.setState=function(m,h,d){let f=m.clippingPlanes,_=m.clipIntersection,g=m.clipShadows,p=e.get(m);if(!s||f===null||f.length===0||a&&!g)a?u(null):c();else{let v=a?0:i,S=v*4,x=p.clippingState||null;l.value=x,x=u(f,h,S,d);for(let T=0;T!==S;++T)x[T]=n[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(m,h,d,f){let _=m!==null?m.length:0,g=null;if(_!==0){if(g=l.value,f!==!0||g===null){let p=d+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,x=d;S!==_;++S,x+=4)r.copy(m[S]).applyMatrix4(v,o),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Nr=4,LT=[.125,.215,.35,.446,.526,.582],Ao=20,rU=256,sh=new bo,PT=new Zt,Av=null,wv=0,Cv=0,Rv=!1,oU=new X,sm=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=oU}=a;Av=this._renderer.getRenderTarget(),wv=this._renderer.getActiveCubeFace(),Cv=this._renderer.getActiveMipmapLevel(),Rv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=BT(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=IT(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Av,wv,Cv),this._renderer.xr.enabled=Rv,t.scissorTest=!1,ic(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Rr||t.mapping===To?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Av=this._renderer.getRenderTarget(),wv=this._renderer.getActiveCubeFace(),Cv=this._renderer.getActiveMipmapLevel(),Rv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:Gs,format:$i,colorSpace:Lu,depthBuffer:!1},s=OT(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=OT(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lU(a)),this._blurMaterial=uU(a,t,n),this._ggxMaterial=cU(a,t,n)}return s}_compileMaterial(t){let n=new Fn(new Fs,t);this._renderer.compile(n,sh)}_sceneToCubeUV(t,n,i,s,a){let l=new oi(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,d=m.toneMapping;m.getClearColor(PT),m.toneMapping=ps,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fn(new $l,new Gu({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,p=!0):(g.color.copy(PT),p=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[S],a.y,a.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[S]));let T=this._cubeSize;ic(s,x*T,S>2?T:0,T,T),m.setRenderTarget(s),p&&m.render(_,l),m.render(t,l)}m.toneMapping=d,m.autoClear=h,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Rr||t.mapping===To;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=BT()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=IT());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;ic(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,sh)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),m=Math.sqrt(c*c-u*u),h=0+c*1.25,d=m*h,{_lodMax:f}=this,_=this._sizeLods[i],g=3*_*(i>f-Nr?i-f+Nr:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=f-n,ic(a,g,p,3*_,2*_),s.setRenderTarget(a),s.render(o,sh),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=f-i,ic(t,g,p,3*_,2*_),s.setRenderTarget(t),s.render(o,sh)}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");let u=3,m=this._lodMeshes[s];m.material=c;let h=c.uniforms,d=this._sizeLods[i]-1,f=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Ao-1),_=a/f,g=isFinite(a)?1+Math.floor(u*_):Ao;g>Ao&&Lt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ao}`);let p=[],v=0;for(let A=0;A<Ao;++A){let y=A/_,E=Math.exp(-y*y/2);p.push(E),A===0?v+=E:A<g&&(v+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:S}=this;h.dTheta.value=f,h.mipInt.value=S-i;let x=this._sizeLods[s],T=3*x*(s>S-Nr?s-S+Nr:0),b=4*(this._cubeSize-x);ic(n,T,b,3*x,2*x),l.setRenderTarget(n),l.render(m,sh)}};function lU(e){let t=[],n=[],i=[],s=e,a=e-Nr+1+LT.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);t.push(o);let l=1/o;r>e-Nr?l=LT[r-e+Nr-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,m=1+c,h=[u,u,m,u,m,m,u,u,m,m,u,m],d=6,f=6,_=3,g=2,p=1,v=new Float32Array(_*f*d),S=new Float32Array(g*f*d),x=new Float32Array(p*f*d);for(let b=0;b<d;b++){let A=b%3*2/3-1,y=b>2?0:-1,E=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];v.set(E,_*f*b),S.set(h,g*f*b);let C=[b,b,b,b,b,b];x.set(C,p*f*b)}let T=new Fs;T.setAttribute("position",new Ci(v,_)),T.setAttribute("uv",new Ci(S,g)),T.setAttribute("faceIndex",new Ci(x,p)),i.push(new Fn(T,null)),s>Nr&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function OT(e,t,n){let i=new Ri(e,t,n);return i.texture.mapping=Ju,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ic(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function cU(e,t,n){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rU,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:om(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function uU(e,t,n){let i=new Float32Array(Ao),s=new X(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Ao,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:om(),fragmentShader:`

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
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function IT(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:om(),fragmentShader:`

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
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function BT(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function om(){return`

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
	`}var am=class extends Ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Xu(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $l(5,5,5),a=new wn({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:Vs});a.uniforms.tEquirect.value=n;let r=new Fn(s,a),o=n.minFilter;return n.minFilter===Hs&&(n.minFilter=Se),new dp(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function hU(e){let t=new WeakMap,n=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?r(h):a(h)}function a(h){if(h&&h.isTexture){let d=h.mapping;if(d===mp||d===gp)if(t.has(h)){let f=t.get(h).texture;return o(f,h.mapping)}else{let f=h.image;if(f&&f.height>0){let _=new am(f.height);return _.fromEquirectangularTexture(e,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){let d=h.mapping,f=d===mp||d===gp,_=d===Rr||d===To;if(f||_){let g=n.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new sm(e)),g=f?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{let v=h.image;return f&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new sm(e)),g=f?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===mp?h.mapping=Rr:d===gp&&(h.mapping=To),h}function l(h){let d=0,f=6;for(let _=0;_<f;_++)h[_]!==void 0&&d++;return d===f}function c(h){let d=h.target;d.removeEventListener("dispose",c);let f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let f=n.get(d);f!==void 0&&(n.delete(d),f.dispose())}function m(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:m}}function fU(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&vo("WebGLRenderer: "+i+" extension not supported."),s}}}function dU(e,t,n,i){let s={},a=new WeakMap;function r(m){let h=m.target;h.index!==null&&t.remove(h.index);for(let f in h.attributes)t.remove(h.attributes[f]);h.removeEventListener("dispose",r),delete s[h.id];let d=a.get(h);d&&(t.remove(d),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(m,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,n.memory.geometries++),h}function l(m){let h=m.attributes;for(let d in h)t.update(h[d],e.ARRAY_BUFFER)}function c(m){let h=[],d=m.index,f=m.attributes.position,_=0;if(f===void 0)return;if(d!==null){let v=d.array;_=d.version;for(let S=0,x=v.length;S<x;S+=3){let T=v[S+0],b=v[S+1],A=v[S+2];h.push(T,b,b,A,A,T)}}else{let v=f.array;_=f.version;for(let S=0,x=v.length/3-1;S<x;S+=3){let T=S+0,b=S+1,A=S+2;h.push(T,b,b,A,A,T)}}let g=new(f.count>=65535?Hu:Vu)(h,1);g.version=_;let p=a.get(m);p&&t.remove(p),a.set(m,g)}function u(m){let h=a.get(m);if(h){let d=m.index;d!==null&&h.version<d.version&&c(m)}else c(m);return a.get(m)}return{get:o,update:l,getWireframeAttribute:u}}function pU(e,t,n){let i;function s(m){i=m}let a,r;function o(m){a=m.type,r=m.bytesPerElement}function l(m,h){e.drawElements(i,h,a,m*r),n.update(h,i,1)}function c(m,h,d){d!==0&&(e.drawElementsInstanced(i,h,a,m*r,d),n.update(h,i,d))}function u(m,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,m,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g];n.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function mU(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Pt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function gU(e,t,n){let i=new WeakMap,s=new ne;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==m){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;d===!0&&(S=1),f===!0&&(S=2),_===!0&&(S=3);let x=o.attributes.position.count*S,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*T*4*m),A=new Bu(b,x,T,m);A.type=gs,A.needsUpdate=!0;let y=S*4;for(let C=0;C<m;C++){let D=g[C],N=p[C],H=v[C],W=x*T*4*C;for(let O=0;O<D.count;O++){let q=O*y;d===!0&&(s.fromBufferAttribute(D,O),b[W+q+0]=s.x,b[W+q+1]=s.y,b[W+q+2]=s.z,b[W+q+3]=0),f===!0&&(s.fromBufferAttribute(N,O),b[W+q+4]=s.x,b[W+q+5]=s.y,b[W+q+6]=s.z,b[W+q+7]=0),_===!0&&(s.fromBufferAttribute(H,O),b[W+q+8]=s.x,b[W+q+9]=s.y,b[W+q+10]=s.z,b[W+q+11]=H.itemSize===4?s.w:1)}}h={count:m,texture:A,size:new Ht(x,T)},i.set(o,h),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let f=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",f),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function _U(e,t,n,i,s){let a=new WeakMap;function r(c){let u=s.render.frame,m=c.geometry,h=t.get(c,m);if(a.get(h)!==u&&(t.update(h),a.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==u&&(d.update(),a.set(d,u))}return h}function o(){a=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:r,dispose:o}}var vU={[sv]:"LINEAR_TONE_MAPPING",[av]:"REINHARD_TONE_MAPPING",[rv]:"CINEON_TONE_MAPPING",[ov]:"ACES_FILMIC_TONE_MAPPING",[cv]:"AGX_TONE_MAPPING",[uv]:"NEUTRAL_TONE_MAPPING",[lv]:"CUSTOM_TONE_MAPPING"};function xU(e,t,n,i,s,a){let r=new Ri(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,depthTexture:s?new Ca(t,n):void 0}),o=new Ri(t,n,{type:Gs,depthBuffer:!1,stencilBuffer:!1}),l=new Fs;l.setAttribute("position",new Qi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Qi([0,2,0,0,2,0],2));let c=new tp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Fn(l,c),m=new bo(-1,1,1,-1,0,1),h=null,d=null,f=!1,_,g=null,p=[],v=!1;this.setSize=function(S,x){r.setSize(S,x),o.setSize(S,x);for(let T=0;T<p.length;T++){let b=p[T];b.setSize&&b.setSize(S,x)}},this.setEffects=function(S){p=S,v=p.length>0&&p[0].isRenderPass===!0;let x=r.width,T=r.height;for(let b=0;b<p.length;b++){let A=p[b];A.setSize&&A.setSize(x,T)}},this.begin=function(S,x){if(f||S.toneMapping===ps&&p.length===0)return!1;if(g=x,x!==null){let T=x.width,b=x.height;(r.width!==T||r.height!==b)&&this.setSize(T,b)}return v===!1&&S.setRenderTarget(r),_=S.toneMapping,S.toneMapping=ps,!0},this.hasRenderPass=function(){return v},this.end=function(S,x){S.toneMapping=_,f=!0;let T=r,b=o;for(let A=0;A<p.length;A++){let y=p[A];if(y.enabled!==!1&&(y.render(S,b,T,x),y.needsSwap!==!1)){let E=T;T=b,b=E}}if(h!==S.outputColorSpace||d!==S.toneMapping){h=S.outputColorSpace,d=S.toneMapping,c.defines={},ee.getTransfer(h)===he&&(c.defines.SRGB_TRANSFER="");let A=vU[d];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(g),S.render(u,m),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}var iE=new Zn,Nv=new Ca(1,1),sE=new Bu,aE=new Qd,rE=new Xu,FT=[],zT=[],VT=new Float32Array(16),HT=new Float32Array(9),GT=new Float32Array(4);function ac(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=FT[s];if(a===void 0&&(a=new Float32Array(s),FT[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function un(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function hn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function lm(e,t){let n=zT[t];n===void 0&&(n=new Int32Array(t),zT[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function yU(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function SU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2fv(this.addr,t),hn(n,t)}}function MU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(un(n,t))return;e.uniform3fv(this.addr,t),hn(n,t)}}function bU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4fv(this.addr,t),hn(n,t)}}function TU(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;GT.set(i),e.uniformMatrix2fv(this.addr,!1,GT),hn(n,i)}}function EU(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;HT.set(i),e.uniformMatrix3fv(this.addr,!1,HT),hn(n,i)}}function AU(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(un(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),hn(n,t)}else{if(un(n,i))return;VT.set(i),e.uniformMatrix4fv(this.addr,!1,VT),hn(n,i)}}function wU(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function CU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2iv(this.addr,t),hn(n,t)}}function RU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(un(n,t))return;e.uniform3iv(this.addr,t),hn(n,t)}}function DU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4iv(this.addr,t),hn(n,t)}}function UU(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function NU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(un(n,t))return;e.uniform2uiv(this.addr,t),hn(n,t)}}function LU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(un(n,t))return;e.uniform3uiv(this.addr,t),hn(n,t)}}function PU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(un(n,t))return;e.uniform4uiv(this.addr,t),hn(n,t)}}function OU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Nv.compareFunction=n.isReversedDepthBuffer()?em:tm,a=Nv):a=iE,n.setTexture2D(t||a,s)}function IU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||aE,s)}function BU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||rE,s)}function FU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||sE,s)}function zU(e){switch(e){case 5126:return yU;case 35664:return SU;case 35665:return MU;case 35666:return bU;case 35674:return TU;case 35675:return EU;case 35676:return AU;case 5124:case 35670:return wU;case 35667:case 35671:return CU;case 35668:case 35672:return RU;case 35669:case 35673:return DU;case 5125:return UU;case 36294:return NU;case 36295:return LU;case 36296:return PU;case 35678:case 36198:case 36298:case 36306:case 35682:return OU;case 35679:case 36299:case 36307:return IU;case 35680:case 36300:case 36308:case 36293:return BU;case 36289:case 36303:case 36311:case 36292:return FU}}function VU(e,t){e.uniform1fv(this.addr,t)}function HU(e,t){let n=ac(t,this.size,2);e.uniform2fv(this.addr,n)}function GU(e,t){let n=ac(t,this.size,3);e.uniform3fv(this.addr,n)}function kU(e,t){let n=ac(t,this.size,4);e.uniform4fv(this.addr,n)}function XU(e,t){let n=ac(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function WU(e,t){let n=ac(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function qU(e,t){let n=ac(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function YU(e,t){e.uniform1iv(this.addr,t)}function ZU(e,t){e.uniform2iv(this.addr,t)}function JU(e,t){e.uniform3iv(this.addr,t)}function KU(e,t){e.uniform4iv(this.addr,t)}function QU(e,t){e.uniform1uiv(this.addr,t)}function jU(e,t){e.uniform2uiv(this.addr,t)}function $U(e,t){e.uniform3uiv(this.addr,t)}function tN(e,t){e.uniform4uiv(this.addr,t)}function eN(e,t,n){let i=this.cache,s=t.length,a=lm(n,s);un(i,a)||(e.uniform1iv(this.addr,a),hn(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Nv:r=iE;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function nN(e,t,n){let i=this.cache,s=t.length,a=lm(n,s);un(i,a)||(e.uniform1iv(this.addr,a),hn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||aE,a[r])}function iN(e,t,n){let i=this.cache,s=t.length,a=lm(n,s);un(i,a)||(e.uniform1iv(this.addr,a),hn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||rE,a[r])}function sN(e,t,n){let i=this.cache,s=t.length,a=lm(n,s);un(i,a)||(e.uniform1iv(this.addr,a),hn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||sE,a[r])}function aN(e){switch(e){case 5126:return VU;case 35664:return HU;case 35665:return GU;case 35666:return kU;case 35674:return XU;case 35675:return WU;case 35676:return qU;case 5124:case 35670:return YU;case 35667:case 35671:return ZU;case 35668:case 35672:return JU;case 35669:case 35673:return KU;case 5125:return QU;case 36294:return jU;case 36295:return $U;case 36296:return tN;case 35678:case 36198:case 36298:case 36306:case 35682:return eN;case 35679:case 36299:case 36307:return nN;case 35680:case 36300:case 36308:case 36293:return iN;case 36289:case 36303:case 36311:case 36292:return sN}}var Lv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zU(n.type)}},Pv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aN(n.type)}},Ov=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Dv=/(\w+)(\])?(\[|\.)?/g;function kT(e,t){e.seq.push(t),e.map[t.id]=t}function rN(e,t,n){let i=e.name,s=i.length;for(Dv.lastIndex=0;;){let a=Dv.exec(i),r=Dv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){kT(n,c===void 0?new Lv(o,e,t):new Pv(o,e,t));break}else{let m=n.map[o];m===void 0&&(m=new Ov(o),kT(n,m)),n=m}}}var sc=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);rN(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function XT(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var oN=37297,lN=0;function cN(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var WT=new Ft;function uN(e){ee._getMatrix(WT,ee.workingColorSpace,e);let t=`mat3( ${WT.elements.map(n=>n.toFixed(4))} )`;switch(ee.getTransfer(e)){case Pu:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function qT(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+cN(e.getShaderSource(t),o)}else return a}function hN(e,t){let n=uN(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var fN={[sv]:"Linear",[av]:"Reinhard",[rv]:"Cineon",[ov]:"ACESFilmic",[cv]:"AgX",[uv]:"Neutral",[lv]:"Custom"};function dN(e,t){let n=fN[t];return n===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var im=new X;function pN(){ee.getLuminanceCoefficients(im);let e=im.x.toFixed(4),t=im.y.toFixed(4),n=im.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mN(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rh).join(`
`)}function gN(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function _N(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function rh(e){return e!==""}function YT(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ZT(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iv(e){return e.replace(vN,yN)}var xN=new Map;function yN(e,t){let n=qt[t];if(n===void 0){let i=xN.get(t);if(i!==void 0)n=qt[i],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Iv(n)}var SN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function JT(e){return e.replace(SN,MN)}function MN(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function KT(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var bN={[Zu]:"SHADOWMAP_TYPE_PCF",[tc]:"SHADOWMAP_TYPE_VSM"};function TN(e){return bN[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var EN={[Rr]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE",[Ju]:"ENVMAP_TYPE_CUBE_UV"};function AN(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":EN[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var wN={[To]:"ENVMAP_MODE_REFRACTION"};function CN(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":wN[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var RN={[iv]:"ENVMAP_BLENDING_MULTIPLY",[mT]:"ENVMAP_BLENDING_MIX",[gT]:"ENVMAP_BLENDING_ADD"};function DN(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":RN[e.combine]||"ENVMAP_BLENDING_NONE"}function UN(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function NN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=TN(n),c=AN(n),u=CN(n),m=DN(n),h=UN(n),d=mN(n),f=gN(a),_=s.createProgram(),g,p,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(rh).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(rh).join(`
`),p.length>0&&(p+=`
`)):(g=[KT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rh).join(`
`),p=[KT(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ps?"#define TONE_MAPPING":"",n.toneMapping!==ps?qt.tonemapping_pars_fragment:"",n.toneMapping!==ps?dN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,hN("linearToOutputTexel",n.outputColorSpace),pN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rh).join(`
`)),r=Iv(r),r=YT(r,n),r=ZT(r,n),o=Iv(o),o=YT(o,n),o=ZT(o,n),r=JT(r),o=JT(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=v+g+r,x=v+p+o,T=XT(s,s.VERTEX_SHADER,S),b=XT(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,b),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(D){if(e.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(T)||"",W=s.getShaderInfoLog(b)||"",O=N.trim(),q=H.trim(),B=W.trim(),J=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,_,T,b);else{let at=qT(s,T,"vertex"),ft=qT(s,b,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+at+`
`+ft)}else O!==""?Lt("WebGLProgram: Program Info Log:",O):(q===""||B==="")&&($=!1);$&&(D.diagnostics={runnable:J,programLog:O,vertexShader:{log:q,prefix:g},fragmentShader:{log:B,prefix:p}})}s.deleteShader(T),s.deleteShader(b),y=new sc(s,_),E=_N(s,_)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,oN)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lN++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}var LN=0,Bv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Fv(t),n.set(t,i)),i}},Fv=class{constructor(t){this.id=LN++,this.code=t,this.usedTimes=0}};function PN(e){return e===Ur||e===eh||e===nh}function ON(e,t,n,i,s,a){let r=new Fu,o=new Bv,l=new Set,c=[],u=new Map,m=i.logarithmicDepthBuffer,h=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,E,C,D,N,H){let W=D.fog,O=N.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,J=t.get(y.envMap||q,B),$=J&&J.mapping===Ju?J.image.height:null,at=d[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&Lt("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let ft=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,lt=ft!==void 0?ft.length:0,kt=0;O.morphAttributes.position!==void 0&&(kt=1),O.morphAttributes.normal!==void 0&&(kt=2),O.morphAttributes.color!==void 0&&(kt=3);let Qt,zt,tt,ct;if(at){let Tt=Xs[at];Qt=Tt.vertexShader,zt=Tt.fragmentShader}else{Qt=y.vertexShader,zt=y.fragmentShader;let Tt=o.getVertexShaderStage(y),De=o.getFragmentShaderStage(y);o.update(y,Tt,De),tt=Tt.id,ct=De.id}let ot=e.getRenderTarget(),Nt=e.state.buffers.depth.getReversed(),It=N.isInstancedMesh===!0,Rt=N.isBatchedMesh===!0,Ee=!!y.map,Xt=!!y.matcap,Yt=!!J,Ut=!!y.aoMap,Wt=!!y.lightMap,Ie=!!y.bumpMap&&y.wireframe===!1,Ve=!!y.normalMap,He=!!y.displacementMap,en=!!y.emissiveMap,Re=!!y.metalnessMap,fe=!!y.roughnessMap,L=y.anisotropy>0,dn=y.clearcoat>0,jt=y.dispersion>0,R=y.iridescence>0,M=y.sheen>0,I=y.transmission>0,G=L&&!!y.anisotropyMap,Z=dn&&!!y.clearcoatMap,ht=dn&&!!y.clearcoatNormalMap,rt=dn&&!!y.clearcoatRoughnessMap,V=R&&!!y.iridescenceMap,K=R&&!!y.iridescenceThicknessMap,dt=M&&!!y.sheenColorMap,bt=M&&!!y.sheenRoughnessMap,_t=!!y.specularMap,gt=!!y.specularColorMap,Ct=!!y.specularIntensityMap,Dt=I&&!!y.transmissionMap,Bt=I&&!!y.thicknessMap,U=!!y.gradientMap,pt=!!y.alphaMap,j=y.alphaTest>0,mt=!!y.alphaHash,vt=!!y.extensions,nt=ps;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(nt=e.toneMapping);let Et={shaderID:at,shaderType:y.type,shaderName:y.name,vertexShader:Qt,fragmentShader:zt,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:ct,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Rt,batchingColor:Rt&&N._colorsTexture!==null,instancing:It,instancingColor:It&&N.instanceColor!==null,instancingMorph:It&&N.morphTexture!==null,outputColorSpace:ot===null?e.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ee,matcap:Xt,envMap:Yt,envMapMode:Yt&&J.mapping,envMapCubeUVHeight:$,aoMap:Ut,lightMap:Wt,bumpMap:Ie,normalMap:Ve,displacementMap:He,emissiveMap:en,normalMapObjectSpace:Ve&&y.normalMapType===xT,normalMapTangentSpace:Ve&&y.normalMapType===xv,packedNormalMap:Ve&&y.normalMapType===xv&&PN(y.normalMap.format),metalnessMap:Re,roughnessMap:fe,anisotropy:L,anisotropyMap:G,clearcoat:dn,clearcoatMap:Z,clearcoatNormalMap:ht,clearcoatRoughnessMap:rt,dispersion:jt,iridescence:R,iridescenceMap:V,iridescenceThicknessMap:K,sheen:M,sheenColorMap:dt,sheenRoughnessMap:bt,specularMap:_t,specularColorMap:gt,specularIntensityMap:Ct,transmission:I,transmissionMap:Dt,thicknessMap:Bt,gradientMap:U,opaque:y.transparent===!1&&y.blending===xo&&y.alphaToCoverage===!1,alphaMap:pt,alphaTest:j,alphaHash:mt,combine:y.combine,mapUv:Ee&&f(y.map.channel),aoMapUv:Ut&&f(y.aoMap.channel),lightMapUv:Wt&&f(y.lightMap.channel),bumpMapUv:Ie&&f(y.bumpMap.channel),normalMapUv:Ve&&f(y.normalMap.channel),displacementMapUv:He&&f(y.displacementMap.channel),emissiveMapUv:en&&f(y.emissiveMap.channel),metalnessMapUv:Re&&f(y.metalnessMap.channel),roughnessMapUv:fe&&f(y.roughnessMap.channel),anisotropyMapUv:G&&f(y.anisotropyMap.channel),clearcoatMapUv:Z&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:K&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:bt&&f(y.sheenRoughnessMap.channel),specularMapUv:_t&&f(y.specularMap.channel),specularColorMapUv:gt&&f(y.specularColorMap.channel),specularIntensityMapUv:Ct&&f(y.specularIntensityMap.channel),transmissionMapUv:Dt&&f(y.transmissionMap.channel),thicknessMapUv:Bt&&f(y.thicknessMap.channel),alphaMapUv:pt&&f(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ve||L),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(Ee||pt),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&Ve===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Nt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:kt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:nt,decodeVideoTexture:Ee&&y.map.isVideoTexture===!0&&ee.getTransfer(y.map.colorSpace)===he,decodeVideoTextureEmissive:en&&y.emissiveMap.isVideoTexture===!0&&ee.getTransfer(y.emissiveMap.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zs,flipSided:y.side===Jn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&y.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function g(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)E.push(C),E.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(E,y),v(E,y),E.push(e.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function S(y){let E=d[y.type],C;if(E){let D=Xs[E];C=UT.clone(D.uniforms)}else C=y.uniforms;return C}function x(y,E){let C=u.get(E);return C!==void 0?++C.usedTimes:(C=new NN(e,E,y,s),c.push(C),u.set(E,C)),C}function T(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:x,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:A}}function IN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function BN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function QT(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function jT(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,f,_,g,p){let v=e[t];return v===void 0?(v={id:h.id,object:h,geometry:d,material:f,materialVariant:r(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},e[t]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=f,v.materialVariant=r(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=g,v.group=p),t++,v}function l(h,d,f,_,g,p){let v=o(h,d,f,_,g,p);f.transmission>0?i.push(v):f.transparent===!0?s.push(v):n.push(v)}function c(h,d,f,_,g,p){let v=o(h,d,f,_,g,p);f.transmission>0?i.unshift(v):f.transparent===!0?s.unshift(v):n.unshift(v)}function u(h,d,f){n.length>1&&n.sort(h||BN),i.length>1&&i.sort(d||QT),s.length>1&&s.sort(d||QT),f&&(n.reverse(),i.reverse(),s.reverse())}function m(){for(let h=t,d=e.length;h<d;h++){let f=e[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:m,sort:u}}function FN(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new jT,e.set(i,[r])):s>=a.length?(r=new jT,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function zN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new X,color:new Zt};break;case"SpotLight":n={position:new X,direction:new X,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new X,halfWidth:new X,halfHeight:new X};break}return e[t.id]=n,n}}}function VN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var HN=0;function GN(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function kN(e){let t=new zN,n=VN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);let s=new X,a=new $e,r=new $e;function o(c){let u=0,m=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,f=0,_=0,g=0,p=0,v=0,S=0,x=0,T=0,b=0,A=0;c.sort(GN);for(let E=0,C=c.length;E<C;E++){let D=c[E],N=D.color,H=D.intensity,W=D.distance,O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ur?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=N.r*H,m+=N.g*H,h+=N.b*H;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],H);A++}else if(D.isDirectionalLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let B=D.shadow,J=n.get(D);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,i.directionalShadow[d]=J,i.directionalShadowMap[d]=O,i.directionalShadowMatrix[d]=D.shadow.matrix,v++}i.directional[d]=q,d++}else if(D.isSpotLight){let q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(N).multiplyScalar(H),q.distance=W,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[_]=q;let B=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,B.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[_]=B.matrix,D.castShadow){let J=n.get(D);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=O,x++}_++}else if(D.isRectAreaLight){let q=t.get(D);q.color.copy(N).multiplyScalar(H),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=q,g++}else if(D.isPointLight){let q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let B=D.shadow,J=n.get(D);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,J.shadowCameraNear=B.camera.near,J.shadowCameraFar=B.camera.far,i.pointShadow[f]=J,i.pointShadowMap[f]=O,i.pointShadowMatrix[f]=D.shadow.matrix,S++}i.point[f]=q,f++}else if(D.isHemisphereLight){let q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(H),q.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[p]=q,p++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=h;let y=i.hash;(y.directionalLength!==d||y.pointLength!==f||y.spotLength!==_||y.rectAreaLength!==g||y.hemiLength!==p||y.numDirectionalShadows!==v||y.numPointShadows!==S||y.numSpotShadows!==x||y.numSpotMaps!==T||y.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=f,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,y.directionalLength=d,y.pointLength=f,y.spotLength=_,y.rectAreaLength=g,y.hemiLength=p,y.numDirectionalShadows=v,y.numPointShadows=S,y.numSpotShadows=x,y.numSpotMaps=T,y.numLightProbes=A,i.version=HN++)}function l(c,u){let m=0,h=0,d=0,f=0,_=0,g=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let S=c[p];if(S.isDirectionalLight){let x=i.directional[m];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),m++}else if(S.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(S.isRectAreaLight){let x=i.rectArea[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),r.identity(),a.copy(S.matrixWorld),a.premultiply(g),r.extractRotation(a),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),f++}else if(S.isPointLight){let x=i.point[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function $T(e){let t=new kN(e),n=[],i=[],s=[];function a(h){m.camera=h,n.length=0,i.length=0,s.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(n)}function u(h){t.setupView(n,h)}let m={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:m,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function XN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new $T(e),t.set(s,[o])):a>=r.length?(o=new $T(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var WN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YN=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],ZN=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],tE=new $e,ah=new X,Uv=new X;function JN(e,t,n){let i=new ku,s=new Ht,a=new Ht,r=new ne,o=new ep,l=new np,c={},u=n.maxTextureSize,m={[wa]:Jn,[Jn]:wa,[zs]:zs},h=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:WN,fragmentShader:qN}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let f=new Fs;f.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Fn(f,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let p=this.type;this.render=function(b,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Kb&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zu);let E=e.getRenderTarget(),C=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),N=e.state;N.setBlending(Vs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let H=p!==this.type;H&&A.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(O=>O.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,O=b.length;W<O;W++){let q=b[W],B=q.shadow;if(B===void 0){Lt("WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let J=B.getFrameExtents();s.multiply(J),a.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/J.x),s.x=a.x*J.x,B.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/J.y),s.y=a.y*J.y,B.mapSize.y=a.y));let $=e.state.buffers.depth.getReversed();if(B.camera._reversedDepth=$,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===tc){if(q.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ri(s.x,s.y,{format:Ur,type:Gs,minFilter:Se,magFilter:Se,generateMipmaps:!1}),B.map.texture.name=q.name+".shadowMap",B.map.depthTexture=new Ca(s.x,s.y,gs),B.map.depthTexture.name=q.name+".shadowMapDepth",B.map.depthTexture.format=Os,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=yn,B.map.depthTexture.magFilter=yn}else q.isPointLight?(B.map=new am(s.x),B.map.depthTexture=new $d(s.x,ms)):(B.map=new Ri(s.x,s.y),B.map.depthTexture=new Ca(s.x,s.y,ms)),B.map.depthTexture.name=q.name+".shadowMap",B.map.depthTexture.format=Os,this.type===Zu?(B.map.depthTexture.compareFunction=$?em:tm,B.map.depthTexture.minFilter=Se,B.map.depthTexture.magFilter=Se):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=yn,B.map.depthTexture.magFilter=yn);B.camera.updateProjectionMatrix()}let at=B.map.isWebGLCubeRenderTarget?6:1;for(let ft=0;ft<at;ft++){if(B.map.isWebGLCubeRenderTarget)e.setRenderTarget(B.map,ft),e.clear();else{ft===0&&(e.setRenderTarget(B.map),e.clear());let lt=B.getViewport(ft);r.set(a.x*lt.x,a.y*lt.y,a.x*lt.z,a.y*lt.w),N.viewport(r)}if(q.isPointLight){let lt=B.camera,kt=B.matrix,Qt=q.distance||lt.far;Qt!==lt.far&&(lt.far=Qt,lt.updateProjectionMatrix()),ah.setFromMatrixPosition(q.matrixWorld),lt.position.copy(ah),Uv.copy(lt.position),Uv.add(YN[ft]),lt.up.copy(ZN[ft]),lt.lookAt(Uv),lt.updateMatrixWorld(),kt.makeTranslation(-ah.x,-ah.y,-ah.z),tE.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(tE,lt.coordinateSystem,lt.reversedDepth)}else B.updateMatrices(q);i=B.getFrustum(),x(A,y,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===tc&&v(B,y),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,e.setRenderTarget(E,C,D)};function v(b,A){let y=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ri(s.x,s.y,{format:Ur,type:Gs})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(A,null,y,h,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(A,null,y,d,_,null)}function S(b,A,y,E){let C=null,D=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=y.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=C.uuid,H=A.uuid,W=c[N];W===void 0&&(W={},c[N]=W);let O=W[H];O===void 0&&(O=C.clone(),W[H]=O,A.addEventListener("dispose",T)),C=O}if(C.visible=A.visible,C.wireframe=A.wireframe,E===tc?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:m[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=e.properties.get(C);N.light=y}return C}function x(b,A,y,E,C){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===tc)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let H=t.update(b),W=b.material;if(Array.isArray(W)){let O=H.groups;for(let q=0,B=O.length;q<B;q++){let J=O[q],$=W[J.materialIndex];if($&&$.visible){let at=S(b,$,E,C);b.onBeforeShadow(e,b,A,y,H,at,J),e.renderBufferDirect(y,null,H,at,b,J),b.onAfterShadow(e,b,A,y,H,at,J)}}}else if(W.visible){let O=S(b,W,E,C);b.onBeforeShadow(e,b,A,y,H,O,null),e.renderBufferDirect(y,null,H,O,b,null),b.onAfterShadow(e,b,A,y,H,O,null)}}let N=b.children;for(let H=0,W=N.length;H<W;H++)x(N[H],A,y,E,C)}function T(b){b.target.removeEventListener("dispose",T);for(let y in c){let E=c[y],C=b.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function KN(e,t){function n(){let U=!1,pt=new ne,j=null,mt=new ne(0,0,0,0);return{setMask:function(vt){j!==vt&&!U&&(e.colorMask(vt,vt,vt,vt),j=vt)},setLocked:function(vt){U=vt},setClear:function(vt,nt,Et,Tt,De){De===!0&&(vt*=Tt,nt*=Tt,Et*=Tt),pt.set(vt,nt,Et,Tt),mt.equals(pt)===!1&&(e.clearColor(vt,nt,Et,Tt),mt.copy(pt))},reset:function(){U=!1,j=null,mt.set(-1,0,0,0)}}}function i(){let U=!1,pt=!1,j=null,mt=null,vt=null;return{setReversed:function(nt){if(pt!==nt){let Et=t.get("EXT_clip_control");nt?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),pt=nt;let Tt=vt;vt=null,this.setClear(Tt)}},getReversed:function(){return pt},setTest:function(nt){nt?ot(e.DEPTH_TEST):Nt(e.DEPTH_TEST)},setMask:function(nt){j!==nt&&!U&&(e.depthMask(nt),j=nt)},setFunc:function(nt){if(pt&&(nt=RT[nt]),mt!==nt){switch(nt){case Fd:e.depthFunc(e.NEVER);break;case zd:e.depthFunc(e.ALWAYS);break;case Vd:e.depthFunc(e.LESS);break;case yo:e.depthFunc(e.LEQUAL);break;case Hd:e.depthFunc(e.EQUAL);break;case Gd:e.depthFunc(e.GEQUAL);break;case kd:e.depthFunc(e.GREATER);break;case Xd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}mt=nt}},setLocked:function(nt){U=nt},setClear:function(nt){vt!==nt&&(vt=nt,pt&&(nt=1-nt),e.clearDepth(nt))},reset:function(){U=!1,j=null,mt=null,vt=null,pt=!1}}}function s(){let U=!1,pt=null,j=null,mt=null,vt=null,nt=null,Et=null,Tt=null,De=null;return{setTest:function(le){U||(le?ot(e.STENCIL_TEST):Nt(e.STENCIL_TEST))},setMask:function(le){pt!==le&&!U&&(e.stencilMask(le),pt=le)},setFunc:function(le,Nn,kn){(j!==le||mt!==Nn||vt!==kn)&&(e.stencilFunc(le,Nn,kn),j=le,mt=Nn,vt=kn)},setOp:function(le,Nn,kn){(nt!==le||Et!==Nn||Tt!==kn)&&(e.stencilOp(le,Nn,kn),nt=le,Et=Nn,Tt=kn)},setLocked:function(le){U=le},setClear:function(le){De!==le&&(e.clearStencil(le),De=le)},reset:function(){U=!1,pt=null,j=null,mt=null,vt=null,nt=null,Et=null,Tt=null,De=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},m={},h={},d=new WeakMap,f=[],_=null,g=!1,p=null,v=null,S=null,x=null,T=null,b=null,A=null,y=new Zt(0,0,0),E=0,C=!1,D=null,N=null,H=null,W=null,O=null,q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,J=0,$=e.getParameter(e.VERSION);$.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec($)[1]),B=J>=1):$.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=J>=2);let at=null,ft={},lt=e.getParameter(e.SCISSOR_BOX),kt=e.getParameter(e.VIEWPORT),Qt=new ne().fromArray(lt),zt=new ne().fromArray(kt);function tt(U,pt,j,mt){let vt=new Uint8Array(4),nt=e.createTexture();e.bindTexture(U,nt),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Et=0;Et<j;Et++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(pt,0,e.RGBA,1,1,mt,0,e.RGBA,e.UNSIGNED_BYTE,vt):e.texImage2D(pt+Et,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,vt);return nt}let ct={};ct[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),ct[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ct[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ot(e.DEPTH_TEST),r.setFunc(yo),Ie(!1),Ve($_),ot(e.CULL_FACE),Ut(Vs);function ot(U){u[U]!==!0&&(e.enable(U),u[U]=!0)}function Nt(U){u[U]!==!1&&(e.disable(U),u[U]=!1)}function It(U,pt){return h[U]!==pt?(e.bindFramebuffer(U,pt),h[U]=pt,U===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=pt),U===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=pt),!0):!1}function Rt(U,pt){let j=f,mt=!1;if(U){j=d.get(pt),j===void 0&&(j=[],d.set(pt,j));let vt=U.textures;if(j.length!==vt.length||j[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,Et=vt.length;nt<Et;nt++)j[nt]=e.COLOR_ATTACHMENT0+nt;j.length=vt.length,mt=!0}}else j[0]!==e.BACK&&(j[0]=e.BACK,mt=!0);mt&&e.drawBuffers(j)}function Ee(U){return _!==U?(e.useProgram(U),_=U,!0):!1}let Xt={[br]:e.FUNC_ADD,[jb]:e.FUNC_SUBTRACT,[$b]:e.FUNC_REVERSE_SUBTRACT};Xt[tT]=e.MIN,Xt[eT]=e.MAX;let Yt={[nT]:e.ZERO,[iT]:e.ONE,[sT]:e.SRC_COLOR,[Id]:e.SRC_ALPHA,[uT]:e.SRC_ALPHA_SATURATE,[lT]:e.DST_COLOR,[rT]:e.DST_ALPHA,[aT]:e.ONE_MINUS_SRC_COLOR,[Bd]:e.ONE_MINUS_SRC_ALPHA,[cT]:e.ONE_MINUS_DST_COLOR,[oT]:e.ONE_MINUS_DST_ALPHA,[hT]:e.CONSTANT_COLOR,[fT]:e.ONE_MINUS_CONSTANT_COLOR,[dT]:e.CONSTANT_ALPHA,[pT]:e.ONE_MINUS_CONSTANT_ALPHA};function Ut(U,pt,j,mt,vt,nt,Et,Tt,De,le){if(U===Vs){g===!0&&(Nt(e.BLEND),g=!1);return}if(g===!1&&(ot(e.BLEND),g=!0),U!==Qb){if(U!==p||le!==C){if((v!==br||T!==br)&&(e.blendEquation(e.FUNC_ADD),v=br,T=br),le)switch(U){case xo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case tv:e.blendFunc(e.ONE,e.ONE);break;case ev:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case nv:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Pt("WebGLState: Invalid blending: ",U);break}else switch(U){case xo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case tv:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case ev:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nv:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",U);break}S=null,x=null,b=null,A=null,y.set(0,0,0),E=0,p=U,C=le}return}vt=vt||pt,nt=nt||j,Et=Et||mt,(pt!==v||vt!==T)&&(e.blendEquationSeparate(Xt[pt],Xt[vt]),v=pt,T=vt),(j!==S||mt!==x||nt!==b||Et!==A)&&(e.blendFuncSeparate(Yt[j],Yt[mt],Yt[nt],Yt[Et]),S=j,x=mt,b=nt,A=Et),(Tt.equals(y)===!1||De!==E)&&(e.blendColor(Tt.r,Tt.g,Tt.b,De),y.copy(Tt),E=De),p=U,C=!1}function Wt(U,pt){U.side===zs?Nt(e.CULL_FACE):ot(e.CULL_FACE);let j=U.side===Jn;pt&&(j=!j),Ie(j),U.blending===xo&&U.transparent===!1?Ut(Vs):Ut(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let mt=U.stencilWrite;o.setTest(mt),mt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),en(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ot(e.SAMPLE_ALPHA_TO_COVERAGE):Nt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(U){D!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),D=U)}function Ve(U){U!==Zb?(ot(e.CULL_FACE),U!==N&&(U===$_?e.cullFace(e.BACK):U===Jb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Nt(e.CULL_FACE),N=U}function He(U){U!==H&&(B&&e.lineWidth(U),H=U)}function en(U,pt,j){U?(ot(e.POLYGON_OFFSET_FILL),(W!==pt||O!==j)&&(W=pt,O=j,r.getReversed()&&(pt=-pt),e.polygonOffset(pt,j))):Nt(e.POLYGON_OFFSET_FILL)}function Re(U){U?ot(e.SCISSOR_TEST):Nt(e.SCISSOR_TEST)}function fe(U){U===void 0&&(U=e.TEXTURE0+q-1),at!==U&&(e.activeTexture(U),at=U)}function L(U,pt,j){j===void 0&&(at===null?j=e.TEXTURE0+q-1:j=at);let mt=ft[j];mt===void 0&&(mt={type:void 0,texture:void 0},ft[j]=mt),(mt.type!==U||mt.texture!==pt)&&(at!==j&&(e.activeTexture(j),at=j),e.bindTexture(U,pt||ct[U]),mt.type=U,mt.texture=pt)}function dn(){let U=ft[at];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function jt(){try{e.compressedTexImage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function R(){try{e.compressedTexImage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function M(){try{e.texSubImage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function I(){try{e.texSubImage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function G(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function Z(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function ht(){try{e.texStorage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function rt(){try{e.texStorage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function V(){try{e.texImage2D(...arguments)}catch(U){Pt("WebGLState:",U)}}function K(){try{e.texImage3D(...arguments)}catch(U){Pt("WebGLState:",U)}}function dt(U){return m[U]!==void 0?m[U]:e.getParameter(U)}function bt(U,pt){m[U]!==pt&&(e.pixelStorei(U,pt),m[U]=pt)}function _t(U){Qt.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),Qt.copy(U))}function gt(U){zt.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),zt.copy(U))}function Ct(U,pt){let j=c.get(pt);j===void 0&&(j=new WeakMap,c.set(pt,j));let mt=j.get(U);mt===void 0&&(mt=e.getUniformBlockIndex(pt,U.name),j.set(U,mt))}function Dt(U,pt){let mt=c.get(pt).get(U);l.get(pt)!==mt&&(e.uniformBlockBinding(pt,mt,U.__bindingPointIndex),l.set(pt,mt))}function Bt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},m={},at=null,ft={},h={},d=new WeakMap,f=[],_=null,g=!1,p=null,v=null,S=null,x=null,T=null,b=null,A=null,y=new Zt(0,0,0),E=0,C=!1,D=null,N=null,H=null,W=null,O=null,Qt.set(0,0,e.canvas.width,e.canvas.height),zt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ot,disable:Nt,bindFramebuffer:It,drawBuffers:Rt,useProgram:Ee,setBlending:Ut,setMaterial:Wt,setFlipSided:Ie,setCullFace:Ve,setLineWidth:He,setPolygonOffset:en,setScissorTest:Re,activeTexture:fe,bindTexture:L,unbindTexture:dn,compressedTexImage2D:jt,compressedTexImage3D:R,texImage2D:V,texImage3D:K,pixelStorei:bt,getParameter:dt,updateUBOMapping:Ct,uniformBlockBinding:Dt,texStorage2D:ht,texStorage3D:rt,texSubImage2D:M,texSubImage3D:I,compressedTexSubImage2D:G,compressedTexSubImage3D:Z,scissor:_t,viewport:gt,reset:Bt}}function QN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,u=new WeakMap,m=new Set,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return f?new OffscreenCanvas(R,M):Iu("canvas")}function g(R,M,I){let G=1,Z=jt(R);if((Z.width>I||Z.height>I)&&(G=I/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ht=Math.floor(G*Z.width),rt=Math.floor(G*Z.height);h===void 0&&(h=_(ht,rt));let V=M?_(ht,rt):h;return V.width=ht,V.height=rt,V.getContext("2d").drawImage(R,0,0,ht,rt),Lt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ht+"x"+rt+")."),V}else return"data"in R&&Lt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps}function v(R){e.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(R,M,I,G,Z,ht=!1){if(R!==null){if(e[R]!==void 0)return e[R];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let rt;G&&(rt=t.get("EXT_texture_norm16"),rt||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=M;if(M===e.RED&&(I===e.FLOAT&&(V=e.R32F),I===e.HALF_FLOAT&&(V=e.R16F),I===e.UNSIGNED_BYTE&&(V=e.R8),I===e.UNSIGNED_SHORT&&rt&&(V=rt.R16_EXT),I===e.SHORT&&rt&&(V=rt.R16_SNORM_EXT)),M===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(V=e.R8UI),I===e.UNSIGNED_SHORT&&(V=e.R16UI),I===e.UNSIGNED_INT&&(V=e.R32UI),I===e.BYTE&&(V=e.R8I),I===e.SHORT&&(V=e.R16I),I===e.INT&&(V=e.R32I)),M===e.RG&&(I===e.FLOAT&&(V=e.RG32F),I===e.HALF_FLOAT&&(V=e.RG16F),I===e.UNSIGNED_BYTE&&(V=e.RG8),I===e.UNSIGNED_SHORT&&rt&&(V=rt.RG16_EXT),I===e.SHORT&&rt&&(V=rt.RG16_SNORM_EXT)),M===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(V=e.RG8UI),I===e.UNSIGNED_SHORT&&(V=e.RG16UI),I===e.UNSIGNED_INT&&(V=e.RG32UI),I===e.BYTE&&(V=e.RG8I),I===e.SHORT&&(V=e.RG16I),I===e.INT&&(V=e.RG32I)),M===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(V=e.RGB8UI),I===e.UNSIGNED_SHORT&&(V=e.RGB16UI),I===e.UNSIGNED_INT&&(V=e.RGB32UI),I===e.BYTE&&(V=e.RGB8I),I===e.SHORT&&(V=e.RGB16I),I===e.INT&&(V=e.RGB32I)),M===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(V=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(V=e.RGBA16UI),I===e.UNSIGNED_INT&&(V=e.RGBA32UI),I===e.BYTE&&(V=e.RGBA8I),I===e.SHORT&&(V=e.RGBA16I),I===e.INT&&(V=e.RGBA32I)),M===e.RGB&&(I===e.UNSIGNED_SHORT&&rt&&(V=rt.RGB16_EXT),I===e.SHORT&&rt&&(V=rt.RGB16_SNORM_EXT),I===e.UNSIGNED_INT_5_9_9_9_REV&&(V=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(V=e.R11F_G11F_B10F)),M===e.RGBA){let K=ht?Pu:ee.getTransfer(Z);I===e.FLOAT&&(V=e.RGBA32F),I===e.HALF_FLOAT&&(V=e.RGBA16F),I===e.UNSIGNED_BYTE&&(V=K===he?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT&&rt&&(V=rt.RGBA16_EXT),I===e.SHORT&&rt&&(V=rt.RGBA16_SNORM_EXT),I===e.UNSIGNED_SHORT_4_4_4_4&&(V=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(V=e.RGB5_A1)}return(V===e.R16F||V===e.R32F||V===e.RG16F||V===e.RG32F||V===e.RGBA16F||V===e.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function T(R,M){let I;return R?M===null||M===ms||M===nc?I=e.DEPTH24_STENCIL8:M===gs?I=e.DEPTH32F_STENCIL8:M===ec&&(I=e.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ms||M===nc?I=e.DEPTH_COMPONENT24:M===gs?I=e.DEPTH_COMPONENT32F:M===ec&&(I=e.DEPTH_COMPONENT16),I}function b(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==yn&&R.minFilter!==Se?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){let M=R.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&m.delete(M)}function y(R){let M=R.target;M.removeEventListener("dispose",y),D(M)}function E(R){let M=i.get(R);if(M.__webglInit===void 0)return;let I=R.source,G=d.get(I);if(G){let Z=G[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(R),Object.keys(G).length===0&&d.delete(I)}i.remove(R)}function C(R){let M=i.get(R);e.deleteTexture(M.__webglTexture);let I=R.source,G=d.get(I);delete G[M.__cacheKey],r.memory.textures--}function D(R){let M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(M.__webglFramebuffer[G]))for(let Z=0;Z<M.__webglFramebuffer[G].length;Z++)e.deleteFramebuffer(M.__webglFramebuffer[G][Z]);else e.deleteFramebuffer(M.__webglFramebuffer[G]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[G])}else{if(Array.isArray(M.__webglFramebuffer))for(let G=0;G<M.__webglFramebuffer.length;G++)e.deleteFramebuffer(M.__webglFramebuffer[G]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let G=0;G<M.__webglColorRenderbuffer.length;G++)M.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[G]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let I=R.textures;for(let G=0,Z=I.length;G<Z;G++){let ht=i.get(I[G]);ht.__webglTexture&&(e.deleteTexture(ht.__webglTexture),r.memory.textures--),i.remove(I[G])}i.remove(R)}let N=0;function H(){N=0}function W(){return N}function O(R){N=R}function q(){let R=N;return R>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function B(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function J(R,M){let I=i.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){let G=R.image;if(G===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(I,R,M);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+M)}function $(R,M){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){Nt(I,R,M);return}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+M)}function at(R,M){let I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){Nt(I,R,M);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+M)}function ft(R,M){let I=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&I.__version!==R.version){It(I,R,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+M)}let lt={[Wd]:e.REPEAT,[wi]:e.CLAMP_TO_EDGE,[qd]:e.MIRRORED_REPEAT},kt={[yn]:e.NEAREST,[_T]:e.NEAREST_MIPMAP_NEAREST,[Ku]:e.NEAREST_MIPMAP_LINEAR,[Se]:e.LINEAR,[_p]:e.LINEAR_MIPMAP_NEAREST,[Hs]:e.LINEAR_MIPMAP_LINEAR},Qt={[yT]:e.NEVER,[ET]:e.ALWAYS,[ST]:e.LESS,[tm]:e.LEQUAL,[MT]:e.EQUAL,[em]:e.GEQUAL,[bT]:e.GREATER,[TT]:e.NOTEQUAL};function zt(R,M){if(M.type===gs&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Se||M.magFilter===_p||M.magFilter===Ku||M.magFilter===Hs||M.minFilter===Se||M.minFilter===_p||M.minFilter===Ku||M.minFilter===Hs)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,lt[M.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,lt[M.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,lt[M.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,kt[M.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,kt[M.minFilter]),M.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,Qt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===yn||M.minFilter!==Ku&&M.minFilter!==Hs||M.type===gs&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function tt(R,M){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));let G=M.source,Z=d.get(G);Z===void 0&&(Z={},d.set(G,Z));let ht=B(M);if(ht!==R.__cacheKey){Z[ht]===void 0&&(Z[ht]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,I=!0),Z[ht].usedTimes++;let rt=Z[R.__cacheKey];rt!==void 0&&(Z[R.__cacheKey].usedTimes--,rt.usedTimes===0&&C(M)),R.__cacheKey=ht,R.__webglTexture=Z[ht].texture}return I}function ct(R,M,I){return Math.floor(Math.floor(R/I)/M)}function ot(R,M,I,G){let ht=R.updateRanges;if(ht.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,M.width,M.height,I,G,M.data);else{ht.sort((bt,_t)=>bt.start-_t.start);let rt=0;for(let bt=1;bt<ht.length;bt++){let _t=ht[rt],gt=ht[bt],Ct=_t.start+_t.count,Dt=ct(gt.start,M.width,4),Bt=ct(_t.start,M.width,4);gt.start<=Ct+1&&Dt===Bt&&ct(gt.start+gt.count-1,M.width,4)===Dt?_t.count=Math.max(_t.count,gt.start+gt.count-_t.start):(++rt,ht[rt]=gt)}ht.length=rt+1;let V=n.getParameter(e.UNPACK_ROW_LENGTH),K=n.getParameter(e.UNPACK_SKIP_PIXELS),dt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,M.width);for(let bt=0,_t=ht.length;bt<_t;bt++){let gt=ht[bt],Ct=Math.floor(gt.start/4),Dt=Math.ceil(gt.count/4),Bt=Ct%M.width,U=Math.floor(Ct/M.width),pt=Dt,j=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Bt),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,Bt,U,pt,j,I,G,M.data)}R.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,V),n.pixelStorei(e.UNPACK_SKIP_PIXELS,K),n.pixelStorei(e.UNPACK_SKIP_ROWS,dt)}}function Nt(R,M,I){let G=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=e.TEXTURE_3D);let Z=tt(R,M),ht=M.source;n.bindTexture(G,R.__webglTexture,e.TEXTURE0+I);let rt=i.get(ht);if(ht.version!==rt.__version||Z===!0){if(n.activeTexture(e.TEXTURE0+I),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let j=ee.getPrimaries(ee.workingColorSpace),mt=M.colorSpace===Cn?null:ee.getPrimaries(M.colorSpace),vt=M.colorSpace===Cn||j===mt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}n.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment);let K=g(M.image,!1,s.maxTextureSize);K=dn(M,K);let dt=a.convert(M.format,M.colorSpace),bt=a.convert(M.type),_t=x(M.internalFormat,dt,bt,M.normalized,M.colorSpace,M.isVideoTexture);zt(G,M);let gt,Ct=M.mipmaps,Dt=M.isVideoTexture!==!0,Bt=rt.__version===void 0||Z===!0,U=ht.dataReady,pt=b(M,K);if(M.isDepthTexture)_t=T(M.format===Dr,M.type),Bt&&(Dt?n.texStorage2D(e.TEXTURE_2D,1,_t,K.width,K.height):n.texImage2D(e.TEXTURE_2D,0,_t,K.width,K.height,0,dt,bt,null));else if(M.isDataTexture)if(Ct.length>0){Dt&&Bt&&n.texStorage2D(e.TEXTURE_2D,pt,_t,Ct[0].width,Ct[0].height);for(let j=0,mt=Ct.length;j<mt;j++)gt=Ct[j],Dt?U&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,gt.width,gt.height,dt,bt,gt.data):n.texImage2D(e.TEXTURE_2D,j,_t,gt.width,gt.height,0,dt,bt,gt.data);M.generateMipmaps=!1}else Dt?(Bt&&n.texStorage2D(e.TEXTURE_2D,pt,_t,K.width,K.height),U&&ot(M,K,dt,bt)):n.texImage2D(e.TEXTURE_2D,0,_t,K.width,K.height,0,dt,bt,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Dt&&Bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,_t,Ct[0].width,Ct[0].height,K.depth);for(let j=0,mt=Ct.length;j<mt;j++)if(gt=Ct[j],M.format!==$i)if(dt!==null)if(Dt){if(U)if(M.layerUpdates.size>0){let vt=Ev(gt.width,gt.height,M.format,M.type);for(let nt of M.layerUpdates){let Et=gt.data.subarray(nt*vt/gt.data.BYTES_PER_ELEMENT,(nt+1)*vt/gt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,nt,gt.width,gt.height,1,dt,Et)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,K.depth,dt,gt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,_t,gt.width,gt.height,K.depth,0,gt.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,K.depth,dt,bt,gt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,j,_t,gt.width,gt.height,K.depth,0,dt,bt,gt.data)}else{Dt&&Bt&&n.texStorage2D(e.TEXTURE_2D,pt,_t,Ct[0].width,Ct[0].height);for(let j=0,mt=Ct.length;j<mt;j++)gt=Ct[j],M.format!==$i?dt!==null?Dt?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,gt.width,gt.height,dt,gt.data):n.compressedTexImage2D(e.TEXTURE_2D,j,_t,gt.width,gt.height,0,gt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?U&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,gt.width,gt.height,dt,bt,gt.data):n.texImage2D(e.TEXTURE_2D,j,_t,gt.width,gt.height,0,dt,bt,gt.data)}else if(M.isDataArrayTexture)if(Dt){if(Bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,_t,K.width,K.height,K.depth),U)if(M.layerUpdates.size>0){let j=Ev(K.width,K.height,M.format,M.type);for(let mt of M.layerUpdates){let vt=K.data.subarray(mt*j/K.data.BYTES_PER_ELEMENT,(mt+1)*j/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,mt,K.width,K.height,1,dt,bt,vt)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,dt,bt,K.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,_t,K.width,K.height,K.depth,0,dt,bt,K.data);else if(M.isData3DTexture)Dt?(Bt&&n.texStorage3D(e.TEXTURE_3D,pt,_t,K.width,K.height,K.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,dt,bt,K.data)):n.texImage3D(e.TEXTURE_3D,0,_t,K.width,K.height,K.depth,0,dt,bt,K.data);else if(M.isFramebufferTexture){if(Bt)if(Dt)n.texStorage2D(e.TEXTURE_2D,pt,_t,K.width,K.height);else{let j=K.width,mt=K.height;for(let vt=0;vt<pt;vt++)n.texImage2D(e.TEXTURE_2D,vt,_t,j,mt,0,dt,bt,null),j>>=1,mt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in e){let j=e.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),K.parentNode!==j){j.appendChild(K),m.add(M),j.onpaint=mt=>{let vt=mt.changedElements;for(let nt of m)vt.includes(nt.image)&&(nt.needsUpdate=!0)},j.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,K);else{let vt=e.RGBA,nt=e.RGBA,Et=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,vt,nt,Et,K)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Dt&&Bt){let j=jt(Ct[0]);n.texStorage2D(e.TEXTURE_2D,pt,_t,j.width,j.height)}for(let j=0,mt=Ct.length;j<mt;j++)gt=Ct[j],Dt?U&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,dt,bt,gt):n.texImage2D(e.TEXTURE_2D,j,_t,dt,bt,gt);M.generateMipmaps=!1}else if(Dt){if(Bt){let j=jt(K);n.texStorage2D(e.TEXTURE_2D,pt,_t,j.width,j.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,bt,K)}else n.texImage2D(e.TEXTURE_2D,0,_t,dt,bt,K);p(M)&&v(G),rt.__version=ht.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function It(R,M,I){if(M.image.length!==6)return;let G=tt(R,M),Z=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+I);let ht=i.get(Z);if(Z.version!==ht.__version||G===!0){n.activeTexture(e.TEXTURE0+I);let rt=ee.getPrimaries(ee.workingColorSpace),V=M.colorSpace===Cn?null:ee.getPrimaries(M.colorSpace),K=M.colorSpace===Cn||rt===V?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let dt=M.isCompressedTexture||M.image[0].isCompressedTexture,bt=M.image[0]&&M.image[0].isDataTexture,_t=[];for(let nt=0;nt<6;nt++)!dt&&!bt?_t[nt]=g(M.image[nt],!0,s.maxCubemapSize):_t[nt]=bt?M.image[nt].image:M.image[nt],_t[nt]=dn(M,_t[nt]);let gt=_t[0],Ct=a.convert(M.format,M.colorSpace),Dt=a.convert(M.type),Bt=x(M.internalFormat,Ct,Dt,M.normalized,M.colorSpace),U=M.isVideoTexture!==!0,pt=ht.__version===void 0||G===!0,j=Z.dataReady,mt=b(M,gt);zt(e.TEXTURE_CUBE_MAP,M);let vt;if(dt){U&&pt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Bt,gt.width,gt.height);for(let nt=0;nt<6;nt++){vt=_t[nt].mipmaps;for(let Et=0;Et<vt.length;Et++){let Tt=vt[Et];M.format!==$i?Ct!==null?U?j&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,Tt.width,Tt.height,Ct,Tt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,Bt,Tt.width,Tt.height,0,Tt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,Tt.width,Tt.height,Ct,Dt,Tt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,Bt,Tt.width,Tt.height,0,Ct,Dt,Tt.data)}}}else{if(vt=M.mipmaps,U&&pt){vt.length>0&&mt++;let nt=jt(_t[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Bt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(bt){U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,_t[nt].width,_t[nt].height,Ct,Dt,_t[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Bt,_t[nt].width,_t[nt].height,0,Ct,Dt,_t[nt].data);for(let Et=0;Et<vt.length;Et++){let De=vt[Et].image[nt].image;U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,De.width,De.height,Ct,Dt,De.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,Bt,De.width,De.height,0,Ct,Dt,De.data)}}else{U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ct,Dt,_t[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Bt,Ct,Dt,_t[nt]);for(let Et=0;Et<vt.length;Et++){let Tt=vt[Et];U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,Ct,Dt,Tt.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,Bt,Ct,Dt,Tt.image[nt])}}}p(M)&&v(e.TEXTURE_CUBE_MAP),ht.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Rt(R,M,I,G,Z,ht){let rt=a.convert(I.format,I.colorSpace),V=a.convert(I.type),K=x(I.internalFormat,rt,V,I.normalized,I.colorSpace),dt=i.get(M),bt=i.get(I);if(bt.__renderTarget=M,!dt.__hasExternalTextures){let _t=Math.max(1,M.width>>ht),gt=Math.max(1,M.height>>ht);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,ht,K,_t,gt,M.depth,0,rt,V,null):n.texImage2D(Z,ht,K,_t,gt,0,rt,V,null)}n.bindFramebuffer(e.FRAMEBUFFER,R),fe(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,Z,bt.__webglTexture,0,Re(M)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,Z,bt.__webglTexture,ht),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(R,M,I){if(e.bindRenderbuffer(e.RENDERBUFFER,R),M.depthBuffer){let G=M.depthTexture,Z=G&&G.isDepthTexture?G.type:null,ht=T(M.stencilBuffer,Z),rt=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;fe(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(M),ht,M.width,M.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(M),ht,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,ht,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,rt,e.RENDERBUFFER,R)}else{let G=M.textures;for(let Z=0;Z<G.length;Z++){let ht=G[Z],rt=a.convert(ht.format,ht.colorSpace),V=a.convert(ht.type),K=x(ht.internalFormat,rt,V,ht.normalized,ht.colorSpace);fe(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(M),K,M.width,M.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(M),K,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,K,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Xt(R,M,I){let G=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),zt(e.TEXTURE_CUBE_MAP,M.depthTexture);let dt=a.convert(M.depthTexture.format),bt=a.convert(M.depthTexture.type),_t;M.depthTexture.format===Os?_t=e.DEPTH_COMPONENT24:M.depthTexture.format===Dr&&(_t=e.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,_t,M.width,M.height,0,dt,bt,null)}}else J(M.depthTexture,0);let ht=Z.__webglTexture,rt=Re(M),V=G?e.TEXTURE_CUBE_MAP_POSITIVE_X+I:e.TEXTURE_2D,K=M.depthTexture.format===Dr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(M.depthTexture.format===Os)fe(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,V,ht,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,K,V,ht,0);else if(M.depthTexture.format===Dr)fe(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,V,ht,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,K,V,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(R){let M=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),G){let Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=G}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(I)for(let G=0;G<6;G++)Xt(M.__webglFramebuffer[G],R,G);else{let G=R.texture.mipmaps;G&&G.length>0?Xt(M.__webglFramebuffer[0],R,0):Xt(M.__webglFramebuffer,R,0)}else if(I){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]===void 0)M.__webglDepthbuffer[G]=e.createRenderbuffer(),Ee(M.__webglDepthbuffer[G],R,!1);else{let Z=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,ht),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,ht)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),Ee(M.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ht),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,ht)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ut(R,M,I){let G=i.get(R);M!==void 0&&Rt(G.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Yt(R)}function Wt(R){let M=R.texture,I=i.get(R),G=i.get(M);R.addEventListener("dispose",y);let Z=R.textures,ht=R.isWebGLCubeRenderTarget===!0,rt=Z.length>1;if(rt||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=M.version,r.memory.textures++),ht){I.__webglFramebuffer=[];for(let V=0;V<6;V++)if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer[V]=[];for(let K=0;K<M.mipmaps.length;K++)I.__webglFramebuffer[V][K]=e.createFramebuffer()}else I.__webglFramebuffer[V]=e.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer=[];for(let V=0;V<M.mipmaps.length;V++)I.__webglFramebuffer[V]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(rt)for(let V=0,K=Z.length;V<K;V++){let dt=i.get(Z[V]);dt.__webglTexture===void 0&&(dt.__webglTexture=e.createTexture(),r.memory.textures++)}if(R.samples>0&&fe(R)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let V=0;V<Z.length;V++){let K=Z[V];I.__webglColorRenderbuffer[V]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[V]);let dt=a.convert(K.format,K.colorSpace),bt=a.convert(K.type),_t=x(K.internalFormat,dt,bt,K.normalized,K.colorSpace,R.isXRRenderTarget===!0),gt=Re(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,gt,_t,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+V,e.RENDERBUFFER,I.__webglColorRenderbuffer[V])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Ee(I.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ht){n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),zt(e.TEXTURE_CUBE_MAP,M);for(let V=0;V<6;V++)if(M.mipmaps&&M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)Rt(I.__webglFramebuffer[V][K],R,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+V,K);else Rt(I.__webglFramebuffer[V],R,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);p(M)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(rt){for(let V=0,K=Z.length;V<K;V++){let dt=Z[V],bt=i.get(dt),_t=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(_t,bt.__webglTexture),zt(_t,dt),Rt(I.__webglFramebuffer,R,dt,e.COLOR_ATTACHMENT0+V,_t,0),p(dt)&&v(_t)}n.unbindTexture()}else{let V=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(V=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(V,G.__webglTexture),zt(V,M),M.mipmaps&&M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)Rt(I.__webglFramebuffer[K],R,M,e.COLOR_ATTACHMENT0,V,K);else Rt(I.__webglFramebuffer,R,M,e.COLOR_ATTACHMENT0,V,0);p(M)&&v(V),n.unbindTexture()}R.depthBuffer&&Yt(R)}function Ie(R){let M=R.textures;for(let I=0,G=M.length;I<G;I++){let Z=M[I];if(p(Z)){let ht=S(R),rt=i.get(Z).__webglTexture;n.bindTexture(ht,rt),v(ht),n.unbindTexture()}}}let Ve=[],He=[];function en(R){if(R.samples>0){if(fe(R)===!1){let M=R.textures,I=R.width,G=R.height,Z=e.COLOR_BUFFER_BIT,ht=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=i.get(R),V=M.length>1;if(V)for(let dt=0;dt<M.length;dt++)n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let K=R.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),V){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,rt.__webglColorRenderbuffer[dt]);let bt=i.get(M[dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,bt,0)}e.blitFramebuffer(0,0,I,G,0,0,I,G,Z,e.NEAREST),l===!0&&(Ve.length=0,He.length=0,Ve.push(e.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push(ht),He.push(ht),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,He)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),V)for(let dt=0;dt<M.length;dt++){n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,rt.__webglColorRenderbuffer[dt]);let bt=i.get(M[dt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,bt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function Re(R){return Math.min(s.maxSamples,R.samples)}function fe(R){let M=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function L(R){let M=r.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function dn(R,M){let I=R.colorSpace,G=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==Lu&&I!==Cn&&(ee.getTransfer(I)===he?(G!==$i||Z!==Ui)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",I)),M}function jt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=H,this.getTextureUnits=W,this.setTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=at,this.setTextureCube=ft,this.rebindTextures=Ut,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jN(e,t){function n(i,s=Cn){let a,r=ee.getTransfer(s);if(i===Ui)return e.UNSIGNED_BYTE;if(i===xp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===yp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===pv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===mv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===fv)return e.BYTE;if(i===dv)return e.SHORT;if(i===ec)return e.UNSIGNED_SHORT;if(i===vp)return e.INT;if(i===ms)return e.UNSIGNED_INT;if(i===gs)return e.FLOAT;if(i===Gs)return e.HALF_FLOAT;if(i===gv)return e.ALPHA;if(i===_v)return e.RGB;if(i===$i)return e.RGBA;if(i===Os)return e.DEPTH_COMPONENT;if(i===Dr)return e.DEPTH_STENCIL;if(i===vv)return e.RED;if(i===Sp)return e.RED_INTEGER;if(i===Ur)return e.RG;if(i===Mp)return e.RG_INTEGER;if(i===bp)return e.RGBA_INTEGER;if(i===Qu||i===ju||i===$u||i===th)if(r===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Qu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ju)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===th)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Qu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ju)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$u)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===th)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tp||i===Ep||i===Ap||i===wp)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Tp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ep)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ap)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cp||i===Rp||i===Dp||i===Up||i===Np||i===eh||i===Lp)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Cp||i===Rp)return r===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Dp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Up)return a.COMPRESSED_R11_EAC;if(i===Np)return a.COMPRESSED_SIGNED_R11_EAC;if(i===eh)return a.COMPRESSED_RG11_EAC;if(i===Lp)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pp||i===Op||i===Ip||i===Bp||i===Fp||i===zp||i===Vp||i===Hp||i===Gp||i===kp||i===Xp||i===Wp||i===qp||i===Yp)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Pp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Op)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ip)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yp)return r===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zp||i===Jp||i===Kp)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Zp)return r===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qp||i===jp||i===nh||i===$p)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Qp)return a.COMPRESSED_RED_RGTC1_EXT;if(i===jp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$p)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nc?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var $N=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tL=`
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

}`,zv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Wu(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new wn({vertexShader:$N,fragmentShader:tL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fn(new Ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vv=class extends Is{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,m=null,h=null,d=null,f=null,_=typeof XRWebGLBinding<"u",g=new zv,p={},v=n.getContextAttributes(),S=null,x=null,T=[],b=[],A=new Ht,y=null,E=new oi;E.viewport=new ne;let C=new oi;C.viewport=new ne;let D=[E,C],N=new pp,H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ct=T[tt];return ct===void 0&&(ct=new Ql,T[tt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(tt){let ct=T[tt];return ct===void 0&&(ct=new Ql,T[tt]=ct),ct.getGripSpace()},this.getHand=function(tt){let ct=T[tt];return ct===void 0&&(ct=new Ql,T[tt]=ct),ct.getHandSpace()};function O(tt){let ct=b.indexOf(tt.inputSource);if(ct===-1)return;let ot=T[ct];ot!==void 0&&(ot.update(tt.inputSource,tt.frame,c||r),ot.dispatchEvent({type:tt.type,data:tt.inputSource}))}function q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",B);for(let tt=0;tt<T.length;tt++){let ct=b[tt];ct!==null&&(b[tt]=null,T[tt].disconnect(ct))}H=null,W=null,g.reset();for(let tt in p)delete p[tt];t.setRenderTarget(S),d=null,h=null,m=null,s=null,x=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){a=tt,i.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,i.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return m===null&&_&&(m=new XRWebGLBinding(s,n)),m},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",q),s.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Nt=null,It=null;v.depth&&(It=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ot=v.stencil?Dr:Os,Nt=v.stencil?nc:ms);let Rt={colorFormat:n.RGBA8,depthFormat:It,scaleFactor:a};m=this.getBinding(),h=m.createProjectionLayer(Rt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new Ri(h.textureWidth,h.textureHeight,{format:$i,type:Ui,depthTexture:new Ca(h.textureWidth,h.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ot={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ri(d.framebufferWidth,d.framebufferHeight,{format:$i,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(tt){for(let ct=0;ct<tt.removed.length;ct++){let ot=tt.removed[ct],Nt=b.indexOf(ot);Nt>=0&&(b[Nt]=null,T[Nt].disconnect(ot))}for(let ct=0;ct<tt.added.length;ct++){let ot=tt.added[ct],Nt=b.indexOf(ot);if(Nt===-1){for(let Rt=0;Rt<T.length;Rt++)if(Rt>=b.length){b.push(ot),Nt=Rt;break}else if(b[Rt]===null){b[Rt]=ot,Nt=Rt;break}if(Nt===-1)break}let It=T[Nt];It&&It.connect(ot)}}let J=new X,$=new X;function at(tt,ct,ot){J.setFromMatrixPosition(ct.matrixWorld),$.setFromMatrixPosition(ot.matrixWorld);let Nt=J.distanceTo($),It=ct.projectionMatrix.elements,Rt=ot.projectionMatrix.elements,Ee=It[14]/(It[10]-1),Xt=It[14]/(It[10]+1),Yt=(It[9]+1)/It[5],Ut=(It[9]-1)/It[5],Wt=(It[8]-1)/It[0],Ie=(Rt[8]+1)/Rt[0],Ve=Ee*Wt,He=Ee*Ie,en=Nt/(-Wt+Ie),Re=en*-Wt;if(ct.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Re),tt.translateZ(en),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),It[10]===-1)tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let fe=Ee+en,L=Xt+en,dn=Ve-Re,jt=He+(Nt-Re),R=Yt*Xt/L*fe,M=Ut*Xt/L*fe;tt.projectionMatrix.makePerspective(dn,jt,R,M,fe,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ft(tt,ct){ct===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ct.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ct=tt.near,ot=tt.far;g.texture!==null&&(g.depthNear>0&&(ct=g.depthNear),g.depthFar>0&&(ot=g.depthFar)),N.near=C.near=E.near=ct,N.far=C.far=E.far=ot,(H!==N.near||W!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,W=N.far),N.layers.mask=tt.layers.mask|6,E.layers.mask=N.layers.mask&-5,C.layers.mask=N.layers.mask&-3;let Nt=tt.parent,It=N.cameras;ft(N,Nt);for(let Rt=0;Rt<It.length;Rt++)ft(It[Rt],Nt);It.length===2?at(N,E,C):N.projectionMatrix.copy(E.projectionMatrix),lt(tt,N,Nt)};function lt(tt,ct,ot){ot===null?tt.matrix.copy(ct.matrixWorld):(tt.matrix.copy(ot.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ct.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Zd*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(tt){l=tt,h!==null&&(h.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(tt){return p[tt]};let kt=null;function Qt(tt,ct){if(u=ct.getViewerPose(c||r),f=ct,u!==null){let ot=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Nt=!1;ot.length!==N.cameras.length&&(N.cameras.length=0,Nt=!0);for(let Xt=0;Xt<ot.length;Xt++){let Yt=ot[Xt],Ut=null;if(d!==null)Ut=d.getViewport(Yt);else{let Ie=m.getViewSubImage(h,Yt);Ut=Ie.viewport,Xt===0&&(t.setRenderTargetTextures(x,Ie.colorTexture,Ie.depthStencilTexture),t.setRenderTarget(x))}let Wt=D[Xt];Wt===void 0&&(Wt=new oi,Wt.layers.enable(Xt),Wt.viewport=new ne,D[Xt]=Wt),Wt.matrix.fromArray(Yt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Yt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Xt===0&&(N.matrix.copy(Wt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Nt===!0&&N.cameras.push(Wt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){m=i.getBinding();let Xt=m.getDepthInformation(ot[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,s.renderState)}if(It&&It.includes("camera-access")&&_){t.state.unbindTexture(),m=i.getBinding();for(let Xt=0;Xt<ot.length;Xt++){let Yt=ot[Xt].camera;if(Yt){let Ut=p[Yt];Ut||(Ut=new Wu,p[Yt]=Ut);let Wt=m.getCameraImage(Yt);Ut.sourceTexture=Wt}}}}for(let ot=0;ot<T.length;ot++){let Nt=b[ot],It=T[ot];Nt!==null&&It!==void 0&&It.update(Nt,ct,c||r)}kt&&kt(tt,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),f=null}let zt=new eE;zt.setAnimationLoop(Qt),this.setAnimationLoop=function(tt){kt=tt},this.dispose=function(){}}},eL=new $e,oE=new Ft;oE.set(-1,0,0,0,1,0,0,0,1);function nL(e,t){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Mv(e)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,S,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(g,p):p.isMeshLambertMaterial?(a(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(g,p),m(g,p)):p.isMeshPhongMaterial?(a(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(a(g,p),f(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),_(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Jn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Jn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),S=v.envMap,x=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(eL.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(oE),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=S*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function m(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iL(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){let b=T.program;i.uniformBlockBinding(x,b)}function c(x,T){let b=s[x.id];b===void 0&&(g(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",v));let A=T.program;i.updateUBOMapping(x,A);let y=t.render.frame;a[x.id]!==y&&(h(x),a[x.id]=y)}function u(x){let T=m();x.__bindingPointIndex=T;let b=e.createBuffer(),A=x.__size,y=x.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,A,y),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,b),b}function m(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let T=s[x.id],b=x.uniforms,A=x.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let y=0,E=b.length;y<E;y++){let C=b[y];if(Array.isArray(C))for(let D=0,N=C.length;D<N;D++)d(C[D],y,D,A);else d(C,y,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(x,T,b,A){if(_(x,T,b,A)===!0){let y=x.__offset,E=x.value;if(Array.isArray(E)){let C=0;for(let D=0;D<E.length;D++){let N=E[D],H=p(N);f(N,x.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(E,x.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,y,x.__data)}}function f(x,T,b){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,b)}function _(x,T,b,A){let y=x.value,E=T+"_"+b;if(A[E]===void 0)return typeof y=="number"||typeof y=="boolean"?A[E]=y:ArrayBuffer.isView(y)?A[E]=y.slice():A[E]=y.clone(),!0;{let C=A[E];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return A[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function g(x){let T=x.uniforms,b=0,A=16;for(let E=0,C=T.length;E<C;E++){let D=Array.isArray(T[E])?T[E]:[T[E]];for(let N=0,H=D.length;N<H;N++){let W=D[N],O=Array.isArray(W.value)?W.value:[W.value];for(let q=0,B=O.length;q<B;q++){let J=O[q],$=p(J),at=b%A,ft=at%$.boundary,lt=at+ft;b+=ft,lt!==0&&A-lt<$.storage&&(b+=A-lt),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=$.storage}}}let y=b%A;return y>0&&(b+=A-y),x.__size=b,x.__cache={},this}function p(x){let T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",x),T}function v(x){let T=x.target;T.removeEventListener("dispose",v);let b=r.indexOf(T.__bindingPointIndex);r.splice(b,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete a[T.id]}function S(){for(let x in s)e.deleteBuffer(s[x]);r=[],s={},a={}}return{bind:l,update:c,dispose:S}}var sL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ks=null;function aL(){return ks===null&&(ks=new Mo(sL,16,16,Ur,Gs),ks.name="DFG_LUT",ks.minFilter=Se,ks.magFilter=Se,ks.wrapS=wi,ks.wrapT=wi,ks.generateMipmaps=!1,ks.needsUpdate=!0),ks}var rm=class{constructor(t={}){let{canvas:n=AT(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Ui}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;let _=d,g=new Set([bp,Mp,Sp]),p=new Set([Ui,ms,ec,nc,xp,yp]),v=new Uint32Array(4),S=new Int32Array(4),x=new X,T=null,b=null,A=[],y=[],E=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ps,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,N=null,H=null,W=null,O=null;this._outputColorSpace=Ai;let q=0,B=0,J=null,$=-1,at=null,ft=new ne,lt=new ne,kt=null,Qt=new Zt(0),zt=0,tt=n.width,ct=n.height,ot=1,Nt=null,It=null,Rt=new ne(0,0,tt,ct),Ee=new ne(0,0,tt,ct),Xt=!1,Yt=new ku,Ut=!1,Wt=!1,Ie=new $e,Ve=new X,He=new ne,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function fe(){return J===null?ot:1}let L=i;function dn(w,P){return n.getContext(w,P)}try{let w={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",le,!1),n.addEventListener("webglcontextcreationerror",Nn,!1),L===null){let P="webgl2";if(L=dn(P,w),L===null)throw dn(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Pt("WebGLRenderer: "+w.message),w}let jt,R,M,I,G,Z,ht,rt,V,K,dt,bt,_t,gt,Ct,Dt,Bt,U,pt,j,mt,vt,nt;function Et(){jt=new fU(L),jt.init(),mt=new jN(L,jt),R=new sU(L,jt,t,mt),M=new KN(L,jt),R.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),H=L.createFramebuffer(),W=L.createFramebuffer(),O=L.createFramebuffer(),I=new mU(L),G=new IN,Z=new QN(L,jt,M,G,R,mt,I),ht=new hU(C),rt=new xR(L),vt=new nU(L,rt),V=new dU(L,rt,I,vt),K=new _U(L,V,rt,vt,I),U=new gU(L,R,Z),Ct=new aU(G),dt=new ON(C,ht,jt,R,vt,Ct),bt=new nL(C,G),_t=new FN,gt=new XN(jt),Bt=new eU(C,ht,M,K,f,l),Dt=new JN(C,K,R),nt=new iL(L,I,R,M),pt=new iU(L,jt,I),j=new pU(L,jt,I),I.programs=dt.programs,C.capabilities=R,C.extensions=jt,C.properties=G,C.renderLists=_t,C.shadowMap=Dt,C.state=M,C.info=I}Et(),_!==Ui&&(E=new xU(_,n.width,n.height,o,s,a));let Tt=new Vv(C,L);this.xr=Tt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=jt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=jt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(w){w!==void 0&&(ot=w,this.setSize(tt,ct,!1))},this.getSize=function(w){return w.set(tt,ct)},this.setSize=function(w,P,Y=!0){if(Tt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=w,ct=P,n.width=Math.floor(w*ot),n.height=Math.floor(P*ot),Y===!0&&(n.style.width=w+"px",n.style.height=P+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,w,P)},this.getDrawingBufferSize=function(w){return w.set(tt*ot,ct*ot).floor()},this.setDrawingBufferSize=function(w,P,Y){tt=w,ct=P,ot=Y,n.width=Math.floor(w*Y),n.height=Math.floor(P*Y),this.setViewport(0,0,w,P)},this.setEffects=function(w){if(_===Ui){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let P=0;P<w.length;P++)if(w[P].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ft)},this.getViewport=function(w){return w.copy(Rt)},this.setViewport=function(w,P,Y,F){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,P,Y,F),M.viewport(ft.copy(Rt).multiplyScalar(ot).round())},this.getScissor=function(w){return w.copy(Ee)},this.setScissor=function(w,P,Y,F){w.isVector4?Ee.set(w.x,w.y,w.z,w.w):Ee.set(w,P,Y,F),M.scissor(lt.copy(Ee).multiplyScalar(ot).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(w){M.setScissorTest(Xt=w)},this.setOpaqueSort=function(w){Nt=w},this.setTransparentSort=function(w){It=w},this.getClearColor=function(w){return w.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(w=!0,P=!0,Y=!0){let F=0;if(w){let z=!1;if(J!==null){let k=J.texture.format;z=g.has(k)}if(z){let k=J.texture.type,Q=p.has(k),it=Bt.getClearColor(),st=Bt.getClearAlpha(),ut=it.r,At=it.g,wt=it.b;Q?(v[0]=ut,v[1]=At,v[2]=wt,v[3]=st,L.clearBufferuiv(L.COLOR,0,v)):(S[0]=ut,S[1]=At,S[2]=wt,S[3]=st,L.clearBufferiv(L.COLOR,0,S))}else F|=L.COLOR_BUFFER_BIT}P&&(F|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",le,!1),n.removeEventListener("webglcontextcreationerror",Nn,!1),Bt.dispose(),_t.dispose(),gt.dispose(),G.dispose(),ht.dispose(),K.dispose(),vt.dispose(),nt.dispose(),dt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Fa),Tt.removeEventListener("sessionend",zo),pn.stop()};function De(w){w.preventDefault(),Sv("WebGLRenderer: Context Lost."),D=!0}function le(){Sv("WebGLRenderer: Context Restored."),D=!1;let w=I.autoReset,P=Dt.enabled,Y=Dt.autoUpdate,F=Dt.needsUpdate,z=Dt.type;Et(),I.autoReset=w,Dt.enabled=P,Dt.autoUpdate=Y,Dt.needsUpdate=F,Dt.type=z}function Nn(w){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kn(w){let P=w.target;P.removeEventListener("dispose",kn),Gr(P)}function Gr(w){kr(w),G.remove(w)}function kr(w){let P=G.get(w).programs;P!==void 0&&(P.forEach(function(Y){dt.releaseProgram(Y)}),w.isShaderMaterial&&dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,P,Y,F,z,k){P===null&&(P=en);let Q=z.isMesh&&z.matrixWorld.determinantAffine()<0,it=Dm(w,P,Y,F,z);M.setMaterial(F,Q);let st=Y.index,ut=1;if(F.wireframe===!0){if(st=V.getWireframeAttribute(Y),st===void 0)return;ut=2}let At=Y.drawRange,wt=Y.attributes.position,Mt=At.start*ut,$t=(At.start+At.count)*ut;k!==null&&(Mt=Math.max(Mt,k.start*ut),$t=Math.min($t,(k.start+k.count)*ut)),st!==null?(Mt=Math.max(Mt,0),$t=Math.min($t,st.count)):wt!=null&&(Mt=Math.max(Mt,0),$t=Math.min($t,wt.count));let Ae=$t-Mt;if(Ae<0||Ae===1/0)return;vt.setup(z,F,it,Y,st);let de,pe=pt;if(st!==null&&(de=rt.get(st),pe=j,pe.setIndex(de)),z.isMesh)F.wireframe===!0?(M.setLineWidth(F.wireframeLinewidth*fe()),pe.setMode(L.LINES)):pe.setMode(L.TRIANGLES);else if(z.isLine){let we=F.linewidth;we===void 0&&(we=1),M.setLineWidth(we*fe()),z.isLineSegments?pe.setMode(L.LINES):z.isLineLoop?pe.setMode(L.LINE_LOOP):pe.setMode(L.LINE_STRIP)}else z.isPoints?pe.setMode(L.POINTS):z.isSprite&&pe.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))pe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let we=z._multiDrawStarts,yt=z._multiDrawCounts,Pn=z._multiDrawCount,ie=st?rt.get(st).bytesPerElement:1,Xn=G.get(F).currentProgram.getUniforms();for(let di=0;di<Pn;di++)Xn.setValue(L,"_gl_DrawID",di),pe.render(we[di]/ie,yt[di])}else if(z.isInstancedMesh)pe.renderInstances(Mt,Ae,z.count);else if(Y.isInstancedBufferGeometry){let we=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,yt=Math.min(Y.instanceCount,we);pe.renderInstances(Mt,Ae,yt)}else pe.render(Mt,Ae)};function Ia(w,P,Y){w.transparent===!0&&w.side===zs&&w.forceSinglePass===!1?(w.side=Jn,w.needsUpdate=!0,xs(w,P,Y),w.side=wa,w.needsUpdate=!0,xs(w,P,Y),w.side=zs):xs(w,P,Y)}this.compile=function(w,P,Y=null){Y===null&&(Y=w),b=gt.get(Y),b.init(P),y.push(b),Y.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),w!==Y&&w.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights();let F=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let k=z.material;if(k)if(Array.isArray(k))for(let Q=0;Q<k.length;Q++){let it=k[Q];Ia(it,Y,z),F.add(it)}else Ia(k,Y,z),F.add(k)}),b=y.pop(),F},this.compileAsync=function(w,P,Y=null){let F=this.compile(w,P,Y);return new Promise(z=>{function k(){if(F.forEach(function(Q){G.get(Q).currentProgram.isReady()&&F.delete(Q)}),F.size===0){z(w);return}setTimeout(k,10)}jt.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let Ba=null;function vs(w){Ba&&Ba(w)}function Fa(){pn.stop()}function zo(){pn.start()}let pn=new eE;pn.setAnimationLoop(vs),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(w){Ba=w,Tt.setAnimationLoop(w),w===null?pn.stop():pn.start()},Tt.addEventListener("sessionstart",Fa),Tt.addEventListener("sessionend",zo),this.render=function(w,P){if(P!==void 0&&P.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(w,P);let Y=Tt.enabled===!0&&Tt.isPresenting===!0,F=E!==null&&(J===null||Y)&&E.begin(C,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(P),P=Tt.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,P,J),b=gt.get(w,y.length),b.init(P),b.state.textureUnits=Z.getTextureUnits(),y.push(b),Ie.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Yt.setFromProjectionMatrix(Ie,fs,P.reversedDepth),Wt=this.localClippingEnabled,Ut=Ct.init(this.clippingPlanes,Wt),T=_t.get(w,A.length),T.init(),A.push(T),Tt.enabled===!0&&Tt.isPresenting===!0){let Q=C.xr.getDepthSensingMesh();Q!==null&&Xr(Q,P,-1/0,C.sortObjects)}Xr(w,P,0,C.sortObjects),T.finish(),C.sortObjects===!0&&T.sort(Nt,It,P.reversedDepth),Re=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Re&&Bt.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ut===!0&&Ct.beginShadows();let z=b.state.shadowsArray;if(Dt.render(z,w,P),Ut===!0&&Ct.endShadows(),(F&&E.hasRenderPass())===!1){let Q=T.opaque,it=T.transmissive;if(b.setupLights(),P.isArrayCamera){let st=P.cameras;if(it.length>0)for(let ut=0,At=st.length;ut<At;ut++){let wt=st[ut];yc(Q,it,w,wt)}Re&&Bt.render(w);for(let ut=0,At=st.length;ut<At;ut++){let wt=st[ut];is(T,w,wt,wt.viewport)}}else it.length>0&&yc(Q,it,w,P),Re&&Bt.render(w),is(T,w,P)}J!==null&&B===0&&(Z.updateMultisampleRenderTarget(J),Z.updateRenderTargetMipmap(J)),F&&E.end(C),w.isScene===!0&&w.onAfterRender(C,w,P),vt.resetDefaultState(),$=-1,at=null,y.pop(),y.length>0?(b=y[y.length-1],Z.setTextureUnits(b.state.textureUnits),Ut===!0&&Ct.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,N!==null&&N.renderEnd()};function Xr(w,P,Y,F){if(w.visible===!1)return;if(w.layers.test(P.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(P);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Yt.intersectsSprite(w)){F&&He.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);let Q=K.update(w),it=w.material;it.visible&&T.push(w,Q,it,Y,He.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Yt.intersectsObject(w))){let Q=K.update(w),it=w.material;if(F&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),He.copy(w.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),He.copy(Q.boundingSphere.center)),He.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)),Array.isArray(it)){let st=Q.groups;for(let ut=0,At=st.length;ut<At;ut++){let wt=st[ut],Mt=it[wt.materialIndex];Mt&&Mt.visible&&T.push(w,Q,Mt,Y,He.z,wt)}}else it.visible&&T.push(w,Q,it,Y,He.z,null)}}let k=w.children;for(let Q=0,it=k.length;Q<it;Q++)Xr(k[Q],P,Y,F)}function is(w,P,Y,F){let{opaque:z,transmissive:k,transparent:Q}=w;b.setupLightsView(Y),Ut===!0&&Ct.setGlobalState(C.clippingPlanes,Y),F&&M.viewport(ft.copy(F)),z.length>0&&Ln(z,P,Y),k.length>0&&Ln(k,P,Y),Q.length>0&&Ln(Q,P,Y),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function yc(w,P,Y,F){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[F.id]===void 0){let Mt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[F.id]=new Ri(1,1,{generateMipmaps:!0,type:Mt?Gs:Ui,minFilter:Hs,samples:Math.max(4,R.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let k=b.state.transmissionRenderTarget[F.id],Q=F.viewport||ft;k.setSize(Q.z*C.transmissionResolutionScale,Q.w*C.transmissionResolutionScale);let it=C.getRenderTarget(),st=C.getActiveCubeFace(),ut=C.getActiveMipmapLevel();C.setRenderTarget(k),C.getClearColor(Qt),zt=C.getClearAlpha(),zt<1&&C.setClearColor(16777215,.5),C.clear(),Re&&Bt.render(Y);let At=C.toneMapping;C.toneMapping=ps;let wt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),b.setupLightsView(F),Ut===!0&&Ct.setGlobalState(C.clippingPlanes,F),Ln(w,Y,F),Z.updateMultisampleRenderTarget(k),Z.updateRenderTargetMipmap(k),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let $t=0,Ae=P.length;$t<Ae;$t++){let de=P[$t],{object:pe,geometry:we,material:yt,group:Pn}=de;if(yt.side===zs&&pe.layers.test(F.layers)){let ie=yt.side;yt.side=Jn,yt.needsUpdate=!0,Ks(pe,Y,F,we,yt,Pn),yt.side=ie,yt.needsUpdate=!0,Mt=!0}}Mt===!0&&(Z.updateMultisampleRenderTarget(k),Z.updateRenderTargetMipmap(k))}C.setRenderTarget(it,st,ut),C.setClearColor(Qt,zt),wt!==void 0&&(F.viewport=wt),C.toneMapping=At}function Ln(w,P,Y){let F=P.isScene===!0?P.overrideMaterial:null;for(let z=0,k=w.length;z<k;z++){let Q=w[z],{object:it,geometry:st,group:ut}=Q,At=Q.material;At.allowOverride===!0&&F!==null&&(At=F),it.layers.test(Y.layers)&&Ks(it,P,Y,st,At,ut)}}function Ks(w,P,Y,F,z,k){w.onBeforeRender(C,P,Y,F,z,k),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(C,P,Y,F,w,k),z.transparent===!0&&z.side===zs&&z.forceSinglePass===!1?(z.side=Jn,z.needsUpdate=!0,C.renderBufferDirect(Y,P,F,z,w,k),z.side=wa,z.needsUpdate=!0,C.renderBufferDirect(Y,P,F,z,w,k),z.side=zs):C.renderBufferDirect(Y,P,F,z,w,k),w.onAfterRender(C,P,Y,F,z,k)}function xs(w,P,Y){P.isScene!==!0&&(P=en);let F=G.get(w),z=b.state.lights,k=b.state.shadowsArray,Q=z.state.version,it=dt.getParameters(w,z.state,k,P,Y,b.state.lightProbeGridArray),st=dt.getProgramCacheKey(it),ut=F.programs;F.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?P.environment:null,F.fog=P.fog;let At=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;F.envMap=ht.get(w.envMap||F.environment,At),F.envMapRotation=F.environment!==null&&w.envMap===null?P.environmentRotation:w.envMapRotation,ut===void 0&&(w.addEventListener("dispose",kn),ut=new Map,F.programs=ut);let wt=ut.get(st);if(wt!==void 0){if(F.currentProgram===wt&&F.lightsStateVersion===Q)return wh(w,it),wt}else it.uniforms=dt.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,Y,it),w.onBeforeCompile(it,C),wt=dt.acquireProgram(it,st),ut.set(st,wt),F.uniforms=it.uniforms;let Mt=F.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=Ct.uniform),wh(w,it),F.needsLights=Rh(w),F.lightsStateVersion=Q,F.needsLights&&(Mt.ambientLightColor.value=z.state.ambient,Mt.lightProbe.value=z.state.probe,Mt.directionalLights.value=z.state.directional,Mt.directionalLightShadows.value=z.state.directionalShadow,Mt.spotLights.value=z.state.spot,Mt.spotLightShadows.value=z.state.spotShadow,Mt.rectAreaLights.value=z.state.rectArea,Mt.ltc_1.value=z.state.rectAreaLTC1,Mt.ltc_2.value=z.state.rectAreaLTC2,Mt.pointLights.value=z.state.point,Mt.pointLightShadows.value=z.state.pointShadow,Mt.hemisphereLights.value=z.state.hemi,Mt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Mt.spotLightMatrix.value=z.state.spotLightMatrix,Mt.spotLightMap.value=z.state.spotLightMap,Mt.pointShadowMatrix.value=z.state.pointShadowMatrix),F.lightProbeGrid=b.state.lightProbeGridArray.length>0,F.currentProgram=wt,F.uniformsList=null,wt}function Ah(w){if(w.uniformsList===null){let P=w.currentProgram.getUniforms();w.uniformsList=sc.seqWithValue(P.seq,w.uniforms)}return w.uniformsList}function wh(w,P){let Y=G.get(w);Y.outputColorSpace=P.outputColorSpace,Y.batching=P.batching,Y.batchingColor=P.batchingColor,Y.instancing=P.instancing,Y.instancingColor=P.instancingColor,Y.instancingMorph=P.instancingMorph,Y.skinning=P.skinning,Y.morphTargets=P.morphTargets,Y.morphNormals=P.morphNormals,Y.morphColors=P.morphColors,Y.morphTargetsCount=P.morphTargetsCount,Y.numClippingPlanes=P.numClippingPlanes,Y.numIntersection=P.numClipIntersection,Y.vertexAlphas=P.vertexAlphas,Y.vertexTangents=P.vertexTangents,Y.toneMapping=P.toneMapping}function Ch(w,P){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(P.matrixWorld);for(let Y=0,F=w.length;Y<F;Y++){let z=w[Y];if(z.texture!==null&&z.boundingBox.containsPoint(x))return z}return null}function Dm(w,P,Y,F,z){P.isScene!==!0&&(P=en),Z.resetTextureUnits();let k=P.fog,Q=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?P.environment:null,it=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ee.workingColorSpace,st=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,ut=ht.get(F.envMap||Q,st),At=F.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,wt=!!Y.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Mt=!!Y.morphAttributes.position,$t=!!Y.morphAttributes.normal,Ae=!!Y.morphAttributes.color,de=ps;F.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(de=C.toneMapping);let pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,we=pe!==void 0?pe.length:0,yt=G.get(F),Pn=b.state.lights;if(Ut===!0&&(Wt===!0||w!==at)){let ge=w===at&&F.id===$;Ct.setState(F,w,ge)}let ie=!1;F.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Pn.state.version||yt.outputColorSpace!==it||z.isBatchedMesh&&yt.batching===!1||!z.isBatchedMesh&&yt.batching===!0||z.isBatchedMesh&&yt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&yt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&yt.instancing===!1||!z.isInstancedMesh&&yt.instancing===!0||z.isSkinnedMesh&&yt.skinning===!1||!z.isSkinnedMesh&&yt.skinning===!0||z.isInstancedMesh&&yt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&yt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&yt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&yt.instancingMorph===!1&&z.morphTexture!==null||yt.envMap!==ut||F.fog===!0&&yt.fog!==k||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Ct.numPlanes||yt.numIntersection!==Ct.numIntersection)||yt.vertexAlphas!==At||yt.vertexTangents!==wt||yt.morphTargets!==Mt||yt.morphNormals!==$t||yt.morphColors!==Ae||yt.toneMapping!==de||yt.morphTargetsCount!==we||!!yt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,yt.__version=F.version);let Xn=yt.currentProgram;ie===!0&&(Xn=xs(F,P,z),N&&F.isNodeMaterial&&N.onUpdateProgram(F,Xn,yt));let di=!1,ys=!1,Qs=!1,me=Xn.getUniforms(),Ge=yt.uniforms;if(M.useProgram(Xn.program)&&(di=!0,ys=!0,Qs=!0),F.id!==$&&($=F.id,ys=!0),yt.needsLights){let ge=Ch(b.state.lightProbeGridArray,z);yt.lightProbeGrid!==ge&&(yt.lightProbeGrid=ge,ys=!0)}if(di||at!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),me.setValue(L,"projectionMatrix",w.projectionMatrix),me.setValue(L,"viewMatrix",w.matrixWorldInverse);let Fi=me.map.cameraPosition;Fi!==void 0&&Fi.setValue(L,Ve.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&me.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),at!==w&&(at=w,ys=!0,Qs=!0)}if(yt.needsLights&&(Pn.state.directionalShadowMap.length>0&&me.setValue(L,"directionalShadowMap",Pn.state.directionalShadowMap,Z),Pn.state.spotShadowMap.length>0&&me.setValue(L,"spotShadowMap",Pn.state.spotShadowMap,Z),Pn.state.pointShadowMap.length>0&&me.setValue(L,"pointShadowMap",Pn.state.pointShadowMap,Z)),z.isSkinnedMesh){me.setOptional(L,z,"bindMatrix"),me.setOptional(L,z,"bindMatrixInverse");let ge=z.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),me.setValue(L,"boneTexture",ge.boneTexture,Z))}z.isBatchedMesh&&(me.setOptional(L,z,"batchingTexture"),me.setValue(L,"batchingTexture",z._matricesTexture,Z),me.setOptional(L,z,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",z._indirectTexture,Z),me.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",z._colorsTexture,Z));let ss=Y.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&U.update(z,Y,Xn),(ys||yt.receiveShadow!==z.receiveShadow)&&(yt.receiveShadow=z.receiveShadow,me.setValue(L,"receiveShadow",z.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&P.environment!==null&&(Ge.envMapIntensity.value=P.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=aL()),ys){if(me.setValue(L,"toneMappingExposure",C.toneMappingExposure),yt.needsLights&&Vo(Ge,Qs),k&&F.fog===!0&&bt.refreshFogUniforms(Ge,k),bt.refreshMaterialUniforms(Ge,F,ot,ct,b.state.transmissionRenderTarget[w.id]),yt.needsLights&&yt.lightProbeGrid){let ge=yt.lightProbeGrid;Ge.probesSH.value=ge.texture,Ge.probesMin.value.copy(ge.boundingBox.min),Ge.probesMax.value.copy(ge.boundingBox.max),Ge.probesResolution.value.copy(ge.resolution)}sc.upload(L,Ah(yt),Ge,Z)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(sc.upload(L,Ah(yt),Ge,Z),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&me.setValue(L,"center",z.center),me.setValue(L,"modelViewMatrix",z.modelViewMatrix),me.setValue(L,"normalMatrix",z.normalMatrix),me.setValue(L,"modelMatrix",z.matrixWorld),F.uniformsGroups!==void 0){let ge=F.uniformsGroups;for(let Fi=0,js=ge.length;Fi<js;Fi++){let Sc=ge[Fi];nt.update(Sc,Xn),nt.bind(Sc,Xn)}}return Xn}function Vo(w,P){w.ambientLightColor.needsUpdate=P,w.lightProbe.needsUpdate=P,w.directionalLights.needsUpdate=P,w.directionalLightShadows.needsUpdate=P,w.pointLights.needsUpdate=P,w.pointLightShadows.needsUpdate=P,w.spotLights.needsUpdate=P,w.spotLightShadows.needsUpdate=P,w.rectAreaLights.needsUpdate=P,w.hemisphereLights.needsUpdate=P}function Rh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,P,Y){let F=G.get(w);F.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),G.get(w.texture).__webglTexture=P,G.get(w.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:Y,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,P){let Y=G.get(w);Y.__webglFramebuffer=P,Y.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(w,P=0,Y=0){J=w,q=P,B=Y;let F=null,z=!1,k=!1;if(w){let it=G.get(w);if(it.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(L.FRAMEBUFFER,it.__webglFramebuffer),ft.copy(w.viewport),lt.copy(w.scissor),kt=w.scissorTest,M.viewport(ft),M.scissor(lt),M.setScissorTest(kt),$=-1;return}else if(it.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(it.__hasExternalTextures)Z.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let At=w.depthTexture;if(it.__boundDepthTexture!==At){if(At!==null&&G.has(At)&&(w.width!==At.image.width||w.height!==At.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}let st=w.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(k=!0);let ut=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ut[P])?F=ut[P][Y]:F=ut[P],z=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?F=G.get(w).__webglMultisampledFramebuffer:Array.isArray(ut)?F=ut[Y]:F=ut,ft.copy(w.viewport),lt.copy(w.scissor),kt=w.scissorTest}else ft.copy(Rt).multiplyScalar(ot).floor(),lt.copy(Ee).multiplyScalar(ot).floor(),kt=Xt;if(Y!==0&&(F=H),M.bindFramebuffer(L.FRAMEBUFFER,F)&&M.drawBuffers(w,F),M.viewport(ft),M.scissor(lt),M.setScissorTest(kt),z){let it=G.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,it.__webglTexture,Y)}else if(k){let it=P;for(let st=0;st<w.textures.length;st++){let ut=G.get(w.textures[st]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+st,ut.__webglTexture,Y,it)}}else if(w!==null&&Y!==0){let it=G.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,it.__webglTexture,Y)}$=-1},this.readRenderTargetPixels=function(w,P,Y,F,z,k,Q,it=0){if(!(w&&w.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Q!==void 0&&(st=st[Q]),st){M.bindFramebuffer(L.FRAMEBUFFER,st);try{let ut=w.textures[it],At=ut.format,wt=ut.type;if(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+it),!R.textureFormatReadable(At)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(wt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=w.width-F&&Y>=0&&Y<=w.height-z&&L.readPixels(P,Y,F,z,mt.convert(At),mt.convert(wt),k)}finally{let ut=J!==null?G.get(J).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(w,P,Y,F,z,k,Q,it=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let st=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Q!==void 0&&(st=st[Q]),st)if(P>=0&&P<=w.width-F&&Y>=0&&Y<=w.height-z){M.bindFramebuffer(L.FRAMEBUFFER,st);let ut=w.textures[it],At=ut.format,wt=ut.type;if(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+it),!R.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.bufferData(L.PIXEL_PACK_BUFFER,k.byteLength,L.STREAM_READ),L.readPixels(P,Y,F,z,mt.convert(At),mt.convert(wt),0);let $t=J!==null?G.get(J).__webglFramebuffer:null;M.bindFramebuffer(L.FRAMEBUFFER,$t);let Ae=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await CT(L,Ae,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,k),L.deleteBuffer(Mt),L.deleteSync(Ae),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,P=null,Y=0){let F=Math.pow(2,-Y),z=Math.floor(w.image.width*F),k=Math.floor(w.image.height*F),Q=P!==null?P.x:0,it=P!==null?P.y:0;Z.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Q,it,z,k),M.unbindTexture()},this.copyTextureToTexture=function(w,P,Y=null,F=null,z=0,k=0){let Q,it,st,ut,At,wt,Mt,$t,Ae,de=w.isCompressedTexture?w.mipmaps[k]:w.image;if(Y!==null)Q=Y.max.x-Y.min.x,it=Y.max.y-Y.min.y,st=Y.isBox3?Y.max.z-Y.min.z:1,ut=Y.min.x,At=Y.min.y,wt=Y.isBox3?Y.min.z:0;else{let Ge=Math.pow(2,-z);Q=Math.floor(de.width*Ge),it=Math.floor(de.height*Ge),w.isDataArrayTexture?st=de.depth:w.isData3DTexture?st=Math.floor(de.depth*Ge):st=1,ut=0,At=0,wt=0}F!==null?(Mt=F.x,$t=F.y,Ae=F.z):(Mt=0,$t=0,Ae=0);let pe=mt.convert(P.format),we=mt.convert(P.type),yt;P.isData3DTexture?(Z.setTexture3D(P,0),yt=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Z.setTexture2DArray(P,0),yt=L.TEXTURE_2D_ARRAY):(Z.setTexture2D(P,0),yt=L.TEXTURE_2D),M.activeTexture(L.TEXTURE0),M.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),M.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),M.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);let Pn=M.getParameter(L.UNPACK_ROW_LENGTH),ie=M.getParameter(L.UNPACK_IMAGE_HEIGHT),Xn=M.getParameter(L.UNPACK_SKIP_PIXELS),di=M.getParameter(L.UNPACK_SKIP_ROWS),ys=M.getParameter(L.UNPACK_SKIP_IMAGES);M.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),M.pixelStorei(L.UNPACK_SKIP_PIXELS,ut),M.pixelStorei(L.UNPACK_SKIP_ROWS,At),M.pixelStorei(L.UNPACK_SKIP_IMAGES,wt);let Qs=w.isDataArrayTexture||w.isData3DTexture,me=P.isDataArrayTexture||P.isData3DTexture;if(w.isDepthTexture){let Ge=G.get(w),ss=G.get(P),ge=G.get(Ge.__renderTarget),Fi=G.get(ss.__renderTarget);M.bindFramebuffer(L.READ_FRAMEBUFFER,ge.__webglFramebuffer),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let js=0;js<st;js++)Qs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(w).__webglTexture,z,wt+js),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(P).__webglTexture,k,Ae+js)),L.blitFramebuffer(ut,At,Q,it,Mt,$t,Q,it,L.DEPTH_BUFFER_BIT,L.NEAREST);M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||G.has(w)){let Ge=G.get(w),ss=G.get(P);M.bindFramebuffer(L.READ_FRAMEBUFFER,W),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let ge=0;ge<st;ge++)Qs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,z,wt+ge):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,z),me?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ss.__webglTexture,k,Ae+ge):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ss.__webglTexture,k),z!==0?L.blitFramebuffer(ut,At,Q,it,Mt,$t,Q,it,L.COLOR_BUFFER_BIT,L.NEAREST):me?L.copyTexSubImage3D(yt,k,Mt,$t,Ae+ge,ut,At,Q,it):L.copyTexSubImage2D(yt,k,Mt,$t,ut,At,Q,it);M.bindFramebuffer(L.READ_FRAMEBUFFER,null),M.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else me?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(yt,k,Mt,$t,Ae,Q,it,st,pe,we,de.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(yt,k,Mt,$t,Ae,Q,it,st,pe,de.data):L.texSubImage3D(yt,k,Mt,$t,Ae,Q,it,st,pe,we,de):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,k,Mt,$t,Q,it,pe,we,de.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,k,Mt,$t,de.width,de.height,pe,de.data):L.texSubImage2D(L.TEXTURE_2D,k,Mt,$t,Q,it,pe,we,de);M.pixelStorei(L.UNPACK_ROW_LENGTH,Pn),M.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ie),M.pixelStorei(L.UNPACK_SKIP_PIXELS,Xn),M.pixelStorei(L.UNPACK_SKIP_ROWS,di),M.pixelStorei(L.UNPACK_SKIP_IMAGES,ys),k===0&&P.generateMipmaps&&L.generateMipmap(yt),M.unbindTexture()},this.initRenderTarget=function(w){G.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){q=0,B=0,J=null,M.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),n.unpackColorSpace=ee._getUnpackColorSpace()}};function Da(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function gE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},dh={duration:.5,overwrite:!1,delay:0},sx,Rn,ze,es=1e8,Te=1/es,Zv=Math.PI*2,rL=Zv/4,oL=0,_E=Math.sqrt,lL=Math.cos,cL=Math.sin,fn=function(t){return typeof t=="string"},Je=function(t){return typeof t=="function"},Na=function(t){return typeof t=="number"},vm=function(t){return typeof t>"u"},Ys=function(t){return typeof t=="object"},ui=function(t){return t!==!1},ax=function(){return typeof window<"u"},cm=function(t){return Je(t)||fn(t)},vE=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,uL=/random\([^)]+\)/g,hL=/,\s*/g,lE=/(?:-?\.?\d|\.)+/gi,rx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Do=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hv=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ox=/[+-]=-?[.\d]+/,fL=/[^,'"\[\]\s]+/gi,dL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xe,Ws,Jv,lx,Li={},dm={},xE,yE=function(t){return(dm=oc(t,Li))&&Gn},xm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},ph=function(t,n){return!n&&console.warn(t)},SE=function(t,n){return t&&(Li[t]=n)&&dm&&(dm[t]=n)||Li},mh=function(){return 0},pL={suppressEvents:!0,isStart:!0,kill:!1},um={suppressEvents:!0,kill:!1},mL={suppressEvents:!0},cx={},Pr=[],Kv={},ME,li={},Gv={},cE=30,hm=[],ux="",hx=function(t){var n=t[0],i,s;if(Ys(n)||Je(n)||(t=[t]),!(i=(n._gsap||{}).harness)){for(s=hm.length;s--&&!hm[s].targetTest(n););i=hm[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new mx(t[s],i)))||t.splice(s,1);return t},Or=function(t){return t._gsap||hx(ns(t))[0]._gsap},fx=function(t,n,i){return(i=t[n])&&Je(i)?t[n]():vm(i)&&t.getAttribute&&t.getAttribute(n)||i},Kn=function(t,n){return(t=t.split(",")).forEach(n)||t},Ke=function(t){return Math.round(t*1e5)/1e5||0},ke=function(t){return Math.round(t*1e7)/1e7||0},Uo=function(t,n){var i=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},gL=function(t,n){for(var i=n.length,s=0;t.indexOf(n[s])<0&&++s<i;);return s<i},pm=function(){var t=Pr.length,n=Pr.slice(0),i,s;for(Kv={},Pr.length=0,i=0;i<t;i++)s=n[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},dx=function(t){return!!(t._initted||t._startAt||t.add)},bE=function(t,n,i,s){Pr.length&&!Rn&&pm(),t.render(n,i,s||!!(Rn&&n<0&&dx(t))),Pr.length&&!Rn&&pm()},TE=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(fL).length<2?n:fn(t)?t.trim():t},EE=function(t){return t},Pi=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},_L=function(t){return function(n,i){for(var s in i)s in n||s==="duration"&&t||s==="ease"||(n[s]=i[s])}},oc=function(t,n){for(var i in n)t[i]=n[i];return t},uE=function e(t,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Ys(n[i])?e(t[i]||(t[i]={}),n[i]):n[i]);return t},mm=function(t,n){var i={},s;for(s in t)s in n||(i[s]=t[s]);return i},uh=function(t){var n=t.parent||Xe,i=t.keyframes?_L(Hn(t.keyframes)):Pi;if(ui(t.inherit))for(;n;)i(t,n.vars.defaults),n=n.parent||n._dp;return t},vL=function(t,n){for(var i=t.length,s=i===n.length;s&&i--&&t[i]===n[i];);return i<0},AE=function(t,n,i,s,a){i===void 0&&(i="_first"),s===void 0&&(s="_last");var r=t[s],o;if(a)for(o=n[a];r&&r[a]>o;)r=r._prev;return r?(n._next=r._next,r._next=n):(n._next=t[i],t[i]=n),n._next?n._next._prev=n:t[s]=n,n._prev=r,n.parent=n._dp=t,n},ym=function(t,n,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=n._prev,r=n._next;a?a._next=r:t[i]===n&&(t[i]=r),r?r._prev=a:t[s]===n&&(t[s]=a),n._next=n._prev=n.parent=null},Ir=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},wo=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},xL=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},Qv=function(t,n,i,s){return t._startAt&&(Rn?t._startAt.revert(um):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},yL=function e(t){return!t||t._ts&&e(t.parent)},hE=function(t){return t._repeat?lc(t._tTime,t=t.duration()+t._rDelay)*t:0},lc=function(t,n){var i=Math.floor(t=ke(t/n));return t&&i===t?i-1:i},gm=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Sm=function(t){return t._end=ke(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},Mm=function(t,n){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=ke(i._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Sm(t),i._dirty||wo(i,t)),t},wE=function(t,n){var i;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(i=gm(t.rawTime(),n),(!n._dur||vh(0,n.totalDuration(),i)-n._tTime>Te)&&n.render(i,!0)),wo(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Te}},qs=function(t,n,i,s){return n.parent&&Ir(n),n._start=ke((Na(i)?i:i||t!==Xe?ts(t,i,n):t._time)+n._delay),n._end=ke(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),AE(t,n,"_first","_last",t._sort?"_start":0),jv(n)||(t._recent=n),s||wE(t,n),t._ts<0&&Mm(t,t._tTime),t},CE=function(t,n){return(Li.ScrollTrigger||xm("scrollTrigger",n))&&Li.ScrollTrigger.create(n,t)},RE=function(t,n,i,s,a){if(vx(t,n,a),!t._initted)return 1;if(!i&&t._pt&&!Rn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ME!==ci.frame)return Pr.push(t),t._lazy=[a,s],1},SL=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},jv=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},ML=function(t,n,i,s){var a=t.ratio,r=n<0||!n&&(!t._start&&SL(t)&&!(!t._initted&&jv(t))||(t._ts<0||t._dp._ts<0)&&!jv(t))?0:1,o=t._rDelay,l=0,c,u,m;if(o&&t._repeat&&(l=vh(0,t._tDur,n),u=lc(l,o),t._yoyo&&u&1&&(r=1-r),u!==lc(t._tTime,o)&&(a=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==a||Rn||s||t._zTime===Te||!n&&t._zTime){if(!t._initted&&RE(t,n,s,i,l))return;for(m=t._zTime,t._zTime=n||(i?Te:0),i||(i=n&&!m),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=l,c=t._pt;c;)c.r(r,c.d),c=c._next;n<0&&Qv(t,n,i,!0),t._onUpdate&&!i&&Ni(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Ni(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===r&&(r&&Ir(t,1),!i&&!Rn&&(Ni(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},bL=function(t,n,i){var s;if(i>n)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},cc=function(t,n,i,s){var a=t._repeat,r=ke(n)||0,o=t._tTime/t._tDur;return o&&!s&&(t._time*=r/t._dur),t._dur=r,t._tDur=a?a<0?1e10:ke(r*(a+1)+t._rDelay*a):r,o>0&&!s&&Mm(t,t._tTime=t._tDur*o),t.parent&&Sm(t),i||wo(t.parent,t),t},fE=function(t){return t instanceof Vn?wo(t):cc(t,t._dur)},TL={_start:0,endTime:mh,totalDuration:mh},ts=function e(t,n,i){var s=t.labels,a=t._recent||TL,r=t.duration()>=es?a.endTime(!1):t._dur,o,l,c;return fn(n)&&(isNaN(n)||n in s)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?a:i).totalDuration()/100:1)):o<0?(n in s||(s[n]=r),s[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(Hn(i)?i[0]:i).totalDuration()),o>1?e(t,n.substr(0,o-1),i)+l:r+l)):n==null?r:+n},hh=function(t,n,i){var s=Na(n[1]),a=(s?2:1)+(t<2?0:1),r=n[a],o,l;if(s&&(r.duration=n[1]),r.parent=i,t){for(o=r,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ui(l.vars.inherit)&&l.parent;r.immediateRender=ui(o.immediateRender),t<2?r.runBackwards=1:r.startAt=n[a-1]}return new tn(n[0],r,n[a+1])},Br=function(t,n){return t||t===0?n(t):n},vh=function(t,n,i){return i<t?t:i>n?n:i},Dn=function(t,n){return!fn(t)||!(n=dL.exec(t))?"":n[1]},EL=function(t,n,i){return Br(i,function(s){return vh(t,n,s)})},$v=[].slice,DE=function(t,n){return t&&Ys(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&Ys(t[0]))&&!t.nodeType&&t!==Ws},AL=function(t,n,i){return i===void 0&&(i=[]),t.forEach(function(s){var a;return fn(s)&&!n||DE(s,1)?(a=i).push.apply(a,ns(s)):i.push(s)})||i},ns=function(t,n,i){return ze&&!n&&ze.selector?ze.selector(t):fn(t)&&!i&&(Jv||!uc())?$v.call((n||lx).querySelectorAll(t),0):Hn(t)?AL(t,i):DE(t)?$v.call(t,0):t?[t]:[]},tx=function(t){return t=ns(t)[0]||ph("Invalid scope")||{},function(n){var i=t.current||t.nativeElement||t;return ns(n,i.querySelectorAll?i:i===t?ph("Invalid scope")||lx.createElement("div"):t)}},UE=function(t){return t.sort(function(){return .5-Math.random()})},NE=function(t){if(Je(t))return t;var n=Ys(t)?t:{each:t},i=Co(n.ease),s=n.from||0,a=parseFloat(n.base)||0,r={},o=s>0&&s<1,l=isNaN(s)||o,c=n.axis,u=s,m=s;return fn(s)?u=m={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(u=s[0],m=s[1]),function(h,d,f){var _=(f||n).length,g=r[_],p,v,S,x,T,b,A,y,E;if(!g){if(E=n.grid==="auto"?0:(n.grid||[1,es])[1],!E){for(A=-es;A<(A=f[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(g=r[_]=[],p=l?Math.min(E,_)*u-.5:s%E,v=E===es?0:l?_*m/E-.5:s/E|0,A=0,y=es,b=0;b<_;b++)S=b%E-p,x=v-(b/E|0),g[b]=T=c?Math.abs(c==="y"?x:S):_E(S*S+x*x),T>A&&(A=T),T<y&&(y=T);s==="random"&&UE(g),g.max=A-y,g.min=y,g.v=_=(parseFloat(n.amount)||parseFloat(n.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(s==="edges"?-1:1),g.b=_<0?a-_:a,g.u=Dn(n.amount||n.each)||0,i=i&&_<0?zL(i):i}return _=(g[h]-g.min)/g.max||0,ke(g.b+(i?i(_):_)*g.v)+g.u}},ex=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=ke(Math.round(parseFloat(i)/t)*t*n);return(s-s%1)/n+(Na(i)?0:Dn(i))}},LE=function(t,n){var i=Hn(t),s,a;return!i&&Ys(t)&&(s=i=t.radius||es,t.values?(t=ns(t.values),(a=!Na(t[0]))&&(s*=s)):t=ex(t.increment)),Br(n,i?Je(t)?function(r){return a=t(r),Math.abs(a-r)<=s?a:r}:function(r){for(var o=parseFloat(a?r.x:r),l=parseFloat(a?r.y:0),c=es,u=0,m=t.length,h,d;m--;)a?(h=t[m].x-o,d=t[m].y-l,h=h*h+d*d):h=Math.abs(t[m]-o),h<c&&(c=h,u=m);return u=!s||c<=s?t[u]:r,a||u===r||Na(r)?u:u+Dn(r)}:ex(t))},PE=function(t,n,i,s){return Br(Hn(t)?!n:i===!0?!!(i=0):!s,function(){return Hn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(n-t+i*.99))/i)*i*s)/s})},wL=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(s){return n.reduce(function(a,r){return r(a)},s)}},CL=function(t,n){return function(i){return t(parseFloat(i))+(n||Dn(i))}},RL=function(t,n,i){return IE(t,n,0,1,i)},OE=function(t,n,i){return Br(i,function(s){return t[~~n(s)]})},DL=function e(t,n,i){var s=n-t;return Hn(t)?OE(t,e(0,t.length),n):Br(i,function(a){return(s+(a-t)%s)%s+t})},UL=function e(t,n,i){var s=n-t,a=s*2;return Hn(t)?OE(t,e(0,t.length-1),n):Br(i,function(r){return r=(a+(r-t)%a)%a||0,t+(r>s?a-r:r)})},hc=function(t){return t.replace(uL,function(n){var i=n.indexOf("[")+1,s=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(hL);return PE(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},IE=function(t,n,i,s,a){var r=n-t,o=s-i;return Br(a,function(l){return i+((l-t)/r*o||0)})},NL=function e(t,n,i,s){var a=isNaN(t+n)?0:function(d){return(1-d)*t+d*n};if(!a){var r=fn(t),o={},l,c,u,m,h;if(i===!0&&(s=1)&&(i=null),r)t={p:t},n={p:n};else if(Hn(t)&&!Hn(n)){for(u=[],m=t.length,h=m-2,c=1;c<m;c++)u.push(e(t[c-1],t[c]));m--,a=function(f){f*=m;var _=Math.min(h,~~f);return u[_](f-_)},i=n}else s||(t=oc(Hn(t)?[]:{},t));if(!u){for(l in n)gx.call(o,t,l,"get",n[l]);a=function(f){return Sx(f,o)||(r?t.p:t)}}}return Br(i,a)},dE=function(t,n,i){var s=t.labels,a=es,r,o,l;for(r in s)o=s[r]-n,o<0==!!i&&o&&a>(o=Math.abs(o))&&(l=r,a=o);return l},Ni=function(t,n,i){var s=t.vars,a=s[n],r=ze,o=t._ctx,l,c,u;if(a)return l=s[n+"Params"],c=s.callbackScope||t,i&&Pr.length&&pm(),o&&(ze=o),u=l?a.apply(c,l):a.call(c),ze=r,u},lh=function(t){return Ir(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Rn),t.progress()<1&&Ni(t,"onInterrupt"),t},rc,BE=[],FE=function(t){if(t)if(t=!t.name&&t.default||t,ax()||t.headless){var n=t.name,i=Je(t),s=n&&!i&&t.init?function(){this._props=[]}:t,a={init:mh,render:Sx,add:gx,kill:JL,modifier:ZL,rawVars:0},r={targetTest:0,get:0,getSetter:bm,aliases:{},register:0};if(uc(),t!==s){if(li[n])return;Pi(s,Pi(mm(t,a),r)),oc(s.prototype,oc(a,mm(t,r))),li[s.prop=n]=s,t.targetTest&&(hm.push(s),cx[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}SE(n,s),t.register&&t.register(Gn,s,Qn)}else BE.push(t)},be=255,ch={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},kv=function(t,n,i){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(i-n)*t*6:t<.5?i:t*3<2?n+(i-n)*(2/3-t)*6:n)*be+.5|0},zE=function(t,n,i){var s=t?Na(t)?[t>>16,t>>8&be,t&be]:0:ch.black,a,r,o,l,c,u,m,h,d,f;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ch[t])s=ch[t];else if(t.charAt(0)==="#"){if(t.length<6&&(a=t.charAt(1),r=t.charAt(2),o=t.charAt(3),t="#"+a+a+r+r+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&be,s&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(s=f=t.match(lE),!n)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,r=u<=.5?u*(c+1):u+c-u*c,a=u*2-r,s.length>3&&(s[3]*=1),s[0]=kv(l+1/3,a,r),s[1]=kv(l,a,r),s[2]=kv(l-1/3,a,r);else if(~t.indexOf("="))return s=t.match(rx),i&&s.length<4&&(s[3]=1),s}else s=t.match(lE)||ch.transparent;s=s.map(Number)}return n&&!f&&(a=s[0]/be,r=s[1]/be,o=s[2]/be,m=Math.max(a,r,o),h=Math.min(a,r,o),u=(m+h)/2,m===h?l=c=0:(d=m-h,c=u>.5?d/(2-m-h):d/(m+h),l=m===a?(r-o)/d+(r<o?6:0):m===r?(o-a)/d+2:(a-r)/d+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),i&&s.length<4&&(s[3]=1),s},VE=function(t){var n=[],i=[],s=-1;return t.split(Ua).forEach(function(a){var r=a.match(Do)||[];n.push.apply(n,r),i.push(s+=r.length+1)}),n.c=i,n},pE=function(t,n,i){var s="",a=(t+s).match(Ua),r=n?"hsla(":"rgba(",o=0,l,c,u,m;if(!a)return t;if(a=a.map(function(h){return(h=zE(h,n,1))&&r+(n?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=VE(t),l=i.c,l.join(s)!==u.c.join(s)))for(c=t.replace(Ua,"1").split(Do),m=c.length-1;o<m;o++)s+=c[o]+(~l.indexOf(o)?a.shift()||r+"0,0,0,0)":(u.length?u:a.length?a:i).shift());if(!c)for(c=t.split(Ua),m=c.length-1;o<m;o++)s+=c[o]+a[o];return s+c[m]},Ua=(function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ch)e+="|"+t+"\\b";return new RegExp(e+")","gi")})(),LL=/hsl[a]?\(/,px=function(t){var n=t.join(" "),i;if(Ua.lastIndex=0,Ua.test(n))return i=LL.test(n),t[1]=pE(t[1],i),t[0]=pE(t[0],i,VE(t[1])),!0},gh,ci=(function(){var e=Date.now,t=500,n=33,i=e(),s=i,a=1e3/240,r=a,o=[],l,c,u,m,h,d,f=function _(g){var p=e()-s,v=g===!0,S,x,T,b;if((p>t||p<0)&&(i+=p-n),s+=p,T=s-i,S=T-r,(S>0||v)&&(b=++m.frame,h=T-m.time*1e3,m.time=T=T/1e3,r+=S+(S>=a?4:a-S),x=1),v||(l=c(_)),x)for(d=0;d<o.length;d++)o[d](T,h,b,g)};return m={time:0,frame:0,tick:function(){f(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){xE&&(!Jv&&ax()&&(Ws=Jv=window,lx=Ws.document||{},Li.gsap=Gn,(Ws.gsapVersions||(Ws.gsapVersions=[])).push(Gn.version),yE(dm||Ws.GreenSockGlobals||!Ws.gsap&&Ws||{}),BE.forEach(FE)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&m.sleep(),c=u||function(g){return setTimeout(g,r-m.time*1e3+1|0)},gh=1,f(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),gh=0,c=mh},lagSmoothing:function(g,p){t=g||1/0,n=Math.min(p||33,t)},fps:function(g){a=1e3/(g||240),r=m.time*1e3+a},add:function(g,p,v){var S=p?function(x,T,b,A){g(x,T,b,A),m.remove(S)}:g;return m.remove(g),o[v?"unshift":"push"](S),uc(),S},remove:function(g,p){~(p=o.indexOf(g))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},m})(),uc=function(){return!gh&&ci.wake()},re={},PL=/^[\d.\-M][\d.\-,\s]/,OL=/["']/g,IL=function(t){for(var n={},i=t.substr(1,t.length-3).split(":"),s=i[0],a=1,r=i.length,o,l,c;a<r;a++)l=i[a],o=a!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[s]=isNaN(c)?c.replace(OL,"").trim():+c,s=l.substr(o+1).trim();return n},BL=function(t){var n=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<i?t.indexOf(")",i+1):i)},FL=function(t){var n=(t+"").split("("),i=re[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[IL(n[1])]:BL(t).split(",").map(TE)):re._CE&&PL.test(t)?re._CE("",t):i},zL=function(t){return function(n){return 1-t(1-n)}},Co=function(t,n){return t&&(Je(t)?t:re[t]||FL(t))||n},No=function(t,n,i,s){i===void 0&&(i=function(l){return 1-n(1-l)}),s===void 0&&(s=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var a={easeIn:n,easeOut:i,easeInOut:s},r;return Kn(t,function(o){re[o]=Li[o]=a,re[r=o.toLowerCase()]=i;for(var l in a)re[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=re[o+"."+l]=a[l]}),a},HE=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Xv=function e(t,n,i){var s=n>=1?n:1,a=(i||(t?.3:.45))/(n<1?n:1),r=a/Zv*(Math.asin(1/s)||0),o=function(u){return u===1?1:s*Math.pow(2,-10*u)*cL((u-r)*a)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:HE(o);return a=Zv/a,l.config=function(c,u){return e(t,c,u)},l},Wv=function e(t,n){n===void 0&&(n=1.70158);var i=function(r){return r?--r*r*((n+1)*r+n)+1:0},s=t==="out"?i:t==="in"?function(a){return 1-i(1-a)}:HE(i);return s.config=function(a){return e(t,a)},s};Kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;No(e+",Power"+(n-1),t?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;No("Elastic",Xv("in"),Xv("out"),Xv());(function(e,t){var n=1/t,i=2*n,s=2.5*n,a=function(o){return o<n?e*o*o:o<i?e*Math.pow(o-1.5/t,2)+.75:o<s?e*(o-=2.25/t)*o+.9375:e*Math.pow(o-2.625/t,2)+.984375};No("Bounce",function(r){return 1-a(1-r)},a)})(7.5625,2.75);No("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)});No("Circ",function(e){return-(_E(1-e*e)-1)});No("Sine",function(e){return e===1?1:-lL(e*rL)+1});No("Back",Wv("in"),Wv("out"),Wv());re.SteppedEase=re.steps=Li.SteppedEase={config:function(t,n){t===void 0&&(t=1);var i=1/t,s=t+(n?0:1),a=n?1:0,r=1-Te;return function(o){return((s*vh(0,r,o)|0)+a)*i}}};dh.ease=re["quad.out"];Kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return ux+=e+","+e+"Params,"});var mx=function(t,n){this.id=oL++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:fx,this.set=n?n.getSetter:bm},_h=(function(){function e(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,cc(this,+n.duration,1,1),this.data=n.data,ze&&(this._ctx=ze,ze.data.push(this)),gh||ci.wake()}var t=e.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,cc(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(uc(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Mm(this,i),!a._dp||a.parent||wE(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&qs(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),bE(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+hE(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+hE(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,s):this._repeat?lc(this._tTime,a)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?gm(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Te?0:this._rts,this.totalTime(vh(-Math.abs(this._delay),this.totalDuration(),a),s!==!1),Sm(this),xL(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(uc(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Te&&(this._tTime-=Te)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=ke(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&qs(s,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(ui(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gm(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=mL);var s=Rn;return Rn=i,dx(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Rn=s,this},t.globalTime=function(i){for(var s=this,a=arguments.length?i:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,fE(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,fE(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(ts(this,i),ui(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,ui(s)),this._dur||(this._zTime=-Te),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=s&&a<this.endTime(!0)-Te)},t.eventCallback=function(i,s,a){var r=this.vars;return arguments.length>1?(s?(r[i]=s,a&&(r[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=s)):delete r[i],this):r[i]},t.then=function(i){var s=this,a=s._prom;return new Promise(function(r){var o=Je(i)?i:EE,l=function(){var u=s.then;s.then=null,a&&a(),Je(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=u),r(o),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},t.kill=function(){lh(this)},e})();Pi(_h.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var Vn=(function(e){gE(t,e);function t(i,s){var a;return i===void 0&&(i={}),a=e.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=ui(i.sortChildren),Xe&&qs(i.parent||Xe,Da(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&CE(Da(a),i.scrollTrigger),a}var n=t.prototype;return n.to=function(s,a,r){return hh(0,arguments,this),this},n.from=function(s,a,r){return hh(1,arguments,this),this},n.fromTo=function(s,a,r,o){return hh(2,arguments,this),this},n.set=function(s,a,r){return a.duration=0,a.parent=this,uh(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new tn(s,a,ts(this,r),1),this},n.call=function(s,a,r){return qs(this,tn.delayedCall(0,s,a),r)},n.staggerTo=function(s,a,r,o,l,c,u){return r.duration=a,r.stagger=r.stagger||o,r.onComplete=c,r.onCompleteParams=u,r.parent=this,new tn(s,r,ts(this,l)),this},n.staggerFrom=function(s,a,r,o,l,c,u){return r.runBackwards=1,uh(r).immediateRender=ui(r.immediateRender),this.staggerTo(s,a,r,o,l,c,u)},n.staggerFromTo=function(s,a,r,o,l,c,u,m){return o.startAt=r,uh(o).immediateRender=ui(o.immediateRender),this.staggerTo(s,a,o,l,c,u,m)},n.render=function(s,a,r){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:ke(s),m=this._zTime<0!=s<0&&(this._initted||!c),h,d,f,_,g,p,v,S,x,T,b,A;if(this!==Xe&&u>l&&s>=0&&(u=l),u!==this._tTime||r||m){if(o!==this._time&&c&&(u+=this._time-o,s+=this._time-o),h=u,x=this._start,S=this._ts,p=!S,m&&(c||(o=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(b=this._yoyo,g=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(g*100+s,a,r);if(h=ke(u%g),u===l?(_=this._repeat,h=c):(T=ke(u/g),_=~~T,_&&_===T&&(h=c,_--),h>c&&(h=c)),T=lc(this._tTime,g),!o&&this._tTime&&T!==_&&this._tTime-T*g-this._dur<=0&&(T=_),b&&_&1&&(h=c-h,A=1),_!==T&&!this._lock){var y=b&&T&1,E=y===(b&&_&1);if(_<T&&(y=!y),o=y?0:u%c?c:u,this._lock=1,this.render(o||(A?0:ke(_*g)),a,!c)._lock=0,this._tTime=u,!a&&this.parent&&Ni(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,T=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=bL(this,ke(o),ke(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&u&&c&&!a&&!T&&(Ni(this,"onStart"),this._tTime!==u))return this;if(h>=o&&s>=0)for(d=this._first;d;){if(f=d._next,(d._act||h>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(s,a,r);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,a,r),h!==this._time||!this._ts&&!p){v=0,f&&(u+=this._zTime=-Te);break}}d=f}else{d=this._last;for(var C=s<0?s:h;d;){if(f=d._prev,(d._act||C<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(s,a,r);if(d.render(d._ts>0?(C-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(C-d._start)*d._ts,a,r||Rn&&dx(d)),h!==this._time||!this._ts&&!p){v=0,f&&(u+=this._zTime=C?-Te:Te);break}}d=f}}if(v&&!a&&(this.pause(),v.render(h>=o?0:-Te)._zTime=h>=o?1:-1,this._ts))return this._start=x,Sm(this),this.render(s,a,r);this._onUpdate&&!a&&Ni(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ir(this,1),!a&&!(s<0&&!o)&&(u||o||!l)&&(Ni(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,a){var r=this;if(Na(a)||(a=ts(this,a,s)),!(s instanceof _h)){if(Hn(s))return s.forEach(function(o){return r.add(o,a)}),this;if(fn(s))return this.addLabel(s,a);if(Je(s))s=tn.delayedCall(0,s);else return this}return this!==s?qs(this,s,a):this},n.getChildren=function(s,a,r,o){s===void 0&&(s=!0),a===void 0&&(a=!0),r===void 0&&(r=!0),o===void 0&&(o=-es);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof tn?a&&l.push(c):(r&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,a,r)))),c=c._next;return l},n.getById=function(s){for(var a=this.getChildren(1,1,1),r=a.length;r--;)if(a[r].vars.id===s)return a[r]},n.remove=function(s){return fn(s)?this.removeLabel(s):Je(s)?this.killTweensOf(s):(s.parent===this&&ym(this,s),s===this._recent&&(this._recent=this._last),wo(this))},n.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ke(ci.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),e.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},n.addLabel=function(s,a){return this.labels[s]=ts(this,a),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,a,r){var o=tn.delayedCall(0,a||mh,r);return o.data="isPause",this._hasPause=1,qs(this,o,ts(this,s))},n.removePause=function(s){var a=this._first;for(s=ts(this,s);a;)a._start===s&&a.data==="isPause"&&Ir(a),a=a._next},n.killTweensOf=function(s,a,r){for(var o=this.getTweensOf(s,r),l=o.length;l--;)Lr!==o[l]&&o[l].kill(s,a);return this},n.getTweensOf=function(s,a){for(var r=[],o=ns(s),l=this._first,c=Na(a),u;l;)l instanceof tn?gL(l._targets,o)&&(c?(!Lr||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&r.push(l):(u=l.getTweensOf(o,a)).length&&r.push.apply(r,u),l=l._next;return r},n.tweenTo=function(s,a){a=a||{};var r=this,o=ts(r,s),l=a,c=l.startAt,u=l.onStart,m=l.onStartParams,h=l.immediateRender,d,f=tn.to(r,Pi({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:a.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale())||Te,onStart:function(){if(r.pause(),!d){var g=a.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale());f._dur!==g&&cc(f,g,0,1).render(f._time,!0,!0),d=1}u&&u.apply(f,m||[])}},a));return h?f.render(0):f},n.tweenFromTo=function(s,a,r){return this.tweenTo(a,Pi({startAt:{time:ts(this,s)}},r))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),dE(this,ts(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),dE(this,ts(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Te)},n.shiftChildren=function(s,a,r){r===void 0&&(r=0);var o=this._first,l=this.labels,c;for(s=ke(s);o;)o._start>=r&&(o._start+=s,o._end+=s),o=o._next;if(a)for(c in l)l[c]>=r&&(l[c]+=s);return wo(this)},n.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return e.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,r;a;)r=a._next,this.remove(a),a=r;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),wo(this)},n.totalDuration=function(s){var a=0,r=this,o=r._last,l=es,c,u,m;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-s:s));if(r._dirty){for(m=r.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&r._sort&&o._ts&&!r._lock?(r._lock=1,qs(r,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(a-=u,(!m&&!r._dp||m&&m.smoothChildTiming)&&(r._start+=ke(u/r._ts),r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),l=0),o._end>a&&o._ts&&(a=o._end),o=c;cc(r,r===Xe&&r._time>a?r._time:a,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(s){if(Xe._ts&&(bE(Xe,gm(s,Xe)),ME=ci.frame),ci.frame>=cE){cE+=hi.autoSleep||120;var a=Xe._first;if((!a||!a._ts)&&hi.autoSleep&&ci._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||ci.sleep()}}},t})(_h);Pi(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var VL=function(t,n,i,s,a,r,o){var l=new Qn(this._pt,t,n,0,1,yx,null,a),c=0,u=0,m,h,d,f,_,g,p,v;for(l.b=i,l.e=s,i+="",s+="",(p=~s.indexOf("random("))&&(s=hc(s)),r&&(v=[i,s],r(v,t,n),i=v[0],s=v[1]),h=i.match(Hv)||[];m=Hv.exec(s);)f=m[0],_=s.substring(c,m.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),f!==h[u++]&&(g=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:f.charAt(1)==="="?Uo(g,f)-g:parseFloat(f)-g,m:d&&d<4?Math.round:0},c=Hv.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,(ox.test(s)||p)&&(l.e=0),this._pt=l,l},gx=function(t,n,i,s,a,r,o,l,c,u){Je(s)&&(s=s(a||0,t,r));var m=t[n],h=i!=="get"?i:Je(m)?c?t[n.indexOf("set")||!Je(t["get"+n.substr(3)])?n:"get"+n.substr(3)](c):t[n]():m,d=Je(m)?c?WL:XE:xx,f;if(fn(s)&&(~s.indexOf("random(")&&(s=hc(s)),s.charAt(1)==="="&&(f=Uo(h,s)+(Dn(h)||0),(f||f===0)&&(s=f))),!u||h!==s||nx)return!isNaN(h*s)&&s!==""?(f=new Qn(this._pt,t,n,+h||0,s-(h||0),typeof m=="boolean"?YL:WE,0,d),c&&(f.fp=c),o&&f.modifier(o,this,t),this._pt=f):(!m&&!(n in t)&&xm(n,s),VL.call(this,t,n,h,s,d,l||hi.stringFilter,c))},HL=function(t,n,i,s,a){if(Je(t)&&(t=fh(t,a,n,i,s)),!Ys(t)||t.style&&t.nodeType||Hn(t)||vE(t))return fn(t)?fh(t,a,n,i,s):t;var r={},o;for(o in t)r[o]=fh(t[o],a,n,i,s);return r},_x=function(t,n,i,s,a,r){var o,l,c,u;if(li[t]&&(o=new li[t]).init(a,o.rawVars?n[t]:HL(n[t],s,a,r,i),i,s,r)!==!1&&(i._pt=l=new Qn(i._pt,a,t,0,1,o.render,o,0,o.priority),i!==rc))for(c=i._ptLookup[i._targets.indexOf(a)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Lr,nx,vx=function e(t,n,i){var s=t.vars,a=s.ease,r=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.runBackwards,m=s.yoyoEase,h=s.keyframes,d=s.autoRevert,f=t._dur,_=t._startAt,g=t._targets,p=t.parent,v=p&&p.data==="nested"?p.vars.targets:g,S=t._overwrite==="auto"&&!sx,x=t.timeline,T=s.easeReverse||m,b,A,y,E,C,D,N,H,W,O,q,B,J;if(x&&(!h||!a)&&(a="none"),t._ease=Co(a,dh.ease),t._rEase=T&&(Co(T)||t._ease),t._from=!x&&!!s.runBackwards,t._from&&(t.ratio=1),!x||h&&!s.stagger){if(H=g[0]?Or(g[0]).harness:0,B=H&&s[H.prop],b=mm(s,cx),_&&(_._zTime<0&&_.progress(1),n<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&f?um:pL),_._lazy=0),r){if(Ir(t._startAt=tn.set(g,Pi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ui(l),startAt:null,delay:0,onUpdate:c&&function(){return Ni(t,"onUpdate")},stagger:0},r))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Rn||!o&&!d)&&t._startAt.revert(um),o&&f&&n<=0&&i<=0){n&&(t._zTime=n);return}}else if(u&&f&&!_){if(n&&(o=!1),y=Pi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ui(l),immediateRender:o,stagger:0,parent:p},b),B&&(y[H.prop]=B),Ir(t._startAt=tn.set(g,y)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Rn?t._startAt.revert(um):t._startAt.render(-1,!0)),t._zTime=n,!o)e(t._startAt,Te,Te);else if(!n)return}for(t._pt=t._ptCache=0,l=f&&ui(l)||l&&!f,A=0;A<g.length;A++){if(C=g[A],N=C._gsap||hx(g)[A]._gsap,t._ptLookup[A]=O={},Kv[N.id]&&Pr.length&&pm(),q=v===g?A:v.indexOf(C),H&&(W=new H).init(C,B||b,t,q,v)!==!1&&(t._pt=E=new Qn(t._pt,C,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function($){O[$]=E}),W.priority&&(D=1)),!H||B)for(y in b)li[y]&&(W=_x(y,b,t,q,C,v))?W.priority&&(D=1):O[y]=E=gx.call(t,C,y,"get",b[y],q,v,0,s.stringFilter);t._op&&t._op[A]&&t.kill(C,t._op[A]),S&&t._pt&&(Lr=t,Xe.killTweensOf(C,O,t.globalTime(n)),J=!t.parent,Lr=0),t._pt&&l&&(Kv[N.id]=1)}D&&Mx(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!J,h&&n<=0&&x.render(es,!0,!0)},GL=function(t,n,i,s,a,r,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[n],u,m,h,d;if(!c)for(c=t._ptCache[n]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return nx=1,t.vars[n]="+=0",vx(t,o),nx=0,l?ph(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)m=c[d],u=m._pt||m,u.s=(s||s===0)&&!a?s:u.s+(s||0)+r*u.c,u.c=i-u.s,m.e&&(m.e=Ke(i)+Dn(m.e)),m.b&&(m.b=u.s+Dn(m.b))},kL=function(t,n){var i=t[0]?Or(t[0]).harness:0,s=i&&i.aliases,a,r,o,l;if(!s)return n;a=oc({},n);for(r in s)if(r in a)for(l=s[r].split(","),o=l.length;o--;)a[l[o]]=a[r];return a},XL=function(t,n,i,s){var a=n.ease||s||"power1.inOut",r,o;if(Hn(n))o=i[t]||(i[t]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:a})});else for(r in n)o=i[r]||(i[r]=[]),r==="ease"||o.push({t:parseFloat(t),v:n[r],e:a})},fh=function(t,n,i,s,a){return Je(t)?t.call(n,i,s,a):fn(t)&&~t.indexOf("random(")?hc(t):t},GE=ux+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",kE={};Kn(GE+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return kE[e]=1});var tn=(function(e){gE(t,e);function t(i,s,a,r){var o;typeof s=="number"&&(a.duration=s,s=a,a=null),o=e.call(this,r?s:uh(s))||this;var l=o.vars,c=l.duration,u=l.delay,m=l.immediateRender,h=l.stagger,d=l.overwrite,f=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=s.parent||Xe,v=(Hn(i)||vE(i)?Na(i[0]):"length"in s)?[i]:ns(i),S,x,T,b,A,y,E,C;if(o._targets=v.length?hx(v):ph("GSAP target "+i+" not found. https://gsap.com",!hi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,f||h||cm(c)||cm(u)){s=o.vars;var D=s.easeReverse||s.yoyoEase;if(S=o.timeline=new Vn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:v}),S.kill(),S.parent=S._dp=Da(o),S._start=0,h||cm(c)||cm(u)){if(b=v.length,E=h&&NE(h),Ys(h))for(A in h)~GE.indexOf(A)&&(C||(C={}),C[A]=h[A]);for(x=0;x<b;x++)T=mm(s,kE),T.stagger=0,D&&(T.easeReverse=D),C&&oc(T,C),y=v[x],T.duration=+fh(c,Da(o),x,y,v),T.delay=(+fh(u,Da(o),x,y,v)||0)-o._delay,!h&&b===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),S.to(y,T,E?E(x,y,v):0),S._ease=re.none;S.duration()?c=u=0:o.timeline=0}else if(f){uh(Pi(S.vars.defaults,{ease:"none"})),S._ease=Co(f.ease||s.ease||"none");var N=0,H,W,O;if(Hn(f))f.forEach(function(q){return S.to(v,q,">")}),S.duration();else{T={};for(A in f)A==="ease"||A==="easeEach"||XL(A,f[A],T,f.easeEach);for(A in T)for(H=T[A].sort(function(q,B){return q.t-B.t}),N=0,x=0;x<H.length;x++)W=H[x],O={ease:W.e,duration:(W.t-(x?H[x-1].t:0))/100*c},O[A]=W.v,S.to(v,O,N),N+=O.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return d===!0&&!sx&&(Lr=Da(o),Xe.killTweensOf(v),Lr=0),qs(p,Da(o),a),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(m||!c&&!f&&o._start===ke(p._time)&&ui(m)&&yL(Da(o))&&p.data!=="nested")&&(o._tTime=-Te,o.render(Math.max(0,-u)||0)),g&&CE(Da(o),g),o}var n=t.prototype;return n.render=function(s,a,r){var o=this._time,l=this._tDur,c=this._dur,u=s<0,m=s>l-Te&&!u?l:s<Te?0:s,h,d,f,_,g,p,v,S;if(!c)ML(this,s,a,r);else if(m!==this._tTime||!s||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=m,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+s,a,r);if(h=ke(m%_),m===l?(f=this._repeat,h=c):(g=ke(m/_),f=~~g,f&&f===g?(h=c,f--):h>c&&(h=c)),p=this._yoyo&&f&1,p&&(h=c-h),g=lc(this._tTime,_),h===o&&!r&&this._initted&&f===g)return this._tTime=m,this;f!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=r=1,this.render(ke(_*f),!0).invalidate()._lock=0)}if(!this._initted){if(RE(this,u?s:h,r,a,m))return this._tTime=0,this;if(o!==this._time&&!(r&&this.vars.repeatRefresh&&f!==g))return this;if(c!==this._dur)return this.render(s,a,r)}if(this._rEase){var x=h<o;if(x!==this._inv){var T=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(x?-1:1)/T:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=m,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&m&&!a&&!g&&(Ni(this,"onStart"),this._tTime!==m))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;S&&S.render(s<0?s:S._dur*S._ease(h/this._dur),a,r)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(u&&Qv(this,s,a,r),Ni(this,"onUpdate")),this._repeat&&f!==g&&this.vars.onRepeat&&!a&&this.parent&&Ni(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(u&&!this._onUpdate&&Qv(this,s,!0,!0),(s||!c)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&Ir(this,1),!a&&!(u&&!o)&&(m||o||p)&&(Ni(this,m===l?"onComplete":"onReverseComplete",!0),this._prom&&!(m<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),e.prototype.invalidate.call(this,s)},n.resetTo=function(s,a,r,o,l){gh||ci.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||vx(this,c),u=this._ease(c/this._dur),GL(this,s,a,r,o,u,c,l)?this.resetTo(s,a,r,o,1):(Mm(this,0),this.parent||AE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?lh(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Rn),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,Lr&&Lr.vars.overwrite!==!0)._first||lh(this),this.parent&&r!==this.timeline.totalDuration()&&cc(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,l=s?ns(s):o,c=this._ptLookup,u=this._pt,m,h,d,f,_,g,p;if((!a||a==="all")&&vL(o,l))return a==="all"&&(this._pt=0),lh(this);for(m=this._op=this._op||[],a!=="all"&&(fn(a)&&(_={},Kn(a,function(v){return _[v]=1}),a=_),a=kL(o,a)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],a==="all"?(m[p]=a,f=h,d={}):(d=m[p]=m[p]||{},f=a);for(_ in f)g=h&&h[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&ym(this,g,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&lh(this),this},t.to=function(s,a){return new t(s,a,arguments[2])},t.from=function(s,a){return hh(1,arguments)},t.delayedCall=function(s,a,r,o){return new t(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},t.fromTo=function(s,a,r){return hh(2,arguments)},t.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new t(s,a)},t.killTweensOf=function(s,a,r){return Xe.killTweensOf(s,a,r)},t})(_h);Pi(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kn("staggerTo,staggerFrom,staggerFromTo",function(e){tn[e]=function(){var t=new Vn,n=$v.call(arguments,0);return n.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,n)}});var xx=function(t,n,i){return t[n]=i},XE=function(t,n,i){return t[n](i)},WL=function(t,n,i,s){return t[n](s.fp,i)},qL=function(t,n,i){return t.setAttribute(n,i)},bm=function(t,n){return Je(t[n])?XE:vm(t[n])&&t.setAttribute?qL:xx},WE=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},YL=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},yx=function(t,n){var i=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=n.c}n.set(n.t,n.p,s,n)},Sx=function(t,n){for(var i=n._pt;i;)i.r(t,i.d),i=i._next},ZL=function(t,n,i,s){for(var a=this._pt,r;a;)r=a._next,a.p===s&&a.modifier(t,n,i),a=r},JL=function(t){for(var n=this._pt,i,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?ym(this,n,"_pt"):n.dep||(i=1),n=s;return!i},KL=function(t,n,i,s){s.mSet(t,n,s.m.call(s.tween,i,s.mt),s)},Mx=function(t){for(var n=t._pt,i,s,a,r;n;){for(i=n._next,s=a;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:r)?n._prev._next=n:a=n,(n._next=s)?s._prev=n:r=n,n=i}t._pt=a},Qn=(function(){function e(n,i,s,a,r,o,l,c,u){this.t=i,this.s=a,this.c=r,this.p=s,this.r=o||WE,this.d=l||this,this.set=c||xx,this.pr=u||0,this._next=n,n&&(n._prev=this)}var t=e.prototype;return t.modifier=function(i,s,a){this.mSet=this.mSet||this.set,this.set=KL,this.m=i,this.mt=a,this.tween=s},e})();Kn(ux+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(e){return cx[e]=1});Li.TweenMax=Li.TweenLite=tn;Li.TimelineLite=Li.TimelineMax=Vn;Xe=new Vn({sortChildren:!1,defaults:dh,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hi.stringFilter=px;var Ro=[],fm={},QL=[],mE=0,jL=0,qv=function(t){return(fm[t]||QL).map(function(n){return n()})},ix=function(){var t=Date.now(),n=[];t-mE>2&&(qv("matchMediaInit"),Ro.forEach(function(i){var s=i.queries,a=i.conditions,r,o,l,c;for(o in s)r=Ws.matchMedia(s[o]).matches,r&&(l=1),r!==a[o]&&(a[o]=r,c=1);c&&(i.revert(),l&&n.push(i))}),qv("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),mE=t,qv("matchMedia"))},qE=(function(){function e(n,i){this.selector=i&&tx(i),this.data=[],this._r=[],this.isReverted=!1,this.id=jL++,n&&this.add(n)}var t=e.prototype;return t.add=function(i,s,a){Je(i)&&(a=s,s=i,i=Je);var r=this,o=function(){var c=ze,u=r.selector,m;return c&&c!==r&&c.data.push(r),a&&(r.selector=tx(a)),ze=r,m=s.apply(r,arguments),Je(m)&&r._r.push(m),ze=c,r.selector=u,r.isReverted=!1,m};return r.last=o,i===Je?o(r,function(l){return r.add(null,l)}):i?r[i]=o:o},t.ignore=function(i){var s=ze;ze=null,i(this),ze=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof e?i.push.apply(i,s.getTweens()):s instanceof tn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var a=this;if(i?(function(){for(var o=a.getTweens(),l=a.data.length,c;l--;)c=a.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,m){return m.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=a.data.length;l--;)c=a.data[l],c instanceof Vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(i);a._r.forEach(function(u){return u(i,a)}),a.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s)for(var r=Ro.length;r--;)Ro[r].id===this.id&&Ro.splice(r,1)},t.revert=function(i){this.kill(i||{})},e})(),$L=(function(){function e(n){this.contexts=[],this.scope=n,ze&&ze.data.push(this)}var t=e.prototype;return t.add=function(i,s,a){Ys(i)||(i={matches:i});var r=new qE(0,a||this.scope),o=r.conditions={},l,c,u;ze&&!r.selector&&(r.selector=ze.selector),this.contexts.push(r),s=r.add("onMatch",s),r.queries=i;for(c in i)c==="all"?u=1:(l=Ws.matchMedia(i[c]),l&&(Ro.indexOf(r)<0&&Ro.push(r),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ix):l.addEventListener("change",ix)));return u&&s(r,function(m){return r.add(null,m)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},e})(),_m={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(s){return FE(s)})},timeline:function(t){return new Vn(t)},getTweensOf:function(t,n){return Xe.getTweensOf(t,n)},getProperty:function(t,n,i,s){fn(t)&&(t=ns(t)[0]);var a=Or(t||{}).get,r=i?EE:TE;return i==="native"&&(i=""),t&&(n?r((li[n]&&li[n].get||a)(t,n,i,s)):function(o,l,c){return r((li[o]&&li[o].get||a)(t,o,l,c))})},quickSetter:function(t,n,i){if(t=ns(t),t.length>1){var s=t.map(function(u){return Gn.quickSetter(u,n,i)}),a=s.length;return function(u){for(var m=a;m--;)s[m](u)}}t=t[0]||{};var r=li[n],o=Or(t),l=o.harness&&(o.harness.aliases||{})[n]||n,c=r?function(u){var m=new r;rc._pt=0,m.init(t,i?u+i:u,rc,0,[t]),m.render(1,m),rc._pt&&Sx(1,rc)}:o.set(t,l);return r?c:function(u){return c(t,l,i?u+i:u,o,1)}},quickTo:function(t,n,i){var s,a=Gn.to(t,Pi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),r=function(l,c,u){return a.resetTo(n,l,c,u)};return r.tween=a,r},isTweening:function(t){return Xe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Co(t.ease,dh.ease)),uE(dh,t||{})},config:function(t){return uE(hi,t||{})},registerEffect:function(t){var n=t.name,i=t.effect,s=t.plugins,a=t.defaults,r=t.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!li[o]&&!Li[o]&&ph(n+" effect requires "+o+" plugin.")}),Gv[n]=function(o,l,c){return i(ns(o),Pi(l||{},a),c)},r&&(Vn.prototype[n]=function(o,l,c){return this.add(Gv[n](o,Ys(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,n){re[t]=Co(n)},parseEase:function(t,n){return arguments.length?Co(t,n):re},getById:function(t){return Xe.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var i=new Vn(t),s,a;for(i.smoothChildTiming=ui(t.smoothChildTiming),Xe.remove(i),i._dp=0,i._time=i._tTime=Xe._time,s=Xe._first;s;)a=s._next,(n||!(!s._dur&&s instanceof tn&&s.vars.onComplete===s._targets[0]))&&qs(i,s,s._start-s._delay),s=a;return qs(Xe,i,0),i},context:function(t,n){return t?new qE(t,n):ze},matchMedia:function(t){return new $L(t)},matchMediaRefresh:function(){return Ro.forEach(function(t){var n=t.conditions,i,s;for(s in n)n[s]&&(n[s]=!1,i=1);i&&t.revert()})||ix()},addEventListener:function(t,n){var i=fm[t]||(fm[t]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(t,n){var i=fm[t],s=i&&i.indexOf(n);s>=0&&i.splice(s,1)},utils:{wrap:DL,wrapYoyo:UL,distribute:NE,random:PE,snap:LE,normalize:RL,getUnit:Dn,clamp:EL,splitColor:zE,toArray:ns,selector:tx,mapRange:IE,pipe:wL,unitize:CL,interpolate:NL,shuffle:UE},install:yE,effects:Gv,ticker:ci,updateRoot:Vn.updateRoot,plugins:li,globalTimeline:Xe,core:{PropTween:Qn,globals:SE,Tween:tn,Timeline:Vn,Animation:_h,getCache:Or,_removeLinkedListItem:ym,reverting:function(){return Rn},context:function(t){return t&&ze&&(ze.data.push(t),t._ctx=ze),ze},suppressOverwrites:function(t){return sx=t}}};Kn("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return _m[e]=tn[e]});ci.add(Vn.updateRoot);rc=_m.to({},{duration:0});var tP=function(t,n){for(var i=t._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},eP=function(t,n){var i=t._targets,s,a,r;for(s in n)for(a=i.length;a--;)r=t._ptLookup[a][s],r&&(r=r.d)&&(r._pt&&(r=tP(r,s)),r&&r.modifier&&r.modifier(n[s],t,i[a],s))},Yv=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,a,r){r._onInit=function(o){var l,c;if(fn(a)&&(l={},Kn(a,function(u){return l[u]=1}),a=l),n){l={};for(c in a)l[c]=n(a[c]);a=l}eP(o,a)}}}},Gn=_m.registerPlugin({name:"attr",init:function(t,n,i,s,a){var r,o,l;this.tween=i;for(r in n)l=t.getAttribute(r)||"",o=this.add(t,"setAttribute",(l||0)+"",n[r],s,a,0,0,r),o.op=r,o.b=l,this._props.push(r)},render:function(t,n){for(var i=n._pt;i;)Rn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,n){for(var i=n.length;i--;)this.add(t,i,t[i]||0,n[i],0,0,0,0,0,1)}},Yv("roundProps",ex),Yv("modifiers"),Yv("snap",LE))||_m;tn.version=Vn.version=Gn.version="3.15.0";xE=1;ax()&&uc();var nP=re.Power0,iP=re.Power1,sP=re.Power2,aP=re.Power3,rP=re.Power4,oP=re.Linear,lP=re.Quad,cP=re.Cubic,uP=re.Quart,hP=re.Quint,fP=re.Strong,dP=re.Elastic,pP=re.Back,mP=re.SteppedEase,gP=re.Bounce,_P=re.Sine,vP=re.Expo,xP=re.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var YE,Fr,dc,Cx,Io,yP,ZE,Rx,SP=function(){return typeof window<"u"},Pa={},Oo=180/Math.PI,pc=Math.PI/180,fc=Math.atan2,JE=1e8,Dx=/([A-Z])/g,MP=/(left|right|width|margin|padding|x)/i,bP=/[\s,\(]\S/,Zs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Tx=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},TP=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},EP=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},AP=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},wP=function(t,n){var i=n.s+n.c*t;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},iA=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},sA=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},CP=function(t,n,i){return t.style[n]=i},RP=function(t,n,i){return t.style.setProperty(n,i)},DP=function(t,n,i){return t._gsap[n]=i},UP=function(t,n,i){return t._gsap.scaleX=t._gsap.scaleY=i},NP=function(t,n,i,s,a){var r=t._gsap;r.scaleX=r.scaleY=i,r.renderTransform(a,r)},LP=function(t,n,i,s,a){var r=t._gsap;r[n]=i,r.renderTransform(a,r)},We="transform",fi=We+"Origin",PP=function e(t,n){var i=this,s=this.target,a=s.style,r=s._gsap;if(t in Pa&&a){if(this.tfm=this.tfm||{},t!=="transform")t=Zs[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=La(s,o)}):this.tfm[t]=r.x?r[t]:La(s,t),t===fi&&(this.tfm.zOrigin=r.zOrigin);else return Zs.transform.split(",").forEach(function(o){return e.call(i,o,n)});if(this.props.indexOf(We)>=0)return;r.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(fi,n,"")),t=We}(a||n)&&this.props.push(t,n,a[t])},aA=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},OP=function(){var t=this.props,n=this.target,i=n.style,s=n._gsap,a,r;for(a=0;a<t.length;a+=3)t[a+1]?t[a+1]===2?n[t[a]](t[a+2]):n[t[a]]=t[a+2]:t[a+2]?i[t[a]]=t[a+2]:i.removeProperty(t[a].substr(0,2)==="--"?t[a]:t[a].replace(Dx,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)s[r]=this.tfm[r];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),a=Rx(),(!a||!a.isStart)&&!i[We]&&(aA(i),s.zOrigin&&i[fi]&&(i[fi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},rA=function(t,n){var i={target:t,props:[],revert:OP,save:PP};return t._gsap||Gn.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return i.save(s)}),i},oA,Ex=function(t,n){var i=Fr.createElementNS?Fr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Fr.createElement(t);return i&&i.style?i:Fr.createElement(t)},Oi=function e(t,n,i){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(Dx,"-$1").toLowerCase())||s.getPropertyValue(n)||!i&&e(t,mc(n)||n,1)||""},KE="O,Moz,ms,Ms,Webkit".split(","),mc=function(t,n,i){var s=n||Io,a=s.style,r=5;if(t in a&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(KE[r]+t in a););return r<0?null:(r===3?"ms":r>=0?KE[r]:"")+t},Ax=function(){SP()&&window.document&&(YE=window,Fr=YE.document,dc=Fr.documentElement,Io=Ex("div")||{style:{}},yP=Ex("div"),We=mc(We),fi=We+"Origin",Io.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",oA=!!mc("perspective"),Rx=Gn.core.reverting,Cx=1)},QE=function(t){var n=t.ownerSVGElement,i=Ex("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),a;s.style.display="block",i.appendChild(s),dc.appendChild(i);try{a=s.getBBox()}catch{}return i.removeChild(s),dc.removeChild(i),a},jE=function(t,n){for(var i=n.length;i--;)if(t.hasAttribute(n[i]))return t.getAttribute(n[i])},lA=function(t){var n,i;try{n=t.getBBox()}catch{n=QE(t),i=1}return n&&(n.width||n.height)||i||(n=QE(t)),n&&!n.width&&!n.x&&!n.y?{x:+jE(t,["x","cx","x1"])||0,y:+jE(t,["y","cy","y1"])||0,width:0,height:0}:n},cA=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&lA(t))},Vr=function(t,n){if(n){var i=t.style,s;n in Pa&&n!==fi&&(n=We),i.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(s==="--"?n:n.replace(Dx,"-$1").toLowerCase())):i.removeAttribute(n)}},zr=function(t,n,i,s,a,r){var o=new Qn(t._pt,n,i,0,1,r?sA:iA);return t._pt=o,o.b=s,o.e=a,t._props.push(i),o},$E={deg:1,rad:1,turn:1},IP={grid:1,flex:1},Hr=function e(t,n,i,s){var a=parseFloat(i)||0,r=(i+"").trim().substr((a+"").length)||"px",o=Io.style,l=MP.test(n),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),m=100,h=s==="px",d=s==="%",f,_,g,p;if(s===r||!a||$E[s]||$E[r])return a;if(r!=="px"&&!h&&(a=e(t,n,i,"px")),p=t.getCTM&&cA(t),(d||r==="%")&&(Pa[n]||~n.indexOf("adius")))return f=p?t.getBBox()[l?"width":"height"]:t[u],Ke(d?a/f*m:a/100*f);if(o[l?"width":"height"]=m+(h?r:s),_=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Fr||!_.appendChild)&&(_=Fr.body),g=_._gsap,g&&d&&g.width&&l&&g.time===ci.time&&!g.uncache)return Ke(a/g.width*m);if(d&&(n==="height"||n==="width")){var v=t.style[n];t.style[n]=m+s,f=t[u],v?t.style[n]=v:Vr(t,n)}else(d||r==="%")&&!IP[Oi(_,"display")]&&(o.position=Oi(t,"position")),_===t&&(o.position="static"),_.appendChild(Io),f=Io[u],_.removeChild(Io),o.position="absolute";return l&&d&&(g=Or(_),g.time=ci.time,g.width=_[u]),Ke(h?f*a/m:f&&a?m/f*a:0)},La=function(t,n,i,s){var a;return Cx||Ax(),n in Zs&&n!=="transform"&&(n=Zs[n],~n.indexOf(",")&&(n=n.split(",")[0])),Pa[n]&&n!=="transform"?(a=Sh(t,s),a=n!=="transformOrigin"?a[n]:a.svg?a.origin:Em(Oi(t,fi))+" "+a.zOrigin+"px"):(a=t.style[n],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=Tm[n]&&Tm[n](t,n,i)||Oi(t,n)||fx(t,n)||(n==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?Hr(t,n,a,i)+i:a},BP=function(t,n,i,s){if(!i||i==="none"){var a=mc(n,t,1),r=a&&Oi(t,a,1);r&&r!==i?(n=a,i=r):n==="borderColor"&&(i=Oi(t,"borderTopColor"))}var o=new Qn(this._pt,t.style,n,0,1,yx),l=0,c=0,u,m,h,d,f,_,g,p,v,S,x,T;if(o.b=i,o.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=Oi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(_=t.style[n],t.style[n]=s,s=Oi(t,n)||s,_?t.style[n]=_:Vr(t,n)),u=[i,s],px(u),i=u[0],s=u[1],h=i.match(Do)||[],T=s.match(Do)||[],T.length){for(;m=Do.exec(s);)g=m[0],v=s.substring(l,m.index),f?f=(f+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(f=1),g!==(_=h[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),g.charAt(1)==="="&&(g=Uo(d,g)+x),p=parseFloat(g),S=g.substr((p+"").length),l=Do.lastIndex-S.length,S||(S=S||hi.units[n]||x,l===s.length&&(s+=S,o.e+=S)),x!==S&&(d=Hr(t,n,_,S)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:d,c:p-d,m:f&&f<4||n==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=n==="display"&&s==="none"?sA:iA;return ox.test(s)&&(o.e=0),this._pt=o,o},tA={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},FP=function(t){var n=t.split(" "),i=n[0],s=n[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),n[0]=tA[i]||i,n[1]=tA[s]||s,n.join(" ")},zP=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,s=i.style,a=n.u,r=i._gsap,o,l,c;if(a==="all"||a===!0)s.cssText="",l=1;else for(a=a.split(","),c=a.length;--c>-1;)o=a[c],Pa[o]&&(l=1,o=o==="transformOrigin"?fi:We),Vr(i,o);l&&(Vr(i,We),r&&(r.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Sh(i,1),r.uncache=1,aA(s)))}},Tm={clearProps:function(t,n,i,s,a){if(a.data!=="isFromStart"){var r=t._pt=new Qn(t._pt,n,i,0,0,zP);return r.u=s,r.pr=-10,r.tween=a,t._props.push(i),1}}},yh=[1,0,0,1,0,0],uA={},hA=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},eA=function(t){var n=Oi(t,We);return hA(n)?yh:n.substr(7).match(rx).map(Ke)},Ux=function(t,n){var i=t._gsap||Or(t),s=t.style,a=eA(t),r,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?yh:a):(a===yh&&!t.offsetParent&&t!==dc&&!i.svg&&(l=s.display,s.display="block",r=t.parentNode,(!r||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,dc.appendChild(t)),a=eA(t),l?s.display=l:Vr(t,"display"),c&&(o?r.insertBefore(t,o):r?r.appendChild(t):dc.removeChild(t))),n&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},wx=function(t,n,i,s,a,r){var o=t._gsap,l=a||Ux(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,m=o.xOffset||0,h=o.yOffset||0,d=l[0],f=l[1],_=l[2],g=l[3],p=l[4],v=l[5],S=n.split(" "),x=parseFloat(S[0])||0,T=parseFloat(S[1])||0,b,A,y,E;i?l!==yh&&(A=d*g-f*_)&&(y=x*(g/A)+T*(-_/A)+(_*v-g*p)/A,E=x*(-f/A)+T*(d/A)-(d*v-f*p)/A,x=y,T=E):(b=lA(t),x=b.x+(~S[0].indexOf("%")?x/100*b.width:x),T=b.y+(~(S[1]||S[0]).indexOf("%")?T/100*b.height:T)),s||s!==!1&&o.smooth?(p=x-c,v=T-u,o.xOffset=m+(p*d+v*_)-p,o.yOffset=h+(p*f+v*g)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=T,o.smooth=!!s,o.origin=n,o.originIsAbsolute=!!i,t.style[fi]="0px 0px",r&&(zr(r,o,"xOrigin",c,x),zr(r,o,"yOrigin",u,T),zr(r,o,"xOffset",m,o.xOffset),zr(r,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+T)},Sh=function(t,n){var i=t._gsap||new mx(t);if("x"in i&&!n&&!i.uncache)return i;var s=t.style,a=i.scaleX<0,r="px",o="deg",l=getComputedStyle(t),c=Oi(t,fi)||"0",u,m,h,d,f,_,g,p,v,S,x,T,b,A,y,E,C,D,N,H,W,O,q,B,J,$,at,ft,lt,kt,Qt,zt;return u=m=h=_=g=p=v=S=x=0,d=f=1,i.svg=!!(t.getCTM&&cA(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[We]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[We]!=="none"?l[We]:"")),s.scale=s.rotate=s.translate="none"),A=Ux(t,i.svg),i.svg&&(i.uncache?(J=t.getBBox(),c=i.xOrigin-J.x+"px "+(i.yOrigin-J.y)+"px",B=""):B=!n&&t.getAttribute("data-svg-origin"),wx(t,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,A)),T=i.xOrigin||0,b=i.yOrigin||0,A!==yh&&(D=A[0],N=A[1],H=A[2],W=A[3],u=O=A[4],m=q=A[5],A.length===6?(d=Math.sqrt(D*D+N*N),f=Math.sqrt(W*W+H*H),_=D||N?fc(N,D)*Oo:0,v=H||W?fc(H,W)*Oo+_:0,v&&(f*=Math.abs(Math.cos(v*pc))),i.svg&&(u-=T-(T*D+b*H),m-=b-(T*N+b*W))):(zt=A[6],kt=A[7],at=A[8],ft=A[9],lt=A[10],Qt=A[11],u=A[12],m=A[13],h=A[14],y=fc(zt,lt),g=y*Oo,y&&(E=Math.cos(-y),C=Math.sin(-y),B=O*E+at*C,J=q*E+ft*C,$=zt*E+lt*C,at=O*-C+at*E,ft=q*-C+ft*E,lt=zt*-C+lt*E,Qt=kt*-C+Qt*E,O=B,q=J,zt=$),y=fc(-H,lt),p=y*Oo,y&&(E=Math.cos(-y),C=Math.sin(-y),B=D*E-at*C,J=N*E-ft*C,$=H*E-lt*C,Qt=W*C+Qt*E,D=B,N=J,H=$),y=fc(N,D),_=y*Oo,y&&(E=Math.cos(y),C=Math.sin(y),B=D*E+N*C,J=O*E+q*C,N=N*E-D*C,q=q*E-O*C,D=B,O=J),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),d=Ke(Math.sqrt(D*D+N*N+H*H)),f=Ke(Math.sqrt(q*q+zt*zt)),y=fc(O,q),v=Math.abs(y)>2e-4?y*Oo:0,x=Qt?1/(Qt<0?-Qt:Qt):0),i.svg&&(B=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!hA(Oi(t,We)),B&&t.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(a?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(f*=-1,v+=v<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+r,i.y=m-((i.yPercent=m&&(!n&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-m)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+r,i.z=h+r,i.scaleX=Ke(d),i.scaleY=Ke(f),i.rotation=Ke(_)+o,i.rotationX=Ke(g)+o,i.rotationY=Ke(p)+o,i.skewX=v+o,i.skewY=S+o,i.transformPerspective=x+r,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(s[fi]=Em(c)),i.xOffset=i.yOffset=0,i.force3D=hi.force3D,i.renderTransform=i.svg?HP:oA?fA:VP,i.uncache=0,i},Em=function(t){return(t=t.split(" "))[0]+" "+t[1]},bx=function(t,n,i){var s=Dn(n);return Ke(parseFloat(n)+parseFloat(Hr(t,"x",i+"px",s)))+s},VP=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,fA(t,n)},Lo="0deg",xh="0px",Po=") ",fA=function(t,n){var i=n||this,s=i.xPercent,a=i.yPercent,r=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,m=i.rotationX,h=i.skewX,d=i.skewY,f=i.scaleX,_=i.scaleY,g=i.transformPerspective,p=i.force3D,v=i.target,S=i.zOrigin,x="",T=p==="auto"&&t&&t!==1||p===!0;if(S&&(m!==Lo||u!==Lo)){var b=parseFloat(u)*pc,A=Math.sin(b),y=Math.cos(b),E;b=parseFloat(m)*pc,E=Math.cos(b),r=bx(v,r,A*E*-S),o=bx(v,o,-Math.sin(b)*-S),l=bx(v,l,y*E*-S+S)}g!==xh&&(x+="perspective("+g+Po),(s||a)&&(x+="translate("+s+"%, "+a+"%) "),(T||r!==xh||o!==xh||l!==xh)&&(x+=l!==xh||T?"translate3d("+r+", "+o+", "+l+") ":"translate("+r+", "+o+Po),c!==Lo&&(x+="rotate("+c+Po),u!==Lo&&(x+="rotateY("+u+Po),m!==Lo&&(x+="rotateX("+m+Po),(h!==Lo||d!==Lo)&&(x+="skew("+h+", "+d+Po),(f!==1||_!==1)&&(x+="scale("+f+", "+_+Po),v.style[We]=x||"translate(0, 0)"},HP=function(t,n){var i=n||this,s=i.xPercent,a=i.yPercent,r=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,m=i.scaleX,h=i.scaleY,d=i.target,f=i.xOrigin,_=i.yOrigin,g=i.xOffset,p=i.yOffset,v=i.forceCSS,S=parseFloat(r),x=parseFloat(o),T,b,A,y,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=pc,c*=pc,T=Math.cos(l)*m,b=Math.sin(l)*m,A=Math.sin(l-c)*-h,y=Math.cos(l-c)*h,c&&(u*=pc,E=Math.tan(c-u),E=Math.sqrt(1+E*E),A*=E,y*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),T*=E,b*=E)),T=Ke(T),b=Ke(b),A=Ke(A),y=Ke(y)):(T=m,y=h,b=A=0),(S&&!~(r+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(S=Hr(d,"x",r,"px"),x=Hr(d,"y",o,"px")),(f||_||g||p)&&(S=Ke(S+f-(f*T+_*A)+g),x=Ke(x+_-(f*b+_*y)+p)),(s||a)&&(E=d.getBBox(),S=Ke(S+s/100*E.width),x=Ke(x+a/100*E.height)),E="matrix("+T+","+b+","+A+","+y+","+S+","+x+")",d.setAttribute("transform",E),v&&(d.style[We]=E)},GP=function(t,n,i,s,a){var r=360,o=fn(a),l=parseFloat(a)*(o&&~a.indexOf("rad")?Oo:1),c=l-s,u=s+c+"deg",m,h;return o&&(m=a.split("_")[1],m==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),m==="cw"&&c<0?c=(c+r*JE)%r-~~(c/r)*r:m==="ccw"&&c>0&&(c=(c-r*JE)%r-~~(c/r)*r)),t._pt=h=new Qn(t._pt,n,i,s,c,TP),h.e=u,h.u="deg",t._props.push(i),h},nA=function(t,n){for(var i in n)t[i]=n[i];return t},kP=function(t,n,i){var s=nA({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",r=i.style,o,l,c,u,m,h,d,f;s.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),r[We]=n,o=Sh(i,1),Vr(i,We),i.setAttribute("transform",c)):(c=getComputedStyle(i)[We],r[We]=n,o=Sh(i,1),r[We]=c);for(l in Pa)c=s[l],u=o[l],c!==u&&a.indexOf(l)<0&&(d=Dn(c),f=Dn(u),m=d!==f?Hr(i,l,c,f):parseFloat(c),h=parseFloat(u),t._pt=new Qn(t._pt,o,l,m,h-m,Tx),t._pt.u=f||0,t._props.push(l));nA(o,s)};Kn("padding,margin,Width,Radius",function(e,t){var n="Top",i="Right",s="Bottom",a="Left",r=(t<3?[n,i,s,a]:[n+a,n+i,s+i,s+a]).map(function(o){return t<2?e+o:"border"+o+e});Tm[t>1?"border"+e:e]=function(o,l,c,u,m){var h,d;if(arguments.length<4)return h=r.map(function(f){return La(o,f,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},r.forEach(function(f,_){return d[f]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,m)}});var Nx={name:"css",register:Ax,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,i,s,a){var r=this._props,o=t.style,l=i.vars.startAt,c,u,m,h,d,f,_,g,p,v,S,x,T,b,A,y,E;Cx||Ax(),this.styles=this.styles||rA(t),y=this.styles.props,this.tween=i;for(_ in n)if(_!=="autoRound"&&(u=n[_],!(li[_]&&_x(_,n,i,s,t,a)))){if(d=typeof u,f=Tm[_],d==="function"&&(u=u.call(i,s,t,a),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=hc(u)),f)f(this,t,_,u,i)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Ua.lastIndex=0,Ua.test(c)||(g=Dn(c),p=Dn(u),p?g!==p&&(c=Hr(t,_,c,p)+p):g&&(u+=g)),this.add(o,"setProperty",c,u,s,a,0,0,_),r.push(_),y.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,s,t,a):l[_],fn(c)&&~c.indexOf("random(")&&(c=hc(c)),Dn(c+"")||c==="auto"||(c+=hi.units[_]||Dn(La(t,_))||""),(c+"").charAt(1)==="="&&(c=La(t,_))):c=La(t,_),h=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),m=parseFloat(u),_ in Zs&&(_==="autoAlpha"&&(h===1&&La(t,"visibility")==="hidden"&&m&&(h=0),y.push("visibility",0,o.visibility),zr(this,o,"visibility",h?"inherit":"hidden",m?"inherit":"hidden",!m)),_!=="scale"&&_!=="transform"&&(_=Zs[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Pa,S){if(this.styles.save(_),E=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Oi(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=u,u=Oi(t,"perspective"),C?t.style.perspective=C:Vr(t,"perspective")}m=parseFloat(u)}if(x||(T=t._gsap,T.renderTransform&&!n.parseTransform||Sh(t,n.parseTransform),b=n.smoothOrigin!==!1&&T.smooth,x=this._pt=new Qn(this._pt,o,We,0,1,T.renderTransform,T,0,-1),x.dep=1),_==="scale")this._pt=new Qn(this._pt,T,"scaleY",T.scaleY,(v?Uo(T.scaleY,v+m):m)-T.scaleY||0,Tx),this._pt.u=0,r.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(fi,0,o[fi]),u=FP(u),T.svg?wx(t,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==T.zOrigin&&zr(this,T,"zOrigin",T.zOrigin,p),zr(this,o,_,Em(c),Em(u)));continue}else if(_==="svgOrigin"){wx(t,u,1,b,0,this);continue}else if(_ in uA){GP(this,T,_,h,v?Uo(h,v+u):u);continue}else if(_==="smoothOrigin"){zr(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){kP(this,u,t);continue}}else _ in o||(_=mc(_)||_);if(S||(m||m===0)&&(h||h===0)&&!bP.test(u)&&_ in o)g=(c+"").substr((h+"").length),m||(m=0),p=Dn(u)||(_ in hi.units?hi.units[_]:g),g!==p&&(h=Hr(t,_,c,p)),this._pt=new Qn(this._pt,S?T:o,_,h,(v?Uo(h,v+m):m)-h,!S&&(p==="px"||_==="zIndex")&&n.autoRound!==!1?wP:Tx),this._pt.u=p||0,S&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=AP):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=EP);else if(_ in o)BP.call(this,t,_,c,v?v+u:u);else if(_ in t)this.add(t,_,c||t[_],v?v+u:u,s,a);else if(_!=="parseTransform"){xm(_,u);continue}S||(_ in o?y.push(_,0,o[_]):typeof t[_]=="function"?y.push(_,2,t[_]()):y.push(_,1,c||t[_])),r.push(_)}}A&&Mx(this)},render:function(t,n){if(n.tween._time||!Rx())for(var i=n._pt;i;)i.r(t,i.d),i=i._next;else n.styles.revert()},get:La,aliases:Zs,getSetter:function(t,n,i){var s=Zs[n];return s&&s.indexOf(",")<0&&(n=s),n in Pa&&n!==fi&&(t._gsap.x||La(t,"x"))?i&&ZE===i?n==="scale"?UP:DP:(ZE=i||{})&&(n==="scale"?NP:LP):t.style&&!vm(t.style[n])?CP:~n.indexOf("-")?RP:bm(t,n)},core:{_removeProperty:Vr,_getMatrix:Ux}};Gn.utils.checkPrefix=mc;Gn.core.getStyleSaver=rA;(function(e,t,n,i){var s=Kn(e+","+t+","+n,function(a){Pa[a]=1});Kn(t,function(a){hi.units[a]="deg",uA[a]=1}),Zs[s[13]]=e+","+t,Kn(i,function(a){var r=a.split(":");Zs[r[1]]=s[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){hi.units[e]="px"});Gn.registerPlugin(Nx);var qe=Gn.registerPlugin(Nx)||Gn,$F=qe.core.Tween;var dA=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,pA=`
  precision highp float;

  #define MAX_PLANES 32
  #define MAX_LINKS 32

  varying vec2 vUv;

  uniform vec2  uResolution;   // canvas size in px
  uniform vec2  uSize;         // resting plane size in px
  uniform float uRadius;       // resting corner radius in px

  // per-plane state, driven from JS
  uniform float uCount;
  uniform vec2  uPos[MAX_PLANES];    // centre in px, origin at screen centre
  uniform float uRot[MAX_PLANES];    // radians
  // xy = 0..1 per axis, z = brightness (1 = lit, 0 = black), w = which atlas
  // cell this plane wears. All three ride in here rather than in arrays of
  // their own because GLSL ES gives every element of a uniform array a full
  // vec4 row whatever it is declared as \u2014 zw were already being paid for and
  // thrown away. The cell is resolved on the CPU because it depends on where
  // the plane sits on the ring, not on its index, and working that out per
  // pixel in the loop below would be absurd.
  uniform vec4  uScale[MAX_PLANES];

  // honey threads between neighbours, driven from JS
  uniform float uLinkCount;
  uniform vec2  uLinkA[MAX_LINKS];
  uniform vec2  uLinkB[MAX_LINKS];
  // (radius at the ends, radius at the pinch, droop, fillet)
  uniform vec4  uLinkPar[MAX_LINKS];

  uniform float uK;            // smin blend strength in px
  uniform float uWobble;       // surface tension noise amount, px
  uniform float uTime;
  uniform vec3  uColor;
  uniform vec3  uPage;         // what is behind the ring, for the tag to read

  // All the artwork lives in one atlas: ESSL 1.00 cannot index an array of
  // samplers with a varying index, so a per-plane texture is not an option.
  uniform sampler2D uAtlas;
  uniform vec2  uGrid;         // atlas cells across, down
  uniform float uBlend;        // px over which neighbouring art crossfades
  uniform float uTextured;

  // --- ASCII particle opening ---------------------------------------------
  // Real glyphs rasterised into a tiny atlas for the intro assembly.
  uniform sampler2D uAsciiTex;
  uniform vec4 uIntro; // gather progress, cloud expansion, cell px, opacity
  uniform vec4 uCardParticles; // launch, reach px, cell px, opacity
  uniform vec2 uFocusParticlePos;
  uniform vec4 uFocusParticleBox; // half size, radius, rotation
  uniform vec4 uFocusParticles; // amount, reach px, cell px, opacity
  uniform vec2 uFocusParticleMotion; // flow phase, motion multiplier

  // --- pointer -------------------------------------------------------------
  // Nothing is ever drawn at the cursor. It only changes how the ring behaves
  // around it: the field goes soft, and a wake runs out through the surface.
  // Packed into vec4s for the same reason the link parameters are.
  uniform vec4 uMouse;  // cursor.xy px, presence 0..1, blend px added at it
  uniform vec4 uMelt;   // reach px, wake px, wake frequency, wake speed

  // --- the cursor tag ------------------------------------------------------
  // Drawn in this pass with everything else rather than as an element over the
  // canvas. That is what lets its label inspect the pixels it is sitting on and
  // invert against them, and it means the glass refracts the ring the same way
  // the lip does instead of having to sample it back out of a backdrop.
  uniform sampler2D uTagTex;  // the label; only its alpha is used, as a mask
  uniform vec4 uTag;   // centre.xy px, scale.xy \u2014 scale 0 is simply absent
  uniform vec4 uTagP;  // half width, half height, corner radius, refract px
  uniform vec4 uTagQ;  // frost, rim gain, unused, unused

  vec2 atlasUV(vec2 uv, float idx) {
    float col = mod(idx, uGrid.x);
    float row = floor(idx / uGrid.x);
    return (vec2(col, row) + uv) / uGrid;
  }

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // --- glass lip -----------------------------------------------------------
  // A band along the top and bottom of the screen behaving like the rounded
  // edge of a thick glass sheet. Because the whole scene is evaluated from p,
  // warping p here refracts the planes and the honey together, with no second
  // pass and no render target.
  uniform float uBandTop;     // px
  uniform float uBandBottom;  // px
  uniform vec4  uGlass;       // refract px, squeeze, ripple px, ripple freq
  uniform float uFringe;      // px of chromatic split inside the band
  uniform float uSheen;       // lift applied across the lip

  // Warps p in place and returns how deep into the lip this pixel sits, 0..1.
  float glassBend(inout vec2 p) {
    float band = p.y > 0.0 ? uBandTop : uBandBottom;
    if (band <= 0.5) return 0.0;

    float dy = abs(p.y) - (uResolution.y * 0.5 - band);
    if (dy <= 0.0) return 0.0;

    float t = clamp(dy / band, 0.0, 1.0);
    // Circular profile: barely bends at the inner edge, falls away sharply at
    // the very edge, which is what reads as thickness rather than a gradient.
    float bend = 1.0 - sqrt(max(0.0, 1.0 - t * t));

    float s = sign(p.y);
    // Sampling back toward centre throws content outward, so the image
    // stretches forward into the lip and swells as it reaches the edge.
    // Both terms are signed: negatives invert the lip and compress instead.
    p.y -= s * bend * (uGlass.x + sin(p.x * uGlass.w) * uGlass.z);
    p.x *= 1.0 - bend * uGlass.y;

    return bend;
  }

  // --- simplex noise -------------------------------------------------------
  // Copyright (C) 2011 Ashima Arts. All rights reserved.
  // Copyright (C) 2011-2016 by Stefan Gustavson (Classic noise and others)
  // Distributed under the MIT License. https://github.com/ashima/webgl-noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                            + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
                            dot(x12.zw, x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // --- sdf helpers ---------------------------------------------------------
  float sdRoundBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
  }

  // The honey between two planes: a flat slab spanning centre to centre, as
  // wide as the edges it comes off and pinched in the middle, drooping under
  // its own weight.
  //
  // Deliberately not a capsule. A capsule has a round cross-section, so at
  // full merge it bulges out past the flat sides of the planes themselves.
  // This is swept as a box, so while the planes overlap it stays entirely
  // inside them and the silhouette reads as one flat card.
  float sdBridge(vec2 p, vec2 a, vec2 b, float rEnd, float rMid, float sag) {
    vec2 ba = b - a;
    float len = length(ba);
    if (len < 0.001) return 1e6;

    vec2 dir = ba / len;
    vec2 nrm = vec2(-dir.y, dir.x);

    vec2 q = p - (a + b) * 0.5;
    float along = dot(q, dir);
    float across = dot(q, nrm);

    float h = clamp(along / len + 0.5, 0.0, 1.0);
    float bell = sin(3.14159265 * h);           // 0 at the ends, 1 in the middle

    // droop, world -Y, resolved onto the across axis
    across += sag * bell * nrm.y;

    float taper = pow(1.0 - bell, 1.7);         // 1 at the ends, 0 in the middle
    float r = mix(rMid, rEnd, taper);

    // Ends are square and buried inside the planes, so they never show.
    return max(abs(along) - len * 0.5, abs(across) - r);
  }

  // The tag's own outline, scaled by whatever the pop animation is doing.
  float sdTag(vec2 p) {
    vec2 hs = uTagP.xy * abs(uTag.zw);
    return sdRoundBox(p - uTag.xy, hs, min(uTagP.z, min(hs.x, hs.y)));
  }

  // Its surface normal, by difference. A pill's normal is vertical along the
  // flat edges and radial round the ends, so nothing simpler than this gets the
  // refraction pointing the right way the whole way round.
  vec2 tagNormal(vec2 p) {
    vec2 e = vec2(1.0, 0.0);
    vec2 g = vec2(
      sdTag(p + e.xy) - sdTag(p - e.xy),
      sdTag(p + e.yx) - sdTag(p - e.yx)
    );
    float l = length(g);
    return l > 0.0001 ? g / l : vec2(0.0);
  }

  // smooth minimum \u2014 this is what makes the shapes read as liquid.
  // Note it also behaves as a plain min() when a is the 1e6 sentinel.
  float smin(float a, float b, float k) {
    if (k <= 0.0001) return min(a, b);
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
  }

  vec4 introParticles(vec2 p) {
    float t = clamp(uIntro.x, 0.0, 1.0);
    float gather = t * t * (3.0 - 2.0 * t);
    float cloudScale = mix(max(1.0, uIntro.y), 1.0, gather);

    // Work in the seed card's local frame so the opening follows the image as
    // the centre card begins its launch onto the ring.
    vec2 q = p - uPos[0];
    float a = uRot[0];
    float ca = cos(a), sa = sin(a);
    q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

    vec2 target = q / cloudScale;
    vec2 halfSize = max(uSize * 0.5, vec2(1.0));
    vec2 normalised = target / halfSize;
    float diamondD = abs(normalised.x) + abs(normalised.y) - 1.0;
    float boxD = max(abs(normalised.x), abs(normalised.y)) - 1.0;
    float shapeMorph = smoothstep(0.35, 0.92, gather);
    float shapeD = mix(diamondD, boxD, shapeMorph);
    if (shapeD > 0.0) return vec4(0.0);

    float cell = max(uIntro.z, 5.0);
    float radius = max(length(q), 1.0);
    float ripple = sin(
      uTime * 1.4 + (abs(q.x) + abs(q.y)) * 0.018
    );
    vec2 current = q +
      (q / radius) * ripple * cell * 0.38 * (1.0 - gather);
    vec2 gridP = current / cell;
    vec2 mirrored = abs(gridP);
    vec2 tile = floor(mirrored);
    vec2 glyphUv = fract(mirrored);
    float seed = hash21(tile + 71.19);

    vec2 imageUv = target / uSize + 0.5;
    imageUv.y = 1.0 - imageUv.y;
    imageUv = clamp(imageUv, 0.004, 0.996);
    vec3 art = uTextured > 0.5
      ? texture2D(uAtlas, atlasUV(imageUv, uScale[0].w)).rgb
      : uColor;
    float luminance = dot(art, vec3(0.2126, 0.7152, 0.0722));

    float imageInfluence = smoothstep(0.28, 0.88, gather);
    float density = mix(0.30, 0.90, gather);
    float present = step(seed, density);
    float glyphBase = 3.0 + seed * 2.0;
    float glyphImage =
      (1.0 - luminance) * 4.8 + gather * 1.35 + seed * 0.8;
    float glyph = floor(clamp(
      mix(glyphBase, glyphImage, imageInfluence),
      0.0, 6.0
    ));
    vec2 atlasP = vec2((glyph + glyphUv.x) / 7.0, glyphUv.y);
    float mask = texture2D(uAsciiTex, atlasP).a;

    float born = smoothstep(0.0, 0.09, t);
    float handoff = 1.0 - smoothstep(0.58, 0.96, t);
    float pulse = 0.82 + 0.18 * sin(uTime * 3.2 + seed * 6.2831853);
    float cloudEdge = 1.0 - smoothstep(-0.16, 0.0, shapeD);
    float alpha =
      mask * present * born * handoff * pulse * cloudEdge * uIntro.w;

    // Keep pale source pixels legible on the paper field without flattening
    // the image back to monochrome.
    vec3 particle = mix(uColor, mix(uColor, art, 0.68), imageInfluence);
    return vec4(particle, alpha);
  }

  vec4 singleCardParticles(vec2 p) {
    float gather = clamp(uIntro.x, 0.0, 1.0);
    float launch = clamp(uCardParticles.x, 0.0, 1.0);
    float enter = smoothstep(0.52, 0.94, gather);
    float leave = smoothstep(0.04, 0.76, launch);
    float life = enter * (1.0 - leave);
    if (life <= 0.001) return vec4(0.0);

    // The field belongs only to the seed card. It rotates and contracts with
    // that card, then dies before the fan starts opening into a ring.
    vec2 q = p - uPos[0];
    float a = uRot[0];
    float ca = cos(a), sa = sin(a);
    q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

    vec2 seedScale = max(uScale[0].xy, vec2(0.08));
    vec2 halfSize = max(uSize * 0.5 * seedScale, vec2(1.0));
    float cardD = sdRoundBox(q, halfSize, min(uRadius, halfSize.y));
    float reach = max(uCardParticles.y, 8.0);

    // A four-axis diamond holds the particles behind the card instead of
    // allowing a circular fog. The inner cutout keeps the photograph crisp.
    vec2 outerHalf = halfSize + vec2(reach * 1.35, reach);
    float diamondD =
      abs(q.x / outerHalf.x) + abs(q.y / outerHalf.y) - 1.0;
    float envelope = 1.0 - smoothstep(-0.10, 0.0, diamondD);
    float outside = smoothstep(1.5, 5.0, cardD);
    float falloff = 1.0 - smoothstep(0.0, reach, cardD);
    float field = envelope * outside * pow(max(falloff, 0.0), 0.72);
    if (field <= 0.001) return vec4(0.0);

    float cell = max(uCardParticles.z, 5.0);
    float radius = max(length(q), 1.0);
    vec2 direction = q / radius;

    // Positive travel pulls mirrored rows inward. The sign reverses on exit,
    // so the same glyphs visibly peel back out through the four diamond tips.
    float travel = enter * 2.2 - leave * 5.0 + uTime * 0.16 * life;
    vec2 particleP = q + direction * cell * travel;
    vec2 gridP = abs(particleP / cell);
    vec2 tile = floor(gridP);
    vec2 glyphUv = fract(gridP);
    float seed = hash21(tile + 143.57);

    float density = mix(0.12, 0.66, enter) *
                    mix(0.62, 1.0, pow(max(falloff, 0.0), 0.55));
    float present = step(seed, density);
    float glyph = floor(clamp(
      falloff * 5.2 + seed * 1.45,
      0.0, 6.0
    ));
    vec2 atlasP = vec2((glyph + glyphUv.x) / 7.0, glyphUv.y);
    float mask = texture2D(uAsciiTex, atlasP).a;

    float phase = hash21(tile + 29.31) * 6.2831853;
    float pulse = 0.76 + 0.24 * sin(uTime * 3.0 + phase);
    float alpha =
      mask * present * field * life * pulse * uCardParticles.w;
    return vec4(uColor, alpha);
  }

  vec4 hoveredCardParticles(vec2 p) {
    float amount = clamp(uFocusParticles.x, 0.0, 1.0);
    if (amount <= 0.001) return vec4(0.0);

    vec2 q = p - uFocusParticlePos;
    float a = uFocusParticleBox.w;
    float ca = cos(a), sa = sin(a);
    q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

    vec2 halfSize = max(uFocusParticleBox.xy, vec2(1.0));
    float cardD = sdRoundBox(q, halfSize, uFocusParticleBox.z);
    float reach = max(uFocusParticles.y, 8.0);

    // Restore the original loose shadow field: distance from the rounded card
    // controls density, with no geometric envelope and no mirrored quadrants.
    float outside = smoothstep(1.5, 5.0, cardD);
    float falloff = 1.0 - smoothstep(0.0, reach, cardD);
    float field = outside * pow(max(falloff, 0.0), 1.25);
    if (field <= 0.001) return vec4(0.0);

    float cell = max(uFocusParticles.z, 5.0);
    float radius = max(length(q), 1.0);
    vec2 direction = q / radius;
    float travel =
      (uFocusParticleMotion.x + amount * 3.6) * uFocusParticleMotion.y;
    vec2 drift = vec2(
      uTime * 0.45 * cell,
      sin(uTime * 1.7 + q.x * 0.013) * cell * 0.34
    ) * uFocusParticleMotion.y;
    vec2 particleP = q + direction * cell * travel + drift;
    vec2 gridP = particleP / cell;
    vec2 tile = floor(gridP);
    vec2 glyphUv = fract(gridP);
    float seed = hash21(tile + 223.41);

    float density = mix(0.10, 0.76, pow(max(falloff, 0.0), 0.72)) *
                    mix(0.28, 1.0, amount);
    float present = step(seed, density);
    float glyph = floor(clamp(
      falloff * 6.35 + (seed - 0.5) * 1.35,
      0.0, 6.0
    ));
    vec2 atlasP = vec2((glyph + glyphUv.x) / 7.0, glyphUv.y);
    float mask = texture2D(uAsciiTex, atlasP).a;

    float phase = hash21(tile + 47.13) * 6.2831853;
    float movingPulse = 0.74 + 0.26 * sin(uTime * 3.2 + phase);
    float pulse = mix(1.0, movingPulse, uFocusParticleMotion.y);
    float alpha =
      mask * present * field * amount * pulse * uFocusParticles.w;
    return vec4(uColor, alpha);
  }

  void main() {
    // Screen position, kept unbent: the tag is pinned to the cursor, so it is
    // placed and drawn here rather than in the lip's warped space.
    vec2 ps = (vUv - 0.5) * uResolution;

    vec2 p = ps;
    float bend = glassBend(p);

    // The tag refracts whatever is under it, so its warp has to be applied to
    // the sampling position before the field is read \u2014 the same order the lip
    // works in. Flat through the middle, bending hard at the rim, which is what
    // reads as a thickness of glass rather than a smear.
    float dTag = sdTag(ps);
    float tagOn = min(abs(uTag.z), abs(uTag.w));
    if (tagOn > 0.001 && dTag < 0.0 && uTagP.w > 0.0) {
      float depth = clamp(-dTag / max(uTagP.y * abs(uTag.w), 1.0), 0.0, 1.0);
      float t = 1.0 - depth;
      p += tagNormal(ps) * (1.0 - sqrt(max(0.0, 1.0 - t * t))) * uTagP.w;
    }

    // Read after the bend, so the cursor acts in the same warped space as the
    // ring: dragged into the lip, its influence is refracted with everything
    // else rather than sitting flat on top of it.
    float toMouse = length(p - uMouse.xy);

    // Blend strength is lifted in a halo around the cursor, so the ring goes
    // soft exactly where it is being touched and stays crisp everywhere else.
    // Resolved once per pixel rather than per plane: it costs one length().
    float k = uK;
    if (uMouse.z > 0.001) {
      float t = 1.0 - smoothstep(0.0, max(uMelt.x, 1.0), toMouse);
      k += uMouse.w * uMouse.z * t * t;
    }

    float d = 1e6;

    // The two planes nearest this pixel, tracked alongside the field so the
    // colour can be resolved without a second pass. In the goo between two
    // planes both are close, which is exactly where the crossfade belongs.
    float d0 = 1e6, d1 = 1e6;
    vec2 uv0 = vec2(0.5), uv1 = vec2(0.5);
    float im0 = 0.0, im1 = 0.0;
    float dm0 = 1.0, dm1 = 1.0;

    float halfSpan = length(uSize) * 0.5;

    for (int i = 0; i < MAX_PLANES; i++) {
      if (float(i) >= uCount) break;

      vec4 st = uScale[i];
      vec2 sc = st.xy;
      float grown = max(sc.x, sc.y);
      if (grown <= 0.0001) continue;

      vec2 q = p - uPos[i];
      // Anything further out than this cannot affect the surface, so it can be
      // skipped outright \u2014 this is what keeps 32 planes affordable. Scaled by
      // the plane rather than fixed, because a plane swollen under the cursor
      // reaches further than its resting size, as does the melt around it.
      float cull = halfSpan * grown + k + uWobble + 8.0;
      if (dot(q, q) > cull * cull) continue;

      // into the plane's local frame
      float a  = uRot[i];
      float ca = cos(a), sa = sin(a);
      q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

      vec2 halfSize = max(uSize * 0.5 * sc, vec2(0.0001));

      // starts as a circle (r = half extent), relaxes into the rounded rect
      float rMax = min(halfSize.x, halfSize.y);
      float r = min(rMax, mix(rMax, uRadius, smoothstep(0.30, 1.0, min(sc.x, sc.y))));

      float di = sdRoundBox(q, halfSize, r);
      d = smin(d, di, k);

      // Local UV. Clamped, so the goo outside a plane carries that plane's
      // edge colour rather than repeating or sampling the next atlas cell.
      vec2 luv = q / (2.0 * halfSize) + 0.5;
      luv.y = 1.0 - luv.y;
      luv = clamp(luv, 0.004, 0.996);

      if (di < d0) {
        d1 = d0; uv1 = uv0; im1 = im0; dm1 = dm0;
        d0 = di; uv0 = luv; im0 = st.w; dm0 = st.z;
      } else if (di < d1) {
        d1 = di; uv1 = luv; im1 = st.w; dm1 = st.z;
      }
    }

    // Threads strung between neighbours as they pull apart.
    for (int i = 0; i < MAX_LINKS; i++) {
      if (float(i) >= uLinkCount) break;

      vec4 par = uLinkPar[i];
      // Radii are allowed to go negative: that lifts the bridge's field clear
      // of the surface so it fades out, rather than bottoming out at zero as a
      // half-covered hairline. Only cull once it is further out than the
      // antialiasing can reach.
      if (par.x <= -3.0) continue;

      vec2 a = uLinkA[i];
      vec2 b = uLinkB[i];
      vec2 mid = (a + b) * 0.5;
      float reach = length(b - a) * 0.5 + par.x + par.w + 8.0;
      if (dot(p - mid, p - mid) > reach * reach) continue;

      d = smin(d, sdBridge(p, a, b, par.x, par.y, par.z), par.w);
    }

    // Surface tension wobble, decays to zero so resting planes are dead flat.
    if (uWobble > 0.001) {
      float n = snoise(p * 0.012 + vec2(uTime * 0.22, uTime * -0.17));
      d += n * uWobble;
    }

    // A capillary wake off the cursor, amplitude driven by how fast it is
    // moving. Rings out from it and dies over the same reach the softening
    // uses, so a flick leaves a ripple in the surface that outlives the
    // movement that made it.
    if (uMelt.y > 0.001) {
      d += sin(toMouse * uMelt.z - uTime * uMelt.w)
         * uMelt.y * exp(-toMouse / max(uMelt.x, 1.0));
    }

    // Clamped, not just floored: the distance cull above leaves a step in the
    // field, and an unclamped fwidth across that step paints a half-opaque
    // outline along every cull boundary.
    float aa = clamp(fwidth(d), 0.5, 2.0);
    float alpha = 1.0 - smoothstep(-aa, aa, d);

    vec4 intro = vec4(0.0);
    if (uIntro.w > 0.001 && uIntro.x < 0.999) {
      intro = introParticles(p);
    }
    vec4 cardParticles = vec4(0.0);
    if (
      uCardParticles.w > 0.001 &&
      uIntro.x > 0.48 &&
      uCardParticles.x < 0.80
    ) {
      cardParticles = singleCardParticles(p);
    }
    vec4 focusParticles = vec4(0.0);
    if (uFocusParticles.x > 0.001) {
      focusParticles = hoveredCardParticles(p);
    }

    // The tag has to survive this: it can overhang the edge of a card, and
    // those pixels are its own even though the ring has nothing there.
    float taa = clamp(fwidth(dTag), 0.5, 2.0);
    float ta = tagOn > 0.001 ? 1.0 - smoothstep(-taa, taa, dTag) : 0.0;

    if (
      alpha <= 0.001 &&
      ta <= 0.001 &&
      focusParticles.a <= 0.001 &&
      cardParticles.a <= 0.001 &&
      intro.a <= 0.001
    ) discard;

    // Even mix where the two nearest planes are equidistant, resolving to
    // whichever is clearly nearer beyond uBlend. Both the art and the dim are
    // carried across on it, so neither can put a seam down the goo.
    float nearest = smoothstep(-uBlend, uBlend, d1 - d0);

    vec3 col = uColor;
    if (uTextured > 0.5) {
      vec3 c0, c1;

      // Uniform branch, so the derivatives the mip selection needs stay
      // defined. The offset is scaled by bend, so outside the lip the three
      // taps land on the same texel and there is no fringe.
      if (uFringe > 0.0) {
        vec2 fr = vec2(uFringe * bend / max(uSize.x, 1.0), 0.0);
        c0 = vec3(
          texture2D(uAtlas, atlasUV(uv0 + fr, im0)).r,
          texture2D(uAtlas, atlasUV(uv0, im0)).g,
          texture2D(uAtlas, atlasUV(uv0 - fr, im0)).b
        );
        c1 = vec3(
          texture2D(uAtlas, atlasUV(uv1 + fr, im1)).r,
          texture2D(uAtlas, atlasUV(uv1, im1)).g,
          texture2D(uAtlas, atlasUV(uv1 - fr, im1)).b
        );
      } else {
        c0 = texture2D(uAtlas, atlasUV(uv0, im0)).rgb;
        c1 = texture2D(uAtlas, atlasUV(uv1, im1)).rgb;
      }

      col = mix(c1, c0, nearest);
    }

    // Cards standing off the one being pointed at are turned down, so the
    // hovered card reads as the lit one. Untextured, uColor is already almost
    // black and there is nothing here to see \u2014 which is fine, that mode exists
    // to read the goo's silhouette.
    col *= mix(dm1, dm0, nearest);

    // A touch of lift where the lip is steepest, so the band reads as a
    // surface catching light rather than only a warp.
    col += bend * uSheen;

    // Composite both particle phases behind the photographic surface. This
    // keeps antialiased card edges clean instead of tinting them like an
    // outline, and prevents the field from following the completed ring.
    if (cardParticles.a > 0.001) {
      float combined = alpha + cardParticles.a * (1.0 - alpha);
      col = (col * alpha +
             cardParticles.rgb * cardParticles.a * (1.0 - alpha)) /
            max(combined, 0.0001);
      alpha = combined;
    }
    if (focusParticles.a > 0.001) {
      float combined = alpha + focusParticles.a * (1.0 - alpha);
      col = (col * alpha +
             focusParticles.rgb * focusParticles.a * (1.0 - alpha)) /
            max(combined, 0.0001);
      alpha = combined;
    }
    if (intro.a > 0.001) {
      float combined = alpha + intro.a * (1.0 - alpha);
      col = (col * alpha + intro.rgb * intro.a * (1.0 - alpha)) /
            max(combined, 0.0001);
      alpha = combined;
    }
    // --- the tag -------------------------------------------------------------
    if (ta > 0.001) {
        // Where the ring does not reach, the page is what shows through the
        // glass, so the label has something real to read there too.
        vec3 under = mix(uPage, col, alpha);
        vec3 glass = mix(under, vec3(1.0), uTagQ.x);

        // Rim: lit where it faces the light, dark where it turns away. Signing
        // it is what gives an edge that reads as thickness rather than as an
        // outline drawn on.
        float band = clamp(1.0 + dTag / max(uTagP.z, 1.0), 0.0, 1.0);
        glass += band * band * uTagQ.y *
                 dot(tagNormal(ps), vec2(-0.7071, 0.7071));

        // The label. Pure black or pure white, decided per pixel from what that
        // pixel is sitting on, so a glyph crossing a light edge onto a dark one
        // changes colour halfway across. A blend cannot do this \u2014 inverting a
        // mid grey returns a mid grey \u2014 and picking one colour for the whole
        // label cannot either.
        vec2 tuv = (ps - uTag.xy) / (uTagP.xy * 2.0 * abs(uTag.zw)) + 0.5;
        float m = texture2D(uTagTex, clamp(tuv, 0.0, 1.0)).a;
        float l = dot(glass, vec3(0.2126, 0.7152, 0.0722));
        // Narrow, not hard: a step here would alias along the boundary.
        glass = mix(glass, vec3(1.0 - smoothstep(0.46, 0.54, l)), m);

      col = mix(col, glass, ta);
      alpha = max(alpha, ta);
    }

    // Written straight through. The atlas is tagged NoColorSpace so sampling
    // returns the authored sRGB values, and this shader adds no output
    // encoding of its own \u2014 decoding on read without encoding on write is
    // what darkens everything.
    gl_FragColor = vec4(col, alpha);
  }
`;var mA=[{file:"coffee/tide-isle.png",name:"Tide Isle",type:"Autumn",year:"2026"},{file:"coffee/miss-coco.png",name:"Miss Coco",type:"Summer",year:"2023"},{file:"coffee/watermelon.png",name:"Watermelon",type:"Summer",year:"2026"},{file:"coffee/supernova-natural.png",name:"Supernova Natural",type:"Autumn",year:"2026"}],Ii=Array.from({length:18},(e,t)=>({...mA[t%mA.length],id:`coffee-${t+1}`})),Am=Ii.map(e=>e.file);var Mh=5/3;function gA(){return{refWidth:1512,refHeight:870,fitHeight:0,minScale:.5,maxScale:1.75,narrowAt:1024,narrowPlane:1.25,narrowRadius:1.3,narrowText:1.5,narrowPosX:-2.5,narrowEndScale:4.22,tightAt:640,tightHeight:480,tightPlane:1.25,tightCardWidth:.78,tightCardHeight:.34,tightPixelRatio:1.5,tightIntroRadius:.75,tightPosY:.05,tightSwipeSlots:2,tightRadius:.82,tightPosX:-3.5,tightSplit:.8,tightName:1.5,tightNameBottom:16,tightNameRight:16,tightMetaWidth:70,planeSize:90,count:Ii.length,ringRadius:340,seed:0,radial:!0,radius:6,textured:!0,blend:14,imageOffset:0,holdAfter:0,loaderChase:.18,loaderBottom:1,loaderOut:.45,stagger:.34,launchTime:1.95,spreadEase:"power2.out",spreadTime:3.6,stageAt:.7,spinTurns:1,spinTime:2.6,spinEase:"power2.inOut",spinDelay:0,posX:-2,posY:0,endScale:4.46,moveTime:2.2,moveEase:"power2.inOut",moveDelay:.2,scrollSpeed:.0022,damping:.94,maxSpeed:12,dragSpeed:1,snap:!0,snapTime:.8,snapFrom:1,pickTime:.55,pickEase:"power3.inOut",text:"SENSES COFFEE",textSize:41,textFont:"Satoshi",textWeight:400,textTracking:0,textColor:"#0a0a0a",textAt:.42,textTime:.95,textStagger:.015,textEase:"power4.out",textOut:!0,textOutAt:-.5,textOutTime:.7,textOutEase:"power2.in",metaLeft:5.5,metaRight:5.5,metaGapL:4.7,metaGapR:3.6,metaWidth:34,nameSize:24/1440*100,nameFont:"Satoshi",nameWeight:500,idxSize:16/1440*100,idxFont:"Geist",idxWeight:400,listSize:.9,nameMorphTime:1.2,nameEase:"circ.out",nameBlur:8.5,nameEdge:400,nameCut:.33,nameSoften:.35,glass:!0,bandTop:.08,bandBottom:.08,refract:60,squeeze:.05,ripple:5,rippleFreq:.02,fringe:1.5,sheen:.05,hover:!0,touchHold:.16,touchSlop:10,lag:.3,melt:34,meltReach:260,reach:1.7,swell:.09,pull:26,grab:.14,release:.06,web:.2,webReach:1.15,wave:4,waveFreq:.05,waveSpeed:7,sideScale:.035,sidePush:17,sideDim:.15,sideReach:2.4,focusParticles:!0,focusParticleFrom:1024,focusParticleReach:82,focusParticleCell:11,focusParticleOpacity:.58,focusParticleEnter:.16,focusParticleExit:.11,focusParticleDrift:.7,focusParticleOut:3.2,assemble:!0,assembleFrom:1024,assembleTime:1.55,assembleEase:"power3.inOut",assembleSpread:3.8,assembleCardScale:2.6,assembleCell:13,assembleOpacity:.96,assembleHaloReach:148,assembleHaloOpacity:.72,tagFrom:1024,tagText:"View",tagSize:14,tagWeight:500,tagArrow:14,tagGap:6,tagX:64,tagY:-38,tagFrost:.16,tagRim:.02,tagRefract:39.5,thread:1,thin:.4,pinch:.35,sag:6,dissolve:2.9,fillet:14,wobble:3,goo:35}}var gc=512,bh=Math.round(gc/Mh),XP=(e,t)=>new Promise((n,i)=>{let s=new Image;t&&(s.fetchPriority=t),s.onload=()=>n(s),s.onerror=()=>i(new Error(`failed to load ${e}`)),s.src=e});function _A(e=Am,t){let n=Math.ceil(Math.sqrt(e.length)),i=Math.ceil(e.length/n),s=document.createElement("canvas");s.width=n*gc,s.height=i*bh;let a=s.getContext("2d"),r=new ds(s);r.flipY=!1,r.colorSpace=Cn,r.wrapS=wi,r.wrapT=wi,r.minFilter=Hs,r.magFilter=Se,r.generateMipmaps=!0;let o=(d,f)=>{let _=f%n*gc,g=Math.floor(f/n)*bh,p=Math.max(gc/d.width,bh/d.height),v=d.width*p,S=d.height*p;a.save(),a.beginPath(),a.rect(_,g,gc,bh),a.clip(),a.drawImage(d,_+(gc-v)/2,g+(bh-S)/2,v,S),a.restore()},l=0,c=()=>t?.(l/e.length),u=(d,f)=>XP(window.__ICE_ASSETS__?.[e[d]]??`/${e[d]}`,f).then(_=>o(_,d)).catch(_=>console.warn("[atlas]",_.message)).finally(()=>{l++,c()}),m=u(0,"high").then(()=>{r.needsUpdate=!0}),h=Promise.all([m,...e.slice(1).map((d,f)=>u(f+1,"low"))]).then(()=>{r.needsUpdate=!0});return c(),{texture:r,grid:[n,i],count:e.length,first:m,ready:h}}var WP=["left","right"],vA=2,_c=e=>e?.firstElementChild?.children;function xA(e,t,n){e&&(t>=1?(e.style.filter="none",e.style.opacity="1"):t<=0?(e.style.filter="none",e.style.opacity="0"):(e.style.filter=`blur(${Math.min(n/t-n,100)}px)`,e.style.opacity=`${Math.pow(t,.4)}`))}function yA(e,t,n){let i={t:1},s=["",""],a=[!1,!1],r=()=>{let l=t[e];if(!l)return;let c=_c(l.layers[0]),u=_c(l.layers[1]),m=_c(l.plain),h=i.t;for(let d=0;d<vA;d++)a[d]?(xA(c?.[d],1-h,n.nameBlur),xA(u?.[d],h,n.nameBlur),m?.[d]&&(m[d].style.opacity="0")):(c?.[d]&&(c[d].style.opacity="0"),u?.[d]&&(u[d].style.opacity="0"),m?.[d]&&(m[d].style.opacity="1"));l.goo&&(l.goo.style.filter=h>=1?"none":`url(#name-goo) blur(${n.nameSoften}px)`)};return{m:i,set:l=>{let c=t[e];if(!c?.layers[0]||!c.layers[1]||!c.plain)return;qe.killTweensOf(i),i.t=1,r();let u=[l[0]??"",l[1]??""];a=[u[0]!==s[0],u[1]!==s[1]];let m=_c(c.layers[0]),h=_c(c.layers[1]),d=_c(c.plain);for(let f=0;f<vA;f++)m?.[f]&&(m[f].textContent=s[f]),h?.[f]&&(h[f].textContent=u[f]),d?.[f]&&(d[f].textContent=u[f]);if(s=u,!a[0]&&!a[1]){i.t=1,r();return}i.t=0,r(),qe.to(i,{t:1,duration:n.nameMorphTime,ease:n.nameEase,onUpdate:r})}}}function SA(e,t){let{groups:n,list:i,loader:s,cut:a,live:r}=e,o=yA("left",n,t),l=yA("right",n,t),c=()=>{a?.setAttribute("values",`1 0 0 0 0
       0 1 0 0 0
       0 0 1 0 0
       0 0 0 ${t.nameEdge} ${-t.nameEdge*t.nameCut}`)};return{show:d=>{let f=Ii[d];f&&(o.set([String(d+1).padStart(2,"0"),f.name]),l.set([f.type,f.year]),r&&(r.textContent=`${f.name}. ${f.type}, ${f.year}.`))},style:({textK:d,tight:f,viewW:_})=>{let g=t.nameSize*d*(f?t.tightName:1),p=`${g}vw`,v=`${t.idxSize*d}vw`,S=`"${t.nameFont}", ui-sans-serif, system-ui, sans-serif`,x=`"${t.idxFont}", ui-sans-serif, system-ui, sans-serif`,T=`${t.nameWeight}`,b=`${t.idxWeight}`,A=g*3;for(let y of WP){let E=n[y];if(!E?.box)continue;let C=y==="right",D=f&&!C;if(f&&C){E.box.style.display="none";continue}if(E.box.style.display="",E.box.style.width=`${D?t.tightMetaWidth:t.metaWidth}vw`,E.box.style.height=`${A}vw`,D){let N=A*_/100,H=g*_/100;E.box.style.top="auto",E.box.style.left="auto",E.box.style.right=`${t.tightNameRight}px`,E.box.style.bottom=`${t.tightNameBottom+H*.5-N*.5}px`,E.box.style.transform="none"}else E.box.style.top="",E.box.style.bottom="",E.box.style.transform="",E.box.style.left=C?"auto":`${t.metaLeft}vw`,E.box.style.right=C?`${t.metaRight}vw`:"auto";for(let N of[...E.layers,E.plain]){if(!N)continue;N.style.justifyContent=D||C?"flex-end":"flex-start";let H=N.firstElementChild;H.style.gap=`${C?t.metaGapR:t.metaGapL}vw`;let[W,O]=H.children;W.style.display=D?"none":"",W.style.fontFamily=C?S:x,W.style.fontSize=C?p:v,W.style.fontWeight=C?T:b,O.style.fontFamily=C?x:S,O.style.fontSize=C?v:p,O.style.fontWeight=C?b:T}}i&&(i.style.fontSize=`${t.listSize*d}vw`),s&&(s.style.bottom=`${t.loaderBottom}vh`,s.style.fontFamily=x,s.style.fontSize=v,s.style.fontWeight=b),c()},setThreshold:c,dispose:()=>{qe.killTweensOf(o.m),qe.killTweensOf(l.m)}}}var MA=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,bA=`
  precision highp float;

  varying vec2 vUv;

  uniform sampler2D uTex;
  uniform float uReveal;
  uniform vec3  uColor;
  uniform float uOpacity;

  void main() {
    float gy = vUv.y + 1.0 - uReveal;
    if (gy > 1.0 || gy < 0.0) discard;

    float a = texture2D(uTex, vec2(vUv.x, gy)).a;
    if (a <= 0.001) discard;

    gl_FragColor = vec4(uColor, a * uOpacity);
  }
`;function TA(e,t){let n=[],i=[],s=()=>{for(let r of[...e.children])e.remove(r),r.geometry.dispose(),r.material.uniforms.uTex.value?.dispose(),r.material.dispose();n=[],i=[]};return{build:()=>{s();let r=t.textSize,o=Math.min(window.devicePixelRatio,2)*2,l=`${t.textWeight} ${r}px "${t.textFont}", ui-sans-serif, system-ui, sans-serif`,c=document.createElement("canvas").getContext("2d");c.font=l;let u=[...t.text],m=u.map(p=>c.measureText(p).width),h=t.textTracking*r,d=m.reduce((p,v)=>p+v,0)+h*(u.length-1),f=r*.25,_=r*1.3+f*2,g=-d/2;u.forEach((p,v)=>{let S=m[v];if(p.trim()){let x=S+f*2,T=document.createElement("canvas");T.width=Math.max(1,Math.ceil(x*o)),T.height=Math.max(1,Math.ceil(_*o));let b=T.getContext("2d");b.scale(o,o),b.font=l,b.textBaseline="alphabetic",b.fillStyle="#000",b.fillText(p,f,f+r);let A=new ds(T);A.colorSpace=Cn,A.minFilter=Se,A.magFilter=Se,A.generateMipmaps=!1;let y=new wn({vertexShader:MA,fragmentShader:bA,uniforms:{uTex:{value:A},uReveal:{value:0},uColor:{value:new Zt(t.textColor)},uOpacity:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1}),E=new Fn(new Ra(1,1),y);E.scale.set(x,_,1),E.position.set(g+S/2,0,0),E.renderOrder=0,e.add(E),n.push(y.uniforms.uReveal),i.push(y.uniforms.uOpacity)}g+=S+h})},dispose:s,get chars(){return n},get fades(){return i}}}var wm=104,vc=40;function EA(e,t){let n={sx:.5,sy:0},i=new Image,s=!1,a=null;return{box:n,build:()=>{let u=Math.min(window.devicePixelRatio,2)*2,m=document.createElement("canvas");m.width=Math.ceil(wm*u),m.height=Math.ceil(vc*u);let h=m.getContext("2d");h.scale(u,u),h.font=`${e.tagWeight} ${e.tagSize}px "${e.textFont}", ui-sans-serif, system-ui, sans-serif`,h.textBaseline="middle",h.fillStyle="#fff";let d=h.measureText(e.tagText).width,f=e.tagArrow+e.tagGap+d,_=(wm-f)*.5;if(h.fillText(e.tagText,_+e.tagArrow+e.tagGap,vc*.5),s){let g=(vc-e.tagArrow)*.5;h.drawImage(i,_,g,e.tagArrow,e.tagArrow)}a?.dispose(),a=new ds(m),a.colorSpace=Cn,a.minFilter=Se,a.magFilter=Se,a.generateMipmaps=!1,t.uTagTex.value=a},show:u=>{qe.killTweensOf(n),u?(qe.to(n,{sx:1,duration:.62,ease:"elastic.out(1, 0.5)"}),qe.to(n,{sy:1,duration:.74,ease:"elastic.out(1, 0.42)"})):qe.to(n,{sx:.5,sy:0,duration:.28,ease:"power3.in"})},load:u=>{i.onload=()=>{s=!0,u?.()},i.src=window.__ICE_ASSETS__?.["arrow-top-right-svgrepo-com.svg"]??"/arrow-top-right-svgrepo-com.svg"},dispose:()=>{qe.killTweensOf(n),a?.dispose()}}}var Lx=".:+x*#@";function AA(){let t=document.createElement("canvas");t.width=128*Lx.length,t.height=128;let n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="#ffffff",n.font="700 84px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",n.textAlign="center",n.textBaseline="middle";for(let s=0;s<Lx.length;s++)n.fillText(Lx[s],s*128+128*.5,128*.51);let i=new ds(t);return i.colorSpace=Cn,i.minFilter=Se,i.magFilter=Se,i.generateMipmaps=!1,i.needsUpdate=!0,i}var Js=Math.PI*2,wA=Math.PI/2,Cm=Math.PI/180,Un=e=>e<0?0:e>1?1:e,Th=e=>1-Math.pow(1-e,3),CA=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Oa=(e,t,n)=>{let i=Un((n-e)/(t-e));return i*i*(3-2*i)},Bo=e=>e===0?0:e%2===1?(e+1)/2:-e/2,Fo=(e,t)=>1-Math.pow(1-t,e*60);var oe=Wr(Eh(),1),NA=.06,ZP=()=>{let e=new Mo(new Uint8Array([255,255,255,255]),1,1);return e.needsUpdate=!0,e};function Px(){let e=(0,Bi.useRef)(null),t=(0,Bi.useRef)(null),n=(0,Bi.useRef)([]),i=(0,Bi.useRef)(null),s=(0,Bi.useRef)(null),a=(0,Bi.useRef)(null),r=(0,Bi.useRef)(null),o=(0,Bi.useRef)(null),l=(0,Bi.useRef)(null),c=(0,Bi.useRef)({left:{box:null,goo:null,layers:[],plain:null},right:{box:null,goo:null,layers:[],plain:null}});return(0,Bi.useEffect)(()=>{let u=e.current,m=t.current,h=i.current,d=!1,f=gA(),_={progress:0,launch:0,spread:0,spin:0,shift:0},g={restingGap:0,window:"",scale:1,band:"wide"},p;try{p=new rm({antialias:!0,alpha:!0})}catch(k){console.error("[ring] could not create a WebGL context:",k);return}p.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.appendChild(p.domElement);let v=new zu,S=new bo(-1,1,1,-1,-100,100),x=AA(),T=window.matchMedia("(prefers-reduced-motion: reduce)"),b={uResolution:{value:new Ht(1,1)},uSize:{value:new Ht(150,100)},uRadius:{value:f.radius},uCount:{value:f.count},uPos:{value:Array.from({length:32},()=>new Ht)},uRot:{value:new Float32Array(32)},uScale:{value:Array.from({length:32},()=>new ne(0,0,1,0))},uLinkCount:{value:0},uLinkA:{value:Array.from({length:32},()=>new Ht)},uLinkB:{value:Array.from({length:32},()=>new Ht)},uLinkPar:{value:Array.from({length:32},()=>new ne)},uK:{value:f.goo},uWobble:{value:f.wobble},uTime:{value:0},uColor:{value:new Zt("#0a0a0a")},uAtlas:{value:ZP()},uGrid:{value:new Ht(1,1)},uBlend:{value:f.blend},uTextured:{value:0},uBandTop:{value:0},uBandBottom:{value:0},uGlass:{value:new ne},uFringe:{value:0},uSheen:{value:0},uMouse:{value:new ne},uMelt:{value:new ne},uAsciiTex:{value:x},uIntro:{value:new ne(1,1,12,0)},uCardParticles:{value:new ne(1,0,12,0)},uFocusParticlePos:{value:new Ht},uFocusParticleBox:{value:new ne},uFocusParticles:{value:new ne},uFocusParticleMotion:{value:new Ht},uTagTex:{value:new Mo(new Uint8Array([0,0,0,0]),1,1)},uTag:{value:new ne},uTagP:{value:new ne},uTagQ:{value:new ne},uPage:{value:new Zt("#fafafa")}},A=new Fn(new Ra(1,1),new wn({vertexShader:dA,fragmentShader:pA,uniforms:b,transparent:!0,depthWrite:!1}));A.renderOrder=10,v.add(A);let y=new Ea;v.add(y);let E=TA(y,f),C=EA(f,b),D=SA({groups:c.current,list:m,loader:h,cut:a.current,live:s.current},f),N=!1,H=0,W=!1,O=[],q=k=>W?k():O.push(k),B=_A(Am,k=>{d||(H=k)});b.uAtlas.value.dispose(),B.texture.anisotropy=p.capabilities.getMaxAnisotropy(),b.uAtlas.value=B.texture,b.uGrid.value.set(B.grid[0],B.grid[1]);let J=B.count;B.first.then(()=>{d||(N=!0)}),B.ready.then(()=>{d||(H=1)});let $=1,at=1,ft={left:0,top:0},lt=1,kt=1,Qt=1,zt=1,tt=!1,ct=!1,ot=()=>{let k=$/Math.max(1,f.refWidth),Q=at/Math.max(1,f.refHeight),it=k*(1-f.fitHeight)+Math.min(k,Q)*f.fitHeight;lt=Math.min(f.maxScale,Math.max(f.minScale,it));let st=$<=f.narrowAt,ut=$<=f.tightAt||st&&at<=f.tightHeight;if(tt=st,ct=ut,kt=(st?f.narrowPlane:1)*(ut?f.tightPlane:1),ut){let wt=f.planeSize*kt*f.narrowEndScale;lt=Math.min($*f.tightCardWidth/wt,at*f.tightCardHeight*Mh/wt)}Qt=(st?f.narrowRadius:1)*(ut?f.tightRadius:1),zt=st?f.narrowText:1,g.window=`${Math.round($)} x ${Math.round(at)}`,g.scale=Math.round(lt*1e3)/1e3,g.band=ut?"tight":st?"narrow":"wide";let At=lt*zt*(ut?f.tightSplit:1);y.scale.set(At,At,1)},Nt=()=>D.style({textK:zt,tight:ct,viewW:$}),It=()=>{$=u.clientWidth,at=u.clientHeight,ot(),u.classList.toggle("phone-stage",ct),p.setPixelRatio(Math.min(window.devicePixelRatio,ct?f.tightPixelRatio:2)),p.setSize($,at),S.left=-$/2,S.right=$/2,S.top=at/2,S.bottom=-at/2,S.updateProjectionMatrix(),A.scale.set($,at,1),b.uResolution.value.set($,at);let k=p.domElement.getBoundingClientRect();ft.left=k.left,ft.top=k.top},Rt=()=>{It(),Nt()};It(),window.addEventListener("resize",Rt),window.visualViewport?.addEventListener("resize",Rt);let Ee={x:0,y:0},Xt=0,Yt=!1,Ut=0,Wt=!1,Ie=0,Ve=0,He=null,en=0,Re=0,fe=!1,L=0,dn=0,jt=!1,R=0,M=0,I=0,G=k=>{let Q=k.clientX-ft.left-Ee.x,it=k.clientY-ft.top-Ee.y;return Math.atan2(-it,Q)},Z=()=>{jt&&(qe.killTweensOf(_),jt=!1)},ht=k=>{let Q=Js/Math.round(f.count),it=Xt-f.seed*Cm-Bo(k)*Q,st=it+Math.round((_.spin-it)/Js)*Js,ut=Math.abs(st-_.spin)/Q;ut<.01||(Ut=0,fe=!1,jt=!0,qe.killTweensOf(_),qe.to(_,{spin:st,duration:f.pickTime*Math.sqrt(Math.max(1,ut)),ease:f.pickEase,onComplete:()=>{jt=!1}}))},rt={x:0,y:0,inside:!1,seeded:!1},V={x:0,y:0,amt:0,wake:0},K=!1,dt=!1,bt=0,_t=()=>{clearTimeout(bt),bt=0,dt=!1},gt=()=>{clearTimeout(bt),bt=setTimeout(()=>{dt=!0},f.touchHold*1e3)},Ct=()=>K?dt:rt.inside,Dt=k=>{K=k.pointerType==="touch",rt.x=k.clientX-ft.left-$*.5,rt.y=at*.5-(k.clientY-ft.top),rt.inside=!0,rt.seeded||(rt.seeded=!0,V.x=rt.x,V.y=rt.y)},Bt=()=>{rt.inside=!1},U=k=>{if(!Yt)return;k.preventDefault();let Q=Math.abs(k.deltaX)>Math.abs(k.deltaY)?k.deltaX:k.deltaY;Z(),fe=!1,Ut+=Q*f.scrollSpeed,Ut=Math.max(-f.maxSpeed,Math.min(f.maxSpeed,Ut))},pt=k=>{R=0,M=k.clientX,I=k.clientY,en=k.clientX,Re=k.clientY,He=null,Dt(k),Yt&&(Z(),K&&gt(),Wt=!0,fe=!1,Ut=0,Ie=G(k),Ve=performance.now(),p.domElement.setPointerCapture?.(k.pointerId))},j=k=>{Dt(k);let Q=k.clientX-M,it=k.clientY-I;if(R+=Math.abs(k.clientX-M)+Math.abs(k.clientY-I),M=k.clientX,I=k.clientY,K&&!dt&&R>f.touchSlop&&_t(),!Wt)return;let st=G(k),ut=st-Ie;if(ut>Math.PI&&(ut-=Js),ut<-Math.PI&&(ut+=Js),K&&ct&&!He){if(R<=f.touchSlop)return;He=Math.abs(k.clientX-en)>=Math.abs(k.clientY-Re)?"x":"y"}let At=K&&ct?-(He==="x"?Q:it)*(Js/f.count)*f.tightSwipeSlots/Math.max(1,$):ut*f.dragSpeed;_.spin+=At;let wt=performance.now();Ut=At/(Math.max(8,wt-Ve)/1e3),Ut=Math.max(-f.maxSpeed,Math.min(f.maxSpeed,Ut)),Ie=st,Ve=wt},mt=k=>{Dt(k),_t(),Wt&&(Wt=!1,p.domElement.releasePointerCapture?.(k.pointerId))},vt=()=>{!Yt||R>=5||is<0||ht(is)};u.addEventListener("wheel",U,{passive:!1}),u.addEventListener("pointerdown",pt),u.addEventListener("pointermove",j),u.addEventListener("pointerup",mt),u.addEventListener("pointercancel",mt),u.addEventListener("pointerleave",Bt),u.addEventListener("click",vt);let nt=k=>{let Q=f.hover&&Ct()&&rt.seeded&&Yt;V.amt+=((Q?1:0)-V.amt)*Fo(k,.12);let it=Fo(k,f.lag);V.x+=(rt.x-V.x)*it,V.y+=(rt.y-V.y)*it;let st=Math.hypot(rt.x-V.x,rt.y-V.y);V.wake=Math.max(V.wake*Math.pow(.94,k*60),Un(st/(Math.max(k,.001)*2600))),b.uMouse.value.set(V.x,V.y,V.amt,f.melt*lt),b.uMelt.value.set(f.meltReach*lt,f.wave*lt*V.wake*V.amt,f.waveFreq,f.waveSpeed)},Et={shown:0},Tt=k=>{let Q=Math.min(H,Un(_.progress));Et.shown+=(Q-Et.shown)*Fo(k,f.loaderChase);let it=Math.min(100,Math.max(1,Math.round(Et.shown*100)));if(h&&(h.textContent=String(it).padStart(3,"0")),!W&&it>=100){W=!0;for(let st of O)st();O.length=0}},De=new Float32Array(32),le=new Float32Array(32),Nn=[],kn=Array.from({length:32},()=>new Ht),Gr=new Float32Array(32),kr=new Float32Array(32),Ia=new Float32Array(32),Ba=new Float32Array(32),vs=new Float32Array(32),Fa=new Ht,zo=k=>Math.max(.05,1+f.swell*Gr[k]-f.sideScale*vs[k]),pn=-1,Xr=-1,is=-1,yc=!1,Ln=-1,Ks=0,xs=0,Ah=()=>{let k=l.current,Q=Ii[pn];k&&Q&&(k.querySelector(".mobile-name").textContent=Q.name,k.querySelector(".mobile-detail").textContent=`${Q.type} \xB7 ${Q.year}`,k.querySelector(".mobile-count").textContent=`${String(pn+1).padStart(2,"0")} / ${Ii.length}`);let it=n.current;for(let st=0;st<it.length;st++){let ut=it[st];if(!ut)continue;let At=st===pn;ut.style.opacity=At?"1":"0.2",At?ut.setAttribute("aria-current","true"):ut.removeAttribute("aria-current")}};o.current=k=>{if(!Yt)return;let Q=Math.round(f.count),it=(Math.max(0,pn)+k+Q)%Q;for(let st=0;st<Q;st++)if((-Bo(st)%Q+Q)%Q===it){ht(st);break}};let wh=k=>{let Q=Math.round(f.count);b.uCount.value=Q;let it=Js/Q,st=Un(_.spread),ut=tt?f.narrowEndScale:f.endScale,At=ct?f.tightPosX:tt?f.narrowPosX:f.posX,wt=Un(_.shift),Mt=(1+(ut-1)*wt)*lt,$t=ct?-f.ringRadius*Qt*ut*lt*wt:At*$*.5*wt,Ae=ct?f.tightPosY*at*wt:f.posY*at*.5*wt,de=f.assemble&&$>f.assembleFrom&&!T.matches,pe=de?1+(f.assembleCardScale-1)*(1-Oa(.05,.82,_.launch)):1;Ee.x=$*.5+$t,Ee.y=at*.5-Ae,Xt=$t!==0||Ae!==0?Math.atan2(-Ae,-$t):0;let we=f.planeSize*kt*Mt*pe,yt=we/Mh;b.uSize.value.set(we,yt),b.uRadius.value=f.radius*kt*Mt;let Pn=f.radial?yt:we,ie=f.radial?we:yt,Xn=f.ringRadius*Qt*Mt*(ct?f.tightIntroRadius+(1-f.tightIntroRadius)*wt:1),di=2*Xn*Math.sin(it/2)-Pn;g.restingGap=Math.round(di/Mt*10)/10;let ys=Math.max(1,di),Qs=Math.max(1,Math.abs(Bo(Q-1))),me=Math.max(.1,1-NA-f.stagger);le[0]=0;for(let St=1;St<=Qs;St++){let Sn=NA+(St-1)/Qs*f.stagger,jn=Un((st-Sn)/me),mn=jn*jn*(3-2*jn);De[St]=mn,le[St]=le[St-1]+mn}let Ge=f.seed*Cm,ss=CA(Un(_.launch)),ge=Xn*ss;Nn.length=0;let Fi=V.amt>.001,js=Math.max(1,f.reach*we),Sc=Math.max(1,f.sideReach*we),Um=Fo(k,f.grab),Nm=Fo(k,f.release),Ox=-1,Ix=1e9,Lm=0,OA=Math.round(f.imageOffset),IA=St=>J>0?((OA-St)%J+J)%J:0,BA=rt.inside&&rt.seeded&&Yt,Pm=-1,Bx=Fi?is:-1;for(let St=0;St<Q;St++){let Sn=Bo(St),jn=Math.abs(Sn),mn=St===0?Un(_.progress):De[jn],Ss=IA(Sn),Ms=Ge+Math.sign(Sn)*it*le[jn]+_.spin,as=Math.cos(Ms)*ge+$t,za=Math.sin(Ms)*ge+Ae;kn[St].set(as,za);let Lh=Ms-Xt,Ph=Math.abs(Math.atan2(Math.sin(Lh),Math.cos(Lh)));Ph<Ix&&(Ix=Ph,Ox=St,Lm=Ss);let bs=0,Ho=0,Oh=0;if(Fi){let Ts=V.x-as,Va=V.y-za,$s=Math.hypot(Ts,Va);if(bs=Oa(js,js*.22,$s)*V.amt*mn,bs>1e-4&&$s>1e-4){let Ha=f.pull*lt*bs/$s;Ho=Ts*Ha,Oh=Va*Ha}}let Go=bs>Gr[St]?Um:Nm;Gr[St]+=(bs-Gr[St])*Go,kr[St]+=(Ho-kr[St])*Go,Ia[St]+=(Oh-Ia[St])*Go;let ko=0;if(Bx>=0&&St!==Bx){let Ts=Math.hypot(Fa.x-as,Fa.y-za);ko=Oa(Sc,Sc*.2,Ts)*mn}vs[St]+=(ko-vs[St])*(ko>vs[St]?Um:Nm);let Mc=0,bc=0;if(vs[St]>1e-4){let Ts=as-Fa.x,Va=za-Fa.y,$s=Math.hypot(Ts,Va);if($s>1e-4){let Ha=f.sidePush*lt*vs[St]/$s;Mc=Ts*Ha,bc=Va*Ha}}b.uPos.value[St].set(as+kr[St]+Mc,za+Ia[St]+bc),b.uRot.value[St]=(f.radial?Ms:Ms+wA)*ss;let Tc=St===0?Th(Un(de?(mn-.5)/.46:mn/.7)):Th(Un(mn/.34)),Ih=St===0?Th(Un(de?(mn-.58)/.38:(mn-.18)/.74)):Th(Un((mn-.06)/.36)),Bh=zo(St);if(b.uScale.value[St].set(Tc*Bh,Ih*Bh,1-f.sideDim*vs[St],Ss),BA&&Pm<0){let Ts=b.uRot.value[St],Va=V.x-(as+kr[St]+Mc),$s=V.y-(za+Ia[St]+bc),Ha=Math.cos(Ts),Fx=Math.sin(Ts);Math.abs(Va*Ha+$s*Fx)<=we*.5*Tc*Bh&&Math.abs(-Va*Fx+$s*Ha)<=yt*.5*Ih*Bh&&(Pm=St)}Nn.push(St)}for(let St=Q;St<32;St++)b.uScale.value[St].set(0,0,1,0),Gr[St]=0,kr[St]=0,Ia[St]=0,vs[St]=0;is=Pm;let Dh=f.focusParticles&&$>f.focusParticleFrom&&!K&&Yt&&st>.995?is:-1;Ln<0&&Dh>=0&&(Ln=Dh,xs=0);let Uh=Ln>=0&&Ln===Dh,FA=Uh?1:0,zA=Uh?f.focusParticleEnter:f.focusParticleExit;if(Ks+=(FA-Ks)*Fo(k,zA),!T.matches&&Ln>=0&&(xs+=k*(Uh?f.focusParticleDrift:-f.focusParticleOut)),!Uh&&Ks<.015&&(Ln=Dh,Ks=0,xs=0),Ln>=0){let St=b.uPos.value[Ln],Sn=b.uScale.value[Ln],jn=we*.5*Sn.x,mn=yt*.5*Sn.y,Ss=Math.min(jn,mn),Ms=Oa(.3,1,Math.min(Sn.x,Sn.y)),as=Math.min(Ss,Ss+(b.uRadius.value-Ss)*Ms);b.uFocusParticlePos.value.copy(St),b.uFocusParticleBox.value.set(jn,mn,as,b.uRot.value[Ln])}b.uFocusParticles.value.set(Ks,f.focusParticleReach*lt,Math.max(6,f.focusParticleCell*lt),f.focusParticleOpacity),b.uFocusParticleMotion.value.set(xs,T.matches?0:1);let Om=is>=0&&!K&&$>f.tagFrom;Om!==yc&&(yc=Om,C.show(Om)),is>=0&&Fa.copy(kn[is]),b.uTag.value.set(V.x+f.tagX,V.y+f.tagY,C.box.sx,C.box.sy),b.uTagP.value.set(wm*.5,vc*.5,vc*.5,f.tagRefract),b.uTagQ.value.set(f.tagFrost,f.tagRim,0,0),Ox>=0&&J>0&&Lm!==pn&&(pn=Lm,Ah()),Nn.sort((St,Sn)=>Bo(St)-Bo(Sn));let VA=ie*.5*f.thread,HA=st>.995&&Q>2,Im=Math.min(HA?Q:Q-1,32);for(let St=0;St<Im;St++){let Sn=Nn[St],jn=Nn[(St+1)%Q],mn=b.uPos.value[Sn],Ss=b.uPos.value[jn],Ms=b.uScale.value[Sn],as=b.uScale.value[jn],za=(f.radial?Ms.y:Ms.x)/zo(Sn),Lh=(f.radial?as.y:as.x)/zo(jn),Ph=kn[Sn].distanceTo(kn[jn])-Pn*.5*(za+Lh),bs=Un(Ph/ys),Ho=0;if(Fi&&f.web>1e-4){let Mc=(mn.x+Ss.x)*.5,bc=(mn.y+Ss.y)*.5,Tc=Math.max(1,f.webReach*we),Ih=Math.hypot(V.x-Mc,V.y-bc);Ho=Oa(Tc,Tc*.15,Ih)*V.amt}Ba[St]+=(Ho-Ba[St])*(Ho>Ba[St]?Um:Nm);let Oh=Math.max(Math.pow(1-bs,f.thin),f.web*Ba[St]),Go=VA*Oh-f.dissolve,ko=Go*(1-(1-f.pinch)*Oa(0,.7,bs));b.uLinkA.value[St].copy(mn),b.uLinkB.value[St].copy(Ss),b.uLinkPar.value[St].set(Go,ko,f.sag*Mt*Math.pow(bs,1.5),Math.min(f.fillet*Mt*Oa(0,.35,bs),Math.max(ko,0)*1.5))}for(let St=Im;St<32;St++)b.uLinkPar.value[St].set(-100,-100,0,0);b.uLinkCount.value=Im,b.uK.value=f.goo*kt*lt,b.uWobble.value=f.wobble*lt*(1-Oa(.2,.95,_.progress)),b.uTextured.value=f.textured&&N?1:0,b.uBlend.value=Math.max(.5,f.blend*kt*Mt),b.uIntro.value.set(de?Un(_.progress):1,f.assembleSpread,Math.max(7,f.assembleCell*lt),de?f.assembleOpacity:0),b.uCardParticles.value.set(Un(_.launch),f.assembleHaloReach*lt,Math.max(7,f.assembleCell*lt),de?f.assembleHaloOpacity:0);let Nh=f.glass;b.uBandTop.value=Nh?f.bandTop*at:0,b.uBandBottom.value=Nh?f.bandBottom*at:0,b.uGlass.value.set(f.refract,f.squeeze,f.ripple,f.rippleFreq),b.uFringe.value=Nh?f.fringe:0,b.uSheen.value=Nh?f.sheen:0},Ch=0,Dm=()=>{Yt=!1,Xr=-1,Ut=0,Wt=!1,fe=!1,Ln=-1,Ks=0,xs=0,b.uFocusParticles.value.x=0,Z();let k=++Ch;h&&qe.set(h,{opacity:W?0:1});let Q=qe.timeline({delay:.25,onComplete:()=>{Yt=!0}}),it=f.assemble&&$>f.assembleFrom&&!T.matches;Q.fromTo(_,{progress:0,launch:0,spread:0,spin:0,shift:0},{progress:1,duration:it?f.assembleTime:.65,ease:it?f.assembleEase:"power1.out"}),Q.addPause(">",()=>{q(()=>{qe.delayedCall(f.holdAfter,()=>{d||k!==Ch||(Q.resume(),h&&qe.to(h,{opacity:0,duration:f.loaderOut,ease:"power2.in"}))})})}),Q.to(_,{launch:1,duration:f.launchTime,ease:"power2.inOut"});let st=Q.duration()-.15;Q.to(_,{spread:1,duration:f.spreadTime,ease:f.spreadEase},st);let ut=st+f.stageAt*f.spreadTime;Q.to(_,{spin:f.spinTurns*Js,duration:f.spinTime,ease:f.spinEase},ut+f.spinDelay),Q.to(_,{shift:1,duration:f.moveTime,ease:f.moveEase},ut+f.moveDelay);let At=st+f.textAt*f.spreadTime;if(E.chars.length&&Q.fromTo(E.chars,{value:0},{value:1,duration:f.textTime,ease:f.textEase,stagger:f.textStagger},At),f.textOut&&E.fades.length){let wt=Math.max(ut+f.spinDelay+f.spinTime,ut+f.moveDelay+f.moveTime);Q.fromTo(E.fades,{value:1},{value:0,duration:f.textOutTime,ease:f.textOutEase,stagger:f.textStagger},Math.max(0,wt+f.textOutAt))}return m&&Q.fromTo(m,{opacity:0},{opacity:1,duration:f.textTime,ease:f.textEase},At),Q};C.build(),C.load(()=>{d||C.build()}),Nt();let Vo=null,Rh=()=>{Vo?.kill(),Vo=Dm()},w=()=>{d||Vo||(E.build(),C.build(),Nt(),r.current=Rh,Rh())},P=setTimeout(w,3e3);Promise.all([document.fonts?.ready??Promise.resolve(),B.first]).then(w).catch(w);let Y,F=performance.now(),z=F;return p.setAnimationLoop(()=>{let k=performance.now(),Q=Math.min(.05,(k-z)/1e3);if(z=k,b.uTime.value=(k-F)*.001,Yt&&!Wt&&!jt){_.spin+=Ut*Q,Ut*=Math.pow(f.damping,Q*60);let it=0;if(f.snap){let st=Js/Math.round(f.count),ut=Math.max(.01,-Math.log(f.damping)*60),At=Math.max(f.snapFrom,ut*st*.5),wt=4.8/Math.max(.05,f.snapTime);if(!fe&&Math.abs(Ut)<At){let Mt=_.spin+Ut/ut,$t=f.seed*Cm-Xt;L=Math.round((Mt+$t)/st)*st-$t,dn=Math.max(Math.abs(Ut),st*.5*wt),fe=!0}if(fe){it=L-_.spin;let Mt=Math.max(-dn,Math.min(dn,it*wt));Ut+=(Mt-Ut)*Un(wt*Q)}}else fe=!1;Math.abs(Ut)<.0015&&Math.abs(it)<8e-4&&(Ut=0,_.spin+=it)}Tt(Q),nt(Q),wh(Q),Yt&&!Wt&&!jt&&Ut===0&&pn>=0&&pn!==Xr&&(Xr=pn,D.show(pn)),p.render(v,S)}),()=>{d=!0,r.current=null,o.current=null,clearTimeout(bt),clearTimeout(P),p.setAnimationLoop(null),window.removeEventListener("resize",Rt),window.visualViewport?.removeEventListener("resize",Rt),u.removeEventListener("wheel",U),u.removeEventListener("pointerdown",pt),u.removeEventListener("pointermove",j),u.removeEventListener("pointerup",mt),u.removeEventListener("pointercancel",mt),u.removeEventListener("pointerleave",Bt),u.removeEventListener("click",vt),Vo?.kill(),qe.killTweensOf(E.chars),qe.killTweensOf(E.fades),qe.killTweensOf(m),D.dispose(),C.dispose(),E.dispose(),Y?.destroy(),A.geometry.dispose(),A.material.dispose(),b.uAtlas.value?.dispose(),b.uAsciiTex.value?.dispose(),b.uTagTex.value?.dispose(),p.dispose(),p.forceContextLoss(),p.domElement.remove()}},[]),(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)("div",{ref:e,className:"fixed inset-0 touch-none"}),(0,oe.jsx)("div",{className:"mobile-brand","aria-hidden":"true",children:"SENSES COFFEE"}),(0,oe.jsxs)("button",{type:"button",className:"replay-intro",onClick:()=>r.current?.(),"aria-label":"\u91CD\u64AD\u5F00\u573A\u5706\u73AF\u52A8\u753B",children:[(0,oe.jsx)("span",{"aria-hidden":"true",children:"\u21BB"})," \u91CD\u64AD\u5F00\u573A"]}),(0,oe.jsxs)("section",{ref:l,className:"mobile-info","aria-label":"\u5F53\u524D\u5496\u5561\u5361\u7247",children:[(0,oe.jsxs)("p",{className:"mobile-detail",children:[Ii[0].type," \xB7 ",Ii[0].year]}),(0,oe.jsx)("h1",{className:"mobile-name",children:Ii[0].name}),(0,oe.jsx)("p",{className:"mobile-hint",children:"\u5DE6\u53F3\u6ED1\u52A8\u6D4F\u89C8"}),(0,oe.jsxs)("nav",{className:"mobile-nav","aria-label":"\u5207\u6362\u5496\u5561\u5361\u7247",children:[(0,oe.jsx)("button",{type:"button",onClick:()=>o.current?.(-1),"aria-label":"\u4E0A\u4E00\u5F20\u5361\u7247",children:"\u2190"}),(0,oe.jsxs)("span",{className:"mobile-count",children:["01 / ",Ii.length]}),(0,oe.jsx)("button",{type:"button",onClick:()=>o.current?.(1),"aria-label":"\u4E0B\u4E00\u5F20\u5361\u7247",children:"\u2192"})]})]}),(0,oe.jsx)("ul",{ref:t,"aria-label":"Projects",style:{fontFamily:'"Satoshi", ui-sans-serif, system-ui, sans-serif'},className:"pointer-events-none fixed right-[12vw] top-[2.4vh] z-10 flex flex-col items-start text-right leading-[1.4] tracking-[0.01em] text-[#0a0a0a] opacity-0 max-sm:hidden",children:Ii.map((u,m)=>(0,oe.jsx)("li",{ref:h=>{n.current[m]=h},style:{opacity:.2},children:u.name},u.id))}),[{side:"left",justify:"flex-start"},{side:"right",justify:"flex-end"}].map(({side:u,justify:m})=>{let h=(0,oe.jsxs)("span",{className:"flex items-baseline whitespace-nowrap",children:[(0,oe.jsx)("span",{}),(0,oe.jsx)("span",{})]});return(0,oe.jsxs)("div",{ref:d=>{c.current[u].box=d},"aria-hidden":"true",className:"project-meta pointer-events-none fixed top-1/2 z-10 -translate-y-1/2 tracking-[-0.01em] text-[#0a0a0a]",children:[(0,oe.jsx)("span",{ref:d=>{c.current[u].goo=d},className:"absolute inset-0",style:{willChange:"filter"},children:[0,1].map(d=>(0,oe.jsx)("span",{ref:f=>{c.current[u].layers[d]=f},className:"absolute inset-0 flex items-center",style:{justifyContent:m},children:h},d))}),(0,oe.jsx)("span",{ref:d=>{c.current[u].plain=d},className:"absolute inset-0 flex items-center",style:{justifyContent:m},children:h})]},u)}),(0,oe.jsx)("div",{ref:i,"aria-hidden":"true",className:"pointer-events-none fixed left-1/2 z-10 -translate-x-1/2 tracking-[-0.01em] text-[#0a0a0a]"}),(0,oe.jsx)("div",{ref:s,"aria-live":"polite",className:"sr-only"}),(0,oe.jsx)("svg",{"aria-hidden":"true",className:"pointer-events-none absolute h-0 w-0",focusable:"false",children:(0,oe.jsx)("defs",{children:(0,oe.jsx)("filter",{id:"name-goo",x:"-20%",y:"-100%",width:"140%",height:"300%",colorInterpolationFilters:"sRGB",children:(0,oe.jsx)("feColorMatrix",{ref:a,in:"SourceGraphic",type:"matrix",values:`1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140`})})})})]})}var PA=Wr(Eh(),1);(0,LA.createRoot)(document.getElementById("root")).render((0,PA.jsx)(Px,{}));})();
