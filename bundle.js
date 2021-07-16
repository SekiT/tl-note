(function(){"use strict";let xt=[],p;function Ot(e){let t=p,o=()=>{};p=o,U(o);let n=e(()=>{T(o),p=void 0});return p=t,n}function Pt(e){let t=p;p=void 0;let o=e();return p=t,o}function N(e){function t(o){if(arguments.length===0)return p&&!t.__o.has(p)&&(t.__o.add(p),p.u.push(t)),e;e=o;let n=p;return p=void 0,t.o=new Set(t.__o),t.o.forEach(r=>r.i=!1),t.o.forEach(r=>{r.i||r()}),p=n,e}return t.$o=1,t.__o=new Set,t.t=xt,t}function m(e,t){function o(){let r=p;return p&&p.__c.push(o),T(o),o.i=!0,p=o,t=e(t),p=r,t}function n(){return o.i?p&&o.u.forEach(r=>r()):t=o(),t}return e.s=o,U(o),o(),n.$o=1,n}function St(e){return p&&p.l.push(e),e}function Ct(e){return m(e),()=>T(e.s)}function T(e){e.__c.forEach(T),e.u.forEach(t=>{t.__o.delete(e),t.o&&t.o.delete(e)}),e.l.forEach(t=>t()),U(e)}function U(e){e.u=[],e.__c=[],e.l=[]}let X=(e,t,o,n)=>{let r={};for(let l=1;l<t.length;l++){let a=t[l],u=typeof a=="number"?o[a]:a,c=t[++l];if(c===1)n[0]=u;else if(c===3)n[1]=Object.assign(n[1]||{},u);else if(c===5)(n[1]=n[1]||{})[t[++l]]=u;else if(c===6){let g=t[++l],j=(n[1]=n[1]||{})[g],w=r[g];w||typeof u!="function"&&typeof j!="function"||(w=j&&[j]||[],n[1][g]=function(){let L="";for(var D=0;D<w.length;D++)L+=typeof w[D]=="function"?w[D].call(this):w[D];return L}),w?w.push(u):n[1][g]+=u+""}else if(c){let g=()=>e.apply(null,X(e,u,o,["",null]));n.push(typeof n[0]=="function"?g:g())}else n.push(u)}return n},Et=function(e){let t,o,n=1,r="",l="",a=[0],u=c=>{n===1&&(c||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(c||r,0):n===3&&(c||r)?(a.push(c||r,1),n=2):n===2&&r==="..."&&c?a.push(c,3):n===2&&r&&!c?a.push(!0,5,r):n>=5&&((r||!c&&n===5)&&(a.push(r,n,o),n=6),c&&(a.push(c,n,o),n=6)),r=""};for(let c=0;c<e.length;c++){c&&(n===1&&u(),u(c));for(let g=0;g<e[c].length;g++)t=e[c][g],n===1?t==="<"?(u(),a=[a],n=3):r+=t:n===4?r==="--"&&t===">"?(n=1,r=""):r=t+r[0]:l?t===l?l="":r+=t:t==='"'||t==="'"?l=t:t===">"?(u(),n=1):n&&(t==="="?(n=5,o=r,r=""):t==="/"&&(n<5||e[c][g+1]===">")?(u(),n===3&&(a=a[0]),n=a,(a=a[0]).push(n,2),n=0):t===" "||t==="	"||t===`
`||t==="\r"?(u(),n=2):r+=t),n===3&&r==="!--"&&(n=4,a=a[0])}return u(),a},J=new Map,kt=function(e){let t=J.get(this);return t||(t=new Map,J.set(this,t)),t=X(this,t.get(e)||(t.set(e,t=Et(e)),t),arguments,[]),t.length>1?t:t[0]},Bt=function(){let e=kt.apply(this,arguments);if(e)return Array.isArray(e)?this(e):typeof e=="object"?e:this([e])};function jt(){let e=Bt.bind(this);return(this.wrap||e).apply(e,arguments)}let i={},It=[];function q(e){return this.t&&this.t[e.type](e)}i.h=(...e)=>{let t,o=n=>{if(n!=null)if(typeof n=="string")t?i.add(t,n):t=i.s?document.createElementNS("http://www.w3.org/2000/svg",n):document.createElement(n);else if(Array.isArray(n))t||(t=document.createDocumentFragment()),n.forEach(o);else if(n instanceof Node)t?i.add(t,n):t=n;else if(typeof n=="object")i.property(t,n,null,i.s);else if(typeof n=="function")if(t){let r=i.add(t,"");i.insert(t,n,r)}else t=n.apply(null,e.splice(1));else i.add(t,""+n)};return e.forEach(o),t},i.insert=(e,t,o,n,r)=>(e=o&&o.parentNode||e,r=r||n instanceof Node&&n,t===n||(n&&typeof n!="string"||!(typeof t=="string"||typeof t=="number"&&(t+=""))?typeof t=="function"?i.subscribe(()=>{n=i.insert(e,t.call({el:e,endMark:o}),o,n,r)}):(o?n&&(r||(r=n.o&&n.o.nextSibling||o.previousSibling),i.rm(e,r,o)):e.textContent="",n=null,t&&t!==!0&&(n=i.add(e,t,o))):(n!=null&&e.firstChild?o?(o.previousSibling||e.lastChild).data=t:e.firstChild.data=t:o?i.add(e,t,o):e.textContent=t,n=t)),n),i.property=(e,t,o,n,r)=>{if(t!=null)if(!o||o==="attrs"&&(n=!0))for(o in t)i.property(e,t[o],o,n,r);else o[0]!=="o"||o[1]!=="n"||t.$o?typeof t=="function"?i.subscribe(()=>{i.property(e,t.call({el:e,name:o}),o,n,r)}):r?e.style.setProperty(o,t):n||o.slice(0,5)==="data-"||o.slice(0,5)==="aria-"?e.setAttribute(o,t):o==="style"?typeof t=="string"?e.style.cssText=t:i.property(e,t,null,n,!0):(o==="class"&&(o+="Name"),e[o]=t):((l,a,u)=>{a=a.slice(2).toLowerCase(),u?l.addEventListener(a,q):l.removeEventListener(a,q),(l.t||(l.t={}))[a]=u})(e,o,t)},i.add=(e,t,o)=>{let n=(r=>{const{childNodes:l}=r;if(l&&r.nodeType===11)return l.length<2?l[0]:{o:i.add(r,"",l[0])}})(t=(r=>typeof r=="string"?document.createTextNode(r):r instanceof Node?r:i.h(It,r))(t))||t;return e.insertBefore(t,o&&o.parentNode&&o),n},i.rm=(e,t,o)=>{for(;t&&t!==o;){let n=t.nextSibling;e===t.parentNode&&e.removeChild(t),t=n}},i.subscribe=Ct,i.cleanup=St,i.root=Ot,i.sample=Pt,i.hs=(...e)=>{let t=i.s;i.s=!0;let o=G(...e);return i.s=t,o};let G=(...e)=>i.h.apply(i.h,e),h=(...e)=>jt.apply(G,e);var At=Object.defineProperty,Dt=Object.defineProperties,Ft=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Nt=Object.prototype.hasOwnProperty,Tt=Object.prototype.propertyIsEnumerable,Q=(e,t,o)=>t in e?At(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,zt=(e,t)=>{for(var o in t||(t={}))Nt.call(t,o)&&Q(e,o,t[o]);if(H)for(var o of H(t))Tt.call(t,o)&&Q(e,o,t[o]);return e},Mt=(e,t)=>Dt(e,Ft(t));const E=e=>({width:e,height:e,"font-size":`calc(${e} * 0.8)`,padding:0,border:"2px solid #99c","border-radius":"50%","background-color":"#ccf",color:"#339"}),Y=e=>Mt(zt({},E(e)),{position:"absolute",right:"7px","font-size":"12px","background-color":"#ccc","border-color":"#999"}),Z={position:"fixed",top:0,left:0,width:"100vw",height:"100vh","background-color":"rgba(0, 0, 0, 0.6)","font-family":"sans-serif","font-size":"24px"},tt={position:"absolute",top:"50vh",left:"50vw",transform:"translate(-50%, -50%)","border-radius":"12px",padding:"12px","background-color":"white"},x=N([{id:"c1",name:"A\u6C0F",color:[0,0,128]},{id:"c2",name:"B\u541B",color:[255,128,128]},{id:"c3",name:"C\u69D8",color:[128,255,128]}]),z=([e,t,o])=>e+t+o<384?"white":"black",O=N([{id:"a1",columnIds:["c1","c2"],day:1,time:"12:00",text:"A\u6C0F\u3068B\u541B\u304C\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9\u3067\u4F1A\u3063\u305F"},{id:"a2",columnIds:["c1"],day:1,time:"12:00",timeEnd:"13:00",text:"A\u6C0F\u306F\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9\u306B\u3044\u305F\u3002B\u541B\u4EE5\u5916\u3068\u306F\u4F1A\u3063\u3066\u3044\u306A\u3044"},{id:"a3",columnIds:["c3"],day:1,time:"13:05",text:"C\u69D8\u304C\u81EA\u5BA4\u304B\u3089\u51FA\u3066\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9\u306B\u6765\u305F"}]);var Vt=Object.defineProperty,Lt=Object.defineProperties,Rt=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,nt=(e,t,o)=>t in e?Vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k=(e,t)=>{for(var o in t||(t={}))et.call(t,o)&&nt(e,o,t[o]);if(M)for(var o of M(t))ot.call(t,o)&&nt(e,o,t[o]);return e},B=(e,t)=>Lt(e,Rt(t)),Kt=(e,t)=>{var o={};for(var n in e)et.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&M)for(var n of M(e))t.indexOf(n)<0&&ot.call(e,n)&&(o[n]=e[n]);return o};const v=N({mode:"none",id:"",color:[0,0,0],name:""}),Ut=m(()=>B(k({},Z),{display:v().mode==="none"?"none":"block"})),Wt={"font-size":"18px"},Xt={add:"\u767B\u5834\u4EBA\u7269\u8FFD\u52A0",update:"\u767B\u5834\u4EBA\u7269\u7DE8\u96C6"},Jt=m(()=>Xt[v().mode]),qt=Y("24px"),Gt=()=>{v(B(k({},v()),{mode:"none"}))},Ht={margin:"5px 0 7px 0"},rt=m(()=>`#${v().color.map(e=>e.toString(16).padStart(2,"0")).join("")}`),Qt=m(()=>v().name),Yt={width:"24px",height:"24px",padding:0,"border-radius":"12px","background-color":"transparent"},Zt=e=>{const[t,o,n,r,l,a]=e.target.value.slice(1).split(""),u=[t+o,n+r,l+a].map(c=>parseInt(c,16));v(B(k({},v()),{color:u}))},te=m(()=>({"margin-left":"5px",padding:0,width:"20vw","font-size":"24px","line-height":"24px","text-align":"center","background-color":rt(),color:z(v().color)})),ee=e=>{v(B(k({},v()),{name:e.target.value}))},oe={"margin-top":"7px"},ne=B(k({},E("30px")),{"margin-right":"7px","font-size":"15px","background-color":"#fcc","border-color":"#c99"}),re=()=>{const e=v();x(x().filter(({id:t})=>t!==e.id)),O(O().flatMap(t=>{const{columnIds:o}=t;return o.length===1&&o[0]===e.id?[]:[B(k({},t),{columnIds:o.filter(n=>n!==e.id)})]})),v(B(k({},e),{mode:"none"}))},ie=m(()=>v().mode==="update"&&h`<button style=${ne} onclick=${re}>🗑️</button>`),le=B(k({},E("30px")),{"font-size":"15px","background-color":"#cfc","border-color":"#9c9"}),ae=()=>{const e=v(),{mode:t}=e,o=Kt(e,["mode"]),n=x();x(t==="add"?[...n,o]:n.map(r=>r.id===o.id?o:r)),v(k({mode:"none"},o))};var se=()=>h`  <div style=${Ut}>    <div style=${tt}>      <div style="display:flex">        <div style=${Wt}>${Jt}</div>        <button style=${qt} onclick=${Gt}>X</button>      </div>      <hr style=${Ht} />      <div>        <input type="color" value=${rt} style=${Yt} onchange=${Zt} />        <input type="text" value=${Qt} style=${te} onchange=${ee} />      </div>      <div style=${oe}>        ${ie}        <button style=${le} onclick=${ae}>✔️</button>      </div>    </div>  </div>`,ce=Object.defineProperty,de=Object.defineProperties,ue=Object.getOwnPropertyDescriptors,it=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,lt=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ye=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&lt(e,o,t[o]);if(it)for(var o of it(t))fe.call(t,o)&&lt(e,o,t[o]);return e},me=(e,t)=>de(e,ue(t));const ve=({color:e,name:t},o)=>{const n=75/o;return{width:`${n}vw`,"line-height":"36px","font-size":`min(24px, ${n/t.length}vw)`,"text-align":"center","border-radius":"12px 12px 0 0","background-color":`rgb(${e.join(",")})`,color:z(e)}},ge=e=>{const t=e.target.getAttribute("data-id"),o=x().find(({id:n})=>n===t);!o||v({mode:"update",id:t,color:o.color,name:o.name})},$e=(e,t)=>h`  <div style=${ve(e,t)} onclick=${ge} data-id=${e.id}>    ${e.name}  </div>`,he=m(()=>{const e=x(),{length:t}=e;return e.map(o=>$e(o,t))}),be={display:"flex","margin-left":"15vw",width:"85vw",height:"36px","align-items":"center"},_e={display:"flex",width:"75vw"},we={display:"flex",width:"10vw","text-align":"left"},xe=me(ye({},E("min(max(4vw, 24px), 32px)")),{"align-self":"center","margin-left":"0.5vw"}),Oe=()=>[0,64,128,192,255][Math.floor(Math.random()*5)],Pe=()=>`c${Math.max(...x().map(({id:e})=>parseInt(e.slice(1),10)),0)+1}`,Se=()=>{v({mode:"add",id:Pe(),color:[...Array(3)].map(Oe),name:""})};var Ce=()=>h`  <div style=${be}>    <div style=${_e}>      ${he}    </div>    <div style=${we}>      <button style=${xe} onclick=${Se}>+</button>    </div>  </div>`;function at(e,t,o){const{root:n,subscribe:r,sample:l,cleanup:a}=i;o==null&&(o=!t.$t);let u=i.h([]),c=i.add(u,""),g=new Map,j=new Map,w=new Set;function L($,I){if($==null)return;let C=j.get($);return I===1?(w.delete($),C||(C=o?n(f=>(g.set($,f),t($.$v||$))):t($.$v||$),C.nodeType===11&&(C=(f=>{const{childNodes:y}=f,{length:S}=y;if(S<2)return y[0];let P=Array.from(y);return{nodeType:111,t:P[0],o:P[S-1],l(){if(y.length!==S){let F=0;for(;F<S;)f.appendChild(P[F++])}return f}}})(C)||C),j.set($,C))):I===-1&&w.add($),((f,y)=>f.nodeType===111?1/y<0?y?i.rm(f.t.parentNode,f.t.nextSibling,f.o.nextSibling)||f.t:f.o:y?f.l():f.t:f)(C,I)}function D($){let I=g.get($);I&&(I(),g.delete($)),j.delete($)}return a(r($=>{let I=e();return l(()=>{w.clear();let C=Array.from(function(f,y,S,P,F){let _t=new Map,wt=new Map,d,A;for(d=0;d<y.length;d++)_t.set(y[d],d);for(d=0;d<S.length;d++)wt.set(S[d],d);for(d=A=0;d!==y.length||A!==S.length;){var W=y[d],R=S[A];if(W===null)d++;else if(S.length<=A)f.removeChild(P(y[d],-1)),d++;else if(y.length<=d)f.insertBefore(P(R,1),P(y[d],0)||F),A++;else if(W===R)d++,A++;else{var Ho=wt.get(W),K=_t.get(R);Ho===void 0?(f.removeChild(P(y[d],-1)),d++):K===void 0?(f.insertBefore(P(R,1),P(y[d],0)||F),A++):(f.insertBefore(P(y[K],1),P(y[d],0)||F),y[K]=null,K>d+1&&d++,A++)}}return S}(c.parentNode,$||[],I,L,c));return w.forEach(D),C})})),a(function(){g.forEach($=>$()),g.clear(),j.clear(),w.clear()}),u}var Ee=Object.defineProperty,ke=Object.defineProperties,Be=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable,dt=(e,t,o)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b=(e,t)=>{for(var o in t||(t={}))st.call(t,o)&&dt(e,o,t[o]);if(V)for(var o of V(t))ct.call(t,o)&&dt(e,o,t[o]);return e},_=(e,t)=>ke(e,Be(t)),je=(e,t)=>{var o={};for(var n in e)st.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&V)for(var n of V(e))t.indexOf(n)<0&&ct.call(e,n)&&(o[n]=e[n]);return o};const s=N({mode:"none",id:"",columnIds:[],day:1,time:"",timeEnd:"",text:""}),Ie=m(()=>_(b({},Z),{display:s().mode==="none"?"none":"block"})),Ae=_(b({},tt),{width:"70%",height:"70%"}),De={"margin-left":"7px","font-size":"24px"},Fe={add:"\u9805\u76EE\u8FFD\u52A0",update:"\u9805\u76EE\u7DE8\u96C6",none:""},Ne=m(()=>Fe[s().mode]),Te=Y("36px"),ze=()=>s(_(b({},s()),{mode:"none"})),Me=(e,t,o)=>({"background-color":`rgb(${e.join(",")})`,color:z(e),opacity:t?1:.3,width:`${o}%`,"border-radius":"8px 8px 0 0","font-size":"16px","text-align":"center"}),Ve=(e,t)=>()=>{const o=s(),n=t?o.columnIds.filter(r=>r!==e):[...o.columnIds,e];s(_(b({},o),{columnIds:n}))},Le=(e,t)=>({id:o,name:n,color:r})=>{const l=e.includes(o);return h`    <div      style=${Me(r,l,100/t)}      onclick=${Ve(o,l)}    >      ${n}    </div>  `},Re=m(()=>{const{columnIds:e}=s(),t=x(),o=Le(e,t.length);return h`    ${t.map(o)}  `}),Ke={"margin-top":"5px","font-size":"14px"},Ue={"margin-left":"5px",width:"30%"},We=m(()=>s().day),Xe=e=>{s(_(b({},s()),{day:parseInt(e.target.value,10)||0}))},Je={"margin-top":"5px",width:"70%"},qe=m(()=>s().time),Ge=e=>{s(_(b({},s()),{time:e.target.value}))},He={"font-size":"18px","margin-top":"5px"},Qe=m(()=>s().timeEnd),Ye=e=>{s(_(b({},s()),{timeEnd:e.target.value}))},Ze=_(b({},E("18px")),{"margin-left":"5px","background-color":"#ccc","border-color":"#999"}),to=()=>{s(_(b({},s()),{timeEnd:""}))},eo={width:"calc(100% - 12px)",height:"calc(70vh - 109px)",padding:"5px","font-size":"18px","background-color":"#eee",color:"black","font-family":"sans-serif",resize:"none"},oo=m(()=>s().text),no=e=>{s(_(b({},s()),{text:e.target.value}))},ro={"margin-top":"auto"},io=_(b({},E("30px")),{"margin-right":"7px","font-size":"15px","background-color":"#fcc","border-color":"#c99"}),lo=()=>{const e=s(),{id:t}=e;O(O().filter(o=>o.id!==t)),s(_(b({},e),{mode:"none"}))},ao=m(()=>s().mode==="update"?h`<button style=${io} onclick=${lo}>🗑️</button>`:""),ut=m(()=>{const{columnIds:e,time:t,text:o}=s();return e.length===0||t===""||o===""}),so=m(()=>_(b({},E("30px")),{"font-size":"15px","background-color":"#cfc","border-color":"#9c9",opacity:ut()?.3:1})),co=()=>{const e=s(),{mode:t}=e,o=je(e,["mode"]);O(t==="add"?[...O(),o]:O().map(n=>n.id===o.id?o:n)),s(_(b({},o),{mode:"none"}))};var uo=()=>h`  <div style=${Ie}>    <div style=${Ae}>      <div style=${De}>        ${Ne}        <button style=${Te} onclick=${ze}>X</button>      </div>      <hr />      <div style="display:flex">        ${Re}      </div>      <div style="display:flex;flex:25% 75%">        <div style="display:flex;flex-direction:column">          <div style=${Ke}>            Day            <input type="number" style=${Ue} value=${We} onchange=${Xe} />          </div>          <input type="time" style=${Je} value=${qe} onchange=${Ge} />          <div style=${He}>            ~<input type="time" value=${Qe} onchange=${Ye} />            <button style=${Ze} onclick=${to}>X</button>          </div>          <div style=${ro}>            ${ao}            <button              style=${so}              onclick=${co}              disabled=${ut}            >✔️</button>          </div>        </div>        <div style="width:100%">          <textarea style=${eo} value=${oo} onchange=${no}></textarea>        </div>      </div>    </div>  </div>`,po=Object.defineProperty,pt=Object.getOwnPropertySymbols,fo=Object.prototype.hasOwnProperty,yo=Object.prototype.propertyIsEnumerable,ft=(e,t,o)=>t in e?po(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,mo=(e,t)=>{for(var o in t||(t={}))fo.call(t,o)&&ft(e,o,t[o]);if(pt)for(var o of pt(t))yo.call(t,o)&&ft(e,o,t[o]);return e};const yt=(e,t)=>[e,t].join(","),vo=e=>{const[t,o]=e.split(",");return[parseInt(t,10),o]},go=m(()=>[...O().reduce((e,t)=>{const{day:o,time:n,timeEnd:r}=t,l=yt(o,n);e.set(l,[...e.get(l)||[],t]);const a=yt(o,r);return r&&e.set(a,[...e.get(a)||[]]),e},new Map).entries()].map(([e,t])=>[...vo(e),t]).sort(([e,t],[o,n])=>e<o?-1:e>o?1:t<n?-1:t>n?1:0)),$o={"border-top":"1px dashed black","border-bottom":"1px dashed black"},ho={padding:0,width:"10vw","text-align":"center",color:"black"},bo=m(()=>({display:"table-cell",padding:0,width:`${75/x().length}vw`,"text-align":"center","vertical-align":"top"})),_o=e=>({margin:"1px",padding:"2px",border:"1px solid black","border-radius":"3px","background-color":`rgba(${e.join(",")},0.5)`,color:z(e),"z-index":1}),wo=e=>()=>{s(mo({mode:"update"},e))},xo=([e,t,o])=>h`  <tr style=${$o}>    <td style=${ho} data-day=${e} data-time=${t}>${t}</td>    ${at(x,({id:n,color:r})=>h`
      <td style=${bo}>
        ${o.map(l=>l.columnIds.includes(n)?h`          <div style=${_o(r)} onclick=${wo(l)} data-id=${l.id}>${l.text}</div>        `:"")}
      </td>
    `)}  </tr>`,Oo={width:"85vw",margin:"0 5vw","border-collapse":"collapse","overflow-y":"scroll","background-color":"#eee"};var Po=()=>h`  <table style=${Oo} cellSpacing={0}>    <tbody>      ${at(go,xo)}    </tbody>  </table>`,So=Object.defineProperty,Co=Object.defineProperties,Eo=Object.getOwnPropertyDescriptors,mt=Object.getOwnPropertySymbols,ko=Object.prototype.hasOwnProperty,Bo=Object.prototype.propertyIsEnumerable,vt=(e,t,o)=>t in e?So(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,jo=(e,t)=>{for(var o in t||(t={}))ko.call(t,o)&&vt(e,o,t[o]);if(mt)for(var o of mt(t))Bo.call(t,o)&&vt(e,o,t[o]);return e},Io=(e,t)=>Co(e,Eo(t));const Ao=Io(jo({},E("4vw")),{position:"fixed",right:"2vw",bottom:"4vh"}),Do=()=>{const e=O(),t=`a${Math.max(0,...e.map(n=>parseInt(n.id.slice(1),10)))+1}`,o=Math.max(1,...e.map(n=>n.day));s({mode:"add",id:t,columnIds:[],day:o,time:"12:00",timeEnd:"",text:""})};var Fo=()=>h`  <button style=${Ao} onclick=${Do}>+</button>`,No=Object.defineProperty,To=Object.defineProperties,zo=Object.getOwnPropertyDescriptors,gt=Object.getOwnPropertySymbols,Mo=Object.prototype.hasOwnProperty,Vo=Object.prototype.propertyIsEnumerable,$t=(e,t,o)=>t in e?No(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Lo=(e,t)=>{for(var o in t||(t={}))Mo.call(t,o)&&$t(e,o,t[o]);if(gt)for(var o of gt(t))Vo.call(t,o)&&$t(e,o,t[o]);return e},Ro=(e,t)=>To(e,zo(t));const Ko={position:"fixed",left:"2vw",bottom:"4vh"},ht=Ro(Lo({},E("40px")),{display:"block","font-size":"20px","margin-top":"1vh"}),Uo=h`<input type="file" accept="application/json" onchange=${e=>{e.target.files[0].text().then(o=>{const{columns:n,activities:r}=JSON.parse(o);x(n),O(r)}).catch(()=>{})}} />`,Wo=()=>Uo.click(),bt=h`<a download="tl-note.json" />`,Xo=()=>{const e={columns:x(),activities:O()};bt.href=`data:application/json,${encodeURIComponent(JSON.stringify(e,null,2))}`,bt.click()};var Jo=()=>h`  <div style=${Ko}>    <button style=${ht} onclick=${Wo}>📂</button>    <button style=${ht} onclick=${Xo}>💾</button>  </div>`;const qo={margin:"2vh 0","font-size":"14px","font-family":"sans-serif"},Go=()=>h`  <div style=${qo}>    <${Ce} />    <${Po} />  </div>  <${Fo} />  <${Jo} />  <${se} />  <${uo} />`;document.body.append(Go())})();
