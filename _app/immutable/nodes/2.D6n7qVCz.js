import{n as I,j as $t,r as it,s as N,c as A,i as wt,z as Tt,A as xt,h as kt,B as ut}from"../chunks/scheduler.DJPZvw7T.js";import{y as Ct,z as It,A as Et,B as St,k as x,l as C,S as O,i as L,C as K,D as Q,a as E,d as v,o as _,g as T,h as $,e as b,s as S,E as Mt,c as y,F as G,f as M,G as F,q as et,n as nt,u as j,v as H,w as U,x as V,H as ft,I as zt,t as W,b as X,j as bt,J as Bt,K as Y,L as dt,m as ht,M as Dt,N as Ft}from"../chunks/index.D-OqTEYu.js";import{w as ot,d as Nt,b as P}from"../chunks/paths.CdXVjsXy.js";function Ot(s,t,n,e){if(!t)return I;const r=s.getBoundingClientRect();if(t.left===r.left&&t.right===r.right&&t.top===r.top&&t.bottom===r.bottom)return I;const{delay:o=0,duration:a=300,easing:i=$t,start:l=Ct()+o,end:d=l+a,tick:m=I,css:p}=n(s,{from:t,to:r},e);let g=!0,u=!1,c;function f(){p&&(c=Et(s,0,1,a,o,i,p)),o||(u=!0)}function h(){p&&St(s,c),g=!1}return It(k=>{if(!u&&k>=l&&(u=!0),u&&k>=d&&(m(1,0),h()),!g)return!1;if(u){const z=k-l,R=0+1*i(z/a);m(R,1-R)}return!0}),f(),m(0,1),h}function Lt(s){const t=getComputedStyle(s);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:e}=t,r=s.getBoundingClientRect();s.style.position="absolute",s.style.width=n,s.style.height=e,jt(s,r)}}function jt(s,t){const n=s.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const e=getComputedStyle(s),r=e.transform==="none"?"":e.transform;s.style.transform=`${r} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}function Z(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function Ht(s,t){C(s,1,1,()=>{t.delete(s.key)})}function Ut(s,t){s.f(),Ht(s,t)}function Vt(s,t,n,e,r,o,a,i,l,d,m,p){let g=s.length,u=o.length,c=g;const f={};for(;c--;)f[s[c].key]=c;const h=[],k=new Map,z=new Map,R=[];for(c=u;c--;){const w=p(r,o,c),B=n(w);let D=a.get(B);D?R.push(()=>D.p(w,t)):(D=d(B,w),D.c()),k.set(B,h[c]=D),B in f&&z.set(B,Math.abs(c-f[B]))}const at=new Set,ct=new Set;function rt(w){x(w,1),w.m(i,m),a.set(w.key,w),m=w.first,u--}for(;g&&u;){const w=h[u-1],B=s[g-1],D=w.key,J=B.key;w===B?(m=w.first,g--,u--):k.has(J)?!a.has(D)||at.has(D)?rt(w):ct.has(J)?g--:z.get(D)>z.get(J)?(ct.add(D),rt(w)):(at.add(J),g--):(l(B,a),g--)}for(;g--;){const w=s[g];k.has(w.key)||l(w,a)}for(;u;)rt(h[u-1]);return it(R),h}let yt="dark";document.documentElement.dataset.theme&&(yt=document.documentElement.dataset.theme);const st=ot(yt);st.subscribe(s=>{localStorage.setItem("theme",s),document.documentElement.dataset.theme=s});const qt=()=>{st.update(s=>s==="dark"?"light":"dark")};function Pt(s){const t=s-1;return t*t*t+1}function tt(s,{delay:t=0,duration:n=400,easing:e=$t}={}){const r=+getComputedStyle(s).opacity;return{delay:t,duration:n,easing:e,css:o=>`opacity: ${o*r}`}}function Rt(s){let t,n;return{c(){t=K("svg"),n=K("path"),this.h()},l(e){t=Q(e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var r=E(t);n=Q(r,"path",{fill:!0,"fill-rule":!0,d:!0}),E(n).forEach(v),r.forEach(v),this.h()},h(){_(n,"fill","#FFF"),_(n,"fill-rule","evenodd"),_(n,"d","M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"),_(t,"xmlns","http://www.w3.org/2000/svg"),_(t,"width",s[0]),_(t,"height",s[0]),_(t,"viewBox","0 0 26 26")},m(e,r){T(e,t,r),$(t,n)},p(e,[r]){r&1&&_(t,"width",e[0]),r&1&&_(t,"height",e[0])},i:I,o:I,d(e){e&&v(t)}}}function At(s,t,n){let{size:e=26}=t;return s.$$set=r=>{"size"in r&&n(0,e=r.size)},[e]}class Gt extends O{constructor(t){super(),L(this,t,At,Rt,N,{size:0})}}function Jt(s){let t,n;return{c(){t=K("svg"),n=K("path"),this.h()},l(e){t=Q(e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var r=E(t);n=Q(r,"path",{fill:!0,"fill-rule":!0,d:!0}),E(n).forEach(v),r.forEach(v),this.h()},h(){_(n,"fill","#FFF"),_(n,"fill-rule","evenodd"),_(n,"d","M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"),_(t,"xmlns","http://www.w3.org/2000/svg"),_(t,"width","36"),_(t,"height","36"),_(t,"viewBox","0 0 26 26")},m(e,r){T(e,t,r),$(t,n)},p:I,i:I,o:I,d(e){e&&v(t)}}}class Kt extends O{constructor(t){super(),L(this,t,null,Jt,N,{})}}function Qt(s){let t,n;return t=new Gt({props:{size:32}}),{c(){j(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,r){U(t,e,r),n=!0},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){C(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function Wt(s){let t,n;return t=new Kt({}),{c(){j(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,r){U(t,e,r),n=!0},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){C(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function Xt(s){let t,n=`const savedTheme = localStorage.getItem('theme');
		document.documentElement.dataset.theme = savedTheme ?? 'dark';`,e,r,o,a,i,l,d;const m=[Wt,Qt],p=[];function g(u,c){return u[0]==="dark"?0:1}return o=g(s),a=p[o]=m[o](s),{c(){t=b("script"),t.textContent=n,e=S(),r=b("button"),a.c()},l(u){const c=Mt("svelte-1l7vgcc",document.head);t=y(c,"SCRIPT",{"data-svelte-h":!0}),G(t)!=="svelte-110469w"&&(t.textContent=n),c.forEach(v),e=M(u),r=y(u,"BUTTON",{});var f=E(r);a.l(f),f.forEach(v)},m(u,c){$(document.head,t),T(u,e,c),T(u,r,c),p[o].m(r,null),i=!0,l||(d=F(r,"click",qt),l=!0)},p(u,[c]){let f=o;o=g(u),o!==f&&(et(),C(p[f],1,1,()=>{p[f]=null}),nt(),a=p[o],a||(a=p[o]=m[o](u),a.c()),x(a,1),a.m(r,null))},i(u){i||(x(a),i=!0)},o(u){C(a),i=!1},d(u){u&&(v(e),v(r)),v(t),p[o].d(),l=!1,d()}}}function Yt(s,t,n){let e;return A(s,st,r=>n(0,e=r)),[e]}class Zt extends O{constructor(t){super(),L(this,t,Yt,Xt,N,{})}}function te(s){let t,n,e="TODO",r,o,a;return o=new Zt({}),{c(){t=b("div"),n=b("h1"),n.textContent=e,r=S(),j(o.$$.fragment),this.h()},l(i){t=y(i,"DIV",{class:!0});var l=E(t);n=y(l,"H1",{class:!0,"data-svelte-h":!0}),G(n)!=="svelte-me6uac"&&(n.textContent=e),r=M(l),H(o.$$.fragment,l),l.forEach(v),this.h()},h(){_(n,"class","todo-title"),_(t,"class","todo-container svelte-1cglkul")},m(i,l){T(i,t,l),$(t,n),$(t,r),U(o,t,null),a=!0},p:I,i(i){a||(x(o.$$.fragment,i),a=!0)},o(i){C(o.$$.fragment,i),a=!1},d(i){i&&v(t),V(o)}}}class ee extends O{constructor(t){super(),L(this,t,null,te,N,{})}}let ne=7;const se=s=>({...s,id:ne++,status:!1}),q=ot([]),lt=ot("all"),re=Nt([q,lt],([s,t])=>s.filter(n=>t==="active"?!n.status:t==="completed"?n.status:!0)),le=s=>{q.update(t=>[...t,se(s)])},ie=s=>{q.update(t=>t.filter(n=>n.id!==s.id))},oe=s=>{q.update(t=>{const n=t.find(e=>e.id===s.id);return n.status=!n.status,[...t]})},ae=()=>{q.update(s=>s.filter(t=>!t.status))},ce=(s,t)=>{q.update(n=>{const e=n.findIndex(a=>a.id===s),r=n.findIndex(a=>a.id===t);if(e===-1||r===-1||e===r)return n;const[o]=n.splice(e,1);return n.splice(r,0,o),[...n]})};function ue(s){let t,n,e,r,o,a;return{c(){t=b("form"),n=b("input"),e=S(),r=b("input"),this.h()},l(i){t=y(i,"FORM",{class:!0});var l=E(t);n=y(l,"INPUT",{type:!0}),e=M(l),r=y(l,"INPUT",{type:!0,placeholder:!0}),l.forEach(v),this.h()},h(){_(n,"type","checkbox"),n.disabled=!0,_(r,"type","text"),_(r,"placeholder","Create a new todo..."),_(t,"class","svelte-10l24wp")},m(i,l){T(i,t,l),$(t,n),$(t,e),$(t,r),ft(r,s[0]),o||(a=[F(r,"input",s[2]),F(t,"submit",zt(s[1]))],o=!0)},p(i,[l]){l&1&&r.value!==i[0]&&ft(r,i[0])},i:I,o:I,d(i){i&&v(t),o=!1,it(a)}}}function fe(s,t,n){let e="";function r(){e.trim()!==""&&(le({text:e}),n(0,e=""))}function o(){e=this.value,n(0,e)}return[e,r,o]}class de extends O{constructor(t){super(),L(this,t,fe,ue,N,{})}}function he(s,{from:t,to:n},e={}){const r=getComputedStyle(s),o=r.transform==="none"?"":r.transform,[a,i]=r.transformOrigin.split(" ").map(parseFloat),l=t.left+t.width*a/n.width-(n.left+a),d=t.top+t.height*i/n.height-(n.top+i),{delay:m=0,duration:p=u=>Math.sqrt(u)*120,easing:g=Pt}=e;return{delay:m,duration:wt(p)?p(Math.sqrt(l*l+d*d)):p,easing:g,css:(u,c)=>{const f=c*l,h=c*d,k=u+c*t.width/n.width,z=u+c*t.height/n.height;return`transform: ${o} translate(${f}px, ${h}px) scale(${k}, ${z});`}}}function mt(s,t,n){const e=s.slice();return e[5]=t[n],e}function pt(s){let t,n=s[5]+"",e,r,o;function a(){return s[4](s[5])}return{c(){t=b("button"),e=W(n),this.h()},l(i){t=y(i,"BUTTON",{class:!0});var l=E(t);e=X(l,n),l.forEach(v),this.h()},h(){_(t,"class",Tt(`filter_${s[5]}`)+" svelte-137coqi"),Y(t,"active",s[1]===s[5])},m(i,l){T(i,t,l),$(t,e),r||(o=F(t,"click",a),r=!0)},p(i,l){s=i,l&6&&Y(t,"active",s[1]===s[5])},d(i){i&&v(t),r=!1,o()}}}function me(s){let t,n,e,r,o,a,i,l,d="Clear Completed",m,p,g=Z(s[2]),u=[];for(let c=0;c<g.length;c+=1)u[c]=pt(mt(s,g,c));return{c(){t=b("div"),n=b("span"),e=W(s[0]),r=W(" Item left"),o=S(),a=b("div");for(let c=0;c<u.length;c+=1)u[c].c();i=S(),l=b("button"),l.textContent=d,this.h()},l(c){t=y(c,"DIV",{class:!0});var f=E(t);n=y(f,"SPAN",{});var h=E(n);e=X(h,s[0]),r=X(h," Item left"),h.forEach(v),o=M(f),a=y(f,"DIV",{class:!0});var k=E(a);for(let z=0;z<u.length;z+=1)u[z].l(k);k.forEach(v),i=M(f),l=y(f,"BUTTON",{"data-svelte-h":!0}),G(l)!=="svelte-1xw9zgi"&&(l.textContent=d),f.forEach(v),this.h()},h(){_(a,"class","filters"),_(t,"class","TodoFooter svelte-137coqi")},m(c,f){T(c,t,f),$(t,n),$(n,e),$(n,r),$(t,o),$(t,a);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(a,null);$(t,i),$(t,l),m||(p=F(l,"click",ae),m=!0)},p(c,[f]){if(f&1&&bt(e,c[0]),f&6){g=Z(c[2]);let h;for(h=0;h<g.length;h+=1){const k=mt(c,g,h);u[h]?u[h].p(k,f):(u[h]=pt(k),u[h].c(),u[h].m(a,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=g.length}},i:I,o:I,d(c){c&&v(t),Bt(u,c),m=!1,p()}}}function pe(s,t,n){let e,r,o;A(s,q,l=>n(3,r=l)),A(s,lt,l=>n(1,o=l));const a=["all","active","completed"],i=l=>xt(lt,o=l,o);return s.$$.update=()=>{s.$$.dirty&8&&n(0,e=r.filter(l=>!l.status).length)},[e,o,a,r,i]}class ge extends O{constructor(t){super(),L(this,t,pe,me,N,{})}}function _e(s){let t,n,e,r,o=s[0].text+"",a,i,l,d=`<img src="${P}/images/icon-cross.svg" alt="cross"/>`,m,p,g,u;return{c(){t=b("div"),n=b("input"),e=S(),r=b("span"),a=W(o),i=S(),l=b("button"),l.innerHTML=d,this.h()},l(c){t=y(c,"DIV",{class:!0,draggable:!0,role:!0,"aria-grabbed":!0});var f=E(t);n=y(f,"INPUT",{type:!0,style:!0}),e=M(f),r=y(f,"SPAN",{});var h=E(r);a=X(h,o),h.forEach(v),i=M(f),l=y(f,"BUTTON",{"data-svelte-h":!0}),G(l)!=="svelte-yjjrui"&&(l.innerHTML=d),f.forEach(v),this.h()},h(){_(n,"type","checkbox"),_(n,"style",`--image: url('${P}/images/icon-check.svg')`),Y(r,"checked",s[0].status),_(t,"class","list todo-item svelte-1ylhma0"),_(t,"draggable","true"),_(t,"role","listitem"),_(t,"aria-grabbed","false")},m(c,f){T(c,t,f),$(t,n),n.checked=s[1],$(t,e),$(t,r),$(r,a),$(t,i),$(t,l),p=!0,g||(u=[F(n,"change",s[4]),F(l,"click",s[5]),F(t,"dragstart",s[2]),F(t,"dragover",ve),F(t,"drop",s[3])],g=!0)},p(c,[f]){f&2&&(n.checked=c[1]),(!p||f&1)&&o!==(o=c[0].text+"")&&bt(a,o),(!p||f&1)&&Y(r,"checked",c[0].status)},i(c){p||(c&&kt(()=>{p&&(m||(m=dt(t,tt,{},!0)),m.run(1))}),p=!0)},o(c){c&&(m||(m=dt(t,tt,{},!1)),m.run(0)),p=!1},d(c){c&&v(t),c&&m&&m.end(),g=!1,it(u)}}}function ve(s){s.preventDefault()}function $e(s,t,n){let{todo:e}=t,r=e.status;function o(d){var m;(m=d.dataTransfer)==null||m.setData("text/plain",String(e.id))}function a(d){var p;d.preventDefault();const m=(p=d.dataTransfer)==null?void 0:p.getData("text/plain");m&&ce(Number(m),e.id)}function i(){r=this.checked,n(1,r)}const l=()=>ie(e);return s.$$set=d=>{"todo"in d&&n(0,e=d.todo)},s.$$.update=()=>{s.$$.dirty&3&&r!==e.status&&oe(e)},[e,r,o,a,i,l]}class ke extends O{constructor(t){super(),L(this,t,$e,_e,N,{todo:0})}}function gt(s,t,n){const e=s.slice();return e[3]=t[n],e}function be(s){let t,n;return t=new ke({props:{todo:s[1](s[3])}}),{c(){j(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,r){U(t,e,r),n=!0},p(e,r){const o={};r&1&&(o.todo=e[1](e[3])),t.$set(o)},i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){C(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function ye(s){let t,n;return t=new ge({}),{c(){j(t.$$.fragment)},l(e){H(t.$$.fragment,e)},m(e,r){U(t,e,r),n=!0},p:I,i(e){n||(x(t.$$.fragment,e),n=!0)},o(e){C(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function _t(s,t){let n,e,r,o,a,i=I,l;const d=[ye,be],m=[];function p(g,u){return g[3]==="footer"?0:1}return e=p(t),r=m[e]=d[e](t),{key:s,first:null,c(){n=b("div"),r.c(),o=S(),this.h()},l(g){n=y(g,"DIV",{class:!0});var u=E(n);r.l(u),o=M(u),u.forEach(v),this.h()},h(){_(n,"class","svelte-171c6rl"),this.first=n},m(g,u){T(g,n,u),m[e].m(n,null),$(n,o),l=!0},p(g,u){t=g;let c=e;e=p(t),e===c?m[e].p(t,u):(et(),C(m[c],1,1,()=>{m[c]=null}),nt(),r=m[e],r?r.p(t,u):(r=m[e]=d[e](t),r.c()),x(r,1),r.m(n,o))},r(){a=n.getBoundingClientRect()},f(){Lt(n),i()},a(){i(),i=Ot(n,a,he,{})},i(g){l||(x(r),l=!0)},o(g){C(r),l=!1},d(g){g&&v(n),m[e].d()}}}function we(s){let t=[],n=new Map,e,r,o=Z(s[0]);const a=i=>i[3];for(let i=0;i<o.length;i+=1){let l=gt(s,o,i),d=a(l);n.set(d,t[i]=_t(d,l))}return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=ht()},l(i){for(let l=0;l<t.length;l+=1)t[l].l(i);e=ht()},m(i,l){for(let d=0;d<t.length;d+=1)t[d]&&t[d].m(i,l);T(i,e,l),r=!0},p(i,[l]){if(l&3){o=Z(i[0]),et();for(let d=0;d<t.length;d+=1)t[d].r();t=Vt(t,l,a,1,i,o,n,e.parentNode,Ut,_t,e,gt);for(let d=0;d<t.length;d+=1)t[d].a();nt()}},i(i){if(!r){for(let l=0;l<o.length;l+=1)x(t[l]);r=!0}},o(i){for(let l=0;l<t.length;l+=1)C(t[l]);r=!1},d(i){i&&v(e);for(let l=0;l<t.length;l+=1)t[l].d(i)}}}function Te(s,t,n){let e,r;A(s,re,a=>n(2,r=a));const o=a=>a;return s.$$.update=()=>{s.$$.dirty&4&&n(0,e=[...r,"footer"])},[e,o,r]}class xe extends O{constructor(t){super(),L(this,t,Te,we,N,{})}}function vt(s){let t,n,e,r,o;return{c(){t=b("img"),this.h()},l(a){t=y(a,"IMG",{src:!0,alt:!0}),this.h()},h(){ut(t.src,n=s[0]==="dark"?`${P}/images/bg-desktop-dark.jpg`:`${P}/images/bg-desktop-light.jpg`)||_(t,"src",n),_(t,"alt","background")},m(a,i){T(a,t,i),o=!0},p(a,i){(!o||i&1&&!ut(t.src,n=a[0]==="dark"?`${P}/images/bg-desktop-dark.jpg`:`${P}/images/bg-desktop-light.jpg`))&&_(t,"src",n)},i(a){o||(a&&kt(()=>{o&&(r&&r.end(1),e=Dt(t,tt,{duration:900}),e.start())}),o=!0)},o(a){e&&e.invalidate(),a&&(r=Ft(t,tt,{duration:900,delay:450})),o=!1},d(a){a&&v(t),a&&r&&r.end()}}}function Ce(s){let t,n=s[0],e,r,o,a,i,l,d,m,p,g='<p class="svelte-5v2ksh">Drag and drop to reorder list</p>',u,c=vt(s);return o=new ee({}),i=new de({}),d=new xe({}),{c(){t=b("figure"),c.c(),e=S(),r=b("section"),j(o.$$.fragment),a=S(),j(i.$$.fragment),l=S(),j(d.$$.fragment),m=S(),p=b("div"),p.innerHTML=g,this.h()},l(f){t=y(f,"FIGURE",{class:!0});var h=E(t);c.l(h),h.forEach(v),e=M(f),r=y(f,"SECTION",{class:!0});var k=E(r);H(o.$$.fragment,k),a=M(k),H(i.$$.fragment,k),l=M(k),H(d.$$.fragment,k),k.forEach(v),m=M(f),p=y(f,"DIV",{class:!0,"data-svelte-h":!0}),G(p)!=="svelte-1yv2xty"&&(p.innerHTML=g),this.h()},h(){_(t,"class","svelte-5v2ksh"),_(r,"class","svelte-5v2ksh"),_(p,"class","message")},m(f,h){T(f,t,h),c.m(t,null),T(f,e,h),T(f,r,h),U(o,r,null),$(r,a),U(i,r,null),$(r,l),U(d,r,null),T(f,m,h),T(f,p,h),u=!0},p(f,[h]){h&1&&N(n,n=f[0])?(et(),C(c,1,1,I),nt(),c=vt(f),c.c(),x(c,1),c.m(t,null)):c.p(f,h)},i(f){u||(x(c),x(o.$$.fragment,f),x(i.$$.fragment,f),x(d.$$.fragment,f),u=!0)},o(f){C(c),C(o.$$.fragment,f),C(i.$$.fragment,f),C(d.$$.fragment,f),u=!1},d(f){f&&(v(t),v(e),v(r),v(m),v(p)),c.d(f),V(o),V(i),V(d)}}}function Ie(s,t,n){let e;return A(s,st,r=>n(0,e=r)),[e]}class ze extends O{constructor(t){super(),L(this,t,Ie,Ce,N,{})}}export{ze as component};
