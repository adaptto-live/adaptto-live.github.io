if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const a=e=>n(e,o),t={module:{uri:o},exports:c,require:a};i[o]=Promise.all(s.map((e=>t[e]||a(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-86e74361.js",revision:null},{url:"assets/index-d6ca40b5.css",revision:null},{url:"assets/talks-b634a9d3.js",revision:null},{url:"index.html",revision:"08a6cda33789b103af9b5f6c9b257c1e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"adaptto-favicon.svg",revision:"0a7414e1e1096b037bf62b6fc231f708"},{url:"favicon.ico",revision:"bb64e0a3f8cea64cf72dc4567e2beee2"},{url:"apple-touch-icon-180x180.png",revision:"e6e39d18afc6247dba6ab29a89bf8905"},{url:"maskable-icon-512x512.png",revision:"b76a574e3369d34e2d895c97f4ef5968"},{url:"pwa-64x64.png",revision:"2432ff629972d2ed9a496f2d6245c769"},{url:"pwa-192x192.png",revision:"8244849d0ce061073cc54d81bb9a4df9"},{url:"pwa-512x512.png",revision:"f19fbe6ba7e3ccf42ea9e9efe8d1be13"},{url:"manifest.webmanifest",revision:"95b2d3b45923a7e06ae3a7cec6d435c7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
