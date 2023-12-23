import{s as D,f as V,n as g}from"../chunks/scheduler.eedd3157.js";import{S as I,i as A,g as u,h as m,j as f,f as l,k as y,a as E,x as p,r as $,s as j,u as w,c as x,v as k,d as S,t as b,w as M}from"../chunks/index.6f225d97.js";import{j as N,c as P,r as z,a as C,b as O,l as W,K as B,M as K,W as R,x as T,d as q,I as F,p as U,e as G,P as H}from"../chunks/index.es.13ba34d4.js";import{N as J}from"../chunks/nav.7eeec2e1.js";const L=!0,ne=Object.freeze(Object.defineProperty({__proto__:null,prerender:L},Symbol.toStringTag,{value:"Module"}));function Q(c){let e,t,s,r,o,a,n;return{c(){e=u("main"),t=u("div"),s=u("div"),r=u("div"),o=u("div"),this.h()},l(i){e=m(i,"MAIN",{});var d=f(e);t=m(d,"DIV",{class:!0});var _=f(t);s=m(_,"DIV",{class:!0});var h=f(s);r=m(h,"DIV",{class:!0});var v=f(r);o=m(v,"DIV",{}),f(o).forEach(l),v.forEach(l),h.forEach(l),_.forEach(l),d.forEach(l),this.h()},h(){y(r,"class","prose mx-auto flex place-content-center"),y(s,"class","absolute top-1 h-10 w-full place-content-center"),y(t,"class","relative h-full w-full pt-10")},m(i,d){E(i,e,d),p(e,t),p(t,s),p(s,r),p(r,o),a||(n=V(c[0].call(null,o)),a=!0)},p:g,i:g,o:g,d(i){i&&l(e),a=!1,n()}}}function X(c,e,t){let{markdown:s}=e;const r=()=>!1;function o(a){N.make().config(n=>{n.set(P,a),n.set(z,s),n.update(C,i=>({...i,editable:r})),n.get(O).markdownUpdated((i,d,_)=>{t(1,s=d)})}).config(W).use(B).use(K).use(R).use(T).use(q).use(F).use(U).use(G).use(H).create().then(n=>{})}return c.$$set=a=>{"markdown"in a&&t(1,s=a.markdown)},[o,s]}class Y extends I{constructor(e){super(),A(this,e,X,Q,D,{markdown:1})}}function Z(c){let e,t,s,r,o;return t=new J({}),r=new Y({props:{markdown:c[0]}}),{c(){e=u("main"),$(t.$$.fragment),s=j(),$(r.$$.fragment)},l(a){e=m(a,"MAIN",{});var n=f(e);w(t.$$.fragment,n),s=x(n),w(r.$$.fragment,n),n.forEach(l)},m(a,n){E(a,e,n),k(t,e,null),p(e,s),k(r,e,null),o=!0},p:g,i(a){o||(S(t.$$.fragment,a),S(r.$$.fragment,a),o=!0)},o(a){b(t.$$.fragment,a),b(r.$$.fragment,a),o=!1},d(a){a&&l(e),M(t),M(r)}}}function ee(c){return[`
# The Whitehurst Cookbook
---
### [All Recipes](./category?category=All)
---
### [Search 🔍](./search)
---
### Categories
#### [Desserts](./category?category=Desserts)
#### [Soups](./category?category=Soups)
#### [Salads](./category?category=Salads)
#### [Vegetables](./category?category=Vegetables)
#### [Mains](./category?category=Mains)
#### [Appetizers](./category?category=Appetizers)
#### [Sauces](./category?category=Sauces)
#### [Breads](./category?category=Breads)
---
### [+ New recipe](./new-recipe)
	`]}class oe extends I{constructor(e){super(),A(this,e,ee,Z,D,{})}}export{oe as component,ne as universal};
