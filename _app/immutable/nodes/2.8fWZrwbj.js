import{s as N,f as j,n as B,r as ke,o as ae,a as we,b as Z,h as K}from"../chunks/scheduler.n-AXzmJX.js";import{S as H,i as E,g as A,s as R,h as _,j as S,c as T,y as V,f as g,k,a as v,x as y,z as Q,A as ue,d as C,p as z,t as P,b as G,r as W,e as q,u as F,v as J,w as O,B as be,m as te,n as se,o as ye,C as D}from"../chunks/index.5YtgoGTi.js";const Ae=""+new URL("../assets/blue-cropped.G9S8lGFd.png",import.meta.url).href;function _e(o){let e;return{c(){e=A("i"),this.h()},l(s){e=_(s,"I",{class:!0}),S(e).forEach(g),this.h()},h(){k(e,"class","fas fa-volume-up")},m(s,i){v(s,e,i)},d(s){s&&g(e)}}}function ve(o){let e;return{c(){e=A("i"),this.h()},l(s){e=_(s,"I",{class:!0}),S(e).forEach(g),this.h()},h(){k(e,"class","fas fa-volume-mute")},m(s,i){v(s,e,i)},d(s){s&&g(e)}}}function Ce(o){let e,s,i,r,l,n="Please bring me for a walk...",a,t,u,c,m="Start the game",f,d;function M(p,w){return p[0]?ve:_e}let U=M(o),I=U(o);return{c(){e=A("div"),s=A("img"),r=R(),l=A("p"),l.textContent=n,a=R(),t=A("button"),I.c(),u=R(),c=A("button"),c.textContent=m,this.h()},l(p){e=_(p,"DIV",{class:!0});var w=S(e);s=_(w,"IMG",{src:!0,alt:!0,class:!0}),r=T(w),l=_(w,"P",{class:!0,"data-svelte-h":!0}),V(l)!=="svelte-1ajsywp"&&(l.textContent=n),a=T(w),t=_(w,"BUTTON",{});var Y=S(t);I.l(Y),Y.forEach(g),u=T(w),c=_(w,"BUTTON",{class:!0,"data-svelte-h":!0}),V(c)!=="svelte-1yl5a1"&&(c.textContent=m),w.forEach(g),this.h()},h(){j(s.src,i=Ae)||k(s,"src",i),k(s,"alt","dog staring"),k(s,"class","svelte-yvoa7"),k(l,"class","svelte-yvoa7"),k(c,"class","start-button svelte-yvoa7"),k(e,"class","svelte-yvoa7")},m(p,w){v(p,e,w),y(e,s),y(e,r),y(e,l),y(e,a),y(e,t),I.m(t,null),y(e,u),y(e,c),f||(d=[Q(window,"keydown",ue(o[3])),Q(t,"click",o[1]),Q(c,"click",o[2])],f=!0)},p(p,[w]){U!==(U=M(p))&&(I.d(1),I=U(p),I&&(I.c(),I.m(t,null)))},i:B,o:B,d(p){p&&g(e),I.d(),f=!1,ke(d)}}}function Ie(o,e,s){let{isStarted:i}=e,{isMuted:r}=e;const l=()=>{s(0,r=!r)},n=()=>{s(4,i=!0)},a=t=>{t.key==="Enter"&&n()};return o.$$set=t=>{"isStarted"in t&&s(4,i=t.isStarted),"isMuted"in t&&s(0,r=t.isMuted)},[r,l,n,a,i]}class Me extends H{constructor(e){super(),E(this,e,Ie,Ce,N,{isStarted:4,isMuted:0})}}const Pe=""+new URL("../assets/blueFace.KR1nZIvt.png",import.meta.url).href,Ue="data:image/png;base64,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";function Xe(o){let e,s,i;return{c(){e=A("audio"),s=A("track"),this.h()},l(r){e=_(r,"AUDIO",{src:!0,preload:!0,class:!0});var l=S(e);s=_(l,"TRACK",{kind:!0}),l.forEach(g),this.h()},h(){k(s,"kind","captions"),j(e.src,i=o[0])||k(e,"src",i),k(e,"preload","auto"),e.loop=o[1],e.controls=!0,k(e,"class","svelte-xtx1x0")},m(r,l){v(r,e,l),y(e,s),o[4](e)},p(r,[l]){l&1&&!j(e.src,i=r[0])&&k(e,"src",i),l&2&&(e.loop=r[1])},i:B,o:B,d(r){r&&g(e),o[4](null)}}}function Le(o,e,s){let{src:i}=e,{isPause:r=!1}=e,{isLoop:l=!1}=e,n;ae(()=>{n.play()}),we(()=>{r&&n&&n.pause()});function a(t){Z[t?"unshift":"push"](()=>{n=t,s(2,n)})}return o.$$set=t=>{"src"in t&&s(0,i=t.src),"isPause"in t&&s(3,r=t.isPause),"isLoop"in t&&s(1,l=t.isLoop)},[i,l,n,r,a]}class ce extends H{constructor(e){super(),E(this,e,Le,Xe,N,{src:0,isPause:3,isLoop:1})}}const Re=""+new URL("../assets/jump.CMCvFNhG.mp3",import.meta.url).href,Te=""+new URL("../assets/main-music.ZwKrUN5C.mp3",import.meta.url).href,Se=""+new URL("../assets/failure.7CcnDX5m.mp3",import.meta.url).href;function le(o){let e,s,i,r;e=new ce({props:{src:Te,isLoop:!0,isPause:o[3]}});let l=o[3]&&ne();return{c(){W(e.$$.fragment),s=R(),l&&l.c(),i=q()},l(n){F(e.$$.fragment,n),s=T(n),l&&l.l(n),i=q()},m(n,a){J(e,n,a),v(n,s,a),l&&l.m(n,a),v(n,i,a),r=!0},p(n,a){const t={};a&8&&(t.isPause=n[3]),e.$set(t),n[3]?l?a&8&&C(l,1):(l=ne(),l.c(),C(l,1),l.m(i.parentNode,i)):l&&(z(),P(l,1,1,()=>{l=null}),G())},i(n){r||(C(e.$$.fragment,n),C(l),r=!0)},o(n){P(e.$$.fragment,n),P(l),r=!1},d(n){n&&(g(s),g(i)),O(e,n),l&&l.d(n)}}}function ne(o){let e,s;return e=new ce({props:{src:Se}}),{c(){W(e.$$.fragment)},l(i){F(e.$$.fragment,i)},m(i,r){J(e,i,r),s=!0},i(i){s||(C(e.$$.fragment,i),s=!0)},o(i){P(e.$$.fragment,i),s=!1},d(i){O(e,i)}}}function Ze(o){let e,s,i,r,l,n="",a,t,u,c,m=!o[0]&&le(o);return{c(){e=A("div"),m&&m.c(),s=R(),i=A("canvas"),r=R(),l=A("audio"),l.innerHTML=n,this.h()},l(f){e=_(f,"DIV",{class:!0});var d=S(e);m&&m.l(d),s=T(d),i=_(d,"CANVAS",{class:!0}),S(i).forEach(g),r=T(d),l=_(d,"AUDIO",{src:!0,preload:!0,class:!0,"data-svelte-h":!0}),V(l)!=="svelte-elcnob"&&(l.innerHTML=n),d.forEach(g),this.h()},h(){k(i,"class","svelte-1knngfn"),j(l.src,a=Re)||k(l,"src",a),k(l,"preload","auto"),l.controls=!0,k(l,"class","svelte-1knngfn"),k(e,"class","svelte-1knngfn")},m(f,d){v(f,e,d),m&&m.m(e,null),y(e,s),y(e,i),o[7](i),y(e,r),y(e,l),o[8](l),t=!0,u||(c=Q(window,"keydown",ue(o[4])),u=!0)},p(f,[d]){f[0]?m&&(z(),P(m,1,1,()=>{m=null}),G()):m?(m.p(f,d),d&1&&C(m,1)):(m=le(f),m.c(),C(m,1),m.m(e,s))},i(f){t||(C(m),t=!0)},o(f){P(m),t=!1},d(f){f&&g(e),m&&m.d(),o[7](null),o[8](null),u=!1,c()}}}let X=600,L=750,ie=90,re=90,qe=.4,$=120,x=25;function Be(o,e,s){let{score:i}=e,{toggled:r}=e,{isMuted:l}=e,n,a,t,u=!1,c=X/2+ie/2,m=L*7/8-re,f,d={img:null,x:c,y:m,width:ie,height:re},M=0,U=0,I=-10,p=[],w;const Y=h=>{h.key==="ArrowLeft"&&M!=-4?M-=4:h.key==="ArrowRight"&&M!=4?M+=4:h.key===" "&&u&&(s(6,r=!r),s(5,i=0))};ae(()=>{t=a.getContext("2d"),s(2,a.width=X,a),s(2,a.height=L,a),f=new Image,f.src=Pe,f.onload=()=>{t.drawImage(f,d.x,d.y,d.width,d.height)},w=new Image,w.src=Ue,U=I,fe(),requestAnimationFrame(ee)});const ee=()=>{if(!u){requestAnimationFrame(ee),t.clearRect(0,0,X,L),d.x+=M,d.x>X?d.x=0:d.x+d.width<0&&(d.x=X),U+=qe,d.y+=U,d.y>L&&s(3,u=!0),t.drawImage(f,d.x,d.y,d.width,d.height);for(let h=0;h<p.length;h++){let b=p[h];U<0&&d.y<L*3/4&&(b.y-=I,s(5,i+=1)),me(d,b)&&U>0&&(U=I,l||(s(1,n.currentTime=0,n),n.play())),t.drawImage(w,b.x,b.y,b.width,b.height)}for(;p.length>0&&p[0].y>=L;)p.shift(),de();u&&(t.font="30px serif",t.fillStyle="blue",t.fillText("Game Over: Press 'Space' to Restart",X/8,L*7/8))}},fe=()=>{p=[];let h={img:w,x:X/2,y:L-90,width:$,height:x};p.push(h);for(let b=0;b<6;b++){let pe=Math.floor(Math.random()*X*3/4);h={img:w,x:pe,y:L-120*b-200,width:$,height:x},p.push(h)}},de=()=>{let h=Math.floor(Math.random()*X*3/4),b={img:w,x:h,y:-x,width:$,height:x};p.push(b)},me=(h,b)=>h.x<b.x+b.width&&h.x+h.width>b.x&&h.y<b.y+b.height&&h.y+h.height>b.y;function he(h){Z[h?"unshift":"push"](()=>{a=h,s(2,a)})}function ge(h){Z[h?"unshift":"push"](()=>{n=h,s(1,n)})}return o.$$set=h=>{"score"in h&&s(5,i=h.score),"toggled"in h&&s(6,r=h.toggled),"isMuted"in h&&s(0,l=h.isMuted)},[l,n,a,u,Y,i,r,he,ge]}class Ne extends H{constructor(e){super(),E(this,e,Be,Ze,N,{score:5,toggled:6,isMuted:0})}}function Ye(o){let e,s,i,r,l=o[1],n,a,t=oe(o);return{c(){e=A("p"),s=te("Score: "),i=te(o[0]),r=R(),t.c(),n=q(),this.h()},l(u){e=_(u,"P",{class:!0});var c=S(e);s=se(c,"Score: "),i=se(c,o[0]),c.forEach(g),r=T(u),t.l(u),n=q(),this.h()},h(){k(e,"class","svelte-1d1qt4p")},m(u,c){v(u,e,c),y(e,s),y(e,i),v(u,r,c),t.m(u,c),v(u,n,c),a=!0},p(u,c){(!a||c&1)&&ye(i,u[0]),c&2&&N(l,l=u[1])?(z(),P(t,1,1,B),G(),t=oe(u),t.c(),C(t,1),t.m(n.parentNode,n)):t.p(u,c)},i(u){a||(C(t),a=!0)},o(u){P(t),a=!1},d(u){u&&(g(e),g(r),g(n)),t.d(u)}}}function xe(o){let e,s,i,r;function l(t){o[4](t)}function n(t){o[5](t)}let a={};return o[3]!==void 0&&(a.isMuted=o[3]),o[2]!==void 0&&(a.isStarted=o[2]),e=new Me({props:a}),Z.push(()=>D(e,"isMuted",l)),Z.push(()=>D(e,"isStarted",n)),{c(){W(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,u){J(e,t,u),r=!0},p(t,u){const c={};!s&&u&8&&(s=!0,c.isMuted=t[3],K(()=>s=!1)),!i&&u&4&&(i=!0,c.isStarted=t[2],K(()=>i=!1)),e.$set(c)},i(t){r||(C(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){O(e,t)}}}function oe(o){let e,s,i,r;function l(t){o[6](t)}function n(t){o[7](t)}let a={isMuted:o[3]};return o[0]!==void 0&&(a.score=o[0]),o[1]!==void 0&&(a.toggled=o[1]),e=new Ne({props:a}),Z.push(()=>D(e,"score",l)),Z.push(()=>D(e,"toggled",n)),{c(){W(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,u){J(e,t,u),r=!0},p(t,u){const c={};u&8&&(c.isMuted=t[3]),!s&&u&1&&(s=!0,c.score=t[0],K(()=>s=!1)),!i&&u&2&&(i=!0,c.toggled=t[1],K(()=>i=!1)),e.$set(c)},i(t){r||(C(e.$$.fragment,t),r=!0)},o(t){P(e.$$.fragment,t),r=!1},d(t){O(e,t)}}}function Qe(o){let e,s,i="Blue Jump",r,l,n,a,t;const u=[xe,Ye],c=[];function m(f,d){return f[2]?1:0}return l=m(o),n=c[l]=u[l](o),{c(){e=R(),s=A("h1"),s.textContent=i,r=R(),n.c(),a=q(),this.h()},l(f){be("svelte-f0hv70",document.head).forEach(g),e=T(f),s=_(f,"H1",{class:!0,"data-svelte-h":!0}),V(s)!=="svelte-tvcfbq"&&(s.textContent=i),r=T(f),n.l(f),a=q(),this.h()},h(){document.title="Blue Jump",k(s,"class","svelte-1d1qt4p")},m(f,d){v(f,e,d),v(f,s,d),v(f,r,d),c[l].m(f,d),v(f,a,d),t=!0},p(f,[d]){let M=l;l=m(f),l===M?c[l].p(f,d):(z(),P(c[M],1,1,()=>{c[M]=null}),G(),n=c[l],n?n.p(f,d):(n=c[l]=u[l](f),n.c()),C(n,1),n.m(a.parentNode,a))},i(f){t||(C(n),t=!0)},o(f){P(n),t=!1},d(f){f&&(g(e),g(s),g(r),g(a)),c[l].d(f)}}}function je(o,e,s){let i=0,r=!1,l=!1,n=!1;function a(m){n=m,s(3,n)}function t(m){l=m,s(2,l)}function u(m){i=m,s(0,i)}function c(m){r=m,s(1,r)}return[i,r,l,n,a,t,u,c]}class De extends H{constructor(e){super(),E(this,e,je,Qe,N,{})}}export{De as component};
