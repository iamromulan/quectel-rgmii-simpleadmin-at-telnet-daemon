"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[136],{86004:function(e,t,n){n.d(t,{gm:function(){return a}});var r=n(64149);n(20881);var o=r.createContext(void 0);function a(e){let t=r.useContext(o);return e||t||"ltr"}},67293:function(e,t,n){n.d(t,{oC:function(){return tf},VY:function(){return ti},ZA:function(){return tc},ck:function(){return td},wU:function(){return tm},__:function(){return ts},Uv:function(){return tu},Ee:function(){return tp},Rk:function(){return tv},fC:function(){return ta},Z0:function(){return th},Tr:function(){return tg},tu:function(){return ty},fF:function(){return tw},xz:function(){return tl}});var r=n(64149),o=n(64433),a=n(83954),l=n(74873),u=n(45306),i=n(79442),c=n(83027),s=n(86004),d=n(72832),f=n(57117),p=n(96616),v=n(89105),m=n(95420),h=n(97498),g=n(45485),w=n(245),y=n(2441),x=n(20881),M="rovingFocusGroup.onEntryFocus",b={bubbles:!1,cancelable:!0},C="RovingFocusGroup",[R,j,D]=(0,c.B)(C),[k,T]=(0,w.b)(C,[D]),[_,E]=k(C),S=r.forwardRef((e,t)=>(0,x.jsx)(R.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,x.jsx)(R.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,x.jsx)(I,{...e,ref:t})})}));S.displayName=C;var I=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:l,loop:c=!1,dir:d,currentTabStopId:f,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:v,onEntryFocus:m,preventScrollOnEntryFocus:h=!1,...g}=e,w=r.useRef(null),C=(0,a.e)(t,w),R=(0,s.gm)(d),[D=null,k]=(0,u.T)({prop:f,defaultProp:p,onChange:v}),[T,E]=r.useState(!1),S=(0,y.W)(m),I=j(n),P=r.useRef(!1),[F,N]=r.useState(0);return r.useEffect(()=>{let e=w.current;if(e)return e.addEventListener(M,S),()=>e.removeEventListener(M,S)},[S]),(0,x.jsx)(_,{scope:n,orientation:l,dir:R,loop:c,currentTabStopId:D,onItemFocus:r.useCallback(e=>k(e),[k]),onItemShiftTab:r.useCallback(()=>E(!0),[]),onFocusableItemAdd:r.useCallback(()=>N(e=>e+1),[]),onFocusableItemRemove:r.useCallback(()=>N(e=>e-1),[]),children:(0,x.jsx)(i.WV.div,{tabIndex:T||0===F?-1:0,"data-orientation":l,...g,ref:C,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{P.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let t=!P.current;if(e.target===e.currentTarget&&t&&!T){let t=new CustomEvent(M,b);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=I().filter(e=>e.focusable);O([e.find(e=>e.active),e.find(e=>e.id===D),...e].filter(Boolean).map(e=>e.ref.current),h)}}P.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>E(!1))})})}),P="RovingFocusGroupItem",F=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:a=!0,active:l=!1,tabStopId:u,...c}=e,s=(0,v.M)(),d=u||s,f=E(P,n),p=f.currentTabStopId===d,m=j(n),{onFocusableItemAdd:h,onFocusableItemRemove:g}=f;return r.useEffect(()=>{if(a)return h(),()=>g()},[a,h,g]),(0,x.jsx)(R.ItemSlot,{scope:n,id:d,focusable:a,active:l,children:(0,x.jsx)(i.WV.span,{tabIndex:p?0:-1,"data-orientation":f.orientation,...c,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{a?f.onItemFocus(d):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>f.onItemFocus(d)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){f.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return N[o]}(e,f.orientation,f.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=m().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&o.reverse();let a=o.indexOf(e.currentTarget);o=f.loop?(n=o,r=a+1,n.map((e,t)=>n[(r+t)%n.length])):o.slice(a+1)}setTimeout(()=>O(o))}})})})});F.displayName=P;var N={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function O(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}var L=n(54098),A=n(32286),K=n(3748),V=["Enter"," "],G=["ArrowUp","PageDown","End"],W=["ArrowDown","PageUp","Home",...G],U={ltr:[...V,"ArrowRight"],rtl:[...V,"ArrowLeft"]},B={ltr:["ArrowLeft"],rtl:["ArrowRight"]},z="Menu",[X,H,Y]=(0,c.B)(z),[Z,J]=(0,l.b)(z,[Y,m.D7,T]),q=(0,m.D7)(),Q=T(),[$,ee]=Z(z),[et,en]=Z(z),er=e=>{let{__scopeMenu:t,open:n=!1,children:o,dir:a,onOpenChange:l,modal:u=!0}=e,i=q(t),[c,d]=r.useState(null),f=r.useRef(!1),p=(0,y.W)(l),v=(0,s.gm)(a);return r.useEffect(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",t,{capture:!0,once:!0}),document.addEventListener("pointermove",t,{capture:!0,once:!0})},t=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",t,{capture:!0})}},[]),(0,x.jsx)(m.fC,{...i,children:(0,x.jsx)($,{scope:t,open:n,onOpenChange:p,content:c,onContentChange:d,children:(0,x.jsx)(et,{scope:t,onClose:r.useCallback(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:v,modal:u,children:o})})})};er.displayName=z;var eo=r.forwardRef((e,t)=>{let{__scopeMenu:n,...r}=e,o=q(n);return(0,x.jsx)(m.ee,{...o,...r,ref:t})});eo.displayName="MenuAnchor";var ea="MenuPortal",[el,eu]=Z(ea,{forceMount:void 0}),ei=e=>{let{__scopeMenu:t,forceMount:n,children:r,container:o}=e,a=ee(ea,t);return(0,x.jsx)(el,{scope:t,forceMount:n,children:(0,x.jsx)(g.z,{present:n||a.open,children:(0,x.jsx)(h.h,{asChild:!0,container:o,children:r})})})};ei.displayName=ea;var ec="MenuContent",[es,ed]=Z(ec),ef=r.forwardRef((e,t)=>{let n=eu(ec,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,a=ee(ec,e.__scopeMenu),l=en(ec,e.__scopeMenu);return(0,x.jsx)(X.Provider,{scope:e.__scopeMenu,children:(0,x.jsx)(g.z,{present:r||a.open,children:(0,x.jsx)(X.Slot,{scope:e.__scopeMenu,children:l.modal?(0,x.jsx)(ep,{...o,ref:t}):(0,x.jsx)(ev,{...o,ref:t})})})})}),ep=r.forwardRef((e,t)=>{let n=ee(ec,e.__scopeMenu),l=r.useRef(null),u=(0,a.e)(t,l);return r.useEffect(()=>{let e=l.current;if(e)return(0,A.Ry)(e)},[]),(0,x.jsx)(em,{...e,ref:u,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),ev=r.forwardRef((e,t)=>{let n=ee(ec,e.__scopeMenu);return(0,x.jsx)(em,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),em=r.forwardRef((e,t)=>{let{__scopeMenu:n,loop:l=!1,trapFocus:u,onOpenAutoFocus:i,onCloseAutoFocus:c,disableOutsidePointerEvents:s,onEntryFocus:v,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:w,onInteractOutside:y,onDismiss:M,disableOutsideScroll:b,...C}=e,R=ee(ec,n),j=en(ec,n),D=q(n),k=Q(n),T=H(n),[_,E]=r.useState(null),I=r.useRef(null),P=(0,a.e)(t,I,R.onContentChange),F=r.useRef(0),N=r.useRef(""),O=r.useRef(0),A=r.useRef(null),V=r.useRef("right"),U=r.useRef(0),B=b?K.Z:r.Fragment,z=b?{as:L.g7,allowPinchZoom:!0}:void 0,X=e=>{var t,n;let r=N.current+e,o=T().filter(e=>!e.disabled),a=document.activeElement,l=null===(t=o.find(e=>e.ref.current===a))||void 0===t?void 0:t.textValue,u=function(e,t,n){var r;let o=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,a=(r=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(r+n)%e.length]));1===o.length&&(a=a.filter(e=>e!==n));let l=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}(o.map(e=>e.textValue),r,l),i=null===(n=o.find(e=>e.textValue===u))||void 0===n?void 0:n.ref.current;!function e(t){N.current=t,window.clearTimeout(F.current),""!==t&&(F.current=window.setTimeout(()=>e(""),1e3))}(r),i&&setTimeout(()=>i.focus())};r.useEffect(()=>()=>window.clearTimeout(F.current),[]),(0,f.EW)();let Y=r.useCallback(e=>{var t,n,r;return V.current===(null===(t=A.current)||void 0===t?void 0:t.side)&&!!(r=null===(n=A.current)||void 0===n?void 0:n.area)&&function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let l=t[e].x,u=t[e].y,i=t[a].x,c=t[a].y;u>r!=c>r&&n<(i-l)*(r-u)/(c-u)+l&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)},[]);return(0,x.jsx)(es,{scope:n,searchRef:N,onItemEnter:r.useCallback(e=>{Y(e)&&e.preventDefault()},[Y]),onItemLeave:r.useCallback(e=>{var t;Y(e)||(null===(t=I.current)||void 0===t||t.focus(),E(null))},[Y]),onTriggerLeave:r.useCallback(e=>{Y(e)&&e.preventDefault()},[Y]),pointerGraceTimerRef:O,onPointerGraceIntentChange:r.useCallback(e=>{A.current=e},[]),children:(0,x.jsx)(B,{...z,children:(0,x.jsx)(p.M,{asChild:!0,trapped:u,onMountAutoFocus:(0,o.M)(i,e=>{var t;e.preventDefault(),null===(t=I.current)||void 0===t||t.focus({preventScroll:!0})}),onUnmountAutoFocus:c,children:(0,x.jsx)(d.XB,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:w,onInteractOutside:y,onDismiss:M,children:(0,x.jsx)(S,{asChild:!0,...k,dir:j.dir,orientation:"vertical",loop:l,currentTabStopId:_,onCurrentTabStopIdChange:E,onEntryFocus:(0,o.M)(v,e=>{j.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,x.jsx)(m.VY,{role:"menu","aria-orientation":"vertical","data-state":eU(R.open),"data-radix-menu-content":"",dir:j.dir,...D,...C,ref:P,style:{outline:"none",...C.style},onKeyDown:(0,o.M)(C.onKeyDown,e=>{let t=e.target.closest("[data-radix-menu-content]")===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length;t&&("Tab"===e.key&&e.preventDefault(),!n&&r&&X(e.key));let o=I.current;if(e.target!==o||!W.includes(e.key))return;e.preventDefault();let a=T().filter(e=>!e.disabled).map(e=>e.ref.current);G.includes(e.key)&&a.reverse(),function(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}(a)}),onBlur:(0,o.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(F.current),N.current="")}),onPointerMove:(0,o.M)(e.onPointerMove,eX(e=>{let t=e.target,n=U.current!==e.clientX;if(e.currentTarget.contains(t)&&n){let t=e.clientX>U.current?"right":"left";V.current=t,U.current=e.clientX}}))})})})})})})});ef.displayName=ec;var eh=r.forwardRef((e,t)=>{let{__scopeMenu:n,...r}=e;return(0,x.jsx)(i.WV.div,{role:"group",...r,ref:t})});eh.displayName="MenuGroup";var eg=r.forwardRef((e,t)=>{let{__scopeMenu:n,...r}=e;return(0,x.jsx)(i.WV.div,{...r,ref:t})});eg.displayName="MenuLabel";var ew="MenuItem",ey="menu.itemSelect",ex=r.forwardRef((e,t)=>{let{disabled:n=!1,onSelect:l,...u}=e,c=r.useRef(null),s=en(ew,e.__scopeMenu),d=ed(ew,e.__scopeMenu),f=(0,a.e)(t,c),p=r.useRef(!1);return(0,x.jsx)(eM,{...u,ref:f,disabled:n,onClick:(0,o.M)(e.onClick,()=>{let e=c.current;if(!n&&e){let t=new CustomEvent(ey,{bubbles:!0,cancelable:!0});e.addEventListener(ey,e=>null==l?void 0:l(e),{once:!0}),(0,i.jH)(e,t),t.defaultPrevented?p.current=!1:s.onClose()}}),onPointerDown:t=>{var n;null===(n=e.onPointerDown)||void 0===n||n.call(e,t),p.current=!0},onPointerUp:(0,o.M)(e.onPointerUp,e=>{var t;p.current||null===(t=e.currentTarget)||void 0===t||t.click()}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{let t=""!==d.searchRef.current;!n&&(!t||" "!==e.key)&&V.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})});ex.displayName=ew;var eM=r.forwardRef((e,t)=>{let{__scopeMenu:n,disabled:l=!1,textValue:u,...c}=e,s=ed(ew,n),d=Q(n),f=r.useRef(null),p=(0,a.e)(t,f),[v,m]=r.useState(!1),[h,g]=r.useState("");return r.useEffect(()=>{let e=f.current;if(e){var t;g((null!==(t=e.textContent)&&void 0!==t?t:"").trim())}},[c.children]),(0,x.jsx)(X.ItemSlot,{scope:n,disabled:l,textValue:null!=u?u:h,children:(0,x.jsx)(F,{asChild:!0,...d,focusable:!l,children:(0,x.jsx)(i.WV.div,{role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":l||void 0,"data-disabled":l?"":void 0,...c,ref:p,onPointerMove:(0,o.M)(e.onPointerMove,eX(e=>{l?s.onItemLeave(e):(s.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:(0,o.M)(e.onPointerLeave,eX(e=>s.onItemLeave(e))),onFocus:(0,o.M)(e.onFocus,()=>m(!0)),onBlur:(0,o.M)(e.onBlur,()=>m(!1))})})})}),eb=r.forwardRef((e,t)=>{let{checked:n=!1,onCheckedChange:r,...a}=e;return(0,x.jsx)(eE,{scope:e.__scopeMenu,checked:n,children:(0,x.jsx)(ex,{role:"menuitemcheckbox","aria-checked":eB(n)?"mixed":n,...a,ref:t,"data-state":ez(n),onSelect:(0,o.M)(a.onSelect,()=>null==r?void 0:r(!!eB(n)||!n),{checkForDefaultPrevented:!1})})})});eb.displayName="MenuCheckboxItem";var eC="MenuRadioGroup",[eR,ej]=Z(eC,{value:void 0,onValueChange:()=>{}}),eD=r.forwardRef((e,t)=>{let{value:n,onValueChange:r,...o}=e,a=(0,y.W)(r);return(0,x.jsx)(eR,{scope:e.__scopeMenu,value:n,onValueChange:a,children:(0,x.jsx)(eh,{...o,ref:t})})});eD.displayName=eC;var ek="MenuRadioItem",eT=r.forwardRef((e,t)=>{let{value:n,...r}=e,a=ej(ek,e.__scopeMenu),l=n===a.value;return(0,x.jsx)(eE,{scope:e.__scopeMenu,checked:l,children:(0,x.jsx)(ex,{role:"menuitemradio","aria-checked":l,...r,ref:t,"data-state":ez(l),onSelect:(0,o.M)(r.onSelect,()=>{var e;return null===(e=a.onValueChange)||void 0===e?void 0:e.call(a,n)},{checkForDefaultPrevented:!1})})})});eT.displayName=ek;var e_="MenuItemIndicator",[eE,eS]=Z(e_,{checked:!1}),eI=r.forwardRef((e,t)=>{let{__scopeMenu:n,forceMount:r,...o}=e,a=eS(e_,n);return(0,x.jsx)(g.z,{present:r||eB(a.checked)||!0===a.checked,children:(0,x.jsx)(i.WV.span,{...o,ref:t,"data-state":ez(a.checked)})})});eI.displayName=e_;var eP=r.forwardRef((e,t)=>{let{__scopeMenu:n,...r}=e;return(0,x.jsx)(i.WV.div,{role:"separator","aria-orientation":"horizontal",...r,ref:t})});eP.displayName="MenuSeparator";var eF=r.forwardRef((e,t)=>{let{__scopeMenu:n,...r}=e,o=q(n);return(0,x.jsx)(m.Eh,{...o,...r,ref:t})});eF.displayName="MenuArrow";var eN="MenuSub",[eO,eL]=Z(eN),eA=e=>{let{__scopeMenu:t,children:n,open:o=!1,onOpenChange:a}=e,l=ee(eN,t),u=q(t),[i,c]=r.useState(null),[s,d]=r.useState(null),f=(0,y.W)(a);return r.useEffect(()=>(!1===l.open&&f(!1),()=>f(!1)),[l.open,f]),(0,x.jsx)(m.fC,{...u,children:(0,x.jsx)($,{scope:t,open:o,onOpenChange:f,content:s,onContentChange:d,children:(0,x.jsx)(eO,{scope:t,contentId:(0,v.M)(),triggerId:(0,v.M)(),trigger:i,onTriggerChange:c,children:n})})})};eA.displayName=eN;var eK="MenuSubTrigger",eV=r.forwardRef((e,t)=>{let n=ee(eK,e.__scopeMenu),l=en(eK,e.__scopeMenu),u=eL(eK,e.__scopeMenu),i=ed(eK,e.__scopeMenu),c=r.useRef(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:d}=i,f={__scopeMenu:e.__scopeMenu},p=r.useCallback(()=>{c.current&&window.clearTimeout(c.current),c.current=null},[]);return r.useEffect(()=>p,[p]),r.useEffect(()=>{let e=s.current;return()=>{window.clearTimeout(e),d(null)}},[s,d]),(0,x.jsx)(eo,{asChild:!0,...f,children:(0,x.jsx)(eM,{id:u.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":u.contentId,"data-state":eU(n.open),...e,ref:(0,a.F)(t,u.onTriggerChange),onClick:t=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,t),e.disabled||t.defaultPrevented||(t.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:(0,o.M)(e.onPointerMove,eX(t=>{i.onItemEnter(t),t.defaultPrevented||e.disabled||n.open||c.current||(i.onPointerGraceIntentChange(null),c.current=window.setTimeout(()=>{n.onOpenChange(!0),p()},100))})),onPointerLeave:(0,o.M)(e.onPointerLeave,eX(e=>{var t,r;p();let o=null===(t=n.content)||void 0===t?void 0:t.getBoundingClientRect();if(o){let t=null===(r=n.content)||void 0===r?void 0:r.dataset.side,a="right"===t,l=o[a?"left":"right"],u=o[a?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:l,y:o.top},{x:u,y:o.top},{x:u,y:o.bottom},{x:l,y:o.bottom}],side:t}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,o.M)(e.onKeyDown,t=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==t.key)&&U[l.dir].includes(t.key)){var o;n.onOpenChange(!0),null===(o=n.content)||void 0===o||o.focus(),t.preventDefault()}})})})});eV.displayName=eK;var eG="MenuSubContent",eW=r.forwardRef((e,t)=>{let n=eu(ec,e.__scopeMenu),{forceMount:l=n.forceMount,...u}=e,i=ee(ec,e.__scopeMenu),c=en(ec,e.__scopeMenu),s=eL(eG,e.__scopeMenu),d=r.useRef(null),f=(0,a.e)(t,d);return(0,x.jsx)(X.Provider,{scope:e.__scopeMenu,children:(0,x.jsx)(g.z,{present:l||i.open,children:(0,x.jsx)(X.Slot,{scope:e.__scopeMenu,children:(0,x.jsx)(em,{id:s.contentId,"aria-labelledby":s.triggerId,...u,ref:f,align:"start",side:"rtl"===c.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var t;c.isUsingKeyboardRef.current&&(null===(t=d.current)||void 0===t||t.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,o.M)(e.onEscapeKeyDown,e=>{c.onClose(),e.preventDefault()}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{let t=e.currentTarget.contains(e.target),n=B[c.dir].includes(e.key);if(t&&n){var r;i.onOpenChange(!1),null===(r=s.trigger)||void 0===r||r.focus(),e.preventDefault()}})})})})})});function eU(e){return e?"open":"closed"}function eB(e){return"indeterminate"===e}function ez(e){return eB(e)?"indeterminate":e?"checked":"unchecked"}function eX(e){return t=>"mouse"===t.pointerType?e(t):void 0}eW.displayName=eG;var eH="DropdownMenu",[eY,eZ]=(0,l.b)(eH,[J]),eJ=J(),[eq,eQ]=eY(eH),e$=e=>{let{__scopeDropdownMenu:t,children:n,dir:o,open:a,defaultOpen:l,onOpenChange:i,modal:c=!0}=e,s=eJ(t),d=r.useRef(null),[f=!1,p]=(0,u.T)({prop:a,defaultProp:l,onChange:i});return(0,x.jsx)(eq,{scope:t,triggerId:(0,v.M)(),triggerRef:d,contentId:(0,v.M)(),open:f,onOpenChange:p,onOpenToggle:r.useCallback(()=>p(e=>!e),[p]),modal:c,children:(0,x.jsx)(er,{...s,open:f,onOpenChange:p,dir:o,modal:c,children:n})})};e$.displayName=eH;var e0="DropdownMenuTrigger",e1=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,disabled:r=!1,...l}=e,u=eQ(e0,n),c=eJ(n);return(0,x.jsx)(eo,{asChild:!0,...c,children:(0,x.jsx)(i.WV.button,{type:"button",id:u.triggerId,"aria-haspopup":"menu","aria-expanded":u.open,"aria-controls":u.open?u.contentId:void 0,"data-state":u.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...l,ref:(0,a.F)(t,u.triggerRef),onPointerDown:(0,o.M)(e.onPointerDown,e=>{r||0!==e.button||!1!==e.ctrlKey||(u.onOpenToggle(),u.open||e.preventDefault())}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{!r&&(["Enter"," "].includes(e.key)&&u.onOpenToggle(),"ArrowDown"===e.key&&u.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})})});e1.displayName=e0;var e4=e=>{let{__scopeDropdownMenu:t,...n}=e,r=eJ(t);return(0,x.jsx)(ei,{...r,...n})};e4.displayName="DropdownMenuPortal";var e8="DropdownMenuContent",e2=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eQ(e8,n),u=eJ(n),i=r.useRef(!1);return(0,x.jsx)(ef,{id:l.contentId,"aria-labelledby":l.triggerId,...u,...a,ref:t,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var t;i.current||null===(t=l.triggerRef.current)||void 0===t||t.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,o.M)(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;(!l.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});e2.displayName=e8;var e3=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,x.jsx)(eh,{...o,...r,ref:t})});e3.displayName="DropdownMenuGroup";var e6=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,x.jsx)(eg,{...o,...r,ref:t})});e6.displayName="DropdownMenuLabel";var e7=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,x.jsx)(ex,{...o,...r,ref:t})});e7.displayName="DropdownMenuItem";var e9=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,x.jsx)(eb,{...o,...r,ref:t})});e9.displayName="DropdownMenuCheckboxItem";var e5=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,x.jsx)(eD,{...o,...r,ref:t})});e5.displayName="DropdownMenuRadioGroup";var te=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,x.jsx)(eT,{...o,...r,ref:t})});te.displayName="DropdownMenuRadioItem";var tt=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,x.jsx)(eI,{...o,...r,ref:t})});tt.displayName="DropdownMenuItemIndicator";var tn=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,x.jsx)(eP,{...o,...r,ref:t})});tn.displayName="DropdownMenuSeparator",r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,x.jsx)(eF,{...o,...r,ref:t})}).displayName="DropdownMenuArrow";var tr=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,x.jsx)(eV,{...o,...r,ref:t})});tr.displayName="DropdownMenuSubTrigger";var to=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,x.jsx)(eW,{...o,...r,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});to.displayName="DropdownMenuSubContent";var ta=e$,tl=e1,tu=e4,ti=e2,tc=e3,ts=e6,td=e7,tf=e9,tp=e5,tv=te,tm=tt,th=tn,tg=e=>{let{__scopeDropdownMenu:t,children:n,open:r,onOpenChange:o,defaultOpen:a}=e,l=eJ(t),[i=!1,c]=(0,u.T)({prop:r,defaultProp:a,onChange:o});return(0,x.jsx)(eA,{...l,open:i,onOpenChange:c,children:n})},tw=tr,ty=to},89448:function(e,t,n){n.d(t,{F:function(){return c},f:function(){return s}});var r=n(64149),o=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,u=r.createContext(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(u))?e:i},s=e=>r.useContext(u)?e.children:r.createElement(f,{...e}),d=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:l=!0,enableColorScheme:i=!0,storageKey:c="theme",themes:s=d,defaultTheme:f=l?"system":"light",attribute:g="data-theme",value:w,children:y,nonce:x}=e,[M,b]=r.useState(()=>v(c,f)),[C,R]=r.useState(()=>v(c)),j=w?Object.values(w):s,D=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&l&&(t=h());let r=w?w[t]:t,a=n?m():null,u=document.documentElement;if("class"===g?(u.classList.remove(...j),r&&u.classList.add(r)):r?u.setAttribute(g,r):u.removeAttribute(g),i){let e=o.includes(f)?f:null,n=o.includes(t)?t:e;u.style.colorScheme=n}null==a||a()},[]),k=r.useCallback(e=>{let t="function"==typeof e?e(e):e;b(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),T=r.useCallback(e=>{R(h(e)),"system"===M&&l&&!t&&D("system")},[M,t]);r.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),r.useEffect(()=>{let e=e=>{e.key===c&&k(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[k]),r.useEffect(()=>{D(null!=t?t:M)},[t,M]);let _=r.useMemo(()=>({theme:M,setTheme:k,forcedTheme:t,resolvedTheme:"system"===M?C:M,themes:l?[...s,"system"]:s,systemTheme:l?C:void 0}),[M,k,t,C,l,s]);return r.createElement(u.Provider,{value:_},r.createElement(p,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:l,enableColorScheme:i,storageKey:c,themes:s,defaultTheme:f,attribute:g,value:w,children:y,attrs:j,nonce:x}),y)},p=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:l,enableSystem:u,enableColorScheme:i,defaultTheme:c,value:s,attrs:d,nonce:f}=e,p="system"===c,v="class"===l?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(l,"',s='setAttribute';"),m=i?(o.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=s?s[e]:e,a=t?e+"|| ''":"'".concat(r,"'"),u="";return i&&n&&!t&&o.includes(e)&&(u+="d.style.colorScheme = '".concat(e,"';")),"class"===l?t||r?u+="c.add(".concat(a,")"):u+="null":r&&(u+="d[s](n,".concat(a,")")),u},g=t?"!function(){".concat(v).concat(h(t),"}()"):u?"!function(){try{".concat(v,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(p,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(h("dark"),"}else{").concat(h("light"),"}}else if(e){").concat(s?"var x=".concat(JSON.stringify(s),";"):"").concat(h(s?"x[e]":"e",!0),"}").concat(p?"":"else{"+h(c,!1,!1)+"}").concat(m,"}catch(e){}}()"):"!function(){try{".concat(v,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(s?"var x=".concat(JSON.stringify(s),";"):"").concat(h(s?"x[e]":"e",!0),"}else{").concat(h(c,!1,!1),";}").concat(m,"}catch(t){}}();");return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:g}})}),v=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},m=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}}]);