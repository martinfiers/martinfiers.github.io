(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(t,e,n){"use strict";n.r(e),n.d(e,"greet",(function(){return g})),n.d(e,"install_panic_hook",(function(){return b})),n.d(e,"CountryInterface",(function(){return v})),n.d(e,"__wbg_alert_f4f670f5617302ef",(function(){return _})),n.d(e,"__wbg_new_59cb74e423758ede",(function(){return O})),n.d(e,"__wbg_stack_558ba5917b466edd",(function(){return j})),n.d(e,"__wbg_error_4bb6c2a97407129a",(function(){return T})),n.d(e,"__wbindgen_object_drop_ref",(function(){return x})),n.d(e,"__wbg_random_d45f566bef640e60",(function(){return E})),n.d(e,"__wbindgen_throw",(function(){return z}));var r=n(143);const o=new Array(32).fill(void 0);function i(t){return o[t]}o.push(void 0,null,!0,!1);let u=o.length;function c(t){const e=i(t);return function(t){t<36||(o[t]=u,u=t)}(t),e}let f=new("undefined"==typeof TextDecoder?n(139).TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});f.decode();let s=null;function l(){return null!==s&&s.buffer===r.n.buffer||(s=new Uint8Array(r.n.buffer)),s}function a(t,e){return f.decode(l().subarray(t,t+e))}let p=0;let y=new("undefined"==typeof TextEncoder?n(139).TextEncoder:TextEncoder)("utf-8");const d="function"==typeof y.encodeInto?function(t,e){return y.encodeInto(t,e)}:function(t,e){const n=y.encode(t);return e.set(n),{read:t.length,written:n.length}};function h(t,e,n){if(void 0===n){const n=y.encode(t),r=e(n.length);return l().subarray(r,r+n.length).set(n),p=n.length,r}let r=t.length,o=e(r);const i=l();let u=0;for(;u<r;u++){const e=t.charCodeAt(u);if(e>127)break;i[o+u]=e}if(u!==r){0!==u&&(t=t.slice(u)),o=n(o,r,r=u+3*t.length);const e=l().subarray(o+u,o+r);u+=d(t,e).written}return p=u,o}function g(t){var e=h(t,r.c,r.d),n=p;r.l(e,n)}function b(){r.m()}let m=null;function w(){return null!==m&&m.buffer===r.n.buffer||(m=new Int32Array(r.n.buffer)),m}class v{static __wrap(t){const e=Object.create(v.prototype);return e.ptr=t,e}free(){const t=this.ptr;this.ptr=0,r.a(t)}static new(t){var e=r.g(t);return v.__wrap(e)}render(){try{r.h(8,this.ptr);var t=w()[2],e=w()[3];return a(t,e)}finally{r.b(t,e)}}step(t){r.j(this.ptr,t)}total_population(){return r.k(this.ptr)>>>0}infected(t){return r.f(this.ptr,t)>>>0}cumulative_infected(t){return r.e(this.ptr,t)>>>0}set_policy_social_distancing(t){r.i(this.ptr,t)}}const _=function(t,e){alert(a(t,e))},O=function(){return function(t){u===o.length&&o.push(o.length+1);const e=u;return u=o[e],o[e]=t,e}(new Error)},j=function(t,e){var n=h(i(e).stack,r.c,r.d),o=p;w()[t/4+1]=o,w()[t/4+0]=n},T=function(t,e){try{console.error(a(t,e))}finally{r.b(t,e)}},x=function(t){c(t)},E="function"==typeof Math.random?Math.random:(S="Math.random",()=>{throw new Error(S+" is not defined")});var S;const z=function(t,e){throw new Error(a(t,e))}},139:function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!b(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(c(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(t).replace(o,(function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}})),f=r[n];n<i;f=r[++n])h(f)||!v(f)?u+=" "+f:u+=" "+c(f);return u},e.deprecate=function(n,r){if(void 0!==t&&!0===t.noDeprecation)return n;if(void 0===t)return function(){return e.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,u={};function c(t,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&e._extend(r,n),m(r.showHidden)&&(r.showHidden=!1),m(r.depth)&&(r.depth=2),m(r.colors)&&(r.colors=!1),m(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=f),l(r,t,r.depth)}function f(t,e){var n=c.styles[e];return n?"["+c.colors[n][0]+"m"+t+"["+c.colors[n][1]+"m":t}function s(t,e){return t}function l(t,n,r){if(t.customInspect&&n&&j(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return b(o)||(o=l(t,o,r)),o}var i=function(t,e){if(m(e))return t.stylize("undefined","undefined");if(b(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(g(e))return t.stylize(""+e,"number");if(d(e))return t.stylize(""+e,"boolean");if(h(e))return t.stylize("null","null")}(t,n);if(i)return i;var u=Object.keys(n),c=function(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(n)),O(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return a(n);if(0===u.length){if(j(n)){var f=n.name?": "+n.name:"";return t.stylize("[Function"+f+"]","special")}if(w(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(_(n))return t.stylize(Date.prototype.toString.call(n),"date");if(O(n))return a(n)}var s,v="",T=!1,x=["{","}"];(y(n)&&(T=!0,x=["[","]"]),j(n))&&(v=" [Function"+(n.name?": "+n.name:"")+"]");return w(n)&&(v=" "+RegExp.prototype.toString.call(n)),_(n)&&(v=" "+Date.prototype.toUTCString.call(n)),O(n)&&(v=" "+a(n)),0!==u.length||T&&0!=n.length?r<0?w(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),s=T?function(t,e,n,r,o){for(var i=[],u=0,c=e.length;u<c;++u)z(e,String(u))?i.push(p(t,e,n,r,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0))})),i}(t,n,r,c,u):u.map((function(e){return p(t,n,r,c,e,T)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(s,v,x)):x[0]+v+x[1]}function a(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var u,c,f;if((f=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?c=f.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):f.set&&(c=t.stylize("[Setter]","special")),z(r,o)||(u="["+o+"]"),c||(t.seen.indexOf(f.value)<0?(c=h(n)?l(t,f.value,null):l(t,f.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+c.split("\n").map((function(t){return"   "+t})).join("\n")):c=t.stylize("[Circular]","special")),m(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function y(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function h(t){return null===t}function g(t){return"number"==typeof t}function b(t){return"string"==typeof t}function m(t){return void 0===t}function w(t){return v(t)&&"[object RegExp]"===T(t)}function v(t){return"object"==typeof t&&null!==t}function _(t){return v(t)&&"[object Date]"===T(t)}function O(t){return v(t)&&("[object Error]"===T(t)||t instanceof Error)}function j(t){return"function"==typeof t}function T(t){return Object.prototype.toString.call(t)}function x(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(m(i)&&(i=t.env.NODE_DEBUG||""),n=n.toUpperCase(),!u[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=t.pid;u[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else u[n]=function(){};return u[n]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=y,e.isBoolean=d,e.isNull=h,e.isNullOrUndefined=function(t){return null==t},e.isNumber=g,e.isString=b,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=m,e.isRegExp=w,e.isObject=v,e.isDate=_,e.isError=O,e.isFunction=j,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(141);var E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function S(){var t=new Date,e=[x(t.getHours()),x(t.getMinutes()),x(t.getSeconds())].join(":");return[t.getDate(),E[t.getMonth()],e].join(" ")}function z(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",S(),e.format.apply(e,arguments))},e.inherits=n(142),e._extend=function(t,e){if(!e||!v(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};var D="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function k(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(D&&t[D]){var e;if("function"!=typeof(e=t[D]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,D,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,o)}catch(t){n(t)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),D&&Object.defineProperty(e,D,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=D,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};e.apply(this,n).then((function(e){t.nextTick(u,null,e)}),(function(e){t.nextTick(k,e,u)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}}).call(this,n(140))},140:function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var f,s=[],l=!1,a=-1;function p(){l&&f&&(l=!1,f.length?s=f.concat(s):a=-1,s.length&&y())}function y(){if(!l){var t=c(p);l=!0;for(var e=s.length;e;){for(f=s,s=[];++a<e;)f&&f[a].run();a=-1,e=s.length}f=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new d(t,e)),1!==s.length||l||c(y)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},141:function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},142:function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},143:function(t,e,n){"use strict";var r=n.w[t.i];t.exports=r;n(138);r.o()}}]);