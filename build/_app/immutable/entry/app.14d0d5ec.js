import{s as q,a as B,o as U,t as j,b as D}from"../chunks/scheduler.eedd3157.js";import{S as W,i as z,s as F,e as p,c as G,a as b,t as h,b as L,d,f as w,g as H,h as J,j as K,k as I,l as m,m as M,n as Q,o as X,p as P,q as E,r as v,u as O,v as R,w as y}from"../chunks/index.6f225d97.js";const Y="modulepreload",Z=function(o,e){return new URL(o,e).href},T={},g=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f,i),f in T)return;T[f]=!0;const t=f.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!i)for(let a=r.length-1;a>=0;a--){const u=r[a];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${s}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":Y,t||(c.as="script",c.crossOrigin=""),c.href=f,document.head.appendChild(c),t)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},se={};function $(o){let e,n,i;var r=o[1][0];function f(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=E(r,f(o)),o[12](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,s){e&&R(e,t,s),b(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){P();const l=e;h(l.$$.fragment,1,0,()=>{y(l,1)}),L()}r?(e=E(r,f(t)),t[12](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),o[12](null),e&&y(e,t)}}}function x(o){let e,n,i;var r=o[1][0];function f(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=E(r,f(o)),o[11](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,s){e&&R(e,t,s),b(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){P();const l=e;h(l.$$.fragment,1,0,()=>{y(l,1)}),L()}r?(e=E(r,f(t)),t[11](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&8215&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)}},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),o[11](null),e&&y(e,t)}}}function ee(o){let e,n,i;var r=o[1][1];function f(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=E(r,f(o)),o[10](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,s){e&&R(e,t,s),b(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){P();const l=e;h(l.$$.fragment,1,0,()=>{y(l,1)}),L()}r?(e=E(r,f(t)),t[10](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&16&&(l.data=t[4]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){t&&w(n),o[10](null),e&&y(e,t)}}}function V(o){let e,n=o[6]&&A(o);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=J(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=K(e);n&&n.l(r),r.forEach(w),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,r){b(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=A(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function A(o){let e;return{c(){e=M(o[7])},l(n){e=Q(n,o[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&w(e)}}}function te(o){let e,n,i,r,f;const t=[x,$],s=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=s[e]=t[e](o);let c=o[5]&&V(o);return{c(){n.c(),i=F(),c&&c.c(),r=p()},l(a){n.l(a),i=G(a),c&&c.l(a),r=p()},m(a,u){s[e].m(a,u),b(a,i,u),c&&c.m(a,u),b(a,r,u),f=!0},p(a,[u]){let k=e;e=l(a),e===k?s[e].p(a,u):(P(),h(s[k],1,1,()=>{s[k]=null}),L(),n=s[e],n?n.p(a,u):(n=s[e]=t[e](a),n.c()),d(n,1),n.m(i.parentNode,i)),a[5]?c?c.p(a,u):(c=V(a),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(a){f||(d(n),f=!0)},o(a){h(n),f=!1},d(a){a&&(w(i),w(r)),s[e].d(a),c&&c.d(a)}}}function ne(o,e,n){let{stores:i}=e,{page:r}=e,{constructors:f}=e,{components:t=[]}=e,{form:s}=e,{data_0:l=null}=e,{data_1:c=null}=e;B(i.page.notify);let a=!1,u=!1,k=null;U(()=>{const _=i.page.subscribe(()=>{a&&(n(6,u=!0),j().then(()=>{n(7,k=document.title||"untitled page")}))});return n(5,a=!0),_});function N(_){D[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function S(_){D[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function C(_){D[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return o.$$set=_=>{"stores"in _&&n(8,i=_.stores),"page"in _&&n(9,r=_.page),"constructors"in _&&n(1,f=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,s=_.form),"data_0"in _&&n(3,l=_.data_0),"data_1"in _&&n(4,c=_.data_1)},o.$$.update=()=>{o.$$.dirty&768&&i.page.set(r)},[t,f,s,l,c,a,u,k,i,r,N,S,C]}class oe extends W{constructor(e){super(),z(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>g(()=>import("../nodes/0.d171529c.js"),["../nodes/0.d171529c.js","../chunks/scheduler.eedd3157.js","../chunks/index.6f225d97.js","../assets/0.ef80de4d.css"],import.meta.url),()=>g(()=>import("../nodes/1.2a405cc9.js"),["../nodes/1.2a405cc9.js","../chunks/scheduler.eedd3157.js","../chunks/index.6f225d97.js","../chunks/singletons.fd857daa.js","../chunks/paths.daf85533.js"],import.meta.url),()=>g(()=>import("../nodes/2.5532960f.js"),["../nodes/2.5532960f.js","../chunks/scheduler.eedd3157.js","../chunks/index.6f225d97.js","../chunks/index.es.13ba34d4.js","../chunks/nav.7eeec2e1.js","../assets/nav.ae516320.css","../assets/read-only-md.5d564bd7.css"],import.meta.url),()=>g(()=>import("../nodes/3.358b6279.js"),["../nodes/3.358b6279.js","../chunks/api-client.b59ef244.js","../chunks/scheduler.eedd3157.js","../chunks/index.6f225d97.js","../chunks/paths.daf85533.js","../chunks/index.30985300.js","../assets/index.074d176d.css","../chunks/nav.7eeec2e1.js","../assets/nav.ae516320.css","../assets/3.b90ba872.css","../assets/read-only-md.5d564bd7.css"],import.meta.url),()=>g(()=>import("../nodes/4.fdef43d3.js"),["../nodes/4.fdef43d3.js","../chunks/scheduler.eedd3157.js","../chunks/index.6f225d97.js"],import.meta.url),()=>g(()=>import("../nodes/5.bbff47ed.js"),["../nodes/5.bbff47ed.js","../chunks/scheduler.eedd3157.js","../chunks/index.6f225d97.js","../chunks/paths.daf85533.js","../chunks/index.es.13ba34d4.js","../chunks/nav.7eeec2e1.js","../assets/nav.ae516320.css","../chunks/api-client.b59ef244.js","../assets/5.4c47bfe6.css"],import.meta.url),()=>g(()=>import("../nodes/6.134cc905.js"),["../nodes/6.134cc905.js","../chunks/api-client.b59ef244.js","../chunks/scheduler.eedd3157.js","../chunks/index.6f225d97.js","../chunks/paths.daf85533.js","../chunks/index.30985300.js","../assets/index.074d176d.css","../chunks/nav.7eeec2e1.js","../assets/nav.ae516320.css","../assets/3.b90ba872.css","../assets/read-only-md.5d564bd7.css"],import.meta.url)],le=[],fe={"/":[2],"/category":[3],"/new-recipe":[4],"/recipe":[5],"/search":[6]},ce={handleError:({error:o})=>{console.error(o)}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
