(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[876],{87168:function(e,t,r){Promise.resolve().then(r.bind(r,79278))},79278:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(20881),s=r(64149),i=r(94920),o=r(33335),a=r(64433),u=r(83954),c=r(74873),l=r(45306),d=r(32437),f=r(73452),p=r(79442),m="Switch",[h,v]=(0,c.b)(m),[b,g]=h(m),x=s.forwardRef((e,t)=>{let{__scopeSwitch:r,name:i,checked:o,defaultChecked:c,required:d,disabled:f,value:m="on",onCheckedChange:h,form:v,...g}=e,[x,y]=s.useState(null),w=(0,u.e)(t,e=>y(e)),S=s.useRef(!1),T=!x||v||!!x.closest("form"),[k=!1,E]=(0,l.T)({prop:o,defaultProp:c,onChange:h});return(0,n.jsxs)(b,{scope:r,checked:k,disabled:f,children:[(0,n.jsx)(p.WV.button,{type:"button",role:"switch","aria-checked":k,"aria-required":d,"data-state":N(k),"data-disabled":f?"":void 0,disabled:f,value:m,...g,ref:w,onClick:(0,a.M)(e.onClick,e=>{E(e=>!e),T&&(S.current=e.isPropagationStopped(),S.current||e.stopPropagation())})}),T&&(0,n.jsx)(j,{control:x,bubbles:!S.current,name:i,value:m,checked:k,required:d,disabled:f,form:v,style:{transform:"translateX(-100%)"}})]})});x.displayName=m;var y="SwitchThumb",w=s.forwardRef((e,t)=>{let{__scopeSwitch:r,...s}=e,i=g(y,r);return(0,n.jsx)(p.WV.span,{"data-state":N(i.checked),"data-disabled":i.disabled?"":void 0,...s,ref:t})});w.displayName=y;var j=e=>{let{control:t,checked:r,bubbles:i=!0,...o}=e,a=s.useRef(null),u=(0,d.D)(r),c=(0,f.t)(t);return s.useEffect(()=>{let e=a.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(u!==r&&t){let n=new Event("click",{bubbles:i});t.call(e,r),e.dispatchEvent(n)}},[u,r,i]),(0,n.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:r,...o,tabIndex:-1,ref:a,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function N(e){return e?"checked":"unchecked"}var S=r(90270);let T=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(x,{className:(0,S.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",r),...s,ref:t,children:(0,n.jsx)(w,{className:(0,S.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});T.displayName=x.displayName;var k=r(78580),E=r(46646),C=r(6120),O=()=>{let[e,t]=(0,s.useState)("0"),[r,a]=(0,s.useState)(!1),[u,c]=(0,s.useState)(!0),[l,d]=(0,s.useState)(""),[f,p]=(0,s.useState)(""),m=(0,E.pm)();(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("/cgi-bin/advance/ttl.sh"),r=await e.json();a(r.isEnabled),t(r.currentValue.toString()),c(!1),m.toast({title:"Success",description:"Fetched TTL settings successfully"})}catch(e){d("Failed to fetch TTL settings"),c(!1),m.toast({variant:"destructive",title:"Uh oh! Something went wrong.",description:l,action:(0,n.jsx)(C.Z,{})})}})()},[]);let h=async t=>{t.preventDefault(),d(""),p("");let s=r?e:"0";try{let e=await fetch("/cgi-bin/advance/ttl.sh",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"ttl=".concat(s)}),t=await e.json();!0===t.success?m.toast({title:"Success",description:"Settings saved successfully"}):m.toast({variant:"destructive",title:"Uh oh! Something went wrong.",description:"Failed to save settings",action:(0,n.jsx)(C.Z,{})})}catch(e){d("Failed to save settings")}};return u?(0,n.jsx)(i.Zb,{className:"w-full max-w-2xl mx-auto",children:(0,n.jsx)(i.aY,{className:"p-6",children:(0,n.jsx)("div",{className:"text-center",children:"Loading TTL settings..."})})}):(0,n.jsxs)(i.Zb,{children:[(0,n.jsxs)(i.Ol,{children:[(0,n.jsx)(i.ll,{children:"TTL Settings"}),(0,n.jsx)(i.SZ,{children:"Configure TTL mangling for your connection."})]}),(0,n.jsx)(i.aY,{children:(0,n.jsxs)("form",{onSubmit:h,className:"space-y-8",children:[(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"text-sm font-medium",children:"TTL Value"}),(0,n.jsx)(o.I,{type:"number",min:"0",max:"255",value:e,onChange:e=>t(e.target.value),disabled:!r,className:"mt-1"}),(0,n.jsx)("p",{className:"text-sm text-gray-500 mt-1",children:"Set the TTL value for your connection (0-255)."})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between rounded-lg border p-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"text-base font-medium",children:"TTL State"}),(0,n.jsx)("p",{className:"text-sm text-gray-500",children:"Toggle to enable or disable TTL mangling"})]}),(0,n.jsx)(T,{checked:r,onCheckedChange:a})]})]}),(0,n.jsx)(k.z,{type:"submit",className:"w-full",children:"Save Configuration"})]})})]})}},6120:function(e,t,r){"use strict";var n=r(20881),s=r(78580),i=r(35935);t.Z=()=>(0,n.jsx)(s.z,{asChild:!0,variant:"outline",className:"ml-2",children:(0,n.jsxs)("a",{href:"https://github.com/iamromulan/quectel-rgmii-toolkit/tree/development-SDXPINN",children:[(0,n.jsx)(i.wGg,{className:"w-4 h-4 mr-2"}),"Get there!"]})})},78580:function(e,t,r){"use strict";r.d(t,{d:function(){return u},z:function(){return c}});var n=r(20881),s=r(64149),i=r(54098),o=r(20116),a=r(90270);let u=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:c=!1,...l}=e,d=c?i.g7:"button";return(0,n.jsx)(d,{className:(0,a.cn)(u({variant:s,size:o,className:r})),ref:t,...l})});c.displayName="Button"},94920:function(e,t,r){"use strict";r.d(t,{Ol:function(){return a},SZ:function(){return c},Zb:function(){return o},aY:function(){return l},eW:function(){return d},ll:function(){return u}});var n=r(20881),s=r(64149),i=r(90270);let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...s})});o.displayName="Card";let a=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...s})});a.displayName="CardHeader";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("h3",{ref:t,className:(0,i.cn)("font-semibold leading-none tracking-tight",r),...s})});u.displayName="CardTitle";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("p",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...s})});c.displayName="CardDescription";let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",r),...s})});l.displayName="CardContent";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",r),...s})});d.displayName="CardFooter"},33335:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(20881),s=r(64149),i=r(90270);let o=s.forwardRef((e,t)=>{let{className:r,type:s,...o}=e;return(0,n.jsx)("input",{type:s,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});o.displayName="Input"},46646:function(e,t,r){"use strict";r.d(t,{pm:function(){return f}});var n=r(64149);let s=0,i=new Map,o=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),l({type:"REMOVE_TOAST",toastId:e})},1e6);i.set(e,t)},a=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?o(r):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},u=[],c={toasts:[]};function l(e){c=a(c,e),u.forEach(e=>{e(c)})}function d(e){let{...t}=e,r=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),n=()=>l({type:"DISMISS_TOAST",toastId:r});return l({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||n()}}}),{id:r,dismiss:n,update:e=>l({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function f(){let[e,t]=n.useState(c);return n.useEffect(()=>(u.push(t),()=>{let e=u.indexOf(t);e>-1&&u.splice(e,1)}),[e]),{...e,toast:d,dismiss:e=>l({type:"DISMISS_TOAST",toastId:e})}}},90270:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var n=r(33958),s=r(61779);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},64433:function(e,t,r){"use strict";function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}r.d(t,{M:function(){return n}})},74873:function(e,t,r){"use strict";r.d(t,{b:function(){return o},k:function(){return i}});var n=r(64149),s=r(20881);function i(e,t){let r=n.createContext(t),i=e=>{let{children:t,...i}=e,o=n.useMemo(()=>i,Object.values(i));return(0,s.jsx)(r.Provider,{value:o,children:t})};return i.displayName=e+"Provider",[i,function(s){let i=n.useContext(r);if(i)return i;if(void 0!==t)return t;throw Error(`\`${s}\` must be used within \`${e}\``)}]}function o(e,t=[]){let r=[],i=()=>{let t=r.map(e=>n.createContext(e));return function(r){let s=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:s}}),[r,s])}};return i.scopeName=e,[function(t,i){let o=n.createContext(i),a=r.length;r=[...r,i];let u=t=>{let{scope:r,children:i,...u}=t,c=r?.[e]?.[a]||o,l=n.useMemo(()=>u,Object.values(u));return(0,s.jsx)(c.Provider,{value:l,children:i})};return u.displayName=t+"Provider",[u,function(r,s){let u=s?.[e]?.[a]||o,c=n.useContext(u);if(c)return c;if(void 0!==i)return i;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let s=r.reduce((t,{useScope:r,scopeName:n})=>{let s=r(e)[`__scope${n}`];return{...t,...s}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return r.scopeName=t.scopeName,r}(i,...t)]}},79442:function(e,t,r){"use strict";r.d(t,{WV:function(){return a},jH:function(){return u}});var n=r(64149),s=r(50149),i=r(54098),o=r(20881),a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...s}=e,a=n?i.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,o.jsx)(a,{...s,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function u(e,t){e&&s.flushSync(()=>e.dispatchEvent(t))}},2441:function(e,t,r){"use strict";r.d(t,{W:function(){return s}});var n=r(64149);function s(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},45306:function(e,t,r){"use strict";r.d(t,{T:function(){return i}});var n=r(64149),s=r(2441);function i({prop:e,defaultProp:t,onChange:r=()=>{}}){let[i,o]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[i]=r,o=n.useRef(i),a=(0,s.W)(t);return n.useEffect(()=>{o.current!==i&&(a(i),o.current=i)},[i,o,a]),r}({defaultProp:t,onChange:r}),a=void 0!==e,u=a?e:i,c=(0,s.W)(r);return[u,n.useCallback(t=>{if(a){let r="function"==typeof t?t(e):t;r!==e&&c(r)}else o(t)},[a,e,o,c])]}},61013:function(e,t,r){"use strict";r.d(t,{b:function(){return s}});var n=r(64149),s=globalThis?.document?n.useLayoutEffect:()=>{}},32437:function(e,t,r){"use strict";r.d(t,{D:function(){return s}});var n=r(64149);function s(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},73452:function(e,t,r){"use strict";r.d(t,{t:function(){return i}});var n=r(64149),s=r(61013);function i(e){let[t,r]=n.useState(void 0);return(0,s.b)(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,s;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,s=t.blockSize}else n=e.offsetWidth,s=e.offsetHeight;r({width:n,height:s})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}},20116:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n);else for(r in t)t[r]&&(s&&(s+=" "),s+=r)}return s}(e))&&(n&&(n+=" "),n+=t);return n},i=(e,t)=>r=>{var i;if((null==t?void 0:t.variants)==null)return s(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:o,defaultVariants:a}=t,u=Object.keys(o).map(e=>{let t=null==r?void 0:r[e],s=null==a?void 0:a[e];if(null===t)return null;let i=n(t)||n(s);return o[e][i]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return s(e,u,null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:r,className:n,...s}=t;return Object.entries(s).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...c}[t]):({...a,...c})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}},function(e){e.O(0,[792,59,985,330,744],function(){return e(e.s=87168)}),_N_E=e.O()}]);