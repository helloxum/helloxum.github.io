(function(e){function t(t){for(var r,o,c=t[0],u=t[1],l=t[2],s=0,p=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={2:0},a={2:0},i=[];function c(e){return u.p+"js/"+({1:"chunk-common"}[e]||e)+"."+{1:"7e48abfd",3:"bc28b159",4:"3e541b56",5:"9961b222",6:"20f6c3bb",7:"68e40c5e",8:"e8ac892a",9:"3fc80515"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={1:1,3:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({1:"chunk-common"}[e]||e)+"."+{1:"fe69f389",3:"f7c99ca1",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var p=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var f=s;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("7d6e"),n("e54f"),n("985d"),n("31cd");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),i=n("b05d"),c=n("2a19"),u=n("18d6"),l=n("a639");r["a"].use(i["a"],{config:{},lang:o["a"],iconSet:a["a"],plugins:{Notify:c["a"],LocalStorage:u["a"],SessionStorage:l["a"]}});var s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},p=[],f={name:"App"},d=f,h=n("2877"),m=Object(h["a"])(d,s,p,!1,null,null,null),b=m.exports,v=n("8c4f");const g=[{path:"/",redirect:"/app/rili"},{path:"/app",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"dead")),children:[{component:()=>Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,"3ef9")),path:"rili",name:"rili",props:!0},{component:()=>Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,"0a9e")),path:"shichen",name:"shichen",props:!0},{component:()=>Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,"0a08")),path:"year",name:"year",props:!0},{component:()=>Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,"c52c")),path:"settings",name:"settings",props:!0},{component:()=>n.e(8).then(n.bind(null,"bd8c")),path:"test",name:"test",props:!0}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var y=g;r["a"].use(v["a"]);var w=function(){const e=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:y,mode:"hash",base:""});return e},P=async function(){const e="function"===typeof w?await w({Vue:r["a"]}):w,t={router:e,render:e=>e(b),el:"#q-app"};return{app:t,router:e}};async function O(){const{app:e,router:t}=await P();new r["a"](e)}O()},"31cd":function(e,t,n){}});