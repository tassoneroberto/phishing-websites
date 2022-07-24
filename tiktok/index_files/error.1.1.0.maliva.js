SlardarLite.plugin.error=function(){"use strict";function a(n,t){var r="function"==typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,i=r.call(n),u=[];try{for(;(void 0===t||0<t--)&&!(e=i.next()).done;)u.push(e.value)}catch(n){o={error:n}}finally{try{e&&!e.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function s(n,t,r){if(r||2===arguments.length)for(var e,o=0,i=t.length;o<i;o++)!e&&o in t||((e=e||Array.prototype.slice.call(t,0,o))[o]=t[o]);return n.concat(e||Array.prototype.slice.call(t))}function v(n){return"function"==typeof n}function r(n){return"[object Array]"===Object.prototype.toString.call(n)}function d(r,e,o){return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];r[e]=o.apply(void 0,s([r[e]],a(n),!1))}}function l(n,t){return n=n.config.plugins[t],"object"!=typeof(t=n)||null===t||r(t)?{}:n}var f,h,y=["EventTarget","Window","Node","ApplicationCache","ChannelMergerNode","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","MessagePort","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],m=["setTimeout","setInterval","requestAnimationFrame","requestIdleCallback"],p=["onload","onerror","onprogress","onreadystatechange"],T="addEventListener",L="removeEventListener";return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return function(r,e){return r.s(function(t){return n.forEach(function(n){n=n(r,e);n&&n.u(t)})})}}(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(r,n){return t.reduce(function(n,t){return t(r,n)},n)}}(function(o){var u=o.error,c=o.listener,n=o.config.plugins.jsError,f=void 0===n||n;return(0,o.s)(function(t){var i,n=l(o,"jsError").captureGlobalAsync,r=function(n){t([2,[n]])},e=window;f&&u.forEach(r),["error","unhandledrejection"].forEach(function(n){c&&e[L](n,c),f&&e[T](n,r)}),n&&(i=function(n){return v(n)?n._w_||(n._w_=function(){try{return(n.handleEvent||n).apply(this,[].map.call(arguments,i))}catch(n){r({error:n})}}):n},m.forEach(function(n){return e[n]&&d(e,n,function(e){return function(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return e&&e.call.apply(e,s([this,i(n)],a(t),!1))}})()}),d(XMLHttpRequest.prototype,"send",function(e){return function(){for(var t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return p.forEach(function(n){return t[n]&&d(t,n,i)()}),e.apply(this,n)}})(),y.forEach(function(n){n=e[n].prototype;n[T]&&(d(n,T,function(o){return function(n,t,r){try{var e=t.handleEvent;v(e)&&(t.handleEvent=i(e))}catch(n){}return o&&o.call(this,n,i(t),r)}})(),d(n,L,function(e){return function(n,t,r){return null!=t&&t._w_&&e.call(this,n,t._w_,r),e.call(this,n,t,r)}})())}))})},(void 0===f&&(f=100),void 0===h&&(h=20),function(n,u){var t=n.config.plugins.breadcrumb,c=void 0===t||t,n=n.s;return u&&n(function(t){var r,e,o,i;c&&(r=[],o=function(n){var t=n[1];t!==e&&(r.push(n)>h&&r.shift(),e=t)},document.addEventListener("click",function(n){o([i=0,n])}),document.addEventListener("keypress",function(n){try{var t=n.target;if(!t||!/input|textarea/i.test(t.tagName)||!t.isContentEditable)return}catch(n){}i||o([1,n]),clearTimeout(i),i=window.setTimeout(function(){i=0},f)}),u.u(function(n){setTimeout(function(){n[1][1]=r.slice(),t(n)})}))})})),function(n){var t=n.error,r=n.listener,e=n.config.plugins.resourceError,i=void 0===e||e;return(0,n.s)(function(o){function n(n){var t,r,e=n.target;e&&e.tagName&&(t="link"===(r=t=e).tagName.toLowerCase()?"href":"src",(t=r.getAttribute(t)||r[t])&&t!==location.href&&o([0,[e.tagName,n.timeStamp,t,performance.getEntriesByName(t).pop()]]))}i&&(t.forEach(n),addEventListener("error",n,!0)),r&&removeEventListener("error",r)})},function(n){setTimeout(function(){n.error=0})})}();