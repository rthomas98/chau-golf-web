const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mapbox-gl-RBPiuI3r.js","assets/vendor-CzJBlmwO.js"])))=>i.map(i=>d[i]);
import{j as e,m as h,W as m}from"./relume-CUjVMWgW.js";import{a as x,_ as w,W as N,Y as y,g as u}from"./vendor-CzJBlmwO.js";import{M as k}from"./MainLayout-BeI7hyHs.js";import{u as _}from"./index-0ywiU79O.js";import{C as R}from"./calendar-z79XGEsy.js";import{M as S,C}from"./map-pin-D_0YQdIF.js";import{U as M}from"./users-CV5Xop1O.js";import{X as D}from"./x-C_H57ah-.js";import"./index-CKfJ9zyE.js";import"./Dropdown-BM3nYJ0S.js";import"./transition-DERcJ1Y2.js";import"./createLucideIcon-g5LQwfDy.js";const L=()=>w(()=>import("./mapbox-gl-RBPiuI3r.js").then(s=>s.m),__vite__mapDeps([0,1])).then(s=>{const i=s.default;return i.accessToken="pk.eyJ1IjoiZW1wdWxzMyIsImEiOiJjbGI3eWo2enYwZzZuM3pxaXpuejh2MmdjIn0.Btjt2-Wn6xRnjzf4ZgMkPQ",i}),I=()=>e.jsx("div",{className:"w-full h-[400px] bg-gray-100 animate-pulse flex items-center justify-center",children:e.jsx("div",{className:"text-gray-500",children:"Loading map..."})}),T=({location:s,name:i})=>{const n=x.useRef(null),r=x.useRef(null),c=x.useRef(null),[t,d]=_({triggerOnce:!0,threshold:.1});return x.useEffect(()=>{if(!s||!d)return;let p=!0;return(async()=>{var l;try{const a=await L(),f=await(await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(s)}.json?access_token=${a.accessToken}`)).json();if(!p||!((l=f.features)!=null&&l.length))return;const[v,b]=f.features[0].center;if(r.current)return;r.current=new a.Map({container:n.current,style:"mapbox://styles/mapbox/streets-v12",center:[v,b],zoom:13,attributionControl:!1,preserveDrawingBuffer:!1,antialias:!1,trackResize:!0}),r.current.addControl(new a.NavigationControl,"top-right");const o=document.createElement("div");o.className="marker",o.style.backgroundImage="url(https://docs.mapbox.com/mapbox-gl-js/assets/pin.svg)",o.style.width="32px",o.style.height="32px",o.style.backgroundSize="cover",c.current=new a.Marker(o).setLngLat([v,b]).setPopup(new a.Popup({offset:25}).setHTML(`<h3 class="font-semibold">${i}</h3><p>${s}</p>`)).addTo(r.current)}catch(a){console.error("Error initializing map:",a)}})(),()=>{p=!1,r.current&&(r.current.remove(),r.current=null)}},[s,i,d]),e.jsxs("div",{ref:t,children:[e.jsx(x.Suspense,{fallback:e.jsx(I,{}),children:e.jsx("div",{ref:n,className:"w-full h-[400px] rounded-lg shadow-lg"})}),e.jsxs("div",{className:"absolute bottom-4 left-4 z-10 rounded bg-white/90 px-4 py-2 text-sm backdrop-blur",children:[e.jsx("p",{className:"font-medium text-darkerviridiangreen",children:i}),e.jsx("p",{className:"text-darkviridiangreen",children:s})]})]})},z=({isOpen:s,onClose:i,tournament:n})=>{const r=N({name:"",email:"",phone:""}),c=t=>{t.preventDefault(),r.post(route("tournament.register.guest",n.id),{onSuccess:()=>i()})};return s?e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[e.jsx("div",{className:"fixed inset-0 bg-black/50",onClick:i}),e.jsxs("div",{className:"relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl",children:[e.jsx("button",{onClick:i,className:"absolute right-4 top-4 text-gray-400 hover:text-gray-600",children:e.jsx(D,{className:"h-5 w-5"})}),e.jsx("h3",{className:"mb-4 text-lg font-medium text-darkerviridiangreen",children:"Register as Guest"}),e.jsxs("form",{onSubmit:c,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-darkviridiangreen",children:"Full Name"}),e.jsx("input",{type:"text",id:"name",value:r.data.name,onChange:t=>r.setData("name",t.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chaugreen focus:ring-chaugreen sm:text-sm",required:!0}),r.errors.name&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:r.errors.name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-darkviridiangreen",children:"Email"}),e.jsx("input",{type:"email",id:"email",value:r.data.email,onChange:t=>r.setData("email",t.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chaugreen focus:ring-chaugreen sm:text-sm",required:!0}),r.errors.email&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:r.errors.email})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-darkviridiangreen",children:"Phone"}),e.jsx("input",{type:"tel",id:"phone",value:r.data.phone,onChange:t=>r.setData("phone",t.target.value),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chaugreen focus:ring-chaugreen sm:text-sm",required:!0}),r.errors.phone&&e.jsx("p",{className:"mt-1 text-sm text-red-600",children:r.errors.phone})]}),e.jsx("div",{className:"mt-6",children:e.jsx(m,{type:"submit",variant:"primary",className:"w-full bg-chaugreen hover:bg-chaugreen/90 rounded-lg",disabled:r.processing,children:r.processing?"Registering...":"Complete Registration"})})]})]})]}):null},Y=({tournament:s,auth:i,hasMembership:n})=>{var g;const[r,c]=x.useState(!1),t=i!=null&&i.user?(g=s.participants)==null?void 0:g.some(l=>l.id===i.user.id):!1,d=N(),p=()=>{d.post(route("tournament.register",s.id),{onSuccess:()=>{}})};return e.jsxs(k,{children:[e.jsx(y,{title:s.name}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"absolute inset-0 h-[60vh] overflow-hidden",children:[s.image_url?e.jsx("img",{src:s.image_url,alt:s.name,className:"h-full w-full object-cover"}):e.jsx("div",{className:"h-full w-full bg-gray-200"}),e.jsx("div",{className:"absolute inset-0 bg-black/50"})]}),e.jsx("div",{className:"relative px-[5%] pt-32 pb-20 md:pt-40 md:pb-24",children:e.jsx("div",{className:"container mx-auto",children:e.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"max-w-4xl",children:[e.jsxs("div",{className:"mb-6 flex flex-wrap gap-3",children:[e.jsx("span",{className:"rounded-full bg-chaugreen/20 px-3 py-1 text-sm font-medium text-chaugreen",children:s.status==="published"?"Upcoming":"In Progress"}),e.jsxs("span",{className:"rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white",children:["$",s.entry_fee]})]}),e.jsx("h1",{className:"mb-6 text-4xl font-bold text-white md:text-6xl",children:s.name}),e.jsx("p",{className:"mb-8 text-lg text-white/80 md:text-xl",children:s.description}),e.jsxs("div",{className:"grid gap-6 text-white/80 sm:grid-cols-2 md:grid-cols-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(R,{className:"h-5 w-5"}),e.jsxs("span",{children:[new Date(s.start_date).toLocaleDateString()," - ",new Date(s.end_date).toLocaleDateString()]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(S,{className:"h-5 w-5"}),e.jsx("span",{children:s.location})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(M,{className:"h-5 w-5"}),e.jsxs("span",{children:[s.spots_remaining," spots remaining"]})]})]}),e.jsx("div",{className:"mt-8",children:e.jsxs("button",{onClick:()=>{navigator.share({title:s.name,text:s.description,url:window.location.href}).catch(()=>{navigator.clipboard.writeText(window.location.href),alert("Link copied to clipboard!")})},className:"inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/30",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),e.jsx("polyline",{points:"16 6 12 2 8 6"}),e.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]}),"Share Tournament"]})})]})})})]}),e.jsx("div",{className:"px-[5%] py-16 md:py-24",children:e.jsx("div",{className:"container mx-auto",children:e.jsxs("div",{className:"grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16",children:[e.jsxs("div",{className:"space-y-12",children:[e.jsxs(h.section,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-bold text-darkerviridiangreen",children:"Tournament Format & Rules"}),e.jsxs("div",{className:"prose max-w-none text-darkviridiangreen",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Format"}),e.jsx("p",{children:s.format})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Rules"}),e.jsx("ul",{className:"list-disc pl-5 space-y-2",children:Object.entries(s.rules||{}).map(([l,a])=>e.jsx("li",{children:a},l))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Prizes"}),e.jsx("ul",{className:"list-disc pl-5 space-y-2",children:Object.entries(s.prizes||{}).map(([l,a])=>e.jsx("li",{children:`${l}: ${a}`},l))})]})]})]}),e.jsxs(h.section,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-bold text-darkerviridiangreen",children:"Tournament Location"}),e.jsx(T,{location:s.location,name:s.name})]}),e.jsxs(h.section,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},className:"space-y-6",children:[e.jsx("h2",{className:"text-3xl font-bold text-darkerviridiangreen",children:"Tournament Schedule"}),e.jsx("div",{className:"space-y-4",children:Object.entries(s.schedule||{}).map(([l,a],j)=>e.jsxs("div",{className:"flex items-start gap-4 rounded-lg border border-chaugreen/20 p-4",children:[e.jsx(C,{className:"mt-1 h-5 w-5 text-chaugreen"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-darkerviridiangreen",children:l}),e.jsx("p",{className:"text-darkviridiangreen",children:a})]})]},j))})]})]}),e.jsx(h.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5},className:"lg:sticky lg:top-8",children:e.jsxs("div",{className:"rounded-lg border border-chaugreen/20 bg-white p-6 shadow-lg",children:[e.jsxs("div",{className:"mb-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("span",{className:"text-sm text-darkviridiangreen",children:"Registration Status"}),e.jsx("span",{className:`rounded-full px-3 py-1 text-sm font-medium ${s.spots_remaining===0?"bg-red-100 text-red-800":s.spots_remaining<=5?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:s.spots_remaining===0?"Sold Out":s.spots_remaining<=5?"Almost Full":"Open"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-darkviridiangreen",children:"Entry Fee"}),e.jsxs("div",{className:"text-right",children:[e.jsxs("span",{className:"text-2xl font-bold text-darkerviridiangreen",children:["$",n&&s.member_price?s.member_price:s.entry_fee]}),n&&s.member_price&&e.jsx("div",{className:"text-sm text-green-600",children:"Member Price"}),!n&&s.member_price&&e.jsxs("div",{className:"text-sm text-darkviridiangreen",children:["Members save $",(s.entry_fee-s.member_price).toFixed(2)]})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-darkviridiangreen",children:"Spots Remaining"}),e.jsx("span",{className:"font-medium text-darkerviridiangreen",children:s.spots_remaining})]}),s.early_bird_offer&&e.jsx("div",{className:"rounded-lg bg-chaugreen/10 p-3",children:e.jsxs("p",{className:"text-sm font-medium text-chaugreen",children:["Early Bird Offer: ",s.early_bird_offer]})})]}),i!=null&&i.user?t?e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"rounded-lg bg-green-50 p-3",children:e.jsx("p",{className:"text-sm font-medium text-green-800",children:"You're registered for this tournament!"})}),e.jsx(m,{variant:"secondary",className:"w-full",href:route("dashboard"),children:"View Registration Details"})]}):s.spots_remaining>0?e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{variant:"primary",className:"w-full",onClick:p,disabled:d.processing,children:d.processing?"Registering...":"Register Now"}),!n&&e.jsx(u,{href:route("membership.apply"),className:"block text-center text-sm text-chaugreen hover:underline",children:"Become a member to save on tournament fees"}),e.jsxs("p",{className:"text-center text-sm text-darkviridiangreen",children:["Registration closes on ",new Date(s.registration_deadline).toLocaleDateString()]})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"rounded-lg bg-red-50 p-3",children:e.jsx("p",{className:"text-sm font-medium text-red-800",children:"Sorry, this tournament is full."})}),e.jsx(m,{variant:"secondary",className:"w-full",href:route("tournaments.index"),children:"View Other Tournaments"})]}):s.spots_remaining>0?e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{href:route("login"),className:"block w-full rounded-lg bg-chaugreen px-4 py-3 text-center font-medium text-white transition-colors hover:bg-black",children:"Log in to Register"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 flex items-center",children:e.jsx("div",{className:"w-full border-t border-gray-300"})}),e.jsx("div",{className:"relative flex justify-center text-sm",children:e.jsx("span",{className:"bg-white px-2 text-darkviridiangreen",children:"or"})})]}),e.jsx(m,{variant:"secondary",className:"w-full",onClick:()=>c(!0),children:"Register as Guest"}),e.jsxs("p",{className:"text-center text-sm text-darkviridiangreen",children:["Don't have an account?"," ",e.jsx(u,{href:route("register"),className:"text-chaugreen hover:underline",children:"Sign up"})," ","to save on tournament fees"]})]}):e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"rounded-lg bg-red-50 p-3",children:e.jsx("p",{className:"text-sm font-medium text-red-800",children:"Sorry, this tournament is full."})}),e.jsx(m,{variant:"secondary",className:"w-full",href:route("tournaments.index"),children:"View Other Tournaments"})]})]})})]})})}),e.jsx(z,{isOpen:r,onClose:()=>c(!1),tournament:s})]})};export{Y as default};
