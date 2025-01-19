(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3669],{27651:(e,t,r)=>{Promise.resolve().then(r.bind(r,34819))},34819:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(20475),s=r(20107),i=r(72167),a=r(64219),o=r(22631),l=r(42541),u=r(32857),c=r(114);let d=()=>{let[e,t]=(0,s.useState)("1500"),[r,d]=(0,s.useState)(!1),[f,p]=(0,s.useState)(!0),[m,h]=(0,s.useState)(""),v=(0,u.dj)();(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("/cgi-bin/advance/mtu.sh"),r=await e.json();d(r.isEnabled),t(r.currentValue.toString()),p(!1)}catch(e){h("Failed to fetch MTU settings"),p(!1),v.toast({variant:"destructive",title:"Uh oh! Something went wrong.",description:"Failed to fetch MTU settings",action:(0,n.jsx)(c.A,{})})}})()},[]);let b=async t=>{t.preventDefault(),h("");let s=r?e:"disable";try{let e=await fetch("/cgi-bin/advance/mtu.sh",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"mtu=".concat(s)}),t=await e.json();!0===t.success?v.toast({title:"Success",description:t.message||"MTU settings saved successfully"}):v.toast({variant:"destructive",title:"Uh oh! Something went wrong.",description:t.error||"Failed to save MTU settings",action:(0,n.jsx)(c.A,{})})}catch(e){h("Failed to save MTU settings"),v.toast({variant:"destructive",title:"Uh oh! Something went wrong.",description:"Network error while saving MTU settings",action:(0,n.jsx)(c.A,{})})}};return(0,n.jsxs)(i.Zp,{children:[(0,n.jsxs)(i.aR,{children:[(0,n.jsx)(i.ZB,{children:"MTU Settings"}),(0,n.jsx)(i.BT,{children:"Configure MTU for rmnet_data0 interface."})]}),(0,n.jsx)(i.Wu,{children:(0,n.jsxs)("form",{onSubmit:b,className:"space-y-8",children:[(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"text-sm font-medium",children:"MTU Value"}),(0,n.jsx)(a.p,{type:"number",value:e,onChange:e=>t(e.target.value),disabled:!r,className:"mt-1",min:"68",max:"9000"}),(0,n.jsx)("p",{className:"text-sm text-gray-500 mt-1",children:"Set the MTU value for your connection (default: 1500)."})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between rounded-lg border p-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"text-base font-medium",children:"MTU State"}),(0,n.jsx)("p",{className:"text-sm text-gray-500",children:"Toggle to enable or disable custom MTU value."})]}),(0,n.jsx)(o.d,{checked:r,onCheckedChange:e=>{d(e),e||t("1500")}})]})]}),(0,n.jsx)(l.$,{type:"submit",className:"w-full",disabled:f,children:"Save Configuration"})]})})]})}},114:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(20475),s=r(42541),i=r(7197);let a=()=>(0,n.jsx)(s.$,{asChild:!0,variant:"outline",className:"ml-2",children:(0,n.jsxs)("a",{href:"https://github.com/iamromulan/quectel-rgmii-toolkit/tree/development-SDXPINN",children:[(0,n.jsx)(i.ERf,{className:"w-4 h-4 mr-2"}),"Get there!"]})})},42541:(e,t,r)=>{"use strict";r.d(t,{$:()=>u,r:()=>l});var n=r(20475),s=r(20107),i=r(61837),a=r(29395),o=r(22250);let l=(0,a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=s.forwardRef((e,t)=>{let{className:r,variant:s,size:a,asChild:u=!1,...c}=e,d=u?i.DX:"button";return(0,n.jsx)(d,{className:(0,o.cn)(l({variant:s,size:a,className:r})),ref:t,...c})});u.displayName="Button"},72167:(e,t,r)=>{"use strict";r.d(t,{BT:()=>u,Wu:()=>c,ZB:()=>l,Zp:()=>a,aR:()=>o,wL:()=>d});var n=r(20475),s=r(20107),i=r(22250);let a=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...s})});a.displayName="Card";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...s})});o.displayName="CardHeader";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("h3",{ref:t,className:(0,i.cn)("font-semibold leading-none tracking-tight",r),...s})});l.displayName="CardTitle";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("p",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...s})});u.displayName="CardDescription";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",r),...s})});c.displayName="CardContent";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",r),...s})});d.displayName="CardFooter"},64219:(e,t,r)=>{"use strict";r.d(t,{p:()=>a});var n=r(20475),s=r(20107),i=r(22250);let a=s.forwardRef((e,t)=>{let{className:r,type:s,...a}=e;return(0,n.jsx)("input",{type:s,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});a.displayName="Input"},22631:(e,t,r)=>{"use strict";r.d(t,{d:()=>N});var n=r(20475),s=r(20107),i=r(94521),a=r(74111),o=r(80938),l=r(81255),u=r(48543),c=r(26783),d=r(4589),f="Switch",[p,m]=(0,o.A)(f),[h,v]=p(f),b=s.forwardRef((e,t)=>{let{__scopeSwitch:r,name:o,checked:u,defaultChecked:c,required:f,disabled:p,value:m="on",onCheckedChange:v,form:b,...g}=e,[x,j]=s.useState(null),N=(0,a.s)(t,e=>j(e)),S=s.useRef(!1),T=!x||b||!!x.closest("form"),[E=!1,k]=(0,l.i)({prop:u,defaultProp:c,onChange:v});return(0,n.jsxs)(h,{scope:r,checked:E,disabled:p,children:[(0,n.jsx)(d.sG.button,{type:"button",role:"switch","aria-checked":E,"aria-required":f,"data-state":w(E),"data-disabled":p?"":void 0,disabled:p,value:m,...g,ref:N,onClick:(0,i.m)(e.onClick,e=>{k(e=>!e),T&&(S.current=e.isPropagationStopped(),S.current||e.stopPropagation())})}),T&&(0,n.jsx)(y,{control:x,bubbles:!S.current,name:o,value:m,checked:E,required:f,disabled:p,form:b,style:{transform:"translateX(-100%)"}})]})});b.displayName=f;var g="SwitchThumb",x=s.forwardRef((e,t)=>{let{__scopeSwitch:r,...s}=e,i=v(g,r);return(0,n.jsx)(d.sG.span,{"data-state":w(i.checked),"data-disabled":i.disabled?"":void 0,...s,ref:t})});x.displayName=g;var y=e=>{let{control:t,checked:r,bubbles:i=!0,...a}=e,o=s.useRef(null),l=(0,u.Z)(r),d=(0,c.X)(t);return s.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(l!==r&&t){let n=new Event("click",{bubbles:i});t.call(e,r),e.dispatchEvent(n)}},[l,r,i]),(0,n.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...a,tabIndex:-1,ref:o,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function w(e){return e?"checked":"unchecked"}var j=r(22250);let N=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(b,{className:(0,j.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",r),...s,ref:t,children:(0,n.jsx)(x,{className:(0,j.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});N.displayName=b.displayName},32857:(e,t,r)=>{"use strict";r.d(t,{dj:()=>f,oR:()=>d});var n=r(20107);let s=0,i=new Map,a=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);i.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?a(r):e.toasts.forEach(e=>{a(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],u={toasts:[]};function c(e){u=o(u,e),l.forEach(e=>{e(u)})}function d(e){let{...t}=e,r=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>c({type:"DISMISS_TOAST",toastId:r});return c({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=n.useState(u);return n.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:d,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},22250:(e,t,r)=>{"use strict";r.d(t,{cn:()=>i});var n=r(64901),s=r(868);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,n.$)(t))}},94521:(e,t,r)=>{"use strict";function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}r.d(t,{m:()=>n})},74111:(e,t,r)=>{"use strict";r.d(t,{s:()=>i,t:()=>s});var n=r(20107);function s(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function i(...e){return n.useCallback(s(...e),e)}},80938:(e,t,r)=>{"use strict";r.d(t,{A:()=>a,q:()=>i});var n=r(20107),s=r(20475);function i(e,t){let r=n.createContext(t),i=e=>{let{children:t,...i}=e,a=n.useMemo(()=>i,Object.values(i));return(0,s.jsx)(r.Provider,{value:a,children:t})};return i.displayName=e+"Provider",[i,function(s){let i=n.useContext(r);if(i)return i;if(void 0!==t)return t;throw Error(`\`${s}\` must be used within \`${e}\``)}]}function a(e,t=[]){let r=[],i=()=>{let t=r.map(e=>n.createContext(e));return function(r){let s=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:s}}),[r,s])}};return i.scopeName=e,[function(t,i){let a=n.createContext(i),o=r.length;r=[...r,i];let l=t=>{let{scope:r,children:i,...l}=t,u=r?.[e]?.[o]||a,c=n.useMemo(()=>l,Object.values(l));return(0,s.jsx)(u.Provider,{value:c,children:i})};return l.displayName=t+"Provider",[l,function(r,s){let l=s?.[e]?.[o]||a,u=n.useContext(l);if(u)return u;if(void 0!==i)return i;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let s=r.reduce((t,{useScope:r,scopeName:n})=>{let s=r(e)[`__scope${n}`];return{...t,...s}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return r.scopeName=t.scopeName,r}(i,...t)]}},4589:(e,t,r)=>{"use strict";r.d(t,{hO:()=>l,sG:()=>o});var n=r(20107),s=r(25642),i=r(61837),a=r(20475),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...s}=e,o=n?i.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(o,{...s,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function l(e,t){e&&s.flushSync(()=>e.dispatchEvent(t))}},61837:(e,t,r)=>{"use strict";r.d(t,{DX:()=>a,xV:()=>l});var n=r(20107),s=r(74111),i=r(20475),a=n.forwardRef((e,t)=>{let{children:r,...s}=e,a=n.Children.toArray(r),l=a.find(u);if(l){let e=l.props.children,r=a.map(t=>t!==l?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,i.jsx)(o,{...s,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,i.jsx)(o,{...s,ref:t,children:r})});a.displayName="Slot";var o=n.forwardRef((e,t)=>{let{children:r,...i}=e;if(n.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let s=e[n],i=t[n];/^on[A-Z]/.test(n)?s&&i?r[n]=(...e)=>{i(...e),s(...e)}:s&&(r[n]=s):"style"===n?r[n]={...s,...i}:"className"===n&&(r[n]=[s,i].filter(Boolean).join(" "))}return{...e,...r}}(i,r.props),ref:t?(0,s.t)(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});o.displayName="SlotClone";var l=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function u(e){return n.isValidElement(e)&&e.type===l}},85547:(e,t,r)=>{"use strict";r.d(t,{c:()=>s});var n=r(20107);function s(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},81255:(e,t,r)=>{"use strict";r.d(t,{i:()=>i});var n=r(20107),s=r(85547);function i({prop:e,defaultProp:t,onChange:r=()=>{}}){let[i,a]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[i]=r,a=n.useRef(i),o=(0,s.c)(t);return n.useEffect(()=>{a.current!==i&&(o(i),a.current=i)},[i,a,o]),r}({defaultProp:t,onChange:r}),o=void 0!==e,l=o?e:i,u=(0,s.c)(r);return[l,n.useCallback(t=>{if(o){let r="function"==typeof t?t(e):t;r!==e&&u(r)}else a(t)},[o,e,a,u])]}},58013:(e,t,r)=>{"use strict";r.d(t,{N:()=>s});var n=r(20107),s=globalThis?.document?n.useLayoutEffect:()=>{}},48543:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(20107);function s(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},26783:(e,t,r)=>{"use strict";r.d(t,{X:()=>i});var n=r(20107),s=r(58013);function i(e){let[t,r]=n.useState(void 0);return(0,s.N)(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,s;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,s=t.blockSize}else n=e.offsetWidth,s=e.offsetHeight;r({width:n,height:s})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}},29395:(e,t,r)=>{"use strict";r.d(t,{F:()=>i});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n);else for(r in t)t[r]&&(s&&(s+=" "),s+=r)}return s}(e))&&(n&&(n+=" "),n+=t);return n},i=(e,t)=>r=>{var i;if((null==t?void 0:t.variants)==null)return s(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:a,defaultVariants:o}=t,l=Object.keys(a).map(e=>{let t=null==r?void 0:r[e],s=null==o?void 0:o[e];if(null===t)return null;let i=n(t)||n(s);return a[e][i]}),u=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return s(e,l,null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:r,className:n,...s}=t;return Object.entries(s).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...o,...u}[t]):({...o,...u})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},e=>{var t=t=>e(e.s=t);e.O(0,[9980,4736,191,6035,7358],()=>t(27651)),_N_E=e.O()}]);