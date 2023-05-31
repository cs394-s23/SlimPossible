(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function y1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zl={},ID={get exports(){return zl},set exports(t){zl=t}},kd={},w={},ED={get exports(){return w},set exports(t){w=t}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=Symbol.for("react.element"),SD=Symbol.for("react.portal"),TD=Symbol.for("react.fragment"),kD=Symbol.for("react.strict_mode"),CD=Symbol.for("react.profiler"),bD=Symbol.for("react.provider"),AD=Symbol.for("react.context"),ND=Symbol.for("react.forward_ref"),DD=Symbol.for("react.suspense"),RD=Symbol.for("react.memo"),xD=Symbol.for("react.lazy"),C0=Symbol.iterator;function PD(t){return t===null||typeof t!="object"?null:(t=C0&&t[C0]||t["@@iterator"],typeof t=="function"?t:null)}var v1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w1=Object.assign,_1={};function _a(t,e,n){this.props=t,this.context=e,this.refs=_1,this.updater=n||v1}_a.prototype.isReactComponent={};_a.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_a.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function I1(){}I1.prototype=_a.prototype;function yy(t,e,n){this.props=t,this.context=e,this.refs=_1,this.updater=n||v1}var vy=yy.prototype=new I1;vy.constructor=yy;w1(vy,_a.prototype);vy.isPureReactComponent=!0;var b0=Array.isArray,E1=Object.prototype.hasOwnProperty,wy={current:null},S1={key:!0,ref:!0,__self:!0,__source:!0};function T1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)E1.call(e,r)&&!S1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Lu,type:t,key:s,ref:o,props:i,_owner:wy.current}}function OD(t,e){return{$$typeof:Lu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _y(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lu}function LD(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var A0=/\/+/g;function Kf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?LD(""+t.key):e.toString(36)}function Wc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Lu:case SD:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Kf(o,0):r,b0(i)?(n="",t!=null&&(n=t.replace(A0,"$&/")+"/"),Wc(i,e,n,"",function(u){return u})):i!=null&&(_y(i)&&(i=OD(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(A0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",b0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Kf(s,a);o+=Wc(s,e,n,l,i)}else if(l=PD(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Kf(s,a++),o+=Wc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pc(t,e,n){if(t==null)return t;var r=[],i=0;return Wc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function MD(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Hc={transition:null},$D={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Hc,ReactCurrentOwner:wy};ee.Children={map:pc,forEach:function(t,e,n){pc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pc(t,function(){e++}),e},toArray:function(t){return pc(t,function(e){return e})||[]},only:function(t){if(!_y(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=_a;ee.Fragment=TD;ee.Profiler=CD;ee.PureComponent=yy;ee.StrictMode=kD;ee.Suspense=DD;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$D;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=w1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wy.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)E1.call(e,l)&&!S1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Lu,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:AD,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bD,_context:t},t.Consumer=t};ee.createElement=T1;ee.createFactory=function(t){var e=T1.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:ND,render:t}};ee.isValidElement=_y;ee.lazy=function(t){return{$$typeof:xD,_payload:{_status:-1,_result:t},_init:MD}};ee.memo=function(t,e){return{$$typeof:RD,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Hc.transition;Hc.transition={};try{t()}finally{Hc.transition=e}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(t,e){return Yt.current.useCallback(t,e)};ee.useContext=function(t){return Yt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return Yt.current.useEffect(t,e)};ee.useId=function(){return Yt.current.useId()};ee.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Yt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};ee.useRef=function(t){return Yt.current.useRef(t)};ee.useState=function(t){return Yt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return Yt.current.useTransition()};ee.version="18.2.0";(function(t){t.exports=ee})(ED);const pi=y1(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FD=w,UD=Symbol.for("react.element"),VD=Symbol.for("react.fragment"),BD=Object.prototype.hasOwnProperty,zD=FD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jD={key:!0,ref:!0,__self:!0,__source:!0};function k1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)BD.call(e,r)&&!jD.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:UD,type:t,key:s,ref:o,props:i,_owner:zD.current}}kd.Fragment=VD;kd.jsx=k1;kd.jsxs=k1;(function(t){t.exports=kd})(ID);const qD=zl.Fragment,P=zl.jsx,Q=zl.jsxs;var lm={},gh={},KD={get exports(){return gh},set exports(t){gh=t}},En={},um={},WD={get exports(){return um},set exports(t){um=t}},C1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,K){var W=L.length;L.push(K);e:for(;0<W;){var de=W-1>>>1,ke=L[de];if(0<i(ke,K))L[de]=K,L[W]=ke,W=de;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var K=L[0],W=L.pop();if(W!==K){L[0]=W;e:for(var de=0,ke=L.length,Ft=ke>>>1;de<Ft;){var st=2*(de+1)-1,Je=L[st],x=st+1,te=L[x];if(0>i(Je,W))x<ke&&0>i(te,Je)?(L[de]=te,L[x]=W,de=x):(L[de]=Je,L[st]=W,de=st);else if(x<ke&&0>i(te,W))L[de]=te,L[x]=W,de=x;else break e}}return K}function i(L,K){var W=L.sortIndex-K.sortIndex;return W!==0?W:L.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,y=!1,v=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=L)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function _(L){if(v=!1,g(L),!y)if(n(l)!==null)y=!0,Sr(k);else{var K=n(u);K!==null&&it(_,K.startTime-L)}}function k(L,K){y=!1,v&&(v=!1,m(R),R=-1),p=!0;var W=d;try{for(g(K),h=n(l);h!==null&&(!(h.expirationTime>K)||L&&!rt());){var de=h.callback;if(typeof de=="function"){h.callback=null,d=h.priorityLevel;var ke=de(h.expirationTime<=K);K=t.unstable_now(),typeof ke=="function"?h.callback=ke:h===n(l)&&r(l),g(K)}else r(l);h=n(l)}if(h!==null)var Ft=!0;else{var st=n(u);st!==null&&it(_,st.startTime-K),Ft=!1}return Ft}finally{h=null,d=W,p=!1}}var T=!1,N=null,R=-1,ce=5,q=-1;function rt(){return!(t.unstable_now()-q<ce)}function Tn(){if(N!==null){var L=t.unstable_now();q=L;var K=!0;try{K=N(!0,L)}finally{K?Jt():(T=!1,N=null)}}else T=!1}var Jt;if(typeof f=="function")Jt=function(){f(Tn)};else if(typeof MessageChannel<"u"){var ni=new MessageChannel,Er=ni.port2;ni.port1.onmessage=Tn,Jt=function(){Er.postMessage(null)}}else Jt=function(){I(Tn,0)};function Sr(L){N=L,T||(T=!0,Jt())}function it(L,K){R=I(function(){L(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,Sr(k))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var W=d;d=K;try{return L()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var W=d;d=L;try{return K()}finally{d=W}},t.unstable_scheduleCallback=function(L,K,W){var de=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?de+W:de):W=de,L){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=W+ke,L={id:c++,callback:K,priorityLevel:L,startTime:W,expirationTime:ke,sortIndex:-1},W>de?(L.sortIndex=W,e(u,L),n(l)===null&&L===n(u)&&(v?(m(R),R=-1):v=!0,it(_,W-de))):(L.sortIndex=ke,e(l,L),y||p||(y=!0,Sr(k))),L},t.unstable_shouldYield=rt,t.unstable_wrapCallback=function(L){var K=d;return function(){var W=d;d=K;try{return L.apply(this,arguments)}finally{d=W}}}})(C1);(function(t){t.exports=C1})(WD);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=w,wn=um;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A1=new Set,jl={};function eo(t,e){Xo(t,e),Xo(t+"Capture",e)}function Xo(t,e){for(jl[t]=e,t=0;t<e.length;t++)A1.add(e[t])}var Br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cm=Object.prototype.hasOwnProperty,HD=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N0={},D0={};function GD(t){return cm.call(D0,t)?!0:cm.call(N0,t)?!1:HD.test(t)?D0[t]=!0:(N0[t]=!0,!1)}function QD(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function YD(t,e,n,r){if(e===null||typeof e>"u"||QD(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];At[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Iy=/[\-:]([a-z])/g;function Ey(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Iy,Ey);At[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Iy,Ey);At[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Iy,Ey);At[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sy(t,e,n,r){var i=At.hasOwnProperty(e)?At[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(YD(e,n,i,r)&&(n=null),r||i===null?GD(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gr=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mc=Symbol.for("react.element"),Eo=Symbol.for("react.portal"),So=Symbol.for("react.fragment"),Ty=Symbol.for("react.strict_mode"),hm=Symbol.for("react.profiler"),N1=Symbol.for("react.provider"),D1=Symbol.for("react.context"),ky=Symbol.for("react.forward_ref"),dm=Symbol.for("react.suspense"),fm=Symbol.for("react.suspense_list"),Cy=Symbol.for("react.memo"),li=Symbol.for("react.lazy"),R1=Symbol.for("react.offscreen"),R0=Symbol.iterator;function za(t){return t===null||typeof t!="object"?null:(t=R0&&t[R0]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,Wf;function al(t){if(Wf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wf=e&&e[1]||""}return`
`+Wf+t}var Hf=!1;function Gf(t,e){if(!t||Hf)return"";Hf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?al(t):""}function XD(t){switch(t.tag){case 5:return al(t.type);case 16:return al("Lazy");case 13:return al("Suspense");case 19:return al("SuspenseList");case 0:case 2:case 15:return t=Gf(t.type,!1),t;case 11:return t=Gf(t.type.render,!1),t;case 1:return t=Gf(t.type,!0),t;default:return""}}function pm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case So:return"Fragment";case Eo:return"Portal";case hm:return"Profiler";case Ty:return"StrictMode";case dm:return"Suspense";case fm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D1:return(t.displayName||"Context")+".Consumer";case N1:return(t._context.displayName||"Context")+".Provider";case ky:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cy:return e=t.displayName||null,e!==null?e:pm(t.type)||"Memo";case li:e=t._payload,t=t._init;try{return pm(t(e))}catch{}}return null}function JD(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pm(e);case 8:return e===Ty?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ri(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZD(t){var e=x1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gc(t){t._valueTracker||(t._valueTracker=ZD(t))}function P1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=x1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mm(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function x0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ri(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function O1(t,e){e=e.checked,e!=null&&Sy(t,"checked",e,!1)}function gm(t,e){O1(t,e);var n=Ri(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ym(t,e.type,n):e.hasOwnProperty("defaultValue")&&ym(t,e.type,Ri(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function P0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ym(t,e,n){(e!=="number"||yh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ll=Array.isArray;function Mo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ri(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function O0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(ll(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ri(n)}}function L1(t,e){var n=Ri(e.value),r=Ri(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function L0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function M1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?M1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yc,$1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yc=yc||document.createElement("div"),yc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ql(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Il={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eR=["Webkit","ms","Moz","O"];Object.keys(Il).forEach(function(t){eR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Il[e]=Il[t]})});function F1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Il.hasOwnProperty(t)&&Il[t]?(""+e).trim():e+"px"}function U1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=F1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tR=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _m(t,e){if(e){if(tR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Im(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Em=null;function by(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sm=null,$o=null,Fo=null;function M0(t){if(t=Fu(t)){if(typeof Sm!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Dd(e),Sm(t.stateNode,t.type,e))}}function V1(t){$o?Fo?Fo.push(t):Fo=[t]:$o=t}function B1(){if($o){var t=$o,e=Fo;if(Fo=$o=null,M0(t),e)for(t=0;t<e.length;t++)M0(e[t])}}function z1(t,e){return t(e)}function j1(){}var Qf=!1;function q1(t,e,n){if(Qf)return t(e,n);Qf=!0;try{return z1(t,e,n)}finally{Qf=!1,($o!==null||Fo!==null)&&(j1(),B1())}}function Kl(t,e){var n=t.stateNode;if(n===null)return null;var r=Dd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Tm=!1;if(Br)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){Tm=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{Tm=!1}function nR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var El=!1,vh=null,wh=!1,km=null,rR={onError:function(t){El=!0,vh=t}};function iR(t,e,n,r,i,s,o,a,l){El=!1,vh=null,nR.apply(rR,arguments)}function sR(t,e,n,r,i,s,o,a,l){if(iR.apply(this,arguments),El){if(El){var u=vh;El=!1,vh=null}else throw Error(A(198));wh||(wh=!0,km=u)}}function to(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function K1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $0(t){if(to(t)!==t)throw Error(A(188))}function oR(t){var e=t.alternate;if(!e){if(e=to(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $0(i),t;if(s===r)return $0(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function W1(t){return t=oR(t),t!==null?H1(t):null}function H1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=H1(t);if(e!==null)return e;t=t.sibling}return null}var G1=wn.unstable_scheduleCallback,F0=wn.unstable_cancelCallback,aR=wn.unstable_shouldYield,lR=wn.unstable_requestPaint,Be=wn.unstable_now,uR=wn.unstable_getCurrentPriorityLevel,Ay=wn.unstable_ImmediatePriority,Q1=wn.unstable_UserBlockingPriority,_h=wn.unstable_NormalPriority,cR=wn.unstable_LowPriority,Y1=wn.unstable_IdlePriority,Cd=null,hr=null;function hR(t){if(hr&&typeof hr.onCommitFiberRoot=="function")try{hr.onCommitFiberRoot(Cd,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:pR,dR=Math.log,fR=Math.LN2;function pR(t){return t>>>=0,t===0?32:31-(dR(t)/fR|0)|0}var vc=64,wc=4194304;function ul(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ih(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ul(a):(s&=o,s!==0&&(r=ul(s)))}else o=n&~i,o!==0?r=ul(o):s!==0&&(r=ul(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wn(e),i=1<<n,r|=t[n],e&=~i;return r}function mR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=mR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function X1(){var t=vc;return vc<<=1,!(vc&4194240)&&(vc=64),t}function Yf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function yR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ny(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function J1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Z1,Dy,eS,tS,nS,bm=!1,_c=[],_i=null,Ii=null,Ei=null,Wl=new Map,Hl=new Map,ci=[],vR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function U0(t,e){switch(t){case"focusin":case"focusout":_i=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Ei=null;break;case"pointerover":case"pointerout":Wl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hl.delete(e.pointerId)}}function qa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fu(e),e!==null&&Dy(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wR(t,e,n,r,i){switch(e){case"focusin":return _i=qa(_i,t,e,n,r,i),!0;case"dragenter":return Ii=qa(Ii,t,e,n,r,i),!0;case"mouseover":return Ei=qa(Ei,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Wl.set(s,qa(Wl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Hl.set(s,qa(Hl.get(s)||null,t,e,n,r,i)),!0}return!1}function rS(t){var e=gs(t.target);if(e!==null){var n=to(e);if(n!==null){if(e=n.tag,e===13){if(e=K1(n),e!==null){t.blockedOn=e,nS(t.priority,function(){eS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Am(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Em=r,n.target.dispatchEvent(r),Em=null}else return e=Fu(n),e!==null&&Dy(e),t.blockedOn=n,!1;e.shift()}return!0}function V0(t,e,n){Gc(t)&&n.delete(e)}function _R(){bm=!1,_i!==null&&Gc(_i)&&(_i=null),Ii!==null&&Gc(Ii)&&(Ii=null),Ei!==null&&Gc(Ei)&&(Ei=null),Wl.forEach(V0),Hl.forEach(V0)}function Ka(t,e){t.blockedOn===e&&(t.blockedOn=null,bm||(bm=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,_R)))}function Gl(t){function e(i){return Ka(i,t)}if(0<_c.length){Ka(_c[0],t);for(var n=1;n<_c.length;n++){var r=_c[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_i!==null&&Ka(_i,t),Ii!==null&&Ka(Ii,t),Ei!==null&&Ka(Ei,t),Wl.forEach(e),Hl.forEach(e),n=0;n<ci.length;n++)r=ci[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ci.length&&(n=ci[0],n.blockedOn===null);)rS(n),n.blockedOn===null&&ci.shift()}var Uo=Gr.ReactCurrentBatchConfig,Eh=!0;function IR(t,e,n,r){var i=me,s=Uo.transition;Uo.transition=null;try{me=1,Ry(t,e,n,r)}finally{me=i,Uo.transition=s}}function ER(t,e,n,r){var i=me,s=Uo.transition;Uo.transition=null;try{me=4,Ry(t,e,n,r)}finally{me=i,Uo.transition=s}}function Ry(t,e,n,r){if(Eh){var i=Am(t,e,n,r);if(i===null)op(t,e,r,Sh,n),U0(t,r);else if(wR(i,t,e,n,r))r.stopPropagation();else if(U0(t,r),e&4&&-1<vR.indexOf(t)){for(;i!==null;){var s=Fu(i);if(s!==null&&Z1(s),s=Am(t,e,n,r),s===null&&op(t,e,r,Sh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else op(t,e,r,null,n)}}var Sh=null;function Am(t,e,n,r){if(Sh=null,t=by(r),t=gs(t),t!==null)if(e=to(t),e===null)t=null;else if(n=e.tag,n===13){if(t=K1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sh=t,null}function iS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uR()){case Ay:return 1;case Q1:return 4;case _h:case cR:return 16;case Y1:return 536870912;default:return 16}default:return 16}}var mi=null,xy=null,Qc=null;function sS(){if(Qc)return Qc;var t,e=xy,n=e.length,r,i="value"in mi?mi.value:mi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Qc=i.slice(t,1<r?1-r:void 0)}function Yc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ic(){return!0}function B0(){return!1}function Sn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ic:B0,this.isPropagationStopped=B0,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ic)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ic)},persist:function(){},isPersistent:Ic}),e}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Py=Sn(Ia),$u=Le({},Ia,{view:0,detail:0}),SR=Sn($u),Xf,Jf,Wa,bd=Le({},$u,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wa&&(Wa&&t.type==="mousemove"?(Xf=t.screenX-Wa.screenX,Jf=t.screenY-Wa.screenY):Jf=Xf=0,Wa=t),Xf)},movementY:function(t){return"movementY"in t?t.movementY:Jf}}),z0=Sn(bd),TR=Le({},bd,{dataTransfer:0}),kR=Sn(TR),CR=Le({},$u,{relatedTarget:0}),Zf=Sn(CR),bR=Le({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),AR=Sn(bR),NR=Le({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DR=Sn(NR),RR=Le({},Ia,{data:0}),j0=Sn(RR),xR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=OR[t])?!!e[t]:!1}function Oy(){return LR}var MR=Le({},$u,{key:function(t){if(t.key){var e=xR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oy,charCode:function(t){return t.type==="keypress"?Yc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$R=Sn(MR),FR=Le({},bd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),q0=Sn(FR),UR=Le({},$u,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oy}),VR=Sn(UR),BR=Le({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),zR=Sn(BR),jR=Le({},bd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qR=Sn(jR),KR=[9,13,27,32],Ly=Br&&"CompositionEvent"in window,Sl=null;Br&&"documentMode"in document&&(Sl=document.documentMode);var WR=Br&&"TextEvent"in window&&!Sl,oS=Br&&(!Ly||Sl&&8<Sl&&11>=Sl),K0=String.fromCharCode(32),W0=!1;function aS(t,e){switch(t){case"keyup":return KR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var To=!1;function HR(t,e){switch(t){case"compositionend":return lS(e);case"keypress":return e.which!==32?null:(W0=!0,K0);case"textInput":return t=e.data,t===K0&&W0?null:t;default:return null}}function GR(t,e){if(To)return t==="compositionend"||!Ly&&aS(t,e)?(t=sS(),Qc=xy=mi=null,To=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return oS&&e.locale!=="ko"?null:e.data;default:return null}}var QR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!QR[t.type]:e==="textarea"}function uS(t,e,n,r){V1(r),e=Th(e,"onChange"),0<e.length&&(n=new Py("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Tl=null,Ql=null;function YR(t){_S(t,0)}function Ad(t){var e=bo(t);if(P1(e))return t}function XR(t,e){if(t==="change")return e}var cS=!1;if(Br){var ep;if(Br){var tp="oninput"in document;if(!tp){var G0=document.createElement("div");G0.setAttribute("oninput","return;"),tp=typeof G0.oninput=="function"}ep=tp}else ep=!1;cS=ep&&(!document.documentMode||9<document.documentMode)}function Q0(){Tl&&(Tl.detachEvent("onpropertychange",hS),Ql=Tl=null)}function hS(t){if(t.propertyName==="value"&&Ad(Ql)){var e=[];uS(e,Ql,t,by(t)),q1(YR,e)}}function JR(t,e,n){t==="focusin"?(Q0(),Tl=e,Ql=n,Tl.attachEvent("onpropertychange",hS)):t==="focusout"&&Q0()}function ZR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ad(Ql)}function ex(t,e){if(t==="click")return Ad(e)}function tx(t,e){if(t==="input"||t==="change")return Ad(e)}function nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:nx;function Yl(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cm.call(e,i)||!Gn(t[i],e[i]))return!1}return!0}function Y0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function X0(t,e){var n=Y0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Y0(n)}}function dS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fS(){for(var t=window,e=yh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yh(t.document)}return e}function My(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rx(t){var e=fS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dS(n.ownerDocument.documentElement,n)){if(r!==null&&My(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=X0(n,s);var o=X0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ix=Br&&"documentMode"in document&&11>=document.documentMode,ko=null,Nm=null,kl=null,Dm=!1;function J0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dm||ko==null||ko!==yh(r)||(r=ko,"selectionStart"in r&&My(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kl&&Yl(kl,r)||(kl=r,r=Th(Nm,"onSelect"),0<r.length&&(e=new Py("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ko)))}function Ec(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Co={animationend:Ec("Animation","AnimationEnd"),animationiteration:Ec("Animation","AnimationIteration"),animationstart:Ec("Animation","AnimationStart"),transitionend:Ec("Transition","TransitionEnd")},np={},pS={};Br&&(pS=document.createElement("div").style,"AnimationEvent"in window||(delete Co.animationend.animation,delete Co.animationiteration.animation,delete Co.animationstart.animation),"TransitionEvent"in window||delete Co.transitionend.transition);function Nd(t){if(np[t])return np[t];if(!Co[t])return t;var e=Co[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pS)return np[t]=e[n];return t}var mS=Nd("animationend"),gS=Nd("animationiteration"),yS=Nd("animationstart"),vS=Nd("transitionend"),wS=new Map,Z0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wi(t,e){wS.set(t,e),eo(e,[t])}for(var rp=0;rp<Z0.length;rp++){var ip=Z0[rp],sx=ip.toLowerCase(),ox=ip[0].toUpperCase()+ip.slice(1);Wi(sx,"on"+ox)}Wi(mS,"onAnimationEnd");Wi(gS,"onAnimationIteration");Wi(yS,"onAnimationStart");Wi("dblclick","onDoubleClick");Wi("focusin","onFocus");Wi("focusout","onBlur");Wi(vS,"onTransitionEnd");Xo("onMouseEnter",["mouseout","mouseover"]);Xo("onMouseLeave",["mouseout","mouseover"]);Xo("onPointerEnter",["pointerout","pointerover"]);Xo("onPointerLeave",["pointerout","pointerover"]);eo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));eo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));eo("onBeforeInput",["compositionend","keypress","textInput","paste"]);eo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(cl));function e_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sR(r,e,void 0,t),t.currentTarget=null}function _S(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;e_(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;e_(i,a,u),s=l}}}if(wh)throw t=km,wh=!1,km=null,t}function _e(t,e){var n=e[Lm];n===void 0&&(n=e[Lm]=new Set);var r=t+"__bubble";n.has(r)||(IS(e,t,2,!1),n.add(r))}function sp(t,e,n){var r=0;e&&(r|=4),IS(n,t,r,e)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function Xl(t){if(!t[Sc]){t[Sc]=!0,A1.forEach(function(n){n!=="selectionchange"&&(ax.has(n)||sp(n,!1,t),sp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sc]||(e[Sc]=!0,sp("selectionchange",!1,e))}}function IS(t,e,n,r){switch(iS(e)){case 1:var i=IR;break;case 4:i=ER;break;default:i=Ry}n=i.bind(null,e,n,t),i=void 0,!Tm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function op(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=gs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}q1(function(){var u=s,c=by(n),h=[];e:{var d=wS.get(t);if(d!==void 0){var p=Py,y=t;switch(t){case"keypress":if(Yc(n)===0)break e;case"keydown":case"keyup":p=$R;break;case"focusin":y="focus",p=Zf;break;case"focusout":y="blur",p=Zf;break;case"beforeblur":case"afterblur":p=Zf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=z0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=kR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=VR;break;case mS:case gS:case yS:p=AR;break;case vS:p=zR;break;case"scroll":p=SR;break;case"wheel":p=qR;break;case"copy":case"cut":case"paste":p=DR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=q0}var v=(e&4)!==0,I=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=Kl(f,m),_!=null&&v.push(Jl(f,_,g)))),I)break;f=f.return}0<v.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Em&&(y=n.relatedTarget||n.fromElement)&&(gs(y)||y[zr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?gs(y):null,y!==null&&(I=to(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=z0,_="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=q0,_="onPointerLeave",m="onPointerEnter",f="pointer"),I=p==null?d:bo(p),g=y==null?d:bo(y),d=new v(_,f+"leave",p,n,c),d.target=I,d.relatedTarget=g,_=null,gs(c)===u&&(v=new v(m,f+"enter",y,n,c),v.target=g,v.relatedTarget=I,_=v),I=_,p&&y)t:{for(v=p,m=y,f=0,g=v;g;g=ho(g))f++;for(g=0,_=m;_;_=ho(_))g++;for(;0<f-g;)v=ho(v),f--;for(;0<g-f;)m=ho(m),g--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=ho(v),m=ho(m)}v=null}else v=null;p!==null&&t_(h,d,p,v,!1),y!==null&&I!==null&&t_(h,I,y,v,!0)}}e:{if(d=u?bo(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var k=XR;else if(H0(d))if(cS)k=tx;else{k=ZR;var T=JR}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=ex);if(k&&(k=k(t,u))){uS(h,k,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&ym(d,"number",d.value)}switch(T=u?bo(u):window,t){case"focusin":(H0(T)||T.contentEditable==="true")&&(ko=T,Nm=u,kl=null);break;case"focusout":kl=Nm=ko=null;break;case"mousedown":Dm=!0;break;case"contextmenu":case"mouseup":case"dragend":Dm=!1,J0(h,n,c);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":J0(h,n,c)}var N;if(Ly)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else To?aS(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(oS&&n.locale!=="ko"&&(To||R!=="onCompositionStart"?R==="onCompositionEnd"&&To&&(N=sS()):(mi=c,xy="value"in mi?mi.value:mi.textContent,To=!0)),T=Th(u,R),0<T.length&&(R=new j0(R,t,null,n,c),h.push({event:R,listeners:T}),N?R.data=N:(N=lS(n),N!==null&&(R.data=N)))),(N=WR?HR(t,n):GR(t,n))&&(u=Th(u,"onBeforeInput"),0<u.length&&(c=new j0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}_S(h,e)})}function Jl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Th(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Kl(t,n),s!=null&&r.unshift(Jl(t,s,i)),s=Kl(t,e),s!=null&&r.push(Jl(t,s,i))),t=t.return}return r}function ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function t_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Kl(n,s),l!=null&&o.unshift(Jl(n,l,a))):i||(l=Kl(n,s),l!=null&&o.push(Jl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function n_(t){return(typeof t=="string"?t:""+t).replace(lx,`
`).replace(ux,"")}function Tc(t,e,n){if(e=n_(e),n_(t)!==e&&n)throw Error(A(425))}function kh(){}var Rm=null,xm=null;function Pm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Om=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,r_=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof r_<"u"?function(t){return r_.resolve(null).then(t).catch(dx)}:Om;function dx(t){setTimeout(function(){throw t})}function ap(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Gl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gl(e)}function Si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function i_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ea=Math.random().toString(36).slice(2),tr="__reactFiber$"+Ea,Zl="__reactProps$"+Ea,zr="__reactContainer$"+Ea,Lm="__reactEvents$"+Ea,fx="__reactListeners$"+Ea,px="__reactHandles$"+Ea;function gs(t){var e=t[tr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zr]||n[tr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=i_(t);t!==null;){if(n=t[tr])return n;t=i_(t)}return e}t=n,n=t.parentNode}return null}function Fu(t){return t=t[tr]||t[zr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Dd(t){return t[Zl]||null}var Mm=[],Ao=-1;function Hi(t){return{current:t}}function Ee(t){0>Ao||(t.current=Mm[Ao],Mm[Ao]=null,Ao--)}function ye(t,e){Ao++,Mm[Ao]=t.current,t.current=e}var xi={},$t=Hi(xi),ln=Hi(!1),xs=xi;function Jo(t,e){var n=t.type.contextTypes;if(!n)return xi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function un(t){return t=t.childContextTypes,t!=null}function Ch(){Ee(ln),Ee($t)}function s_(t,e,n){if($t.current!==xi)throw Error(A(168));ye($t,e),ye(ln,n)}function ES(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,JD(t)||"Unknown",i));return Le({},n,r)}function bh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xi,xs=$t.current,ye($t,t),ye(ln,ln.current),!0}function o_(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=ES(t,e,xs),r.__reactInternalMemoizedMergedChildContext=t,Ee(ln),Ee($t),ye($t,t)):Ee(ln),ye(ln,n)}var Nr=null,Rd=!1,lp=!1;function SS(t){Nr===null?Nr=[t]:Nr.push(t)}function mx(t){Rd=!0,SS(t)}function Gi(){if(!lp&&Nr!==null){lp=!0;var t=0,e=me;try{var n=Nr;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nr=null,Rd=!1}catch(i){throw Nr!==null&&(Nr=Nr.slice(t+1)),G1(Ay,Gi),i}finally{me=e,lp=!1}}return null}var No=[],Do=0,Ah=null,Nh=0,An=[],Nn=0,Ps=null,Dr=1,Rr="";function ss(t,e){No[Do++]=Nh,No[Do++]=Ah,Ah=t,Nh=e}function TS(t,e,n){An[Nn++]=Dr,An[Nn++]=Rr,An[Nn++]=Ps,Ps=t;var r=Dr;t=Rr;var i=32-Wn(r)-1;r&=~(1<<i),n+=1;var s=32-Wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dr=1<<32-Wn(e)+i|n<<i|r,Rr=s+t}else Dr=1<<s|n<<i|r,Rr=t}function $y(t){t.return!==null&&(ss(t,1),TS(t,1,0))}function Fy(t){for(;t===Ah;)Ah=No[--Do],No[Do]=null,Nh=No[--Do],No[Do]=null;for(;t===Ps;)Ps=An[--Nn],An[Nn]=null,Rr=An[--Nn],An[Nn]=null,Dr=An[--Nn],An[Nn]=null}var vn=null,gn=null,Ce=!1,zn=null;function kS(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function a_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=Si(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ps!==null?{id:Dr,overflow:Rr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function $m(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fm(t){if(Ce){var e=gn;if(e){var n=e;if(!a_(t,e)){if($m(t))throw Error(A(418));e=Si(n.nextSibling);var r=vn;e&&a_(t,e)?kS(r,n):(t.flags=t.flags&-4097|2,Ce=!1,vn=t)}}else{if($m(t))throw Error(A(418));t.flags=t.flags&-4097|2,Ce=!1,vn=t}}}function l_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function kc(t){if(t!==vn)return!1;if(!Ce)return l_(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pm(t.type,t.memoizedProps)),e&&(e=gn)){if($m(t))throw CS(),Error(A(418));for(;e;)kS(t,e),e=Si(e.nextSibling)}if(l_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=Si(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?Si(t.stateNode.nextSibling):null;return!0}function CS(){for(var t=gn;t;)t=Si(t.nextSibling)}function Zo(){gn=vn=null,Ce=!1}function Uy(t){zn===null?zn=[t]:zn.push(t)}var gx=Gr.ReactCurrentBatchConfig;function Vn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Dh=Hi(null),Rh=null,Ro=null,Vy=null;function By(){Vy=Ro=Rh=null}function zy(t){var e=Dh.current;Ee(Dh),t._currentValue=e}function Um(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vo(t,e){Rh=t,Vy=Ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(Vy!==t)if(t={context:t,memoizedValue:e,next:null},Ro===null){if(Rh===null)throw Error(A(308));Ro=t,Rh.dependencies={lanes:0,firstContext:t}}else Ro=Ro.next=t;return e}var ys=null;function jy(t){ys===null?ys=[t]:ys.push(t)}function bS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,jy(e)):(n.next=i.next,i.next=n),e.interleaved=n,jr(t,r)}function jr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ui=!1;function qy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function AS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $r(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jr(t,n)}return i=r.interleaved,i===null?(e.next=e,jy(r)):(e.next=i.next,i.next=e),r.interleaved=e,jr(t,n)}function Xc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ny(t,n)}}function u_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xh(t,e,n,r){var i=t.updateQueue;ui=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=Le({},h,d);break e;case 2:ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ls|=o,t.lanes=o,t.memoizedState=h}}function c_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var NS=new b1.Component().refs;function Vm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xd={isMounted:function(t){return(t=t._reactInternals)?to(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=Ci(t),s=$r(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ti(t,s,i),e!==null&&(Hn(e,t,i,r),Xc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ht(),i=Ci(t),s=$r(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ti(t,s,i),e!==null&&(Hn(e,t,i,r),Xc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ht(),r=Ci(t),i=$r(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ti(t,i,r),e!==null&&(Hn(e,t,r,n),Xc(e,t,r))}};function h_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yl(n,r)||!Yl(i,s):!0}function DS(t,e,n){var r=!1,i=xi,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(i=un(e)?xs:$t.current,r=e.contextTypes,s=(r=r!=null)?Jo(t,i):xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function d_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xd.enqueueReplaceState(e,e.state,null)}function Bm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=NS,qy(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ln(s):(s=un(e)?xs:$t.current,i.context=Jo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xd.enqueueReplaceState(i,i.state,null),xh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===NS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Cc(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function f_(t){var e=t._init;return e(t._payload)}function RS(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=bi(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,_){return f===null||f.tag!==6?(f=mp(g,m.mode,_),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,_){var k=g.type;return k===So?c(m,f,g.props.children,_,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===li&&f_(k)===f.type)?(_=i(f,g.props),_.ref=Ha(m,f,g),_.return=m,_):(_=rh(g.type,g.key,g.props,null,m.mode,_),_.ref=Ha(m,f,g),_.return=m,_)}function u(m,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=gp(g,m.mode,_),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,_,k){return f===null||f.tag!==7?(f=Cs(g,m.mode,_,k),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=mp(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case mc:return g=rh(f.type,f.key,f.props,null,m.mode,g),g.ref=Ha(m,null,f),g.return=m,g;case Eo:return f=gp(f,m.mode,g),f.return=m,f;case li:var _=f._init;return h(m,_(f._payload),g)}if(ll(f)||za(f))return f=Cs(f,m.mode,g,null),f.return=m,f;Cc(m,f)}return null}function d(m,f,g,_){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(m,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case mc:return g.key===k?l(m,f,g,_):null;case Eo:return g.key===k?u(m,f,g,_):null;case li:return k=g._init,d(m,f,k(g._payload),_)}if(ll(g)||za(g))return k!==null?null:c(m,f,g,_,null);Cc(m,g)}return null}function p(m,f,g,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(f,m,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case mc:return m=m.get(_.key===null?g:_.key)||null,l(f,m,_,k);case Eo:return m=m.get(_.key===null?g:_.key)||null,u(f,m,_,k);case li:var T=_._init;return p(m,f,g,T(_._payload),k)}if(ll(_)||za(_))return m=m.get(g)||null,c(f,m,_,k,null);Cc(f,_)}return null}function y(m,f,g,_){for(var k=null,T=null,N=f,R=f=0,ce=null;N!==null&&R<g.length;R++){N.index>R?(ce=N,N=null):ce=N.sibling;var q=d(m,N,g[R],_);if(q===null){N===null&&(N=ce);break}t&&N&&q.alternate===null&&e(m,N),f=s(q,f,R),T===null?k=q:T.sibling=q,T=q,N=ce}if(R===g.length)return n(m,N),Ce&&ss(m,R),k;if(N===null){for(;R<g.length;R++)N=h(m,g[R],_),N!==null&&(f=s(N,f,R),T===null?k=N:T.sibling=N,T=N);return Ce&&ss(m,R),k}for(N=r(m,N);R<g.length;R++)ce=p(N,m,R,g[R],_),ce!==null&&(t&&ce.alternate!==null&&N.delete(ce.key===null?R:ce.key),f=s(ce,f,R),T===null?k=ce:T.sibling=ce,T=ce);return t&&N.forEach(function(rt){return e(m,rt)}),Ce&&ss(m,R),k}function v(m,f,g,_){var k=za(g);if(typeof k!="function")throw Error(A(150));if(g=k.call(g),g==null)throw Error(A(151));for(var T=k=null,N=f,R=f=0,ce=null,q=g.next();N!==null&&!q.done;R++,q=g.next()){N.index>R?(ce=N,N=null):ce=N.sibling;var rt=d(m,N,q.value,_);if(rt===null){N===null&&(N=ce);break}t&&N&&rt.alternate===null&&e(m,N),f=s(rt,f,R),T===null?k=rt:T.sibling=rt,T=rt,N=ce}if(q.done)return n(m,N),Ce&&ss(m,R),k;if(N===null){for(;!q.done;R++,q=g.next())q=h(m,q.value,_),q!==null&&(f=s(q,f,R),T===null?k=q:T.sibling=q,T=q);return Ce&&ss(m,R),k}for(N=r(m,N);!q.done;R++,q=g.next())q=p(N,m,R,q.value,_),q!==null&&(t&&q.alternate!==null&&N.delete(q.key===null?R:q.key),f=s(q,f,R),T===null?k=q:T.sibling=q,T=q);return t&&N.forEach(function(Tn){return e(m,Tn)}),Ce&&ss(m,R),k}function I(m,f,g,_){if(typeof g=="object"&&g!==null&&g.type===So&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case mc:e:{for(var k=g.key,T=f;T!==null;){if(T.key===k){if(k=g.type,k===So){if(T.tag===7){n(m,T.sibling),f=i(T,g.props.children),f.return=m,m=f;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===li&&f_(k)===T.type){n(m,T.sibling),f=i(T,g.props),f.ref=Ha(m,T,g),f.return=m,m=f;break e}n(m,T);break}else e(m,T);T=T.sibling}g.type===So?(f=Cs(g.props.children,m.mode,_,g.key),f.return=m,m=f):(_=rh(g.type,g.key,g.props,null,m.mode,_),_.ref=Ha(m,f,g),_.return=m,m=_)}return o(m);case Eo:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=gp(g,m.mode,_),f.return=m,m=f}return o(m);case li:return T=g._init,I(m,f,T(g._payload),_)}if(ll(g))return y(m,f,g,_);if(za(g))return v(m,f,g,_);Cc(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=mp(g,m.mode,_),f.return=m,m=f),o(m)):n(m,f)}return I}var ea=RS(!0),xS=RS(!1),Uu={},dr=Hi(Uu),eu=Hi(Uu),tu=Hi(Uu);function vs(t){if(t===Uu)throw Error(A(174));return t}function Ky(t,e){switch(ye(tu,e),ye(eu,t),ye(dr,Uu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wm(e,t)}Ee(dr),ye(dr,e)}function ta(){Ee(dr),Ee(eu),Ee(tu)}function PS(t){vs(tu.current);var e=vs(dr.current),n=wm(e,t.type);e!==n&&(ye(eu,t),ye(dr,n))}function Wy(t){eu.current===t&&(Ee(dr),Ee(eu))}var Pe=Hi(0);function Ph(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var up=[];function Hy(){for(var t=0;t<up.length;t++)up[t]._workInProgressVersionPrimary=null;up.length=0}var Jc=Gr.ReactCurrentDispatcher,cp=Gr.ReactCurrentBatchConfig,Os=0,Oe=null,Ze=null,ct=null,Oh=!1,Cl=!1,nu=0,yx=0;function Rt(){throw Error(A(321))}function Gy(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function Qy(t,e,n,r,i,s){if(Os=s,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jc.current=t===null||t.memoizedState===null?Ix:Ex,t=n(r,i),Cl){s=0;do{if(Cl=!1,nu=0,25<=s)throw Error(A(301));s+=1,ct=Ze=null,e.updateQueue=null,Jc.current=Sx,t=n(r,i)}while(Cl)}if(Jc.current=Lh,e=Ze!==null&&Ze.next!==null,Os=0,ct=Ze=Oe=null,Oh=!1,e)throw Error(A(300));return t}function Yy(){var t=nu!==0;return nu=0,t}function er(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Oe.memoizedState=ct=t:ct=ct.next=t,ct}function Mn(){if(Ze===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=ct===null?Oe.memoizedState:ct.next;if(e!==null)ct=e,Ze=t;else{if(t===null)throw Error(A(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},ct===null?Oe.memoizedState=ct=t:ct=ct.next=t}return ct}function ru(t,e){return typeof e=="function"?e(t):e}function hp(t){var e=Mn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Os&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Oe.lanes|=c,Ls|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Gn(r,e.memoizedState)||(rn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Oe.lanes|=s,Ls|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dp(t){var e=Mn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function OS(){}function LS(t,e){var n=Oe,r=Mn(),i=e(),s=!Gn(r.memoizedState,i);if(s&&(r.memoizedState=i,rn=!0),r=r.queue,Xy(FS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,iu(9,$S.bind(null,n,r,i,e),void 0,null),dt===null)throw Error(A(349));Os&30||MS(n,e,i)}return i}function MS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $S(t,e,n,r){e.value=n,e.getSnapshot=r,US(e)&&VS(t)}function FS(t,e,n){return n(function(){US(e)&&VS(t)})}function US(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function VS(t){var e=jr(t,1);e!==null&&Hn(e,t,1,-1)}function p_(t){var e=er();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ru,lastRenderedState:t},e.queue=t,t=t.dispatch=_x.bind(null,Oe,t),[e.memoizedState,t]}function iu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function BS(){return Mn().memoizedState}function Zc(t,e,n,r){var i=er();Oe.flags|=t,i.memoizedState=iu(1|e,n,void 0,r===void 0?null:r)}function Pd(t,e,n,r){var i=Mn();r=r===void 0?null:r;var s=void 0;if(Ze!==null){var o=Ze.memoizedState;if(s=o.destroy,r!==null&&Gy(r,o.deps)){i.memoizedState=iu(e,n,s,r);return}}Oe.flags|=t,i.memoizedState=iu(1|e,n,s,r)}function m_(t,e){return Zc(8390656,8,t,e)}function Xy(t,e){return Pd(2048,8,t,e)}function zS(t,e){return Pd(4,2,t,e)}function jS(t,e){return Pd(4,4,t,e)}function qS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function KS(t,e,n){return n=n!=null?n.concat([t]):null,Pd(4,4,qS.bind(null,e,t),n)}function Jy(){}function WS(t,e){var n=Mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gy(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function HS(t,e){var n=Mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gy(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function GS(t,e,n){return Os&21?(Gn(n,e)||(n=X1(),Oe.lanes|=n,Ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function vx(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=cp.transition;cp.transition={};try{t(!1),e()}finally{me=n,cp.transition=r}}function QS(){return Mn().memoizedState}function wx(t,e,n){var r=Ci(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},YS(t))XS(e,n);else if(n=bS(t,e,n,r),n!==null){var i=Ht();Hn(n,t,r,i),JS(n,e,r)}}function _x(t,e,n){var r=Ci(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(YS(t))XS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Gn(a,o)){var l=e.interleaved;l===null?(i.next=i,jy(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=bS(t,e,i,r),n!==null&&(i=Ht(),Hn(n,t,r,i),JS(n,e,r))}}function YS(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function XS(t,e){Cl=Oh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function JS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ny(t,n)}}var Lh={readContext:Ln,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},Ix={readContext:Ln,useCallback:function(t,e){return er().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:m_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zc(4194308,4,qS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zc(4,2,t,e)},useMemo:function(t,e){var n=er();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=er();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wx.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=er();return t={current:t},e.memoizedState=t},useState:p_,useDebugValue:Jy,useDeferredValue:function(t){return er().memoizedState=t},useTransition:function(){var t=p_(!1),e=t[0];return t=vx.bind(null,t[1]),er().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,i=er();if(Ce){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),dt===null)throw Error(A(349));Os&30||MS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,m_(FS.bind(null,r,s,t),[t]),r.flags|=2048,iu(9,$S.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=er(),e=dt.identifierPrefix;if(Ce){var n=Rr,r=Dr;n=(r&~(1<<32-Wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=nu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ex={readContext:Ln,useCallback:WS,useContext:Ln,useEffect:Xy,useImperativeHandle:KS,useInsertionEffect:zS,useLayoutEffect:jS,useMemo:HS,useReducer:hp,useRef:BS,useState:function(){return hp(ru)},useDebugValue:Jy,useDeferredValue:function(t){var e=Mn();return GS(e,Ze.memoizedState,t)},useTransition:function(){var t=hp(ru)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:OS,useSyncExternalStore:LS,useId:QS,unstable_isNewReconciler:!1},Sx={readContext:Ln,useCallback:WS,useContext:Ln,useEffect:Xy,useImperativeHandle:KS,useInsertionEffect:zS,useLayoutEffect:jS,useMemo:HS,useReducer:dp,useRef:BS,useState:function(){return dp(ru)},useDebugValue:Jy,useDeferredValue:function(t){var e=Mn();return Ze===null?e.memoizedState=t:GS(e,Ze.memoizedState,t)},useTransition:function(){var t=dp(ru)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:OS,useSyncExternalStore:LS,useId:QS,unstable_isNewReconciler:!1};function na(t,e){try{var n="",r=e;do n+=XD(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Tx=typeof WeakMap=="function"?WeakMap:Map;function ZS(t,e,n){n=$r(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$h||($h=!0,Jm=r),zm(t,e)},n}function eT(t,e,n){n=$r(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zm(t,e),typeof r!="function"&&(ki===null?ki=new Set([this]):ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function g_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Tx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Fx.bind(null,t,e,n),e.then(t,t))}function y_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function v_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$r(-1,1),e.tag=2,Ti(n,e,1))),n.lanes|=1),t)}var kx=Gr.ReactCurrentOwner,rn=!1;function jt(t,e,n,r){e.child=t===null?xS(e,null,n,r):ea(e,t.child,n,r)}function w_(t,e,n,r,i){n=n.render;var s=e.ref;return Vo(e,i),r=Qy(t,e,n,r,s,i),n=Yy(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qr(t,e,i)):(Ce&&n&&$y(e),e.flags|=1,jt(t,e,r,i),e.child)}function __(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ov(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tT(t,e,s,r,i)):(t=rh(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yl,n(o,r)&&t.ref===e.ref)return qr(t,e,i)}return e.flags|=1,t=bi(s,r),t.ref=e.ref,t.return=e,e.child=t}function tT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Yl(s,r)&&t.ref===e.ref)if(rn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,qr(t,e,i)}return jm(t,e,n,r,i)}function nT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Po,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Po,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Po,pn),pn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Po,pn),pn|=r;return jt(t,e,i,n),e.child}function rT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jm(t,e,n,r,i){var s=un(n)?xs:$t.current;return s=Jo(e,s),Vo(e,i),n=Qy(t,e,n,r,s,i),r=Yy(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qr(t,e,i)):(Ce&&r&&$y(e),e.flags|=1,jt(t,e,n,i),e.child)}function I_(t,e,n,r,i){if(un(n)){var s=!0;bh(e)}else s=!1;if(Vo(e,i),e.stateNode===null)eh(t,e),DS(e,n,r),Bm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=un(n)?xs:$t.current,u=Jo(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&d_(e,o,r,u),ui=!1;var d=e.memoizedState;o.state=d,xh(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ln.current||ui?(typeof c=="function"&&(Vm(e,n,c,r),l=e.memoizedState),(a=ui||h_(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,AS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Vn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=un(n)?xs:$t.current,l=Jo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&d_(e,o,r,l),ui=!1,d=e.memoizedState,o.state=d,xh(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||ln.current||ui?(typeof p=="function"&&(Vm(e,n,p,r),y=e.memoizedState),(u=ui||h_(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return qm(t,e,n,r,s,i)}function qm(t,e,n,r,i,s){rT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&o_(e,n,!1),qr(t,e,s);r=e.stateNode,kx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ea(e,t.child,null,s),e.child=ea(e,null,a,s)):jt(t,e,a,s),e.memoizedState=r.state,i&&o_(e,n,!0),e.child}function iT(t){var e=t.stateNode;e.pendingContext?s_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&s_(t,e.context,!1),Ky(t,e.containerInfo)}function E_(t,e,n,r,i){return Zo(),Uy(i),e.flags|=256,jt(t,e,n,r),e.child}var Km={dehydrated:null,treeContext:null,retryLane:0};function Wm(t){return{baseLanes:t,cachePool:null,transitions:null}}function sT(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Pe,i&1),t===null)return Fm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Md(o,r,0,null),t=Cs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wm(n),e.memoizedState=Km,t):Zy(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Cx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=bi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=bi(a,s):(s=Cs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Wm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Km,r}return s=t.child,t=s.sibling,r=bi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zy(t,e){return e=Md({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bc(t,e,n,r){return r!==null&&Uy(r),ea(e,t.child,null,n),t=Zy(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fp(Error(A(422))),bc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Md({mode:"visible",children:r.children},i,0,null),s=Cs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ea(e,t.child,null,o),e.child.memoizedState=Wm(o),e.memoizedState=Km,s);if(!(e.mode&1))return bc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=fp(s,r,void 0),bc(t,e,o,r)}if(a=(o&t.childLanes)!==0,rn||a){if(r=dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jr(t,i),Hn(r,t,i,-1))}return sv(),r=fp(Error(A(421))),bc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ux.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gn=Si(i.nextSibling),vn=e,Ce=!0,zn=null,t!==null&&(An[Nn++]=Dr,An[Nn++]=Rr,An[Nn++]=Ps,Dr=t.id,Rr=t.overflow,Ps=e),e=Zy(e,r.children),e.flags|=4096,e)}function S_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Um(t.return,e,n)}function pp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function oT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(jt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&S_(t,n,e);else if(t.tag===19)S_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ph(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ph(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pp(e,!0,n,null,s);break;case"together":pp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eh(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bx(t,e,n){switch(e.tag){case 3:iT(e),Zo();break;case 5:PS(e);break;case 1:un(e.type)&&bh(e);break;case 4:Ky(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Dh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?sT(t,e,n):(ye(Pe,Pe.current&1),t=qr(t,e,n),t!==null?t.sibling:null);ye(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return oT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,nT(t,e,n)}return qr(t,e,n)}var aT,Hm,lT,uT;aT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hm=function(){};lT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vs(dr.current);var s=null;switch(n){case"input":i=mm(t,i),r=mm(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=vm(t,i),r=vm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kh)}_m(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};uT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ga(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ax(t,e,n){var r=e.pendingProps;switch(Fy(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return un(e.type)&&Ch(),xt(e),null;case 3:return r=e.stateNode,ta(),Ee(ln),Ee($t),Hy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(kc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(tg(zn),zn=null))),Hm(t,e),xt(e),null;case 5:Wy(e);var i=vs(tu.current);if(n=e.type,t!==null&&e.stateNode!=null)lT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return xt(e),null}if(t=vs(dr.current),kc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tr]=e,r[Zl]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<cl.length;i++)_e(cl[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":x0(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":O0(r,s),_e("invalid",r)}_m(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Tc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Tc(r.textContent,a,t),i=["children",""+a]):jl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":gc(r),P0(r,s,!0);break;case"textarea":gc(r),L0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=kh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=M1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tr]=e,t[Zl]=r,aT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Im(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<cl.length;i++)_e(cl[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":x0(t,r),i=mm(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),_e("invalid",t);break;case"textarea":O0(t,r),i=vm(t,r),_e("invalid",t);break;default:i=r}_m(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?U1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ql(t,l):typeof l=="number"&&ql(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(jl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&Sy(t,s,l,o))}switch(n){case"input":gc(t),P0(t,r,!1);break;case"textarea":gc(t),L0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ri(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mo(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=kh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)uT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=vs(tu.current),vs(dr.current),kc(e)){if(r=e.stateNode,n=e.memoizedProps,r[tr]=e,(s=r.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Tc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tr]=e,e.stateNode=r}return xt(e),null;case 13:if(Ee(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&gn!==null&&e.mode&1&&!(e.flags&128))CS(),Zo(),e.flags|=98560,s=!1;else if(s=kc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[tr]=e}else Zo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xt(e),s=!1}else zn!==null&&(tg(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?et===0&&(et=3):sv())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return ta(),Hm(t,e),t===null&&Xl(e.stateNode.containerInfo),xt(e),null;case 10:return zy(e.type._context),xt(e),null;case 17:return un(e.type)&&Ch(),xt(e),null;case 19:if(Ee(Pe),s=e.memoizedState,s===null)return xt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ga(s,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ph(t),o!==null){for(e.flags|=128,Ga(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Be()>ra&&(e.flags|=128,r=!0,Ga(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ph(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return xt(e),null}else 2*Be()-s.renderingStartTime>ra&&n!==1073741824&&(e.flags|=128,r=!0,Ga(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Be(),e.sibling=null,n=Pe.current,ye(Pe,r?n&1|2:n&1),e):(xt(e),null);case 22:case 23:return iv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pn&1073741824&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function Nx(t,e){switch(Fy(e),e.tag){case 1:return un(e.type)&&Ch(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ta(),Ee(ln),Ee($t),Hy(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wy(e),null;case 13:if(Ee(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Pe),null;case 4:return ta(),null;case 10:return zy(e.type._context),null;case 22:case 23:return iv(),null;case 24:return null;default:return null}}var Ac=!1,Ot=!1,Dx=typeof WeakSet=="function"?WeakSet:Set,U=null;function xo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(t,e,r)}else n.current=null}function Gm(t,e,n){try{n()}catch(r){$e(t,e,r)}}var T_=!1;function Rx(t,e){if(Rm=Eh,t=fS(),My(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xm={focusedElem:t,selectionRange:n},Eh=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,I=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Vn(e.type,v),I);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(_){$e(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return y=T_,T_=!1,y}function bl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gm(e,n,s)}i=i.next}while(i!==r)}}function Od(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cT(t){var e=t.alternate;e!==null&&(t.alternate=null,cT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tr],delete e[Zl],delete e[Lm],delete e[fx],delete e[px])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hT(t){return t.tag===5||t.tag===3||t.tag===4}function k_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ym(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kh));else if(r!==4&&(t=t.child,t!==null))for(Ym(t,e,n),t=t.sibling;t!==null;)Ym(t,e,n),t=t.sibling}function Xm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xm(t,e,n),t=t.sibling;t!==null;)Xm(t,e,n),t=t.sibling}var wt=null,Bn=!1;function ri(t,e,n){for(n=n.child;n!==null;)dT(t,e,n),n=n.sibling}function dT(t,e,n){if(hr&&typeof hr.onCommitFiberUnmount=="function")try{hr.onCommitFiberUnmount(Cd,n)}catch{}switch(n.tag){case 5:Ot||xo(n,e);case 6:var r=wt,i=Bn;wt=null,ri(t,e,n),wt=r,Bn=i,wt!==null&&(Bn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(Bn?(t=wt,n=n.stateNode,t.nodeType===8?ap(t.parentNode,n):t.nodeType===1&&ap(t,n),Gl(t)):ap(wt,n.stateNode));break;case 4:r=wt,i=Bn,wt=n.stateNode.containerInfo,Bn=!0,ri(t,e,n),wt=r,Bn=i;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gm(n,e,o),i=i.next}while(i!==r)}ri(t,e,n);break;case 1:if(!Ot&&(xo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$e(n,e,a)}ri(t,e,n);break;case 21:ri(t,e,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,ri(t,e,n),Ot=r):ri(t,e,n);break;default:ri(t,e,n)}}function C_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dx),e.forEach(function(r){var i=Vx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:wt=a.stateNode,Bn=!1;break e;case 3:wt=a.stateNode.containerInfo,Bn=!0;break e;case 4:wt=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(wt===null)throw Error(A(160));dT(s,o,i),wt=null,Bn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){$e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fT(e,t),e=e.sibling}function fT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Zn(t),r&4){try{bl(3,t,t.return),Od(3,t)}catch(v){$e(t,t.return,v)}try{bl(5,t,t.return)}catch(v){$e(t,t.return,v)}}break;case 1:Un(e,t),Zn(t),r&512&&n!==null&&xo(n,n.return);break;case 5:if(Un(e,t),Zn(t),r&512&&n!==null&&xo(n,n.return),t.flags&32){var i=t.stateNode;try{ql(i,"")}catch(v){$e(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&O1(i,s),Im(a,o);var u=Im(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?U1(i,h):c==="dangerouslySetInnerHTML"?$1(i,h):c==="children"?ql(i,h):Sy(i,c,h,u)}switch(a){case"input":gm(i,s);break;case"textarea":L1(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Mo(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Mo(i,!!s.multiple,s.defaultValue,!0):Mo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zl]=s}catch(v){$e(t,t.return,v)}}break;case 6:if(Un(e,t),Zn(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){$e(t,t.return,v)}}break;case 3:if(Un(e,t),Zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gl(e.containerInfo)}catch(v){$e(t,t.return,v)}break;case 4:Un(e,t),Zn(t);break;case 13:Un(e,t),Zn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(nv=Be())),r&4&&C_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(u=Ot)||c,Un(e,t),Ot=u):Un(e,t),Zn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,p=d.child,d.tag){case 0:case 11:case 14:case 15:bl(4,d,d.return);break;case 1:xo(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){$e(r,n,v)}}break;case 5:xo(d,d.return);break;case 22:if(d.memoizedState!==null){A_(h);continue}}p!==null?(p.return=d,U=p):A_(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=F1("display",o))}catch(v){$e(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){$e(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Un(e,t),Zn(t),r&4&&C_(t);break;case 21:break;default:Un(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hT(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ql(i,""),r.flags&=-33);var s=k_(t);Xm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=k_(t);Ym(t,a,o);break;default:throw Error(A(161))}}catch(l){$e(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xx(t,e,n){U=t,pT(t)}function pT(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ac;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ot;a=Ac;var u=Ot;if(Ac=o,(Ot=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?N_(i):l!==null?(l.return=o,U=l):N_(i);for(;s!==null;)U=s,pT(s),s=s.sibling;U=i,Ac=a,Ot=u}b_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):b_(t)}}function b_(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Od(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&c_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}c_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Gl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ot||e.flags&512&&Qm(e)}catch(d){$e(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function A_(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function N_(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Od(4,e)}catch(l){$e(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){$e(e,i,l)}}var s=e.return;try{Qm(e)}catch(l){$e(e,s,l)}break;case 5:var o=e.return;try{Qm(e)}catch(l){$e(e,o,l)}}}catch(l){$e(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var Px=Math.ceil,Mh=Gr.ReactCurrentDispatcher,ev=Gr.ReactCurrentOwner,On=Gr.ReactCurrentBatchConfig,le=0,dt=null,Qe=null,St=0,pn=0,Po=Hi(0),et=0,su=null,Ls=0,Ld=0,tv=0,Al=null,nn=null,nv=0,ra=1/0,Cr=null,$h=!1,Jm=null,ki=null,Nc=!1,gi=null,Fh=0,Nl=0,Zm=null,th=-1,nh=0;function Ht(){return le&6?Be():th!==-1?th:th=Be()}function Ci(t){return t.mode&1?le&2&&St!==0?St&-St:gx.transition!==null?(nh===0&&(nh=X1()),nh):(t=me,t!==0||(t=window.event,t=t===void 0?16:iS(t.type)),t):1}function Hn(t,e,n,r){if(50<Nl)throw Nl=0,Zm=null,Error(A(185));Mu(t,n,r),(!(le&2)||t!==dt)&&(t===dt&&(!(le&2)&&(Ld|=n),et===4&&hi(t,St)),cn(t,r),n===1&&le===0&&!(e.mode&1)&&(ra=Be()+500,Rd&&Gi()))}function cn(t,e){var n=t.callbackNode;gR(t,e);var r=Ih(t,t===dt?St:0);if(r===0)n!==null&&F0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&F0(n),e===1)t.tag===0?mx(D_.bind(null,t)):SS(D_.bind(null,t)),hx(function(){!(le&6)&&Gi()}),n=null;else{switch(J1(r)){case 1:n=Ay;break;case 4:n=Q1;break;case 16:n=_h;break;case 536870912:n=Y1;break;default:n=_h}n=ET(n,mT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mT(t,e){if(th=-1,nh=0,le&6)throw Error(A(327));var n=t.callbackNode;if(Bo()&&t.callbackNode!==n)return null;var r=Ih(t,t===dt?St:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Uh(t,r);else{e=r;var i=le;le|=2;var s=yT();(dt!==t||St!==e)&&(Cr=null,ra=Be()+500,ks(t,e));do try{Mx();break}catch(a){gT(t,a)}while(1);By(),Mh.current=s,le=i,Qe!==null?e=0:(dt=null,St=0,e=et)}if(e!==0){if(e===2&&(i=Cm(t),i!==0&&(r=i,e=eg(t,i))),e===1)throw n=su,ks(t,0),hi(t,r),cn(t,Be()),n;if(e===6)hi(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ox(i)&&(e=Uh(t,r),e===2&&(s=Cm(t),s!==0&&(r=s,e=eg(t,s))),e===1))throw n=su,ks(t,0),hi(t,r),cn(t,Be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:os(t,nn,Cr);break;case 3:if(hi(t,r),(r&130023424)===r&&(e=nv+500-Be(),10<e)){if(Ih(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Om(os.bind(null,t,nn,Cr),e);break}os(t,nn,Cr);break;case 4:if(hi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Px(r/1960))-r,10<r){t.timeoutHandle=Om(os.bind(null,t,nn,Cr),r);break}os(t,nn,Cr);break;case 5:os(t,nn,Cr);break;default:throw Error(A(329))}}}return cn(t,Be()),t.callbackNode===n?mT.bind(null,t):null}function eg(t,e){var n=Al;return t.current.memoizedState.isDehydrated&&(ks(t,e).flags|=256),t=Uh(t,e),t!==2&&(e=nn,nn=n,e!==null&&tg(e)),t}function tg(t){nn===null?nn=t:nn.push.apply(nn,t)}function Ox(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hi(t,e){for(e&=~tv,e&=~Ld,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),r=1<<n;t[n]=-1,e&=~r}}function D_(t){if(le&6)throw Error(A(327));Bo();var e=Ih(t,0);if(!(e&1))return cn(t,Be()),null;var n=Uh(t,e);if(t.tag!==0&&n===2){var r=Cm(t);r!==0&&(e=r,n=eg(t,r))}if(n===1)throw n=su,ks(t,0),hi(t,e),cn(t,Be()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,os(t,nn,Cr),cn(t,Be()),null}function rv(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(ra=Be()+500,Rd&&Gi())}}function Ms(t){gi!==null&&gi.tag===0&&!(le&6)&&Bo();var e=le;le|=1;var n=On.transition,r=me;try{if(On.transition=null,me=1,t)return t()}finally{me=r,On.transition=n,le=e,!(le&6)&&Gi()}}function iv(){pn=Po.current,Ee(Po)}function ks(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cx(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(Fy(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ch();break;case 3:ta(),Ee(ln),Ee($t),Hy();break;case 5:Wy(r);break;case 4:ta();break;case 13:Ee(Pe);break;case 19:Ee(Pe);break;case 10:zy(r.type._context);break;case 22:case 23:iv()}n=n.return}if(dt=t,Qe=t=bi(t.current,null),St=pn=e,et=0,su=null,tv=Ld=Ls=0,nn=Al=null,ys!==null){for(e=0;e<ys.length;e++)if(n=ys[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ys=null}return t}function gT(t,e){do{var n=Qe;try{if(By(),Jc.current=Lh,Oh){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oh=!1}if(Os=0,ct=Ze=Oe=null,Cl=!1,nu=0,ev.current=null,n===null||n.return===null){et=1,su=e,Qe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=St,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=y_(o);if(p!==null){p.flags&=-257,v_(p,o,a,s,e),p.mode&1&&g_(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){g_(s,u,e),sv();break e}l=Error(A(426))}}else if(Ce&&a.mode&1){var I=y_(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),v_(I,o,a,s,e),Uy(na(l,a));break e}}s=l=na(l,a),et!==4&&(et=2),Al===null?Al=[s]:Al.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=ZS(s,l,e);u_(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ki===null||!ki.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=eT(s,a,e);u_(s,_);break e}}s=s.return}while(s!==null)}wT(n)}catch(k){e=k,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(1)}function yT(){var t=Mh.current;return Mh.current=Lh,t===null?Lh:t}function sv(){(et===0||et===3||et===2)&&(et=4),dt===null||!(Ls&268435455)&&!(Ld&268435455)||hi(dt,St)}function Uh(t,e){var n=le;le|=2;var r=yT();(dt!==t||St!==e)&&(Cr=null,ks(t,e));do try{Lx();break}catch(i){gT(t,i)}while(1);if(By(),le=n,Mh.current=r,Qe!==null)throw Error(A(261));return dt=null,St=0,et}function Lx(){for(;Qe!==null;)vT(Qe)}function Mx(){for(;Qe!==null&&!aR();)vT(Qe)}function vT(t){var e=IT(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?wT(t):Qe=e,ev.current=null}function wT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Nx(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Qe=null;return}}else if(n=Ax(n,e,pn),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);et===0&&(et=5)}function os(t,e,n){var r=me,i=On.transition;try{On.transition=null,me=1,$x(t,e,n,r)}finally{On.transition=i,me=r}return null}function $x(t,e,n,r){do Bo();while(gi!==null);if(le&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yR(t,s),t===dt&&(Qe=dt=null,St=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nc||(Nc=!0,ET(_h,function(){return Bo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var o=me;me=1;var a=le;le|=4,ev.current=null,Rx(t,n),fT(n,t),rx(xm),Eh=!!Rm,xm=Rm=null,t.current=n,xx(n),lR(),le=a,me=o,On.transition=s}else t.current=n;if(Nc&&(Nc=!1,gi=t,Fh=i),s=t.pendingLanes,s===0&&(ki=null),hR(n.stateNode),cn(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($h)throw $h=!1,t=Jm,Jm=null,t;return Fh&1&&t.tag!==0&&Bo(),s=t.pendingLanes,s&1?t===Zm?Nl++:(Nl=0,Zm=t):Nl=0,Gi(),null}function Bo(){if(gi!==null){var t=J1(Fh),e=On.transition,n=me;try{if(On.transition=null,me=16>t?16:t,gi===null)var r=!1;else{if(t=gi,gi=null,Fh=0,le&6)throw Error(A(331));var i=le;for(le|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:bl(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,p=c.return;if(cT(c),c===u){U=null;break}if(d!==null){d.return=p,U=d;break}U=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var I=v.sibling;v.sibling=null,v=I}while(v!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bl(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,U=m;break e}U=s.return}}var f=t.current;for(U=f;U!==null;){o=U;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,U=g;else e:for(o=f;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Od(9,a)}}catch(k){$e(a,a.return,k)}if(a===o){U=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,U=_;break e}U=a.return}}if(le=i,Gi(),hr&&typeof hr.onPostCommitFiberRoot=="function")try{hr.onPostCommitFiberRoot(Cd,t)}catch{}r=!0}return r}finally{me=n,On.transition=e}}return!1}function R_(t,e,n){e=na(n,e),e=ZS(t,e,1),t=Ti(t,e,1),e=Ht(),t!==null&&(Mu(t,1,e),cn(t,e))}function $e(t,e,n){if(t.tag===3)R_(t,t,n);else for(;e!==null;){if(e.tag===3){R_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ki===null||!ki.has(r))){t=na(n,t),t=eT(e,t,1),e=Ti(e,t,1),t=Ht(),e!==null&&(Mu(e,1,t),cn(e,t));break}}e=e.return}}function Fx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ht(),t.pingedLanes|=t.suspendedLanes&n,dt===t&&(St&n)===n&&(et===4||et===3&&(St&130023424)===St&&500>Be()-nv?ks(t,0):tv|=n),cn(t,e)}function _T(t,e){e===0&&(t.mode&1?(e=wc,wc<<=1,!(wc&130023424)&&(wc=4194304)):e=1);var n=Ht();t=jr(t,e),t!==null&&(Mu(t,e,n),cn(t,n))}function Ux(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_T(t,n)}function Vx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),_T(t,n)}var IT;IT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,bx(t,e,n);rn=!!(t.flags&131072)}else rn=!1,Ce&&e.flags&1048576&&TS(e,Nh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;eh(t,e),t=e.pendingProps;var i=Jo(e,$t.current);Vo(e,n),i=Qy(null,e,r,t,i,n);var s=Yy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(r)?(s=!0,bh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qy(e),i.updater=xd,e.stateNode=i,i._reactInternals=e,Bm(e,r,t,n),e=qm(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&$y(e),jt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(eh(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zx(r),t=Vn(r,t),i){case 0:e=jm(null,e,r,t,n);break e;case 1:e=I_(null,e,r,t,n);break e;case 11:e=w_(null,e,r,t,n);break e;case 14:e=__(null,e,r,Vn(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),jm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),I_(t,e,r,i,n);case 3:e:{if(iT(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,AS(t,e),xh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=na(Error(A(423)),e),e=E_(t,e,r,n,i);break e}else if(r!==i){i=na(Error(A(424)),e),e=E_(t,e,r,n,i);break e}else for(gn=Si(e.stateNode.containerInfo.firstChild),vn=e,Ce=!0,zn=null,n=xS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zo(),r===i){e=qr(t,e,n);break e}jt(t,e,r,n)}e=e.child}return e;case 5:return PS(e),t===null&&Fm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Pm(r,i)?o=null:s!==null&&Pm(r,s)&&(e.flags|=32),rT(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Fm(e),null;case 13:return sT(t,e,n);case 4:return Ky(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ea(e,null,r,n):jt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),w_(t,e,r,i,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Dh,r._currentValue),r._currentValue=o,s!==null)if(Gn(s.value,o)){if(s.children===i.children&&!ln.current){e=qr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=$r(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Um(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Um(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vo(e,n),i=Ln(i),r=r(i),e.flags|=1,jt(t,e,r,n),e.child;case 14:return r=e.type,i=Vn(r,e.pendingProps),i=Vn(r.type,i),__(t,e,r,i,n);case 15:return tT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vn(r,i),eh(t,e),e.tag=1,un(r)?(t=!0,bh(e)):t=!1,Vo(e,n),DS(e,r,i),Bm(e,r,i,n),qm(null,e,r,!0,t,n);case 19:return oT(t,e,n);case 22:return nT(t,e,n)}throw Error(A(156,e.tag))};function ET(t,e){return G1(t,e)}function Bx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,r){return new Bx(t,e,n,r)}function ov(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zx(t){if(typeof t=="function")return ov(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ky)return 11;if(t===Cy)return 14}return 2}function bi(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rh(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ov(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case So:return Cs(n.children,i,s,e);case Ty:o=8,i|=8;break;case hm:return t=Rn(12,n,e,i|2),t.elementType=hm,t.lanes=s,t;case dm:return t=Rn(13,n,e,i),t.elementType=dm,t.lanes=s,t;case fm:return t=Rn(19,n,e,i),t.elementType=fm,t.lanes=s,t;case R1:return Md(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N1:o=10;break e;case D1:o=9;break e;case ky:o=11;break e;case Cy:o=14;break e;case li:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cs(t,e,n,r){return t=Rn(7,t,r,e),t.lanes=n,t}function Md(t,e,n,r){return t=Rn(22,t,r,e),t.elementType=R1,t.lanes=n,t.stateNode={isHidden:!1},t}function mp(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function gp(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yf(0),this.expirationTimes=Yf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function av(t,e,n,r,i,s,o,a,l){return t=new jx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qy(s),t}function qx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Eo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ST(t){if(!t)return xi;t=t._reactInternals;e:{if(to(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(un(n))return ES(t,n,e)}return e}function TT(t,e,n,r,i,s,o,a,l){return t=av(n,r,!0,t,i,s,o,a,l),t.context=ST(null),n=t.current,r=Ht(),i=Ci(n),s=$r(r,i),s.callback=e??null,Ti(n,s,i),t.current.lanes=i,Mu(t,i,r),cn(t,r),t}function $d(t,e,n,r){var i=e.current,s=Ht(),o=Ci(i);return n=ST(n),e.context===null?e.context=n:e.pendingContext=n,e=$r(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ti(i,e,o),t!==null&&(Hn(t,i,o,s),Xc(t,i,o)),o}function Vh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function x_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lv(t,e){x_(t,e),(t=t.alternate)&&x_(t,e)}function Kx(){return null}var kT=typeof reportError=="function"?reportError:function(t){console.error(t)};function uv(t){this._internalRoot=t}Fd.prototype.render=uv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));$d(t,e,null,null)};Fd.prototype.unmount=uv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ms(function(){$d(null,t,null,null)}),e[zr]=null}};function Fd(t){this._internalRoot=t}Fd.prototype.unstable_scheduleHydration=function(t){if(t){var e=tS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ci.length&&e!==0&&e<ci[n].priority;n++);ci.splice(n,0,t),n===0&&rS(t)}};function cv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function P_(){}function Wx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Vh(o);s.call(u)}}var o=TT(e,r,t,0,null,!1,!1,"",P_);return t._reactRootContainer=o,t[zr]=o.current,Xl(t.nodeType===8?t.parentNode:t),Ms(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Vh(l);a.call(u)}}var l=av(t,0,!1,null,null,!1,!1,"",P_);return t._reactRootContainer=l,t[zr]=l.current,Xl(t.nodeType===8?t.parentNode:t),Ms(function(){$d(e,l,n,r)}),l}function Vd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Vh(o);a.call(l)}}$d(e,o,t,i)}else o=Wx(n,e,t,i,r);return Vh(o)}Z1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ul(e.pendingLanes);n!==0&&(Ny(e,n|1),cn(e,Be()),!(le&6)&&(ra=Be()+500,Gi()))}break;case 13:Ms(function(){var r=jr(t,1);if(r!==null){var i=Ht();Hn(r,t,1,i)}}),lv(t,1)}};Dy=function(t){if(t.tag===13){var e=jr(t,134217728);if(e!==null){var n=Ht();Hn(e,t,134217728,n)}lv(t,134217728)}};eS=function(t){if(t.tag===13){var e=Ci(t),n=jr(t,e);if(n!==null){var r=Ht();Hn(n,t,e,r)}lv(t,e)}};tS=function(){return me};nS=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Sm=function(t,e,n){switch(e){case"input":if(gm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Dd(r);if(!i)throw Error(A(90));P1(r),gm(r,i)}}}break;case"textarea":L1(t,n);break;case"select":e=n.value,e!=null&&Mo(t,!!n.multiple,e,!1)}};z1=rv;j1=Ms;var Hx={usingClientEntryPoint:!1,Events:[Fu,bo,Dd,V1,B1,rv]},Qa={findFiberByHostInstance:gs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Gx={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=W1(t),t===null?null:t.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||Kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dc.isDisabled&&Dc.supportsFiber)try{Cd=Dc.inject(Gx),hr=Dc}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cv(e))throw Error(A(200));return qx(t,e,null,n)};En.createRoot=function(t,e){if(!cv(t))throw Error(A(299));var n=!1,r="",i=kT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=av(t,1,!1,null,null,n,!1,r,i),t[zr]=e.current,Xl(t.nodeType===8?t.parentNode:t),new uv(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=W1(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Ms(t)};En.hydrate=function(t,e,n){if(!Ud(e))throw Error(A(200));return Vd(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!cv(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=kT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=TT(e,null,t,1,n??null,i,!1,s,o),t[zr]=e.current,Xl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fd(e)};En.render=function(t,e,n){if(!Ud(e))throw Error(A(200));return Vd(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!Ud(t))throw Error(A(40));return t._reactRootContainer?(Ms(function(){Vd(null,null,t,!1,function(){t._reactRootContainer=null,t[zr]=null})}),!0):!1};En.unstable_batchedUpdates=rv;En.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ud(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Vd(t,e,n,!1,r)};En.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=En})(KD);const hl=y1(gh);var O_=gh;lm.createRoot=O_.createRoot,lm.hydrateRoot=O_.hydrateRoot;const Qx="/assets/Logo-e60e83a3.png";/**
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
 *//**
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
 */const CT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Yx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(CT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Xx;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jx=function(t){const e=CT(t);return bT.encodeByteArray(e,!0)},Bh=function(t){return Jx(t).replace(/\./g,"")},AT=function(t){try{return bT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function zh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Zx(n)||(t[n]=zh(t[n],e[n]));return t}function Zx(t){return t!=="__proto__"}/**
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
 */function eP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tP=()=>eP().__FIREBASE_DEFAULTS__,nP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&AT(t[1]);return e&&JSON.parse(e)},Bd=()=>{try{return tP()||nP()||rP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},NT=t=>{var e,n;return(n=(e=Bd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},DT=t=>{const e=NT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iP=()=>{var t;return(t=Bd())===null||t===void 0?void 0:t.config},RT=t=>{var e;return(e=Bd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Bh(JSON.stringify(n)),Bh(JSON.stringify(o)),a].join(".")}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function hv(){var t;const e=(t=Bd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aP(){return typeof self=="object"&&self.self===self}function PT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OT(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lP(){return!hv()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $s(){try{return typeof indexedDB=="object"}catch{return!1}}function uP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function cP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const hP="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hP,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_r.prototype.create)}}class _r{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tt(i,a,r)}}function dP(t,e){return t.replace(fP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fP=/\{\$([^}]+)}/g;/**
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
 */function L_(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function pP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(M_(s)&&M_(o)){if(!jh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function M_(t){return t!==null&&typeof t=="object"}/**
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
 */function Sa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function dl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function LT(t,e){const n=new mP(t,e);return n.subscribe.bind(n)}class mP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yp),i.error===void 0&&(i.error=yp),i.complete===void 0&&(i.complete=yp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yp(){}/**
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
 */function V(t){return t&&t._delegate?t._delegate:t}class Nt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const as="[DEFAULT]";/**
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
 */let yP=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wP(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function vP(t){return t===as?void 0:t}function wP(t){return t.instantiationMode==="EAGER"}/**
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
 */class _P{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const fv=[];var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const MT={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},IP=se.INFO,EP={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},SP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=EP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zd{constructor(e){this.name=e,this._logLevel=IP,this._logHandler=SP,this._userLogHandler=null,fv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}function TP(t){fv.forEach(e=>{e.setLogLevel(t)})}function kP(t,e){for(const n of fv){let r=null;e&&e.level&&(r=MT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:se[s].toLowerCase(),message:a,args:o,type:i.name})}}}const CP=(t,e)=>e.some(n=>t instanceof n);let $_,F_;function bP(){return $_||($_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AP(){return F_||(F_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $T=new WeakMap,ng=new WeakMap,FT=new WeakMap,vp=new WeakMap,pv=new WeakMap;function NP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ai(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$T.set(n,t)}).catch(()=>{}),pv.set(e,t),e}function DP(t){if(ng.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ng.set(t,e)}let rg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ng.get(t);if(e==="objectStoreNames")return t.objectStoreNames||FT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ai(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RP(t){rg=t(rg)}function xP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wp(this),e,...n);return FT.set(r,e.sort?e.sort():[e]),Ai(r)}:AP().includes(t)?function(...e){return t.apply(wp(this),e),Ai($T.get(this))}:function(...e){return Ai(t.apply(wp(this),e))}}function PP(t){return typeof t=="function"?xP(t):(t instanceof IDBTransaction&&DP(t),CP(t,bP())?new Proxy(t,rg):t)}function Ai(t){if(t instanceof IDBRequest)return NP(t);if(vp.has(t))return vp.get(t);const e=PP(t);return e!==t&&(vp.set(t,e),pv.set(e,t)),e}const wp=t=>pv.get(t);function OP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ai(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ai(o.result),l.oldVersion,l.newVersion,Ai(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const LP=["get","getKey","getAll","getAllKeys","count"],MP=["put","add","delete","clear"],_p=new Map;function U_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_p.get(e))return _p.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||LP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return _p.set(e,s),s}RP(t=>({...t,get:(e,n,r)=>U_(e,n)||t.get(e,n,r),has:(e,n)=>!!U_(e,n)||t.has(e,n)}));/**
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
 */class $P{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ig="@firebase/app",V_="0.9.9";/**
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
 */const Fs=new zd("@firebase/app"),UP="@firebase/app-compat",VP="@firebase/analytics-compat",BP="@firebase/analytics",zP="@firebase/app-check-compat",jP="@firebase/app-check",qP="@firebase/auth",KP="@firebase/auth-compat",WP="@firebase/database",HP="@firebase/database-compat",GP="@firebase/functions",QP="@firebase/functions-compat",YP="@firebase/installations",XP="@firebase/installations-compat",JP="@firebase/messaging",ZP="@firebase/messaging-compat",eO="@firebase/performance",tO="@firebase/performance-compat",nO="@firebase/remote-config",rO="@firebase/remote-config-compat",iO="@firebase/storage",sO="@firebase/storage-compat",oO="@firebase/firestore",aO="@firebase/firestore-compat",lO="firebase",uO="9.21.0";/**
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
 */const Pi="[DEFAULT]",cO={[ig]:"fire-core",[UP]:"fire-core-compat",[BP]:"fire-analytics",[VP]:"fire-analytics-compat",[jP]:"fire-app-check",[zP]:"fire-app-check-compat",[qP]:"fire-auth",[KP]:"fire-auth-compat",[WP]:"fire-rtdb",[HP]:"fire-rtdb-compat",[GP]:"fire-fn",[QP]:"fire-fn-compat",[YP]:"fire-iid",[XP]:"fire-iid-compat",[JP]:"fire-fcm",[ZP]:"fire-fcm-compat",[eO]:"fire-perf",[tO]:"fire-perf-compat",[nO]:"fire-rc",[rO]:"fire-rc-compat",[iO]:"fire-gcs",[sO]:"fire-gcs-compat",[oO]:"fire-fst",[aO]:"fire-fst-compat","fire-js":"fire-js",[lO]:"fire-js-all"};/**
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
 */const Oi=new Map,ou=new Map;function qh(t,e){try{t.container.addComponent(e)}catch(n){Fs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function UT(t,e){t.container.addOrOverwriteComponent(e)}function hn(t){const e=t.name;if(ou.has(e))return Fs.debug(`There were multiple attempts to register component ${e}.`),!1;ou.set(e,t);for(const n of Oi.values())qh(n,t);return!0}function Qi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hO(t,e,n=Pi){Qi(t,e).clearInstance(n)}function dO(){ou.clear()}/**
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
 */const fO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fr=new _r("app","Firebase",fO);/**
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
 */let pO=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}};/**
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
 */const Qr=uO;function jd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Fr.create("bad-app-name",{appName:String(i)});if(n||(n=iP()),!n)throw Fr.create("no-options");const s=Oi.get(i);if(s){if(jh(n,s.options)&&jh(r,s.config))return s;throw Fr.create("duplicate-app",{appName:i})}const o=new _P(i);for(const l of ou.values())o.addComponent(l);const a=new pO(n,r,o);return Oi.set(i,a),a}function qd(t=Pi){const e=Oi.get(t);if(!e&&t===Pi)return jd();if(!e)throw Fr.create("no-app",{appName:t});return e}function mO(){return Array.from(Oi.values())}async function VT(t){const e=t.name;Oi.has(e)&&(Oi.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function kt(t,e,n){var r;let i=(r=cO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fs.warn(a.join(" "));return}hn(new Nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function BT(t,e){if(t!==null&&typeof t!="function")throw Fr.create("invalid-log-argument");kP(t,e)}function zT(t){TP(t)}/**
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
 */const gO="firebase-heartbeat-database",yO=1,au="firebase-heartbeat-store";let Ip=null;function jT(){return Ip||(Ip=OP(gO,yO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(au)}}}).catch(t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})})),Ip}async function vO(t){try{return(await jT()).transaction(au).objectStore(au).get(qT(t))}catch(e){if(e instanceof Tt)Fs.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fs.warn(n.message)}}}async function B_(t,e){try{const r=(await jT()).transaction(au,"readwrite");return await r.objectStore(au).put(e,qT(t)),r.done}catch(n){if(n instanceof Tt)Fs.warn(n.message);else{const r=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fs.warn(r.message)}}}function qT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wO=1024,_O=30*24*60*60*1e3;class IO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=z_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=_O}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=z_(),{heartbeatsToSend:n,unsentEntries:r}=EO(this._heartbeatsCache.heartbeats),i=Bh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function z_(){return new Date().toISOString().substring(0,10)}function EO(t,e=wO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),j_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),j_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $s()?uP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return B_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return B_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function j_(t){return Bh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function TO(t){hn(new Nt("platform-logger",e=>new $P(e),"PRIVATE")),hn(new Nt("heartbeat",e=>new IO(e),"PRIVATE")),kt(ig,V_,t),kt(ig,V_,"esm2017"),kt("fire-js","")}TO("");const kO=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Tt,SDK_VERSION:Qr,_DEFAULT_ENTRY_NAME:Pi,_addComponent:qh,_addOrOverwriteComponent:UT,_apps:Oi,_clearComponents:dO,_components:ou,_getProvider:Qi,_registerComponent:hn,_removeServiceInstance:hO,deleteApp:VT,getApp:qd,getApps:mO,initializeApp:jd,onLog:BT,registerVersion:kt,setLogLevel:zT},Symbol.toStringTag,{value:"Module"}));/**
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
 */class CO{constructor(e,n){this._delegate=e,this.firebase=n,qh(e,new Nt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),VT(this._delegate)))}_getService(e,n=Pi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Pi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){qh(this._delegate,e)}_addOrOverwriteComponent(e){UT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const bO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},q_=new _r("app-compat","Firebase",bO);/**
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
 */function AO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:kt,setLogLevel:zT,onLog:BT,apps:null,SDK_VERSION:Qr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:kO}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Pi,!L_(e,u))throw q_.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=jd(u,c);if(L_(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if(hn(u)&&u.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw q_.create("invalid-app-argument",{appName:c});return p[h]()};u.serviceProps!==void 0&&zh(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,c).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function KT(){const t=AO(CO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:KT,extendNamespace:e,createSubscribe:LT,ErrorFactory:_r,deepExtend:zh});function e(n){zh(t,n)}return t}const NO=KT();/**
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
 */const K_=new zd("@firebase/app-compat"),DO="@firebase/app-compat",RO="0.2.9";/**
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
 */function xO(t){kt(DO,RO,t)}/**
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
 */if(aP()&&self.firebase!==void 0){K_.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&K_.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ta=NO;xO();function mv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ya={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},fo={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function PO(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function WT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OO=PO,LO=WT,HT=new _r("auth","Firebase",WT());/**
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
 */const Kh=new zd("@firebase/auth");function MO(t,...e){Kh.logLevel<=se.WARN&&Kh.warn(`Auth (${Qr}): ${t}`,...e)}function ih(t,...e){Kh.logLevel<=se.ERROR&&Kh.error(`Auth (${Qr}): ${t}`,...e)}/**
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
 */function pt(t,...e){throw gv(t,...e)}function Ct(t,...e){return gv(t,...e)}function GT(t,e,n){const r=Object.assign(Object.assign({},LO()),{[e]:n});return new _r("auth","Firebase",r).create(e,{appName:t.name})}function ka(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pt(t,"argument-error"),GT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return HT.create(t,...e)}function D(t,e,...n){if(!t)throw gv(e,...n)}function ar(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ih(e),new Error(e)}function Qn(t,e){t||ar(e)}/**
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
 */function lu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yv(){return W_()==="http:"||W_()==="https:"}function W_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function $O(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yv()||PT()||"connection"in navigator)?navigator.onLine:!0}function FO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=oP()||dv()}get(){return $O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vv(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class QT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const UO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VO=new Vu(3e4,6e4);function Xe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nt(t,e,n,r,i={}){return YT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Sa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),QT.fetch()(XT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function YT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UO),e);try{const i=new BO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw GT(t,c,u);pt(t,c)}}catch(i){if(i instanceof Tt)throw i;pt(t,"network-request-failed",{message:String(i)})}}async function Yr(t,e,n,r,i={}){const s=await nt(t,e,n,r,i);return"mfaPendingCredential"in s&&pt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function XT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?vv(t.config,i):`${t.config.apiScheme}://${i}`}class BO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),VO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function zO(t,e){return nt(t,"POST","/v1/accounts:delete",e)}async function jO(t,e){return nt(t,"POST","/v1/accounts:update",e)}async function qO(t,e){return nt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Dl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KO(t,e=!1){const n=V(t),r=await n.getIdToken(e),i=Kd(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Dl(Ep(i.auth_time)),issuedAtTime:Dl(Ep(i.iat)),expirationTime:Dl(Ep(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ep(t){return Number(t)*1e3}function Kd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ih("JWT malformed, contained fewer than 3 sections"),null;try{const i=AT(n);return i?JSON.parse(i):(ih("Failed to decode base64 JWT payload"),null)}catch(i){return ih("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function WO(t){const e=Kd(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&HO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class JT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dl(this.lastLoginAt),this.creationTime=Dl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Kr(t,qO(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?XO(s.providerUserInfo):[],a=YO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new JT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function QO(t){const e=V(t);await uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function XO(t){return t.map(e=>{var{providerId:n}=e,r=mv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function JO(t,e){const n=await YT(t,{},async()=>{const r=Sa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=XT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",QT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class cu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):WO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cu;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cu,this.toJSON())}_performRefresh(){return ar("not implemented")}}/**
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
 */function ii(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new JT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Kr(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KO(this,e)}reload(){return QO(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kr(this,zO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:k,providerData:T,stsTokenManager:N}=n;D(g&&N,e,"internal-error");const R=cu.fromJSON(this.name,N);D(typeof g=="string",e,"internal-error"),ii(h,e.name),ii(d,e.name),D(typeof _=="boolean",e,"internal-error"),D(typeof k=="boolean",e,"internal-error"),ii(p,e.name),ii(y,e.name),ii(v,e.name),ii(I,e.name),ii(m,e.name),ii(f,e.name);const ce=new bs({uid:g,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:k,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:R,createdAt:m,lastLoginAt:f});return T&&Array.isArray(T)&&(ce.providerData=T.map(q=>Object.assign({},q))),I&&(ce._redirectEventId=I),ce}static async _fromIdTokenResponse(e,n,r=!1){const i=new cu;i.updateFromServerResponse(n);const s=new bs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uu(s),s}}/**
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
 */const H_=new Map;function yn(t){Qn(t instanceof Function,"Expected a class definition");let e=H_.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,H_.set(t,e),e)}/**
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
 */class ZT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ZT.type="NONE";const ia=ZT;/**
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
 */function As(t,e,n){return`firebase:${t}:${e}:${n}`}class zo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=As(this.userKey,i.apiKey,s),this.fullPersistenceKey=As("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zo(yn(ia),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||yn(ia);const o=As(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=bs._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new zo(s,e,r))}}/**
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
 */function G_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ek(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rk(e))return"Blackberry";if(ik(e))return"Webos";if(wv(e))return"Safari";if((e.includes("chrome/")||tk(e))&&!e.includes("edge/"))return"Chrome";if(Bu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ek(t=Me()){return/firefox\//i.test(t)}function wv(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tk(t=Me()){return/crios\//i.test(t)}function nk(t=Me()){return/iemobile/i.test(t)}function Bu(t=Me()){return/android/i.test(t)}function rk(t=Me()){return/blackberry/i.test(t)}function ik(t=Me()){return/webos/i.test(t)}function Ca(t=Me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZO(t=Me()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function eL(t=Me()){var e;return Ca(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tL(){return OT()&&document.documentMode===10}function sk(t=Me()){return Ca(t)||Bu(t)||ik(t)||rk(t)||/windows phone/i.test(t)||nk(t)}function nL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ok(t,e=[]){let n;switch(t){case"Browser":n=G_(Me());break;case"Worker":n=`${G_(Me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
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
 */async function rL(t){return(await nt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function ak(t,e){return nt(t,"GET","/v2/recaptchaConfig",Xe(t,e))}/**
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
 */function Q_(t){return t!==void 0&&t.getResponse!==void 0}function Y_(t){return t!==void 0&&t.enterprise!==void 0}class lk{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function iL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _v(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iL().appendChild(r)})}function uk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sL="https://www.google.com/recaptcha/enterprise.js?render=",oL="recaptcha-enterprise",aL="NO_RECAPTCHA";class ck{constructor(e){this.type=oL,this.auth=Ke(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ak(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new lk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Y_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(aL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Y_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_v(sL+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Li(t,e,n,r=!1){const i=new ck(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class lL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class uL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new X_(this),this.idTokenSubscription=new X_(this),this.beforeStateQueue=new lL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=HT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?V(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}async initializeRecaptchaConfig(){const e=await ak(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new lk(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ck(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _r("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await zo.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ok(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ke(t){return V(t)}class X_{constructor(e){this.auth=e,this.observer=null,this.addObserver=LT(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function cL(t,e){const n=Qi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(jh(s,e??{}))return i;pt(i,"already-initialized")}return n.initialize({options:e})}function hL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hk(t,e,n){const r=Ke(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=dk(e),{host:o,port:a}=dL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||fL()}function dk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dL(t){const e=dk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:J_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:J_(o)}}}function J_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ba{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ar("not implemented")}_getIdTokenResponse(e){return ar("not implemented")}_linkToIdToken(e,n){return ar("not implemented")}_getReauthenticationResolver(e){return ar("not implemented")}}/**
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
 */async function fk(t,e){return nt(t,"POST","/v1/accounts:resetPassword",Xe(t,e))}async function pk(t,e){return nt(t,"POST","/v1/accounts:update",e)}async function pL(t,e){return nt(t,"POST","/v1/accounts:update",Xe(t,e))}/**
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
 */async function Sp(t,e){return Yr(t,"POST","/v1/accounts:signInWithPassword",Xe(t,e))}async function Wd(t,e){return nt(t,"POST","/v1/accounts:sendOobCode",Xe(t,e))}async function mL(t,e){return Wd(t,e)}async function Tp(t,e){return Wd(t,e)}async function kp(t,e){return Wd(t,e)}async function gL(t,e){return Wd(t,e)}/**
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
 */async function yL(t,e){return Yr(t,"POST","/v1/accounts:signInWithEmailLink",Xe(t,e))}async function vL(t,e){return Yr(t,"POST","/v1/accounts:signInWithEmailLink",Xe(t,e))}/**
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
 */class hu extends ba{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Li(e,r,"signInWithPassword");return Sp(e,i)}else return Sp(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Li(e,r,"signInWithPassword");return Sp(e,s)}else return Promise.reject(i)});case"emailLink":return yL(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return pk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vL(e,{idToken:n,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ur(t,e){return Yr(t,"POST","/v1/accounts:signInWithIdp",Xe(t,e))}/**
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
 */const wL="http://localhost";class gr extends ba{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ur(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ur(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ur(e,n)}buildRequest(){const e={requestUri:wL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sa(n)}return e}}/**
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
 */async function _L(t,e){return nt(t,"POST","/v1/accounts:sendVerificationCode",Xe(t,e))}async function IL(t,e){return Yr(t,"POST","/v1/accounts:signInWithPhoneNumber",Xe(t,e))}async function EL(t,e){const n=await Yr(t,"POST","/v1/accounts:signInWithPhoneNumber",Xe(t,e));if(n.temporaryProof)throw fl(t,"account-exists-with-different-credential",n);return n}const SL={USER_NOT_FOUND:"user-not-found"};async function TL(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Yr(t,"POST","/v1/accounts:signInWithPhoneNumber",Xe(t,n),SL)}/**
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
 */class Ns extends ba{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ns({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ns({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return IL(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return EL(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return TL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ns({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function kL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CL(t){const e=Oo(dl(t)).link,n=e?Oo(dl(e)).deep_link_id:null,r=Oo(dl(t)).deep_link_id;return(r?Oo(dl(r)).link:null)||r||n||e||t}class Hd{constructor(e){var n,r,i,s,o,a;const l=Oo(dl(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=kL((i=l.mode)!==null&&i!==void 0?i:null);D(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=CL(e);try{return new Hd(n)}catch{return null}}}/**
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
 */class Yi{constructor(){this.providerId=Yi.PROVIDER_ID}static credential(e,n){return hu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hd.parseLink(n);return D(r,"argument-error"),hu._fromEmailAndCode(e,r.code,r.tenantId)}}Yi.PROVIDER_ID="password";Yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Aa extends Xr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class jo extends Aa{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return D("providerId"in n&&"signInMethod"in n,"argument-error"),gr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return D(e.idToken||e.accessToken,"argument-error"),gr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return jo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return jo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new jo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class nr extends Aa{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
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
 */class jn extends Aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.GOOGLE_SIGN_IN_METHOD="google.com";jn.PROVIDER_ID="google.com";/**
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
 */class rr extends Aa{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
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
 */const bL="http://localhost";class sa extends ba{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Ur(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ur(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ur(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new sa(r,s)}static _create(e,n){return new sa(e,n)}buildRequest(){return{requestUri:bL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const AL="saml.";class Wh extends Xr{constructor(e){D(e.startsWith(AL),"argument-error"),super(e)}static credentialFromResult(e){return Wh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Wh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=sa.fromJSON(e);return D(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return sa._create(r,n)}catch{return null}}}/**
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
 */class ir extends Aa{constructor(){super("twitter.com")}static credential(e,n){return gr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
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
 */async function sh(t,e){return Yr(t,"POST","/v1/accounts:signUp",Xe(t,e))}/**
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
 */class $n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await bs._fromIdTokenResponse(e,r,i),o=Z_(r);return new $n({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Z_(r);return new $n({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Z_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function NL(t){var e;const n=Ke(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new $n({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await sh(n,{returnSecureToken:!0}),i=await $n._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Hh extends Tt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Hh(e,n,r,i)}}function mk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hh._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function gk(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function DL(t,e){const n=V(t);await Gd(!0,n,e);const{providerUserInfo:r}=await jO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=gk(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Iv(t,e,n=!1){const r=await Kr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $n._forOperation(t,"link",r)}async function Gd(t,e,n){await uu(e);const r=gk(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";D(r.has(n)===t,e.auth,i)}/**
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
 */async function yk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Kr(t,mk(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Kd(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),$n._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),s}}/**
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
 */async function vk(t,e,n=!1){const r="signIn",i=await mk(t,r,e),s=await $n._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Qd(t,e){return vk(Ke(t),e)}async function wk(t,e){const n=V(t);return await Gd(!1,n,e.providerId),Iv(n,e)}async function _k(t,e){return yk(V(t),e)}/**
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
 */async function RL(t,e){return Yr(t,"POST","/v1/accounts:signInWithCustomToken",Xe(t,e))}/**
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
 */async function xL(t,e){const n=Ke(t),r=await RL(n,{token:e,returnSecureToken:!0}),i=await $n._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class zu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Ev._fromServerResponse(e,n):"totpInfo"in n?Sv._fromServerResponse(e,n):pt(e,"internal-error")}}class Ev extends zu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Ev(n)}}class Sv extends zu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Sv(n)}}/**
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
 */function qo(t,e,n){var r;D(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),D(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(D(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(D(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function PL(t,e,n){var r;const i=Ke(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Li(i,s,"getOobCode",!0);n&&qo(i,o,n),await Tp(i,o)}else n&&qo(i,s,n),await Tp(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Li(i,s,"getOobCode",!0);n&&qo(i,a,n),await Tp(i,a)}else return Promise.reject(o)})}async function OL(t,e,n){await fk(V(t),{oobCode:e,newPassword:n})}async function LL(t,e){await pL(V(t),{oobCode:e})}async function Ik(t,e){const n=V(t),r=await fk(n,{oobCode:e}),i=r.requestType;switch(D(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(r.mfaInfo,n,"internal-error");default:D(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=zu._fromServerResponse(Ke(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function ML(t,e){const{data:n}=await Ik(V(t),e);return n.email}async function $L(t,e,n){var r;const i=Ke(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Li(i,s,"signUpPassword");o=sh(i,u)}else o=sh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Li(i,s,"signUpPassword");return sh(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await $n._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function FL(t,e,n){return Qd(V(t),Yi.credential(e,n))}/**
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
 */async function UL(t,e,n){var r;const i=Ke(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){D(l.handleCodeInApp,i,"argument-error"),l&&qo(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Li(i,s,"getOobCode",!0);o(a,n),await kp(i,a)}else o(s,n),await kp(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await Li(i,s,"getOobCode",!0);o(l,n),await kp(i,l)}else return Promise.reject(a)})}function VL(t,e){const n=Hd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function BL(t,e,n){const r=V(t),i=Yi.credentialWithLink(e,n||lu());return D(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Qd(r,i)}/**
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
 */async function zL(t,e){return nt(t,"POST","/v1/accounts:createAuthUri",Xe(t,e))}/**
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
 */async function jL(t,e){const n=yv()?lu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await zL(V(t),r);return i||[]}async function qL(t,e){const n=V(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&qo(n.auth,i,e);const{email:s}=await mL(n.auth,i);s!==t.email&&await t.reload()}async function KL(t,e,n){const r=V(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&qo(r.auth,s,n);const{email:o}=await gL(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function WL(t,e){return nt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function HL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=V(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Kr(r,WL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function GL(t,e){return Ek(V(t),e,null)}function QL(t,e){return Ek(V(t),null,e)}async function Ek(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Kr(t,pk(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function YL(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Kd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ko(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new XL(s,i);case"github.com":return new JL(s,i);case"google.com":return new ZL(s,i);case"twitter.com":return new eM(s,i,t.screenName||null);case"custom":case"anonymous":return new Ko(s,null);default:return new Ko(s,r,i)}}class Ko{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Sk extends Ko{constructor(e,n,r,i){super(e,n,r),this.username=i}}class XL extends Ko{constructor(e,n){super(e,"facebook.com",n)}}class JL extends Sk{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class ZL extends Ko{constructor(e,n){super(e,"google.com",n)}}class eM extends Sk{constructor(e,n,r){super(e,"twitter.com",n,r)}}function tM(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:YL(n)}function nM(t,e,n,r){return V(t).onIdTokenChanged(e,n,r)}function rM(t,e,n){return V(t).beforeAuthStateChanged(e,n)}class ws{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new ws("enroll",e,n)}static _fromMfaPendingCredential(e){return new ws("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ws._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ws._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Tv{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ke(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>zu._fromServerResponse(r,a));D(i.mfaPendingCredential,r,"internal-error");const o=ws._fromMfaPendingCredential(i.mfaPendingCredential);return new Tv(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await $n._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return D(n.user,r,"internal-error"),$n._forOperation(n.user,n.operationType,u);default:pt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function iM(t,e){var n;const r=V(t),i=e;return D(e.customData.operationType,r,"argument-error"),D((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Tv._fromError(r,i)}/**
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
 */function sM(t,e){return nt(t,"POST","/v2/accounts/mfaEnrollment:start",Xe(t,e))}function oM(t,e){return nt(t,"POST","/v2/accounts/mfaEnrollment:finalize",Xe(t,e))}function aM(t,e){return nt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Xe(t,e))}class kv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>zu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new kv(e)}async getSession(){return ws._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Kr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Kr(this.user,aM(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Cp=new WeakMap;function lM(t){const e=V(t);return Cp.has(e)||Cp.set(e,kv._fromUser(e)),Cp.get(e)}const Gh="__sak";/**
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
 */class Tk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gh,"1"),this.storage.removeItem(Gh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function uM(){const t=Me();return wv(t)||Ca(t)}const cM=1e3,hM=10;class kk extends Tk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uM()&&nL(),this.fallbackToPolling=sk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kk.type="LOCAL";const Yd=kk;/**
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
 */class Ck extends Tk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ck.type="SESSION";const Mi=Ck;/**
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
 */function dM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await dM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xd.receivers=[];/**
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
 */function ju(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ju("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function pM(t){Ge().location.href=t}/**
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
 */function Cv(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function mM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yM(){return Cv()?self:null}/**
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
 */const bk="firebaseLocalStorageDb",vM=1,Qh="firebaseLocalStorage",Ak="fbase_key";class qu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jd(t,e){return t.transaction([Qh],e?"readwrite":"readonly").objectStore(Qh)}function wM(){const t=indexedDB.deleteDatabase(bk);return new qu(t).toPromise()}function sg(){const t=indexedDB.open(bk,vM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qh,{keyPath:Ak})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qh)?e(r):(r.close(),await wM(),e(await sg()))})})}async function eI(t,e,n){const r=Jd(t,!0).put({[Ak]:e,value:n});return new qu(r).toPromise()}async function _M(t,e){const n=Jd(t,!1).get(e),r=await new qu(n).toPromise();return r===void 0?null:r.value}function tI(t,e){const n=Jd(t,!0).delete(e);return new qu(n).toPromise()}const IM=800,EM=3;class Nk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xd._getInstance(yM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mM(),!this.activeServiceWorker)return;this.sender=new fM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sg();return await eI(e,Gh,"1"),await tI(e,Gh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>eI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_M(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jd(i,!1).getAll();return new qu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nk.type="LOCAL";const oa=Nk;/**
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
 */function SM(t,e){return nt(t,"POST","/v2/accounts/mfaSignIn:start",Xe(t,e))}function TM(t,e){return nt(t,"POST","/v2/accounts/mfaSignIn:finalize",Xe(t,e))}/**
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
 */const kM=500,CM=6e4,Rc=1e12;class bM{constructor(e){this.auth=e,this.counter=Rc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new AM(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Rc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Rc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Rc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class AM{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=NM(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},CM)},kM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function NM(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const bp=uk("rcb"),DM=new Vu(3e4,6e4),RM="https://www.google.com/recaptcha/api.js?";class xM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ge().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return D(PM(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Q_(Ge().grecaptcha)?Promise.resolve(Ge().grecaptcha):new Promise((r,i)=>{const s=Ge().setTimeout(()=>{i(Ct(e,"network-request-failed"))},DM.get());Ge()[bp]=()=>{Ge().clearTimeout(s),delete Ge()[bp];const a=Ge().grecaptcha;if(!a||!Q_(a)){i(Ct(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${RM}?${Sa({onload:bp,render:"explicit",hl:n})}`;_v(o).catch(()=>{clearTimeout(s),i(Ct(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ge().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function PM(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class OM{async load(e){return new bM(e)}clearedOneInstance(){}}/**
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
 */const Dk="recaptcha",LM={theme:"light",type:"image"};let MM=class{constructor(e,n=Object.assign({},LM),r){this.parameters=n,this.type=Dk,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ke(r),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new OM:new xM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ge()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(yv()&&!Cv(),this.auth,"internal-error"),await $M(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await rL(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function $M(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class bv{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ns._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function FM(t,e,n){const r=Ke(t),i=await Zd(r,e,V(n));return new bv(i,s=>Qd(r,s))}async function UM(t,e,n){const r=V(t);await Gd(!1,r,"phone");const i=await Zd(r.auth,e,V(n));return new bv(i,s=>wk(r,s))}async function VM(t,e,n){const r=V(t),i=await Zd(r.auth,e,V(n));return new bv(i,s=>_k(r,s))}async function Zd(t,e,n){var r;const i=await n.verify();try{D(typeof i=="string",t,"argument-error"),D(n.type===Dk,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return D(o.type==="enroll",t,"internal-error"),(await sM(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{D(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return D(a,t,"missing-multi-factor-info"),(await SM(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await _L(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function BM(t,e){await Iv(V(t),e)}/**
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
 */let Us=class oh{constructor(e){this.providerId=oh.PROVIDER_ID,this.auth=Ke(e)}verifyPhoneNumber(e,n){return Zd(this.auth,e,V(n))}static credential(e,n){return Ns._fromVerification(e,n)}static credentialFromResult(e){const n=e;return oh.credentialFromTaggedObject(n)}static credentialFromError(e){return oh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ns._fromTokenResponse(n,r):null}};Us.PROVIDER_ID="phone";Us.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function no(t,e){return e?yn(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Av extends ba{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ur(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ur(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zM(t){return vk(t.auth,new Av(t),t.bypassAuthState)}function jM(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),yk(n,new Av(t),t.bypassAuthState)}async function qM(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Iv(n,new Av(t),t.bypassAuthState)}/**
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
 */class Rk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zM;case"linkViaPopup":case"linkViaRedirect":return qM;case"reauthViaPopup":case"reauthViaRedirect":return jM;default:pt(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KM=new Vu(2e3,1e4);async function xk(t,e,n){const r=Ke(t);ka(t,e,Xr);const i=no(r,n);return new xr(r,"signInViaPopup",e,i).executeNotNull()}async function WM(t,e,n){const r=V(t);ka(r.auth,e,Xr);const i=no(r.auth,n);return new xr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function HM(t,e,n){const r=V(t);ka(r.auth,e,Xr);const i=no(r.auth,n);return new xr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class xr extends Rk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KM.get())};e()}}xr.currentPopupAction=null;/**
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
 */const GM="pendingRedirect",Rl=new Map;class QM extends Rk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rl.get(this.auth._key());if(!e){try{const r=await YM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rl.set(this.auth._key(),e)}return this.bypassAuthState||Rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YM(t,e){const n=Ok(e),r=Pk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Nv(t,e){return Pk(t)._set(Ok(e),"true")}function XM(){Rl.clear()}function Dv(t,e){Rl.set(t._key(),e)}function Pk(t){return yn(t._redirectPersistence)}function Ok(t){return As(GM,t.config.apiKey,t.name)}/**
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
 */function JM(t,e,n){return ZM(t,e,n)}async function ZM(t,e,n){const r=Ke(t);ka(t,e,Xr),await r._initializationPromise;const i=no(r,n);return await Nv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function e2(t,e,n){return t2(t,e,n)}async function t2(t,e,n){const r=V(t);ka(r.auth,e,Xr),await r.auth._initializationPromise;const i=no(r.auth,n);await Nv(i,r.auth);const s=await Lk(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function n2(t,e,n){return r2(t,e,n)}async function r2(t,e,n){const r=V(t);ka(r.auth,e,Xr),await r.auth._initializationPromise;const i=no(r.auth,n);await Gd(!1,r,e.providerId),await Nv(i,r.auth);const s=await Lk(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function i2(t,e){return await Ke(t)._initializationPromise,ef(t,e,!1)}async function ef(t,e,n=!1){const r=Ke(t),i=no(r,e),o=await new QM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Lk(t){const e=ju(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const s2=10*60*1e3;class Mk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!o2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$k(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=s2&&this.cachedEventUids.clear(),this.cachedEventUids.has(nI(e))}saveEventToCache(e){this.cachedEventUids.add(nI(e)),this.lastProcessedEventTime=Date.now()}}function nI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $k({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function o2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $k(t);default:return!1}}/**
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
 */async function Fk(t,e={}){return nt(t,"GET","/v1/projects",e)}/**
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
 */const a2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,l2=/^https?/;async function u2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fk(t);for(const n of e)try{if(c2(n))return}catch{}pt(t,"unauthorized-domain")}function c2(t){const e=lu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!l2.test(n))return!1;if(a2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const h2=new Vu(3e4,6e4);function rI(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function d2(t){return new Promise((e,n)=>{var r,i,s;function o(){rI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rI(),n(Ct(t,"network-request-failed"))},timeout:h2.get()})}if(!((i=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ge().gapi)===null||s===void 0)&&s.load)o();else{const a=uk("iframefcb");return Ge()[a]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},_v(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ah=null,e})}let ah=null;function f2(t){return ah=ah||d2(t),ah}/**
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
 */const p2=new Vu(5e3,15e3),m2="__/auth/iframe",g2="emulator/auth/iframe",y2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},v2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w2(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vv(e,g2):`https://${t.config.authDomain}/${m2}`,r={apiKey:e.apiKey,appName:t.name,v:Qr},i=v2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Sa(r).slice(1)}`}async function _2(t){const e=await f2(t),n=Ge().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:w2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:y2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),a=Ge().setTimeout(()=>{s(o)},p2.get());function l(){Ge().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const I2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E2=500,S2=600,T2="_blank",k2="http://localhost";class iI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C2(t,e,n,r=E2,i=S2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},I2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Me().toLowerCase();n&&(a=tk(u)?T2:n),ek(u)&&(e=e||k2,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(eL(u)&&a!=="_self")return b2(e||"",a),new iI(null);const h=window.open(e||"",a,c);D(h,t,"popup-blocked");try{h.focus()}catch{}return new iI(h)}function b2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const A2="__/auth/handler",N2="emulator/auth/handler",D2=encodeURIComponent("fac");async function og(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qr,eventId:i};if(e instanceof Xr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Aa){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${D2}=${encodeURIComponent(l)}`:"";return`${R2(t)}?${Sa(a).slice(1)}${u}`}function R2({config:t}){return t.emulator?vv(t,N2):`https://${t.authDomain}/${A2}`}/**
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
 */const Ap="webStorageSupport";class x2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mi,this._completeRedirectFn=ef,this._overrideRedirectResult=Dv}async _openPopup(e,n,r,i){var s;Qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await og(e,n,r,lu(),i);return C2(e,o,ju())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await og(e,n,r,lu(),i);return pM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _2(e),r=new Mk(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ap,{type:Ap},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ap];o!==void 0&&n(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=u2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sk()||wv()||Ca()}}const Uk=x2;class P2{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ar("unexpected MultiFactorSessionType")}}}class Rv extends P2{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Rv(e)}_finalizeEnroll(e,n,r){return oM(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return TM(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Vk{constructor(){}static assertion(e){return Rv._fromCredential(e)}}Vk.FACTOR_ID="phone";var sI="@firebase/auth",oI="0.23.1";/**
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
 */class O2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function L2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function M2(t){hn(new Nt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),D(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ok(t)},u=new uL(r,i,s,l);return hL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hn(new Nt("auth-internal",e=>{const n=Ke(e.getProvider("auth").getImmediate());return(r=>new O2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(sI,oI,L2(t)),kt(sI,oI,"esm2017")}/**
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
 */const $2=5*60,F2=RT("authIdTokenMaxAge")||$2;let aI=null;const U2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>F2)return;const i=n==null?void 0:n.token;aI!==i&&(aI=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function V2(t=qd()){const e=Qi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cL(t,{popupRedirectResolver:Uk,persistence:[oa,Yd,Mi]}),r=RT("authTokenSyncURL");if(r){const s=U2(r);rM(n,s,()=>s(n.currentUser)),nM(n,o=>s(o))}const i=NT("auth");return i&&hk(n,`http://${i}`),n}M2("Browser");/**
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
 */function Vs(){return window}/**
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
 */const B2=2e3;async function z2(t,e,n){var r;const{BuildInfo:i}=Vs();Qn(e.sessionId,"AuthEvent did not contain a session ID");const s=await H2(e.sessionId),o={};return Ca()?o.ibi=i.packageName:Bu()?o.apn=i.packageName:pt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,og(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function j2(t){const{BuildInfo:e}=Vs(),n={};Ca()?n.iosBundleId=e.packageName:Bu()?n.androidPackageName=e.packageName:pt(t,"operation-not-supported-in-this-environment"),await Fk(t,n)}function q2(t){const{cordova:e}=Vs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,ZO()?"_blank":"_system","location=yes"),n(i)})})}async function K2(t,e,n){const{cordova:r}=Vs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Ct(t,"redirect-cancelled-by-user"))},B2))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Bu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function W2(t){var e,n,r,i,s,o,a,l,u,c;const h=Vs();D(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),D(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),D(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function H2(t){const e=G2(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function G2(t){if(Qn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const Q2=20;class Y2 extends Mk{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function X2(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:e$(),postBody:null,tenantId:t.tenantId,error:Ct(t,"no-auth-event")}}function J2(t,e){return ag()._set(lg(t),e)}async function lI(t){const e=await ag()._get(lg(t));return e&&await ag()._remove(lg(t)),e}function Z2(t,e){var n,r;const i=n$(e);if(i.includes("/__/auth/callback")){const s=lh(i),o=s.firebaseError?t$(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Ct(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function e$(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Q2;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function ag(){return yn(Yd)}function lg(t){return As("authEvent",t.config.apiKey,t.name)}function t$(t){try{return JSON.parse(t)}catch{return null}}function n$(t){const e=lh(t),n=e.link?decodeURIComponent(e.link):void 0,r=lh(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return lh(i).link||i||r||n||t}function lh(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Oo(n.join("?"))}/**
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
 */const r$=500;class i${constructor(){this._redirectPersistence=Mi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ef,this._overrideRedirectResult=Dv}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new Y2(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){pt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){W2(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),XM(),await this._originValidation(e);const o=X2(e,r,i);await J2(e,o);const a=await z2(e,o,n),l=await q2(a);return K2(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=j2(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Vs(),o=setTimeout(async()=>{await lI(e),n.onEvent(uI())},r$),a=async c=>{clearTimeout(o);const h=await lI(e);let d=null;h&&(c!=null&&c.url)&&(d=Z2(h,c.url)),n.onEvent(d||uI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Vs().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const s$=i$;function uI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ct("no-auth-event")}}/**
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
 */function o$(t,e){Ke(t)._logFramework(e)}var a$="@firebase/auth-compat",l$="0.4.1";/**
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
 */const u$=1e3;function xl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function c$(){return xl()==="http:"||xl()==="https:"}function Bk(t=Me()){return!!((xl()==="file:"||xl()==="ionic:"||xl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function h$(){return dv()||hv()}function d$(){return OT()&&(document==null?void 0:document.documentMode)===11}function f$(t=Me()){return/Edge\/\d+/.test(t)}function p$(t=Me()){return d$()||f$(t)}function zk(){try{const t=self.localStorage,e=ju();if(t)return t.setItem(e,"1"),t.removeItem(e),p$()?$s():!0}catch{return xv()&&$s()}return!1}function xv(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Np(){return(c$()||PT()||Bk())&&!h$()&&zk()&&!xv()}function jk(){return Bk()&&typeof document<"u"}async function m$(){return jk()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},u$);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function g$(){return typeof window<"u"?window:null}/**
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
 */const mn={LOCAL:"local",NONE:"none",SESSION:"session"},Xa=D,qk="persistence";function y$(t,e){if(Xa(Object.values(mn).includes(e),t,"invalid-persistence-type"),dv()){Xa(e!==mn.SESSION,t,"unsupported-persistence-type");return}if(hv()){Xa(e===mn.NONE,t,"unsupported-persistence-type");return}if(xv()){Xa(e===mn.NONE||e===mn.LOCAL&&$s(),t,"unsupported-persistence-type");return}Xa(e===mn.NONE||zk(),t,"unsupported-persistence-type")}async function ug(t){await t._initializationPromise;const e=Kk(),n=As(qk,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function v$(t,e){const n=Kk();if(!n)return[];const r=As(qk,t,e);switch(n.getItem(r)){case mn.NONE:return[ia];case mn.LOCAL:return[oa,Mi];case mn.SESSION:return[Mi];default:return[]}}function Kk(){var t;try{return((t=g$())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const w$=D;class yi{constructor(){this.browserResolver=yn(Uk),this.cordovaResolver=yn(s$),this.underlyingResolver=null,this._redirectPersistence=Mi,this._completeRedirectFn=ef,this._overrideRedirectResult=Dv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return jk()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return w$(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await m$();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Wk(t){return t.unwrap()}function _$(t){return t.wrapped()}/**
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
 */function I$(t){return Hk(t)}function E$(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new S$(t,iM(t,e))}else if(r){const i=Hk(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Hk(t){const{_tokenResponse:e}=t instanceof Tt?t.customData:t;if(!e)return null;if(!(t instanceof Tt)&&"temporaryProof"in e&&"phoneNumber"in e)return Us.credentialFromResult(t);const n=e.providerId;if(!n||n===Ya.PASSWORD)return null;let r;switch(n){case Ya.GOOGLE:r=jn;break;case Ya.FACEBOOK:r=nr;break;case Ya.GITHUB:r=rr;break;case Ya.TWITTER:r=ir;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?sa._create(n,a):gr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new jo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Tt?r.credentialFromError(t):r.credentialFromResult(t)}function en(t,e){return e.catch(n=>{throw n instanceof Tt&&E$(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:I$(n),additionalUserInfo:tM(n),user:Pr.getOrCreate(i)}})}async function cg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>en(t,n.confirm(r))}}class S${constructor(e,n){this.resolver=n,this.auth=_$(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return en(Wk(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Pr{constructor(e){this._delegate=e,this.multiFactor=lM(e)}static getOrCreate(e){return Pr.USER_MAP.has(e)||Pr.USER_MAP.set(e,new Pr(e)),Pr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return en(this.auth,wk(this._delegate,e))}async linkWithPhoneNumber(e,n){return cg(this.auth,UM(this._delegate,e,n))}async linkWithPopup(e){return en(this.auth,HM(this._delegate,e,yi))}async linkWithRedirect(e){return await ug(Ke(this.auth)),n2(this._delegate,e,yi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return en(this.auth,_k(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return cg(this.auth,VM(this._delegate,e,n))}reauthenticateWithPopup(e){return en(this.auth,WM(this._delegate,e,yi))}async reauthenticateWithRedirect(e){return await ug(Ke(this.auth)),e2(this._delegate,e,yi)}sendEmailVerification(e){return qL(this._delegate,e)}async unlink(e){return await DL(this._delegate,e),this}updateEmail(e){return GL(this._delegate,e)}updatePassword(e){return QL(this._delegate,e)}updatePhoneNumber(e){return BM(this._delegate,e)}updateProfile(e){return HL(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return KL(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Pr.USER_MAP=new WeakMap;/**
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
 */const Ja=D;class hg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ja(r,"invalid-api-key",{appName:e.name}),Ja(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?yi:void 0;this._delegate=n.initialize({options:{persistence:T$(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(OO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Pr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){hk(this._delegate,e,n)}applyActionCode(e){return LL(this._delegate,e)}checkActionCode(e){return Ik(this._delegate,e)}confirmPasswordReset(e,n){return OL(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return en(this._delegate,$L(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return jL(this._delegate,e)}isSignInWithEmailLink(e){return VL(this._delegate,e)}async getRedirectResult(){Ja(Np(),this._delegate,"operation-not-supported-in-this-environment");const e=await i2(this._delegate,yi);return e?en(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){o$(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=cI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=cI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return UL(this._delegate,e,n)}sendPasswordResetEmail(e,n){return PL(this._delegate,e,n||void 0)}async setPersistence(e){y$(this._delegate,e);let n;switch(e){case mn.SESSION:n=Mi;break;case mn.LOCAL:n=await yn(oa)._isAvailable()?oa:Yd;break;case mn.NONE:n=ia;break;default:return pt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return en(this._delegate,NL(this._delegate))}signInWithCredential(e){return en(this._delegate,Qd(this._delegate,e))}signInWithCustomToken(e){return en(this._delegate,xL(this._delegate,e))}signInWithEmailAndPassword(e,n){return en(this._delegate,FL(this._delegate,e,n))}signInWithEmailLink(e,n){return en(this._delegate,BL(this._delegate,e,n))}signInWithPhoneNumber(e,n){return cg(this._delegate,FM(this._delegate,e,n))}async signInWithPopup(e){return Ja(Np(),this._delegate,"operation-not-supported-in-this-environment"),en(this._delegate,xk(this._delegate,e,yi))}async signInWithRedirect(e){return Ja(Np(),this._delegate,"operation-not-supported-in-this-environment"),await ug(this._delegate),JM(this._delegate,e,yi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return ML(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}hg.Persistence=mn;function cI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Pr.getOrCreate(o)),error:e,complete:n}}function T$(t,e){const n=v$(t,e);if(typeof self<"u"&&!n.includes(oa)&&n.push(oa),typeof window<"u")for(const r of[Yd,Mi])n.includes(r)||n.push(r);return n.includes(ia)||n.push(ia),n}/**
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
 */class Pv{constructor(){this.providerId="phone",this._delegate=new Us(Wk(Ta.auth()))}static credential(e,n){return Us.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Pv.PHONE_SIGN_IN_METHOD=Us.PHONE_SIGN_IN_METHOD;Pv.PROVIDER_ID=Us.PROVIDER_ID;/**
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
 */const k$=D;class C${constructor(e,n,r=Ta.app()){var i;k$((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new MM(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const b$="auth-compat";function A$(t){t.INTERNAL.registerComponent(new Nt(b$,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new hg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:fo.EMAIL_SIGNIN,PASSWORD_RESET:fo.PASSWORD_RESET,RECOVER_EMAIL:fo.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:fo.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:fo.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:fo.VERIFY_EMAIL}},EmailAuthProvider:Yi,FacebookAuthProvider:nr,GithubAuthProvider:rr,GoogleAuthProvider:jn,OAuthProvider:jo,SAMLAuthProvider:Wh,PhoneAuthProvider:Pv,PhoneMultiFactorGenerator:Vk,RecaptchaVerifier:C$,TwitterAuthProvider:ir,Auth:hg,AuthCredential:ba,Error:Tt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(a$,l$)}A$(Ta);const N$=(t,e)=>e.some(n=>t instanceof n);let hI,dI;function D$(){return hI||(hI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R$(){return dI||(dI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gk=new WeakMap,dg=new WeakMap,Qk=new WeakMap,Dp=new WeakMap,Ov=new WeakMap;function x$(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ni(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gk.set(n,t)}).catch(()=>{}),Ov.set(e,t),e}function P$(t){if(dg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dg.set(t,e)}let fg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qk.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ni(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O$(t){fg=t(fg)}function L$(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rp(this),e,...n);return Qk.set(r,e.sort?e.sort():[e]),Ni(r)}:R$().includes(t)?function(...e){return t.apply(Rp(this),e),Ni(Gk.get(this))}:function(...e){return Ni(t.apply(Rp(this),e))}}function M$(t){return typeof t=="function"?L$(t):(t instanceof IDBTransaction&&P$(t),N$(t,D$())?new Proxy(t,fg):t)}function Ni(t){if(t instanceof IDBRequest)return x$(t);if(Dp.has(t))return Dp.get(t);const e=M$(t);return e!==t&&(Dp.set(t,e),Ov.set(e,t)),e}const Rp=t=>Ov.get(t);function $$(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ni(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ni(o.result),l.oldVersion,l.newVersion,Ni(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const F$=["get","getKey","getAll","getAllKeys","count"],U$=["put","add","delete","clear"],xp=new Map;function fI(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xp.get(e))return xp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=U$.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||F$.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return xp.set(e,s),s}O$(t=>({...t,get:(e,n,r)=>fI(e,n)||t.get(e,n,r),has:(e,n)=>!!fI(e,n)||t.has(e,n)}));const Yk="@firebase/installations",Lv="0.6.4";/**
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
 */const Xk=1e4,Jk=`w:${Lv}`,Zk="FIS_v2",V$="https://firebaseinstallations.googleapis.com/v1",B$=60*60*1e3,z$="installations",j$="Installations";/**
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
 */const q$={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Bs=new _r(z$,j$,q$);function eC(t){return t instanceof Tt&&t.code.includes("request-failed")}/**
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
 */function tC({projectId:t}){return`${V$}/projects/${t}/installations`}function nC(t){return{token:t.token,requestStatus:2,expiresIn:W$(t.expiresIn),creationTime:Date.now()}}async function rC(t,e){const r=(await e.json()).error;return Bs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function iC({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function K$(t,{refreshToken:e}){const n=iC(t);return n.append("Authorization",H$(e)),n}async function sC(t){const e=await t();return e.status>=500&&e.status<600?t():e}function W$(t){return Number(t.replace("s","000"))}function H$(t){return`${Zk} ${t}`}/**
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
 */async function G$({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=tC(t),i=iC(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Zk,appId:t.appId,sdkVersion:Jk},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await sC(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:nC(u.authToken)}}else throw await rC("Create Installation",l)}/**
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
 */function oC(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Q$(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Y$=/^[cdef][\w-]{21}$/,pg="";function X$(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=J$(t);return Y$.test(n)?n:pg}catch{return pg}}function J$(t){return Q$(t).substr(0,22)}/**
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
 */function tf(t){return`${t.appName}!${t.appId}`}/**
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
 */const aC=new Map;function lC(t,e){const n=tf(t);uC(n,e),Z$(n,e)}function uC(t,e){const n=aC.get(t);if(n)for(const r of n)r(e)}function Z$(t,e){const n=eF();n&&n.postMessage({key:t,fid:e}),tF()}let _s=null;function eF(){return!_s&&"BroadcastChannel"in self&&(_s=new BroadcastChannel("[Firebase] FID Change"),_s.onmessage=t=>{uC(t.data.key,t.data.fid)}),_s}function tF(){aC.size===0&&_s&&(_s.close(),_s=null)}/**
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
 */const nF="firebase-installations-database",rF=1,zs="firebase-installations-store";let Pp=null;function Mv(){return Pp||(Pp=$$(nF,rF,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zs)}}})),Pp}async function Yh(t,e){const n=tf(t),i=(await Mv()).transaction(zs,"readwrite"),s=i.objectStore(zs),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&lC(t,e.fid),e}async function cC(t){const e=tf(t),r=(await Mv()).transaction(zs,"readwrite");await r.objectStore(zs).delete(e),await r.done}async function nf(t,e){const n=tf(t),i=(await Mv()).transaction(zs,"readwrite"),s=i.objectStore(zs),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&lC(t,a.fid),a}/**
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
 */async function $v(t){let e;const n=await nf(t.appConfig,r=>{const i=iF(r),s=sF(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===pg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iF(t){const e=t||{fid:X$(),registrationStatus:0};return hC(e)}function sF(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Bs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=oF(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:aF(t)}:{installationEntry:e}}async function oF(t,e){try{const n=await G$(t,e);return Yh(t.appConfig,n)}catch(n){throw eC(n)&&n.customData.serverCode===409?await cC(t.appConfig):await Yh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function aF(t){let e=await pI(t.appConfig);for(;e.registrationStatus===1;)await oC(100),e=await pI(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await $v(t);return r||n}return e}function pI(t){return nf(t,e=>{if(!e)throw Bs.create("installation-not-found");return hC(e)})}function hC(t){return lF(t)?{fid:t.fid,registrationStatus:0}:t}function lF(t){return t.registrationStatus===1&&t.registrationTime+Xk<Date.now()}/**
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
 */async function uF({appConfig:t,heartbeatServiceProvider:e},n){const r=cF(t,n),i=K$(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Jk,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await sC(()=>fetch(r,a));if(l.ok){const u=await l.json();return nC(u)}else throw await rC("Generate Auth Token",l)}function cF(t,{fid:e}){return`${tC(t)}/${e}/authTokens:generate`}/**
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
 */async function Fv(t,e=!1){let n;const r=await nf(t.appConfig,s=>{if(!dC(s))throw Bs.create("not-registered");const o=s.authToken;if(!e&&fF(o))return s;if(o.requestStatus===1)return n=hF(t,e),s;{if(!navigator.onLine)throw Bs.create("app-offline");const a=mF(s);return n=dF(t,a),a}});return n?await n:r.authToken}async function hF(t,e){let n=await mI(t.appConfig);for(;n.authToken.requestStatus===1;)await oC(100),n=await mI(t.appConfig);const r=n.authToken;return r.requestStatus===0?Fv(t,e):r}function mI(t){return nf(t,e=>{if(!dC(e))throw Bs.create("not-registered");const n=e.authToken;return gF(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dF(t,e){try{const n=await uF(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Yh(t.appConfig,r),n}catch(n){if(eC(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await cC(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Yh(t.appConfig,r)}throw n}}function dC(t){return t!==void 0&&t.registrationStatus===2}function fF(t){return t.requestStatus===2&&!pF(t)}function pF(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+B$}function mF(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gF(t){return t.requestStatus===1&&t.requestTime+Xk<Date.now()}/**
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
 */async function yF(t){const e=t,{installationEntry:n,registrationPromise:r}=await $v(e);return r?r.catch(console.error):Fv(e).catch(console.error),n.fid}/**
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
 */async function vF(t,e=!1){const n=t;return await wF(n),(await Fv(n,e)).token}async function wF(t){const{registrationPromise:e}=await $v(t);e&&await e}/**
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
 */function _F(t){if(!t||!t.options)throw Op("App Configuration");if(!t.name)throw Op("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Op(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Op(t){return Bs.create("missing-app-config-values",{valueName:t})}/**
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
 */const fC="installations",IF="installations-internal",EF=t=>{const e=t.getProvider("app").getImmediate(),n=_F(e),r=Qi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},SF=t=>{const e=t.getProvider("app").getImmediate(),n=Qi(e,fC).getImmediate();return{getId:()=>yF(n),getToken:i=>vF(n,i)}};function TF(){hn(new Nt(fC,EF,"PUBLIC")),hn(new Nt(IF,SF,"PRIVATE"))}TF();kt(Yk,Lv);kt(Yk,Lv,"esm2017");const kF=(t,e)=>e.some(n=>t instanceof n);let gI,yI;function CF(){return gI||(gI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bF(){return yI||(yI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pC=new WeakMap,mg=new WeakMap,mC=new WeakMap,Lp=new WeakMap,Uv=new WeakMap;function AF(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pC.set(n,t)}).catch(()=>{}),Uv.set(e,t),e}function NF(t){if(mg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});mg.set(t,e)}let gg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DF(t){gg=t(gg)}function RF(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mp(this),e,...n);return mC.set(r,e.sort?e.sort():[e]),Vr(r)}:bF().includes(t)?function(...e){return t.apply(Mp(this),e),Vr(pC.get(this))}:function(...e){return Vr(t.apply(Mp(this),e))}}function xF(t){return typeof t=="function"?RF(t):(t instanceof IDBTransaction&&NF(t),kF(t,CF())?new Proxy(t,gg):t)}function Vr(t){if(t instanceof IDBRequest)return AF(t);if(Lp.has(t))return Lp.get(t);const e=xF(t);return e!==t&&(Lp.set(t,e),Uv.set(e,t)),e}const Mp=t=>Uv.get(t);function rf(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Vr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vr(o.result),l.oldVersion,l.newVersion,Vr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function Wo(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),Vr(n).then(()=>{})}const PF=["get","getKey","getAll","getAllKeys","count"],OF=["put","add","delete","clear"],$p=new Map;function vI(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($p.get(e))return $p.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=OF.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PF.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $p.set(e,s),s}DF(t=>({...t,get:(e,n,r)=>vI(e,n)||t.get(e,n,r),has:(e,n)=>!!vI(e,n)||t.has(e,n)}));/**
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
 */const LF="/firebase-messaging-sw.js",MF="/firebase-cloud-messaging-push-scope",gC="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",$F="https://fcmregistrations.googleapis.com/v1",yC="google.c.a.c_id",FF="google.c.a.c_l",UF="google.c.a.ts",VF="google.c.a.e";var wI;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(wI||(wI={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var du;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(du||(du={}));/**
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
 */function br(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function BF(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Fp="fcm_token_details_db",zF=5,_I="fcm_token_object_Store";async function jF(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Fp))return null;let e=null;return(await rf(Fp,zF,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(_I))return;const l=o.objectStore(_I),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(a=c.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:br(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:br(c.auth),p256dh:br(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:br(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:br(c.auth),p256dh:br(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:br(c.vapidKey)}}}}}})).close(),await Wo(Fp),await Wo("fcm_vapid_details_db"),await Wo("undefined"),qF(e)?e:null}function qF(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const KF="firebase-messaging-database",WF=1,js="firebase-messaging-store";let Up=null;function Vv(){return Up||(Up=rf(KF,WF,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(js)}}})),Up}async function vC(t){const e=zv(t),r=await(await Vv()).transaction(js).objectStore(js).get(e);if(r)return r;{const i=await jF(t.appConfig.senderId);if(i)return await Bv(t,i),i}}async function Bv(t,e){const n=zv(t),i=(await Vv()).transaction(js,"readwrite");return await i.objectStore(js).put(e,n),await i.done,e}async function HF(t){const e=zv(t),r=(await Vv()).transaction(js,"readwrite");await r.objectStore(js).delete(e),await r.done}function zv({appConfig:t}){return t.appId}/**
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
 */const GF={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Gt=new _r("messaging","Messaging",GF);/**
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
 */async function QF(t,e){const n=await qv(t),r=_C(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(jv(t.appConfig),i)).json()}catch(o){throw Gt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Gt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Gt.create("token-subscribe-no-token");return s.token}async function YF(t,e){const n=await qv(t),r=_C(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${jv(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Gt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Gt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Gt.create("token-update-no-token");return s.token}async function wC(t,e){const r={method:"DELETE",headers:await qv(t)};try{const s=await(await fetch(`${jv(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Gt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Gt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function jv({projectId:t}){return`${$F}/projects/${t}/registrations`}async function qv({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function _C({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==gC&&(i.web.applicationPubKey=r),i}/**
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
 */const XF=7*24*60*60*1e3;async function JF(t){const e=await eU(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:br(e.getKey("auth")),p256dh:br(e.getKey("p256dh"))},r=await vC(t.firebaseDependencies);if(r){if(tU(r.subscriptionOptions,n))return Date.now()>=r.createTime+XF?ZF(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await wC(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return II(t.firebaseDependencies,n)}else return II(t.firebaseDependencies,n)}async function IC(t){const e=await vC(t.firebaseDependencies);e&&(await wC(t.firebaseDependencies,e.token),await HF(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function ZF(t,e){try{const n=await YF(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Bv(t.firebaseDependencies,r),n}catch(n){throw await IC(t),n}}async function II(t,e){const r={token:await QF(t,e),createTime:Date.now(),subscriptionOptions:e};return await Bv(t,r),r.token}async function eU(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:BF(e)})}function tU(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function EI(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return nU(e,t),rU(e,t),iU(e,t),e}function nU(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function rU(t,e){e.data&&(t.data=e.data)}function iU(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function sU(t){return typeof t=="object"&&!!t&&yC in t}/**
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
 */EC("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");EC("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function EC(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function oU(t){if(!t||!t.options)throw Vp("App Configuration Object");if(!t.name)throw Vp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Vp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Vp(t){return Gt.create("missing-app-config-values",{valueName:t})}/**
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
 */let aU=class{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=oU(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}};/**
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
 */async function SC(t){try{t.swRegistration=await navigator.serviceWorker.register(LF,{scope:MF}),t.swRegistration.update().catch(()=>{})}catch(e){throw Gt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function lU(t,e){if(!e&&!t.swRegistration&&await SC(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Gt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function uU(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=gC)}/**
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
 */async function TC(t,e){if(!navigator)throw Gt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Gt.create("permission-blocked");return await uU(t,e==null?void 0:e.vapidKey),await lU(t,e==null?void 0:e.serviceWorkerRegistration),JF(t)}/**
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
 */async function cU(t,e,n){const r=hU(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[yC],message_name:n[FF],message_time:n[UF],message_device_time:Math.floor(Date.now()/1e3)})}function hU(t){switch(t){case du.NOTIFICATION_CLICKED:return"notification_open";case du.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function dU(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===du.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(EI(n)):t.onMessageHandler.next(EI(n)));const r=n.data;sU(r)&&r[VF]==="1"&&await cU(t,n.messageType,r)}const SI="@firebase/messaging",TI="0.12.4";/**
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
 */const fU=t=>{const e=new aU(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>dU(e,n)),e},pU=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>TC(e,r)}};function mU(){hn(new Nt("messaging",fU,"PUBLIC")),hn(new Nt("messaging-internal",pU,"PRIVATE")),kt(SI,TI),kt(SI,TI,"esm2017")}/**
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
 */async function gU(t){if(!navigator)throw Gt.create("only-available-in-window");return t.swRegistration||await SC(t),IC(t)}/**
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
 */function yU(t,e){if(!navigator)throw Gt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}async function vU(t,e){return t=V(t),TC(t,e)}function wU(t){return t=V(t),gU(t)}function _U(t,e){return t=V(t),yU(t,e)}mU();/**
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
 */const kC="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",IU="https://fcmregistrations.googleapis.com/v1",CC="FCM_MSG",EU="google.c.a.c_id",SU=3,TU=1;var Xh;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Xh||(Xh={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Jh;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Jh||(Jh={}));/**
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
 */function Ar(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function kU(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Bp="fcm_token_details_db",CU=5,kI="fcm_token_object_Store";async function bU(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Bp))return null;let e=null;return(await rf(Bp,CU,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(kI))return;const l=o.objectStore(kI),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(a=c.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:Ar(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Ar(c.auth),p256dh:Ar(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Ar(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Ar(c.auth),p256dh:Ar(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Ar(c.vapidKey)}}}}}})).close(),await Wo(Bp),await Wo("fcm_vapid_details_db"),await Wo("undefined"),AU(e)?e:null}function AU(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const NU="firebase-messaging-database",DU=1,qs="firebase-messaging-store";let zp=null;function Kv(){return zp||(zp=rf(NU,DU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qs)}}})),zp}async function Wv(t){const e=Gv(t),r=await(await Kv()).transaction(qs).objectStore(qs).get(e);if(r)return r;{const i=await bU(t.appConfig.senderId);if(i)return await Hv(t,i),i}}async function Hv(t,e){const n=Gv(t),i=(await Kv()).transaction(qs,"readwrite");return await i.objectStore(qs).put(e,n),await i.done,e}async function RU(t){const e=Gv(t),r=(await Kv()).transaction(qs,"readwrite");await r.objectStore(qs).delete(e),await r.done}function Gv({appConfig:t}){return t.appId}/**
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
 */const xU={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},fr=new _r("messaging","Messaging",xU);/**
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
 */async function PU(t,e){const n=await Yv(t),r=AC(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Qv(t.appConfig),i)).json()}catch(o){throw fr.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw fr.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw fr.create("token-subscribe-no-token");return s.token}async function OU(t,e){const n=await Yv(t),r=AC(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Qv(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw fr.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw fr.create("token-update-failed",{errorInfo:o})}if(!s.token)throw fr.create("token-update-no-token");return s.token}async function bC(t,e){const r={method:"DELETE",headers:await Yv(t)};try{const s=await(await fetch(`${Qv(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw fr.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw fr.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Qv({projectId:t}){return`${IU}/projects/${t}/registrations`}async function Yv({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function AC({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==kC&&(i.web.applicationPubKey=r),i}/**
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
 */const LU=7*24*60*60*1e3;async function MU(t){const e=await FU(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Ar(e.getKey("auth")),p256dh:Ar(e.getKey("p256dh"))},r=await Wv(t.firebaseDependencies);if(r){if(UU(r.subscriptionOptions,n))return Date.now()>=r.createTime+LU?$U(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await bC(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return CI(t.firebaseDependencies,n)}else return CI(t.firebaseDependencies,n)}async function yg(t){const e=await Wv(t.firebaseDependencies);e&&(await bC(t.firebaseDependencies,e.token),await RU(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function $U(t,e){try{const n=await OU(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Hv(t.firebaseDependencies,r),n}catch(n){throw await yg(t),n}}async function CI(t,e){const r={token:await PU(t,e),createTime:Date.now(),subscriptionOptions:e};return await Hv(t,r),r.token}async function FU(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:kU(e)})}function UU(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function VU(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return BU(e,t),zU(e,t),jU(e,t),e}function BU(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function zU(t,e){e.data&&(t.data=e.data)}function jU(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function qU(t){return typeof t=="object"&&!!t&&EU in t}/**
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
 */function KU(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */NC("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");NC("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");async function WU(t,e){const n=HU(e,await t.firebaseDependencies.installations.getId());GU(t,n)}function HU(t,e){var n,r;const i={};return t.from&&(i.project_number=t.from),t.fcmMessageId&&(i.message_id=t.fcmMessageId),i.instance_id=e,t.notification?i.message_type=Xh.DISPLAY_NOTIFICATION.toString():i.message_type=Xh.DATA_MESSAGE.toString(),i.sdk_platform=SU.toString(),i.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),t.collapse_key&&(i.collapse_key=t.collapse_key),i.event=TU.toString(),!((n=t.fcmOptions)===null||n===void 0)&&n.analytics_label&&(i.analytics_label=(r=t.fcmOptions)===null||r===void 0?void 0:r.analytics_label),i}function GU(t,e){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(e),t.logEvents.push(n)}function NC(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */async function QU(t,e){var n,r;const{newSubscription:i}=t;if(!i){await yg(e);return}const s=await Wv(e.firebaseDependencies);await yg(e),e.vapidKey=(r=(n=s==null?void 0:s.subscriptionOptions)===null||n===void 0?void 0:n.vapidKey)!==null&&r!==void 0?r:kC,await MU(e)}async function YU(t,e){const n=ZU(t);if(!n)return;e.deliveryMetricsExportedToBigQueryEnabled&&await WU(e,n);const r=await DC();if(tV(r))return nV(r,n);if(n.notification&&await rV(JU(n)),!!e&&e.onBackgroundMessageHandler){const i=VU(n);typeof e.onBackgroundMessageHandler=="function"?await e.onBackgroundMessageHandler(i):e.onBackgroundMessageHandler.next(i)}}async function XU(t){var e,n;const r=(n=(e=t.notification)===null||e===void 0?void 0:e.data)===null||n===void 0?void 0:n[CC];if(r){if(t.action)return}else return;t.stopImmediatePropagation(),t.notification.close();const i=iV(r);if(!i)return;const s=new URL(i,self.location.href),o=new URL(self.location.origin);if(s.host!==o.host)return;let a=await eV(s);if(a?a=await a.focus():(a=await self.clients.openWindow(i),await KU(3e3)),!!a)return r.messageType=Jh.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,a.postMessage(r)}function JU(t){const e=Object.assign({},t.notification);return e.data={[CC]:t},e}function ZU({data:t}){if(!t)return null;try{return t.json()}catch{return null}}async function eV(t){const e=await DC();for(const n of e){const r=new URL(n.url,self.location.href);if(t.host===r.host)return n}return null}function tV(t){return t.some(e=>e.visibilityState==="visible"&&!e.url.startsWith("chrome-extension://"))}function nV(t,e){e.isFirebaseMessaging=!0,e.messageType=Jh.PUSH_RECEIVED;for(const n of t)n.postMessage(e)}function DC(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function rV(t){var e;const{actions:n}=t,{maxActions:r}=Notification;return n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`),self.registration.showNotification((e=t.title)!==null&&e!==void 0?e:"",t)}function iV(t){var e,n,r;const i=(n=(e=t.fcmOptions)===null||e===void 0?void 0:e.link)!==null&&n!==void 0?n:(r=t.notification)===null||r===void 0?void 0:r.click_action;return i||(qU(t.data)?self.location.origin:null)}/**
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
 */function sV(t){if(!t||!t.options)throw jp("App Configuration Object");if(!t.name)throw jp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw jp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function jp(t){return fr.create("missing-app-config-values",{valueName:t})}/**
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
 */class oV{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=sV(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */const aV=t=>{const e=new oV(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(YU(n,e))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(QU(n,e))}),self.addEventListener("notificationclick",n=>{n.waitUntil(XU(n))}),e};function lV(){hn(new Nt("messaging-sw",aV,"PUBLIC"))}/**
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
 */function uV(t,e){if(self.document!==void 0)throw fr.create("only-available-in-sw");return t.onBackgroundMessageHandler=e,()=>{t.onBackgroundMessageHandler=null}}function cV(t,e){return t=V(t),uV(t,e)}/**
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
 */lV();const hV="@firebase/messaging-compat",dV="0.2.4";/**
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
 */function fV(){return self&&"ServiceWorkerGlobalScope"in self?mV():pV()}function pV(){return typeof window<"u"&&$s()&&cP()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function mV(){return $s()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}class bI{constructor(e,n){this.app=e,this._delegate=n,this.app=e,this._delegate=n}async getToken(e){return vU(this._delegate,e)}async deleteToken(){return wU(this._delegate)}onMessage(e){return _U(this._delegate,e)}onBackgroundMessage(e){return cV(this._delegate,e)}}/**
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
 */const gV=t=>self&&"ServiceWorkerGlobalScope"in self?new bI(t.getProvider("app-compat").getImmediate(),t.getProvider("messaging-sw").getImmediate()):new bI(t.getProvider("app-compat").getImmediate(),t.getProvider("messaging").getImmediate()),yV={isSupported:fV};function vV(){Ta.INTERNAL.registerComponent(new Nt("messaging-compat",gV,"PUBLIC").setServiceProps(yV))}/**
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
 */vV();Ta.registerVersion(hV,dV);var wV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Xv=Xv||{},G=wV||self;function Zh(){}function sf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ku(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _V(t){return Object.prototype.hasOwnProperty.call(t,qp)&&t[qp]||(t[qp]=++IV)}var qp="closure_uid_"+(1e9*Math.random()>>>0),IV=0;function EV(t,e,n){return t.call.apply(t.bind,arguments)}function SV(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Lt=EV:Lt=SV,Lt.apply(null,arguments)}function xc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function gt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Xi(){this.s=this.s,this.o=this.o}var TV=0;Xi.prototype.s=!1;Xi.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),TV!=0)&&_V(this)};Xi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const RC=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Jv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function AI(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(sf(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var kV=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",Zh,e),G.removeEventListener("test",Zh,e)}catch{}return t}();function ed(t){return/^[\s\xa0]*$/.test(t)}var NI=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Kp(t,e){return t<e?-1:t>e?1:0}function of(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function sr(t){return of().indexOf(t)!=-1}function Zv(t){return Zv[" "](t),t}Zv[" "]=Zh;function xC(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var CV=sr("Opera"),aa=sr("Trident")||sr("MSIE"),PC=sr("Edge"),vg=PC||aa,OC=sr("Gecko")&&!(of().toLowerCase().indexOf("webkit")!=-1&&!sr("Edge"))&&!(sr("Trident")||sr("MSIE"))&&!sr("Edge"),bV=of().toLowerCase().indexOf("webkit")!=-1&&!sr("Edge");function LC(){var t=G.document;return t?t.documentMode:void 0}var td;e:{var Wp="",Hp=function(){var t=of();if(OC)return/rv:([^\);]+)(\)|;)/.exec(t);if(PC)return/Edge\/([\d\.]+)/.exec(t);if(aa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bV)return/WebKit\/(\S+)/.exec(t);if(CV)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hp&&(Wp=Hp?Hp[1]:""),aa){var Gp=LC();if(Gp!=null&&Gp>parseFloat(Wp)){td=String(Gp);break e}}td=Wp}var AV={};function NV(){return xC(AV,9,function(){let t=0;const e=NI(String(td)).split("."),n=NI("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Kp(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Kp(i[2].length==0,s[2].length==0)||Kp(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var wg;if(G.document&&aa){var DI=LC();wg=DI||parseInt(td,10)||void 0}else wg=void 0;var DV=wg;function fu(t,e){if(Mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(OC){e:{try{Zv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RV[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fu.$.h.call(this)}}gt(fu,Mt);var RV={2:"touch",3:"pen",4:"mouse"};fu.prototype.h=function(){fu.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Wu="closure_listenable_"+(1e6*Math.random()|0),xV=0;function PV(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++xV,this.fa=this.ia=!1}function af(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ew(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function MC(t){const e={};for(const n in t)e[n]=t[n];return e}const RI="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $C(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<RI.length;s++)n=RI[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function lf(t){this.src=t,this.g={},this.h=0}lf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ig(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new PV(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function _g(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=RC(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(af(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ig(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var tw="closure_lm_"+(1e6*Math.random()|0),Qp={};function FC(t,e,n,r,i){if(r&&r.once)return VC(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)FC(t,e[s],n,r,i);return null}return n=iw(n),t&&t[Wu]?t.O(e,n,Ku(r)?!!r.capture:!!r,i):UC(t,e,n,!1,r,i)}function UC(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ku(i)?!!i.capture:!!i,a=rw(t);if(a||(t[tw]=a=new lf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=OV(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)kV||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(zC(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function OV(){function t(n){return e.call(t.src,t.listener,n)}const e=LV;return t}function VC(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)VC(t,e[s],n,r,i);return null}return n=iw(n),t&&t[Wu]?t.P(e,n,Ku(r)?!!r.capture:!!r,i):UC(t,e,n,!0,r,i)}function BC(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)BC(t,e[s],n,r,i);else r=Ku(r)?!!r.capture:!!r,n=iw(n),t&&t[Wu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ig(s,n,r,i),-1<n&&(af(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=rw(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ig(e,n,r,i)),(n=-1<t?e[t]:null)&&nw(n))}function nw(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Wu])_g(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(zC(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=rw(e))?(_g(n,t),n.h==0&&(n.src=null,e[tw]=null)):af(t)}}}function zC(t){return t in Qp?Qp[t]:Qp[t]="on"+t}function LV(t,e){if(t.fa)t=!0;else{e=new fu(e,this);var n=t.listener,r=t.la||t.src;t.ia&&nw(t),t=n.call(r,e)}return t}function rw(t){return t=t[tw],t instanceof lf?t:null}var Yp="__closure_events_fn_"+(1e9*Math.random()>>>0);function iw(t){return typeof t=="function"?t:(t[Yp]||(t[Yp]=function(e){return t.handleEvent(e)}),t[Yp])}function mt(){Xi.call(this),this.i=new lf(this),this.S=this,this.J=null}gt(mt,Xi);mt.prototype[Wu]=!0;mt.prototype.removeEventListener=function(t,e,n,r){BC(this,t,e,n,r)};function bt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Mt(e,t);else if(e instanceof Mt)e.target=e.target||t;else{var i=e;e=new Mt(r,t),$C(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Pc(o,r,!0,e)&&i}if(o=e.g=t,i=Pc(o,r,!0,e)&&i,i=Pc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Pc(o,r,!1,e)&&i}mt.prototype.N=function(){if(mt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)af(n[r]);delete t.g[e],t.h--}}this.J=null};mt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};mt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Pc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&_g(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var sw=G.JSON.stringify;function MV(){var t=KC;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $V{constructor(){this.h=this.g=null}add(e,n){const r=jC.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jC=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new FV,t=>t.reset());class FV{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UV(t){G.setTimeout(()=>{throw t},0)}function qC(t,e){Eg||VV(),Sg||(Eg(),Sg=!0),KC.add(t,e)}var Eg;function VV(){var t=G.Promise.resolve(void 0);Eg=function(){t.then(BV)}}var Sg=!1,KC=new $V;function BV(){for(var t;t=MV();){try{t.h.call(t.g)}catch(n){UV(n)}var e=jC;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Sg=!1}function uf(t,e){mt.call(this),this.h=t||1,this.g=e||G,this.j=Lt(this.qb,this),this.l=Date.now()}gt(uf,mt);$=uf.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),bt(this,"tick"),this.ga&&(ow(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ow(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){uf.$.N.call(this),ow(this),delete this.g};function aw(t,e,n){if(typeof t=="function")n&&(t=Lt(t,n));else if(t&&typeof t.handleEvent=="function")t=Lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function WC(t){t.g=aw(()=>{t.g=null,t.i&&(t.i=!1,WC(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zV extends Xi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:WC(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pu(t){Xi.call(this),this.h=t,this.g={}}gt(pu,Xi);var xI=[];function HC(t,e,n,r){Array.isArray(n)||(n&&(xI[0]=n.toString()),n=xI);for(var i=0;i<n.length;i++){var s=FC(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function GC(t){ew(t.g,function(e,n){this.g.hasOwnProperty(n)&&nw(e)},t),t.g={}}pu.prototype.N=function(){pu.$.N.call(this),GC(this)};pu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function cf(){this.g=!0}cf.prototype.Ea=function(){this.g=!1};function jV(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function qV(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Lo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+WV(t,n)+(r?" "+r:"")})}function KV(t,e){t.info(function(){return"TIMEOUT: "+e})}cf.prototype.info=function(){};function WV(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return sw(n)}catch{return e}}var ro={},PI=null;function hf(){return PI=PI||new mt}ro.Ta="serverreachability";function QC(t){Mt.call(this,ro.Ta,t)}gt(QC,Mt);function mu(t){const e=hf();bt(e,new QC(e))}ro.STAT_EVENT="statevent";function YC(t,e){Mt.call(this,ro.STAT_EVENT,t),this.stat=e}gt(YC,Mt);function Wt(t){const e=hf();bt(e,new YC(e,t))}ro.Ua="timingevent";function XC(t,e){Mt.call(this,ro.Ua,t),this.size=e}gt(XC,Mt);function Hu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var df={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},JC={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function lw(){}lw.prototype.h=null;function OI(t){return t.h||(t.h=t.i())}function ZC(){}var Gu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function uw(){Mt.call(this,"d")}gt(uw,Mt);function cw(){Mt.call(this,"c")}gt(cw,Mt);var Tg;function ff(){}gt(ff,lw);ff.prototype.g=function(){return new XMLHttpRequest};ff.prototype.i=function(){return{}};Tg=new ff;function Qu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new pu(this),this.P=HV,t=vg?125:void 0,this.V=new uf(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new eb}function eb(){this.i=null,this.g="",this.h=!1}var HV=45e3,kg={},nd={};$=Qu.prototype;$.setTimeout=function(t){this.P=t};function Cg(t,e,n){t.L=1,t.v=mf(Wr(e)),t.s=n,t.S=!0,tb(t,null)}function tb(t,e){t.G=Date.now(),Yu(t),t.A=Wr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),ub(n.i,"t",r),t.C=0,n=t.l.I,t.h=new eb,t.g=Db(t.l,n?e:null,!t.s),0<t.O&&(t.M=new zV(Lt(t.Pa,t,t.g),t.O)),HC(t.U,t.g,"readystatechange",t.nb),e=t.I?MC(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),mu(),jV(t.j,t.u,t.A,t.m,t.W,t.s)}$.nb=function(t){t=t.target;const e=this.M;e&&Or(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const c=Or(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||vg||this.g&&(this.h.h||this.g.ja()||FI(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?mu(3):mu(2)),pf(this);var n=this.g.da();this.aa=n;t:if(nb(this)){var r=FI(this.g);t="";var i=r.length,s=Or(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Is(this),Pl(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,qV(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ed(a)){var u=a;break t}}u=null}if(n=u)Lo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bg(this,n);else{this.i=!1,this.o=3,Wt(12),Is(this),Pl(this);break e}}this.S?(rb(this,c,o),vg&&this.i&&c==3&&(HC(this.U,this.V,"tick",this.mb),this.V.start())):(Lo(this.j,this.m,o,null),bg(this,o)),c==4&&Is(this),this.i&&!this.J&&(c==4?Cb(this.l,this):(this.i=!1,Yu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Wt(12)):(this.o=0,Wt(13)),Is(this),Pl(this)}}}catch{}finally{}};function nb(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function rb(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=GV(t,n),i==nd){e==4&&(t.o=4,Wt(14),r=!1),Lo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==kg){t.o=4,Wt(15),Lo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Lo(t.j,t.m,i,null),bg(t,i);nb(t)&&i!=nd&&i!=kg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Wt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),yw(e),e.L=!0,Wt(11))):(Lo(t.j,t.m,n,"[Invalid Chunked Response]"),Is(t),Pl(t))}$.mb=function(){if(this.g){var t=Or(this.g),e=this.g.ja();this.C<e.length&&(pf(this),rb(this,t,e),this.i&&t!=4&&Yu(this))}};function GV(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?nd:(n=Number(e.substring(n,r)),isNaN(n)?kg:(r+=1,r+n>e.length?nd:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.J=!0,Is(this)};function Yu(t){t.Y=Date.now()+t.P,ib(t,t.P)}function ib(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Hu(Lt(t.lb,t),e)}function pf(t){t.B&&(G.clearTimeout(t.B),t.B=null)}$.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(KV(this.j,this.A),this.L!=2&&(mu(),Wt(17)),Is(this),this.o=2,Pl(this)):ib(this,this.Y-t)};function Pl(t){t.l.H==0||t.J||Cb(t.l,t)}function Is(t){pf(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,ow(t.V),GC(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function bg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ag(n.h,t))){if(!t.K&&Ag(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)sd(n),vf(n);else break e;gw(n),Wt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Hu(Lt(n.ib,n),6e3));if(1>=db(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Es(n,11)}else if((t.K||n.g==t)&&sd(n),!ed(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(hw(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,be(r.G,r.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Nb(r,r.I?r.oa:null,r.Y),o.K){fb(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(pf(a),Yu(a)),r.g=o}else Tb(r);0<n.i.length&&wf(n)}else u[0]!="stop"&&u[0]!="close"||Es(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Es(n,7):mw(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}mu(4)}catch{}}function QV(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(sf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function YV(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(sf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function sb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(sf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=YV(t),r=QV(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var ob=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XV(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ds(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ds){this.h=e!==void 0?e:t.h,rd(this,t.j),this.s=t.s,this.g=t.g,id(this,t.m),this.l=t.l,e=t.i;var n=new gu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),LI(this,n),this.o=t.o}else t&&(n=String(t).match(ob))?(this.h=!!e,rd(this,n[1]||"",!0),this.s=pl(n[2]||""),this.g=pl(n[3]||"",!0),id(this,n[4]),this.l=pl(n[5]||"",!0),LI(this,n[6]||"",!0),this.o=pl(n[7]||"")):(this.h=!!e,this.i=new gu(null,this.h))}Ds.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ml(e,MI,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ml(e,MI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ml(n,n.charAt(0)=="/"?e4:ZV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ml(n,n4)),t.join("")};function Wr(t){return new Ds(t)}function rd(t,e,n){t.j=n?pl(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function id(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function LI(t,e,n){e instanceof gu?(t.i=e,r4(t.i,t.h)):(n||(e=ml(e,t4)),t.i=new gu(e,t.h))}function be(t,e,n){t.i.set(e,n)}function mf(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pl(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ml(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,JV),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function JV(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var MI=/[#\/\?@]/g,ZV=/[#\?:]/g,e4=/[#\?]/g,t4=/[#\?@]/g,n4=/#/g;function gu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ji(t){t.g||(t.g=new Map,t.h=0,t.i&&XV(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=gu.prototype;$.add=function(t,e){Ji(this),this.i=null,t=Na(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ab(t,e){Ji(t),e=Na(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function lb(t,e){return Ji(t),e=Na(t,e),t.g.has(e)}$.forEach=function(t,e){Ji(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.sa=function(){Ji(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.Z=function(t){Ji(this);let e=[];if(typeof t=="string")lb(this,t)&&(e=e.concat(this.g.get(Na(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Ji(this),this.i=null,t=Na(this,t),lb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ub(t,e,n){ab(t,e),0<n.length&&(t.i=null,t.g.set(Na(t,e),Jv(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Na(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function r4(t,e){e&&!t.j&&(Ji(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ab(this,r),ub(this,i,n))},t)),t.j=e}var i4=class{constructor(t,e){this.h=t,this.g=e}};function cb(t){this.l=t||s4,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var s4=10;function hb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function db(t){return t.h?1:t.g?t.g.size:0}function Ag(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function hw(t,e){t.g?t.g.add(e):t.h=e}function fb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cb.prototype.cancel=function(){if(this.i=pb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pb(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Jv(t.i)}function dw(){}dw.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};dw.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function o4(){this.g=new dw}function a4(t,e,n){const r=n||"";try{sb(t,function(i,s){let o=i;Ku(i)&&(o=sw(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function l4(t,e){const n=new cf;if(G.Image){const r=new Image;r.onload=xc(Oc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=xc(Oc,n,r,"TestLoadImage: error",!1,e),r.onabort=xc(Oc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=xc(Oc,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Oc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Xu(t){this.l=t.fc||null,this.j=t.ob||!1}gt(Xu,lw);Xu.prototype.g=function(){return new gf(this.l,this.j)};Xu.prototype.i=function(t){return function(){return t}}({});function gf(t,e){mt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=fw,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gt(gf,mt);var fw=0;$=gf.prototype;$.open=function(t,e){if(this.readyState!=fw)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yu(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ju(this)),this.readyState=fw};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yu(this)),this.g&&(this.readyState=3,yu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mb(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function mb(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ju(this):yu(this),this.readyState==3&&mb(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,Ju(this))};$.Ya=function(t){this.g&&(this.response=t,Ju(this))};$.ka=function(){this.g&&Ju(this)};function Ju(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yu(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var u4=G.JSON.parse;function Ue(t){mt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=gb,this.L=this.M=!1}gt(Ue,mt);var gb="",c4=/^https?$/i,h4=["POST","PUT"];$=Ue.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Tg.g(),this.C=this.u?OI(this.u):OI(Tg),this.g.onreadystatechange=Lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){$I(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=G.FormData&&t instanceof G.FormData,!(0<=RC(h4,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wb(this),0<this.B&&((this.L=d4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Lt(this.ua,this)):this.A=aw(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){$I(this,s)}};function d4(t){return aa&&NV()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof Xv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,bt(this,"timeout"),this.abort(8))};function $I(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yb(t),yf(t)}function yb(t){t.F||(t.F=!0,bt(t,"complete"),bt(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,bt(this,"complete"),bt(this,"abort"),yf(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yf(this,!0)),Ue.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?vb(this):this.kb())};$.kb=function(){vb(this)};function vb(t){if(t.h&&typeof Xv<"u"&&(!t.C[1]||Or(t)!=4||t.da()!=2)){if(t.v&&Or(t)==4)aw(t.La,0,t);else if(bt(t,"readystatechange"),Or(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(ob)[1]||null;if(!i&&G.self&&G.self.location){var s=G.self.location.protocol;i=s.substr(0,s.length-1)}r=!c4.test(i?i.toLowerCase():"")}n=r}if(n)bt(t,"complete"),bt(t,"success");else{t.m=6;try{var o=2<Or(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",yb(t)}}finally{yf(t)}}}}function yf(t,e){if(t.g){wb(t);const n=t.g,r=t.C[0]?Zh:null;t.g=null,t.C=null,e||bt(t,"ready");try{n.onreadystatechange=r}catch{}}}function wb(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function Or(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<Or(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),u4(e)}};function FI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case gb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _b(t){let e="";return ew(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function pw(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=_b(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function Za(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ib(t){this.Ga=0,this.i=[],this.j=new cf,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Za("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Za("baseRetryDelayMs",5e3,t),this.hb=Za("retryDelaySeedMs",1e4,t),this.eb=Za("forwardChannelMaxRetries",2,t),this.xa=Za("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new cb(t&&t.concurrentRequestLimit),this.Ja=new o4,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}$=Ib.prototype;$.qa=8;$.H=1;function mw(t){if(Eb(t),t.H==3){var e=t.W++,n=Wr(t.G);be(n,"SID",t.J),be(n,"RID",e),be(n,"TYPE","terminate"),Zu(t,n),e=new Qu(t,t.j,e,void 0),e.L=2,e.v=mf(Wr(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=Db(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Yu(e)}Ab(t)}function vf(t){t.g&&(yw(t),t.g.cancel(),t.g=null)}function Eb(t){vf(t),t.u&&(G.clearTimeout(t.u),t.u=null),sd(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function wf(t){hb(t.h)||t.m||(t.m=!0,qC(t.Na,t),t.C=0)}function f4(t,e){return db(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Hu(Lt(t.Na,t,e),bb(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Qu(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=MC(s),$C(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Sb(this,i,e),n=Wr(this.G),be(n,"RID",t),be(n,"CVER",22),this.F&&be(n,"X-HTTP-Session-Id",this.F),Zu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(_b(s)))+"&"+e:this.o&&pw(n,this.o,s)),hw(this.h,i),this.bb&&be(n,"TYPE","init"),this.P?(be(n,"$req",e),be(n,"SID","null"),i.ba=!0,Cg(i,n,null)):Cg(i,n,e),this.H=2}}else this.H==3&&(t?UI(this,t):this.i.length==0||hb(this.h)||UI(this))};function UI(t,e){var n;e?n=e.m:n=t.W++;const r=Wr(t.G);be(r,"SID",t.J),be(r,"RID",n),be(r,"AID",t.V),Zu(t,r),t.o&&t.s&&pw(r,t.o,t.s),n=new Qu(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Sb(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),hw(t.h,n),Cg(n,r,e)}function Zu(t,e){t.ma&&ew(t.ma,function(n,r){be(e,r,n)}),t.l&&sb({},function(n,r){be(e,r,n)})}function Sb(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Lt(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{a4(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function Tb(t){t.g||t.u||(t.ba=1,qC(t.Ma,t),t.A=0)}function gw(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Hu(Lt(t.Ma,t),bb(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,kb(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Hu(Lt(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Wt(10),vf(this),kb(this))};function yw(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function kb(t){t.g=new Qu(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Wr(t.wa);be(e,"RID","rpc"),be(e,"SID",t.J),be(e,"CI",t.M?"0":"1"),be(e,"AID",t.V),be(e,"TYPE","xmlhttp"),Zu(t,e),t.o&&t.s&&pw(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=mf(Wr(e)),n.s=null,n.S=!0,tb(n,t)}$.ib=function(){this.v!=null&&(this.v=null,vf(this),gw(this),Wt(19))};function sd(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Cb(t,e){var n=null;if(t.g==e){sd(t),yw(t),t.g=null;var r=2}else if(Ag(t.h,e))n=e.F,fb(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=hf(),bt(r,new XC(r,n)),wf(t)}else Tb(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&f4(t,e)||r==2&&gw(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Es(t,5);break;case 4:Es(t,10);break;case 3:Es(t,6);break;default:Es(t,2)}}}function bb(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Es(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Lt(t.pb,t);n||(n=new Ds("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||rd(n,"https"),mf(n)),l4(n.toString(),r)}else Wt(2);t.H=0,t.l&&t.l.za(e),Ab(t),Eb(t)}$.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Wt(2)):(this.j.info("Failed to ping google.com"),Wt(1))};function Ab(t){if(t.H=0,t.pa=[],t.l){const e=pb(t.h);(e.length!=0||t.i.length!=0)&&(AI(t.pa,e),AI(t.pa,t.i),t.h.i.length=0,Jv(t.i),t.i.length=0),t.l.ya()}}function Nb(t,e,n){var r=n instanceof Ds?Wr(n):new Ds(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),id(r,r.m);else{var i=G.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ds(null,void 0);r&&rd(s,r),e&&(s.g=e),i&&id(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&be(r,n,e),be(r,"VER",t.qa),Zu(t,r),r}function Db(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ue(new Xu({ob:!0})):new Ue(t.va),e.Oa(t.I),e}function Rb(){}$=Rb.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.Va=function(){};function od(){if(aa&&!(10<=Number(DV)))throw Error("Environmental error: no available transport.")}od.prototype.g=function(t,e){return new _n(t,e)};function _n(t,e){mt.call(this),this.g=new Ib(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ed(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ed(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Da(this)}gt(_n,mt);_n.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Wt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Nb(t,null,t.Y),wf(t)};_n.prototype.close=function(){mw(this.g)};_n.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=sw(t),t=n);e.i.push(new i4(e.fb++,t)),e.H==3&&wf(e)};_n.prototype.N=function(){this.g.l=null,delete this.j,mw(this.g),delete this.g,_n.$.N.call(this)};function xb(t){uw.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}gt(xb,uw);function Pb(){cw.call(this),this.status=1}gt(Pb,cw);function Da(t){this.g=t}gt(Da,Rb);Da.prototype.Ba=function(){bt(this.g,"a")};Da.prototype.Aa=function(t){bt(this.g,new xb(t))};Da.prototype.za=function(t){bt(this.g,new Pb)};Da.prototype.ya=function(){bt(this.g,"b")};function p4(){this.blockSize=-1}function Yn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}gt(Yn,p4);Yn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Xp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Yn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Xp(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Xp(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Xp(this,r),i=0;break}}this.h=i,this.i+=e};Yn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var m4={};function vw(t){return-128<=t&&128>t?xC(m4,t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function lr(t){if(isNaN(t)||!isFinite(t))return Ho;if(0>t)return It(lr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ng;return new ge(e,0)}function Ob(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return It(Ob(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=lr(Math.pow(e,8)),r=Ho,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=lr(Math.pow(e,s)),r=r.R(s).add(lr(o))):(r=r.R(n),r=r.add(lr(o)))}return r}var Ng=4294967296,Ho=vw(0),Dg=vw(1),VI=vw(16777216);$=ge.prototype;$.ea=function(){if(Dn(this))return-It(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ng+r)*e,e*=Ng}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Lr(this))return"0";if(Dn(this))return"-"+It(this).toString(t);for(var e=lr(Math.pow(t,6)),n=this,r="";;){var i=ld(n,e).g;n=ad(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Lr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Lr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Dn(t){return t.h==-1}$.X=function(t){return t=ad(this,t),Dn(t)?-1:Lr(t)?0:1};function It(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(Dg)}$.abs=function(){return Dn(this)?It(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function ad(t,e){return t.add(It(e))}$.R=function(t){if(Lr(this)||Lr(t))return Ho;if(Dn(this))return Dn(t)?It(this).R(It(t)):It(It(this).R(t));if(Dn(t))return It(this.R(It(t)));if(0>this.X(VI)&&0>t.X(VI))return lr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Lc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Lc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Lc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Lc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function Lc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function el(t,e){this.g=t,this.h=e}function ld(t,e){if(Lr(e))throw Error("division by zero");if(Lr(t))return new el(Ho,Ho);if(Dn(t))return e=ld(It(t),e),new el(It(e.g),It(e.h));if(Dn(e))return e=ld(t,It(e)),new el(It(e.g),e.h);if(30<t.g.length){if(Dn(t)||Dn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Dg,r=e;0>=r.X(t);)n=BI(n),r=BI(r);var i=po(n,1),s=po(r,1);for(r=po(r,2),n=po(n,2);!Lr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=po(r,1),n=po(n,1)}return e=ad(t,i.R(e)),new el(i,e)}for(i=Ho;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=lr(n),o=s.R(e);Dn(o)||0<o.X(t);)n-=r,s=lr(n),o=s.R(e);Lr(s)&&(s=Dg),i=i.add(s),t=ad(t,o)}return new el(i,t)}$.gb=function(t){return ld(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function BI(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function po(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ge(i,t.h)}od.prototype.createWebChannel=od.prototype.g;_n.prototype.send=_n.prototype.u;_n.prototype.open=_n.prototype.m;_n.prototype.close=_n.prototype.close;df.NO_ERROR=0;df.TIMEOUT=8;df.HTTP_ERROR=6;JC.COMPLETE="complete";ZC.EventType=Gu;Gu.OPEN="a";Gu.CLOSE="b";Gu.ERROR="c";Gu.MESSAGE="d";mt.prototype.listen=mt.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;Yn.prototype.digest=Yn.prototype.l;Yn.prototype.reset=Yn.prototype.reset;Yn.prototype.update=Yn.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=lr;ge.fromString=Ob;var g4=function(){return new od},y4=function(){return hf()},Jp=df,v4=JC,w4=ro,zI={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_4=Xu,Mc=ZC,I4=Ue,E4=Yn,Go=ge;const jI="@firebase/firestore";/**
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
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
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
 */let Ra="9.21.0";/**
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
 */const $i=new zd("@firebase/firestore");function Rg(){return $i.logLevel}function S4(t){$i.setLogLevel(t)}function b(t,...e){if($i.logLevel<=se.DEBUG){const n=e.map(ww);$i.debug(`Firestore (${Ra}): ${t}`,...n)}}function ze(t,...e){if($i.logLevel<=se.ERROR){const n=e.map(ww);$i.error(`Firestore (${Ra}): ${t}`,...n)}}function Xn(t,...e){if($i.logLevel<=se.WARN){const n=e.map(ww);$i.warn(`Firestore (${Ra}): ${t}`,...n)}}function ww(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function F(t="Unexpected state"){const e=`FIRESTORE (${Ra}) INTERNAL ASSERTION FAILED: `+t;throw ze(e),new Error(e)}function z(t,e){t||F()}function T4(t,e){t||F()}function M(t,e){return t}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Tt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ft{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Lb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class C4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class b4{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ft;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ft,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ft)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new Lb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new ht(e)}}class A4{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class N4{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new A4(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R4{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(z(typeof n.token=="string"),this.T=n.token,new D4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function x4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Mb{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=x4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(t,e){return t<e?-1:t>e?1:0}function la(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function $b(t){return t+"\0"}/**
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
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new Ne(0,0))}static max(){return new B(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vu{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends vu{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const P4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends vu{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return P4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new C(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(oe.fromString(e))}static fromName(e){return new O(oe.fromString(e).popFirst(5))}static empty(){return new O(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new oe(e.slice()))}}/**
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
 */class Fb{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function xg(t){return t.fields.find(e=>e.kind===2)}function ls(t){return t.fields.filter(e=>e.kind!==2)}Fb.UNKNOWN_ID=-1;class O4{constructor(e,n){this.fieldPath=e,this.kind=n}}class ud{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new ud(0,In.min())}}function Ub(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new In(i,O.empty(),e)}function Vb(t){return new In(t.readTime,t.key,-1)}class In{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new In(B.min(),O.empty(),-1)}static max(){return new In(B.max(),O.empty(),-1)}}function _w(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
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
 */const Bb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zi(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==Bb)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new E((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class _f{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.R=new ft,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{n.error?this.R.reject(new Ol(e,n.error)):this.R.resolve()},this.transaction.onerror=r=>{const i=Iw(r.target.error);this.R.reject(new Ol(e,i))}}static open(e,n,r,i){try{return new _f(n,e.transaction(i,r))}catch(s){throw new Ol(n,s)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(b("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new M4(n)}}class qn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,qn.S(Me())===12.2&&ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return b("SimpleDb","Removing database:",e),hs(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!$s())return!1;if(qn.C())return!0;const e=Me(),n=qn.S(e),r=0<n&&n<10,i=qn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(b("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ol(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ol(e,o))},i.onupgradeneeded=s=>{b("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.$(o,i.transaction,s.oldVersion,this.version).next(()=>{b("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=_f.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),E.reject(u))).toPromise();return l.catch(()=>{}),await a.v,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(b("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class L4{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return hs(this.L.delete())}}class Ol extends C{constructor(e,n){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function es(t){return t.name==="IndexedDbTransactionError"}class M4{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(b("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(b("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),hs(r)}add(e){return b("SimpleDb","ADD",this.store.name,e,e),hs(this.store.add(e))}get(e){return hs(this.store.get(e)).next(n=>(n===void 0&&(n=null),b("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return b("SimpleDb","DELETE",this.store.name,e),hs(this.store.delete(e))}count(){return b("SimpleDb","COUNT",this.store.name),hs(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new E((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new E((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){b("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new E((r,i)=>{n.onerror=s=>{const o=Iw(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new E((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new L4(a),u=n(a.primaryKey,a.value,l);if(u instanceof E){const c=u.catch(h=>(l.done(),E.reject(h)));r.push(c)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>E.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function hs(t){return new E((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Iw(r.target.error);n(i)}})}let qI=!1;function Iw(t){const e=qn.S(Me());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qI||(qI=!0,setTimeout(()=>{throw r},0)),r}}return t}class $4{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){b("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{b("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){es(n)?b("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Zi(n)}await this.et(6e4)})}}class F4{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return E.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return b("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(b("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=Vb(s);_w(o,r)>0&&(r=o)}),new In(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class sn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}sn.ct=-1;function ec(t){return t==null}function wu(t){return t===0&&1/t==-1/0}function jb(t){return typeof t=="number"&&Number.isInteger(t)&&!wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Qt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=KI(e)),e=U4(t.get(n),e);return KI(e)}function U4(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function KI(t){return t+""}function ur(t){const e=t.length;if(z(e>=2),e===2)return z(t.charAt(0)===""&&t.charAt(1)===""),oe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&F(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:F()}s=o+2}return new oe(r)}/**
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
 */const WI=["userId","batchId"];/**
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
 */function uh(t,e){return[t,Qt(e)]}function qb(t,e,n){return[t,Qt(e),n]}const V4={},B4=["prefixPath","collectionGroup","readTime","documentId"],z4=["prefixPath","collectionGroup","documentId"],j4=["collectionGroup","readTime","prefixPath","documentId"],q4=["canonicalId","targetId"],K4=["targetId","path"],W4=["path","targetId"],H4=["collectionId","parent"],G4=["indexId","uid"],Q4=["uid","sequenceNumber"],Y4=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],X4=["indexId","uid","orderedDocumentKey"],J4=["userId","collectionPath","documentId"],Z4=["userId","collectionPath","largestBatchId"],eB=["userId","collectionGroup","largestBatchId"],Kb=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],tB=[...Kb,"documentOverlays"],Wb=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Hb=Wb,nB=[...Hb,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Pg extends zb{constructor(e,n){super(),this.at=e,this.currentSequenceNumber=n}}function yt(t,e){const n=M(t);return qn.M(n.at,e)}/**
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
 */function HI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function io(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ve{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $c(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $c(this.root,e,this.comparator,!1)}getReverseIterator(){return new $c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $c(this.root,e,this.comparator,!0)}}class $c{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_t.RED,this.left=i??_t.EMPTY,this.right=s??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new _t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,r,i){return this}insert(t,e,n){return new _t(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Se{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new GI(this.data.getIterator())}getIteratorFrom(e){return new GI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Se(this.comparator);return n.data=e,n}}class GI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function mo(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class on{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new on([])}unionWith(e){let n=new Se(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new on(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return la(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Qb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function rB(){return typeof atob<"u"}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qb("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const iB=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fi(t){if(z(!!t),typeof t=="string"){let e=0;const n=iB.exec(t);if(z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ui(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function If(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ew(t){const e=t.mapValue.fields.__previous_value__;return If(e)?Ew(e):e}function _u(t){const e=Fi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class sB{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Vi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ch={nullValue:"NULL_VALUE"};function Ks(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?If(t)?4:Yb(t)?9007199254740991:10:F()}function yr(t,e){if(t===e)return!0;const n=Ks(t);if(n!==Ks(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _u(t).isEqual(_u(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Fi(r.timestampValue),o=Fi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ui(r.bytesValue).isEqual(Ui(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Fe(r.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(r.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Fe(r.integerValue)===Fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Fe(r.doubleValue),o=Fe(i.doubleValue);return s===o?wu(s)===wu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return la(t.arrayValue.values||[],e.arrayValue.values||[],yr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(HI(s)!==HI(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!yr(s[a],o[a])))return!1;return!0}(t,e);default:return F()}}function Iu(t,e){return(t.values||[]).find(n=>yr(n,e))!==void 0}function Bi(t,e){if(t===e)return 0;const n=Ks(t),r=Ks(e);if(n!==r)return Y(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Fe(i.integerValue||i.doubleValue),a=Fe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return QI(t.timestampValue,e.timestampValue);case 4:return QI(_u(t),_u(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ui(i),a=Ui(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Y(o[l],a[l]);if(u!==0)return u}return Y(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Y(Fe(i.latitude),Fe(s.latitude));return o!==0?o:Y(Fe(i.longitude),Fe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Bi(o[l],a[l]);if(u)return u}return Y(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===vi.mapValue&&s===vi.mapValue)return 0;if(i===vi.mapValue)return 1;if(s===vi.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Y(a[c],u[c]);if(h!==0)return h;const d=Bi(o[a[c]],l[u[c]]);if(d!==0)return d}return Y(a.length,u.length)}(t.mapValue,e.mapValue);default:throw F()}}function QI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=Fi(t),r=Fi(e),i=Y(n.seconds,r.seconds);return i!==0?i:Y(n.nanos,r.nanos)}function ua(t){return Og(t)}function Og(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Fi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ui(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Og(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Og(r.fields[a])}`;return s+"}"}(t.mapValue):F();var e,n}function Ws(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Lg(t){return!!t&&"integerValue"in t}function Eu(t){return!!t&&"arrayValue"in t}function YI(t){return!!t&&"nullValue"in t}function XI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hh(t){return!!t&&"mapValue"in t}function Ll(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return io(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ll(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ll(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Yb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function oB(t){return"nullValue"in t?ch:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ws(Vi.empty(),O.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:F()}function aB(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ws(Vi.empty(),O.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?vi:F()}function JI(t,e){const n=Bi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function ZI(t,e){const n=Bi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ll(n)}setAll(e){let n=je.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ll(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){io(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Et(Ll(this.value))}}function Xb(t){const e=[];return io(t.fields,(n,r)=>{const i=new je([n]);if(hh(r)){const s=Xb(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new on(e)}/**
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
 */class Ie{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ie(e,0,B.min(),B.min(),B.min(),Et.empty(),0)}static newFoundDocument(e,n,r,i){return new Ie(e,1,n,B.min(),r,i,0)}static newNoDocument(e,n){return new Ie(e,2,n,B.min(),B.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new Ie(e,3,n,B.min(),B.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zi{constructor(e,n){this.position=e,this.inclusive=n}}function eE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=Bi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function lB(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Jb{}class Z extends Jb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uB(e,n,r):n==="array-contains"?new dB(e,r):n==="in"?new iA(e,r):n==="not-in"?new fB(e,r):n==="array-contains-any"?new pB(e,r):new Z(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cB(e,r):new hB(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bi(n,this.value)):n!==null&&Ks(this.value)===Ks(n)&&this.matchesComparison(Bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class pe extends Jb{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new pe(e,n)}matches(e){return ca(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ca(t){return t.op==="and"}function Mg(t){return t.op==="or"}function Sw(t){return Zb(t)&&ca(t)}function Zb(t){for(const e of t.filters)if(e instanceof pe)return!1;return!0}function $g(t){if(t instanceof Z)return t.field.canonicalString()+t.op.toString()+ua(t.value);if(Sw(t))return t.filters.map(e=>$g(e)).join(",");{const e=t.filters.map(n=>$g(n)).join(",");return`${t.op}(${e})`}}function eA(t,e){return t instanceof Z?function(n,r){return r instanceof Z&&n.op===r.op&&n.field.isEqual(r.field)&&yr(n.value,r.value)}(t,e):t instanceof pe?function(n,r){return r instanceof pe&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&eA(s,r.filters[o]),!0):!1}(t,e):void F()}function tA(t,e){const n=t.filters.concat(e);return pe.create(n,t.op)}function nA(t){return t instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${ua(e.value)}`}(t):t instanceof pe?function(e){return e.op.toString()+" {"+e.getFilters().map(nA).join(" ,")+"}"}(t):"Filter"}class uB extends Z{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class cB extends Z{constructor(e,n){super(e,"in",n),this.keys=rA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hB extends Z{constructor(e,n){super(e,"not-in",n),this.keys=rA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class dB extends Z{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eu(n)&&Iu(n.arrayValue,this.value)}}class iA extends Z{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Iu(this.value.arrayValue,n)}}class fB extends Z{constructor(e,n){super(e,"not-in",n)}matches(e){if(Iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Iu(this.value.arrayValue,n)}}class pB extends Z{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Iu(this.value.arrayValue,r))}}/**
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
 */class mB{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Fg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new mB(t,e,n,r,i,s,o)}function Hs(t){const e=M(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$g(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ec(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ua(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ua(r)).join(",")),e.ft=n}return e.ft}function tc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lB(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tE(t.startAt,e.startAt)&&tE(t.endAt,e.endAt)}function cd(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function hd(t,e){return t.filters.filter(n=>n instanceof Z&&n.field.isEqual(e))}function nE(t,e,n){let r=ch,i=!0;for(const s of hd(t,e)){let o=ch,a=!0;switch(s.op){case"<":case"<=":o=oB(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=ch}JI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];JI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function rE(t,e,n){let r=vi,i=!0;for(const s of hd(t,e)){let o=vi,a=!0;switch(s.op){case">=":case">":o=aB(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=vi}ZI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];ZI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Jr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function sA(t,e,n,r,i,s,o,a){return new Jr(t,e,n,r,i,s,o,a)}function xa(t){return new Jr(t)}function iE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ef(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function kw(t){return t.collectionGroup!==null}function Rs(t){const e=M(t);if(e.dt===null){e.dt=[];const n=Ef(e),r=Tw(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Qo(n)),e.dt.push(new Qo(je.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Qo(je.keyField(),s))}}}return e.dt}function dn(t){const e=M(t);if(!e._t)if(e.limitType==="F")e._t=Fg(e.path,e.collectionGroup,Rs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Rs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Qo(s.field,o))}const r=e.endAt?new zi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new zi(e.startAt.position,e.startAt.inclusive):null;e._t=Fg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Ug(t,e){e.getFirstInequalityField(),Ef(t);const n=t.filters.concat([e]);return new Jr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dd(t,e,n){return new Jr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nc(t,e){return tc(dn(t),dn(e))&&t.limitType===e.limitType}function oA(t){return`${Hs(dn(t))}|lt:${t.limitType}`}function Vg(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>nA(r)).join(", ")}]`),ec(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ua(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ua(r)).join(",")),`Target(${n})`}(dn(t))}; limitType=${t.limitType})`}function rc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Rs(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=eE(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Rs(n),r)||n.endAt&&!function(i,s,o){const a=eE(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Rs(n),r))}(t,e)}function aA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lA(t){return(e,n)=>{let r=!1;for(const i of Rs(t)){const s=gB(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gB(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Bi(a,l):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
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
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){io(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Gb(this.inner)}size(){return this.innerSize}}/**
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
 */const yB=new ve(O.comparator);function an(){return yB}const uA=new ve(O.comparator);function gl(...t){let e=uA;for(const n of t)e=e.insert(n.key,n);return e}function cA(t){let e=uA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Ml()}function hA(){return Ml()}function Ml(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const vB=new ve(O.comparator),wB=new Se(O.comparator);function X(...t){let e=wB;for(const n of t)e=e.add(n);return e}const _B=new Se(Y);function Cw(){return _B}/**
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
 */function dA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wu(e)?"-0":e}}function fA(t){return{integerValue:""+t}}function pA(t,e){return jb(e)?fA(e):dA(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Sf{constructor(){this._=void 0}}function IB(t,e,n){return t instanceof ha?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&If(i)&&(i=Ew(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Gs?gA(t,e):t instanceof Qs?yA(t,e):function(r,i){const s=mA(r,i),o=sE(s)+sE(r.wt);return Lg(s)&&Lg(r.wt)?fA(o):dA(r.serializer,o)}(t,e)}function EB(t,e,n){return t instanceof Gs?gA(t,e):t instanceof Qs?yA(t,e):n}function mA(t,e){return t instanceof da?Lg(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ha extends Sf{}class Gs extends Sf{constructor(e){super(),this.elements=e}}function gA(t,e){const n=vA(e);for(const r of t.elements)n.some(i=>yr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Qs extends Sf{constructor(e){super(),this.elements=e}}function yA(t,e){let n=vA(e);for(const r of t.elements)n=n.filter(i=>!yr(i,r));return{arrayValue:{values:n}}}class da extends Sf{constructor(e,n){super(),this.serializer=e,this.wt=n}}function sE(t){return Fe(t.integerValue||t.doubleValue)}function vA(t){return Eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ic{constructor(e,n){this.field=e,this.transform=n}}function SB(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Gs&&r instanceof Gs||n instanceof Qs&&r instanceof Qs?la(n.elements,r.elements,yr):n instanceof da&&r instanceof da?yr(n.wt,r.wt):n instanceof ha&&r instanceof ha}(t.transform,e.transform)}class TB{constructor(e,n){this.version=e,this.transformResults=n}}class Ae{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ae}static exists(e){return new Ae(void 0,e)}static updateTime(e){return new Ae(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tf{}function wA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Oa(t.key,Ae.none()):new Pa(t.key,t.data,Ae.none());{const n=t.data,r=Et.empty();let i=new Se(je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Zr(t.key,r,new on(i.toArray()),Ae.none())}}function kB(t,e,n){t instanceof Pa?function(r,i,s){const o=r.value.clone(),a=aE(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(r,i,s){if(!dh(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=aE(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(_A(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function $l(t,e,n,r){return t instanceof Pa?function(i,s,o,a){if(!dh(i.precondition,s))return o;const l=i.value.clone(),u=lE(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zr?function(i,s,o,a){if(!dh(i.precondition,s))return o;const l=lE(i.fieldTransforms,a,s),u=s.data;return u.setAll(_A(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return dh(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function CB(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=mA(r.transform,i||null);s!=null&&(n===null&&(n=Et.empty()),n.set(r.field,s))}return n||null}function oE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&la(n,r,(i,s)=>SB(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pa extends Tf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zr extends Tf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function _A(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function aE(t,e,n){const r=new Map;z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,EB(o,a,n[i]))}return r}function lE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,IB(s,o,e))}return r}class Oa extends Tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bw extends Tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Aw{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&kB(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$l(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$l(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=wA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),X())}isEqual(e){return this.batchId===e.batchId&&la(this.mutations,e.mutations,(n,r)=>oE(n,r))&&la(this.baseMutations,e.baseMutations,(n,r)=>oE(n,r))}}class Nw{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){z(e.mutations.length===r.length);let i=vB;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Nw(e,n,r,i)}}/**
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
 */class Dw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class bB{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,ie;function IA(t){switch(t){default:return F();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function EA(t){if(t===void 0)return ze("GRPC error has no .code"),S.UNKNOWN;switch(t){case He.OK:return S.OK;case He.CANCELLED:return S.CANCELLED;case He.UNKNOWN:return S.UNKNOWN;case He.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case He.INTERNAL:return S.INTERNAL;case He.UNAVAILABLE:return S.UNAVAILABLE;case He.UNAUTHENTICATED:return S.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case He.NOT_FOUND:return S.NOT_FOUND;case He.ALREADY_EXISTS:return S.ALREADY_EXISTS;case He.PERMISSION_DENIED:return S.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case He.ABORTED:return S.ABORTED;case He.OUT_OF_RANGE:return S.OUT_OF_RANGE;case He.UNIMPLEMENTED:return S.UNIMPLEMENTED;case He.DATA_LOSS:return S.DATA_LOSS;default:return F()}}(ie=He||(He={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Rw{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Fc}static getOrCreateInstance(){return Fc===null&&(Fc=new Rw),Fc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Fc=null;/**
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
 */function SA(){return new TextEncoder}/**
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
 */const AB=new Go([4294967295,4294967295],0);function uE(t){const e=SA().encode(t),n=new E4;return n.update(e),new Uint8Array(n.digest())}function cE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Go([n,r],0),new Go([i,s],0)]}class xw{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yl(`Invalid padding: ${n}`);if(r<0)throw new yl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yl(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Go.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(Go.fromNumber(r)));return i.compare(AB)===1&&(i=new Go([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=uE(e),[r,i]=cE(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new xw(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=uE(e),[r,i]=cE(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,oc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sc(B.min(),i,new ve(Y),an(),X())}}class oc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oc(r,n,X(),X(),X())}}/**
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
 */class fh{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class TA{constructor(e,n){this.targetId=e,this.bt=n}}class kA{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class hE{constructor(){this.Vt=0,this.St=fE(),this.Dt=tt.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=X(),n=X(),r=X();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new oc(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=fE()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class NB{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=an(),this.jt=dE(),this.zt=new ve(Y)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(cd(o))if(i===0){const a=new O(o.path);this.Jt(r,a,Ie.newNoDocument(a,B.min()))}else z(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=Rw.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,p,y,v,I,m;const f={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(f.bloomFilter={applied:u===0,hashCount:(d=g==null?void 0:g.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(p=g==null?void 0:g.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(m=(I=g==null?void 0:g.bits)===null||I===void 0?void 0:I.padding)!==null&&m!==void 0?m:0}),f}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Ui(s).toUint8Array()}catch(c){if(c instanceof Qb)return Xn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new xw(l,o,a)}catch(c){return Xn(c instanceof yl?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&cd(a.target)){const l=new O(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,Ie.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=X();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new sc(e,n,this.zt,this.Qt,r);return this.Qt=an(),this.jt=dE(),this.zt=new ve(Y),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new hE,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new Se(Y),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new hE),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function dE(){return new ve(O.comparator)}function fE(){return new ve(O.comparator)}const DB=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),RB=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xB=(()=>({and:"AND",or:"OR"}))();class PB{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bg(t,e){return t.useProto3Json||ec(e)?e:{value:e}}function fa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function CA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OB(t,e){return fa(t,e.toTimestamp())}function qe(t){return z(!!t),B.fromTimestamp(function(e){const n=Fi(e);return new Ne(n.seconds,n.nanos)}(t))}function Pw(t,e){return function(n){return new oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function bA(t){const e=oe.fromString(t);return z(MA(e)),e}function Su(t,e){return Pw(t.databaseId,e.path)}function pr(t,e){const n=bA(e);if(n.get(1)!==t.databaseId.projectId)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(NA(n))}function zg(t,e){return Pw(t.databaseId,e)}function AA(t){const e=bA(t);return e.length===4?oe.emptyPath():NA(e)}function Tu(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function NA(t){return z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pE(t,e,n){return{name:Su(t,e),fields:n.value.mapValue.fields}}function DA(t,e,n){const r=pr(t,e.name),i=qe(e.updateTime),s=e.createTime?qe(e.createTime):B.min(),o=new Et({mapValue:{fields:e.fields}}),a=Ie.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function LB(t,e){return"found"in e?function(n,r){z(!!r.found),r.found.name,r.found.updateTime;const i=pr(n,r.found.name),s=qe(r.found.updateTime),o=r.found.createTime?qe(r.found.createTime):B.min(),a=new Et({mapValue:{fields:r.found.fields}});return Ie.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){z(!!r.missing),z(!!r.readTime);const i=pr(n,r.missing),s=qe(r.readTime);return Ie.newNoDocument(i,s)}(t,e):F()}function MB(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(z(u===void 0||typeof u=="string"),tt.fromBase64String(u||"")):(z(u===void 0||u instanceof Uint8Array),tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?S.UNKNOWN:EA(l.code);return new C(u,l.message||"")}(o);n=new kA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pr(t,r.document.name),s=qe(r.document.updateTime),o=r.document.createTime?qe(r.document.createTime):B.min(),a=new Et({mapValue:{fields:r.document.fields}}),l=Ie.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new fh(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pr(t,r.document),s=r.readTime?qe(r.readTime):B.min(),o=Ie.newNoDocument(i,s),a=r.removedTargetIds||[];n=new fh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pr(t,r.document),s=r.removedTargetIds||[];n=new fh([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new bB(i,s),a=r.targetId;n=new TA(a,o)}}return n}function ku(t,e){let n;if(e instanceof Pa)n={update:pE(t,e.key,e.value)};else if(e instanceof Oa)n={delete:Su(t,e.key)};else if(e instanceof Zr)n={update:pE(t,e.key,e.data),updateMask:zB(e.fieldMask)};else{if(!(e instanceof bw))return F();n={verify:Su(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ha)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Gs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Qs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof da)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:OB(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(t,e.precondition)),n}function jg(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Ae.updateTime(qe(i.updateTime)):i.exists!==void 0?Ae.exists(i.exists):Ae.none()}(e.currentDocument):Ae.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)z(o.setToServerValue==="REQUEST_TIME"),a=new ha;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Gs(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Qs(u)}else"increment"in o?a=new da(s,o.increment):F();const l=je.fromServerFormat(o.fieldPath);return new ic(l,a)}(t,i)):[];if(e.update){e.update.name;const i=pr(t,e.update.name),s=new Et({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const l=a.fieldPaths||[];return new on(l.map(u=>je.fromServerFormat(u)))}(e.updateMask);return new Zr(i,s,o,n,r)}return new Pa(i,s,n,r)}if(e.delete){const i=pr(t,e.delete);return new Oa(i,n)}if(e.verify){const i=pr(t,e.verify);return new bw(i,n)}return F()}function $B(t,e){return t&&t.length>0?(z(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?qe(r.updateTime):qe(i);return s.isEqual(B.min())&&(s=qe(i)),new TB(s,r.transformResults||[])}(n,e))):[]}function RA(t,e){return{documents:[zg(t,e.path)]}}function xA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=zg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return LA(pe.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:vo(c.field),direction:UB(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Bg(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function PA(t){let e=AA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){z(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=OA(c);return h instanceof pe&&Sw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Qo(wo(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ec(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new zi(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new zi(d,h)}(n.endAt)),sA(e,i,o,s,a,"F",l,u)}function FB(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function OA(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=wo(e.unaryFilter.field);return Z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=wo(e.unaryFilter.field);return Z.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wo(e.unaryFilter.field);return Z.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=wo(e.unaryFilter.field);return Z.create(s,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return Z.create(wo(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return pe.create(e.compositeFilter.filters.map(n=>OA(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function UB(t){return DB[t]}function VB(t){return RB[t]}function BB(t){return xB[t]}function vo(t){return{fieldPath:t.canonicalString()}}function wo(t){return je.fromServerFormat(t.fieldPath)}function LA(t){return t instanceof Z?function(e){if(e.op==="=="){if(XI(e.value))return{unaryFilter:{field:vo(e.field),op:"IS_NAN"}};if(YI(e.value))return{unaryFilter:{field:vo(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(XI(e.value))return{unaryFilter:{field:vo(e.field),op:"IS_NOT_NAN"}};if(YI(e.value))return{unaryFilter:{field:vo(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(e.field),op:VB(e.op),value:e.value}}}(t):t instanceof pe?function(e){const n=e.getFilters().map(r=>LA(r));return n.length===1?n[0]:{compositeFilter:{op:BB(e.op),filters:n}}}(t):F()}function zB(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function MA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Mr{constructor(e,n,r,i,s=B.min(),o=B.min(),a=tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $A{constructor(e){this.le=e}}function jB(t,e){let n;if(e.document)n=DA(t.le,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=O.fromSegments(e.noDocument.path),i=Xs(e.noDocument.readTime);n=Ie.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return F();{const r=O.fromSegments(e.unknownDocument.path),i=Xs(e.unknownDocument.version);n=Ie.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new Ne(r[0],r[1]);return B.fromTimestamp(i)}(e.readTime)),n}function mE(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:fd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Su(i,s.key),fields:s.data.value.mapValue.fields,updateTime:fa(i,s.version.toTimestamp()),createTime:fa(i,s.createTime.toTimestamp())}}(t.le,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ys(e.version)};else{if(!e.isUnknownDocument())return F();r.unknownDocument={path:n.path.toArray(),version:Ys(e.version)}}return r}function fd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ys(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Xs(t){const e=new Ne(t.seconds,t.nanoseconds);return B.fromTimestamp(e)}function ds(t,e){const n=(e.baseMutations||[]).map(s=>jg(t.le,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>jg(t.le,s)),i=Ne.fromMillis(e.localWriteTimeMs);return new Aw(e.batchId,i,n,r)}function vl(t){const e=Xs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Xs(t.lastLimboFreeSnapshotVersion):B.min();let r;var i;return t.query.documents!==void 0?(z((i=t.query).documents.length===1),r=dn(xa(AA(i.documents[0])))):r=function(s){return dn(PA(s))}(t.query),new Mr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,tt.fromBase64String(t.resumeToken))}function FA(t,e){const n=Ys(e.snapshotVersion),r=Ys(e.lastLimboFreeSnapshotVersion);let i;i=cd(e.target)?RA(t.le,e.target):xA(t.le,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Hs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Ow(t){const e=PA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dd(e,e.limit,"L"):e}function Zp(t,e){return new Dw(e.largestBatchId,jg(t.le,e.overlayMutation))}function gE(t,e){const n=e.path.lastSegment();return[t,Qt(e.path.popLast()),n]}function yE(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ys(r.readTime),documentKey:Qt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class qB{getBundleMetadata(e,n){return vE(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Xs(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return vE(e).put({bundleId:(r=n).id,createTime:Ys(qe(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return wE(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Ow(i.bundledQuery),readTime:Xs(i.readTime)};var i})}saveNamedQuery(e,n){return wE(e).put(function(r){return{name:r.name,readTime:Ys(qe(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function vE(t){return yt(t,"bundles")}function wE(t){return yt(t,"namedQueries")}/**
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
 */class kf{constructor(e,n){this.serializer=e,this.userId=n}static fe(e,n){const r=n.uid||"";return new kf(e,r)}getOverlay(e,n){return tl(e).get(gE(this.userId,n)).next(r=>r?Zp(this.serializer,r):null)}getOverlays(e,n){const r=cr();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Dw(n,o);i.push(this.de(e,a))}),E.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Qt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(tl(e).J("collectionPathOverlayIndex",a))}),E.waitFor(s)}getOverlaysForCollection(e,n,r){const i=cr(),s=Qt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return tl(e).j("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=Zp(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=cr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return tl(e).X({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=Zp(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}de(e,n){return tl(e).put(function(r,i,s){const[o,a,l]=gE(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:l,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:ku(r.le,s.mutation)}}(this.serializer,this.userId,n))}}function tl(t){return yt(t,"documentOverlays")}/**
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
 */class fs{constructor(){}_e(e,n){this.we(e,n),n.me()}we(e,n){if("nullValue"in e)this.ge(n,5);else if("booleanValue"in e)this.ge(n,10),n.ye(e.booleanValue?1:0);else if("integerValue"in e)this.ge(n,15),n.ye(Fe(e.integerValue));else if("doubleValue"in e){const r=Fe(e.doubleValue);isNaN(r)?this.ge(n,13):(this.ge(n,15),wu(r)?n.ye(0):n.ye(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ge(n,20),typeof r=="string"?n.pe(r):(n.pe(`${r.seconds||""}`),n.ye(r.nanos||0))}else if("stringValue"in e)this.Ie(e.stringValue,n),this.Te(n);else if("bytesValue"in e)this.ge(n,30),n.Ee(Ui(e.bytesValue)),this.Te(n);else if("referenceValue"in e)this.Ae(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ge(n,45),n.ye(r.latitude||0),n.ye(r.longitude||0)}else"mapValue"in e?Yb(e)?this.ge(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Te(n)):"arrayValue"in e?(this.ve(e.arrayValue,n),this.Te(n)):F()}Ie(e,n){this.ge(n,25),this.Pe(e,n)}Pe(e,n){n.pe(e)}Re(e,n){const r=e.fields||{};this.ge(n,55);for(const i of Object.keys(r))this.Ie(i,n),this.we(r[i],n)}ve(e,n){const r=e.values||[];this.ge(n,50);for(const i of r)this.we(i,n)}Ae(e,n){this.ge(n,37),O.fromName(e).path.forEach(r=>{this.ge(n,60),this.Pe(r,n)})}ge(e,n){e.ye(n)}Te(e){e.ye(2)}}fs.be=new fs;function KB(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function _E(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=KB(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class WB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ve(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Se(r.value),r=n.next();this.De()}Ce(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.xe(r.value),r=n.next();this.Ne()}ke(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Se(r);else if(r<2048)this.Se(960|r>>>6),this.Se(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Se(480|r>>>12),this.Se(128|63&r>>>6),this.Se(128|63&r);else{const i=n.codePointAt(0);this.Se(240|i>>>18),this.Se(128|63&i>>>12),this.Se(128|63&i>>>6),this.Se(128|63&i)}}this.De()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.xe(r);else if(r<2048)this.xe(960|r>>>6),this.xe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.xe(480|r>>>12),this.xe(128|63&r>>>6),this.xe(128|63&r);else{const i=n.codePointAt(0);this.xe(240|i>>>18),this.xe(128|63&i>>>12),this.xe(128|63&i>>>6),this.xe(128|63&i)}}this.Ne()}Oe(e){const n=this.$e(e),r=_E(n);this.Fe(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Be(e){const n=this.$e(e),r=_E(n);this.Fe(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Le(){this.qe(255),this.qe(255)}Ue(){this.Ke(255),this.Ke(255)}reset(){this.position=0}seed(e){this.Fe(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ge(){return this.buffer.slice(0,this.position)}$e(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Se(e){const n=255&e;n===0?(this.qe(0),this.qe(255)):n===255?(this.qe(255),this.qe(0)):this.qe(n)}xe(e){const n=255&e;n===0?(this.Ke(0),this.Ke(255)):n===255?(this.Ke(255),this.Ke(0)):this.Ke(e)}De(){this.qe(0),this.qe(1)}Ne(){this.Ke(0),this.Ke(1)}qe(e){this.Fe(1),this.buffer[this.position++]=e}Ke(e){this.Fe(1),this.buffer[this.position++]=~e}Fe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class HB{constructor(e){this.Qe=e}Ee(e){this.Qe.Ve(e)}pe(e){this.Qe.ke(e)}ye(e){this.Qe.Oe(e)}me(){this.Qe.Le()}}class GB{constructor(e){this.Qe=e}Ee(e){this.Qe.Ce(e)}pe(e){this.Qe.Me(e)}ye(e){this.Qe.Be(e)}me(){this.Qe.Ue()}}class nl{constructor(){this.Qe=new WB,this.je=new HB(this.Qe),this.ze=new GB(this.Qe)}seed(e){this.Qe.seed(e)}We(e){return e===0?this.je:this.ze}Ge(){return this.Qe.Ge()}reset(){this.Qe.reset()}}/**
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
 */class ps{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}He(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ps(this.indexId,this.documentKey,this.arrayValue,r)}}function si(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=IE(t.arrayValue,e.arrayValue),n!==0?n:(n=IE(t.directionalValue,e.directionalValue),n!==0?n:O.comparator(t.documentKey,e.documentKey)))}function IE(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class QB{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Je=e.orderBy,this.Ye=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xe=r:this.Ye.push(r)}}Ze(e){z(e.collectionGroup===this.collectionId);const n=xg(e);if(n!==void 0&&!this.tn(n))return!1;const r=ls(e);let i=0,s=0;for(;i<r.length&&this.tn(r[i]);++i);if(i===r.length)return!0;if(this.Xe!==void 0){const o=r[i];if(!this.en(this.Xe,o)||!this.nn(this.Je[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Je.length||!this.nn(this.Je[s++],o))return!1}return!0}tn(e){for(const n of this.Ye)if(this.en(n,e))return!0;return!1}en(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}nn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function UA(t){var e,n;if(z(t instanceof Z||t instanceof pe),t instanceof Z){if(t instanceof iA){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Z.create(t.field,"==",s)))||[];return pe.create(i,"or")}return t}const r=t.filters.map(i=>UA(i));return pe.create(r,t.op)}function YB(t){if(t.getFilters().length===0)return[];const e=Wg(UA(t));return z(VA(e)),qg(e)||Kg(e)?[e]:e.getFilters()}function qg(t){return t instanceof Z}function Kg(t){return t instanceof pe&&Sw(t)}function VA(t){return qg(t)||Kg(t)||function(e){if(e instanceof pe&&Mg(e)){for(const n of e.getFilters())if(!qg(n)&&!Kg(n))return!1;return!0}return!1}(t)}function Wg(t){if(z(t instanceof Z||t instanceof pe),t instanceof Z)return t;if(t.filters.length===1)return Wg(t.filters[0]);const e=t.filters.map(r=>Wg(r));let n=pe.create(e,t.op);return n=pd(n),VA(n)?n:(z(n instanceof pe),z(ca(n)),z(n.filters.length>1),n.filters.reduce((r,i)=>Lw(r,i)))}function Lw(t,e){let n;return z(t instanceof Z||t instanceof pe),z(e instanceof Z||e instanceof pe),n=t instanceof Z?e instanceof Z?function(r,i){return pe.create([r,i],"and")}(t,e):EE(t,e):e instanceof Z?EE(e,t):function(r,i){if(z(r.filters.length>0&&i.filters.length>0),ca(r)&&ca(i))return tA(r,i.getFilters());const s=Mg(r)?r:i,o=Mg(r)?i:r,a=s.filters.map(l=>Lw(l,o));return pe.create(a,"or")}(t,e),pd(n)}function EE(t,e){if(ca(e))return tA(e,t.getFilters());{const n=e.filters.map(r=>Lw(t,r));return pe.create(n,"or")}}function pd(t){if(z(t instanceof Z||t instanceof pe),t instanceof Z)return t;const e=t.getFilters();if(e.length===1)return pd(e[0]);if(Zb(t))return t;const n=e.map(i=>pd(i)),r=[];return n.forEach(i=>{i instanceof Z?r.push(i):i instanceof pe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:pe.create(r,t.op)}/**
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
 */class XB{constructor(){this.sn=new Mw}addToCollectionParentIndex(e,n){return this.sn.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(In.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(In.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class Mw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Se(oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Se(oe.comparator)).toArray()}}/**
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
 */const Uc=new Uint8Array(0);class JB{constructor(e,n){this.user=e,this.databaseId=n,this.rn=new Mw,this.on=new ts(r=>Hs(r),(r,i)=>tc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.rn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.rn.add(n)});const s={collectionId:r,parent:Qt(i)};return SE(e).put(s)}return E.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[$b(n),""],!1,!0);return SE(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(ur(o.parent))}return r})}addFieldIndex(e,n){const r=Vc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=il(e);return s.next(a=>{o.put(yE(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Vc(e),i=il(e),s=rl(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=rl(e);let i=!0;const s=new Map;return E.forEach(this.un(n),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=X();const a=[];return E.forEach(s,(l,u)=>{var c;b("IndexedDbIndexManager",`Using index ${c=l,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(g=>`${g.fieldPath}:${g.kind}`).join(",")}`} to execute ${Hs(n)}`);const h=function(g,_){const k=xg(_);if(k===void 0)return null;for(const T of hd(g,k.fieldPath))switch(T.op){case"array-contains-any":return T.value.arrayValue.values||[];case"array-contains":return[T.value]}return null}(u,l),d=function(g,_){const k=new Map;for(const T of ls(_))for(const N of hd(g,T.fieldPath))switch(N.op){case"==":case"in":k.set(T.fieldPath.canonicalString(),N.value);break;case"not-in":case"!=":return k.set(T.fieldPath.canonicalString(),N.value),Array.from(k.values())}return null}(u,l),p=function(g,_){const k=[];let T=!0;for(const N of ls(_)){const R=N.kind===0?nE(g,N.fieldPath,g.startAt):rE(g,N.fieldPath,g.startAt);k.push(R.value),T&&(T=R.inclusive)}return new zi(k,T)}(u,l),y=function(g,_){const k=[];let T=!0;for(const N of ls(_)){const R=N.kind===0?rE(g,N.fieldPath,g.endAt):nE(g,N.fieldPath,g.endAt);k.push(R.value),T&&(T=R.inclusive)}return new zi(k,T)}(u,l),v=this.an(l,u,p),I=this.an(l,u,y),m=this.hn(l,u,d),f=this.ln(l.indexId,h,v,p.inclusive,I,y.inclusive,m);return E.forEach(f,g=>r.H(g,n.limit).next(_=>{_.forEach(k=>{const T=O.fromSegments(k.documentKey);o.has(T)||(o=o.add(T),a.push(T))})}))}).next(()=>a)}return E.resolve(null)})}un(e){let n=this.on.get(e);return n||(e.filters.length===0?n=[e]:n=YB(pe.create(e.filters,"and")).map(r=>Fg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.on.set(e,n),n)}ln(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.fn(n[h/u]):Uc,p=this.dn(e,d,r[h%u],i),y=this._n(e,d,s[h%u],o),v=a.map(I=>this.dn(e,d,I,!0));c.push(...this.createRange(p,y,v))}return c}dn(e,n,r,i){const s=new ps(e,O.empty(),n,r);return i?s:s.He()}_n(e,n,r,i){const s=new ps(e,O.empty(),n,r);return i?s.He():s}cn(e,n){const r=new QB(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Ze(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.un(n);return E.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let l=new Se(je.comparator),u=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:l=l.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(l=l.add(c.field));return l.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}wn(e,n){const r=new nl;for(const i of ls(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.We(i.kind);fs.be._e(s,o)}return r.Ge()}fn(e){const n=new nl;return fs.be._e(e,n.We(0)),n.Ge()}mn(e,n){const r=new nl;return fs.be._e(Ws(this.databaseId,n),r.We(function(i){const s=ls(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Ge()}hn(e,n,r){if(r===null)return[];let i=[];i.push(new nl);let s=0;for(const o of ls(e)){const a=r[s++];for(const l of i)if(this.gn(n,o.fieldPath)&&Eu(a))i=this.yn(i,o,a);else{const u=l.We(o.kind);fs.be._e(a,u)}}return this.pn(i)}an(e,n,r){return this.hn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Ge();return n}yn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new nl;l.seed(a.Ge()),fs.be._e(o,l.We(n.kind)),s.push(l)}return s}gn(e,n){return!!e.filters.find(r=>r instanceof Z&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Vc(e),i=il(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return E.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(u,c){const h=c?new ud(c.sequenceNumber,new In(Xs(c.readTime),new O(ur(c.documentKey)),c.largestBatchId)):ud.empty(),d=u.fields.map(([p,y])=>new O4(je.fromServerFormat(p),y));return new Fb(u.indexId,u.collectionGroup,d,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Y(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Vc(e),s=il(e);return this.In(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>E.forEach(a,l=>s.put(yE(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return E.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?E.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),E.forEach(a,l=>this.Tn(e,i,l).next(u=>{const c=this.En(s,l);return u.isEqual(c)?E.resolve():this.An(e,s,l,u,c)}))))})}Rn(e,n,r,i){return rl(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return rl(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}Tn(e,n,r){const i=rl(e);let s=new Se(si);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new ps(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}En(e,n){let r=new Se(si);const i=this.wn(n,e);if(i==null)return r;const s=xg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Eu(o))for(const a of o.arrayValue.values||[])r=r.add(new ps(n.indexId,e.key,this.fn(a),i))}else r=r.add(new ps(n.indexId,e.key,Uc,i));return r}An(e,n,r,i,s){b("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,l,u,c,h){const d=a.getIterator(),p=l.getIterator();let y=mo(d),v=mo(p);for(;y||v;){let I=!1,m=!1;if(y&&v){const f=u(y,v);f<0?m=!0:f>0&&(I=!0)}else y!=null?m=!0:I=!0;I?(c(v),v=mo(p)):m?(h(y),y=mo(d)):(y=mo(d),v=mo(p))}}(i,s,si,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),E.waitFor(o)}In(e){let n=1;return il(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>si(o,a)).filter((o,a,l)=>!a||si(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=si(o,e),l=si(o,n);if(a===0)i[0]=e.He();else if(a>0&&l<0)i.push(o),i.push(o.He());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Uc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Uc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Pn(e,n){return si(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(TE)}getMinOffset(e,n){return E.mapArray(this.un(n),r=>this.cn(e,r).next(i=>i||F())).next(TE)}}function SE(t){return yt(t,"collectionParents")}function rl(t){return yt(t,"indexEntries")}function Vc(t){return yt(t,"indexConfiguration")}function il(t){return yt(t,"indexState")}function TE(t){z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;_w(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new In(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const kE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class tn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function BA(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.X({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{z(a===1)}));const u=[];for(const c of n.mutations){const h=qb(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return E.waitFor(s).next(()=>u)}function md(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw F();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(41943040,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);class Cf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static fe(e,n,r,i){z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Cf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return oi(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=_o(e),o=oi(e);return o.add({}).next(a=>{z(typeof a=="number");const l=new Aw(a,n,r,i),u=function(d,p,y){const v=y.baseMutations.map(m=>ku(d.le,m)),I=y.mutations.map(m=>ku(d.le,m));return{userId:p,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:I}}(this.serializer,this.userId,l),c=[];let h=new Se((d,p)=>Y(d.canonicalString(),p.canonicalString()));for(const d of i){const p=qb(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(p,V4))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=l.keys()}),E.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return oi(e).get(n).next(r=>r?(z(r.userId===this.userId),ds(this.serializer,r)):null)}Vn(e,n){return this.bn[n]?E.resolve(this.bn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.bn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return oi(e).X({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(z(a.batchId>=r),s=ds(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return oi(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return oi(e).j("userMutationsIndex",n).next(r=>r.map(i=>ds(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=uh(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return _o(e).X({range:i},(o,a,l)=>{const[u,c,h]=o,d=ur(c);if(u===this.userId&&n.path.isEqual(d))return oi(e).get(h).next(p=>{if(!p)throw F();z(p.userId===this.userId),s.push(ds(this.serializer,p))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(Y);const i=[];return n.forEach(s=>{const o=uh(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=_o(e).X({range:a},(u,c,h)=>{const[d,p,y]=u,v=ur(p);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(l)}),E.waitFor(i).next(()=>this.Sn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=uh(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Se(Y);return _o(e).X({range:o},(l,u,c)=>{const[h,d,p]=l,y=ur(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):c.done()}).next(()=>this.Sn(e,a))}Sn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(oi(e).get(s).next(o=>{if(o===null)throw F();z(o.userId===this.userId),r.push(ds(this.serializer,o))}))}),E.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return BA(e.at,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Dn(n.batchId)}),E.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Dn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return E.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return _o(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=ur(s[1]);i.push(l)}else a.done()}).next(()=>{z(i.length===0)})})}containsKey(e,n){return zA(e,this.userId,n)}Cn(e){return jA(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function zA(t,e,n){const r=uh(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return _o(t).X({range:s,Y:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function oi(t){return yt(t,"mutations")}function _o(t){return yt(t,"documentMutations")}function jA(t){return yt(t,"mutationQueues")}/**
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
 */class Js{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Js(0)}static kn(){return new Js(-1)}}/**
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
 */class ZB{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Mn(e).next(n=>{const r=new Js(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Mn(e).next(n=>B.fromTimestamp(new Ne(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Mn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Mn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.$n(e,n).next(()=>this.Mn(e).next(r=>(r.targetCount+=1,this.Fn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.$n(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>go(e).delete(n.targetId)).next(()=>this.Mn(e)).next(r=>(z(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return go(e).X((o,a)=>{const l=vl(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>E.waitFor(s)).next(()=>i)}forEachTarget(e,n){return go(e).X((r,i)=>{const s=vl(i);n(s)})}Mn(e){return CE(e).get("targetGlobalKey").next(n=>(z(n!==null),n))}On(e,n){return CE(e).put("targetGlobalKey",n)}$n(e,n){return go(e).put(FA(this.serializer,n))}Fn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Mn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Hs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return go(e).X({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=vl(a);tc(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=di(e);return n.forEach(o=>{const a=Qt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),E.waitFor(i)}removeMatchingKeys(e,n,r){const i=di(e);return E.forEach(n,s=>{const o=Qt(s.path);return E.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=di(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=di(e);let s=X();return i.X({range:r,Y:!0},(o,a,l)=>{const u=ur(o[1]),c=new O(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Qt(n.path),i=IDBKeyRange.bound([r],[$b(r)],!1,!0);let s=0;return di(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}he(e,n){return go(e).get(n).next(r=>r?vl(r):null)}}function go(t){return yt(t,"targets")}function CE(t){return yt(t,"targetGlobal")}function di(t){return yt(t,"targetDocuments")}/**
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
 */function bE([t,e],[n,r]){const i=Y(t,n);return i===0?Y(e,r):i}class ez{constructor(e){this.Bn=e,this.buffer=new Se(bE),this.Ln=0}qn(){return++this.Ln}Un(e){const n=[e,this.qn()];if(this.buffer.size<this.Bn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();bE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class tz{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Kn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Kn&&(this.Kn.cancel(),this.Kn=null)}get started(){return this.Kn!==null}Gn(e){b("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Kn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Kn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){es(n)?b("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Zi(n)}await this.Gn(3e5)})}}class nz{constructor(e,n){this.Qn=e,this.params=n}calculateTargetCount(e,n){return this.Qn.jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return E.resolve(sn.ct);const r=new ez(n);return this.Qn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.Qn.zn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Qn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Qn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(kE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kE):this.Wn(e,n))}getCacheSize(e){return this.Qn.getCacheSize(e)}Wn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Rg()<=se.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),E.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function rz(t,e){return new nz(t,e)}/**
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
 */class iz{constructor(e,n){this.db=e,this.garbageCollector=rz(this,n)}jn(e){const n=this.Hn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Hn(e){let n=0;return this.zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}zn(e,n){return this.Jn(e,(r,i)=>n(i))}addReference(e,n,r){return Bc(e,r)}removeReference(e,n,r){return Bc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Bc(e,n)}Yn(e,n){return function(r,i){let s=!1;return jA(r).Z(o=>zA(r,o,i).next(a=>(a&&(s=!0),E.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Jn(e,(o,a)=>{if(a<=n){const l=this.Yn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,B.min()),di(e).delete([0,Qt(o.path)])))});i.push(l)}}).next(()=>E.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Bc(e,n)}Jn(e,n){const r=di(e);let i,s=sn.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==sn.ct&&n(new O(ur(i)),s),s=u,i=l):s=sn.ct}).next(()=>{s!==sn.ct&&n(new O(ur(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Bc(t,e){return di(t).put(function(n,r){return{targetId:0,path:Qt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class qA{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class sz{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return is(e).put(r)}removeEntry(e,n,r){return is(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],fd(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Xn(e,r)))}getEntry(e,n){let r=Ie.newInvalidDocument(n);return is(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(sl(n))},(i,s)=>{r=this.Zn(n,s)}).next(()=>r)}ts(e,n){let r={size:0,document:Ie.newInvalidDocument(n)};return is(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(sl(n))},(i,s)=>{r={document:this.Zn(n,s),size:md(s)}}).next(()=>r)}getEntries(e,n){let r=an();return this.es(e,n,(i,s)=>{const o=this.Zn(i,s);r=r.insert(i,o)}).next(()=>r)}ns(e,n){let r=an(),i=new ve(O.comparator);return this.es(e,n,(s,o)=>{const a=this.Zn(s,o);r=r.insert(s,a),i=i.insert(s,md(o))}).next(()=>({documents:r,ss:i}))}es(e,n,r){if(n.isEmpty())return E.resolve();let i=new Se(DE);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(sl(i.first()),sl(i.last())),o=i.getIterator();let a=o.getNext();return is(e).X({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=O.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&DE(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.G(sl(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),fd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return is(e).j(IDBKeyRange.bound(o,a,!0)).next(l=>{let u=an();for(const c of l){const h=this.Zn(O.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);h.isFoundDocument()&&(rc(n,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=an();const o=NE(n,r),a=NE(n,In.max());return is(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.Zn(O.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new oz(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return AE(e).get("remoteDocumentGlobalKey").next(n=>(z(!!n),n))}Xn(e,n){return AE(e).put("remoteDocumentGlobalKey",n)}Zn(e,n){if(n){const r=jB(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(B.min())))return r}return Ie.newInvalidDocument(e)}}function KA(t){return new sz(t)}class oz extends qA{constructor(e,n){super(),this.rs=e,this.trackRemovals=n,this.os=new ts(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Se((s,o)=>Y(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.os.get(s);if(n.push(this.rs.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=mE(this.rs.serializer,o);i=i.add(s.path.popLast());const u=md(l);r+=u-a.size,n.push(this.rs.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=mE(this.rs.serializer,o.convertToNoDocument(B.min()));n.push(this.rs.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.rs.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.rs.updateMetadata(e,r)),E.waitFor(n)}getFromCache(e,n){return this.rs.ts(e,n).next(r=>(this.os.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.rs.ns(e,n).next(({documents:r,ss:i})=>(i.forEach((s,o)=>{this.os.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function AE(t){return yt(t,"remoteDocumentGlobal")}function is(t){return yt(t,"remoteDocumentsV14")}function sl(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function NE(t,e){const n=e.documentKey.path.toArray();return[t,fd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function DE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Y(n[s],r[s]),i)return i;return i=Y(n.length,r.length),i||(i=Y(n[n.length-2],r[r.length-2]),i||Y(n[n.length-1],r[r.length-1]))}/**
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
 *//**
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
 */class az{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class WA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&$l(r.mutation,i,on.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,n,r=X()){const i=cr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=gl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,X()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=an();const o=Ml(),a=Ml();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Zr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),$l(c.mutation,u,c.mutation.getFieldMask(),Ne.now())):o.set(u.key,on.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new az(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ml();let i=new ve((o,a)=>o-a),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||on.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||X()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=hA();c.forEach(d=>{if(!s.has(d)){const p=wA(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):E.resolve(cr());let a=-1,l=s;return o.next(u=>E.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?E.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,X())).next(c=>({batchId:a,changes:cA(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=gl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=gl();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const l=function(u,c){return new Jr(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ie.newInvalidDocument(u)))});let o=gl();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&$l(u.mutation,l,on.empty(),Ne.now()),rc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class lz{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return E.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:qe(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:Ow(r.bundledQuery),readTime:qe(r.readTime)}}(n)),E.resolve()}}/**
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
 */class uz{constructor(){this.overlays=new ve(O.comparator),this.hs=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const i=cr(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=cr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=cr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return E.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Dw(n,r));let s=this.hs.get(n);s===void 0&&(s=X(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class $w{constructor(){this.ls=new Se(ut.fs),this.ds=new Se(ut._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new ut(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new ut(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new O(new oe([])),r=new ut(n,e),i=new ut(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new O(new oe([])),r=new ut(n,e),i=new ut(n,e+1);let s=X();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ut(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return O.comparator(e.key,n.key)||Y(e.Es,n.Es)}static _s(e,n){return Y(e.Es,n.Es)||O.comparator(e.key,n.key)}}/**
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
 */class cz{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new Se(ut.fs)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Aw(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ut(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(Y);return n.forEach(i=>{const s=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),E.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new ut(new O(s),0);let a=new Se(Y);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),E.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){z(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return E.forEach(n.mutations,i=>{const s=new ut(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new ut(n,0),i=this.Rs.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class hz{constructor(e){this.Ss=e,this.docs=new ve(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(n))}getEntries(e,n){let r=an();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ie.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=an();const o=n.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_w(Vb(c),r)<=0||(i.has(c.key)||rc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,n,r,i){F()}Ds(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new dz(this)}getSize(e){return E.resolve(this.size)}}class dz extends qA{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class fz{constructor(e){this.persistence=e,this.Cs=new ts(n=>Hs(n),tc),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.xs=0,this.Ns=new $w,this.targetCount=0,this.ks=Js.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),E.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Js(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.$n(n),E.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.Ns.containsKey(n))}}/**
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
 */class HA{constructor(e,n){this.Ms={},this.overlays={},this.Os=new sn(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new fz(this),this.indexManager=new XB,this.remoteDocumentCache=function(r){return new hz(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new $A(n),this.Ls=new lz(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uz,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new cz(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new pz(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return E.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class pz extends zb{constructor(e){super(),this.currentSequenceNumber=e}}class bf{constructor(e){this.persistence=e,this.Gs=new $w,this.Qs=null}static js(e){return new bf(e)}get zs(){if(this.Qs)return this.Qs;throw F()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),E.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.zs,r=>{const i=O.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return E.or([()=>E.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class mz{constructor(e){this.serializer=e}$(e,n,r,i){const s=new _f("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",WI,{unique:!0}),a.createObjectStore("documentMutations")}(e),RE(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=E.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),RE(e)),o=o.next(()=>function(a){const l=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,l){return l.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",WI,{unique:!0});const c=l.store("mutations"),h=u.map(d=>c.put(d));return E.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Js(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ys(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xs(s))),r<8&&i>=8&&(o=o.next(()=>this.Zs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const l=a.createObjectStore("documentOverlays",{keyPath:J4});l.createIndex("collectionPathOverlayIndex",Z4,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",eB,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const l=a.createObjectStore("remoteDocumentsV14",{keyPath:B4});l.createIndex("documentKeyIndex",z4),l.createIndex("collectionGroupIndex",j4)}(e)).next(()=>this.ei(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ni(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:G4}).createIndex("sequenceNumberIndex",Q4,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Y4}).createIndex("documentKeyIndex",X4,{unique:!1})}(e))),o}Ys(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=md(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Js(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>E.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>E.forEach(a,l=>{z(l.userId===s.userId);const u=ds(this.serializer,l);return BA(e,s.userId,u).next(()=>{})}))}))}Xs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const l=new oe(o),u=function(c){return[0,Qt(c)]}(l);s.push(n.get(u).next(c=>c?E.resolve():(h=>n.put({targetId:0,path:Qt(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>E.waitFor(s))})}Zs(e,n){e.createObjectStore("collectionParents",{keyPath:H4});const r=n.store("collectionParents"),i=new Mw,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Qt(l)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const l=new oe(o);return s(l.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,l],u)=>{const c=ur(a);return s(c.popLast())}))}ti(e){const n=e.store("targets");return n.X((r,i)=>{const s=vl(i),o=FA(this.serializer,s);return n.put(o)})}ei(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),l=(u=o,u.document?new O(oe.fromString(u.document.name).popFirst(5)):u.noDocument?O.fromSegments(u.noDocument.path):u.unknownDocument?O.fromSegments(u.unknownDocument.path):F()).path.toArray();var u;/**
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
*/const c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>E.waitFor(i))}ni(e,n){const r=n.store("mutations"),i=KA(this.serializer),s=new HA(bf.js,this.serializer.le);return r.j().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:X();ds(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),E.forEach(a,(l,u)=>{const c=new ht(u),h=kf.fe(this.serializer,c),d=s.getIndexManager(c),p=Cf.fe(c,this.serializer,d,s.referenceDelegate);return new WA(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Pg(n,sn.ct),l).next()})})}}function RE(t){t.createObjectStore("targetDocuments",{keyPath:K4}).createIndex("documentTargetsIndex",W4,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",q4,{unique:!0}),t.createObjectStore("targetGlobal")}const em="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Fw{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.si=s,this.window=o,this.document=a,this.ii=u,this.ri=c,this.oi=h,this.Os=null,this.$s=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.ai=null,this.hi=Number.NEGATIVE_INFINITY,this.li=d=>Promise.resolve(),!Fw.D())throw new C(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new iz(this,i),this.fi=n+"main",this.serializer=new $A(l),this.di=new qn(this.fi,this.oi,new mz(this.serializer)),this.Fs=new ZB(this.referenceDelegate,this.serializer),this.remoteDocumentCache=KA(this.serializer),this.Ls=new qB,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,c===!1&&ze("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,em);return this.mi(),this.gi(),this.yi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Fs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new sn(e,this.ii)}).then(()=>{this.$s=!0}).catch(e=>(this.di&&this.di.close(),Promise.reject(e)))}pi(e){return this.li=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.di.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>zc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ii(e).next(n=>{n||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)))})}).next(()=>this.Ti(e)).next(n=>this.isPrimary&&!n?this.Ei(e).next(()=>!1):!!n&&this.Ai(e).next(()=>!0))).catch(e=>{if(es(e))return b("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return b("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.li(e)),this.isPrimary=e})}Ii(e){return ol(e).get("owner").next(n=>E.resolve(this.Ri(n)))}vi(e){return zc(e).delete(this.clientId)}async Pi(){if(this.isPrimary&&!this.bi(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=yt(n,"clientMetadata");return r.j().next(i=>{const s=this.Vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return E.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Si(n.clientId))}}yi(){this.ai=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Pi()).then(()=>this.yi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ti(e){return this.ri?E.resolve(!0):ol(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Di(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,em);return!1}}return!(!this.networkEnabled||!this.inForeground)||zc(e).j().next(r=>this.Vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&b("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.$s=!1,this.Ci(),this.ai&&(this.ai.cancel(),this.ai=null),this.xi(),this.Ni(),await this.di.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Pg(e,sn.ct);return this.Ei(n).next(()=>this.vi(n))}),this.di.close(),this.ki()}Vi(e,n){return e.filter(r=>this.bi(r.updateTimeMs,n)&&!this.Di(r.clientId))}Mi(){return this.runTransaction("getActiveClients","readonly",e=>zc(e).j().next(n=>this.Vi(n,18e5).map(r=>r.clientId)))}get started(){return this.$s}getMutationQueue(e,n){return Cf.fe(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new JB(e,this.serializer.le.databaseId)}getDocumentOverlayCache(e){return kf.fe(this.serializer,e)}getBundleCache(){return this.Ls}runTransaction(e,n,r){b("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.oi)===15?nB:o===14?Hb:o===13?Wb:o===12?tB:o===11?Kb:void F();var o;let a;return this.di.runTransaction(e,i,s,l=>(a=new Pg(l,this.Os?this.Os.next():sn.ct),n==="readwrite-primary"?this.Ii(a).next(u=>!!u||this.Ti(a)).next(u=>{if(!u)throw ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)),new C(S.FAILED_PRECONDITION,Bb);return r(a)}).next(u=>this.Ai(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}Oi(e){return ol(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Di(n.ownerId)&&!this.Ri(n)&&!(this.ri||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(S.FAILED_PRECONDITION,em)})}Ai(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ol(e).put("owner",n)}static D(){return qn.D()}Ei(e){const n=ol(e);return n.get("owner").next(r=>this.Ri(r)?(b("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):E.resolve())}bi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(ze(`Detected an update time that is in the future: ${e} > ${r}`),!1))}mi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Ci();const n=/(?:Version|Mobile)\/1[456]/;lP()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Ni(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Di(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Si(e)))!==null;return b("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ze("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ci(){if(this._i)try{this._i.setItem(this.Si(this.clientId),String(Date.now()))}catch(e){ze("Failed to set zombie client id.",e)}}ki(){if(this._i)try{this._i.removeItem(this.Si(this.clientId))}catch{}}Si(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ol(t){return yt(t,"owner")}function zc(t){return yt(t,"clientMetadata")}function Uw(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Vw{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=X(),i=X();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vw(e,n.fromCache,r,i)}}/**
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
 */class GA{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(iE(n))return E.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dd(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=X(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,dd(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return iE(n)||i.isEqual(B.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(Rg()<=se.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vg(n)),this.zi(e,o,n,Ub(i,-1)))})}Qi(e,n){let r=new Se(lA(e));return n.forEach((i,s)=>{rc(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return Rg()<=se.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Vg(n)),this.qi.getDocumentsMatchingQuery(e,n,In.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class gz{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new ve(Y),this.Ji=new ts(s=>Hs(s),tc),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WA(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function QA(t,e,n,r){return new gz(t,e,n,r)}async function YA(t,e){const n=M(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=X();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function yz(t,e){const n=M(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=E.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(y=>{const v=l.docVersions.get(p);z(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=X();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function XA(t){const e=M(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function vz(t,e){const n=M(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(tt.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,v,I){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,p,c)&&a.push(n.Fs.updateTargetData(s,p))});let l=an(),u=X();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(JA(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(B.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function JA(t,e,n){let r=X(),i=X();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=an();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function wz(t,e){const n=M(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pa(t,e){const n=M(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function ma(t,e,n){const r=M(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!es(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function gd(t,e,n){const r=M(t);let i=B.min(),s=X();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=M(a),h=c.Ji.get(u);return h!==void 0?E.resolve(c.Hi.get(h)):c.Fs.getTargetData(l,u)}(r,o,dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:X())).next(a=>(tN(r,aA(e),a),{documents:a,sr:s})))}function ZA(t,e){const n=M(t),r=M(n.Fs),i=n.Hi.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.he(s,e).next(o=>o?o.target:null))}function eN(t,e){const n=M(t),r=n.Yi.get(e)||B.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Xi.getAllFromCollectionGroup(i,e,Ub(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(tN(n,e,i),i))}function tN(t,e,n){let r=t.Yi.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}async function _z(t,e,n,r){const i=M(t);let s=X(),o=an();for(const u of n){const c=e.ir(u.metadata.name);u.document&&(s=s.add(c));const h=e.rr(u);h.setReadTime(e.ur(u.metadata.readTime)),o=o.insert(c,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),l=await pa(i,function(u){return dn(xa(oe.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>JA(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Fs.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Fs.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.er,c.nr)).next(()=>c.er)))}async function Iz(t,e,n=X()){const r=await pa(t,dn(Ow(e.bundledQuery))),i=M(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=qe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ls.saveNamedQuery(s,e);const a=r.withResumeToken(tt.EMPTY_BYTE_STRING,o);return i.Hi=i.Hi.insert(a.targetId,a),i.Fs.updateTargetData(s,a).next(()=>i.Fs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Fs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ls.saveNamedQuery(s,e))})}function xE(t,e){return`firestore_clients_${t}_${e}`}function PE(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function tm(t,e){return`firestore_targets_${t}_${e}`}class yd{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static cr(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new yd(e,n,i.state,s):(ze("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static cr(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new Fl(e,r.state,i):(ze("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class vd{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static cr(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Cw();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=jb(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new vd(e,s):(ze("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Bw{constructor(e,n){this.clientId=e,this.onlineState=n}static cr(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Bw(n.clientId,n.onlineState):(ze("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Hg{constructor(){this.activeTargetIds=Cw()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nm{constructor(e,n,r,i,s){this.window=e,this.si=n,this.persistenceKey=r,this.dr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.wr.bind(this),this.mr=new ve(Y),this.started=!1,this.gr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.yr=xE(this.persistenceKey,this.dr),this.pr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.mr=this.mr.insert(this.dr,new Hg),this.Ir=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Tr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Er=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ar=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Mi();for(const r of e){if(r===this.dr)continue;const i=this.getItem(xE(this.persistenceKey,r));if(i){const s=vd.cr(r,i);s&&(this.mr=this.mr.insert(s.clientId,s))}}this.vr();const n=this.storage.getItem(this.Ar);if(n){const r=this.Pr(n);r&&this.br(r)}for(const r of this.gr)this.wr(r);this.gr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.pr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Vr(this.mr)}isActiveQueryTarget(e){let n=!1;return this.mr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Sr(e,"pending")}updateMutationState(e,n,r){this.Sr(e,n,r),this.Dr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(tm(this.persistenceKey,e));if(r){const i=Fl.cr(e,r);i&&(n=i.state)}}return this.Cr.hr(e),this.vr(),n}removeLocalQueryTarget(e){this.Cr.lr(e),this.vr()}isLocalQueryTarget(e){return this.Cr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(tm(this.persistenceKey,e))}updateQueryState(e,n,r){this.Nr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Dr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.kr(e)}notifyBundleLoaded(e){this.Mr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.yr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return b("SharedClientState","READ",e,n),n}setItem(e,n){b("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){b("SharedClientState","REMOVE",e),this.storage.removeItem(e)}wr(e){const n=e;if(n.storageArea===this.storage){if(b("SharedClientState","EVENT",n.key,n.newValue),n.key===this.yr)return void ze("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ir.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.$r(r,null)}{const r=this.Fr(n.key,n.newValue);if(r)return this.$r(r.clientId,r)}}else if(this.Tr.test(n.key)){if(n.newValue!==null){const r=this.Br(n.key,n.newValue);if(r)return this.Lr(r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.qr(n.key,n.newValue);if(r)return this.Ur(r)}}else if(n.key===this.Ar){if(n.newValue!==null){const r=this.Pr(n.newValue);if(r)return this.br(r)}}else if(n.key===this.pr){const r=function(i){let s=sn.ct;if(i!=null)try{const o=JSON.parse(i);z(typeof o=="number"),s=o}catch(o){ze("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==sn.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Kr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Gr(i)))}}}else this.gr.push(n)})}}get Cr(){return this.mr.get(this.dr)}vr(){this.setItem(this.yr,this.Cr.ar())}Sr(e,n,r){const i=new yd(this.currentUser,e,n,r),s=PE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ar())}Dr(e){const n=PE(this.persistenceKey,this.currentUser,e);this.removeItem(n)}kr(e){const n={clientId:this.dr,onlineState:e};this.storage.setItem(this.Ar,JSON.stringify(n))}Nr(e,n,r){const i=tm(this.persistenceKey,e),s=new Fl(e,n,r);this.setItem(i,s.ar())}Mr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Ir.exec(e);return n?n[1]:null}Fr(e,n){const r=this.Or(e);return vd.cr(r,n)}Br(e,n){const r=this.Tr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return yd.cr(new ht(s),i,n)}qr(e,n){const r=this.Er.exec(e),i=Number(r[1]);return Fl.cr(i,n)}Pr(e){return Bw.cr(e)}Kr(e){return JSON.parse(e)}async Lr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Qr(e.batchId,e.state,e.error);b("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ur(e){return this.syncEngine.jr(e.targetId,e.state,e.error)}$r(e,n){const r=n?this.mr.insert(e,n):this.mr.remove(e),i=this.Vr(this.mr),s=this.Vr(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.zr(o,a).then(()=>{this.mr=r})}br(e){this.mr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Vr(e){let n=Cw();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class nN{constructor(){this.Wr=new Hg,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Hg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ez{Jr(e){}shutdown(){}}/**
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
 */class OE{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let jc=null;function rm(){return jc===null?jc=268435456+Math.round(2147483648*Math.random()):jc++,"0x"+jc.toString(16)}/**
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
 */const Sz={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Tz{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const Pt="WebChannelConnection";class kz extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=rm(),a=this.Io(e,n);b("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>(b("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Xn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ra,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=Sz[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=rm();return new Promise((o,a)=>{const l=new I4;l.setWithCredentials(!0),l.listenOnce(v4.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Jp.NO_ERROR:const c=l.getResponseJson();b(Pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Jp.TIMEOUT:b(Pt,`RPC '${e}' ${s} timed out`),a(new C(S.DEADLINE_EXCEEDED,"Request time out"));break;case Jp.HTTP_ERROR:const h=l.getStatus();if(b(Pt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(v){const I=v.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(I)>=0?I:S.UNKNOWN}(p.status);a(new C(y,p.message))}else a(new C(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new C(S.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{b(Pt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);b(Pt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=rm(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=g4(),a=y4(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new _4({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");b(Pt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const p=new Tz({io:v=>{d?b(Pt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(b(Pt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),b(Pt,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},ro:()=>c.close()}),y=(v,I,m)=>{v.listen(I,f=>{try{m(f)}catch(g){setTimeout(()=>{throw g},0)}})};return y(c,Mc.EventType.OPEN,()=>{d||b(Pt,`RPC '${e}' stream ${i} transport opened.`)}),y(c,Mc.EventType.CLOSE,()=>{d||(d=!0,b(Pt,`RPC '${e}' stream ${i} transport closed`),p.fo())}),y(c,Mc.EventType.ERROR,v=>{d||(d=!0,Xn(Pt,`RPC '${e}' stream ${i} transport errored:`,v),p.fo(new C(S.UNAVAILABLE,"The operation could not be completed")))}),y(c,Mc.EventType.MESSAGE,v=>{var I;if(!d){const m=v.data[0];z(!!m);const f=m,g=f.error||((I=f[0])===null||I===void 0?void 0:I.error);if(g){b(Pt,`RPC '${e}' stream ${i} received error:`,g);const _=g.status;let k=function(N){const R=He[N];if(R!==void 0)return EA(R)}(_),T=g.message;k===void 0&&(k=S.INTERNAL,T="Unknown error status: "+_+" with message "+g.message),d=!0,p.fo(new C(k,T)),c.close()}else b(Pt,`RPC '${e}' stream ${i} received:`,m),p._o(m)}}),y(a,w4.STAT_EVENT,v=>{v.stat===zI.PROXY?b(Pt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===zI.NOPROXY&&b(Pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}/**
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
 *//**
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
 */function rN(){return typeof window<"u"?window:null}function ph(){return typeof document<"u"?document:null}/**
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
 */function ac(t){return new PB(t,!0)}/**
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
 */class zw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class iN{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new zw(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(ze(n.toString()),ze("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new C(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cz extends iN{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=MB(this.serializer,e),r=function(i){if(!("targetChange"in i))return B.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?B.min():s.readTime?qe(s.readTime):B.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Tu(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=cd(a)?{documents:RA(i,a)}:{query:xA(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=CA(i,s.resumeToken);const l=Bg(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(B.min())>0){o.readTime=fa(i,s.snapshotVersion.toTimestamp());const l=Bg(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=FB(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Tu(this.serializer),n.removeTarget=e,this.zo(n)}}class bz extends iN{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=$B(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.uu(r,n)}return z(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Tu(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ku(this.serializer,r))};this.zo(n)}}/**
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
 */class Az extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(S.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(S.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class Nz{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(ze(n),this.wu=!1):b("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class Dz{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{ns(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=M(a);l.Au.add(4),await La(l),l.Pu.set("Unknown"),l.Au.delete(4),await lc(l)}(this))})}),this.Pu=new Nz(r,i)}}async function lc(t){if(ns(t))for(const e of t.Ru)await e(!0)}async function La(t){for(const e of t.Ru)await e(!1)}function Af(t,e){const n=M(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Kw(n)?qw(n):$a(n).Uo()&&jw(n,e))}function Cu(t,e){const n=M(t),r=$a(n);n.Eu.delete(e),r.Uo()&&sN(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():ns(n)&&n.Pu.set("Unknown"))}function jw(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$a(t).nu(e)}function sN(t,e){t.bu.Lt(e),$a(t).su(e)}function qw(t){t.bu=new NB({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),$a(t).start(),t.Pu.mu()}function Kw(t){return ns(t)&&!$a(t).qo()&&t.Eu.size>0}function ns(t){return M(t).Au.size===0}function oN(t){t.bu=void 0}async function Rz(t){t.Eu.forEach((e,n)=>{jw(t,e)})}async function xz(t,e){oN(t),Kw(t)?(t.Pu.pu(e),qw(t)):t.Pu.set("Unknown")}async function Pz(t,e,n){if(t.Pu.set("Online"),e instanceof kA&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wd(t,r)}else if(e instanceof fh?t.bu.Wt(e):e instanceof TA?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(B.min()))try{const r=await XA(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(tt.EMPTY_BYTE_STRING,u.snapshotVersion)),sN(i,a);const c=new Mr(u.target,a,l,u.sequenceNumber);jw(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await wd(t,r)}}async function wd(t,e,n){if(!es(e))throw e;t.Au.add(1),await La(t),t.Pu.set("Offline"),n||(n=()=>XA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await lc(t)})}function aN(t,e){return e().catch(n=>wd(t,n,e))}async function Ma(t){const e=M(t),n=ji(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;Oz(e);)try{const i=await wz(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,Lz(e,i)}catch(i){await wd(e,i)}lN(e)&&uN(e)}function Oz(t){return ns(t)&&t.Tu.length<10}function Lz(t,e){t.Tu.push(e);const n=ji(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function lN(t){return ns(t)&&!ji(t).qo()&&t.Tu.length>0}function uN(t){ji(t).start()}async function Mz(t){ji(t).au()}async function $z(t){const e=ji(t);for(const n of t.Tu)e.ou(n.mutations)}async function Fz(t,e,n){const r=t.Tu.shift(),i=Nw.from(r,e,n);await aN(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ma(t)}async function Uz(t,e){e&&ji(t).ru&&await async function(n,r){if(i=r.code,IA(i)&&i!==S.ABORTED){const s=n.Tu.shift();ji(n).Go(),await aN(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ma(n)}var i}(t,e),lN(t)&&uN(t)}async function LE(t,e){const n=M(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=ns(n);n.Au.add(3),await La(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await lc(n)}async function Gg(t,e){const n=M(t);e?(n.Au.delete(2),await lc(n)):e||(n.Au.add(2),await La(n),n.Pu.set("Unknown"))}function $a(t){return t.Vu||(t.Vu=function(e,n,r){const i=M(e);return i.lu(),new Cz(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:Rz.bind(null,t),co:xz.bind(null,t),eu:Pz.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Kw(t)?qw(t):t.Pu.set("Unknown")):(await t.Vu.stop(),oN(t))})),t.Vu}function ji(t){return t.Su||(t.Su=function(e,n,r){const i=M(e);return i.lu(),new bz(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:Mz.bind(null,t),co:Uz.bind(null,t),cu:$z.bind(null,t),uu:Fz.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Ma(t)):(await t.Su.stop(),t.Tu.length>0&&(b("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class Ww{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ww(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fa(t,e){if(ze("AsyncQueue",`${e}: ${t}`),es(t))return new C(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Yo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=gl(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new Yo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ME{constructor(){this.Du=new ve(O.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):F():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class ga{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ga(e,n,Yo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Vz{constructor(){this.xu=void 0,this.listeners=[]}}class Bz{constructor(){this.queries=new ts(e=>oA(e),nc),this.onlineState="Unknown",this.Nu=new Set}}async function Hw(t,e){const n=M(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Vz),i)try{s.xu=await n.onListen(r)}catch(o){const a=Fa(o,`Initialization of query '${Vg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&Qw(n)}async function Gw(t,e){const n=M(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zz(t,e){const n=M(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&Qw(n)}function jz(t,e,n){const r=M(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Qw(t){t.Nu.forEach(e=>{e.next()})}class Yw{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ga(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=ga.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class qz{constructor(e,n){this.Ku=e,this.byteLength=n}Gu(){return"metadata"in this.Ku}}/**
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
 */class $E{constructor(e){this.serializer=e}ir(e){return pr(this.serializer,e)}rr(e){return e.metadata.exists?DA(this.serializer,e.document,!1):Ie.newNoDocument(this.ir(e.metadata.name),this.ur(e.metadata.readTime))}ur(e){return qe(e)}}class Kz{constructor(e,n,r){this.Qu=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=cN(e)}ju(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Ku.namedQuery)this.queries.push(e.Ku.namedQuery);else if(e.Ku.documentMetadata){this.documents.push({metadata:e.Ku.documentMetadata}),e.Ku.documentMetadata.exists||++n;const r=oe.fromString(e.Ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ku.document&&(this.documents[this.documents.length-1].document=e.Ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}zu(e){const n=new Map,r=new $E(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.ir(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||X()).add(s);n.set(o,a)}}return n}async complete(){const e=await _z(this.localStore,new $E(this.serializer),this.documents,this.Qu.id),n=this.zu(this.documents);for(const r of this.queries)await Iz(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Wu:this.collectionGroups,Hu:e}}}function cN(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class hN{constructor(e){this.key=e}}class dN{constructor(e){this.key=e}}class fN{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=X(),this.mutatedKeys=X(),this.Zu=lA(e),this.tc=new Yo(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new ME,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=rc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),I=!0):this.ic(d,p)||(r.track({type:2,doc:p}),I=!0,(l&&this.Zu(p,l)>0||u&&this.Zu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),I=!0):d&&!p&&(r.track({type:1,doc:d}),I=!0,(l||u)&&(a=!0)),I&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return p(h)-p(d)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new ga(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new ME,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=X(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new dN(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new hN(r))}),n}ac(e){this.Ju=e.sr,this.Xu=X();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return ga.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Wz{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Hz{constructor(e){this.key=e,this.lc=!1}}class Gz{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new ts(a=>oA(a),nc),this._c=new Map,this.wc=new Set,this.mc=new ve(O.comparator),this.gc=new Map,this.yc=new $w,this.Ic={},this.Tc=new Map,this.Ec=Js.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Qz(t,e){const n=t0(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await pa(n.localStore,dn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Xw(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Af(n.remoteStore,o)}return i}async function Xw(t,e,n,r,i){t.Rc=(h,d,p)=>async function(y,v,I,m){let f=v.view.nc(I);f.ji&&(f=await gd(y.localStore,v.query,!1).then(({documents:k})=>v.view.nc(k,f)));const g=m&&m.targetChanges.get(v.targetId),_=v.view.applyChanges(f,y.isPrimaryClient,g);return Qg(y,v.targetId,_.uc),_.snapshot}(t,h,d,p);const s=await gd(t.localStore,e,!0),o=new fN(e,s.sr),a=o.nc(s.documents),l=oc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Qg(t,n,u.uc);const c=new Wz(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Yz(t,e){const n=M(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!nc(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ma(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Cu(n.remoteStore,r.targetId),ya(n,r.targetId)}).catch(Zi)):(ya(n,r.targetId),await ma(n.localStore,r.targetId,!0))}async function Xz(t,e,n){const r=n0(t);try{const i=await function(s,o){const a=M(s),l=Ne.now(),u=o.reduce((d,p)=>d.add(p.key),X());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=an(),y=X();return a.Xi.getEntries(d,u).next(v=>{p=v,p.forEach((I,m)=>{m.isValidDocument()||(y=y.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const I=[];for(const m of o){const f=CB(m,c.get(m.key).overlayedDocument);f!=null&&I.push(new Zr(m.key,f,Xb(f.value.mapValue),Ae.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,I,o)}).next(v=>{h=v;const I=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,I)})}).then(()=>({batchId:h.batchId,changes:cA(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new ve(Y)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await ei(r,i.changes),await Ma(r.remoteStore)}catch(i){const s=Fa(i,"Failed to persist write");n.reject(s)}}async function pN(t,e){const n=M(t);try{const r=await vz(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?z(o.lc):i.removedDocuments.size>0&&(z(o.lc),o.lc=!1))}),await ei(n,r,e)}catch(r){await Zi(r)}}function FE(t,e,n){const r=M(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=M(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.ku(o)&&(l=!0)}),l&&Qw(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Jz(t,e,n){const r=M(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new ve(O.comparator);o=o.insert(s,Ie.newNoDocument(s,B.min()));const a=X().add(s),l=new sc(B.min(),new Map,new ve(Y),o,a);await pN(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),e0(r)}else await ma(r.localStore,e,!1).then(()=>ya(r,e,n)).catch(Zi)}async function Zz(t,e){const n=M(t),r=e.batch.batchId;try{const i=await yz(n.localStore,e);Zw(n,r,null),Jw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ei(n,i)}catch(i){await Zi(i)}}async function ej(t,e,n){const r=M(t);try{const i=await function(s,o){const a=M(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(z(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Zw(r,e,n),Jw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ei(r,i)}catch(i){await Zi(i)}}async function tj(t,e){const n=M(t);ns(n.remoteStore)||b("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=M(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Tc.get(r)||[];i.push(e),n.Tc.set(r,i)}catch(r){const i=Fa(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Jw(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function Zw(t,e,n){const r=M(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function ya(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||mN(t,r)})}function mN(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(Cu(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),e0(t))}function Qg(t,e,n){for(const r of n)r instanceof hN?(t.yc.addReference(r.key,e),nj(t,r)):r instanceof dN?(b("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||mN(t,r.key)):F()}function nj(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(b("SyncEngine","New document in limbo: "+n),t.wc.add(r),e0(t))}function e0(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new O(oe.fromString(e)),r=t.Ec.next();t.gc.set(r,new Hz(n)),t.mc=t.mc.insert(n,r),Af(t.remoteStore,new Mr(dn(xa(n.path)),r,"TargetPurposeLimboResolution",sn.ct))}}async function ei(t,e,n){const r=M(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Vw.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=M(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>E.forEach(l,h=>E.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>E.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!es(c))throw c;b("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Hi.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.Hi=u.Hi.insert(h,y)}}}(r.localStore,s))}async function rj(t,e){const n=M(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await YA(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new C(S.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ei(n,r.tr)}}function ij(t,e){const n=M(t),r=n.gc.get(e);if(r&&r.lc)return X().add(r.key);{let i=X();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}async function sj(t,e){const n=M(t),r=await gd(n.localStore,e.query,!0),i=e.view.ac(r);return n.isPrimaryClient&&Qg(n,e.targetId,i.uc),i}async function oj(t,e){const n=M(t);return eN(n.localStore,e).then(r=>ei(n,r))}async function aj(t,e,n,r){const i=M(t),s=await function(o,a){const l=M(o),u=M(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",c=>u.Vn(c,a).next(h=>h?l.localDocuments.getDocuments(c,h):E.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Ma(i.remoteStore):n==="acknowledged"||n==="rejected"?(Zw(i,e,r||null),Jw(i,e),function(o,a){M(M(o).mutationQueue).Dn(a)}(i.localStore,e)):F(),await ei(i,s)):b("SyncEngine","Cannot apply mutation batch with id: "+e)}async function lj(t,e){const n=M(t);if(t0(n),n0(n),e===!0&&n.Ac!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await UE(n,r.toArray());n.Ac=!0,await Gg(n.remoteStore,!0);for(const s of i)Af(n.remoteStore,s)}else if(e===!1&&n.Ac!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ya(n,o),ma(n.localStore,o,!0))),Cu(n.remoteStore,o)}),await i,await UE(n,r),function(s){const o=M(s);o.gc.forEach((a,l)=>{Cu(o.remoteStore,l)}),o.yc.Is(),o.gc=new Map,o.mc=new ve(O.comparator)}(n),n.Ac=!1,await Gg(n.remoteStore,!1)}}async function UE(t,e,n){const r=M(t),i=[],s=[];for(const o of e){let a;const l=r._c.get(o);if(l&&l.length!==0){a=await pa(r.localStore,dn(l[0]));for(const u of l){const c=r.dc.get(u),h=await sj(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await ZA(r.localStore,o);a=await pa(r.localStore,u),await Xw(r,gN(u),o,!1,a.resumeToken)}i.push(a)}return r.fc.eu(s),i}function gN(t){return sA(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function uj(t){const e=M(t);return M(M(e.localStore).persistence).Mi()}async function cj(t,e,n,r){const i=M(t);if(i.Ac)return void b("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await eN(i.localStore,aA(s[0])),a=sc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",tt.EMPTY_BYTE_STRING);await ei(i,o,a);break}case"rejected":await ma(i.localStore,e,!0),ya(i,e,r);break;default:F()}}async function hj(t,e,n){const r=t0(t);if(r.Ac){for(const i of e){if(r._c.has(i)){b("SyncEngine","Adding an already active target "+i);continue}const s=await ZA(r.localStore,i),o=await pa(r.localStore,s);await Xw(r,gN(s),o.targetId,!1,o.resumeToken),Af(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await ma(r.localStore,i,!1).then(()=>{Cu(r.remoteStore,i),ya(r,i)}).catch(Zi)}}function t0(t){const e=M(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pN.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ij.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Jz.bind(null,e),e.fc.eu=zz.bind(null,e.eventManager),e.fc.vc=jz.bind(null,e.eventManager),e}function n0(t){const e=M(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zz.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ej.bind(null,e),e}function dj(t,e,n){const r=M(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=M(h),y=qe(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",v=>p.Ls.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(cN(a));const l=new Kz(a,i.localStore,s.serializer);let u=await s.Pc();for(;u;){const h=await l.ju(u);h&&o._updateProgress(h),u=await s.Pc()}const c=await l.complete();return await ei(i,c.Hu,void 0),await function(h,d){const p=M(h);return p.persistence.runTransaction("Save bundle","readwrite",y=>p.Ls.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Wu)}catch(a){return Xn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Yg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ac(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return QA(this.persistence,new GA,e.initialUser,this.serializer)}createPersistence(e){return new HA(bf.js,this.serializer)}createSharedClientState(e){return new nN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yN extends Yg{constructor(e,n,r){super(),this.bc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.bc.initialize(this,e),await n0(this.bc.syncEngine),await Ma(this.bc.remoteStore),await this.persistence.pi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return QA(this.persistence,new GA,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new tz(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new F4(n,this.persistence);return new $4(e.asyncQueue,r)}createPersistence(e){const n=Uw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new Fw(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,rN(),ph(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new nN}}class fj extends yN{constructor(e,n){super(e,n,!1),this.bc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.bc.syncEngine;this.sharedClientState instanceof nm&&(this.sharedClientState.syncEngine={Qr:aj.bind(null,n),jr:cj.bind(null,n),zr:hj.bind(null,n),Mi:uj.bind(null,n),Gr:oj.bind(null,n)},await this.sharedClientState.start()),await this.persistence.pi(async r=>{await lj(this.bc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=rN();if(!nm.D(n))throw new C(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Uw(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new nm(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class r0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>FE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rj.bind(null,this.syncEngine),await Gg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Bz}createDatastore(e){const n=ac(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new kz(i));var i;return function(s,o,a,l){return new Az(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>FE(this.syncEngine,a,0),o=OE.D()?new OE:new Ez,new Dz(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new Gz(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=M(e);b("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await La(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */function VE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class Nf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):ze("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class pj{constructor(e,n){this.Dc=e,this.serializer=n,this.metadata=new ft,this.buffer=new Uint8Array,this.Cc=new TextDecoder("utf-8"),this.xc().then(r=>{r&&r.Gu()?this.metadata.resolve(r.Ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ku)}`))},r=>this.metadata.reject(r))}close(){return this.Dc.cancel()}async getMetadata(){return this.metadata.promise}async Pc(){return await this.getMetadata(),this.xc()}async xc(){const e=await this.Nc();if(e===null)return null;const n=this.Cc.decode(e),r=Number(n);isNaN(r)&&this.kc(`length string (${n}) is not valid number`);const i=await this.Mc(r);return new qz(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Nc(){for(;this.Oc()<0&&!await this.$c(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.kc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Mc(e){for(;this.buffer.length<e;)await this.$c()&&this.kc("Reached the end of bundle when more is expected.");const n=this.Cc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}kc(e){throw this.Dc.cancel(),new Error(`Invalid bundle format: ${e}`)}async $c(){const e=await this.Dc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class mj{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=M(r),o=Tu(s.serializer)+"/documents",a={documents:i.map(h=>Su(s.serializer,h))},l=await s.Ao("BatchGetDocuments",o,a,i.length),u=new Map;l.forEach(h=>{const d=LB(s.serializer,h);u.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=u.get(h.toString());z(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Oa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=O.fromPath(r);this.mutations.push(new bw(i,this.precondition(i)))}),await async function(n,r){const i=M(n),s=Tu(i.serializer)+"/documents",o={writes:r.map(a=>ku(i.serializer,a))};await i.po("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw F();n=B.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(B.min())?Ae.exists(!1):Ae.updateTime(n):Ae.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(B.min()))throw new C(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ae.updateTime(n)}return Ae.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class gj{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Fc=r.maxAttempts,this.Lo=new zw(this.asyncQueue,"transaction_retry")}run(){this.Fc-=1,this.Bc()}Bc(){this.Lo.xo(async()=>{const e=new mj(this.datastore),n=this.Lc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.qc(i)}))}).catch(r=>{this.qc(r)})})}Lc(e){try{const n=this.updateFunction(e);return!ec(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}qc(e){this.Fc>0&&this.Uc(e)?(this.Fc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bc(),Promise.resolve()))):this.deferred.reject(e)}Uc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!IA(n)}return!1}}/**
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
 */class yj{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=Mb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fa(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mh(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await YA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Xg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await i0(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>LE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>LE(e.remoteStore,s)),t._onlineComponents=e}function vN(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function i0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await mh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!vN(n))throw n;Xn("Error using user provided cache. Falling back to memory cache: "+n),await mh(t,new Yg)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await mh(t,new Yg);return t._offlineComponents}async function Df(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await Xg(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await Xg(t,new r0))),t._onlineComponents}function wN(t){return i0(t).then(e=>e.persistence)}function s0(t){return i0(t).then(e=>e.localStore)}function _N(t){return Df(t).then(e=>e.remoteStore)}function o0(t){return Df(t).then(e=>e.syncEngine)}function vj(t){return Df(t).then(e=>e.datastore)}async function va(t){const e=await Df(t),n=e.eventManager;return n.onListen=Qz.bind(null,e.syncEngine),n.onUnlisten=Yz.bind(null,e.syncEngine),n}function wj(t){return t.asyncQueue.enqueue(async()=>{const e=await wN(t),n=await _N(t);return e.setNetworkEnabled(!0),function(r){const i=M(r);return i.Au.delete(0),lc(i)}(n)})}function _j(t){return t.asyncQueue.enqueue(async()=>{const e=await wN(t),n=await _N(t);return e.setNetworkEnabled(!1),async function(r){const i=M(r);i.Au.add(0),await La(i),i.Pu.set("Offline")}(n)})}function Ij(t,e){const n=new ft;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,l){const u=M(a);return u.persistence.runTransaction("read document","readonly",c=>u.localDocuments.getDocument(c,l))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Fa(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await s0(t),e,n)),n.promise}function IN(t,e,n={}){const r=new ft;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Nf({next:h=>{s.enqueueAndForget(()=>Gw(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new C(S.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new C(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Yw(xa(o.path),u,{includeMetadataChanges:!0,Uu:!0});return Hw(i,c)}(await va(t),t.asyncQueue,e,n,r)),r.promise}function Ej(t,e){const n=new ft;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await gd(r,i,!0),a=new fN(i,o.sr),l=a.nc(o.documents),u=a.applyChanges(l,!1);s.resolve(u.snapshot)}catch(o){const a=Fa(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await s0(t),e,n)),n.promise}function EN(t,e,n={}){const r=new ft;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Nf({next:h=>{s.enqueueAndForget(()=>Gw(i,c)),h.fromCache&&a.source==="server"?l.reject(new C(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Yw(o,u,{includeMetadataChanges:!0,Uu:!0});return Hw(i,c)}(await va(t),t.asyncQueue,e,n,r)),r.promise}function Sj(t,e){const n=new Nf(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){M(r).Nu.add(i),i.next()}(await va(t),n)),()=>{n.Sc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){M(r).Nu.delete(i)}(await va(t),n))}}function Tj(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?SA().encode(s):s,function(l,u){return new pj(l,u)}(function(l,u){if(l instanceof Uint8Array)return VE(l,u);if(l instanceof ArrayBuffer)return VE(new Uint8Array(l),u);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,ac(e));t.asyncQueue.enqueueAndForget(async()=>{dj(await o0(t),i,r)})}function kj(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=M(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ls.getNamedQuery(s,r))}(await s0(t),e))}/**
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
 */const BE=new Map;/**
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
 */function a0(t,e,n){if(!n)throw new C(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SN(t,e,n,r){if(e===!0&&r===!0)throw new C(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zE(t){if(!O.isDocumentKey(t))throw new C(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jE(t){if(O.isDocumentKey(t))throw new C(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function ue(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rf(t);throw new C(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function TN(t,e){if(e<=0)throw new C(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class qE{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class uc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new k4;switch(n.type){case"firstParty":return new N4(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=BE.get(e);n&&(b("ComponentProvider","Removing Datastore"),BE.delete(e),n.terminate())}(this),Promise.resolve()}}function kN(t,e,n,r={}){var i;const s=(t=ue(t,uc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Xn("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ht.MOCK_USER;else{o=xT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new C(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ht(l)}t._authCredentials=new C4(new Lb(o,a))}}/**
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
 */class Te{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}}class Dt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dt(this.firestore,e,this._query)}}class mr extends Dt{constructor(e,n,r){super(e,n,xa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new O(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function or(t,e,...n){if(t=V(t),a0("collection","path",e),t instanceof uc){const r=oe.fromString(e,...n);return jE(r),new mr(t,null,r)}{if(!(t instanceof Te||t instanceof mr))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return jE(r),new mr(t.firestore,null,r)}}function Cj(t,e){if(t=ue(t,uc),a0("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Dt(t,null,function(n){return new Jr(oe.emptyPath(),n)}(e))}function xn(t,e,...n){if(t=V(t),arguments.length===1&&(e=Mb.A()),a0("doc","path",e),t instanceof uc){const r=oe.fromString(e,...n);return zE(r),new Te(t,null,new O(r))}{if(!(t instanceof Te||t instanceof mr))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return zE(r),new Te(t.firestore,t instanceof mr?t.converter:null,new O(r))}}function CN(t,e){return t=V(t),e=V(e),(t instanceof Te||t instanceof mr)&&(e instanceof Te||e instanceof mr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function bN(t,e){return t=V(t),e=V(e),t instanceof Dt&&e instanceof Dt&&t.firestore===e.firestore&&nc(t._query,e._query)&&t.converter===e.converter}/**
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
 */class bj{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new zw(this,"async_queue_retry"),this.Yc=()=>{const n=ph();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=ph();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=ph();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new ft;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!es(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ze("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=Ww.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&F()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}function Jg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Aj{constructor(){this._progressObserver={},this._taskCompletionResolver=new ft,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const Nj=-1;class Ve extends uc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new bj,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||AN(this),this._firestoreClient.terminate()}}function Dj(t,e){const n=typeof t=="object"?t:qd(),r=typeof t=="string"?t:e||"(default)",i=Qi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=DT("firestore");s&&kN(i,...s)}return i}function vt(t){return t._firestoreClient||AN(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function AN(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new sB(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new yj(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function Rj(t,e){DN(t=ue(t,Ve));const n=vt(t);if(n._uninitializedComponentsProvider)throw new C(S.FAILED_PRECONDITION,"SDK cache is already specified.");Xn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new r0;return NN(n,i,new yN(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function xj(t){DN(t=ue(t,Ve));const e=vt(t);if(e._uninitializedComponentsProvider)throw new C(S.FAILED_PRECONDITION,"SDK cache is already specified.");Xn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new r0;return NN(e,r,new fj(r,n.cacheSizeBytes))}function NN(t,e,n){const r=new ft;return t.asyncQueue.enqueue(async()=>{try{await mh(t,n),await Xg(t,e),r.resolve()}catch(i){const s=i;if(!vN(s))throw s;Xn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function Pj(t){if(t._initialized&&!t._terminated)throw new C(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ft;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!qn.D())return Promise.resolve();const r=n+"main";await qn.delete(r)}(Uw(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function Oj(t){return function(e){const n=new ft;return e.asyncQueue.enqueueAndForget(async()=>tj(await o0(e),n)),n.promise}(vt(t=ue(t,Ve)))}function Lj(t){return wj(vt(t=ue(t,Ve)))}function Mj(t){return _j(vt(t=ue(t,Ve)))}function $j(t,e){const n=vt(t=ue(t,Ve)),r=new Aj;return Tj(n,t._databaseId,e,r),r}function Fj(t,e){return kj(vt(t=ue(t,Ve)),e).then(n=>n?new Dt(t,null,n.query):null)}function DN(t){if(t._initialized||t._terminated)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class vr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vr(tt.fromBase64String(e))}catch(n){throw new C(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vr(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class qi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class so{constructor(e){this._methodName=e}}/**
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
 */class xf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
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
 */const Uj=/^__.*__$/;class Vj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pa(e,this.data,n,this.fieldTransforms)}}class RN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xN(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Pf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return _d(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(xN(this.ua)&&Uj.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Bj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ac(e)}ga(e,n,r,i=!1){return new Pf({ua:e,methodName:n,ma:r,path:je.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oo(t){const e=t._freezeSettings(),n=ac(t._databaseId);return new Bj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Of(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);h0("Data must be an object, but it was:",o,r);const a=LN(r,o);let l,u;if(s.merge)l=new on(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Zg(e,h,n);if(!o.contains(d))throw new C(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$N(c,d)||c.push(d)}l=new on(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Vj(new Et(a),l,u)}class cc extends so{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cc}}function PN(t,e,n){return new Pf({ua:3,ma:e.settings.ma,methodName:t._methodName,ha:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class l0 extends so{_toFieldTransform(e){return new ic(e.path,new ha)}isEqual(e){return e instanceof l0}}class zj extends so{constructor(e,n){super(e),this.ya=n}_toFieldTransform(e){const n=PN(this,e,!0),r=this.ya.map(s=>ao(s,n)),i=new Gs(r);return new ic(e.path,i)}isEqual(e){return this===e}}class jj extends so{constructor(e,n){super(e),this.ya=n}_toFieldTransform(e){const n=PN(this,e,!0),r=this.ya.map(s=>ao(s,n)),i=new Qs(r);return new ic(e.path,i)}isEqual(e){return this===e}}class qj extends so{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=new da(e.serializer,pA(e.serializer,this.pa));return new ic(e.path,n)}isEqual(e){return this===e}}function u0(t,e,n,r){const i=t.ga(1,e,n);h0("Data must be an object, but it was:",i,r);const s=[],o=Et.empty();io(r,(l,u)=>{const c=d0(e,l,n);u=V(u);const h=i.fa(c);if(u instanceof cc)s.push(c);else{const d=ao(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new on(s);return new RN(o,a,i.fieldTransforms)}function c0(t,e,n,r,i,s){const o=t.ga(1,e,n),a=[Zg(e,r,n)],l=[i];if(s.length%2!=0)throw new C(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Zg(e,s[d])),l.push(s[d+1]);const u=[],c=Et.empty();for(let d=a.length-1;d>=0;--d)if(!$N(u,a[d])){const p=a[d];let y=l[d];y=V(y);const v=o.fa(p);if(y instanceof cc)u.push(p);else{const I=ao(y,v);I!=null&&(u.push(p),c.set(p,I))}}const h=new on(u);return new RN(c,h,o.fieldTransforms)}function ON(t,e,n,r=!1){return ao(n,t.ga(r?4:3,e))}function ao(t,e){if(MN(t=V(t)))return h0("Unsupported field value:",e,t),LN(t,e);if(t instanceof so)return function(n,r){if(!xN(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ao(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=V(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return pA(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ne.fromDate(n);return{timestampValue:fa(r.serializer,i)}}if(n instanceof Ne){const i=new Ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fa(r.serializer,i)}}if(n instanceof xf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof vr)return{bytesValue:CA(r.serializer,n._byteString)};if(n instanceof Te){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pw(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Rf(n)}`)}(t,e)}function LN(t,e){const n={};return Gb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):io(t,(r,i)=>{const s=ao(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function MN(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof xf||t instanceof vr||t instanceof Te||t instanceof so)}function h0(t,e,n){if(!MN(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Rf(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Zg(t,e,n){if((e=V(e))instanceof qi)return e._internalPath;if(typeof e=="string")return d0(t,e);throw _d("Field path arguments must be of type string or ",t,!1,void 0,n)}const Kj=new RegExp("[~\\*/\\[\\]]");function d0(t,e,n){if(e.search(Kj)>=0)throw _d(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qi(...e.split("."))._internalPath}catch{throw _d(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function _d(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new C(S.INVALID_ARGUMENT,a+t+l)}function $N(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class bu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Wj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Wj extends bu{data(){return super.data()}}function Lf(t,e){return typeof e=="string"?d0(t,e):e instanceof qi?e._internalPath:e._delegate._internalPath}/**
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
 */function FN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class f0{}class hc extends f0{}function ai(t,e,...n){let r=[];e instanceof f0&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof p0).length,o=i.filter(a=>a instanceof Mf).length;if(s>1||s>0&&o>0)throw new C(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Mf extends hc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Mf(e,n,r)}_apply(e){const n=this._parse(e);return VN(e._query,n),new Dt(e.firestore,e.converter,Ug(e._query,n))}_parse(e){const n=oo(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){WE(c,u);const d=[];for(const p of c)d.push(KE(a,i,p));h={arrayValue:{values:d}}}else h=KE(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||WE(c,u),h=ON(o,s,c,u==="in"||u==="not-in");return Z.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Hj(t,e,n){const r=e,i=Lf("where",t);return Mf._create(i,r,n)}class p0 extends f0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new p0(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)VN(s,a),s=Ug(s,a)}(e._query,n),new Dt(e.firestore,e.converter,Ug(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class m0 extends hc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new m0(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Qo(i,s);return function(a,l){if(Tw(a)===null){const u=Ef(a);u!==null&&BN(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Dt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Jr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Gj(t,e="asc"){const n=e,r=Lf("orderBy",t);return m0._create(r,n)}class $f extends hc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new $f(e,n,r)}_apply(e){return new Dt(e.firestore,e.converter,dd(e._query,this._limit,this._limitType))}}function Qj(t){return TN("limit",t),$f._create("limit",t,"F")}function Yj(t){return TN("limitToLast",t),$f._create("limitToLast",t,"L")}class Ff extends hc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ff(e,n,r)}_apply(e){const n=UN(e,this.type,this._docOrFields,this._inclusive);return new Dt(e.firestore,e.converter,function(r,i){return new Jr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function Xj(...t){return Ff._create("startAt",t,!0)}function Jj(...t){return Ff._create("startAfter",t,!1)}class Uf extends hc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Uf(e,n,r)}_apply(e){const n=UN(e,this.type,this._docOrFields,this._inclusive);return new Dt(e.firestore,e.converter,function(r,i){return new Jr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function Zj(...t){return Uf._create("endBefore",t,!1)}function e3(...t){return Uf._create("endAt",t,!0)}function UN(t,e,n,r){if(n[0]=V(n[0]),n[0]instanceof bu)return function(i,s,o,a,l){if(!a)throw new C(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const c of Rs(i))if(c.field.isKeyField())u.push(Ws(s,a.key));else{const h=a.data.field(c.field);if(If(h))throw new C(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new C(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new zi(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=oo(t.firestore);return function(s,o,a,l,u,c){const h=s.explicitOrderBy;if(u.length>h.length)throw new C(S.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const y=u[p];if(h[p].field.isKeyField()){if(typeof y!="string")throw new C(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof y}`);if(!kw(s)&&y.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${y}' contains a slash.`);const v=s.path.child(oe.fromString(y));if(!O.isDocumentKey(v))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const I=new O(v);d.push(Ws(o,I))}else{const v=ON(a,l,y);d.push(v)}}return new zi(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function KE(t,e,n){if(typeof(n=V(n))=="string"){if(n==="")throw new C(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kw(e)&&n.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(oe.fromString(n));if(!O.isDocumentKey(r))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ws(t,new O(r))}if(n instanceof Te)return Ws(t,n._key);throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rf(n)}.`)}function WE(t,e){if(!Array.isArray(t)||t.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VN(t,e){if(e.isInequality()){const r=Ef(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new C(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Tw(t);s!==null&&BN(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function BN(t,e,n){if(!n.isEqual(e))throw new C(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class g0{convertValue(e,n="none"){switch(Ks(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return io(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new xf(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ew(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_u(e));default:return null}}convertTimestamp(e){const n=Fi(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=oe.fromString(e);z(MA(r));const i=new Vi(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||ze(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Vf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class t3 extends g0{constructor(e){super(),this.firestore=e}convertBytes(e){return new vr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,n)}}/**
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
 */class Ss{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hr extends bu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ul extends Hr{data(e={}){return super.data(e)}}class Ki{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ss(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ul(this._firestore,this._userDataWriter,r.key,r,new Ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ul(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ss(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ul(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ss(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:n3(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function n3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}function zN(t,e){return t instanceof Hr&&e instanceof Hr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Ki&&e instanceof Ki&&t._firestore===e._firestore&&bN(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function Au(t){t=ue(t,Te);const e=ue(t.firestore,Ve);return IN(vt(e),t._key).then(n=>y0(e,t,n))}class lo extends g0{constructor(e){super(),this.firestore=e}convertBytes(e){return new vr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,n)}}function r3(t){t=ue(t,Te);const e=ue(t.firestore,Ve),n=vt(e),r=new lo(e);return Ij(n,t._key).then(i=>new Hr(e,r,t._key,i,new Ss(i!==null&&i.hasLocalMutations,!0),t.converter))}function i3(t){t=ue(t,Te);const e=ue(t.firestore,Ve);return IN(vt(e),t._key,{source:"server"}).then(n=>y0(e,t,n))}function Vl(t){t=ue(t,Dt);const e=ue(t.firestore,Ve),n=vt(e),r=new lo(e);return FN(t._query),EN(n,t._query).then(i=>new Ki(e,r,t,i))}function s3(t){t=ue(t,Dt);const e=ue(t.firestore,Ve),n=vt(e),r=new lo(e);return Ej(n,t._query).then(i=>new Ki(e,r,t,i))}function o3(t){t=ue(t,Dt);const e=ue(t.firestore,Ve),n=vt(e),r=new lo(e);return EN(n,t._query,{source:"server"}).then(i=>new Ki(e,r,t,i))}function ey(t,e,n){t=ue(t,Te);const r=ue(t.firestore,Ve),i=Vf(t.converter,e,n);return dc(r,[Of(oo(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ae.none())])}function ty(t,e,n,...r){t=ue(t,Te);const i=ue(t.firestore,Ve),s=oo(i);let o;return o=typeof(e=V(e))=="string"||e instanceof qi?c0(s,"updateDoc",t._key,e,n,r):u0(s,"updateDoc",t._key,e),dc(i,[o.toMutation(t._key,Ae.exists(!0))])}function a3(t){return dc(ue(t.firestore,Ve),[new Oa(t._key,Ae.none())])}function Nu(t,e){const n=ue(t.firestore,Ve),r=xn(t),i=Vf(t.converter,e);return dc(n,[Of(oo(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ae.exists(!1))]).then(()=>r)}function jN(t,...e){var n,r,i;t=V(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Jg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Jg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Te)u=ue(t.firestore,Ve),c=xa(t._key.path),l={next:h=>{e[o]&&e[o](y0(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ue(t,Dt);u=ue(h.firestore,Ve),c=h._query;const d=new lo(u);l={next:p=>{e[o]&&e[o](new Ki(u,d,h,p))},error:e[o+1],complete:e[o+2]},FN(t._query)}return function(h,d,p,y){const v=new Nf(y),I=new Yw(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>Hw(await va(h),I)),()=>{v.Sc(),h.asyncQueue.enqueueAndForget(async()=>Gw(await va(h),I))}}(vt(u),c,a,l)}function l3(t,e){return Sj(vt(t=ue(t,Ve)),Jg(e)?e:{next:e})}function dc(t,e){return function(n,r){const i=new ft;return n.asyncQueue.enqueueAndForget(async()=>Xz(await o0(n),r,i)),i.promise}(vt(t),e)}function y0(t,e,n){const r=n.docs.get(e._key),i=new lo(t);return new Hr(t,i,e._key,r,new Ss(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const u3={maxAttempts:5};/**
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
 */class c3{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=oo(e)}set(e,n,r){this._verifyNotCommitted();const i=fi(e,this._firestore),s=Vf(i.converter,n,r),o=Of(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ae.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=fi(e,this._firestore);let o;return o=typeof(n=V(n))=="string"||n instanceof qi?c0(this._dataReader,"WriteBatch.update",s._key,n,r,i):u0(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ae.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=fi(e,this._firestore);return this._mutations=this._mutations.concat(new Oa(n._key,Ae.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function fi(t,e){if((t=V(t)).firestore!==e)throw new C(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 *//**
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
 */class h3 extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=oo(e)}get(e){const n=fi(e,this._firestore),r=new t3(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return F();const s=i[0];if(s.isFoundDocument())return new bu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new bu(this._firestore,r,n._key,null,n.converter);throw F()})}set(e,n,r){const i=fi(e,this._firestore),s=Vf(i.converter,n,r),o=Of(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=fi(e,this._firestore);let o;return o=typeof(n=V(n))=="string"||n instanceof qi?c0(this._dataReader,"Transaction.update",s._key,n,r,i):u0(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=fi(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=fi(e,this._firestore),r=new lo(this._firestore);return super.get(e).then(i=>new Hr(this._firestore,r,n._key,i._document,new Ss(!1,!1),n.converter))}}function d3(t,e,n){t=ue(t,Ve);const r=Object.assign(Object.assign({},u3),n);return function(i){if(i.maxAttempts<1)throw new C(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new ft;return i.asyncQueue.enqueueAndForget(async()=>{const l=await vj(i);new gj(i.asyncQueue,l,o,s,a).run()}),a.promise}(vt(t),i=>e(new h3(t,i)),r)}/**
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
 */function f3(){return new cc("deleteField")}function p3(){return new l0("serverTimestamp")}function m3(...t){return new zj("arrayUnion",t)}function g3(...t){return new jj("arrayRemove",t)}function y3(t){return new qj("increment",t)}(function(t,e=!0){(function(n){Ra=n})(Qr),hn(new Nt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ve(new b4(n.getProvider("auth-internal")),new R4(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vi(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),kt(jI,"3.11.0",t),kt(jI,"3.11.0","esm2017")})();const v3="@firebase/firestore-compat",w3="0.3.8";/**
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
 */function v0(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function HE(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function GE(){if(!rB())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Du{constructor(e){this._delegate=e}static fromBase64String(e){return GE(),new Du(vr.fromBase64String(e))}static fromUint8Array(e){return HE(),new Du(vr.fromUint8Array(e))}toBase64(){return GE(),this._delegate.toBase64()}toUint8Array(){return HE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function ny(t){return _3(t,["next","error","complete"])}function _3(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class I3{enableIndexedDbPersistence(e,n){return Rj(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return xj(e._delegate)}clearIndexedDbPersistence(e){return Pj(e._delegate)}}class qN{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Vi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Xn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){kN(this._delegate,e,n,r)}enableNetwork(){return Lj(this._delegate)}disableNetwork(){return Mj(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,SN("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Oj(this._delegate)}onSnapshotsInSync(e){return l3(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new wa(this,or(this._delegate,e))}catch(n){throw Kt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Pn(this,xn(this._delegate,e))}catch(n){throw Kt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new qt(this,Cj(this._delegate,e))}catch(n){throw Kt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return d3(this._delegate,n=>e(new KN(this,n)))}batch(){return vt(this._delegate),new WN(new c3(this._delegate,e=>dc(this._delegate,e)))}loadBundle(e){return $j(this._delegate,e)}namedQuery(e){return Fj(this._delegate,e).then(n=>n?new qt(this,n):null)}}class Bf extends g0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Du(new vr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Pn.forKey(n,this.firestore,null)}}function E3(t){S4(t)}class KN{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Bf(e)}get(e){const n=Ts(e);return this._delegate.get(n).then(r=>new Ru(this._firestore,new Hr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ts(e);return r?(v0("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ts(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ts(e);return this._delegate.delete(n),this}}class WN{constructor(e){this._delegate=e}set(e,n,r){const i=Ts(e);return r?(v0("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ts(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ts(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Zs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ul(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new xu(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Zs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Zs(e,new Bf(e),n),i.set(n,s)),s}}Zs.INSTANCES=new WeakMap;class Pn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Bf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Pn(n,new Te(n._delegate,r,new O(e)))}static forKey(e,n,r){return new Pn(n,new Te(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new wa(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new wa(this.firestore,or(this._delegate,e))}catch(n){throw Kt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=V(e),e instanceof Te?CN(this._delegate,e):!1}set(e,n){n=v0("DocumentReference.set",n);try{return n?ey(this._delegate,e,n):ey(this._delegate,e)}catch(r){throw Kt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?ty(this._delegate,e):ty(this._delegate,e,n,...r)}catch(i){throw Kt(i,"updateDoc()","DocumentReference.update()")}}delete(){return a3(this._delegate)}onSnapshot(...e){const n=HN(e),r=GN(e,i=>new Ru(this.firestore,new Hr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return jN(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=r3(this._delegate):(e==null?void 0:e.source)==="server"?n=i3(this._delegate):n=Au(this._delegate),n.then(r=>new Ru(this.firestore,new Hr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Pn(this.firestore,e?this._delegate.withConverter(Zs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Kt(t,e,n){return t.message=t.message.replace(e,n),t}function HN(t){for(const e of t)if(typeof e=="object"&&!ny(e))return e;return{}}function GN(t,e){var n,r;let i;return ny(t[0])?i=t[0]:ny(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ru{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Pn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return zN(this._delegate,e._delegate)}}class xu extends Ru{data(e){const n=this._delegate.data(e);return T4(n!==void 0),n}}class qt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Bf(e)}where(e,n,r){try{return new qt(this.firestore,ai(this._delegate,Hj(e,n,r)))}catch(i){throw Kt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new qt(this.firestore,ai(this._delegate,Gj(e,n)))}catch(r){throw Kt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new qt(this.firestore,ai(this._delegate,Qj(e)))}catch(n){throw Kt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new qt(this.firestore,ai(this._delegate,Yj(e)))}catch(n){throw Kt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new qt(this.firestore,ai(this._delegate,Xj(...e)))}catch(n){throw Kt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new qt(this.firestore,ai(this._delegate,Jj(...e)))}catch(n){throw Kt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new qt(this.firestore,ai(this._delegate,Zj(...e)))}catch(n){throw Kt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new qt(this.firestore,ai(this._delegate,e3(...e)))}catch(n){throw Kt(n,"endAt()","Query.endAt()")}}isEqual(e){return bN(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=s3(this._delegate):(e==null?void 0:e.source)==="server"?n=o3(this._delegate):n=Vl(this._delegate),n.then(r=>new ry(this.firestore,new Ki(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=HN(e),r=GN(e,i=>new ry(this.firestore,new Ki(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return jN(this._delegate,n,r)}withConverter(e){return new qt(this.firestore,e?this._delegate.withConverter(Zs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class S3{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new xu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ry{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new qt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new xu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new S3(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new xu(this._firestore,r))})}isEqual(e){return zN(this._delegate,e._delegate)}}class wa extends qt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Pn(this.firestore,e):null}doc(e){try{return e===void 0?new Pn(this.firestore,xn(this._delegate)):new Pn(this.firestore,xn(this._delegate,e))}catch(n){throw Kt(n,"doc()","CollectionReference.doc()")}}add(e){return Nu(this._delegate,e).then(n=>new Pn(this.firestore,n))}isEqual(e){return CN(this._delegate,e._delegate)}withConverter(e){return new wa(this.firestore,e?this._delegate.withConverter(Zs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ts(t){return ue(t,Te)}/**
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
 */class w0{constructor(...e){this._delegate=new qi(...e)}static documentId(){return new w0(je.keyField().canonicalString())}isEqual(e){return e=V(e),e instanceof qi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ms{constructor(e){this._delegate=e}static serverTimestamp(){const e=p3();return e._methodName="FieldValue.serverTimestamp",new ms(e)}static delete(){const e=f3();return e._methodName="FieldValue.delete",new ms(e)}static arrayUnion(...e){const n=m3(...e);return n._methodName="FieldValue.arrayUnion",new ms(n)}static arrayRemove(...e){const n=g3(...e);return n._methodName="FieldValue.arrayRemove",new ms(n)}static increment(e){const n=y3(e);return n._methodName="FieldValue.increment",new ms(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const T3={Firestore:qN,GeoPoint:xf,Timestamp:Ne,Blob:Du,Transaction:KN,WriteBatch:WN,DocumentReference:Pn,DocumentSnapshot:Ru,Query:qt,QueryDocumentSnapshot:xu,QuerySnapshot:ry,CollectionReference:wa,FieldPath:w0,FieldValue:ms,setLogLevel:E3,CACHE_SIZE_UNLIMITED:Nj};function k3(t,e){t.INTERNAL.registerComponent(new Nt("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},T3)))}/**
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
 */function C3(t){k3(t,(e,n)=>new qN(e,n,new I3)),t.registerVersion(v3,w3)}C3(Ta);var b3="firebase",A3="9.21.0";/**
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
 */kt(b3,A3,"app");/**
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
 */const QN="firebasestorage.googleapis.com",N3="storageBucket",D3=2*60*1e3,R3=10*60*1e3;/**
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
 */class Ir extends Tt{constructor(e,n,r=0){super(im(e),`Firebase Storage: ${n} (${im(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ir.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return im(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var wr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(wr||(wr={}));function im(t){return"storage/"+t}function x3(){const t="An unknown error occurred, please check the error payload for server response.";return new Ir(wr.UNKNOWN,t)}function P3(){return new Ir(wr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function O3(){return new Ir(wr.CANCELED,"User canceled the upload/download.")}function L3(t){return new Ir(wr.INVALID_URL,"Invalid URL '"+t+"'.")}function M3(t){return new Ir(wr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function QE(t){return new Ir(wr.INVALID_ARGUMENT,t)}function YN(){return new Ir(wr.APP_DELETED,"The Firebase app was deleted.")}function $3(t){return new Ir(wr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Kn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Kn.makeFromUrl(e,n)}catch{return new Kn(e,"")}if(r.path==="")return r;throw M3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===QN?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${I}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<g.length;_++){const k=g[_],T=k.regex.exec(e);if(T){const N=T[k.indices.bucket];let R=T[k.indices.path];R||(R=""),r=new Kn(N,R),k.postModify(r);break}}if(r==null)throw L3(e);return r}}class F3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function U3(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...I){u||(u=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(p,l())},I)}function d(){s&&clearTimeout(s)}function p(I,...m){if(u){d();return}if(I){d(),c.call(null,I,...m);return}if(l()||o){d(),c.call(null,I,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(I){y||(y=!0,d(),!u&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function V3(t){t(!1)}/**
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
 */function B3(t){return t!==void 0}function YE(t,e,n,r){if(r<e)throw QE(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw QE(`Invalid value for '${t}'. Expected ${n} or less.`)}function z3(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Id;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Id||(Id={}));/**
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
 */function j3(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class q3{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new qc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Id.NO_ERROR,l=s.getStatus();if(!a||j3(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Id.ABORT;r(!1,new qc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new qc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());B3(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=x3();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?YN():O3();o(l)}else{const l=P3();o(l)}};this.canceled_?n(!1,new qc(!1,null,!0)):this.backoffId_=U3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&V3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function K3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function W3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function H3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function G3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Q3(t,e,n,r,i,s,o=!0){const a=z3(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return H3(u,e),K3(u,n),W3(u,s),G3(u,r),new q3(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Y3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function X3(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ed{constructor(e,n){this._service=e,n instanceof Kn?this._location=n:this._location=Kn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ed(e,n)}get root(){const e=new Kn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return X3(this._location.path)}get storage(){return this._service}get parent(){const e=Y3(this._location.path);if(e===null)return null;const n=new Kn(this._location.bucket,e);return new Ed(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $3(e)}}function XE(t,e){const n=e==null?void 0:e[N3];return n==null?null:Kn.makeFromBucketSpec(n,t)}function J3(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:xT(i,t.app.options.projectId))}class Z3{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=QN,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=D3,this._maxUploadRetryTime=R3,this._requests=new Set,i!=null?this._bucket=Kn.makeFromBucketSpec(i,this._host):this._bucket=XE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kn.makeFromBucketSpec(this._url,e):this._bucket=XE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){YE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){YE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ed(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new F3(YN());{const o=Q3(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const JE="@firebase/storage",ZE="0.11.2";/**
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
 */const XN="storage";function e9(t=qd(),e){t=V(t);const r=Qi(t,XN).getImmediate({identifier:e}),i=DT("storage");return i&&t9(r,...i),r}function t9(t,e,n,r={}){J3(t,e,n,r)}function n9(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Z3(n,r,i,e,Qr)}function r9(){hn(new Nt(XN,n9,"PUBLIC").setMultipleInstances(!0)),kt(JE,ZE,""),kt(JE,ZE,"esm2017")}r9();const i9={apiKey:"AIzaSyDE9nF_Ghno85E9jdPY3qf5ASxTc3odNVM",authDomain:"slimpossible-34902.firebaseapp.com",databaseURL:"https://slimpossible-34902-default-rtdb.firebaseio.com",projectId:"slimpossible-34902",storageBucket:"slimpossible-34902.appspot.com",messagingSenderId:"858747206804",appId:"1:858747206804:web:2567fcbd6f40a1fbcb0881"},_0=jd(i9),bn=Dj(_0),s9="users",o9=V2(_0);e9(_0);const a9=new jn;/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pu(){return Pu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pu.apply(this,arguments)}var wi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wi||(wi={}));const e1="popstate";function l9(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return iy("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Sd(i)}return c9(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function I0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function u9(){return Math.random().toString(36).substr(2,8)}function t1(t,e){return{usr:t.state,key:t.key,idx:e}}function iy(t,e,n,r){return n===void 0&&(n=null),Pu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ua(e):e,{state:n,key:e&&e.key||r||u9()})}function Sd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ua(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function c9(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=wi.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Pu({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=wi.Pop;let I=c(),m=I==null?null:I-u;u=I,l&&l({action:a,location:v.location,delta:m})}function d(I,m){a=wi.Push;let f=iy(v.location,I,m);n&&n(f,I),u=c()+1;let g=t1(f,u),_=v.createHref(f);try{o.pushState(g,"",_)}catch{i.location.assign(_)}s&&l&&l({action:a,location:v.location,delta:1})}function p(I,m){a=wi.Replace;let f=iy(v.location,I,m);n&&n(f,I),u=c();let g=t1(f,u),_=v.createHref(f);o.replaceState(g,"",_),s&&l&&l({action:a,location:v.location,delta:0})}function y(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof I=="string"?I:Sd(I);return Ye(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let v={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(e1,h),l=I,()=>{i.removeEventListener(e1,h),l=null}},createHref(I){return e(i,I)},createURL:y,encodeLocation(I){let m=y(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(I){return o.go(I)}};return v}var n1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(n1||(n1={}));function h9(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ua(e):e,i=E0(r.pathname||"/",n);if(i==null)return null;let s=JN(t);d9(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=I9(s[a],T9(i));return o}function JN(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Di([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),JN(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:w9(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of ZN(s.path))i(s,o,l)}),e}function ZN(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ZN(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function d9(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:_9(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const f9=/^:\w+$/,p9=3,m9=2,g9=1,y9=10,v9=-2,r1=t=>t==="*";function w9(t,e){let n=t.split("/"),r=n.length;return n.some(r1)&&(r+=v9),e&&(r+=m9),n.filter(i=>!r1(i)).reduce((i,s)=>i+(f9.test(s)?p9:s===""?g9:y9),r)}function _9(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function I9(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=E9({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Di([i,c.pathname]),pathnameBase:A9(Di([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Di([i,c.pathnameBase]))}return s}function E9(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=S9(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=k9(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function S9(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),I0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function T9(t){try{return decodeURI(t)}catch(e){return I0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function k9(t,e){try{return decodeURIComponent(t)}catch(n){return I0(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function E0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function C9(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ua(t):t;return{pathname:n?n.startsWith("/")?n:b9(n,e):e,search:N9(r),hash:D9(i)}}function b9(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sm(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eD(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function tD(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ua(t):(i=Pu({},t),Ye(!i.pathname||!i.pathname.includes("?"),sm("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),sm("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),sm("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=C9(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Di=t=>t.join("/").replace(/\/\/+/g,"/"),A9=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),N9=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,D9=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function R9(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Td(){return Td=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Td.apply(this,arguments)}const S0=w.createContext(null),x9=w.createContext(null),Va=w.createContext(null),zf=w.createContext(null),Ba=w.createContext({outlet:null,matches:[]}),nD=w.createContext(null);function P9(t,e){let{relative:n}=e===void 0?{}:e;fc()||Ye(!1);let{basename:r,navigator:i}=w.useContext(Va),{hash:s,pathname:o,search:a}=iD(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Di([r,o])),i.createHref({pathname:l,search:a,hash:s})}function fc(){return w.useContext(zf)!=null}function jf(){return fc()||Ye(!1),w.useContext(zf).location}function rD(t){w.useContext(Va).static||w.useLayoutEffect(t)}function qf(){return w.useContext(S0)!=null?W9():O9()}function O9(){fc()||Ye(!1);let{basename:t,navigator:e}=w.useContext(Va),{matches:n}=w.useContext(Ba),{pathname:r}=jf(),i=JSON.stringify(eD(n).map(a=>a.pathnameBase)),s=w.useRef(!1);return rD(()=>{s.current=!0}),w.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=tD(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Di([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function iD(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=w.useContext(Ba),{pathname:i}=jf(),s=JSON.stringify(eD(r).map(o=>o.pathnameBase));return w.useMemo(()=>tD(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function L9(t,e){return M9(t,e)}function M9(t,e,n){fc()||Ye(!1);let{navigator:r}=w.useContext(Va),{matches:i}=w.useContext(Ba),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=jf(),u;if(e){var c;let v=typeof e=="string"?Ua(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Ye(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=h9(t,{pathname:d}),y=B9(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Di([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Di([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?w.createElement(zf.Provider,{value:{location:Td({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wi.Pop}},y):y}function $9(){let t=K9(),e=R9(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,s)}const F9=w.createElement($9,null);class U9 extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w.createElement(Ba.Provider,{value:this.props.routeContext},w.createElement(nD.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function V9(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(S0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Ba.Provider,{value:e},r)}function B9(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ye(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||F9);let d=e.concat(s.slice(0,u+1)),p=()=>{let y;return c?y=h:l.route.element?y=l.route.element:y=a,w.createElement(V9,{match:l,routeContext:{outlet:a,matches:d},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?w.createElement(U9,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d}}):p()},null)}var sy;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(sy||(sy={}));var Ou;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ou||(Ou={}));function z9(t){let e=w.useContext(S0);return e||Ye(!1),e}function j9(t){let e=w.useContext(x9);return e||Ye(!1),e}function q9(t){let e=w.useContext(Ba);return e||Ye(!1),e}function sD(t){let e=q9(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function K9(){var t;let e=w.useContext(nD),n=j9(Ou.UseRouteError),r=sD(Ou.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function W9(){let{router:t}=z9(sy.UseNavigateStable),e=sD(Ou.UseNavigateStable),n=w.useRef(!1);return rD(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Td({fromRouteId:e},s)))},[t,e])}function wl(t){Ye(!1)}function H9(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wi.Pop,navigator:s,static:o=!1}=t;fc()&&Ye(!1);let a=e.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ua(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,y=w.useMemo(()=>{let v=E0(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return y==null?null:w.createElement(Va.Provider,{value:l},w.createElement(zf.Provider,{children:n,value:y}))}function G9(t){let{children:e,location:n}=t;return L9(oy(e),n)}var i1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(i1||(i1={}));new Promise(()=>{});function oy(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,oy(r.props.children,s));return}r.type!==wl&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=oy(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ay(){return ay=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ay.apply(this,arguments)}function Q9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Y9(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function X9(t,e){return t.button===0&&(!e||e==="_self")&&!Y9(t)}const J9=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Z9(t){let{basename:e,children:n,window:r}=t,i=w.useRef();i.current==null&&(i.current=l9({window:r,v5Compat:!0}));let s=i.current,[o,a]=w.useState({action:s.action,location:s.location});return w.useLayoutEffect(()=>s.listen(a),[s]),w.createElement(H9,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const e6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",t6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ly=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=Q9(e,J9),{basename:d}=w.useContext(Va),p,y=!1;if(typeof u=="string"&&t6.test(u)&&(p=u,e6))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),_=E0(g.pathname,d);g.origin===f.origin&&_!=null?u=_+g.search+g.hash:y=!0}catch{}let v=P9(u,{relative:i}),I=n6(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||I(f)}return w.createElement("a",ay({},h,{href:p||v,onClick:y||s?r:m,ref:n,target:l}))});var s1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(s1||(s1={}));var o1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(o1||(o1={}));function n6(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=qf(),l=jf(),u=iD(t,{relative:o});return w.useCallback(c=>{if(X9(c,n)){c.preventDefault();let h=r!==void 0?r:Sd(l)===Sd(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const a1=()=>{const t=qf(),[e,n]=w.useState(""),r=async s=>{const o=xn(bn,"users",s);return(await Au(o)).data()!=null};return Q("div",{className:"loginPage",children:[P("div",{className:"app-logo",children:P("img",{src:Qx})}),Q("form",{children:[P("button",{type:"button",onClick:()=>{xk(o9,a9).then(async function(s){var o=s.user.displayName,a=s.user.email,l=s.user.photoURL;if(localStorage.setItem("name",o),localStorage.setItem("image",l),localStorage.setItem("email",a),await r(a)){console.log("User Found!"),t("/"),window.location.reload();return}console.log("User not found");const c=xn(bn,"users",a);ey(c,{daily_calorie_goal:null}).then(()=>{console.log('Document "userIds" created successfully'),n(""),t("/"),window.location.reload()}).catch(d=>{console.error("Error creating document: ",d),n("Error signing in. Please try again.")})}).catch(s=>{console.log(s)})},className:"login-with-google-btn",children:"Sign in with Google"}),P("h3",{className:"errorMessage",children:e})]})]})};function r6(t,e,n){w.useEffect(()=>{if(!document)return;const r=document.querySelector('script[src="'.concat(t,'"]'));if(r!=null&&r.dataset.loaded){e==null||e();return}const i=r||document.createElement("script");r||(i.src=t);const s=()=>{i.dataset.loaded="1",e==null||e()};return i.addEventListener("load",s),n&&i.addEventListener("error",n),r||document.head.append(i),()=>{i.removeEventListener("load",s),n&&i.removeEventListener("error",n)}},[])}function i6(t){let{chartVersion:e="current",chartPackages:n=["corechart","controls"],chartLanguage:r="en",mapsApiKey:i}=t;const[s,o]=w.useState(null),[a,l]=w.useState(!1);return r6("https://www.gstatic.com/charts/loader.js",()=>{const u=window==null?void 0:window.google;u&&(u.charts.load(e,{packages:n,language:r,mapsApiKey:i}),u.charts.setOnLoadCallback(()=>{o(u)}))},()=>{l(!0)}),[s,a]}function s6(t){let{onLoad:e,onError:n,...r}=t;const[i,s]=i6(r);return w.useEffect(()=>{i&&e&&e(i)},[i]),w.useEffect(()=>{s&&n&&n()},[s]),null}const oD={legend_toggle:!1,options:{},legendToggle:!1,getChartWrapper:()=>{},spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{}};let l1=0;const o6=()=>(l1+=1,"reactgooglegraph-".concat(l1)),a6=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],l6=async function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new Promise((r,i)=>{const s="".concat(n.headers?"headers=".concat(n.headers):"headers=0"),o="".concat(n.query?"&tq=".concat(encodeURIComponent(n.query)):""),a="".concat(n.gid?"&gid=".concat(n.gid):""),l="".concat(n.sheet?"&sheet=".concat(n.sheet):""),u="".concat(n.access_token?"&access_token=".concat(n.access_token):""),c="".concat(s).concat(a).concat(l).concat(o).concat(u),h="".concat(e,"/gviz/tq?").concat(c);new t.visualization.Query(h).send(p=>{p.isError()?i("Error in query:  ".concat(p.getMessage()," ").concat(p.getDetailedMessage())):r(p.getDataTable())})})},{Provider:u6,Consumer:c6}=w.createContext(oD),h6=t=>{let{children:e,value:n}=t;return w.createElement(u6,{value:n},e)},aD=t=>{let{render:e}=t;return w.createElement(c6,null,n=>e(n))},d6="#CCCCCC";class f6 extends w.Component{componentDidMount(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()}componentWillUnmount(){const{google:e,googleChartWrapper:n}=this.props;window.removeEventListener("resize",this.onResize),e.visualization.events.removeAllListeners(n),n.getChartType()==="Timeline"&&n.getChart()&&n.getChart().clearChart()}componentDidUpdate(){this.draw(this.props)}render(){return null}constructor(...e){super(...e),this.state={hiddenColumns:[]},this.listenToLegendToggle=()=>{const{google:n,googleChartWrapper:r}=this.props;n.visualization.events.addListener(r,"select",()=>{const s=r.getChart().getSelection(),o=r.getDataTable();if(s.length===0||s[0].row||!o)return;const a=s[0].column,l=this.getColumnID(o,a);this.state.hiddenColumns.includes(l)?this.setState(u=>({...u,hiddenColumns:[...u.hiddenColumns.filter(c=>c!==l)]})):this.setState(u=>({...u,hiddenColumns:[...u.hiddenColumns,l]}))})},this.applyFormatters=(n,r)=>{const{google:i}=this.props;for(let s of r)switch(s.type){case"ArrowFormat":{new i.visualization.ArrowFormat(s.options).format(n,s.column);break}case"BarFormat":{new i.visualization.BarFormat(s.options).format(n,s.column);break}case"ColorFormat":{const o=new i.visualization.ColorFormat(s.options),{ranges:a}=s;for(let l of a)o.addRange(...l);o.format(n,s.column);break}case"DateFormat":{new i.visualization.DateFormat(s.options).format(n,s.column);break}case"NumberFormat":{new i.visualization.NumberFormat(s.options).format(n,s.column);break}case"PatternFormat":{new i.visualization.PatternFormat(s.options).format(n,s.column);break}}},this.getColumnID=(n,r)=>n.getColumnId(r)||n.getColumnLabel(r),this.draw=async n=>{let{data:r,diffdata:i,rows:s,columns:o,options:a,legend_toggle:l,legendToggle:u,chartType:c,formatters:h,spreadSheetUrl:d,spreadSheetQueryParameters:p}=n;const{google:y,googleChartWrapper:v}=this.props;let I,m=null;if(i){const _=y.visualization.arrayToDataTable(i.old),k=y.visualization.arrayToDataTable(i.new);m=y.visualization[c].prototype.computeDiff(_,k)}r!==null?Array.isArray(r)?I=y.visualization.arrayToDataTable(r):I=new y.visualization.DataTable(r):s&&o?I=y.visualization.arrayToDataTable([o,...s]):d?I=await l6(y,d,p):I=y.visualization.arrayToDataTable([]);const f=I.getNumberOfColumns();for(let _=0;_<f;_+=1){const k=this.getColumnID(I,_);if(this.state.hiddenColumns.includes(k)){const T=I.getColumnLabel(_),N=I.getColumnId(_),R=I.getColumnType(_);I.removeColumn(_),I.addColumn({label:T,id:N,type:R})}}const g=v.getChart();v.getChartType()==="Timeline"&&g&&g.clearChart(),v.setChartType(c),v.setOptions(a||{}),v.setDataTable(I),v.draw(),this.props.googleChartDashboard!==null&&this.props.googleChartDashboard.draw(I),m&&(v.setDataTable(m),v.draw()),h&&(this.applyFormatters(I,h),v.setDataTable(I),v.draw()),(u===!0||l===!0)&&this.grayOutHiddenColumns({options:a})},this.grayOutHiddenColumns=n=>{let{options:r}=n;const{googleChartWrapper:i}=this.props,s=i.getDataTable();if(!s)return;const o=s.getNumberOfColumns();if(this.state.hiddenColumns.length>0===!1)return;const l=Array.from({length:o-1}).map((u,c)=>{const h=this.getColumnID(s,c+1);return this.state.hiddenColumns.includes(h)?d6:r&&r.colors?r.colors[c]:a6[c]});i.setOptions({...r,colors:l}),i.draw()},this.onResize=()=>{const{googleChartWrapper:n}=this.props;n.draw()}}}class p6 extends w.Component{componentDidMount(){}componentWillUnmount(){}shouldComponentUpdate(){return!1}render(){const{google:e,googleChartWrapper:n,googleChartDashboard:r}=this.props;return w.createElement(aD,{render:i=>w.createElement(f6,Object.assign({},i,{google:e,googleChartWrapper:n,googleChartDashboard:r}))})}}class m6 extends w.Component{shouldComponentUpdate(){return!1}listenToEvents(e){let{chartEvents:n,google:r,googleChartWrapper:i}=e;if(n){r.visualization.events.removeAllListeners(i);for(let o of n){var s=this;const{eventName:a,callback:l}=o;r.visualization.events.addListener(i,a,function(){for(var u=arguments.length,c=new Array(u),h=0;h<u;h++)c[h]=arguments[h];l({chartWrapper:i,props:s.props,google:r,eventArgs:c})})}}}render(){const{google:e,googleChartWrapper:n}=this.props;return w.createElement(aD,{render:r=>(this.listenToEvents({chartEvents:r.chartEvents||null,google:e,googleChartWrapper:n}),null)})}}let u1=0;class g6 extends w.Component{componentDidMount(){const{options:e,google:n,chartType:r,chartWrapperParams:i,toolbarItems:s,getChartEditor:o,getChartWrapper:a}=this.props,l={chartType:r,options:e,containerId:this.getGraphID(),...i},u=new n.visualization.ChartWrapper(l);u.setOptions(e||{}),a&&a(u,n);const c=new n.visualization.Dashboard(this.dashboard_ref),h=this.addControls(u,c);s&&n.visualization.drawToolbar(this.toolbar_ref.current,s);let d=null;o&&(d=new n.visualization.ChartEditor,o({chartEditor:d,chartWrapper:u,google:n})),this.setState({googleChartEditor:d,googleChartControls:h,googleChartDashboard:c,googleChartWrapper:u,isReady:!0})}componentDidUpdate(){if(!this.state.googleChartWrapper||!this.state.googleChartDashboard||!this.state.googleChartControls)return;const{controls:e}=this.props;if(e)for(let n=0;n<e.length;n+=1){const{controlType:r,options:i,controlWrapperParams:s}=e[n];s&&"state"in s&&this.state.googleChartControls[n].control.setState(s.state),this.state.googleChartControls[n].control.setOptions(i),this.state.googleChartControls[n].control.setControlType(r)}}shouldComponentUpdate(e,n){return this.state.isReady!==n.isReady||e.controls!==this.props.controls}render(){const{width:e,height:n,options:r,style:i}=this.props,s={height:n||r&&r.height,width:e||r&&r.width,...i};return this.props.render?w.createElement("div",{ref:this.dashboard_ref,style:s},w.createElement("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):w.createElement("div",{ref:this.dashboard_ref,style:s},this.renderControl(o=>{let{controlProp:a}=o;return a.controlPosition!=="bottom"}),this.renderChart(),this.renderControl(o=>{let{controlProp:a}=o;return a.controlPosition==="bottom"}),this.renderToolBar())}constructor(...e){var n;super(),n=this,this.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},this.graphID=null,this.dashboard_ref=w.createRef(),this.toolbar_ref=w.createRef(),this.getGraphID=()=>{const{graphID:r,graph_id:i}=this.props;let s;return!r&&!i?this.graphID?s=this.graphID:s=o6():r&&!i?s=r:i&&!r?s=i:s=r,this.graphID=s,this.graphID},this.getControlID=(r,i)=>{u1+=1;let s;return typeof r>"u"?s="googlechart-control-".concat(i,"-").concat(u1):s=r,s},this.addControls=(r,i)=>{const{google:s,controls:o}=this.props,a=o?o.map((u,c)=>{const{controlID:h,controlType:d,options:p,controlWrapperParams:y}=u,v=this.getControlID(h,c);return{controlProp:u,control:new s.visualization.ControlWrapper({containerId:v,controlType:d,options:p,...y})}}):null;if(!a)return null;i.bind(a.map(u=>{let{control:c}=u;return c}),r);for(let u of a){const{control:c,controlProp:h}=u,{controlEvents:d=[]}=h;for(let p of d){var l=this;const{callback:y,eventName:v}=p;s.visualization.events.removeListener(c,v,y),s.visualization.events.addListener(c,v,function(){for(var I=arguments.length,m=new Array(I),f=0;f<I;f++)m[f]=arguments[f];y({chartWrapper:r,controlWrapper:c,props:l.props,google:s,eventArgs:m})})}}return a},this.renderChart=()=>{const{width:r,height:i,options:s,style:o,className:a,rootProps:l,google:u}=this.props,c={height:i||s&&s.height,width:r||s&&s.width,...o};return w.createElement("div",Object.assign({id:this.getGraphID(),style:c,className:a},l),this.state.isReady&&this.state.googleChartWrapper!==null?w.createElement(w.Fragment,null,w.createElement(p6,{googleChartWrapper:this.state.googleChartWrapper,google:u,googleChartDashboard:this.state.googleChartDashboard}),w.createElement(m6,{googleChartWrapper:this.state.googleChartWrapper,google:u})):null)},this.renderControl=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i=>!0;return n.state.isReady&&n.state.googleChartControls!==null?w.createElement(w.Fragment,null,n.state.googleChartControls.filter(i=>{let{controlProp:s,control:o}=i;return r({control:o,controlProp:s})}).map(i=>{let{control:s,controlProp:o}=i;return w.createElement("div",{key:s.getContainerId(),id:s.getContainerId()})})):null},this.renderToolBar=()=>this.props.toolbarItems?w.createElement("div",{ref:this.toolbar_ref}):null}}class T0 extends w.Component{render(){const{chartLanguage:e,chartPackages:n,chartVersion:r,mapsApiKey:i,loader:s,errorElement:o}=this.props;return w.createElement(h6,{value:this.props},this.state.loadingStatus==="ready"&&this.state.google!==null?w.createElement(g6,Object.assign({},this.props,{google:this.state.google})):this.state.loadingStatus==="errored"&&o?o:s,w.createElement(s6,{chartLanguage:e,chartPackages:n,chartVersion:r,mapsApiKey:i,onLoad:this.onLoad,onError:this.onError}))}componentDidMount(){this._isMounted=!0}componentWillUnmount(){this._isMounted=!1}isFullyLoaded(e){const{controls:n,toolbarItems:r,getChartEditor:i}=this.props;return e&&e.visualization&&e.visualization.ChartWrapper&&e.visualization.Dashboard&&(!n||e.visualization.ChartWrapper)&&(!i||e.visualization.ChartEditor)&&(!r||e.visualization.drawToolbar)}constructor(...e){super(...e),this._isMounted=!1,this.state={loadingStatus:"loading",google:null},this.onLoad=n=>{if(this.props.onLoad&&this.props.onLoad(n),this.isFullyLoaded(n))this.onSuccess(n);else{const r=setInterval(()=>{const i=window.google;this._isMounted?i&&this.isFullyLoaded(i)&&(clearInterval(r),this.onSuccess(i)):clearInterval(r)},1e3)}},this.onSuccess=n=>{this.setState({loadingStatus:"ready",google:n})},this.onError=()=>{this.setState({loadingStatus:"errored"})}}}T0.defaultProps=oD;var c1;(function(t){t.annotation="annotation",t.annotationText="annotationText",t.certainty="certainty",t.emphasis="emphasis",t.interval="interval",t.scope="scope",t.style="style",t.tooltip="tooltip",t.domain="domain"})(c1||(c1={}));const lD=t=>{const e=t.ingredient;return Q("div",{className:"Ingredient",children:[Q("p",{children:[e.name,":"]}),Q("p",{children:[e.amount," ",e.servingUnit||""]}),Q("p",{className:"calories",children:[e.calories," kcal."]})]})},y6=t=>{const[e,n]=w.useState([]),[r,i]=w.useState({}),s=t.block,o=s.ingredients,a=o.map((l,u)=>P(lD,{ingredient:l},u));if(e.length===0){const l=[["Ingredient","Calories"]];o.forEach(u=>{l.push([u.name,u.calories])}),n(l)}return Object.keys(r).length===0&&i({width:"100%",height:"30vh",title:"Calories Breakdown",pieHole:.4,is3D:!1,backgroundColor:"transparent"}),Q("div",{className:"block",style:s.customStyle,children:[P("div",{className:"block-title1",children:P("h1",{children:s.name})}),Q("div",{className:"block-content",children:[P("div",{className:"strings",style:s.stringsStyle,children:a}),P(T0,{style:{height:"22vh",marginLeft:"8px"},chartType:"PieChart",data:e,options:r})]})]})};const v6=t=>{w.useState([]);const e=t.option,n=e.ingredients,r=t.tryMealOption,i=n.map((o,a)=>P(lD,{ingredient:o},a)),s=o=>{var a={},l=0,u=0,c=0,h=0;n.forEach(d=>{l+=d.calories,u+=d.macros.carbs,c+=d.macros.protein,h+=d.macros.fat}),o.target.checked?(console.log("checked"),a.calories=l,a.carbohydrates=u,a.protein=c,a.fat=h,a.name=e.name):o.target.checked||console.log("unchecked"),r(a)};return Q("div",{className:"block",children:[Q("div",{className:"block-title",children:[P("h1",{children:e.name}),P("input",{id:"mealCheckBox",type:"checkbox",onChange:s})]}),P("div",{className:"block-content",children:P("div",{className:"strings",children:i})})]})};function uD(t){var e=w.useRef(t);return w.useEffect(function(){e.current=t},[t]),e}function uy(t){var e=uD(t);return w.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}function w6(t,e){var n=w.useRef(!0);w.useEffect(function(){if(n.current){n.current=!1;return}return t()},e)}function _6(){var t=w.useRef(!0),e=w.useRef(function(){return t.current});return w.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function I6(t){var e=w.useRef(t);return e.current=t,e}function E6(t){var e=I6(t);w.useEffect(function(){return function(){return e.current()}},[])}var cy=Math.pow(2,31)-1;function cD(t,e,n){var r=n-Date.now();t.current=r<=cy?setTimeout(e,r):setTimeout(function(){return cD(t,e,n)},cy)}function S6(){var t=_6(),e=w.useRef();return E6(function(){return clearTimeout(e.current)}),w.useMemo(function(){var n=function(){return clearTimeout(e.current)};function r(i,s){s===void 0&&(s=0),t()&&(n(),s<=cy?e.current=setTimeout(i,s):cD(e,i,Date.now()+s))}return{set:r,clear:n}},[])}const T6=["as","disabled"];function k6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function C6(t){return!t||t.trim()==="#"}function hD({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&C6(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},h=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:h},u]}const b6=w.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=k6(t,T6);const[s,{tagName:o}]=hD(Object.assign({tagName:n,disabled:r},i));return P(o,Object.assign({},i,s,{ref:e}))});b6.displayName="Button";const A6=["onKeyDown"];function N6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function D6(t){return!t||t.trim()==="#"}const dD=w.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=N6(t,A6);const[i]=hD(Object.assign({tagName:"a"},r)),s=uy(o=>{i.onKeyDown(o),n==null||n(o)});return D6(r.href)||r.role==="button"?P("a",Object.assign({ref:e},r,i,{onKeyDown:s})):P("a",Object.assign({ref:e},r,{onKeyDown:n}))});dD.displayName="Anchor";const h1=dD;var hy={},R6={get exports(){return hy},set exports(t){hy=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(R6);const Bl=hy;function dy(){return dy=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dy.apply(this,arguments)}function fD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function d1(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function x6(t){var e=P6(t,"string");return typeof e=="symbol"?e:String(e)}function P6(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function O6(t,e,n){var r=w.useRef(t!==void 0),i=w.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,w.useCallback(function(u){for(var c=arguments.length,h=new Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(h)),o(u)},[n])]}function L6(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[d1(r)],a=s[r],l=fD(s,[d1(r),r].map(x6)),u=e[r],c=O6(a,o,t[u]),h=c[0],d=c[1];return dy({},l,(i={},i[r]=h,i[u]=d,i))},t)}function fy(t,e){return fy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},fy(t,e)}function M6(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,fy(t,e)}var $6=/-(.)/g;function F6(t){return t.replace($6,function(e,n){return n.toUpperCase()})}const U6=["xxl","xl","lg","md","sm","xs"],V6="xs",pD=w.createContext({prefixes:{},breakpoints:U6,minBreakpoint:V6});function k0(t,e){const{prefixes:n}=w.useContext(pD);return t||n[e]||e}function B6(){const{dir:t}=w.useContext(pD);return t==="rtl"}const z6=t=>t[0].toUpperCase()+F6(t).slice(1);function j6(t,{displayName:e=z6(t),Component:n,defaultProps:r}={}){const i=w.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c={...r,...l},h=k0(o,t);return P(a,{ref:u,className:Bl(s,h),...c})});return i.displayName=e,i}const q6=j6("carousel-caption"),mD=w.forwardRef(({as:t="div",bsPrefix:e,className:n,...r},i)=>{const s=Bl(n,k0(e,"carousel-item"));return P(t,{ref:i,...r,className:s})});mD.displayName="CarouselItem";function f1(t,e){let n=0;return w.Children.map(t,r=>w.isValidElement(r)?e(r,n++):r)}function K6(t,e){let n=0;w.Children.forEach(t,r=>{w.isValidElement(r)&&e(r,n++)})}function W6(t){return t&&t.ownerDocument||document}function H6(t){var e=W6(t);return e&&e.defaultView||window}function G6(t,e){return H6(t).getComputedStyle(t,e)}var Q6=/([A-Z])/g;function Y6(t){return t.replace(Q6,"-$1").toLowerCase()}var X6=/^ms-/;function Kc(t){return Y6(t).replace(X6,"-ms-")}var J6=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Z6(t){return!!(t&&J6.test(t))}function gD(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Kc(e))||G6(t).getPropertyValue(Kc(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Kc(i)):Z6(i)?r+=i+"("+s+") ":n+=Kc(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}const e5=!!(typeof window<"u"&&window.document&&window.document.createElement);var py=!1,my=!1;try{var om={get passive(){return py=!0},get once(){return my=py=!0}};e5&&(window.addEventListener("test",om,om),window.removeEventListener("test",om,!0))}catch{}function t5(t,e,n,r){if(r&&typeof r!="boolean"&&!my){var i=r.once,s=r.capture,o=n;!my&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,py?r:s)}t.addEventListener(e,n,r)}function n5(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function yD(t,e,n,r){return t5(t,e,n,r),function(){n5(t,e,n,r)}}function r5(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function i5(t){var e=gD(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function s5(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||r5(t,"transitionend",!0)},e+n),s=yD(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function o5(t,e,n,r){n==null&&(n=i5(t)||0);var i=s5(t,n,r),s=yD(t,"transitionend",e);return function(){i(),s()}}function p1(t,e){const n=gD(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function a5(t,e){const n=p1(t,"transitionDuration"),r=p1(t,"transitionDelay"),i=o5(t,s=>{s.target===t&&(i(),e(s))},n+r)}function l5(t){t.offsetHeight}const m1={disabled:!1},vD=pi.createContext(null);var u5=function(e){return e.scrollTop},_l="unmounted",us="exited",cs="entering",Io="entered",gy="exiting",ti=function(t){M6(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=us,s.appearStatus=cs):l=Io:r.unmountOnExit||r.mountOnEnter?l=_l:l=us,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===_l?{status:us}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==cs&&o!==Io&&(s=cs):(o===cs||o===Io)&&(s=gy)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===cs){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:hl.findDOMNode(this);o&&u5(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===us&&this.setState({status:_l})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[hl.findDOMNode(this),a],u=l[0],c=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!i&&!o||m1.disabled){this.safeSetState({status:Io},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:cs},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:Io},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:hl.findDOMNode(this);if(!s||m1.disabled){this.safeSetState({status:us},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:gy},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:us},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:hl.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===_l)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=fD(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return pi.createElement(vD.Provider,{value:null},typeof o=="function"?o(i,a):pi.cloneElement(pi.Children.only(o),a))},e}(pi.Component);ti.contextType=vD;ti.propTypes={};function yo(){}ti.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:yo,onEntering:yo,onEntered:yo,onExit:yo,onExiting:yo,onExited:yo};ti.UNMOUNTED=_l;ti.EXITED=us;ti.ENTERING=cs;ti.ENTERED=Io;ti.EXITING=gy;var g1=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function c5(t,e){var n=g1(t),r=g1(e);return function(i){n&&n(i),r&&r(i)}}function h5(t,e){return w.useMemo(function(){return c5(t,e)},[t,e])}function d5(t){return t&&"setState"in t?hl.findDOMNode(t):t??null}const f5=pi.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const h=w.useRef(null),d=h5(h,l),p=T=>{d(d5(T))},y=T=>N=>{T&&h.current&&T(h.current,N)},v=w.useCallback(y(t),[t]),I=w.useCallback(y(e),[e]),m=w.useCallback(y(n),[n]),f=w.useCallback(y(r),[r]),g=w.useCallback(y(i),[i]),_=w.useCallback(y(s),[s]),k=w.useCallback(y(o),[o]);return P(ti,{ref:c,...u,onEnter:v,onEntered:m,onEntering:I,onExit:f,onExited:_,onExiting:g,addEndListener:k,nodeRef:h,children:typeof a=="function"?(T,N)=>a(T,{...N,ref:p}):pi.cloneElement(a,{ref:p})})}),p5=40;function m5(t){if(!t||!t.style||!t.parentNode||!t.parentNode.style)return!1;const e=getComputedStyle(t);return e.display!=="none"&&e.visibility!=="hidden"&&getComputedStyle(t.parentNode).display!=="none"}const wD=w.forwardRef(({defaultActiveIndex:t=0,...e},n)=>{const{as:r="div",bsPrefix:i,slide:s=!0,fade:o=!1,controls:a=!0,indicators:l=!0,indicatorLabels:u=[],activeIndex:c,onSelect:h,onSlide:d,onSlid:p,interval:y=5e3,keyboard:v=!0,onKeyDown:I,pause:m="hover",onMouseOver:f,onMouseOut:g,wrap:_=!0,touch:k=!0,onTouchStart:T,onTouchMove:N,onTouchEnd:R,prevIcon:ce=P("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:q="Previous",nextIcon:rt=P("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:Tn="Next",variant:Jt,className:ni,children:Er,...Sr}=L6({defaultActiveIndex:t,...e},{activeIndex:"onSelect"}),it=k0(i,"carousel"),L=B6(),K=w.useRef(null),[W,de]=w.useState("next"),[ke,Ft]=w.useState(!1),[st,Je]=w.useState(!1),[x,te]=w.useState(c||0);w.useEffect(()=>{!st&&c!==x&&(K.current?de(K.current):de((c||0)>x?"next":"prev"),s&&Je(!0),te(c||0))},[c,st,x,s]),w.useEffect(()=>{K.current&&(K.current=null)});let J=0,ot;K6(Er,(H,he)=>{++J,he===c&&(ot=H.props.interval)});const De=uD(ot),Re=w.useCallback(H=>{if(st)return;let he=x-1;if(he<0){if(!_)return;he=J-1}K.current="prev",h==null||h(he,H)},[st,x,h,_,J]),We=uy(H=>{if(st)return;let he=x+1;if(he>=J){if(!_)return;he=0}K.current="next",h==null||h(he,H)}),fn=w.useRef();w.useImperativeHandle(n,()=>({element:fn.current,prev:Re,next:We}));const Tr=uy(()=>{!document.hidden&&m5(fn.current)&&(L?Re():We())}),Ut=W==="next"?"start":"end";w6(()=>{s||(d==null||d(x,Ut),p==null||p(x,Ut))},[x]);const Vt=`${it}-item-${W}`,Jn=`${it}-item-${Ut}`,Zt=w.useCallback(H=>{l5(H),d==null||d(x,Ut)},[d,x,Ut]),j=w.useCallback(()=>{Je(!1),p==null||p(x,Ut)},[p,x,Ut]),ne=w.useCallback(H=>{if(v&&!/input|textarea/i.test(H.target.tagName))switch(H.key){case"ArrowLeft":H.preventDefault(),L?We(H):Re(H);return;case"ArrowRight":H.preventDefault(),L?Re(H):We(H);return}I==null||I(H)},[v,I,Re,We,L]),re=w.useCallback(H=>{m==="hover"&&Ft(!0),f==null||f(H)},[m,f]),fe=w.useCallback(H=>{Ft(!1),g==null||g(H)},[g]),xe=w.useRef(0),ae=w.useRef(0),at=S6(),Bt=w.useCallback(H=>{xe.current=H.touches[0].clientX,ae.current=0,m==="hover"&&Ft(!0),T==null||T(H)},[m,T]),we=w.useCallback(H=>{H.touches&&H.touches.length>1?ae.current=0:ae.current=H.touches[0].clientX-xe.current,N==null||N(H)},[N]),lt=w.useCallback(H=>{if(k){const he=ae.current;Math.abs(he)>p5&&(he>0?Re(H):We(H))}m==="hover"&&at.set(()=>{Ft(!1)},y||void 0),R==null||R(H)},[k,m,Re,We,at,y,R]),kn=y!=null&&!ke&&!st,rs=w.useRef();w.useEffect(()=>{var H,he;if(!kn)return;const zt=L?Re:We;return rs.current=window.setInterval(document.visibilityState?Tr:zt,(H=(he=De.current)!=null?he:y)!=null?H:void 0),()=>{rs.current!==null&&clearInterval(rs.current)}},[kn,Re,We,De,y,Tr,L]);const uo=w.useMemo(()=>l&&Array.from({length:J},(H,he)=>zt=>{h==null||h(he,zt)}),[l,J,h]);return Q(r,{ref:fn,...Sr,onKeyDown:ne,onMouseOver:re,onMouseOut:fe,onTouchStart:Bt,onTouchMove:we,onTouchEnd:lt,className:Bl(ni,it,s&&"slide",o&&`${it}-fade`,Jt&&`${it}-${Jt}`),children:[l&&P("div",{className:`${it}-indicators`,children:f1(Er,(H,he)=>P("button",{type:"button","data-bs-target":"","aria-label":u!=null&&u.length?u[he]:`Slide ${he+1}`,className:he===x?"active":void 0,onClick:uo?uo[he]:void 0,"aria-current":he===x},he))}),P("div",{className:`${it}-inner`,children:f1(Er,(H,he)=>{const zt=he===x;return s?P(f5,{in:zt,onEnter:zt?Zt:void 0,onEntered:zt?j:void 0,addEndListener:a5,children:(Fn,kr)=>w.cloneElement(H,{...kr,className:Bl(H.props.className,zt&&Fn!=="entered"&&Vt,(Fn==="entered"||Fn==="exiting")&&"active",(Fn==="entering"||Fn==="exiting")&&Jn)})}):w.cloneElement(H,{className:Bl(H.props.className,zt&&"active")})})}),a&&Q(qD,{children:[(_||c!==0)&&Q(h1,{className:`${it}-control-prev`,onClick:Re,children:[ce,q&&P("span",{className:"visually-hidden",children:q})]}),(_||c!==J-1)&&Q(h1,{className:`${it}-control-next`,onClick:We,children:[rt,Tn&&P("span",{className:"visually-hidden",children:Tn})]})]})]})});wD.displayName="Carousel";const am=Object.assign(wD,{Caption:q6,Item:mD}),g5=()=>{const[t,e]=w.useState(0),[n,r]=w.useState(0),[i,s]=w.useState(0),[o,a]=w.useState(0),[l,u]=w.useState(0),[c,h]=w.useState([]),[d,p]=w.useState([]),[y,v]=w.useState([]),[I,m]=w.useState({}),[f,g]=w.useState(!1),[_,k]=w.useState([]);w.useState(s9),w.useState([]);const[T,N]=w.useState([]),[R,ce]=w.useState([]),[q,rt]=w.useState(),[Tn,Jt]=w.useState(!1),[ni,Er]=w.useState(0),[Sr,it]=w.useState(!1),[L,K]=w.useState(!1),[W,de]=w.useState(),[ke,Ft]=w.useState("submit"),st=qf();w.useEffect(()=>{async function j(){const ne=localStorage.getItem("email"),re=xn(bn,"users",ne);(await Au(re)).data()==null&&(console.log("User not found"),st("/login"),window.location.reload())}j()},[]);const Je={carbohydrates:"#245dff",protein:"#e0c342",fat:"#ff4766"},x=j=>j==null?0:parseFloat(parseFloat(j).toFixed(2)),te=async()=>{console.log("FETCHING DATA FROM FIREBASE");const j=localStorage.getItem("email");try{const fe=(await Vl(or(bn,"AlamData"))).docs.map(Cn=>Cn.data()),ae=(await Vl(or(bn,"users",j,"all_meals"))).docs.map(Cn=>Cn.data()),Bt=(await Vl(or(bn,"users",j,"logged_meals"))).docs.map(Cn=>Cn.data()),we=Intl.DateTimeFormat().resolvedOptions().timeZone,lt=new Date().toLocaleDateString("en-US",{timeZone:we}),[kn,rs,uo]=lt.split("/"),H=`${uo}-${kn.padStart(2,"0")}-${rs.padStart(2,"0")}`;let he=0,zt=0,Fn=0,kr=0;const co=[];if(Bt.forEach(Cn=>{if(Cn.datestamp===H){co.push(Cn),console.log("today",co);const _D=Cn.totalcalories;he+=_D,zt+=Cn.totalmacros.protein,Fn+=Cn.totalmacros.fat,kr+=Cn.totalmacros.carbs}}),h(co),zt!=0&&Fn!=0&&kr!=0){var ne=[["Type","Item"],["Protein",zt],["Fat",Fn],["Carbohydrates",kr]];v(ne),p(ne)}return{allMeals:ae,totalCaloriesSum:he,AlamMeals:fe}}catch(re){console.log(re)}},J=(j,ne,re)=>{const fe=[];console.log("Daily Calories"),console.log(q);const xe=q-ne;console.log("alam data",re),Array.isArray(j)&&(j.length<5?re.forEach(we=>{we.totalcalories<=xe+300&&fe.push(we)}):(console.log("allmeals",j),console.log(xe),j.forEach(we=>{we.totalcalories<=xe&&fe.push(we)}),console.log("valid",fe)));function ae(we){for(let lt=we.length-1;lt>0;lt--){const kn=Math.floor(Math.random()*(lt+1));[we[lt],we[kn]]=[we[kn],we[lt]]}return we}const Bt=ae(fe).slice(0,3);N(Bt),k(T)},ot=(j,ne)=>{console.log("Carousel is changing..."),Er(j)},De=j=>{localStorage.clear(),window.location.reload()},Re=()=>{var j=[["Type","Item"],["Protein",0],["Fat",0],["Carbohydrates",.1]];p(j)},We=()=>{var j=[["Type","Item"],["Protein",0],["Fat",0],["Carbohydrates",.1]];v(j)};function fn(j){console.log("Checking new data input"),console.log(j),console.log(Object.keys(j).length===0);var ne={},re=0,fe=0,xe=0,ae=0,at=null,Bt=n;(Bt==null||Bt==null)&&(Bt=0),Object.keys(j).length===0?(console.log("Changing to old data"),re=y[1][1],fe=y[2][1],xe=y[3][1],ae=Bt,Jt(!1)):(console.log("Changing to new data"),re=y[1][1]+j.protein,fe=y[2][1]+j.fat,xe=y[3][1]+j.carbohydrates,ae=j.calories+Bt,at=j.name,Jt(!0)),ne=[["Type","Item"],["Protein",re],["Fat",fe],["Carbohydrates",xe]],console.log("Protein: ",re),console.log("Fat: ",fe),console.log("Carbohydrates: ",xe),console.log("Calories: ",ae),re!=0&&(re=re.toFixed(2)),fe!=0&&(fe=fe.toFixed(2)),xe!=0&&xe!=.1&&(xe=xe.toFixed(2)),ae!=null&&ae!=0&&(ae=ae.toFixed(2)),a(re),u(fe),s(xe),e(ae),p(ne),(W==null||W==null||W=="")&&de(at)}const Tr=async()=>{try{g(!0);const j=localStorage.getItem("email"),ne=xn(bn,"users",j),re=await Au(ne);if(!re.exists()){console.log("No such document!");return}const fe=re.data();if(fe.daily_calorie_goal==null){console.log("User daily calorie goal is null");return}console.log("User daily calorie goal: ",fe.daily_calorie_goal),rt(parseInt(fe.daily_calorie_goal))}catch(j){console.log(j)}},Ut=async()=>{if(q==null){console.log("Total daily calories is null");return}try{const j=localStorage.getItem("email"),ne=xn(bn,"users",j);console.log("Updating data base with calorie goal: ",q);const re=await ty(ne,{daily_calorie_goal:parseInt(q)})}catch(j){console.log(j)}};w.useEffect(()=>{console.log("UDPATING CALORIES GOALS"),Ut(),console.log("CALORIES FINISHED FETCHING"),Jn()},[q]);const Vt={width:"100%",height:"160px",legend:"none",pieSliceText:"none",backgroundColor:"transparent",chartArea:{width:"100%",height:"90%"},slices:{0:{color:Je.protein},1:{color:Je.fat},2:{color:Je.carbohydrates},3:{color:Je.protein},4:{color:Je.fat},5:{color:Je.carbohydrates}}};window.innerWidth<=768&&(Vt.height="130px",Vt.chartArea.width="90%");function Jn(){d.length==0&&Re(),y.length==0&&We(),g(!1),te().then(({allMeals:j,totalCaloriesSum:ne,AlamMeals:re})=>{ce(j),J(j,ne,re)})}w.useEffect(()=>{console.log("ALL MEALS UPDATED"),console.log(R)},[R]),w.useEffect(()=>{Tr()},[]),w.useEffect(()=>{console.log("Pie Data Changed"),m({old:y,new:d})},[d,y]),w.useEffect(()=>{console.log("Diffdata Changed"),console.log(I)},[I]),w.useEffect(()=>{if(c.length!=0){var j=0,ne=0,re=0,fe=0;c.forEach((xe,ae)=>{xe.ingredients.forEach((at,Bt)=>{j+=at.macros.protein,ne+=at.macros.fat,re+=at.macros.carbs,fe+=at.calories})})}r(fe),e(fe),a(j),u(ne),s(re)},[c]),w.useEffect(()=>{k(T)},[T]);async function Zt(j,ne){const re=Intl.DateTimeFormat().resolvedOptions().timeZone,fe=new Date().toLocaleDateString("en-US",{timeZone:re}),[xe,ae,at]=fe.split("/"),Bt=`${at}-${xe.padStart(2,"0")}-${ae.padStart(2,"0")}`,we=W,lt=ne.ingredients,kn=ne.totalcalories,rs=ne.totalmacros,uo=ne.favmeal,H=localStorage.getItem("email"),he=xn(bn,"users",H),zt=or(he,"all_meals"),Fn=or(he,"logged_meals");lt.forEach(co=>{co.servingUnit==null&&(co.servingUnit="")});const kr={name:we,ingredients:lt,totalcalories:kn,totalmacros:rs,date:Bt,favmeal:uo,datestamp:Bt};console.log(kr),await Ft("submitting..."),await Nu(zt,kr),await Nu(Fn,kr),await it(!0),await Ft("submitted!"),setTimeout(()=>{Jn(),de(""),Ft("submit"),Jt(!1),it(!1)},1e3)}return Q("div",{className:"homepage",children:[Q("div",{className:"upper",children:[Q("div",{className:"header",children:[d.length!=0&&y.length!=0?P("div",{id:"calories_and_macro_graph",children:P(T0,{chartType:"PieChart",diffdata:I,options:Vt,id:"calories_and_macro_graph"})}):"",Q("div",{className:"info",children:[Q("div",{className:"info_item",children:[P("h3",{children:"Calories: "}),Q("p",{children:[x(t)," kcal"]})]}),Q("div",{className:"info_item",children:[P("h3",{style:{color:Je.carbohydrates},children:"Carbs:"}),Q("p",{children:[x(i)," g"]})]}),Q("div",{className:"info_item",children:[P("h3",{style:{color:Je.fat},children:"Fat: "}),Q("p",{children:[x(l)," g"]})]}),Q("div",{className:"info_item",children:[P("h3",{style:{color:Je.protein},children:"Protein: "}),Q("p",{children:[x(o)," g"]})]})]})]}),P("div",{className:"calorie_goal",children:P("input",{type:"number",value:q||"",placeholder:"Enter Your Calorie Goal Today (kcal)...",onChange:j=>rt(j.target.value)})})]}),P("div",{className:"content",children:c.map((j,ne)=>P(y6,{block:j},ne))}),_.length==0?P("h3",{className:"dinner-recs-heading",children:" No meals available, daily calorie goal exceeded"}):Q("div",{className:"carousel-section",children:[L?"":Q("div",{className:"recommendation-section",children:[P("div",{className:"recommendation-seperator"}),P("h3",{className:"dinner-recs-heading",children:" Meal Recommendations:"}),P("input",{type:"text",placeholder:"New Meal Name",value:W||"",onChange:j=>de(j.target.value)})]}),P(am,{activeIndex:ni,onSelect:ot,slide:"false",interval:null,touch:"true",children:_.map((j,ne)=>Q(am.Item,{children:[P(v6,{option:j,tryMealOption:fn},ne),Tn?P(am.Caption,{children:P("button",{onClick:re=>Zt(re,j),className:Sr?"slimPossibleSubmitted":"slimPossibleSubmit",children:ke})}):""]},ne))})]}),P(ly,{className:"exit-app",to:"/login",onClick:De,style:{marginTop:"10px"},children:P("img",{className:"add_img",src:"exit.png"})}),P(ly,{className:"form_add",to:"/form",children:P("img",{id:"add_img",src:"add.png"})})]})};function y5(){const[t,e]=w.useState(""),[n,r]=w.useState([]),[i,s]=w.useState("7PjqZ2PBp4plWIxuk3AtA6KUTsYooEKx9ospWyLG"),[o,a]=w.useState([]),[l,u]=w.useState(""),[c,h]=w.useState(!1),[d,p]=w.useState([]),[y,v]=w.useState("Submit"),[I,m]=w.useState([]),[f,g]=w.useState([]),[_,k]=w.useState(!1),[T,N]=w.useState({}),[R,ce]=w.useState(),[q,rt]=w.useState("Add to meal"),Tn=qf();w.useEffect(()=>{async function x(){const te=localStorage.getItem("email"),J=xn(bn,"users",te);(await Au(J)).data()==null&&(console.log("User not found"),Tn("/login"),window.location.reload())}x()},[]);const Jt=()=>{k(!1)},ni=async()=>{const x=localStorage.getItem("email"),J=await(await Vl(or(bn,"users",x,"all_meals"))).docs.map(ot=>ot.data());console.log("All user meals fetched!"),console.log(J),m(J)};I.length==0&&ni();const Er=x=>{if(l==""){g([]);return}for(var te=[],J=0;J<I.length;J++){for(var ot=I[J],De=!1,Re=0;Re<te.length;Re++){var We=te[Re];if(We.name==ot.name){De=!0;break}}!De&&ot.name.toLowerCase().includes(l.toLowerCase())&&te.push(ot)}console.log(te),g(te)};function Sr(x){u(x.name),g([]),console.log("Option clicked!"),console.log(x);var te=[];x.ingredients.forEach(J=>{J.grams!=null&&J.grams,te.push({name:J.name,calories:J.calories,carbohydrates:J.macros.carbs,protein:J.macros.protein,fat:J.macros.fat,amount:J.amount,servingUnit:J.servingUnit,borderColor:{borderColor:L()}})}),console.log("Updating ingredients array..."),a(te),x.favmeal&&h(!0)}const it=x=>{x.preventDefault(),r([]),p([])},L=()=>"#"+Math.floor(Math.random()*16777215).toString(16),K=()=>{if(t===""){let De=[...d],Re="The search query can't be empty!";De.push(Re),p(De);return}console.log("Searching for: "+t);const x=t.split(", "),te=x[0];var J=x[1];J==null&&(J="");const ot=new URLSearchParams({api_key:i,query:te,pageSize:50,pageNumber:1,brandOwner:J});fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?${ot}`).then(De=>De.json()).then(De=>{console.log(De),console.log(De.foods),r(De.foods)}).catch(De=>{console.error("Error fetching data:",De)})},W=x=>{e(x.target.value)},de=()=>{g([])},ke=(x,te)=>{k(!0),N(te)},Ft=()=>{var x=T;N({}),k(!1),rt("Add to meal"),ce(null);const te=x.description;var J=0,ot=0,De=0,Re=0;x.foodNutrients.forEach(Vt=>{switch(Vt.nutrientName){case"Energy":J=Vt.value;break;case"Carbohydrate, by difference":ot=Vt.value;break;case"Protein":De=Vt.value;break;case"Total lipid (fat)":Re=Vt.value;break}});var We=o,fn=null,Tr=null;x.servingSizeUnit=="g"||x.servingSizeUnit=="ml"?(fn=x.servingSize*R,Tr=x.servingSizeUnit):fn=R,console.log(R),console.log(typeof R),console.log(fn),console.log(typeof fn);var Ut={name:te,calories:parseFloat((J*R).toFixed(2)),carbohydrates:parseFloat((ot*R).toFixed(2)),protein:parseFloat((De*R).toFixed(2)),fat:parseFloat((Re*R).toFixed(2)),amount:parseFloat(fn.toFixed(2)),servingUnit:Tr,borderColor:{borderColor:L()}};We.push(Ut),a(We),console.log(We),setTimeout(()=>{r([]),e("")},500)};async function st(x){const te=localStorage.getItem("email");if(console.log("Submitting to firebase for user: "+te),l==""){let ae=[...d],at="The meal name can't be empty!";ae.push(at),p(ae);return}if(!isNaN(l)){let ae=[...d],at="The meal name must be a string!";ae.push(at),p(ae);return}const J=l,ot=Intl.DateTimeFormat().resolvedOptions().timeZone,De=new Date().toLocaleDateString("en-US",{timeZone:ot}),[Re,We,fn]=De.split("/"),Tr=`${fn}-${Re.padStart(2,"0")}-${We.padStart(2,"0")}`;for(var Ut=[],Vt=0,Jn={carbs:0,protein:0,fat:0},Zt=0;Zt<o.length;Zt++){var j="";o[Zt].servingUnit!=null&&(j=o[Zt].servingUnit);const ae={name:o[Zt].name,macros:{carbs:o[Zt].carbohydrates,protein:o[Zt].protein,fat:o[Zt].fat},amount:o[Zt].amount,servingUnit:j,calories:o[Zt].calories};Ut.push(ae),Vt+=ae.calories,Jn.carbs+=ae.macros.carbs,Jn.protein+=ae.macros.protein,Jn.fat+=ae.macros.fat}const ne={name:J,ingredients:Ut,totalcalories:parseFloat(Vt.toFixed(2)),totalmacros:Jn,favmeal:c,datestamp:Tr};parseFloat(Vt.toFixed(2)),console.log("Submitting the following data:"),console.log(ne);const re=xn(bn,"users",te),fe=or(re,"all_meals"),xe=or(re,"logged_meals");await v("submitting..."),await Nu(fe,ne),await Nu(xe,ne),await v("submitted!"),await setTimeout(()=>{console.log("Delayed for 1 seconds"),window.location.href="/"},"1000")}var Je=function(x){return x[0].toUpperCase()+x.slice(1).toLowerCase()};return Q("div",{className:"overallForm",children:[_?P("div",{className:"modal-item",children:Q("div",{className:"modal-content",children:[P("span",{className:"close",onClick:Jt,children:"×"}),P("h2",{children:T.description}),T.brandOwner?P("h6",{children:T.brandOwner}):"",P("p",{}),T.servingSize&&T.servingSizeUnit?Q("p",{children:[T.servingSize," ",T.servingSizeUnit," per serving"]}):P("p",{children:" No serving size/unit data aviailable"}),P("p",{}),P("input",{type:"number",className:"modal-search-input",value:R||"",onChange:x=>ce(parseFloat(x.target.value)),placeholder:T.servingSize&&T.servingSizeUnit?"Enter your serving size here":"Enter your amount here"}),Q("button",{className:q.toLowerCase()==="Add to meal".toLowerCase()?"slimPossibleSubmit":"slimPossibleSubmitted",onClick:Ft,children:[" ",q," "]})]})}):"",d.length>0?d.map((x,te)=>P("p",{style:{color:"red"},children:x},te)):"",P(ly,{className:"ret_home",to:"/",children:P("img",{id:"ret_home_img",src:"src/components/homepage/home.png"})}),Q("form",{className:"submitForm",onSubmit:it,children:[P("button",{className:y.toLowerCase()==="Submit".toLowerCase()?"slimPossibleSubmit":"slimPossibleSubmitted",onClick:st,children:y}),P("input",{className:"meal-input",name:"name",placeholder:"Your meal name",onChange:x=>u(x.target.value),onKeyUp:Er,value:l,required:!0}),P("div",{id:l===""?"":"dropdown-menu",children:f.map((x,te)=>Q("div",{className:"option-meal-suggested",onClick:()=>Sr(x),children:[Q("div",{children:[" ",x.favmeal?"❤️":""," ",x.name," "]}),Q("h4",{children:[" ",x.totalcalories||x.totalcalories," kcal "]})]},te))}),f.length>0?P("button",{className:"option-meal-suggested-close-button",onClick:de,children:"x"}):"",Q("div",{className:"searchBar",children:[P("input",{type:"text","data-testid":"ingredient-search-input",className:"search-input",value:t,onChange:W,placeholder:"Ingredient name, brand name(optional)"}),P("button",{className:"searchIngredient","data-testid":"ingredient-search-button",type:"submit",onClick:K,children:"🔎"})]}),Q("div",{className:"favMeal",children:[P("p",{children:" ✨ Favourite Meal? "}),P("input",{className:"fav_meal",type:"checkbox",value:c,onChange:x=>h(x.target.checked)})]})]}),P("div",{className:"ingredient-options",children:o.map(x=>Q("div",{className:"ingredient-option",style:x.borderColor,children:[Q("h2",{children:[x.name,":"]}),Q("p",{children:[x.calories," kcal"]})]},x.name))}),P("div",{className:"search-results",children:n.map(x=>P("div",{className:"search-result-card",onClick:te=>ke(te,x),children:Q("div",{className:"src-title",children:[x.brandOwner!=null&&x.brandOwner!=""?P("h3",{children:Je(x.description)}):P("h3",{style:{width:"68%"},children:Je(x.description)}),x.brandOwner!=null&&x.brandOwner!=""?P("p",{children:x.brandOwner}):""]})},x.fdcId))})]})}const v5=()=>{const t=localStorage.getItem("name");return P(Z9,{children:Q(G9,{children:[P(wl,{path:"/login",element:P(a1,{})}),P(wl,{path:"/form",element:P(y5,{})}),t?P(wl,{path:"/",element:P(g5,{})}):P(wl,{path:"/",element:P(a1,{})})]})})},w5=lm.createRoot(document.getElementById("root"));w5.render(P(pi.StrictMode,{children:P(v5,{})}));
