if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>i(e,o),f={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-772abdfe.js",revision:null},{url:"assets/index-fb5d9d7a.css",revision:null},{url:"assets/talks-b634a9d3.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"2aa6fda79ae5f8b5983981115e8ec8dc"},{url:"adaptto-favicon.svg",revision:"0a7414e1e1096b037bf62b6fc231f708"},{url:"favicon.ico",revision:"bb64e0a3f8cea64cf72dc4567e2beee2"},{url:"apple-touch-icon-180x180.png",revision:"777f500640d33490991c17cc3ee17535"},{url:"maskable-icon-512x512.png",revision:"b76a574e3369d34e2d895c97f4ef5968"},{url:"pwa-64x64.png",revision:"2432ff629972d2ed9a496f2d6245c769"},{url:"pwa-192x192.png",revision:"8244849d0ce061073cc54d81bb9a4df9"},{url:"pwa-512x512.png",revision:"f19fbe6ba7e3ccf42ea9e9efe8d1be13"},{url:"manifest.webmanifest",revision:"94255850c4f3c9b362952aa10f1eb585"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
