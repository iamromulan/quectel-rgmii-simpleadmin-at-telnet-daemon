"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72],{55157:function(e,t,r){r.d(t,{u:function(){return n}});function n(e,[t,r]){return Math.min(r,Math.max(t,e))}},86004:function(e,t,r){r.d(t,{gm:function(){return o}});var n=r(64149);r(20881);var l=n.createContext(void 0);function o(e){let t=n.useContext(l);return e||t||"ltr"}},62072:function(e,t,r){r.d(t,{$G:function(){return eO},B4:function(){return eP},JO:function(){return eD},VY:function(){return eV},Z0:function(){return eF},ZA:function(){return eL},__:function(){return eW},ck:function(){return eH},eT:function(){return eA},fC:function(){return eE},h_:function(){return eN},l_:function(){return e_},u_:function(){return eK},wU:function(){return eB},xz:function(){return eI}});var n=r(64149),l=r(50149),o=r(55157),a=r(64433),i=r(83027),u=r(83954),s=r(74873),d=r(86004),c=r(72832),p=r(57117),f=r(96616),v=r(89105),h=r(95420),m=r(97498),w=r(79442),g=r(54098),x=r(2441),y=r(45306),b=r(61013),S=r(32437),C=r(12230),M=r(32286),j=r(3748),T=r(20881),k=[" ","Enter","ArrowUp","ArrowDown"],R=[" ","Enter"],E="Select",[I,P,D]=(0,i.B)(E),[N,V]=(0,s.b)(E,[D,h.D7]),_=(0,h.D7)(),[L,W]=N(E),[H,A]=N(E),B=e=>{let{__scopeSelect:t,children:r,open:l,defaultOpen:o,onOpenChange:a,value:i,defaultValue:u,onValueChange:s,dir:c,name:p,autoComplete:f,disabled:m,required:w,form:g}=e,x=_(t),[b,S]=n.useState(null),[C,M]=n.useState(null),[j,k]=n.useState(!1),R=(0,d.gm)(c),[E=!1,P]=(0,y.T)({prop:l,defaultProp:o,onChange:a}),[D,N]=(0,y.T)({prop:i,defaultProp:u,onChange:s}),V=n.useRef(null),W=!b||g||!!b.closest("form"),[A,B]=n.useState(new Set),K=Array.from(A).map(e=>e.props.value).join(";");return(0,T.jsx)(h.fC,{...x,children:(0,T.jsxs)(L,{required:w,scope:t,trigger:b,onTriggerChange:S,valueNode:C,onValueNodeChange:M,valueNodeHasChildren:j,onValueNodeHasChildrenChange:k,contentId:(0,v.M)(),value:D,onValueChange:N,open:E,onOpenChange:P,dir:R,triggerPointerDownPosRef:V,disabled:m,children:[(0,T.jsx)(I.Provider,{scope:t,children:(0,T.jsx)(H,{scope:e.__scopeSelect,onNativeOptionAdd:n.useCallback(e=>{B(t=>new Set(t).add(e))},[]),onNativeOptionRemove:n.useCallback(e=>{B(t=>{let r=new Set(t);return r.delete(e),r})},[]),children:r})}),W?(0,T.jsxs)(eT,{"aria-hidden":!0,required:w,tabIndex:-1,name:p,autoComplete:f,value:D,onChange:e=>N(e.target.value),disabled:m,form:g,children:[void 0===D?(0,T.jsx)("option",{value:""}):null,Array.from(A)]},K):null]})})};B.displayName=E;var K="SelectTrigger",O=n.forwardRef((e,t)=>{let{__scopeSelect:r,disabled:l=!1,...o}=e,i=_(r),s=W(K,r),d=s.disabled||l,c=(0,u.e)(t,s.onTriggerChange),p=P(r),f=n.useRef("touch"),[v,m,g]=ek(e=>{let t=p().filter(e=>!e.disabled),r=t.find(e=>e.value===s.value),n=eR(t,e,r);void 0!==n&&s.onValueChange(n.value)}),x=e=>{d||(s.onOpenChange(!0),g()),e&&(s.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return(0,T.jsx)(h.ee,{asChild:!0,...i,children:(0,T.jsx)(w.WV.button,{type:"button",role:"combobox","aria-controls":s.contentId,"aria-expanded":s.open,"aria-required":s.required,"aria-autocomplete":"none",dir:s.dir,"data-state":s.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,"data-placeholder":ej(s.value)?"":void 0,...o,ref:c,onClick:(0,a.M)(o.onClick,e=>{e.currentTarget.focus(),"mouse"!==f.current&&x(e)}),onPointerDown:(0,a.M)(o.onPointerDown,e=>{f.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(x(e),e.preventDefault())}),onKeyDown:(0,a.M)(o.onKeyDown,e=>{let t=""!==v.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||m(e.key),(!t||" "!==e.key)&&k.includes(e.key)&&(x(),e.preventDefault())})})})});O.displayName=K;var F="SelectValue",U=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:n,style:l,children:o,placeholder:a="",...i}=e,s=W(F,r),{onValueNodeHasChildrenChange:d}=s,c=void 0!==o,p=(0,u.e)(t,s.onValueNodeChange);return(0,b.b)(()=>{d(c)},[d,c]),(0,T.jsx)(w.WV.span,{...i,ref:p,style:{pointerEvents:"none"},children:ej(s.value)?(0,T.jsx)(T.Fragment,{children:a}):o})});U.displayName=F;var z=n.forwardRef((e,t)=>{let{__scopeSelect:r,children:n,...l}=e;return(0,T.jsx)(w.WV.span,{"aria-hidden":!0,...l,ref:t,children:n||"▼"})});z.displayName="SelectIcon";var Y=e=>(0,T.jsx)(m.h,{asChild:!0,...e});Y.displayName="SelectPortal";var Z="SelectContent",q=n.forwardRef((e,t)=>{let r=W(Z,e.__scopeSelect),[o,a]=n.useState();return((0,b.b)(()=>{a(new DocumentFragment)},[]),r.open)?(0,T.jsx)(J,{...e,ref:t}):o?l.createPortal((0,T.jsx)(X,{scope:e.__scopeSelect,children:(0,T.jsx)(I.Slot,{scope:e.__scopeSelect,children:(0,T.jsx)("div",{children:e.children})})}),o):null});q.displayName=Z;var[X,G]=N(Z),J=n.forwardRef((e,t)=>{let{__scopeSelect:r,position:l="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:i,onPointerDownOutside:s,side:d,sideOffset:v,align:h,alignOffset:m,arrowPadding:w,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:S,avoidCollisions:C,...k}=e,R=W(Z,r),[E,I]=n.useState(null),[D,N]=n.useState(null),V=(0,u.e)(t,e=>I(e)),[_,L]=n.useState(null),[H,A]=n.useState(null),B=P(r),[K,O]=n.useState(!1),F=n.useRef(!1);n.useEffect(()=>{if(E)return(0,M.Ry)(E)},[E]),(0,p.EW)();let U=n.useCallback(e=>{let[t,...r]=B().map(e=>e.ref.current),[n]=r.slice(-1),l=document.activeElement;for(let r of e)if(r===l||(null==r||r.scrollIntoView({block:"nearest"}),r===t&&D&&(D.scrollTop=0),r===n&&D&&(D.scrollTop=D.scrollHeight),null==r||r.focus(),document.activeElement!==l))return},[B,D]),z=n.useCallback(()=>U([_,E]),[U,_,E]);n.useEffect(()=>{K&&z()},[K,z]);let{onOpenChange:Y,triggerPointerDownPosRef:q}=R;n.useEffect(()=>{if(E){let e={x:0,y:0},t=t=>{var r,n,l,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(l=null===(r=q.current)||void 0===r?void 0:r.x)&&void 0!==l?l:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(n=q.current)||void 0===n?void 0:n.y)&&void 0!==o?o:0))}},r=r=>{e.x<=10&&e.y<=10?r.preventDefault():E.contains(r.target)||Y(!1),document.removeEventListener("pointermove",t),q.current=null};return null!==q.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",r,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",r,{capture:!0})}}},[E,Y,q]),n.useEffect(()=>{let e=()=>Y(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[Y]);let[G,J]=ek(e=>{let t=B().filter(e=>!e.disabled),r=t.find(e=>e.ref.current===document.activeElement),n=eR(t,e,r);n&&setTimeout(()=>n.ref.current.focus())}),ee=n.useCallback((e,t,r)=>{let n=!F.current&&!r;(void 0!==R.value&&R.value===t||n)&&(L(e),n&&(F.current=!0))},[R.value]),et=n.useCallback(()=>null==E?void 0:E.focus(),[E]),er=n.useCallback((e,t,r)=>{let n=!F.current&&!r;(void 0!==R.value&&R.value===t||n)&&A(e)},[R.value]),en="popper"===l?Q:$,el=en===Q?{side:d,sideOffset:v,align:h,alignOffset:m,arrowPadding:w,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:S,avoidCollisions:C}:{};return(0,T.jsx)(X,{scope:r,content:E,viewport:D,onViewportChange:N,itemRefCallback:ee,selectedItem:_,onItemLeave:et,itemTextRefCallback:er,focusSelectedItem:z,selectedItemText:H,position:l,isPositioned:K,searchRef:G,children:(0,T.jsx)(j.Z,{as:g.g7,allowPinchZoom:!0,children:(0,T.jsx)(f.M,{asChild:!0,trapped:R.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,a.M)(o,e=>{var t;null===(t=R.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()}),children:(0,T.jsx)(c.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>R.onOpenChange(!1),children:(0,T.jsx)(en,{role:"listbox",id:R.contentId,"data-state":R.open?"open":"closed",dir:R.dir,onContextMenu:e=>e.preventDefault(),...k,...el,onPlaced:()=>O(!0),ref:V,style:{display:"flex",flexDirection:"column",outline:"none",...k.style},onKeyDown:(0,a.M)(k.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||J(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=B().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let r=e.target,n=t.indexOf(r);t=t.slice(n+1)}setTimeout(()=>U(t)),e.preventDefault()}})})})})})})});J.displayName="SelectContentImpl";var $=n.forwardRef((e,t)=>{let{__scopeSelect:r,onPlaced:l,...a}=e,i=W(Z,r),s=G(Z,r),[d,c]=n.useState(null),[p,f]=n.useState(null),v=(0,u.e)(t,e=>f(e)),h=P(r),m=n.useRef(!1),g=n.useRef(!0),{viewport:x,selectedItem:y,selectedItemText:S,focusSelectedItem:C}=s,M=n.useCallback(()=>{if(i.trigger&&i.valueNode&&d&&p&&x&&y&&S){let e=i.trigger.getBoundingClientRect(),t=p.getBoundingClientRect(),r=i.valueNode.getBoundingClientRect(),n=S.getBoundingClientRect();if("rtl"!==i.dir){let l=n.left-t.left,a=r.left-l,i=e.left-a,u=e.width+i,s=Math.max(u,t.width),c=window.innerWidth-10,p=(0,o.u)(a,[10,Math.max(10,c-s)]);d.style.minWidth=u+"px",d.style.left=p+"px"}else{let l=t.right-n.right,a=window.innerWidth-r.right-l,i=window.innerWidth-e.right-a,u=e.width+i,s=Math.max(u,t.width),c=window.innerWidth-10,p=(0,o.u)(a,[10,Math.max(10,c-s)]);d.style.minWidth=u+"px",d.style.right=p+"px"}let a=h(),u=window.innerHeight-20,s=x.scrollHeight,c=window.getComputedStyle(p),f=parseInt(c.borderTopWidth,10),v=parseInt(c.paddingTop,10),w=parseInt(c.borderBottomWidth,10),g=f+v+s+parseInt(c.paddingBottom,10)+w,b=Math.min(5*y.offsetHeight,g),C=window.getComputedStyle(x),M=parseInt(C.paddingTop,10),j=parseInt(C.paddingBottom,10),T=e.top+e.height/2-10,k=y.offsetHeight/2,R=f+v+(y.offsetTop+k);if(R<=T){let e=a.length>0&&y===a[a.length-1].ref.current;d.style.bottom="0px";let t=p.clientHeight-x.offsetTop-x.offsetHeight;d.style.height=R+Math.max(u-T,k+(e?j:0)+t+w)+"px"}else{let e=a.length>0&&y===a[0].ref.current;d.style.top="0px";let t=Math.max(T,f+x.offsetTop+(e?M:0)+k);d.style.height=t+(g-R)+"px",x.scrollTop=R-T+x.offsetTop}d.style.margin="".concat(10,"px 0"),d.style.minHeight=b+"px",d.style.maxHeight=u+"px",null==l||l(),requestAnimationFrame(()=>m.current=!0)}},[h,i.trigger,i.valueNode,d,p,x,y,S,i.dir,l]);(0,b.b)(()=>M(),[M]);let[j,k]=n.useState();(0,b.b)(()=>{p&&k(window.getComputedStyle(p).zIndex)},[p]);let R=n.useCallback(e=>{e&&!0===g.current&&(M(),null==C||C(),g.current=!1)},[M,C]);return(0,T.jsx)(ee,{scope:r,contentWrapper:d,shouldExpandOnScrollRef:m,onScrollButtonChange:R,children:(0,T.jsx)("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:j},children:(0,T.jsx)(w.WV.div,{...a,ref:v,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});$.displayName="SelectItemAlignedPosition";var Q=n.forwardRef((e,t)=>{let{__scopeSelect:r,align:n="start",collisionPadding:l=10,...o}=e,a=_(r);return(0,T.jsx)(h.VY,{...a,...o,ref:t,align:n,collisionPadding:l,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Q.displayName="SelectPopperPosition";var[ee,et]=N(Z,{}),er="SelectViewport",en=n.forwardRef((e,t)=>{let{__scopeSelect:r,nonce:l,...o}=e,i=G(er,r),s=et(er,r),d=(0,u.e)(t,i.onViewportChange),c=n.useRef(0);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),(0,T.jsx)(I.Slot,{scope:r,children:(0,T.jsx)(w.WV.div,{"data-radix-select-viewport":"",role:"presentation",...o,ref:d,style:{position:"relative",flex:1,overflow:"hidden auto",...o.style},onScroll:(0,a.M)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:r,shouldExpandOnScrollRef:n}=s;if((null==n?void 0:n.current)&&r){let e=Math.abs(c.current-t.scrollTop);if(e>0){let n=window.innerHeight-20,l=Math.max(parseFloat(r.style.minHeight),parseFloat(r.style.height));if(l<n){let o=l+e,a=Math.min(n,o),i=o-a;r.style.height=a+"px","0px"===r.style.bottom&&(t.scrollTop=i>0?i:0,r.style.justifyContent="flex-end")}}}c.current=t.scrollTop})})})]})});en.displayName=er;var el="SelectGroup",[eo,ea]=N(el),ei=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=(0,v.M)();return(0,T.jsx)(eo,{scope:r,id:l,children:(0,T.jsx)(w.WV.div,{role:"group","aria-labelledby":l,...n,ref:t})})});ei.displayName=el;var eu="SelectLabel",es=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=ea(eu,r);return(0,T.jsx)(w.WV.div,{id:l.id,...n,ref:t})});es.displayName=eu;var ed="SelectItem",[ec,ep]=N(ed),ef=n.forwardRef((e,t)=>{let{__scopeSelect:r,value:l,disabled:o=!1,textValue:i,...s}=e,d=W(ed,r),c=G(ed,r),p=d.value===l,[f,h]=n.useState(null!=i?i:""),[m,g]=n.useState(!1),x=(0,u.e)(t,e=>{var t;return null===(t=c.itemRefCallback)||void 0===t?void 0:t.call(c,e,l,o)}),y=(0,v.M)(),b=n.useRef("touch"),S=()=>{o||(d.onValueChange(l),d.onOpenChange(!1))};if(""===l)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,T.jsx)(ec,{scope:r,value:l,disabled:o,textId:y,isSelected:p,onItemTextChange:n.useCallback(e=>{h(t=>{var r;return t||(null!==(r=null==e?void 0:e.textContent)&&void 0!==r?r:"").trim()})},[]),children:(0,T.jsx)(I.ItemSlot,{scope:r,value:l,disabled:o,textValue:f,children:(0,T.jsx)(w.WV.div,{role:"option","aria-labelledby":y,"data-highlighted":m?"":void 0,"aria-selected":p&&m,"data-state":p?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...s,ref:x,onFocus:(0,a.M)(s.onFocus,()=>g(!0)),onBlur:(0,a.M)(s.onBlur,()=>g(!1)),onClick:(0,a.M)(s.onClick,()=>{"mouse"!==b.current&&S()}),onPointerUp:(0,a.M)(s.onPointerUp,()=>{"mouse"===b.current&&S()}),onPointerDown:(0,a.M)(s.onPointerDown,e=>{b.current=e.pointerType}),onPointerMove:(0,a.M)(s.onPointerMove,e=>{if(b.current=e.pointerType,o){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}else"mouse"===b.current&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,a.M)(s.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}}),onKeyDown:(0,a.M)(s.onKeyDown,e=>{var t;(null===(t=c.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(R.includes(e.key)&&S()," "===e.key&&e.preventDefault())})})})})});ef.displayName=ed;var ev="SelectItemText",eh=n.forwardRef((e,t)=>{let{__scopeSelect:r,className:o,style:a,...i}=e,s=W(ev,r),d=G(ev,r),c=ep(ev,r),p=A(ev,r),[f,v]=n.useState(null),h=(0,u.e)(t,e=>v(e),c.onItemTextChange,e=>{var t;return null===(t=d.itemTextRefCallback)||void 0===t?void 0:t.call(d,e,c.value,c.disabled)}),m=null==f?void 0:f.textContent,g=n.useMemo(()=>(0,T.jsx)("option",{value:c.value,disabled:c.disabled,children:m},c.value),[c.disabled,c.value,m]),{onNativeOptionAdd:x,onNativeOptionRemove:y}=p;return(0,b.b)(()=>(x(g),()=>y(g)),[x,y,g]),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(w.WV.span,{id:c.textId,...i,ref:h}),c.isSelected&&s.valueNode&&!s.valueNodeHasChildren?l.createPortal(i.children,s.valueNode):null]})});eh.displayName=ev;var em="SelectItemIndicator",ew=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return ep(em,r).isSelected?(0,T.jsx)(w.WV.span,{"aria-hidden":!0,...n,ref:t}):null});ew.displayName=em;var eg="SelectScrollUpButton",ex=n.forwardRef((e,t)=>{let r=G(eg,e.__scopeSelect),l=et(eg,e.__scopeSelect),[o,a]=n.useState(!1),i=(0,u.e)(t,l.onScrollButtonChange);return(0,b.b)(()=>{if(r.viewport&&r.isPositioned){let e=function(){a(t.scrollTop>0)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,T.jsx)(eS,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null});ex.displayName=eg;var ey="SelectScrollDownButton",eb=n.forwardRef((e,t)=>{let r=G(ey,e.__scopeSelect),l=et(ey,e.__scopeSelect),[o,a]=n.useState(!1),i=(0,u.e)(t,l.onScrollButtonChange);return(0,b.b)(()=>{if(r.viewport&&r.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight;a(Math.ceil(t.scrollTop)<e)},t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[r.viewport,r.isPositioned]),o?(0,T.jsx)(eS,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null});eb.displayName=ey;var eS=n.forwardRef((e,t)=>{let{__scopeSelect:r,onAutoScroll:l,...o}=e,i=G("SelectScrollButton",r),u=n.useRef(null),s=P(r),d=n.useCallback(()=>{null!==u.current&&(window.clearInterval(u.current),u.current=null)},[]);return n.useEffect(()=>()=>d(),[d]),(0,b.b)(()=>{var e;let t=s().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[s]),(0,T.jsx)(w.WV.div,{"aria-hidden":!0,...o,ref:t,style:{flexShrink:0,...o.style},onPointerDown:(0,a.M)(o.onPointerDown,()=>{null===u.current&&(u.current=window.setInterval(l,50))}),onPointerMove:(0,a.M)(o.onPointerMove,()=>{var e;null===(e=i.onItemLeave)||void 0===e||e.call(i),null===u.current&&(u.current=window.setInterval(l,50))}),onPointerLeave:(0,a.M)(o.onPointerLeave,()=>{d()})})}),eC=n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e;return(0,T.jsx)(w.WV.div,{"aria-hidden":!0,...n,ref:t})});eC.displayName="SelectSeparator";var eM="SelectArrow";function ej(e){return""===e||void 0===e}n.forwardRef((e,t)=>{let{__scopeSelect:r,...n}=e,l=_(r),o=W(eM,r),a=G(eM,r);return o.open&&"popper"===a.position?(0,T.jsx)(h.Eh,{...l,...n,ref:t}):null}).displayName=eM;var eT=n.forwardRef((e,t)=>{let{value:r,...l}=e,o=n.useRef(null),a=(0,u.e)(t,o),i=(0,S.D)(r);return n.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(i!==r&&t){let n=new Event("change",{bubbles:!0});t.call(e,r),e.dispatchEvent(n)}},[i,r]),(0,T.jsx)(C.T,{asChild:!0,children:(0,T.jsx)("select",{...l,ref:a,defaultValue:r})})});function ek(e){let t=(0,x.W)(e),r=n.useRef(""),l=n.useRef(0),o=n.useCallback(e=>{let n=r.current+e;t(n),function e(t){r.current=t,window.clearTimeout(l.current),""!==t&&(l.current=window.setTimeout(()=>e(""),1e3))}(n)},[t]),a=n.useCallback(()=>{r.current="",window.clearTimeout(l.current)},[]);return n.useEffect(()=>()=>window.clearTimeout(l.current),[]),[r,o,a]}function eR(e,t,r){var n;let l=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=(n=Math.max(r?e.indexOf(r):-1,0),e.map((t,r)=>e[(n+r)%e.length]));1===l.length&&(o=o.filter(e=>e!==r));let a=o.find(e=>e.textValue.toLowerCase().startsWith(l.toLowerCase()));return a!==r?a:void 0}eT.displayName="BubbleSelect";var eE=B,eI=O,eP=U,eD=z,eN=Y,eV=q,e_=en,eL=ei,eW=es,eH=ef,eA=eh,eB=ew,eK=ex,eO=eb,eF=eC},32437:function(e,t,r){r.d(t,{D:function(){return l}});var n=r(64149);function l(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}},12230:function(e,t,r){r.d(t,{T:function(){return a},f:function(){return i}});var n=r(64149),l=r(79442),o=r(20881),a=n.forwardRef((e,t)=>(0,o.jsx)(l.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));a.displayName="VisuallyHidden";var i=a}}]);