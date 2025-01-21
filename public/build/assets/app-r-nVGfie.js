const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/About-Dt4D6_2Y.js","assets/relume-CUjVMWgW.js","assets/vendor-CzJBlmwO.js","assets/MainLayout-BeI7hyHs.js","assets/index-CKfJ9zyE.js","assets/Dropdown-BM3nYJ0S.js","assets/transition-DERcJ1Y2.js","assets/trophy-BKXr4Ixd.js","assets/createLucideIcon-g5LQwfDy.js","assets/users-CV5Xop1O.js","assets/target-BfqhL9Ft.js","assets/calendar-z79XGEsy.js","assets/chevron-right-Ds5oO-HI.js","assets/clsx-B-dksMZM.js","assets/ConfirmPassword-cj37Ncgd.js","assets/TextInput-DkZCRtRm.js","assets/InputLabel-eDAHkoua.js","assets/PrimaryButton-C58-Yig-.js","assets/GuestLayout-CLMNZJy5.js","assets/ForgotPassword-CRR4Vb_M.js","assets/Login-BXzaEBgo.js","assets/Register-ClJa4T8e.js","assets/check-9SzIVHNv.js","assets/Register.old-nnXJuGBM.js","assets/ResetPassword-DridTtr7.js","assets/VerifyEmail-D2hGBtVr.js","assets/Contact-743NItkl.js","assets/Cta3-vzZxpaBd.js","assets/Courses-CIIem8Ai.js","assets/dollar-sign-D70NgPzL.js","assets/chevron-left-BULpCqE9.js","assets/Dashboard-CQnKwH1_.js","assets/index-B9SlFqVK.js","assets/Registrations-B4ykNtGY.js","assets/map-pin-D_0YQdIF.js","assets/Faq-BcsFkME5.js","assets/Home-CeGQr4Fl.js","assets/index-0ywiU79O.js","assets/Membership-DRsNSIph.js","assets/Layout18-BT1oIqnD.js","assets/Apply-Bso266pt.js","assets/AuthenticatedLayout-D2yFKVuv.js","assets/Success-DHoAI0Gp.js","assets/circle-check-big-CageraSJ.js","assets/Index-CBSIFEpO.js","assets/debounce-DQAb2SST.js","assets/Index-DvB2Xm2x.css","assets/Show-Cf_LkKV2.js","assets/x-C_H57ah-.js","assets/Show-B9eh9OLo.css","assets/ProductDetail-CwlYl9eP.js","assets/star-DkKUAYBK.js","assets/shopping-cart-CWatcDhF.js","assets/chevron-down-CZjHs5H3.js","assets/Edit-jkHWUXrM.js","assets/DeleteUserForm-Dl-Y7RCp.js","assets/UpdatePasswordForm-DUVPkbvd.js","assets/UpdateProfileInformationForm-DW7tCe8N.js","assets/Store-CYkT9yuw.js","assets/TournamentDetail-HasB2JEE.js","assets/TournamentPage-BQ7XP2kV.js","assets/Layout10-Dfz8RuZn.js","assets/Tournaments-AvvO4wkp.js","assets/Index-CQ98gv2b.js","assets/Welcome-XMC9z2Ez.js"])))=>i.map(i=>d[i]);
import{e as F,f as z,a as u,V as q,_ as d}from"./vendor-CzJBlmwO.js";import{j as E}from"./relume-CUjVMWgW.js";window.axios=F;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";async function H(e,t){for(const r of Array.isArray(e)?e:[e]){const a=t[r];if(!(typeof a>"u"))return typeof a=="function"?a():a}throw new Error(`Page not found: ${e}`)}var D={},$;function U(){if($)return D;$=1;var e=z();return D.createRoot=e.createRoot,D.hydrateRoot=e.hydrateRoot,D}var W=U();let B={data:""},G=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||B,X=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Y=/\/\*[^]*?\*\/|  +/g,C=/\n+/g,y=(e,t)=>{let r="",a="",s="";for(let o in e){let n=e[o];o[0]=="@"?o[1]=="i"?r=o+" "+n+";":a+=o[1]=="f"?y(n,o):o+"{"+y(n,o[1]=="k"?"":t)+"}":typeof n=="object"?a+=y(n,t?t.replace(/([^,])+/g,i=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):o):n!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=y.p?y.p(o,n):o+":"+n+";")}return r+(t&&s?t+"{"+s+"}":s)+a},h={},k=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+k(e[r]);return t}return e},Z=(e,t,r,a,s)=>{let o=k(e),n=h[o]||(h[o]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(o));if(!h[n]){let l=o!==e?e:(c=>{let p,_,f=[{}];for(;p=X.exec(c.replace(Y,""));)p[4]?f.shift():p[3]?(_=p[3].replace(C," ").trim(),f.unshift(f[0][_]=f[0][_]||{})):f[0][p[1]]=p[2].replace(C," ").trim();return f[0]})(e);h[n]=y(s?{["@keyframes "+n]:l}:l,r?"":"."+n)}let i=r&&h.g?h.g:null;return r&&(h.g=h[n]),((l,c,p,_)=>{_?c.data=c.data.replace(_,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(h[n],t,a,i),n},J=(e,t,r)=>e.reduce((a,s,o)=>{let n=t[o];if(n&&n.call){let i=n(r),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":y(i,""):i===!1?"":i}return a+s+(n??"")},"");function I(e){let t=this||{},r=e.call?e(t.p):e;return Z(r.unshift?r.raw?J(r,[].slice.call(arguments,1),t.p):r.reduce((a,s)=>Object.assign(a,s&&s.call?s(t.p):s),{}):r,G(t.target),t.g,t.o,t.k)}let N,L,V;I.bind({g:1});let v=I.bind({k:1});function K(e,t,r,a){y.p=t,N=e,L=r,V=a}function x(e,t){let r=this||{};return function(){let a=arguments;function s(o,n){let i=Object.assign({},o),l=i.className||s.className;r.p=Object.assign({theme:L&&L()},i),r.o=/ *go\d+/.test(l),i.className=I.apply(r,a)+(l?" "+l:"");let c=e;return e[0]&&(c=i.as||e,delete i.as),V&&c[0]&&V(i),N(c,i)}return s}}var Q=e=>typeof e=="function",O=(e,t)=>Q(e)?e(t):e,ee=(()=>{let e=0;return()=>(++e).toString()})(),M=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),te=20,S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,te)};case 1:return{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:r}=t;return S(e,{type:e.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(o=>o.id===a||a===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},w=[],R={toasts:[],pausedAt:void 0},b=e=>{R=S(R,e),w.forEach(t=>{t(R)})},re={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},oe=(e={})=>{let[t,r]=u.useState(R);u.useEffect(()=>(w.push(r),()=>{let s=w.indexOf(r);s>-1&&w.splice(s,1)}),[t]);let a=t.toasts.map(s=>{var o,n,i;return{...e,...e[s.type],...s,removeDelay:s.removeDelay||((o=e[s.type])==null?void 0:o.removeDelay)||(e==null?void 0:e.removeDelay),duration:s.duration||((n=e[s.type])==null?void 0:n.duration)||(e==null?void 0:e.duration)||re[s.type],style:{...e.style,...(i=e[s.type])==null?void 0:i.style,...s.style}}});return{...t,toasts:a}},ae=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||ee()}),j=e=>(t,r)=>{let a=ae(t,e,r);return b({type:2,toast:a}),a.id},m=(e,t)=>j("blank")(e,t);m.error=j("error");m.success=j("success");m.loading=j("loading");m.custom=j("custom");m.dismiss=e=>{b({type:3,toastId:e})};m.remove=e=>b({type:4,toastId:e});m.promise=(e,t,r)=>{let a=m.loading(t.loading,{...r,...r==null?void 0:r.loading});return typeof e=="function"&&(e=e()),e.then(s=>{let o=t.success?O(t.success,s):void 0;return o?m.success(o,{id:a,...r,...r==null?void 0:r.success}):m.dismiss(a),s}).catch(s=>{let o=t.error?O(t.error,s):void 0;o?m.error(o,{id:a,...r,...r==null?void 0:r.error}):m.dismiss(a)}),e};var se=(e,t)=>{b({type:1,toast:{id:e,height:t}})},ie=()=>{b({type:5,time:Date.now()})},P=new Map,ne=1e3,le=(e,t=ne)=>{if(P.has(e))return;let r=setTimeout(()=>{P.delete(e),b({type:4,toastId:e})},t);P.set(e,r)},de=e=>{let{toasts:t,pausedAt:r}=oe(e);u.useEffect(()=>{if(r)return;let o=Date.now(),n=t.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(o-i.createdAt);if(l<0){i.visible&&m.dismiss(i.id);return}return setTimeout(()=>m.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[t,r]);let a=u.useCallback(()=>{r&&b({type:6,time:Date.now()})},[r]),s=u.useCallback((o,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:c}=n||{},p=t.filter(g=>(g.position||c)===(o.position||c)&&g.height),_=p.findIndex(g=>g.id===o.id),f=p.filter((g,T)=>T<_&&g.visible).length;return p.filter(g=>g.visible).slice(...i?[f+1]:[0,f]).reduce((g,T)=>g+(T.height||0)+l,0)},[t]);return u.useEffect(()=>{t.forEach(o=>{if(o.dismissed)le(o.id,o.removeDelay);else{let n=P.get(o.id);n&&(clearTimeout(n),P.delete(o.id))}})},[t]),{toasts:t,handlers:{updateHeight:se,startPause:ie,endPause:a,calculateOffset:s}}},ce=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ue=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,pe=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,me=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ce} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ue} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${pe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,fe=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,_e=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${fe} 1s linear infinite;
`,ge=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,he=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ve=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ge} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${he} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ye=x("div")`
  position: absolute;
`,xe=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,be=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ee=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${be} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Pe=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return t!==void 0?typeof t=="string"?u.createElement(Ee,null,t):t:r==="blank"?null:u.createElement(xe,null,u.createElement(_e,{...a}),r!=="loading"&&u.createElement(ye,null,r==="error"?u.createElement(me,{...a}):u.createElement(ve,{...a})))},je=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,De=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ae="0%{opacity:0;} 100%{opacity:1;}",we="0%{opacity:1;} 100%{opacity:0;}",Re=x("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Oe=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ie=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=M()?[Ae,we]:[je(r),De(r)];return{animation:t?`${v(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Te=u.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?Ie(e.position||t||"top-center",e.visible):{opacity:0},o=u.createElement(Pe,{toast:e}),n=u.createElement(Oe,{...e.ariaProps},O(e.message,e));return u.createElement(Re,{className:e.className,style:{...s,...r,...e.style}},typeof a=="function"?a({icon:o,message:n}):u.createElement(u.Fragment,null,o,n))});K(u.createElement);var Le=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let o=u.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;a(e,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return u.createElement("div",{ref:o,className:t,style:r},s)},Ve=(e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:M()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...s}},$e=I`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,A=16,Ce=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,containerStyle:o,containerClassName:n})=>{let{toasts:i,handlers:l}=de(r);return u.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:A,left:A,right:A,bottom:A,pointerEvents:"none",...o},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(c=>{let p=c.position||t,_=l.calculateOffset(c,{reverseOrder:e,gutter:a,defaultPosition:t}),f=Ve(p,_);return u.createElement(Le,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?$e:"",style:f},c.type==="custom"?O(c.message,c):s?s(c):u.createElement(Te,{toast:c,position:p}))}))};const ke="ChauchauGolf";q({title:e=>`${e} - ${ke}`,resolve:e=>H(`./Pages/${e}.jsx`,Object.assign({"./Pages/About.jsx":()=>d(()=>import("./About-Dt4D6_2Y.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])),"./Pages/Auth/ConfirmPassword.jsx":()=>d(()=>import("./ConfirmPassword-cj37Ncgd.js"),__vite__mapDeps([14,1,2,15,16,17,18])),"./Pages/Auth/ForgotPassword.jsx":()=>d(()=>import("./ForgotPassword-CRR4Vb_M.js"),__vite__mapDeps([19,1,2,15,17,18])),"./Pages/Auth/Login.jsx":()=>d(()=>import("./Login-BXzaEBgo.js"),__vite__mapDeps([20,1,2,15,16,17,18])),"./Pages/Auth/Register.jsx":()=>d(()=>import("./Register-ClJa4T8e.js"),__vite__mapDeps([21,1,2,18,15,16,8,22])),"./Pages/Auth/Register.old.jsx":()=>d(()=>import("./Register.old-nnXJuGBM.js"),__vite__mapDeps([23,1,2,18,15,16,17])),"./Pages/Auth/ResetPassword.jsx":()=>d(()=>import("./ResetPassword-DridTtr7.js"),__vite__mapDeps([24,1,2,15,16,17,18])),"./Pages/Auth/VerifyEmail.jsx":()=>d(()=>import("./VerifyEmail-D2hGBtVr.js"),__vite__mapDeps([25,1,2,17,18])),"./Pages/Contact.jsx":()=>d(()=>import("./Contact-743NItkl.js"),__vite__mapDeps([26,1,2,3,4,5,6,27])),"./Pages/Courses.jsx":()=>d(()=>import("./Courses-CIIem8Ai.js"),__vite__mapDeps([28,1,2,3,4,5,6,12,8,7,9,29,11,30,22])),"./Pages/Dashboard.jsx":()=>d(()=>import("./Dashboard-CQnKwH1_.js"),__vite__mapDeps([31,1,2,32,8,11,7,13])),"./Pages/Dashboard/Registrations.jsx":()=>d(()=>import("./Registrations-B4ykNtGY.js"),__vite__mapDeps([33,1,2,32,8,11,7,13,34,29])),"./Pages/Faq.jsx":()=>d(()=>import("./Faq-BcsFkME5.js"),__vite__mapDeps([35,1,2,3,4,5,6])),"./Pages/Home.jsx":()=>d(()=>import("./Home-CeGQr4Fl.js"),__vite__mapDeps([36,1,2,3,4,5,6,37,8,7,12,10,9,27])),"./Pages/Membership.jsx":()=>d(()=>import("./Membership-DRsNSIph.js"),__vite__mapDeps([38,1,2,3,4,5,6,39,22,8])),"./Pages/Membership/Apply.jsx":()=>d(()=>import("./Apply-Bso266pt.js"),__vite__mapDeps([40,1,2,41,5,6,15,16,17,39,4,22,8])),"./Pages/Membership/Success.jsx":()=>d(()=>import("./Success-DHoAI0Gp.js"),__vite__mapDeps([42,1,2,43,8])),"./Pages/PlayDates/Index.jsx":()=>d(()=>import("./Index-CBSIFEpO.js"),__vite__mapDeps([44,1,2,3,4,5,6,45,8,11,34,29,9,30,12,46])),"./Pages/PlayDates/Show.jsx":()=>d(()=>import("./Show-Cf_LkKV2.js"),__vite__mapDeps([47,1,2,3,4,5,6,34,8,11,9,43,29,48,49])),"./Pages/ProductDetail.jsx":()=>d(()=>import("./ProductDetail-CwlYl9eP.js"),__vite__mapDeps([50,1,2,3,4,5,6,51,8,22,52,53])),"./Pages/Profile/Edit.jsx":()=>d(()=>import("./Edit-jkHWUXrM.js"),__vite__mapDeps([54,1,2,41,5,6,55,15,16,56,17,57])),"./Pages/Profile/Partials/DeleteUserForm.jsx":()=>d(()=>import("./DeleteUserForm-Dl-Y7RCp.js"),__vite__mapDeps([55,1,2,15,16,6])),"./Pages/Profile/Partials/UpdatePasswordForm.jsx":()=>d(()=>import("./UpdatePasswordForm-DUVPkbvd.js"),__vite__mapDeps([56,1,2,15,16,17,6])),"./Pages/Profile/Partials/UpdateProfileInformationForm.jsx":()=>d(()=>import("./UpdateProfileInformationForm-DW7tCe8N.js"),__vite__mapDeps([57,1,2,15,16,17,6])),"./Pages/Store.jsx":()=>d(()=>import("./Store-CYkT9yuw.js"),__vite__mapDeps([58,1,2,3,4,5,6,52,8,51,12])),"./Pages/TournamentDetail.jsx":()=>d(()=>import("./TournamentDetail-HasB2JEE.js"),__vite__mapDeps([59,1,2,3,4,5,6,37,11,8,34,9,48])),"./Pages/TournamentPage.jsx":()=>d(()=>import("./TournamentPage-BQ7XP2kV.js"),__vite__mapDeps([60,1,2,61,4,12,8,48,51,7,22,53,37])),"./Pages/Tournaments.jsx":()=>d(()=>import("./Tournaments-AvvO4wkp.js"),__vite__mapDeps([62,1,2,3,4,5,6,45,8,30,12])),"./Pages/Tournaments/Index.jsx":()=>d(()=>import("./Index-CQ98gv2b.js"),__vite__mapDeps([63,1,2,61,4,12,8])),"./Pages/Welcome.jsx":()=>d(()=>import("./Welcome-XMC9z2Ez.js"),__vite__mapDeps([64,1,2]))})),setup({el:e,App:t,props:r}){W.createRoot(e).render(E.jsx(u.StrictMode,{children:E.jsxs(u.Suspense,{fallback:E.jsx("div",{className:"flex items-center justify-center min-h-screen",children:E.jsx("div",{className:"w-16 h-16 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"})}),children:[E.jsx(Ce,{position:"top-right"}),E.jsx(t,{...r})]})}))},progress:{color:"#4B5563"}});export{m as c};
