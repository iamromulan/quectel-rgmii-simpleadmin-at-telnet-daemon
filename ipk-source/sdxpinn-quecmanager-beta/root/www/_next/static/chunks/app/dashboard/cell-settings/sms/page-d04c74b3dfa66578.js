(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3358],{54016:(e,t,s)=>{Promise.resolve().then(s.bind(s,42909))},42909:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var r=s(20475),a=s(20107),n=s(39997);let i=(0,n.A)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);var l=s(66698);let o=(0,n.A)("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);var d=s(51873),c=s(72167),u=s(93557),m=s(36824),f=s(574),p=s(42541),h=s(76554),x=s(31739),g=s(64219),v=s(32857);let y=()=>{let[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)(!1),[y,b]=(0,a.useState)([]),[w,j]=(0,a.useState)(!1),[N,S]=(0,a.useState)(""),[k,R]=(0,a.useState)(""),[C,E]=(0,a.useState)(!1),[A,T]=(0,a.useState)(""),M=(e,t)=>e.trim()&&t.trim()?!!/^\d+$/.test(e.trim())||((0,v.oR)({title:"Validation Error",description:"Phone number should contain only numbers",variant:"destructive"}),!1):((0,v.oR)({title:"Validation Error",description:"Phone number and message are required",variant:"destructive"}),!1),I=async()=>{if(M(N,k)){E(!0);try{let e={phone:N.trim(),message:k.trim()},t=await fetch("/cgi-bin/cell-settings/sms/sms_send.sh",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json","Cache-Control":"no-cache"},body:new URLSearchParams(e).toString()}),s=await t.json();if(console.log("Response data:",s),s.success)(0,v.oR)({title:"Success",description:"Message sent successfully"}),S(""),R(""),D();else throw Error(s.error||"Failed to send message")}catch(e){console.error("Send operation failed:",e),(0,v.oR)({title:"Error",description:e instanceof Error?e.message:"Something went wrong",variant:"destructive"})}finally{E(!1)}}},_=async(e,t)=>{if(M(e,t)){E(!0);try{let s={phone:e.trim(),message:t.trim()},r=await fetch("/cgi-bin/cell-settings/sms/sms_send.sh",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json","Cache-Control":"no-cache"},body:new URLSearchParams(s).toString()}),a=await r.json();if(console.log("Response data:",a),a.success)(0,v.oR)({title:"Success",description:"Reply sent successfully"}),T(""),D();else throw Error(a.error||"Failed to send reply")}catch(e){console.error("Reply operation failed:",e),(0,v.oR)({title:"Error",description:e instanceof Error?e.message:"Something went wrong",variant:"destructive"})}finally{E(!1)}}},z=e=>{let t={},s=[];return e.msg.forEach(e=>{if(void 0!==e.reference&&void 0!==e.part){var r;let a="".concat(e.sender,"-").concat(e.reference);t[a]||(t[a]={index:e.index,status:"received",sender:e.sender,timestamp:e.timestamp,message:"",originalIndices:[]}),t[a].message+=e.content,null===(r=t[a].originalIndices)||void 0===r||r.push(e.index),e.part===e.total&&(s.push(t[a]),delete t[a])}else s.push({index:e.index,status:"received",sender:e.sender,timestamp:e.timestamp,message:e.content,originalIndices:[e.index]})}),Object.values(t).forEach(e=>{s.push(e)}),s.sort((e,t)=>new Date(t.timestamp).getTime()-new Date(e.timestamp).getTime())},D=async()=>{n(!0);try{let e=await fetch("/cgi-bin/cell-settings/sms/sms_inbox.sh"),s=await e.json();if(!(null==s?void 0:s.msg)||!Array.isArray(s.msg))throw Error("Invalid response format");let r=z(s);t(r),b([])}catch(e){console.error("Failed to refresh SMS:",e),t([])}finally{n(!1)}},L=async e=>{n(!0);try{if(!e.length)throw Error("No messages selected");let t=[...new Set(e)].sort((e,t)=>e-t).join(",");console.log("Deleting messages with indices:",t);let s=await fetch("/cgi-bin/cell-settings/sms/sms_delete.sh?indexes=".concat(t),{method:"GET",headers:{Accept:"application/json","Cache-Control":"no-cache"}}),r=await s.text();if(console.log("Raw response:",r),/Deleted message \d+/.test(r))(0,v.oR)({title:"Success!",description:"Selected messages deleted."}),await D();else throw Error("Something went wrong")}catch(e){console.error("Delete operation failed:",e),(0,v.oR)({title:"Error!",description:"Something went wrong",variant:"destructive"})}finally{n(!1)}},O=e=>{b(t=>{let s=new Set(t);return e.every(e=>s.has(e))?e.forEach(e=>s.delete(e)):e.forEach(e=>s.add(e)),Array.from(s)})},P=e=>{try{let[t,s]=e.split(" "),[r,a,n]=t.split("/");return{date:"20".concat(n,"-").concat(r,"-").concat(a),time:s}}catch(e){return console.error("Error parsing timestamp:",e),{date:"Invalid date",time:"Invalid time"}}};return(0,a.useEffect)(()=>{D()},[]),(0,r.jsxs)("div",{className:"grid gap-6",children:[(0,r.jsxs)(c.Zp,{className:"w-full max-w-screen",children:[(0,r.jsxs)(c.aR,{children:[(0,r.jsx)(c.ZB,{children:"SMS Inbox"}),(0,r.jsx)(c.BT,{children:(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("span",{children:"View and manage SMS messages"}),(0,r.jsxs)("div",{className:"flex items-center space-x-1.5",children:[(0,r.jsx)(f.S,{checked:e.length>0&&y.length===e.flatMap(e=>e.originalIndices||[e.index]).length,onCheckedChange:t=>{t?b(e.flatMap(e=>e.originalIndices||[e.index])):b([])}}),(0,r.jsx)("span",{className:"text-sm",children:"Select All"})]})]})})]}),(0,r.jsx)(c.Wu,{children:(0,r.jsx)(m.F,{className:"h-[400px] w-full xs:max-w-xs p-4 grid",children:s?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center py-8",children:[(0,r.jsx)(i,{className:"h-8 w-8 animate-spin"}),(0,r.jsx)("p",{className:"mt-2",children:"Loading messages..."})]}):0===e.length?(0,r.jsx)("p",{className:"text-center py-8 text-muted-foreground",children:"No messages found"}):e.map(e=>{let{date:t,time:s}=P(e.timestamp),a=e.originalIndices||[e.index];return(0,r.jsxs)(u.lG,{children:[(0,r.jsx)(u.zM,{className:"w-full",children:(0,r.jsxs)(c.Zp,{className:"my-2 dark:hover:bg-slate-900 hover:bg-slate-100",children:[(0,r.jsxs)(c.aR,{children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)(c.ZB,{children:e.sender}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",onClick:e=>e.stopPropagation(),children:[(0,r.jsx)("p",{className:"text-muted-foreground font-medium text-xs",children:a.join(", ")}),(0,r.jsx)(f.S,{checked:a.every(e=>y.includes(e)),onCheckedChange:()=>O(a)})]})]}),(0,r.jsxs)(c.BT,{className:"text-left",children:[t," at ",s]})]}),(0,r.jsx)(c.Wu,{children:(0,r.jsx)("p",{className:"line-clamp-3",children:e.message})})]})}),(0,r.jsxs)(u.Cf,{children:[(0,r.jsxs)(u.c7,{children:[(0,r.jsx)(u.L3,{children:e.sender}),(0,r.jsxs)(u.rr,{children:[t," at ",s]})]}),(0,r.jsx)("p",{className:"whitespace-pre-line",children:e.message}),(0,r.jsx)(h.w,{className:"my-2"}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)(x.T,{placeholder:"Reply to ".concat(e.sender,"..."),className:"h-24",value:A,onChange:e=>T(e.target.value)}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsxs)(p.$,{onClick:()=>_(e.sender,A),disabled:C||!A.trim(),children:[C?(0,r.jsx)(i,{className:"h-4 w-4 mr-2 animate-spin"}):(0,r.jsx)(l.A,{className:"h-4 w-4 mr-2"}),C?"Sending...":"Reply"]})})]})]})]},a.join("-"))})})}),(0,r.jsx)(c.wL,{className:"border-t py-4",children:(0,r.jsxs)("div",{className:"flex w-full justify-between items-center",children:[(0,r.jsxs)(p.$,{variant:"outline",onClick:D,disabled:s,children:[(0,r.jsx)(o,{className:"h-4 w-4 mr-2"}),"Refresh"]}),(0,r.jsxs)(p.$,{variant:"destructive",disabled:0===y.length||s,onClick:()=>{if(0===y.length){(0,v.oR)({title:"Delete Messages",description:"No messages selected"});return}L(y)},children:[(0,r.jsx)(d.A,{className:"h-4 w-4 mr-2"}),"Delete Selected"]})]})})]}),(0,r.jsxs)(c.Zp,{children:[(0,r.jsxs)(c.aR,{children:[(0,r.jsx)(c.ZB,{children:"Send SMS"}),(0,r.jsx)(c.BT,{children:"Send a new SMS message"})]}),(0,r.jsx)(c.Wu,{children:(0,r.jsxs)("div",{className:"grid gap-6",children:[(0,r.jsx)(g.p,{placeholder:'Recipient number with country code not including "+" symbol.',value:N,onChange:e=>S(e.target.value),required:!0}),(0,r.jsx)(x.T,{placeholder:"Type your message here...",className:"h-32",value:k,onChange:e=>R(e.target.value),required:!0}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsxs)(p.$,{onClick:I,disabled:C||!N.trim()||!k.trim(),children:[C?(0,r.jsx)(i,{className:"h-4 w-4 mr-2 animate-spin"}):(0,r.jsx)(l.A,{className:"h-4 w-4 mr-2"}),C?"Sending...":"Send"]})})]})})]})]})}},42541:(e,t,s)=>{"use strict";s.d(t,{$:()=>d,r:()=>o});var r=s(20475),a=s(20107),n=s(61837),i=s(29395),l=s(22250);let o=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:s,variant:a,size:i,asChild:d=!1,...c}=e,u=d?n.DX:"button";return(0,r.jsx)(u,{className:(0,l.cn)(o({variant:a,size:i,className:s})),ref:t,...c})});d.displayName="Button"},72167:(e,t,s)=>{"use strict";s.d(t,{BT:()=>d,Wu:()=>c,ZB:()=>o,Zp:()=>i,aR:()=>l,wL:()=>u});var r=s(20475),a=s(20107),n=s(22250);let i=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",s),...a})});i.displayName="Card";let l=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",s),...a})});l.displayName="CardHeader";let o=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("h3",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",s),...a})});o.displayName="CardTitle";let d=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",s),...a})});d.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",s),...a})});c.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",s),...a})});u.displayName="CardFooter"},574:(e,t,s)=>{"use strict";s.d(t,{S:()=>o});var r=s(20475),a=s(20107),n=s(32044),i=s(7197),l=s(22250);let o=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.bL,{ref:t,className:(0,l.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",s),...a,children:(0,r.jsx)(n.C1,{className:(0,l.cn)("flex items-center justify-center text-current"),children:(0,r.jsx)(i.Srz,{className:"h-4 w-4"})})})});o.displayName=n.bL.displayName},93557:(e,t,s)=>{"use strict";s.d(t,{Cf:()=>f,HM:()=>u,L3:()=>h,c7:()=>p,lG:()=>o,rr:()=>x,zM:()=>d});var r=s(20475),a=s(20107),n=s(71827),i=s(7197),l=s(22250);let o=n.bL,d=n.l9,c=n.ZL,u=n.bm,m=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.hJ,{ref:t,className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...a})});m.displayName=n.hJ.displayName;let f=a.forwardRef((e,t)=>{let{className:s,children:a,...o}=e;return(0,r.jsxs)(c,{children:[(0,r.jsx)(m,{}),(0,r.jsxs)(n.UC,{ref:t,className:(0,l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s),...o,children:[a,(0,r.jsxs)(n.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(i.MKb,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=n.UC.displayName;let p=e=>{let{className:t,...s}=e;return(0,r.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...s})};p.displayName="DialogHeader";let h=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.hE,{ref:t,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",s),...a})});h.displayName=n.hE.displayName;let x=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(n.VY,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",s),...a})});x.displayName=n.VY.displayName},64219:(e,t,s)=>{"use strict";s.d(t,{p:()=>i});var r=s(20475),a=s(20107),n=s(22250);let i=a.forwardRef((e,t)=>{let{className:s,type:a,...i}=e;return(0,r.jsx)("input",{type:a,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...i})});i.displayName="Input"},36824:(e,t,s)=>{"use strict";s.d(t,{$:()=>o,F:()=>l});var r=s(20475),a=s(20107),n=s(34568),i=s(22250);let l=a.forwardRef((e,t)=>{let{className:s,children:a,...l}=e;return(0,r.jsxs)(n.bL,{ref:t,className:(0,i.cn)("relative overflow-hidden",s),...l,children:[(0,r.jsx)(n.LM,{className:"h-full w-full rounded-[inherit]",children:a}),(0,r.jsx)(o,{}),(0,r.jsx)(n.OK,{})]})});l.displayName=n.bL.displayName;let o=a.forwardRef((e,t)=>{let{className:s,orientation:a="vertical",...l}=e;return(0,r.jsx)(n.VM,{ref:t,orientation:a,className:(0,i.cn)("flex touch-none select-none transition-colors","vertical"===a&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===a&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",s),...l,children:(0,r.jsx)(n.lr,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=n.VM.displayName},76554:(e,t,s)=>{"use strict";s.d(t,{w:()=>l});var r=s(20475),a=s(20107),n=s(78190),i=s(22250);let l=a.forwardRef((e,t)=>{let{className:s,orientation:a="horizontal",decorative:l=!0,...o}=e;return(0,r.jsx)(n.b,{ref:t,decorative:l,orientation:a,className:(0,i.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",s),...o})});l.displayName=n.b.displayName},31739:(e,t,s)=>{"use strict";s.d(t,{T:()=>i});var r=s(20475),a=s(20107),n=s(22250);let i=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)("textarea",{className:(0,n.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:t,...a})});i.displayName="Textarea"},32857:(e,t,s)=>{"use strict";s.d(t,{dj:()=>m,oR:()=>u});var r=s(20107);let a=0,n=new Map,i=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},l=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?i(s):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],d={toasts:[]};function c(e){d=l(d,e),o.forEach(e=>{e(d)})}function u(e){let{...t}=e,s=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:s});return c({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||r()}}}),{id:s,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function m(){let[e,t]=r.useState(d);return r.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},22250:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var r=s(64901),a=s(868);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.QP)((0,r.$)(t))}},39997:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var r=s(20107);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter((e,t,s)=>!!e&&s.indexOf(e)===t).join(" ")};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,r.forwardRef)((e,t)=>{let{color:s="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:d="",children:c,iconNode:u,...m}=e;return(0,r.createElement)("svg",{ref:t,...i,width:a,height:a,stroke:s,strokeWidth:o?24*Number(l)/Number(a):l,className:n("lucide",d),...m},[...u.map(e=>{let[t,s]=e;return(0,r.createElement)(t,s)}),...Array.isArray(c)?c:[c]])}),o=(e,t)=>{let s=(0,r.forwardRef)((s,i)=>{let{className:o,...d}=s;return(0,r.createElement)(l,{ref:i,iconNode:t,className:n("lucide-".concat(a(e)),o),...d})});return s.displayName="".concat(e),s}},66698:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(39997).A)("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]])},51873:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});let r=(0,s(39997).A)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},32044:(e,t,s)=>{"use strict";s.d(t,{C1:()=>k,bL:()=>S});var r=s(20107),a=s(74111),n=s(80938),i=s(94521),l=s(81255),o=s(48543),d=s(26783),c=s(62796),u=s(4589),m=s(20475),f="Checkbox",[p,h]=(0,n.A)(f),[x,g]=p(f),v=r.forwardRef((e,t)=>{let{__scopeCheckbox:s,name:n,checked:o,defaultChecked:d,required:c,disabled:f,value:p="on",onCheckedChange:h,form:g,...v}=e,[y,b]=r.useState(null),S=(0,a.s)(t,e=>b(e)),k=r.useRef(!1),R=!y||g||!!y.closest("form"),[C=!1,E]=(0,l.i)({prop:o,defaultProp:d,onChange:h}),A=r.useRef(C);return r.useEffect(()=>{let e=null==y?void 0:y.form;if(e){let t=()=>E(A.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[y,E]),(0,m.jsxs)(x,{scope:s,state:C,disabled:f,children:[(0,m.jsx)(u.sG.button,{type:"button",role:"checkbox","aria-checked":j(C)?"mixed":C,"aria-required":c,"data-state":N(C),"data-disabled":f?"":void 0,disabled:f,value:p,...v,ref:S,onKeyDown:(0,i.m)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,i.m)(e.onClick,e=>{E(e=>!!j(e)||!e),R&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})}),R&&(0,m.jsx)(w,{control:y,bubbles:!k.current,name:n,value:p,checked:C,required:c,disabled:f,form:g,style:{transform:"translateX(-100%)"},defaultChecked:!j(d)&&d})]})});v.displayName=f;var y="CheckboxIndicator",b=r.forwardRef((e,t)=>{let{__scopeCheckbox:s,forceMount:r,...a}=e,n=g(y,s);return(0,m.jsx)(c.C,{present:r||j(n.state)||!0===n.state,children:(0,m.jsx)(u.sG.span,{"data-state":N(n.state),"data-disabled":n.disabled?"":void 0,...a,ref:t,style:{pointerEvents:"none",...e.style}})})});b.displayName=y;var w=e=>{let{control:t,checked:s,bubbles:a=!0,defaultChecked:n,...i}=e,l=r.useRef(null),c=(0,o.Z)(s),u=(0,d.X)(t);r.useEffect(()=>{let e=l.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(c!==s&&t){let r=new Event("click",{bubbles:a});e.indeterminate=j(s),t.call(e,!j(s)&&s),e.dispatchEvent(r)}},[c,s,a]);let f=r.useRef(!j(s)&&s);return(0,m.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:null!=n?n:f.current,...i,tabIndex:-1,ref:l,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function j(e){return"indeterminate"===e}function N(e){return j(e)?"indeterminate":e?"checked":"unchecked"}var S=v,k=b},78190:(e,t,s)=>{"use strict";s.d(t,{b:()=>d});var r=s(20107),a=s(4589),n=s(20475),i="horizontal",l=["horizontal","vertical"],o=r.forwardRef((e,t)=>{let{decorative:s,orientation:r=i,...o}=e,d=l.includes(r)?r:i;return(0,n.jsx)(a.sG.div,{"data-orientation":d,...s?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},...o,ref:t})});o.displayName="Separator";var d=o},48543:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(20107);function a(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},26783:(e,t,s)=>{"use strict";s.d(t,{X:()=>n});var r=s(20107),a=s(58013);function n(e){let[t,s]=r.useState(void 0);return(0,a.N)(()=>{if(e){s({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,a;if(!Array.isArray(t)||!t.length)return;let n=t[0];if("borderBoxSize"in n){let e=n.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,a=t.blockSize}else r=e.offsetWidth,a=e.offsetHeight;s({width:r,height:a})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}s(void 0)},[e]),t}}},e=>{var t=t=>e(e.s=t);e.O(0,[9980,4736,1617,5011,1827,4568,191,6035,7358],()=>t(54016)),_N_E=e.O()}]);