if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const l=e=>i(e,o),t={module:{uri:o},exports:c,require:l};s[o]=Promise.all(n.map((e=>t[e]||l(e)))).then((e=>(r(...e),c)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-Ceq2-HAg.css",revision:null},{url:"assets/index-DfNQypeh.js",revision:null},{url:"assets/talks-D_jfDloX.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"index.html",revision:"aed65fccec6f545179307b5f69ba4247"},{url:"adaptto-favicon.svg",revision:"0f31891a8e2ed5271921c5c1030704e8"},{url:"apple-touch-icon-180x180.png",revision:"57ab7fe945ec6eed2348f06dacda6290"},{url:"favicon.ico",revision:"228aa16a964c77d2e99e6cc4490ae446"},{url:"maskable-icon-512x512.png",revision:"08f29205788466d0f2fea2fdb2533c90"},{url:"pwa-192x192.png",revision:"5520c955e43bf68e14f849d0f4b4c871"},{url:"pwa-512x512.png",revision:"26fa262bde1ced804945ddb87770278f"},{url:"pwa-64x64.png",revision:"c3942e124407831b9d075d6362ac0aba"},{url:"manifest.webmanifest",revision:"94255850c4f3c9b362952aa10f1eb585"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
