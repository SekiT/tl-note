(function(){"use strict";let xt=[],p;function Ot(e){let t=p,o=()=>{};p=o,W(o);let r=e(()=>{z(o),p=void 0});return p=t,r}function Pt(e){let t=p;p=void 0;let o=e();return p=t,o}function N(e){function t(o){if(arguments.length===0)return p&&!t.__o.has(p)&&(t.__o.add(p),p.u.push(t)),e;e=o;let r=p;return p=void 0,t.o=new Set(t.__o),t.o.forEach(n=>n.i=!1),t.o.forEach(n=>{n.i||n()}),p=r,e}return t.$o=1,t.__o=new Set,t.t=xt,t}function m(e,t){function o(){let n=p;return p&&p.__c.push(o),z(o),o.i=!0,p=o,t=e(t),p=n,t}function r(){return o.i?p&&o.u.forEach(n=>n()):t=o(),t}return e.s=o,W(o),o(),r.$o=1,r}function St(e){return p&&p.l.push(e),e}function Ct(e){return m(e),()=>z(e.s)}function z(e){e.__c.forEach(z),e.u.forEach(t=>{t.__o.delete(e),t.o&&t.o.delete(e)}),e.l.forEach(t=>t()),W(e)}function W(e){e.u=[],e.__c=[],e.l=[]}let K=(e,t,o,r)=>{let n={};for(let i=1;i<t.length;i++){let a=t[i],d=typeof a=="number"?o[a]:a,s=t[++i];if(s===1)r[0]=d;else if(s===3)r[1]=Object.assign(r[1]||{},d);else if(s===5)(r[1]=r[1]||{})[t[++i]]=d;else if(s===6){let g=t[++i],I=(r[1]=r[1]||{})[g],_=n[g];_||typeof d!="function"&&typeof I!="function"||(_=I&&[I]||[],r[1][g]=function(){let L="";for(var D=0;D<_.length;D++)L+=typeof _[D]=="function"?_[D].call(this):_[D];return L}),_?_.push(d):r[1][g]+=d+""}else if(s){let g=()=>e.apply(null,K(e,d,o,["",null]));r.push(typeof r[0]=="function"?g:g())}else r.push(d)}return r},kt=function(e){let t,o,r=1,n="",i="",a=[0],d=s=>{r===1&&(s||(n=n.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(s||n,0):r===3&&(s||n)?(a.push(s||n,1),r=2):r===2&&n==="..."&&s?a.push(s,3):r===2&&n&&!s?a.push(!0,5,n):r>=5&&((n||!s&&r===5)&&(a.push(n,r,o),r=6),s&&(a.push(s,r,o),r=6)),n=""};for(let s=0;s<e.length;s++){s&&(r===1&&d(),d(s));for(let g=0;g<e[s].length;g++)t=e[s][g],r===1?t==="<"?(d(),a=[a],r=3):n+=t:r===4?n==="--"&&t===">"?(r=1,n=""):n=t+n[0]:i?t===i?i="":n+=t:t==='"'||t==="'"?i=t:t===">"?(d(),r=1):r&&(t==="="?(r=5,o=n,n=""):t==="/"&&(r<5||e[s][g+1]===">")?(d(),r===3&&(a=a[0]),r=a,(a=a[0]).push(r,2),r=0):t===" "||t==="	"||t===`
`||t==="\r"?(d(),r=2):n+=t),r===3&&n==="!--"&&(r=4,a=a[0])}return d(),a},X=new Map,Bt=function(e){let t=X.get(this);return t||(t=new Map,X.set(this,t)),t=K(this,t.get(e)||(t.set(e,t=kt(e)),t),arguments,[]),t.length>1?t:t[0]},Et=function(){let e=Bt.apply(this,arguments);if(e)return Array.isArray(e)?this(e):typeof e=="object"?e:this([e])};function It(){let e=Et.bind(this);return(this.wrap||e).apply(e,arguments)}let l={},jt=[];function q(e){return this.t&&this.t[e.type](e)}l.h=(...e)=>{let t,o=r=>{if(r!=null)if(typeof r=="string")t?l.add(t,r):t=l.s?document.createElementNS("http://www.w3.org/2000/svg",r):document.createElement(r);else if(Array.isArray(r))t||(t=document.createDocumentFragment()),r.forEach(o);else if(r instanceof Node)t?l.add(t,r):t=r;else if(typeof r=="object")l.property(t,r,null,l.s);else if(typeof r=="function")if(t){let n=l.add(t,"");l.insert(t,r,n)}else t=r.apply(null,e.splice(1));else l.add(t,""+r)};return e.forEach(o),t},l.insert=(e,t,o,r,n)=>(e=o&&o.parentNode||e,n=n||r instanceof Node&&r,t===r||(r&&typeof r!="string"||!(typeof t=="string"||typeof t=="number"&&(t+=""))?typeof t=="function"?l.subscribe(()=>{r=l.insert(e,t.call({el:e,endMark:o}),o,r,n)}):(o?r&&(n||(n=r.o&&r.o.nextSibling||o.previousSibling),l.rm(e,n,o)):e.textContent="",r=null,t&&t!==!0&&(r=l.add(e,t,o))):(r!=null&&e.firstChild?o?(o.previousSibling||e.lastChild).data=t:e.firstChild.data=t:o?l.add(e,t,o):e.textContent=t,r=t)),r),l.property=(e,t,o,r,n)=>{if(t!=null)if(!o||o==="attrs"&&(r=!0))for(o in t)l.property(e,t[o],o,r,n);else o[0]!=="o"||o[1]!=="n"||t.$o?typeof t=="function"?l.subscribe(()=>{l.property(e,t.call({el:e,name:o}),o,r,n)}):n?e.style.setProperty(o,t):r||o.slice(0,5)==="data-"||o.slice(0,5)==="aria-"?e.setAttribute(o,t):o==="style"?typeof t=="string"?e.style.cssText=t:l.property(e,t,null,r,!0):(o==="class"&&(o+="Name"),e[o]=t):((i,a,d)=>{a=a.slice(2).toLowerCase(),d?i.addEventListener(a,q):i.removeEventListener(a,q),(i.t||(i.t={}))[a]=d})(e,o,t)},l.add=(e,t,o)=>{let r=(n=>{const{childNodes:i}=n;if(i&&n.nodeType===11)return i.length<2?i[0]:{o:l.add(n,"",i[0])}})(t=(n=>typeof n=="string"?document.createTextNode(n):n instanceof Node?n:l.h(jt,n))(t))||t;return e.insertBefore(t,o&&o.parentNode&&o),r},l.rm=(e,t,o)=>{for(;t&&t!==o;){let r=t.nextSibling;e===t.parentNode&&e.removeChild(t),t=r}},l.subscribe=Ct,l.cleanup=St,l.root=Ot,l.sample=Pt,l.hs=(...e)=>{let t=l.s;l.s=!0;let o=G(...e);return l.s=t,o};let G=(...e)=>l.h.apply(l.h,e),h=(...e)=>It.apply(G,e);var At=Object.defineProperty,Dt=Object.defineProperties,Ft=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Nt=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable,Q=(e,t,o)=>t in e?At(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Tt=(e,t)=>{for(var o in t||(t={}))Nt.call(t,o)&&Q(e,o,t[o]);if(H)for(var o of H(t))zt.call(t,o)&&Q(e,o,t[o]);return e},Mt=(e,t)=>Dt(e,Ft(t));const B=e=>({width:e,height:e,"font-size":`calc(${e} * 0.8)`,padding:0,border:"2px solid #99c","border-radius":"50%","background-color":"#ccf",color:"#339"}),Y=e=>Mt(Tt({},B(e)),{position:"absolute",right:"7px","font-size":"12px","background-color":"#ccc","border-color":"#999"}),Z={position:"fixed",top:0,left:0,width:"100vw",height:"100vh","background-color":"rgba(0, 0, 0, 0.6)","font-family":"sans-serif","font-size":"24px"},tt={position:"absolute",top:"50vh",left:"50vw",transform:"translate(-50%, -50%)","border-radius":"12px",padding:"12px","background-color":"white"},b=N([{id:"c1",name:"A\u6C0F",color:[0,0,128]},{id:"c2",name:"B\u541B",color:[255,128,128]},{id:"c3",name:"C\u69D8",color:[128,255,128]}]),T=([e,t,o])=>e+t+o<384?"white":"black",w=N([{id:"a1",columnIds:["c1","c2"],day:1,time:"12:00",text:"A\u6C0F\u3068B\u541B\u304C\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9\u3067\u4F1A\u3063\u305F"},{id:"a2",columnIds:["c1"],day:1,time:"12:00",text:"A\u6C0F\u306F\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9\u306B\u3044\u305F\u3002B\u541B\u4EE5\u5916\u3068\u306F\u4F1A\u3063\u3066\u3044\u306A\u3044"},{id:"a3",columnIds:["c3"],day:1,time:"13:05",text:"C\u69D8\u304C\u81EA\u5BA4\u304B\u3089\u51FA\u3066\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9\u306B\u6765\u305F"}]),et=m(()=>`a${Math.max(0,...w().map(({id:e})=>parseInt(e.slice(1),10)))+1}`);var Vt=Object.defineProperty,Lt=Object.defineProperties,Rt=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,nt=(e,t,o)=>t in e?Vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k=(e,t)=>{for(var o in t||(t={}))ot.call(t,o)&&nt(e,o,t[o]);if(M)for(var o of M(t))rt.call(t,o)&&nt(e,o,t[o]);return e},E=(e,t)=>Lt(e,Rt(t)),Ut=(e,t)=>{var o={};for(var r in e)ot.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&M)for(var r of M(e))t.indexOf(r)<0&&rt.call(e,r)&&(o[r]=e[r]);return o};const v=N({mode:"none",id:"",color:[0,0,0],name:""}),Wt=m(()=>E(k({},Z),{display:v().mode==="none"?"none":"block"})),Jt={"font-size":"18px"},Kt={add:"\u767B\u5834\u4EBA\u7269\u8FFD\u52A0",update:"\u767B\u5834\u4EBA\u7269\u7DE8\u96C6"},Xt=m(()=>Kt[v().mode]),qt=Y("24px"),Gt=()=>{v(E(k({},v()),{mode:"none"}))},Ht={margin:"5px 0 7px 0"},lt=m(()=>`#${v().color.map(e=>e.toString(16).padStart(2,"0")).join("")}`),Qt=m(()=>v().name),Yt={width:"24px",height:"24px",padding:0,"border-radius":"12px","background-color":"transparent"},Zt=e=>{const[t,o,r,n,i,a]=e.target.value.slice(1).split(""),d=[t+o,r+n,i+a].map(s=>parseInt(s,16));v(E(k({},v()),{color:d}))},te=m(()=>({"margin-left":"5px",padding:0,width:"20vw","font-size":"24px","line-height":"24px","text-align":"center","background-color":lt(),color:T(v().color)})),ee=e=>{v(E(k({},v()),{name:e.target.value}))},oe={"margin-top":"7px"},re=E(k({},B("30px")),{"margin-right":"7px","font-size":"15px","background-color":"#fcc","border-color":"#c99"}),ne=()=>{const e=v();b(b().filter(({id:t})=>t!==e.id)),w(w().flatMap(t=>{const{columnIds:o}=t;return o.length===1&&o[0]===e.id?[]:[E(k({},t),{columnIds:o.filter(r=>r!==e.id)})]})),v(E(k({},e),{mode:"none"}))},le=m(()=>v().mode==="update"&&h`<button style=${re} onclick=${ne}>🗑️</button>`),ie=E(k({},B("30px")),{"font-size":"15px","background-color":"#cfc","border-color":"#9c9"}),ae=()=>{const e=v(),{mode:t}=e,o=Ut(e,["mode"]),r=b();b(t==="add"?[...r,o]:r.map(n=>n.id===o.id?o:n)),v(k({mode:"none"},o))};var se=()=>h`  <div style=${Wt}>    <div style=${tt}>      <div style="display:flex">        <div style=${Jt}>${Xt}</div>        <button style=${qt} onclick=${Gt}>X</button>      </div>      <hr style=${Ht} />      <div>        <input type="color" value=${lt} style=${Yt} onchange=${Zt} />        <input type="text" value=${Qt} style=${te} onchange=${ee} />      </div>      <div style=${oe}>        ${le}        <button style=${ie} onclick=${ae}>✔️</button>      </div>    </div>  </div>`,ce=Object.defineProperty,ue=Object.defineProperties,de=Object.getOwnPropertyDescriptors,it=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,at=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ye=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&at(e,o,t[o]);if(it)for(var o of it(t))fe.call(t,o)&&at(e,o,t[o]);return e},me=(e,t)=>ue(e,de(t));const ve=({color:e,name:t},o)=>{const r=75/o;return{width:`${r}vw`,"line-height":"36px","font-size":`min(24px, ${r/t.length}vw)`,"text-align":"center","border-radius":"12px 12px 0 0","background-color":`rgb(${e.join(",")})`,color:T(e)}},ge=e=>{const t=e.target.getAttribute("data-id"),o=b().find(({id:r})=>r===t);!o||v({mode:"update",id:t,color:o.color,name:o.name})},$e=(e,t)=>h`  <div style=${ve(e,t)} onclick=${ge} data-id=${e.id}>    ${e.name}  </div>`,he=m(()=>{const e=b(),{length:t}=e;return e.map(o=>$e(o,t))}),_e={display:"flex","margin-left":"15vw",width:"85vw",height:"36px","align-items":"center"},be={display:"flex",width:"75vw"},we={display:"flex",width:"10vw","text-align":"left"},xe=me(ye({},B("min(max(4vw, 24px), 32px)")),{"align-self":"center","margin-left":"0.5vw"}),Oe=()=>[0,64,128,192,255][Math.floor(Math.random()*5)],Pe=()=>`c${Math.max(...b().map(({id:e})=>parseInt(e.slice(1),10)),0)+1}`,Se=()=>{v({mode:"add",id:Pe(),color:[...Array(3)].map(Oe),name:""})};var Ce=()=>h`  <div style=${_e}>    <div style=${be}>      ${he}    </div>    <div style=${we}>      <button style=${xe} onclick=${Se}>+</button>    </div>  </div>`;function st(e,t,o){const{root:r,subscribe:n,sample:i,cleanup:a}=l;o==null&&(o=!t.$t);let d=l.h([]),s=l.add(d,""),g=new Map,I=new Map,_=new Set;function L($,j){if($==null)return;let C=I.get($);return j===1?(_.delete($),C||(C=o?r(f=>(g.set($,f),t($.$v||$))):t($.$v||$),C.nodeType===11&&(C=(f=>{const{childNodes:y}=f,{length:S}=y;if(S<2)return y[0];let x=Array.from(y);return{nodeType:111,t:x[0],o:x[S-1],l(){if(y.length!==S){let F=0;for(;F<S;)f.appendChild(x[F++])}return f}}})(C)||C),I.set($,C))):j===-1&&_.add($),((f,y)=>f.nodeType===111?1/y<0?y?l.rm(f.t.parentNode,f.t.nextSibling,f.o.nextSibling)||f.t:f.o:y?f.l():f.t:f)(C,j)}function D($){let j=g.get($);j&&(j(),g.delete($)),I.delete($)}return a(n($=>{let j=e();return i(()=>{_.clear();let C=Array.from(function(f,y,S,x,F){let bt=new Map,wt=new Map,u,A;for(u=0;u<y.length;u++)bt.set(y[u],u);for(u=0;u<S.length;u++)wt.set(S[u],u);for(u=A=0;u!==y.length||A!==S.length;){var J=y[u],R=S[A];if(J===null)u++;else if(S.length<=A)f.removeChild(x(y[u],-1)),u++;else if(y.length<=u)f.insertBefore(x(R,1),x(y[u],0)||F),A++;else if(J===R)u++,A++;else{var Xo=wt.get(J),U=bt.get(R);Xo===void 0?(f.removeChild(x(y[u],-1)),u++):U===void 0?(f.insertBefore(x(R,1),x(y[u],0)||F),A++):(f.insertBefore(x(y[U],1),x(y[u],0)||F),y[U]=null,U>u+1&&u++,A++)}}return S}(s.parentNode,$||[],j,L,s));return _.forEach(D),C})})),a(function(){g.forEach($=>$()),g.clear(),I.clear(),_.clear()}),d}var ke=Object.defineProperty,Be=Object.defineProperties,Ee=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable,dt=(e,t,o)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,O=(e,t)=>{for(var o in t||(t={}))ct.call(t,o)&&dt(e,o,t[o]);if(V)for(var o of V(t))ut.call(t,o)&&dt(e,o,t[o]);return e},P=(e,t)=>Be(e,Ee(t)),Ie=(e,t)=>{var o={};for(var r in e)ct.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&V)for(var r of V(e))t.indexOf(r)<0&&ut.call(e,r)&&(o[r]=e[r]);return o};const c=N({mode:"none",id:"",columnIds:[],day:1,time:"",text:""}),je=m(()=>P(O({},Z),{display:c().mode==="none"?"none":"block"})),Ae=P(O({},tt),{width:"70%",height:"70%"}),De={"margin-left":"7px","font-size":"24px"},Fe={add:"\u9805\u76EE\u8FFD\u52A0",update:"\u9805\u76EE\u7DE8\u96C6",none:""},Ne=m(()=>Fe[c().mode]),ze=Y("36px"),Te=()=>c(P(O({},c()),{mode:"none"})),Me=(e,t,o)=>({"background-color":`rgb(${e.join(",")})`,color:T(e),opacity:t?1:.3,width:`${o}%`,"border-radius":"8px 8px 0 0","font-size":"16px","text-align":"center"}),Ve=(e,t)=>()=>{const o=c(),r=t?o.columnIds.filter(n=>n!==e):[...o.columnIds,e];c(P(O({},o),{columnIds:r}))},Le=(e,t)=>({id:o,name:r,color:n})=>{const i=e.includes(o);return h`    <div      style=${Me(n,i,100/t)}      onclick=${Ve(o,i)}    >      ${r}    </div>  `},Re=m(()=>{const{columnIds:e}=c(),t=b(),o=Le(e,t.length);return h`    ${t.map(o)}  `}),Ue={"margin-top":"5px","font-size":"14px"},We={"margin-left":"5px",width:"30%"},Je=m(()=>c().day),Ke=e=>{c(P(O({},c()),{day:parseInt(e.target.value,10)||0}))},Xe={"margin-top":"5px",width:"70%"},qe=m(()=>c().time),Ge=e=>{c(P(O({},c()),{time:e.target.value}))},He={width:"calc(100% - 12px)",height:"calc(70vh - 109px)",padding:"5px","font-size":"18px","background-color":"#eee",color:"black","font-family":"sans-serif",resize:"none"},Qe=m(()=>c().text),Ye=e=>{c(P(O({},c()),{text:e.target.value}))},Ze={"margin-top":"auto"},to=P(O({},B("30px")),{"margin-right":"7px","font-size":"15px","background-color":"#fcc","border-color":"#c99"}),eo=()=>{const e=c(),{id:t}=e;w(w().filter(o=>o.id!==t)),c(P(O({},e),{mode:"none"}))},oo=m(()=>c().mode==="update"?h`<button style=${to} onclick=${eo}>🗑️</button>`:""),pt=m(()=>{const{columnIds:e,time:t}=c();return e.length===0||t===""}),ro=m(()=>P(O({},B("30px")),{"font-size":"15px","background-color":"#cfc","border-color":"#9c9",opacity:pt()?.3:1})),no=()=>{const e=c(),{mode:t}=e,o=Ie(e,["mode"]);w(t==="add"?[...w(),o]:w().map(r=>r.id===o.id?o:r)),c(P(O({},o),{mode:"none"}))};var lo=()=>h`  <div style=${je}>    <div style=${Ae}>      <div style=${De}>        ${Ne}        <button style=${ze} onclick=${Te}>X</button>      </div>      <hr />      <div style="display:flex">        ${Re}      </div>      <div style="display:flex;flex:25% 75%">        <div style="display:flex;flex-direction:column">          <div style=${Ue}>            Day            <input type="number" style=${We} value=${Je} onchange=${Ke} />          </div>          <input type="time" style=${Xe} value=${qe} onchange=${Ge} />          <div style=${Ze}>            ${oo}            <button              style=${ro}              onclick=${no}              disabled=${pt}            >✔️</button>          </div>        </div>        <div style="width:100%">          <textarea style=${He} value=${Qe} onchange=${Ye}></textarea>        </div>      </div>    </div>  </div>`,io=Object.defineProperty,ft=Object.getOwnPropertySymbols,ao=Object.prototype.hasOwnProperty,so=Object.prototype.propertyIsEnumerable,yt=(e,t,o)=>t in e?io(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,co=(e,t)=>{for(var o in t||(t={}))ao.call(t,o)&&yt(e,o,t[o]);if(ft)for(var o of ft(t))so.call(t,o)&&yt(e,o,t[o]);return e};const uo=({day:e,time:t})=>[e,t].join(","),po=e=>{const[t,o]=e.split(",");return[parseInt(t,10),o]},fo=m(()=>[...w().reduce((e,t)=>{const o=uo(t);return e.set(o,[...e.get(o)||[],t]),e},new Map).entries()].map(([e,t])=>[...po(e),t]).sort(([e,t],[o,r])=>e<o?-1:e>o?1:t<r?-1:t>r?1:0)),yo={"border-top":"1px dashed black","border-bottom":"1px dashed black"},mo={padding:0,width:"10vw","text-align":"center",color:"black"},vo=m(()=>({display:"table-cell",padding:0,width:`${75/b().length}vw`,"text-align":"center","vertical-align":"top"})),go=e=>({display:"block",margin:"1px",padding:"2px",border:"1px solid black","border-radius":"3px","background-color":`rgba(${e.join(",")},0.5)`,color:T(e),"z-index":1}),$o=(e,t,o)=>()=>{c({mode:"add",id:et(),day:e,time:t,columnIds:[o],text:""})},ho=e=>t=>{c(co({mode:"update"},e)),t.stopPropagation()},_o=([e,t,o])=>h`  <tr style=${yo}>    <td style=${mo}>${t}</td>    ${st(b,({id:r,color:n})=>h`
      <td style=${vo} onclick=${$o(e,t,r)}>
        ${o.map(i=>i.columnIds.includes(r)?h`          <div style=${go(n)} onclick=${ho(i)} data-id=${i.id}>${i.text}</div>        `:"")}
      </td>
    `)}  </tr>`,bo={width:"85vw",margin:"0 5vw","border-collapse":"collapse","overflow-y":"scroll","background-color":"#eee"};var wo=()=>h`  <table style=${bo} cellSpacing={0}>    <tbody>      ${st(fo,_o)}    </tbody>  </table>`,xo=Object.defineProperty,Oo=Object.defineProperties,Po=Object.getOwnPropertyDescriptors,mt=Object.getOwnPropertySymbols,So=Object.prototype.hasOwnProperty,Co=Object.prototype.propertyIsEnumerable,vt=(e,t,o)=>t in e?xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ko=(e,t)=>{for(var o in t||(t={}))So.call(t,o)&&vt(e,o,t[o]);if(mt)for(var o of mt(t))Co.call(t,o)&&vt(e,o,t[o]);return e},Bo=(e,t)=>Oo(e,Po(t));const Eo=Bo(ko({},B("4vw")),{position:"fixed",right:"2vw",bottom:"4vh"}),Io=()=>{const e=w(),t=et(),o=Math.max(1,...e.map(r=>r.day));c({mode:"add",id:t,columnIds:[],day:o,time:"12:00",text:""})};var jo=()=>h`  <button style=${Eo} onclick=${Io}>+</button>`,Ao=Object.defineProperty,Do=Object.defineProperties,Fo=Object.getOwnPropertyDescriptors,gt=Object.getOwnPropertySymbols,No=Object.prototype.hasOwnProperty,zo=Object.prototype.propertyIsEnumerable,$t=(e,t,o)=>t in e?Ao(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,To=(e,t)=>{for(var o in t||(t={}))No.call(t,o)&&$t(e,o,t[o]);if(gt)for(var o of gt(t))zo.call(t,o)&&$t(e,o,t[o]);return e},Mo=(e,t)=>Do(e,Fo(t));const Vo={position:"fixed",left:"2vw",bottom:"4vh"},ht=Mo(To({},B("40px")),{display:"block","font-size":"20px","margin-top":"1vh"}),Lo=h`<input type="file" accept="application/json" onchange=${e=>{e.target.files[0].text().then(o=>{const{columns:r,activities:n}=JSON.parse(o);b(r),w(n)}).catch(()=>{})}} />`,Ro=()=>Lo.click(),_t=h`<a download="tl-note.json" />`,Uo=()=>{const e={columns:b(),activities:w()};_t.href=`data:application/json,${encodeURIComponent(JSON.stringify(e,null,2))}`,_t.click()};var Wo=()=>h`  <div style=${Vo}>    <button style=${ht} onclick=${Ro}>📂</button>    <button style=${ht} onclick=${Uo}>💾</button>  </div>`;const Jo={margin:"2vh 0","font-size":"14px","font-family":"sans-serif"},Ko=()=>h`  <div style=${Jo}>    <${Ce} />    <${wo} />  </div>  <${jo} />  <${Wo} />  <${se} />  <${lo} />`;document.body.append(Ko())})();
