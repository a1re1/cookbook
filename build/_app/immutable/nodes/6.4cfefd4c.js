import{g as O}from"../chunks/api-client.4147eb89.js";import{s as J}from"../chunks/scheduler.eedd3157.js";import{S as P,i as R,r as b,s as S,g as v,u as C,c as y,h as w,j as E,f,k as h,v as I,a as _,x as T,A as M,z,d as N,t as W,w as j}from"../chunks/index.6f225d97.js";import"../chunks/paths.3bfdc902.js";import{M as A,a as D,R as V}from"../chunks/index.30985300.js";import{N as k}from"../chunks/nav.7eeec2e1.js";const q=!0;async function B({fetch:s}){return{idx:await O(s)}}const Z=Object.freeze(Object.defineProperty({__proto__:null,load:B,prerender:q},Symbol.toStringTag,{value:"Module"}));function F(s){let i,n;return i=new V({props:{title:s[10].title,id:s[10].id,image:s[10].image,description:s[10].description}}),{c(){b(i.$$.fragment)},l(t){C(i.$$.fragment,t)},m(t,a){I(i,t,a),n=!0},p(t,a){const l={};a&1024&&(l.title=t[10].title),a&1024&&(l.id=t[10].id),a&1024&&(l.image=t[10].image),a&1024&&(l.description=t[10].description),i.$set(l)},i(t){n||(N(i.$$.fragment,t),n=!0)},o(t){W(i.$$.fragment,t),n=!1},d(t){j(i,t)}}}function U(s){let i,n,t,a,l,m,u,c,o,d,g,$;return i=new k({}),o=new A({props:{items:s[1],minColWidth:s[2],maxColWidth:s[3],gap:s[4],$$slots:{default:[F,({item:e})=>({10:e}),({item:e})=>e?1024:0]},$$scope:{ctx:s}}}),{c(){b(i.$$.fragment),n=S(),t=v("div"),a=v("input"),l=S(),m=v("br"),u=S(),c=v("div"),b(o.$$.fragment),this.h()},l(e){C(i.$$.fragment,e),n=y(e),t=w(e,"DIV",{class:!0});var r=E(t);a=w(r,"INPUT",{type:!0,placeholder:!0,class:!0}),r.forEach(f),l=y(e),m=w(e,"BR",{}),u=y(e),c=w(e,"DIV",{class:!0});var p=E(c);C(o.$$.fragment,p),p.forEach(f),this.h()},h(){h(a,"type","text"),h(a,"placeholder","Search"),h(a,"class","border-3 rounded-md p-2 w-1/2"),h(t,"class","flex justify-center"),h(c,"class","itemWrapper svelte-7icvdw")},m(e,r){I(i,e,r),_(e,n,r),_(e,t,r),T(t,a),M(a,s[0]),_(e,l,r),_(e,m,r),_(e,u,r),_(e,c,r),I(o,c,null),d=!0,g||($=z(a,"input",s[6]),g=!0)},p(e,[r]){r&1&&a.value!==e[0]&&M(a,e[0]);const p={};r&2&&(p.items=e[1]),r&3072&&(p.$$scope={dirty:r,ctx:e}),o.$set(p)},i(e){d||(N(i.$$.fragment,e),N(o.$$.fragment,e),d=!0)},o(e){W(i.$$.fragment,e),W(o.$$.fragment,e),d=!1},d(e){e&&(f(n),f(t),f(l),f(m),f(u),f(c)),j(i,e),j(o),g=!1,$()}}}function G(s,i,n){let{data:t}=i,a=[],l=[];t.idx.forEach(e=>{if(!(e==null||e.length==0))try{let r=JSON.parse(e);if(!r.content)return;l.push(r)}catch(r){console.log("Error parsing JSON: ",e),console.log(e,r)}});let m=new D({fields:["title","content","tags"],storeFields:["title","image","description","tags"]});m.addAll(l);let u="";const c=e=>{if(e=="")return;n(1,a=[]);let r=m.search(e,{prefix:!0,boost:{title:2}}).slice(0,20);for(let p=0;p<r.length;p++)a.push(r[p])};let[o,d,g]=[200,800,20];function $(){u=this.value,n(0,u)}return s.$$set=e=>{"data"in e&&n(5,t=e.data)},s.$$.update=()=>{s.$$.dirty&1&&c(u)},[u,a,o,d,g,t,$]}class x extends P{constructor(i){super(),R(this,i,G,U,J,{data:5})}}export{x as component,Z as universal};
