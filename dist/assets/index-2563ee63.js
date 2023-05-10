(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function eN(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tc={},tN={get exports(){return Tc},set exports(t){Tc=t}},xh={},T={},nN={get exports(){return T},set exports(t){T=t}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zl=Symbol.for("react.element"),rN=Symbol.for("react.portal"),iN=Symbol.for("react.fragment"),sN=Symbol.for("react.strict_mode"),oN=Symbol.for("react.profiler"),aN=Symbol.for("react.provider"),lN=Symbol.for("react.context"),uN=Symbol.for("react.forward_ref"),cN=Symbol.for("react.suspense"),hN=Symbol.for("react.memo"),dN=Symbol.for("react.lazy"),Iw=Symbol.iterator;function fN(t){return t===null||typeof t!="object"?null:(t=Iw&&t[Iw]||t["@@iterator"],typeof t=="function"?t:null)}var lE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uE=Object.assign,cE={};function Po(t,e,n){this.props=t,this.context=e,this.refs=cE,this.updater=n||lE}Po.prototype.isReactComponent={};Po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hE(){}hE.prototype=Po.prototype;function fg(t,e,n){this.props=t,this.context=e,this.refs=cE,this.updater=n||lE}var pg=fg.prototype=new hE;pg.constructor=fg;uE(pg,Po.prototype);pg.isPureReactComponent=!0;var Ew=Array.isArray,dE=Object.prototype.hasOwnProperty,mg={current:null},fE={key:!0,ref:!0,__self:!0,__source:!0};function pE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)dE.call(e,r)&&!fE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zl,type:t,key:s,ref:o,props:i,_owner:mg.current}}function pN(t,e){return{$$typeof:zl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gg(t){return typeof t=="object"&&t!==null&&t.$$typeof===zl}function mN(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tw=/\/+/g;function Xd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mN(""+t.key):e.toString(36)}function Zu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zl:case rN:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xd(o,0):r,Ew(i)?(n="",t!=null&&(n=t.replace(Tw,"$&/")+"/"),Zu(i,e,n,"",function(u){return u})):i!=null&&(gg(i)&&(i=pN(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Tw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ew(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Xd(s,a);o+=Zu(s,e,n,l,i)}else if(l=fN(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Xd(s,a++),o+=Zu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Eu(t,e,n){if(t==null)return t;var r=[],i=0;return Zu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function gN(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},ec={transition:null},yN={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:ec,ReactCurrentOwner:mg};Q.Children={map:Eu,forEach:function(t,e,n){Eu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Eu(t,function(){e++}),e},toArray:function(t){return Eu(t,function(e){return e})||[]},only:function(t){if(!gg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=Po;Q.Fragment=iN;Q.Profiler=oN;Q.PureComponent=fg;Q.StrictMode=sN;Q.Suspense=cN;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yN;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=uE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)dE.call(e,l)&&!fE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zl,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:lN,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:aN,_context:t},t.Consumer=t};Q.createElement=pE;Q.createFactory=function(t){var e=pE.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:uN,render:t}};Q.isValidElement=gg;Q.lazy=function(t){return{$$typeof:dN,_payload:{_status:-1,_result:t},_init:gN}};Q.memo=function(t,e){return{$$typeof:hN,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=ec.transition;ec.transition={};try{t()}finally{ec.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return kt.current.useCallback(t,e)};Q.useContext=function(t){return kt.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};Q.useEffect=function(t,e){return kt.current.useEffect(t,e)};Q.useId=function(){return kt.current.useId()};Q.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return kt.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};Q.useRef=function(t){return kt.current.useRef(t)};Q.useState=function(t){return kt.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return kt.current.useTransition()};Q.version="18.2.0";(function(t){t.exports=Q})(nN);const vN=eN(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wN=T,_N=Symbol.for("react.element"),IN=Symbol.for("react.fragment"),EN=Object.prototype.hasOwnProperty,TN=wN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SN={key:!0,ref:!0,__self:!0,__source:!0};function mE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)EN.call(e,r)&&!SN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_N,type:t,key:s,ref:o,props:i,_owner:TN.current}}xh.Fragment=IN;xh.jsx=mE;xh.jsxs=mE;(function(t){t.exports=xh})(tN);const V=Tc.jsx,ne=Tc.jsxs;var fp={},pp={},kN={get exports(){return pp},set exports(t){pp=t}},Ht={},mp={},CN={get exports(){return mp},set exports(t){mp=t}},gE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,U){var $=M.length;M.push(U);e:for(;0<$;){var re=$-1>>>1,ae=M[re];if(0<i(ae,U))M[re]=U,M[$]=ae,$=re;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var U=M[0],$=M.pop();if($!==U){M[0]=$;e:for(var re=0,ae=M.length,un=ae>>>1;re<un;){var Qt=2*(re+1)-1,_r=M[Qt],Ir=Qt+1,Iu=M[Ir];if(0>i(_r,$))Ir<ae&&0>i(Iu,_r)?(M[re]=Iu,M[Ir]=$,re=Ir):(M[re]=_r,M[Qt]=$,re=Qt);else if(Ir<ae&&0>i(Iu,$))M[re]=Iu,M[Ir]=$,re=Ir;else break e}}return U}function i(M,U){var $=M.sortIndex-U.sortIndex;return $!==0?$:M.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,y=!1,v=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(M){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=M)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function w(M){if(v=!1,g(M),!y)if(n(l)!==null)y=!0,an(S);else{var U=n(u);U!==null&&ln(w,U.startTime-M)}}function S(M,U){y=!1,v&&(v=!1,m(R),R=-1),p=!0;var $=d;try{for(g(U),h=n(l);h!==null&&(!(h.expirationTime>U)||M&&!ce());){var re=h.callback;if(typeof re=="function"){h.callback=null,d=h.priorityLevel;var ae=re(h.expirationTime<=U);U=t.unstable_now(),typeof ae=="function"?h.callback=ae:h===n(l)&&r(l),g(U)}else r(l);h=n(l)}if(h!==null)var un=!0;else{var Qt=n(u);Qt!==null&&ln(w,Qt.startTime-U),un=!1}return un}finally{h=null,d=$,p=!1}}var b=!1,D=null,R=-1,Y=5,q=-1;function ce(){return!(t.unstable_now()-q<Y)}function on(){if(D!==null){var M=t.unstable_now();q=M;var U=!0;try{U=D(!0,M)}finally{U?yt():(b=!1,D=null)}}else b=!1}var yt;if(typeof f=="function")yt=function(){f(on)};else if(typeof MessageChannel<"u"){var Ii=new MessageChannel,ea=Ii.port2;Ii.port1.onmessage=on,yt=function(){ea.postMessage(null)}}else yt=function(){I(on,0)};function an(M){D=M,b||(b=!0,yt())}function ln(M,U){R=I(function(){M(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,an(S))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var $=d;d=U;try{return M()}finally{d=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,U){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var $=d;d=M;try{return U()}finally{d=$}},t.unstable_scheduleCallback=function(M,U,$){var re=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?re+$:re):$=re,M){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=$+ae,M={id:c++,callback:U,priorityLevel:M,startTime:$,expirationTime:ae,sortIndex:-1},$>re?(M.sortIndex=$,e(u,M),n(l)===null&&M===n(u)&&(v?(m(R),R=-1):v=!0,ln(w,$-re))):(M.sortIndex=ae,e(l,M),y||p||(y=!0,an(S))),M},t.unstable_shouldYield=ce,t.unstable_wrapCallback=function(M){var U=d;return function(){var $=d;d=U;try{return M.apply(this,arguments)}finally{d=$}}}})(gE);(function(t){t.exports=gE})(CN);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE=T,qt=mp;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vE=new Set,Xa={};function gs(t,e){lo(t,e),lo(t+"Capture",e)}function lo(t,e){for(Xa[t]=e,t=0;t<e.length;t++)vE.add(e[t])}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gp=Object.prototype.hasOwnProperty,bN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sw={},kw={};function AN(t){return gp.call(kw,t)?!0:gp.call(Sw,t)?!1:bN.test(t)?kw[t]=!0:(Sw[t]=!0,!1)}function NN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DN(t,e,n,r){if(e===null||typeof e>"u"||NN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var yg=/[\-:]([a-z])/g;function vg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yg,vg);at[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yg,vg);at[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yg,vg);at[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function wg(t,e,n,r){var i=at.hasOwnProperty(e)?at[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DN(e,n,i,r)&&(n=null),r||i===null?AN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tu=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),_g=Symbol.for("react.strict_mode"),yp=Symbol.for("react.profiler"),wE=Symbol.for("react.provider"),_E=Symbol.for("react.context"),Ig=Symbol.for("react.forward_ref"),vp=Symbol.for("react.suspense"),wp=Symbol.for("react.suspense_list"),Eg=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),IE=Symbol.for("react.offscreen"),Cw=Symbol.iterator;function ta(t){return t===null||typeof t!="object"?null:(t=Cw&&t[Cw]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Jd;function _a(t){if(Jd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jd=e&&e[1]||""}return`
`+Jd+t}var Zd=!1;function ef(t,e){if(!t||Zd)return"";Zd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_a(t):""}function RN(t){switch(t.tag){case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return t=ef(t.type,!1),t;case 11:return t=ef(t.type.render,!1),t;case 1:return t=ef(t.type,!0),t;default:return""}}function _p(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case xs:return"Portal";case yp:return"Profiler";case _g:return"StrictMode";case vp:return"Suspense";case wp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _E:return(t.displayName||"Context")+".Consumer";case wE:return(t._context.displayName||"Context")+".Provider";case Ig:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Eg:return e=t.displayName||null,e!==null?e:_p(t.type)||"Memo";case br:e=t._payload,t=t._init;try{return _p(t(e))}catch{}}return null}function PN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _p(e);case 8:return e===_g?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function EE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xN(t){var e=EE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Su(t){t._valueTracker||(t._valueTracker=xN(t))}function TE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=EE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ip(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function SE(t,e){e=e.checked,e!=null&&wg(t,"checked",e,!1)}function Ep(t,e){SE(t,e);var n=Qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tp(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Aw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tp(t,e,n){(e!=="number"||Sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function Hs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Ia(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function kE(t,e){var n=Qr(e.value),r=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function CE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?CE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ku,bE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ku=ku||document.createElement("div"),ku.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ku.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ON=["Webkit","ms","Moz","O"];Object.keys(Pa).forEach(function(t){ON.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pa[e]=Pa[t]})});function AE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pa.hasOwnProperty(t)&&Pa[t]?(""+e).trim():e+"px"}function NE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=AE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var LN=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cp(t,e){if(e){if(LN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function bp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ap=null;function Tg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Np=null,Gs=null,Qs=null;function Rw(t){if(t=Kl(t)){if(typeof Np!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Fh(e),Np(t.stateNode,t.type,e))}}function DE(t){Gs?Qs?Qs.push(t):Qs=[t]:Gs=t}function RE(){if(Gs){var t=Gs,e=Qs;if(Qs=Gs=null,Rw(t),e)for(t=0;t<e.length;t++)Rw(e[t])}}function PE(t,e){return t(e)}function xE(){}var tf=!1;function OE(t,e,n){if(tf)return t(e,n);tf=!0;try{return PE(t,e,n)}finally{tf=!1,(Gs!==null||Qs!==null)&&(xE(),RE())}}function Za(t,e){var n=t.stateNode;if(n===null)return null;var r=Fh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Dp=!1;if(or)try{var na={};Object.defineProperty(na,"passive",{get:function(){Dp=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{Dp=!1}function MN(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var xa=!1,kc=null,Cc=!1,Rp=null,$N={onError:function(t){xa=!0,kc=t}};function FN(t,e,n,r,i,s,o,a,l){xa=!1,kc=null,MN.apply($N,arguments)}function UN(t,e,n,r,i,s,o,a,l){if(FN.apply(this,arguments),xa){if(xa){var u=kc;xa=!1,kc=null}else throw Error(A(198));Cc||(Cc=!0,Rp=u)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function LE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pw(t){if(ys(t)!==t)throw Error(A(188))}function VN(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Pw(i),t;if(s===r)return Pw(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function ME(t){return t=VN(t),t!==null?$E(t):null}function $E(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$E(t);if(e!==null)return e;t=t.sibling}return null}var FE=qt.unstable_scheduleCallback,xw=qt.unstable_cancelCallback,BN=qt.unstable_shouldYield,zN=qt.unstable_requestPaint,Ae=qt.unstable_now,jN=qt.unstable_getCurrentPriorityLevel,Sg=qt.unstable_ImmediatePriority,UE=qt.unstable_UserBlockingPriority,bc=qt.unstable_NormalPriority,qN=qt.unstable_LowPriority,VE=qt.unstable_IdlePriority,Oh=null,On=null;function KN(t){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Oh,t,void 0,(t.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:GN,WN=Math.log,HN=Math.LN2;function GN(t){return t>>>=0,t===0?32:31-(WN(t)/HN|0)|0}var Cu=64,bu=4194304;function Ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ac(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ea(a):(s&=o,s!==0&&(r=Ea(s)))}else o=n&~i,o!==0?r=Ea(o):s!==0&&(r=Ea(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yn(e),i=1<<n,r|=t[n],e&=~i;return r}function QN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=QN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Pp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function BE(){var t=Cu;return Cu<<=1,!(Cu&4194240)&&(Cu=64),t}function nf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yn(e),t[e]=n}function XN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function zE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jE,Cg,qE,KE,WE,xp=!1,Au=[],Fr=null,Ur=null,Vr=null,el=new Map,tl=new Map,Nr=[],JN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ow(t,e){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":el.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":tl.delete(e.pointerId)}}function ra(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Kl(e),e!==null&&Cg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ZN(t,e,n,r,i){switch(e){case"focusin":return Fr=ra(Fr,t,e,n,r,i),!0;case"dragenter":return Ur=ra(Ur,t,e,n,r,i),!0;case"mouseover":return Vr=ra(Vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return el.set(s,ra(el.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,tl.set(s,ra(tl.get(s)||null,t,e,n,r,i)),!0}return!1}function HE(t){var e=Pi(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=LE(n),e!==null){t.blockedOn=e,WE(t.priority,function(){qE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Op(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ap=r,n.target.dispatchEvent(r),Ap=null}else return e=Kl(n),e!==null&&Cg(e),t.blockedOn=n,!1;e.shift()}return!0}function Lw(t,e,n){tc(t)&&n.delete(e)}function eD(){xp=!1,Fr!==null&&tc(Fr)&&(Fr=null),Ur!==null&&tc(Ur)&&(Ur=null),Vr!==null&&tc(Vr)&&(Vr=null),el.forEach(Lw),tl.forEach(Lw)}function ia(t,e){t.blockedOn===e&&(t.blockedOn=null,xp||(xp=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,eD)))}function nl(t){function e(i){return ia(i,t)}if(0<Au.length){ia(Au[0],t);for(var n=1;n<Au.length;n++){var r=Au[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fr!==null&&ia(Fr,t),Ur!==null&&ia(Ur,t),Vr!==null&&ia(Vr,t),el.forEach(e),tl.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)HE(n),n.blockedOn===null&&Nr.shift()}var Ys=fr.ReactCurrentBatchConfig,Nc=!0;function tD(t,e,n,r){var i=se,s=Ys.transition;Ys.transition=null;try{se=1,bg(t,e,n,r)}finally{se=i,Ys.transition=s}}function nD(t,e,n,r){var i=se,s=Ys.transition;Ys.transition=null;try{se=4,bg(t,e,n,r)}finally{se=i,Ys.transition=s}}function bg(t,e,n,r){if(Nc){var i=Op(t,e,n,r);if(i===null)ff(t,e,r,Dc,n),Ow(t,r);else if(ZN(i,t,e,n,r))r.stopPropagation();else if(Ow(t,r),e&4&&-1<JN.indexOf(t)){for(;i!==null;){var s=Kl(i);if(s!==null&&jE(s),s=Op(t,e,n,r),s===null&&ff(t,e,r,Dc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ff(t,e,r,null,n)}}var Dc=null;function Op(t,e,n,r){if(Dc=null,t=Tg(r),t=Pi(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=LE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dc=t,null}function GE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jN()){case Sg:return 1;case UE:return 4;case bc:case qN:return 16;case VE:return 536870912;default:return 16}default:return 16}}var xr=null,Ag=null,nc=null;function QE(){if(nc)return nc;var t,e=Ag,n=e.length,r,i="value"in xr?xr.value:xr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nc=i.slice(t,1<r?1-r:void 0)}function rc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nu(){return!0}function Mw(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nu:Mw,this.isPropagationStopped=Mw,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nu)},persist:function(){},isPersistent:Nu}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ng=Gt(xo),ql=Ee({},xo,{view:0,detail:0}),rD=Gt(ql),rf,sf,sa,Lh=Ee({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sa&&(sa&&t.type==="mousemove"?(rf=t.screenX-sa.screenX,sf=t.screenY-sa.screenY):sf=rf=0,sa=t),rf)},movementY:function(t){return"movementY"in t?t.movementY:sf}}),$w=Gt(Lh),iD=Ee({},Lh,{dataTransfer:0}),sD=Gt(iD),oD=Ee({},ql,{relatedTarget:0}),of=Gt(oD),aD=Ee({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),lD=Gt(aD),uD=Ee({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cD=Gt(uD),hD=Ee({},xo,{data:0}),Fw=Gt(hD),dD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mD(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pD[t])?!!e[t]:!1}function Dg(){return mD}var gD=Ee({},ql,{key:function(t){if(t.key){var e=dD[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fD[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dg,charCode:function(t){return t.type==="keypress"?rc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yD=Gt(gD),vD=Ee({},Lh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uw=Gt(vD),wD=Ee({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dg}),_D=Gt(wD),ID=Ee({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ED=Gt(ID),TD=Ee({},Lh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SD=Gt(TD),kD=[9,13,27,32],Rg=or&&"CompositionEvent"in window,Oa=null;or&&"documentMode"in document&&(Oa=document.documentMode);var CD=or&&"TextEvent"in window&&!Oa,YE=or&&(!Rg||Oa&&8<Oa&&11>=Oa),Vw=String.fromCharCode(32),Bw=!1;function XE(t,e){switch(t){case"keyup":return kD.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function JE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function bD(t,e){switch(t){case"compositionend":return JE(e);case"keypress":return e.which!==32?null:(Bw=!0,Vw);case"textInput":return t=e.data,t===Vw&&Bw?null:t;default:return null}}function AD(t,e){if(Ls)return t==="compositionend"||!Rg&&XE(t,e)?(t=QE(),nc=Ag=xr=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return YE&&e.locale!=="ko"?null:e.data;default:return null}}var ND={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ND[t.type]:e==="textarea"}function ZE(t,e,n,r){DE(r),e=Rc(e,"onChange"),0<e.length&&(n=new Ng("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var La=null,rl=null;function DD(t){c1(t,0)}function Mh(t){var e=Fs(t);if(TE(e))return t}function RD(t,e){if(t==="change")return e}var e1=!1;if(or){var af;if(or){var lf="oninput"in document;if(!lf){var jw=document.createElement("div");jw.setAttribute("oninput","return;"),lf=typeof jw.oninput=="function"}af=lf}else af=!1;e1=af&&(!document.documentMode||9<document.documentMode)}function qw(){La&&(La.detachEvent("onpropertychange",t1),rl=La=null)}function t1(t){if(t.propertyName==="value"&&Mh(rl)){var e=[];ZE(e,rl,t,Tg(t)),OE(DD,e)}}function PD(t,e,n){t==="focusin"?(qw(),La=e,rl=n,La.attachEvent("onpropertychange",t1)):t==="focusout"&&qw()}function xD(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mh(rl)}function OD(t,e){if(t==="click")return Mh(e)}function LD(t,e){if(t==="input"||t==="change")return Mh(e)}function MD(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:MD;function il(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gp.call(e,i)||!wn(t[i],e[i]))return!1}return!0}function Kw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ww(t,e){var n=Kw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kw(n)}}function n1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function r1(){for(var t=window,e=Sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sc(t.document)}return e}function Pg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $D(t){var e=r1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n1(n.ownerDocument.documentElement,n)){if(r!==null&&Pg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ww(n,s);var o=Ww(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FD=or&&"documentMode"in document&&11>=document.documentMode,Ms=null,Lp=null,Ma=null,Mp=!1;function Hw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mp||Ms==null||Ms!==Sc(r)||(r=Ms,"selectionStart"in r&&Pg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ma&&il(Ma,r)||(Ma=r,r=Rc(Lp,"onSelect"),0<r.length&&(e=new Ng("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ms)))}function Du(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:Du("Animation","AnimationEnd"),animationiteration:Du("Animation","AnimationIteration"),animationstart:Du("Animation","AnimationStart"),transitionend:Du("Transition","TransitionEnd")},uf={},i1={};or&&(i1=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function $h(t){if(uf[t])return uf[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i1)return uf[t]=e[n];return t}var s1=$h("animationend"),o1=$h("animationiteration"),a1=$h("animationstart"),l1=$h("transitionend"),u1=new Map,Gw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(t,e){u1.set(t,e),gs(e,[t])}for(var cf=0;cf<Gw.length;cf++){var hf=Gw[cf],UD=hf.toLowerCase(),VD=hf[0].toUpperCase()+hf.slice(1);ci(UD,"on"+VD)}ci(s1,"onAnimationEnd");ci(o1,"onAnimationIteration");ci(a1,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(l1,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BD=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Qw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,UN(r,e,void 0,t),t.currentTarget=null}function c1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Qw(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Qw(i,a,u),s=l}}}if(Cc)throw t=Rp,Cc=!1,Rp=null,t}function he(t,e){var n=e[Bp];n===void 0&&(n=e[Bp]=new Set);var r=t+"__bubble";n.has(r)||(h1(e,t,2,!1),n.add(r))}function df(t,e,n){var r=0;e&&(r|=4),h1(n,t,r,e)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function sl(t){if(!t[Ru]){t[Ru]=!0,vE.forEach(function(n){n!=="selectionchange"&&(BD.has(n)||df(n,!1,t),df(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ru]||(e[Ru]=!0,df("selectionchange",!1,e))}}function h1(t,e,n,r){switch(GE(e)){case 1:var i=tD;break;case 4:i=nD;break;default:i=bg}n=i.bind(null,e,n,t),i=void 0,!Dp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ff(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}OE(function(){var u=s,c=Tg(n),h=[];e:{var d=u1.get(t);if(d!==void 0){var p=Ng,y=t;switch(t){case"keypress":if(rc(n)===0)break e;case"keydown":case"keyup":p=yD;break;case"focusin":y="focus",p=of;break;case"focusout":y="blur",p=of;break;case"beforeblur":case"afterblur":p=of;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$w;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_D;break;case s1:case o1:case a1:p=lD;break;case l1:p=ED;break;case"scroll":p=rD;break;case"wheel":p=SD;break;case"copy":case"cut":case"paste":p=cD;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Uw}var v=(e&4)!==0,I=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Za(f,m),w!=null&&v.push(ol(f,w,g)))),I)break;f=f.return}0<v.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ap&&(y=n.relatedTarget||n.fromElement)&&(Pi(y)||y[ar]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Pi(y):null,y!==null&&(I=ys(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=$w,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Uw,w="onPointerLeave",m="onPointerEnter",f="pointer"),I=p==null?d:Fs(p),g=y==null?d:Fs(y),d=new v(w,f+"leave",p,n,c),d.target=I,d.relatedTarget=g,w=null,Pi(c)===u&&(v=new v(m,f+"enter",y,n,c),v.target=g,v.relatedTarget=I,w=v),I=w,p&&y)t:{for(v=p,m=y,f=0,g=v;g;g=ks(g))f++;for(g=0,w=m;w;w=ks(w))g++;for(;0<f-g;)v=ks(v),f--;for(;0<g-f;)m=ks(m),g--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=ks(v),m=ks(m)}v=null}else v=null;p!==null&&Yw(h,d,p,v,!1),y!==null&&I!==null&&Yw(h,I,y,v,!0)}}e:{if(d=u?Fs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=RD;else if(zw(d))if(e1)S=LD;else{S=xD;var b=PD}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=OD);if(S&&(S=S(t,u))){ZE(h,S,n,c);break e}b&&b(t,d,u),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Tp(d,"number",d.value)}switch(b=u?Fs(u):window,t){case"focusin":(zw(b)||b.contentEditable==="true")&&(Ms=b,Lp=u,Ma=null);break;case"focusout":Ma=Lp=Ms=null;break;case"mousedown":Mp=!0;break;case"contextmenu":case"mouseup":case"dragend":Mp=!1,Hw(h,n,c);break;case"selectionchange":if(FD)break;case"keydown":case"keyup":Hw(h,n,c)}var D;if(Rg)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ls?XE(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(YE&&n.locale!=="ko"&&(Ls||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ls&&(D=QE()):(xr=c,Ag="value"in xr?xr.value:xr.textContent,Ls=!0)),b=Rc(u,R),0<b.length&&(R=new Fw(R,t,null,n,c),h.push({event:R,listeners:b}),D?R.data=D:(D=JE(n),D!==null&&(R.data=D)))),(D=CD?bD(t,n):AD(t,n))&&(u=Rc(u,"onBeforeInput"),0<u.length&&(c=new Fw("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}c1(h,e)})}function ol(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Za(t,n),s!=null&&r.unshift(ol(t,s,i)),s=Za(t,e),s!=null&&r.push(ol(t,s,i))),t=t.return}return r}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Za(n,s),l!=null&&o.unshift(ol(n,l,a))):i||(l=Za(n,s),l!=null&&o.push(ol(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zD=/\r\n?/g,jD=/\u0000|\uFFFD/g;function Xw(t){return(typeof t=="string"?t:""+t).replace(zD,`
`).replace(jD,"")}function Pu(t,e,n){if(e=Xw(e),Xw(t)!==e&&n)throw Error(A(425))}function Pc(){}var $p=null,Fp=null;function Up(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vp=typeof setTimeout=="function"?setTimeout:void 0,qD=typeof clearTimeout=="function"?clearTimeout:void 0,Jw=typeof Promise=="function"?Promise:void 0,KD=typeof queueMicrotask=="function"?queueMicrotask:typeof Jw<"u"?function(t){return Jw.resolve(null).then(t).catch(WD)}:Vp;function WD(t){setTimeout(function(){throw t})}function pf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),nl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);nl(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),kn="__reactFiber$"+Oo,al="__reactProps$"+Oo,ar="__reactContainer$"+Oo,Bp="__reactEvents$"+Oo,HD="__reactListeners$"+Oo,GD="__reactHandles$"+Oo;function Pi(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ar]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zw(t);t!==null;){if(n=t[kn])return n;t=Zw(t)}return e}t=n,n=t.parentNode}return null}function Kl(t){return t=t[kn]||t[ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Fh(t){return t[al]||null}var zp=[],Us=-1;function hi(t){return{current:t}}function fe(t){0>Us||(t.current=zp[Us],zp[Us]=null,Us--)}function le(t,e){Us++,zp[Us]=t.current,t.current=e}var Yr={},gt=hi(Yr),Ot=hi(!1),Gi=Yr;function uo(t,e){var n=t.type.contextTypes;if(!n)return Yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Lt(t){return t=t.childContextTypes,t!=null}function xc(){fe(Ot),fe(gt)}function e0(t,e,n){if(gt.current!==Yr)throw Error(A(168));le(gt,e),le(Ot,n)}function d1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,PN(t)||"Unknown",i));return Ee({},n,r)}function Oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,Gi=gt.current,le(gt,t),le(Ot,Ot.current),!0}function t0(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=d1(t,e,Gi),r.__reactInternalMemoizedMergedChildContext=t,fe(Ot),fe(gt),le(gt,t)):fe(Ot),le(Ot,n)}var Gn=null,Uh=!1,mf=!1;function f1(t){Gn===null?Gn=[t]:Gn.push(t)}function QD(t){Uh=!0,f1(t)}function di(){if(!mf&&Gn!==null){mf=!0;var t=0,e=se;try{var n=Gn;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gn=null,Uh=!1}catch(i){throw Gn!==null&&(Gn=Gn.slice(t+1)),FE(Sg,di),i}finally{se=e,mf=!1}}return null}var Vs=[],Bs=0,Lc=null,Mc=0,Yt=[],Xt=0,Qi=null,Qn=1,Yn="";function Ti(t,e){Vs[Bs++]=Mc,Vs[Bs++]=Lc,Lc=t,Mc=e}function p1(t,e,n){Yt[Xt++]=Qn,Yt[Xt++]=Yn,Yt[Xt++]=Qi,Qi=t;var r=Qn;t=Yn;var i=32-yn(r)-1;r&=~(1<<i),n+=1;var s=32-yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qn=1<<32-yn(e)+i|n<<i|r,Yn=s+t}else Qn=1<<s|n<<i|r,Yn=t}function xg(t){t.return!==null&&(Ti(t,1),p1(t,1,0))}function Og(t){for(;t===Lc;)Lc=Vs[--Bs],Vs[Bs]=null,Mc=Vs[--Bs],Vs[Bs]=null;for(;t===Qi;)Qi=Yt[--Xt],Yt[Xt]=null,Yn=Yt[--Xt],Yt[Xt]=null,Qn=Yt[--Xt],Yt[Xt]=null}var jt=null,Bt=null,ge=!1,fn=null;function m1(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function n0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Bt=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qi!==null?{id:Qn,overflow:Yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Bt=null,!0):!1;default:return!1}}function jp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qp(t){if(ge){var e=Bt;if(e){var n=e;if(!n0(t,e)){if(jp(t))throw Error(A(418));e=Br(n.nextSibling);var r=jt;e&&n0(t,e)?m1(r,n):(t.flags=t.flags&-4097|2,ge=!1,jt=t)}}else{if(jp(t))throw Error(A(418));t.flags=t.flags&-4097|2,ge=!1,jt=t}}}function r0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function xu(t){if(t!==jt)return!1;if(!ge)return r0(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Up(t.type,t.memoizedProps)),e&&(e=Bt)){if(jp(t))throw g1(),Error(A(418));for(;e;)m1(t,e),e=Br(e.nextSibling)}if(r0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=jt?Br(t.stateNode.nextSibling):null;return!0}function g1(){for(var t=Bt;t;)t=Br(t.nextSibling)}function co(){Bt=jt=null,ge=!1}function Lg(t){fn===null?fn=[t]:fn.push(t)}var YD=fr.ReactCurrentBatchConfig;function hn(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $c=hi(null),Fc=null,zs=null,Mg=null;function $g(){Mg=zs=Fc=null}function Fg(t){var e=$c.current;fe($c),t._currentValue=e}function Kp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xs(t,e){Fc=t,Mg=zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(Mg!==t)if(t={context:t,memoizedValue:e,next:null},zs===null){if(Fc===null)throw Error(A(308));zs=t,Fc.dependencies={lanes:0,firstContext:t}}else zs=zs.next=t;return e}var xi=null;function Ug(t){xi===null?xi=[t]:xi.push(t)}function y1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ug(e)):(n.next=i.next,i.next=n),e.interleaved=n,lr(t,r)}function lr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function Vg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,lr(t,n)}return i=r.interleaved,i===null?(e.next=e,Ug(r)):(e.next=i.next,i.next=e),r.interleaved=e,lr(t,n)}function ic(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kg(t,n)}}function i0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Uc(t,e,n,r){var i=t.updateQueue;Ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=Ee({},h,d);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xi|=o,t.lanes=o,t.memoizedState=h}}function s0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var w1=new yE.Component().refs;function Wp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vh={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=qr(t),s=nr(r,i);s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(vn(e,t,i,r),ic(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=qr(t),s=nr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(vn(e,t,i,r),ic(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=qr(t),i=nr(n,r);i.tag=2,e!=null&&(i.callback=e),e=zr(t,i,r),e!==null&&(vn(e,t,r,n),ic(e,t,r))}};function o0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!il(n,r)||!il(i,s):!0}function _1(t,e,n){var r=!1,i=Yr,s=e.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Lt(e)?Gi:gt.current,r=e.contextTypes,s=(r=r!=null)?uo(t,i):Yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function a0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vh.enqueueReplaceState(e,e.state,null)}function Hp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=w1,Vg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Lt(e)?Gi:gt.current,i.context=uo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vh.enqueueReplaceState(i,i.state,null),Uc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===w1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Ou(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function l0(t){var e=t._init;return e(t._payload)}function I1(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Kr(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,w){return f===null||f.tag!==6?(f=Ef(g,m.mode,w),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,w){var S=g.type;return S===Os?c(m,f,g.props.children,w,g.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===br&&l0(S)===f.type)?(w=i(f,g.props),w.ref=oa(m,f,g),w.return=m,w):(w=cc(g.type,g.key,g.props,null,m.mode,w),w.ref=oa(m,f,g),w.return=m,w)}function u(m,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Tf(g,m.mode,w),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,w,S){return f===null||f.tag!==7?(f=zi(g,m.mode,w,S),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ef(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Tu:return g=cc(f.type,f.key,f.props,null,m.mode,g),g.ref=oa(m,null,f),g.return=m,g;case xs:return f=Tf(f,m.mode,g),f.return=m,f;case br:var w=f._init;return h(m,w(f._payload),g)}if(Ia(f)||ta(f))return f=zi(f,m.mode,g,null),f.return=m,f;Ou(m,f)}return null}function d(m,f,g,w){var S=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Tu:return g.key===S?l(m,f,g,w):null;case xs:return g.key===S?u(m,f,g,w):null;case br:return S=g._init,d(m,f,S(g._payload),w)}if(Ia(g)||ta(g))return S!==null?null:c(m,f,g,w,null);Ou(m,g)}return null}function p(m,f,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(f,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Tu:return m=m.get(w.key===null?g:w.key)||null,l(f,m,w,S);case xs:return m=m.get(w.key===null?g:w.key)||null,u(f,m,w,S);case br:var b=w._init;return p(m,f,g,b(w._payload),S)}if(Ia(w)||ta(w))return m=m.get(g)||null,c(f,m,w,S,null);Ou(f,w)}return null}function y(m,f,g,w){for(var S=null,b=null,D=f,R=f=0,Y=null;D!==null&&R<g.length;R++){D.index>R?(Y=D,D=null):Y=D.sibling;var q=d(m,D,g[R],w);if(q===null){D===null&&(D=Y);break}t&&D&&q.alternate===null&&e(m,D),f=s(q,f,R),b===null?S=q:b.sibling=q,b=q,D=Y}if(R===g.length)return n(m,D),ge&&Ti(m,R),S;if(D===null){for(;R<g.length;R++)D=h(m,g[R],w),D!==null&&(f=s(D,f,R),b===null?S=D:b.sibling=D,b=D);return ge&&Ti(m,R),S}for(D=r(m,D);R<g.length;R++)Y=p(D,m,R,g[R],w),Y!==null&&(t&&Y.alternate!==null&&D.delete(Y.key===null?R:Y.key),f=s(Y,f,R),b===null?S=Y:b.sibling=Y,b=Y);return t&&D.forEach(function(ce){return e(m,ce)}),ge&&Ti(m,R),S}function v(m,f,g,w){var S=ta(g);if(typeof S!="function")throw Error(A(150));if(g=S.call(g),g==null)throw Error(A(151));for(var b=S=null,D=f,R=f=0,Y=null,q=g.next();D!==null&&!q.done;R++,q=g.next()){D.index>R?(Y=D,D=null):Y=D.sibling;var ce=d(m,D,q.value,w);if(ce===null){D===null&&(D=Y);break}t&&D&&ce.alternate===null&&e(m,D),f=s(ce,f,R),b===null?S=ce:b.sibling=ce,b=ce,D=Y}if(q.done)return n(m,D),ge&&Ti(m,R),S;if(D===null){for(;!q.done;R++,q=g.next())q=h(m,q.value,w),q!==null&&(f=s(q,f,R),b===null?S=q:b.sibling=q,b=q);return ge&&Ti(m,R),S}for(D=r(m,D);!q.done;R++,q=g.next())q=p(D,m,R,q.value,w),q!==null&&(t&&q.alternate!==null&&D.delete(q.key===null?R:q.key),f=s(q,f,R),b===null?S=q:b.sibling=q,b=q);return t&&D.forEach(function(on){return e(m,on)}),ge&&Ti(m,R),S}function I(m,f,g,w){if(typeof g=="object"&&g!==null&&g.type===Os&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Tu:e:{for(var S=g.key,b=f;b!==null;){if(b.key===S){if(S=g.type,S===Os){if(b.tag===7){n(m,b.sibling),f=i(b,g.props.children),f.return=m,m=f;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===br&&l0(S)===b.type){n(m,b.sibling),f=i(b,g.props),f.ref=oa(m,b,g),f.return=m,m=f;break e}n(m,b);break}else e(m,b);b=b.sibling}g.type===Os?(f=zi(g.props.children,m.mode,w,g.key),f.return=m,m=f):(w=cc(g.type,g.key,g.props,null,m.mode,w),w.ref=oa(m,f,g),w.return=m,m=w)}return o(m);case xs:e:{for(b=g.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Tf(g,m.mode,w),f.return=m,m=f}return o(m);case br:return b=g._init,I(m,f,b(g._payload),w)}if(Ia(g))return y(m,f,g,w);if(ta(g))return v(m,f,g,w);Ou(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Ef(g,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return I}var ho=I1(!0),E1=I1(!1),Wl={},Ln=hi(Wl),ll=hi(Wl),ul=hi(Wl);function Oi(t){if(t===Wl)throw Error(A(174));return t}function Bg(t,e){switch(le(ul,e),le(ll,t),le(Ln,Wl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kp(e,t)}fe(Ln),le(Ln,e)}function fo(){fe(Ln),fe(ll),fe(ul)}function T1(t){Oi(ul.current);var e=Oi(Ln.current),n=kp(e,t.type);e!==n&&(le(ll,t),le(Ln,n))}function zg(t){ll.current===t&&(fe(Ln),fe(ll))}var _e=hi(0);function Vc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gf=[];function jg(){for(var t=0;t<gf.length;t++)gf[t]._workInProgressVersionPrimary=null;gf.length=0}var sc=fr.ReactCurrentDispatcher,yf=fr.ReactCurrentBatchConfig,Yi=0,Ie=null,Fe=null,je=null,Bc=!1,$a=!1,cl=0,XD=0;function ct(){throw Error(A(321))}function qg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function Kg(t,e,n,r,i,s){if(Yi=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sc.current=t===null||t.memoizedState===null?tR:nR,t=n(r,i),$a){s=0;do{if($a=!1,cl=0,25<=s)throw Error(A(301));s+=1,je=Fe=null,e.updateQueue=null,sc.current=rR,t=n(r,i)}while($a)}if(sc.current=zc,e=Fe!==null&&Fe.next!==null,Yi=0,je=Fe=Ie=null,Bc=!1,e)throw Error(A(300));return t}function Wg(){var t=cl!==0;return cl=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ie.memoizedState=je=t:je=je.next=t,je}function rn(){if(Fe===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=je===null?Ie.memoizedState:je.next;if(e!==null)je=e,Fe=t;else{if(t===null)throw Error(A(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},je===null?Ie.memoizedState=je=t:je=je.next=t}return je}function hl(t,e){return typeof e=="function"?e(t):e}function vf(t){var e=rn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Yi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ie.lanes|=c,Xi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,wn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,Xi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wf(t){var e=rn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);wn(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function S1(){}function k1(t,e){var n=Ie,r=rn(),i=e(),s=!wn(r.memoizedState,i);if(s&&(r.memoizedState=i,Dt=!0),r=r.queue,Hg(A1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,dl(9,b1.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(A(349));Yi&30||C1(n,e,i)}return i}function C1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function b1(t,e,n,r){e.value=n,e.getSnapshot=r,N1(e)&&D1(t)}function A1(t,e,n){return n(function(){N1(e)&&D1(t)})}function N1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function D1(t){var e=lr(t,1);e!==null&&vn(e,t,1,-1)}function u0(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:t},e.queue=t,t=t.dispatch=eR.bind(null,Ie,t),[e.memoizedState,t]}function dl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function R1(){return rn().memoizedState}function oc(t,e,n,r){var i=Sn();Ie.flags|=t,i.memoizedState=dl(1|e,n,void 0,r===void 0?null:r)}function Bh(t,e,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&qg(r,o.deps)){i.memoizedState=dl(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=dl(1|e,n,s,r)}function c0(t,e){return oc(8390656,8,t,e)}function Hg(t,e){return Bh(2048,8,t,e)}function P1(t,e){return Bh(4,2,t,e)}function x1(t,e){return Bh(4,4,t,e)}function O1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function L1(t,e,n){return n=n!=null?n.concat([t]):null,Bh(4,4,O1.bind(null,e,t),n)}function Gg(){}function M1(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $1(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function F1(t,e,n){return Yi&21?(wn(n,e)||(n=BE(),Ie.lanes|=n,Xi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function JD(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=yf.transition;yf.transition={};try{t(!1),e()}finally{se=n,yf.transition=r}}function U1(){return rn().memoizedState}function ZD(t,e,n){var r=qr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},V1(t))B1(e,n);else if(n=y1(t,e,n,r),n!==null){var i=Et();vn(n,t,r,i),z1(n,e,r)}}function eR(t,e,n){var r=qr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(V1(t))B1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wn(a,o)){var l=e.interleaved;l===null?(i.next=i,Ug(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=y1(t,e,i,r),n!==null&&(i=Et(),vn(n,t,r,i),z1(n,e,r))}}function V1(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function B1(t,e){$a=Bc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kg(t,n)}}var zc={readContext:nn,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},tR={readContext:nn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:c0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oc(4194308,4,O1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return oc(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZD.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:u0,useDebugValue:Gg,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=u0(!1),e=t[0];return t=JD.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=Sn();if(ge){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Ke===null)throw Error(A(349));Yi&30||C1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,c0(A1.bind(null,r,s,t),[t]),r.flags|=2048,dl(9,b1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=Ke.identifierPrefix;if(ge){var n=Yn,r=Qn;n=(r&~(1<<32-yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=cl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XD++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nR={readContext:nn,useCallback:M1,useContext:nn,useEffect:Hg,useImperativeHandle:L1,useInsertionEffect:P1,useLayoutEffect:x1,useMemo:$1,useReducer:vf,useRef:R1,useState:function(){return vf(hl)},useDebugValue:Gg,useDeferredValue:function(t){var e=rn();return F1(e,Fe.memoizedState,t)},useTransition:function(){var t=vf(hl)[0],e=rn().memoizedState;return[t,e]},useMutableSource:S1,useSyncExternalStore:k1,useId:U1,unstable_isNewReconciler:!1},rR={readContext:nn,useCallback:M1,useContext:nn,useEffect:Hg,useImperativeHandle:L1,useInsertionEffect:P1,useLayoutEffect:x1,useMemo:$1,useReducer:wf,useRef:R1,useState:function(){return wf(hl)},useDebugValue:Gg,useDeferredValue:function(t){var e=rn();return Fe===null?e.memoizedState=t:F1(e,Fe.memoizedState,t)},useTransition:function(){var t=wf(hl)[0],e=rn().memoizedState;return[t,e]},useMutableSource:S1,useSyncExternalStore:k1,useId:U1,unstable_isNewReconciler:!1};function po(t,e){try{var n="",r=e;do n+=RN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _f(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iR=typeof WeakMap=="function"?WeakMap:Map;function j1(t,e,n){n=nr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){qc||(qc=!0,im=r),Gp(t,e)},n}function q1(t,e,n){n=nr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Gp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gp(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function h0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vR.bind(null,t,e,n),e.then(t,t))}function d0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function f0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nr(-1,1),e.tag=2,zr(n,e,1))),n.lanes|=1),t)}var sR=fr.ReactCurrentOwner,Dt=!1;function vt(t,e,n,r){e.child=t===null?E1(e,null,n,r):ho(e,t.child,n,r)}function p0(t,e,n,r,i){n=n.render;var s=e.ref;return Xs(e,i),r=Kg(t,e,n,r,s,i),n=Wg(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ur(t,e,i)):(ge&&n&&xg(e),e.flags|=1,vt(t,e,r,i),e.child)}function m0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ny(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,K1(t,e,s,r,i)):(t=cc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:il,n(o,r)&&t.ref===e.ref)return ur(t,e,i)}return e.flags|=1,t=Kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function K1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(il(s,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,ur(t,e,i)}return Qp(t,e,n,r,i)}function W1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(qs,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(qs,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(qs,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(qs,Ut),Ut|=r;return vt(t,e,i,n),e.child}function H1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qp(t,e,n,r,i){var s=Lt(n)?Gi:gt.current;return s=uo(e,s),Xs(e,i),n=Kg(t,e,n,r,s,i),r=Wg(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ur(t,e,i)):(ge&&r&&xg(e),e.flags|=1,vt(t,e,n,i),e.child)}function g0(t,e,n,r,i){if(Lt(n)){var s=!0;Oc(e)}else s=!1;if(Xs(e,i),e.stateNode===null)ac(t,e),_1(e,n,r),Hp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nn(u):(u=Lt(n)?Gi:gt.current,u=uo(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&a0(e,o,r,u),Ar=!1;var d=e.memoizedState;o.state=d,Uc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ot.current||Ar?(typeof c=="function"&&(Wp(e,n,c,r),l=e.memoizedState),(a=Ar||o0(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,v1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:hn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=nn(l):(l=Lt(n)?Gi:gt.current,l=uo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&a0(e,o,r,l),Ar=!1,d=e.memoizedState,o.state=d,Uc(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Ot.current||Ar?(typeof p=="function"&&(Wp(e,n,p,r),y=e.memoizedState),(u=Ar||o0(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Yp(t,e,n,r,s,i)}function Yp(t,e,n,r,i,s){H1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&t0(e,n,!1),ur(t,e,s);r=e.stateNode,sR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ho(e,t.child,null,s),e.child=ho(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&t0(e,n,!0),e.child}function G1(t){var e=t.stateNode;e.pendingContext?e0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&e0(t,e.context,!1),Bg(t,e.containerInfo)}function y0(t,e,n,r,i){return co(),Lg(i),e.flags|=256,vt(t,e,n,r),e.child}var Xp={dehydrated:null,treeContext:null,retryLane:0};function Jp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Q1(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(_e,i&1),t===null)return qp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qh(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jp(n),e.memoizedState=Xp,t):Qg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Kr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Kr(a,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xp,r}return s=t.child,t=s.sibling,r=Kr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Qg(t,e){return e=qh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Lu(t,e,n,r){return r!==null&&Lg(r),ho(e,t.child,null,n),t=Qg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_f(Error(A(422))),Lu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=qh({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ho(e,t.child,null,o),e.child.memoizedState=Jp(o),e.memoizedState=Xp,s);if(!(e.mode&1))return Lu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=_f(s,r,void 0),Lu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Dt||a){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,lr(t,i),vn(r,t,i,-1))}return ty(),r=_f(Error(A(421))),Lu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Bt=Br(i.nextSibling),jt=e,ge=!0,fn=null,t!==null&&(Yt[Xt++]=Qn,Yt[Xt++]=Yn,Yt[Xt++]=Qi,Qn=t.id,Yn=t.overflow,Qi=e),e=Qg(e,r.children),e.flags|=4096,e)}function v0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kp(t.return,e,n)}function If(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Y1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&v0(t,n,e);else if(t.tag===19)v0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),If(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}If(e,!0,n,null,s);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ac(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aR(t,e,n){switch(e.tag){case 3:G1(e),co();break;case 5:T1(e);break;case 1:Lt(e.type)&&Oc(e);break;case 4:Bg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le($c,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?Q1(t,e,n):(le(_e,_e.current&1),t=ur(t,e,n),t!==null?t.sibling:null);le(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Y1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,W1(t,e,n)}return ur(t,e,n)}var X1,Zp,J1,Z1;X1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zp=function(){};J1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Oi(Ln.current);var s=null;switch(n){case"input":i=Ip(t,i),r=Ip(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Sp(t,i),r=Sp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pc)}Cp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&he("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Z1=function(t,e,n,r){n!==r&&(e.flags|=4)};function aa(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lR(t,e,n){var r=e.pendingProps;switch(Og(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Lt(e.type)&&xc(),ht(e),null;case 3:return r=e.stateNode,fo(),fe(Ot),fe(gt),jg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(am(fn),fn=null))),Zp(t,e),ht(e),null;case 5:zg(e);var i=Oi(ul.current);if(n=e.type,t!==null&&e.stateNode!=null)J1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return ht(e),null}if(t=Oi(Ln.current),xu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kn]=e,r[al]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<Ta.length;i++)he(Ta[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":bw(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":Nw(r,s),he("invalid",r)}Cp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pu(r.textContent,a,t),i=["children",""+a]):Xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Su(r),Aw(r,s,!0);break;case"textarea":Su(r),Dw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=CE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[al]=r,X1(t,e,!1,!1),e.stateNode=t;e:{switch(o=bp(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ta.length;i++)he(Ta[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":bw(t,r),i=Ip(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),he("invalid",t);break;case"textarea":Nw(t,r),i=Sp(t,r),he("invalid",t);break;default:i=r}Cp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?NE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ja(t,l):typeof l=="number"&&Ja(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&he("scroll",t):l!=null&&wg(t,s,l,o))}switch(n){case"input":Su(t),Aw(t,r,!1);break;case"textarea":Su(t),Dw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Hs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Hs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)Z1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=Oi(ul.current),Oi(Ln.current),xu(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(s=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:Pu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return ht(e),null;case 13:if(fe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&Bt!==null&&e.mode&1&&!(e.flags&128))g1(),co(),e.flags|=98560,s=!1;else if(s=xu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[kn]=e}else co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),s=!1}else fn!==null&&(am(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Ue===0&&(Ue=3):ty())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return fo(),Zp(t,e),t===null&&sl(e.stateNode.containerInfo),ht(e),null;case 10:return Fg(e.type._context),ht(e),null;case 17:return Lt(e.type)&&xc(),ht(e),null;case 19:if(fe(_e),s=e.memoizedState,s===null)return ht(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)aa(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vc(t),o!==null){for(e.flags|=128,aa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>mo&&(e.flags|=128,r=!0,aa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return ht(e),null}else 2*Ae()-s.renderingStartTime>mo&&n!==1073741824&&(e.flags|=128,r=!0,aa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=_e.current,le(_e,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return ey(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function uR(t,e){switch(Og(e),e.tag){case 1:return Lt(e.type)&&xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fo(),fe(Ot),fe(gt),jg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zg(e),null;case 13:if(fe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(_e),null;case 4:return fo(),null;case 10:return Fg(e.type._context),null;case 22:case 23:return ey(),null;case 24:return null;default:return null}}var Mu=!1,ft=!1,cR=typeof WeakSet=="function"?WeakSet:Set,F=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function em(t,e,n){try{n()}catch(r){Se(t,e,r)}}var w0=!1;function hR(t,e){if($p=Nc,t=r1(),Pg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fp={focusedElem:t,selectionRange:n},Nc=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,I=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:hn(e.type,v),I);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){Se(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return y=w0,w0=!1,y}function Fa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&em(e,n,s)}i=i.next}while(i!==r)}}function zh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function tm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eT(t){var e=t.alternate;e!==null&&(t.alternate=null,eT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[al],delete e[Bp],delete e[HD],delete e[GD])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tT(t){return t.tag===5||t.tag===3||t.tag===4}function _0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pc));else if(r!==4&&(t=t.child,t!==null))for(nm(t,e,n),t=t.sibling;t!==null;)nm(t,e,n),t=t.sibling}function rm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rm(t,e,n),t=t.sibling;t!==null;)rm(t,e,n),t=t.sibling}var Je=null,dn=!1;function Er(t,e,n){for(n=n.child;n!==null;)nT(t,e,n),n=n.sibling}function nT(t,e,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Oh,n)}catch{}switch(n.tag){case 5:ft||js(n,e);case 6:var r=Je,i=dn;Je=null,Er(t,e,n),Je=r,dn=i,Je!==null&&(dn?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(dn?(t=Je,n=n.stateNode,t.nodeType===8?pf(t.parentNode,n):t.nodeType===1&&pf(t,n),nl(t)):pf(Je,n.stateNode));break;case 4:r=Je,i=dn,Je=n.stateNode.containerInfo,dn=!0,Er(t,e,n),Je=r,dn=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&em(n,e,o),i=i.next}while(i!==r)}Er(t,e,n);break;case 1:if(!ft&&(js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,e,a)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,Er(t,e,n),ft=r):Er(t,e,n);break;default:Er(t,e,n)}}function I0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cR),e.forEach(function(r){var i=_R.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,dn=!1;break e;case 3:Je=a.stateNode.containerInfo,dn=!0;break e;case 4:Je=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(Je===null)throw Error(A(160));nT(s,o,i),Je=null,dn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Se(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rT(e,t),e=e.sibling}function rT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),Tn(t),r&4){try{Fa(3,t,t.return),zh(3,t)}catch(v){Se(t,t.return,v)}try{Fa(5,t,t.return)}catch(v){Se(t,t.return,v)}}break;case 1:cn(e,t),Tn(t),r&512&&n!==null&&js(n,n.return);break;case 5:if(cn(e,t),Tn(t),r&512&&n!==null&&js(n,n.return),t.flags&32){var i=t.stateNode;try{Ja(i,"")}catch(v){Se(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&SE(i,s),bp(a,o);var u=bp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?NE(i,h):c==="dangerouslySetInnerHTML"?bE(i,h):c==="children"?Ja(i,h):wg(i,c,h,u)}switch(a){case"input":Ep(i,s);break;case"textarea":kE(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Hs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Hs(i,!!s.multiple,s.defaultValue,!0):Hs(i,!!s.multiple,s.multiple?[]:"",!1))}i[al]=s}catch(v){Se(t,t.return,v)}}break;case 6:if(cn(e,t),Tn(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Se(t,t.return,v)}}break;case 3:if(cn(e,t),Tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nl(e.containerInfo)}catch(v){Se(t,t.return,v)}break;case 4:cn(e,t),Tn(t);break;case 13:cn(e,t),Tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Jg=Ae())),r&4&&I0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(u=ft)||c,cn(e,t),ft=u):cn(e,t),Tn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(F=t,c=t.child;c!==null;){for(h=F=c;F!==null;){switch(d=F,p=d.child,d.tag){case 0:case 11:case 14:case 15:Fa(4,d,d.return);break;case 1:js(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Se(r,n,v)}}break;case 5:js(d,d.return);break;case 22:if(d.memoizedState!==null){T0(h);continue}}p!==null?(p.return=d,F=p):T0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=AE("display",o))}catch(v){Se(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Se(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:cn(e,t),Tn(t),r&4&&I0(t);break;case 21:break;default:cn(e,t),Tn(t)}}function Tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tT(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ja(i,""),r.flags&=-33);var s=_0(t);rm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=_0(t);nm(t,a,o);break;default:throw Error(A(161))}}catch(l){Se(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dR(t,e,n){F=t,iT(t)}function iT(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Mu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ft;a=Mu;var u=ft;if(Mu=o,(ft=l)&&!u)for(F=i;F!==null;)o=F,l=o.child,o.tag===22&&o.memoizedState!==null?S0(i):l!==null?(l.return=o,F=l):S0(i);for(;s!==null;)F=s,iT(s),s=s.sibling;F=i,Mu=a,ft=u}E0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):E0(t)}}function E0(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||zh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:hn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&s0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}s0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&nl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ft||e.flags&512&&tm(e)}catch(d){Se(e,e.return,d)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function T0(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function S0(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zh(4,e)}catch(l){Se(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Se(e,i,l)}}var s=e.return;try{tm(e)}catch(l){Se(e,s,l)}break;case 5:var o=e.return;try{tm(e)}catch(l){Se(e,o,l)}}}catch(l){Se(e,e.return,l)}if(e===t){F=null;break}var a=e.sibling;if(a!==null){a.return=e.return,F=a;break}F=e.return}}var fR=Math.ceil,jc=fr.ReactCurrentDispatcher,Yg=fr.ReactCurrentOwner,tn=fr.ReactCurrentBatchConfig,ee=0,Ke=null,Le=null,nt=0,Ut=0,qs=hi(0),Ue=0,fl=null,Xi=0,jh=0,Xg=0,Ua=null,Nt=null,Jg=0,mo=1/0,Kn=null,qc=!1,im=null,jr=null,$u=!1,Or=null,Kc=0,Va=0,sm=null,lc=-1,uc=0;function Et(){return ee&6?Ae():lc!==-1?lc:lc=Ae()}function qr(t){return t.mode&1?ee&2&&nt!==0?nt&-nt:YD.transition!==null?(uc===0&&(uc=BE()),uc):(t=se,t!==0||(t=window.event,t=t===void 0?16:GE(t.type)),t):1}function vn(t,e,n,r){if(50<Va)throw Va=0,sm=null,Error(A(185));jl(t,n,r),(!(ee&2)||t!==Ke)&&(t===Ke&&(!(ee&2)&&(jh|=n),Ue===4&&Dr(t,nt)),Mt(t,r),n===1&&ee===0&&!(e.mode&1)&&(mo=Ae()+500,Uh&&di()))}function Mt(t,e){var n=t.callbackNode;YN(t,e);var r=Ac(t,t===Ke?nt:0);if(r===0)n!==null&&xw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&xw(n),e===1)t.tag===0?QD(k0.bind(null,t)):f1(k0.bind(null,t)),KD(function(){!(ee&6)&&di()}),n=null;else{switch(zE(r)){case 1:n=Sg;break;case 4:n=UE;break;case 16:n=bc;break;case 536870912:n=VE;break;default:n=bc}n=dT(n,sT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sT(t,e){if(lc=-1,uc=0,ee&6)throw Error(A(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var r=Ac(t,t===Ke?nt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wc(t,r);else{e=r;var i=ee;ee|=2;var s=aT();(Ke!==t||nt!==e)&&(Kn=null,mo=Ae()+500,Bi(t,e));do try{gR();break}catch(a){oT(t,a)}while(1);$g(),jc.current=s,ee=i,Le!==null?e=0:(Ke=null,nt=0,e=Ue)}if(e!==0){if(e===2&&(i=Pp(t),i!==0&&(r=i,e=om(t,i))),e===1)throw n=fl,Bi(t,0),Dr(t,r),Mt(t,Ae()),n;if(e===6)Dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!pR(i)&&(e=Wc(t,r),e===2&&(s=Pp(t),s!==0&&(r=s,e=om(t,s))),e===1))throw n=fl,Bi(t,0),Dr(t,r),Mt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:Si(t,Nt,Kn);break;case 3:if(Dr(t,r),(r&130023424)===r&&(e=Jg+500-Ae(),10<e)){if(Ac(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vp(Si.bind(null,t,Nt,Kn),e);break}Si(t,Nt,Kn);break;case 4:if(Dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fR(r/1960))-r,10<r){t.timeoutHandle=Vp(Si.bind(null,t,Nt,Kn),r);break}Si(t,Nt,Kn);break;case 5:Si(t,Nt,Kn);break;default:throw Error(A(329))}}}return Mt(t,Ae()),t.callbackNode===n?sT.bind(null,t):null}function om(t,e){var n=Ua;return t.current.memoizedState.isDehydrated&&(Bi(t,e).flags|=256),t=Wc(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&am(e)),t}function am(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function pR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~Xg,e&=~jh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yn(e),r=1<<n;t[n]=-1,e&=~r}}function k0(t){if(ee&6)throw Error(A(327));Js();var e=Ac(t,0);if(!(e&1))return Mt(t,Ae()),null;var n=Wc(t,e);if(t.tag!==0&&n===2){var r=Pp(t);r!==0&&(e=r,n=om(t,r))}if(n===1)throw n=fl,Bi(t,0),Dr(t,e),Mt(t,Ae()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Si(t,Nt,Kn),Mt(t,Ae()),null}function Zg(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(mo=Ae()+500,Uh&&di())}}function Ji(t){Or!==null&&Or.tag===0&&!(ee&6)&&Js();var e=ee;ee|=1;var n=tn.transition,r=se;try{if(tn.transition=null,se=1,t)return t()}finally{se=r,tn.transition=n,ee=e,!(ee&6)&&di()}}function ey(){Ut=qs.current,fe(qs)}function Bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qD(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Og(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xc();break;case 3:fo(),fe(Ot),fe(gt),jg();break;case 5:zg(r);break;case 4:fo();break;case 13:fe(_e);break;case 19:fe(_e);break;case 10:Fg(r.type._context);break;case 22:case 23:ey()}n=n.return}if(Ke=t,Le=t=Kr(t.current,null),nt=Ut=e,Ue=0,fl=null,Xg=jh=Xi=0,Nt=Ua=null,xi!==null){for(e=0;e<xi.length;e++)if(n=xi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xi=null}return t}function oT(t,e){do{var n=Le;try{if($g(),sc.current=zc,Bc){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bc=!1}if(Yi=0,je=Fe=Ie=null,$a=!1,cl=0,Yg.current=null,n===null||n.return===null){Ue=1,fl=e,Le=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=d0(o);if(p!==null){p.flags&=-257,f0(p,o,a,s,e),p.mode&1&&h0(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){h0(s,u,e),ty();break e}l=Error(A(426))}}else if(ge&&a.mode&1){var I=d0(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),f0(I,o,a,s,e),Lg(po(l,a));break e}}s=l=po(l,a),Ue!==4&&(Ue=2),Ua===null?Ua=[s]:Ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=j1(s,l,e);i0(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(jr===null||!jr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=q1(s,a,e);i0(s,w);break e}}s=s.return}while(s!==null)}uT(n)}catch(S){e=S,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function aT(){var t=jc.current;return jc.current=zc,t===null?zc:t}function ty(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ke===null||!(Xi&268435455)&&!(jh&268435455)||Dr(Ke,nt)}function Wc(t,e){var n=ee;ee|=2;var r=aT();(Ke!==t||nt!==e)&&(Kn=null,Bi(t,e));do try{mR();break}catch(i){oT(t,i)}while(1);if($g(),ee=n,jc.current=r,Le!==null)throw Error(A(261));return Ke=null,nt=0,Ue}function mR(){for(;Le!==null;)lT(Le)}function gR(){for(;Le!==null&&!BN();)lT(Le)}function lT(t){var e=hT(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?uT(t):Le=e,Yg.current=null}function uT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uR(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Le=null;return}}else if(n=lR(n,e,Ut),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Ue===0&&(Ue=5)}function Si(t,e,n){var r=se,i=tn.transition;try{tn.transition=null,se=1,yR(t,e,n,r)}finally{tn.transition=i,se=r}return null}function yR(t,e,n,r){do Js();while(Or!==null);if(ee&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(XN(t,s),t===Ke&&(Le=Ke=null,nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$u||($u=!0,dT(bc,function(){return Js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var o=se;se=1;var a=ee;ee|=4,Yg.current=null,hR(t,n),rT(n,t),$D(Fp),Nc=!!$p,Fp=$p=null,t.current=n,dR(n),zN(),ee=a,se=o,tn.transition=s}else t.current=n;if($u&&($u=!1,Or=t,Kc=i),s=t.pendingLanes,s===0&&(jr=null),KN(n.stateNode),Mt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qc)throw qc=!1,t=im,im=null,t;return Kc&1&&t.tag!==0&&Js(),s=t.pendingLanes,s&1?t===sm?Va++:(Va=0,sm=t):Va=0,di(),null}function Js(){if(Or!==null){var t=zE(Kc),e=tn.transition,n=se;try{if(tn.transition=null,se=16>t?16:t,Or===null)var r=!1;else{if(t=Or,Or=null,Kc=0,ee&6)throw Error(A(331));var i=ee;for(ee|=4,F=t.current;F!==null;){var s=F,o=s.child;if(F.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(F=u;F!==null;){var c=F;switch(c.tag){case 0:case 11:case 15:Fa(8,c,s)}var h=c.child;if(h!==null)h.return=c,F=h;else for(;F!==null;){c=F;var d=c.sibling,p=c.return;if(eT(c),c===u){F=null;break}if(d!==null){d.return=p,F=d;break}F=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var I=v.sibling;v.sibling=null,v=I}while(v!==null)}}F=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,F=o;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,F=m;break e}F=s.return}}var f=t.current;for(F=f;F!==null;){o=F;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,F=g;else e:for(o=f;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zh(9,a)}}catch(S){Se(a,a.return,S)}if(a===o){F=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,F=w;break e}F=a.return}}if(ee=i,di(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Oh,t)}catch{}r=!0}return r}finally{se=n,tn.transition=e}}return!1}function C0(t,e,n){e=po(n,e),e=j1(t,e,1),t=zr(t,e,1),e=Et(),t!==null&&(jl(t,1,e),Mt(t,e))}function Se(t,e,n){if(t.tag===3)C0(t,t,n);else for(;e!==null;){if(e.tag===3){C0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=po(n,t),t=q1(e,t,1),e=zr(e,t,1),t=Et(),e!==null&&(jl(e,1,t),Mt(e,t));break}}e=e.return}}function vR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(nt&n)===n&&(Ue===4||Ue===3&&(nt&130023424)===nt&&500>Ae()-Jg?Bi(t,0):Xg|=n),Mt(t,e)}function cT(t,e){e===0&&(t.mode&1?(e=bu,bu<<=1,!(bu&130023424)&&(bu=4194304)):e=1);var n=Et();t=lr(t,e),t!==null&&(jl(t,e,n),Mt(t,n))}function wR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cT(t,n)}function _R(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),cT(t,n)}var hT;hT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,aR(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,ge&&e.flags&1048576&&p1(e,Mc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ac(t,e),t=e.pendingProps;var i=uo(e,gt.current);Xs(e,n),i=Kg(null,e,r,t,i,n);var s=Wg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Lt(r)?(s=!0,Oc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vg(e),i.updater=Vh,e.stateNode=i,i._reactInternals=e,Hp(e,r,t,n),e=Yp(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&xg(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ac(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ER(r),t=hn(r,t),i){case 0:e=Qp(null,e,r,t,n);break e;case 1:e=g0(null,e,r,t,n);break e;case 11:e=p0(null,e,r,t,n);break e;case 14:e=m0(null,e,r,hn(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Qp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),g0(t,e,r,i,n);case 3:e:{if(G1(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,v1(t,e),Uc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=po(Error(A(423)),e),e=y0(t,e,r,n,i);break e}else if(r!==i){i=po(Error(A(424)),e),e=y0(t,e,r,n,i);break e}else for(Bt=Br(e.stateNode.containerInfo.firstChild),jt=e,ge=!0,fn=null,n=E1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),r===i){e=ur(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return T1(e),t===null&&qp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Up(r,i)?o=null:s!==null&&Up(r,s)&&(e.flags|=32),H1(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&qp(e),null;case 13:return Q1(t,e,n);case 4:return Bg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ho(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),p0(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le($c,r._currentValue),r._currentValue=o,s!==null)if(wn(s.value,o)){if(s.children===i.children&&!Ot.current){e=ur(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=nr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xs(e,n),i=nn(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=hn(r,e.pendingProps),i=hn(r.type,i),m0(t,e,r,i,n);case 15:return K1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),ac(t,e),e.tag=1,Lt(r)?(t=!0,Oc(e)):t=!1,Xs(e,n),_1(e,r,i),Hp(e,r,i,n),Yp(null,e,r,!0,t,n);case 19:return Y1(t,e,n);case 22:return W1(t,e,n)}throw Error(A(156,e.tag))};function dT(t,e){return FE(t,e)}function IR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new IR(t,e,n,r)}function ny(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ER(t){if(typeof t=="function")return ny(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ig)return 11;if(t===Eg)return 14}return 2}function Kr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ny(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Os:return zi(n.children,i,s,e);case _g:o=8,i|=8;break;case yp:return t=Zt(12,n,e,i|2),t.elementType=yp,t.lanes=s,t;case vp:return t=Zt(13,n,e,i),t.elementType=vp,t.lanes=s,t;case wp:return t=Zt(19,n,e,i),t.elementType=wp,t.lanes=s,t;case IE:return qh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wE:o=10;break e;case _E:o=9;break e;case Ig:o=11;break e;case Eg:o=14;break e;case br:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function qh(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=IE,t.lanes=n,t.stateNode={isHidden:!1},t}function Ef(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function Tf(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nf(0),this.expirationTimes=nf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ry(t,e,n,r,i,s,o,a,l){return t=new TR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vg(s),t}function SR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fT(t){if(!t)return Yr;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(Lt(n))return d1(t,n,e)}return e}function pT(t,e,n,r,i,s,o,a,l){return t=ry(n,r,!0,t,i,s,o,a,l),t.context=fT(null),n=t.current,r=Et(),i=qr(n),s=nr(r,i),s.callback=e??null,zr(n,s,i),t.current.lanes=i,jl(t,i,r),Mt(t,r),t}function Kh(t,e,n,r){var i=e.current,s=Et(),o=qr(i);return n=fT(n),e.context===null?e.context=n:e.pendingContext=n,e=nr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zr(i,e,o),t!==null&&(vn(t,i,o,s),ic(t,i,o)),o}function Hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function b0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function iy(t,e){b0(t,e),(t=t.alternate)&&b0(t,e)}function kR(){return null}var mT=typeof reportError=="function"?reportError:function(t){console.error(t)};function sy(t){this._internalRoot=t}Wh.prototype.render=sy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Kh(t,e,null,null)};Wh.prototype.unmount=sy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ji(function(){Kh(null,t,null,null)}),e[ar]=null}};function Wh(t){this._internalRoot=t}Wh.prototype.unstable_scheduleHydration=function(t){if(t){var e=KE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&HE(t)}};function oy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function A0(){}function CR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Hc(o);s.call(u)}}var o=pT(e,r,t,0,null,!1,!1,"",A0);return t._reactRootContainer=o,t[ar]=o.current,sl(t.nodeType===8?t.parentNode:t),Ji(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Hc(l);a.call(u)}}var l=ry(t,0,!1,null,null,!1,!1,"",A0);return t._reactRootContainer=l,t[ar]=l.current,sl(t.nodeType===8?t.parentNode:t),Ji(function(){Kh(e,l,n,r)}),l}function Gh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Hc(o);a.call(l)}}Kh(e,o,t,i)}else o=CR(n,e,t,i,r);return Hc(o)}jE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ea(e.pendingLanes);n!==0&&(kg(e,n|1),Mt(e,Ae()),!(ee&6)&&(mo=Ae()+500,di()))}break;case 13:Ji(function(){var r=lr(t,1);if(r!==null){var i=Et();vn(r,t,1,i)}}),iy(t,1)}};Cg=function(t){if(t.tag===13){var e=lr(t,134217728);if(e!==null){var n=Et();vn(e,t,134217728,n)}iy(t,134217728)}};qE=function(t){if(t.tag===13){var e=qr(t),n=lr(t,e);if(n!==null){var r=Et();vn(n,t,e,r)}iy(t,e)}};KE=function(){return se};WE=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};Np=function(t,e,n){switch(e){case"input":if(Ep(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Fh(r);if(!i)throw Error(A(90));TE(r),Ep(r,i)}}}break;case"textarea":kE(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};PE=Zg;xE=Ji;var bR={usingClientEntryPoint:!1,Events:[Kl,Fs,Fh,DE,RE,Zg]},la={findFiberByHostInstance:Pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},AR={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ME(t),t===null?null:t.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||kR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fu.isDisabled&&Fu.supportsFiber)try{Oh=Fu.inject(AR),On=Fu}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bR;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oy(e))throw Error(A(200));return SR(t,e,null,n)};Ht.createRoot=function(t,e){if(!oy(t))throw Error(A(299));var n=!1,r="",i=mT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ry(t,1,!1,null,null,n,!1,r,i),t[ar]=e.current,sl(t.nodeType===8?t.parentNode:t),new sy(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=ME(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return Ji(t)};Ht.hydrate=function(t,e,n){if(!Hh(e))throw Error(A(200));return Gh(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!oy(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pT(e,null,t,1,n??null,i,!1,s,o),t[ar]=e.current,sl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wh(e)};Ht.render=function(t,e,n){if(!Hh(e))throw Error(A(200));return Gh(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Hh(t))throw Error(A(40));return t._reactRootContainer?(Ji(function(){Gh(null,null,t,!1,function(){t._reactRootContainer=null,t[ar]=null})}),!0):!1};Ht.unstable_batchedUpdates=Zg;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hh(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Gh(t,e,n,!1,r)};Ht.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ht})(kN);var N0=pp;fp.createRoot=N0.createRoot,fp.hydrateRoot=N0.hydrateRoot;const NR="/assets/Logo-e60e83a3.png";/**
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
 */const gT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},DR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new RR;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PR=function(t){const e=gT(t);return yT.encodeByteArray(e,!0)},Gc=function(t){return PR(t).replace(/\./g,"")},vT=function(t){try{return yT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Qc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xR(n)||(t[n]=Qc(t[n],e[n]));return t}function xR(t){return t!=="__proto__"}/**
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
 */function OR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LR=()=>OR().__FIREBASE_DEFAULTS__,MR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$R=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vT(t[1]);return e&&JSON.parse(e)},Qh=()=>{try{return LR()||MR()||$R()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wT=t=>{var e,n;return(n=(e=Qh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_T=t=>{const e=wT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},FR=()=>{var t;return(t=Qh())===null||t===void 0?void 0:t.config},IT=t=>{var e;return(e=Qh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class UR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ET(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gc(JSON.stringify(n)),Gc(JSON.stringify(o)),a].join(".")}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function ay(){var t;const e=(t=Qh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BR(){return typeof self=="object"&&self.self===self}function TT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ly(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ST(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zR(){return!ay()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zi(){try{return typeof indexedDB=="object"}catch{return!1}}function jR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function qR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const KR="FirebaseError";class rt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KR,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jn.prototype.create)}}class jn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?WR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rt(i,a,r)}}function WR(t,e){return t.replace(HR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HR=/\{\$([^}]+)}/g;/**
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
 */function D0(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function GR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(R0(s)&&R0(o)){if(!Yc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R0(t){return t!==null&&typeof t=="object"}/**
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
 */function Lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Sa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kT(t,e){const n=new QR(t,e);return n.subscribe.bind(n)}class QR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Sf),i.error===void 0&&(i.error=Sf),i.complete===void 0&&(i.complete=Sf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sf(){}/**
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
 */function B(t){return t&&t._delegate?t._delegate:t}class lt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ki="[DEFAULT]";/**
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
 */let XR=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZR(e))try{this.getOrInitializeService({instanceIdentifier:ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ki){return this.instances.has(e)}getOptions(e=ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ki){return this.component?this.component.multipleInstances?e:ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function JR(t){return t===ki?void 0:t}function ZR(t){return t.instantiationMode==="EAGER"}/**
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
 */class eP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const uy=[];var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const CT={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},tP=J.INFO,nP={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},rP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yh{constructor(e){this.name=e,this._logLevel=tP,this._logHandler=rP,this._userLogHandler=null,uy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}function iP(t){uy.forEach(e=>{e.setLogLevel(t)})}function sP(t,e){for(const n of uy){let r=null;e&&e.level&&(r=CT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:J[s].toLowerCase(),message:a,args:o,type:i.name})}}}const oP=(t,e)=>e.some(n=>t instanceof n);let P0,x0;function aP(){return P0||(P0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lP(){return x0||(x0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bT=new WeakMap,lm=new WeakMap,AT=new WeakMap,kf=new WeakMap,cy=new WeakMap;function uP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Wr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bT.set(n,t)}).catch(()=>{}),cy.set(e,t),e}function cP(t){if(lm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});lm.set(t,e)}let um={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||AT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hP(t){um=t(um)}function dP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cf(this),e,...n);return AT.set(r,e.sort?e.sort():[e]),Wr(r)}:lP().includes(t)?function(...e){return t.apply(Cf(this),e),Wr(bT.get(this))}:function(...e){return Wr(t.apply(Cf(this),e))}}function fP(t){return typeof t=="function"?dP(t):(t instanceof IDBTransaction&&cP(t),oP(t,aP())?new Proxy(t,um):t)}function Wr(t){if(t instanceof IDBRequest)return uP(t);if(kf.has(t))return kf.get(t);const e=fP(t);return e!==t&&(kf.set(t,e),cy.set(e,t)),e}const Cf=t=>cy.get(t);function pP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Wr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wr(o.result),l.oldVersion,l.newVersion,Wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const mP=["get","getKey","getAll","getAllKeys","count"],gP=["put","add","delete","clear"],bf=new Map;function O0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bf.get(e))return bf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return bf.set(e,s),s}hP(t=>({...t,get:(e,n,r)=>O0(e,n)||t.get(e,n,r),has:(e,n)=>!!O0(e,n)||t.has(e,n)}));/**
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
 */class yP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cm="@firebase/app",L0="0.9.9";/**
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
 */const es=new Yh("@firebase/app"),wP="@firebase/app-compat",_P="@firebase/analytics-compat",IP="@firebase/analytics",EP="@firebase/app-check-compat",TP="@firebase/app-check",SP="@firebase/auth",kP="@firebase/auth-compat",CP="@firebase/database",bP="@firebase/database-compat",AP="@firebase/functions",NP="@firebase/functions-compat",DP="@firebase/installations",RP="@firebase/installations-compat",PP="@firebase/messaging",xP="@firebase/messaging-compat",OP="@firebase/performance",LP="@firebase/performance-compat",MP="@firebase/remote-config",$P="@firebase/remote-config-compat",FP="@firebase/storage",UP="@firebase/storage-compat",VP="@firebase/firestore",BP="@firebase/firestore-compat",zP="firebase",jP="9.21.0";/**
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
 */const Xr="[DEFAULT]",qP={[cm]:"fire-core",[wP]:"fire-core-compat",[IP]:"fire-analytics",[_P]:"fire-analytics-compat",[TP]:"fire-app-check",[EP]:"fire-app-check-compat",[SP]:"fire-auth",[kP]:"fire-auth-compat",[CP]:"fire-rtdb",[bP]:"fire-rtdb-compat",[AP]:"fire-fn",[NP]:"fire-fn-compat",[DP]:"fire-iid",[RP]:"fire-iid-compat",[PP]:"fire-fcm",[xP]:"fire-fcm-compat",[OP]:"fire-perf",[LP]:"fire-perf-compat",[MP]:"fire-rc",[$P]:"fire-rc-compat",[FP]:"fire-gcs",[UP]:"fire-gcs-compat",[VP]:"fire-fst",[BP]:"fire-fst-compat","fire-js":"fire-js",[zP]:"fire-js-all"};/**
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
 */const Jr=new Map,pl=new Map;function Xc(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function NT(t,e){t.container.addOrOverwriteComponent(e)}function $t(t){const e=t.name;if(pl.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;pl.set(e,t);for(const n of Jr.values())Xc(n,t);return!0}function fi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function KP(t,e,n=Xr){fi(t,e).clearInstance(n)}function WP(){pl.clear()}/**
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
 */const HP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rr=new jn("app","Firebase",HP);/**
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
 */let GP=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}};/**
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
 */const pr=jP;function Xh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(n||(n=FR()),!n)throw rr.create("no-options");const s=Jr.get(i);if(s){if(Yc(n,s.options)&&Yc(r,s.config))return s;throw rr.create("duplicate-app",{appName:i})}const o=new eP(i);for(const l of pl.values())o.addComponent(l);const a=new GP(n,r,o);return Jr.set(i,a),a}function Jh(t=Xr){const e=Jr.get(t);if(!e&&t===Xr)return Xh();if(!e)throw rr.create("no-app",{appName:t});return e}function QP(){return Array.from(Jr.values())}async function DT(t){const e=t.name;Jr.has(e)&&(Jr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function it(t,e,n){var r;let i=(r=qP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(a.join(" "));return}$t(new lt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function RT(t,e){if(t!==null&&typeof t!="function")throw rr.create("invalid-log-argument");sP(t,e)}function PT(t){iP(t)}/**
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
 */const YP="firebase-heartbeat-database",XP=1,ml="firebase-heartbeat-store";let Af=null;function xT(){return Af||(Af=pP(YP,XP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ml)}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),Af}async function JP(t){try{return(await xT()).transaction(ml).objectStore(ml).get(OT(t))}catch(e){if(e instanceof rt)es.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function M0(t,e){try{const r=(await xT()).transaction(ml,"readwrite");return await r.objectStore(ml).put(e,OT(t)),r.done}catch(n){if(n instanceof rt)es.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(r.message)}}}function OT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ZP=1024,ex=30*24*60*60*1e3;class tx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ex}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$0(),{heartbeatsToSend:n,unsentEntries:r}=nx(this._heartbeatsCache.heartbeats),i=Gc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $0(){return new Date().toISOString().substring(0,10)}function nx(t,e=ZP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),F0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),F0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zi()?jR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await JP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return M0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return M0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function F0(t){return Gc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ix(t){$t(new lt("platform-logger",e=>new yP(e),"PRIVATE")),$t(new lt("heartbeat",e=>new tx(e),"PRIVATE")),it(cm,L0,t),it(cm,L0,"esm2017"),it("fire-js","")}ix("");const sx=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:rt,SDK_VERSION:pr,_DEFAULT_ENTRY_NAME:Xr,_addComponent:Xc,_addOrOverwriteComponent:NT,_apps:Jr,_clearComponents:WP,_components:pl,_getProvider:fi,_registerComponent:$t,_removeServiceInstance:KP,deleteApp:DT,getApp:Jh,getApps:QP,initializeApp:Xh,onLog:RT,registerVersion:it,setLogLevel:PT},Symbol.toStringTag,{value:"Module"}));/**
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
 */class ox{constructor(e,n){this._delegate=e,this.firebase=n,Xc(e,new lt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),DT(this._delegate)))}_getService(e,n=Xr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Xr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Xc(this._delegate,e)}_addOrOverwriteComponent(e){NT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const ax={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},U0=new jn("app-compat","Firebase",ax);/**
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
 */function lx(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:it,setLogLevel:PT,onLog:RT,apps:null,SDK_VERSION:pr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:sx}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Xr,!D0(e,u))throw U0.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=Xh(u,c);if(D0(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if($t(u)&&u.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw U0.create("invalid-app-argument",{appName:c});return p[h]()};u.serviceProps!==void 0&&Qc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,c).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function LT(){const t=lx(ox);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:LT,extendNamespace:e,createSubscribe:kT,ErrorFactory:jn,deepExtend:Qc});function e(n){Qc(t,n)}return t}const ux=LT();/**
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
 */const V0=new Yh("@firebase/app-compat"),cx="@firebase/app-compat",hx="0.2.9";/**
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
 */function dx(t){it(cx,hx,t)}/**
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
 */if(BR()&&self.firebase!==void 0){V0.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&V0.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Mo=ux;dx();function hy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ua={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Cs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function fx(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function MT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const px=fx,mx=MT,$T=new jn("auth","Firebase",MT());/**
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
 */const Jc=new Yh("@firebase/auth");function gx(t,...e){Jc.logLevel<=J.WARN&&Jc.warn(`Auth (${pr}): ${t}`,...e)}function hc(t,...e){Jc.logLevel<=J.ERROR&&Jc.error(`Auth (${pr}): ${t}`,...e)}/**
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
 */function He(t,...e){throw dy(t,...e)}function st(t,...e){return dy(t,...e)}function FT(t,e,n){const r=Object.assign(Object.assign({},mx()),{[e]:n});return new jn("auth","Firebase",r).create(e,{appName:t.name})}function $o(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&He(t,"argument-error"),FT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function dy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $T.create(t,...e)}function N(t,e,...n){if(!t)throw dy(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hc(e),new Error(e)}function _n(t,e){t||Dn(e)}/**
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
 */function gl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fy(){return B0()==="http:"||B0()==="https:"}function B0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fy()||TT()||"connection"in navigator)?navigator.onLine:!0}function vx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hl{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=VR()||ly()}get(){return yx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function py(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class UT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _x=new Hl(3e4,6e4);function $e(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Be(t,e,n,r,i={}){return VT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Lo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),UT.fetch()(BT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function VT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wx),e);try{const i=new Ix(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ka(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ka(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ka(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ka(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw FT(t,c,u);He(t,c)}}catch(i){if(i instanceof rt)throw i;He(t,"network-request-failed",{message:String(i)})}}async function mr(t,e,n,r,i={}){const s=await Be(t,e,n,r,i);return"mfaPendingCredential"in s&&He(t,"multi-factor-auth-required",{_serverResponse:s}),s}function BT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?py(t.config,i):`${t.config.apiScheme}://${i}`}class Ix{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),_x.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ka(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=st(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Ex(t,e){return Be(t,"POST","/v1/accounts:delete",e)}async function Tx(t,e){return Be(t,"POST","/v1/accounts:update",e)}async function Sx(t,e){return Be(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ba(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kx(t,e=!1){const n=B(t),r=await n.getIdToken(e),i=Zh(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ba(Nf(i.auth_time)),issuedAtTime:Ba(Nf(i.iat)),expirationTime:Ba(Nf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nf(t){return Number(t)*1e3}function Zh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hc("JWT malformed, contained fewer than 3 sections"),null;try{const i=vT(n);return i?JSON.parse(i):(hc("Failed to decode base64 JWT payload"),null)}catch(i){return hc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cx(t){const e=Zh(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function cr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rt&&bx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ax{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ba(this.lastLoginAt),this.creationTime=Ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await cr(t,Sx(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Rx(s.providerUserInfo):[],a=Dx(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Nx(t){const e=B(t);await yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Rx(t){return t.map(e=>{var{providerId:n}=e,r=hy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Px(t,e){const n=await VT(t,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=BT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",UT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class vl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Px(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vl;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vl,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function Tr(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ji{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=hy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ax(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await cr(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kx(this,e)}reload(){return Nx(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ji(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cr(this,Ex(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:S,providerData:b,stsTokenManager:D}=n;N(g&&D,e,"internal-error");const R=vl.fromJSON(this.name,D);N(typeof g=="string",e,"internal-error"),Tr(h,e.name),Tr(d,e.name),N(typeof w=="boolean",e,"internal-error"),N(typeof S=="boolean",e,"internal-error"),Tr(p,e.name),Tr(y,e.name),Tr(v,e.name),Tr(I,e.name),Tr(m,e.name),Tr(f,e.name);const Y=new ji({uid:g,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:S,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:R,createdAt:m,lastLoginAt:f});return b&&Array.isArray(b)&&(Y.providerData=b.map(q=>Object.assign({},q))),I&&(Y._redirectEventId=I),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new vl;i.updateFromServerResponse(n);const s=new ji({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yl(s),s}}/**
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
 */const z0=new Map;function zt(t){_n(t instanceof Function,"Expected a class definition");let e=z0.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,z0.set(t,e),e)}/**
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
 */class jT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jT.type="NONE";const go=jT;/**
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
 */function qi(t,e,n){return`firebase:${t}:${e}:${n}`}class Zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qi(this.userKey,i.apiKey,s),this.fullPersistenceKey=qi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ji._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zs(zt(go),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||zt(go);const o=qi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ji._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Zs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zs(s,e,r))}}/**
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
 */function j0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(WT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HT(e))return"Blackberry";if(GT(e))return"Webos";if(my(e))return"Safari";if((e.includes("chrome/")||KT(e))&&!e.includes("edge/"))return"Chrome";if(Gl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qT(t=Te()){return/firefox\//i.test(t)}function my(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KT(t=Te()){return/crios\//i.test(t)}function WT(t=Te()){return/iemobile/i.test(t)}function Gl(t=Te()){return/android/i.test(t)}function HT(t=Te()){return/blackberry/i.test(t)}function GT(t=Te()){return/webos/i.test(t)}function Fo(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xx(t=Te()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function Ox(t=Te()){var e;return Fo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lx(){return ST()&&document.documentMode===10}function QT(t=Te()){return Fo(t)||Gl(t)||GT(t)||HT(t)||/windows phone/i.test(t)||WT(t)}function Mx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function YT(t,e=[]){let n;switch(t){case"Browser":n=j0(Te());break;case"Worker":n=`${j0(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pr}/${r}`}/**
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
 */async function $x(t){return(await Be(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function XT(t,e){return Be(t,"GET","/v2/recaptchaConfig",$e(t,e))}/**
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
 */function q0(t){return t!==void 0&&t.getResponse!==void 0}function K0(t){return t!==void 0&&t.enterprise!==void 0}class JT{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Fx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gy(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=st("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Fx().appendChild(r)})}function ZT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ux="https://www.google.com/recaptcha/enterprise.js?render=",Vx="recaptcha-enterprise",Bx="NO_RECAPTCHA";class eS{constructor(e){this.type=Vx,this.auth=Pe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{XT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new JT(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;K0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Bx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&K0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}gy(Ux+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Zr(t,e,n,r=!1){const i=new eS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class zx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class jx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new W0(this),this.idTokenSubscription=new W0(this),this.beforeStateQueue=new zx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$T,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?B(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}async initializeRecaptchaConfig(){const e=await XT(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new JT(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new eS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zt(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=YT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pe(t){return B(t)}class W0{constructor(e){this.auth=e,this.observer=null,this.addObserver=kT(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function qx(t,e){const n=fi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yc(s,e??{}))return i;He(i,"already-initialized")}return n.initialize({options:e})}function Kx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tS(t,e,n){const r=Pe(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=nS(e),{host:o,port:a}=Wx(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Hx()}function nS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Wx(t){const e=nS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:H0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:H0(o)}}}function H0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Hx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Uo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
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
 */async function rS(t,e){return Be(t,"POST","/v1/accounts:resetPassword",$e(t,e))}async function iS(t,e){return Be(t,"POST","/v1/accounts:update",e)}async function Gx(t,e){return Be(t,"POST","/v1/accounts:update",$e(t,e))}/**
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
 */async function Df(t,e){return mr(t,"POST","/v1/accounts:signInWithPassword",$e(t,e))}async function ed(t,e){return Be(t,"POST","/v1/accounts:sendOobCode",$e(t,e))}async function Qx(t,e){return ed(t,e)}async function Rf(t,e){return ed(t,e)}async function Pf(t,e){return ed(t,e)}async function Yx(t,e){return ed(t,e)}/**
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
 */async function Xx(t,e){return mr(t,"POST","/v1/accounts:signInWithEmailLink",$e(t,e))}async function Jx(t,e){return mr(t,"POST","/v1/accounts:signInWithEmailLink",$e(t,e))}/**
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
 */class wl extends Uo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new wl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Zr(e,r,"signInWithPassword");return Df(e,i)}else return Df(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Zr(e,r,"signInWithPassword");return Df(e,s)}else return Promise.reject(i)});case"emailLink":return Xx(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return iS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Jx(e,{idToken:n,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ir(t,e){return mr(t,"POST","/v1/accounts:signInWithIdp",$e(t,e))}/**
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
 */const Zx="http://localhost";class Un extends Uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):He("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=hy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Un(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ir(e,n)}buildRequest(){const e={requestUri:Zx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lo(n)}return e}}/**
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
 */async function eO(t,e){return Be(t,"POST","/v1/accounts:sendVerificationCode",$e(t,e))}async function tO(t,e){return mr(t,"POST","/v1/accounts:signInWithPhoneNumber",$e(t,e))}async function nO(t,e){const n=await mr(t,"POST","/v1/accounts:signInWithPhoneNumber",$e(t,e));if(n.temporaryProof)throw ka(t,"account-exists-with-different-credential",n);return n}const rO={USER_NOT_FOUND:"user-not-found"};async function iO(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return mr(t,"POST","/v1/accounts:signInWithPhoneNumber",$e(t,n),rO)}/**
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
 */class Ki extends Uo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ki({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ki({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return tO(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return nO(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return iO(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ki({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function sO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oO(t){const e=Ks(Sa(t)).link,n=e?Ks(Sa(e)).deep_link_id:null,r=Ks(Sa(t)).deep_link_id;return(r?Ks(Sa(r)).link:null)||r||n||e||t}class td{constructor(e){var n,r,i,s,o,a;const l=Ks(Sa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=sO((i=l.mode)!==null&&i!==void 0?i:null);N(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=oO(e);try{return new td(n)}catch{return null}}}/**
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
 */class pi{constructor(){this.providerId=pi.PROVIDER_ID}static credential(e,n){return wl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=td.parseLink(n);return N(r,"argument-error"),wl._fromEmailAndCode(e,r.code,r.tenantId)}}pi.PROVIDER_ID="password";pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class gr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vo extends gr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class eo extends Vo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),Un._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),Un._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return eo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return eo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new eo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Cn extends Vo{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Un._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class bn extends Vo{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */const aO="http://localhost";class yo extends Uo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ir(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new yo(r,s)}static _create(e,n){return new yo(e,n)}buildRequest(){return{requestUri:aO,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const lO="saml.";class Zc extends gr{constructor(e){N(e.startsWith(lO),"argument-error"),super(e)}static credentialFromResult(e){return Zc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Zc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=yo.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return yo._create(r,n)}catch{return null}}}/**
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
 */class An extends Vo{constructor(){super("twitter.com")}static credential(e,n){return Un._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return An.credential(n,r)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
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
 */async function dc(t,e){return mr(t,"POST","/v1/accounts:signUp",$e(t,e))}/**
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
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ji._fromIdTokenResponse(e,r,i),o=G0(r);return new sn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=G0(r);return new sn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function G0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function uO(t){var e;const n=Pe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new sn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await dc(n,{returnSecureToken:!0}),i=await sn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class eh extends rt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,eh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new eh(e,n,r,i)}}function sS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?eh._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function oS(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function cO(t,e){const n=B(t);await nd(!0,n,e);const{providerUserInfo:r}=await Tx(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=oS(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function yy(t,e,n=!1){const r=await cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sn._forOperation(t,"link",r)}async function nd(t,e,n){await yl(e);const r=oS(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";N(r.has(n)===t,e.auth,i)}/**
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
 */async function aS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await cr(t,sS(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=Zh(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),sn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&He(r,"user-mismatch"),s}}/**
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
 */async function lS(t,e,n=!1){const r="signIn",i=await sS(t,r,e),s=await sn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function rd(t,e){return lS(Pe(t),e)}async function uS(t,e){const n=B(t);return await nd(!1,n,e.providerId),yy(n,e)}async function cS(t,e){return aS(B(t),e)}/**
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
 */async function hO(t,e){return mr(t,"POST","/v1/accounts:signInWithCustomToken",$e(t,e))}/**
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
 */async function dO(t,e){const n=Pe(t),r=await hO(n,{token:e,returnSecureToken:!0}),i=await sn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Ql{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?vy._fromServerResponse(e,n):"totpInfo"in n?wy._fromServerResponse(e,n):He(e,"internal-error")}}class vy extends Ql{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new vy(n)}}class wy extends Ql{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new wy(n)}}/**
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
 */function to(t,e,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function fO(t,e,n){var r;const i=Pe(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Zr(i,s,"getOobCode",!0);n&&to(i,o,n),await Rf(i,o)}else n&&to(i,s,n),await Rf(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Zr(i,s,"getOobCode",!0);n&&to(i,a,n),await Rf(i,a)}else return Promise.reject(o)})}async function pO(t,e,n){await rS(B(t),{oobCode:e,newPassword:n})}async function mO(t,e){await Gx(B(t),{oobCode:e})}async function hS(t,e){const n=B(t),r=await rS(n,{oobCode:e}),i=r.requestType;switch(N(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(r.mfaInfo,n,"internal-error");default:N(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Ql._fromServerResponse(Pe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function gO(t,e){const{data:n}=await hS(B(t),e);return n.email}async function yO(t,e,n){var r;const i=Pe(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Zr(i,s,"signUpPassword");o=dc(i,u)}else o=dc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Zr(i,s,"signUpPassword");return dc(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await sn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function vO(t,e,n){return rd(B(t),pi.credential(e,n))}/**
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
 */async function wO(t,e,n){var r;const i=Pe(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){N(l.handleCodeInApp,i,"argument-error"),l&&to(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Zr(i,s,"getOobCode",!0);o(a,n),await Pf(i,a)}else o(s,n),await Pf(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await Zr(i,s,"getOobCode",!0);o(l,n),await Pf(i,l)}else return Promise.reject(a)})}function _O(t,e){const n=td.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function IO(t,e,n){const r=B(t),i=pi.credentialWithLink(e,n||gl());return N(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),rd(r,i)}/**
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
 */async function EO(t,e){return Be(t,"POST","/v1/accounts:createAuthUri",$e(t,e))}/**
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
 */async function TO(t,e){const n=fy()?gl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await EO(B(t),r);return i||[]}async function SO(t,e){const n=B(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&to(n.auth,i,e);const{email:s}=await Qx(n.auth,i);s!==t.email&&await t.reload()}async function kO(t,e,n){const r=B(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&to(r.auth,s,n);const{email:o}=await Yx(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function CO(t,e){return Be(t,"POST","/v1/accounts:update",e)}/**
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
 */async function bO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=B(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await cr(r,CO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function AO(t,e){return dS(B(t),e,null)}function NO(t,e){return dS(B(t),null,e)}async function dS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await cr(t,iS(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function DO(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Zh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new no(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new RO(s,i);case"github.com":return new PO(s,i);case"google.com":return new xO(s,i);case"twitter.com":return new OO(s,i,t.screenName||null);case"custom":case"anonymous":return new no(s,null);default:return new no(s,r,i)}}class no{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class fS extends no{constructor(e,n,r,i){super(e,n,r),this.username=i}}class RO extends no{constructor(e,n){super(e,"facebook.com",n)}}class PO extends fS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class xO extends no{constructor(e,n){super(e,"google.com",n)}}class OO extends fS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function LO(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:DO(n)}function MO(t,e,n,r){return B(t).onIdTokenChanged(e,n,r)}function $O(t,e,n){return B(t).beforeAuthStateChanged(e,n)}class Li{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Li("enroll",e,n)}static _fromMfaPendingCredential(e){return new Li("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Li._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Li._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class _y{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Pe(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Ql._fromServerResponse(r,a));N(i.mfaPendingCredential,r,"internal-error");const o=Li._fromMfaPendingCredential(i.mfaPendingCredential);return new _y(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await sn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,r,"internal-error"),sn._forOperation(n.user,n.operationType,u);default:He(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function FO(t,e){var n;const r=B(t),i=e;return N(e.customData.operationType,r,"argument-error"),N((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),_y._fromError(r,i)}/**
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
 */function UO(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:start",$e(t,e))}function VO(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:finalize",$e(t,e))}function BO(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:withdraw",$e(t,e))}class Iy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Ql._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Iy(e)}async getSession(){return Li._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await cr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await cr(this.user,BO(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const xf=new WeakMap;function zO(t){const e=B(t);return xf.has(e)||xf.set(e,Iy._fromUser(e)),xf.get(e)}const th="__sak";/**
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
 */class pS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(th,"1"),this.storage.removeItem(th),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jO(){const t=Te();return my(t)||Fo(t)}const qO=1e3,KO=10;class mS extends pS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jO()&&Mx(),this.fallbackToPolling=QT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Lx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mS.type="LOCAL";const id=mS;/**
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
 */class gS extends pS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gS.type="SESSION";const ei=gS;/**
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
 */function WO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new sd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await WO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sd.receivers=[];/**
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
 */function Yl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class HO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Yl("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Oe(){return window}function GO(t){Oe().location.href=t}/**
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
 */function Ey(){return typeof Oe().WorkerGlobalScope<"u"&&typeof Oe().importScripts=="function"}async function QO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XO(){return Ey()?self:null}/**
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
 */const yS="firebaseLocalStorageDb",JO=1,nh="firebaseLocalStorage",vS="fbase_key";class Xl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function od(t,e){return t.transaction([nh],e?"readwrite":"readonly").objectStore(nh)}function ZO(){const t=indexedDB.deleteDatabase(yS);return new Xl(t).toPromise()}function hm(){const t=indexedDB.open(yS,JO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nh,{keyPath:vS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nh)?e(r):(r.close(),await ZO(),e(await hm()))})})}async function Q0(t,e,n){const r=od(t,!0).put({[vS]:e,value:n});return new Xl(r).toPromise()}async function e2(t,e){const n=od(t,!1).get(e),r=await new Xl(n).toPromise();return r===void 0?null:r.value}function Y0(t,e){const n=od(t,!0).delete(e);return new Xl(n).toPromise()}const t2=800,n2=3;class wS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>n2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sd._getInstance(XO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QO(),!this.activeServiceWorker)return;this.sender=new HO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hm();return await Q0(e,th,"1"),await Y0(e,th),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Q0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>e2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Y0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=od(i,!1).getAll();return new Xl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wS.type="LOCAL";const vo=wS;/**
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
 */function r2(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:start",$e(t,e))}function i2(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:finalize",$e(t,e))}/**
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
 */const s2=500,o2=6e4,Uu=1e12;class a2{constructor(e){this.auth=e,this.counter=Uu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new l2(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Uu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Uu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Uu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class l2{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=u2(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},o2)},s2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function u2(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Of=ZT("rcb"),c2=new Hl(3e4,6e4),h2="https://www.google.com/recaptcha/api.js?";class d2{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Oe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(f2(n),e,"argument-error"),this.shouldResolveImmediately(n)&&q0(Oe().grecaptcha)?Promise.resolve(Oe().grecaptcha):new Promise((r,i)=>{const s=Oe().setTimeout(()=>{i(st(e,"network-request-failed"))},c2.get());Oe()[Of]=()=>{Oe().clearTimeout(s),delete Oe()[Of];const a=Oe().grecaptcha;if(!a||!q0(a)){i(st(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${h2}?${Lo({onload:Of,render:"explicit",hl:n})}`;gy(o).catch(()=>{clearTimeout(s),i(st(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Oe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function f2(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class p2{async load(e){return new a2(e)}clearedOneInstance(){}}/**
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
 */const _S="recaptcha",m2={theme:"light",type:"image"};let g2=class{constructor(e,n=Object.assign({},m2),r){this.parameters=n,this.type=_S,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Pe(r),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new p2:new d2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Oe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(fy()&&!Ey(),this.auth,"internal-error"),await y2(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await $x(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function y2(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Ty{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ki._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function v2(t,e,n){const r=Pe(t),i=await ad(r,e,B(n));return new Ty(i,s=>rd(r,s))}async function w2(t,e,n){const r=B(t);await nd(!1,r,"phone");const i=await ad(r.auth,e,B(n));return new Ty(i,s=>uS(r,s))}async function _2(t,e,n){const r=B(t),i=await ad(r.auth,e,B(n));return new Ty(i,s=>cS(r,s))}async function ad(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===_S,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await UO(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await r2(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await eO(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function I2(t,e){await yy(B(t),e)}/**
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
 */let ts=class fc{constructor(e){this.providerId=fc.PROVIDER_ID,this.auth=Pe(e)}verifyPhoneNumber(e,n){return ad(this.auth,e,B(n))}static credential(e,n){return Ki._fromVerification(e,n)}static credentialFromResult(e){const n=e;return fc.credentialFromTaggedObject(n)}static credentialFromError(e){return fc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ki._fromTokenResponse(n,r):null}};ts.PROVIDER_ID="phone";ts.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function vs(t,e){return e?zt(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sy extends Uo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function E2(t){return lS(t.auth,new Sy(t),t.bypassAuthState)}function T2(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),aS(n,new Sy(t),t.bypassAuthState)}async function S2(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),yy(n,new Sy(t),t.bypassAuthState)}/**
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
 */class IS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E2;case"linkViaPopup":case"linkViaRedirect":return S2;case"reauthViaPopup":case"reauthViaRedirect":return T2;default:He(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const k2=new Hl(2e3,1e4);async function ES(t,e,n){const r=Pe(t);$o(t,e,gr);const i=vs(r,n);return new Xn(r,"signInViaPopup",e,i).executeNotNull()}async function C2(t,e,n){const r=B(t);$o(r.auth,e,gr);const i=vs(r.auth,n);return new Xn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function b2(t,e,n){const r=B(t);$o(r.auth,e,gr);const i=vs(r.auth,n);return new Xn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Xn extends IS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=Yl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,k2.get())};e()}}Xn.currentPopupAction=null;/**
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
 */const A2="pendingRedirect",za=new Map;class N2 extends IS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=za.get(this.auth._key());if(!e){try{const r=await D2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}za.set(this.auth._key(),e)}return this.bypassAuthState||za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D2(t,e){const n=SS(e),r=TS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ky(t,e){return TS(t)._set(SS(e),"true")}function R2(){za.clear()}function Cy(t,e){za.set(t._key(),e)}function TS(t){return zt(t._redirectPersistence)}function SS(t){return qi(A2,t.config.apiKey,t.name)}/**
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
 */function P2(t,e,n){return x2(t,e,n)}async function x2(t,e,n){const r=Pe(t);$o(t,e,gr),await r._initializationPromise;const i=vs(r,n);return await ky(i,r),i._openRedirect(r,e,"signInViaRedirect")}function O2(t,e,n){return L2(t,e,n)}async function L2(t,e,n){const r=B(t);$o(r.auth,e,gr),await r.auth._initializationPromise;const i=vs(r.auth,n);await ky(i,r.auth);const s=await kS(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function M2(t,e,n){return $2(t,e,n)}async function $2(t,e,n){const r=B(t);$o(r.auth,e,gr),await r.auth._initializationPromise;const i=vs(r.auth,n);await nd(!1,r,e.providerId),await ky(i,r.auth);const s=await kS(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function F2(t,e){return await Pe(t)._initializationPromise,ld(t,e,!1)}async function ld(t,e,n=!1){const r=Pe(t),i=vs(r,e),o=await new N2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function kS(t){const e=Yl(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const U2=10*60*1e3;class CS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!V2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(st(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U2&&this.cachedEventUids.clear(),this.cachedEventUids.has(X0(e))}saveEventToCache(e){this.cachedEventUids.add(X0(e)),this.lastProcessedEventTime=Date.now()}}function X0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function V2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bS(t);default:return!1}}/**
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
 */async function AS(t,e={}){return Be(t,"GET","/v1/projects",e)}/**
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
 */const B2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,z2=/^https?/;async function j2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AS(t);for(const n of e)try{if(q2(n))return}catch{}He(t,"unauthorized-domain")}function q2(t){const e=gl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!z2.test(n))return!1;if(B2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const K2=new Hl(3e4,6e4);function J0(){const t=Oe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function W2(t){return new Promise((e,n)=>{var r,i,s;function o(){J0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{J0(),n(st(t,"network-request-failed"))},timeout:K2.get()})}if(!((i=(r=Oe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Oe().gapi)===null||s===void 0)&&s.load)o();else{const a=ZT("iframefcb");return Oe()[a]=()=>{gapi.load?o():n(st(t,"network-request-failed"))},gy(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw pc=null,e})}let pc=null;function H2(t){return pc=pc||W2(t),pc}/**
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
 */const G2=new Hl(5e3,15e3),Q2="__/auth/iframe",Y2="emulator/auth/iframe",X2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Z2(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?py(e,Y2):`https://${t.config.authDomain}/${Q2}`,r={apiKey:e.apiKey,appName:t.name,v:pr},i=J2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Lo(r).slice(1)}`}async function eL(t){const e=await H2(t),n=Oe().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:Z2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=st(t,"network-request-failed"),a=Oe().setTimeout(()=>{s(o)},G2.get());function l(){Oe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const tL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nL=500,rL=600,iL="_blank",sL="http://localhost";class Z0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oL(t,e,n,r=nL,i=rL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Te().toLowerCase();n&&(a=KT(u)?iL:n),qT(u)&&(e=e||sL,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(Ox(u)&&a!=="_self")return aL(e||"",a),new Z0(null);const h=window.open(e||"",a,c);N(h,t,"popup-blocked");try{h.focus()}catch{}return new Z0(h)}function aL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lL="__/auth/handler",uL="emulator/auth/handler",cL=encodeURIComponent("fac");async function dm(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:pr,eventId:i};if(e instanceof gr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Vo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${cL}=${encodeURIComponent(l)}`:"";return`${hL(t)}?${Lo(a).slice(1)}${u}`}function hL({config:t}){return t.emulator?py(t,uL):`https://${t.authDomain}/${lL}`}/**
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
 */const Lf="webStorageSupport";class dL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ei,this._completeRedirectFn=ld,this._overrideRedirectResult=Cy}async _openPopup(e,n,r,i){var s;_n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await dm(e,n,r,gl(),i);return oL(e,o,Yl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await dm(e,n,r,gl(),i);return GO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eL(e),r=new CS(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lf,{type:Lf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Lf];o!==void 0&&n(!!o),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=j2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return QT()||my()||Fo()}}const NS=dL;class fL{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Dn("unexpected MultiFactorSessionType")}}}class by extends fL{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new by(e)}_finalizeEnroll(e,n,r){return VO(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return i2(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class DS{constructor(){}static assertion(e){return by._fromCredential(e)}}DS.FACTOR_ID="phone";var e_="@firebase/auth",t_="0.23.1";/**
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
 */class pL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gL(t){$t(new lt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),N(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:YT(t)},u=new jx(r,i,s,l);return Kx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$t(new lt("auth-internal",e=>{const n=Pe(e.getProvider("auth").getImmediate());return(r=>new pL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(e_,t_,mL(t)),it(e_,t_,"esm2017")}/**
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
 */const yL=5*60,vL=IT("authIdTokenMaxAge")||yL;let n_=null;const wL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vL)return;const i=n==null?void 0:n.token;n_!==i&&(n_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _L(t=Jh()){const e=fi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qx(t,{popupRedirectResolver:NS,persistence:[vo,id,ei]}),r=IT("authTokenSyncURL");if(r){const s=wL(r);$O(n,s,()=>s(n.currentUser)),MO(n,o=>s(o))}const i=wT("auth");return i&&tS(n,`http://${i}`),n}gL("Browser");/**
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
 */function ns(){return window}/**
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
 */const IL=2e3;async function EL(t,e,n){var r;const{BuildInfo:i}=ns();_n(e.sessionId,"AuthEvent did not contain a session ID");const s=await bL(e.sessionId),o={};return Fo()?o.ibi=i.packageName:Gl()?o.apn=i.packageName:He(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,dm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function TL(t){const{BuildInfo:e}=ns(),n={};Fo()?n.iosBundleId=e.packageName:Gl()?n.androidPackageName=e.packageName:He(t,"operation-not-supported-in-this-environment"),await AS(t,n)}function SL(t){const{cordova:e}=ns();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,xx()?"_blank":"_system","location=yes"),n(i)})})}async function kL(t,e,n){const{cordova:r}=ns();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(st(t,"redirect-cancelled-by-user"))},IL))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Gl()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function CL(t){var e,n,r,i,s,o,a,l,u,c;const h=ns();N(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function bL(t){const e=AL(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function AL(t){if(_n(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const NL=20;class DL extends CS{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function RL(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:OL(),postBody:null,tenantId:t.tenantId,error:st(t,"no-auth-event")}}function PL(t,e){return fm()._set(pm(t),e)}async function r_(t){const e=await fm()._get(pm(t));return e&&await fm()._remove(pm(t)),e}function xL(t,e){var n,r;const i=ML(e);if(i.includes("/__/auth/callback")){const s=mc(i),o=s.firebaseError?LL(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?st(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function OL(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<NL;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function fm(){return zt(id)}function pm(t){return qi("authEvent",t.config.apiKey,t.name)}function LL(t){try{return JSON.parse(t)}catch{return null}}function ML(t){const e=mc(t),n=e.link?decodeURIComponent(e.link):void 0,r=mc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return mc(i).link||i||r||n||t}function mc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ks(n.join("?"))}/**
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
 */const $L=500;class FL{constructor(){this._redirectPersistence=ei,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ld,this._overrideRedirectResult=Cy}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new DL(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){He(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){CL(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),R2(),await this._originValidation(e);const o=RL(e,r,i);await PL(e,o);const a=await EL(e,o,n),l=await SL(a);return kL(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TL(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ns(),o=setTimeout(async()=>{await r_(e),n.onEvent(i_())},$L),a=async c=>{clearTimeout(o);const h=await r_(e);let d=null;h&&(c!=null&&c.url)&&(d=xL(h,c.url)),n.onEvent(d||i_())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;ns().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const UL=FL;function i_(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:st("no-auth-event")}}/**
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
 */function VL(t,e){Pe(t)._logFramework(e)}var BL="@firebase/auth-compat",zL="0.4.1";/**
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
 */const jL=1e3;function ja(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function qL(){return ja()==="http:"||ja()==="https:"}function RS(t=Te()){return!!((ja()==="file:"||ja()==="ionic:"||ja()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function KL(){return ly()||ay()}function WL(){return ST()&&(document==null?void 0:document.documentMode)===11}function HL(t=Te()){return/Edge\/\d+/.test(t)}function GL(t=Te()){return WL()||HL(t)}function PS(){try{const t=self.localStorage,e=Yl();if(t)return t.setItem(e,"1"),t.removeItem(e),GL()?Zi():!0}catch{return Ay()&&Zi()}return!1}function Ay(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Mf(){return(qL()||TT()||RS())&&!KL()&&PS()&&!Ay()}function xS(){return RS()&&typeof document<"u"}async function QL(){return xS()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},jL);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function YL(){return typeof window<"u"?window:null}/**
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
 */const Vt={LOCAL:"local",NONE:"none",SESSION:"session"},ca=N,OS="persistence";function XL(t,e){if(ca(Object.values(Vt).includes(e),t,"invalid-persistence-type"),ly()){ca(e!==Vt.SESSION,t,"unsupported-persistence-type");return}if(ay()){ca(e===Vt.NONE,t,"unsupported-persistence-type");return}if(Ay()){ca(e===Vt.NONE||e===Vt.LOCAL&&Zi(),t,"unsupported-persistence-type");return}ca(e===Vt.NONE||PS(),t,"unsupported-persistence-type")}async function mm(t){await t._initializationPromise;const e=LS(),n=qi(OS,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function JL(t,e){const n=LS();if(!n)return[];const r=qi(OS,t,e);switch(n.getItem(r)){case Vt.NONE:return[go];case Vt.LOCAL:return[vo,ei];case Vt.SESSION:return[ei];default:return[]}}function LS(){var t;try{return((t=YL())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const ZL=N;class Lr{constructor(){this.browserResolver=zt(NS),this.cordovaResolver=zt(UL),this.underlyingResolver=null,this._redirectPersistence=ei,this._completeRedirectFn=ld,this._overrideRedirectResult=Cy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return xS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return ZL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await QL();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function MS(t){return t.unwrap()}function eM(t){return t.wrapped()}/**
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
 */function tM(t){return $S(t)}function nM(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new rM(t,FO(t,e))}else if(r){const i=$S(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function $S(t){const{_tokenResponse:e}=t instanceof rt?t.customData:t;if(!e)return null;if(!(t instanceof rt)&&"temporaryProof"in e&&"phoneNumber"in e)return ts.credentialFromResult(t);const n=e.providerId;if(!n||n===ua.PASSWORD)return null;let r;switch(n){case ua.GOOGLE:r=pn;break;case ua.FACEBOOK:r=Cn;break;case ua.GITHUB:r=bn;break;case ua.TWITTER:r=An;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?yo._create(n,a):Un._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new eo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof rt?r.credentialFromError(t):r.credentialFromResult(t)}function bt(t,e){return e.catch(n=>{throw n instanceof rt&&nM(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:tM(n),additionalUserInfo:LO(n),user:Jn.getOrCreate(i)}})}async function gm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>bt(t,n.confirm(r))}}class rM{constructor(e,n){this.resolver=n,this.auth=eM(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return bt(MS(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Jn{constructor(e){this._delegate=e,this.multiFactor=zO(e)}static getOrCreate(e){return Jn.USER_MAP.has(e)||Jn.USER_MAP.set(e,new Jn(e)),Jn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return bt(this.auth,uS(this._delegate,e))}async linkWithPhoneNumber(e,n){return gm(this.auth,w2(this._delegate,e,n))}async linkWithPopup(e){return bt(this.auth,b2(this._delegate,e,Lr))}async linkWithRedirect(e){return await mm(Pe(this.auth)),M2(this._delegate,e,Lr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return bt(this.auth,cS(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return gm(this.auth,_2(this._delegate,e,n))}reauthenticateWithPopup(e){return bt(this.auth,C2(this._delegate,e,Lr))}async reauthenticateWithRedirect(e){return await mm(Pe(this.auth)),O2(this._delegate,e,Lr)}sendEmailVerification(e){return SO(this._delegate,e)}async unlink(e){return await cO(this._delegate,e),this}updateEmail(e){return AO(this._delegate,e)}updatePassword(e){return NO(this._delegate,e)}updatePhoneNumber(e){return I2(this._delegate,e)}updateProfile(e){return bO(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return kO(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Jn.USER_MAP=new WeakMap;/**
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
 */const ha=N;class ym{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ha(r,"invalid-api-key",{appName:e.name}),ha(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Lr:void 0;this._delegate=n.initialize({options:{persistence:iM(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(px),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Jn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){tS(this._delegate,e,n)}applyActionCode(e){return mO(this._delegate,e)}checkActionCode(e){return hS(this._delegate,e)}confirmPasswordReset(e,n){return pO(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return bt(this._delegate,yO(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return TO(this._delegate,e)}isSignInWithEmailLink(e){return _O(this._delegate,e)}async getRedirectResult(){ha(Mf(),this._delegate,"operation-not-supported-in-this-environment");const e=await F2(this._delegate,Lr);return e?bt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){VL(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=s_(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=s_(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return wO(this._delegate,e,n)}sendPasswordResetEmail(e,n){return fO(this._delegate,e,n||void 0)}async setPersistence(e){XL(this._delegate,e);let n;switch(e){case Vt.SESSION:n=ei;break;case Vt.LOCAL:n=await zt(vo)._isAvailable()?vo:id;break;case Vt.NONE:n=go;break;default:return He("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return bt(this._delegate,uO(this._delegate))}signInWithCredential(e){return bt(this._delegate,rd(this._delegate,e))}signInWithCustomToken(e){return bt(this._delegate,dO(this._delegate,e))}signInWithEmailAndPassword(e,n){return bt(this._delegate,vO(this._delegate,e,n))}signInWithEmailLink(e,n){return bt(this._delegate,IO(this._delegate,e,n))}signInWithPhoneNumber(e,n){return gm(this._delegate,v2(this._delegate,e,n))}async signInWithPopup(e){return ha(Mf(),this._delegate,"operation-not-supported-in-this-environment"),bt(this._delegate,ES(this._delegate,e,Lr))}async signInWithRedirect(e){return ha(Mf(),this._delegate,"operation-not-supported-in-this-environment"),await mm(this._delegate),P2(this._delegate,e,Lr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return gO(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ym.Persistence=Vt;function s_(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Jn.getOrCreate(o)),error:e,complete:n}}function iM(t,e){const n=JL(t,e);if(typeof self<"u"&&!n.includes(vo)&&n.push(vo),typeof window<"u")for(const r of[id,ei])n.includes(r)||n.push(r);return n.includes(go)||n.push(go),n}/**
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
 */class Ny{constructor(){this.providerId="phone",this._delegate=new ts(MS(Mo.auth()))}static credential(e,n){return ts.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Ny.PHONE_SIGN_IN_METHOD=ts.PHONE_SIGN_IN_METHOD;Ny.PROVIDER_ID=ts.PROVIDER_ID;/**
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
 */const sM=N;class oM{constructor(e,n,r=Mo.app()){var i;sM((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new g2(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const aM="auth-compat";function lM(t){t.INTERNAL.registerComponent(new lt(aM,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new ym(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Cs.EMAIL_SIGNIN,PASSWORD_RESET:Cs.PASSWORD_RESET,RECOVER_EMAIL:Cs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Cs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Cs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Cs.VERIFY_EMAIL}},EmailAuthProvider:pi,FacebookAuthProvider:Cn,GithubAuthProvider:bn,GoogleAuthProvider:pn,OAuthProvider:eo,SAMLAuthProvider:Zc,PhoneAuthProvider:Ny,PhoneMultiFactorGenerator:DS,RecaptchaVerifier:oM,TwitterAuthProvider:An,Auth:ym,AuthCredential:Uo,Error:rt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(BL,zL)}lM(Mo);const uM=(t,e)=>e.some(n=>t instanceof n);let o_,a_;function cM(){return o_||(o_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hM(){return a_||(a_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const FS=new WeakMap,vm=new WeakMap,US=new WeakMap,$f=new WeakMap,Dy=new WeakMap;function dM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&FS.set(n,t)}).catch(()=>{}),Dy.set(e,t),e}function fM(t){if(vm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vm.set(t,e)}let wm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||US.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pM(t){wm=t(wm)}function mM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ff(this),e,...n);return US.set(r,e.sort?e.sort():[e]),Hr(r)}:hM().includes(t)?function(...e){return t.apply(Ff(this),e),Hr(FS.get(this))}:function(...e){return Hr(t.apply(Ff(this),e))}}function gM(t){return typeof t=="function"?mM(t):(t instanceof IDBTransaction&&fM(t),uM(t,cM())?new Proxy(t,wm):t)}function Hr(t){if(t instanceof IDBRequest)return dM(t);if($f.has(t))return $f.get(t);const e=gM(t);return e!==t&&($f.set(t,e),Dy.set(e,t)),e}const Ff=t=>Dy.get(t);function yM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hr(o.result),l.oldVersion,l.newVersion,Hr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const vM=["get","getKey","getAll","getAllKeys","count"],wM=["put","add","delete","clear"],Uf=new Map;function l_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uf.get(e))return Uf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vM.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Uf.set(e,s),s}pM(t=>({...t,get:(e,n,r)=>l_(e,n)||t.get(e,n,r),has:(e,n)=>!!l_(e,n)||t.has(e,n)}));const VS="@firebase/installations",Ry="0.6.4";/**
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
 */const BS=1e4,zS=`w:${Ry}`,jS="FIS_v2",_M="https://firebaseinstallations.googleapis.com/v1",IM=60*60*1e3,EM="installations",TM="Installations";/**
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
 */const SM={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},rs=new jn(EM,TM,SM);function qS(t){return t instanceof rt&&t.code.includes("request-failed")}/**
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
 */function KS({projectId:t}){return`${_M}/projects/${t}/installations`}function WS(t){return{token:t.token,requestStatus:2,expiresIn:CM(t.expiresIn),creationTime:Date.now()}}async function HS(t,e){const r=(await e.json()).error;return rs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function GS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kM(t,{refreshToken:e}){const n=GS(t);return n.append("Authorization",bM(e)),n}async function QS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function CM(t){return Number(t.replace("s","000"))}function bM(t){return`${jS} ${t}`}/**
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
 */async function AM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=KS(t),i=GS(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:jS,appId:t.appId,sdkVersion:zS},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await QS(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:WS(u.authToken)}}else throw await HS("Create Installation",l)}/**
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
 */function YS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function NM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const DM=/^[cdef][\w-]{21}$/,_m="";function RM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=PM(t);return DM.test(n)?n:_m}catch{return _m}}function PM(t){return NM(t).substr(0,22)}/**
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
 */function ud(t){return`${t.appName}!${t.appId}`}/**
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
 */const XS=new Map;function JS(t,e){const n=ud(t);ZS(n,e),xM(n,e)}function ZS(t,e){const n=XS.get(t);if(n)for(const r of n)r(e)}function xM(t,e){const n=OM();n&&n.postMessage({key:t,fid:e}),LM()}let Mi=null;function OM(){return!Mi&&"BroadcastChannel"in self&&(Mi=new BroadcastChannel("[Firebase] FID Change"),Mi.onmessage=t=>{ZS(t.data.key,t.data.fid)}),Mi}function LM(){XS.size===0&&Mi&&(Mi.close(),Mi=null)}/**
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
 */const MM="firebase-installations-database",$M=1,is="firebase-installations-store";let Vf=null;function Py(){return Vf||(Vf=yM(MM,$M,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(is)}}})),Vf}async function rh(t,e){const n=ud(t),i=(await Py()).transaction(is,"readwrite"),s=i.objectStore(is),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&JS(t,e.fid),e}async function ek(t){const e=ud(t),r=(await Py()).transaction(is,"readwrite");await r.objectStore(is).delete(e),await r.done}async function cd(t,e){const n=ud(t),i=(await Py()).transaction(is,"readwrite"),s=i.objectStore(is),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&JS(t,a.fid),a}/**
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
 */async function xy(t){let e;const n=await cd(t.appConfig,r=>{const i=FM(r),s=UM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===_m?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function FM(t){const e=t||{fid:RM(),registrationStatus:0};return tk(e)}function UM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(rs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=VM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:BM(t)}:{installationEntry:e}}async function VM(t,e){try{const n=await AM(t,e);return rh(t.appConfig,n)}catch(n){throw qS(n)&&n.customData.serverCode===409?await ek(t.appConfig):await rh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function BM(t){let e=await u_(t.appConfig);for(;e.registrationStatus===1;)await YS(100),e=await u_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xy(t);return r||n}return e}function u_(t){return cd(t,e=>{if(!e)throw rs.create("installation-not-found");return tk(e)})}function tk(t){return zM(t)?{fid:t.fid,registrationStatus:0}:t}function zM(t){return t.registrationStatus===1&&t.registrationTime+BS<Date.now()}/**
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
 */async function jM({appConfig:t,heartbeatServiceProvider:e},n){const r=qM(t,n),i=kM(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:zS,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await QS(()=>fetch(r,a));if(l.ok){const u=await l.json();return WS(u)}else throw await HS("Generate Auth Token",l)}function qM(t,{fid:e}){return`${KS(t)}/${e}/authTokens:generate`}/**
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
 */async function Oy(t,e=!1){let n;const r=await cd(t.appConfig,s=>{if(!nk(s))throw rs.create("not-registered");const o=s.authToken;if(!e&&HM(o))return s;if(o.requestStatus===1)return n=KM(t,e),s;{if(!navigator.onLine)throw rs.create("app-offline");const a=QM(s);return n=WM(t,a),a}});return n?await n:r.authToken}async function KM(t,e){let n=await c_(t.appConfig);for(;n.authToken.requestStatus===1;)await YS(100),n=await c_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Oy(t,e):r}function c_(t){return cd(t,e=>{if(!nk(e))throw rs.create("not-registered");const n=e.authToken;return YM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function WM(t,e){try{const n=await jM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await rh(t.appConfig,r),n}catch(n){if(qS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ek(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await rh(t.appConfig,r)}throw n}}function nk(t){return t!==void 0&&t.registrationStatus===2}function HM(t){return t.requestStatus===2&&!GM(t)}function GM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+IM}function QM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function YM(t){return t.requestStatus===1&&t.requestTime+BS<Date.now()}/**
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
 */async function XM(t){const e=t,{installationEntry:n,registrationPromise:r}=await xy(e);return r?r.catch(console.error):Oy(e).catch(console.error),n.fid}/**
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
 */async function JM(t,e=!1){const n=t;return await ZM(n),(await Oy(n,e)).token}async function ZM(t){const{registrationPromise:e}=await xy(t);e&&await e}/**
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
 */function e$(t){if(!t||!t.options)throw Bf("App Configuration");if(!t.name)throw Bf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Bf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Bf(t){return rs.create("missing-app-config-values",{valueName:t})}/**
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
 */const rk="installations",t$="installations-internal",n$=t=>{const e=t.getProvider("app").getImmediate(),n=e$(e),r=fi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},r$=t=>{const e=t.getProvider("app").getImmediate(),n=fi(e,rk).getImmediate();return{getId:()=>XM(n),getToken:i=>JM(n,i)}};function i$(){$t(new lt(rk,n$,"PUBLIC")),$t(new lt(t$,r$,"PRIVATE"))}i$();it(VS,Ry);it(VS,Ry,"esm2017");const s$=(t,e)=>e.some(n=>t instanceof n);let h_,d_;function o$(){return h_||(h_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a$(){return d_||(d_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ik=new WeakMap,Im=new WeakMap,sk=new WeakMap,zf=new WeakMap,Ly=new WeakMap;function l$(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ik.set(n,t)}).catch(()=>{}),Ly.set(e,t),e}function u$(t){if(Im.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Im.set(t,e)}let Em={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Im.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sk.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function c$(t){Em=t(Em)}function h$(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jf(this),e,...n);return sk.set(r,e.sort?e.sort():[e]),sr(r)}:a$().includes(t)?function(...e){return t.apply(jf(this),e),sr(ik.get(this))}:function(...e){return sr(t.apply(jf(this),e))}}function d$(t){return typeof t=="function"?h$(t):(t instanceof IDBTransaction&&u$(t),s$(t,o$())?new Proxy(t,Em):t)}function sr(t){if(t instanceof IDBRequest)return l$(t);if(zf.has(t))return zf.get(t);const e=d$(t);return e!==t&&(zf.set(t,e),Ly.set(e,t)),e}const jf=t=>Ly.get(t);function hd(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sr(o.result),l.oldVersion,l.newVersion,sr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function ro(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),sr(n).then(()=>{})}const f$=["get","getKey","getAll","getAllKeys","count"],p$=["put","add","delete","clear"],qf=new Map;function f_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qf.get(e))return qf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=p$.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||f$.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qf.set(e,s),s}c$(t=>({...t,get:(e,n,r)=>f_(e,n)||t.get(e,n,r),has:(e,n)=>!!f_(e,n)||t.has(e,n)}));/**
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
 */const m$="/firebase-messaging-sw.js",g$="/firebase-cloud-messaging-push-scope",ok="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",y$="https://fcmregistrations.googleapis.com/v1",ak="google.c.a.c_id",v$="google.c.a.c_l",w$="google.c.a.ts",_$="google.c.a.e";var p_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(p_||(p_={}));/**
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
 */var _l;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(_l||(_l={}));/**
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
 */function Wn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function I$(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Kf="fcm_token_details_db",E$=5,m_="fcm_token_object_Store";async function T$(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Kf))return null;let e=null;return(await hd(Kf,E$,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(m_))return;const l=o.objectStore(m_),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(a=c.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:Wn(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Wn(c.auth),p256dh:Wn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Wn(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Wn(c.auth),p256dh:Wn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Wn(c.vapidKey)}}}}}})).close(),await ro(Kf),await ro("fcm_vapid_details_db"),await ro("undefined"),S$(e)?e:null}function S$(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const k$="firebase-messaging-database",C$=1,ss="firebase-messaging-store";let Wf=null;function My(){return Wf||(Wf=hd(k$,C$,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ss)}}})),Wf}async function lk(t){const e=Fy(t),r=await(await My()).transaction(ss).objectStore(ss).get(e);if(r)return r;{const i=await T$(t.appConfig.senderId);if(i)return await $y(t,i),i}}async function $y(t,e){const n=Fy(t),i=(await My()).transaction(ss,"readwrite");return await i.objectStore(ss).put(e,n),await i.done,e}async function b$(t){const e=Fy(t),r=(await My()).transaction(ss,"readwrite");await r.objectStore(ss).delete(e),await r.done}function Fy({appConfig:t}){return t.appId}/**
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
 */const A$={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Tt=new jn("messaging","Messaging",A$);/**
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
 */async function N$(t,e){const n=await Vy(t),r=ck(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Uy(t.appConfig),i)).json()}catch(o){throw Tt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Tt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Tt.create("token-subscribe-no-token");return s.token}async function D$(t,e){const n=await Vy(t),r=ck(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Uy(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Tt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Tt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Tt.create("token-update-no-token");return s.token}async function uk(t,e){const r={method:"DELETE",headers:await Vy(t)};try{const s=await(await fetch(`${Uy(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Tt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Tt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Uy({projectId:t}){return`${y$}/projects/${t}/registrations`}async function Vy({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ck({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==ok&&(i.web.applicationPubKey=r),i}/**
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
 */const R$=7*24*60*60*1e3;async function P$(t){const e=await O$(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Wn(e.getKey("auth")),p256dh:Wn(e.getKey("p256dh"))},r=await lk(t.firebaseDependencies);if(r){if(L$(r.subscriptionOptions,n))return Date.now()>=r.createTime+R$?x$(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await uk(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return g_(t.firebaseDependencies,n)}else return g_(t.firebaseDependencies,n)}async function hk(t){const e=await lk(t.firebaseDependencies);e&&(await uk(t.firebaseDependencies,e.token),await b$(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function x$(t,e){try{const n=await D$(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await $y(t.firebaseDependencies,r),n}catch(n){throw await hk(t),n}}async function g_(t,e){const r={token:await N$(t,e),createTime:Date.now(),subscriptionOptions:e};return await $y(t,r),r.token}async function O$(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:I$(e)})}function L$(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function y_(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return M$(e,t),$$(e,t),F$(e,t),e}function M$(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function $$(t,e){e.data&&(t.data=e.data)}function F$(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function U$(t){return typeof t=="object"&&!!t&&ak in t}/**
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
 */dk("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");dk("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function dk(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function V$(t){if(!t||!t.options)throw Hf("App Configuration Object");if(!t.name)throw Hf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Hf(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Hf(t){return Tt.create("missing-app-config-values",{valueName:t})}/**
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
 */let B$=class{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=V$(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}};/**
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
 */async function fk(t){try{t.swRegistration=await navigator.serviceWorker.register(m$,{scope:g$}),t.swRegistration.update().catch(()=>{})}catch(e){throw Tt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function z$(t,e){if(!e&&!t.swRegistration&&await fk(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Tt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function j$(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=ok)}/**
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
 */async function pk(t,e){if(!navigator)throw Tt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Tt.create("permission-blocked");return await j$(t,e==null?void 0:e.vapidKey),await z$(t,e==null?void 0:e.serviceWorkerRegistration),P$(t)}/**
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
 */async function q$(t,e,n){const r=K$(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[ak],message_name:n[v$],message_time:n[w$],message_device_time:Math.floor(Date.now()/1e3)})}function K$(t){switch(t){case _l.NOTIFICATION_CLICKED:return"notification_open";case _l.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function W$(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===_l.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(y_(n)):t.onMessageHandler.next(y_(n)));const r=n.data;U$(r)&&r[_$]==="1"&&await q$(t,n.messageType,r)}const v_="@firebase/messaging",w_="0.12.4";/**
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
 */const H$=t=>{const e=new B$(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>W$(e,n)),e},G$=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>pk(e,r)}};function Q$(){$t(new lt("messaging",H$,"PUBLIC")),$t(new lt("messaging-internal",G$,"PRIVATE")),it(v_,w_),it(v_,w_,"esm2017")}/**
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
 */async function Y$(t){if(!navigator)throw Tt.create("only-available-in-window");return t.swRegistration||await fk(t),hk(t)}/**
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
 */function X$(t,e){if(!navigator)throw Tt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}async function J$(t,e){return t=B(t),pk(t,e)}function Z$(t){return t=B(t),Y$(t)}function eF(t,e){return t=B(t),X$(t,e)}Q$();/**
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
 */const mk="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",tF="https://fcmregistrations.googleapis.com/v1",gk="FCM_MSG",nF="google.c.a.c_id",rF=3,iF=1;var ih;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ih||(ih={}));/**
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
 */var sh;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(sh||(sh={}));/**
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
 */function Hn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function sF(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Gf="fcm_token_details_db",oF=5,__="fcm_token_object_Store";async function aF(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Gf))return null;let e=null;return(await hd(Gf,oF,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(__))return;const l=o.objectStore(__),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(a=c.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:Hn(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Hn(c.auth),p256dh:Hn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Hn(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Hn(c.auth),p256dh:Hn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Hn(c.vapidKey)}}}}}})).close(),await ro(Gf),await ro("fcm_vapid_details_db"),await ro("undefined"),lF(e)?e:null}function lF(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const uF="firebase-messaging-database",cF=1,os="firebase-messaging-store";let Qf=null;function By(){return Qf||(Qf=hd(uF,cF,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(os)}}})),Qf}async function zy(t){const e=qy(t),r=await(await By()).transaction(os).objectStore(os).get(e);if(r)return r;{const i=await aF(t.appConfig.senderId);if(i)return await jy(t,i),i}}async function jy(t,e){const n=qy(t),i=(await By()).transaction(os,"readwrite");return await i.objectStore(os).put(e,n),await i.done,e}async function hF(t){const e=qy(t),r=(await By()).transaction(os,"readwrite");await r.objectStore(os).delete(e),await r.done}function qy({appConfig:t}){return t.appId}/**
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
 */const dF={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Mn=new jn("messaging","Messaging",dF);/**
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
 */async function fF(t,e){const n=await Wy(t),r=vk(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Ky(t.appConfig),i)).json()}catch(o){throw Mn.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Mn.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Mn.create("token-subscribe-no-token");return s.token}async function pF(t,e){const n=await Wy(t),r=vk(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Ky(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Mn.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Mn.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Mn.create("token-update-no-token");return s.token}async function yk(t,e){const r={method:"DELETE",headers:await Wy(t)};try{const s=await(await fetch(`${Ky(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Mn.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Mn.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Ky({projectId:t}){return`${tF}/projects/${t}/registrations`}async function Wy({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function vk({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==mk&&(i.web.applicationPubKey=r),i}/**
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
 */const mF=7*24*60*60*1e3;async function gF(t){const e=await vF(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Hn(e.getKey("auth")),p256dh:Hn(e.getKey("p256dh"))},r=await zy(t.firebaseDependencies);if(r){if(wF(r.subscriptionOptions,n))return Date.now()>=r.createTime+mF?yF(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await yk(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return I_(t.firebaseDependencies,n)}else return I_(t.firebaseDependencies,n)}async function Tm(t){const e=await zy(t.firebaseDependencies);e&&(await yk(t.firebaseDependencies,e.token),await hF(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function yF(t,e){try{const n=await pF(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await jy(t.firebaseDependencies,r),n}catch(n){throw await Tm(t),n}}async function I_(t,e){const r={token:await fF(t,e),createTime:Date.now(),subscriptionOptions:e};return await jy(t,r),r.token}async function vF(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:sF(e)})}function wF(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function _F(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return IF(e,t),EF(e,t),TF(e,t),e}function IF(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function EF(t,e){e.data&&(t.data=e.data)}function TF(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function SF(t){return typeof t=="object"&&!!t&&nF in t}/**
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
 */function kF(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */wk("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");wk("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");async function CF(t,e){const n=bF(e,await t.firebaseDependencies.installations.getId());AF(t,n)}function bF(t,e){var n,r;const i={};return t.from&&(i.project_number=t.from),t.fcmMessageId&&(i.message_id=t.fcmMessageId),i.instance_id=e,t.notification?i.message_type=ih.DISPLAY_NOTIFICATION.toString():i.message_type=ih.DATA_MESSAGE.toString(),i.sdk_platform=rF.toString(),i.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),t.collapse_key&&(i.collapse_key=t.collapse_key),i.event=iF.toString(),!((n=t.fcmOptions)===null||n===void 0)&&n.analytics_label&&(i.analytics_label=(r=t.fcmOptions)===null||r===void 0?void 0:r.analytics_label),i}function AF(t,e){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(e),t.logEvents.push(n)}function wk(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */async function NF(t,e){var n,r;const{newSubscription:i}=t;if(!i){await Tm(e);return}const s=await zy(e.firebaseDependencies);await Tm(e),e.vapidKey=(r=(n=s==null?void 0:s.subscriptionOptions)===null||n===void 0?void 0:n.vapidKey)!==null&&r!==void 0?r:mk,await gF(e)}async function DF(t,e){const n=xF(t);if(!n)return;e.deliveryMetricsExportedToBigQueryEnabled&&await CF(e,n);const r=await _k();if(LF(r))return MF(r,n);if(n.notification&&await $F(PF(n)),!!e&&e.onBackgroundMessageHandler){const i=_F(n);typeof e.onBackgroundMessageHandler=="function"?await e.onBackgroundMessageHandler(i):e.onBackgroundMessageHandler.next(i)}}async function RF(t){var e,n;const r=(n=(e=t.notification)===null||e===void 0?void 0:e.data)===null||n===void 0?void 0:n[gk];if(r){if(t.action)return}else return;t.stopImmediatePropagation(),t.notification.close();const i=FF(r);if(!i)return;const s=new URL(i,self.location.href),o=new URL(self.location.origin);if(s.host!==o.host)return;let a=await OF(s);if(a?a=await a.focus():(a=await self.clients.openWindow(i),await kF(3e3)),!!a)return r.messageType=sh.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,a.postMessage(r)}function PF(t){const e=Object.assign({},t.notification);return e.data={[gk]:t},e}function xF({data:t}){if(!t)return null;try{return t.json()}catch{return null}}async function OF(t){const e=await _k();for(const n of e){const r=new URL(n.url,self.location.href);if(t.host===r.host)return n}return null}function LF(t){return t.some(e=>e.visibilityState==="visible"&&!e.url.startsWith("chrome-extension://"))}function MF(t,e){e.isFirebaseMessaging=!0,e.messageType=sh.PUSH_RECEIVED;for(const n of t)n.postMessage(e)}function _k(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function $F(t){var e;const{actions:n}=t,{maxActions:r}=Notification;return n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`),self.registration.showNotification((e=t.title)!==null&&e!==void 0?e:"",t)}function FF(t){var e,n,r;const i=(n=(e=t.fcmOptions)===null||e===void 0?void 0:e.link)!==null&&n!==void 0?n:(r=t.notification)===null||r===void 0?void 0:r.click_action;return i||(SF(t.data)?self.location.origin:null)}/**
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
 */function UF(t){if(!t||!t.options)throw Yf("App Configuration Object");if(!t.name)throw Yf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Yf(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Yf(t){return Mn.create("missing-app-config-values",{valueName:t})}/**
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
 */class VF{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=UF(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */const BF=t=>{const e=new VF(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(DF(n,e))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(NF(n,e))}),self.addEventListener("notificationclick",n=>{n.waitUntil(RF(n))}),e};function zF(){$t(new lt("messaging-sw",BF,"PUBLIC"))}/**
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
 */function jF(t,e){if(self.document!==void 0)throw Mn.create("only-available-in-sw");return t.onBackgroundMessageHandler=e,()=>{t.onBackgroundMessageHandler=null}}function qF(t,e){return t=B(t),jF(t,e)}/**
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
 */zF();const KF="@firebase/messaging-compat",WF="0.2.4";/**
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
 */function HF(){return self&&"ServiceWorkerGlobalScope"in self?QF():GF()}function GF(){return typeof window<"u"&&Zi()&&qR()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function QF(){return Zi()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}class E_{constructor(e,n){this.app=e,this._delegate=n,this.app=e,this._delegate=n}async getToken(e){return J$(this._delegate,e)}async deleteToken(){return Z$(this._delegate)}onMessage(e){return eF(this._delegate,e)}onBackgroundMessage(e){return qF(this._delegate,e)}}/**
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
 */const YF=t=>self&&"ServiceWorkerGlobalScope"in self?new E_(t.getProvider("app-compat").getImmediate(),t.getProvider("messaging-sw").getImmediate()):new E_(t.getProvider("app-compat").getImmediate(),t.getProvider("messaging").getImmediate()),XF={isSupported:HF};function JF(){Mo.INTERNAL.registerComponent(new lt("messaging-compat",YF,"PUBLIC").setServiceProps(XF))}/**
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
 */JF();Mo.registerVersion(KF,WF);var ZF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Hy=Hy||{},K=ZF||self;function oh(){}function dd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Jl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function eU(t){return Object.prototype.hasOwnProperty.call(t,Xf)&&t[Xf]||(t[Xf]=++tU)}var Xf="closure_uid_"+(1e9*Math.random()>>>0),tU=0;function nU(t,e,n){return t.call.apply(t.bind,arguments)}function rU(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?pt=nU:pt=rU,pt.apply(null,arguments)}function Vu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function mi(){this.s=this.s,this.o=this.o}var iU=0;mi.prototype.s=!1;mi.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),iU!=0)&&eU(this)};mi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ik=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function T_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(dd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function mt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var sU=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",oh,e),K.removeEventListener("test",oh,e)}catch{}return t}();function ah(t){return/^[\s\xa0]*$/.test(t)}var S_=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Jf(t,e){return t<e?-1:t>e?1:0}function fd(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return fd().indexOf(t)!=-1}function Qy(t){return Qy[" "](t),t}Qy[" "]=oh;function Ek(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var oU=Nn("Opera"),wo=Nn("Trident")||Nn("MSIE"),Tk=Nn("Edge"),Sm=Tk||wo,Sk=Nn("Gecko")&&!(fd().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),aU=fd().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function kk(){var t=K.document;return t?t.documentMode:void 0}var lh;e:{var Zf="",ep=function(){var t=fd();if(Sk)return/rv:([^\);]+)(\)|;)/.exec(t);if(Tk)return/Edge\/([\d\.]+)/.exec(t);if(wo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aU)return/WebKit\/(\S+)/.exec(t);if(oU)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ep&&(Zf=ep?ep[1]:""),wo){var tp=kk();if(tp!=null&&tp>parseFloat(Zf)){lh=String(tp);break e}}lh=Zf}var lU={};function uU(){return Ek(lU,9,function(){let t=0;const e=S_(String(lh)).split("."),n=S_("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Jf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Jf(i[2].length==0,s[2].length==0)||Jf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var km;if(K.document&&wo){var k_=kk();km=k_||parseInt(lh,10)||void 0}else km=void 0;var cU=km;function Il(t,e){if(mt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sk){e:{try{Qy(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hU[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Il.$.h.call(this)}}Qe(Il,mt);var hU={2:"touch",3:"pen",4:"mouse"};Il.prototype.h=function(){Il.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zl="closure_listenable_"+(1e6*Math.random()|0),dU=0;function fU(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++dU,this.fa=this.ia=!1}function pd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Yy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ck(t){const e={};for(const n in t)e[n]=t[n];return e}const C_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bk(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<C_.length;s++)n=C_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function md(t){this.src=t,this.g={},this.h=0}md.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=bm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new fU(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Cm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Ik(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(pd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Xy="closure_lm_"+(1e6*Math.random()|0),np={};function Ak(t,e,n,r,i){if(r&&r.once)return Dk(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ak(t,e[s],n,r,i);return null}return n=ev(n),t&&t[Zl]?t.O(e,n,Jl(r)?!!r.capture:!!r,i):Nk(t,e,n,!1,r,i)}function Nk(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Jl(i)?!!i.capture:!!i,a=Zy(t);if(a||(t[Xy]=a=new md(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=pU(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)sU||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Pk(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pU(){function t(n){return e.call(t.src,t.listener,n)}const e=mU;return t}function Dk(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Dk(t,e[s],n,r,i);return null}return n=ev(n),t&&t[Zl]?t.P(e,n,Jl(r)?!!r.capture:!!r,i):Nk(t,e,n,!0,r,i)}function Rk(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Rk(t,e[s],n,r,i);else r=Jl(r)?!!r.capture:!!r,n=ev(n),t&&t[Zl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=bm(s,n,r,i),-1<n&&(pd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Zy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bm(e,n,r,i)),(n=-1<t?e[t]:null)&&Jy(n))}function Jy(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Zl])Cm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Pk(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Zy(e))?(Cm(n,t),n.h==0&&(n.src=null,e[Xy]=null)):pd(t)}}}function Pk(t){return t in np?np[t]:np[t]="on"+t}function mU(t,e){if(t.fa)t=!0;else{e=new Il(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Jy(t),t=n.call(r,e)}return t}function Zy(t){return t=t[Xy],t instanceof md?t:null}var rp="__closure_events_fn_"+(1e9*Math.random()>>>0);function ev(t){return typeof t=="function"?t:(t[rp]||(t[rp]=function(e){return t.handleEvent(e)}),t[rp])}function Ge(){mi.call(this),this.i=new md(this),this.S=this,this.J=null}Qe(Ge,mi);Ge.prototype[Zl]=!0;Ge.prototype.removeEventListener=function(t,e,n,r){Rk(this,t,e,n,r)};function ot(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new mt(e,t);else if(e instanceof mt)e.target=e.target||t;else{var i=e;e=new mt(r,t),bk(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Bu(o,r,!0,e)&&i}if(o=e.g=t,i=Bu(o,r,!0,e)&&i,i=Bu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Bu(o,r,!1,e)&&i}Ge.prototype.N=function(){if(Ge.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)pd(n[r]);delete t.g[e],t.h--}}this.J=null};Ge.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ge.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Bu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Cm(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var tv=K.JSON.stringify;function gU(){var t=Lk;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yU{constructor(){this.h=this.g=null}add(e,n){const r=xk.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var xk=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vU,t=>t.reset());class vU{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wU(t){K.setTimeout(()=>{throw t},0)}function Ok(t,e){Am||_U(),Nm||(Am(),Nm=!0),Lk.add(t,e)}var Am;function _U(){var t=K.Promise.resolve(void 0);Am=function(){t.then(IU)}}var Nm=!1,Lk=new yU;function IU(){for(var t;t=gU();){try{t.h.call(t.g)}catch(n){wU(n)}var e=xk;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nm=!1}function gd(t,e){Ge.call(this),this.h=t||1,this.g=e||K,this.j=pt(this.qb,this),this.l=Date.now()}Qe(gd,Ge);O=gd.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ot(this,"tick"),this.ga&&(nv(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function nv(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){gd.$.N.call(this),nv(this),delete this.g};function rv(t,e,n){if(typeof t=="function")n&&(t=pt(t,n));else if(t&&typeof t.handleEvent=="function")t=pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Mk(t){t.g=rv(()=>{t.g=null,t.i&&(t.i=!1,Mk(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class EU extends mi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Mk(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function El(t){mi.call(this),this.h=t,this.g={}}Qe(El,mi);var b_=[];function $k(t,e,n,r){Array.isArray(n)||(n&&(b_[0]=n.toString()),n=b_);for(var i=0;i<n.length;i++){var s=Ak(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Fk(t){Yy(t.g,function(e,n){this.g.hasOwnProperty(n)&&Jy(e)},t),t.g={}}El.prototype.N=function(){El.$.N.call(this),Fk(this)};El.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yd(){this.g=!0}yd.prototype.Ea=function(){this.g=!1};function TU(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function SU(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ws(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+CU(t,n)+(r?" "+r:"")})}function kU(t,e){t.info(function(){return"TIMEOUT: "+e})}yd.prototype.info=function(){};function CU(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return tv(n)}catch{return e}}var ws={},A_=null;function vd(){return A_=A_||new Ge}ws.Ta="serverreachability";function Uk(t){mt.call(this,ws.Ta,t)}Qe(Uk,mt);function Tl(t){const e=vd();ot(e,new Uk(e))}ws.STAT_EVENT="statevent";function Vk(t,e){mt.call(this,ws.STAT_EVENT,t),this.stat=e}Qe(Vk,mt);function It(t){const e=vd();ot(e,new Vk(e,t))}ws.Ua="timingevent";function Bk(t,e){mt.call(this,ws.Ua,t),this.size=e}Qe(Bk,mt);function eu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var wd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zk={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function iv(){}iv.prototype.h=null;function N_(t){return t.h||(t.h=t.i())}function jk(){}var tu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function sv(){mt.call(this,"d")}Qe(sv,mt);function ov(){mt.call(this,"c")}Qe(ov,mt);var Dm;function _d(){}Qe(_d,iv);_d.prototype.g=function(){return new XMLHttpRequest};_d.prototype.i=function(){return{}};Dm=new _d;function nu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new El(this),this.P=bU,t=Sm?125:void 0,this.V=new gd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new qk}function qk(){this.i=null,this.g="",this.h=!1}var bU=45e3,Rm={},uh={};O=nu.prototype;O.setTimeout=function(t){this.P=t};function Pm(t,e,n){t.L=1,t.v=Ed(hr(e)),t.s=n,t.S=!0,Kk(t,null)}function Kk(t,e){t.G=Date.now(),ru(t),t.A=hr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Zk(n.i,"t",r),t.C=0,n=t.l.I,t.h=new qk,t.g=_C(t.l,n?e:null,!t.s),0<t.O&&(t.M=new EU(pt(t.Pa,t,t.g),t.O)),$k(t.U,t.g,"readystatechange",t.nb),e=t.I?Ck(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Tl(),TU(t.j,t.u,t.A,t.m,t.W,t.s)}O.nb=function(t){t=t.target;const e=this.M;e&&Zn(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const c=Zn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Sm||this.g&&(this.h.h||this.g.ja()||x_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Tl(3):Tl(2)),Id(this);var n=this.g.da();this.aa=n;t:if(Wk(this)){var r=x_(this.g);t="";var i=r.length,s=Zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$i(this),qa(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,SU(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ah(a)){var u=a;break t}}u=null}if(n=u)Ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xm(this,n);else{this.i=!1,this.o=3,It(12),$i(this),qa(this);break e}}this.S?(Hk(this,c,o),Sm&&this.i&&c==3&&($k(this.U,this.V,"tick",this.mb),this.V.start())):(Ws(this.j,this.m,o,null),xm(this,o)),c==4&&$i(this),this.i&&!this.J&&(c==4?gC(this.l,this):(this.i=!1,ru(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,It(12)):(this.o=0,It(13)),$i(this),qa(this)}}}catch{}finally{}};function Wk(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Hk(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=AU(t,n),i==uh){e==4&&(t.o=4,It(14),r=!1),Ws(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Rm){t.o=4,It(15),Ws(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ws(t.j,t.m,i,null),xm(t,i);Wk(t)&&i!=uh&&i!=Rm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,It(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),fv(e),e.L=!0,It(11))):(Ws(t.j,t.m,n,"[Invalid Chunked Response]"),$i(t),qa(t))}O.mb=function(){if(this.g){var t=Zn(this.g),e=this.g.ja();this.C<e.length&&(Id(this),Hk(this,t,e),this.i&&t!=4&&ru(this))}};function AU(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?uh:(n=Number(e.substring(n,r)),isNaN(n)?Rm:(r+=1,r+n>e.length?uh:(e=e.substr(r,n),t.C=r+n,e)))}O.cancel=function(){this.J=!0,$i(this)};function ru(t){t.Y=Date.now()+t.P,Gk(t,t.P)}function Gk(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=eu(pt(t.lb,t),e)}function Id(t){t.B&&(K.clearTimeout(t.B),t.B=null)}O.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(kU(this.j,this.A),this.L!=2&&(Tl(),It(17)),$i(this),this.o=2,qa(this)):Gk(this,this.Y-t)};function qa(t){t.l.H==0||t.J||gC(t.l,t)}function $i(t){Id(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,nv(t.V),Fk(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function xm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Om(n.h,t))){if(!t.K&&Om(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)dh(n),kd(n);else break e;dv(n),It(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=eu(pt(n.ib,n),6e3));if(1>=nC(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Fi(n,11)}else if((t.K||n.g==t)&&dh(n),!ah(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(av(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ye(r.G,r.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=wC(r,r.I?r.oa:null,r.Y),o.K){rC(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Id(a),ru(a)),r.g=o}else pC(r);0<n.i.length&&Cd(n)}else u[0]!="stop"&&u[0]!="close"||Fi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Fi(n,7):hv(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Tl(4)}catch{}}function NU(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(dd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function DU(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(dd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Qk(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(dd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=DU(t),r=NU(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Yk=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RU(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wi){this.h=e!==void 0?e:t.h,ch(this,t.j),this.s=t.s,this.g=t.g,hh(this,t.m),this.l=t.l,e=t.i;var n=new Sl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),D_(this,n),this.o=t.o}else t&&(n=String(t).match(Yk))?(this.h=!!e,ch(this,n[1]||"",!0),this.s=Ca(n[2]||""),this.g=Ca(n[3]||"",!0),hh(this,n[4]),this.l=Ca(n[5]||"",!0),D_(this,n[6]||"",!0),this.o=Ca(n[7]||"")):(this.h=!!e,this.i=new Sl(null,this.h))}Wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ba(e,R_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ba(e,R_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ba(n,n.charAt(0)=="/"?OU:xU,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ba(n,MU)),t.join("")};function hr(t){return new Wi(t)}function ch(t,e,n){t.j=n?Ca(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function D_(t,e,n){e instanceof Sl?(t.i=e,$U(t.i,t.h)):(n||(e=ba(e,LU)),t.i=new Sl(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function Ed(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ca(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ba(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,PU),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function PU(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var R_=/[#\/\?@]/g,xU=/[#\?:]/g,OU=/[#\?]/g,LU=/[#\?@]/g,MU=/#/g;function Sl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gi(t){t.g||(t.g=new Map,t.h=0,t.i&&RU(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Sl.prototype;O.add=function(t,e){gi(this),this.i=null,t=Bo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Xk(t,e){gi(t),e=Bo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jk(t,e){return gi(t),e=Bo(t,e),t.g.has(e)}O.forEach=function(t,e){gi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.sa=function(){gi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.Z=function(t){gi(this);let e=[];if(typeof t=="string")Jk(this,t)&&(e=e.concat(this.g.get(Bo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return gi(this),this.i=null,t=Bo(this,t),Jk(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Zk(t,e,n){Xk(t,e),0<n.length&&(t.i=null,t.g.set(Bo(t,e),Gy(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Bo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $U(t,e){e&&!t.j&&(gi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Xk(this,r),Zk(this,i,n))},t)),t.j=e}var FU=class{constructor(t,e){this.h=t,this.g=e}};function eC(t){this.l=t||UU,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var UU=10;function tC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function nC(t){return t.h?1:t.g?t.g.size:0}function Om(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function av(t,e){t.g?t.g.add(e):t.h=e}function rC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}eC.prototype.cancel=function(){if(this.i=iC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function iC(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Gy(t.i)}function lv(){}lv.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};lv.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function VU(){this.g=new lv}function BU(t,e,n){const r=n||"";try{Qk(t,function(i,s){let o=i;Jl(i)&&(o=tv(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function zU(t,e){const n=new yd;if(K.Image){const r=new Image;r.onload=Vu(zu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Vu(zu,n,r,"TestLoadImage: error",!1,e),r.onabort=Vu(zu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Vu(zu,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function zu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function iu(t){this.l=t.fc||null,this.j=t.ob||!1}Qe(iu,iv);iu.prototype.g=function(){return new Td(this.l,this.j)};iu.prototype.i=function(t){return function(){return t}}({});function Td(t,e){Ge.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=uv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(Td,Ge);var uv=0;O=Td.prototype;O.open=function(t,e){if(this.readyState!=uv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,kl(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,su(this)),this.readyState=uv};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,kl(this)),this.g&&(this.readyState=3,kl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sC(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function sC(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?su(this):kl(this),this.readyState==3&&sC(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,su(this))};O.Ya=function(t){this.g&&(this.response=t,su(this))};O.ka=function(){this.g&&su(this)};function su(t){t.readyState=4,t.l=null,t.j=null,t.A=null,kl(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function kl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Td.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var jU=K.JSON.parse;function Ce(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=oC,this.L=this.M=!1}Qe(Ce,Ge);var oC="",qU=/^https?$/i,KU=["POST","PUT"];O=Ce.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Dm.g(),this.C=this.u?N_(this.u):N_(Dm),this.g.onreadystatechange=pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){P_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=Ik(KU,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{uC(this),0<this.B&&((this.L=WU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=pt(this.ua,this)):this.A=rv(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){P_(this,s)}};function WU(t){return wo&&uU()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Hy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function P_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,aC(t),Sd(t)}function aC(t){t.F||(t.F=!0,ot(t,"complete"),ot(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ot(this,"complete"),ot(this,"abort"),Sd(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sd(this,!0)),Ce.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?lC(this):this.kb())};O.kb=function(){lC(this)};function lC(t){if(t.h&&typeof Hy<"u"&&(!t.C[1]||Zn(t)!=4||t.da()!=2)){if(t.v&&Zn(t)==4)rv(t.La,0,t);else if(ot(t,"readystatechange"),Zn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(Yk)[1]||null;if(!i&&K.self&&K.self.location){var s=K.self.location.protocol;i=s.substr(0,s.length-1)}r=!qU.test(i?i.toLowerCase():"")}n=r}if(n)ot(t,"complete"),ot(t,"success");else{t.m=6;try{var o=2<Zn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",aC(t)}}finally{Sd(t)}}}}function Sd(t,e){if(t.g){uC(t);const n=t.g,r=t.C[0]?oh:null;t.g=null,t.C=null,e||ot(t,"ready");try{n.onreadystatechange=r}catch{}}}function uC(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function Zn(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<Zn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),jU(e)}};function x_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case oC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function cC(t){let e="";return Yy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function cv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=cC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ye(t,e,n))}function da(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hC(t){this.Ga=0,this.i=[],this.j=new yd,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=da("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=da("baseRetryDelayMs",5e3,t),this.hb=da("retryDelaySeedMs",1e4,t),this.eb=da("forwardChannelMaxRetries",2,t),this.xa=da("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new eC(t&&t.concurrentRequestLimit),this.Ja=new VU,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}O=hC.prototype;O.qa=8;O.H=1;function hv(t){if(dC(t),t.H==3){var e=t.W++,n=hr(t.G);ye(n,"SID",t.J),ye(n,"RID",e),ye(n,"TYPE","terminate"),ou(t,n),e=new nu(t,t.j,e,void 0),e.L=2,e.v=Ed(hr(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=_C(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ru(e)}vC(t)}function kd(t){t.g&&(fv(t),t.g.cancel(),t.g=null)}function dC(t){kd(t),t.u&&(K.clearTimeout(t.u),t.u=null),dh(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Cd(t){tC(t.h)||t.m||(t.m=!0,Ok(t.Na,t),t.C=0)}function HU(t,e){return nC(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=eu(pt(t.Na,t,e),yC(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new nu(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=Ck(s),bk(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=fC(this,i,e),n=hr(this.G),ye(n,"RID",t),ye(n,"CVER",22),this.F&&ye(n,"X-HTTP-Session-Id",this.F),ou(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(cC(s)))+"&"+e:this.o&&cv(n,this.o,s)),av(this.h,i),this.bb&&ye(n,"TYPE","init"),this.P?(ye(n,"$req",e),ye(n,"SID","null"),i.ba=!0,Pm(i,n,null)):Pm(i,n,e),this.H=2}}else this.H==3&&(t?O_(this,t):this.i.length==0||tC(this.h)||O_(this))};function O_(t,e){var n;e?n=e.m:n=t.W++;const r=hr(t.G);ye(r,"SID",t.J),ye(r,"RID",n),ye(r,"AID",t.V),ou(t,r),t.o&&t.s&&cv(r,t.o,t.s),n=new nu(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=fC(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),av(t.h,n),Pm(n,r,e)}function ou(t,e){t.ma&&Yy(t.ma,function(n,r){ye(e,r,n)}),t.l&&Qk({},function(n,r){ye(e,r,n)})}function fC(t,e,n){n=Math.min(t.i.length,n);var r=t.l?pt(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{BU(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function pC(t){t.g||t.u||(t.ba=1,Ok(t.Ma,t),t.A=0)}function dv(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=eu(pt(t.Ma,t),yC(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,mC(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=eu(pt(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,It(10),kd(this),mC(this))};function fv(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function mC(t){t.g=new nu(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=hr(t.wa);ye(e,"RID","rpc"),ye(e,"SID",t.J),ye(e,"CI",t.M?"0":"1"),ye(e,"AID",t.V),ye(e,"TYPE","xmlhttp"),ou(t,e),t.o&&t.s&&cv(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ed(hr(e)),n.s=null,n.S=!0,Kk(n,t)}O.ib=function(){this.v!=null&&(this.v=null,kd(this),dv(this),It(19))};function dh(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function gC(t,e){var n=null;if(t.g==e){dh(t),fv(t),t.g=null;var r=2}else if(Om(t.h,e))n=e.F,rC(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=vd(),ot(r,new Bk(r,n)),Cd(t)}else pC(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&HU(t,e)||r==2&&dv(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Fi(t,5);break;case 4:Fi(t,10);break;case 3:Fi(t,6);break;default:Fi(t,2)}}}function yC(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Fi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=pt(t.pb,t);n||(n=new Wi("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||ch(n,"https"),Ed(n)),zU(n.toString(),r)}else It(2);t.H=0,t.l&&t.l.za(e),vC(t),dC(t)}O.pb=function(t){t?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function vC(t){if(t.H=0,t.pa=[],t.l){const e=iC(t.h);(e.length!=0||t.i.length!=0)&&(T_(t.pa,e),T_(t.pa,t.i),t.h.i.length=0,Gy(t.i),t.i.length=0),t.l.ya()}}function wC(t,e,n){var r=n instanceof Wi?hr(n):new Wi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),hh(r,r.m);else{var i=K.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Wi(null,void 0);r&&ch(s,r),e&&(s.g=e),i&&hh(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ye(r,n,e),ye(r,"VER",t.qa),ou(t,r),r}function _C(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ce(new iu({ob:!0})):new Ce(t.va),e.Oa(t.I),e}function IC(){}O=IC.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.Va=function(){};function fh(){if(wo&&!(10<=Number(cU)))throw Error("Environmental error: no available transport.")}fh.prototype.g=function(t,e){return new Kt(t,e)};function Kt(t,e){Ge.call(this),this.g=new hC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ah(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ah(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zo(this)}Qe(Kt,Ge);Kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;It(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=wC(t,null,t.Y),Cd(t)};Kt.prototype.close=function(){hv(this.g)};Kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=tv(t),t=n);e.i.push(new FU(e.fb++,t)),e.H==3&&Cd(e)};Kt.prototype.N=function(){this.g.l=null,delete this.j,hv(this.g),delete this.g,Kt.$.N.call(this)};function EC(t){sv.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(EC,sv);function TC(){ov.call(this),this.status=1}Qe(TC,ov);function zo(t){this.g=t}Qe(zo,IC);zo.prototype.Ba=function(){ot(this.g,"a")};zo.prototype.Aa=function(t){ot(this.g,new EC(t))};zo.prototype.za=function(t){ot(this.g,new TC)};zo.prototype.ya=function(){ot(this.g,"b")};function GU(){this.blockSize=-1}function In(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Qe(In,GU);In.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ip(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}In.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ip(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ip(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ip(this,r),i=0;break}}this.h=i,this.i+=e};In.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function oe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var QU={};function pv(t){return-128<=t&&128>t?Ek(QU,t,function(e){return new oe([e|0],0>e?-1:0)}):new oe([t|0],0>t?-1:0)}function Rn(t){if(isNaN(t)||!isFinite(t))return io;if(0>t)return et(Rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Lm;return new oe(e,0)}function SC(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return et(SC(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Rn(Math.pow(e,8)),r=io,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Rn(Math.pow(e,s)),r=r.R(s).add(Rn(o))):(r=r.R(n),r=r.add(Rn(o)))}return r}var Lm=4294967296,io=pv(0),Mm=pv(1),L_=pv(16777216);O=oe.prototype;O.ea=function(){if(Jt(this))return-et(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Lm+r)*e,e*=Lm}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(er(this))return"0";if(Jt(this))return"-"+et(this).toString(t);for(var e=Rn(Math.pow(t,6)),n=this,r="";;){var i=mh(n,e).g;n=ph(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,er(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function er(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Jt(t){return t.h==-1}O.X=function(t){return t=ph(this,t),Jt(t)?-1:er(t)?0:1};function et(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new oe(n,~t.h).add(Mm)}O.abs=function(){return Jt(this)?et(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new oe(n,n[n.length-1]&-2147483648?-1:0)};function ph(t,e){return t.add(et(e))}O.R=function(t){if(er(this)||er(t))return io;if(Jt(this))return Jt(t)?et(this).R(et(t)):et(et(this).R(t));if(Jt(t))return et(this.R(et(t)));if(0>this.X(L_)&&0>t.X(L_))return Rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ju(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ju(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ju(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ju(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new oe(n,0)};function ju(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function fa(t,e){this.g=t,this.h=e}function mh(t,e){if(er(e))throw Error("division by zero");if(er(t))return new fa(io,io);if(Jt(t))return e=mh(et(t),e),new fa(et(e.g),et(e.h));if(Jt(e))return e=mh(t,et(e)),new fa(et(e.g),e.h);if(30<t.g.length){if(Jt(t)||Jt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Mm,r=e;0>=r.X(t);)n=M_(n),r=M_(r);var i=bs(n,1),s=bs(r,1);for(r=bs(r,2),n=bs(n,2);!er(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=bs(r,1),n=bs(n,1)}return e=ph(t,i.R(e)),new fa(i,e)}for(i=io;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Rn(n),o=s.R(e);Jt(o)||0<o.X(t);)n-=r,s=Rn(n),o=s.R(e);er(s)&&(s=Mm),i=i.add(s),t=ph(t,o)}return new fa(i,t)}O.gb=function(t){return mh(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new oe(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new oe(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new oe(n,this.h^t.h)};function M_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new oe(n,t.h)}function bs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new oe(i,t.h)}fh.prototype.createWebChannel=fh.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;wd.NO_ERROR=0;wd.TIMEOUT=8;wd.HTTP_ERROR=6;zk.COMPLETE="complete";jk.EventType=tu;tu.OPEN="a";tu.CLOSE="b";tu.ERROR="c";tu.MESSAGE="d";Ge.prototype.listen=Ge.prototype.O;Ce.prototype.listenOnce=Ce.prototype.P;Ce.prototype.getLastError=Ce.prototype.Sa;Ce.prototype.getLastErrorCode=Ce.prototype.Ia;Ce.prototype.getStatus=Ce.prototype.da;Ce.prototype.getResponseJson=Ce.prototype.Wa;Ce.prototype.getResponseText=Ce.prototype.ja;Ce.prototype.send=Ce.prototype.ha;Ce.prototype.setWithCredentials=Ce.prototype.Oa;In.prototype.digest=In.prototype.l;In.prototype.reset=In.prototype.reset;In.prototype.update=In.prototype.j;oe.prototype.add=oe.prototype.add;oe.prototype.multiply=oe.prototype.R;oe.prototype.modulo=oe.prototype.gb;oe.prototype.compare=oe.prototype.X;oe.prototype.toNumber=oe.prototype.ea;oe.prototype.toString=oe.prototype.toString;oe.prototype.getBits=oe.prototype.D;oe.fromNumber=Rn;oe.fromString=SC;var YU=function(){return new fh},XU=function(){return vd()},sp=wd,JU=zk,ZU=ws,$_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},eV=iu,qu=jk,tV=Ce,nV=In,so=oe;const F_="@firebase/firestore";/**
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
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
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
 */let jo="9.21.0";/**
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
 */const ti=new Yh("@firebase/firestore");function $m(){return ti.logLevel}function rV(t){ti.setLogLevel(t)}function C(t,...e){if(ti.logLevel<=J.DEBUG){const n=e.map(mv);ti.debug(`Firestore (${jo}): ${t}`,...n)}}function Ne(t,...e){if(ti.logLevel<=J.ERROR){const n=e.map(mv);ti.error(`Firestore (${jo}): ${t}`,...n)}}function En(t,...e){if(ti.logLevel<=J.WARN){const n=e.map(mv);ti.warn(`Firestore (${jo}): ${t}`,...n)}}function mv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function L(t="Unexpected state"){const e=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: `+t;throw Ne(e),new Error(e)}function j(t,e){t||L()}function iV(t,e){t||L()}function x(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends rt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class We{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class kC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class oV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aV{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new We;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new We,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new We)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(j(typeof r.accessToken=="string"),new kC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new qe(e)}}class lV{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class uV{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new lV(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hV{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(j(typeof n.token=="string"),this.T=n.token,new cV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function dV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class CC{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dV(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function W(t,e){return t<e?-1:t>e?1:0}function _o(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function bC(t){return t+"\0"}/**
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
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new k(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new k(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new we(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new we(0,0))}static max(){return new z(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&L(),r===void 0?r=e.length-n:r>e.length-n&&L(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Z extends Cl{construct(e,n,r){return new Z(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Z(n)}static emptyPath(){return new Z([])}}const fV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class De extends Cl{construct(e,n,r){return new De(e,n,r)}static isValidIdentifier(e){return fV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),De.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new De(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new k(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new k(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new k(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new De(n)}static emptyPath(){return new De([])}}/**
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
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(Z.fromString(e))}static fromName(e){return new P(Z.fromString(e).popFirst(5))}static empty(){return new P(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Z.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new Z(e.slice()))}}/**
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
 */class AC{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Fm(t){return t.fields.find(e=>e.kind===2)}function Ci(t){return t.fields.filter(e=>e.kind!==2)}AC.UNKNOWN_ID=-1;class pV{constructor(e,n){this.fieldPath=e,this.kind=n}}class gh{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new gh(0,Wt.min())}}function NC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Wt(i,P.empty(),e)}function DC(t){return new Wt(t.readTime,t.key,-1)}class Wt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wt(z.min(),P.empty(),-1)}static max(){return new Wt(z.max(),P.empty(),-1)}}function gv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=P.comparator(t.documentKey,e.documentKey),n!==0?n:W(t.largestBatchId,e.largestBatchId))}/**
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
 */const RC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function yi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==RC)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class bd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.R=new We,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{n.error?this.R.reject(new Ka(e,n.error)):this.R.resolve()},this.transaction.onerror=r=>{const i=yv(r.target.error);this.R.reject(new Ka(e,i))}}static open(e,n,r,i){try{return new bd(n,e.transaction(i,r))}catch(s){throw new Ka(n,s)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new gV(n)}}class mn{constructor(e,n,r){this.name=e,this.version=n,this.V=r,mn.S(Te())===12.2&&Ne("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),bi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Zi())return!1;if(mn.C())return!0;const e=Te(),n=mn.S(e),r=0<n&&n<10,i=mn.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ka(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new k(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new k(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ka(e,o))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.$(o,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=bd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),_.reject(u))).toPromise();return l.catch(()=>{}),await a.v,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class mV{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return bi(this.L.delete())}}class Ka extends k{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function vi(t){return t.name==="IndexedDbTransactionError"}class gV{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(C("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),bi(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),bi(this.store.add(e))}get(e){return bi(this.store.get(e)).next(n=>(n===void 0&&(n=null),C("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),bi(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),bi(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new _((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new _((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new _((r,i)=>{n.onerror=s=>{const o=yv(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new _((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new mV(a),u=n(a.primaryKey,a.value,l);if(u instanceof _){const c=u.catch(h=>(l.done(),_.reject(h)));r.push(c)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>_.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function bi(t){return new _((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=yv(r.target.error);n(i)}})}let U_=!1;function yv(t){const e=mn.S(Te());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return U_||(U_=!0,setTimeout(()=>{throw r},0)),r}}return t}class yV{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){C("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){vi(n)?C("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await yi(n)}await this.et(6e4)})}}class vV{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return _.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return C("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(C("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=DC(s);gv(o,r)>0&&(r=o)}),new Wt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Rt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Rt.ct=-1;function au(t){return t==null}function bl(t){return t===0&&1/t==-1/0}function xC(t){return typeof t=="number"&&Number.isInteger(t)&&!bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function St(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=V_(e)),e=wV(t.get(n),e);return V_(e)}function wV(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function V_(t){return t+""}function Pn(t){const e=t.length;if(j(e>=2),e===2)return j(t.charAt(0)===""&&t.charAt(1)===""),Z.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&L(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:L()}s=o+2}return new Z(r)}/**
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
 */const B_=["userId","batchId"];/**
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
 */function gc(t,e){return[t,St(e)]}function OC(t,e,n){return[t,St(e),n]}const _V={},IV=["prefixPath","collectionGroup","readTime","documentId"],EV=["prefixPath","collectionGroup","documentId"],TV=["collectionGroup","readTime","prefixPath","documentId"],SV=["canonicalId","targetId"],kV=["targetId","path"],CV=["path","targetId"],bV=["collectionId","parent"],AV=["indexId","uid"],NV=["uid","sequenceNumber"],DV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],RV=["indexId","uid","orderedDocumentKey"],PV=["userId","collectionPath","documentId"],xV=["userId","collectionPath","largestBatchId"],OV=["userId","collectionGroup","largestBatchId"],LC=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],LV=[...LC,"documentOverlays"],MC=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$C=MC,MV=[...$C,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Um extends PC{constructor(e,n){super(),this.at=e,this.currentSequenceNumber=n}}function Ye(t,e){const n=x(t);return mn.M(n.at,e)}/**
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
 */function z_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function FC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ue{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ku(this.root,e,this.comparator,!0)}}class Ku{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=i??Ze.EMPTY,this.right=s??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ze(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pe{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new j_(this.data.getIterator())}getIteratorFrom(e){return new j_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pe(this.comparator);return n.data=e,n}}class j_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function As(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(De.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new pe(De.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class UC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function $V(){return typeof atob<"u"}/**
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
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new UC("Invalid base64 string: "+i):i}}(e);return new Ve(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const FV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(j(!!t),typeof t=="string"){let e=0;const n=FV.exec(t);if(j(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?Ve.fromBase64String(t):Ve.fromUint8Array(t)}/**
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
 */function Ad(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vv(t){const e=t.mapValue.fields.__previous_value__;return Ad(e)?vv(e):e}function Al(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class UV{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ii{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ii("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ii&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Mr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},yc={nullValue:"NULL_VALUE"};function as(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ad(t)?4:VC(t)?9007199254740991:10:L()}function Vn(t,e){if(t===e)return!0;const n=as(t);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Al(t).isEqual(Al(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ni(r.timestampValue),o=ni(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ri(r.bytesValue).isEqual(ri(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ke(r.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(r.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ke(r.integerValue)===ke(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ke(r.doubleValue),o=ke(i.doubleValue);return s===o?bl(s)===bl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return _o(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(z_(s)!==z_(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Vn(s[a],o[a])))return!1;return!0}(t,e);default:return L()}}function Nl(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function si(t,e){if(t===e)return 0;const n=as(t),r=as(e);if(n!==r)return W(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ke(i.integerValue||i.doubleValue),a=ke(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return q_(t.timestampValue,e.timestampValue);case 4:return q_(Al(t),Al(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ri(i),a=ri(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=W(o[l],a[l]);if(u!==0)return u}return W(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=W(ke(i.latitude),ke(s.latitude));return o!==0?o:W(ke(i.longitude),ke(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=si(o[l],a[l]);if(u)return u}return W(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Mr.mapValue&&s===Mr.mapValue)return 0;if(i===Mr.mapValue)return 1;if(s===Mr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=W(a[c],u[c]);if(h!==0)return h;const d=si(o[a[c]],l[u[c]]);if(d!==0)return d}return W(a.length,u.length)}(t.mapValue,e.mapValue);default:throw L()}}function q_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=ni(t),r=ni(e),i=W(n.seconds,r.seconds);return i!==0?i:W(n.nanos,r.nanos)}function Io(t){return Vm(t)}function Vm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ni(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ri(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Vm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Vm(r.fields[a])}`;return s+"}"}(t.mapValue):L();var e,n}function ls(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bm(t){return!!t&&"integerValue"in t}function Dl(t){return!!t&&"arrayValue"in t}function K_(t){return!!t&&"nullValue"in t}function W_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vc(t){return!!t&&"mapValue"in t}function Wa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function VV(t){return"nullValue"in t?yc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ls(ii.empty(),P.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:L()}function BV(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ls(ii.empty(),P.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Mr:L()}function H_(t,e){const n=si(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function G_(t,e){const n=si(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wa(n)}setAll(e){let n=De.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Wa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());vc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];vc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){_s(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new tt(Wa(this.value))}}function BC(t){const e=[];return _s(t.fields,(n,r)=>{const i=new De([n]);if(vc(r)){const s=BC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
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
 */class de{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new de(e,0,z.min(),z.min(),z.min(),tt.empty(),0)}static newFoundDocument(e,n,r,i){return new de(e,1,n,z.min(),r,i,0)}static newNoDocument(e,n){return new de(e,2,n,z.min(),z.min(),tt.empty(),0)}static newUnknownDocument(e,n){return new de(e,3,n,z.min(),z.min(),tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof de&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new de(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oi{constructor(e,n){this.position=e,this.inclusive=n}}function Q_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=si(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function zV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class zC{}class G extends zC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jV(e,n,r):n==="array-contains"?new WV(e,r):n==="in"?new GC(e,r):n==="not-in"?new HV(e,r):n==="array-contains-any"?new GV(e,r):new G(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qV(e,r):new KV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(si(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ie extends zC{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ie(e,n)}matches(e){return Eo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Eo(t){return t.op==="and"}function zm(t){return t.op==="or"}function wv(t){return jC(t)&&Eo(t)}function jC(t){for(const e of t.filters)if(e instanceof ie)return!1;return!0}function jm(t){if(t instanceof G)return t.field.canonicalString()+t.op.toString()+Io(t.value);if(wv(t))return t.filters.map(e=>jm(e)).join(",");{const e=t.filters.map(n=>jm(n)).join(",");return`${t.op}(${e})`}}function qC(t,e){return t instanceof G?function(n,r){return r instanceof G&&n.op===r.op&&n.field.isEqual(r.field)&&Vn(n.value,r.value)}(t,e):t instanceof ie?function(n,r){return r instanceof ie&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&qC(s,r.filters[o]),!0):!1}(t,e):void L()}function KC(t,e){const n=t.filters.concat(e);return ie.create(n,t.op)}function WC(t){return t instanceof G?function(e){return`${e.field.canonicalString()} ${e.op} ${Io(e.value)}`}(t):t instanceof ie?function(e){return e.op.toString()+" {"+e.getFilters().map(WC).join(" ,")+"}"}(t):"Filter"}class jV extends G{constructor(e,n,r){super(e,n,r),this.key=P.fromName(r.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.matchesComparison(n)}}class qV extends G{constructor(e,n){super(e,"in",n),this.keys=HC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KV extends G{constructor(e,n){super(e,"not-in",n),this.keys=HC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function HC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class WV extends G{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dl(n)&&Nl(n.arrayValue,this.value)}}class GC extends G{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Nl(this.value.arrayValue,n)}}class HV extends G{constructor(e,n){super(e,"not-in",n)}matches(e){if(Nl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Nl(this.value.arrayValue,n)}}class GV extends G{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Nl(this.value.arrayValue,r))}}/**
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
 */class QV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function qm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new QV(t,e,n,r,i,s,o)}function us(t){const e=x(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Io(r)).join(",")),e.ft=n}return e.ft}function lu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Y_(t.startAt,e.startAt)&&Y_(t.endAt,e.endAt)}function yh(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function vh(t,e){return t.filters.filter(n=>n instanceof G&&n.field.isEqual(e))}function X_(t,e,n){let r=yc,i=!0;for(const s of vh(t,e)){let o=yc,a=!0;switch(s.op){case"<":case"<=":o=VV(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=yc}H_({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];H_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function J_(t,e,n){let r=Mr,i=!0;for(const s of vh(t,e)){let o=Mr,a=!0;switch(s.op){case">=":case">":o=BV(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Mr}G_({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];G_({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class yr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function QC(t,e,n,r,i,s,o,a){return new yr(t,e,n,r,i,s,o,a)}function qo(t){return new yr(t)}function Z_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _v(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Nd(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Iv(t){return t.collectionGroup!==null}function Hi(t){const e=x(t);if(e.dt===null){e.dt=[];const n=Nd(e),r=_v(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new oo(n)),e.dt.push(new oo(De.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new oo(De.keyField(),s))}}}return e.dt}function Ft(t){const e=x(t);if(!e._t)if(e.limitType==="F")e._t=qm(e.path,e.collectionGroup,Hi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Hi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new oo(s.field,o))}const r=e.endAt?new oi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new oi(e.startAt.position,e.startAt.inclusive):null;e._t=qm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Km(t,e){e.getFirstInequalityField(),Nd(t);const n=t.filters.concat([e]);return new yr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wh(t,e,n){return new yr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uu(t,e){return lu(Ft(t),Ft(e))&&t.limitType===e.limitType}function YC(t){return`${us(Ft(t))}|lt:${t.limitType}`}function Wm(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>WC(r)).join(", ")}]`),au(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Io(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Io(r)).join(",")),`Target(${n})`}(Ft(t))}; limitType=${t.limitType})`}function cu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Hi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Q_(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Hi(n),r)||n.endAt&&!function(i,s,o){const a=Q_(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Hi(n),r))}(t,e)}function XC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function JC(t){return(e,n)=>{let r=!1;for(const i of Hi(t)){const s=YV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function YV(t,e,n){const r=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?si(a,l):L()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
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
 */class wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return FC(this.inner)}size(){return this.innerSize}}/**
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
 */const XV=new ue(P.comparator);function xt(){return XV}const ZC=new ue(P.comparator);function Aa(...t){let e=ZC;for(const n of t)e=e.insert(n.key,n);return e}function eb(t){let e=ZC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xn(){return Ha()}function tb(){return Ha()}function Ha(){return new wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const JV=new ue(P.comparator),ZV=new pe(P.comparator);function H(...t){let e=ZV;for(const n of t)e=e.add(n);return e}const e4=new pe(W);function Ev(){return e4}/**
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
 */function nb(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bl(e)?"-0":e}}function rb(t){return{integerValue:""+t}}function ib(t,e){return xC(e)?rb(e):nb(t,e)}/**
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
 */class Dd{constructor(){this._=void 0}}function t4(t,e,n){return t instanceof To?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Ad(i)&&(i=vv(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof cs?ob(t,e):t instanceof hs?ab(t,e):function(r,i){const s=sb(r,i),o=eI(s)+eI(r.wt);return Bm(s)&&Bm(r.wt)?rb(o):nb(r.serializer,o)}(t,e)}function n4(t,e,n){return t instanceof cs?ob(t,e):t instanceof hs?ab(t,e):n}function sb(t,e){return t instanceof So?Bm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class To extends Dd{}class cs extends Dd{constructor(e){super(),this.elements=e}}function ob(t,e){const n=lb(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class hs extends Dd{constructor(e){super(),this.elements=e}}function ab(t,e){let n=lb(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class So extends Dd{constructor(e,n){super(),this.serializer=e,this.wt=n}}function eI(t){return ke(t.integerValue||t.doubleValue)}function lb(t){return Dl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class hu{constructor(e,n){this.field=e,this.transform=n}}function r4(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof cs&&r instanceof cs||n instanceof hs&&r instanceof hs?_o(n.elements,r.elements,Vn):n instanceof So&&r instanceof So?Vn(n.wt,r.wt):n instanceof To&&r instanceof To}(t.transform,e.transform)}class i4{constructor(e,n){this.version=e,this.transformResults=n}}class ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ve}static exists(e){return new ve(void 0,e)}static updateTime(e){return new ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rd{}function ub(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wo(t.key,ve.none()):new Ko(t.key,t.data,ve.none());{const n=t.data,r=tt.empty();let i=new pe(De.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vr(t.key,r,new Pt(i.toArray()),ve.none())}}function s4(t,e,n){t instanceof Ko?function(r,i,s){const o=r.value.clone(),a=nI(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof vr?function(r,i,s){if(!wc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=nI(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(cb(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ga(t,e,n,r){return t instanceof Ko?function(i,s,o,a){if(!wc(i.precondition,s))return o;const l=i.value.clone(),u=rI(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof vr?function(i,s,o,a){if(!wc(i.precondition,s))return o;const l=rI(i.fieldTransforms,a,s),u=s.data;return u.setAll(cb(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return wc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function o4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=sb(r.transform,i||null);s!=null&&(n===null&&(n=tt.empty()),n.set(r.field,s))}return n||null}function tI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&_o(n,r,(i,s)=>r4(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ko extends Rd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vr extends Rd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function cb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nI(t,e,n){const r=new Map;j(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,n4(o,a,n[i]))}return r}function rI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,t4(s,o,e))}return r}class Wo extends Rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tv extends Rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Sv{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&s4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ga(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ga(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tb();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=ub(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,(n,r)=>tI(n,r))&&_o(this.baseMutations,e.baseMutations,(n,r)=>tI(n,r))}}class kv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){j(e.mutations.length===r.length);let i=JV;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new kv(e,n,r,i)}}/**
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
 */class Cv{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class a4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var xe,X;function hb(t){switch(t){default:return L();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function db(t){if(t===void 0)return Ne("GRPC error has no .code"),E.UNKNOWN;switch(t){case xe.OK:return E.OK;case xe.CANCELLED:return E.CANCELLED;case xe.UNKNOWN:return E.UNKNOWN;case xe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case xe.INTERNAL:return E.INTERNAL;case xe.UNAVAILABLE:return E.UNAVAILABLE;case xe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case xe.NOT_FOUND:return E.NOT_FOUND;case xe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case xe.ABORTED:return E.ABORTED;case xe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case xe.DATA_LOSS:return E.DATA_LOSS;default:return L()}}(X=xe||(xe={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class bv{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Wu}static getOrCreateInstance(){return Wu===null&&(Wu=new bv),Wu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Wu=null;/**
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
 */function fb(){return new TextEncoder}/**
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
 */const l4=new so([4294967295,4294967295],0);function iI(t){const e=fb().encode(t),n=new nV;return n.update(e),new Uint8Array(n.digest())}function sI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new so([n,r],0),new so([i,s],0)]}class Av{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Na(`Invalid padding: ${n}`);if(r<0)throw new Na(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Na(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Na(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=so.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(so.fromNumber(r)));return i.compare(l4)===1&&(i=new so([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=iI(e),[r,i]=sI(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Av(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=iI(e),[r,i]=sI(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Na extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class du{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,fu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new du(z.min(),i,new ue(W),xt(),H())}}class fu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fu(r,n,H(),H(),H())}}/**
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
 */class _c{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class pb{constructor(e,n){this.targetId=e,this.bt=n}}class mb{constructor(e,n,r=Ve.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class oI{constructor(){this.Vt=0,this.St=lI(),this.Dt=Ve.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=H(),n=H(),r=H();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:L()}}),new fu(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=lI()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class u4{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=xt(),this.jt=aI(),this.zt=new ue(W)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:L()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(yh(o))if(i===0){const a=new P(o.path);this.Jt(r,a,de.newNoDocument(a,z.min()))}else j(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=bv.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,p,y,v,I,m;const f={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(f.bloomFilter={applied:u===0,hashCount:(d=g==null?void 0:g.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(p=g==null?void 0:g.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(m=(I=g==null?void 0:g.bits)===null||I===void 0?void 0:I.padding)!==null&&m!==void 0?m:0}),f}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=ri(s).toUint8Array()}catch(c){if(c instanceof UC)return En("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Av(l,o,a)}catch(c){return En(c instanceof Na?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&yh(a.target)){const l=new P(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,de.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=H();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new du(e,n,this.zt,this.Qt,r);return this.Qt=xt(),this.jt=aI(),this.zt=new ue(W),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new oI,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new pe(W),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new oI),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function aI(){return new ue(P.comparator)}function lI(){return new ue(P.comparator)}const c4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),h4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),d4=(()=>({and:"AND",or:"OR"}))();class f4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hm(t,e){return t.useProto3Json||au(e)?e:{value:e}}function ko(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function p4(t,e){return ko(t,e.toTimestamp())}function Re(t){return j(!!t),z.fromTimestamp(function(e){const n=ni(e);return new we(n.seconds,n.nanos)}(t))}function Nv(t,e){return function(n){return new Z(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function yb(t){const e=Z.fromString(t);return j(Cb(e)),e}function Rl(t,e){return Nv(t.databaseId,e.path)}function $n(t,e){const n=yb(e);if(n.get(1)!==t.databaseId.projectId)throw new k(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(wb(n))}function Gm(t,e){return Nv(t.databaseId,e)}function vb(t){const e=yb(t);return e.length===4?Z.emptyPath():wb(e)}function Pl(t){return new Z(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wb(t){return j(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uI(t,e,n){return{name:Rl(t,e),fields:n.value.mapValue.fields}}function _b(t,e,n){const r=$n(t,e.name),i=Re(e.updateTime),s=e.createTime?Re(e.createTime):z.min(),o=new tt({mapValue:{fields:e.fields}}),a=de.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function m4(t,e){return"found"in e?function(n,r){j(!!r.found),r.found.name,r.found.updateTime;const i=$n(n,r.found.name),s=Re(r.found.updateTime),o=r.found.createTime?Re(r.found.createTime):z.min(),a=new tt({mapValue:{fields:r.found.fields}});return de.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){j(!!r.missing),j(!!r.readTime);const i=$n(n,r.missing),s=Re(r.readTime);return de.newNoDocument(i,s)}(t,e):L()}function g4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(j(u===void 0||typeof u=="string"),Ve.fromBase64String(u||"")):(j(u===void 0||u instanceof Uint8Array),Ve.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:db(l.code);return new k(u,l.message||"")}(o);n=new mb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$n(t,r.document.name),s=Re(r.document.updateTime),o=r.document.createTime?Re(r.document.createTime):z.min(),a=new tt({mapValue:{fields:r.document.fields}}),l=de.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new _c(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$n(t,r.document),s=r.readTime?Re(r.readTime):z.min(),o=de.newNoDocument(i,s),a=r.removedTargetIds||[];n=new _c([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$n(t,r.document),s=r.removedTargetIds||[];n=new _c([],s,i,null)}else{if(!("filter"in e))return L();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new a4(i,s),a=r.targetId;n=new pb(a,o)}}return n}function xl(t,e){let n;if(e instanceof Ko)n={update:uI(t,e.key,e.value)};else if(e instanceof Wo)n={delete:Rl(t,e.key)};else if(e instanceof vr)n={update:uI(t,e.key,e.data),updateMask:E4(e.fieldMask)};else{if(!(e instanceof Tv))return L();n={verify:Rl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof To)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof cs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof hs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof So)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw L()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:p4(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:L()}(t,e.precondition)),n}function Qm(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?ve.updateTime(Re(i.updateTime)):i.exists!==void 0?ve.exists(i.exists):ve.none()}(e.currentDocument):ve.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)j(o.setToServerValue==="REQUEST_TIME"),a=new To;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new cs(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new hs(u)}else"increment"in o?a=new So(s,o.increment):L();const l=De.fromServerFormat(o.fieldPath);return new hu(l,a)}(t,i)):[];if(e.update){e.update.name;const i=$n(t,e.update.name),s=new tt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const l=a.fieldPaths||[];return new Pt(l.map(u=>De.fromServerFormat(u)))}(e.updateMask);return new vr(i,s,o,n,r)}return new Ko(i,s,n,r)}if(e.delete){const i=$n(t,e.delete);return new Wo(i,n)}if(e.verify){const i=$n(t,e.verify);return new Tv(i,n)}return L()}function y4(t,e){return t&&t.length>0?(j(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Re(r.updateTime):Re(i);return s.isEqual(z.min())&&(s=Re(i)),new i4(s,r.transformResults||[])}(n,e))):[]}function Ib(t,e){return{documents:[Gm(t,e.path)]}}function Eb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Gm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return kb(ie.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ds(c.field),direction:w4(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Hm(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Tb(t){let e=vb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){j(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=Sb(c);return h instanceof ie&&wv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new oo(Rs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,au(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new oi(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new oi(d,h)}(n.endAt)),QC(e,i,o,s,a,"F",l,u)}function v4(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Sb(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Rs(e.unaryFilter.field);return G.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Rs(e.unaryFilter.field);return G.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rs(e.unaryFilter.field);return G.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Rs(e.unaryFilter.field);return G.create(s,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(t):t.fieldFilter!==void 0?function(e){return G.create(Rs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ie.create(e.compositeFilter.filters.map(n=>Sb(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(t):L()}function w4(t){return c4[t]}function _4(t){return h4[t]}function I4(t){return d4[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function Rs(t){return De.fromServerFormat(t.fieldPath)}function kb(t){return t instanceof G?function(e){if(e.op==="=="){if(W_(e.value))return{unaryFilter:{field:Ds(e.field),op:"IS_NAN"}};if(K_(e.value))return{unaryFilter:{field:Ds(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(W_(e.value))return{unaryFilter:{field:Ds(e.field),op:"IS_NOT_NAN"}};if(K_(e.value))return{unaryFilter:{field:Ds(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(e.field),op:_4(e.op),value:e.value}}}(t):t instanceof ie?function(e){const n=e.getFilters().map(r=>kb(r));return n.length===1?n[0]:{compositeFilter:{op:I4(e.op),filters:n}}}(t):L()}function E4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Cb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class tr{constructor(e,n,r,i,s=z.min(),o=z.min(),a=Ve.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class bb{constructor(e){this.le=e}}function T4(t,e){let n;if(e.document)n=_b(t.le,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=P.fromSegments(e.noDocument.path),i=fs(e.noDocument.readTime);n=de.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return L();{const r=P.fromSegments(e.unknownDocument.path),i=fs(e.unknownDocument.version);n=de.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new we(r[0],r[1]);return z.fromTimestamp(i)}(e.readTime)),n}function cI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:_h(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Rl(i,s.key),fields:s.data.value.mapValue.fields,updateTime:ko(i,s.version.toTimestamp()),createTime:ko(i,s.createTime.toTimestamp())}}(t.le,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ds(e.version)};else{if(!e.isUnknownDocument())return L();r.unknownDocument={path:n.path.toArray(),version:ds(e.version)}}return r}function _h(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ds(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function fs(t){const e=new we(t.seconds,t.nanoseconds);return z.fromTimestamp(e)}function Ai(t,e){const n=(e.baseMutations||[]).map(s=>Qm(t.le,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Qm(t.le,s)),i=we.fromMillis(e.localWriteTimeMs);return new Sv(e.batchId,i,n,r)}function Da(t){const e=fs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?fs(t.lastLimboFreeSnapshotVersion):z.min();let r;var i;return t.query.documents!==void 0?(j((i=t.query).documents.length===1),r=Ft(qo(vb(i.documents[0])))):r=function(s){return Ft(Tb(s))}(t.query),new tr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Ve.fromBase64String(t.resumeToken))}function Ab(t,e){const n=ds(e.snapshotVersion),r=ds(e.lastLimboFreeSnapshotVersion);let i;i=yh(e.target)?Ib(t.le,e.target):Eb(t.le,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:us(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Dv(t){const e=Tb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wh(e,e.limit,"L"):e}function op(t,e){return new Cv(e.largestBatchId,Qm(t.le,e.overlayMutation))}function hI(t,e){const n=e.path.lastSegment();return[t,St(e.path.popLast()),n]}function dI(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:ds(r.readTime),documentKey:St(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class S4{getBundleMetadata(e,n){return fI(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:fs(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return fI(e).put({bundleId:(r=n).id,createTime:ds(Re(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return pI(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Dv(i.bundledQuery),readTime:fs(i.readTime)};var i})}saveNamedQuery(e,n){return pI(e).put(function(r){return{name:r.name,readTime:ds(Re(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function fI(t){return Ye(t,"bundles")}function pI(t){return Ye(t,"namedQueries")}/**
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
 */class Pd{constructor(e,n){this.serializer=e,this.userId=n}static fe(e,n){const r=n.uid||"";return new Pd(e,r)}getOverlay(e,n){return pa(e).get(hI(this.userId,n)).next(r=>r?op(this.serializer,r):null)}getOverlays(e,n){const r=xn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Cv(n,o);i.push(this.de(e,a))}),_.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(St(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(pa(e).J("collectionPathOverlayIndex",a))}),_.waitFor(s)}getOverlaysForCollection(e,n,r){const i=xn(),s=St(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return pa(e).j("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=op(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=xn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return pa(e).X({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=op(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}de(e,n){return pa(e).put(function(r,i,s){const[o,a,l]=hI(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:l,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:xl(r.le,s.mutation)}}(this.serializer,this.userId,n))}}function pa(t){return Ye(t,"documentOverlays")}/**
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
 */class Ni{constructor(){}_e(e,n){this.we(e,n),n.me()}we(e,n){if("nullValue"in e)this.ge(n,5);else if("booleanValue"in e)this.ge(n,10),n.ye(e.booleanValue?1:0);else if("integerValue"in e)this.ge(n,15),n.ye(ke(e.integerValue));else if("doubleValue"in e){const r=ke(e.doubleValue);isNaN(r)?this.ge(n,13):(this.ge(n,15),bl(r)?n.ye(0):n.ye(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ge(n,20),typeof r=="string"?n.pe(r):(n.pe(`${r.seconds||""}`),n.ye(r.nanos||0))}else if("stringValue"in e)this.Ie(e.stringValue,n),this.Te(n);else if("bytesValue"in e)this.ge(n,30),n.Ee(ri(e.bytesValue)),this.Te(n);else if("referenceValue"in e)this.Ae(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ge(n,45),n.ye(r.latitude||0),n.ye(r.longitude||0)}else"mapValue"in e?VC(e)?this.ge(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Te(n)):"arrayValue"in e?(this.ve(e.arrayValue,n),this.Te(n)):L()}Ie(e,n){this.ge(n,25),this.Pe(e,n)}Pe(e,n){n.pe(e)}Re(e,n){const r=e.fields||{};this.ge(n,55);for(const i of Object.keys(r))this.Ie(i,n),this.we(r[i],n)}ve(e,n){const r=e.values||[];this.ge(n,50);for(const i of r)this.we(i,n)}Ae(e,n){this.ge(n,37),P.fromName(e).path.forEach(r=>{this.ge(n,60),this.Pe(r,n)})}ge(e,n){e.ye(n)}Te(e){e.ye(2)}}Ni.be=new Ni;function k4(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function mI(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=k4(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class C4{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ve(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Se(r.value),r=n.next();this.De()}Ce(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.xe(r.value),r=n.next();this.Ne()}ke(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Se(r);else if(r<2048)this.Se(960|r>>>6),this.Se(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Se(480|r>>>12),this.Se(128|63&r>>>6),this.Se(128|63&r);else{const i=n.codePointAt(0);this.Se(240|i>>>18),this.Se(128|63&i>>>12),this.Se(128|63&i>>>6),this.Se(128|63&i)}}this.De()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.xe(r);else if(r<2048)this.xe(960|r>>>6),this.xe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.xe(480|r>>>12),this.xe(128|63&r>>>6),this.xe(128|63&r);else{const i=n.codePointAt(0);this.xe(240|i>>>18),this.xe(128|63&i>>>12),this.xe(128|63&i>>>6),this.xe(128|63&i)}}this.Ne()}Oe(e){const n=this.$e(e),r=mI(n);this.Fe(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Be(e){const n=this.$e(e),r=mI(n);this.Fe(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Le(){this.qe(255),this.qe(255)}Ue(){this.Ke(255),this.Ke(255)}reset(){this.position=0}seed(e){this.Fe(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ge(){return this.buffer.slice(0,this.position)}$e(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Se(e){const n=255&e;n===0?(this.qe(0),this.qe(255)):n===255?(this.qe(255),this.qe(0)):this.qe(n)}xe(e){const n=255&e;n===0?(this.Ke(0),this.Ke(255)):n===255?(this.Ke(255),this.Ke(0)):this.Ke(e)}De(){this.qe(0),this.qe(1)}Ne(){this.Ke(0),this.Ke(1)}qe(e){this.Fe(1),this.buffer[this.position++]=e}Ke(e){this.Fe(1),this.buffer[this.position++]=~e}Fe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class b4{constructor(e){this.Qe=e}Ee(e){this.Qe.Ve(e)}pe(e){this.Qe.ke(e)}ye(e){this.Qe.Oe(e)}me(){this.Qe.Le()}}class A4{constructor(e){this.Qe=e}Ee(e){this.Qe.Ce(e)}pe(e){this.Qe.Me(e)}ye(e){this.Qe.Be(e)}me(){this.Qe.Ue()}}class ma{constructor(){this.Qe=new C4,this.je=new b4(this.Qe),this.ze=new A4(this.Qe)}seed(e){this.Qe.seed(e)}We(e){return e===0?this.je:this.ze}Ge(){return this.Qe.Ge()}reset(){this.Qe.reset()}}/**
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
 */class Di{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}He(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Di(this.indexId,this.documentKey,this.arrayValue,r)}}function Sr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=gI(t.arrayValue,e.arrayValue),n!==0?n:(n=gI(t.directionalValue,e.directionalValue),n!==0?n:P.comparator(t.documentKey,e.documentKey)))}function gI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class N4{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Je=e.orderBy,this.Ye=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xe=r:this.Ye.push(r)}}Ze(e){j(e.collectionGroup===this.collectionId);const n=Fm(e);if(n!==void 0&&!this.tn(n))return!1;const r=Ci(e);let i=0,s=0;for(;i<r.length&&this.tn(r[i]);++i);if(i===r.length)return!0;if(this.Xe!==void 0){const o=r[i];if(!this.en(this.Xe,o)||!this.nn(this.Je[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Je.length||!this.nn(this.Je[s++],o))return!1}return!0}tn(e){for(const n of this.Ye)if(this.en(n,e))return!0;return!1}en(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}nn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function Nb(t){var e,n;if(j(t instanceof G||t instanceof ie),t instanceof G){if(t instanceof GC){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>G.create(t.field,"==",s)))||[];return ie.create(i,"or")}return t}const r=t.filters.map(i=>Nb(i));return ie.create(r,t.op)}function D4(t){if(t.getFilters().length===0)return[];const e=Jm(Nb(t));return j(Db(e)),Ym(e)||Xm(e)?[e]:e.getFilters()}function Ym(t){return t instanceof G}function Xm(t){return t instanceof ie&&wv(t)}function Db(t){return Ym(t)||Xm(t)||function(e){if(e instanceof ie&&zm(e)){for(const n of e.getFilters())if(!Ym(n)&&!Xm(n))return!1;return!0}return!1}(t)}function Jm(t){if(j(t instanceof G||t instanceof ie),t instanceof G)return t;if(t.filters.length===1)return Jm(t.filters[0]);const e=t.filters.map(r=>Jm(r));let n=ie.create(e,t.op);return n=Ih(n),Db(n)?n:(j(n instanceof ie),j(Eo(n)),j(n.filters.length>1),n.filters.reduce((r,i)=>Rv(r,i)))}function Rv(t,e){let n;return j(t instanceof G||t instanceof ie),j(e instanceof G||e instanceof ie),n=t instanceof G?e instanceof G?function(r,i){return ie.create([r,i],"and")}(t,e):yI(t,e):e instanceof G?yI(e,t):function(r,i){if(j(r.filters.length>0&&i.filters.length>0),Eo(r)&&Eo(i))return KC(r,i.getFilters());const s=zm(r)?r:i,o=zm(r)?i:r,a=s.filters.map(l=>Rv(l,o));return ie.create(a,"or")}(t,e),Ih(n)}function yI(t,e){if(Eo(e))return KC(e,t.getFilters());{const n=e.filters.map(r=>Rv(t,r));return ie.create(n,"or")}}function Ih(t){if(j(t instanceof G||t instanceof ie),t instanceof G)return t;const e=t.getFilters();if(e.length===1)return Ih(e[0]);if(jC(t))return t;const n=e.map(i=>Ih(i)),r=[];return n.forEach(i=>{i instanceof G?r.push(i):i instanceof ie&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ie.create(r,t.op)}/**
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
 */class R4{constructor(){this.sn=new Pv}addToCollectionParentIndex(e,n){return this.sn.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(Wt.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(Wt.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class Pv{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pe(Z.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pe(Z.comparator)).toArray()}}/**
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
 */const Hu=new Uint8Array(0);class P4{constructor(e,n){this.user=e,this.databaseId=n,this.rn=new Pv,this.on=new wi(r=>us(r),(r,i)=>lu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.rn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.rn.add(n)});const s={collectionId:r,parent:St(i)};return vI(e).put(s)}return _.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[bC(n),""],!1,!0);return vI(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Pn(o.parent))}return r})}addFieldIndex(e,n){const r=Gu(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ya(e);return s.next(a=>{o.put(dI(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Gu(e),i=ya(e),s=ga(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=ga(e);let i=!0;const s=new Map;return _.forEach(this.un(n),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=H();const a=[];return _.forEach(s,(l,u)=>{var c;C("IndexedDbIndexManager",`Using index ${c=l,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(g=>`${g.fieldPath}:${g.kind}`).join(",")}`} to execute ${us(n)}`);const h=function(g,w){const S=Fm(w);if(S===void 0)return null;for(const b of vh(g,S.fieldPath))switch(b.op){case"array-contains-any":return b.value.arrayValue.values||[];case"array-contains":return[b.value]}return null}(u,l),d=function(g,w){const S=new Map;for(const b of Ci(w))for(const D of vh(g,b.fieldPath))switch(D.op){case"==":case"in":S.set(b.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return S.set(b.fieldPath.canonicalString(),D.value),Array.from(S.values())}return null}(u,l),p=function(g,w){const S=[];let b=!0;for(const D of Ci(w)){const R=D.kind===0?X_(g,D.fieldPath,g.startAt):J_(g,D.fieldPath,g.startAt);S.push(R.value),b&&(b=R.inclusive)}return new oi(S,b)}(u,l),y=function(g,w){const S=[];let b=!0;for(const D of Ci(w)){const R=D.kind===0?J_(g,D.fieldPath,g.endAt):X_(g,D.fieldPath,g.endAt);S.push(R.value),b&&(b=R.inclusive)}return new oi(S,b)}(u,l),v=this.an(l,u,p),I=this.an(l,u,y),m=this.hn(l,u,d),f=this.ln(l.indexId,h,v,p.inclusive,I,y.inclusive,m);return _.forEach(f,g=>r.H(g,n.limit).next(w=>{w.forEach(S=>{const b=P.fromSegments(S.documentKey);o.has(b)||(o=o.add(b),a.push(b))})}))}).next(()=>a)}return _.resolve(null)})}un(e){let n=this.on.get(e);return n||(e.filters.length===0?n=[e]:n=D4(ie.create(e.filters,"and")).map(r=>qm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.on.set(e,n),n)}ln(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.fn(n[h/u]):Hu,p=this.dn(e,d,r[h%u],i),y=this._n(e,d,s[h%u],o),v=a.map(I=>this.dn(e,d,I,!0));c.push(...this.createRange(p,y,v))}return c}dn(e,n,r,i){const s=new Di(e,P.empty(),n,r);return i?s:s.He()}_n(e,n,r,i){const s=new Di(e,P.empty(),n,r);return i?s.He():s}cn(e,n){const r=new N4(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Ze(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.un(n);return _.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let l=new pe(De.comparator),u=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:l=l.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(l=l.add(c.field));return l.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}wn(e,n){const r=new ma;for(const i of Ci(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.We(i.kind);Ni.be._e(s,o)}return r.Ge()}fn(e){const n=new ma;return Ni.be._e(e,n.We(0)),n.Ge()}mn(e,n){const r=new ma;return Ni.be._e(ls(this.databaseId,n),r.We(function(i){const s=Ci(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Ge()}hn(e,n,r){if(r===null)return[];let i=[];i.push(new ma);let s=0;for(const o of Ci(e)){const a=r[s++];for(const l of i)if(this.gn(n,o.fieldPath)&&Dl(a))i=this.yn(i,o,a);else{const u=l.We(o.kind);Ni.be._e(a,u)}}return this.pn(i)}an(e,n,r){return this.hn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Ge();return n}yn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new ma;l.seed(a.Ge()),Ni.be._e(o,l.We(n.kind)),s.push(l)}return s}gn(e,n){return!!e.filters.find(r=>r instanceof G&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Gu(e),i=ya(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return _.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(u,c){const h=c?new gh(c.sequenceNumber,new Wt(fs(c.readTime),new P(Pn(c.documentKey)),c.largestBatchId)):gh.empty(),d=u.fields.map(([p,y])=>new pV(De.fromServerFormat(p),y));return new AC(u.indexId,u.collectionGroup,d,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:W(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Gu(e),s=ya(e);return this.In(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>_.forEach(a,l=>s.put(dI(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return _.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?_.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),_.forEach(a,l=>this.Tn(e,i,l).next(u=>{const c=this.En(s,l);return u.isEqual(c)?_.resolve():this.An(e,s,l,u,c)}))))})}Rn(e,n,r,i){return ga(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return ga(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}Tn(e,n,r){const i=ga(e);let s=new pe(Sr);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new Di(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}En(e,n){let r=new pe(Sr);const i=this.wn(n,e);if(i==null)return r;const s=Fm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Dl(o))for(const a of o.arrayValue.values||[])r=r.add(new Di(n.indexId,e.key,this.fn(a),i))}else r=r.add(new Di(n.indexId,e.key,Hu,i));return r}An(e,n,r,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,l,u,c,h){const d=a.getIterator(),p=l.getIterator();let y=As(d),v=As(p);for(;y||v;){let I=!1,m=!1;if(y&&v){const f=u(y,v);f<0?m=!0:f>0&&(I=!0)}else y!=null?m=!0:I=!0;I?(c(v),v=As(p)):m?(h(y),y=As(d)):(y=As(d),v=As(p))}}(i,s,Sr,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),_.waitFor(o)}In(e){let n=1;return ya(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Sr(o,a)).filter((o,a,l)=>!a||Sr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Sr(o,e),l=Sr(o,n);if(a===0)i[0]=e.He();else if(a>0&&l<0)i.push(o),i.push(o.He());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Hu,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Hu,[]];s.push(IDBKeyRange.bound(a,l))}return s}Pn(e,n){return Sr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(wI)}getMinOffset(e,n){return _.mapArray(this.un(n),r=>this.cn(e,r).next(i=>i||L())).next(wI)}}function vI(t){return Ye(t,"collectionParents")}function ga(t){return Ye(t,"indexEntries")}function Gu(t){return Ye(t,"indexConfiguration")}function ya(t){return Ye(t,"indexState")}function wI(t){j(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;gv(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Wt(e.readTime,e.documentKey,n)}/**
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
 */const _I={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class At{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new At(e,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Rb(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.X({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{j(a===1)}));const u=[];for(const c of n.mutations){const h=OC(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return _.waitFor(s).next(()=>u)}function Eh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw L();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(41943040,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);class xd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static fe(e,n,r,i){j(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new xd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return kr(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Ps(e),o=kr(e);return o.add({}).next(a=>{j(typeof a=="number");const l=new Sv(a,n,r,i),u=function(d,p,y){const v=y.baseMutations.map(m=>xl(d.le,m)),I=y.mutations.map(m=>xl(d.le,m));return{userId:p,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:I}}(this.serializer,this.userId,l),c=[];let h=new pe((d,p)=>W(d.canonicalString(),p.canonicalString()));for(const d of i){const p=OC(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(p,_V))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=l.keys()}),_.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return kr(e).get(n).next(r=>r?(j(r.userId===this.userId),Ai(this.serializer,r)):null)}Vn(e,n){return this.bn[n]?_.resolve(this.bn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.bn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return kr(e).X({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(j(a.batchId>=r),s=Ai(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return kr(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return kr(e).j("userMutationsIndex",n).next(r=>r.map(i=>Ai(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=gc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Ps(e).X({range:i},(o,a,l)=>{const[u,c,h]=o,d=Pn(c);if(u===this.userId&&n.path.isEqual(d))return kr(e).get(h).next(p=>{if(!p)throw L();j(p.userId===this.userId),s.push(Ai(this.serializer,p))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(W);const i=[];return n.forEach(s=>{const o=gc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Ps(e).X({range:a},(u,c,h)=>{const[d,p,y]=u,v=Pn(p);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(l)}),_.waitFor(i).next(()=>this.Sn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=gc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new pe(W);return Ps(e).X({range:o},(l,u,c)=>{const[h,d,p]=l,y=Pn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):c.done()}).next(()=>this.Sn(e,a))}Sn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(kr(e).get(s).next(o=>{if(o===null)throw L();j(o.userId===this.userId),r.push(Ai(this.serializer,o))}))}),_.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return Rb(e.at,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Dn(n.batchId)}),_.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Dn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return _.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Ps(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Pn(s[1]);i.push(l)}else a.done()}).next(()=>{j(i.length===0)})})}containsKey(e,n){return Pb(e,this.userId,n)}Cn(e){return xb(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Pb(t,e,n){const r=gc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ps(t).X({range:s,Y:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function kr(t){return Ye(t,"mutations")}function Ps(t){return Ye(t,"documentMutations")}function xb(t){return Ye(t,"mutationQueues")}/**
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
 */class ps{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new ps(0)}static kn(){return new ps(-1)}}/**
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
 */class x4{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Mn(e).next(n=>{const r=new ps(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Mn(e).next(n=>z.fromTimestamp(new we(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Mn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Mn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.$n(e,n).next(()=>this.Mn(e).next(r=>(r.targetCount+=1,this.Fn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.$n(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ns(e).delete(n.targetId)).next(()=>this.Mn(e)).next(r=>(j(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ns(e).X((o,a)=>{const l=Da(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>_.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ns(e).X((r,i)=>{const s=Da(i);n(s)})}Mn(e){return II(e).get("targetGlobalKey").next(n=>(j(n!==null),n))}On(e,n){return II(e).put("targetGlobalKey",n)}$n(e,n){return Ns(e).put(Ab(this.serializer,n))}Fn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Mn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=us(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ns(e).X({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Da(a);lu(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Rr(e);return n.forEach(o=>{const a=St(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),_.waitFor(i)}removeMatchingKeys(e,n,r){const i=Rr(e);return _.forEach(n,s=>{const o=St(s.path);return _.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Rr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Rr(e);let s=H();return i.X({range:r,Y:!0},(o,a,l)=>{const u=Pn(o[1]),c=new P(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=St(n.path),i=IDBKeyRange.bound([r],[bC(r)],!1,!0);let s=0;return Rr(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}he(e,n){return Ns(e).get(n).next(r=>r?Da(r):null)}}function Ns(t){return Ye(t,"targets")}function II(t){return Ye(t,"targetGlobal")}function Rr(t){return Ye(t,"targetDocuments")}/**
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
 */function EI([t,e],[n,r]){const i=W(t,n);return i===0?W(e,r):i}class O4{constructor(e){this.Bn=e,this.buffer=new pe(EI),this.Ln=0}qn(){return++this.Ln}Un(e){const n=[e,this.qn()];if(this.buffer.size<this.Bn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();EI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class L4{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Kn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Kn&&(this.Kn.cancel(),this.Kn=null)}get started(){return this.Kn!==null}Gn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Kn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Kn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){vi(n)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await yi(n)}await this.Gn(3e5)})}}class M4{constructor(e,n){this.Qn=e,this.params=n}calculateTargetCount(e,n){return this.Qn.jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return _.resolve(Rt.ct);const r=new O4(n);return this.Qn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.Qn.zn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Qn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Qn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),_.resolve(_I)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_I):this.Wn(e,n))}getCacheSize(e){return this.Qn.getCacheSize(e)}Wn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),$m()<=J.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),_.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function $4(t,e){return new M4(t,e)}/**
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
 */class F4{constructor(e,n){this.db=e,this.garbageCollector=$4(this,n)}jn(e){const n=this.Hn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Hn(e){let n=0;return this.zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}zn(e,n){return this.Jn(e,(r,i)=>n(i))}addReference(e,n,r){return Qu(e,r)}removeReference(e,n,r){return Qu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Qu(e,n)}Yn(e,n){return function(r,i){let s=!1;return xb(r).Z(o=>Pb(r,o,i).next(a=>(a&&(s=!0),_.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Jn(e,(o,a)=>{if(a<=n){const l=this.Yn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,z.min()),Rr(e).delete([0,St(o.path)])))});i.push(l)}}).next(()=>_.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Qu(e,n)}Jn(e,n){const r=Rr(e);let i,s=Rt.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Rt.ct&&n(new P(Pn(i)),s),s=u,i=l):s=Rt.ct}).next(()=>{s!==Rt.ct&&n(new P(Pn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Qu(t,e){return Rr(t).put(function(n,r){return{targetId:0,path:St(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class Ob{constructor(){this.changes=new wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,de.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class U4{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ei(e).put(r)}removeEntry(e,n,r){return Ei(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],_h(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Xn(e,r)))}getEntry(e,n){let r=de.newInvalidDocument(n);return Ei(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(va(n))},(i,s)=>{r=this.Zn(n,s)}).next(()=>r)}ts(e,n){let r={size:0,document:de.newInvalidDocument(n)};return Ei(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(va(n))},(i,s)=>{r={document:this.Zn(n,s),size:Eh(s)}}).next(()=>r)}getEntries(e,n){let r=xt();return this.es(e,n,(i,s)=>{const o=this.Zn(i,s);r=r.insert(i,o)}).next(()=>r)}ns(e,n){let r=xt(),i=new ue(P.comparator);return this.es(e,n,(s,o)=>{const a=this.Zn(s,o);r=r.insert(s,a),i=i.insert(s,Eh(o))}).next(()=>({documents:r,ss:i}))}es(e,n,r){if(n.isEmpty())return _.resolve();let i=new pe(kI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(va(i.first()),va(i.last())),o=i.getIterator();let a=o.getNext();return Ei(e).X({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=P.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&kI(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.G(va(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),_h(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ei(e).j(IDBKeyRange.bound(o,a,!0)).next(l=>{let u=xt();for(const c of l){const h=this.Zn(P.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);h.isFoundDocument()&&(cu(n,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=xt();const o=SI(n,r),a=SI(n,Wt.max());return Ei(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.Zn(P.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new V4(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return TI(e).get("remoteDocumentGlobalKey").next(n=>(j(!!n),n))}Xn(e,n){return TI(e).put("remoteDocumentGlobalKey",n)}Zn(e,n){if(n){const r=T4(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(z.min())))return r}return de.newInvalidDocument(e)}}function Lb(t){return new U4(t)}class V4 extends Ob{constructor(e,n){super(),this.rs=e,this.trackRemovals=n,this.os=new wi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new pe((s,o)=>W(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.os.get(s);if(n.push(this.rs.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=cI(this.rs.serializer,o);i=i.add(s.path.popLast());const u=Eh(l);r+=u-a.size,n.push(this.rs.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=cI(this.rs.serializer,o.convertToNoDocument(z.min()));n.push(this.rs.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.rs.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.rs.updateMetadata(e,r)),_.waitFor(n)}getFromCache(e,n){return this.rs.ts(e,n).next(r=>(this.os.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.rs.ns(e,n).next(({documents:r,ss:i})=>(i.forEach((s,o)=>{this.os.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function TI(t){return Ye(t,"remoteDocumentGlobal")}function Ei(t){return Ye(t,"remoteDocumentsV14")}function va(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function SI(t,e){const n=e.documentKey.path.toArray();return[t,_h(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function kI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=W(n[s],r[s]),i)return i;return i=W(n.length,r.length),i||(i=W(n[n.length-2],r[r.length-2]),i||W(n[n.length-1],r[r.length-1]))}/**
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
 */class B4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Mb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ga(r.mutation,i,Pt.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=xn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Aa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=xt();const o=Ha(),a=Ha();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof vr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ga(c.mutation,u,c.mutation.getFieldMask(),we.now())):o.set(u.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new B4(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ha();let i=new ue((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Pt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=tb();c.forEach(d=>{if(!s.has(d)){const p=ub(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Iv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(xn());let a=-1,l=s;return o.next(u=>_.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?_.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:eb(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new P(n)).next(r=>{let i=Aa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Aa();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const l=function(u,c){return new yr(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,de.newInvalidDocument(u)))});let o=Aa();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ga(u.mutation,l,Pt.empty(),we.now()),cu(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class z4{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return _.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:Re(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:Dv(r.bundledQuery),readTime:Re(r.readTime)}}(n)),_.resolve()}}/**
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
 */class j4{constructor(){this.overlays=new ue(P.comparator),this.hs=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=xn(),s=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ue((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=xn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=xn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return _.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Cv(n,r));let s=this.hs.get(n);s===void 0&&(s=H(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class xv{constructor(){this.ls=new pe(ze.fs),this.ds=new pe(ze._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new ze(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new ze(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new P(new Z([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new P(new Z([])),r=new ze(n,e),i=new ze(n,e+1);let s=H();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return P.comparator(e.key,n.key)||W(e.Es,n.Es)}static _s(e,n){return W(e.Es,n.Es)||P.comparator(e.key,n.key)}}/**
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
 */class q4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new pe(ze.fs)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sv(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pe(W);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),_.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new ze(new P(s),0);let a=new pe(W);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),_.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){j(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return _.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new ze(n,0),i=this.Rs.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class K4{constructor(e){this.Ss=e,this.docs=new ue(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():de.newInvalidDocument(n))}getEntries(e,n){let r=xt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():de.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=xt();const o=n.path,a=new P(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||gv(DC(c),r)<=0||(i.has(c.key)||cu(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(e,n,r,i){L()}Ds(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new W4(this)}getSize(e){return _.resolve(this.size)}}class W4 extends Ob{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class H4{constructor(e){this.persistence=e,this.Cs=new wi(n=>us(n),lu),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.xs=0,this.Ns=new xv,this.targetCount=0,this.ks=ps.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),_.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.$n(n),_.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.Ns.containsKey(n))}}/**
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
 */class $b{constructor(e,n){this.Ms={},this.overlays={},this.Os=new Rt(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new H4(this),this.indexManager=new R4,this.remoteDocumentCache=function(r){return new K4(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new bb(n),this.Ls=new z4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new j4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new q4(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){C("MemoryPersistence","Starting transaction:",e);const i=new G4(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return _.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class G4 extends PC{constructor(e){super(),this.currentSequenceNumber=e}}class Od{constructor(e){this.persistence=e,this.Gs=new xv,this.Qs=null}static js(e){return new Od(e)}get zs(){if(this.Qs)return this.Qs;throw L()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),_.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.zs,r=>{const i=P.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return _.or([()=>_.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class Q4{constructor(e){this.serializer=e}$(e,n,r,i){const s=new bd("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",B_,{unique:!0}),a.createObjectStore("documentMutations")}(e),CI(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=_.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),CI(e)),o=o.next(()=>function(a){const l=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,l){return l.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",B_,{unique:!0});const c=l.store("mutations"),h=u.map(d=>c.put(d));return _.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Js(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ys(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xs(s))),r<8&&i>=8&&(o=o.next(()=>this.Zs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const l=a.createObjectStore("documentOverlays",{keyPath:PV});l.createIndex("collectionPathOverlayIndex",xV,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",OV,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const l=a.createObjectStore("remoteDocumentsV14",{keyPath:IV});l.createIndex("documentKeyIndex",EV),l.createIndex("collectionGroupIndex",TV)}(e)).next(()=>this.ei(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ni(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:AV}).createIndex("sequenceNumberIndex",NV,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:DV}).createIndex("documentKeyIndex",RV,{unique:!1})}(e))),o}Ys(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=Eh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Js(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>_.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>_.forEach(a,l=>{j(l.userId===s.userId);const u=Ai(this.serializer,l);return Rb(e,s.userId,u).next(()=>{})}))}))}Xs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const l=new Z(o),u=function(c){return[0,St(c)]}(l);s.push(n.get(u).next(c=>c?_.resolve():(h=>n.put({targetId:0,path:St(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>_.waitFor(s))})}Zs(e,n){e.createObjectStore("collectionParents",{keyPath:bV});const r=n.store("collectionParents"),i=new Pv,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:St(l)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const l=new Z(o);return s(l.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,l],u)=>{const c=Pn(a);return s(c.popLast())}))}ti(e){const n=e.store("targets");return n.X((r,i)=>{const s=Da(i),o=Ab(this.serializer,s);return n.put(o)})}ei(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),l=(u=o,u.document?new P(Z.fromString(u.document.name).popFirst(5)):u.noDocument?P.fromSegments(u.noDocument.path):u.unknownDocument?P.fromSegments(u.unknownDocument.path):L()).path.toArray();var u;/**
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
*/const c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>_.waitFor(i))}ni(e,n){const r=n.store("mutations"),i=Lb(this.serializer),s=new $b(Od.js,this.serializer.le);return r.j().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:H();Ai(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),_.forEach(a,(l,u)=>{const c=new qe(u),h=Pd.fe(this.serializer,c),d=s.getIndexManager(c),p=xd.fe(c,this.serializer,d,s.referenceDelegate);return new Mb(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Um(n,Rt.ct),l).next()})})}}function CI(t){t.createObjectStore("targetDocuments",{keyPath:kV}).createIndex("documentTargetsIndex",CV,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",SV,{unique:!0}),t.createObjectStore("targetGlobal")}const ap="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ov{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.si=s,this.window=o,this.document=a,this.ii=u,this.ri=c,this.oi=h,this.Os=null,this.$s=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.ai=null,this.hi=Number.NEGATIVE_INFINITY,this.li=d=>Promise.resolve(),!Ov.D())throw new k(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new F4(this,i),this.fi=n+"main",this.serializer=new bb(l),this.di=new mn(this.fi,this.oi,new Q4(this.serializer)),this.Fs=new x4(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Lb(this.serializer),this.Ls=new S4,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,c===!1&&Ne("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(E.FAILED_PRECONDITION,ap);return this.mi(),this.gi(),this.yi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Fs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new Rt(e,this.ii)}).then(()=>{this.$s=!0}).catch(e=>(this.di&&this.di.close(),Promise.reject(e)))}pi(e){return this.li=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.di.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Yu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ii(e).next(n=>{n||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)))})}).next(()=>this.Ti(e)).next(n=>this.isPrimary&&!n?this.Ei(e).next(()=>!1):!!n&&this.Ai(e).next(()=>!0))).catch(e=>{if(vi(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.li(e)),this.isPrimary=e})}Ii(e){return wa(e).get("owner").next(n=>_.resolve(this.Ri(n)))}vi(e){return Yu(e).delete(this.clientId)}async Pi(){if(this.isPrimary&&!this.bi(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Ye(n,"clientMetadata");return r.j().next(i=>{const s=this.Vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return _.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Si(n.clientId))}}yi(){this.ai=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Pi()).then(()=>this.yi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ti(e){return this.ri?_.resolve(!0):wa(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Di(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new k(E.FAILED_PRECONDITION,ap);return!1}}return!(!this.networkEnabled||!this.inForeground)||Yu(e).j().next(r=>this.Vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&C("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.$s=!1,this.Ci(),this.ai&&(this.ai.cancel(),this.ai=null),this.xi(),this.Ni(),await this.di.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Um(e,Rt.ct);return this.Ei(n).next(()=>this.vi(n))}),this.di.close(),this.ki()}Vi(e,n){return e.filter(r=>this.bi(r.updateTimeMs,n)&&!this.Di(r.clientId))}Mi(){return this.runTransaction("getActiveClients","readonly",e=>Yu(e).j().next(n=>this.Vi(n,18e5).map(r=>r.clientId)))}get started(){return this.$s}getMutationQueue(e,n){return xd.fe(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new P4(e,this.serializer.le.databaseId)}getDocumentOverlayCache(e){return Pd.fe(this.serializer,e)}getBundleCache(){return this.Ls}runTransaction(e,n,r){C("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.oi)===15?MV:o===14?$C:o===13?MC:o===12?LV:o===11?LC:void L();var o;let a;return this.di.runTransaction(e,i,s,l=>(a=new Um(l,this.Os?this.Os.next():Rt.ct),n==="readwrite-primary"?this.Ii(a).next(u=>!!u||this.Ti(a)).next(u=>{if(!u)throw Ne(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)),new k(E.FAILED_PRECONDITION,RC);return r(a)}).next(u=>this.Ai(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}Oi(e){return wa(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Di(n.ownerId)&&!this.Ri(n)&&!(this.ri||this.allowTabSynchronization&&n.allowTabSynchronization))throw new k(E.FAILED_PRECONDITION,ap)})}Ai(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return wa(e).put("owner",n)}static D(){return mn.D()}Ei(e){const n=wa(e);return n.get("owner").next(r=>this.Ri(r)?(C("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):_.resolve())}bi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ne(`Detected an update time that is in the future: ${e} > ${r}`),!1))}mi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Ci();const n=/(?:Version|Mobile)\/1[456]/;zR()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Ni(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Di(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Si(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ne("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ci(){if(this._i)try{this._i.setItem(this.Si(this.clientId),String(Date.now()))}catch(e){Ne("Failed to set zombie client id.",e)}}ki(){if(this._i)try{this._i.removeItem(this.Si(this.clientId))}catch{}}Si(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function wa(t){return Ye(t,"owner")}function Yu(t){return Ye(t,"clientMetadata")}function Lv(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Mv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mv(e,n.fromCache,r,i)}}/**
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
 */class Fb{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(Z_(n))return _.resolve(null);let r=Ft(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wh(n,null,"F"),r=Ft(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,wh(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return Z_(n)||i.isEqual(z.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):($m()<=J.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wm(n)),this.zi(e,o,n,NC(i,-1)))})}Qi(e,n){let r=new pe(JC(e));return n.forEach((i,s)=>{cu(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return $m()<=J.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Wm(n)),this.qi.getDocumentsMatchingQuery(e,n,Wt.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Y4{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new ue(W),this.Ji=new wi(s=>us(s),lu),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mb(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function Ub(t,e,n,r){return new Y4(t,e,n,r)}async function Vb(t,e){const n=x(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function X4(t,e){const n=x(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=_.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(y=>{const v=l.docVersions.get(p);j(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Bb(t){const e=x(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function J4(t,e){const n=x(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Ve.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,v,I){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,p,c)&&a.push(n.Fs.updateTargetData(s,p))});let l=xt(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(zb(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(z.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function zb(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=xt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function Z4(t,e){const n=x(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Co(t,e){const n=x(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function bo(t,e,n){const r=x(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vi(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function Th(t,e,n){const r=x(t);let i=z.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=x(a),h=c.Ji.get(u);return h!==void 0?_.resolve(c.Hi.get(h)):c.Fs.getTargetData(l,u)}(r,o,Ft(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:H())).next(a=>(Kb(r,XC(e),a),{documents:a,sr:s})))}function jb(t,e){const n=x(t),r=x(n.Fs),i=n.Hi.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.he(s,e).next(o=>o?o.target:null))}function qb(t,e){const n=x(t),r=n.Yi.get(e)||z.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Xi.getAllFromCollectionGroup(i,e,NC(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Kb(n,e,i),i))}function Kb(t,e,n){let r=t.Yi.get(e)||z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}async function eB(t,e,n,r){const i=x(t);let s=H(),o=xt();for(const u of n){const c=e.ir(u.metadata.name);u.document&&(s=s.add(c));const h=e.rr(u);h.setReadTime(e.ur(u.metadata.readTime)),o=o.insert(c,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),l=await Co(i,function(u){return Ft(qo(Z.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>zb(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Fs.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Fs.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.er,c.nr)).next(()=>c.er)))}async function tB(t,e,n=H()){const r=await Co(t,Ft(Dv(e.bundledQuery))),i=x(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Re(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ls.saveNamedQuery(s,e);const a=r.withResumeToken(Ve.EMPTY_BYTE_STRING,o);return i.Hi=i.Hi.insert(a.targetId,a),i.Fs.updateTargetData(s,a).next(()=>i.Fs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Fs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ls.saveNamedQuery(s,e))})}function bI(t,e){return`firestore_clients_${t}_${e}`}function AI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function lp(t,e){return`firestore_targets_${t}_${e}`}class Sh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static cr(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new k(i.error.code,i.error.message))),o?new Sh(e,n,i.state,s):(Ne("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Qa{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static cr(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new k(r.error.code,r.error.message))),s?new Qa(e,r.state,i):(Ne("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class kh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static cr(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Ev();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=xC(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new kh(e,s):(Ne("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class $v{constructor(e,n){this.clientId=e,this.onlineState=n}static cr(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new $v(n.clientId,n.onlineState):(Ne("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Zm{constructor(){this.activeTargetIds=Ev()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class up{constructor(e,n,r,i,s){this.window=e,this.si=n,this.persistenceKey=r,this.dr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.wr.bind(this),this.mr=new ue(W),this.started=!1,this.gr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.yr=bI(this.persistenceKey,this.dr),this.pr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.mr=this.mr.insert(this.dr,new Zm),this.Ir=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Tr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Er=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ar=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Mi();for(const r of e){if(r===this.dr)continue;const i=this.getItem(bI(this.persistenceKey,r));if(i){const s=kh.cr(r,i);s&&(this.mr=this.mr.insert(s.clientId,s))}}this.vr();const n=this.storage.getItem(this.Ar);if(n){const r=this.Pr(n);r&&this.br(r)}for(const r of this.gr)this.wr(r);this.gr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.pr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Vr(this.mr)}isActiveQueryTarget(e){let n=!1;return this.mr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Sr(e,"pending")}updateMutationState(e,n,r){this.Sr(e,n,r),this.Dr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(lp(this.persistenceKey,e));if(r){const i=Qa.cr(e,r);i&&(n=i.state)}}return this.Cr.hr(e),this.vr(),n}removeLocalQueryTarget(e){this.Cr.lr(e),this.vr()}isLocalQueryTarget(e){return this.Cr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(lp(this.persistenceKey,e))}updateQueryState(e,n,r){this.Nr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Dr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.kr(e)}notifyBundleLoaded(e){this.Mr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.yr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return C("SharedClientState","READ",e,n),n}setItem(e,n){C("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}wr(e){const n=e;if(n.storageArea===this.storage){if(C("SharedClientState","EVENT",n.key,n.newValue),n.key===this.yr)return void Ne("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ir.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.$r(r,null)}{const r=this.Fr(n.key,n.newValue);if(r)return this.$r(r.clientId,r)}}else if(this.Tr.test(n.key)){if(n.newValue!==null){const r=this.Br(n.key,n.newValue);if(r)return this.Lr(r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.qr(n.key,n.newValue);if(r)return this.Ur(r)}}else if(n.key===this.Ar){if(n.newValue!==null){const r=this.Pr(n.newValue);if(r)return this.br(r)}}else if(n.key===this.pr){const r=function(i){let s=Rt.ct;if(i!=null)try{const o=JSON.parse(i);j(typeof o=="number"),s=o}catch(o){Ne("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Rt.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Kr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Gr(i)))}}}else this.gr.push(n)})}}get Cr(){return this.mr.get(this.dr)}vr(){this.setItem(this.yr,this.Cr.ar())}Sr(e,n,r){const i=new Sh(this.currentUser,e,n,r),s=AI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ar())}Dr(e){const n=AI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}kr(e){const n={clientId:this.dr,onlineState:e};this.storage.setItem(this.Ar,JSON.stringify(n))}Nr(e,n,r){const i=lp(this.persistenceKey,e),s=new Qa(e,n,r);this.setItem(i,s.ar())}Mr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Ir.exec(e);return n?n[1]:null}Fr(e,n){const r=this.Or(e);return kh.cr(r,n)}Br(e,n){const r=this.Tr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Sh.cr(new qe(s),i,n)}qr(e,n){const r=this.Er.exec(e),i=Number(r[1]);return Qa.cr(i,n)}Pr(e){return $v.cr(e)}Kr(e){return JSON.parse(e)}async Lr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Qr(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ur(e){return this.syncEngine.jr(e.targetId,e.state,e.error)}$r(e,n){const r=n?this.mr.insert(e,n):this.mr.remove(e),i=this.Vr(this.mr),s=this.Vr(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.zr(o,a).then(()=>{this.mr=r})}br(e){this.mr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Vr(e){let n=Ev();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class Wb{constructor(){this.Wr=new Zm,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Zm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nB{Jr(e){}shutdown(){}}/**
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
 */class NI{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xu=null;function cp(){return Xu===null?Xu=268435456+Math.round(2147483648*Math.random()):Xu++,"0x"+Xu.toString(16)}/**
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
 */const rB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class iB{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const dt="WebChannelConnection";class sB extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=cp(),a=this.Io(e,n);C("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>(C("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw En("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+jo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=rB[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=cp();return new Promise((o,a)=>{const l=new tV;l.setWithCredentials(!0),l.listenOnce(JU.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case sp.NO_ERROR:const c=l.getResponseJson();C(dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case sp.TIMEOUT:C(dt,`RPC '${e}' ${s} timed out`),a(new k(E.DEADLINE_EXCEEDED,"Request time out"));break;case sp.HTTP_ERROR:const h=l.getStatus();if(C(dt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(v){const I=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(I)>=0?I:E.UNKNOWN}(p.status);a(new k(y,p.message))}else a(new k(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new k(E.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{C(dt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);C(dt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=cp(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=YU(),a=XU(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new eV({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");C(dt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const p=new iB({io:v=>{d?C(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(C(dt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),C(dt,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},ro:()=>c.close()}),y=(v,I,m)=>{v.listen(I,f=>{try{m(f)}catch(g){setTimeout(()=>{throw g},0)}})};return y(c,qu.EventType.OPEN,()=>{d||C(dt,`RPC '${e}' stream ${i} transport opened.`)}),y(c,qu.EventType.CLOSE,()=>{d||(d=!0,C(dt,`RPC '${e}' stream ${i} transport closed`),p.fo())}),y(c,qu.EventType.ERROR,v=>{d||(d=!0,En(dt,`RPC '${e}' stream ${i} transport errored:`,v),p.fo(new k(E.UNAVAILABLE,"The operation could not be completed")))}),y(c,qu.EventType.MESSAGE,v=>{var I;if(!d){const m=v.data[0];j(!!m);const f=m,g=f.error||((I=f[0])===null||I===void 0?void 0:I.error);if(g){C(dt,`RPC '${e}' stream ${i} received error:`,g);const w=g.status;let S=function(D){const R=xe[D];if(R!==void 0)return db(R)}(w),b=g.message;S===void 0&&(S=E.INTERNAL,b="Unknown error status: "+w+" with message "+g.message),d=!0,p.fo(new k(S,b)),c.close()}else C(dt,`RPC '${e}' stream ${i} received:`,m),p._o(m)}}),y(a,ZU.STAT_EVENT,v=>{v.stat===$_.PROXY?C(dt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===$_.NOPROXY&&C(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}/**
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
 */function Hb(){return typeof window<"u"?window:null}function Ic(){return typeof document<"u"?document:null}/**
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
 */function pu(t){return new f4(t,!0)}/**
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
 */class Fv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class Gb{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Fv(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Ne(n.toString()),Ne("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new k(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oB extends Gb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=g4(this.serializer,e),r=function(i){if(!("targetChange"in i))return z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?z.min():s.readTime?Re(s.readTime):z.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Pl(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=yh(a)?{documents:Ib(i,a)}:{query:Eb(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=gb(i,s.resumeToken);const l=Hm(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(z.min())>0){o.readTime=ko(i,s.snapshotVersion.toTimestamp());const l=Hm(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=v4(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Pl(this.serializer),n.removeTarget=e,this.zo(n)}}class aB extends Gb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=y4(e.writeResults,e.commitTime),r=Re(e.commitTime);return this.listener.uu(r,n)}return j(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Pl(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xl(this.serializer,r))};this.zo(n)}}/**
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
 */class lB extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new k(E.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(E.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new k(E.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class uB{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Ne(n),this.wu=!1):C("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class cB{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{_i(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=x(a);l.Au.add(4),await Ho(l),l.Pu.set("Unknown"),l.Au.delete(4),await mu(l)}(this))})}),this.Pu=new uB(r,i)}}async function mu(t){if(_i(t))for(const e of t.Ru)await e(!0)}async function Ho(t){for(const e of t.Ru)await e(!1)}function Ld(t,e){const n=x(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Bv(n)?Vv(n):Qo(n).Uo()&&Uv(n,e))}function Ol(t,e){const n=x(t),r=Qo(n);n.Eu.delete(e),r.Uo()&&Qb(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():_i(n)&&n.Pu.set("Unknown"))}function Uv(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qo(t).nu(e)}function Qb(t,e){t.bu.Lt(e),Qo(t).su(e)}function Vv(t){t.bu=new u4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.Pu.mu()}function Bv(t){return _i(t)&&!Qo(t).qo()&&t.Eu.size>0}function _i(t){return x(t).Au.size===0}function Yb(t){t.bu=void 0}async function hB(t){t.Eu.forEach((e,n)=>{Uv(t,e)})}async function dB(t,e){Yb(t),Bv(t)?(t.Pu.pu(e),Vv(t)):t.Pu.set("Unknown")}async function fB(t,e,n){if(t.Pu.set("Online"),e instanceof mb&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ch(t,r)}else if(e instanceof _c?t.bu.Wt(e):e instanceof pb?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(z.min()))try{const r=await Bb(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(Ve.EMPTY_BYTE_STRING,u.snapshotVersion)),Qb(i,a);const c=new tr(u.target,a,l,u.sequenceNumber);Uv(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await Ch(t,r)}}async function Ch(t,e,n){if(!vi(e))throw e;t.Au.add(1),await Ho(t),t.Pu.set("Offline"),n||(n=()=>Bb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await mu(t)})}function Xb(t,e){return e().catch(n=>Ch(t,n,e))}async function Go(t){const e=x(t),n=ai(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;pB(e);)try{const i=await Z4(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,mB(e,i)}catch(i){await Ch(e,i)}Jb(e)&&Zb(e)}function pB(t){return _i(t)&&t.Tu.length<10}function mB(t,e){t.Tu.push(e);const n=ai(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function Jb(t){return _i(t)&&!ai(t).qo()&&t.Tu.length>0}function Zb(t){ai(t).start()}async function gB(t){ai(t).au()}async function yB(t){const e=ai(t);for(const n of t.Tu)e.ou(n.mutations)}async function vB(t,e,n){const r=t.Tu.shift(),i=kv.from(r,e,n);await Xb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Go(t)}async function wB(t,e){e&&ai(t).ru&&await async function(n,r){if(i=r.code,hb(i)&&i!==E.ABORTED){const s=n.Tu.shift();ai(n).Go(),await Xb(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Go(n)}var i}(t,e),Jb(t)&&Zb(t)}async function DI(t,e){const n=x(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=_i(n);n.Au.add(3),await Ho(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await mu(n)}async function eg(t,e){const n=x(t);e?(n.Au.delete(2),await mu(n)):e||(n.Au.add(2),await Ho(n),n.Pu.set("Unknown"))}function Qo(t){return t.Vu||(t.Vu=function(e,n,r){const i=x(e);return i.lu(),new oB(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:hB.bind(null,t),co:dB.bind(null,t),eu:fB.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Bv(t)?Vv(t):t.Pu.set("Unknown")):(await t.Vu.stop(),Yb(t))})),t.Vu}function ai(t){return t.Su||(t.Su=function(e,n,r){const i=x(e);return i.lu(),new aB(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:gB.bind(null,t),co:wB.bind(null,t),cu:yB.bind(null,t),uu:vB.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Go(t)):(await t.Su.stop(),t.Tu.length>0&&(C("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class zv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new We,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new zv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yo(t,e){if(Ne("AsyncQueue",`${e}: ${t}`),vi(t))return new k(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ao{constructor(e){this.comparator=e?(n,r)=>e(n,r)||P.comparator(n.key,r.key):(n,r)=>P.comparator(n.key,r.key),this.keyedMap=Aa(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new ao(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ao;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class RI{constructor(){this.Du=new ue(P.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):L():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ao{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ao(e,n,ao.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class _B{constructor(){this.xu=void 0,this.listeners=[]}}class IB{constructor(){this.queries=new wi(e=>YC(e),uu),this.onlineState="Unknown",this.Nu=new Set}}async function jv(t,e){const n=x(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new _B),i)try{s.xu=await n.onListen(r)}catch(o){const a=Yo(o,`Initialization of query '${Wm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&Kv(n)}async function qv(t,e){const n=x(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function EB(t,e){const n=x(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&Kv(n)}function TB(t,e,n){const r=x(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Kv(t){t.Nu.forEach(e=>{e.next()})}class Wv{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ao(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
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
 */class SB{constructor(e,n){this.Ku=e,this.byteLength=n}Gu(){return"metadata"in this.Ku}}/**
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
 */class PI{constructor(e){this.serializer=e}ir(e){return $n(this.serializer,e)}rr(e){return e.metadata.exists?_b(this.serializer,e.document,!1):de.newNoDocument(this.ir(e.metadata.name),this.ur(e.metadata.readTime))}ur(e){return Re(e)}}class kB{constructor(e,n,r){this.Qu=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=eA(e)}ju(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Ku.namedQuery)this.queries.push(e.Ku.namedQuery);else if(e.Ku.documentMetadata){this.documents.push({metadata:e.Ku.documentMetadata}),e.Ku.documentMetadata.exists||++n;const r=Z.fromString(e.Ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ku.document&&(this.documents[this.documents.length-1].document=e.Ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}zu(e){const n=new Map,r=new PI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.ir(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||H()).add(s);n.set(o,a)}}return n}async complete(){const e=await eB(this.localStore,new PI(this.serializer),this.documents,this.Qu.id),n=this.zu(this.documents);for(const r of this.queries)await tB(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Wu:this.collectionGroups,Hu:e}}}function eA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class tA{constructor(e){this.key=e}}class nA{constructor(e){this.key=e}}class rA{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=H(),this.mutatedKeys=H(),this.Zu=JC(e),this.tc=new ao(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new RI,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=cu(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),I=!0):this.ic(d,p)||(r.track({type:2,doc:p}),I=!0,(l&&this.Zu(p,l)>0||u&&this.Zu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),I=!0):d&&!p&&(r.track({type:1,doc:d}),I=!0,(l||u)&&(a=!0)),I&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return p(h)-p(d)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new Ao(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new RI,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=H(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new nA(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new tA(r))}),n}ac(e){this.Ju=e.sr,this.Xu=H();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Ao.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class CB{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bB{constructor(e){this.key=e,this.lc=!1}}class AB{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new wi(a=>YC(a),uu),this._c=new Map,this.wc=new Set,this.mc=new ue(P.comparator),this.gc=new Map,this.yc=new xv,this.Ic={},this.Tc=new Map,this.Ec=ps.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function NB(t,e){const n=Xv(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await Co(n.localStore,Ft(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Hv(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Ld(n.remoteStore,o)}return i}async function Hv(t,e,n,r,i){t.Rc=(h,d,p)=>async function(y,v,I,m){let f=v.view.nc(I);f.ji&&(f=await Th(y.localStore,v.query,!1).then(({documents:S})=>v.view.nc(S,f)));const g=m&&m.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,g);return tg(y,v.targetId,w.uc),w.snapshot}(t,h,d,p);const s=await Th(t.localStore,e,!0),o=new rA(e,s.sr),a=o.nc(s.documents),l=fu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);tg(t,n,u.uc);const c=new CB(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function DB(t,e){const n=x(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!uu(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ol(n.remoteStore,r.targetId),No(n,r.targetId)}).catch(yi)):(No(n,r.targetId),await bo(n.localStore,r.targetId,!0))}async function RB(t,e,n){const r=Jv(t);try{const i=await function(s,o){const a=x(s),l=we.now(),u=o.reduce((d,p)=>d.add(p.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=xt(),y=H();return a.Xi.getEntries(d,u).next(v=>{p=v,p.forEach((I,m)=>{m.isValidDocument()||(y=y.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const I=[];for(const m of o){const f=o4(m,c.get(m.key).overlayedDocument);f!=null&&I.push(new vr(m.key,f,BC(f.value.mapValue),ve.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,I,o)}).next(v=>{h=v;const I=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,I)})}).then(()=>({batchId:h.batchId,changes:eb(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new ue(W)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await wr(r,i.changes),await Go(r.remoteStore)}catch(i){const s=Yo(i,"Failed to persist write");n.reject(s)}}async function iA(t,e){const n=x(t);try{const r=await J4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(j(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?j(o.lc):i.removedDocuments.size>0&&(j(o.lc),o.lc=!1))}),await wr(n,r,e)}catch(r){await yi(r)}}function xI(t,e,n){const r=x(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=x(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.ku(o)&&(l=!0)}),l&&Kv(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PB(t,e,n){const r=x(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new ue(P.comparator);o=o.insert(s,de.newNoDocument(s,z.min()));const a=H().add(s),l=new du(z.min(),new Map,new ue(W),o,a);await iA(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),Yv(r)}else await bo(r.localStore,e,!1).then(()=>No(r,e,n)).catch(yi)}async function xB(t,e){const n=x(t),r=e.batch.batchId;try{const i=await X4(n.localStore,e);Qv(n,r,null),Gv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wr(n,i)}catch(i){await yi(i)}}async function OB(t,e,n){const r=x(t);try{const i=await function(s,o){const a=x(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(j(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Qv(r,e,n),Gv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wr(r,i)}catch(i){await yi(i)}}async function LB(t,e){const n=x(t);_i(n.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=x(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Tc.get(r)||[];i.push(e),n.Tc.set(r,i)}catch(r){const i=Yo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Gv(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function Qv(t,e,n){const r=x(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function No(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||sA(t,r)})}function sA(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(Ol(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Yv(t))}function tg(t,e,n){for(const r of n)r instanceof tA?(t.yc.addReference(r.key,e),MB(t,r)):r instanceof nA?(C("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||sA(t,r.key)):L()}function MB(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(C("SyncEngine","New document in limbo: "+n),t.wc.add(r),Yv(t))}function Yv(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new P(Z.fromString(e)),r=t.Ec.next();t.gc.set(r,new bB(n)),t.mc=t.mc.insert(n,r),Ld(t.remoteStore,new tr(Ft(qo(n.path)),r,"TargetPurposeLimboResolution",Rt.ct))}}async function wr(t,e,n){const r=x(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Mv.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=x(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>_.forEach(l,h=>_.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>_.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!vi(c))throw c;C("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Hi.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.Hi=u.Hi.insert(h,y)}}}(r.localStore,s))}async function $B(t,e){const n=x(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await Vb(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new k(E.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wr(n,r.tr)}}function FB(t,e){const n=x(t),r=n.gc.get(e);if(r&&r.lc)return H().add(r.key);{let i=H();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}async function UB(t,e){const n=x(t),r=await Th(n.localStore,e.query,!0),i=e.view.ac(r);return n.isPrimaryClient&&tg(n,e.targetId,i.uc),i}async function VB(t,e){const n=x(t);return qb(n.localStore,e).then(r=>wr(n,r))}async function BB(t,e,n,r){const i=x(t),s=await function(o,a){const l=x(o),u=x(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",c=>u.Vn(c,a).next(h=>h?l.localDocuments.getDocuments(c,h):_.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Go(i.remoteStore):n==="acknowledged"||n==="rejected"?(Qv(i,e,r||null),Gv(i,e),function(o,a){x(x(o).mutationQueue).Dn(a)}(i.localStore,e)):L(),await wr(i,s)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function zB(t,e){const n=x(t);if(Xv(n),Jv(n),e===!0&&n.Ac!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await OI(n,r.toArray());n.Ac=!0,await eg(n.remoteStore,!0);for(const s of i)Ld(n.remoteStore,s)}else if(e===!1&&n.Ac!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(No(n,o),bo(n.localStore,o,!0))),Ol(n.remoteStore,o)}),await i,await OI(n,r),function(s){const o=x(s);o.gc.forEach((a,l)=>{Ol(o.remoteStore,l)}),o.yc.Is(),o.gc=new Map,o.mc=new ue(P.comparator)}(n),n.Ac=!1,await eg(n.remoteStore,!1)}}async function OI(t,e,n){const r=x(t),i=[],s=[];for(const o of e){let a;const l=r._c.get(o);if(l&&l.length!==0){a=await Co(r.localStore,Ft(l[0]));for(const u of l){const c=r.dc.get(u),h=await UB(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await jb(r.localStore,o);a=await Co(r.localStore,u),await Hv(r,oA(u),o,!1,a.resumeToken)}i.push(a)}return r.fc.eu(s),i}function oA(t){return QC(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function jB(t){const e=x(t);return x(x(e.localStore).persistence).Mi()}async function qB(t,e,n,r){const i=x(t);if(i.Ac)return void C("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await qb(i.localStore,XC(s[0])),a=du.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ve.EMPTY_BYTE_STRING);await wr(i,o,a);break}case"rejected":await bo(i.localStore,e,!0),No(i,e,r);break;default:L()}}async function KB(t,e,n){const r=Xv(t);if(r.Ac){for(const i of e){if(r._c.has(i)){C("SyncEngine","Adding an already active target "+i);continue}const s=await jb(r.localStore,i),o=await Co(r.localStore,s);await Hv(r,oA(s),o.targetId,!1,o.resumeToken),Ld(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await bo(r.localStore,i,!1).then(()=>{Ol(r.remoteStore,i),No(r,i)}).catch(yi)}}function Xv(t){const e=x(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FB.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PB.bind(null,e),e.fc.eu=EB.bind(null,e.eventManager),e.fc.vc=TB.bind(null,e.eventManager),e}function Jv(t){const e=x(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xB.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OB.bind(null,e),e}function WB(t,e,n){const r=x(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=x(h),y=Re(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",v=>p.Ls.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(eA(a));const l=new kB(a,i.localStore,s.serializer);let u=await s.Pc();for(;u;){const h=await l.ju(u);h&&o._updateProgress(h),u=await s.Pc()}const c=await l.complete();return await wr(i,c.Hu,void 0),await function(h,d){const p=x(h);return p.persistence.runTransaction("Save bundle","readwrite",y=>p.Ls.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Wu)}catch(a){return En("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class ng{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=pu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Ub(this.persistence,new Fb,e.initialUser,this.serializer)}createPersistence(e){return new $b(Od.js,this.serializer)}createSharedClientState(e){return new Wb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aA extends ng{constructor(e,n,r){super(),this.bc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.bc.initialize(this,e),await Jv(this.bc.syncEngine),await Go(this.bc.remoteStore),await this.persistence.pi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Ub(this.persistence,new Fb,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new L4(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new vV(n,this.persistence);return new yV(e.asyncQueue,r)}createPersistence(e){const n=Lv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new Ov(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,Hb(),Ic(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Wb}}class HB extends aA{constructor(e,n){super(e,n,!1),this.bc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.bc.syncEngine;this.sharedClientState instanceof up&&(this.sharedClientState.syncEngine={Qr:BB.bind(null,n),jr:qB.bind(null,n),zr:KB.bind(null,n),Mi:jB.bind(null,n),Gr:VB.bind(null,n)},await this.sharedClientState.start()),await this.persistence.pi(async r=>{await zB(this.bc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=Hb();if(!up.D(n))throw new k(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Lv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new up(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Zv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$B.bind(null,this.syncEngine),await eg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new IB}createDatastore(e){const n=pu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new sB(i));var i;return function(s,o,a,l){return new lB(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>xI(this.syncEngine,a,0),o=NI.D()?new NI:new nB,new cB(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new AB(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=x(e);C("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Ho(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */function LI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Md{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Ne("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class GB{constructor(e,n){this.Dc=e,this.serializer=n,this.metadata=new We,this.buffer=new Uint8Array,this.Cc=new TextDecoder("utf-8"),this.xc().then(r=>{r&&r.Gu()?this.metadata.resolve(r.Ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ku)}`))},r=>this.metadata.reject(r))}close(){return this.Dc.cancel()}async getMetadata(){return this.metadata.promise}async Pc(){return await this.getMetadata(),this.xc()}async xc(){const e=await this.Nc();if(e===null)return null;const n=this.Cc.decode(e),r=Number(n);isNaN(r)&&this.kc(`length string (${n}) is not valid number`);const i=await this.Mc(r);return new SB(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Nc(){for(;this.Oc()<0&&!await this.$c(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.kc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Mc(e){for(;this.buffer.length<e;)await this.$c()&&this.kc("Reached the end of bundle when more is expected.");const n=this.Cc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}kc(e){throw this.Dc.cancel(),new Error(`Invalid bundle format: ${e}`)}async $c(){const e=await this.Dc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class QB{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new k(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=x(r),o=Pl(s.serializer)+"/documents",a={documents:i.map(h=>Rl(s.serializer,h))},l=await s.Ao("BatchGetDocuments",o,a,i.length),u=new Map;l.forEach(h=>{const d=m4(s.serializer,h);u.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=u.get(h.toString());j(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Wo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=P.fromPath(r);this.mutations.push(new Tv(i,this.precondition(i)))}),await async function(n,r){const i=x(n),s=Pl(i.serializer)+"/documents",o={writes:r.map(a=>xl(i.serializer,a))};await i.po("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw L();n=z.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new k(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(z.min())?ve.exists(!1):ve.updateTime(n):ve.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(z.min()))throw new k(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ve.updateTime(n)}return ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class YB{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Fc=r.maxAttempts,this.Lo=new Fv(this.asyncQueue,"transaction_retry")}run(){this.Fc-=1,this.Bc()}Bc(){this.Lo.xo(async()=>{const e=new QB(this.datastore),n=this.Lc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.qc(i)}))}).catch(r=>{this.qc(r)})})}Lc(e){try{const n=this.updateFunction(e);return!au(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}qc(e){this.Fc>0&&this.Uc(e)?(this.Fc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bc(),Promise.resolve()))):this.deferred.reject(e)}Uc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!hb(n)}return!1}}/**
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
 */class XB{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=CC.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new We;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ec(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Vb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ew(t);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>DI(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>DI(e.remoteStore,s)),t._onlineComponents=e}function lA(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ew(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ec(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!lA(n))throw n;En("Error using user provided cache. Falling back to memory cache: "+n),await Ec(t,new ng)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await Ec(t,new ng);return t._offlineComponents}async function $d(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await rg(t,t._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await rg(t,new Zv))),t._onlineComponents}function uA(t){return ew(t).then(e=>e.persistence)}function tw(t){return ew(t).then(e=>e.localStore)}function cA(t){return $d(t).then(e=>e.remoteStore)}function nw(t){return $d(t).then(e=>e.syncEngine)}function JB(t){return $d(t).then(e=>e.datastore)}async function Do(t){const e=await $d(t),n=e.eventManager;return n.onListen=NB.bind(null,e.syncEngine),n.onUnlisten=DB.bind(null,e.syncEngine),n}function ZB(t){return t.asyncQueue.enqueue(async()=>{const e=await uA(t),n=await cA(t);return e.setNetworkEnabled(!0),function(r){const i=x(r);return i.Au.delete(0),mu(i)}(n)})}function ez(t){return t.asyncQueue.enqueue(async()=>{const e=await uA(t),n=await cA(t);return e.setNetworkEnabled(!1),async function(r){const i=x(r);i.Au.add(0),await Ho(i),i.Pu.set("Offline")}(n)})}function tz(t,e){const n=new We;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,l){const u=x(a);return u.persistence.runTransaction("read document","readonly",c=>u.localDocuments.getDocument(c,l))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new k(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Yo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await tw(t),e,n)),n.promise}function hA(t,e,n={}){const r=new We;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Md({next:h=>{s.enqueueAndForget(()=>qv(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new k(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new k(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Wv(qo(o.path),u,{includeMetadataChanges:!0,Uu:!0});return jv(i,c)}(await Do(t),t.asyncQueue,e,n,r)),r.promise}function nz(t,e){const n=new We;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Th(r,i,!0),a=new rA(i,o.sr),l=a.nc(o.documents),u=a.applyChanges(l,!1);s.resolve(u.snapshot)}catch(o){const a=Yo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await tw(t),e,n)),n.promise}function dA(t,e,n={}){const r=new We;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Md({next:h=>{s.enqueueAndForget(()=>qv(i,c)),h.fromCache&&a.source==="server"?l.reject(new k(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Wv(o,u,{includeMetadataChanges:!0,Uu:!0});return jv(i,c)}(await Do(t),t.asyncQueue,e,n,r)),r.promise}function rz(t,e){const n=new Md(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){x(r).Nu.add(i),i.next()}(await Do(t),n)),()=>{n.Sc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){x(r).Nu.delete(i)}(await Do(t),n))}}function iz(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?fb().encode(s):s,function(l,u){return new GB(l,u)}(function(l,u){if(l instanceof Uint8Array)return LI(l,u);if(l instanceof ArrayBuffer)return LI(new Uint8Array(l),u);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,pu(e));t.asyncQueue.enqueueAndForget(async()=>{WB(await nw(t),i,r)})}function sz(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=x(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ls.getNamedQuery(s,r))}(await tw(t),e))}/**
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
 */const MI=new Map;/**
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
 */function rw(t,e,n){if(!n)throw new k(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fA(t,e,n,r){if(e===!0&&r===!0)throw new k(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $I(t){if(!P.isDocumentKey(t))throw new k(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function FI(t){if(P.isDocumentKey(t))throw new k(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":L()}function te(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fd(t);throw new k(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function pA(t,e){if(e<=0)throw new k(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class UI{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new k(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class gu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new UI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new UI(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new sV;switch(n.type){case"firstParty":return new uV(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=MI.get(e);n&&(C("ComponentProvider","Removing Datastore"),MI.delete(e),n.terminate())}(this),Promise.resolve()}}function mA(t,e,n,r={}){var i;const s=(t=te(t,gu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&En("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=qe.MOCK_USER;else{o=ET(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new k(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new qe(l)}t._authCredentials=new oV(new kC(o,a))}}/**
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
 */class me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}}class ut{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ut(this.firestore,e,this._query)}}class Fn extends ut{constructor(e,n,r){super(e,n,qo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new P(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function bh(t,e,...n){if(t=B(t),rw("collection","path",e),t instanceof gu){const r=Z.fromString(e,...n);return FI(r),new Fn(t,null,r)}{if(!(t instanceof me||t instanceof Fn))throw new k(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Z.fromString(e,...n));return FI(r),new Fn(t.firestore,null,r)}}function oz(t,e){if(t=te(t,gu),rw("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new k(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ut(t,null,function(n){return new yr(Z.emptyPath(),n)}(e))}function Ll(t,e,...n){if(t=B(t),arguments.length===1&&(e=CC.A()),rw("doc","path",e),t instanceof gu){const r=Z.fromString(e,...n);return $I(r),new me(t,null,new P(r))}{if(!(t instanceof me||t instanceof Fn))throw new k(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Z.fromString(e,...n));return $I(r),new me(t.firestore,t instanceof Fn?t.converter:null,new P(r))}}function gA(t,e){return t=B(t),e=B(e),(t instanceof me||t instanceof Fn)&&(e instanceof me||e instanceof Fn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function yA(t,e){return t=B(t),e=B(e),t instanceof ut&&e instanceof ut&&t.firestore===e.firestore&&uu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class az{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Fv(this,"async_queue_retry"),this.Yc=()=>{const n=Ic();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Ic();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new We;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!vi(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ne("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=zv.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&L()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}function ig(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class lz{constructor(){this._progressObserver={},this._taskCompletionResolver=new We,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const uz=-1;class be extends gu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new az,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vA(this),this._firestoreClient.terminate()}}function cz(t,e){const n=typeof t=="object"?t:Jh(),r=typeof t=="string"?t:e||"(default)",i=fi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_T("firestore");s&&mA(i,...s)}return i}function Xe(t){return t._firestoreClient||vA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vA(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new UV(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new XB(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function hz(t,e){_A(t=te(t,be));const n=Xe(t);if(n._uninitializedComponentsProvider)throw new k(E.FAILED_PRECONDITION,"SDK cache is already specified.");En("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new Zv;return wA(n,i,new aA(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function dz(t){_A(t=te(t,be));const e=Xe(t);if(e._uninitializedComponentsProvider)throw new k(E.FAILED_PRECONDITION,"SDK cache is already specified.");En("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new Zv;return wA(e,r,new HB(r,n.cacheSizeBytes))}function wA(t,e,n){const r=new We;return t.asyncQueue.enqueue(async()=>{try{await Ec(t,n),await rg(t,e),r.resolve()}catch(i){const s=i;if(!lA(s))throw s;En("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function fz(t){if(t._initialized&&!t._terminated)throw new k(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new We;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!mn.D())return Promise.resolve();const r=n+"main";await mn.delete(r)}(Lv(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function pz(t){return function(e){const n=new We;return e.asyncQueue.enqueueAndForget(async()=>LB(await nw(e),n)),n.promise}(Xe(t=te(t,be)))}function mz(t){return ZB(Xe(t=te(t,be)))}function gz(t){return ez(Xe(t=te(t,be)))}function yz(t,e){const n=Xe(t=te(t,be)),r=new lz;return iz(n,t._databaseId,e,r),r}function vz(t,e){return sz(Xe(t=te(t,be)),e).then(n=>n?new ut(t,null,n.query):null)}function _A(t){if(t._initialized||t._terminated)throw new k(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bn(Ve.fromBase64String(e))}catch(n){throw new k(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bn(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class li{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new k(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new De(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Is{constructor(e){this._methodName=e}}/**
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
 */class Ud{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new k(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new k(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
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
 */const wz=/^__.*__$/;class _z{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ko(e,this.data,n,this.fieldTransforms)}}class IA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function EA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Vd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Vd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Ah(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(EA(this.ua)&&wz.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Iz{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pu(e)}ga(e,n,r,i=!1){return new Vd({ua:e,methodName:n,ma:r,path:De.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Es(t){const e=t._freezeSettings(),n=pu(t._databaseId);return new Iz(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Bd(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);aw("Data must be an object, but it was:",o,r);const a=kA(r,o);let l,u;if(s.merge)l=new Pt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=sg(e,h,n);if(!o.contains(d))throw new k(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);bA(c,d)||c.push(d)}l=new Pt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new _z(new tt(a),l,u)}class yu extends Is{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yu}}function TA(t,e,n){return new Vd({ua:3,ma:e.settings.ma,methodName:t._methodName,ha:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class iw extends Is{_toFieldTransform(e){return new hu(e.path,new To)}isEqual(e){return e instanceof iw}}class Ez extends Is{constructor(e,n){super(e),this.ya=n}_toFieldTransform(e){const n=TA(this,e,!0),r=this.ya.map(s=>Ts(s,n)),i=new cs(r);return new hu(e.path,i)}isEqual(e){return this===e}}class Tz extends Is{constructor(e,n){super(e),this.ya=n}_toFieldTransform(e){const n=TA(this,e,!0),r=this.ya.map(s=>Ts(s,n)),i=new hs(r);return new hu(e.path,i)}isEqual(e){return this===e}}class Sz extends Is{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=new So(e.serializer,ib(e.serializer,this.pa));return new hu(e.path,n)}isEqual(e){return this===e}}function sw(t,e,n,r){const i=t.ga(1,e,n);aw("Data must be an object, but it was:",i,r);const s=[],o=tt.empty();_s(r,(l,u)=>{const c=lw(e,l,n);u=B(u);const h=i.fa(c);if(u instanceof yu)s.push(c);else{const d=Ts(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Pt(s);return new IA(o,a,i.fieldTransforms)}function ow(t,e,n,r,i,s){const o=t.ga(1,e,n),a=[sg(e,r,n)],l=[i];if(s.length%2!=0)throw new k(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(sg(e,s[d])),l.push(s[d+1]);const u=[],c=tt.empty();for(let d=a.length-1;d>=0;--d)if(!bA(u,a[d])){const p=a[d];let y=l[d];y=B(y);const v=o.fa(p);if(y instanceof yu)u.push(p);else{const I=Ts(y,v);I!=null&&(u.push(p),c.set(p,I))}}const h=new Pt(u);return new IA(c,h,o.fieldTransforms)}function SA(t,e,n,r=!1){return Ts(n,t.ga(r?4:3,e))}function Ts(t,e){if(CA(t=B(t)))return aw("Unsupported field value:",e,t),kA(t,e);if(t instanceof Is)return function(n,r){if(!EA(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ts(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=B(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ib(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=we.fromDate(n);return{timestampValue:ko(r.serializer,i)}}if(n instanceof we){const i=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ko(r.serializer,i)}}if(n instanceof Ud)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Bn)return{bytesValue:gb(r.serializer,n._byteString)};if(n instanceof me){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nv(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Fd(n)}`)}(t,e)}function kA(t,e){const n={};return FC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(t,(r,i)=>{const s=Ts(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function CA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof Ud||t instanceof Bn||t instanceof me||t instanceof Is)}function aw(t,e,n){if(!CA(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Fd(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function sg(t,e,n){if((e=B(e))instanceof li)return e._internalPath;if(typeof e=="string")return lw(t,e);throw Ah("Field path arguments must be of type string or ",t,!1,void 0,n)}const kz=new RegExp("[~\\*/\\[\\]]");function lw(t,e,n){if(e.search(kz)>=0)throw Ah(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new li(...e.split("."))._internalPath}catch{throw Ah(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ah(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new k(E.INVALID_ARGUMENT,a+t+l)}function bA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ml{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Cz(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Cz extends Ml{data(){return super.data()}}function zd(t,e){return typeof e=="string"?lw(t,e):e instanceof li?e._internalPath:e._delegate._internalPath}/**
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
 */function AA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new k(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uw{}class vu extends uw{}function Cr(t,e,...n){let r=[];e instanceof uw&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof cw).length,o=i.filter(a=>a instanceof jd).length;if(s>1||s>0&&o>0)throw new k(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class jd extends vu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jd(e,n,r)}_apply(e){const n=this._parse(e);return DA(e._query,n),new ut(e.firestore,e.converter,Km(e._query,n))}_parse(e){const n=Es(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new k(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){BI(c,u);const d=[];for(const p of c)d.push(VI(a,i,p));h={arrayValue:{values:d}}}else h=VI(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||BI(c,u),h=SA(o,s,c,u==="in"||u==="not-in");return G.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function bz(t,e,n){const r=e,i=zd("where",t);return jd._create(i,r,n)}class cw extends uw{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cw(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ie.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)DA(s,a),s=Km(s,a)}(e._query,n),new ut(e.firestore,e.converter,Km(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class hw extends vu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new hw(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new k(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new k(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new oo(i,s);return function(a,l){if(_v(a)===null){const u=Nd(a);u!==null&&RA(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new ut(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new yr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Az(t,e="asc"){const n=e,r=zd("orderBy",t);return hw._create(r,n)}class qd extends vu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new qd(e,n,r)}_apply(e){return new ut(e.firestore,e.converter,wh(e._query,this._limit,this._limitType))}}function Nz(t){return pA("limit",t),qd._create("limit",t,"F")}function Dz(t){return pA("limitToLast",t),qd._create("limitToLast",t,"L")}class Kd extends vu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Kd(e,n,r)}_apply(e){const n=NA(e,this.type,this._docOrFields,this._inclusive);return new ut(e.firestore,e.converter,function(r,i){return new yr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function Rz(...t){return Kd._create("startAt",t,!0)}function Pz(...t){return Kd._create("startAfter",t,!1)}class Wd extends vu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Wd(e,n,r)}_apply(e){const n=NA(e,this.type,this._docOrFields,this._inclusive);return new ut(e.firestore,e.converter,function(r,i){return new yr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function xz(...t){return Wd._create("endBefore",t,!1)}function Oz(...t){return Wd._create("endAt",t,!0)}function NA(t,e,n,r){if(n[0]=B(n[0]),n[0]instanceof Ml)return function(i,s,o,a,l){if(!a)throw new k(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const c of Hi(i))if(c.field.isKeyField())u.push(ls(s,a.key));else{const h=a.data.field(c.field);if(Ad(h))throw new k(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new k(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new oi(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Es(t.firestore);return function(s,o,a,l,u,c){const h=s.explicitOrderBy;if(u.length>h.length)throw new k(E.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const y=u[p];if(h[p].field.isKeyField()){if(typeof y!="string")throw new k(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof y}`);if(!Iv(s)&&y.indexOf("/")!==-1)throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${y}' contains a slash.`);const v=s.path.child(Z.fromString(y));if(!P.isDocumentKey(v))throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const I=new P(v);d.push(ls(o,I))}else{const v=SA(a,l,y);d.push(v)}}return new oi(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function VI(t,e,n){if(typeof(n=B(n))=="string"){if(n==="")throw new k(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iv(e)&&n.indexOf("/")!==-1)throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Z.fromString(n));if(!P.isDocumentKey(r))throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ls(t,new P(r))}if(n instanceof me)return ls(t,n._key);throw new k(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fd(n)}.`)}function BI(t,e){if(!Array.isArray(t)||t.length===0)throw new k(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function DA(t,e){if(e.isInequality()){const r=Nd(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new k(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=_v(t);s!==null&&RA(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new k(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function RA(t,e,n){if(!n.isEqual(e))throw new k(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class dw{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw L()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _s(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ud(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Al(e));default:return null}}convertTimestamp(e){const n=ni(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Z.fromString(e);j(Cb(r));const i=new ii(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(n)||Ne(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Hd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Lz extends dw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,n)}}/**
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
 */class Ui{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dr extends Ml{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ya extends dr{data(e={}){return super.data(e)}}class ui{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ui(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ya(this._firestore,this._userDataWriter,r.key,r,new Ui(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ya(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ui(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ya(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ui(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:Mz(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Mz(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}function PA(t,e){return t instanceof dr&&e instanceof dr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ui&&e instanceof ui&&t._firestore===e._firestore&&yA(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function $z(t){t=te(t,me);const e=te(t.firestore,be);return hA(Xe(e),t._key).then(n=>fw(e,t,n))}class Ss extends dw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,n)}}function Fz(t){t=te(t,me);const e=te(t.firestore,be),n=Xe(e),r=new Ss(e);return tz(n,t._key).then(i=>new dr(e,r,t._key,i,new Ui(i!==null&&i.hasLocalMutations,!0),t.converter))}function Uz(t){t=te(t,me);const e=te(t.firestore,be);return hA(Xe(e),t._key,{source:"server"}).then(n=>fw(e,t,n))}function Vz(t){t=te(t,ut);const e=te(t.firestore,be),n=Xe(e),r=new Ss(e);return AA(t._query),dA(n,t._query).then(i=>new ui(e,r,t,i))}function Bz(t){t=te(t,ut);const e=te(t.firestore,be),n=Xe(e),r=new Ss(e);return nz(n,t._query).then(i=>new ui(e,r,t,i))}function zz(t){t=te(t,ut);const e=te(t.firestore,be),n=Xe(e),r=new Ss(e);return dA(n,t._query,{source:"server"}).then(i=>new ui(e,r,t,i))}function zI(t,e,n){t=te(t,me);const r=te(t.firestore,be),i=Hd(t.converter,e,n);return wu(r,[Bd(Es(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ve.none())])}function jI(t,e,n,...r){t=te(t,me);const i=te(t.firestore,be),s=Es(i);let o;return o=typeof(e=B(e))=="string"||e instanceof li?ow(s,"updateDoc",t._key,e,n,r):sw(s,"updateDoc",t._key,e),wu(i,[o.toMutation(t._key,ve.exists(!0))])}function jz(t){return wu(te(t.firestore,be),[new Wo(t._key,ve.none())])}function og(t,e){const n=te(t.firestore,be),r=Ll(t),i=Hd(t.converter,e);return wu(n,[Bd(Es(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ve.exists(!1))]).then(()=>r)}function xA(t,...e){var n,r,i;t=B(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ig(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ig(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof me)u=te(t.firestore,be),c=qo(t._key.path),l={next:h=>{e[o]&&e[o](fw(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=te(t,ut);u=te(h.firestore,be),c=h._query;const d=new Ss(u);l={next:p=>{e[o]&&e[o](new ui(u,d,h,p))},error:e[o+1],complete:e[o+2]},AA(t._query)}return function(h,d,p,y){const v=new Md(y),I=new Wv(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>jv(await Do(h),I)),()=>{v.Sc(),h.asyncQueue.enqueueAndForget(async()=>qv(await Do(h),I))}}(Xe(u),c,a,l)}function qz(t,e){return rz(Xe(t=te(t,be)),ig(e)?e:{next:e})}function wu(t,e){return function(n,r){const i=new We;return n.asyncQueue.enqueueAndForget(async()=>RB(await nw(n),r,i)),i.promise}(Xe(t),e)}function fw(t,e,n){const r=n.docs.get(e._key),i=new Ss(t);return new dr(t,i,e._key,r,new Ui(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const Kz={maxAttempts:5};/**
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
 */class Wz{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Es(e)}set(e,n,r){this._verifyNotCommitted();const i=Pr(e,this._firestore),s=Hd(i.converter,n,r),o=Bd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ve.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Pr(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof li?ow(this._dataReader,"WriteBatch.update",s._key,n,r,i):sw(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Pr(e,this._firestore);return this._mutations=this._mutations.concat(new Wo(n._key,ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Pr(t,e){if((t=B(t)).firestore!==e)throw new k(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class Hz extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Es(e)}get(e){const n=Pr(e,this._firestore),r=new Lz(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return L();const s=i[0];if(s.isFoundDocument())return new Ml(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Ml(this._firestore,r,n._key,null,n.converter);throw L()})}set(e,n,r){const i=Pr(e,this._firestore),s=Hd(i.converter,n,r),o=Bd(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Pr(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof li?ow(this._dataReader,"Transaction.update",s._key,n,r,i):sw(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Pr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Pr(e,this._firestore),r=new Ss(this._firestore);return super.get(e).then(i=>new dr(this._firestore,r,n._key,i._document,new Ui(!1,!1),n.converter))}}function Gz(t,e,n){t=te(t,be);const r=Object.assign(Object.assign({},Kz),n);return function(i){if(i.maxAttempts<1)throw new k(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new We;return i.asyncQueue.enqueueAndForget(async()=>{const l=await JB(i);new YB(i.asyncQueue,l,o,s,a).run()}),a.promise}(Xe(t),i=>e(new Hz(t,i)),r)}/**
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
 */function Qz(){return new yu("deleteField")}function Yz(){return new iw("serverTimestamp")}function Xz(...t){return new Ez("arrayUnion",t)}function Jz(...t){return new Tz("arrayRemove",t)}function Zz(t){return new Sz("increment",t)}(function(t,e=!0){(function(n){jo=n})(pr),$t(new lt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new be(new aV(n.getProvider("auth-internal")),new hV(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new k(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ii(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),it(F_,"3.11.0",t),it(F_,"3.11.0","esm2017")})();const ej="@firebase/firestore-compat",tj="0.3.8";/**
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
 */function pw(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new k("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function qI(){if(typeof Uint8Array>"u")throw new k("unimplemented","Uint8Arrays are not available in this environment.")}function KI(){if(!$V())throw new k("unimplemented","Blobs are unavailable in Firestore in this environment.")}class $l{constructor(e){this._delegate=e}static fromBase64String(e){return KI(),new $l(Bn.fromBase64String(e))}static fromUint8Array(e){return qI(),new $l(Bn.fromUint8Array(e))}toBase64(){return KI(),this._delegate.toBase64()}toUint8Array(){return qI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function ag(t){return nj(t,["next","error","complete"])}function nj(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class rj{enableIndexedDbPersistence(e,n){return hz(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return dz(e._delegate)}clearIndexedDbPersistence(e){return fz(e._delegate)}}class OA{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ii||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&En("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){mA(this._delegate,e,n,r)}enableNetwork(){return mz(this._delegate)}disableNetwork(){return gz(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,fA("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return pz(this._delegate)}onSnapshotsInSync(e){return qz(this._delegate,e)}get app(){if(!this._appCompat)throw new k("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ro(this,bh(this._delegate,e))}catch(n){throw _t(n,"collection()","Firestore.collection()")}}doc(e){try{return new en(this,Ll(this._delegate,e))}catch(n){throw _t(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new wt(this,oz(this._delegate,e))}catch(n){throw _t(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Gz(this._delegate,n=>e(new LA(this,n)))}batch(){return Xe(this._delegate),new MA(new Wz(this._delegate,e=>wu(this._delegate,e)))}loadBundle(e){return yz(this._delegate,e)}namedQuery(e){return vz(this._delegate,e).then(n=>n?new wt(this,n):null)}}class Gd extends dw{constructor(e){super(),this.firestore=e}convertBytes(e){return new $l(new Bn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return en.forKey(n,this.firestore,null)}}function ij(t){rV(t)}class LA{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Gd(e)}get(e){const n=Vi(e);return this._delegate.get(n).then(r=>new Fl(this._firestore,new dr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Vi(e);return r?(pw("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Vi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Vi(e);return this._delegate.delete(n),this}}class MA{constructor(e){this._delegate=e}set(e,n,r){const i=Vi(e);return r?(pw("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Vi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Vi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ms{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ya(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ul(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ms.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ms(e,new Gd(e),n),i.set(n,s)),s}}ms.INSTANCES=new WeakMap;class en{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Gd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new k("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new en(n,new me(n._delegate,r,new P(e)))}static forKey(e,n,r){return new en(n,new me(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ro(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ro(this.firestore,bh(this._delegate,e))}catch(n){throw _t(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=B(e),e instanceof me?gA(this._delegate,e):!1}set(e,n){n=pw("DocumentReference.set",n);try{return n?zI(this._delegate,e,n):zI(this._delegate,e)}catch(r){throw _t(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?jI(this._delegate,e):jI(this._delegate,e,n,...r)}catch(i){throw _t(i,"updateDoc()","DocumentReference.update()")}}delete(){return jz(this._delegate)}onSnapshot(...e){const n=$A(e),r=FA(e,i=>new Fl(this.firestore,new dr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return xA(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Fz(this._delegate):(e==null?void 0:e.source)==="server"?n=Uz(this._delegate):n=$z(this._delegate),n.then(r=>new Fl(this.firestore,new dr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new en(this.firestore,e?this._delegate.withConverter(ms.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function _t(t,e,n){return t.message=t.message.replace(e,n),t}function $A(t){for(const e of t)if(typeof e=="object"&&!ag(e))return e;return{}}function FA(t,e){var n,r;let i;return ag(t[0])?i=t[0]:ag(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Fl{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new en(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return PA(this._delegate,e._delegate)}}class Ul extends Fl{data(e){const n=this._delegate.data(e);return iV(n!==void 0),n}}class wt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Gd(e)}where(e,n,r){try{return new wt(this.firestore,Cr(this._delegate,bz(e,n,r)))}catch(i){throw _t(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new wt(this.firestore,Cr(this._delegate,Az(e,n)))}catch(r){throw _t(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new wt(this.firestore,Cr(this._delegate,Nz(e)))}catch(n){throw _t(n,"limit()","Query.limit()")}}limitToLast(e){try{return new wt(this.firestore,Cr(this._delegate,Dz(e)))}catch(n){throw _t(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new wt(this.firestore,Cr(this._delegate,Rz(...e)))}catch(n){throw _t(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new wt(this.firestore,Cr(this._delegate,Pz(...e)))}catch(n){throw _t(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new wt(this.firestore,Cr(this._delegate,xz(...e)))}catch(n){throw _t(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new wt(this.firestore,Cr(this._delegate,Oz(...e)))}catch(n){throw _t(n,"endAt()","Query.endAt()")}}isEqual(e){return yA(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Bz(this._delegate):(e==null?void 0:e.source)==="server"?n=zz(this._delegate):n=Vz(this._delegate),n.then(r=>new lg(this.firestore,new ui(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=$A(e),r=FA(e,i=>new lg(this.firestore,new ui(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return xA(this._delegate,n,r)}withConverter(e){return new wt(this.firestore,e?this._delegate.withConverter(ms.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class sj{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Ul(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class lg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new wt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ul(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new sj(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Ul(this._firestore,r))})}isEqual(e){return PA(this._delegate,e._delegate)}}class Ro extends wt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new en(this.firestore,e):null}doc(e){try{return e===void 0?new en(this.firestore,Ll(this._delegate)):new en(this.firestore,Ll(this._delegate,e))}catch(n){throw _t(n,"doc()","CollectionReference.doc()")}}add(e){return og(this._delegate,e).then(n=>new en(this.firestore,n))}isEqual(e){return gA(this._delegate,e._delegate)}withConverter(e){return new Ro(this.firestore,e?this._delegate.withConverter(ms.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Vi(t){return te(t,me)}/**
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
 */class mw{constructor(...e){this._delegate=new li(...e)}static documentId(){return new mw(De.keyField().canonicalString())}isEqual(e){return e=B(e),e instanceof li?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Ri{constructor(e){this._delegate=e}static serverTimestamp(){const e=Yz();return e._methodName="FieldValue.serverTimestamp",new Ri(e)}static delete(){const e=Qz();return e._methodName="FieldValue.delete",new Ri(e)}static arrayUnion(...e){const n=Xz(...e);return n._methodName="FieldValue.arrayUnion",new Ri(n)}static arrayRemove(...e){const n=Jz(...e);return n._methodName="FieldValue.arrayRemove",new Ri(n)}static increment(e){const n=Zz(e);return n._methodName="FieldValue.increment",new Ri(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const oj={Firestore:OA,GeoPoint:Ud,Timestamp:we,Blob:$l,Transaction:LA,WriteBatch:MA,DocumentReference:en,DocumentSnapshot:Fl,Query:wt,QueryDocumentSnapshot:Ul,QuerySnapshot:lg,CollectionReference:Ro,FieldPath:mw,FieldValue:Ri,setLogLevel:ij,CACHE_SIZE_UNLIMITED:uz};function aj(t,e){t.INTERNAL.registerComponent(new lt("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},oj)))}/**
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
 */function lj(t){aj(t,(e,n)=>new OA(e,n,new rj)),t.registerVersion(ej,tj)}lj(Mo);var uj="firebase",cj="9.21.0";/**
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
 */it(uj,cj,"app");/**
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
 */const UA="firebasestorage.googleapis.com",hj="storageBucket",dj=2*60*1e3,fj=10*60*1e3;/**
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
 */class qn extends rt{constructor(e,n,r=0){super(hp(e),`Firebase Storage: ${n} (${hp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var zn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(zn||(zn={}));function hp(t){return"storage/"+t}function pj(){const t="An unknown error occurred, please check the error payload for server response.";return new qn(zn.UNKNOWN,t)}function mj(){return new qn(zn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gj(){return new qn(zn.CANCELED,"User canceled the upload/download.")}function yj(t){return new qn(zn.INVALID_URL,"Invalid URL '"+t+"'.")}function vj(t){return new qn(zn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function WI(t){return new qn(zn.INVALID_ARGUMENT,t)}function VA(){return new qn(zn.APP_DELETED,"The Firebase app was deleted.")}function wj(t){return new qn(zn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class gn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gn.makeFromUrl(e,n)}catch{return new gn(e,"")}if(r.path==="")return r;throw vj(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===UA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${I}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<g.length;w++){const S=g[w],b=S.regex.exec(e);if(b){const D=b[S.indices.bucket];let R=b[S.indices.path];R||(R=""),r=new gn(D,R),S.postModify(r);break}}if(r==null)throw yj(e);return r}}class _j{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Ij(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...I){u||(u=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(p,l())},I)}function d(){s&&clearTimeout(s)}function p(I,...m){if(u){d();return}if(I){d(),c.call(null,I,...m);return}if(l()||o){d(),c.call(null,I,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(I){y||(y=!0,d(),!u&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function Ej(t){t(!1)}/**
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
 */function Tj(t){return t!==void 0}function HI(t,e,n,r){if(r<e)throw WI(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw WI(`Invalid value for '${t}'. Expected ${n} or less.`)}function Sj(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Nh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Nh||(Nh={}));/**
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
 */function kj(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class Cj{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ju(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Nh.NO_ERROR,l=s.getStatus();if(!a||kj(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Nh.ABORT;r(!1,new Ju(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ju(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Tj(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=pj();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?VA():gj();o(l)}else{const l=mj();o(l)}};this.canceled_?n(!1,new Ju(!1,null,!0)):this.backoffId_=Ij(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ej(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ju{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function bj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Aj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Nj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Dj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Rj(t,e,n,r,i,s,o=!0){const a=Sj(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return Nj(u,e),bj(u,n),Aj(u,s),Dj(u,r),new Cj(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Pj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xj(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Dh{constructor(e,n){this._service=e,n instanceof gn?this._location=n:this._location=gn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Dh(e,n)}get root(){const e=new gn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xj(this._location.path)}get storage(){return this._service}get parent(){const e=Pj(this._location.path);if(e===null)return null;const n=new gn(this._location.bucket,e);return new Dh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw wj(e)}}function GI(t,e){const n=e==null?void 0:e[hj];return n==null?null:gn.makeFromBucketSpec(n,t)}function Oj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ET(i,t.app.options.projectId))}class Lj{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=UA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dj,this._maxUploadRetryTime=fj,this._requests=new Set,i!=null?this._bucket=gn.makeFromBucketSpec(i,this._host):this._bucket=GI(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gn.makeFromBucketSpec(this._url,e):this._bucket=GI(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){HI("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){HI("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Dh(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new _j(VA());{const o=Rj(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const QI="@firebase/storage",YI="0.11.2";/**
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
 */const BA="storage";function Mj(t=Jh(),e){t=B(t);const r=fi(t,BA).getImmediate({identifier:e}),i=_T("storage");return i&&$j(r,...i),r}function $j(t,e,n,r={}){Oj(t,e,n,r)}function Fj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Lj(n,r,i,e,pr)}function Uj(){$t(new lt(BA,Fj,"PUBLIC").setMultipleInstances(!0)),it(QI,YI,""),it(QI,YI,"esm2017")}Uj();const Vj={apiKey:"AIzaSyDE9nF_Ghno85E9jdPY3qf5ASxTc3odNVM",authDomain:"slimpossible-34902.firebaseapp.com",databaseURL:"https://slimpossible-34902-default-rtdb.firebaseio.com",projectId:"slimpossible-34902",storageBucket:"slimpossible-34902.appspot.com",messagingSenderId:"858747206804",appId:"1:858747206804:web:2567fcbd6f40a1fbcb0881"},gw=Xh(Vj),Bj=cz(gw),zj=_L(gw);Mj(gw);const jj=new pn;/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vl(){return Vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vl.apply(this,arguments)}var $r;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($r||($r={}));const XI="popstate";function qj(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ug("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Rh(i)}return Wj(e,n,null,t)}function Me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Kj(){return Math.random().toString(36).substr(2,8)}function JI(t,e){return{usr:t.state,key:t.key,idx:e}}function ug(t,e,n,r){return n===void 0&&(n=null),Vl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xo(e):e,{state:n,key:e&&e.key||r||Kj()})}function Rh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Wj(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=$r.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Vl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=$r.Pop;let I=c(),m=I==null?null:I-u;u=I,l&&l({action:a,location:v.location,delta:m})}function d(I,m){a=$r.Push;let f=ug(v.location,I,m);n&&n(f,I),u=c()+1;let g=JI(f,u),w=v.createHref(f);try{o.pushState(g,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function p(I,m){a=$r.Replace;let f=ug(v.location,I,m);n&&n(f,I),u=c();let g=JI(f,u),w=v.createHref(f);o.replaceState(g,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof I=="string"?I:Rh(I);return Me(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let v={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(XI,h),l=I,()=>{i.removeEventListener(XI,h),l=null}},createHref(I){return e(i,I)},createURL:y,encodeLocation(I){let m=y(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(I){return o.go(I)}};return v}var ZI;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ZI||(ZI={}));function Hj(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Xo(e):e,i=vw(r.pathname||"/",n);if(i==null)return null;let s=zA(t);Gj(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=r3(s[a],o3(i));return o}function zA(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Gr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zA(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:t3(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of jA(s.path))i(s,o,l)}),e}function jA(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=jA(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Gj(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:n3(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qj=/^:\w+$/,Yj=3,Xj=2,Jj=1,Zj=10,e3=-2,eE=t=>t==="*";function t3(t,e){let n=t.split("/"),r=n.length;return n.some(eE)&&(r+=e3),e&&(r+=Xj),n.filter(i=>!eE(i)).reduce((i,s)=>i+(Qj.test(s)?Yj:s===""?Jj:Zj),r)}function n3(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function r3(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=i3({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Gr([i,c.pathname]),pathnameBase:c3(Gr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Gr([i,c.pathnameBase]))}return s}function i3(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=s3(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=a3(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function s3(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),yw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function o3(t){try{return decodeURI(t)}catch(e){return yw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function a3(t,e){try{return decodeURIComponent(t)}catch(n){return yw(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function vw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function l3(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xo(t):t;return{pathname:n?n.startsWith("/")?n:u3(n,e):e,search:h3(r),hash:d3(i)}}function u3(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function KA(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xo(t):(i=Vl({},t),Me(!i.pathname||!i.pathname.includes("?"),dp("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),dp("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),dp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=l3(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Gr=t=>t.join("/").replace(/\/\/+/g,"/"),c3=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),h3=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,d3=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function f3(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ph(){return Ph=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ph.apply(this,arguments)}const ww=T.createContext(null),p3=T.createContext(null),Jo=T.createContext(null),Qd=T.createContext(null),Zo=T.createContext({outlet:null,matches:[]}),WA=T.createContext(null);function m3(t,e){let{relative:n}=e===void 0?{}:e;_u()||Me(!1);let{basename:r,navigator:i}=T.useContext(Jo),{hash:s,pathname:o,search:a}=QA(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Gr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function _u(){return T.useContext(Qd)!=null}function Yd(){return _u()||Me(!1),T.useContext(Qd).location}function HA(t){T.useContext(Jo).static||T.useLayoutEffect(t)}function GA(){return T.useContext(ww)!=null?A3():g3()}function g3(){_u()||Me(!1);let{basename:t,navigator:e}=T.useContext(Jo),{matches:n}=T.useContext(Zo),{pathname:r}=Yd(),i=JSON.stringify(qA(n).map(a=>a.pathnameBase)),s=T.useRef(!1);return HA(()=>{s.current=!0}),T.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=KA(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Gr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function QA(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=T.useContext(Zo),{pathname:i}=Yd(),s=JSON.stringify(qA(r).map(o=>o.pathnameBase));return T.useMemo(()=>KA(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function y3(t,e){return v3(t,e)}function v3(t,e,n){_u()||Me(!1);let{navigator:r}=T.useContext(Jo),{matches:i}=T.useContext(Zo),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Yd(),u;if(e){var c;let v=typeof e=="string"?Xo(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Me(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=Hj(t,{pathname:d}),y=T3(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Gr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Gr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?T.createElement(Qd.Provider,{value:{location:Ph({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$r.Pop}},y):y}function w3(){let t=b3(),e=f3(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,s)}const _3=T.createElement(w3,null);class I3 extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?T.createElement(Zo.Provider,{value:this.props.routeContext},T.createElement(WA.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E3(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(ww);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Zo.Provider,{value:e},r)}function T3(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Me(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||_3);let d=e.concat(s.slice(0,u+1)),p=()=>{let y;return c?y=h:l.route.element?y=l.route.element:y=a,T.createElement(E3,{match:l,routeContext:{outlet:a,matches:d},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(I3,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d}}):p()},null)}var cg;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(cg||(cg={}));var Bl;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Bl||(Bl={}));function S3(t){let e=T.useContext(ww);return e||Me(!1),e}function k3(t){let e=T.useContext(p3);return e||Me(!1),e}function C3(t){let e=T.useContext(Zo);return e||Me(!1),e}function YA(t){let e=C3(),n=e.matches[e.matches.length-1];return n.route.id||Me(!1),n.route.id}function b3(){var t;let e=T.useContext(WA),n=k3(Bl.UseRouteError),r=YA(Bl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function A3(){let{router:t}=S3(cg.UseNavigateStable),e=YA(Bl.UseNavigateStable),n=T.useRef(!1);return HA(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ph({fromRouteId:e},s)))},[t,e])}function Ra(t){Me(!1)}function N3(t){let{basename:e="/",children:n=null,location:r,navigationType:i=$r.Pop,navigator:s,static:o=!1}=t;_u()&&Me(!1);let a=e.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Xo(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,y=T.useMemo(()=>{let v=vw(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return y==null?null:T.createElement(Jo.Provider,{value:l},T.createElement(Qd.Provider,{children:n,value:y}))}function D3(t){let{children:e,location:n}=t;return y3(hg(e),n)}var tE;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(tE||(tE={}));new Promise(()=>{});function hg(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,hg(r.props.children,s));return}r.type!==Ra&&Me(!1),!r.props.index||!r.props.children||Me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=hg(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dg(){return dg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dg.apply(this,arguments)}function R3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function P3(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function x3(t,e){return t.button===0&&(!e||e==="_self")&&!P3(t)}const O3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function L3(t){let{basename:e,children:n,window:r}=t,i=T.useRef();i.current==null&&(i.current=qj({window:r,v5Compat:!0}));let s=i.current,[o,a]=T.useState({action:s.action,location:s.location});return T.useLayoutEffect(()=>s.listen(a),[s]),T.createElement(N3,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const M3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,F3=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=R3(e,O3),{basename:d}=T.useContext(Jo),p,y=!1;if(typeof u=="string"&&$3.test(u)&&(p=u,M3))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),w=vw(g.pathname,d);g.origin===f.origin&&w!=null?u=w+g.search+g.hash:y=!0}catch{}let v=m3(u,{relative:i}),I=U3(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||I(f)}return T.createElement("a",dg({},h,{href:p||v,onClick:y||s?r:m,ref:n,target:l}))});var nE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(nE||(nE={}));var rE;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rE||(rE={}));function U3(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=GA(),l=Yd(),u=QA(t,{relative:o});return T.useCallback(c=>{if(x3(c,n)){c.preventDefault();let h=r!==void 0?r:Rh(l)===Rh(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const iE=()=>{const t=GA();return ne("div",{className:"loginPage",children:[V("div",{className:"app-logo",children:V("img",{src:NR})}),V("form",{children:V("button",{type:"button",onClick:()=>{ES(zj,jj).then(n=>{var r=n.user.displayName,i=n.user.email,s=n.user.photoURL;localStorage.setItem("name",r),localStorage.setItem("image",s),localStorage.setItem("email",i),t("/"),window.location.reload()}).catch(n=>{console.log(n)})},className:"login-with-google-btn",children:"Sign in with Google"})})]})};function V3(t,e,n){T.useEffect(()=>{if(!document)return;const r=document.querySelector('script[src="'.concat(t,'"]'));if(r!=null&&r.dataset.loaded){e==null||e();return}const i=r||document.createElement("script");r||(i.src=t);const s=()=>{i.dataset.loaded="1",e==null||e()};return i.addEventListener("load",s),n&&i.addEventListener("error",n),r||document.head.append(i),()=>{i.removeEventListener("load",s),n&&i.removeEventListener("error",n)}},[])}function B3(t){let{chartVersion:e="current",chartPackages:n=["corechart","controls"],chartLanguage:r="en",mapsApiKey:i}=t;const[s,o]=T.useState(null),[a,l]=T.useState(!1);return V3("https://www.gstatic.com/charts/loader.js",()=>{const u=window==null?void 0:window.google;u&&(u.charts.load(e,{packages:n,language:r,mapsApiKey:i}),u.charts.setOnLoadCallback(()=>{o(u)}))},()=>{l(!0)}),[s,a]}function z3(t){let{onLoad:e,onError:n,...r}=t;const[i,s]=B3(r);return T.useEffect(()=>{i&&e&&e(i)},[i]),T.useEffect(()=>{s&&n&&n()},[s]),null}const XA={legend_toggle:!1,options:{},legendToggle:!1,getChartWrapper:()=>{},spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{}};let sE=0;const j3=()=>(sE+=1,"reactgooglegraph-".concat(sE)),q3=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],K3=async function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new Promise((r,i)=>{const s="".concat(n.headers?"headers=".concat(n.headers):"headers=0"),o="".concat(n.query?"&tq=".concat(encodeURIComponent(n.query)):""),a="".concat(n.gid?"&gid=".concat(n.gid):""),l="".concat(n.sheet?"&sheet=".concat(n.sheet):""),u="".concat(n.access_token?"&access_token=".concat(n.access_token):""),c="".concat(s).concat(a).concat(l).concat(o).concat(u),h="".concat(e,"/gviz/tq?").concat(c);new t.visualization.Query(h).send(p=>{p.isError()?i("Error in query:  ".concat(p.getMessage()," ").concat(p.getDetailedMessage())):r(p.getDataTable())})})},{Provider:W3,Consumer:H3}=T.createContext(XA),G3=t=>{let{children:e,value:n}=t;return T.createElement(W3,{value:n},e)},JA=t=>{let{render:e}=t;return T.createElement(H3,null,n=>e(n))},Q3="#CCCCCC";class Y3 extends T.Component{componentDidMount(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()}componentWillUnmount(){const{google:e,googleChartWrapper:n}=this.props;window.removeEventListener("resize",this.onResize),e.visualization.events.removeAllListeners(n),n.getChartType()==="Timeline"&&n.getChart()&&n.getChart().clearChart()}componentDidUpdate(){this.draw(this.props)}render(){return null}constructor(...e){super(...e),this.state={hiddenColumns:[]},this.listenToLegendToggle=()=>{const{google:n,googleChartWrapper:r}=this.props;n.visualization.events.addListener(r,"select",()=>{const s=r.getChart().getSelection(),o=r.getDataTable();if(s.length===0||s[0].row||!o)return;const a=s[0].column,l=this.getColumnID(o,a);this.state.hiddenColumns.includes(l)?this.setState(u=>({...u,hiddenColumns:[...u.hiddenColumns.filter(c=>c!==l)]})):this.setState(u=>({...u,hiddenColumns:[...u.hiddenColumns,l]}))})},this.applyFormatters=(n,r)=>{const{google:i}=this.props;for(let s of r)switch(s.type){case"ArrowFormat":{new i.visualization.ArrowFormat(s.options).format(n,s.column);break}case"BarFormat":{new i.visualization.BarFormat(s.options).format(n,s.column);break}case"ColorFormat":{const o=new i.visualization.ColorFormat(s.options),{ranges:a}=s;for(let l of a)o.addRange(...l);o.format(n,s.column);break}case"DateFormat":{new i.visualization.DateFormat(s.options).format(n,s.column);break}case"NumberFormat":{new i.visualization.NumberFormat(s.options).format(n,s.column);break}case"PatternFormat":{new i.visualization.PatternFormat(s.options).format(n,s.column);break}}},this.getColumnID=(n,r)=>n.getColumnId(r)||n.getColumnLabel(r),this.draw=async n=>{let{data:r,diffdata:i,rows:s,columns:o,options:a,legend_toggle:l,legendToggle:u,chartType:c,formatters:h,spreadSheetUrl:d,spreadSheetQueryParameters:p}=n;const{google:y,googleChartWrapper:v}=this.props;let I,m=null;if(i){const w=y.visualization.arrayToDataTable(i.old),S=y.visualization.arrayToDataTable(i.new);m=y.visualization[c].prototype.computeDiff(w,S)}r!==null?Array.isArray(r)?I=y.visualization.arrayToDataTable(r):I=new y.visualization.DataTable(r):s&&o?I=y.visualization.arrayToDataTable([o,...s]):d?I=await K3(y,d,p):I=y.visualization.arrayToDataTable([]);const f=I.getNumberOfColumns();for(let w=0;w<f;w+=1){const S=this.getColumnID(I,w);if(this.state.hiddenColumns.includes(S)){const b=I.getColumnLabel(w),D=I.getColumnId(w),R=I.getColumnType(w);I.removeColumn(w),I.addColumn({label:b,id:D,type:R})}}const g=v.getChart();v.getChartType()==="Timeline"&&g&&g.clearChart(),v.setChartType(c),v.setOptions(a||{}),v.setDataTable(I),v.draw(),this.props.googleChartDashboard!==null&&this.props.googleChartDashboard.draw(I),m&&(v.setDataTable(m),v.draw()),h&&(this.applyFormatters(I,h),v.setDataTable(I),v.draw()),(u===!0||l===!0)&&this.grayOutHiddenColumns({options:a})},this.grayOutHiddenColumns=n=>{let{options:r}=n;const{googleChartWrapper:i}=this.props,s=i.getDataTable();if(!s)return;const o=s.getNumberOfColumns();if(this.state.hiddenColumns.length>0===!1)return;const l=Array.from({length:o-1}).map((u,c)=>{const h=this.getColumnID(s,c+1);return this.state.hiddenColumns.includes(h)?Q3:r&&r.colors?r.colors[c]:q3[c]});i.setOptions({...r,colors:l}),i.draw()},this.onResize=()=>{const{googleChartWrapper:n}=this.props;n.draw()}}}class X3 extends T.Component{componentDidMount(){}componentWillUnmount(){}shouldComponentUpdate(){return!1}render(){const{google:e,googleChartWrapper:n,googleChartDashboard:r}=this.props;return T.createElement(JA,{render:i=>T.createElement(Y3,Object.assign({},i,{google:e,googleChartWrapper:n,googleChartDashboard:r}))})}}class J3 extends T.Component{shouldComponentUpdate(){return!1}listenToEvents(e){let{chartEvents:n,google:r,googleChartWrapper:i}=e;if(n){r.visualization.events.removeAllListeners(i);for(let o of n){var s=this;const{eventName:a,callback:l}=o;r.visualization.events.addListener(i,a,function(){for(var u=arguments.length,c=new Array(u),h=0;h<u;h++)c[h]=arguments[h];l({chartWrapper:i,props:s.props,google:r,eventArgs:c})})}}}render(){const{google:e,googleChartWrapper:n}=this.props;return T.createElement(JA,{render:r=>(this.listenToEvents({chartEvents:r.chartEvents||null,google:e,googleChartWrapper:n}),null)})}}let oE=0;class Z3 extends T.Component{componentDidMount(){const{options:e,google:n,chartType:r,chartWrapperParams:i,toolbarItems:s,getChartEditor:o,getChartWrapper:a}=this.props,l={chartType:r,options:e,containerId:this.getGraphID(),...i},u=new n.visualization.ChartWrapper(l);u.setOptions(e||{}),a&&a(u,n);const c=new n.visualization.Dashboard(this.dashboard_ref),h=this.addControls(u,c);s&&n.visualization.drawToolbar(this.toolbar_ref.current,s);let d=null;o&&(d=new n.visualization.ChartEditor,o({chartEditor:d,chartWrapper:u,google:n})),this.setState({googleChartEditor:d,googleChartControls:h,googleChartDashboard:c,googleChartWrapper:u,isReady:!0})}componentDidUpdate(){if(!this.state.googleChartWrapper||!this.state.googleChartDashboard||!this.state.googleChartControls)return;const{controls:e}=this.props;if(e)for(let n=0;n<e.length;n+=1){const{controlType:r,options:i,controlWrapperParams:s}=e[n];s&&"state"in s&&this.state.googleChartControls[n].control.setState(s.state),this.state.googleChartControls[n].control.setOptions(i),this.state.googleChartControls[n].control.setControlType(r)}}shouldComponentUpdate(e,n){return this.state.isReady!==n.isReady||e.controls!==this.props.controls}render(){const{width:e,height:n,options:r,style:i}=this.props,s={height:n||r&&r.height,width:e||r&&r.width,...i};return this.props.render?T.createElement("div",{ref:this.dashboard_ref,style:s},T.createElement("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):T.createElement("div",{ref:this.dashboard_ref,style:s},this.renderControl(o=>{let{controlProp:a}=o;return a.controlPosition!=="bottom"}),this.renderChart(),this.renderControl(o=>{let{controlProp:a}=o;return a.controlPosition==="bottom"}),this.renderToolBar())}constructor(...e){var n;super(),n=this,this.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},this.graphID=null,this.dashboard_ref=T.createRef(),this.toolbar_ref=T.createRef(),this.getGraphID=()=>{const{graphID:r,graph_id:i}=this.props;let s;return!r&&!i?this.graphID?s=this.graphID:s=j3():r&&!i?s=r:i&&!r?s=i:s=r,this.graphID=s,this.graphID},this.getControlID=(r,i)=>{oE+=1;let s;return typeof r>"u"?s="googlechart-control-".concat(i,"-").concat(oE):s=r,s},this.addControls=(r,i)=>{const{google:s,controls:o}=this.props,a=o?o.map((u,c)=>{const{controlID:h,controlType:d,options:p,controlWrapperParams:y}=u,v=this.getControlID(h,c);return{controlProp:u,control:new s.visualization.ControlWrapper({containerId:v,controlType:d,options:p,...y})}}):null;if(!a)return null;i.bind(a.map(u=>{let{control:c}=u;return c}),r);for(let u of a){const{control:c,controlProp:h}=u,{controlEvents:d=[]}=h;for(let p of d){var l=this;const{callback:y,eventName:v}=p;s.visualization.events.removeListener(c,v,y),s.visualization.events.addListener(c,v,function(){for(var I=arguments.length,m=new Array(I),f=0;f<I;f++)m[f]=arguments[f];y({chartWrapper:r,controlWrapper:c,props:l.props,google:s,eventArgs:m})})}}return a},this.renderChart=()=>{const{width:r,height:i,options:s,style:o,className:a,rootProps:l,google:u}=this.props,c={height:i||s&&s.height,width:r||s&&s.width,...o};return T.createElement("div",Object.assign({id:this.getGraphID(),style:c,className:a},l),this.state.isReady&&this.state.googleChartWrapper!==null?T.createElement(T.Fragment,null,T.createElement(X3,{googleChartWrapper:this.state.googleChartWrapper,google:u,googleChartDashboard:this.state.googleChartDashboard}),T.createElement(J3,{googleChartWrapper:this.state.googleChartWrapper,google:u})):null)},this.renderControl=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i=>!0;return n.state.isReady&&n.state.googleChartControls!==null?T.createElement(T.Fragment,null,n.state.googleChartControls.filter(i=>{let{controlProp:s,control:o}=i;return r({control:o,controlProp:s})}).map(i=>{let{control:s,controlProp:o}=i;return T.createElement("div",{key:s.getContainerId(),id:s.getContainerId()})})):null},this.renderToolBar=()=>this.props.toolbarItems?T.createElement("div",{ref:this.toolbar_ref}):null}}class _w extends T.Component{render(){const{chartLanguage:e,chartPackages:n,chartVersion:r,mapsApiKey:i,loader:s,errorElement:o}=this.props;return T.createElement(G3,{value:this.props},this.state.loadingStatus==="ready"&&this.state.google!==null?T.createElement(Z3,Object.assign({},this.props,{google:this.state.google})):this.state.loadingStatus==="errored"&&o?o:s,T.createElement(z3,{chartLanguage:e,chartPackages:n,chartVersion:r,mapsApiKey:i,onLoad:this.onLoad,onError:this.onError}))}componentDidMount(){this._isMounted=!0}componentWillUnmount(){this._isMounted=!1}isFullyLoaded(e){const{controls:n,toolbarItems:r,getChartEditor:i}=this.props;return e&&e.visualization&&e.visualization.ChartWrapper&&e.visualization.Dashboard&&(!n||e.visualization.ChartWrapper)&&(!i||e.visualization.ChartEditor)&&(!r||e.visualization.drawToolbar)}constructor(...e){super(...e),this._isMounted=!1,this.state={loadingStatus:"loading",google:null},this.onLoad=n=>{if(this.props.onLoad&&this.props.onLoad(n),this.isFullyLoaded(n))this.onSuccess(n);else{const r=setInterval(()=>{const i=window.google;this._isMounted?i&&this.isFullyLoaded(i)&&(clearInterval(r),this.onSuccess(i)):clearInterval(r)},1e3)}},this.onSuccess=n=>{this.setState({loadingStatus:"ready",google:n})},this.onError=()=>{this.setState({loadingStatus:"errored"})}}}_w.defaultProps=XA;var aE;(function(t){t.annotation="annotation",t.annotationText="annotationText",t.certainty="certainty",t.emphasis="emphasis",t.interval="interval",t.scope="scope",t.style="style",t.tooltip="tooltip",t.domain="domain"})(aE||(aE={}));const ZA=t=>{const e=t.ingredient;return ne("div",{className:"Ingredient",children:[ne("div",{className:"ing_top",children:[V("h3",{children:e.emoji}),ne("h3",{children:[e.name,":"]}),ne("p",{children:[" ",e.num," ",e.unit]})]}),V("div",{className:"ing_bottom",children:ne("p",{children:[e.calories," calories"]})})]})},e9=t=>{const[e,n]=T.useState([]),[r,i]=T.useState({}),s=t.block,o=s.ingredients,a=o.map((l,u)=>V(ZA,{ingredient:l},u));if(e.length===0){const l=[["Ingredient","Calories"]];o.forEach(u=>{l.push([u.name,u.calories])}),n(l)}return Object.keys(r).length===0&&i({width:"100%",height:"30vh",title:"Calories Breakdown",pieHole:.4,is3D:!1,backgroundColor:"transparent"}),ne("div",{className:"block",style:s.customStyle,children:[V("div",{className:"block-title",children:V("h1",{children:s.title})}),ne("div",{className:"block-content",children:[V("div",{className:"strings",style:s.stringsStyle,children:a}),V(_w,{chartType:"PieChart",data:e,options:r})]})]})};const t9=t=>{T.useState([]);const e=t.option,n=e.ingredients,r=t.tryMealOption,i=n.map((o,a)=>V(ZA,{ingredient:o},a));return ne("div",{className:"block",children:[V("input",{id:"mealCheckBox",type:"checkbox",onChange:o=>{var a={},l=0,u=0,c=0,h=0;n.forEach(d=>{l+=d.calories,u+=d.carbohydrates,c+=d.protein,h+=d.fat}),o.target.checked?(console.log("checked"),a.calories=l,a.carbohydrates=u,a.protein=c,a.fat=h):o.target.checked||console.log("unchecked"),r(a)}}),V("div",{className:"block-title",children:ne("h1",{children:[e.emoji,e.title]})}),V("div",{className:"block-content",children:V("div",{className:"strings",children:i})})]})},n9=()=>{const[t,e]=T.useState(0),[n,r]=T.useState(0),[i,s]=T.useState(0),[o,a]=T.useState(0),[l,u]=T.useState(0),[c,h]=T.useState([]),[d,p]=T.useState({}),[y,v]=T.useState({}),[I,m]=T.useState({}),[f,g]=T.useState(!1),[w,S]=T.useState([]);var b={title:"Breakfast",ingredients:[{emoji:"🍞",name:"Bread",num:100,calories:267,protein:8,fat:3,carbohydrates:51,unit:"g"},{emoji:"🥚",name:"Egg",num:200,calories:310,protein:26,fat:23,carbohydrates:2,unit:"g"}]},D={title:"Lunch",ingredients:[{emoji:"🍔",name:"Beef Patty",num:1,calories:250,protein:20,fat:20,carbohydrates:0,unit:"serving"},{emoji:"🍟",name:"French Fries",num:150,calories:312,protein:4,fat:15,carbohydrates:42,unit:"g"},{emoji:"🥤",name:"Soda",num:1,calories:150,protein:0,fat:0,carbohydrates:39,unit:"can"}]},R={emoji:"🥩",title:"Steak Dinner",ingredients:[{name:"Ribeye Steak",num:1,unit:"serving",calories:700,protein:20,fat:300,carbohydrates:0},{name:"Baked Potato",num:1,unit:"serving",calories:250,protein:1,fat:0,carbohydrates:50},{name:"Green Beans",num:1,unit:"cup",calories:35,protein:2,fat:0,carbohydrates:7},{name:"Garlic Bread",num:1,unit:"slice",calories:120,protein:3,fat:4,carbohydrates:500},{name:"Red Wine",num:1,unit:"glass",calories:125,protein:0,fat:0,carbohydrates:4}]},Y={emoji:"🍝",title:"Spaghetti Bolognese",ingredients:[{name:"Ground Beef",num:1,unit:"serving",calories:250,protein:200,fat:12,carbohydrates:5},{name:"Spaghetti Noodles",num:2,unit:"ounces",calories:210,protein:70,fat:1,carbohydrates:43},{name:"Tomato Sauce",num:.5,unit:"cup",calories:50,protein:2,fat:1,carbohydrates:10},{name:"Parmesan Cheese",num:2,unit:"tablespoons",calories:44,protein:3,fat:3,carbohydrates:0},{name:"Olive Oil",num:1,unit:"tablespoon",calories:120,protein:0,fat:140,carbohydrates:0},{name:"Garlic",num:2,unit:"cloves",calories:8,protein:0,fat:0,carbohydrates:250}]},q=[b,D],ce=[R,Y];const on=U=>(U.forEach(($,re)=>{$.title!=null&&$.title.toLowerCase()==="Breakfast".toLowerCase()?($.customStyle={borderColor:"#7ACDFF",backgroundColor:"#EAF7FF",color:"#4ABBFF"},$.stringsStyle={borderColor:"#7ACDFF",backgroundColor:"#C3E8FF"},$.mealInfoStyle={borderColor:"#7ACDFF"}):$.title!=null&&$.title.toLowerCase()==="Lunch".toLowerCase()?($.customStyle={borderColor:"#FF6735",backgroundColor:"#FFE1D7",color:"#CA3200"},$.stringsStyle={borderColor:"#FF6735",backgroundColor:"#FFCDBD"},$.mealInfoStyle={borderColor:"#FF6735"}):$.title!=null&&$.title.toLowerCase()==="Dinner".toLowerCase()&&($.customStyle={borderColor:"#2D48FF",backgroundColor:"#D9DEFF",color:"#00128C"},$.stringsStyle={borderColor:"#2D48FF",backgroundColor:"#C3CBFF"},$.mealInfoStyle={borderColor:"#2D48FF"})}),U);c.length==0&&(q=on(q),h(q)),w.length==0&&S(ce);const yt=()=>{var U=[["Type","Item"],["Protein",835],["Fat",560],["Carbohydrates",320]];p(U)},Ii=()=>{var U=[["Type","Item"],["Protein",835],["Fat",560],["Carbohydrates",320]];v(U)};function ea(U){var $={},re=0,ae=0,un=0,Qt=0;if(Object.keys(U).length===0)$=y,re=y[1][1],ae=y[2][1],un=y[3][1],Qt=n;else{re=y[1][1]+U.protein,ae=y[2][1]+U.fat,un=y[3][1]+U.carbohydrates,Qt=U.calories+n;var $=[["Type","Item"],["Protein",re],["Fat",ae],["Carbohydrates",un]]}a(re),u(ae),s(un),e(Qt),p($),m({old:y,new:$})}const an={width:"70%",height:"160px",pieSliceText:"none",backgroundColor:"transparent",chartArea:{width:"60%",height:"90%"},legend:{textStyle:{color:"white",fontSize:16}}};window.innerWidth<=768&&(an.height="130px",an.width="90%",an.legend.textStyle.fontSize=10,an.chartArea.width="90%"),f||(yt(),Ii(),g(!0),console.log("Pie data changed")),T.useEffect(()=>{Object.keys(I).length===0&&m({old:y,new:d})},[d,y]),T.useEffect(()=>{if(c.length!=0){var U=0,$=0,re=0,ae=0;c.forEach((un,Qt)=>{un.ingredients.forEach((_r,Ir)=>{U+=_r.protein,$+=_r.fat,re+=_r.carbohydrates,ae+=_r.calories})})}r(ae),e(ae),a(U),u($),s(re)},[c]);const ln=localStorage.getItem("name"),M=localStorage.getItem("image");return console.log("name -< ",ln,M),ne("div",{className:"homepage",children:[V("div",{className:"header",children:ne("div",{className:"info_box",children:[V(_w,{chartType:"PieChart",diffdata:I,options:an}),V("div",{className:"seperator"}),ne("div",{className:"info",children:[ne("div",{className:"info_item",children:[V("h3",{children:"Calories: "}),V("p",{children:t})]}),ne("div",{className:"info_item",children:[V("h3",{children:"Carbohydrates: "}),V("p",{children:i})]}),ne("div",{className:"info_item",children:[V("h3",{children:"Fat: "}),V("p",{children:l})]}),ne("div",{className:"info_item",children:[V("h3",{children:"Protein: "}),V("p",{children:o})]})]})]})}),ne("div",{className:"content",children:[c.map((U,$)=>V(e9,{block:U},$)),w.map((U,$)=>V(t9,{option:U,tryMealOption:ea},$))]}),V(F3,{className:"form_add",to:"/form",children:"✏️"})]})};function r9(){const[t,e]=T.useState(""),[n,r]=T.useState([]),[i,s]=T.useState("7PjqZ2PBp4plWIxuk3AtA6KUTsYooEKx9ospWyLG"),[o,a]=T.useState([]),[l,u]=T.useState(""),[c,h]=T.useState(!1),[d,p]=T.useState("🍔 Submit Entry 🍔"),y=w=>{w.preventDefault(),r([]),I()},v=()=>"#"+Math.floor(Math.random()*16777215).toString(16),I=()=>{if(t!=""){console.log("Searching for: "+t);const S=t.split(", "),b=S[0];var w=S[1];w==null&&(w="");const D=new URLSearchParams({api_key:i,query:b,pageSize:10,pageNumber:1,brandOwner:w});fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?${D}`).then(R=>R.json()).then(R=>{console.log(R),console.log(R.foods),r(R.foods)}).catch(R=>{console.error("Error fetching data:",R)})}},m=w=>{e(w.target.value)},f=(w,S)=>{const b=S.description;var D=0,R=0,Y=0,q=0;S.foodNutrients.forEach(yt=>{switch(yt.nutrientName){case"Energy":D=yt.value;break;case"Carbohydrate, by difference":R=yt.value;break;case"Protein":Y=yt.value;break;case"Total lipid (fat)":q=yt.value;break}});var ce=o,on={name:b,calories:D,carbohydrates:R,protein:Y,fat:q,borderColor:{borderColor:v()}};ce.push(on),a(ce),console.log(ce),setTimeout(()=>{w.target.checked=!1,r([]),e("")},1e3)};async function g(w){const S=localStorage.getItem("email"),b=l,D=new Date;for(var R=[],Y=0,q={carbs:0,protein:0,fat:0},ce=0;ce<o.length;ce++){const ln={name:o[ce].name,macros:{carbs:o[ce].carbohydrates,protein:o[ce].protein,fat:o[ce].fat},grams:0,calories:o[ce].calories};R.push(ln),Y+=ln.calories,q.carbs+=ln.macros.carbs,q.protein+=ln.macros.protein,q.fat+=ln.macros.fat}const on={name:b,ingredients:R,totalCalories:Y,totalmacros:q,favmeal:c,date:D},yt={name:b,ingredients:R,totalCalories:Y,totalmacros:q,favmeal:c},Ii=Ll(Bj,"users",S),ea=bh(Ii,"all_meals"),an=bh(Ii,"logged_meals");await p("Submitting..."),await og(ea,on),await og(an,yt),await p("✅ Submitted! ✅"),await setTimeout(()=>{console.log("Delayed for 1 seconds"),window.location.href="/"},"1000")}return ne("div",{className:"overallForm",children:[ne("form",{className:"submitForm",onSubmit:y,children:[V("button",{className:"slimPossibleSubmit",onClick:g,children:d}),V("input",{className:"meal-input",name:"name",placeholder:"Your meal name",onChange:w=>u(w.target.value),value:l}),ne("div",{className:"searchBar",children:[V("input",{type:"text",className:"search-input",value:t,onChange:m,placeholder:"Ingredient name, brand name(optional)"}),V("button",{className:"searchIngredient",type:"submit",onClick:y,children:"🔎"})]}),ne("div",{className:"favMeal",children:[V("p",{children:" ✨ Favourite Meal? "}),V("input",{className:"fav_meal",type:"checkbox",value:c,onChange:w=>h(w.target.checked)})]})]}),V("div",{className:"ingredient-options",children:o.map(w=>ne("div",{className:"ingredient-option",style:w.borderColor,children:[ne("h2",{children:[w.name,":"]}),ne("p",{children:[w.calories," kcal"]})]},w.name))}),V("div",{className:"search-results",children:n.map(w=>ne("div",{className:"search-result-card",children:[V("input",{id:"mealCheckBox",type:"checkbox",onChange:S=>f(S,w)}),V("h2",{children:w.description}),ne("div",{className:"search-result-each",children:[V("h2",{children:"Brand:"}),V("p",{children:w.brandOwner})]}),ne("div",{className:"search-result-each",children:[V("h2",{children:"Calories:"}),V("p",{children:w.foodNutrients[3].value})]}),ne("div",{className:"search-result-each",children:[V("h2",{children:"Protein:"}),V("p",{children:w.foodNutrients[0].value})]}),ne("div",{className:"search-result-each",children:[V("h2",{children:"Fat:"}),V("p",{children:w.foodNutrients[1].value})]}),ne("div",{className:"search-result-each",children:[V("h2",{children:"Carbs:"}),V("p",{children:w.foodNutrients[2].value})]})]},w.fdcId))})]})}const i9=()=>{const t=localStorage.getItem("name");return V(L3,{children:ne(D3,{children:[V(Ra,{path:"/login",element:V(iE,{})}),V(Ra,{path:"/form",element:V(r9,{})}),t?V(Ra,{path:"/",element:V(n9,{})}):V(Ra,{path:"/",element:V(iE,{})})]})})},s9=fp.createRoot(document.getElementById("root"));s9.render(V(vN.StrictMode,{children:V(i9,{})}));
