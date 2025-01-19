(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3376],{82064:(e,t,r)=>{Promise.resolve().then(r.bind(r,4546))},4546:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var n=r(20475),a=r(20107),s=r(72167),i=r(64219),l=r(49153),o=r(12607),d=r(96244),c=r(52744),u=r(32857);let f=()=>{let[e,t]=(0,a.useState)(""),[r,f]=(0,a.useState)(""),[p,m]=(0,a.useState)(""),[v,h]=(0,a.useState)(!1),{toast:g}=(0,u.dj)();(0,a.useEffect)(()=>{y()},[]);let y=async()=>{try{let e=await fetch("/cgi-bin/experimental/keep_alive.sh?status=true"),r=await e.json();t(r.start_time),f(r.end_time),m(r.interval.toString()),h(1===r.enabled)}catch(e){g({title:"Error",description:"Failed to fetch current status",variant:"destructive"})}},b=async t=>{try{if(t){if(!e||!r||!p){g({title:"Error",description:"Please fill in all fields",variant:"destructive"});return}let t=parseInt(p,10);if(isNaN(t)||t<=0){g({title:"Error",description:"Interval must be a positive number",variant:"destructive"});return}let n=await fetch("/cgi-bin/experimental/keep_alive.sh",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"start_time=".concat(encodeURIComponent(e),"&end_time=").concat(encodeURIComponent(r),"&interval=").concat(encodeURIComponent(p))}),a=await n.json();if(a.error){g({title:"Error",description:a.error,variant:"destructive"});return}g({title:"Success",description:"Keep-alive scheduling enabled"})}else{let e=await fetch("/cgi-bin/experimental/keep_alive.sh",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"disable=true"});await e.json(),g({title:"Success",description:"Keep-alive scheduling disabled"})}h(t)}catch(e){g({title:"Error",description:"Failed to update keep-alive settings",variant:"destructive"})}};return(0,n.jsxs)(s.Zp,{children:[(0,n.jsxs)(s.aR,{children:[(0,n.jsx)(s.ZB,{children:"Keep Alive"}),(0,n.jsx)(s.BT,{children:"Ensure uninterrupted connectivity by preventing modem idle times with scheduled speed tests to keep your connection alive."})]}),(0,n.jsx)(s.Wu,{children:(0,n.jsxs)("div",{className:"grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-4",children:[(0,n.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,n.jsx)(l.J,{htmlFor:"start-time",children:"Start Time"}),(0,n.jsx)(i.p,{type:"time",id:"start-time",value:e,onChange:e=>t(e.target.value),disabled:v})]}),(0,n.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,n.jsx)(l.J,{htmlFor:"end-time",children:"End Time"}),(0,n.jsx)(i.p,{type:"time",id:"end-time",value:r,onChange:e=>f(e.target.value),disabled:v})]}),(0,n.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-2",children:[(0,n.jsx)(l.J,{htmlFor:"interval",children:"Interval (minutes)"}),(0,n.jsx)(i.p,{type:"number",id:"interval",min:1,value:p,onChange:e=>{m(e.target.value.replace(/[^0-9]/g,"").replace(/^0+/,""))},placeholder:"Enter minutes",disabled:v,className:"[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"})]}),(0,n.jsxs)("div",{className:"lg:col-span-2 col-span-1 flex items-center gap-2",children:[(0,n.jsx)(o.A,{className:"h-4 w-4 text-red-600"}),(0,n.jsx)("p",{className:"text-sm text-gray-500",children:"Please consider your data usage limits when setting the interval."})]})]})}),(0,n.jsx)(s.wL,{className:"border-t py-4",children:(0,n.jsxs)(c.l,{pressed:v,onPressedChange:b,disabled:!e||!r||!p,children:[(0,n.jsx)(d.A,{className:"h-4 w-4 mr-2"}),"Enable Keep Alive"]})})]})}},72167:(e,t,r)=>{"use strict";r.d(t,{BT:()=>d,Wu:()=>c,ZB:()=>o,Zp:()=>i,aR:()=>l,wL:()=>u});var n=r(20475),a=r(20107),s=r(22250);let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...a})});i.displayName="Card";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...a})});l.displayName="CardHeader";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,s.cn)("font-semibold leading-none tracking-tight",r),...a})});o.displayName="CardTitle";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...a})});d.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...a})});c.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...a})});u.displayName="CardFooter"},64219:(e,t,r)=>{"use strict";r.d(t,{p:()=>i});var n=r(20475),a=r(20107),s=r(22250);let i=a.forwardRef((e,t)=>{let{className:r,type:a,...i}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},49153:(e,t,r)=>{"use strict";r.d(t,{J:()=>d});var n=r(20475),a=r(20107),s=r(73725),i=r(29395),l=r(22250);let o=(0,i.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.b,{ref:t,className:(0,l.cn)(o(),r),...a})});d.displayName=s.b.displayName},52744:(e,t,r)=>{"use strict";r.d(t,{l:()=>f});var n=r(20475),a=r(20107),s=r(94521),i=r(81255),l=r(4589),o=a.forwardRef((e,t)=>{let{pressed:r,defaultPressed:a=!1,onPressedChange:o,...d}=e,[c=!1,u]=(0,i.i)({prop:r,onChange:o,defaultProp:a});return(0,n.jsx)(l.sG.button,{type:"button","aria-pressed":c,"data-state":c?"on":"off","data-disabled":e.disabled?"":void 0,...d,ref:t,onClick:(0,s.m)(e.onClick,()=>{e.disabled||u(!c)})})});o.displayName="Toggle";var d=r(29395),c=r(22250);let u=(0,d.F)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"},size:{default:"h-9 px-3",sm:"h-8 px-2",lg:"h-10 px-3"}},defaultVariants:{variant:"default",size:"default"}}),f=a.forwardRef((e,t)=>{let{className:r,variant:a,size:s,...i}=e;return(0,n.jsx)(o,{ref:t,className:(0,c.cn)(u({variant:a,size:s,className:r})),...i})});f.displayName=o.displayName},32857:(e,t,r)=>{"use strict";r.d(t,{dj:()=>f,oR:()=>u});var n=r(20107);let a=0,s=new Map,i=e=>{if(s.has(e))return;let t=setTimeout(()=>{s.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);s.set(e,t)},l=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],d={toasts:[]};function c(e){d=l(d,e),o.forEach(e=>{e(d)})}function u(e){let{...t}=e,r=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>c({type:"DISMISS_TOAST",toastId:r});return c({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=n.useState(d);return n.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},22250:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var n=r(64901),a=r(868);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,n.$)(t))}},39997:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(20107);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:d="",children:c,iconNode:u,...f}=e;return(0,n.createElement)("svg",{ref:t,...i,width:a,height:a,stroke:r,strokeWidth:o?24*Number(l)/Number(a):l,className:s("lucide",d),...f},[...u.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),o=(e,t)=>{let r=(0,n.forwardRef)((r,i)=>{let{className:o,...d}=r;return(0,n.createElement)(l,{ref:i,iconNode:t,className:s("lucide-".concat(a(e)),o),...d})});return r.displayName="".concat(e),r}},96244:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(39997).A)("Clock1",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]])},12607:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(39997).A)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},94521:(e,t,r)=>{"use strict";function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}r.d(t,{m:()=>n})},74111:(e,t,r)=>{"use strict";r.d(t,{s:()=>s,t:()=>a});var n=r(20107);function a(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function s(...e){return n.useCallback(a(...e),e)}},73725:(e,t,r)=>{"use strict";r.d(t,{b:()=>l});var n=r(20107),a=r(4589),s=r(20475),i=n.forwardRef((e,t)=>(0,s.jsx)(a.sG.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var l=i},4589:(e,t,r)=>{"use strict";r.d(t,{hO:()=>o,sG:()=>l});var n=r(20107),a=r(25642),s=r(61837),i=r(20475),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...a}=e,l=n?s.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(l,{...a,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function o(e,t){e&&a.flushSync(()=>e.dispatchEvent(t))}},61837:(e,t,r)=>{"use strict";r.d(t,{DX:()=>i,xV:()=>o});var n=r(20107),a=r(74111),s=r(20475),i=n.forwardRef((e,t)=>{let{children:r,...a}=e,i=n.Children.toArray(r),o=i.find(d);if(o){let e=o.props.children,r=i.map(t=>t!==o?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,s.jsx)(l,{...a,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,s.jsx)(l,{...a,ref:t,children:r})});i.displayName="Slot";var l=n.forwardRef((e,t)=>{let{children:r,...s}=e;if(n.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return n.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let a=e[n],s=t[n];/^on[A-Z]/.test(n)?a&&s?r[n]=(...e)=>{s(...e),a(...e)}:a&&(r[n]=a):"style"===n?r[n]={...a,...s}:"className"===n&&(r[n]=[a,s].filter(Boolean).join(" "))}return{...e,...r}}(s,r.props),ref:t?(0,a.t)(t,e):e})}return n.Children.count(r)>1?n.Children.only(null):null});l.displayName="SlotClone";var o=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function d(e){return n.isValidElement(e)&&e.type===o}},85547:(e,t,r)=>{"use strict";r.d(t,{c:()=>a});var n=r(20107);function a(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},81255:(e,t,r)=>{"use strict";r.d(t,{i:()=>s});var n=r(20107),a=r(85547);function s({prop:e,defaultProp:t,onChange:r=()=>{}}){let[s,i]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[s]=r,i=n.useRef(s),l=(0,a.c)(t);return n.useEffect(()=>{i.current!==s&&(l(s),i.current=s)},[s,i,l]),r}({defaultProp:t,onChange:r}),l=void 0!==e,o=l?e:s,d=(0,a.c)(r);return[o,n.useCallback(t=>{if(l){let r="function"==typeof t?t(e):t;r!==e&&d(r)}else i(t)},[l,e,i,d])]}},29395:(e,t,r)=>{"use strict";r.d(t,{F:()=>s});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(a&&(a+=" "),a+=n);else for(r in t)t[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(n&&(n+=" "),n+=t);return n},s=(e,t)=>r=>{var s;if((null==t?void 0:t.variants)==null)return a(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:l}=t,o=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],a=null==l?void 0:l[e];if(null===t)return null;let s=n(t)||n(a);return i[e][s]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return a(e,o,null==t?void 0:null===(s=t.compoundVariants)||void 0===s?void 0:s.reduce((e,t)=>{let{class:r,className:n,...a}=t;return Object.entries(a).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...l,...d}[t]):({...l,...d})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},e=>{var t=t=>e(e.s=t);e.O(0,[4736,191,6035,7358],()=>t(82064)),_N_E=e.O()}]);