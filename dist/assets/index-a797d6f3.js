(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function m1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bl={},_D={get exports(){return Bl},set exports(t){Bl=t}},Td={},w={},ID={get exports(){return w},set exports(t){w=t}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu=Symbol.for("react.element"),ED=Symbol.for("react.portal"),SD=Symbol.for("react.fragment"),TD=Symbol.for("react.strict_mode"),kD=Symbol.for("react.profiler"),CD=Symbol.for("react.provider"),bD=Symbol.for("react.context"),AD=Symbol.for("react.forward_ref"),ND=Symbol.for("react.suspense"),DD=Symbol.for("react.memo"),RD=Symbol.for("react.lazy"),T0=Symbol.iterator;function xD(t){return t===null||typeof t!="object"?null:(t=T0&&t[T0]||t["@@iterator"],typeof t=="function"?t:null)}var g1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y1=Object.assign,v1={};function va(t,e,n){this.props=t,this.context=e,this.refs=v1,this.updater=n||g1}va.prototype.isReactComponent={};va.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};va.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function w1(){}w1.prototype=va.prototype;function my(t,e,n){this.props=t,this.context=e,this.refs=v1,this.updater=n||g1}var gy=my.prototype=new w1;gy.constructor=my;y1(gy,va.prototype);gy.isPureReactComponent=!0;var k0=Array.isArray,_1=Object.prototype.hasOwnProperty,yy={current:null},I1={key:!0,ref:!0,__self:!0,__source:!0};function E1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_1.call(e,r)&&!I1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Pu,type:t,key:s,ref:o,props:i,_owner:yy.current}}function PD(t,e){return{$$typeof:Pu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vy(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pu}function OD(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var C0=/\/+/g;function jf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OD(""+t.key):e.toString(36)}function qc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pu:case ED:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+jf(o,0):r,k0(i)?(n="",t!=null&&(n=t.replace(C0,"$&/")+"/"),qc(i,e,n,"",function(u){return u})):i!=null&&(vy(i)&&(i=PD(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(C0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",k0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+jf(s,a);o+=qc(s,e,n,l,i)}else if(l=xD(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+jf(s,a++),o+=qc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dc(t,e,n){if(t==null)return t;var r=[],i=0;return qc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LD(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},Kc={transition:null},MD={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:Kc,ReactCurrentOwner:yy};ee.Children={map:dc,forEach:function(t,e,n){dc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dc(t,function(){e++}),e},toArray:function(t){return dc(t,function(e){return e})||[]},only:function(t){if(!vy(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=va;ee.Fragment=SD;ee.Profiler=kD;ee.PureComponent=my;ee.StrictMode=TD;ee.Suspense=ND;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MD;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=y1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yy.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_1.call(e,l)&&!I1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Pu,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:bD,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CD,_context:t},t.Consumer=t};ee.createElement=E1;ee.createFactory=function(t){var e=E1.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:AD,render:t}};ee.isValidElement=vy;ee.lazy=function(t){return{$$typeof:RD,_payload:{_status:-1,_result:t},_init:LD}};ee.memo=function(t,e){return{$$typeof:DD,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Kc.transition;Kc.transition={};try{t()}finally{Kc.transition=e}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(t,e){return Wt.current.useCallback(t,e)};ee.useContext=function(t){return Wt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return Wt.current.useEffect(t,e)};ee.useId=function(){return Wt.current.useId()};ee.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Wt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};ee.useRef=function(t){return Wt.current.useRef(t)};ee.useState=function(t){return Wt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return Wt.current.useTransition()};ee.version="18.2.0";(function(t){t.exports=ee})(ID);const ci=m1(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $D=w,FD=Symbol.for("react.element"),UD=Symbol.for("react.fragment"),VD=Object.prototype.hasOwnProperty,BD=$D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zD={key:!0,ref:!0,__self:!0,__source:!0};function S1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)VD.call(e,r)&&!zD.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:FD,type:t,key:s,ref:o,props:i,_owner:BD.current}}Td.Fragment=UD;Td.jsx=S1;Td.jsxs=S1;(function(t){t.exports=Td})(_D);const jD=Bl.Fragment,x=Bl.jsx,Y=Bl.jsxs;var om={},ph={},qD={get exports(){return ph},set exports(t){ph=t}},wn={},am={},KD={get exports(){return am},set exports(t){am=t}},T1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,K){var G=O.length;O.push(K);e:for(;0<G;){var ce=G-1>>>1,Ce=O[ce];if(0<i(Ce,K))O[ce]=K,O[G]=Ce,G=ce;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var K=O[0],G=O.pop();if(G!==K){O[0]=G;e:for(var ce=0,Ce=O.length,Gt=Ce>>>1;ce<Gt;){var me=2*(ce+1)-1,F=O[me],q=me+1,le=O[q];if(0>i(F,G))q<Ce&&0>i(le,F)?(O[ce]=le,O[q]=G,ce=q):(O[ce]=F,O[me]=G,ce=me);else if(q<Ce&&0>i(le,G))O[ce]=le,O[q]=G,ce=q;else break e}}return K}function i(O,K){var G=O.sortIndex-K.sortIndex;return G!==0?G:O.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,y=!1,v=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=O)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function _(O){if(v=!1,g(O),!y)if(n(l)!==null)y=!0,wr(k);else{var K=n(u);K!==null&&st(_,K.startTime-O)}}function k(O,K){y=!1,v&&(v=!1,m(R),R=-1),p=!0;var G=d;try{for(g(K),h=n(l);h!==null&&(!(h.expirationTime>K)||O&&!it());){var ce=h.callback;if(typeof ce=="function"){h.callback=null,d=h.priorityLevel;var Ce=ce(h.expirationTime<=K);K=t.unstable_now(),typeof Ce=="function"?h.callback=Ce:h===n(l)&&r(l),g(K)}else r(l);h=n(l)}if(h!==null)var Gt=!0;else{var me=n(u);me!==null&&st(_,me.startTime-K),Gt=!1}return Gt}finally{h=null,d=G,p=!1}}var T=!1,N=null,R=-1,ae=5,W=-1;function it(){return!(t.unstable_now()-W<ae)}function un(){if(N!==null){var O=t.unstable_now();W=O;var K=!0;try{K=N(!0,O)}finally{K?In():(T=!1,N=null)}}else T=!1}var In;if(typeof f=="function")In=function(){f(un)};else if(typeof MessageChannel<"u"){var Xr=new MessageChannel,vr=Xr.port2;Xr.port1.onmessage=un,In=function(){vr.postMessage(null)}}else In=function(){I(un,0)};function wr(O){N=O,T||(T=!0,In())}function st(O,K){R=I(function(){O(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,wr(k))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var G=d;d=K;try{return O()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var G=d;d=O;try{return K()}finally{d=G}},t.unstable_scheduleCallback=function(O,K,G){var ce=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ce+G:ce):G=ce,O){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=G+Ce,O={id:c++,callback:K,priorityLevel:O,startTime:G,expirationTime:Ce,sortIndex:-1},G>ce?(O.sortIndex=G,e(u,O),n(l)===null&&O===n(u)&&(v?(m(R),R=-1):v=!0,st(_,G-ce))):(O.sortIndex=Ce,e(l,O),y||p||(y=!0,wr(k))),O},t.unstable_shouldYield=it,t.unstable_wrapCallback=function(O){var K=d;return function(){var G=d;d=K;try{return O.apply(this,arguments)}finally{d=G}}}})(T1);(function(t){t.exports=T1})(KD);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1=w,gn=am;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C1=new Set,zl={};function Xs(t,e){Qo(t,e),Qo(t+"Capture",e)}function Qo(t,e){for(zl[t]=e,t=0;t<e.length;t++)C1.add(e[t])}var Mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lm=Object.prototype.hasOwnProperty,WD=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b0={},A0={};function HD(t){return lm.call(A0,t)?!0:lm.call(b0,t)?!1:WD.test(t)?A0[t]=!0:(b0[t]=!0,!1)}function GD(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QD(t,e,n,r){if(e===null||typeof e>"u"||GD(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new Ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new Ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var wy=/[\-:]([a-z])/g;function _y(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wy,_y);Ct[e]=new Ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wy,_y);Ct[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wy,_y);Ct[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Iy(t,e,n,r){var i=Ct.hasOwnProperty(e)?Ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QD(e,n,i,r)&&(n=null),r||i===null?HD(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jr=k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fc=Symbol.for("react.element"),_o=Symbol.for("react.portal"),Io=Symbol.for("react.fragment"),Ey=Symbol.for("react.strict_mode"),um=Symbol.for("react.profiler"),b1=Symbol.for("react.provider"),A1=Symbol.for("react.context"),Sy=Symbol.for("react.forward_ref"),cm=Symbol.for("react.suspense"),hm=Symbol.for("react.suspense_list"),Ty=Symbol.for("react.memo"),ii=Symbol.for("react.lazy"),N1=Symbol.for("react.offscreen"),N0=Symbol.iterator;function Ba(t){return t===null||typeof t!="object"?null:(t=N0&&t[N0]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,qf;function ol(t){if(qf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qf=e&&e[1]||""}return`
`+qf+t}var Kf=!1;function Wf(t,e){if(!t||Kf)return"";Kf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ol(t):""}function YD(t){switch(t.tag){case 5:return ol(t.type);case 16:return ol("Lazy");case 13:return ol("Suspense");case 19:return ol("SuspenseList");case 0:case 2:case 15:return t=Wf(t.type,!1),t;case 11:return t=Wf(t.type.render,!1),t;case 1:return t=Wf(t.type,!0),t;default:return""}}function dm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Io:return"Fragment";case _o:return"Portal";case um:return"Profiler";case Ey:return"StrictMode";case cm:return"Suspense";case hm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A1:return(t.displayName||"Context")+".Consumer";case b1:return(t._context.displayName||"Context")+".Provider";case Sy:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ty:return e=t.displayName||null,e!==null?e:dm(t.type)||"Memo";case ii:e=t._payload,t=t._init;try{return dm(t(e))}catch{}}return null}function XD(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dm(e);case 8:return e===Ey?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function D1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JD(t){var e=D1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pc(t){t._valueTracker||(t._valueTracker=JD(t))}function R1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=D1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function mh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fm(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function D0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function x1(t,e){e=e.checked,e!=null&&Iy(t,"checked",e,!1)}function pm(t,e){x1(t,e);var n=bi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mm(t,e.type,n):e.hasOwnProperty("defaultValue")&&mm(t,e.type,bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function R0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mm(t,e,n){(e!=="number"||mh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var al=Array.isArray;function Oo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function x0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(al(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bi(n)}}function P1(t,e){var n=bi(e.value),r=bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function P0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function O1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ym(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?O1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mc,L1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mc=mc||document.createElement("div"),mc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _l={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZD=["Webkit","ms","Moz","O"];Object.keys(_l).forEach(function(t){ZD.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_l[e]=_l[t]})});function M1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_l.hasOwnProperty(t)&&_l[t]?(""+e).trim():e+"px"}function $1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=M1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var eR=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vm(t,e){if(e){if(eR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function wm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _m=null;function ky(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Im=null,Lo=null,Mo=null;function O0(t){if(t=Mu(t)){if(typeof Im!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Nd(e),Im(t.stateNode,t.type,e))}}function F1(t){Lo?Mo?Mo.push(t):Mo=[t]:Lo=t}function U1(){if(Lo){var t=Lo,e=Mo;if(Mo=Lo=null,O0(t),e)for(t=0;t<e.length;t++)O0(e[t])}}function V1(t,e){return t(e)}function B1(){}var Hf=!1;function z1(t,e,n){if(Hf)return t(e,n);Hf=!0;try{return V1(t,e,n)}finally{Hf=!1,(Lo!==null||Mo!==null)&&(B1(),U1())}}function ql(t,e){var n=t.stateNode;if(n===null)return null;var r=Nd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Em=!1;if(Mr)try{var za={};Object.defineProperty(za,"passive",{get:function(){Em=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{Em=!1}function tR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Il=!1,gh=null,yh=!1,Sm=null,nR={onError:function(t){Il=!0,gh=t}};function rR(t,e,n,r,i,s,o,a,l){Il=!1,gh=null,tR.apply(nR,arguments)}function iR(t,e,n,r,i,s,o,a,l){if(rR.apply(this,arguments),Il){if(Il){var u=gh;Il=!1,gh=null}else throw Error(A(198));yh||(yh=!0,Sm=u)}}function Js(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function j1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function L0(t){if(Js(t)!==t)throw Error(A(188))}function sR(t){var e=t.alternate;if(!e){if(e=Js(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return L0(i),t;if(s===r)return L0(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function q1(t){return t=sR(t),t!==null?K1(t):null}function K1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=K1(t);if(e!==null)return e;t=t.sibling}return null}var W1=gn.unstable_scheduleCallback,M0=gn.unstable_cancelCallback,oR=gn.unstable_shouldYield,aR=gn.unstable_requestPaint,ze=gn.unstable_now,lR=gn.unstable_getCurrentPriorityLevel,Cy=gn.unstable_ImmediatePriority,H1=gn.unstable_UserBlockingPriority,vh=gn.unstable_NormalPriority,uR=gn.unstable_LowPriority,G1=gn.unstable_IdlePriority,kd=null,ar=null;function cR(t){if(ar&&typeof ar.onCommitFiberRoot=="function")try{ar.onCommitFiberRoot(kd,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:fR,hR=Math.log,dR=Math.LN2;function fR(t){return t>>>=0,t===0?32:31-(hR(t)/dR|0)|0}var gc=64,yc=4194304;function ll(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ll(a):(s&=o,s!==0&&(r=ll(s)))}else o=n&~i,o!==0?r=ll(o):s!==0&&(r=ll(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Vn(e),i=1<<n,r|=t[n],e&=~i;return r}function pR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=pR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Tm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q1(){var t=gc;return gc<<=1,!(gc&4194240)&&(gc=64),t}function Gf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ou(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function gR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Vn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function by(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function Y1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var X1,Ay,J1,Z1,eS,km=!1,vc=[],gi=null,yi=null,vi=null,Kl=new Map,Wl=new Map,oi=[],yR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $0(t,e){switch(t){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":yi=null;break;case"mouseover":case"mouseout":vi=null;break;case"pointerover":case"pointerout":Kl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(e.pointerId)}}function ja(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Mu(e),e!==null&&Ay(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vR(t,e,n,r,i){switch(e){case"focusin":return gi=ja(gi,t,e,n,r,i),!0;case"dragenter":return yi=ja(yi,t,e,n,r,i),!0;case"mouseover":return vi=ja(vi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Kl.set(s,ja(Kl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wl.set(s,ja(Wl.get(s)||null,t,e,n,r,i)),!0}return!1}function tS(t){var e=fs(t.target);if(e!==null){var n=Js(e);if(n!==null){if(e=n.tag,e===13){if(e=j1(n),e!==null){t.blockedOn=e,eS(t.priority,function(){J1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_m=r,n.target.dispatchEvent(r),_m=null}else return e=Mu(n),e!==null&&Ay(e),t.blockedOn=n,!1;e.shift()}return!0}function F0(t,e,n){Wc(t)&&n.delete(e)}function wR(){km=!1,gi!==null&&Wc(gi)&&(gi=null),yi!==null&&Wc(yi)&&(yi=null),vi!==null&&Wc(vi)&&(vi=null),Kl.forEach(F0),Wl.forEach(F0)}function qa(t,e){t.blockedOn===e&&(t.blockedOn=null,km||(km=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,wR)))}function Hl(t){function e(i){return qa(i,t)}if(0<vc.length){qa(vc[0],t);for(var n=1;n<vc.length;n++){var r=vc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gi!==null&&qa(gi,t),yi!==null&&qa(yi,t),vi!==null&&qa(vi,t),Kl.forEach(e),Wl.forEach(e),n=0;n<oi.length;n++)r=oi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<oi.length&&(n=oi[0],n.blockedOn===null);)tS(n),n.blockedOn===null&&oi.shift()}var $o=jr.ReactCurrentBatchConfig,_h=!0;function _R(t,e,n,r){var i=de,s=$o.transition;$o.transition=null;try{de=1,Ny(t,e,n,r)}finally{de=i,$o.transition=s}}function IR(t,e,n,r){var i=de,s=$o.transition;$o.transition=null;try{de=4,Ny(t,e,n,r)}finally{de=i,$o.transition=s}}function Ny(t,e,n,r){if(_h){var i=Cm(t,e,n,r);if(i===null)ip(t,e,r,Ih,n),$0(t,r);else if(vR(i,t,e,n,r))r.stopPropagation();else if($0(t,r),e&4&&-1<yR.indexOf(t)){for(;i!==null;){var s=Mu(i);if(s!==null&&X1(s),s=Cm(t,e,n,r),s===null&&ip(t,e,r,Ih,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ip(t,e,r,null,n)}}var Ih=null;function Cm(t,e,n,r){if(Ih=null,t=ky(r),t=fs(t),t!==null)if(e=Js(t),e===null)t=null;else if(n=e.tag,n===13){if(t=j1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ih=t,null}function nS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lR()){case Cy:return 1;case H1:return 4;case vh:case uR:return 16;case G1:return 536870912;default:return 16}default:return 16}}var hi=null,Dy=null,Hc=null;function rS(){if(Hc)return Hc;var t,e=Dy,n=e.length,r,i="value"in hi?hi.value:hi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Hc=i.slice(t,1<r?1-r:void 0)}function Gc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wc(){return!0}function U0(){return!1}function _n(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wc:U0,this.isPropagationStopped=U0,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wc)},persist:function(){},isPersistent:wc}),e}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ry=_n(wa),Lu=Le({},wa,{view:0,detail:0}),ER=_n(Lu),Qf,Yf,Ka,Cd=Le({},Lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ka&&(Ka&&t.type==="mousemove"?(Qf=t.screenX-Ka.screenX,Yf=t.screenY-Ka.screenY):Yf=Qf=0,Ka=t),Qf)},movementY:function(t){return"movementY"in t?t.movementY:Yf}}),V0=_n(Cd),SR=Le({},Cd,{dataTransfer:0}),TR=_n(SR),kR=Le({},Lu,{relatedTarget:0}),Xf=_n(kR),CR=Le({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),bR=_n(CR),AR=Le({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NR=_n(AR),DR=Le({},wa,{data:0}),B0=_n(DR),RR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PR[t])?!!e[t]:!1}function xy(){return OR}var LR=Le({},Lu,{key:function(t){if(t.key){var e=RR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xy,charCode:function(t){return t.type==="keypress"?Gc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MR=_n(LR),$R=Le({},Cd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),z0=_n($R),FR=Le({},Lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xy}),UR=_n(FR),VR=Le({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),BR=_n(VR),zR=Le({},Cd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jR=_n(zR),qR=[9,13,27,32],Py=Mr&&"CompositionEvent"in window,El=null;Mr&&"documentMode"in document&&(El=document.documentMode);var KR=Mr&&"TextEvent"in window&&!El,iS=Mr&&(!Py||El&&8<El&&11>=El),j0=String.fromCharCode(32),q0=!1;function sS(t,e){switch(t){case"keyup":return qR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Eo=!1;function WR(t,e){switch(t){case"compositionend":return oS(e);case"keypress":return e.which!==32?null:(q0=!0,j0);case"textInput":return t=e.data,t===j0&&q0?null:t;default:return null}}function HR(t,e){if(Eo)return t==="compositionend"||!Py&&sS(t,e)?(t=rS(),Hc=Dy=hi=null,Eo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iS&&e.locale!=="ko"?null:e.data;default:return null}}var GR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!GR[t.type]:e==="textarea"}function aS(t,e,n,r){F1(r),e=Eh(e,"onChange"),0<e.length&&(n=new Ry("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Sl=null,Gl=null;function QR(t){vS(t,0)}function bd(t){var e=ko(t);if(R1(e))return t}function YR(t,e){if(t==="change")return e}var lS=!1;if(Mr){var Jf;if(Mr){var Zf="oninput"in document;if(!Zf){var W0=document.createElement("div");W0.setAttribute("oninput","return;"),Zf=typeof W0.oninput=="function"}Jf=Zf}else Jf=!1;lS=Jf&&(!document.documentMode||9<document.documentMode)}function H0(){Sl&&(Sl.detachEvent("onpropertychange",uS),Gl=Sl=null)}function uS(t){if(t.propertyName==="value"&&bd(Gl)){var e=[];aS(e,Gl,t,ky(t)),z1(QR,e)}}function XR(t,e,n){t==="focusin"?(H0(),Sl=e,Gl=n,Sl.attachEvent("onpropertychange",uS)):t==="focusout"&&H0()}function JR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bd(Gl)}function ZR(t,e){if(t==="click")return bd(e)}function ex(t,e){if(t==="input"||t==="change")return bd(e)}function tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:tx;function Ql(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lm.call(e,i)||!zn(t[i],e[i]))return!1}return!0}function G0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Q0(t,e){var n=G0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=G0(n)}}function cS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hS(){for(var t=window,e=mh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mh(t.document)}return e}function Oy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nx(t){var e=hS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cS(n.ownerDocument.documentElement,n)){if(r!==null&&Oy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Q0(n,s);var o=Q0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rx=Mr&&"documentMode"in document&&11>=document.documentMode,So=null,bm=null,Tl=null,Am=!1;function Y0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Am||So==null||So!==mh(r)||(r=So,"selectionStart"in r&&Oy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tl&&Ql(Tl,r)||(Tl=r,r=Eh(bm,"onSelect"),0<r.length&&(e=new Ry("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=So)))}function _c(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var To={animationend:_c("Animation","AnimationEnd"),animationiteration:_c("Animation","AnimationIteration"),animationstart:_c("Animation","AnimationStart"),transitionend:_c("Transition","TransitionEnd")},ep={},dS={};Mr&&(dS=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function Ad(t){if(ep[t])return ep[t];if(!To[t])return t;var e=To[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dS)return ep[t]=e[n];return t}var fS=Ad("animationend"),pS=Ad("animationiteration"),mS=Ad("animationstart"),gS=Ad("transitionend"),yS=new Map,X0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zi(t,e){yS.set(t,e),Xs(e,[t])}for(var tp=0;tp<X0.length;tp++){var np=X0[tp],ix=np.toLowerCase(),sx=np[0].toUpperCase()+np.slice(1);zi(ix,"on"+sx)}zi(fS,"onAnimationEnd");zi(pS,"onAnimationIteration");zi(mS,"onAnimationStart");zi("dblclick","onDoubleClick");zi("focusin","onFocus");zi("focusout","onBlur");zi(gS,"onTransitionEnd");Qo("onMouseEnter",["mouseout","mouseover"]);Qo("onMouseLeave",["mouseout","mouseover"]);Qo("onPointerEnter",["pointerout","pointerover"]);Qo("onPointerLeave",["pointerout","pointerover"]);Xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(ul));function J0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iR(r,e,void 0,t),t.currentTarget=null}function vS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;J0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;J0(i,a,u),s=l}}}if(yh)throw t=Sm,yh=!1,Sm=null,t}function Ie(t,e){var n=e[Pm];n===void 0&&(n=e[Pm]=new Set);var r=t+"__bubble";n.has(r)||(wS(e,t,2,!1),n.add(r))}function rp(t,e,n){var r=0;e&&(r|=4),wS(n,t,r,e)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function Yl(t){if(!t[Ic]){t[Ic]=!0,C1.forEach(function(n){n!=="selectionchange"&&(ox.has(n)||rp(n,!1,t),rp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ic]||(e[Ic]=!0,rp("selectionchange",!1,e))}}function wS(t,e,n,r){switch(nS(e)){case 1:var i=_R;break;case 4:i=IR;break;default:i=Ny}n=i.bind(null,e,n,t),i=void 0,!Em||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ip(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}z1(function(){var u=s,c=ky(n),h=[];e:{var d=yS.get(t);if(d!==void 0){var p=Ry,y=t;switch(t){case"keypress":if(Gc(n)===0)break e;case"keydown":case"keyup":p=MR;break;case"focusin":y="focus",p=Xf;break;case"focusout":y="blur",p=Xf;break;case"beforeblur":case"afterblur":p=Xf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=V0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=TR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=UR;break;case fS:case pS:case mS:p=bR;break;case gS:p=BR;break;case"scroll":p=ER;break;case"wheel":p=jR;break;case"copy":case"cut":case"paste":p=NR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=z0}var v=(e&4)!==0,I=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=ql(f,m),_!=null&&v.push(Xl(f,_,g)))),I)break;f=f.return}0<v.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==_m&&(y=n.relatedTarget||n.fromElement)&&(fs(y)||y[$r]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?fs(y):null,y!==null&&(I=Js(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=V0,_="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=z0,_="onPointerLeave",m="onPointerEnter",f="pointer"),I=p==null?d:ko(p),g=y==null?d:ko(y),d=new v(_,f+"leave",p,n,c),d.target=I,d.relatedTarget=g,_=null,fs(c)===u&&(v=new v(m,f+"enter",y,n,c),v.target=g,v.relatedTarget=I,_=v),I=_,p&&y)t:{for(v=p,m=y,f=0,g=v;g;g=uo(g))f++;for(g=0,_=m;_;_=uo(_))g++;for(;0<f-g;)v=uo(v),f--;for(;0<g-f;)m=uo(m),g--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=uo(v),m=uo(m)}v=null}else v=null;p!==null&&Z0(h,d,p,v,!1),y!==null&&I!==null&&Z0(h,I,y,v,!0)}}e:{if(d=u?ko(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var k=YR;else if(K0(d))if(lS)k=ex;else{k=JR;var T=XR}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=ZR);if(k&&(k=k(t,u))){aS(h,k,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&mm(d,"number",d.value)}switch(T=u?ko(u):window,t){case"focusin":(K0(T)||T.contentEditable==="true")&&(So=T,bm=u,Tl=null);break;case"focusout":Tl=bm=So=null;break;case"mousedown":Am=!0;break;case"contextmenu":case"mouseup":case"dragend":Am=!1,Y0(h,n,c);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":Y0(h,n,c)}var N;if(Py)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Eo?sS(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(iS&&n.locale!=="ko"&&(Eo||R!=="onCompositionStart"?R==="onCompositionEnd"&&Eo&&(N=rS()):(hi=c,Dy="value"in hi?hi.value:hi.textContent,Eo=!0)),T=Eh(u,R),0<T.length&&(R=new B0(R,t,null,n,c),h.push({event:R,listeners:T}),N?R.data=N:(N=oS(n),N!==null&&(R.data=N)))),(N=KR?WR(t,n):HR(t,n))&&(u=Eh(u,"onBeforeInput"),0<u.length&&(c=new B0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}vS(h,e)})}function Xl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Eh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ql(t,n),s!=null&&r.unshift(Xl(t,s,i)),s=ql(t,e),s!=null&&r.push(Xl(t,s,i))),t=t.return}return r}function uo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Z0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ql(n,s),l!=null&&o.unshift(Xl(n,l,a))):i||(l=ql(n,s),l!=null&&o.push(Xl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ax=/\r\n?/g,lx=/\u0000|\uFFFD/g;function e_(t){return(typeof t=="string"?t:""+t).replace(ax,`
`).replace(lx,"")}function Ec(t,e,n){if(e=e_(e),e_(t)!==e&&n)throw Error(A(425))}function Sh(){}var Nm=null,Dm=null;function Rm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xm=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,t_=typeof Promise=="function"?Promise:void 0,cx=typeof queueMicrotask=="function"?queueMicrotask:typeof t_<"u"?function(t){return t_.resolve(null).then(t).catch(hx)}:xm;function hx(t){setTimeout(function(){throw t})}function sp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Hl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Hl(e)}function wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function n_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _a=Math.random().toString(36).slice(2),Xn="__reactFiber$"+_a,Jl="__reactProps$"+_a,$r="__reactContainer$"+_a,Pm="__reactEvents$"+_a,dx="__reactListeners$"+_a,fx="__reactHandles$"+_a;function fs(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$r]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=n_(t);t!==null;){if(n=t[Xn])return n;t=n_(t)}return e}t=n,n=t.parentNode}return null}function Mu(t){return t=t[Xn]||t[$r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ko(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Nd(t){return t[Jl]||null}var Om=[],Co=-1;function ji(t){return{current:t}}function Se(t){0>Co||(t.current=Om[Co],Om[Co]=null,Co--)}function ge(t,e){Co++,Om[Co]=t.current,t.current=e}var Ai={},Lt=ji(Ai),rn=ji(!1),Ns=Ai;function Yo(t,e){var n=t.type.contextTypes;if(!n)return Ai;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function sn(t){return t=t.childContextTypes,t!=null}function Th(){Se(rn),Se(Lt)}function r_(t,e,n){if(Lt.current!==Ai)throw Error(A(168));ge(Lt,e),ge(rn,n)}function _S(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,XD(t)||"Unknown",i));return Le({},n,r)}function kh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ai,Ns=Lt.current,ge(Lt,t),ge(rn,rn.current),!0}function i_(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=_S(t,e,Ns),r.__reactInternalMemoizedMergedChildContext=t,Se(rn),Se(Lt),ge(Lt,t)):Se(rn),ge(rn,n)}var Tr=null,Dd=!1,op=!1;function IS(t){Tr===null?Tr=[t]:Tr.push(t)}function px(t){Dd=!0,IS(t)}function qi(){if(!op&&Tr!==null){op=!0;var t=0,e=de;try{var n=Tr;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tr=null,Dd=!1}catch(i){throw Tr!==null&&(Tr=Tr.slice(t+1)),W1(Cy,qi),i}finally{de=e,op=!1}}return null}var bo=[],Ao=0,Ch=null,bh=0,En=[],Sn=0,Ds=null,kr=1,Cr="";function ns(t,e){bo[Ao++]=bh,bo[Ao++]=Ch,Ch=t,bh=e}function ES(t,e,n){En[Sn++]=kr,En[Sn++]=Cr,En[Sn++]=Ds,Ds=t;var r=kr;t=Cr;var i=32-Vn(r)-1;r&=~(1<<i),n+=1;var s=32-Vn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kr=1<<32-Vn(e)+i|n<<i|r,Cr=s+t}else kr=1<<s|n<<i|r,Cr=t}function Ly(t){t.return!==null&&(ns(t,1),ES(t,1,0))}function My(t){for(;t===Ch;)Ch=bo[--Ao],bo[Ao]=null,bh=bo[--Ao],bo[Ao]=null;for(;t===Ds;)Ds=En[--Sn],En[Sn]=null,Cr=En[--Sn],En[Sn]=null,kr=En[--Sn],En[Sn]=null}var mn=null,fn=null,be=!1,Ln=null;function SS(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function s_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,fn=wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ds!==null?{id:kr,overflow:Cr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,fn=null,!0):!1;default:return!1}}function Lm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mm(t){if(be){var e=fn;if(e){var n=e;if(!s_(t,e)){if(Lm(t))throw Error(A(418));e=wi(n.nextSibling);var r=mn;e&&s_(t,e)?SS(r,n):(t.flags=t.flags&-4097|2,be=!1,mn=t)}}else{if(Lm(t))throw Error(A(418));t.flags=t.flags&-4097|2,be=!1,mn=t}}}function o_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Sc(t){if(t!==mn)return!1;if(!be)return o_(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rm(t.type,t.memoizedProps)),e&&(e=fn)){if(Lm(t))throw TS(),Error(A(418));for(;e;)SS(t,e),e=wi(e.nextSibling)}if(o_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=mn?wi(t.stateNode.nextSibling):null;return!0}function TS(){for(var t=fn;t;)t=wi(t.nextSibling)}function Xo(){fn=mn=null,be=!1}function $y(t){Ln===null?Ln=[t]:Ln.push(t)}var mx=jr.ReactCurrentBatchConfig;function xn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ah=ji(null),Nh=null,No=null,Fy=null;function Uy(){Fy=No=Nh=null}function Vy(t){var e=Ah.current;Se(Ah),t._currentValue=e}function $m(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fo(t,e){Nh=t,Fy=No=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Fy!==t)if(t={context:t,memoizedValue:e,next:null},No===null){if(Nh===null)throw Error(A(308));No=t,Nh.dependencies={lanes:0,firstContext:t}}else No=No.next=t;return e}var ps=null;function By(t){ps===null?ps=[t]:ps.push(t)}function kS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,By(e)):(n.next=i.next,i.next=n),e.interleaved=n,Fr(t,r)}function Fr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var si=!1;function zy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function CS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _i(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Fr(t,n)}return i=r.interleaved,i===null?(e.next=e,By(r)):(e.next=i.next,i.next=e),r.interleaved=e,Fr(t,n)}function Qc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,by(t,n)}}function a_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dh(t,e,n,r){var i=t.updateQueue;si=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=Le({},h,d);break e;case 2:si=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);xs|=o,t.lanes=o,t.memoizedState=h}}function l_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var bS=new k1.Component().refs;function Fm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rd={isMounted:function(t){return(t=t._reactInternals)?Js(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=Ei(t),s=xr(r,i);s.payload=e,n!=null&&(s.callback=n),e=_i(t,s,i),e!==null&&(Bn(e,t,i,r),Qc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=Ei(t),s=xr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_i(t,s,i),e!==null&&(Bn(e,t,i,r),Qc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=Ei(t),i=xr(n,r);i.tag=2,e!=null&&(i.callback=e),e=_i(t,i,r),e!==null&&(Bn(e,t,r,n),Qc(e,t,r))}};function u_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ql(n,r)||!Ql(i,s):!0}function AS(t,e,n){var r=!1,i=Ai,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(i=sn(e)?Ns:Lt.current,r=e.contextTypes,s=(r=r!=null)?Yo(t,i):Ai),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function c_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Rd.enqueueReplaceState(e,e.state,null)}function Um(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=bS,zy(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=An(s):(s=sn(e)?Ns:Lt.current,i.context=Yo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Rd.enqueueReplaceState(i,i.state,null),Dh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===bS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Tc(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function h_(t){var e=t._init;return e(t._payload)}function NS(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Si(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,_){return f===null||f.tag!==6?(f=fp(g,m.mode,_),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,_){var k=g.type;return k===Io?c(m,f,g.props.children,_,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ii&&h_(k)===f.type)?(_=i(f,g.props),_.ref=Wa(m,f,g),_.return=m,_):(_=th(g.type,g.key,g.props,null,m.mode,_),_.ref=Wa(m,f,g),_.return=m,_)}function u(m,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=pp(g,m.mode,_),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,_,k){return f===null||f.tag!==7?(f=Ss(g,m.mode,_,k),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=fp(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case fc:return g=th(f.type,f.key,f.props,null,m.mode,g),g.ref=Wa(m,null,f),g.return=m,g;case _o:return f=pp(f,m.mode,g),f.return=m,f;case ii:var _=f._init;return h(m,_(f._payload),g)}if(al(f)||Ba(f))return f=Ss(f,m.mode,g,null),f.return=m,f;Tc(m,f)}return null}function d(m,f,g,_){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(m,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fc:return g.key===k?l(m,f,g,_):null;case _o:return g.key===k?u(m,f,g,_):null;case ii:return k=g._init,d(m,f,k(g._payload),_)}if(al(g)||Ba(g))return k!==null?null:c(m,f,g,_,null);Tc(m,g)}return null}function p(m,f,g,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(f,m,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fc:return m=m.get(_.key===null?g:_.key)||null,l(f,m,_,k);case _o:return m=m.get(_.key===null?g:_.key)||null,u(f,m,_,k);case ii:var T=_._init;return p(m,f,g,T(_._payload),k)}if(al(_)||Ba(_))return m=m.get(g)||null,c(f,m,_,k,null);Tc(f,_)}return null}function y(m,f,g,_){for(var k=null,T=null,N=f,R=f=0,ae=null;N!==null&&R<g.length;R++){N.index>R?(ae=N,N=null):ae=N.sibling;var W=d(m,N,g[R],_);if(W===null){N===null&&(N=ae);break}t&&N&&W.alternate===null&&e(m,N),f=s(W,f,R),T===null?k=W:T.sibling=W,T=W,N=ae}if(R===g.length)return n(m,N),be&&ns(m,R),k;if(N===null){for(;R<g.length;R++)N=h(m,g[R],_),N!==null&&(f=s(N,f,R),T===null?k=N:T.sibling=N,T=N);return be&&ns(m,R),k}for(N=r(m,N);R<g.length;R++)ae=p(N,m,R,g[R],_),ae!==null&&(t&&ae.alternate!==null&&N.delete(ae.key===null?R:ae.key),f=s(ae,f,R),T===null?k=ae:T.sibling=ae,T=ae);return t&&N.forEach(function(it){return e(m,it)}),be&&ns(m,R),k}function v(m,f,g,_){var k=Ba(g);if(typeof k!="function")throw Error(A(150));if(g=k.call(g),g==null)throw Error(A(151));for(var T=k=null,N=f,R=f=0,ae=null,W=g.next();N!==null&&!W.done;R++,W=g.next()){N.index>R?(ae=N,N=null):ae=N.sibling;var it=d(m,N,W.value,_);if(it===null){N===null&&(N=ae);break}t&&N&&it.alternate===null&&e(m,N),f=s(it,f,R),T===null?k=it:T.sibling=it,T=it,N=ae}if(W.done)return n(m,N),be&&ns(m,R),k;if(N===null){for(;!W.done;R++,W=g.next())W=h(m,W.value,_),W!==null&&(f=s(W,f,R),T===null?k=W:T.sibling=W,T=W);return be&&ns(m,R),k}for(N=r(m,N);!W.done;R++,W=g.next())W=p(N,m,R,W.value,_),W!==null&&(t&&W.alternate!==null&&N.delete(W.key===null?R:W.key),f=s(W,f,R),T===null?k=W:T.sibling=W,T=W);return t&&N.forEach(function(un){return e(m,un)}),be&&ns(m,R),k}function I(m,f,g,_){if(typeof g=="object"&&g!==null&&g.type===Io&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case fc:e:{for(var k=g.key,T=f;T!==null;){if(T.key===k){if(k=g.type,k===Io){if(T.tag===7){n(m,T.sibling),f=i(T,g.props.children),f.return=m,m=f;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ii&&h_(k)===T.type){n(m,T.sibling),f=i(T,g.props),f.ref=Wa(m,T,g),f.return=m,m=f;break e}n(m,T);break}else e(m,T);T=T.sibling}g.type===Io?(f=Ss(g.props.children,m.mode,_,g.key),f.return=m,m=f):(_=th(g.type,g.key,g.props,null,m.mode,_),_.ref=Wa(m,f,g),_.return=m,m=_)}return o(m);case _o:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=pp(g,m.mode,_),f.return=m,m=f}return o(m);case ii:return T=g._init,I(m,f,T(g._payload),_)}if(al(g))return y(m,f,g,_);if(Ba(g))return v(m,f,g,_);Tc(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=fp(g,m.mode,_),f.return=m,m=f),o(m)):n(m,f)}return I}var Jo=NS(!0),DS=NS(!1),$u={},lr=ji($u),Zl=ji($u),eu=ji($u);function ms(t){if(t===$u)throw Error(A(174));return t}function jy(t,e){switch(ge(eu,e),ge(Zl,t),ge(lr,$u),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ym(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ym(e,t)}Se(lr),ge(lr,e)}function Zo(){Se(lr),Se(Zl),Se(eu)}function RS(t){ms(eu.current);var e=ms(lr.current),n=ym(e,t.type);e!==n&&(ge(Zl,t),ge(lr,n))}function qy(t){Zl.current===t&&(Se(lr),Se(Zl))}var Pe=ji(0);function Rh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ap=[];function Ky(){for(var t=0;t<ap.length;t++)ap[t]._workInProgressVersionPrimary=null;ap.length=0}var Yc=jr.ReactCurrentDispatcher,lp=jr.ReactCurrentBatchConfig,Rs=0,Oe=null,et=null,at=null,xh=!1,kl=!1,tu=0,gx=0;function Nt(){throw Error(A(321))}function Wy(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function Hy(t,e,n,r,i,s){if(Rs=s,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yc.current=t===null||t.memoizedState===null?_x:Ix,t=n(r,i),kl){s=0;do{if(kl=!1,tu=0,25<=s)throw Error(A(301));s+=1,at=et=null,e.updateQueue=null,Yc.current=Ex,t=n(r,i)}while(kl)}if(Yc.current=Ph,e=et!==null&&et.next!==null,Rs=0,at=et=Oe=null,xh=!1,e)throw Error(A(300));return t}function Gy(){var t=tu!==0;return tu=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Oe.memoizedState=at=t:at=at.next=t,at}function Nn(){if(et===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=at===null?Oe.memoizedState:at.next;if(e!==null)at=e,et=t;else{if(t===null)throw Error(A(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},at===null?Oe.memoizedState=at=t:at=at.next=t}return at}function nu(t,e){return typeof e=="function"?e(t):e}function up(t){var e=Nn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Rs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Oe.lanes|=c,xs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,zn(r,e.memoizedState)||(Zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Oe.lanes|=s,xs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cp(t){var e=Nn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zn(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function xS(){}function PS(t,e){var n=Oe,r=Nn(),i=e(),s=!zn(r.memoizedState,i);if(s&&(r.memoizedState=i,Zt=!0),r=r.queue,Qy(MS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,ru(9,LS.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(A(349));Rs&30||OS(n,e,i)}return i}function OS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function LS(t,e,n,r){e.value=n,e.getSnapshot=r,$S(e)&&FS(t)}function MS(t,e,n){return n(function(){$S(e)&&FS(t)})}function $S(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function FS(t){var e=Fr(t,1);e!==null&&Bn(e,t,1,-1)}function d_(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nu,lastRenderedState:t},e.queue=t,t=t.dispatch=wx.bind(null,Oe,t),[e.memoizedState,t]}function ru(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function US(){return Nn().memoizedState}function Xc(t,e,n,r){var i=Yn();Oe.flags|=t,i.memoizedState=ru(1|e,n,void 0,r===void 0?null:r)}function xd(t,e,n,r){var i=Nn();r=r===void 0?null:r;var s=void 0;if(et!==null){var o=et.memoizedState;if(s=o.destroy,r!==null&&Wy(r,o.deps)){i.memoizedState=ru(e,n,s,r);return}}Oe.flags|=t,i.memoizedState=ru(1|e,n,s,r)}function f_(t,e){return Xc(8390656,8,t,e)}function Qy(t,e){return xd(2048,8,t,e)}function VS(t,e){return xd(4,2,t,e)}function BS(t,e){return xd(4,4,t,e)}function zS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jS(t,e,n){return n=n!=null?n.concat([t]):null,xd(4,4,zS.bind(null,e,t),n)}function Yy(){}function qS(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wy(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function KS(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wy(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function WS(t,e,n){return Rs&21?(zn(n,e)||(n=Q1(),Oe.lanes|=n,xs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function yx(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=lp.transition;lp.transition={};try{t(!1),e()}finally{de=n,lp.transition=r}}function HS(){return Nn().memoizedState}function vx(t,e,n){var r=Ei(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},GS(t))QS(e,n);else if(n=kS(t,e,n,r),n!==null){var i=jt();Bn(n,t,r,i),YS(n,e,r)}}function wx(t,e,n){var r=Ei(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(GS(t))QS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,zn(a,o)){var l=e.interleaved;l===null?(i.next=i,By(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=kS(t,e,i,r),n!==null&&(i=jt(),Bn(n,t,r,i),YS(n,e,r))}}function GS(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function QS(t,e){kl=xh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function YS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,by(t,n)}}var Ph={readContext:An,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},_x={readContext:An,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:f_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xc(4194308,4,zS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xc(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vx.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:d_,useDebugValue:Yy,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=d_(!1),e=t[0];return t=yx.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,i=Yn();if(be){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),ut===null)throw Error(A(349));Rs&30||OS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,f_(MS.bind(null,r,s,t),[t]),r.flags|=2048,ru(9,LS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=ut.identifierPrefix;if(be){var n=Cr,r=kr;n=(r&~(1<<32-Vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ix={readContext:An,useCallback:qS,useContext:An,useEffect:Qy,useImperativeHandle:jS,useInsertionEffect:VS,useLayoutEffect:BS,useMemo:KS,useReducer:up,useRef:US,useState:function(){return up(nu)},useDebugValue:Yy,useDeferredValue:function(t){var e=Nn();return WS(e,et.memoizedState,t)},useTransition:function(){var t=up(nu)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:xS,useSyncExternalStore:PS,useId:HS,unstable_isNewReconciler:!1},Ex={readContext:An,useCallback:qS,useContext:An,useEffect:Qy,useImperativeHandle:jS,useInsertionEffect:VS,useLayoutEffect:BS,useMemo:KS,useReducer:cp,useRef:US,useState:function(){return cp(nu)},useDebugValue:Yy,useDeferredValue:function(t){var e=Nn();return et===null?e.memoizedState=t:WS(e,et.memoizedState,t)},useTransition:function(){var t=cp(nu)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:xS,useSyncExternalStore:PS,useId:HS,unstable_isNewReconciler:!1};function ea(t,e){try{var n="",r=e;do n+=YD(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function hp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Sx=typeof WeakMap=="function"?WeakMap:Map;function XS(t,e,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Lh||(Lh=!0,Ym=r),Vm(t,e)},n}function JS(t,e,n){n=xr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vm(t,e),typeof r!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function p_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Sx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$x.bind(null,t,e,n),e.then(t,t))}function m_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function g_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xr(-1,1),e.tag=2,_i(n,e,1))),n.lanes|=1),t)}var Tx=jr.ReactCurrentOwner,Zt=!1;function Ut(t,e,n,r){e.child=t===null?DS(e,null,n,r):Jo(e,t.child,n,r)}function y_(t,e,n,r,i){n=n.render;var s=e.ref;return Fo(e,i),r=Hy(t,e,n,r,s,i),n=Gy(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ur(t,e,i)):(be&&n&&Ly(e),e.flags|=1,Ut(t,e,r,i),e.child)}function v_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!iv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ZS(t,e,s,r,i)):(t=th(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ql,n(o,r)&&t.ref===e.ref)return Ur(t,e,i)}return e.flags|=1,t=Si(s,r),t.ref=e.ref,t.return=e,e.child=t}function ZS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ql(s,r)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,Ur(t,e,i)}return Bm(t,e,n,r,i)}function eT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ro,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ro,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Ro,hn),hn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Ro,hn),hn|=r;return Ut(t,e,i,n),e.child}function tT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bm(t,e,n,r,i){var s=sn(n)?Ns:Lt.current;return s=Yo(e,s),Fo(e,i),n=Hy(t,e,n,r,s,i),r=Gy(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ur(t,e,i)):(be&&r&&Ly(e),e.flags|=1,Ut(t,e,n,i),e.child)}function w_(t,e,n,r,i){if(sn(n)){var s=!0;kh(e)}else s=!1;if(Fo(e,i),e.stateNode===null)Jc(t,e),AS(e,n,r),Um(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=sn(n)?Ns:Lt.current,u=Yo(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&c_(e,o,r,u),si=!1;var d=e.memoizedState;o.state=d,Dh(e,r,o,i),l=e.memoizedState,a!==r||d!==l||rn.current||si?(typeof c=="function"&&(Fm(e,n,c,r),l=e.memoizedState),(a=si||u_(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,CS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:xn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=sn(n)?Ns:Lt.current,l=Yo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&c_(e,o,r,l),si=!1,d=e.memoizedState,o.state=d,Dh(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||rn.current||si?(typeof p=="function"&&(Fm(e,n,p,r),y=e.memoizedState),(u=si||u_(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return zm(t,e,n,r,s,i)}function zm(t,e,n,r,i,s){tT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&i_(e,n,!1),Ur(t,e,s);r=e.stateNode,Tx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Jo(e,t.child,null,s),e.child=Jo(e,null,a,s)):Ut(t,e,a,s),e.memoizedState=r.state,i&&i_(e,n,!0),e.child}function nT(t){var e=t.stateNode;e.pendingContext?r_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&r_(t,e.context,!1),jy(t,e.containerInfo)}function __(t,e,n,r,i){return Xo(),$y(i),e.flags|=256,Ut(t,e,n,r),e.child}var jm={dehydrated:null,treeContext:null,retryLane:0};function qm(t){return{baseLanes:t,cachePool:null,transitions:null}}function rT(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Pe,i&1),t===null)return Mm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ld(o,r,0,null),t=Ss(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qm(n),e.memoizedState=jm,t):Xy(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Si(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Si(a,s):(s=Ss(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jm,r}return s=t.child,t=s.sibling,r=Si(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xy(t,e){return e=Ld({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function kc(t,e,n,r){return r!==null&&$y(r),Jo(e,t.child,null,n),t=Xy(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=hp(Error(A(422))),kc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ld({mode:"visible",children:r.children},i,0,null),s=Ss(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Jo(e,t.child,null,o),e.child.memoizedState=qm(o),e.memoizedState=jm,s);if(!(e.mode&1))return kc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=hp(s,r,void 0),kc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Zt||a){if(r=ut,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Fr(t,i),Bn(r,t,i,-1))}return rv(),r=hp(Error(A(421))),kc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Fx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,fn=wi(i.nextSibling),mn=e,be=!0,Ln=null,t!==null&&(En[Sn++]=kr,En[Sn++]=Cr,En[Sn++]=Ds,kr=t.id,Cr=t.overflow,Ds=e),e=Xy(e,r.children),e.flags|=4096,e)}function I_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$m(t.return,e,n)}function dp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function iT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&I_(t,n,e);else if(t.tag===19)I_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dp(e,!0,n,null,s);break;case"together":dp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cx(t,e,n){switch(e.tag){case 3:nT(e),Xo();break;case 5:RS(e);break;case 1:sn(e.type)&&kh(e);break;case 4:jy(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Ah,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?rT(t,e,n):(ge(Pe,Pe.current&1),t=Ur(t,e,n),t!==null?t.sibling:null);ge(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,eT(t,e,n)}return Ur(t,e,n)}var sT,Km,oT,aT;sT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Km=function(){};oT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ms(lr.current);var s=null;switch(n){case"input":i=fm(t,i),r=fm(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=gm(t,i),r=gm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sh)}vm(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};aT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ha(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bx(t,e,n){var r=e.pendingProps;switch(My(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return sn(e.type)&&Th(),Dt(e),null;case 3:return r=e.stateNode,Zo(),Se(rn),Se(Lt),Ky(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(Zm(Ln),Ln=null))),Km(t,e),Dt(e),null;case 5:qy(e);var i=ms(eu.current);if(n=e.type,t!==null&&e.stateNode!=null)oT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return Dt(e),null}if(t=ms(lr.current),Sc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xn]=e,r[Jl]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<ul.length;i++)Ie(ul[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":D0(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":x0(r,s),Ie("invalid",r)}vm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ec(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ec(r.textContent,a,t),i=["children",""+a]):zl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":pc(r),R0(r,s,!0);break;case"textarea":pc(r),P0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=O1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xn]=e,t[Jl]=r,sT(t,e,!1,!1),e.stateNode=t;e:{switch(o=wm(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<ul.length;i++)Ie(ul[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":D0(t,r),i=fm(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":x0(t,r),i=gm(t,r),Ie("invalid",t);break;default:i=r}vm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&L1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jl(t,l):typeof l=="number"&&jl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ie("scroll",t):l!=null&&Iy(t,s,l,o))}switch(n){case"input":pc(t),R0(t,r,!1);break;case"textarea":pc(t),P0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oo(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)aT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=ms(eu.current),ms(lr.current),Sc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xn]=e,(s=r.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Ec(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ec(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xn]=e,e.stateNode=r}return Dt(e),null;case 13:if(Se(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&fn!==null&&e.mode&1&&!(e.flags&128))TS(),Xo(),e.flags|=98560,s=!1;else if(s=Sc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Xn]=e}else Xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else Ln!==null&&(Zm(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?tt===0&&(tt=3):rv())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return Zo(),Km(t,e),t===null&&Yl(e.stateNode.containerInfo),Dt(e),null;case 10:return Vy(e.type._context),Dt(e),null;case 17:return sn(e.type)&&Th(),Dt(e),null;case 19:if(Se(Pe),s=e.memoizedState,s===null)return Dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ha(s,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rh(t),o!==null){for(e.flags|=128,Ha(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>ta&&(e.flags|=128,r=!0,Ha(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ha(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return Dt(e),null}else 2*ze()-s.renderingStartTime>ta&&n!==1073741824&&(e.flags|=128,r=!0,Ha(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=Pe.current,ge(Pe,r?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return nv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hn&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function Ax(t,e){switch(My(e),e.tag){case 1:return sn(e.type)&&Th(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zo(),Se(rn),Se(Lt),Ky(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qy(e),null;case 13:if(Se(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));Xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Pe),null;case 4:return Zo(),null;case 10:return Vy(e.type._context),null;case 22:case 23:return nv(),null;case 24:return null;default:return null}}var Cc=!1,xt=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,U=null;function Do(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(t,e,r)}else n.current=null}function Wm(t,e,n){try{n()}catch(r){$e(t,e,r)}}var E_=!1;function Dx(t,e){if(Nm=_h,t=hS(),Oy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dm={focusedElem:t,selectionRange:n},_h=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,I=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:xn(e.type,v),I);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(_){$e(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return y=E_,E_=!1,y}function Cl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wm(e,n,s)}i=i.next}while(i!==r)}}function Pd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lT(t){var e=t.alternate;e!==null&&(t.alternate=null,lT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[Jl],delete e[Pm],delete e[dx],delete e[fx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uT(t){return t.tag===5||t.tag===3||t.tag===4}function S_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sh));else if(r!==4&&(t=t.child,t!==null))for(Gm(t,e,n),t=t.sibling;t!==null;)Gm(t,e,n),t=t.sibling}function Qm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qm(t,e,n),t=t.sibling;t!==null;)Qm(t,e,n),t=t.sibling}var yt=null,Pn=!1;function Zr(t,e,n){for(n=n.child;n!==null;)cT(t,e,n),n=n.sibling}function cT(t,e,n){if(ar&&typeof ar.onCommitFiberUnmount=="function")try{ar.onCommitFiberUnmount(kd,n)}catch{}switch(n.tag){case 5:xt||Do(n,e);case 6:var r=yt,i=Pn;yt=null,Zr(t,e,n),yt=r,Pn=i,yt!==null&&(Pn?(t=yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(Pn?(t=yt,n=n.stateNode,t.nodeType===8?sp(t.parentNode,n):t.nodeType===1&&sp(t,n),Hl(t)):sp(yt,n.stateNode));break;case 4:r=yt,i=Pn,yt=n.stateNode.containerInfo,Pn=!0,Zr(t,e,n),yt=r,Pn=i;break;case 0:case 11:case 14:case 15:if(!xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wm(n,e,o),i=i.next}while(i!==r)}Zr(t,e,n);break;case 1:if(!xt&&(Do(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$e(n,e,a)}Zr(t,e,n);break;case 21:Zr(t,e,n);break;case 22:n.mode&1?(xt=(r=xt)||n.memoizedState!==null,Zr(t,e,n),xt=r):Zr(t,e,n);break;default:Zr(t,e,n)}}function T_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Nx),e.forEach(function(r){var i=Ux.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yt=a.stateNode,Pn=!1;break e;case 3:yt=a.stateNode.containerInfo,Pn=!0;break e;case 4:yt=a.stateNode.containerInfo,Pn=!0;break e}a=a.return}if(yt===null)throw Error(A(160));cT(s,o,i),yt=null,Pn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){$e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hT(e,t),e=e.sibling}function hT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Qn(t),r&4){try{Cl(3,t,t.return),Pd(3,t)}catch(v){$e(t,t.return,v)}try{Cl(5,t,t.return)}catch(v){$e(t,t.return,v)}}break;case 1:Rn(e,t),Qn(t),r&512&&n!==null&&Do(n,n.return);break;case 5:if(Rn(e,t),Qn(t),r&512&&n!==null&&Do(n,n.return),t.flags&32){var i=t.stateNode;try{jl(i,"")}catch(v){$e(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&x1(i,s),wm(a,o);var u=wm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?$1(i,h):c==="dangerouslySetInnerHTML"?L1(i,h):c==="children"?jl(i,h):Iy(i,c,h,u)}switch(a){case"input":pm(i,s);break;case"textarea":P1(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Oo(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Oo(i,!!s.multiple,s.defaultValue,!0):Oo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Jl]=s}catch(v){$e(t,t.return,v)}}break;case 6:if(Rn(e,t),Qn(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){$e(t,t.return,v)}}break;case 3:if(Rn(e,t),Qn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hl(e.containerInfo)}catch(v){$e(t,t.return,v)}break;case 4:Rn(e,t),Qn(t);break;case 13:Rn(e,t),Qn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ev=ze())),r&4&&T_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(xt=(u=xt)||c,Rn(e,t),xt=u):Rn(e,t),Qn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,p=d.child,d.tag){case 0:case 11:case 14:case 15:Cl(4,d,d.return);break;case 1:Do(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){$e(r,n,v)}}break;case 5:Do(d,d.return);break;case 22:if(d.memoizedState!==null){C_(h);continue}}p!==null?(p.return=d,U=p):C_(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=M1("display",o))}catch(v){$e(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){$e(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Rn(e,t),Qn(t),r&4&&T_(t);break;case 21:break;default:Rn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uT(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jl(i,""),r.flags&=-33);var s=S_(t);Qm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=S_(t);Gm(t,a,o);break;default:throw Error(A(161))}}catch(l){$e(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rx(t,e,n){U=t,dT(t)}function dT(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Cc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||xt;a=Cc;var u=xt;if(Cc=o,(xt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?b_(i):l!==null?(l.return=o,U=l):b_(i);for(;s!==null;)U=s,dT(s),s=s.sibling;U=i,Cc=a,xt=u}k_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):k_(t)}}function k_(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xt||Pd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&l_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}l_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Hl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}xt||e.flags&512&&Hm(e)}catch(d){$e(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function C_(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function b_(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pd(4,e)}catch(l){$e(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){$e(e,i,l)}}var s=e.return;try{Hm(e)}catch(l){$e(e,s,l)}break;case 5:var o=e.return;try{Hm(e)}catch(l){$e(e,o,l)}}}catch(l){$e(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var xx=Math.ceil,Oh=jr.ReactCurrentDispatcher,Jy=jr.ReactCurrentOwner,bn=jr.ReactCurrentBatchConfig,se=0,ut=null,Xe=null,It=0,hn=0,Ro=ji(0),tt=0,iu=null,xs=0,Od=0,Zy=0,bl=null,Jt=null,ev=0,ta=1/0,Ir=null,Lh=!1,Ym=null,Ii=null,bc=!1,di=null,Mh=0,Al=0,Xm=null,Zc=-1,eh=0;function jt(){return se&6?ze():Zc!==-1?Zc:Zc=ze()}function Ei(t){return t.mode&1?se&2&&It!==0?It&-It:mx.transition!==null?(eh===0&&(eh=Q1()),eh):(t=de,t!==0||(t=window.event,t=t===void 0?16:nS(t.type)),t):1}function Bn(t,e,n,r){if(50<Al)throw Al=0,Xm=null,Error(A(185));Ou(t,n,r),(!(se&2)||t!==ut)&&(t===ut&&(!(se&2)&&(Od|=n),tt===4&&ai(t,It)),on(t,r),n===1&&se===0&&!(e.mode&1)&&(ta=ze()+500,Dd&&qi()))}function on(t,e){var n=t.callbackNode;mR(t,e);var r=wh(t,t===ut?It:0);if(r===0)n!==null&&M0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&M0(n),e===1)t.tag===0?px(A_.bind(null,t)):IS(A_.bind(null,t)),cx(function(){!(se&6)&&qi()}),n=null;else{switch(Y1(r)){case 1:n=Cy;break;case 4:n=H1;break;case 16:n=vh;break;case 536870912:n=G1;break;default:n=vh}n=_T(n,fT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fT(t,e){if(Zc=-1,eh=0,se&6)throw Error(A(327));var n=t.callbackNode;if(Uo()&&t.callbackNode!==n)return null;var r=wh(t,t===ut?It:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$h(t,r);else{e=r;var i=se;se|=2;var s=mT();(ut!==t||It!==e)&&(Ir=null,ta=ze()+500,Es(t,e));do try{Lx();break}catch(a){pT(t,a)}while(1);Uy(),Oh.current=s,se=i,Xe!==null?e=0:(ut=null,It=0,e=tt)}if(e!==0){if(e===2&&(i=Tm(t),i!==0&&(r=i,e=Jm(t,i))),e===1)throw n=iu,Es(t,0),ai(t,r),on(t,ze()),n;if(e===6)ai(t,r);else{if(i=t.current.alternate,!(r&30)&&!Px(i)&&(e=$h(t,r),e===2&&(s=Tm(t),s!==0&&(r=s,e=Jm(t,s))),e===1))throw n=iu,Es(t,0),ai(t,r),on(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:rs(t,Jt,Ir);break;case 3:if(ai(t,r),(r&130023424)===r&&(e=ev+500-ze(),10<e)){if(wh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xm(rs.bind(null,t,Jt,Ir),e);break}rs(t,Jt,Ir);break;case 4:if(ai(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Vn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xx(r/1960))-r,10<r){t.timeoutHandle=xm(rs.bind(null,t,Jt,Ir),r);break}rs(t,Jt,Ir);break;case 5:rs(t,Jt,Ir);break;default:throw Error(A(329))}}}return on(t,ze()),t.callbackNode===n?fT.bind(null,t):null}function Jm(t,e){var n=bl;return t.current.memoizedState.isDehydrated&&(Es(t,e).flags|=256),t=$h(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&Zm(e)),t}function Zm(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function Px(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ai(t,e){for(e&=~Zy,e&=~Od,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),r=1<<n;t[n]=-1,e&=~r}}function A_(t){if(se&6)throw Error(A(327));Uo();var e=wh(t,0);if(!(e&1))return on(t,ze()),null;var n=$h(t,e);if(t.tag!==0&&n===2){var r=Tm(t);r!==0&&(e=r,n=Jm(t,r))}if(n===1)throw n=iu,Es(t,0),ai(t,e),on(t,ze()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rs(t,Jt,Ir),on(t,ze()),null}function tv(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(ta=ze()+500,Dd&&qi())}}function Ps(t){di!==null&&di.tag===0&&!(se&6)&&Uo();var e=se;se|=1;var n=bn.transition,r=de;try{if(bn.transition=null,de=1,t)return t()}finally{de=r,bn.transition=n,se=e,!(se&6)&&qi()}}function nv(){hn=Ro.current,Se(Ro)}function Es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ux(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(My(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Th();break;case 3:Zo(),Se(rn),Se(Lt),Ky();break;case 5:qy(r);break;case 4:Zo();break;case 13:Se(Pe);break;case 19:Se(Pe);break;case 10:Vy(r.type._context);break;case 22:case 23:nv()}n=n.return}if(ut=t,Xe=t=Si(t.current,null),It=hn=e,tt=0,iu=null,Zy=Od=xs=0,Jt=bl=null,ps!==null){for(e=0;e<ps.length;e++)if(n=ps[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ps=null}return t}function pT(t,e){do{var n=Xe;try{if(Uy(),Yc.current=Ph,xh){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xh=!1}if(Rs=0,at=et=Oe=null,kl=!1,tu=0,Jy.current=null,n===null||n.return===null){tt=1,iu=e,Xe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=m_(o);if(p!==null){p.flags&=-257,g_(p,o,a,s,e),p.mode&1&&p_(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){p_(s,u,e),rv();break e}l=Error(A(426))}}else if(be&&a.mode&1){var I=m_(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),g_(I,o,a,s,e),$y(ea(l,a));break e}}s=l=ea(l,a),tt!==4&&(tt=2),bl===null?bl=[s]:bl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=XS(s,l,e);a_(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ii===null||!Ii.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=JS(s,a,e);a_(s,_);break e}}s=s.return}while(s!==null)}yT(n)}catch(k){e=k,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(1)}function mT(){var t=Oh.current;return Oh.current=Ph,t===null?Ph:t}function rv(){(tt===0||tt===3||tt===2)&&(tt=4),ut===null||!(xs&268435455)&&!(Od&268435455)||ai(ut,It)}function $h(t,e){var n=se;se|=2;var r=mT();(ut!==t||It!==e)&&(Ir=null,Es(t,e));do try{Ox();break}catch(i){pT(t,i)}while(1);if(Uy(),se=n,Oh.current=r,Xe!==null)throw Error(A(261));return ut=null,It=0,tt}function Ox(){for(;Xe!==null;)gT(Xe)}function Lx(){for(;Xe!==null&&!oR();)gT(Xe)}function gT(t){var e=wT(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?yT(t):Xe=e,Jy.current=null}function yT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ax(n,e),n!==null){n.flags&=32767,Xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Xe=null;return}}else if(n=bx(n,e,hn),n!==null){Xe=n;return}if(e=e.sibling,e!==null){Xe=e;return}Xe=e=t}while(e!==null);tt===0&&(tt=5)}function rs(t,e,n){var r=de,i=bn.transition;try{bn.transition=null,de=1,Mx(t,e,n,r)}finally{bn.transition=i,de=r}return null}function Mx(t,e,n,r){do Uo();while(di!==null);if(se&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gR(t,s),t===ut&&(Xe=ut=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bc||(bc=!0,_T(vh,function(){return Uo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var o=de;de=1;var a=se;se|=4,Jy.current=null,Dx(t,n),hT(n,t),nx(Dm),_h=!!Nm,Dm=Nm=null,t.current=n,Rx(n),aR(),se=a,de=o,bn.transition=s}else t.current=n;if(bc&&(bc=!1,di=t,Mh=i),s=t.pendingLanes,s===0&&(Ii=null),cR(n.stateNode),on(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Lh)throw Lh=!1,t=Ym,Ym=null,t;return Mh&1&&t.tag!==0&&Uo(),s=t.pendingLanes,s&1?t===Xm?Al++:(Al=0,Xm=t):Al=0,qi(),null}function Uo(){if(di!==null){var t=Y1(Mh),e=bn.transition,n=de;try{if(bn.transition=null,de=16>t?16:t,di===null)var r=!1;else{if(t=di,di=null,Mh=0,se&6)throw Error(A(331));var i=se;for(se|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Cl(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,p=c.return;if(lT(c),c===u){U=null;break}if(d!==null){d.return=p,U=d;break}U=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var I=v.sibling;v.sibling=null,v=I}while(v!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Cl(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,U=m;break e}U=s.return}}var f=t.current;for(U=f;U!==null;){o=U;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,U=g;else e:for(o=f;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Pd(9,a)}}catch(k){$e(a,a.return,k)}if(a===o){U=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,U=_;break e}U=a.return}}if(se=i,qi(),ar&&typeof ar.onPostCommitFiberRoot=="function")try{ar.onPostCommitFiberRoot(kd,t)}catch{}r=!0}return r}finally{de=n,bn.transition=e}}return!1}function N_(t,e,n){e=ea(n,e),e=XS(t,e,1),t=_i(t,e,1),e=jt(),t!==null&&(Ou(t,1,e),on(t,e))}function $e(t,e,n){if(t.tag===3)N_(t,t,n);else for(;e!==null;){if(e.tag===3){N_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ii===null||!Ii.has(r))){t=ea(n,t),t=JS(e,t,1),e=_i(e,t,1),t=jt(),e!==null&&(Ou(e,1,t),on(e,t));break}}e=e.return}}function $x(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(It&n)===n&&(tt===4||tt===3&&(It&130023424)===It&&500>ze()-ev?Es(t,0):Zy|=n),on(t,e)}function vT(t,e){e===0&&(t.mode&1?(e=yc,yc<<=1,!(yc&130023424)&&(yc=4194304)):e=1);var n=jt();t=Fr(t,e),t!==null&&(Ou(t,e,n),on(t,n))}function Fx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vT(t,n)}function Ux(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),vT(t,n)}var wT;wT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,Cx(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,be&&e.flags&1048576&&ES(e,bh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Jc(t,e),t=e.pendingProps;var i=Yo(e,Lt.current);Fo(e,n),i=Hy(null,e,r,t,i,n);var s=Gy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(r)?(s=!0,kh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zy(e),i.updater=Rd,e.stateNode=i,i._reactInternals=e,Um(e,r,t,n),e=zm(null,e,r,!0,s,n)):(e.tag=0,be&&s&&Ly(e),Ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Jc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Bx(r),t=xn(r,t),i){case 0:e=Bm(null,e,r,t,n);break e;case 1:e=w_(null,e,r,t,n);break e;case 11:e=y_(null,e,r,t,n);break e;case 14:e=v_(null,e,r,xn(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Bm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),w_(t,e,r,i,n);case 3:e:{if(nT(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,CS(t,e),Dh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ea(Error(A(423)),e),e=__(t,e,r,n,i);break e}else if(r!==i){i=ea(Error(A(424)),e),e=__(t,e,r,n,i);break e}else for(fn=wi(e.stateNode.containerInfo.firstChild),mn=e,be=!0,Ln=null,n=DS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xo(),r===i){e=Ur(t,e,n);break e}Ut(t,e,r,n)}e=e.child}return e;case 5:return RS(e),t===null&&Mm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rm(r,i)?o=null:s!==null&&Rm(r,s)&&(e.flags|=32),tT(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&Mm(e),null;case 13:return rT(t,e,n);case 4:return jy(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Jo(e,null,r,n):Ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),y_(t,e,r,i,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Ah,r._currentValue),r._currentValue=o,s!==null)if(zn(s.value,o)){if(s.children===i.children&&!rn.current){e=Ur(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=xr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$m(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$m(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fo(e,n),i=An(i),r=r(i),e.flags|=1,Ut(t,e,r,n),e.child;case 14:return r=e.type,i=xn(r,e.pendingProps),i=xn(r.type,i),v_(t,e,r,i,n);case 15:return ZS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Jc(t,e),e.tag=1,sn(r)?(t=!0,kh(e)):t=!1,Fo(e,n),AS(e,r,i),Um(e,r,i,n),zm(null,e,r,!0,t,n);case 19:return iT(t,e,n);case 22:return eT(t,e,n)}throw Error(A(156,e.tag))};function _T(t,e){return W1(t,e)}function Vx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,r){return new Vx(t,e,n,r)}function iv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bx(t){if(typeof t=="function")return iv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sy)return 11;if(t===Ty)return 14}return 2}function Si(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function th(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")iv(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Io:return Ss(n.children,i,s,e);case Ey:o=8,i|=8;break;case um:return t=kn(12,n,e,i|2),t.elementType=um,t.lanes=s,t;case cm:return t=kn(13,n,e,i),t.elementType=cm,t.lanes=s,t;case hm:return t=kn(19,n,e,i),t.elementType=hm,t.lanes=s,t;case N1:return Ld(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case b1:o=10;break e;case A1:o=9;break e;case Sy:o=11;break e;case Ty:o=14;break e;case ii:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=kn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ss(t,e,n,r){return t=kn(7,t,r,e),t.lanes=n,t}function Ld(t,e,n,r){return t=kn(22,t,r,e),t.elementType=N1,t.lanes=n,t.stateNode={isHidden:!1},t}function fp(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function pp(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gf(0),this.expirationTimes=Gf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sv(t,e,n,r,i,s,o,a,l){return t=new zx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zy(s),t}function jx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_o,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function IT(t){if(!t)return Ai;t=t._reactInternals;e:{if(Js(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(sn(n))return _S(t,n,e)}return e}function ET(t,e,n,r,i,s,o,a,l){return t=sv(n,r,!0,t,i,s,o,a,l),t.context=IT(null),n=t.current,r=jt(),i=Ei(n),s=xr(r,i),s.callback=e??null,_i(n,s,i),t.current.lanes=i,Ou(t,i,r),on(t,r),t}function Md(t,e,n,r){var i=e.current,s=jt(),o=Ei(i);return n=IT(n),e.context===null?e.context=n:e.pendingContext=n,e=xr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_i(i,e,o),t!==null&&(Bn(t,i,o,s),Qc(t,i,o)),o}function Fh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function D_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ov(t,e){D_(t,e),(t=t.alternate)&&D_(t,e)}function qx(){return null}var ST=typeof reportError=="function"?reportError:function(t){console.error(t)};function av(t){this._internalRoot=t}$d.prototype.render=av.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Md(t,e,null,null)};$d.prototype.unmount=av.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ps(function(){Md(null,t,null,null)}),e[$r]=null}};function $d(t){this._internalRoot=t}$d.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<oi.length&&e!==0&&e<oi[n].priority;n++);oi.splice(n,0,t),n===0&&tS(t)}};function lv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function R_(){}function Kx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Fh(o);s.call(u)}}var o=ET(e,r,t,0,null,!1,!1,"",R_);return t._reactRootContainer=o,t[$r]=o.current,Yl(t.nodeType===8?t.parentNode:t),Ps(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Fh(l);a.call(u)}}var l=sv(t,0,!1,null,null,!1,!1,"",R_);return t._reactRootContainer=l,t[$r]=l.current,Yl(t.nodeType===8?t.parentNode:t),Ps(function(){Md(e,l,n,r)}),l}function Ud(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Fh(o);a.call(l)}}Md(e,o,t,i)}else o=Kx(n,e,t,i,r);return Fh(o)}X1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ll(e.pendingLanes);n!==0&&(by(e,n|1),on(e,ze()),!(se&6)&&(ta=ze()+500,qi()))}break;case 13:Ps(function(){var r=Fr(t,1);if(r!==null){var i=jt();Bn(r,t,1,i)}}),ov(t,1)}};Ay=function(t){if(t.tag===13){var e=Fr(t,134217728);if(e!==null){var n=jt();Bn(e,t,134217728,n)}ov(t,134217728)}};J1=function(t){if(t.tag===13){var e=Ei(t),n=Fr(t,e);if(n!==null){var r=jt();Bn(n,t,e,r)}ov(t,e)}};Z1=function(){return de};eS=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Im=function(t,e,n){switch(e){case"input":if(pm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nd(r);if(!i)throw Error(A(90));R1(r),pm(r,i)}}}break;case"textarea":P1(t,n);break;case"select":e=n.value,e!=null&&Oo(t,!!n.multiple,e,!1)}};V1=tv;B1=Ps;var Wx={usingClientEntryPoint:!1,Events:[Mu,ko,Nd,F1,U1,tv]},Ga={findFiberByHostInstance:fs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Hx={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=q1(t),t===null?null:t.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{kd=Ac.inject(Hx),ar=Ac}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lv(e))throw Error(A(200));return jx(t,e,null,n)};wn.createRoot=function(t,e){if(!lv(t))throw Error(A(299));var n=!1,r="",i=ST;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sv(t,1,!1,null,null,n,!1,r,i),t[$r]=e.current,Yl(t.nodeType===8?t.parentNode:t),new av(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=q1(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Ps(t)};wn.hydrate=function(t,e,n){if(!Fd(e))throw Error(A(200));return Ud(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!lv(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ST;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ET(e,null,t,1,n??null,i,!1,s,o),t[$r]=e.current,Yl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $d(e)};wn.render=function(t,e,n){if(!Fd(e))throw Error(A(200));return Ud(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!Fd(t))throw Error(A(40));return t._reactRootContainer?(Ps(function(){Ud(null,null,t,!1,function(){t._reactRootContainer=null,t[$r]=null})}),!0):!1};wn.unstable_batchedUpdates=tv;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fd(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Ud(t,e,n,!1,r)};wn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=wn})(qD);const cl=m1(ph);var x_=ph;om.createRoot=x_.createRoot,om.hydrateRoot=x_.hydrateRoot;const Gx="/assets/Logo-e60e83a3.png";/**
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
 */const TT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(TT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Yx;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xx=function(t){const e=TT(t);return kT.encodeByteArray(e,!0)},Uh=function(t){return Xx(t).replace(/\./g,"")},CT=function(t){try{return kT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Vh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Jx(n)||(t[n]=Vh(t[n],e[n]));return t}function Jx(t){return t!=="__proto__"}/**
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
 */function Zx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eP=()=>Zx().__FIREBASE_DEFAULTS__,tP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&CT(t[1]);return e&&JSON.parse(e)},Vd=()=>{try{return eP()||tP()||nP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bT=t=>{var e,n;return(n=(e=Vd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AT=t=>{const e=bT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rP=()=>{var t;return(t=Vd())===null||t===void 0?void 0:t.config},NT=t=>{var e;return(e=Vd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class iP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function DT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Uh(JSON.stringify(n)),Uh(JSON.stringify(o)),a].join(".")}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function uv(){var t;const e=(t=Vd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oP(){return typeof self=="object"&&self.self===self}function RT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xT(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aP(){return!uv()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Os(){try{return typeof indexedDB=="object"}catch{return!1}}function lP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function uP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const cP="FirebaseError";class Et extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cP,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gr.prototype.create)}}class gr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Et(i,a,r)}}function hP(t,e){return t.replace(dP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dP=/\{\$([^}]+)}/g;/**
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
 */function P_(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bh(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(O_(s)&&O_(o)){if(!Bh(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function O_(t){return t!==null&&typeof t=="object"}/**
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
 */function Ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function hl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PT(t,e){const n=new pP(t,e);return n.subscribe.bind(n)}class pP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mp),i.error===void 0&&(i.error=mp),i.complete===void 0&&(i.complete=mp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mp(){}/**
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
 */function V(t){return t&&t._delegate?t._delegate:t}class bt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */let gP=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vP(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function yP(t){return t===is?void 0:t}function vP(t){return t.instantiationMode==="EAGER"}/**
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
 */class wP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const hv=[];var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const OT={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},_P=re.INFO,IP={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},EP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=IP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bd{constructor(e){this.name=e,this._logLevel=_P,this._logHandler=EP,this._userLogHandler=null,hv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}function SP(t){hv.forEach(e=>{e.setLogLevel(t)})}function TP(t,e){for(const n of hv){let r=null;e&&e.level&&(r=OT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:re[s].toLowerCase(),message:a,args:o,type:i.name})}}}const kP=(t,e)=>e.some(n=>t instanceof n);let L_,M_;function CP(){return L_||(L_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bP(){return M_||(M_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LT=new WeakMap,eg=new WeakMap,MT=new WeakMap,gp=new WeakMap,dv=new WeakMap;function AP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ti(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&LT.set(n,t)}).catch(()=>{}),dv.set(e,t),e}function NP(t){if(eg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});eg.set(t,e)}let tg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return eg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||MT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DP(t){tg=t(tg)}function RP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yp(this),e,...n);return MT.set(r,e.sort?e.sort():[e]),Ti(r)}:bP().includes(t)?function(...e){return t.apply(yp(this),e),Ti(LT.get(this))}:function(...e){return Ti(t.apply(yp(this),e))}}function xP(t){return typeof t=="function"?RP(t):(t instanceof IDBTransaction&&NP(t),kP(t,CP())?new Proxy(t,tg):t)}function Ti(t){if(t instanceof IDBRequest)return AP(t);if(gp.has(t))return gp.get(t);const e=xP(t);return e!==t&&(gp.set(t,e),dv.set(e,t)),e}const yp=t=>dv.get(t);function PP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ti(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ti(o.result),l.oldVersion,l.newVersion,Ti(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const OP=["get","getKey","getAll","getAllKeys","count"],LP=["put","add","delete","clear"],vp=new Map;function $_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vp.get(e))return vp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=LP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||OP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return vp.set(e,s),s}DP(t=>({...t,get:(e,n,r)=>$_(e,n)||t.get(e,n,r),has:(e,n)=>!!$_(e,n)||t.has(e,n)}));/**
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
 */class MP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($P(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $P(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ng="@firebase/app",F_="0.9.9";/**
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
 */const Ls=new Bd("@firebase/app"),FP="@firebase/app-compat",UP="@firebase/analytics-compat",VP="@firebase/analytics",BP="@firebase/app-check-compat",zP="@firebase/app-check",jP="@firebase/auth",qP="@firebase/auth-compat",KP="@firebase/database",WP="@firebase/database-compat",HP="@firebase/functions",GP="@firebase/functions-compat",QP="@firebase/installations",YP="@firebase/installations-compat",XP="@firebase/messaging",JP="@firebase/messaging-compat",ZP="@firebase/performance",eO="@firebase/performance-compat",tO="@firebase/remote-config",nO="@firebase/remote-config-compat",rO="@firebase/storage",iO="@firebase/storage-compat",sO="@firebase/firestore",oO="@firebase/firestore-compat",aO="firebase",lO="9.21.0";/**
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
 */const Ni="[DEFAULT]",uO={[ng]:"fire-core",[FP]:"fire-core-compat",[VP]:"fire-analytics",[UP]:"fire-analytics-compat",[zP]:"fire-app-check",[BP]:"fire-app-check-compat",[jP]:"fire-auth",[qP]:"fire-auth-compat",[KP]:"fire-rtdb",[WP]:"fire-rtdb-compat",[HP]:"fire-fn",[GP]:"fire-fn-compat",[QP]:"fire-iid",[YP]:"fire-iid-compat",[XP]:"fire-fcm",[JP]:"fire-fcm-compat",[ZP]:"fire-perf",[eO]:"fire-perf-compat",[tO]:"fire-rc",[nO]:"fire-rc-compat",[rO]:"fire-gcs",[iO]:"fire-gcs-compat",[sO]:"fire-fst",[oO]:"fire-fst-compat","fire-js":"fire-js",[aO]:"fire-js-all"};/**
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
 */const Di=new Map,su=new Map;function zh(t,e){try{t.container.addComponent(e)}catch(n){Ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $T(t,e){t.container.addOrOverwriteComponent(e)}function an(t){const e=t.name;if(su.has(e))return Ls.debug(`There were multiple attempts to register component ${e}.`),!1;su.set(e,t);for(const n of Di.values())zh(n,t);return!0}function Ki(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cO(t,e,n=Ni){Ki(t,e).clearInstance(n)}function hO(){su.clear()}/**
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
 */const dO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pr=new gr("app","Firebase",dO);/**
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
 */let fO=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}};/**
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
 */const qr=lO;function zd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ni,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=rP()),!n)throw Pr.create("no-options");const s=Di.get(i);if(s){if(Bh(n,s.options)&&Bh(r,s.config))return s;throw Pr.create("duplicate-app",{appName:i})}const o=new wP(i);for(const l of su.values())o.addComponent(l);const a=new fO(n,r,o);return Di.set(i,a),a}function jd(t=Ni){const e=Di.get(t);if(!e&&t===Ni)return zd();if(!e)throw Pr.create("no-app",{appName:t});return e}function pO(){return Array.from(Di.values())}async function FT(t){const e=t.name;Di.has(e)&&(Di.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function St(t,e,n){var r;let i=(r=uO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ls.warn(a.join(" "));return}an(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function UT(t,e){if(t!==null&&typeof t!="function")throw Pr.create("invalid-log-argument");TP(t,e)}function VT(t){SP(t)}/**
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
 */const mO="firebase-heartbeat-database",gO=1,ou="firebase-heartbeat-store";let wp=null;function BT(){return wp||(wp=PP(mO,gO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ou)}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),wp}async function yO(t){try{return(await BT()).transaction(ou).objectStore(ou).get(zT(t))}catch(e){if(e instanceof Et)Ls.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ls.warn(n.message)}}}async function U_(t,e){try{const r=(await BT()).transaction(ou,"readwrite");return await r.objectStore(ou).put(e,zT(t)),r.done}catch(n){if(n instanceof Et)Ls.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ls.warn(r.message)}}}function zT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vO=1024,wO=30*24*60*60*1e3;class _O{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=V_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=wO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=V_(),{heartbeatsToSend:n,unsentEntries:r}=IO(this._heartbeatsCache.heartbeats),i=Uh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function V_(){return new Date().toISOString().substring(0,10)}function IO(t,e=vO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),B_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),B_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class EO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Os()?lP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return U_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return U_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function B_(t){return Uh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function SO(t){an(new bt("platform-logger",e=>new MP(e),"PRIVATE")),an(new bt("heartbeat",e=>new _O(e),"PRIVATE")),St(ng,F_,t),St(ng,F_,"esm2017"),St("fire-js","")}SO("");const TO=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Et,SDK_VERSION:qr,_DEFAULT_ENTRY_NAME:Ni,_addComponent:zh,_addOrOverwriteComponent:$T,_apps:Di,_clearComponents:hO,_components:su,_getProvider:Ki,_registerComponent:an,_removeServiceInstance:cO,deleteApp:FT,getApp:jd,getApps:pO,initializeApp:zd,onLog:UT,registerVersion:St,setLogLevel:VT},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n){this._delegate=e,this.firebase=n,zh(e,new bt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),FT(this._delegate)))}_getService(e,n=Ni){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ni){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){zh(this._delegate,e)}_addOrOverwriteComponent(e){$T(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const CO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},z_=new gr("app-compat","Firebase",CO);/**
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
 */function bO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:St,setLogLevel:VT,onLog:UT,apps:null,SDK_VERSION:qr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:TO}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Ni,!P_(e,u))throw z_.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const h=zd(u,c);if(P_(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,h=c.replace("-compat","");if(an(u)&&u.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw z_.create("invalid-app-argument",{appName:c});return p[h]()};u.serviceProps!==void 0&&Vh(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,c).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[h]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function jT(){const t=bO(kO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:jT,extendNamespace:e,createSubscribe:PT,ErrorFactory:gr,deepExtend:Vh});function e(n){Vh(t,n)}return t}const AO=jT();/**
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
 */const j_=new Bd("@firebase/app-compat"),NO="@firebase/app-compat",DO="0.2.9";/**
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
 */function RO(t){St(NO,DO,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(oP()&&self.firebase!==void 0){j_.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&j_.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ea=AO;RO();function fv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Qa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},co={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function qT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PO=xO,OO=qT,KT=new gr("auth","Firebase",qT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new Bd("@firebase/auth");function LO(t,...e){jh.logLevel<=re.WARN&&jh.warn(`Auth (${qr}): ${t}`,...e)}function nh(t,...e){jh.logLevel<=re.ERROR&&jh.error(`Auth (${qr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw pv(t,...e)}function Tt(t,...e){return pv(t,...e)}function WT(t,e,n){const r=Object.assign(Object.assign({},OO()),{[e]:n});return new gr("auth","Firebase",r).create(e,{appName:t.name})}function Sa(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ht(t,"argument-error"),WT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return KT.create(t,...e)}function D(t,e,...n){if(!t)throw pv(e,...n)}function rr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nh(e),new Error(e)}function jn(t,e){t||rr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mv(){return q_()==="http:"||q_()==="https:"}function q_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mv()||RT()||"connection"in navigator)?navigator.onLine:!0}function $O(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=sP()||cv()}get(){return MO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=new Fu(3e4,6e4);function Ze(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rt(t,e,n,r,i={}){return GT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ia(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),HT.fetch()(QT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function GT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FO),e);try{const i=new VO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw dl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw dl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw dl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw WT(t,c,u);ht(t,c)}}catch(i){if(i instanceof Et)throw i;ht(t,"network-request-failed",{message:String(i)})}}async function Kr(t,e,n,r,i={}){const s=await rt(t,e,n,r,i);return"mfaPendingCredential"in s&&ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function QT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gv(t.config,i):`${t.config.apiScheme}://${i}`}class VO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),UO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BO(t,e){return rt(t,"POST","/v1/accounts:delete",e)}async function zO(t,e){return rt(t,"POST","/v1/accounts:update",e)}async function jO(t,e){return rt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qO(t,e=!1){const n=V(t),r=await n.getIdToken(e),i=qd(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Nl(_p(i.auth_time)),issuedAtTime:Nl(_p(i.iat)),expirationTime:Nl(_p(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _p(t){return Number(t)*1e3}function qd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nh("JWT malformed, contained fewer than 3 sections"),null;try{const i=CT(n);return i?JSON.parse(i):(nh("Failed to decode base64 JWT payload"),null)}catch(i){return nh("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function KO(t){const e=qd(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Et&&WO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nl(this.lastLoginAt),this.creationTime=Nl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Vr(t,jO(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?YO(s.providerUserInfo):[],a=QO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new YT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function GO(t){const e=V(t);await lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function YO(t){return t.map(e=>{var{providerId:n}=e,r=fv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XO(t,e){const n=await GT(t,{},async()=>{const r=Ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=QT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",HT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):KO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new uu;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uu,this.toJSON())}_performRefresh(){return rr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ts{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=fv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new YT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qO(this,e)}reload(){return GO(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ts(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vr(this,BO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:k,providerData:T,stsTokenManager:N}=n;D(g&&N,e,"internal-error");const R=uu.fromJSON(this.name,N);D(typeof g=="string",e,"internal-error"),ei(h,e.name),ei(d,e.name),D(typeof _=="boolean",e,"internal-error"),D(typeof k=="boolean",e,"internal-error"),ei(p,e.name),ei(y,e.name),ei(v,e.name),ei(I,e.name),ei(m,e.name),ei(f,e.name);const ae=new Ts({uid:g,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:k,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:R,createdAt:m,lastLoginAt:f});return T&&Array.isArray(T)&&(ae.providerData=T.map(W=>Object.assign({},W))),I&&(ae._redirectEventId=I),ae}static async _fromIdTokenResponse(e,n,r=!1){const i=new uu;i.updateFromServerResponse(n);const s=new Ts({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=new Map;function pn(t){jn(t instanceof Function,"Expected a class definition");let e=K_.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,K_.set(t,e),e)}/**
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
 */class XT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}XT.type="NONE";const na=XT;/**
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
 */function ks(t,e,n){return`firebase:${t}:${e}:${n}`}class Vo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ks(this.userKey,i.apiKey,s),this.fullPersistenceKey=ks("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ts._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vo(pn(na),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||pn(na);const o=ks(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ts._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Vo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Vo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ek(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tk(e))return"Blackberry";if(nk(e))return"Webos";if(yv(e))return"Safari";if((e.includes("chrome/")||ZT(e))&&!e.includes("edge/"))return"Chrome";if(Uu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JT(t=Me()){return/firefox\//i.test(t)}function yv(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ZT(t=Me()){return/crios\//i.test(t)}function ek(t=Me()){return/iemobile/i.test(t)}function Uu(t=Me()){return/android/i.test(t)}function tk(t=Me()){return/blackberry/i.test(t)}function nk(t=Me()){return/webos/i.test(t)}function Ta(t=Me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JO(t=Me()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function ZO(t=Me()){var e;return Ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eL(){return xT()&&document.documentMode===10}function rk(t=Me()){return Ta(t)||Uu(t)||nk(t)||tk(t)||/windows phone/i.test(t)||ek(t)}function tL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t,e=[]){let n;switch(t){case"Browser":n=W_(Me());break;case"Worker":n=`${W_(Me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(t){return(await rt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function sk(t,e){return rt(t,"GET","/v2/recaptchaConfig",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t){return t!==void 0&&t.getResponse!==void 0}function G_(t){return t!==void 0&&t.enterprise!==void 0}class ok{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rL().appendChild(r)})}function ak(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const iL="https://www.google.com/recaptcha/enterprise.js?render=",sL="recaptcha-enterprise",oL="NO_RECAPTCHA";class lk{constructor(e){this.type=sL,this.auth=We(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{sk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ok(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;G_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(oL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&G_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}vv(iL+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ri(t,e,n,r=!1){const i=new lk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class aL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Q_(this),this.idTokenSubscription=new Q_(this),this.beforeStateQueue=new aL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$O()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?V(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}async initializeRecaptchaConfig(){const e=await sk(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ok(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new lk(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Vo.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ik(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function We(t){return V(t)}class Q_{constructor(e){this.auth=e,this.observer=null,this.addObserver=PT(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(t,e){const n=Ki(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bh(s,e??{}))return i;ht(i,"already-initialized")}return n.initialize({options:e})}function cL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uk(t,e,n){const r=We(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ck(e),{host:o,port:a}=hL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||dL()}function ck(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hL(t){const e=ck(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Y_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Y_(o)}}}function Y_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rr("not implemented")}_getIdTokenResponse(e){return rr("not implemented")}_linkToIdToken(e,n){return rr("not implemented")}_getReauthenticationResolver(e){return rr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(t,e){return rt(t,"POST","/v1/accounts:resetPassword",Ze(t,e))}async function dk(t,e){return rt(t,"POST","/v1/accounts:update",e)}async function fL(t,e){return rt(t,"POST","/v1/accounts:update",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(t,e){return Kr(t,"POST","/v1/accounts:signInWithPassword",Ze(t,e))}async function Kd(t,e){return rt(t,"POST","/v1/accounts:sendOobCode",Ze(t,e))}async function pL(t,e){return Kd(t,e)}async function Ep(t,e){return Kd(t,e)}async function Sp(t,e){return Kd(t,e)}async function mL(t,e){return Kd(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gL(t,e){return Kr(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}async function yL(t,e){return Kr(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends ka{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new cu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new cu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ri(e,r,"signInWithPassword");return Ip(e,i)}else return Ip(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ri(e,r,"signInWithPassword");return Ip(e,s)}else return Promise.reject(i)});case"emailLink":return gL(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return dk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yL(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t,e){return Kr(t,"POST","/v1/accounts:signInWithIdp",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL="http://localhost";class dr extends ka{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=fv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new dr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:vL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ia(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wL(t,e){return rt(t,"POST","/v1/accounts:sendVerificationCode",Ze(t,e))}async function _L(t,e){return Kr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ze(t,e))}async function IL(t,e){const n=await Kr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ze(t,e));if(n.temporaryProof)throw dl(t,"account-exists-with-different-credential",n);return n}const EL={USER_NOT_FOUND:"user-not-found"};async function SL(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Kr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ze(t,n),EL)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends ka{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Cs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Cs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return _L(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return IL(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return SL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Cs({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kL(t){const e=xo(hl(t)).link,n=e?xo(hl(e)).deep_link_id:null,r=xo(hl(t)).deep_link_id;return(r?xo(hl(r)).link:null)||r||n||e||t}class Wd{constructor(e){var n,r,i,s,o,a;const l=xo(hl(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=TL((i=l.mode)!==null&&i!==void 0?i:null);D(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kL(e);try{return new Wd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.providerId=Wi.PROVIDER_ID}static credential(e,n){return cu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wd.parseLink(n);return D(r,"argument-error"),cu._fromEmailAndCode(e,r.code,r.tenantId)}}Wi.PROVIDER_ID="password";Wi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ca extends Wr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Bo extends Ca{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return D("providerId"in n&&"signInMethod"in n,"argument-error"),dr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return D(e.idToken||e.accessToken,"argument-error"),dr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Bo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Bo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Bo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ca{constructor(){super("facebook.com")}static credential(e){return dr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Ca{constructor(){super("github.com")}static credential(e){return dr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL="http://localhost";class ra extends ka{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ra(r,s)}static _create(e,n){return new ra(e,n)}buildRequest(){return{requestUri:CL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bL="saml.";class qh extends Wr{constructor(e){D(e.startsWith(bL),"argument-error"),super(e)}static credentialFromResult(e){return qh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return qh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ra.fromJSON(e);return D(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ra._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Ca{constructor(){super("twitter.com")}static credential(e,n){return dr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(t,e){return Kr(t,"POST","/v1/accounts:signUp",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ts._fromIdTokenResponse(e,r,i),o=X_(r);return new Dn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=X_(r);return new Dn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function X_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AL(t){var e;const n=We(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Dn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await rh(n,{returnSecureToken:!0}),i=await Dn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends Et{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Kh(e,n,r,i)}}function fk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function NL(t,e){const n=V(t);await Hd(!0,n,e);const{providerUserInfo:r}=await zO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=pk(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function wv(t,e,n=!1){const r=await Vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dn._forOperation(t,"link",r)}async function Hd(t,e,n){await lu(e);const r=pk(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";D(r.has(n)===t,e.auth,i)}/**
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
 */async function mk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Vr(t,fk(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=qd(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),Dn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(t,e,n=!1){const r="signIn",i=await fk(t,r,e),s=await Dn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Gd(t,e){return gk(We(t),e)}async function yk(t,e){const n=V(t);return await Hd(!1,n,e.providerId),wv(n,e)}async function vk(t,e){return mk(V(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DL(t,e){return Kr(t,"POST","/v1/accounts:signInWithCustomToken",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RL(t,e){const n=We(t),r=await DL(n,{token:e,returnSecureToken:!0}),i=await Dn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?_v._fromServerResponse(e,n):"totpInfo"in n?Iv._fromServerResponse(e,n):ht(e,"internal-error")}}class _v extends Vu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new _v(n)}}class Iv extends Vu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Iv(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e,n){var r;D(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),D(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(D(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(D(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xL(t,e,n){var r;const i=We(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Ri(i,s,"getOobCode",!0);n&&zo(i,o,n),await Ep(i,o)}else n&&zo(i,s,n),await Ep(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Ri(i,s,"getOobCode",!0);n&&zo(i,a,n),await Ep(i,a)}else return Promise.reject(o)})}async function PL(t,e,n){await hk(V(t),{oobCode:e,newPassword:n})}async function OL(t,e){await fL(V(t),{oobCode:e})}async function wk(t,e){const n=V(t),r=await hk(n,{oobCode:e}),i=r.requestType;switch(D(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(r.mfaInfo,n,"internal-error");default:D(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Vu._fromServerResponse(We(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function LL(t,e){const{data:n}=await wk(V(t),e);return n.email}async function ML(t,e,n){var r;const i=We(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Ri(i,s,"signUpPassword");o=rh(i,u)}else o=rh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Ri(i,s,"signUpPassword");return rh(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Dn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function $L(t,e,n){return Gd(V(t),Wi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FL(t,e,n){var r;const i=We(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){D(l.handleCodeInApp,i,"argument-error"),l&&zo(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Ri(i,s,"getOobCode",!0);o(a,n),await Sp(i,a)}else o(s,n),await Sp(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await Ri(i,s,"getOobCode",!0);o(l,n),await Sp(i,l)}else return Promise.reject(a)})}function UL(t,e){const n=Wd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function VL(t,e,n){const r=V(t),i=Wi.credentialWithLink(e,n||au());return D(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Gd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BL(t,e){return rt(t,"POST","/v1/accounts:createAuthUri",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zL(t,e){const n=mv()?au():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await BL(V(t),r);return i||[]}async function jL(t,e){const n=V(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&zo(n.auth,i,e);const{email:s}=await pL(n.auth,i);s!==t.email&&await t.reload()}async function qL(t,e,n){const r=V(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&zo(r.auth,s,n);const{email:o}=await mL(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KL(t,e){return rt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=V(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Vr(r,KL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function HL(t,e){return _k(V(t),e,null)}function GL(t,e){return _k(V(t),null,e)}async function _k(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Vr(t,dk(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function QL(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=qd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new jo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new YL(s,i);case"github.com":return new XL(s,i);case"google.com":return new JL(s,i);case"twitter.com":return new ZL(s,i,t.screenName||null);case"custom":case"anonymous":return new jo(s,null);default:return new jo(s,r,i)}}class jo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Ik extends jo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class YL extends jo{constructor(e,n){super(e,"facebook.com",n)}}class XL extends Ik{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class JL extends jo{constructor(e,n){super(e,"google.com",n)}}class ZL extends Ik{constructor(e,n,r){super(e,"twitter.com",n,r)}}function eM(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:QL(n)}function tM(t,e,n,r){return V(t).onIdTokenChanged(e,n,r)}function nM(t,e,n){return V(t).beforeAuthStateChanged(e,n)}class gs{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new gs("enroll",e,n)}static _fromMfaPendingCredential(e){return new gs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return gs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return gs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=We(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Vu._fromServerResponse(r,a));D(i.mfaPendingCredential,r,"internal-error");const o=gs._fromMfaPendingCredential(i.mfaPendingCredential);return new Ev(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Dn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return D(n.user,r,"internal-error"),Dn._forOperation(n.user,n.operationType,u);default:ht(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function rM(t,e){var n;const r=V(t),i=e;return D(e.customData.operationType,r,"argument-error"),D((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Ev._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(t,e){return rt(t,"POST","/v2/accounts/mfaEnrollment:start",Ze(t,e))}function sM(t,e){return rt(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ze(t,e))}function oM(t,e){return rt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ze(t,e))}class Sv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Vu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Sv(e)}async getSession(){return gs._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Vr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Vr(this.user,oM(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Tp=new WeakMap;function aM(t){const e=V(t);return Tp.has(e)||Tp.set(e,Sv._fromUser(e)),Tp.get(e)}const Wh="__sak";/**
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
 */class Ek{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wh,"1"),this.storage.removeItem(Wh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(){const t=Me();return yv(t)||Ta(t)}const uM=1e3,cM=10;class Sk extends Ek{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lM()&&tL(),this.fallbackToPolling=rk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sk.type="LOCAL";const Qd=Sk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk extends Ek{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tk.type="SESSION";const xi=Tk;/**
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
 */function hM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Yd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await hM(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Bu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function fM(t){Ye().location.href=t}/**
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
 */function Tv(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function pM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gM(){return Tv()?self:null}/**
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
 */const kk="firebaseLocalStorageDb",yM=1,Hh="firebaseLocalStorage",Ck="fbase_key";class zu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xd(t,e){return t.transaction([Hh],e?"readwrite":"readonly").objectStore(Hh)}function vM(){const t=indexedDB.deleteDatabase(kk);return new zu(t).toPromise()}function rg(){const t=indexedDB.open(kk,yM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hh,{keyPath:Ck})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hh)?e(r):(r.close(),await vM(),e(await rg()))})})}async function J_(t,e,n){const r=Xd(t,!0).put({[Ck]:e,value:n});return new zu(r).toPromise()}async function wM(t,e){const n=Xd(t,!1).get(e),r=await new zu(n).toPromise();return r===void 0?null:r.value}function Z_(t,e){const n=Xd(t,!0).delete(e);return new zu(n).toPromise()}const _M=800,IM=3;class bk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yd._getInstance(gM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pM(),!this.activeServiceWorker)return;this.sender=new dM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rg();return await J_(e,Wh,"1"),await Z_(e,Wh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>J_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Z_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xd(i,!1).getAll();return new zu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_M)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bk.type="LOCAL";const ia=bk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(t,e){return rt(t,"POST","/v2/accounts/mfaSignIn:start",Ze(t,e))}function SM(t,e){return rt(t,"POST","/v2/accounts/mfaSignIn:finalize",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=500,kM=6e4,Nc=1e12;class CM{constructor(e){this.auth=e,this.counter=Nc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new bM(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Nc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Nc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Nc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class bM{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=AM(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},kM)},TM))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function AM(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=ak("rcb"),NM=new Fu(3e4,6e4),DM="https://www.google.com/recaptcha/api.js?";class RM{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ye().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return D(xM(n),e,"argument-error"),this.shouldResolveImmediately(n)&&H_(Ye().grecaptcha)?Promise.resolve(Ye().grecaptcha):new Promise((r,i)=>{const s=Ye().setTimeout(()=>{i(Tt(e,"network-request-failed"))},NM.get());Ye()[kp]=()=>{Ye().clearTimeout(s),delete Ye()[kp];const a=Ye().grecaptcha;if(!a||!H_(a)){i(Tt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const h=l(u,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${DM}?${Ia({onload:kp,render:"explicit",hl:n})}`;vv(o).catch(()=>{clearTimeout(s),i(Tt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ye().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function xM(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class PM{async load(e){return new CM(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak="recaptcha",OM={theme:"light",type:"image"};let LM=class{constructor(e,n=Object.assign({},OM),r){this.parameters=n,this.type=Ak,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=We(r),this.isInvisible=this.parameters.size==="invisible",D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new PM:new RM,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ye()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(mv()&&!Tv(),this.auth,"internal-error"),await MM(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await nL(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function MM(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Cs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function $M(t,e,n){const r=We(t),i=await Jd(r,e,V(n));return new kv(i,s=>Gd(r,s))}async function FM(t,e,n){const r=V(t);await Hd(!1,r,"phone");const i=await Jd(r.auth,e,V(n));return new kv(i,s=>yk(r,s))}async function UM(t,e,n){const r=V(t),i=await Jd(r.auth,e,V(n));return new kv(i,s=>vk(r,s))}async function Jd(t,e,n){var r;const i=await n.verify();try{D(typeof i=="string",t,"argument-error"),D(n.type===Ak,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return D(o.type==="enroll",t,"internal-error"),(await iM(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{D(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return D(a,t,"missing-multi-factor-info"),(await EM(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await wL(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function VM(t,e){await wv(V(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms=class ih{constructor(e){this.providerId=ih.PROVIDER_ID,this.auth=We(e)}verifyPhoneNumber(e,n){return Jd(this.auth,e,V(n))}static credential(e,n){return Cs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return ih.credentialFromTaggedObject(n)}static credentialFromError(e){return ih.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Cs._fromTokenResponse(n,r):null}};Ms.PROVIDER_ID="phone";Ms.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Zs(t,e){return e?pn(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cv extends ka{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BM(t){return gk(t.auth,new Cv(t),t.bypassAuthState)}function zM(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),mk(n,new Cv(t),t.bypassAuthState)}async function jM(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),wv(n,new Cv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BM;case"linkViaPopup":case"linkViaRedirect":return jM;case"reauthViaPopup":case"reauthViaRedirect":return zM;default:ht(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=new Fu(2e3,1e4);async function Dk(t,e,n){const r=We(t);Sa(t,e,Wr);const i=Zs(r,n);return new br(r,"signInViaPopup",e,i).executeNotNull()}async function KM(t,e,n){const r=V(t);Sa(r.auth,e,Wr);const i=Zs(r.auth,n);return new br(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function WM(t,e,n){const r=V(t);Sa(r.auth,e,Wr);const i=Zs(r.auth,n);return new br(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class br extends Nk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qM.get())};e()}}br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM="pendingRedirect",Dl=new Map;class GM extends Nk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dl.get(this.auth._key());if(!e){try{const r=await QM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dl.set(this.auth._key(),e)}return this.bypassAuthState||Dl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QM(t,e){const n=xk(e),r=Rk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function bv(t,e){return Rk(t)._set(xk(e),"true")}function YM(){Dl.clear()}function Av(t,e){Dl.set(t._key(),e)}function Rk(t){return pn(t._redirectPersistence)}function xk(t){return ks(HM,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XM(t,e,n){return JM(t,e,n)}async function JM(t,e,n){const r=We(t);Sa(t,e,Wr),await r._initializationPromise;const i=Zs(r,n);return await bv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function ZM(t,e,n){return e2(t,e,n)}async function e2(t,e,n){const r=V(t);Sa(r.auth,e,Wr),await r.auth._initializationPromise;const i=Zs(r.auth,n);await bv(i,r.auth);const s=await Pk(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function t2(t,e,n){return n2(t,e,n)}async function n2(t,e,n){const r=V(t);Sa(r.auth,e,Wr),await r.auth._initializationPromise;const i=Zs(r.auth,n);await Hd(!1,r,e.providerId),await bv(i,r.auth);const s=await Pk(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function r2(t,e){return await We(t)._initializationPromise,Zd(t,e,!1)}async function Zd(t,e,n=!1){const r=We(t),i=Zs(r,e),o=await new GM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Pk(t){const e=Bu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=10*60*1e3;class Ok{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!s2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=i2&&this.cachedEventUids.clear(),this.cachedEventUids.has(eI(e))}saveEventToCache(e){this.cachedEventUids.add(eI(e)),this.lastProcessedEventTime=Date.now()}}function eI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function s2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(t,e={}){return rt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a2=/^https?/;async function l2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mk(t);for(const n of e)try{if(u2(n))return}catch{}ht(t,"unauthorized-domain")}function u2(t){const e=au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!a2.test(n))return!1;if(o2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const c2=new Fu(3e4,6e4);function tI(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function h2(t){return new Promise((e,n)=>{var r,i,s;function o(){tI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tI(),n(Tt(t,"network-request-failed"))},timeout:c2.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ye().gapi)===null||s===void 0)&&s.load)o();else{const a=ak("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(Tt(t,"network-request-failed"))},vv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sh=null,e})}let sh=null;function d2(t){return sh=sh||h2(t),sh}/**
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
 */const f2=new Fu(5e3,15e3),p2="__/auth/iframe",m2="emulator/auth/iframe",g2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function v2(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gv(e,m2):`https://${t.config.authDomain}/${p2}`,r={apiKey:e.apiKey,appName:t.name,v:qr},i=y2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ia(r).slice(1)}`}async function w2(t){const e=await d2(t),n=Ye().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:v2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:g2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tt(t,"network-request-failed"),a=Ye().setTimeout(()=>{s(o)},f2.get());function l(){Ye().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const _2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},I2=500,E2=600,S2="_blank",T2="http://localhost";class nI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k2(t,e,n,r=I2,i=E2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Me().toLowerCase();n&&(a=ZT(u)?S2:n),JT(u)&&(e=e||T2,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(ZO(u)&&a!=="_self")return C2(e||"",a),new nI(null);const h=window.open(e||"",a,c);D(h,t,"popup-blocked");try{h.focus()}catch{}return new nI(h)}function C2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const b2="__/auth/handler",A2="emulator/auth/handler",N2=encodeURIComponent("fac");async function ig(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qr,eventId:i};if(e instanceof Wr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Ca){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${N2}=${encodeURIComponent(l)}`:"";return`${D2(t)}?${Ia(a).slice(1)}${u}`}function D2({config:t}){return t.emulator?gv(t,A2):`https://${t.authDomain}/${b2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="webStorageSupport";class R2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xi,this._completeRedirectFn=Zd,this._overrideRedirectResult=Av}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ig(e,n,r,au(),i);return k2(e,o,Bu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ig(e,n,r,au(),i);return fM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await w2(e),r=new Ok(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cp,{type:Cp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cp];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rk()||yv()||Ta()}}const $k=R2;class x2{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return rr("unexpected MultiFactorSessionType")}}}class Nv extends x2{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Nv(e)}_finalizeEnroll(e,n,r){return sM(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return SM(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Fk{constructor(){}static assertion(e){return Nv._fromCredential(e)}}Fk.FACTOR_ID="phone";var rI="@firebase/auth",iI="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function L2(t){an(new bt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),D(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ik(t)},u=new lL(r,i,s,l);return cL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),an(new bt("auth-internal",e=>{const n=We(e.getProvider("auth").getImmediate());return(r=>new P2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(rI,iI,O2(t)),St(rI,iI,"esm2017")}/**
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
 */const M2=5*60,$2=NT("authIdTokenMaxAge")||M2;let sI=null;const F2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$2)return;const i=n==null?void 0:n.token;sI!==i&&(sI=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function U2(t=jd()){const e=Ki(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uL(t,{popupRedirectResolver:$k,persistence:[ia,Qd,xi]}),r=NT("authTokenSyncURL");if(r){const s=F2(r);nM(n,s,()=>s(n.currentUser)),tM(n,o=>s(o))}const i=bT("auth");return i&&uk(n,`http://${i}`),n}L2("Browser");/**
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
 */function $s(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=2e3;async function B2(t,e,n){var r;const{BuildInfo:i}=$s();jn(e.sessionId,"AuthEvent did not contain a session ID");const s=await W2(e.sessionId),o={};return Ta()?o.ibi=i.packageName:Uu()?o.apn=i.packageName:ht(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,ig(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function z2(t){const{BuildInfo:e}=$s(),n={};Ta()?n.iosBundleId=e.packageName:Uu()?n.androidPackageName=e.packageName:ht(t,"operation-not-supported-in-this-environment"),await Mk(t,n)}function j2(t){const{cordova:e}=$s();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,JO()?"_blank":"_system","location=yes"),n(i)})})}async function q2(t,e,n){const{cordova:r}=$s();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Tt(t,"redirect-cancelled-by-user"))},V2))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Uu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function K2(t){var e,n,r,i,s,o,a,l,u,c;const h=$s();D(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),D(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),D(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((c=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function W2(t){const e=H2(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function H2(t){if(jn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=20;class Q2 extends Ok{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Y2(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Z2(),postBody:null,tenantId:t.tenantId,error:Tt(t,"no-auth-event")}}function X2(t,e){return sg()._set(og(t),e)}async function oI(t){const e=await sg()._get(og(t));return e&&await sg()._remove(og(t)),e}function J2(t,e){var n,r;const i=t$(e);if(i.includes("/__/auth/callback")){const s=oh(i),o=s.firebaseError?e$(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Tt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function Z2(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<G2;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function sg(){return pn(Qd)}function og(t){return ks("authEvent",t.config.apiKey,t.name)}function e$(t){try{return JSON.parse(t)}catch{return null}}function t$(t){const e=oh(t),n=e.link?decodeURIComponent(e.link):void 0,r=oh(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return oh(i).link||i||r||n||t}function oh(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return xo(n.join("?"))}/**
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
 */const n$=500;class r${constructor(){this._redirectPersistence=xi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Zd,this._overrideRedirectResult=Av}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new Q2(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ht(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){K2(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),YM(),await this._originValidation(e);const o=Y2(e,r,i);await X2(e,o);const a=await B2(e,o,n),l=await j2(a);return q2(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z2(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=$s(),o=setTimeout(async()=>{await oI(e),n.onEvent(aI())},n$),a=async c=>{clearTimeout(o);const h=await oI(e);let d=null;h&&(c!=null&&c.url)&&(d=J2(h,c.url)),n.onEvent(d||aI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;$s().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(h){console.error(h)}}}}const i$=r$;function aI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Tt("no-auth-event")}}/**
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
 */function s$(t,e){We(t)._logFramework(e)}var o$="@firebase/auth-compat",a$="0.4.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l$=1e3;function Rl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function u$(){return Rl()==="http:"||Rl()==="https:"}function Uk(t=Me()){return!!((Rl()==="file:"||Rl()==="ionic:"||Rl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function c$(){return cv()||uv()}function h$(){return xT()&&(document==null?void 0:document.documentMode)===11}function d$(t=Me()){return/Edge\/\d+/.test(t)}function f$(t=Me()){return h$()||d$(t)}function Vk(){try{const t=self.localStorage,e=Bu();if(t)return t.setItem(e,"1"),t.removeItem(e),f$()?Os():!0}catch{return Dv()&&Os()}return!1}function Dv(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function bp(){return(u$()||RT()||Uk())&&!c$()&&Vk()&&!Dv()}function Bk(){return Uk()&&typeof document<"u"}async function p$(){return Bk()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},l$);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function m$(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={LOCAL:"local",NONE:"none",SESSION:"session"},Ya=D,zk="persistence";function g$(t,e){if(Ya(Object.values(dn).includes(e),t,"invalid-persistence-type"),cv()){Ya(e!==dn.SESSION,t,"unsupported-persistence-type");return}if(uv()){Ya(e===dn.NONE,t,"unsupported-persistence-type");return}if(Dv()){Ya(e===dn.NONE||e===dn.LOCAL&&Os(),t,"unsupported-persistence-type");return}Ya(e===dn.NONE||Vk(),t,"unsupported-persistence-type")}async function ag(t){await t._initializationPromise;const e=jk(),n=ks(zk,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function y$(t,e){const n=jk();if(!n)return[];const r=ks(zk,t,e);switch(n.getItem(r)){case dn.NONE:return[na];case dn.LOCAL:return[ia,xi];case dn.SESSION:return[xi];default:return[]}}function jk(){var t;try{return((t=m$())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v$=D;class fi{constructor(){this.browserResolver=pn($k),this.cordovaResolver=pn(i$),this.underlyingResolver=null,this._redirectPersistence=xi,this._completeRedirectFn=Zd,this._overrideRedirectResult=Av}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Bk()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return v$(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await p$();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t){return t.unwrap()}function w$(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _$(t){return Kk(t)}function I$(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new E$(t,rM(t,e))}else if(r){const i=Kk(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Kk(t){const{_tokenResponse:e}=t instanceof Et?t.customData:t;if(!e)return null;if(!(t instanceof Et)&&"temporaryProof"in e&&"phoneNumber"in e)return Ms.credentialFromResult(t);const n=e.providerId;if(!n||n===Qa.PASSWORD)return null;let r;switch(n){case Qa.GOOGLE:r=Mn;break;case Qa.FACEBOOK:r=Jn;break;case Qa.GITHUB:r=Zn;break;case Qa.TWITTER:r=er;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ra._create(n,a):dr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Bo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Et?r.credentialFromError(t):r.credentialFromResult(t)}function Yt(t,e){return e.catch(n=>{throw n instanceof Et&&I$(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:_$(n),additionalUserInfo:eM(n),user:Ar.getOrCreate(i)}})}async function lg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Yt(t,n.confirm(r))}}class E${constructor(e,n){this.resolver=n,this.auth=w$(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Yt(qk(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this._delegate=e,this.multiFactor=aM(e)}static getOrCreate(e){return Ar.USER_MAP.has(e)||Ar.USER_MAP.set(e,new Ar(e)),Ar.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Yt(this.auth,yk(this._delegate,e))}async linkWithPhoneNumber(e,n){return lg(this.auth,FM(this._delegate,e,n))}async linkWithPopup(e){return Yt(this.auth,WM(this._delegate,e,fi))}async linkWithRedirect(e){return await ag(We(this.auth)),t2(this._delegate,e,fi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Yt(this.auth,vk(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return lg(this.auth,UM(this._delegate,e,n))}reauthenticateWithPopup(e){return Yt(this.auth,KM(this._delegate,e,fi))}async reauthenticateWithRedirect(e){return await ag(We(this.auth)),ZM(this._delegate,e,fi)}sendEmailVerification(e){return jL(this._delegate,e)}async unlink(e){return await NL(this._delegate,e),this}updateEmail(e){return HL(this._delegate,e)}updatePassword(e){return GL(this._delegate,e)}updatePhoneNumber(e){return VM(this._delegate,e)}updateProfile(e){return WL(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return qL(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Ar.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=D;class ug{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Xa(r,"invalid-api-key",{appName:e.name}),Xa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?fi:void 0;this._delegate=n.initialize({options:{persistence:S$(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(PO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Ar.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){uk(this._delegate,e,n)}applyActionCode(e){return OL(this._delegate,e)}checkActionCode(e){return wk(this._delegate,e)}confirmPasswordReset(e,n){return PL(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Yt(this._delegate,ML(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return zL(this._delegate,e)}isSignInWithEmailLink(e){return UL(this._delegate,e)}async getRedirectResult(){Xa(bp(),this._delegate,"operation-not-supported-in-this-environment");const e=await r2(this._delegate,fi);return e?Yt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){s$(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=lI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=lI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return FL(this._delegate,e,n)}sendPasswordResetEmail(e,n){return xL(this._delegate,e,n||void 0)}async setPersistence(e){g$(this._delegate,e);let n;switch(e){case dn.SESSION:n=xi;break;case dn.LOCAL:n=await pn(ia)._isAvailable()?ia:Qd;break;case dn.NONE:n=na;break;default:return ht("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Yt(this._delegate,AL(this._delegate))}signInWithCredential(e){return Yt(this._delegate,Gd(this._delegate,e))}signInWithCustomToken(e){return Yt(this._delegate,RL(this._delegate,e))}signInWithEmailAndPassword(e,n){return Yt(this._delegate,$L(this._delegate,e,n))}signInWithEmailLink(e,n){return Yt(this._delegate,VL(this._delegate,e,n))}signInWithPhoneNumber(e,n){return lg(this._delegate,$M(this._delegate,e,n))}async signInWithPopup(e){return Xa(bp(),this._delegate,"operation-not-supported-in-this-environment"),Yt(this._delegate,Dk(this._delegate,e,fi))}async signInWithRedirect(e){return Xa(bp(),this._delegate,"operation-not-supported-in-this-environment"),await ag(this._delegate),XM(this._delegate,e,fi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return LL(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ug.Persistence=dn;function lI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Ar.getOrCreate(o)),error:e,complete:n}}function S$(t,e){const n=y$(t,e);if(typeof self<"u"&&!n.includes(ia)&&n.push(ia),typeof window<"u")for(const r of[Qd,xi])n.includes(r)||n.push(r);return n.includes(na)||n.push(na),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(){this.providerId="phone",this._delegate=new Ms(qk(Ea.auth()))}static credential(e,n){return Ms.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Rv.PHONE_SIGN_IN_METHOD=Ms.PHONE_SIGN_IN_METHOD;Rv.PROVIDER_ID=Ms.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T$=D;class k${constructor(e,n,r=Ea.app()){var i;T$((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new LM(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C$="auth-compat";function b$(t){t.INTERNAL.registerComponent(new bt(C$,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new ug(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:co.EMAIL_SIGNIN,PASSWORD_RESET:co.PASSWORD_RESET,RECOVER_EMAIL:co.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:co.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:co.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:co.VERIFY_EMAIL}},EmailAuthProvider:Wi,FacebookAuthProvider:Jn,GithubAuthProvider:Zn,GoogleAuthProvider:Mn,OAuthProvider:Bo,SAMLAuthProvider:qh,PhoneAuthProvider:Rv,PhoneMultiFactorGenerator:Fk,RecaptchaVerifier:k$,TwitterAuthProvider:er,Auth:ug,AuthCredential:ka,Error:Et}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(o$,a$)}b$(Ea);const A$=(t,e)=>e.some(n=>t instanceof n);let uI,cI;function N$(){return uI||(uI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D$(){return cI||(cI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wk=new WeakMap,cg=new WeakMap,Hk=new WeakMap,Ap=new WeakMap,xv=new WeakMap;function R$(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ki(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wk.set(n,t)}).catch(()=>{}),xv.set(e,t),e}function x$(t){if(cg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cg.set(t,e)}let hg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hk.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ki(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function P$(t){hg=t(hg)}function O$(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Np(this),e,...n);return Hk.set(r,e.sort?e.sort():[e]),ki(r)}:D$().includes(t)?function(...e){return t.apply(Np(this),e),ki(Wk.get(this))}:function(...e){return ki(t.apply(Np(this),e))}}function L$(t){return typeof t=="function"?O$(t):(t instanceof IDBTransaction&&x$(t),A$(t,N$())?new Proxy(t,hg):t)}function ki(t){if(t instanceof IDBRequest)return R$(t);if(Ap.has(t))return Ap.get(t);const e=L$(t);return e!==t&&(Ap.set(t,e),xv.set(e,t)),e}const Np=t=>xv.get(t);function M$(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ki(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ki(o.result),l.oldVersion,l.newVersion,ki(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const $$=["get","getKey","getAll","getAllKeys","count"],F$=["put","add","delete","clear"],Dp=new Map;function hI(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dp.get(e))return Dp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=F$.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$$.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Dp.set(e,s),s}P$(t=>({...t,get:(e,n,r)=>hI(e,n)||t.get(e,n,r),has:(e,n)=>!!hI(e,n)||t.has(e,n)}));const Gk="@firebase/installations",Pv="0.6.4";/**
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
 */const Qk=1e4,Yk=`w:${Pv}`,Xk="FIS_v2",U$="https://firebaseinstallations.googleapis.com/v1",V$=60*60*1e3,B$="installations",z$="Installations";/**
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
 */const j$={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Fs=new gr(B$,z$,j$);function Jk(t){return t instanceof Et&&t.code.includes("request-failed")}/**
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
 */function Zk({projectId:t}){return`${U$}/projects/${t}/installations`}function eC(t){return{token:t.token,requestStatus:2,expiresIn:K$(t.expiresIn),creationTime:Date.now()}}async function tC(t,e){const r=(await e.json()).error;return Fs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function nC({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function q$(t,{refreshToken:e}){const n=nC(t);return n.append("Authorization",W$(e)),n}async function rC(t){const e=await t();return e.status>=500&&e.status<600?t():e}function K$(t){return Number(t.replace("s","000"))}function W$(t){return`${Xk} ${t}`}/**
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
 */async function H$({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Zk(t),i=nC(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Xk,appId:t.appId,sdkVersion:Yk},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await rC(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:eC(u.authToken)}}else throw await tC("Create Installation",l)}/**
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
 */function iC(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function G$(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Q$=/^[cdef][\w-]{21}$/,dg="";function Y$(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=X$(t);return Q$.test(n)?n:dg}catch{return dg}}function X$(t){return G$(t).substr(0,22)}/**
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
 */function ef(t){return`${t.appName}!${t.appId}`}/**
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
 */const sC=new Map;function oC(t,e){const n=ef(t);aC(n,e),J$(n,e)}function aC(t,e){const n=sC.get(t);if(n)for(const r of n)r(e)}function J$(t,e){const n=Z$();n&&n.postMessage({key:t,fid:e}),eF()}let ys=null;function Z$(){return!ys&&"BroadcastChannel"in self&&(ys=new BroadcastChannel("[Firebase] FID Change"),ys.onmessage=t=>{aC(t.data.key,t.data.fid)}),ys}function eF(){sC.size===0&&ys&&(ys.close(),ys=null)}/**
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
 */const tF="firebase-installations-database",nF=1,Us="firebase-installations-store";let Rp=null;function Ov(){return Rp||(Rp=M$(tF,nF,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Us)}}})),Rp}async function Gh(t,e){const n=ef(t),i=(await Ov()).transaction(Us,"readwrite"),s=i.objectStore(Us),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&oC(t,e.fid),e}async function lC(t){const e=ef(t),r=(await Ov()).transaction(Us,"readwrite");await r.objectStore(Us).delete(e),await r.done}async function tf(t,e){const n=ef(t),i=(await Ov()).transaction(Us,"readwrite"),s=i.objectStore(Us),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&oC(t,a.fid),a}/**
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
 */async function Lv(t){let e;const n=await tf(t.appConfig,r=>{const i=rF(r),s=iF(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===dg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function rF(t){const e=t||{fid:Y$(),registrationStatus:0};return uC(e)}function iF(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Fs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=sF(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:oF(t)}:{installationEntry:e}}async function sF(t,e){try{const n=await H$(t,e);return Gh(t.appConfig,n)}catch(n){throw Jk(n)&&n.customData.serverCode===409?await lC(t.appConfig):await Gh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function oF(t){let e=await dI(t.appConfig);for(;e.registrationStatus===1;)await iC(100),e=await dI(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Lv(t);return r||n}return e}function dI(t){return tf(t,e=>{if(!e)throw Fs.create("installation-not-found");return uC(e)})}function uC(t){return aF(t)?{fid:t.fid,registrationStatus:0}:t}function aF(t){return t.registrationStatus===1&&t.registrationTime+Qk<Date.now()}/**
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
 */async function lF({appConfig:t,heartbeatServiceProvider:e},n){const r=uF(t,n),i=q$(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Yk,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await rC(()=>fetch(r,a));if(l.ok){const u=await l.json();return eC(u)}else throw await tC("Generate Auth Token",l)}function uF(t,{fid:e}){return`${Zk(t)}/${e}/authTokens:generate`}/**
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
 */async function Mv(t,e=!1){let n;const r=await tf(t.appConfig,s=>{if(!cC(s))throw Fs.create("not-registered");const o=s.authToken;if(!e&&dF(o))return s;if(o.requestStatus===1)return n=cF(t,e),s;{if(!navigator.onLine)throw Fs.create("app-offline");const a=pF(s);return n=hF(t,a),a}});return n?await n:r.authToken}async function cF(t,e){let n=await fI(t.appConfig);for(;n.authToken.requestStatus===1;)await iC(100),n=await fI(t.appConfig);const r=n.authToken;return r.requestStatus===0?Mv(t,e):r}function fI(t){return tf(t,e=>{if(!cC(e))throw Fs.create("not-registered");const n=e.authToken;return mF(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function hF(t,e){try{const n=await lF(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Gh(t.appConfig,r),n}catch(n){if(Jk(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await lC(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Gh(t.appConfig,r)}throw n}}function cC(t){return t!==void 0&&t.registrationStatus===2}function dF(t){return t.requestStatus===2&&!fF(t)}function fF(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+V$}function pF(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mF(t){return t.requestStatus===1&&t.requestTime+Qk<Date.now()}/**
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
 */async function gF(t){const e=t,{installationEntry:n,registrationPromise:r}=await Lv(e);return r?r.catch(console.error):Mv(e).catch(console.error),n.fid}/**
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
 */async function yF(t,e=!1){const n=t;return await vF(n),(await Mv(n,e)).token}async function vF(t){const{registrationPromise:e}=await Lv(t);e&&await e}/**
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
 */function wF(t){if(!t||!t.options)throw xp("App Configuration");if(!t.name)throw xp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw xp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xp(t){return Fs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC="installations",_F="installations-internal",IF=t=>{const e=t.getProvider("app").getImmediate(),n=wF(e),r=Ki(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},EF=t=>{const e=t.getProvider("app").getImmediate(),n=Ki(e,hC).getImmediate();return{getId:()=>gF(n),getToken:i=>yF(n,i)}};function SF(){an(new bt(hC,IF,"PUBLIC")),an(new bt(_F,EF,"PRIVATE"))}SF();St(Gk,Pv);St(Gk,Pv,"esm2017");const TF=(t,e)=>e.some(n=>t instanceof n);let pI,mI;function kF(){return pI||(pI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CF(){return mI||(mI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dC=new WeakMap,fg=new WeakMap,fC=new WeakMap,Pp=new WeakMap,$v=new WeakMap;function bF(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dC.set(n,t)}).catch(()=>{}),$v.set(e,t),e}function AF(t){if(fg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fg.set(t,e)}let pg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fC.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NF(t){pg=t(pg)}function DF(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Op(this),e,...n);return fC.set(r,e.sort?e.sort():[e]),Lr(r)}:CF().includes(t)?function(...e){return t.apply(Op(this),e),Lr(dC.get(this))}:function(...e){return Lr(t.apply(Op(this),e))}}function RF(t){return typeof t=="function"?DF(t):(t instanceof IDBTransaction&&AF(t),TF(t,kF())?new Proxy(t,pg):t)}function Lr(t){if(t instanceof IDBRequest)return bF(t);if(Pp.has(t))return Pp.get(t);const e=RF(t);return e!==t&&(Pp.set(t,e),$v.set(e,t)),e}const Op=t=>$v.get(t);function nf(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Lr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Lr(o.result),l.oldVersion,l.newVersion,Lr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function qo(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),Lr(n).then(()=>{})}const xF=["get","getKey","getAll","getAllKeys","count"],PF=["put","add","delete","clear"],Lp=new Map;function gI(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lp.get(e))return Lp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PF.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xF.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Lp.set(e,s),s}NF(t=>({...t,get:(e,n,r)=>gI(e,n)||t.get(e,n,r),has:(e,n)=>!!gI(e,n)||t.has(e,n)}));/**
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
 */const OF="/firebase-messaging-sw.js",LF="/firebase-cloud-messaging-push-scope",pC="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",MF="https://fcmregistrations.googleapis.com/v1",mC="google.c.a.c_id",$F="google.c.a.c_l",FF="google.c.a.ts",UF="google.c.a.e";var yI;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(yI||(yI={}));/**
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
 */var hu;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(hu||(hu={}));/**
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
 */function Er(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function VF(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Mp="fcm_token_details_db",BF=5,vI="fcm_token_object_Store";async function zF(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Mp))return null;let e=null;return(await nf(Mp,BF,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(vI))return;const l=o.objectStore(vI),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(a=c.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:Er(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Er(c.auth),p256dh:Er(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Er(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Er(c.auth),p256dh:Er(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Er(c.vapidKey)}}}}}})).close(),await qo(Mp),await qo("fcm_vapid_details_db"),await qo("undefined"),jF(e)?e:null}function jF(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const qF="firebase-messaging-database",KF=1,Vs="firebase-messaging-store";let $p=null;function Fv(){return $p||($p=nf(qF,KF,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vs)}}})),$p}async function gC(t){const e=Vv(t),r=await(await Fv()).transaction(Vs).objectStore(Vs).get(e);if(r)return r;{const i=await zF(t.appConfig.senderId);if(i)return await Uv(t,i),i}}async function Uv(t,e){const n=Vv(t),i=(await Fv()).transaction(Vs,"readwrite");return await i.objectStore(Vs).put(e,n),await i.done,e}async function WF(t){const e=Vv(t),r=(await Fv()).transaction(Vs,"readwrite");await r.objectStore(Vs).delete(e),await r.done}function Vv({appConfig:t}){return t.appId}/**
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
 */const HF={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},qt=new gr("messaging","Messaging",HF);/**
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
 */async function GF(t,e){const n=await zv(t),r=vC(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Bv(t.appConfig),i)).json()}catch(o){throw qt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw qt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw qt.create("token-subscribe-no-token");return s.token}async function QF(t,e){const n=await zv(t),r=vC(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Bv(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw qt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw qt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw qt.create("token-update-no-token");return s.token}async function yC(t,e){const r={method:"DELETE",headers:await zv(t)};try{const s=await(await fetch(`${Bv(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw qt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw qt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Bv({projectId:t}){return`${MF}/projects/${t}/registrations`}async function zv({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function vC({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==pC&&(i.web.applicationPubKey=r),i}/**
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
 */const YF=7*24*60*60*1e3;async function XF(t){const e=await ZF(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Er(e.getKey("auth")),p256dh:Er(e.getKey("p256dh"))},r=await gC(t.firebaseDependencies);if(r){if(eU(r.subscriptionOptions,n))return Date.now()>=r.createTime+YF?JF(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await yC(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return wI(t.firebaseDependencies,n)}else return wI(t.firebaseDependencies,n)}async function wC(t){const e=await gC(t.firebaseDependencies);e&&(await yC(t.firebaseDependencies,e.token),await WF(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function JF(t,e){try{const n=await QF(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Uv(t.firebaseDependencies,r),n}catch(n){throw await wC(t),n}}async function wI(t,e){const r={token:await GF(t,e),createTime:Date.now(),subscriptionOptions:e};return await Uv(t,r),r.token}async function ZF(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:VF(e)})}function eU(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return tU(e,t),nU(e,t),rU(e,t),e}function tU(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function nU(t,e){e.data&&(t.data=e.data)}function rU(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function iU(t){return typeof t=="object"&&!!t&&mC in t}/**
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
 */_C("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");_C("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function _C(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function sU(t){if(!t||!t.options)throw Fp("App Configuration Object");if(!t.name)throw Fp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Fp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Fp(t){return qt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oU=class{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=sU(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t){try{t.swRegistration=await navigator.serviceWorker.register(OF,{scope:LF}),t.swRegistration.update().catch(()=>{})}catch(e){throw qt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aU(t,e){if(!e&&!t.swRegistration&&await IC(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw qt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lU(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=pC)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e){if(!navigator)throw qt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw qt.create("permission-blocked");return await lU(t,e==null?void 0:e.vapidKey),await aU(t,e==null?void 0:e.serviceWorkerRegistration),XF(t)}/**
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
 */async function uU(t,e,n){const r=cU(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[mC],message_name:n[$F],message_time:n[FF],message_device_time:Math.floor(Date.now()/1e3)})}function cU(t){switch(t){case hu.NOTIFICATION_CLICKED:return"notification_open";case hu.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function hU(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===hu.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(_I(n)):t.onMessageHandler.next(_I(n)));const r=n.data;iU(r)&&r[UF]==="1"&&await uU(t,n.messageType,r)}const II="@firebase/messaging",EI="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dU=t=>{const e=new oU(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>hU(e,n)),e},fU=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>EC(e,r)}};function pU(){an(new bt("messaging",dU,"PUBLIC")),an(new bt("messaging-internal",fU,"PRIVATE")),St(II,EI),St(II,EI,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mU(t){if(!navigator)throw qt.create("only-available-in-window");return t.swRegistration||await IC(t),wC(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gU(t,e){if(!navigator)throw qt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}async function yU(t,e){return t=V(t),EC(t,e)}function vU(t){return t=V(t),mU(t)}function wU(t,e){return t=V(t),gU(t,e)}pU();/**
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
 */const SC="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",_U="https://fcmregistrations.googleapis.com/v1",TC="FCM_MSG",IU="google.c.a.c_id",EU=3,SU=1;var Qh;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Qh||(Qh={}));/**
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
 */var Yh;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Yh||(Yh={}));/**
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
 */function Sr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function TU(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Up="fcm_token_details_db",kU=5,SI="fcm_token_object_Store";async function CU(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Up))return null;let e=null;return(await nf(Up,kU,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(SI))return;const l=o.objectStore(SI),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(a=c.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:Sr(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Sr(c.auth),p256dh:Sr(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Sr(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Sr(c.auth),p256dh:Sr(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Sr(c.vapidKey)}}}}}})).close(),await qo(Up),await qo("fcm_vapid_details_db"),await qo("undefined"),bU(e)?e:null}function bU(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const AU="firebase-messaging-database",NU=1,Bs="firebase-messaging-store";let Vp=null;function jv(){return Vp||(Vp=nf(AU,NU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bs)}}})),Vp}async function qv(t){const e=Wv(t),r=await(await jv()).transaction(Bs).objectStore(Bs).get(e);if(r)return r;{const i=await CU(t.appConfig.senderId);if(i)return await Kv(t,i),i}}async function Kv(t,e){const n=Wv(t),i=(await jv()).transaction(Bs,"readwrite");return await i.objectStore(Bs).put(e,n),await i.done,e}async function DU(t){const e=Wv(t),r=(await jv()).transaction(Bs,"readwrite");await r.objectStore(Bs).delete(e),await r.done}function Wv({appConfig:t}){return t.appId}/**
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
 */const RU={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},ur=new gr("messaging","Messaging",RU);/**
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
 */async function xU(t,e){const n=await Gv(t),r=CC(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Hv(t.appConfig),i)).json()}catch(o){throw ur.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw ur.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw ur.create("token-subscribe-no-token");return s.token}async function PU(t,e){const n=await Gv(t),r=CC(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Hv(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw ur.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw ur.create("token-update-failed",{errorInfo:o})}if(!s.token)throw ur.create("token-update-no-token");return s.token}async function kC(t,e){const r={method:"DELETE",headers:await Gv(t)};try{const s=await(await fetch(`${Hv(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw ur.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw ur.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Hv({projectId:t}){return`${_U}/projects/${t}/registrations`}async function Gv({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function CC({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==SC&&(i.web.applicationPubKey=r),i}/**
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
 */const OU=7*24*60*60*1e3;async function LU(t){const e=await $U(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Sr(e.getKey("auth")),p256dh:Sr(e.getKey("p256dh"))},r=await qv(t.firebaseDependencies);if(r){if(FU(r.subscriptionOptions,n))return Date.now()>=r.createTime+OU?MU(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await kC(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return TI(t.firebaseDependencies,n)}else return TI(t.firebaseDependencies,n)}async function mg(t){const e=await qv(t.firebaseDependencies);e&&(await kC(t.firebaseDependencies,e.token),await DU(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function MU(t,e){try{const n=await PU(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Kv(t.firebaseDependencies,r),n}catch(n){throw await mg(t),n}}async function TI(t,e){const r={token:await xU(t,e),createTime:Date.now(),subscriptionOptions:e};return await Kv(t,r),r.token}async function $U(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:TU(e)})}function FU(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UU(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return VU(e,t),BU(e,t),zU(e,t),e}function VU(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function BU(t,e){e.data&&(t.data=e.data)}function zU(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function jU(t){return typeof t=="object"&&!!t&&IU in t}/**
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
 */function qU(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */bC("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");bC("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");async function KU(t,e){const n=WU(e,await t.firebaseDependencies.installations.getId());HU(t,n)}function WU(t,e){var n,r;const i={};return t.from&&(i.project_number=t.from),t.fcmMessageId&&(i.message_id=t.fcmMessageId),i.instance_id=e,t.notification?i.message_type=Qh.DISPLAY_NOTIFICATION.toString():i.message_type=Qh.DATA_MESSAGE.toString(),i.sdk_platform=EU.toString(),i.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),t.collapse_key&&(i.collapse_key=t.collapse_key),i.event=SU.toString(),!((n=t.fcmOptions)===null||n===void 0)&&n.analytics_label&&(i.analytics_label=(r=t.fcmOptions)===null||r===void 0?void 0:r.analytics_label),i}function HU(t,e){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(e),t.logEvents.push(n)}function bC(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */async function GU(t,e){var n,r;const{newSubscription:i}=t;if(!i){await mg(e);return}const s=await qv(e.firebaseDependencies);await mg(e),e.vapidKey=(r=(n=s==null?void 0:s.subscriptionOptions)===null||n===void 0?void 0:n.vapidKey)!==null&&r!==void 0?r:SC,await LU(e)}async function QU(t,e){const n=JU(t);if(!n)return;e.deliveryMetricsExportedToBigQueryEnabled&&await KU(e,n);const r=await AC();if(eV(r))return tV(r,n);if(n.notification&&await nV(XU(n)),!!e&&e.onBackgroundMessageHandler){const i=UU(n);typeof e.onBackgroundMessageHandler=="function"?await e.onBackgroundMessageHandler(i):e.onBackgroundMessageHandler.next(i)}}async function YU(t){var e,n;const r=(n=(e=t.notification)===null||e===void 0?void 0:e.data)===null||n===void 0?void 0:n[TC];if(r){if(t.action)return}else return;t.stopImmediatePropagation(),t.notification.close();const i=rV(r);if(!i)return;const s=new URL(i,self.location.href),o=new URL(self.location.origin);if(s.host!==o.host)return;let a=await ZU(s);if(a?a=await a.focus():(a=await self.clients.openWindow(i),await qU(3e3)),!!a)return r.messageType=Yh.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,a.postMessage(r)}function XU(t){const e=Object.assign({},t.notification);return e.data={[TC]:t},e}function JU({data:t}){if(!t)return null;try{return t.json()}catch{return null}}async function ZU(t){const e=await AC();for(const n of e){const r=new URL(n.url,self.location.href);if(t.host===r.host)return n}return null}function eV(t){return t.some(e=>e.visibilityState==="visible"&&!e.url.startsWith("chrome-extension://"))}function tV(t,e){e.isFirebaseMessaging=!0,e.messageType=Yh.PUSH_RECEIVED;for(const n of t)n.postMessage(e)}function AC(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function nV(t){var e;const{actions:n}=t,{maxActions:r}=Notification;return n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`),self.registration.showNotification((e=t.title)!==null&&e!==void 0?e:"",t)}function rV(t){var e,n,r;const i=(n=(e=t.fcmOptions)===null||e===void 0?void 0:e.link)!==null&&n!==void 0?n:(r=t.notification)===null||r===void 0?void 0:r.click_action;return i||(jU(t.data)?self.location.origin:null)}/**
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
 */function iV(t){if(!t||!t.options)throw Bp("App Configuration Object");if(!t.name)throw Bp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Bp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Bp(t){return ur.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=iV(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV=t=>{const e=new sV(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(QU(n,e))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(GU(n,e))}),self.addEventListener("notificationclick",n=>{n.waitUntil(YU(n))}),e};function aV(){an(new bt("messaging-sw",oV,"PUBLIC"))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(t,e){if(self.document!==void 0)throw ur.create("only-available-in-sw");return t.onBackgroundMessageHandler=e,()=>{t.onBackgroundMessageHandler=null}}function uV(t,e){return t=V(t),lV(t,e)}/**
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
 */aV();const cV="@firebase/messaging-compat",hV="0.2.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dV(){return self&&"ServiceWorkerGlobalScope"in self?pV():fV()}function fV(){return typeof window<"u"&&Os()&&uP()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function pV(){return Os()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}class kI{constructor(e,n){this.app=e,this._delegate=n,this.app=e,this._delegate=n}async getToken(e){return yU(this._delegate,e)}async deleteToken(){return vU(this._delegate)}onMessage(e){return wU(this._delegate,e)}onBackgroundMessage(e){return uV(this._delegate,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV=t=>self&&"ServiceWorkerGlobalScope"in self?new kI(t.getProvider("app-compat").getImmediate(),t.getProvider("messaging-sw").getImmediate()):new kI(t.getProvider("app-compat").getImmediate(),t.getProvider("messaging").getImmediate()),gV={isSupported:dV};function yV(){Ea.INTERNAL.registerComponent(new bt("messaging-compat",mV,"PUBLIC").setServiceProps(gV))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yV();Ea.registerVersion(cV,hV);var vV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Qv=Qv||{},Q=vV||self;function Xh(){}function rf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ju(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wV(t){return Object.prototype.hasOwnProperty.call(t,zp)&&t[zp]||(t[zp]=++_V)}var zp="closure_uid_"+(1e9*Math.random()>>>0),_V=0;function IV(t,e,n){return t.call.apply(t.bind,arguments)}function EV(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pt=IV:Pt=EV,Pt.apply(null,arguments)}function Dc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ft(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Hi(){this.s=this.s,this.o=this.o}var SV=0;Hi.prototype.s=!1;Hi.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),SV!=0)&&wV(this)};Hi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const NC=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function CI(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(rf(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ot.prototype.h=function(){this.defaultPrevented=!0};var TV=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",Xh,e),Q.removeEventListener("test",Xh,e)}catch{}return t}();function Jh(t){return/^[\s\xa0]*$/.test(t)}var bI=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function jp(t,e){return t<e?-1:t>e?1:0}function sf(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function tr(t){return sf().indexOf(t)!=-1}function Xv(t){return Xv[" "](t),t}Xv[" "]=Xh;function DC(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var kV=tr("Opera"),sa=tr("Trident")||tr("MSIE"),RC=tr("Edge"),gg=RC||sa,xC=tr("Gecko")&&!(sf().toLowerCase().indexOf("webkit")!=-1&&!tr("Edge"))&&!(tr("Trident")||tr("MSIE"))&&!tr("Edge"),CV=sf().toLowerCase().indexOf("webkit")!=-1&&!tr("Edge");function PC(){var t=Q.document;return t?t.documentMode:void 0}var Zh;e:{var qp="",Kp=function(){var t=sf();if(xC)return/rv:([^\);]+)(\)|;)/.exec(t);if(RC)return/Edge\/([\d\.]+)/.exec(t);if(sa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(CV)return/WebKit\/(\S+)/.exec(t);if(kV)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Kp&&(qp=Kp?Kp[1]:""),sa){var Wp=PC();if(Wp!=null&&Wp>parseFloat(qp)){Zh=String(Wp);break e}}Zh=qp}var bV={};function AV(){return DC(bV,9,function(){let t=0;const e=bI(String(Zh)).split("."),n=bI("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=jp(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||jp(i[2].length==0,s[2].length==0)||jp(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var yg;if(Q.document&&sa){var AI=PC();yg=AI||parseInt(Zh,10)||void 0}else yg=void 0;var NV=yg;function du(t,e){if(Ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xC){e:{try{Xv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:DV[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&du.$.h.call(this)}}ft(du,Ot);var DV={2:"touch",3:"pen",4:"mouse"};du.prototype.h=function(){du.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var qu="closure_listenable_"+(1e6*Math.random()|0),RV=0;function xV(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++RV,this.fa=this.ia=!1}function of(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Jv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function OC(t){const e={};for(const n in t)e[n]=t[n];return e}const NI="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function LC(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<NI.length;s++)n=NI[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function af(t){this.src=t,this.g={},this.h=0}af.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=wg(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new xV(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function vg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=NC(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(of(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Zv="closure_lm_"+(1e6*Math.random()|0),Hp={};function MC(t,e,n,r,i){if(r&&r.once)return FC(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)MC(t,e[s],n,r,i);return null}return n=nw(n),t&&t[qu]?t.O(e,n,ju(r)?!!r.capture:!!r,i):$C(t,e,n,!1,r,i)}function $C(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ju(i)?!!i.capture:!!i,a=tw(t);if(a||(t[Zv]=a=new af(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=PV(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)TV||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(VC(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PV(){function t(n){return e.call(t.src,t.listener,n)}const e=OV;return t}function FC(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)FC(t,e[s],n,r,i);return null}return n=nw(n),t&&t[qu]?t.P(e,n,ju(r)?!!r.capture:!!r,i):$C(t,e,n,!0,r,i)}function UC(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)UC(t,e[s],n,r,i);else r=ju(r)?!!r.capture:!!r,n=nw(n),t&&t[qu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=wg(s,n,r,i),-1<n&&(of(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=tw(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wg(e,n,r,i)),(n=-1<t?e[t]:null)&&ew(n))}function ew(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[qu])vg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(VC(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=tw(e))?(vg(n,t),n.h==0&&(n.src=null,e[Zv]=null)):of(t)}}}function VC(t){return t in Hp?Hp[t]:Hp[t]="on"+t}function OV(t,e){if(t.fa)t=!0;else{e=new du(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ew(t),t=n.call(r,e)}return t}function tw(t){return t=t[Zv],t instanceof af?t:null}var Gp="__closure_events_fn_"+(1e9*Math.random()>>>0);function nw(t){return typeof t=="function"?t:(t[Gp]||(t[Gp]=function(e){return t.handleEvent(e)}),t[Gp])}function dt(){Hi.call(this),this.i=new af(this),this.S=this,this.J=null}ft(dt,Hi);dt.prototype[qu]=!0;dt.prototype.removeEventListener=function(t,e,n,r){UC(this,t,e,n,r)};function kt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ot(e,t);else if(e instanceof Ot)e.target=e.target||t;else{var i=e;e=new Ot(r,t),LC(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Rc(o,r,!0,e)&&i}if(o=e.g=t,i=Rc(o,r,!0,e)&&i,i=Rc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Rc(o,r,!1,e)&&i}dt.prototype.N=function(){if(dt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)of(n[r]);delete t.g[e],t.h--}}this.J=null};dt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};dt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Rc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&vg(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var rw=Q.JSON.stringify;function LV(){var t=jC;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class MV{constructor(){this.h=this.g=null}add(e,n){const r=BC.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var BC=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new $V,t=>t.reset());class $V{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function FV(t){Q.setTimeout(()=>{throw t},0)}function zC(t,e){_g||UV(),Ig||(_g(),Ig=!0),jC.add(t,e)}var _g;function UV(){var t=Q.Promise.resolve(void 0);_g=function(){t.then(VV)}}var Ig=!1,jC=new MV;function VV(){for(var t;t=LV();){try{t.h.call(t.g)}catch(n){FV(n)}var e=BC;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ig=!1}function lf(t,e){dt.call(this),this.h=t||1,this.g=e||Q,this.j=Pt(this.qb,this),this.l=Date.now()}ft(lf,dt);M=lf.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),kt(this,"tick"),this.ga&&(iw(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function iw(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){lf.$.N.call(this),iw(this),delete this.g};function sw(t,e,n){if(typeof t=="function")n&&(t=Pt(t,n));else if(t&&typeof t.handleEvent=="function")t=Pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function qC(t){t.g=sw(()=>{t.g=null,t.i&&(t.i=!1,qC(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BV extends Hi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qC(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fu(t){Hi.call(this),this.h=t,this.g={}}ft(fu,Hi);var DI=[];function KC(t,e,n,r){Array.isArray(n)||(n&&(DI[0]=n.toString()),n=DI);for(var i=0;i<n.length;i++){var s=MC(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function WC(t){Jv(t.g,function(e,n){this.g.hasOwnProperty(n)&&ew(e)},t),t.g={}}fu.prototype.N=function(){fu.$.N.call(this),WC(this)};fu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function uf(){this.g=!0}uf.prototype.Ea=function(){this.g=!1};function zV(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function jV(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Po(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+KV(t,n)+(r?" "+r:"")})}function qV(t,e){t.info(function(){return"TIMEOUT: "+e})}uf.prototype.info=function(){};function KV(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return rw(n)}catch{return e}}var eo={},RI=null;function cf(){return RI=RI||new dt}eo.Ta="serverreachability";function HC(t){Ot.call(this,eo.Ta,t)}ft(HC,Ot);function pu(t){const e=cf();kt(e,new HC(e))}eo.STAT_EVENT="statevent";function GC(t,e){Ot.call(this,eo.STAT_EVENT,t),this.stat=e}ft(GC,Ot);function zt(t){const e=cf();kt(e,new GC(e,t))}eo.Ua="timingevent";function QC(t,e){Ot.call(this,eo.Ua,t),this.size=e}ft(QC,Ot);function Ku(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var hf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},YC={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ow(){}ow.prototype.h=null;function xI(t){return t.h||(t.h=t.i())}function XC(){}var Wu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function aw(){Ot.call(this,"d")}ft(aw,Ot);function lw(){Ot.call(this,"c")}ft(lw,Ot);var Eg;function df(){}ft(df,ow);df.prototype.g=function(){return new XMLHttpRequest};df.prototype.i=function(){return{}};Eg=new df;function Hu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new fu(this),this.P=WV,t=gg?125:void 0,this.V=new lf(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new JC}function JC(){this.i=null,this.g="",this.h=!1}var WV=45e3,Sg={},ed={};M=Hu.prototype;M.setTimeout=function(t){this.P=t};function Tg(t,e,n){t.L=1,t.v=pf(Br(e)),t.s=n,t.S=!0,ZC(t,null)}function ZC(t,e){t.G=Date.now(),Gu(t),t.A=Br(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),ab(n.i,"t",r),t.C=0,n=t.l.I,t.h=new JC,t.g=Ab(t.l,n?e:null,!t.s),0<t.O&&(t.M=new BV(Pt(t.Pa,t,t.g),t.O)),KC(t.U,t.g,"readystatechange",t.nb),e=t.I?OC(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),pu(),zV(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&Nr(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const c=Nr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||gg||this.g&&(this.h.h||this.g.ja()||MI(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?pu(3):pu(2)),ff(this);var n=this.g.da();this.aa=n;t:if(eb(this)){var r=MI(this.g);t="";var i=r.length,s=Nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vs(this),xl(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,jV(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Jh(a)){var u=a;break t}}u=null}if(n=u)Po(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kg(this,n);else{this.i=!1,this.o=3,zt(12),vs(this),xl(this);break e}}this.S?(tb(this,c,o),gg&&this.i&&c==3&&(KC(this.U,this.V,"tick",this.mb),this.V.start())):(Po(this.j,this.m,o,null),kg(this,o)),c==4&&vs(this),this.i&&!this.J&&(c==4?Tb(this.l,this):(this.i=!1,Gu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,zt(12)):(this.o=0,zt(13)),vs(this),xl(this)}}}catch{}finally{}};function eb(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function tb(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=HV(t,n),i==ed){e==4&&(t.o=4,zt(14),r=!1),Po(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Sg){t.o=4,zt(15),Po(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Po(t.j,t.m,i,null),kg(t,i);eb(t)&&i!=ed&&i!=Sg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,zt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),mw(e),e.L=!0,zt(11))):(Po(t.j,t.m,n,"[Invalid Chunked Response]"),vs(t),xl(t))}M.mb=function(){if(this.g){var t=Nr(this.g),e=this.g.ja();this.C<e.length&&(ff(this),tb(this,t,e),this.i&&t!=4&&Gu(this))}};function HV(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ed:(n=Number(e.substring(n,r)),isNaN(n)?Sg:(r+=1,r+n>e.length?ed:(e=e.substr(r,n),t.C=r+n,e)))}M.cancel=function(){this.J=!0,vs(this)};function Gu(t){t.Y=Date.now()+t.P,nb(t,t.P)}function nb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ku(Pt(t.lb,t),e)}function ff(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(qV(this.j,this.A),this.L!=2&&(pu(),zt(17)),vs(this),this.o=2,xl(this)):nb(this,this.Y-t)};function xl(t){t.l.H==0||t.J||Tb(t.l,t)}function vs(t){ff(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,iw(t.V),WC(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function kg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Cg(n.h,t))){if(!t.K&&Cg(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)rd(n),yf(n);else break e;pw(n),zt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&n.A==0&&!n.v&&(n.v=Ku(Pt(n.ib,n),6e3));if(1>=cb(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else ws(n,11)}else if((t.K||n.g==t)&&rd(n),!Jh(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const c=u[3];c!=null&&(n.qa=c,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(uw(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ae(r.G,r.F,v))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=bb(r,r.I?r.oa:null,r.Y),o.K){hb(r.h,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(ff(a),Gu(a)),r.g=o}else Eb(r);0<n.i.length&&vf(n)}else u[0]!="stop"&&u[0]!="close"||ws(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ws(n,7):fw(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}pu(4)}catch{}}function GV(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(rf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function QV(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(rf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function rb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(rf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=QV(t),r=GV(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var ib=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YV(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function bs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof bs){this.h=e!==void 0?e:t.h,td(this,t.j),this.s=t.s,this.g=t.g,nd(this,t.m),this.l=t.l,e=t.i;var n=new mu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),PI(this,n),this.o=t.o}else t&&(n=String(t).match(ib))?(this.h=!!e,td(this,n[1]||"",!0),this.s=fl(n[2]||""),this.g=fl(n[3]||"",!0),nd(this,n[4]),this.l=fl(n[5]||"",!0),PI(this,n[6]||"",!0),this.o=fl(n[7]||"")):(this.h=!!e,this.i=new mu(null,this.h))}bs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(pl(e,OI,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(pl(e,OI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(pl(n,n.charAt(0)=="/"?ZV:JV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",pl(n,t4)),t.join("")};function Br(t){return new bs(t)}function td(t,e,n){t.j=n?fl(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function nd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function PI(t,e,n){e instanceof mu?(t.i=e,n4(t.i,t.h)):(n||(e=pl(e,e4)),t.i=new mu(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function pf(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fl(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function pl(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,XV),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function XV(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var OI=/[#\/\?@]/g,JV=/[#\?:]/g,ZV=/[#\?]/g,e4=/[#\?@]/g,t4=/#/g;function mu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gi(t){t.g||(t.g=new Map,t.h=0,t.i&&YV(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=mu.prototype;M.add=function(t,e){Gi(this),this.i=null,t=ba(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function sb(t,e){Gi(t),e=ba(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ob(t,e){return Gi(t),e=ba(t,e),t.g.has(e)}M.forEach=function(t,e){Gi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};M.sa=function(){Gi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};M.Z=function(t){Gi(this);let e=[];if(typeof t=="string")ob(this,t)&&(e=e.concat(this.g.get(ba(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Gi(this),this.i=null,t=ba(this,t),ob(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function ab(t,e,n){sb(t,e),0<n.length&&(t.i=null,t.g.set(ba(t,e),Yv(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ba(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function n4(t,e){e&&!t.j&&(Gi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(sb(this,r),ab(this,i,n))},t)),t.j=e}var r4=class{constructor(t,e){this.h=t,this.g=e}};function lb(t){this.l=t||i4,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var i4=10;function ub(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cb(t){return t.h?1:t.g?t.g.size:0}function Cg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function uw(t,e){t.g?t.g.add(e):t.h=e}function hb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}lb.prototype.cancel=function(){if(this.i=db(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function db(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Yv(t.i)}function cw(){}cw.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};cw.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function s4(){this.g=new cw}function o4(t,e,n){const r=n||"";try{rb(t,function(i,s){let o=i;ju(i)&&(o=rw(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function a4(t,e){const n=new uf;if(Q.Image){const r=new Image;r.onload=Dc(xc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Dc(xc,n,r,"TestLoadImage: error",!1,e),r.onabort=Dc(xc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Dc(xc,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function xc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Qu(t){this.l=t.fc||null,this.j=t.ob||!1}ft(Qu,ow);Qu.prototype.g=function(){return new mf(this.l,this.j)};Qu.prototype.i=function(t){return function(){return t}}({});function mf(t,e){dt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=hw,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ft(mf,dt);var hw=0;M=mf.prototype;M.open=function(t,e){if(this.readyState!=hw)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,gu(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yu(this)),this.readyState=hw};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,gu(this)),this.g&&(this.readyState=3,gu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fb(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function fb(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yu(this):gu(this),this.readyState==3&&fb(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Yu(this))};M.Ya=function(t){this.g&&(this.response=t,Yu(this))};M.ka=function(){this.g&&Yu(this)};function Yu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,gu(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function gu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(mf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var l4=Q.JSON.parse;function Ue(t){dt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pb,this.L=this.M=!1}ft(Ue,dt);var pb="",u4=/^https?$/i,c4=["POST","PUT"];M=Ue.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Eg.g(),this.C=this.u?xI(this.u):xI(Eg),this.g.onreadystatechange=Pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){LI(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=NC(c4,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yb(this),0<this.B&&((this.L=h4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pt(this.ua,this)):this.A=sw(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){LI(this,s)}};function h4(t){return sa&&AV()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Qv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))};function LI(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mb(t),gf(t)}function mb(t){t.F||(t.F=!0,kt(t,"complete"),kt(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),gf(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gf(this,!0)),Ue.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?gb(this):this.kb())};M.kb=function(){gb(this)};function gb(t){if(t.h&&typeof Qv<"u"&&(!t.C[1]||Nr(t)!=4||t.da()!=2)){if(t.v&&Nr(t)==4)sw(t.La,0,t);else if(kt(t,"readystatechange"),Nr(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.I).match(ib)[1]||null;if(!i&&Q.self&&Q.self.location){var s=Q.self.location.protocol;i=s.substr(0,s.length-1)}r=!u4.test(i?i.toLowerCase():"")}n=r}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var o=2<Nr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",mb(t)}}finally{gf(t)}}}}function gf(t,e){if(t.g){yb(t);const n=t.g,r=t.C[0]?Xh:null;t.g=null,t.C=null,e||kt(t,"ready");try{n.onreadystatechange=r}catch{}}}function yb(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function Nr(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<Nr(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),l4(e)}};function MI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case pb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vb(t){let e="";return Jv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function dw(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function Ja(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wb(t){this.Ga=0,this.i=[],this.j=new uf,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ja("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ja("baseRetryDelayMs",5e3,t),this.hb=Ja("retryDelaySeedMs",1e4,t),this.eb=Ja("forwardChannelMaxRetries",2,t),this.xa=Ja("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new lb(t&&t.concurrentRequestLimit),this.Ja=new s4,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}M=wb.prototype;M.qa=8;M.H=1;function fw(t){if(_b(t),t.H==3){var e=t.W++,n=Br(t.G);Ae(n,"SID",t.J),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Xu(t,n),e=new Hu(t,t.j,e,void 0),e.L=2,e.v=pf(Br(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ab(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Gu(e)}Cb(t)}function yf(t){t.g&&(mw(t),t.g.cancel(),t.g=null)}function _b(t){yf(t),t.u&&(Q.clearTimeout(t.u),t.u=null),rd(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function vf(t){ub(t.h)||t.m||(t.m=!0,zC(t.Na,t),t.C=0)}function d4(t,e){return cb(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ku(Pt(t.Na,t,e),kb(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Hu(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=OC(s),LC(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ib(this,i,e),n=Br(this.G),Ae(n,"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),Xu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(vb(s)))+"&"+e:this.o&&dw(n,this.o,s)),uw(this.h,i),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),i.ba=!0,Tg(i,n,null)):Tg(i,n,e),this.H=2}}else this.H==3&&(t?$I(this,t):this.i.length==0||ub(this.h)||$I(this))};function $I(t,e){var n;e?n=e.m:n=t.W++;const r=Br(t.G);Ae(r,"SID",t.J),Ae(r,"RID",n),Ae(r,"AID",t.V),Xu(t,r),t.o&&t.s&&dw(r,t.o,t.s),n=new Hu(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Ib(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),uw(t.h,n),Tg(n,r,e)}function Xu(t,e){t.ma&&Jv(t.ma,function(n,r){Ae(e,r,n)}),t.l&&rb({},function(n,r){Ae(e,r,n)})}function Ib(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Pt(t.l.Va,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{o4(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function Eb(t){t.g||t.u||(t.ba=1,zC(t.Ma,t),t.A=0)}function pw(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ku(Pt(t.Ma,t),kb(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,Sb(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Ku(Pt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,zt(10),yf(this),Sb(this))};function mw(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function Sb(t){t.g=new Hu(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Br(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.J),Ae(e,"CI",t.M?"0":"1"),Ae(e,"AID",t.V),Ae(e,"TYPE","xmlhttp"),Xu(t,e),t.o&&t.s&&dw(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=pf(Br(e)),n.s=null,n.S=!0,ZC(n,t)}M.ib=function(){this.v!=null&&(this.v=null,yf(this),pw(this),zt(19))};function rd(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Tb(t,e){var n=null;if(t.g==e){rd(t),mw(t),t.g=null;var r=2}else if(Cg(t.h,e))n=e.F,hb(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=cf(),kt(r,new QC(r,n)),vf(t)}else Eb(t);else if(i=e.o,i==3||i==0&&0<t.ta||!(r==1&&d4(t,e)||r==2&&pw(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ws(t,5);break;case 4:ws(t,10);break;case 3:ws(t,6);break;default:ws(t,2)}}}function kb(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function ws(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Pt(t.pb,t);n||(n=new bs("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||td(n,"https"),pf(n)),a4(n.toString(),r)}else zt(2);t.H=0,t.l&&t.l.za(e),Cb(t),_b(t)}M.pb=function(t){t?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))};function Cb(t){if(t.H=0,t.pa=[],t.l){const e=db(t.h);(e.length!=0||t.i.length!=0)&&(CI(t.pa,e),CI(t.pa,t.i),t.h.i.length=0,Yv(t.i),t.i.length=0),t.l.ya()}}function bb(t,e,n){var r=n instanceof bs?Br(n):new bs(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),nd(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new bs(null,void 0);r&&td(s,r),e&&(s.g=e),i&&nd(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ae(r,n,e),Ae(r,"VER",t.qa),Xu(t,r),r}function Ab(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ue(new Qu({ob:!0})):new Ue(t.va),e.Oa(t.I),e}function Nb(){}M=Nb.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.Va=function(){};function id(){if(sa&&!(10<=Number(NV)))throw Error("Environmental error: no available transport.")}id.prototype.g=function(t,e){return new yn(t,e)};function yn(t,e){dt.call(this),this.g=new wb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Jh(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Jh(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Aa(this)}ft(yn,dt);yn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;zt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=bb(t,null,t.Y),vf(t)};yn.prototype.close=function(){fw(this.g)};yn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=rw(t),t=n);e.i.push(new r4(e.fb++,t)),e.H==3&&vf(e)};yn.prototype.N=function(){this.g.l=null,delete this.j,fw(this.g),delete this.g,yn.$.N.call(this)};function Db(t){aw.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ft(Db,aw);function Rb(){lw.call(this),this.status=1}ft(Rb,lw);function Aa(t){this.g=t}ft(Aa,Nb);Aa.prototype.Ba=function(){kt(this.g,"a")};Aa.prototype.Aa=function(t){kt(this.g,new Db(t))};Aa.prototype.za=function(t){kt(this.g,new Rb)};Aa.prototype.ya=function(){kt(this.g,"b")};function f4(){this.blockSize=-1}function qn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ft(qn,f4);qn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}qn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Qp(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Qp(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Qp(this,r),i=0;break}}this.h=i,this.i+=e};qn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function fe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var p4={};function gw(t){return-128<=t&&128>t?DC(p4,t,function(e){return new fe([e|0],0>e?-1:0)}):new fe([t|0],0>t?-1:0)}function ir(t){if(isNaN(t)||!isFinite(t))return Ko;if(0>t)return wt(ir(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=bg;return new fe(e,0)}function xb(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return wt(xb(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ir(Math.pow(e,8)),r=Ko,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=ir(Math.pow(e,s)),r=r.R(s).add(ir(o))):(r=r.R(n),r=r.add(ir(o)))}return r}var bg=4294967296,Ko=gw(0),Ag=gw(1),FI=gw(16777216);M=fe.prototype;M.ea=function(){if(Tn(this))return-wt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:bg+r)*e,e*=bg}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Dr(this))return"0";if(Tn(this))return"-"+wt(this).toString(t);for(var e=ir(Math.pow(t,6)),n=this,r="";;){var i=od(n,e).g;n=sd(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Dr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Dr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Tn(t){return t.h==-1}M.X=function(t){return t=sd(this,t),Tn(t)?-1:Dr(t)?0:1};function wt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new fe(n,~t.h).add(Ag)}M.abs=function(){return Tn(this)?wt(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new fe(n,n[n.length-1]&-2147483648?-1:0)};function sd(t,e){return t.add(wt(e))}M.R=function(t){if(Dr(this)||Dr(t))return Ko;if(Tn(this))return Tn(t)?wt(this).R(wt(t)):wt(wt(this).R(t));if(Tn(t))return wt(this.R(wt(t)));if(0>this.X(FI)&&0>t.X(FI))return ir(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Pc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Pc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Pc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Pc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new fe(n,0)};function Pc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Za(t,e){this.g=t,this.h=e}function od(t,e){if(Dr(e))throw Error("division by zero");if(Dr(t))return new Za(Ko,Ko);if(Tn(t))return e=od(wt(t),e),new Za(wt(e.g),wt(e.h));if(Tn(e))return e=od(t,wt(e)),new Za(wt(e.g),e.h);if(30<t.g.length){if(Tn(t)||Tn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ag,r=e;0>=r.X(t);)n=UI(n),r=UI(r);var i=ho(n,1),s=ho(r,1);for(r=ho(r,2),n=ho(n,2);!Dr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ho(r,1),n=ho(n,1)}return e=sd(t,i.R(e)),new Za(i,e)}for(i=Ko;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ir(n),o=s.R(e);Tn(o)||0<o.X(t);)n-=r,s=ir(n),o=s.R(e);Dr(s)&&(s=Ag),i=i.add(s),t=sd(t,o)}return new Za(i,t)}M.gb=function(t){return od(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new fe(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new fe(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new fe(n,this.h^t.h)};function UI(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new fe(n,t.h)}function ho(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new fe(i,t.h)}id.prototype.createWebChannel=id.prototype.g;yn.prototype.send=yn.prototype.u;yn.prototype.open=yn.prototype.m;yn.prototype.close=yn.prototype.close;hf.NO_ERROR=0;hf.TIMEOUT=8;hf.HTTP_ERROR=6;YC.COMPLETE="complete";XC.EventType=Wu;Wu.OPEN="a";Wu.CLOSE="b";Wu.ERROR="c";Wu.MESSAGE="d";dt.prototype.listen=dt.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;qn.prototype.digest=qn.prototype.l;qn.prototype.reset=qn.prototype.reset;qn.prototype.update=qn.prototype.j;fe.prototype.add=fe.prototype.add;fe.prototype.multiply=fe.prototype.R;fe.prototype.modulo=fe.prototype.gb;fe.prototype.compare=fe.prototype.X;fe.prototype.toNumber=fe.prototype.ea;fe.prototype.toString=fe.prototype.toString;fe.prototype.getBits=fe.prototype.D;fe.fromNumber=ir;fe.fromString=xb;var m4=function(){return new id},g4=function(){return cf()},Yp=hf,y4=YC,v4=eo,VI={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},w4=Qu,Oc=XC,_4=Ue,I4=qn,Wo=fe;const BI="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let Na="9.21.0";/**
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
 */const Pi=new Bd("@firebase/firestore");function Ng(){return Pi.logLevel}function E4(t){Pi.setLogLevel(t)}function b(t,...e){if(Pi.logLevel<=re.DEBUG){const n=e.map(yw);Pi.debug(`Firestore (${Na}): ${t}`,...n)}}function je(t,...e){if(Pi.logLevel<=re.ERROR){const n=e.map(yw);Pi.error(`Firestore (${Na}): ${t}`,...n)}}function Kn(t,...e){if(Pi.logLevel<=re.WARN){const n=e.map(yw);Pi.warn(`Firestore (${Na}): ${t}`,...n)}}function yw(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${Na}) INTERNAL ASSERTION FAILED: `+t;throw je(e),new Error(e)}function z(t,e){t||$()}function S4(t,e){t||$()}function L(t,e){return t}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Et{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ct{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Pb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class T4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class k4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class C4{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ct;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ct,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ct)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new Pb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new lt(e)}}class b4{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class A4{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new b4(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D4{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(z(typeof n.token=="string"),this.T=n.token,new N4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ob{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=R4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function oa(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function Lb(t){return t+"\0"}/**
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new De(0,0))}static max(){return new B(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yu{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends yu{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const x4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends yu{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return x4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new C(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(ie.fromString(e))}static fromName(e){return new P(ie.fromString(e).popFirst(5))}static empty(){return new P(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new ie(e.slice()))}}/**
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
 */class Mb{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Dg(t){return t.fields.find(e=>e.kind===2)}function ss(t){return t.fields.filter(e=>e.kind!==2)}Mb.UNKNOWN_ID=-1;class P4{constructor(e,n){this.fieldPath=e,this.kind=n}}class ad{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new ad(0,vn.min())}}function $b(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new vn(i,P.empty(),e)}function Fb(t){return new vn(t.readTime,t.key,-1)}class vn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vn(B.min(),P.empty(),-1)}static max(){return new vn(B.max(),P.empty(),-1)}}function vw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=P.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qi(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==Ub)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new E((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new E((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class wf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.R=new ct,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{n.error?this.R.reject(new Pl(e,n.error)):this.R.resolve()},this.transaction.onerror=r=>{const i=ww(r.target.error);this.R.reject(new Pl(e,i))}}static open(e,n,r,i){try{return new wf(n,e.transaction(i,r))}catch(s){throw new Pl(n,s)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(b("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new L4(n)}}class $n{constructor(e,n,r){this.name=e,this.version=n,this.V=r,$n.S(Me())===12.2&&je("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return b("SimpleDb","Removing database:",e),ls(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Os())return!1;if($n.C())return!0;const e=Me(),n=$n.S(e),r=0<n&&n<10,i=$n.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(b("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Pl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Pl(e,o))},i.onupgradeneeded=s=>{b("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.$(o,i.transaction,s.oldVersion,this.version).next(()=>{b("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=n=>this.F(n)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=wf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),E.reject(u))).toPromise();return l.catch(()=>{}),await a.v,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(b("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class O4{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return ls(this.L.delete())}}class Pl extends C{constructor(e,n){super(S.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Yi(t){return t.name==="IndexedDbTransactionError"}class L4{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(b("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(b("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ls(r)}add(e){return b("SimpleDb","ADD",this.store.name,e,e),ls(this.store.add(e))}get(e){return ls(this.store.get(e)).next(n=>(n===void 0&&(n=null),b("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return b("SimpleDb","DELETE",this.store.name,e),ls(this.store.delete(e))}count(){return b("SimpleDb","COUNT",this.store.name),ls(this.store.count())}j(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new E((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new E((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){b("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Z(e){const n=this.cursor({});return new E((r,i)=>{n.onerror=s=>{const o=ww(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new E((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new O4(a),u=n(a.primaryKey,a.value,l);if(u instanceof E){const c=u.catch(h=>(l.done(),E.reject(h)));r.push(c)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>E.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ls(t){return new E((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=ww(r.target.error);n(i)}})}let zI=!1;function ww(t){const e=$n.S(Me());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return zI||(zI=!0,setTimeout(()=>{throw r},0)),r}}return t}class M4{constructor(e,n){this.asyncQueue=e,this.tt=n,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){b("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{b("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(n){Yi(n)?b("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Qi(n)}await this.et(6e4)})}}class $4{constructor(e,n){this.localStore=e,this.persistence=n}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.st(n,e))}st(e,n){const r=new Set;let i=n,s=!0;return E.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return b("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}it(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(b("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}rt(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=Fb(s);vw(o,r)>0&&(r=o)}),new vn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class en{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}en.ct=-1;function Ju(t){return t==null}function vu(t){return t===0&&1/t==-1/0}function Bb(t){return typeof t=="number"&&Number.isInteger(t)&&!vu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Kt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=jI(e)),e=F4(t.get(n),e);return jI(e)}function F4(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function jI(t){return t+""}function sr(t){const e=t.length;if(z(e>=2),e===2)return z(t.charAt(0)===""&&t.charAt(1)===""),ie.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&$(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:$()}s=o+2}return new ie(r)}/**
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
 */const qI=["userId","batchId"];/**
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
 */function ah(t,e){return[t,Kt(e)]}function zb(t,e,n){return[t,Kt(e),n]}const U4={},V4=["prefixPath","collectionGroup","readTime","documentId"],B4=["prefixPath","collectionGroup","documentId"],z4=["collectionGroup","readTime","prefixPath","documentId"],j4=["canonicalId","targetId"],q4=["targetId","path"],K4=["path","targetId"],W4=["collectionId","parent"],H4=["indexId","uid"],G4=["uid","sequenceNumber"],Q4=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Y4=["indexId","uid","orderedDocumentKey"],X4=["userId","collectionPath","documentId"],J4=["userId","collectionPath","largestBatchId"],Z4=["userId","collectionGroup","largestBatchId"],jb=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eB=[...jb,"documentOverlays"],qb=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Kb=qb,tB=[...Kb,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends Vb{constructor(e,n){super(),this.at=e,this.currentSequenceNumber=n}}function pt(t,e){const n=L(t);return $n.M(n.at,e)}/**
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
 */function KI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function to(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ye{constructor(e,n){this.comparator=e,this.root=n||vt.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lc(this.root,e,this.comparator,!0)}}class Lc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class vt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??vt.RED,this.left=i??vt.EMPTY,this.right=s??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new vt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Te{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new WI(this.data.getIterator())}getIteratorFrom(e){return new WI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Te(this.comparator);return n.data=e,n}}class WI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function fo(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new tn([])}unionWith(e){let n=new Te(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return oa(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Hb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nB(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hb("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const rB=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Oi(t){if(z(!!t),typeof t=="string"){let e=0;const n=rB.exec(t);if(z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Li(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _w(t){const e=t.mapValue.fields.__previous_value__;return _f(e)?_w(e):e}function wu(t){const e=Oi(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class iB{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Mi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},lh={nullValue:"NULL_VALUE"};function zs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_f(t)?4:Gb(t)?9007199254740991:10:$()}function fr(t,e){if(t===e)return!0;const n=zs(t);if(n!==zs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wu(t).isEqual(wu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Oi(r.timestampValue),o=Oi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Li(r.bytesValue).isEqual(Li(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Fe(r.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(r.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Fe(r.integerValue)===Fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Fe(r.doubleValue),o=Fe(i.doubleValue);return s===o?vu(s)===vu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return oa(t.arrayValue.values||[],e.arrayValue.values||[],fr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(KI(s)!==KI(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!fr(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function _u(t,e){return(t.values||[]).find(n=>fr(n,e))!==void 0}function $i(t,e){if(t===e)return 0;const n=zs(t),r=zs(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Fe(i.integerValue||i.doubleValue),a=Fe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return HI(t.timestampValue,e.timestampValue);case 4:return HI(wu(t),wu(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Li(i),a=Li(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=X(o[l],a[l]);if(u!==0)return u}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=X(Fe(i.latitude),Fe(s.latitude));return o!==0?o:X(Fe(i.longitude),Fe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=$i(o[l],a[l]);if(u)return u}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===pi.mapValue&&s===pi.mapValue)return 0;if(i===pi.mapValue)return 1;if(s===pi.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=X(a[c],u[c]);if(h!==0)return h;const d=$i(o[a[c]],l[u[c]]);if(d!==0)return d}return X(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function HI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=Oi(t),r=Oi(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function aa(t){return xg(t)}function xg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Oi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Li(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=xg(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${xg(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function js(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pg(t){return!!t&&"integerValue"in t}function Iu(t){return!!t&&"arrayValue"in t}function GI(t){return!!t&&"nullValue"in t}function QI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function uh(t){return!!t&&"mapValue"in t}function Ol(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return to(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ol(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ol(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Gb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function sB(t){return"nullValue"in t?lh:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?js(Mi.empty(),P.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:$()}function oB(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?js(Mi.empty(),P.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?pi:$()}function YI(t,e){const n=$i(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function XI(t,e){const n=$i(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!uh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ol(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ol(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());uh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];uh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){to(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(Ol(this.value))}}function Qb(t){const e=[];return to(t.fields,(n,r)=>{const i=new qe([n]);if(uh(r)){const s=Qb(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new tn(e)}/**
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
 */class Ee{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,B.min(),B.min(),B.min(),_t.empty(),0)}static newFoundDocument(e,n,r,i){return new Ee(e,1,n,B.min(),r,i,0)}static newNoDocument(e,n){return new Ee(e,2,n,B.min(),B.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,B.min(),B.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fi{constructor(e,n){this.position=e,this.inclusive=n}}function JI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=$i(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ZI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ho{constructor(e,n="asc"){this.field=e,this.dir=n}}function aB(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Yb{}class Z extends Yb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lB(e,n,r):n==="array-contains"?new hB(e,r):n==="in"?new nA(e,r):n==="not-in"?new dB(e,r):n==="array-contains-any"?new fB(e,r):new Z(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uB(e,r):new cB(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($i(n,this.value)):n!==null&&zs(this.value)===zs(n)&&this.matchesComparison($i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class he extends Yb{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new he(e,n)}matches(e){return la(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function la(t){return t.op==="and"}function Og(t){return t.op==="or"}function Iw(t){return Xb(t)&&la(t)}function Xb(t){for(const e of t.filters)if(e instanceof he)return!1;return!0}function Lg(t){if(t instanceof Z)return t.field.canonicalString()+t.op.toString()+aa(t.value);if(Iw(t))return t.filters.map(e=>Lg(e)).join(",");{const e=t.filters.map(n=>Lg(n)).join(",");return`${t.op}(${e})`}}function Jb(t,e){return t instanceof Z?function(n,r){return r instanceof Z&&n.op===r.op&&n.field.isEqual(r.field)&&fr(n.value,r.value)}(t,e):t instanceof he?function(n,r){return r instanceof he&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Jb(s,r.filters[o]),!0):!1}(t,e):void $()}function Zb(t,e){const n=t.filters.concat(e);return he.create(n,t.op)}function eA(t){return t instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${aa(e.value)}`}(t):t instanceof he?function(e){return e.op.toString()+" {"+e.getFilters().map(eA).join(" ,")+"}"}(t):"Filter"}class lB extends Z{constructor(e,n,r){super(e,n,r),this.key=P.fromName(r.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.matchesComparison(n)}}class uB extends Z{constructor(e,n){super(e,"in",n),this.keys=tA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cB extends Z{constructor(e,n){super(e,"not-in",n),this.keys=tA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class hB extends Z{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Iu(n)&&_u(n.arrayValue,this.value)}}class nA extends Z{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_u(this.value.arrayValue,n)}}class dB extends Z{constructor(e,n){super(e,"not-in",n)}matches(e){if(_u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_u(this.value.arrayValue,n)}}class fB extends Z{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Iu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_u(this.value.arrayValue,r))}}/**
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
 */class pB{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Mg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new pB(t,e,n,r,i,s,o)}function qs(t){const e=L(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Lg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ju(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>aa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>aa(r)).join(",")),e.ft=n}return e.ft}function Zu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aB(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ZI(t.startAt,e.startAt)&&ZI(t.endAt,e.endAt)}function ld(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ud(t,e){return t.filters.filter(n=>n instanceof Z&&n.field.isEqual(e))}function eE(t,e,n){let r=lh,i=!0;for(const s of ud(t,e)){let o=lh,a=!0;switch(s.op){case"<":case"<=":o=sB(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=lh}YI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];YI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function tE(t,e,n){let r=pi,i=!0;for(const s of ud(t,e)){let o=pi,a=!0;switch(s.op){case">=":case">":o=oB(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=pi}XI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];XI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Hr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function rA(t,e,n,r,i,s,o,a){return new Hr(t,e,n,r,i,s,o,a)}function Da(t){return new Hr(t)}function nE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ew(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function If(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Sw(t){return t.collectionGroup!==null}function As(t){const e=L(t);if(e.dt===null){e.dt=[];const n=If(e),r=Ew(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ho(n)),e.dt.push(new Ho(qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ho(qe.keyField(),s))}}}return e.dt}function ln(t){const e=L(t);if(!e._t)if(e.limitType==="F")e._t=Mg(e.path,e.collectionGroup,As(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of As(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ho(s.field,o))}const r=e.endAt?new Fi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Fi(e.startAt.position,e.startAt.inclusive):null;e._t=Mg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function $g(t,e){e.getFirstInequalityField(),If(t);const n=t.filters.concat([e]);return new Hr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cd(t,e,n){return new Hr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return Zu(ln(t),ln(e))&&t.limitType===e.limitType}function iA(t){return`${qs(ln(t))}|lt:${t.limitType}`}function Fg(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>eA(r)).join(", ")}]`),Ju(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>aa(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>aa(r)).join(",")),`Target(${n})`}(ln(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of As(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=JI(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,As(n),r)||n.endAt&&!function(i,s,o){const a=JI(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,As(n),r))}(t,e)}function sA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oA(t){return(e,n)=>{let r=!1;for(const i of As(t)){const s=mB(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function mB(t,e,n){const r=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?$i(a,l):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class Xi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){to(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Wb(this.inner)}size(){return this.innerSize}}/**
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
 */const gB=new ye(P.comparator);function nn(){return gB}const aA=new ye(P.comparator);function ml(...t){let e=aA;for(const n of t)e=e.insert(n.key,n);return e}function lA(t){let e=aA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function or(){return Ll()}function uA(){return Ll()}function Ll(){return new Xi(t=>t.toString(),(t,e)=>t.isEqual(e))}const yB=new ye(P.comparator),vB=new Te(P.comparator);function J(...t){let e=vB;for(const n of t)e=e.add(n);return e}const wB=new Te(X);function Tw(){return wB}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vu(e)?"-0":e}}function hA(t){return{integerValue:""+t}}function dA(t,e){return Bb(e)?hA(e):cA(t,e)}/**
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
 */class Ef{constructor(){this._=void 0}}function _B(t,e,n){return t instanceof ua?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&_f(i)&&(i=_w(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ks?pA(t,e):t instanceof Ws?mA(t,e):function(r,i){const s=fA(r,i),o=rE(s)+rE(r.wt);return Pg(s)&&Pg(r.wt)?hA(o):cA(r.serializer,o)}(t,e)}function IB(t,e,n){return t instanceof Ks?pA(t,e):t instanceof Ws?mA(t,e):n}function fA(t,e){return t instanceof ca?Pg(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ua extends Ef{}class Ks extends Ef{constructor(e){super(),this.elements=e}}function pA(t,e){const n=gA(e);for(const r of t.elements)n.some(i=>fr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ws extends Ef{constructor(e){super(),this.elements=e}}function mA(t,e){let n=gA(e);for(const r of t.elements)n=n.filter(i=>!fr(i,r));return{arrayValue:{values:n}}}class ca extends Ef{constructor(e,n){super(),this.serializer=e,this.wt=n}}function rE(t){return Fe(t.integerValue||t.doubleValue)}function gA(t){return Iu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class nc{constructor(e,n){this.field=e,this.transform=n}}function EB(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ks&&r instanceof Ks||n instanceof Ws&&r instanceof Ws?oa(n.elements,r.elements,fr):n instanceof ca&&r instanceof ca?fr(n.wt,r.wt):n instanceof ua&&r instanceof ua}(t.transform,e.transform)}class SB{constructor(e,n){this.version=e,this.transformResults=n}}class Ne{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ch(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sf{}function yA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xa(t.key,Ne.none()):new Ra(t.key,t.data,Ne.none());{const n=t.data,r=_t.empty();let i=new Te(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Gr(t.key,r,new tn(i.toArray()),Ne.none())}}function TB(t,e,n){t instanceof Ra?function(r,i,s){const o=r.value.clone(),a=sE(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Gr?function(r,i,s){if(!ch(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=sE(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(vA(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ml(t,e,n,r){return t instanceof Ra?function(i,s,o,a){if(!ch(i.precondition,s))return o;const l=i.value.clone(),u=oE(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gr?function(i,s,o,a){if(!ch(i.precondition,s))return o;const l=oE(i.fieldTransforms,a,s),u=s.data;return u.setAll(vA(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ch(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function kB(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=fA(r.transform,i||null);s!=null&&(n===null&&(n=_t.empty()),n.set(r.field,s))}return n||null}function iE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&oa(n,r,(i,s)=>EB(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ra extends Sf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gr extends Sf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sE(t,e,n){const r=new Map;z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,IB(o,a,n[i]))}return r}function oE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_B(s,o,e))}return r}class xa extends Sf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kw extends Sf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Cw{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TB(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ml(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ml(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=uA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=yA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&oa(this.mutations,e.mutations,(n,r)=>iE(n,r))&&oa(this.baseMutations,e.baseMutations,(n,r)=>iE(n,r))}}class bw{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){z(e.mutations.length===r.length);let i=yB;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new bw(e,n,r,i)}}/**
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
 */class Aw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class CB{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,ne;function wA(t){switch(t){default:return $();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function _A(t){if(t===void 0)return je("GRPC error has no .code"),S.UNKNOWN;switch(t){case Qe.OK:return S.OK;case Qe.CANCELLED:return S.CANCELLED;case Qe.UNKNOWN:return S.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return S.INTERNAL;case Qe.UNAVAILABLE:return S.UNAVAILABLE;case Qe.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Qe.NOT_FOUND:return S.NOT_FOUND;case Qe.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Qe.ABORTED:return S.ABORTED;case Qe.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Qe.DATA_LOSS:return S.DATA_LOSS;default:return $()}}(ne=Qe||(Qe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Nw{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Mc}static getOrCreateInstance(){return Mc===null&&(Mc=new Nw),Mc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Mc=null;/**
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
 */function IA(){return new TextEncoder}/**
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
 */const bB=new Wo([4294967295,4294967295],0);function aE(t){const e=IA().encode(t),n=new I4;return n.update(e),new Uint8Array(n.digest())}function lE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wo([n,r],0),new Wo([i,s],0)]}class Dw{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gl(`Invalid padding: ${n}`);if(r<0)throw new gl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gl(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Wo.fromNumber(this.yt)}Tt(e,n,r){let i=e.add(n.multiply(Wo.fromNumber(r)));return i.compare(bB)===1&&(i=new Wo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=aE(e),[r,i]=lE(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);if(!this.Et(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Dw(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=aE(e),[r,i]=lE(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ic.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rc(B.min(),i,new ye(X),nn(),J())}}class ic{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ic(r,n,J(),J(),J())}}/**
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
 */class hh{constructor(e,n,r,i){this.vt=e,this.removedTargetIds=n,this.key=r,this.Pt=i}}class EA{constructor(e,n){this.targetId=e,this.bt=n}}class SA{constructor(e,n,r=nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class uE{constructor(){this.Vt=0,this.St=hE(),this.Dt=nt.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=J(),n=J(),r=J();return this.St.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new ic(this.Dt,this.Ct,e,n,r)}$t(){this.xt=!1,this.St=hE()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class AB{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=nn(),this.jt=cE(),this.zt=new ye(X)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const r=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&r.Mt(e.resumeToken);break;case 1:r.qt(),r.Nt||r.$t(),r.Mt(e.resumeToken);break;case 2:r.qt(),r.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(r.Ut(),r.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),r.Mt(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((r,i)=>{this.Zt(i)&&n(i)})}ee(e){var n;const r=e.targetId,i=e.bt.count,s=this.ne(r);if(s){const o=s.target;if(ld(o))if(i===0){const a=new P(o.path);this.Jt(r,a,Ee.newNoDocument(a,B.min()))}else z(i===1);else{const a=this.se(r);if(a!==i){const l=this.ie(e,a);if(l!==0){this.te(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(r,u)}(n=Nw.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var d,p,y,v,I,m;const f={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(f.bloomFilter={applied:u===0,hashCount:(d=g==null?void 0:g.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(v=(y=(p=g==null?void 0:g.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(m=(I=g==null?void 0:g.bits)===null||I===void 0?void 0:I.padding)!==null&&m!==void 0?m:0}),f}(l,a,e.bt))}}}}ie(e,n){const{unchangedNames:r,count:i}=e.bt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Li(s).toUint8Array()}catch(c){if(c instanceof Hb)return Kn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Dw(l,o,a)}catch(c){return Kn(c instanceof gl?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.yt===0?1:i!==n-this.re(e.targetId,u)?2:0}re(e,n){const r=this.Kt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),i++)}),i}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&ld(a.target)){const l=new P(a.target.path);this.Qt.get(l)!==null||this.ce(o,l)||this.Jt(o,l,Ee.newNoDocument(l,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let r=J();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ne(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const i=new rc(e,n,this.zt,this.Qt,r);return this.Qt=nn(),this.jt=cE(),this.zt=new ye(X),i}Ht(e,n){if(!this.Zt(e))return;const r=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,r),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,r){if(!this.Zt(e))return;const i=this.Xt(e);this.ce(e,n)?i.Ft(n,1):i.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),r&&(this.Qt=this.Qt.insert(n,r))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new uE,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new Te(X),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new uE),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function cE(){return new ye(P.comparator)}function hE(){return new ye(P.comparator)}const NB=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),DB=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),RB=(()=>({and:"AND",or:"OR"}))();class xB{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ug(t,e){return t.useProto3Json||Ju(e)?e:{value:e}}function ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PB(t,e){return ha(t,e.toTimestamp())}function Ke(t){return z(!!t),B.fromTimestamp(function(e){const n=Oi(e);return new De(n.seconds,n.nanos)}(t))}function Rw(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function kA(t){const e=ie.fromString(t);return z(OA(e)),e}function Eu(t,e){return Rw(t.databaseId,e.path)}function cr(t,e){const n=kA(e);if(n.get(1)!==t.databaseId.projectId)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(bA(n))}function Vg(t,e){return Rw(t.databaseId,e)}function CA(t){const e=kA(t);return e.length===4?ie.emptyPath():bA(e)}function Su(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bA(t){return z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function dE(t,e,n){return{name:Eu(t,e),fields:n.value.mapValue.fields}}function AA(t,e,n){const r=cr(t,e.name),i=Ke(e.updateTime),s=e.createTime?Ke(e.createTime):B.min(),o=new _t({mapValue:{fields:e.fields}}),a=Ee.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function OB(t,e){return"found"in e?function(n,r){z(!!r.found),r.found.name,r.found.updateTime;const i=cr(n,r.found.name),s=Ke(r.found.updateTime),o=r.found.createTime?Ke(r.found.createTime):B.min(),a=new _t({mapValue:{fields:r.found.fields}});return Ee.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){z(!!r.missing),z(!!r.readTime);const i=cr(n,r.missing),s=Ke(r.readTime);return Ee.newNoDocument(i,s)}(t,e):$()}function LB(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(z(u===void 0||typeof u=="string"),nt.fromBase64String(u||"")):(z(u===void 0||u instanceof Uint8Array),nt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?S.UNKNOWN:_A(l.code);return new C(u,l.message||"")}(o);n=new SA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cr(t,r.document.name),s=Ke(r.document.updateTime),o=r.document.createTime?Ke(r.document.createTime):B.min(),a=new _t({mapValue:{fields:r.document.fields}}),l=Ee.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new hh(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cr(t,r.document),s=r.readTime?Ke(r.readTime):B.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new hh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cr(t,r.document),s=r.removedTargetIds||[];n=new hh([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new CB(i,s),a=r.targetId;n=new EA(a,o)}}return n}function Tu(t,e){let n;if(e instanceof Ra)n={update:dE(t,e.key,e.value)};else if(e instanceof xa)n={delete:Eu(t,e.key)};else if(e instanceof Gr)n={update:dE(t,e.key,e.data),updateMask:BB(e.fieldMask)};else{if(!(e instanceof kw))return $();n={verify:Eu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ua)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ks)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ws)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ca)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:PB(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function Bg(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Ne.updateTime(Ke(i.updateTime)):i.exists!==void 0?Ne.exists(i.exists):Ne.none()}(e.currentDocument):Ne.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)z(o.setToServerValue==="REQUEST_TIME"),a=new ua;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Ks(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Ws(u)}else"increment"in o?a=new ca(s,o.increment):$();const l=qe.fromServerFormat(o.fieldPath);return new nc(l,a)}(t,i)):[];if(e.update){e.update.name;const i=cr(t,e.update.name),s=new _t({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const l=a.fieldPaths||[];return new tn(l.map(u=>qe.fromServerFormat(u)))}(e.updateMask);return new Gr(i,s,o,n,r)}return new Ra(i,s,n,r)}if(e.delete){const i=cr(t,e.delete);return new xa(i,n)}if(e.verify){const i=cr(t,e.verify);return new kw(i,n)}return $()}function MB(t,e){return t&&t.length>0?(z(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ke(r.updateTime):Ke(i);return s.isEqual(B.min())&&(s=Ke(i)),new SB(s,r.transformResults||[])}(n,e))):[]}function NA(t,e){return{documents:[Vg(t,e.path)]}}function DA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Vg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return PA(he.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:go(c.field),direction:FB(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ug(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function RA(t){let e=CA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){z(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=xA(c);return h instanceof he&&Iw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ho(yo(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ju(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Fi(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Fi(d,h)}(n.endAt)),rA(e,i,o,s,a,"F",l,u)}function $B(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xA(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=yo(e.unaryFilter.field);return Z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=yo(e.unaryFilter.field);return Z.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yo(e.unaryFilter.field);return Z.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=yo(e.unaryFilter.field);return Z.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return Z.create(yo(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return he.create(e.compositeFilter.filters.map(n=>xA(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function FB(t){return NB[t]}function UB(t){return DB[t]}function VB(t){return RB[t]}function go(t){return{fieldPath:t.canonicalString()}}function yo(t){return qe.fromServerFormat(t.fieldPath)}function PA(t){return t instanceof Z?function(e){if(e.op==="=="){if(QI(e.value))return{unaryFilter:{field:go(e.field),op:"IS_NAN"}};if(GI(e.value))return{unaryFilter:{field:go(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(QI(e.value))return{unaryFilter:{field:go(e.field),op:"IS_NOT_NAN"}};if(GI(e.value))return{unaryFilter:{field:go(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:go(e.field),op:UB(e.op),value:e.value}}}(t):t instanceof he?function(e){const n=e.getFilters().map(r=>PA(r));return n.length===1?n[0]:{compositeFilter:{op:VB(e.op),filters:n}}}(t):$()}function BB(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function OA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Rr{constructor(e,n,r,i,s=B.min(),o=B.min(),a=nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class LA{constructor(e){this.le=e}}function zB(t,e){let n;if(e.document)n=AA(t.le,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=P.fromSegments(e.noDocument.path),i=Gs(e.noDocument.readTime);n=Ee.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=P.fromSegments(e.unknownDocument.path),i=Gs(e.unknownDocument.version);n=Ee.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new De(r[0],r[1]);return B.fromTimestamp(i)}(e.readTime)),n}function fE(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:hd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Eu(i,s.key),fields:s.data.value.mapValue.fields,updateTime:ha(i,s.version.toTimestamp()),createTime:ha(i,s.createTime.toTimestamp())}}(t.le,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Hs(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:n.path.toArray(),version:Hs(e.version)}}return r}function hd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Hs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Gs(t){const e=new De(t.seconds,t.nanoseconds);return B.fromTimestamp(e)}function us(t,e){const n=(e.baseMutations||[]).map(s=>Bg(t.le,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Bg(t.le,s)),i=De.fromMillis(e.localWriteTimeMs);return new Cw(e.batchId,i,n,r)}function yl(t){const e=Gs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Gs(t.lastLimboFreeSnapshotVersion):B.min();let r;var i;return t.query.documents!==void 0?(z((i=t.query).documents.length===1),r=ln(Da(CA(i.documents[0])))):r=function(s){return ln(RA(s))}(t.query),new Rr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,nt.fromBase64String(t.resumeToken))}function MA(t,e){const n=Hs(e.snapshotVersion),r=Hs(e.lastLimboFreeSnapshotVersion);let i;i=ld(e.target)?NA(t.le,e.target):DA(t.le,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:qs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function xw(t){const e=RA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cd(e,e.limit,"L"):e}function Xp(t,e){return new Aw(e.largestBatchId,Bg(t.le,e.overlayMutation))}function pE(t,e){const n=e.path.lastSegment();return[t,Kt(e.path.popLast()),n]}function mE(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Hs(r.readTime),documentKey:Kt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jB{getBundleMetadata(e,n){return gE(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Gs(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return gE(e).put({bundleId:(r=n).id,createTime:Hs(Ke(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return yE(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:xw(i.bundledQuery),readTime:Gs(i.readTime)};var i})}saveNamedQuery(e,n){return yE(e).put(function(r){return{name:r.name,readTime:Hs(Ke(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function gE(t){return pt(t,"bundles")}function yE(t){return pt(t,"namedQueries")}/**
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
 */class Tf{constructor(e,n){this.serializer=e,this.userId=n}static fe(e,n){const r=n.uid||"";return new Tf(e,r)}getOverlay(e,n){return el(e).get(pE(this.userId,n)).next(r=>r?Xp(this.serializer,r):null)}getOverlays(e,n){const r=or();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Aw(n,o);i.push(this.de(e,a))}),E.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Kt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(el(e).J("collectionPathOverlayIndex",a))}),E.waitFor(s)}getOverlaysForCollection(e,n,r){const i=or(),s=Kt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return el(e).j("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=Xp(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=or();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return el(e).X({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const h=Xp(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}de(e,n){return el(e).put(function(r,i,s){const[o,a,l]=pE(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:l,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Tu(r.le,s.mutation)}}(this.serializer,this.userId,n))}}function el(t){return pt(t,"documentOverlays")}/**
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
 */class cs{constructor(){}_e(e,n){this.we(e,n),n.me()}we(e,n){if("nullValue"in e)this.ge(n,5);else if("booleanValue"in e)this.ge(n,10),n.ye(e.booleanValue?1:0);else if("integerValue"in e)this.ge(n,15),n.ye(Fe(e.integerValue));else if("doubleValue"in e){const r=Fe(e.doubleValue);isNaN(r)?this.ge(n,13):(this.ge(n,15),vu(r)?n.ye(0):n.ye(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ge(n,20),typeof r=="string"?n.pe(r):(n.pe(`${r.seconds||""}`),n.ye(r.nanos||0))}else if("stringValue"in e)this.Ie(e.stringValue,n),this.Te(n);else if("bytesValue"in e)this.ge(n,30),n.Ee(Li(e.bytesValue)),this.Te(n);else if("referenceValue"in e)this.Ae(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.ge(n,45),n.ye(r.latitude||0),n.ye(r.longitude||0)}else"mapValue"in e?Gb(e)?this.ge(n,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,n),this.Te(n)):"arrayValue"in e?(this.ve(e.arrayValue,n),this.Te(n)):$()}Ie(e,n){this.ge(n,25),this.Pe(e,n)}Pe(e,n){n.pe(e)}Re(e,n){const r=e.fields||{};this.ge(n,55);for(const i of Object.keys(r))this.Ie(i,n),this.we(r[i],n)}ve(e,n){const r=e.values||[];this.ge(n,50);for(const i of r)this.we(i,n)}Ae(e,n){this.ge(n,37),P.fromName(e).path.forEach(r=>{this.ge(n,60),this.Pe(r,n)})}ge(e,n){e.ye(n)}Te(e){e.ye(2)}}cs.be=new cs;function qB(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function vE(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=qB(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class KB{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ve(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Se(r.value),r=n.next();this.De()}Ce(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.xe(r.value),r=n.next();this.Ne()}ke(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Se(r);else if(r<2048)this.Se(960|r>>>6),this.Se(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Se(480|r>>>12),this.Se(128|63&r>>>6),this.Se(128|63&r);else{const i=n.codePointAt(0);this.Se(240|i>>>18),this.Se(128|63&i>>>12),this.Se(128|63&i>>>6),this.Se(128|63&i)}}this.De()}Me(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.xe(r);else if(r<2048)this.xe(960|r>>>6),this.xe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.xe(480|r>>>12),this.xe(128|63&r>>>6),this.xe(128|63&r);else{const i=n.codePointAt(0);this.xe(240|i>>>18),this.xe(128|63&i>>>12),this.xe(128|63&i>>>6),this.xe(128|63&i)}}this.Ne()}Oe(e){const n=this.$e(e),r=vE(n);this.Fe(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Be(e){const n=this.$e(e),r=vE(n);this.Fe(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Le(){this.qe(255),this.qe(255)}Ue(){this.Ke(255),this.Ke(255)}reset(){this.position=0}seed(e){this.Fe(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ge(){return this.buffer.slice(0,this.position)}$e(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Se(e){const n=255&e;n===0?(this.qe(0),this.qe(255)):n===255?(this.qe(255),this.qe(0)):this.qe(n)}xe(e){const n=255&e;n===0?(this.Ke(0),this.Ke(255)):n===255?(this.Ke(255),this.Ke(0)):this.Ke(e)}De(){this.qe(0),this.qe(1)}Ne(){this.Ke(0),this.Ke(1)}qe(e){this.Fe(1),this.buffer[this.position++]=e}Ke(e){this.Fe(1),this.buffer[this.position++]=~e}Fe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class WB{constructor(e){this.Qe=e}Ee(e){this.Qe.Ve(e)}pe(e){this.Qe.ke(e)}ye(e){this.Qe.Oe(e)}me(){this.Qe.Le()}}class HB{constructor(e){this.Qe=e}Ee(e){this.Qe.Ce(e)}pe(e){this.Qe.Me(e)}ye(e){this.Qe.Be(e)}me(){this.Qe.Ue()}}class tl{constructor(){this.Qe=new KB,this.je=new WB(this.Qe),this.ze=new HB(this.Qe)}seed(e){this.Qe.seed(e)}We(e){return e===0?this.je:this.ze}Ge(){return this.Qe.Ge()}reset(){this.Qe.reset()}}/**
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
 */class hs{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}He(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new hs(this.indexId,this.documentKey,this.arrayValue,r)}}function ti(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=wE(t.arrayValue,e.arrayValue),n!==0?n:(n=wE(t.directionalValue,e.directionalValue),n!==0?n:P.comparator(t.documentKey,e.documentKey)))}function wE(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class GB{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Je=e.orderBy,this.Ye=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xe=r:this.Ye.push(r)}}Ze(e){z(e.collectionGroup===this.collectionId);const n=Dg(e);if(n!==void 0&&!this.tn(n))return!1;const r=ss(e);let i=0,s=0;for(;i<r.length&&this.tn(r[i]);++i);if(i===r.length)return!0;if(this.Xe!==void 0){const o=r[i];if(!this.en(this.Xe,o)||!this.nn(this.Je[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Je.length||!this.nn(this.Je[s++],o))return!1}return!0}tn(e){for(const n of this.Ye)if(this.en(n,e))return!0;return!1}en(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}nn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function $A(t){var e,n;if(z(t instanceof Z||t instanceof he),t instanceof Z){if(t instanceof nA){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Z.create(t.field,"==",s)))||[];return he.create(i,"or")}return t}const r=t.filters.map(i=>$A(i));return he.create(r,t.op)}function QB(t){if(t.getFilters().length===0)return[];const e=qg($A(t));return z(FA(e)),zg(e)||jg(e)?[e]:e.getFilters()}function zg(t){return t instanceof Z}function jg(t){return t instanceof he&&Iw(t)}function FA(t){return zg(t)||jg(t)||function(e){if(e instanceof he&&Og(e)){for(const n of e.getFilters())if(!zg(n)&&!jg(n))return!1;return!0}return!1}(t)}function qg(t){if(z(t instanceof Z||t instanceof he),t instanceof Z)return t;if(t.filters.length===1)return qg(t.filters[0]);const e=t.filters.map(r=>qg(r));let n=he.create(e,t.op);return n=dd(n),FA(n)?n:(z(n instanceof he),z(la(n)),z(n.filters.length>1),n.filters.reduce((r,i)=>Pw(r,i)))}function Pw(t,e){let n;return z(t instanceof Z||t instanceof he),z(e instanceof Z||e instanceof he),n=t instanceof Z?e instanceof Z?function(r,i){return he.create([r,i],"and")}(t,e):_E(t,e):e instanceof Z?_E(e,t):function(r,i){if(z(r.filters.length>0&&i.filters.length>0),la(r)&&la(i))return Zb(r,i.getFilters());const s=Og(r)?r:i,o=Og(r)?i:r,a=s.filters.map(l=>Pw(l,o));return he.create(a,"or")}(t,e),dd(n)}function _E(t,e){if(la(e))return Zb(e,t.getFilters());{const n=e.filters.map(r=>Pw(t,r));return he.create(n,"or")}}function dd(t){if(z(t instanceof Z||t instanceof he),t instanceof Z)return t;const e=t.getFilters();if(e.length===1)return dd(e[0]);if(Xb(t))return t;const n=e.map(i=>dd(i)),r=[];return n.forEach(i=>{i instanceof Z?r.push(i):i instanceof he&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:he.create(r,t.op)}/**
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
 */class YB{constructor(){this.sn=new Ow}addToCollectionParentIndex(e,n){return this.sn.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(vn.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(vn.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class Ow{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Te(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Te(ie.comparator)).toArray()}}/**
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
 */const $c=new Uint8Array(0);class XB{constructor(e,n){this.user=e,this.databaseId=n,this.rn=new Ow,this.on=new Xi(r=>qs(r),(r,i)=>Zu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.rn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.rn.add(n)});const s={collectionId:r,parent:Kt(i)};return IE(e).put(s)}return E.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[Lb(n),""],!1,!0);return IE(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(sr(o.parent))}return r})}addFieldIndex(e,n){const r=Fc(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=rl(e);return s.next(a=>{o.put(mE(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Fc(e),i=rl(e),s=nl(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=nl(e);let i=!0;const s=new Map;return E.forEach(this.un(n),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=J();const a=[];return E.forEach(s,(l,u)=>{var c;b("IndexedDbIndexManager",`Using index ${c=l,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(g=>`${g.fieldPath}:${g.kind}`).join(",")}`} to execute ${qs(n)}`);const h=function(g,_){const k=Dg(_);if(k===void 0)return null;for(const T of ud(g,k.fieldPath))switch(T.op){case"array-contains-any":return T.value.arrayValue.values||[];case"array-contains":return[T.value]}return null}(u,l),d=function(g,_){const k=new Map;for(const T of ss(_))for(const N of ud(g,T.fieldPath))switch(N.op){case"==":case"in":k.set(T.fieldPath.canonicalString(),N.value);break;case"not-in":case"!=":return k.set(T.fieldPath.canonicalString(),N.value),Array.from(k.values())}return null}(u,l),p=function(g,_){const k=[];let T=!0;for(const N of ss(_)){const R=N.kind===0?eE(g,N.fieldPath,g.startAt):tE(g,N.fieldPath,g.startAt);k.push(R.value),T&&(T=R.inclusive)}return new Fi(k,T)}(u,l),y=function(g,_){const k=[];let T=!0;for(const N of ss(_)){const R=N.kind===0?tE(g,N.fieldPath,g.endAt):eE(g,N.fieldPath,g.endAt);k.push(R.value),T&&(T=R.inclusive)}return new Fi(k,T)}(u,l),v=this.an(l,u,p),I=this.an(l,u,y),m=this.hn(l,u,d),f=this.ln(l.indexId,h,v,p.inclusive,I,y.inclusive,m);return E.forEach(f,g=>r.H(g,n.limit).next(_=>{_.forEach(k=>{const T=P.fromSegments(k.documentKey);o.has(T)||(o=o.add(T),a.push(T))})}))}).next(()=>a)}return E.resolve(null)})}un(e){let n=this.on.get(e);return n||(e.filters.length===0?n=[e]:n=QB(he.create(e.filters,"and")).map(r=>Mg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.on.set(e,n),n)}ln(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let h=0;h<l;++h){const d=n?this.fn(n[h/u]):$c,p=this.dn(e,d,r[h%u],i),y=this._n(e,d,s[h%u],o),v=a.map(I=>this.dn(e,d,I,!0));c.push(...this.createRange(p,y,v))}return c}dn(e,n,r,i){const s=new hs(e,P.empty(),n,r);return i?s:s.He()}_n(e,n,r,i){const s=new hs(e,P.empty(),n,r);return i?s.He():s}cn(e,n){const r=new GB(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.Ze(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.un(n);return E.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let l=new Te(qe.comparator),u=!1;for(const c of a.filters)for(const h of c.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:l=l.add(h.field));for(const c of a.orderBy)c.field.isKeyField()||(l=l.add(c.field));return l.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(n)&&i.length>1&&r===2?1:r)}wn(e,n){const r=new tl;for(const i of ss(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.We(i.kind);cs.be._e(s,o)}return r.Ge()}fn(e){const n=new tl;return cs.be._e(e,n.We(0)),n.Ge()}mn(e,n){const r=new tl;return cs.be._e(js(this.databaseId,n),r.We(function(i){const s=ss(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Ge()}hn(e,n,r){if(r===null)return[];let i=[];i.push(new tl);let s=0;for(const o of ss(e)){const a=r[s++];for(const l of i)if(this.gn(n,o.fieldPath)&&Iu(a))i=this.yn(i,o,a);else{const u=l.We(o.kind);cs.be._e(a,u)}}return this.pn(i)}an(e,n,r){return this.hn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Ge();return n}yn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new tl;l.seed(a.Ge()),cs.be._e(o,l.We(n.kind)),s.push(l)}return s}gn(e,n){return!!e.filters.find(r=>r instanceof Z&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Fc(e),i=rl(e);return(n?r.j("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.j()).next(s=>{const o=[];return E.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(u,c){const h=c?new ad(c.sequenceNumber,new vn(Gs(c.readTime),new P(sr(c.documentKey)),c.largestBatchId)):ad.empty(),d=u.fields.map(([p,y])=>new P4(qe.fromServerFormat(p),y));return new Mb(u.indexId,u.collectionGroup,d,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:X(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Fc(e),s=rl(e);return this.In(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>E.forEach(a,l=>s.put(mE(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return E.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?E.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),E.forEach(a,l=>this.Tn(e,i,l).next(u=>{const c=this.En(s,l);return u.isEqual(c)?E.resolve():this.An(e,s,l,u,c)}))))})}Rn(e,n,r,i){return nl(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return nl(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}Tn(e,n,r){const i=nl(e);let s=new Te(ti);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new hs(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}En(e,n){let r=new Te(ti);const i=this.wn(n,e);if(i==null)return r;const s=Dg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Iu(o))for(const a of o.arrayValue.values||[])r=r.add(new hs(n.indexId,e.key,this.fn(a),i))}else r=r.add(new hs(n.indexId,e.key,$c,i));return r}An(e,n,r,i,s){b("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,l,u,c,h){const d=a.getIterator(),p=l.getIterator();let y=fo(d),v=fo(p);for(;y||v;){let I=!1,m=!1;if(y&&v){const f=u(y,v);f<0?m=!0:f>0&&(I=!0)}else y!=null?m=!0:I=!0;I?(c(v),v=fo(p)):m?(h(y),y=fo(d)):(y=fo(d),v=fo(p))}}(i,s,ti,a=>{o.push(this.Rn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),E.waitFor(o)}In(e){let n=1;return rl(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ti(o,a)).filter((o,a,l)=>!a||ti(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ti(o,e),l=ti(o,n);if(a===0)i[0]=e.He();else if(a>0&&l<0)i.push(o),i.push(o.He());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Pn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,$c,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,$c,[]];s.push(IDBKeyRange.bound(a,l))}return s}Pn(e,n){return ti(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(EE)}getMinOffset(e,n){return E.mapArray(this.un(n),r=>this.cn(e,r).next(i=>i||$())).next(EE)}}function IE(t){return pt(t,"collectionParents")}function nl(t){return pt(t,"indexEntries")}function Fc(t){return pt(t,"indexConfiguration")}function rl(t){return pt(t,"indexState")}function EE(t){z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;vw(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new vn(e.readTime,e.documentKey,n)}/**
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
 */const SE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.X({range:o},(c,h,d)=>(a++,d.delete()));s.push(l.next(()=>{z(a===1)}));const u=[];for(const c of n.mutations){const h=zb(e,c.key.path,n.batchId);s.push(i.delete(h)),u.push(c.key)}return E.waitFor(s).next(()=>u)}function fd(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);class kf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.bn={}}static fe(e,n,r,i){z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new kf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ni(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=vo(e),o=ni(e);return o.add({}).next(a=>{z(typeof a=="number");const l=new Cw(a,n,r,i),u=function(d,p,y){const v=y.baseMutations.map(m=>Tu(d.le,m)),I=y.mutations.map(m=>Tu(d.le,m));return{userId:p,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:I}}(this.serializer,this.userId,l),c=[];let h=new Te((d,p)=>X(d.canonicalString(),p.canonicalString()));for(const d of i){const p=zb(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(u)),c.push(s.put(p,U4))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.bn[a]=l.keys()}),E.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return ni(e).get(n).next(r=>r?(z(r.userId===this.userId),us(this.serializer,r)):null)}Vn(e,n){return this.bn[n]?E.resolve(this.bn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.bn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ni(e).X({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(z(a.batchId>=r),s=us(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ni(e).X({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ni(e).j("userMutationsIndex",n).next(r=>r.map(i=>us(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=ah(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return vo(e).X({range:i},(o,a,l)=>{const[u,c,h]=o,d=sr(c);if(u===this.userId&&n.path.isEqual(d))return ni(e).get(h).next(p=>{if(!p)throw $();z(p.userId===this.userId),s.push(us(this.serializer,p))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Te(X);const i=[];return n.forEach(s=>{const o=ah(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=vo(e).X({range:a},(u,c,h)=>{const[d,p,y]=u,v=sr(p);d===this.userId&&s.path.isEqual(v)?r=r.add(y):h.done()});i.push(l)}),E.waitFor(i).next(()=>this.Sn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=ah(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Te(X);return vo(e).X({range:o},(l,u,c)=>{const[h,d,p]=l,y=sr(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):c.done()}).next(()=>this.Sn(e,a))}Sn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(ni(e).get(s).next(o=>{if(o===null)throw $();z(o.userId===this.userId),r.push(us(this.serializer,o))}))}),E.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return UA(e.at,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Dn(n.batchId)}),E.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Dn(e){delete this.bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return E.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return vo(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=sr(s[1]);i.push(l)}else a.done()}).next(()=>{z(i.length===0)})})}containsKey(e,n){return VA(e,this.userId,n)}Cn(e){return BA(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function VA(t,e,n){const r=ah(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return vo(t).X({range:s,Y:!0},(a,l,u)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function ni(t){return pt(t,"mutations")}function vo(t){return pt(t,"documentMutations")}function BA(t){return pt(t,"mutationQueues")}/**
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
 */class Qs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Qs(0)}static kn(){return new Qs(-1)}}/**
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
 */class JB{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Mn(e).next(n=>{const r=new Qs(n.highestTargetId);return n.highestTargetId=r.next(),this.On(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Mn(e).next(n=>B.fromTimestamp(new De(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Mn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Mn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.On(e,i)))}addTargetData(e,n){return this.$n(e,n).next(()=>this.Mn(e).next(r=>(r.targetCount+=1,this.Fn(n,r),this.On(e,r))))}updateTargetData(e,n){return this.$n(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>po(e).delete(n.targetId)).next(()=>this.Mn(e)).next(r=>(z(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return po(e).X((o,a)=>{const l=yl(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>E.waitFor(s)).next(()=>i)}forEachTarget(e,n){return po(e).X((r,i)=>{const s=yl(i);n(s)})}Mn(e){return TE(e).get("targetGlobalKey").next(n=>(z(n!==null),n))}On(e,n){return TE(e).put("targetGlobalKey",n)}$n(e,n){return po(e).put(MA(this.serializer,n))}Fn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Mn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=qs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return po(e).X({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=yl(a);Zu(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=li(e);return n.forEach(o=>{const a=Kt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),E.waitFor(i)}removeMatchingKeys(e,n,r){const i=li(e);return E.forEach(n,s=>{const o=Kt(s.path);return E.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=li(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=li(e);let s=J();return i.X({range:r,Y:!0},(o,a,l)=>{const u=sr(o[1]),c=new P(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Kt(n.path),i=IDBKeyRange.bound([r],[Lb(r)],!1,!0);let s=0;return li(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}he(e,n){return po(e).get(n).next(r=>r?yl(r):null)}}function po(t){return pt(t,"targets")}function TE(t){return pt(t,"targetGlobal")}function li(t){return pt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE([t,e],[n,r]){const i=X(t,n);return i===0?X(e,r):i}class ZB{constructor(e){this.Bn=e,this.buffer=new Te(kE),this.Ln=0}qn(){return++this.Ln}Un(e){const n=[e,this.qn()];if(this.buffer.size<this.Bn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();kE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ez{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Kn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Kn&&(this.Kn.cancel(),this.Kn=null)}get started(){return this.Kn!==null}Gn(e){b("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Kn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Kn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Yi(n)?b("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Qi(n)}await this.Gn(3e5)})}}class tz{constructor(e,n){this.Qn=e,this.params=n}calculateTargetCount(e,n){return this.Qn.jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return E.resolve(en.ct);const r=new ZB(n);return this.Qn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.Qn.zn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Qn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Qn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(SE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),SE):this.Wn(e,n))}getCacheSize(e){return this.Qn.getCacheSize(e)}Wn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Ng()<=re.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),E.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function nz(t,e){return new tz(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(e,n){this.db=e,this.garbageCollector=nz(this,n)}jn(e){const n=this.Hn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Hn(e){let n=0;return this.zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}zn(e,n){return this.Jn(e,(r,i)=>n(i))}addReference(e,n,r){return Uc(e,r)}removeReference(e,n,r){return Uc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Uc(e,n)}Yn(e,n){return function(r,i){let s=!1;return BA(r).Z(o=>VA(r,o,i).next(a=>(a&&(s=!0),E.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Jn(e,(o,a)=>{if(a<=n){const l=this.Yn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,B.min()),li(e).delete([0,Kt(o.path)])))});i.push(l)}}).next(()=>E.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Uc(e,n)}Jn(e,n){const r=li(e);let i,s=en.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==en.ct&&n(new P(sr(i)),s),s=u,i=l):s=en.ct}).next(()=>{s!==en.ct&&n(new P(sr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Uc(t,e){return li(t).put(function(n,r){return{targetId:0,path:Kt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class zA{constructor(){this.changes=new Xi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iz{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ts(e).put(r)}removeEntry(e,n,r){return ts(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],hd(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Xn(e,r)))}getEntry(e,n){let r=Ee.newInvalidDocument(n);return ts(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(il(n))},(i,s)=>{r=this.Zn(n,s)}).next(()=>r)}ts(e,n){let r={size:0,document:Ee.newInvalidDocument(n)};return ts(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(il(n))},(i,s)=>{r={document:this.Zn(n,s),size:fd(s)}}).next(()=>r)}getEntries(e,n){let r=nn();return this.es(e,n,(i,s)=>{const o=this.Zn(i,s);r=r.insert(i,o)}).next(()=>r)}ns(e,n){let r=nn(),i=new ye(P.comparator);return this.es(e,n,(s,o)=>{const a=this.Zn(s,o);r=r.insert(s,a),i=i.insert(s,fd(o))}).next(()=>({documents:r,ss:i}))}es(e,n,r){if(n.isEmpty())return E.resolve();let i=new Te(AE);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(il(i.first()),il(i.last())),o=i.getIterator();let a=o.getNext();return ts(e).X({index:"documentKeyIndex",range:s},(l,u,c)=>{const h=P.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&AE(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.G(il(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),hd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ts(e).j(IDBKeyRange.bound(o,a,!0)).next(l=>{let u=nn();for(const c of l){const h=this.Zn(P.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);h.isFoundDocument()&&(tc(n,h)||i.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=nn();const o=bE(n,r),a=bE(n,vn.max());return ts(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const h=this.Zn(P.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new sz(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return CE(e).get("remoteDocumentGlobalKey").next(n=>(z(!!n),n))}Xn(e,n){return CE(e).put("remoteDocumentGlobalKey",n)}Zn(e,n){if(n){const r=zB(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(B.min())))return r}return Ee.newInvalidDocument(e)}}function jA(t){return new iz(t)}class sz extends zA{constructor(e,n){super(),this.rs=e,this.trackRemovals=n,this.os=new Xi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Te((s,o)=>X(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.os.get(s);if(n.push(this.rs.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=fE(this.rs.serializer,o);i=i.add(s.path.popLast());const u=fd(l);r+=u-a.size,n.push(this.rs.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=fE(this.rs.serializer,o.convertToNoDocument(B.min()));n.push(this.rs.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.rs.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.rs.updateMetadata(e,r)),E.waitFor(n)}getFromCache(e,n){return this.rs.ts(e,n).next(r=>(this.os.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.rs.ns(e,n).next(({documents:r,ss:i})=>(i.forEach((s,o)=>{this.os.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function CE(t){return pt(t,"remoteDocumentGlobal")}function ts(t){return pt(t,"remoteDocumentsV14")}function il(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function bE(t,e){const n=e.documentKey.path.toArray();return[t,hd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function AE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=X(n[s],r[s]),i)return i;return i=X(n.length,r.length),i||(i=X(n[n.length-2],r[r.length-2]),i||X(n[n.length-1],r[r.length-1]))}/**
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
 */class oz{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class qA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ml(r.mutation,i,tn.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,n,r=J()){const i=or();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ml();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,J()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=nn();const o=Ll(),a=Ll();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Gr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ml(c.mutation,u,c.mutation.getFieldMask(),De.now())):o.set(u.key,tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new oz(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ll();let i=new ye((o,a)=>o-a),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||tn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||J()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=uA();c.forEach(d=>{if(!s.has(d)){const p=yA(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Sw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):E.resolve(or());let a=-1,l=s;return o.next(u=>E.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?E.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,J())).next(c=>({batchId:a,changes:lA(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new P(n)).next(r=>{let i=ml();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ml();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const l=function(u,c){return new Hr(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ee.newInvalidDocument(u)))});let o=ml();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Ml(u.mutation,l,tn.empty(),De.now()),tc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return E.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:Ke(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:xw(r.bundledQuery),readTime:Ke(r.readTime)}}(n)),E.resolve()}}/**
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
 */class lz{constructor(){this.overlays=new ye(P.comparator),this.hs=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=or();return E.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.de(e,n,s)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const i=or(),s=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ye((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=or(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=or(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return E.resolve(a)}de(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hs.get(i.largestBatchId).delete(r.key);this.hs.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Aw(n,r));let s=this.hs.get(n);s===void 0&&(s=J(),this.hs.set(n,s)),this.hs.set(n,s.add(r.key))}}/**
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
 */class Lw{constructor(){this.ls=new Te(ot.fs),this.ds=new Te(ot._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new ot(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new ot(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new P(new ie([])),r=new ot(n,e),i=new ot(n,e+1),s=[];return this.ds.forEachInRange([r,i],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new P(new ie([])),r=new ot(n,e),i=new ot(n,e+1);let s=J();return this.ds.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ot(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return P.comparator(e.key,n.key)||X(e.Es,n.Es)}static _s(e,n){return X(e.Es,n.Es)||P.comparator(e.key,n.key)}}/**
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
 */class uz{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new Te(ot.fs)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cw(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new ot(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ps(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),i=new ot(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.vs(o.Es);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Te(X);return n.forEach(i=>{const s=new ot(i,0),o=new ot(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.Es)})}),E.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new ot(new P(s),0);let a=new Te(X);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Es)),!0)},o),E.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(r=>{const i=this.vs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){z(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return E.forEach(n.mutations,i=>{const s=new ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new ot(n,0),i=this.Rs.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class cz{constructor(e){this.Ss=e,this.docs=new ye(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let r=nn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=nn();const o=n.path,a=new P(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||vw(Fb(c),r)<=0||(i.has(c.key)||tc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}Ds(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hz(this)}getSize(e){return E.resolve(this.size)}}class hz extends zA{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.rs.addEntry(e,i)):this.rs.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class dz{constructor(e){this.persistence=e,this.Cs=new Xi(n=>qs(n),Zu),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.xs=0,this.Ns=new Lw,this.targetCount=0,this.ks=Qs.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),E.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.$n(n),E.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.Ns.containsKey(n))}}/**
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
 */class KA{constructor(e,n){this.Ms={},this.overlays={},this.Os=new en(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new dz(this),this.indexManager=new YB,this.remoteDocumentCache=function(r){return new cz(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new LA(n),this.Ls=new az(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lz,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new uz(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new fz(this.Os.next());return this.referenceDelegate.qs(),r(i).next(s=>this.referenceDelegate.Us(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ks(e,n){return E.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class fz extends Vb{constructor(e){super(),this.currentSequenceNumber=e}}class Cf{constructor(e){this.persistence=e,this.Gs=new Lw,this.Qs=null}static js(e){return new Cf(e)}get zs(){if(this.Qs)return this.Qs;throw $()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),E.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(i=>this.zs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.zs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.zs,r=>{const i=P.fromPath(r);return this.Ws(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return E.or([()=>E.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pz{constructor(e){this.serializer=e}$(e,n,r,i){const s=new wf("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",qI,{unique:!0}),a.createObjectStore("documentMutations")}(e),NE(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=E.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),NE(e)),o=o.next(()=>function(a){const l=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,l){return l.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",qI,{unique:!0});const c=l.store("mutations"),h=u.map(d=>c.put(d));return E.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Js(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ys(s)))),r<7&&i>=7&&(o=o.next(()=>this.Xs(s))),r<8&&i>=8&&(o=o.next(()=>this.Zs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ti(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const l=a.createObjectStore("documentOverlays",{keyPath:X4});l.createIndex("collectionPathOverlayIndex",J4,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",Z4,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const l=a.createObjectStore("remoteDocumentsV14",{keyPath:V4});l.createIndex("documentKeyIndex",B4),l.createIndex("collectionGroupIndex",z4)}(e)).next(()=>this.ei(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ni(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:H4}).createIndex("sequenceNumberIndex",G4,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Q4}).createIndex("documentKeyIndex",Y4,{unique:!1})}(e))),o}Ys(e){let n=0;return e.store("remoteDocuments").X((r,i)=>{n+=fd(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Js(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.j().next(i=>E.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>E.forEach(a,l=>{z(l.userId===s.userId);const u=us(this.serializer,l);return UA(e,s.userId,u).next(()=>{})}))}))}Xs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const l=new ie(o),u=function(c){return[0,Kt(c)]}(l);s.push(n.get(u).next(c=>c?E.resolve():(h=>n.put({targetId:0,path:Kt(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>E.waitFor(s))})}Zs(e,n){e.createObjectStore("collectionParents",{keyPath:W4});const r=n.store("collectionParents"),i=new Ow,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Kt(l)})}};return n.store("remoteDocuments").X({Y:!0},(o,a)=>{const l=new ie(o);return s(l.popLast())}).next(()=>n.store("documentMutations").X({Y:!0},([o,a,l],u)=>{const c=sr(a);return s(c.popLast())}))}ti(e){const n=e.store("targets");return n.X((r,i)=>{const s=yl(i),o=MA(this.serializer,s);return n.put(o)})}ei(e,n){const r=n.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=n.store("remoteDocumentsV14"),l=(u=o,u.document?new P(ie.fromString(u.document.name).popFirst(5)):u.noDocument?P.fromSegments(u.noDocument.path):u.unknownDocument?P.fromSegments(u.unknownDocument.path):$()).path.toArray();var u;/**
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
*/const c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>E.waitFor(i))}ni(e,n){const r=n.store("mutations"),i=jA(this.serializer),s=new KA(Cf.js,this.serializer.le);return r.j().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:J();us(this.serializer,l).keys().forEach(h=>c=c.add(h)),a.set(l.userId,c)}),E.forEach(a,(l,u)=>{const c=new lt(u),h=Tf.fe(this.serializer,c),d=s.getIndexManager(c),p=kf.fe(c,this.serializer,d,s.referenceDelegate);return new qA(i,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Rg(n,en.ct),l).next()})})}}function NE(t){t.createObjectStore("targetDocuments",{keyPath:q4}).createIndex("documentTargetsIndex",K4,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",j4,{unique:!0}),t.createObjectStore("targetGlobal")}const Jp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Mw{constructor(e,n,r,i,s,o,a,l,u,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.si=s,this.window=o,this.document=a,this.ii=u,this.ri=c,this.oi=h,this.Os=null,this.$s=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.ai=null,this.hi=Number.NEGATIVE_INFINITY,this.li=d=>Promise.resolve(),!Mw.D())throw new C(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new rz(this,i),this.fi=n+"main",this.serializer=new LA(l),this.di=new $n(this.fi,this.oi,new pz(this.serializer)),this.Fs=new JB(this.referenceDelegate,this.serializer),this.remoteDocumentCache=jA(this.serializer),this.Ls=new jB,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,c===!1&&je("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,Jp);return this.mi(),this.gi(),this.yi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Fs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new en(e,this.ii)}).then(()=>{this.$s=!0}).catch(e=>(this.di&&this.di.close(),Promise.reject(e)))}pi(e){return this.li=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.di.B(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Vc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ii(e).next(n=>{n||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)))})}).next(()=>this.Ti(e)).next(n=>this.isPrimary&&!n?this.Ei(e).next(()=>!1):!!n&&this.Ai(e).next(()=>!0))).catch(e=>{if(Yi(e))return b("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return b("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.li(e)),this.isPrimary=e})}Ii(e){return sl(e).get("owner").next(n=>E.resolve(this.Ri(n)))}vi(e){return Vc(e).delete(this.clientId)}async Pi(){if(this.isPrimary&&!this.bi(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=pt(n,"clientMetadata");return r.j().next(i=>{const s=this.Vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return E.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const n of e)this._i.removeItem(this.Si(n.clientId))}}yi(){this.ai=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Pi()).then(()=>this.yi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ti(e){return this.ri?E.resolve(!0):sl(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Di(n.ownerId)){if(this.Ri(n)&&this.networkEnabled)return!0;if(!this.Ri(n)){if(!n.allowTabSynchronization)throw new C(S.FAILED_PRECONDITION,Jp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Vc(e).j().next(r=>this.Vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&b("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.$s=!1,this.Ci(),this.ai&&(this.ai.cancel(),this.ai=null),this.xi(),this.Ni(),await this.di.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Rg(e,en.ct);return this.Ei(n).next(()=>this.vi(n))}),this.di.close(),this.ki()}Vi(e,n){return e.filter(r=>this.bi(r.updateTimeMs,n)&&!this.Di(r.clientId))}Mi(){return this.runTransaction("getActiveClients","readonly",e=>Vc(e).j().next(n=>this.Vi(n,18e5).map(r=>r.clientId)))}get started(){return this.$s}getMutationQueue(e,n){return kf.fe(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new XB(e,this.serializer.le.databaseId)}getDocumentOverlayCache(e){return Tf.fe(this.serializer,e)}getBundleCache(){return this.Ls}runTransaction(e,n,r){b("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.oi)===15?tB:o===14?Kb:o===13?qb:o===12?eB:o===11?jb:void $();var o;let a;return this.di.runTransaction(e,i,s,l=>(a=new Rg(l,this.Os?this.Os.next():en.ct),n==="readwrite-primary"?this.Ii(a).next(u=>!!u||this.Ti(a)).next(u=>{if(!u)throw je(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.li(!1)),new C(S.FAILED_PRECONDITION,Ub);return r(a)}).next(u=>this.Ai(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}Oi(e){return sl(e).get("owner").next(n=>{if(n!==null&&this.bi(n.leaseTimestampMs,5e3)&&!this.Di(n.ownerId)&&!this.Ri(n)&&!(this.ri||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(S.FAILED_PRECONDITION,Jp)})}Ai(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return sl(e).put("owner",n)}static D(){return $n.D()}Ei(e){const n=sl(e);return n.get("owner").next(r=>this.Ri(r)?(b("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):E.resolve())}bi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(je(`Detected an update time that is in the future: ${e} > ${r}`),!1))}mi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Ci();const n=/(?:Version|Mobile)\/1[456]/;aP()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Ni(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Di(e){var n;try{const r=((n=this._i)===null||n===void 0?void 0:n.getItem(this.Si(e)))!==null;return b("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return je("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ci(){if(this._i)try{this._i.setItem(this.Si(this.clientId),String(Date.now()))}catch(e){je("Failed to set zombie client id.",e)}}ki(){if(this._i)try{this._i.removeItem(this.Si(this.clientId))}catch{}}Si(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function sl(t){return pt(t,"owner")}function Vc(t){return pt(t,"clientMetadata")}function $w(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Fw{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=i}static Bi(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Fw(e,n.fromCache,r,i)}}/**
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
 */class WA{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Ki(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(nE(n))return E.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cd(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=J(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Qi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,cd(n,null,"F")):this.zi(e,u,n,l)}))})))}Ki(e,n,r,i){return nE(n)||i.isEqual(B.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(Ng()<=re.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fg(n)),this.zi(e,o,n,$b(i,-1)))})}Qi(e,n){let r=new Te(oA(e));return n.forEach((i,s)=>{tc(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return Ng()<=re.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Fg(n)),this.qi.getDocumentsMatchingQuery(e,n,vn.min())}zi(e,n,r,i){return this.qi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mz{constructor(e,n,r,i){this.persistence=e,this.Wi=n,this.serializer=i,this.Hi=new ye(X),this.Ji=new Xi(s=>qs(s),Zu),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qA(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function HA(t,e,n,r){return new mz(t,e,n,r)}async function GA(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=J();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function gz(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=E.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(y=>{const v=l.docVersions.get(p);z(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=J();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function QA(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function yz(t,e){const n=L(t),r=e.snapshotVersion;let i=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Hi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(nt.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,v,I){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,p,c)&&a.push(n.Fs.updateTargetData(s,p))});let l=nn(),u=J();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(YA(s,o,e.documentUpdates).next(c=>{l=c.er,u=c.nr})),!r.isEqual(B.min())){const c=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Hi=i,s))}function YA(t,e,n){let r=J(),i=J();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=nn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{er:o,nr:i}})}function vz(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function da(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Fs.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.Fs.allocateTargetId(r).next(o=>(i=new Rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Hi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(r.targetId,r),n.Ji.set(e,r.targetId)),r})}async function fa(t,e,n){const r=L(t),i=r.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Yi(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Hi=r.Hi.remove(e),r.Ji.delete(i.target)}function pd(t,e,n){const r=L(t);let i=B.min(),s=J();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=L(a),h=c.Ji.get(u);return h!==void 0?E.resolve(c.Hi.get(h)):c.Fs.getTargetData(l,u)}(r,o,ln(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Fs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Wi.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:J())).next(a=>(ZA(r,sA(e),a),{documents:a,sr:s})))}function XA(t,e){const n=L(t),r=L(n.Fs),i=n.Hi.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.he(s,e).next(o=>o?o.target:null))}function JA(t,e){const n=L(t),r=n.Yi.get(e)||B.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Xi.getAllFromCollectionGroup(i,e,$b(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(ZA(n,e,i),i))}function ZA(t,e,n){let r=t.Yi.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Yi.set(e,r)}async function wz(t,e,n,r){const i=L(t);let s=J(),o=nn();for(const u of n){const c=e.ir(u.metadata.name);u.document&&(s=s.add(c));const h=e.rr(u);h.setReadTime(e.ur(u.metadata.readTime)),o=o.insert(c,h)}const a=i.Xi.newChangeBuffer({trackRemovals:!0}),l=await da(i,function(u){return ln(Da(ie.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>YA(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.Fs.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Fs.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.er,c.nr)).next(()=>c.er)))}async function _z(t,e,n=J()){const r=await da(t,ln(xw(e.bundledQuery))),i=L(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ke(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ls.saveNamedQuery(s,e);const a=r.withResumeToken(nt.EMPTY_BYTE_STRING,o);return i.Hi=i.Hi.insert(a.targetId,a),i.Fs.updateTargetData(s,a).next(()=>i.Fs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Fs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ls.saveNamedQuery(s,e))})}function DE(t,e){return`firestore_clients_${t}_${e}`}function RE(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Zp(t,e){return`firestore_targets_${t}_${e}`}class md{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static cr(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new md(e,n,i.state,s):(je("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $l{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static cr(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new $l(e,r.state,i):(je("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ar(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class gd{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static cr(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Tw();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Bb(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new gd(e,s):(je("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Uw{constructor(e,n){this.clientId=e,this.onlineState=n}static cr(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Uw(n.clientId,n.onlineState):(je("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Kg{constructor(){this.activeTargetIds=Tw()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class em{constructor(e,n,r,i,s){this.window=e,this.si=n,this.persistenceKey=r,this.dr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.wr.bind(this),this.mr=new ye(X),this.started=!1,this.gr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.yr=DE(this.persistenceKey,this.dr),this.pr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.mr=this.mr.insert(this.dr,new Kg),this.Ir=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Tr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Er=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ar=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Mi();for(const r of e){if(r===this.dr)continue;const i=this.getItem(DE(this.persistenceKey,r));if(i){const s=gd.cr(r,i);s&&(this.mr=this.mr.insert(s.clientId,s))}}this.vr();const n=this.storage.getItem(this.Ar);if(n){const r=this.Pr(n);r&&this.br(r)}for(const r of this.gr)this.wr(r);this.gr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.pr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Vr(this.mr)}isActiveQueryTarget(e){let n=!1;return this.mr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Sr(e,"pending")}updateMutationState(e,n,r){this.Sr(e,n,r),this.Dr(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Zp(this.persistenceKey,e));if(r){const i=$l.cr(e,r);i&&(n=i.state)}}return this.Cr.hr(e),this.vr(),n}removeLocalQueryTarget(e){this.Cr.lr(e),this.vr()}isLocalQueryTarget(e){return this.Cr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Zp(this.persistenceKey,e))}updateQueryState(e,n,r){this.Nr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Dr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.kr(e)}notifyBundleLoaded(e){this.Mr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.yr),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return b("SharedClientState","READ",e,n),n}setItem(e,n){b("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){b("SharedClientState","REMOVE",e),this.storage.removeItem(e)}wr(e){const n=e;if(n.storageArea===this.storage){if(b("SharedClientState","EVENT",n.key,n.newValue),n.key===this.yr)return void je("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ir.test(n.key)){if(n.newValue==null){const r=this.Or(n.key);return this.$r(r,null)}{const r=this.Fr(n.key,n.newValue);if(r)return this.$r(r.clientId,r)}}else if(this.Tr.test(n.key)){if(n.newValue!==null){const r=this.Br(n.key,n.newValue);if(r)return this.Lr(r)}}else if(this.Er.test(n.key)){if(n.newValue!==null){const r=this.qr(n.key,n.newValue);if(r)return this.Ur(r)}}else if(n.key===this.Ar){if(n.newValue!==null){const r=this.Pr(n.newValue);if(r)return this.br(r)}}else if(n.key===this.pr){const r=function(i){let s=en.ct;if(i!=null)try{const o=JSON.parse(i);z(typeof o=="number"),s=o}catch(o){je("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==en.ct&&this.sequenceNumberHandler(r)}else if(n.key===this.Rr){const r=this.Kr(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Gr(i)))}}}else this.gr.push(n)})}}get Cr(){return this.mr.get(this.dr)}vr(){this.setItem(this.yr,this.Cr.ar())}Sr(e,n,r){const i=new md(this.currentUser,e,n,r),s=RE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ar())}Dr(e){const n=RE(this.persistenceKey,this.currentUser,e);this.removeItem(n)}kr(e){const n={clientId:this.dr,onlineState:e};this.storage.setItem(this.Ar,JSON.stringify(n))}Nr(e,n,r){const i=Zp(this.persistenceKey,e),s=new $l(e,n,r);this.setItem(i,s.ar())}Mr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Rr,n)}Or(e){const n=this.Ir.exec(e);return n?n[1]:null}Fr(e,n){const r=this.Or(e);return gd.cr(r,n)}Br(e,n){const r=this.Tr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return md.cr(new lt(s),i,n)}qr(e,n){const r=this.Er.exec(e),i=Number(r[1]);return $l.cr(i,n)}Pr(e){return Uw.cr(e)}Kr(e){return JSON.parse(e)}async Lr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Qr(e.batchId,e.state,e.error);b("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ur(e){return this.syncEngine.jr(e.targetId,e.state,e.error)}$r(e,n){const r=n?this.mr.insert(e,n):this.mr.remove(e),i=this.Vr(this.mr),s=this.Vr(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.zr(o,a).then(()=>{this.mr=r})}br(e){this.mr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Vr(e){let n=Tw();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class eN{constructor(){this.Wr=new Kg,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new Kg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Iz{Jr(e){}shutdown(){}}/**
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
 */class xE{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bc=null;function tm(){return Bc===null?Bc=268435456+Math.round(2147483648*Math.random()):Bc++,"0x"+Bc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ez={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Sz{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const Rt="WebChannelConnection";class Tz extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,i,s){const o=tm(),a=this.Io(e,n);b("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.To(l,i,s),this.Eo(e,a,l,r).then(u=>(b("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Kn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}Ao(e,n,r,i,s,o){return this.po(e,n,r,i,s)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Na,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Io(e,n){const r=Ez[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,i){const s=tm();return new Promise((o,a)=>{const l=new _4;l.setWithCredentials(!0),l.listenOnce(y4.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Yp.NO_ERROR:const c=l.getResponseJson();b(Rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Yp.TIMEOUT:b(Rt,`RPC '${e}' ${s} timed out`),a(new C(S.DEADLINE_EXCEEDED,"Request time out"));break;case Yp.HTTP_ERROR:const h=l.getStatus();if(b(Rt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(v){const I=v.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(I)>=0?I:S.UNKNOWN}(p.status);a(new C(y,p.message))}else a(new C(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new C(S.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{b(Rt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);b(Rt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=tm(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=m4(),a=g4(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new w4({})),this.To(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");b(Rt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const p=new Sz({io:v=>{d?b(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(h||(b(Rt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),b(Rt,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},ro:()=>c.close()}),y=(v,I,m)=>{v.listen(I,f=>{try{m(f)}catch(g){setTimeout(()=>{throw g},0)}})};return y(c,Oc.EventType.OPEN,()=>{d||b(Rt,`RPC '${e}' stream ${i} transport opened.`)}),y(c,Oc.EventType.CLOSE,()=>{d||(d=!0,b(Rt,`RPC '${e}' stream ${i} transport closed`),p.fo())}),y(c,Oc.EventType.ERROR,v=>{d||(d=!0,Kn(Rt,`RPC '${e}' stream ${i} transport errored:`,v),p.fo(new C(S.UNAVAILABLE,"The operation could not be completed")))}),y(c,Oc.EventType.MESSAGE,v=>{var I;if(!d){const m=v.data[0];z(!!m);const f=m,g=f.error||((I=f[0])===null||I===void 0?void 0:I.error);if(g){b(Rt,`RPC '${e}' stream ${i} received error:`,g);const _=g.status;let k=function(N){const R=Qe[N];if(R!==void 0)return _A(R)}(_),T=g.message;k===void 0&&(k=S.INTERNAL,T="Unknown error status: "+_+" with message "+g.message),d=!0,p.fo(new C(k,T)),c.close()}else b(Rt,`RPC '${e}' stream ${i} received:`,m),p._o(m)}}),y(a,v4.STAT_EVENT,v=>{v.stat===VI.PROXY?b(Rt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===VI.NOPROXY&&b(Rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.lo()},0),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function tN(){return typeof window<"u"?window:null}function dh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t){return new xB(t,!0)}/**
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
 */class Vw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=i,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class nN{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Mo=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new Vw(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(je(n.toString()),je("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.$o===n&&this.Xo(r,i)},r=>{e(()=>{const i=new C(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(i)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(i=>{r(()=>this.Zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kz extends nN{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=LB(this.serializer,e),r=function(i){if(!("targetChange"in i))return B.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?B.min():s.readTime?Ke(s.readTime):B.min()}(e);return this.listener.eu(n,r)}nu(e){const n={};n.database=Su(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=ld(a)?{documents:NA(i,a)}:{query:DA(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=TA(i,s.resumeToken);const l=Ug(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(B.min())>0){o.readTime=ha(i,s.snapshotVersion.toTimestamp());const l=Ug(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=$B(this.serializer,e);r&&(n.labels=r),this.zo(n)}su(e){const n={};n.database=Su(this.serializer),n.removeTarget=e,this.zo(n)}}class Cz extends nN{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=MB(e.writeResults,e.commitTime),r=Ke(e.commitTime);return this.listener.uu(r,n)}return z(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Su(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Tu(this.serializer,r))};this.zo(n)}}/**
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
 */class bz extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.hu=!1}lu(){if(this.hu)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.po(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(S.UNKNOWN,i.toString())})}Ao(e,n,r,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(S.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class Az{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(je(n),this.wu=!1):b("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class Nz{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{r.enqueueAndForget(async()=>{Ji(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=L(a);l.Au.add(4),await Pa(l),l.Pu.set("Unknown"),l.Au.delete(4),await oc(l)}(this))})}),this.Pu=new Az(r,i)}}async function oc(t){if(Ji(t))for(const e of t.Ru)await e(!0)}async function Pa(t){for(const e of t.Ru)await e(!1)}function bf(t,e){const n=L(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),jw(n)?zw(n):La(n).Uo()&&Bw(n,e))}function ku(t,e){const n=L(t),r=La(n);n.Eu.delete(e),r.Uo()&&rN(n,e),n.Eu.size===0&&(r.Uo()?r.Qo():Ji(n)&&n.Pu.set("Unknown"))}function Bw(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}La(t).nu(e)}function rN(t,e){t.bu.Lt(e),La(t).su(e)}function zw(t){t.bu=new AB({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),La(t).start(),t.Pu.mu()}function jw(t){return Ji(t)&&!La(t).qo()&&t.Eu.size>0}function Ji(t){return L(t).Au.size===0}function iN(t){t.bu=void 0}async function Dz(t){t.Eu.forEach((e,n)=>{Bw(t,e)})}async function Rz(t,e){iN(t),jw(t)?(t.Pu.pu(e),zw(t)):t.Pu.set("Unknown")}async function xz(t,e,n){if(t.Pu.set("Online"),e instanceof SA&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Eu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Eu.delete(o),r.bu.removeTarget(o))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yd(t,r)}else if(e instanceof hh?t.bu.Wt(e):e instanceof EA?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(B.min()))try{const r=await QA(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.bu.ue(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Eu.get(l);u&&i.Eu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Eu.get(a);if(!u)return;i.Eu.set(a,u.withResumeToken(nt.EMPTY_BYTE_STRING,u.snapshotVersion)),rN(i,a);const c=new Rr(u.target,a,l,u.sequenceNumber);Bw(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await yd(t,r)}}async function yd(t,e,n){if(!Yi(e))throw e;t.Au.add(1),await Pa(t),t.Pu.set("Offline"),n||(n=()=>QA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await oc(t)})}function sN(t,e){return e().catch(n=>yd(t,n,e))}async function Oa(t){const e=L(t),n=Ui(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;Pz(e);)try{const i=await vz(e.localStore,r);if(i===null){e.Tu.length===0&&n.Qo();break}r=i.batchId,Oz(e,i)}catch(i){await yd(e,i)}oN(e)&&aN(e)}function Pz(t){return Ji(t)&&t.Tu.length<10}function Oz(t,e){t.Tu.push(e);const n=Ui(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function oN(t){return Ji(t)&&!Ui(t).qo()&&t.Tu.length>0}function aN(t){Ui(t).start()}async function Lz(t){Ui(t).au()}async function Mz(t){const e=Ui(t);for(const n of t.Tu)e.ou(n.mutations)}async function $z(t,e,n){const r=t.Tu.shift(),i=bw.from(r,e,n);await sN(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Oa(t)}async function Fz(t,e){e&&Ui(t).ru&&await async function(n,r){if(i=r.code,wA(i)&&i!==S.ABORTED){const s=n.Tu.shift();Ui(n).Go(),await sN(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Oa(n)}var i}(t,e),oN(t)&&aN(t)}async function PE(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=Ji(n);n.Au.add(3),await Pa(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await oc(n)}async function Wg(t,e){const n=L(t);e?(n.Au.delete(2),await oc(n)):e||(n.Au.add(2),await Pa(n),n.Pu.set("Unknown"))}function La(t){return t.Vu||(t.Vu=function(e,n,r){const i=L(e);return i.lu(),new kz(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:Dz.bind(null,t),co:Rz.bind(null,t),eu:xz.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),jw(t)?zw(t):t.Pu.set("Unknown")):(await t.Vu.stop(),iN(t))})),t.Vu}function Ui(t){return t.Su||(t.Su=function(e,n,r){const i=L(e);return i.lu(),new Cz(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{oo:Lz.bind(null,t),co:Fz.bind(null,t),cu:Mz.bind(null,t),uu:$z.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Oa(t)):(await t.Su.stop(),t.Tu.length>0&&(b("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class qw{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new qw(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ma(t,e){if(je("AsyncQueue",`${e}: ${t}`),Yi(t))return new C(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Go{constructor(e){this.comparator=e?(n,r)=>e(n,r)||P.comparator(n.key,r.key):(n,r)=>P.comparator(n.key,r.key),this.keyedMap=ml(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new Go(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Go)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Go;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class OE{constructor(){this.Du=new ye(P.comparator)}track(e){const n=e.doc.key,r=this.Du.get(n);r?e.type!==0&&r.type===3?this.Du=this.Du.insert(n,e):e.type===3&&r.type!==1?this.Du=this.Du.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Du=this.Du.remove(n):e.type===1&&r.type===2?this.Du=this.Du.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):$():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,r)=>{e.push(r)}),e}}class pa{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new pa(e,n,Go.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Uz{constructor(){this.xu=void 0,this.listeners=[]}}class Vz{constructor(){this.queries=new Xi(e=>iA(e),ec),this.onlineState="Unknown",this.Nu=new Set}}async function Kw(t,e){const n=L(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Uz),i)try{s.xu=await n.onListen(r)}catch(o){const a=Ma(o,`Initialization of query '${Fg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&Hw(n)}async function Ww(t,e){const n=L(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Bz(t,e){const n=L(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(i)&&(r=!0);o.xu=i}}r&&Hw(n)}function zz(t,e,n){const r=L(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Hw(t){t.Nu.forEach(e=>{e.next()})}class Gw{constructor(e,n,r){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=r||{}}Mu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new pa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Uu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=pa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jz{constructor(e,n){this.Ku=e,this.byteLength=n}Gu(){return"metadata"in this.Ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this.serializer=e}ir(e){return cr(this.serializer,e)}rr(e){return e.metadata.exists?AA(this.serializer,e.document,!1):Ee.newNoDocument(this.ir(e.metadata.name),this.ur(e.metadata.readTime))}ur(e){return Ke(e)}}class qz{constructor(e,n,r){this.Qu=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=lN(e)}ju(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Ku.namedQuery)this.queries.push(e.Ku.namedQuery);else if(e.Ku.documentMetadata){this.documents.push({metadata:e.Ku.documentMetadata}),e.Ku.documentMetadata.exists||++n;const r=ie.fromString(e.Ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ku.document&&(this.documents[this.documents.length-1].document=e.Ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}zu(e){const n=new Map,r=new LE(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.ir(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||J()).add(s);n.set(o,a)}}return n}async complete(){const e=await wz(this.localStore,new LE(this.serializer),this.documents,this.Qu.id),n=this.zu(this.documents);for(const r of this.queries)await _z(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Wu:this.collectionGroups,Hu:e}}}function lN(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class uN{constructor(e){this.key=e}}class cN{constructor(e){this.key=e}}class hN{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=J(),this.mutatedKeys=J(),this.Zu=oA(e),this.tc=new Go(this.Zu)}get ec(){return this.Ju}nc(e,n){const r=n?n.sc:new OE,i=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=tc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),I=!0):this.ic(d,p)||(r.track({type:2,doc:p}),I=!0,(l&&this.Zu(p,l)>0||u&&this.Zu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),I=!0):d&&!p&&(r.track({type:1,doc:d}),I=!0,(l||u)&&(a=!0)),I&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{tc:o,sc:r,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,c)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return p(h)-p(d)}(u.type,c.type)||this.Zu(u.doc,c.doc)),this.rc(r);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,l=a!==this.Yu;return this.Yu=a,s.length!==0||l?{snapshot:new pa(this.query,e.tc,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new OE,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=J(),this.tc.forEach(r=>{this.cc(r.key)&&(this.Xu=this.Xu.add(r.key))});const n=[];return e.forEach(r=>{this.Xu.has(r)||n.push(new cN(r))}),this.Xu.forEach(r=>{e.has(r)||n.push(new uN(r))}),n}ac(e){this.Ju=e.sr,this.Xu=J();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return pa.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Kz{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Wz{constructor(e){this.key=e,this.lc=!1}}class Hz{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Xi(a=>iA(a),ec),this._c=new Map,this.wc=new Set,this.mc=new ye(P.comparator),this.gc=new Map,this.yc=new Lw,this.Ic={},this.Tc=new Map,this.Ec=Qs.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Gz(t,e){const n=Zw(t);let r,i;const s=n.dc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.hc();else{const o=await da(n.localStore,ln(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Qw(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&bf(n.remoteStore,o)}return i}async function Qw(t,e,n,r,i){t.Rc=(h,d,p)=>async function(y,v,I,m){let f=v.view.nc(I);f.ji&&(f=await pd(y.localStore,v.query,!1).then(({documents:k})=>v.view.nc(k,f)));const g=m&&m.targetChanges.get(v.targetId),_=v.view.applyChanges(f,y.isPrimaryClient,g);return Hg(y,v.targetId,_.uc),_.snapshot}(t,h,d,p);const s=await pd(t.localStore,e,!0),o=new hN(e,s.sr),a=o.nc(s.documents),l=ic.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Hg(t,n,u.uc);const c=new Kz(e,n,o);return t.dc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Qz(t,e){const n=L(t),r=n.dc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!ec(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await fa(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ku(n.remoteStore,r.targetId),ma(n,r.targetId)}).catch(Qi)):(ma(n,r.targetId),await fa(n.localStore,r.targetId,!0))}async function Yz(t,e,n){const r=e0(t);try{const i=await function(s,o){const a=L(s),l=De.now(),u=o.reduce((d,p)=>d.add(p.key),J());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=nn(),y=J();return a.Xi.getEntries(d,u).next(v=>{p=v,p.forEach((I,m)=>{m.isValidDocument()||(y=y.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const I=[];for(const m of o){const f=kB(m,c.get(m.key).overlayedDocument);f!=null&&I.push(new Gr(m.key,f,Qb(f.value.mapValue),Ne.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,I,o)}).next(v=>{h=v;const I=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,I)})}).then(()=>({batchId:h.batchId,changes:lA(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Ic[s.currentUser.toKey()];l||(l=new ye(X)),l=l.insert(o,a),s.Ic[s.currentUser.toKey()]=l}(r,i.batchId,n),await Qr(r,i.changes),await Oa(r.remoteStore)}catch(i){const s=Ma(i,"Failed to persist write");n.reject(s)}}async function dN(t,e){const n=L(t);try{const r=await yz(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.gc.get(s);o&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.lc=!0:i.modifiedDocuments.size>0?z(o.lc):i.removedDocuments.size>0&&(z(o.lc),o.lc=!1))}),await Qr(n,r,e)}catch(r){await Qi(r)}}function ME(t,e,n){const r=L(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=L(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.ku(o)&&(l=!0)}),l&&Hw(a)}(r.eventManager,e),i.length&&r.fc.eu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Xz(t,e,n){const r=L(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.gc.get(e),s=i&&i.key;if(s){let o=new ye(P.comparator);o=o.insert(s,Ee.newNoDocument(s,B.min()));const a=J().add(s),l=new rc(B.min(),new Map,new ye(X),o,a);await dN(r,l),r.mc=r.mc.remove(s),r.gc.delete(e),Jw(r)}else await fa(r.localStore,e,!1).then(()=>ma(r,e,n)).catch(Qi)}async function Jz(t,e){const n=L(t),r=e.batch.batchId;try{const i=await gz(n.localStore,e);Xw(n,r,null),Yw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qr(n,i)}catch(i){await Qi(i)}}async function Zz(t,e,n){const r=L(t);try{const i=await function(s,o){const a=L(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(z(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Xw(r,e,n),Yw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qr(r,i)}catch(i){await Qi(i)}}async function ej(t,e){const n=L(t);Ji(n.remoteStore)||b("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=L(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Tc.get(r)||[];i.push(e),n.Tc.set(r,i)}catch(r){const i=Ma(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Yw(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function Xw(t,e,n){const r=L(t);let i=r.Ic[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ic[r.currentUser.toKey()]=i}}function ma(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.dc.delete(r),n&&t.fc.vc(r,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(r=>{t.yc.containsKey(r)||fN(t,r)})}function fN(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(ku(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),Jw(t))}function Hg(t,e,n){for(const r of n)r instanceof uN?(t.yc.addReference(r.key,e),tj(t,r)):r instanceof cN?(b("SyncEngine","Document no longer in limbo: "+r.key),t.yc.removeReference(r.key,e),t.yc.containsKey(r.key)||fN(t,r.key)):$()}function tj(t,e){const n=e.key,r=n.path.canonicalString();t.mc.get(n)||t.wc.has(r)||(b("SyncEngine","New document in limbo: "+n),t.wc.add(r),Jw(t))}function Jw(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new P(ie.fromString(e)),r=t.Ec.next();t.gc.set(r,new Wz(n)),t.mc=t.mc.insert(n,r),bf(t.remoteStore,new Rr(ln(Da(n.path)),r,"TargetPurposeLimboResolution",en.ct))}}async function Qr(t,e,n){const r=L(t),i=[],s=[],o=[];r.dc.isEmpty()||(r.dc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Fw.Bi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fc.eu(i),await async function(a,l){const u=L(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>E.forEach(l,h=>E.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>E.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Yi(c))throw c;b("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Hi.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);u.Hi=u.Hi.insert(h,y)}}}(r.localStore,s))}async function nj(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await GA(n.localStore,e);n.currentUser=e,function(i,s){i.Tc.forEach(o=>{o.forEach(a=>{a.reject(new C(S.CANCELLED,s))})}),i.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qr(n,r.tr)}}function rj(t,e){const n=L(t),r=n.gc.get(e);if(r&&r.lc)return J().add(r.key);{let i=J();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.dc.get(o);i=i.unionWith(a.view.ec)}return i}}async function ij(t,e){const n=L(t),r=await pd(n.localStore,e.query,!0),i=e.view.ac(r);return n.isPrimaryClient&&Hg(n,e.targetId,i.uc),i}async function sj(t,e){const n=L(t);return JA(n.localStore,e).then(r=>Qr(n,r))}async function oj(t,e,n,r){const i=L(t),s=await function(o,a){const l=L(o),u=L(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",c=>u.Vn(c,a).next(h=>h?l.localDocuments.getDocuments(c,h):E.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Oa(i.remoteStore):n==="acknowledged"||n==="rejected"?(Xw(i,e,r||null),Yw(i,e),function(o,a){L(L(o).mutationQueue).Dn(a)}(i.localStore,e)):$(),await Qr(i,s)):b("SyncEngine","Cannot apply mutation batch with id: "+e)}async function aj(t,e){const n=L(t);if(Zw(n),e0(n),e===!0&&n.Ac!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await $E(n,r.toArray());n.Ac=!0,await Wg(n.remoteStore,!0);for(const s of i)bf(n.remoteStore,s)}else if(e===!1&&n.Ac!==!1){const r=[];let i=Promise.resolve();n._c.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ma(n,o),fa(n.localStore,o,!0))),ku(n.remoteStore,o)}),await i,await $E(n,r),function(s){const o=L(s);o.gc.forEach((a,l)=>{ku(o.remoteStore,l)}),o.yc.Is(),o.gc=new Map,o.mc=new ye(P.comparator)}(n),n.Ac=!1,await Wg(n.remoteStore,!1)}}async function $E(t,e,n){const r=L(t),i=[],s=[];for(const o of e){let a;const l=r._c.get(o);if(l&&l.length!==0){a=await da(r.localStore,ln(l[0]));for(const u of l){const c=r.dc.get(u),h=await ij(r,c);h.snapshot&&s.push(h.snapshot)}}else{const u=await XA(r.localStore,o);a=await da(r.localStore,u),await Qw(r,pN(u),o,!1,a.resumeToken)}i.push(a)}return r.fc.eu(s),i}function pN(t){return rA(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function lj(t){const e=L(t);return L(L(e.localStore).persistence).Mi()}async function uj(t,e,n,r){const i=L(t);if(i.Ac)return void b("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await JA(i.localStore,sA(s[0])),a=rc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",nt.EMPTY_BYTE_STRING);await Qr(i,o,a);break}case"rejected":await fa(i.localStore,e,!0),ma(i,e,r);break;default:$()}}async function cj(t,e,n){const r=Zw(t);if(r.Ac){for(const i of e){if(r._c.has(i)){b("SyncEngine","Adding an already active target "+i);continue}const s=await XA(r.localStore,i),o=await da(r.localStore,s);await Qw(r,pN(s),o.targetId,!1,o.resumeToken),bf(r.remoteStore,o)}for(const i of n)r._c.has(i)&&await fa(r.localStore,i,!1).then(()=>{ku(r.remoteStore,i),ma(r,i)}).catch(Qi)}}function Zw(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dN.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Xz.bind(null,e),e.fc.eu=Bz.bind(null,e.eventManager),e.fc.vc=zz.bind(null,e.eventManager),e}function e0(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Jz.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Zz.bind(null,e),e}function hj(t,e,n){const r=L(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=L(h),y=Ke(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",v=>p.Ls.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(lN(a));const l=new qz(a,i.localStore,s.serializer);let u=await s.Pc();for(;u;){const h=await l.ju(u);h&&o._updateProgress(h),u=await s.Pc()}const c=await l.complete();return await Qr(i,c.Hu,void 0),await function(h,d){const p=L(h);return p.persistence.runTransaction("Save bundle","readwrite",y=>p.Ls.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Wu)}catch(a){return Kn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Gg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return HA(this.persistence,new WA,e.initialUser,this.serializer)}createPersistence(e){return new KA(Cf.js,this.serializer)}createSharedClientState(e){return new eN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mN extends Gg{constructor(e,n,r){super(),this.bc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.bc.initialize(this,e),await e0(this.bc.syncEngine),await Oa(this.bc.remoteStore),await this.persistence.pi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return HA(this.persistence,new WA,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new ez(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new $4(n,this.persistence);return new M4(e.asyncQueue,r)}createPersistence(e){const n=$w(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new Mw(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,tN(),dh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new eN}}class dj extends mN{constructor(e,n){super(e,n,!1),this.bc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.bc.syncEngine;this.sharedClientState instanceof em&&(this.sharedClientState.syncEngine={Qr:oj.bind(null,n),jr:uj.bind(null,n),zr:cj.bind(null,n),Mi:lj.bind(null,n),Gr:sj.bind(null,n)},await this.sharedClientState.start()),await this.persistence.pi(async r=>{await aj(this.bc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=tN();if(!em.D(n))throw new C(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=$w(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new em(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class t0{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ME(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nj.bind(null,this.syncEngine),await Wg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Vz}createDatastore(e){const n=sc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Tz(i));var i;return function(s,o,a,l){return new bz(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>ME(this.syncEngine,a,0),o=xE.D()?new xE:new Iz,new Nz(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new Hz(r,i,s,o,a,l);return u&&(c.Ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);b("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Pa(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Af{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):je("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(e,n){this.Dc=e,this.serializer=n,this.metadata=new ct,this.buffer=new Uint8Array,this.Cc=new TextDecoder("utf-8"),this.xc().then(r=>{r&&r.Gu()?this.metadata.resolve(r.Ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ku)}`))},r=>this.metadata.reject(r))}close(){return this.Dc.cancel()}async getMetadata(){return this.metadata.promise}async Pc(){return await this.getMetadata(),this.xc()}async xc(){const e=await this.Nc();if(e===null)return null;const n=this.Cc.decode(e),r=Number(n);isNaN(r)&&this.kc(`length string (${n}) is not valid number`);const i=await this.Mc(r);return new jz(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Nc(){for(;this.Oc()<0&&!await this.$c(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.kc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Mc(e){for(;this.buffer.length<e;)await this.$c()&&this.kc("Reached the end of bundle when more is expected.");const n=this.Cc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}kc(e){throw this.Dc.cancel(),new Error(`Invalid bundle format: ${e}`)}async $c(){const e=await this.Dc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class pj{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=L(r),o=Su(s.serializer)+"/documents",a={documents:i.map(h=>Eu(s.serializer,h))},l=await s.Ao("BatchGetDocuments",o,a,i.length),u=new Map;l.forEach(h=>{const d=OB(s.serializer,h);u.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=u.get(h.toString());z(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new xa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=P.fromPath(r);this.mutations.push(new kw(i,this.precondition(i)))}),await async function(n,r){const i=L(n),s=Su(i.serializer)+"/documents",o={writes:r.map(a=>Tu(i.serializer,a))};await i.po("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw $();n=B.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(B.min())?Ne.exists(!1):Ne.updateTime(n):Ne.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(B.min()))throw new C(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ne.updateTime(n)}return Ne.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class mj{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Fc=r.maxAttempts,this.Lo=new Vw(this.asyncQueue,"transaction_retry")}run(){this.Fc-=1,this.Bc()}Bc(){this.Lo.xo(async()=>{const e=new pj(this.datastore),n=this.Lc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.qc(i)}))}).catch(r=>{this.qc(r)})})}Lc(e){try{const n=this.updateFunction(e);return!Ju(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}qc(e){this.Fc>0&&this.Uc(e)?(this.Fc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bc(),Promise.resolve()))):this.deferred.reject(e)}Uc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!wA(n)}return!1}}/**
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
 */class gj{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=Ob.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ma(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fh(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await GA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await n0(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>PE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>PE(e.remoteStore,s)),t._onlineComponents=e}function gN(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function n0(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await fh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!gN(n))throw n;Kn("Error using user provided cache. Falling back to memory cache: "+n),await fh(t,new Gg)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await fh(t,new Gg);return t._offlineComponents}async function Nf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await Qg(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await Qg(t,new t0))),t._onlineComponents}function yN(t){return n0(t).then(e=>e.persistence)}function r0(t){return n0(t).then(e=>e.localStore)}function vN(t){return Nf(t).then(e=>e.remoteStore)}function i0(t){return Nf(t).then(e=>e.syncEngine)}function yj(t){return Nf(t).then(e=>e.datastore)}async function ga(t){const e=await Nf(t),n=e.eventManager;return n.onListen=Gz.bind(null,e.syncEngine),n.onUnlisten=Qz.bind(null,e.syncEngine),n}function vj(t){return t.asyncQueue.enqueue(async()=>{const e=await yN(t),n=await vN(t);return e.setNetworkEnabled(!0),function(r){const i=L(r);return i.Au.delete(0),oc(i)}(n)})}function wj(t){return t.asyncQueue.enqueue(async()=>{const e=await yN(t),n=await vN(t);return e.setNetworkEnabled(!1),async function(r){const i=L(r);i.Au.add(0),await Pa(i),i.Pu.set("Offline")}(n)})}function _j(t,e){const n=new ct;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,l){const u=L(a);return u.persistence.runTransaction("read document","readonly",c=>u.localDocuments.getDocument(c,l))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Ma(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await r0(t),e,n)),n.promise}function wN(t,e,n={}){const r=new ct;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Af({next:h=>{s.enqueueAndForget(()=>Ww(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new C(S.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new C(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Gw(Da(o.path),u,{includeMetadataChanges:!0,Uu:!0});return Kw(i,c)}(await ga(t),t.asyncQueue,e,n,r)),r.promise}function Ij(t,e){const n=new ct;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await pd(r,i,!0),a=new hN(i,o.sr),l=a.nc(o.documents),u=a.applyChanges(l,!1);s.resolve(u.snapshot)}catch(o){const a=Ma(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await r0(t),e,n)),n.promise}function _N(t,e,n={}){const r=new ct;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Af({next:h=>{s.enqueueAndForget(()=>Ww(i,c)),h.fromCache&&a.source==="server"?l.reject(new C(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new Gw(o,u,{includeMetadataChanges:!0,Uu:!0});return Kw(i,c)}(await ga(t),t.asyncQueue,e,n,r)),r.promise}function Ej(t,e){const n=new Af(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Nu.add(i),i.next()}(await ga(t),n)),()=>{n.Sc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Nu.delete(i)}(await ga(t),n))}}function Sj(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?IA().encode(s):s,function(l,u){return new fj(l,u)}(function(l,u){if(l instanceof Uint8Array)return FE(l,u);if(l instanceof ArrayBuffer)return FE(new Uint8Array(l),u);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,sc(e));t.asyncQueue.enqueueAndForget(async()=>{hj(await i0(t),i,r)})}function Tj(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=L(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ls.getNamedQuery(s,r))}(await r0(t),e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=new Map;/**
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
 */function s0(t,e,n){if(!n)throw new C(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IN(t,e,n,r){if(e===!0&&r===!0)throw new C(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function VE(t){if(!P.isDocumentKey(t))throw new C(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function BE(t){if(P.isDocumentKey(t))throw new C(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Df(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function oe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Df(t);throw new C(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function EN(t,e){if(e<=0)throw new C(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new T4;switch(n.type){case"firstParty":return new A4(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=UE.get(e);n&&(b("ComponentProvider","Removing Datastore"),UE.delete(e),n.terminate())}(this),Promise.resolve()}}function SN(t,e,n,r={}){var i;const s=(t=oe(t,ac))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Kn("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=lt.MOCK_USER;else{o=DT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new C(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new lt(l)}t._authCredentials=new k4(new Pb(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}}class At{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new At(this.firestore,e,this._query)}}class hr extends At{constructor(e,n,r){super(e,n,Da(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new P(e))}withConverter(e){return new hr(this.firestore,e,this._path)}}function nr(t,e,...n){if(t=V(t),s0("collection","path",e),t instanceof ac){const r=ie.fromString(e,...n);return BE(r),new hr(t,null,r)}{if(!(t instanceof ke||t instanceof hr))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return BE(r),new hr(t.firestore,null,r)}}function kj(t,e){if(t=oe(t,ac),s0("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new At(t,null,function(n){return new Hr(ie.emptyPath(),n)}(e))}function Fn(t,e,...n){if(t=V(t),arguments.length===1&&(e=Ob.A()),s0("doc","path",e),t instanceof ac){const r=ie.fromString(e,...n);return VE(r),new ke(t,null,new P(r))}{if(!(t instanceof ke||t instanceof hr))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return VE(r),new ke(t.firestore,t instanceof hr?t.converter:null,new P(r))}}function TN(t,e){return t=V(t),e=V(e),(t instanceof ke||t instanceof hr)&&(e instanceof ke||e instanceof hr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function kN(t,e){return t=V(t),e=V(e),t instanceof At&&e instanceof At&&t.firestore===e.firestore&&ec(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cj{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Vw(this,"async_queue_retry"),this.Yc=()=>{const n=dh();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=dh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=dh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new ct;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Yi(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw je("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const i=qw.createAndSchedule(this,e,n,r,s=>this.ea(s));return this.jc.push(i),i}Xc(){this.zc&&$()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}function Yg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class bj{constructor(){this._progressObserver={},this._taskCompletionResolver=new ct,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aj=-1;class Ve extends ac{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Cj,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||CN(this),this._firestoreClient.terminate()}}function Nj(t,e){const n=typeof t=="object"?t:jd(),r=typeof t=="string"?t:e||"(default)",i=Ki(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=AT("firestore");s&&SN(i,...s)}return i}function mt(t){return t._firestoreClient||CN(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function CN(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new iB(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new gj(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function Dj(t,e){AN(t=oe(t,Ve));const n=mt(t);if(n._uninitializedComponentsProvider)throw new C(S.FAILED_PRECONDITION,"SDK cache is already specified.");Kn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new t0;return bN(n,i,new mN(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Rj(t){AN(t=oe(t,Ve));const e=mt(t);if(e._uninitializedComponentsProvider)throw new C(S.FAILED_PRECONDITION,"SDK cache is already specified.");Kn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new t0;return bN(e,r,new dj(r,n.cacheSizeBytes))}function bN(t,e,n){const r=new ct;return t.asyncQueue.enqueue(async()=>{try{await fh(t,n),await Qg(t,e),r.resolve()}catch(i){const s=i;if(!gN(s))throw s;Kn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function xj(t){if(t._initialized&&!t._terminated)throw new C(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ct;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!$n.D())return Promise.resolve();const r=n+"main";await $n.delete(r)}($w(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function Pj(t){return function(e){const n=new ct;return e.asyncQueue.enqueueAndForget(async()=>ej(await i0(e),n)),n.promise}(mt(t=oe(t,Ve)))}function Oj(t){return vj(mt(t=oe(t,Ve)))}function Lj(t){return wj(mt(t=oe(t,Ve)))}function Mj(t,e){const n=mt(t=oe(t,Ve)),r=new bj;return Sj(n,t._databaseId,e,r),r}function $j(t,e){return Tj(mt(t=oe(t,Ve)),e).then(n=>n?new At(t,null,n.query):null)}function AN(t){if(t._initialized||t._terminated)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pr(nt.fromBase64String(e))}catch(n){throw new C(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pr(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this._methodName=e}}/**
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
 */class Rf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */const Fj=/^__.*__$/;class Uj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ra(e,this.data,n,this.fieldTransforms)}}class NN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function DN(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class xf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new xf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.la(e),i}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ca({path:r,ha:!1});return i.oa(),i}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return vd(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(DN(this.ua)&&Fj.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Vj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sc(e)}ga(e,n,r,i=!1){return new xf({ua:e,methodName:n,ma:r,path:qe.emptyPath(),ha:!1,wa:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ro(t){const e=t._freezeSettings(),n=sc(t._databaseId);return new Vj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pf(t,e,n,r,i,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,i);u0("Data must be an object, but it was:",o,r);const a=PN(r,o);let l,u;if(s.merge)l=new tn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Xg(e,h,n);if(!o.contains(d))throw new C(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);LN(c,d)||c.push(d)}l=new tn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Uj(new _t(a),l,u)}class lc extends no{_toFieldTransform(e){if(e.ua!==2)throw e.ua===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lc}}function RN(t,e,n){return new xf({ua:3,ma:e.settings.ma,methodName:t._methodName,ha:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class o0 extends no{_toFieldTransform(e){return new nc(e.path,new ua)}isEqual(e){return e instanceof o0}}class Bj extends no{constructor(e,n){super(e),this.ya=n}_toFieldTransform(e){const n=RN(this,e,!0),r=this.ya.map(s=>io(s,n)),i=new Ks(r);return new nc(e.path,i)}isEqual(e){return this===e}}class zj extends no{constructor(e,n){super(e),this.ya=n}_toFieldTransform(e){const n=RN(this,e,!0),r=this.ya.map(s=>io(s,n)),i=new Ws(r);return new nc(e.path,i)}isEqual(e){return this===e}}class jj extends no{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=new ca(e.serializer,dA(e.serializer,this.pa));return new nc(e.path,n)}isEqual(e){return this===e}}function a0(t,e,n,r){const i=t.ga(1,e,n);u0("Data must be an object, but it was:",i,r);const s=[],o=_t.empty();to(r,(l,u)=>{const c=c0(e,l,n);u=V(u);const h=i.fa(c);if(u instanceof lc)s.push(c);else{const d=io(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new tn(s);return new NN(o,a,i.fieldTransforms)}function l0(t,e,n,r,i,s){const o=t.ga(1,e,n),a=[Xg(e,r,n)],l=[i];if(s.length%2!=0)throw new C(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Xg(e,s[d])),l.push(s[d+1]);const u=[],c=_t.empty();for(let d=a.length-1;d>=0;--d)if(!LN(u,a[d])){const p=a[d];let y=l[d];y=V(y);const v=o.fa(p);if(y instanceof lc)u.push(p);else{const I=io(y,v);I!=null&&(u.push(p),c.set(p,I))}}const h=new tn(u);return new NN(c,h,o.fieldTransforms)}function xN(t,e,n,r=!1){return io(n,t.ga(r?4:3,e))}function io(t,e){if(ON(t=V(t)))return u0("Unsupported field value:",e,t),PN(t,e);if(t instanceof no)return function(n,r){if(!DN(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=io(o,r.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=V(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return dA(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:ha(r.serializer,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ha(r.serializer,i)}}if(n instanceof Rf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof pr)return{bytesValue:TA(r.serializer,n._byteString)};if(n instanceof ke){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Rw(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Df(n)}`)}(t,e)}function PN(t,e){const n={};return Wb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):to(t,(r,i)=>{const s=io(i,e.aa(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ON(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Rf||t instanceof pr||t instanceof ke||t instanceof no)}function u0(t,e,n){if(!ON(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Df(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Xg(t,e,n){if((e=V(e))instanceof Vi)return e._internalPath;if(typeof e=="string")return c0(t,e);throw vd("Field path arguments must be of type string or ",t,!1,void 0,n)}const qj=new RegExp("[~\\*/\\[\\]]");function c0(t,e,n){if(e.search(qj)>=0)throw vd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vi(...e.split("."))._internalPath}catch{throw vd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new C(S.INVALID_ARGUMENT,a+t+l)}function LN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Kj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Of("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Kj extends Cu{data(){return super.data()}}function Of(t,e){return typeof e=="string"?c0(t,e):e instanceof Vi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class h0{}class uc extends h0{}function ri(t,e,...n){let r=[];e instanceof h0&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof d0).length,o=i.filter(a=>a instanceof Lf).length;if(s>1||s>0&&o>0)throw new C(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Lf extends uc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lf(e,n,r)}_apply(e){const n=this._parse(e);return FN(e._query,n),new At(e.firestore,e.converter,$g(e._query,n))}_parse(e){const n=ro(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new C(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){qE(c,u);const d=[];for(const p of c)d.push(jE(a,i,p));h={arrayValue:{values:d}}}else h=jE(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||qE(c,u),h=xN(o,s,c,u==="in"||u==="not-in");return Z.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Wj(t,e,n){const r=e,i=Of("where",t);return Lf._create(i,r,n)}class d0 extends h0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new d0(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:he.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)FN(s,a),s=$g(s,a)}(e._query,n),new At(e.firestore,e.converter,$g(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class f0 extends uc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new f0(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ho(i,s);return function(a,l){if(Ew(a)===null){const u=If(a);u!==null&&UN(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new At(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Hr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Hj(t,e="asc"){const n=e,r=Of("orderBy",t);return f0._create(r,n)}class Mf extends uc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Mf(e,n,r)}_apply(e){return new At(e.firestore,e.converter,cd(e._query,this._limit,this._limitType))}}function Gj(t){return EN("limit",t),Mf._create("limit",t,"F")}function Qj(t){return EN("limitToLast",t),Mf._create("limitToLast",t,"L")}class $f extends uc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new $f(e,n,r)}_apply(e){const n=$N(e,this.type,this._docOrFields,this._inclusive);return new At(e.firestore,e.converter,function(r,i){return new Hr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function Yj(...t){return $f._create("startAt",t,!0)}function Xj(...t){return $f._create("startAfter",t,!1)}class Ff extends uc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ff(e,n,r)}_apply(e){const n=$N(e,this.type,this._docOrFields,this._inclusive);return new At(e.firestore,e.converter,function(r,i){return new Hr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function Jj(...t){return Ff._create("endBefore",t,!1)}function Zj(...t){return Ff._create("endAt",t,!0)}function $N(t,e,n,r){if(n[0]=V(n[0]),n[0]instanceof Cu)return function(i,s,o,a,l){if(!a)throw new C(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const c of As(i))if(c.field.isKeyField())u.push(js(s,a.key));else{const h=a.data.field(c.field);if(_f(h))throw new C(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new C(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Fi(u,l)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ro(t.firestore);return function(s,o,a,l,u,c){const h=s.explicitOrderBy;if(u.length>h.length)throw new C(S.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const y=u[p];if(h[p].field.isKeyField()){if(typeof y!="string")throw new C(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof y}`);if(!Sw(s)&&y.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${y}' contains a slash.`);const v=s.path.child(ie.fromString(y));if(!P.isDocumentKey(v))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const I=new P(v);d.push(js(o,I))}else{const v=xN(a,l,y);d.push(v)}}return new Fi(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function jE(t,e,n){if(typeof(n=V(n))=="string"){if(n==="")throw new C(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sw(e)&&n.indexOf("/")!==-1)throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ie.fromString(n));if(!P.isDocumentKey(r))throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return js(t,new P(r))}if(n instanceof ke)return js(t,n._key);throw new C(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Df(n)}.`)}function qE(t,e){if(!Array.isArray(t)||t.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function FN(t,e){if(e.isInequality()){const r=If(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new C(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Ew(t);s!==null&&UN(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function UN(t,e,n){if(!n.isEqual(e))throw new C(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class p0{convertValue(e,n="none"){switch(zs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return to(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Rf(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_w(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wu(e));default:return null}}convertTimestamp(e){const n=Oi(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);z(OA(r));const i=new Mi(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(n)||je(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class e9 extends p0{constructor(e){super(),this.firestore=e}convertBytes(e){return new pr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zr extends Cu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Of("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fl extends zr{data(e={}){return super.data(e)}}class Bi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _s(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fl(this._firestore,this._userDataWriter,r.key,r,new _s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Fl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new _s(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Fl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new _s(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:t9(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function t9(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function VN(t,e){return t instanceof zr&&e instanceof zr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Bi&&e instanceof Bi&&t._firestore===e._firestore&&kN(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t){t=oe(t,ke);const e=oe(t.firestore,Ve);return wN(mt(e),t._key).then(n=>m0(e,t,n))}class so extends p0{constructor(e){super(),this.firestore=e}convertBytes(e){return new pr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}function n9(t){t=oe(t,ke);const e=oe(t.firestore,Ve),n=mt(e),r=new so(e);return _j(n,t._key).then(i=>new zr(e,r,t._key,i,new _s(i!==null&&i.hasLocalMutations,!0),t.converter))}function r9(t){t=oe(t,ke);const e=oe(t.firestore,Ve);return wN(mt(e),t._key,{source:"server"}).then(n=>m0(e,t,n))}function Ul(t){t=oe(t,At);const e=oe(t.firestore,Ve),n=mt(e),r=new so(e);return MN(t._query),_N(n,t._query).then(i=>new Bi(e,r,t,i))}function i9(t){t=oe(t,At);const e=oe(t.firestore,Ve),n=mt(e),r=new so(e);return Ij(n,t._query).then(i=>new Bi(e,r,t,i))}function s9(t){t=oe(t,At);const e=oe(t.firestore,Ve),n=mt(e),r=new so(e);return _N(n,t._query,{source:"server"}).then(i=>new Bi(e,r,t,i))}function Jg(t,e,n){t=oe(t,ke);const r=oe(t.firestore,Ve),i=Uf(t.converter,e,n);return cc(r,[Pf(ro(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ne.none())])}function Zg(t,e,n,...r){t=oe(t,ke);const i=oe(t.firestore,Ve),s=ro(i);let o;return o=typeof(e=V(e))=="string"||e instanceof Vi?l0(s,"updateDoc",t._key,e,n,r):a0(s,"updateDoc",t._key,e),cc(i,[o.toMutation(t._key,Ne.exists(!0))])}function o9(t){return cc(oe(t.firestore,Ve),[new xa(t._key,Ne.none())])}function bu(t,e){const n=oe(t.firestore,Ve),r=Fn(t),i=Uf(t.converter,e);return cc(n,[Pf(ro(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ne.exists(!1))]).then(()=>r)}function BN(t,...e){var n,r,i;t=V(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Yg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Yg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof ke)u=oe(t.firestore,Ve),c=Da(t._key.path),l={next:h=>{e[o]&&e[o](m0(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=oe(t,At);u=oe(h.firestore,Ve),c=h._query;const d=new so(u);l={next:p=>{e[o]&&e[o](new Bi(u,d,h,p))},error:e[o+1],complete:e[o+2]},MN(t._query)}return function(h,d,p,y){const v=new Af(y),I=new Gw(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>Kw(await ga(h),I)),()=>{v.Sc(),h.asyncQueue.enqueueAndForget(async()=>Ww(await ga(h),I))}}(mt(u),c,a,l)}function a9(t,e){return Ej(mt(t=oe(t,Ve)),Yg(e)?e:{next:e})}function cc(t,e){return function(n,r){const i=new ct;return n.asyncQueue.enqueueAndForget(async()=>Yz(await i0(n),r,i)),i.promise}(mt(t),e)}function m0(t,e,n){const r=n.docs.get(e._key),i=new so(t);return new zr(t,i,e._key,r,new _s(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const l9={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ro(e)}set(e,n,r){this._verifyNotCommitted();const i=ui(e,this._firestore),s=Uf(i.converter,n,r),o=Pf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ne.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ui(e,this._firestore);let o;return o=typeof(n=V(n))=="string"||n instanceof Vi?l0(this._dataReader,"WriteBatch.update",s._key,n,r,i):a0(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ne.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ui(e,this._firestore);return this._mutations=this._mutations.concat(new xa(n._key,Ne.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ui(t,e){if((t=V(t)).firestore!==e)throw new C(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class c9 extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ro(e)}get(e){const n=ui(e,this._firestore),r=new e9(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return $();const s=i[0];if(s.isFoundDocument())return new Cu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Cu(this._firestore,r,n._key,null,n.converter);throw $()})}set(e,n,r){const i=ui(e,this._firestore),s=Uf(i.converter,n,r),o=Pf(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=ui(e,this._firestore);let o;return o=typeof(n=V(n))=="string"||n instanceof Vi?l0(this._dataReader,"Transaction.update",s._key,n,r,i):a0(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=ui(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ui(e,this._firestore),r=new so(this._firestore);return super.get(e).then(i=>new zr(this._firestore,r,n._key,i._document,new _s(!1,!1),n.converter))}}function h9(t,e,n){t=oe(t,Ve);const r=Object.assign(Object.assign({},l9),n);return function(i){if(i.maxAttempts<1)throw new C(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new ct;return i.asyncQueue.enqueueAndForget(async()=>{const l=await yj(i);new mj(i.asyncQueue,l,o,s,a).run()}),a.promise}(mt(t),i=>e(new c9(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d9(){return new lc("deleteField")}function f9(){return new o0("serverTimestamp")}function p9(...t){return new Bj("arrayUnion",t)}function m9(...t){return new zj("arrayRemove",t)}function g9(t){return new jj("increment",t)}(function(t,e=!0){(function(n){Na=n})(qr),an(new bt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ve(new C4(n.getProvider("auth-internal")),new D4(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),St(BI,"3.11.0",t),St(BI,"3.11.0","esm2017")})();const y9="@firebase/firestore-compat",v9="0.3.8";/**
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
 */function g0(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function KE(){if(typeof Uint8Array>"u")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function WE(){if(!nB())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Au{constructor(e){this._delegate=e}static fromBase64String(e){return WE(),new Au(pr.fromBase64String(e))}static fromUint8Array(e){return KE(),new Au(pr.fromUint8Array(e))}toBase64(){return WE(),this._delegate.toBase64()}toUint8Array(){return KE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function ey(t){return w9(t,["next","error","complete"])}function w9(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class _9{enableIndexedDbPersistence(e,n){return Dj(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return Rj(e._delegate)}clearIndexedDbPersistence(e){return xj(e._delegate)}}class zN{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Mi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Kn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){SN(this._delegate,e,n,r)}enableNetwork(){return Oj(this._delegate)}disableNetwork(){return Lj(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,IN("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Pj(this._delegate)}onSnapshotsInSync(e){return a9(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ya(this,nr(this._delegate,e))}catch(n){throw Bt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Cn(this,Fn(this._delegate,e))}catch(n){throw Bt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Vt(this,kj(this._delegate,e))}catch(n){throw Bt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return h9(this._delegate,n=>e(new jN(this,n)))}batch(){return mt(this._delegate),new qN(new u9(this._delegate,e=>cc(this._delegate,e)))}loadBundle(e){return Mj(this._delegate,e)}namedQuery(e){return $j(this._delegate,e).then(n=>n?new Vt(this,n):null)}}class Vf extends p0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Au(new pr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Cn.forKey(n,this.firestore,null)}}function I9(t){E4(t)}class jN{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Vf(e)}get(e){const n=Is(e);return this._delegate.get(n).then(r=>new Nu(this._firestore,new zr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Is(e);return r?(g0("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Is(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Is(e);return this._delegate.delete(n),this}}class qN{constructor(e){this._delegate=e}set(e,n,r){const i=Is(e);return r?(g0("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Is(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Is(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ys{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Fl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Du(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ys.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ys(e,new Vf(e),n),i.set(n,s)),s}}Ys.INSTANCES=new WeakMap;class Cn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Vf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Cn(n,new ke(n._delegate,r,new P(e)))}static forKey(e,n,r){return new Cn(n,new ke(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ya(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ya(this.firestore,nr(this._delegate,e))}catch(n){throw Bt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=V(e),e instanceof ke?TN(this._delegate,e):!1}set(e,n){n=g0("DocumentReference.set",n);try{return n?Jg(this._delegate,e,n):Jg(this._delegate,e)}catch(r){throw Bt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?Zg(this._delegate,e):Zg(this._delegate,e,n,...r)}catch(i){throw Bt(i,"updateDoc()","DocumentReference.update()")}}delete(){return o9(this._delegate)}onSnapshot(...e){const n=KN(e),r=WN(e,i=>new Nu(this.firestore,new zr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return BN(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=n9(this._delegate):(e==null?void 0:e.source)==="server"?n=r9(this._delegate):n=wd(this._delegate),n.then(r=>new Nu(this.firestore,new zr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Cn(this.firestore,e?this._delegate.withConverter(Ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Bt(t,e,n){return t.message=t.message.replace(e,n),t}function KN(t){for(const e of t)if(typeof e=="object"&&!ey(e))return e;return{}}function WN(t,e){var n,r;let i;return ey(t[0])?i=t[0]:ey(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Nu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Cn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return VN(this._delegate,e._delegate)}}class Du extends Nu{data(e){const n=this._delegate.data(e);return S4(n!==void 0),n}}class Vt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Vf(e)}where(e,n,r){try{return new Vt(this.firestore,ri(this._delegate,Wj(e,n,r)))}catch(i){throw Bt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Vt(this.firestore,ri(this._delegate,Hj(e,n)))}catch(r){throw Bt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Vt(this.firestore,ri(this._delegate,Gj(e)))}catch(n){throw Bt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Vt(this.firestore,ri(this._delegate,Qj(e)))}catch(n){throw Bt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Vt(this.firestore,ri(this._delegate,Yj(...e)))}catch(n){throw Bt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Vt(this.firestore,ri(this._delegate,Xj(...e)))}catch(n){throw Bt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Vt(this.firestore,ri(this._delegate,Jj(...e)))}catch(n){throw Bt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Vt(this.firestore,ri(this._delegate,Zj(...e)))}catch(n){throw Bt(n,"endAt()","Query.endAt()")}}isEqual(e){return kN(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=i9(this._delegate):(e==null?void 0:e.source)==="server"?n=s9(this._delegate):n=Ul(this._delegate),n.then(r=>new ty(this.firestore,new Bi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=KN(e),r=WN(e,i=>new ty(this.firestore,new Bi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return BN(this._delegate,n,r)}withConverter(e){return new Vt(this.firestore,e?this._delegate.withConverter(Ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class E9{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Du(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ty{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Vt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Du(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new E9(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Du(this._firestore,r))})}isEqual(e){return VN(this._delegate,e._delegate)}}class ya extends Vt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Cn(this.firestore,e):null}doc(e){try{return e===void 0?new Cn(this.firestore,Fn(this._delegate)):new Cn(this.firestore,Fn(this._delegate,e))}catch(n){throw Bt(n,"doc()","CollectionReference.doc()")}}add(e){return bu(this._delegate,e).then(n=>new Cn(this.firestore,n))}isEqual(e){return TN(this._delegate,e._delegate)}withConverter(e){return new ya(this.firestore,e?this._delegate.withConverter(Ys.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Is(t){return oe(t,ke)}/**
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
 */class y0{constructor(...e){this._delegate=new Vi(...e)}static documentId(){return new y0(qe.keyField().canonicalString())}isEqual(e){return e=V(e),e instanceof Vi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ds{constructor(e){this._delegate=e}static serverTimestamp(){const e=f9();return e._methodName="FieldValue.serverTimestamp",new ds(e)}static delete(){const e=d9();return e._methodName="FieldValue.delete",new ds(e)}static arrayUnion(...e){const n=p9(...e);return n._methodName="FieldValue.arrayUnion",new ds(n)}static arrayRemove(...e){const n=m9(...e);return n._methodName="FieldValue.arrayRemove",new ds(n)}static increment(e){const n=g9(e);return n._methodName="FieldValue.increment",new ds(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const S9={Firestore:zN,GeoPoint:Rf,Timestamp:De,Blob:Au,Transaction:jN,WriteBatch:qN,DocumentReference:Cn,DocumentSnapshot:Nu,Query:Vt,QueryDocumentSnapshot:Du,QuerySnapshot:ty,CollectionReference:ya,FieldPath:y0,FieldValue:ds,setLogLevel:I9,CACHE_SIZE_UNLIMITED:Aj};function T9(t,e){t.INTERNAL.registerComponent(new bt("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},S9)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k9(t){T9(t,(e,n)=>new zN(e,n,new _9)),t.registerVersion(y9,v9)}k9(Ea);var C9="firebase",b9="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(C9,b9,"app");/**
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
 */const HN="firebasestorage.googleapis.com",A9="storageBucket",N9=2*60*1e3,D9=10*60*1e3;/**
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
 */class yr extends Et{constructor(e,n,r=0){super(nm(e),`Firebase Storage: ${n} (${nm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return nm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mr||(mr={}));function nm(t){return"storage/"+t}function R9(){const t="An unknown error occurred, please check the error payload for server response.";return new yr(mr.UNKNOWN,t)}function x9(){return new yr(mr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function P9(){return new yr(mr.CANCELED,"User canceled the upload/download.")}function O9(t){return new yr(mr.INVALID_URL,"Invalid URL '"+t+"'.")}function L9(t){return new yr(mr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function HE(t){return new yr(mr.INVALID_ARGUMENT,t)}function GN(){return new yr(mr.APP_DELETED,"The Firebase app was deleted.")}function M9(t){return new yr(mr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Un{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Un.makeFromUrl(e,n)}catch{return new Un(e,"")}if(r.path==="")return r;throw L9(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},v=n===HN?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${I}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<g.length;_++){const k=g[_],T=k.regex.exec(e);if(T){const N=T[k.indices.bucket];let R=T[k.indices.path];R||(R=""),r=new Un(N,R),k.postModify(r);break}}if(r==null)throw O9(e);return r}}class $9{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function F9(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...I){u||(u=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(p,l())},I)}function d(){s&&clearTimeout(s)}function p(I,...m){if(u){d();return}if(I){d(),c.call(null,I,...m);return}if(l()||o){d(),c.call(null,I,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(I){y||(y=!0,d(),!u&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function U9(t){t(!1)}/**
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
 */function V9(t){return t!==void 0}function GE(t,e,n,r){if(r<e)throw HE(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw HE(`Invalid value for '${t}'. Expected ${n} or less.`)}function B9(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var _d;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_d||(_d={}));/**
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
 */function z9(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class j9{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new zc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===_d.NO_ERROR,l=s.getStatus();if(!a||z9(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===_d.ABORT;r(!1,new zc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new zc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());V9(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=R9();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?GN():P9();o(l)}else{const l=x9();o(l)}};this.canceled_?n(!1,new zc(!1,null,!0)):this.backoffId_=F9(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&U9(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function q9(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function K9(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function W9(t,e){e&&(t["X-Firebase-GMPID"]=e)}function H9(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function G9(t,e,n,r,i,s,o=!0){const a=B9(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return W9(u,e),q9(u,n),K9(u,s),H9(u,r),new j9(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Q9(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Y9(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Id{constructor(e,n){this._service=e,n instanceof Un?this._location=n:this._location=Un.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Id(e,n)}get root(){const e=new Un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y9(this._location.path)}get storage(){return this._service}get parent(){const e=Q9(this._location.path);if(e===null)return null;const n=new Un(this._location.bucket,e);return new Id(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw M9(e)}}function QE(t,e){const n=e==null?void 0:e[A9];return n==null?null:Un.makeFromBucketSpec(n,t)}function X9(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:DT(i,t.app.options.projectId))}class J9{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=HN,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=N9,this._maxUploadRetryTime=D9,this._requests=new Set,i!=null?this._bucket=Un.makeFromBucketSpec(i,this._host):this._bucket=QE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Un.makeFromBucketSpec(this._url,e):this._bucket=QE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){GE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){GE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Id(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new $9(GN());{const o=G9(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const YE="@firebase/storage",XE="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN="storage";function Z9(t=jd(),e){t=V(t);const r=Ki(t,QN).getImmediate({identifier:e}),i=AT("storage");return i&&e3(r,...i),r}function e3(t,e,n,r={}){X9(t,e,n,r)}function t3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new J9(n,r,i,e,qr)}function n3(){an(new bt(QN,t3,"PUBLIC").setMultipleInstances(!0)),St(YE,XE,""),St(YE,XE,"esm2017")}n3();const r3={apiKey:"AIzaSyDE9nF_Ghno85E9jdPY3qf5ASxTc3odNVM",authDomain:"slimpossible-34902.firebaseapp.com",databaseURL:"https://slimpossible-34902-default-rtdb.firebaseio.com",projectId:"slimpossible-34902",storageBucket:"slimpossible-34902.appspot.com",messagingSenderId:"858747206804",appId:"1:858747206804:web:2567fcbd6f40a1fbcb0881"},v0=zd(r3),On=Nj(v0),i3="users",s3=U2(v0);Z9(v0);const o3=new Mn;/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ru(){return Ru=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ru.apply(this,arguments)}var mi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mi||(mi={}));const JE="popstate";function a3(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ny("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ed(i)}return u3(e,n,null,t)}function Je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function w0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function l3(){return Math.random().toString(36).substr(2,8)}function ZE(t,e){return{usr:t.state,key:t.key,idx:e}}function ny(t,e,n,r){return n===void 0&&(n=null),Ru({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?$a(e):e,{state:n,key:e&&e.key||r||l3()})}function Ed(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function $a(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function u3(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=mi.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ru({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=mi.Pop;let I=c(),m=I==null?null:I-u;u=I,l&&l({action:a,location:v.location,delta:m})}function d(I,m){a=mi.Push;let f=ny(v.location,I,m);n&&n(f,I),u=c()+1;let g=ZE(f,u),_=v.createHref(f);try{o.pushState(g,"",_)}catch{i.location.assign(_)}s&&l&&l({action:a,location:v.location,delta:1})}function p(I,m){a=mi.Replace;let f=ny(v.location,I,m);n&&n(f,I),u=c();let g=ZE(f,u),_=v.createHref(f);o.replaceState(g,"",_),s&&l&&l({action:a,location:v.location,delta:0})}function y(I){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof I=="string"?I:Ed(I);return Je(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let v={get action(){return a},get location(){return t(i,o)},listen(I){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(JE,h),l=I,()=>{i.removeEventListener(JE,h),l=null}},createHref(I){return e(i,I)},createURL:y,encodeLocation(I){let m=y(I);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(I){return o.go(I)}};return v}var e1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(e1||(e1={}));function c3(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?$a(e):e,i=_0(r.pathname||"/",n);if(i==null)return null;let s=YN(t);h3(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=_3(s[a],S3(i));return o}function YN(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ci([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Je(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),YN(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:v3(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of XN(s.path))i(s,o,l)}),e}function XN(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=XN(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function h3(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:w3(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const d3=/^:\w+$/,f3=3,p3=2,m3=1,g3=10,y3=-2,t1=t=>t==="*";function v3(t,e){let n=t.split("/"),r=n.length;return n.some(t1)&&(r+=y3),e&&(r+=p3),n.filter(i=>!t1(i)).reduce((i,s)=>i+(d3.test(s)?f3:s===""?m3:g3),r)}function w3(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _3(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=I3({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Ci([i,c.pathname]),pathnameBase:b3(Ci([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Ci([i,c.pathnameBase]))}return s}function I3(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=E3(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=T3(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function E3(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),w0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function S3(t){try{return decodeURI(t)}catch(e){return w0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function T3(t,e){try{return decodeURIComponent(t)}catch(n){return w0(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function _0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function k3(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?$a(t):t;return{pathname:n?n.startsWith("/")?n:C3(n,e):e,search:A3(r),hash:N3(i)}}function C3(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rm(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function JN(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ZN(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=$a(t):(i=Ru({},t),Je(!i.pathname||!i.pathname.includes("?"),rm("?","pathname","search",i)),Je(!i.pathname||!i.pathname.includes("#"),rm("#","pathname","hash",i)),Je(!i.search||!i.search.includes("#"),rm("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=k3(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ci=t=>t.join("/").replace(/\/\/+/g,"/"),b3=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),A3=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,N3=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function D3(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sd(){return Sd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sd.apply(this,arguments)}const I0=w.createContext(null),R3=w.createContext(null),Fa=w.createContext(null),Bf=w.createContext(null),Ua=w.createContext({outlet:null,matches:[]}),eD=w.createContext(null);function x3(t,e){let{relative:n}=e===void 0?{}:e;hc()||Je(!1);let{basename:r,navigator:i}=w.useContext(Fa),{hash:s,pathname:o,search:a}=rD(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ci([r,o])),i.createHref({pathname:l,search:a,hash:s})}function hc(){return w.useContext(Bf)!=null}function zf(){return hc()||Je(!1),w.useContext(Bf).location}function tD(t){w.useContext(Fa).static||w.useLayoutEffect(t)}function nD(){return w.useContext(I0)!=null?K3():P3()}function P3(){hc()||Je(!1);let{basename:t,navigator:e}=w.useContext(Fa),{matches:n}=w.useContext(Ua),{pathname:r}=zf(),i=JSON.stringify(JN(n).map(a=>a.pathnameBase)),s=w.useRef(!1);return tD(()=>{s.current=!0}),w.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=ZN(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Ci([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function rD(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=w.useContext(Ua),{pathname:i}=zf(),s=JSON.stringify(JN(r).map(o=>o.pathnameBase));return w.useMemo(()=>ZN(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function O3(t,e){return L3(t,e)}function L3(t,e,n){hc()||Je(!1);let{navigator:r}=w.useContext(Fa),{matches:i}=w.useContext(Ua),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=zf(),u;if(e){var c;let v=typeof e=="string"?$a(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Je(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=c3(t,{pathname:d}),y=V3(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Ci([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Ci([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?w.createElement(Bf.Provider,{value:{location:Sd({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:mi.Pop}},y):y}function M3(){let t=q3(),e=D3(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:i},n):null,s)}const $3=w.createElement(M3,null);class F3 extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w.createElement(Ua.Provider,{value:this.props.routeContext},w.createElement(eD.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function U3(t){let{routeContext:e,match:n,children:r}=t,i=w.useContext(I0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Ua.Provider,{value:e},r)}function V3(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Je(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||$3);let d=e.concat(s.slice(0,u+1)),p=()=>{let y;return c?y=h:l.route.element?y=l.route.element:y=a,w.createElement(U3,{match:l,routeContext:{outlet:a,matches:d},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?w.createElement(F3,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d}}):p()},null)}var ry;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(ry||(ry={}));var xu;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(xu||(xu={}));function B3(t){let e=w.useContext(I0);return e||Je(!1),e}function z3(t){let e=w.useContext(R3);return e||Je(!1),e}function j3(t){let e=w.useContext(Ua);return e||Je(!1),e}function iD(t){let e=j3(),n=e.matches[e.matches.length-1];return n.route.id||Je(!1),n.route.id}function q3(){var t;let e=w.useContext(eD),n=z3(xu.UseRouteError),r=iD(xu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function K3(){let{router:t}=B3(ry.UseNavigateStable),e=iD(xu.UseNavigateStable),n=w.useRef(!1);return tD(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Sd({fromRouteId:e},s)))},[t,e])}function vl(t){Je(!1)}function W3(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mi.Pop,navigator:s,static:o=!1}=t;hc()&&Je(!1);let a=e.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=$a(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,y=w.useMemo(()=>{let v=_0(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return y==null?null:w.createElement(Fa.Provider,{value:l},w.createElement(Bf.Provider,{children:n,value:y}))}function H3(t){let{children:e,location:n}=t;return O3(iy(e),n)}var n1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(n1||(n1={}));new Promise(()=>{});function iy(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,i)=>{if(!w.isValidElement(r))return;let s=[...e,i];if(r.type===w.Fragment){n.push.apply(n,iy(r.props.children,s));return}r.type!==vl&&Je(!1),!r.props.index||!r.props.children||Je(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=iy(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sy(){return sy=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sy.apply(this,arguments)}function G3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Q3(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Y3(t,e){return t.button===0&&(!e||e==="_self")&&!Q3(t)}const X3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function J3(t){let{basename:e,children:n,window:r}=t,i=w.useRef();i.current==null&&(i.current=a3({window:r,v5Compat:!0}));let s=i.current,[o,a]=w.useState({action:s.action,location:s.location});return w.useLayoutEffect(()=>s.listen(a),[s]),w.createElement(W3,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const Z3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",e6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oy=w.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=G3(e,X3),{basename:d}=w.useContext(Fa),p,y=!1;if(typeof u=="string"&&e6.test(u)&&(p=u,Z3))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),_=_0(g.pathname,d);g.origin===f.origin&&_!=null?u=_+g.search+g.hash:y=!0}catch{}let v=x3(u,{relative:i}),I=t6(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||I(f)}return w.createElement("a",sy({},h,{href:p||v,onClick:y||s?r:m,ref:n,target:l}))});var r1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(r1||(r1={}));var i1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(i1||(i1={}));function t6(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=nD(),l=zf(),u=rD(t,{relative:o});return w.useCallback(c=>{if(Y3(c,n)){c.preventDefault();let h=r!==void 0?r:Ed(l)===Ed(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const s1=()=>{const t=nD(),[e,n]=w.useState(""),r=async s=>{const o=Fn(On,"users",s);return(await wd(o)).data()==null};return Y("div",{className:"loginPage",children:[x("div",{className:"app-logo",children:x("img",{src:Gx})}),Y("form",{children:[x("button",{type:"button",onClick:()=>{Dk(s3,o3).then(s=>{var o=s.user.displayName,a=s.user.email,l=s.user.photoURL;if(localStorage.setItem("name",o),localStorage.setItem("image",l),localStorage.setItem("email",a),r(a)){console.log("User Found!"),t("/"),window.location.reload();return}const c=Fn(On,"users",a);Jg(c,{daily_calorie_goal:null}).then(()=>{console.log('Document "userIds" created successfully'),n(""),t("/"),window.location.reload()}).catch(d=>{console.error("Error creating document: ",d),n("Error signing in. Please try again.")})}).catch(s=>{console.log(s)})},className:"login-with-google-btn",children:"Sign in with Google"}),x("h3",{className:"errorMessage",children:e})]})]})};function n6(t,e,n){w.useEffect(()=>{if(!document)return;const r=document.querySelector('script[src="'.concat(t,'"]'));if(r!=null&&r.dataset.loaded){e==null||e();return}const i=r||document.createElement("script");r||(i.src=t);const s=()=>{i.dataset.loaded="1",e==null||e()};return i.addEventListener("load",s),n&&i.addEventListener("error",n),r||document.head.append(i),()=>{i.removeEventListener("load",s),n&&i.removeEventListener("error",n)}},[])}function r6(t){let{chartVersion:e="current",chartPackages:n=["corechart","controls"],chartLanguage:r="en",mapsApiKey:i}=t;const[s,o]=w.useState(null),[a,l]=w.useState(!1);return n6("https://www.gstatic.com/charts/loader.js",()=>{const u=window==null?void 0:window.google;u&&(u.charts.load(e,{packages:n,language:r,mapsApiKey:i}),u.charts.setOnLoadCallback(()=>{o(u)}))},()=>{l(!0)}),[s,a]}function i6(t){let{onLoad:e,onError:n,...r}=t;const[i,s]=r6(r);return w.useEffect(()=>{i&&e&&e(i)},[i]),w.useEffect(()=>{s&&n&&n()},[s]),null}const sD={legend_toggle:!1,options:{},legendToggle:!1,getChartWrapper:()=>{},spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{}};let o1=0;const s6=()=>(o1+=1,"reactgooglegraph-".concat(o1)),o6=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],a6=async function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new Promise((r,i)=>{const s="".concat(n.headers?"headers=".concat(n.headers):"headers=0"),o="".concat(n.query?"&tq=".concat(encodeURIComponent(n.query)):""),a="".concat(n.gid?"&gid=".concat(n.gid):""),l="".concat(n.sheet?"&sheet=".concat(n.sheet):""),u="".concat(n.access_token?"&access_token=".concat(n.access_token):""),c="".concat(s).concat(a).concat(l).concat(o).concat(u),h="".concat(e,"/gviz/tq?").concat(c);new t.visualization.Query(h).send(p=>{p.isError()?i("Error in query:  ".concat(p.getMessage()," ").concat(p.getDetailedMessage())):r(p.getDataTable())})})},{Provider:l6,Consumer:u6}=w.createContext(sD),c6=t=>{let{children:e,value:n}=t;return w.createElement(l6,{value:n},e)},oD=t=>{let{render:e}=t;return w.createElement(u6,null,n=>e(n))},h6="#CCCCCC";class d6 extends w.Component{componentDidMount(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()}componentWillUnmount(){const{google:e,googleChartWrapper:n}=this.props;window.removeEventListener("resize",this.onResize),e.visualization.events.removeAllListeners(n),n.getChartType()==="Timeline"&&n.getChart()&&n.getChart().clearChart()}componentDidUpdate(){this.draw(this.props)}render(){return null}constructor(...e){super(...e),this.state={hiddenColumns:[]},this.listenToLegendToggle=()=>{const{google:n,googleChartWrapper:r}=this.props;n.visualization.events.addListener(r,"select",()=>{const s=r.getChart().getSelection(),o=r.getDataTable();if(s.length===0||s[0].row||!o)return;const a=s[0].column,l=this.getColumnID(o,a);this.state.hiddenColumns.includes(l)?this.setState(u=>({...u,hiddenColumns:[...u.hiddenColumns.filter(c=>c!==l)]})):this.setState(u=>({...u,hiddenColumns:[...u.hiddenColumns,l]}))})},this.applyFormatters=(n,r)=>{const{google:i}=this.props;for(let s of r)switch(s.type){case"ArrowFormat":{new i.visualization.ArrowFormat(s.options).format(n,s.column);break}case"BarFormat":{new i.visualization.BarFormat(s.options).format(n,s.column);break}case"ColorFormat":{const o=new i.visualization.ColorFormat(s.options),{ranges:a}=s;for(let l of a)o.addRange(...l);o.format(n,s.column);break}case"DateFormat":{new i.visualization.DateFormat(s.options).format(n,s.column);break}case"NumberFormat":{new i.visualization.NumberFormat(s.options).format(n,s.column);break}case"PatternFormat":{new i.visualization.PatternFormat(s.options).format(n,s.column);break}}},this.getColumnID=(n,r)=>n.getColumnId(r)||n.getColumnLabel(r),this.draw=async n=>{let{data:r,diffdata:i,rows:s,columns:o,options:a,legend_toggle:l,legendToggle:u,chartType:c,formatters:h,spreadSheetUrl:d,spreadSheetQueryParameters:p}=n;const{google:y,googleChartWrapper:v}=this.props;let I,m=null;if(i){const _=y.visualization.arrayToDataTable(i.old),k=y.visualization.arrayToDataTable(i.new);m=y.visualization[c].prototype.computeDiff(_,k)}r!==null?Array.isArray(r)?I=y.visualization.arrayToDataTable(r):I=new y.visualization.DataTable(r):s&&o?I=y.visualization.arrayToDataTable([o,...s]):d?I=await a6(y,d,p):I=y.visualization.arrayToDataTable([]);const f=I.getNumberOfColumns();for(let _=0;_<f;_+=1){const k=this.getColumnID(I,_);if(this.state.hiddenColumns.includes(k)){const T=I.getColumnLabel(_),N=I.getColumnId(_),R=I.getColumnType(_);I.removeColumn(_),I.addColumn({label:T,id:N,type:R})}}const g=v.getChart();v.getChartType()==="Timeline"&&g&&g.clearChart(),v.setChartType(c),v.setOptions(a||{}),v.setDataTable(I),v.draw(),this.props.googleChartDashboard!==null&&this.props.googleChartDashboard.draw(I),m&&(v.setDataTable(m),v.draw()),h&&(this.applyFormatters(I,h),v.setDataTable(I),v.draw()),(u===!0||l===!0)&&this.grayOutHiddenColumns({options:a})},this.grayOutHiddenColumns=n=>{let{options:r}=n;const{googleChartWrapper:i}=this.props,s=i.getDataTable();if(!s)return;const o=s.getNumberOfColumns();if(this.state.hiddenColumns.length>0===!1)return;const l=Array.from({length:o-1}).map((u,c)=>{const h=this.getColumnID(s,c+1);return this.state.hiddenColumns.includes(h)?h6:r&&r.colors?r.colors[c]:o6[c]});i.setOptions({...r,colors:l}),i.draw()},this.onResize=()=>{const{googleChartWrapper:n}=this.props;n.draw()}}}class f6 extends w.Component{componentDidMount(){}componentWillUnmount(){}shouldComponentUpdate(){return!1}render(){const{google:e,googleChartWrapper:n,googleChartDashboard:r}=this.props;return w.createElement(oD,{render:i=>w.createElement(d6,Object.assign({},i,{google:e,googleChartWrapper:n,googleChartDashboard:r}))})}}class p6 extends w.Component{shouldComponentUpdate(){return!1}listenToEvents(e){let{chartEvents:n,google:r,googleChartWrapper:i}=e;if(n){r.visualization.events.removeAllListeners(i);for(let o of n){var s=this;const{eventName:a,callback:l}=o;r.visualization.events.addListener(i,a,function(){for(var u=arguments.length,c=new Array(u),h=0;h<u;h++)c[h]=arguments[h];l({chartWrapper:i,props:s.props,google:r,eventArgs:c})})}}}render(){const{google:e,googleChartWrapper:n}=this.props;return w.createElement(oD,{render:r=>(this.listenToEvents({chartEvents:r.chartEvents||null,google:e,googleChartWrapper:n}),null)})}}let a1=0;class m6 extends w.Component{componentDidMount(){const{options:e,google:n,chartType:r,chartWrapperParams:i,toolbarItems:s,getChartEditor:o,getChartWrapper:a}=this.props,l={chartType:r,options:e,containerId:this.getGraphID(),...i},u=new n.visualization.ChartWrapper(l);u.setOptions(e||{}),a&&a(u,n);const c=new n.visualization.Dashboard(this.dashboard_ref),h=this.addControls(u,c);s&&n.visualization.drawToolbar(this.toolbar_ref.current,s);let d=null;o&&(d=new n.visualization.ChartEditor,o({chartEditor:d,chartWrapper:u,google:n})),this.setState({googleChartEditor:d,googleChartControls:h,googleChartDashboard:c,googleChartWrapper:u,isReady:!0})}componentDidUpdate(){if(!this.state.googleChartWrapper||!this.state.googleChartDashboard||!this.state.googleChartControls)return;const{controls:e}=this.props;if(e)for(let n=0;n<e.length;n+=1){const{controlType:r,options:i,controlWrapperParams:s}=e[n];s&&"state"in s&&this.state.googleChartControls[n].control.setState(s.state),this.state.googleChartControls[n].control.setOptions(i),this.state.googleChartControls[n].control.setControlType(r)}}shouldComponentUpdate(e,n){return this.state.isReady!==n.isReady||e.controls!==this.props.controls}render(){const{width:e,height:n,options:r,style:i}=this.props,s={height:n||r&&r.height,width:e||r&&r.width,...i};return this.props.render?w.createElement("div",{ref:this.dashboard_ref,style:s},w.createElement("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):w.createElement("div",{ref:this.dashboard_ref,style:s},this.renderControl(o=>{let{controlProp:a}=o;return a.controlPosition!=="bottom"}),this.renderChart(),this.renderControl(o=>{let{controlProp:a}=o;return a.controlPosition==="bottom"}),this.renderToolBar())}constructor(...e){var n;super(),n=this,this.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},this.graphID=null,this.dashboard_ref=w.createRef(),this.toolbar_ref=w.createRef(),this.getGraphID=()=>{const{graphID:r,graph_id:i}=this.props;let s;return!r&&!i?this.graphID?s=this.graphID:s=s6():r&&!i?s=r:i&&!r?s=i:s=r,this.graphID=s,this.graphID},this.getControlID=(r,i)=>{a1+=1;let s;return typeof r>"u"?s="googlechart-control-".concat(i,"-").concat(a1):s=r,s},this.addControls=(r,i)=>{const{google:s,controls:o}=this.props,a=o?o.map((u,c)=>{const{controlID:h,controlType:d,options:p,controlWrapperParams:y}=u,v=this.getControlID(h,c);return{controlProp:u,control:new s.visualization.ControlWrapper({containerId:v,controlType:d,options:p,...y})}}):null;if(!a)return null;i.bind(a.map(u=>{let{control:c}=u;return c}),r);for(let u of a){const{control:c,controlProp:h}=u,{controlEvents:d=[]}=h;for(let p of d){var l=this;const{callback:y,eventName:v}=p;s.visualization.events.removeListener(c,v,y),s.visualization.events.addListener(c,v,function(){for(var I=arguments.length,m=new Array(I),f=0;f<I;f++)m[f]=arguments[f];y({chartWrapper:r,controlWrapper:c,props:l.props,google:s,eventArgs:m})})}}return a},this.renderChart=()=>{const{width:r,height:i,options:s,style:o,className:a,rootProps:l,google:u}=this.props,c={height:i||s&&s.height,width:r||s&&s.width,...o};return w.createElement("div",Object.assign({id:this.getGraphID(),style:c,className:a},l),this.state.isReady&&this.state.googleChartWrapper!==null?w.createElement(w.Fragment,null,w.createElement(f6,{googleChartWrapper:this.state.googleChartWrapper,google:u,googleChartDashboard:this.state.googleChartDashboard}),w.createElement(p6,{googleChartWrapper:this.state.googleChartWrapper,google:u})):null)},this.renderControl=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i=>!0;return n.state.isReady&&n.state.googleChartControls!==null?w.createElement(w.Fragment,null,n.state.googleChartControls.filter(i=>{let{controlProp:s,control:o}=i;return r({control:o,controlProp:s})}).map(i=>{let{control:s,controlProp:o}=i;return w.createElement("div",{key:s.getContainerId(),id:s.getContainerId()})})):null},this.renderToolBar=()=>this.props.toolbarItems?w.createElement("div",{ref:this.toolbar_ref}):null}}class E0 extends w.Component{render(){const{chartLanguage:e,chartPackages:n,chartVersion:r,mapsApiKey:i,loader:s,errorElement:o}=this.props;return w.createElement(c6,{value:this.props},this.state.loadingStatus==="ready"&&this.state.google!==null?w.createElement(m6,Object.assign({},this.props,{google:this.state.google})):this.state.loadingStatus==="errored"&&o?o:s,w.createElement(i6,{chartLanguage:e,chartPackages:n,chartVersion:r,mapsApiKey:i,onLoad:this.onLoad,onError:this.onError}))}componentDidMount(){this._isMounted=!0}componentWillUnmount(){this._isMounted=!1}isFullyLoaded(e){const{controls:n,toolbarItems:r,getChartEditor:i}=this.props;return e&&e.visualization&&e.visualization.ChartWrapper&&e.visualization.Dashboard&&(!n||e.visualization.ChartWrapper)&&(!i||e.visualization.ChartEditor)&&(!r||e.visualization.drawToolbar)}constructor(...e){super(...e),this._isMounted=!1,this.state={loadingStatus:"loading",google:null},this.onLoad=n=>{if(this.props.onLoad&&this.props.onLoad(n),this.isFullyLoaded(n))this.onSuccess(n);else{const r=setInterval(()=>{const i=window.google;this._isMounted?i&&this.isFullyLoaded(i)&&(clearInterval(r),this.onSuccess(i)):clearInterval(r)},1e3)}},this.onSuccess=n=>{this.setState({loadingStatus:"ready",google:n})},this.onError=()=>{this.setState({loadingStatus:"errored"})}}}E0.defaultProps=sD;var l1;(function(t){t.annotation="annotation",t.annotationText="annotationText",t.certainty="certainty",t.emphasis="emphasis",t.interval="interval",t.scope="scope",t.style="style",t.tooltip="tooltip",t.domain="domain"})(l1||(l1={}));const aD=t=>{const e=t.ingredient;return Y("div",{className:"Ingredient",children:[Y("p",{children:[e.name,":"]}),Y("p",{children:[e.amount," ",e.servingUnit||""]}),Y("p",{className:"calories",children:[e.calories," kcal."]})]})},g6=t=>{const[e,n]=w.useState([]),[r,i]=w.useState({}),s=t.block,o=s.ingredients,a=o.map((l,u)=>x(aD,{ingredient:l},u));if(e.length===0){const l=[["Ingredient","Calories"]];o.forEach(u=>{l.push([u.name,u.calories])}),n(l)}return Object.keys(r).length===0&&i({width:"100%",height:"30vh",title:"Calories Breakdown",pieHole:.4,is3D:!1,backgroundColor:"transparent"}),Y("div",{className:"block",style:s.customStyle,children:[x("div",{className:"block-title1",children:x("h1",{children:s.name})}),Y("div",{className:"block-content",children:[x("div",{className:"strings",style:s.stringsStyle,children:a}),x(E0,{style:{height:"22vh",marginLeft:"8px"},chartType:"PieChart",data:e,options:r})]})]})};const y6=t=>{w.useState([]);const e=t.option,n=e.ingredients,r=t.tryMealOption,i=n.map((o,a)=>x(aD,{ingredient:o},a)),s=o=>{var a={},l=0,u=0,c=0,h=0;n.forEach(d=>{l+=d.calories,u+=d.macros.carbs,c+=d.macros.protein,h+=d.macros.fat}),o.target.checked?(console.log("checked"),a.calories=l,a.carbohydrates=u,a.protein=c,a.fat=h,a.name=e.name):o.target.checked||console.log("unchecked"),r(a)};return Y("div",{className:"block",children:[Y("div",{className:"block-title",children:[x("h1",{children:e.name}),x("input",{id:"mealCheckBox",type:"checkbox",onChange:s})]}),x("div",{className:"block-content",children:x("div",{className:"strings",children:i})})]})};function lD(t){var e=w.useRef(t);return w.useEffect(function(){e.current=t},[t]),e}function ay(t){var e=lD(t);return w.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}function v6(t,e){var n=w.useRef(!0);w.useEffect(function(){if(n.current){n.current=!1;return}return t()},e)}function w6(){var t=w.useRef(!0),e=w.useRef(function(){return t.current});return w.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function _6(t){var e=w.useRef(t);return e.current=t,e}function I6(t){var e=_6(t);w.useEffect(function(){return function(){return e.current()}},[])}var ly=Math.pow(2,31)-1;function uD(t,e,n){var r=n-Date.now();t.current=r<=ly?setTimeout(e,r):setTimeout(function(){return uD(t,e,n)},ly)}function E6(){var t=w6(),e=w.useRef();return I6(function(){return clearTimeout(e.current)}),w.useMemo(function(){var n=function(){return clearTimeout(e.current)};function r(i,s){s===void 0&&(s=0),t()&&(n(),s<=ly?e.current=setTimeout(i,s):uD(e,i,Date.now()+s))}return{set:r,clear:n}},[])}const S6=["as","disabled"];function T6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function k6(t){return!t||t.trim()==="#"}function cD({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&k6(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},h=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:h},u]}const C6=w.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=T6(t,S6);const[s,{tagName:o}]=cD(Object.assign({tagName:n,disabled:r},i));return x(o,Object.assign({},i,s,{ref:e}))});C6.displayName="Button";const b6=["onKeyDown"];function A6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function N6(t){return!t||t.trim()==="#"}const hD=w.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=A6(t,b6);const[i]=cD(Object.assign({tagName:"a"},r)),s=ay(o=>{i.onKeyDown(o),n==null||n(o)});return N6(r.href)||r.role==="button"?x("a",Object.assign({ref:e},r,i,{onKeyDown:s})):x("a",Object.assign({ref:e},r,{onKeyDown:n}))});hD.displayName="Anchor";const u1=hD;var uy={},D6={get exports(){return uy},set exports(t){uy=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(D6);const Vl=uy;function cy(){return cy=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cy.apply(this,arguments)}function dD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function c1(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function R6(t){var e=x6(t,"string");return typeof e=="symbol"?e:String(e)}function x6(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function P6(t,e,n){var r=w.useRef(t!==void 0),i=w.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,w.useCallback(function(u){for(var c=arguments.length,h=new Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(h)),o(u)},[n])]}function O6(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[c1(r)],a=s[r],l=dD(s,[c1(r),r].map(R6)),u=e[r],c=P6(a,o,t[u]),h=c[0],d=c[1];return cy({},l,(i={},i[r]=h,i[u]=d,i))},t)}function hy(t,e){return hy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},hy(t,e)}function L6(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,hy(t,e)}var M6=/-(.)/g;function $6(t){return t.replace(M6,function(e,n){return n.toUpperCase()})}const F6=["xxl","xl","lg","md","sm","xs"],U6="xs",fD=w.createContext({prefixes:{},breakpoints:F6,minBreakpoint:U6});function S0(t,e){const{prefixes:n}=w.useContext(fD);return t||n[e]||e}function V6(){const{dir:t}=w.useContext(fD);return t==="rtl"}const B6=t=>t[0].toUpperCase()+$6(t).slice(1);function z6(t,{displayName:e=B6(t),Component:n,defaultProps:r}={}){const i=w.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c={...r,...l},h=S0(o,t);return x(a,{ref:u,className:Vl(s,h),...c})});return i.displayName=e,i}const j6=z6("carousel-caption"),pD=w.forwardRef(({as:t="div",bsPrefix:e,className:n,...r},i)=>{const s=Vl(n,S0(e,"carousel-item"));return x(t,{ref:i,...r,className:s})});pD.displayName="CarouselItem";function h1(t,e){let n=0;return w.Children.map(t,r=>w.isValidElement(r)?e(r,n++):r)}function q6(t,e){let n=0;w.Children.forEach(t,r=>{w.isValidElement(r)&&e(r,n++)})}function K6(t){return t&&t.ownerDocument||document}function W6(t){var e=K6(t);return e&&e.defaultView||window}function H6(t,e){return W6(t).getComputedStyle(t,e)}var G6=/([A-Z])/g;function Q6(t){return t.replace(G6,"-$1").toLowerCase()}var Y6=/^ms-/;function jc(t){return Q6(t).replace(Y6,"-ms-")}var X6=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function J6(t){return!!(t&&X6.test(t))}function mD(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(jc(e))||H6(t).getPropertyValue(jc(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(jc(i)):J6(i)?r+=i+"("+s+") ":n+=jc(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}const Z6=!!(typeof window<"u"&&window.document&&window.document.createElement);var dy=!1,fy=!1;try{var im={get passive(){return dy=!0},get once(){return fy=dy=!0}};Z6&&(window.addEventListener("test",im,im),window.removeEventListener("test",im,!0))}catch{}function e5(t,e,n,r){if(r&&typeof r!="boolean"&&!fy){var i=r.once,s=r.capture,o=n;!fy&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,dy?r:s)}t.addEventListener(e,n,r)}function t5(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function gD(t,e,n,r){return e5(t,e,n,r),function(){t5(t,e,n,r)}}function n5(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function r5(t){var e=mD(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function i5(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||n5(t,"transitionend",!0)},e+n),s=gD(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function s5(t,e,n,r){n==null&&(n=r5(t)||0);var i=i5(t,n,r),s=gD(t,"transitionend",e);return function(){i(),s()}}function d1(t,e){const n=mD(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function o5(t,e){const n=d1(t,"transitionDuration"),r=d1(t,"transitionDelay"),i=s5(t,s=>{s.target===t&&(i(),e(s))},n+r)}function a5(t){t.offsetHeight}const f1={disabled:!1},yD=ci.createContext(null);var l5=function(e){return e.scrollTop},wl="unmounted",os="exited",as="entering",wo="entered",py="exiting",Yr=function(t){L6(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=os,s.appearStatus=as):l=wo:r.unmountOnExit||r.mountOnEnter?l=wl:l=os,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===wl?{status:os}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==as&&o!==wo&&(s=as):(o===as||o===wo)&&(s=py)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===as){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:cl.findDOMNode(this);o&&l5(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===os&&this.setState({status:wl})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[cl.findDOMNode(this),a],u=l[0],c=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!i&&!o||f1.disabled){this.safeSetState({status:wo},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:as},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:wo},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:cl.findDOMNode(this);if(!s||f1.disabled){this.safeSetState({status:os},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:py},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:os},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:cl.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===wl)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=dD(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ci.createElement(yD.Provider,{value:null},typeof o=="function"?o(i,a):ci.cloneElement(ci.Children.only(o),a))},e}(ci.Component);Yr.contextType=yD;Yr.propTypes={};function mo(){}Yr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:mo,onEntering:mo,onEntered:mo,onExit:mo,onExiting:mo,onExited:mo};Yr.UNMOUNTED=wl;Yr.EXITED=os;Yr.ENTERING=as;Yr.ENTERED=wo;Yr.EXITING=py;var p1=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function u5(t,e){var n=p1(t),r=p1(e);return function(i){n&&n(i),r&&r(i)}}function c5(t,e){return w.useMemo(function(){return u5(t,e)},[t,e])}function h5(t){return t&&"setState"in t?cl.findDOMNode(t):t??null}const d5=ci.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const h=w.useRef(null),d=c5(h,l),p=T=>{d(h5(T))},y=T=>N=>{T&&h.current&&T(h.current,N)},v=w.useCallback(y(t),[t]),I=w.useCallback(y(e),[e]),m=w.useCallback(y(n),[n]),f=w.useCallback(y(r),[r]),g=w.useCallback(y(i),[i]),_=w.useCallback(y(s),[s]),k=w.useCallback(y(o),[o]);return x(Yr,{ref:c,...u,onEnter:v,onEntered:m,onEntering:I,onExit:f,onExited:_,onExiting:g,addEndListener:k,nodeRef:h,children:typeof a=="function"?(T,N)=>a(T,{...N,ref:p}):ci.cloneElement(a,{ref:p})})}),f5=40;function p5(t){if(!t||!t.style||!t.parentNode||!t.parentNode.style)return!1;const e=getComputedStyle(t);return e.display!=="none"&&e.visibility!=="hidden"&&getComputedStyle(t.parentNode).display!=="none"}const vD=w.forwardRef(({defaultActiveIndex:t=0,...e},n)=>{const{as:r="div",bsPrefix:i,slide:s=!0,fade:o=!1,controls:a=!0,indicators:l=!0,indicatorLabels:u=[],activeIndex:c,onSelect:h,onSlide:d,onSlid:p,interval:y=5e3,keyboard:v=!0,onKeyDown:I,pause:m="hover",onMouseOver:f,onMouseOut:g,wrap:_=!0,touch:k=!0,onTouchStart:T,onTouchMove:N,onTouchEnd:R,prevIcon:ae=x("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:W="Previous",nextIcon:it=x("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:un="Next",variant:In,className:Xr,children:vr,...wr}=O6({defaultActiveIndex:t,...e},{activeIndex:"onSelect"}),st=S0(i,"carousel"),O=V6(),K=w.useRef(null),[G,ce]=w.useState("next"),[Ce,Gt]=w.useState(!1),[me,F]=w.useState(!1),[q,le]=w.useState(c||0);w.useEffect(()=>{!me&&c!==q&&(K.current?ce(K.current):ce((c||0)>q?"next":"prev"),s&&F(!0),le(c||0))},[c,me,q,s]),w.useEffect(()=>{K.current&&(K.current=null)});let Re=0,xe;q6(vr,(H,ue)=>{++Re,ue===c&&(xe=H.props.interval)});const Mt=lD(xe),He=w.useCallback(H=>{if(me)return;let ue=q-1;if(ue<0){if(!_)return;ue=Re-1}K.current="prev",h==null||h(ue,H)},[me,q,h,_,Re]),Ge=ay(H=>{if(me)return;let ue=q+1;if(ue>=Re){if(!_)return;ue=0}K.current="next",h==null||h(ue,H)}),Wn=w.useRef();w.useImperativeHandle(n,()=>({element:Wn.current,prev:He,next:Ge}));const Hn=ay(()=>{!document.hidden&&p5(Wn.current)&&(O?He():Ge())}),Be=G==="next"?"start":"end";v6(()=>{s||(d==null||d(q,Be),p==null||p(q,Be))},[q]);const _r=`${st}-item-${G}`,Qt=`${st}-item-${Be}`,j=w.useCallback(H=>{a5(H),d==null||d(q,Be)},[d,q,Be]),te=w.useCallback(()=>{F(!1),p==null||p(q,Be)},[p,q,Be]),pe=w.useCallback(H=>{if(v&&!/input|textarea/i.test(H.target.tagName))switch(H.key){case"ArrowLeft":H.preventDefault(),O?Ge(H):He(H);return;case"ArrowRight":H.preventDefault(),O?He(H):Ge(H);return}I==null||I(H)},[v,I,He,Ge,O]),ve=w.useCallback(H=>{m==="hover"&&Gt(!0),f==null||f(H)},[m,f]),gt=w.useCallback(H=>{Gt(!1),g==null||g(H)},[g]),we=w.useRef(0),_e=w.useRef(0),Jr=E6(),oo=w.useCallback(H=>{we.current=H.touches[0].clientX,_e.current=0,m==="hover"&&Gt(!0),T==null||T(H)},[m,T]),ao=w.useCallback(H=>{H.touches&&H.touches.length>1?_e.current=0:_e.current=H.touches[0].clientX-we.current,N==null||N(H)},[N]),Va=w.useCallback(H=>{if(k){const ue=_e.current;Math.abs(ue)>f5&&(ue>0?He(H):Ge(H))}m==="hover"&&Jr.set(()=>{Gt(!1)},y||void 0),R==null||R(H)},[k,m,He,Ge,Jr,y,R]),lo=y!=null&&!Ce&&!me,Zi=w.useRef();w.useEffect(()=>{var H,ue;if(!lo)return;const $t=O?He:Ge;return Zi.current=window.setInterval(document.visibilityState?Hn:$t,(H=(ue=Mt.current)!=null?ue:y)!=null?H:void 0),()=>{Zi.current!==null&&clearInterval(Zi.current)}},[lo,He,Ge,Mt,y,Hn,O]);const es=w.useMemo(()=>l&&Array.from({length:Re},(H,ue)=>$t=>{h==null||h(ue,$t)}),[l,Re,h]);return Y(r,{ref:Wn,...wr,onKeyDown:pe,onMouseOver:ve,onMouseOut:gt,onTouchStart:oo,onTouchMove:ao,onTouchEnd:Va,className:Vl(Xr,st,s&&"slide",o&&`${st}-fade`,In&&`${st}-${In}`),children:[l&&x("div",{className:`${st}-indicators`,children:h1(vr,(H,ue)=>x("button",{type:"button","data-bs-target":"","aria-label":u!=null&&u.length?u[ue]:`Slide ${ue+1}`,className:ue===q?"active":void 0,onClick:es?es[ue]:void 0,"aria-current":ue===q},ue))}),x("div",{className:`${st}-inner`,children:h1(vr,(H,ue)=>{const $t=ue===q;return s?x(d5,{in:$t,onEnter:$t?j:void 0,onEntered:$t?te:void 0,addEndListener:o5,children:(cn,Gn)=>w.cloneElement(H,{...Gn,className:Vl(H.props.className,$t&&cn!=="entered"&&_r,(cn==="entered"||cn==="exiting")&&"active",(cn==="entering"||cn==="exiting")&&Qt)})}):w.cloneElement(H,{className:Vl(H.props.className,$t&&"active")})})}),a&&Y(jD,{children:[(_||c!==0)&&Y(u1,{className:`${st}-control-prev`,onClick:He,children:[ae,W&&x("span",{className:"visually-hidden",children:W})]}),(_||c!==Re-1)&&Y(u1,{className:`${st}-control-next`,onClick:Ge,children:[it,un&&x("span",{className:"visually-hidden",children:un})]})]})]})});vD.displayName="Carousel";const sm=Object.assign(vD,{Caption:j6,Item:pD}),m5=()=>{const[t,e]=w.useState(0),[n,r]=w.useState(0),[i,s]=w.useState(0),[o,a]=w.useState(0),[l,u]=w.useState(0),[c,h]=w.useState([]),[d,p]=w.useState([]),[y,v]=w.useState([]),[I,m]=w.useState({}),[f,g]=w.useState(!1),[_,k]=w.useState([]);w.useState(i3),w.useState([]);const[T,N]=w.useState([]),[R,ae]=w.useState([]),[W,it]=w.useState(),[un,In]=w.useState(!1),[Xr,vr]=w.useState(0),[wr,st]=w.useState(!1),[O,K]=w.useState(!1),[G,ce]=w.useState(),[Ce,Gt]=w.useState("submit"),me={carbohydrates:"#245dff",protein:"#e0c342",fat:"#ff4766"},F=j=>j==null?0:parseFloat(parseFloat(j).toFixed(2)),q=async()=>{console.log("FETCHING DATA FROM FIREBASE");const j=localStorage.getItem("email");try{const ve=(await Ul(nr(On,"AlamData"))).docs.map(Ft=>Ft.data()),we=(await Ul(nr(On,"users",j,"all_meals"))).docs.map(Ft=>Ft.data()),Jr=(await Ul(nr(On,"users",j,"logged_meals"))).docs.map(Ft=>Ft.data()),oo=Intl.DateTimeFormat().resolvedOptions().timeZone,ao=new Date().toLocaleDateString("en-US",{timeZone:oo}),[Va,lo,Zi]=ao.split("/"),es=`${Zi}-${Va.padStart(2,"0")}-${lo.padStart(2,"0")}`;let H=0,ue=0,$t=0,cn=0;const Gn=[];if(Jr.forEach(Ft=>{if(Ft.datestamp===es){Gn.push(Ft),console.log("today",Gn);const wD=Ft.totalcalories;H+=wD,ue+=Ft.totalmacros.protein,$t+=Ft.totalmacros.fat,cn+=Ft.totalmacros.carbs}}),h(Gn),ue!=0&&$t!=0&&cn!=0){var te=[["Type","Item"],["Protein",ue],["Fat",$t],["Carbohydrates",cn]];v(te),p(te)}return{allMeals:we,totalCaloriesSum:H,AlamMeals:ve}}catch(pe){console.log(pe)}},le=(j,te,pe)=>{const ve=[];console.log("Daily Calories"),console.log(W);const gt=W-te;console.log("alam data",pe),Array.isArray(j)&&(j.length<5?pe.forEach(_e=>{_e.totalcalories<=gt&&ve.push(_e)}):(console.log("allmeals",j),console.log(gt),j.forEach(_e=>{_e.totalcalories<=gt&&ve.push(_e)}),console.log("valid",ve)));const we=ve.slice(0,4);N(we),k(T)},Re=(j,te)=>{vr(j)},xe=j=>{localStorage.clear(),window.location.reload()},Mt=()=>{var j=[["Type","Item"],["Protein",0],["Fat",0],["Carbohydrates",1]];p(j)},He=()=>{var j=[["Type","Item"],["Protein",0],["Fat",0],["Carbohydrates",1]];v(j)};function Ge(j){In(!un),console.log("Checking new data input"),console.log(j),console.log(Object.keys(j).length===0);var te={},pe=0,ve=0,gt=0,we=0,_e=null;Object.keys(j).length===0?(console.log("Changing to old data"),pe=y[1][1],ve=y[2][1],gt=y[3][1],we=n):(console.log("Changing to new data"),pe=y[1][1]+j.protein,ve=y[2][1]+j.fat,gt=y[3][1]+j.carbohydrates,we=j.calories+n,_e=j.name),te=[["Type","Item"],["Protein",pe],["Fat",ve],["Carbohydrates",gt]],a(pe.toFixed(2)),u(ve.toFixed(2)),s(gt.toFixed(2)),e(we.toFixed(2)),p(te),ce(_e)}const Wn=async()=>{try{g(!0);const j=localStorage.getItem("email"),te=Fn(On,"users",j),pe=await wd(te);if(!pe.exists()){console.log("No such document!");return}const ve=pe.data();if(ve.daily_calorie_goal==null){console.log("User daily calorie goal is null");return}console.log("User daily calorie goal: ",ve.daily_calorie_goal),it(parseInt(ve.daily_calorie_goal))}catch(j){console.log(j)}},Hn=async()=>{if(W==null){console.log("Total daily calories is null");return}try{const j=localStorage.getItem("email"),te=Fn(On,"users",j);console.log("Updating data base with calorie goal: ",W);const pe=await Zg(te,{daily_calorie_goal:parseInt(W)})}catch(j){console.log(j)}};w.useEffect(()=>{console.log("UDPATING CALORIES GOALS"),Hn(),f&&(console.log("CALORIES FINISHED FETCHING"),_r())},[W]);const Be={width:"100%",height:"160px",legend:"none",pieSliceText:"none",backgroundColor:"transparent",chartArea:{width:"100%",height:"90%"},slices:{0:{color:me.protein},1:{color:me.fat},2:{color:me.carbohydrates},3:{color:me.protein},4:{color:me.fat},5:{color:me.carbohydrates}}};window.innerWidth<=768&&(Be.height="130px",Be.chartArea.width="90%");function _r(){d.length==0&&Mt(),y.length==0&&He(),g(!1),q().then(({allMeals:j,totalCaloriesSum:te,AlamMeals:pe})=>{ae(j),le(j,te,pe)})}w.useEffect(()=>{console.log("ALL MEALS UPDATED"),console.log(R)},[R]),w.useEffect(()=>{Wn()},[]),w.useEffect(()=>{console.log("Pie Data Changed"),m({old:y,new:d})},[d,y]),w.useEffect(()=>{console.log("Diffdata Changed"),console.log(I)},[I]),w.useEffect(()=>{if(c.length!=0){var j=0,te=0,pe=0,ve=0;c.forEach((gt,we)=>{gt.ingredients.forEach((_e,Jr)=>{j+=_e.macros.protein,te+=_e.macros.fat,pe+=_e.macros.carbs,ve+=_e.calories})})}r(ve),e(ve),a(j),u(te),s(pe)},[c]),w.useEffect(()=>{k(T)},[T]);async function Qt(j,te){const pe=Intl.DateTimeFormat().resolvedOptions().timeZone,ve=new Date().toLocaleDateString("en-US",{timeZone:pe}),[gt,we,_e]=ve.split("/"),Jr=`${_e}-${gt.padStart(2,"0")}-${we.padStart(2,"0")}`,oo=G,ao=te.ingredients,Va=te.totalcalories,lo=te.totalmacros,Zi=te.favmeal,es=localStorage.getItem("email"),H=Fn(On,"users",es),ue=nr(H,"all_meals"),$t=nr(H,"logged_meals");if(te.favmeal,te.favmeal){const Gn=Fn(On,"users",es,"all_meals",oo),Ft=await wd(Gn);Ft.exists()&&Ft.data().favmeal.count+1}ao.forEach(Gn=>{Gn.servingUnit==null&&(Gn.servingUnit="")});const cn={name:oo,ingredients:ao,totalcalories:Va,totalmacros:lo,date:Jr,favmeal:Zi,datestamp:Jr};console.log(cn),await Gt("submitting..."),await bu(ue,cn),await bu($t,cn),await st(!0),await Gt("submitted!"),await setTimeout(()=>{console.log("Delayed for 1 seconds"),window.location.href="/"},"2000"),k([]),K(!0)}return Y("div",{className:"homepage",children:[Y("div",{className:"upper",children:[Y("div",{className:"header",children:[d.length!=0&&y.length!=0?x("div",{id:"calories_and_macro_graph",children:x(E0,{chartType:"PieChart",diffdata:I,options:Be,id:"calories_and_macro_graph"})}):"",Y("div",{className:"info",children:[Y("div",{className:"info_item",children:[x("h3",{children:"Calories: "}),Y("p",{children:[F(t)," kcal"]})]}),Y("div",{className:"info_item",children:[x("h3",{style:{color:me.carbohydrates},children:"Carbs:"}),Y("p",{children:[F(i)," g"]})]}),Y("div",{className:"info_item",children:[x("h3",{style:{color:me.fat},children:"Fat: "}),Y("p",{children:[F(l)," g"]})]}),Y("div",{className:"info_item",children:[x("h3",{style:{color:me.protein},children:"Protein: "}),Y("p",{children:[F(o)," g"]})]})]})]}),x("div",{className:"calorie_goal",children:x("input",{type:"number",value:W||"",placeholder:"Enter Your Calorie Goal Today (kcal)...",onChange:j=>it(j.target.value)})})]}),Y("div",{className:"content",children:[c.map((j,te)=>x(g6,{block:j},te)),O?"":Y("div",{className:"recommendation-section",children:[x("div",{className:"recommendation-seperator"}),x("h3",{className:"dinner-recs-heading",children:" Meal Recommendations:"}),x("input",{type:"text",placeholder:"New Meal Name",value:G||"",onChange:j=>ce(j.target.value)})]}),x(sm,{activeIndex:Xr,onSelect:Re,slide:"false",interval:null,touch:"true",children:_.map((j,te)=>Y(sm.Item,{children:[x(y6,{option:j,tryMealOption:Ge},te),un?x(sm.Caption,{children:x("button",{onClick:pe=>Qt(pe,j),className:wr?"slimPossibleSubmitted":"slimPossibleSubmit",children:Ce})}):""]},te))})]}),x(oy,{className:"exit-app",to:"/login",onClick:xe,style:{marginTop:"10px"},children:x("img",{className:"add_img",src:"src/components/homepage/exit.png"})}),x(oy,{className:"form_add",to:"/form",children:x("img",{id:"add_img",src:"src/components/homepage/add.png"})})]})};function g5(){const[t,e]=w.useState(""),[n,r]=w.useState([]),[i,s]=w.useState("7PjqZ2PBp4plWIxuk3AtA6KUTsYooEKx9ospWyLG"),[o,a]=w.useState([]),[l,u]=w.useState(""),[c,h]=w.useState(!1),[d,p]=w.useState([]),[y,v]=w.useState("Submit"),[I,m]=w.useState([]),[f,g]=w.useState([]),[_,k]=w.useState(!1),[T,N]=w.useState({}),[R,ae]=w.useState(),[W,it]=w.useState("Add to meal"),un=()=>{k(!1)},In=async()=>{localStorage.getItem("email");const q=await(await Ul(nr(On,"users","user1","all_meals"))).docs.map(le=>le.data());console.log("All user meals fetched!"),console.log(q),m(q)};I.length==0&&In();const Xr=F=>{if(l==""){g([]);return}for(var q=[],le=0;le<I.length;le++){for(var Re=I[le],xe=!1,Mt=0;Mt<q.length;Mt++){var He=q[Mt];if(He.name==Re.name){xe=!0;break}}!xe&&Re.name.toLowerCase().includes(l.toLowerCase())&&q.push(Re)}console.log(q),g(q)};function vr(F){u(F.name),g([]),console.log("Option clicked!"),console.log(F);var q=[];F.ingredients.forEach(le=>{var Re="n/a";le.grams!=null&&(Re=le.grams),q.push({name:le.name,calories:le.calories,carbohydrates:le.macros.carbs,protein:le.macros.protein,fat:le.macros.fat,grams:Re,borderColor:{borderColor:st()}})}),console.log("Updating ingredients array..."),a(q),F.favmeal&&h(!0)}const wr=F=>{F.preventDefault(),r([]),p([])},st=()=>"#"+Math.floor(Math.random()*16777215).toString(16),O=()=>{if(t===""){let xe=[...d],Mt="The search query can't be empty!";xe.push(Mt),p(xe);return}console.log("Searching for: "+t);const F=t.split(", "),q=F[0];var le=F[1];le==null&&(le="");const Re=new URLSearchParams({api_key:i,query:q,pageSize:50,pageNumber:1,brandOwner:le});fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?${Re}`).then(xe=>xe.json()).then(xe=>{console.log(xe),console.log(xe.foods),r(xe.foods)}).catch(xe=>{console.error("Error fetching data:",xe)})},K=F=>{e(F.target.value)},G=()=>{g([])},ce=(F,q)=>{k(!0),N(q)},Ce=()=>{var F=T;N({}),k(!1),it("Add to meal"),ae(null);const q=F.description;var le=0,Re=0,xe=0,Mt=0;F.foodNutrients.forEach(Be=>{switch(Be.nutrientName){case"Energy":le=Be.value;break;case"Carbohydrate, by difference":Re=Be.value;break;case"Protein":xe=Be.value;break;case"Total lipid (fat)":Mt=Be.value;break}});var He=o,Ge=null,Wn=null;F.servingSizeUnit=="g"||F.servingSizeUnit=="ml"?(Ge=F.servingSize*R,Wn=F.servingSizeUnit):Ge=R,console.log(R),console.log(typeof R),console.log(Ge),console.log(typeof Ge);var Hn={name:q,calories:parseFloat((le*R).toFixed(2)),carbohydrates:parseFloat((Re*R).toFixed(2)),protein:parseFloat((xe*R).toFixed(2)),fat:parseFloat((Mt*R).toFixed(2)),amount:parseFloat(Ge.toFixed(2)),servingUnit:Wn,borderColor:{borderColor:st()}};He.push(Hn),a(He),console.log(He),setTimeout(()=>{r([]),e("")},500)};async function Gt(F){const q=localStorage.getItem("email");if(console.log("Submitting to firebase for user: "+q),l==""){let we=[...d],_e="The meal name can't be empty!";we.push(_e),p(we);return}if(!isNaN(l)){let we=[...d],_e="The meal name must be a string!";we.push(_e),p(we);return}const le=l,Re=Intl.DateTimeFormat().resolvedOptions().timeZone,xe=new Date().toLocaleDateString("en-US",{timeZone:Re}),[Mt,He,Ge]=xe.split("/"),Wn=`${Ge}-${Mt.padStart(2,"0")}-${He.padStart(2,"0")}`;for(var Hn=[],Be=0,_r={carbs:0,protein:0,fat:0},Qt=0;Qt<o.length;Qt++){var j="";o[Qt].servingUnit!=null&&(j=o[Qt].servingUnit);const we={name:o[Qt].name,macros:{carbs:o[Qt].carbohydrates,protein:o[Qt].protein,fat:o[Qt].fat},amount:o[Qt].amount,servingUnit:j,calories:o[Qt].calories};Hn.push(we),Be+=we.calories,_r.carbs+=we.macros.carbs,_r.protein+=we.macros.protein,_r.fat+=we.macros.fat}const te={name:le,ingredients:Hn,totalcalories:parseFloat(Be.toFixed(2)),totalmacros:_r,favmeal:c,datestamp:Wn};parseFloat(Be.toFixed(2)),console.log("Submitting the following data:"),console.log(te);const pe=Fn(On,"users",q),ve=nr(pe,"all_meals"),gt=nr(pe,"logged_meals");await v("submitting..."),await bu(ve,te),await bu(gt,te),await v("submitted!"),await setTimeout(()=>{console.log("Delayed for 1 seconds"),window.location.href="/"},"1000")}var me=function(F){return F[0].toUpperCase()+F.slice(1).toLowerCase()};return Y("div",{className:"overallForm",children:[_?x("div",{className:"modal-item",children:Y("div",{className:"modal-content",children:[x("span",{className:"close",onClick:un,children:"×"}),x("h2",{children:T.description}),T.brandOwner?x("h6",{children:T.brandOwner}):"",x("p",{}),T.servingSize&&T.servingSizeUnit?Y("p",{children:[T.servingSize," ",T.servingSizeUnit," per serving"]}):x("p",{children:" No serving size/unit data aviailable"}),x("p",{}),x("input",{type:"number",className:"modal-search-input",value:R||"",onChange:F=>ae(parseFloat(F.target.value)),placeholder:T.servingSize&&T.servingSizeUnit?"Enter your serving size here":"Enter your amount here"}),Y("button",{className:W.toLowerCase()==="Add to meal".toLowerCase()?"slimPossibleSubmit":"slimPossibleSubmitted",onClick:Ce,children:[" ",W," "]})]})}):"",d.length>0?d.map((F,q)=>x("p",{style:{color:"red"},children:F},q)):"",x(oy,{className:"ret_home",to:"/",children:x("img",{id:"ret_home_img",src:"src/components/homepage/home.png"})}),Y("form",{className:"submitForm",onSubmit:wr,children:[x("button",{className:y.toLowerCase()==="Submit".toLowerCase()?"slimPossibleSubmit":"slimPossibleSubmitted",onClick:Gt,children:y}),x("input",{className:"meal-input",name:"name",placeholder:"Your meal name",onChange:F=>u(F.target.value),onKeyUp:Xr,value:l,required:!0}),x("div",{id:l===""?"":"dropdown-menu",children:f.map((F,q)=>Y("div",{className:"option-meal-suggested",onClick:()=>vr(F),children:[Y("div",{children:[" ",F.favmeal?"❤️":""," ",F.name," "]}),Y("h4",{children:[" ",F.totalcalories||F.totalcalories," kcal "]})]},q))}),f.length>0?x("button",{className:"option-meal-suggested-close-button",onClick:G,children:"x"}):"",Y("div",{className:"searchBar",children:[x("input",{type:"text","data-testid":"ingredient-search-input",className:"search-input",value:t,onChange:K,placeholder:"Ingredient name, brand name(optional)"}),x("button",{className:"searchIngredient","data-testid":"ingredient-search-button",type:"submit",onClick:O,children:"🔎"})]}),Y("div",{className:"favMeal",children:[x("p",{children:" ✨ Favourite Meal? "}),x("input",{className:"fav_meal",type:"checkbox",value:c,onChange:F=>h(F.target.checked)})]})]}),x("div",{className:"ingredient-options",children:o.map(F=>Y("div",{className:"ingredient-option",style:F.borderColor,children:[Y("h2",{children:[F.name,":"]}),Y("p",{children:[F.calories," kcal"]})]},F.name))}),x("div",{className:"search-results",children:n.map(F=>x("div",{className:"search-result-card",onClick:q=>ce(q,F),children:Y("div",{className:"src-title",children:[F.brandOwner!=null&&F.brandOwner!=""?x("h3",{children:me(F.description)}):x("h3",{style:{width:"68%"},children:me(F.description)}),F.brandOwner!=null&&F.brandOwner!=""?x("p",{children:F.brandOwner}):""]})},F.fdcId))})]})}const y5=()=>{const t=localStorage.getItem("name");return x(J3,{children:Y(H3,{children:[x(vl,{path:"/login",element:x(s1,{})}),x(vl,{path:"/form",element:x(g5,{})}),t?x(vl,{path:"/",element:x(m5,{})}):x(vl,{path:"/",element:x(s1,{})})]})})},v5=om.createRoot(document.getElementById("root"));v5.render(x(ci.StrictMode,{children:x(y5,{})}));
