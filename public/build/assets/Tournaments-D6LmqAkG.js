import{j as e,W as h,a as g,Y as p}from"./app-XbnY-kOZ.js";import{M as u,F as f}from"./MainLayout-Cheml7Uc.js";import{W as n}from"./index-mM_Qj5a_.js";import{R as j}from"./index-BxUqe80I.js";import{d as v,S as b}from"./debounce-CvFsyFNY.js";import{g as y}from"./proxy-WnHTy-7x.js";import{C as N}from"./chevron-left-CL349r9X.js";import{C as w}from"./chevron-right-CxEeoFyl.js";import"./index-UNar27Jo.js";import"./Dropdown-CcLY8L9H.js";import"./transition-kq9RLoLQ.js";import"./index-Bu97WHPy.js";import"./index-BxM0iWfk.js";import"./createLucideIcon-CrdyIcS1.js";const _=()=>e.jsx("section",{className:"px-[5%] py-16 md:py-24 lg:py-28",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20",children:[e.jsxs("div",{className:"w-full max-w-lg",children:[e.jsx("p",{className:"mb-3 font-semibold text-chaugreen md:mb-4",children:"Golf Tournaments"}),e.jsx("h1",{className:"mb-3 text-5xl font-bold text-darkerviridiangreen md:mb-4 md:text-7xl lg:text-8xl",children:"Experience the Thrill of Competition"}),e.jsx("p",{className:"text-darkviridiangreen md:text-md",children:"Join us for exciting golf tournaments throughout the year. From amateur events to professional championships, we offer competitions for all skill levels."})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-start gap-4",children:[e.jsx(n,{variant:"primary",href:"#schedule",children:"View Schedule"}),e.jsx(n,{variant:"secondary",href:"#register",children:"Register Now"})]})]})})}),S=()=>e.jsxs("svg",{className:"h-full w-full text-gray-200",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 640 400",children:[e.jsx("rect",{width:"100%",height:"100%",fill:"#e5e7eb"}),e.jsx("path",{d:"M320 150.7c-4.8 0-9.5.5-14 1.5-14.8 3.2-27.8 11.4-36.5 22.8-9.4 12.3-14 27.5-12.8 42.8.9 11.7 5.3 22.8 12.8 32.1 3.1 3.8 6.6 7.2 10.5 10.1 11.5 8.5 25.6 13 40 13 14.4 0 28.5-4.5 40-13 3.9-2.9 7.4-6.3 10.5-10.1 7.5-9.3 11.9-20.4 12.8-32.1 1.2-15.3-3.4-30.5-12.8-42.8-8.7-11.4-21.7-19.6-36.5-22.8-4.5-1-9.2-1.5-14-1.5zm0 20c3.3 0 6.5.3 9.6 1 10.2 2.2 19.1 7.8 25.1 15.7 6.5 8.5 9.6 19 8.8 29.5-.6 8.1-3.6 15.7-8.8 22.1-2.1 2.6-4.5 5-7.2 7-7.9 5.9-17.6 9-27.5 9s-19.6-3.1-27.5-9c-2.7-2-5.1-4.4-7.2-7-5.2-6.4-8.2-14-8.8-22.1-.8-10.5 2.3-21 8.8-29.5 6-7.9 14.9-13.5 25.1-15.7 3.1-.7 6.3-1 9.6-1z",fill:"#9ca3af"}),e.jsx("text",{x:"50%",y:"50%",dominantBaseline:"middle",textAnchor:"middle",fill:"#6b7280",fontSize:"16",fontFamily:"system-ui",children:"No Image Available"})]}),C=({tournaments:r,filters:t})=>{const{data:a,setData:o,get:c}=h({search:t.search||"",status:t.status||"",date_range:t.date_range||"",sort_by:t.sort_by||"start_date",sort_direction:t.sort_direction||"asc",page:r.current_page||1}),d=v(()=>{c(route("tournaments.index"),{preserveState:!0,preserveScroll:!0})},300),m=s=>{o("search",s.target.value),d()},l=(s,i)=>{o(s,i),c(route("tournaments.index"),{preserveState:!0,preserveScroll:!0})};return e.jsx("section",{className:"px-[5%] py-16 md:py-24 lg:py-28",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20",children:e.jsxs("div",{className:"w-full max-w-lg",children:[e.jsx("p",{className:"mb-3 font-semibold text-chaugreen md:mb-4",children:"Featured Events"}),e.jsx("h1",{className:"mb-3 text-5xl font-bold text-darkerviridiangreen md:mb-4 md:text-7xl lg:text-8xl",children:"Upcoming Tournaments"}),e.jsx("p",{className:"text-darkviridiangreen md:text-md",children:"Join us for these exciting tournaments and showcase your skills on the green."})]})}),e.jsxs("div",{className:"mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",children:[e.jsxs("div",{className:"relative flex-1 max-w-sm",children:[e.jsx("input",{type:"text",placeholder:"Search tournaments...",value:a.search,onChange:m,className:"w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:border-chaugreen focus:ring-1 focus:ring-chaugreen"}),e.jsx(b,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"})]}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("select",{value:a.status,onChange:s=>l("status",s.target.value),className:"rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-1 focus:ring-chaugreen",children:[e.jsx("option",{value:"",children:"All Status"}),e.jsx("option",{value:"published",children:"Upcoming"}),e.jsx("option",{value:"in_progress",children:"In Progress"})]}),e.jsxs("select",{value:a.date_range,onChange:s=>l("date_range",s.target.value),className:"rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-1 focus:ring-chaugreen",children:[e.jsx("option",{value:"",children:"All Dates"}),e.jsx("option",{value:"this_month",children:"This Month"}),e.jsx("option",{value:"next_month",children:"Next Month"}),e.jsx("option",{value:"next_3_months",children:"Next 3 Months"})]}),e.jsxs("select",{value:`${a.sort_by}-${a.sort_direction}`,onChange:s=>{const[i,x]=s.target.value.split("-");o({...a,sort_by:i,sort_direction:x}),c(route("tournaments.index"),{preserveState:!0,preserveScroll:!0})},className:"rounded-lg border border-gray-300 px-4 py-2 focus:border-chaugreen focus:ring-1 focus:ring-chaugreen",children:[e.jsx("option",{value:"start_date-asc",children:"Date (Earliest)"}),e.jsx("option",{value:"start_date-desc",children:"Date (Latest)"}),e.jsx("option",{value:"entry_fee-asc",children:"Price (Low to High)"}),e.jsx("option",{value:"entry_fee-desc",children:"Price (High to Low)"})]})]})]}),e.jsx("div",{className:"grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3",children:r.data.map((s,i)=>e.jsx(y.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:i*.1},children:e.jsxs(g,{href:route("tournaments.show",s.id),className:"group flex size-full flex-col items-center justify-start overflow-hidden rounded-lg border border-chaugreen/20 bg-white transition-all duration-300 hover:border-chaugreen hover:shadow-lg",children:[e.jsx("div",{className:"relative w-full overflow-hidden pt-[66%]",children:s.image_url?e.jsx("img",{src:s.image_url,alt:s.name,className:"absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-105"}):e.jsx("div",{className:"absolute inset-0 size-full",children:e.jsx(S,{})})}),e.jsxs("div",{className:"flex w-full flex-1 flex-col justify-between p-6",children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsx("p",{className:"mr-4 rounded-full bg-chaugreen/10 px-3 py-1 text-sm font-semibold text-chaugreen",children:s.status==="published"?"Upcoming":"In Progress"}),e.jsxs("p",{className:"inline text-sm font-semibold text-darkerviridiangreen",children:["$",s.entry_fee]})]}),e.jsxs("div",{className:"flex w-full flex-col items-start justify-start",children:[e.jsx("h2",{className:"mb-2 text-xl font-bold text-darkerviridiangreen transition-colors group-hover:text-chaugreen md:text-2xl",children:s.name}),e.jsx("p",{className:"text-darkviridiangreen line-clamp-2",children:s.description}),e.jsxs("div",{className:"mt-4 space-y-2 text-sm text-darkviridiangreen/80",children:[e.jsxs("p",{children:[new Date(s.start_date).toLocaleDateString()," - ",new Date(s.end_date).toLocaleDateString()]}),e.jsx("p",{children:s.location}),e.jsxs("p",{children:[s.spots_remaining," spots remaining"]})]}),e.jsxs("div",{className:"mt-6 flex items-center text-chaugreen transition-colors group-hover:text-midchaugreen",children:[e.jsx("span",{className:"font-medium",children:"View Details"}),e.jsx(j,{className:"ml-1 h-5 w-5"})]})]})]})]})},s.id))}),r.last_page>1&&e.jsxs("div",{className:"mt-12 flex items-center justify-center gap-4",children:[e.jsxs(n,{variant:"secondary",disabled:r.current_page===1,onClick:()=>l("page",r.current_page-1),className:"flex items-center gap-2",children:[e.jsx(N,{className:"h-4 w-4"}),"Previous"]}),e.jsxs("span",{className:"text-sm text-gray-600",children:["Page ",r.current_page," of ",r.last_page]}),e.jsxs(n,{variant:"secondary",disabled:r.current_page===r.last_page,onClick:()=>l("page",r.current_page+1),className:"flex items-center gap-2",children:["Next",e.jsx(w,{className:"h-4 w-4"})]})]})]})})};function V({tournaments:r,filters:t}){return e.jsxs(u,{children:[e.jsx(p,{title:"Tournaments"}),e.jsxs("main",{className:"flex min-h-screen flex-col",children:[e.jsx(_,{}),e.jsx(C,{tournaments:r,filters:t})]}),e.jsx(f,{})]})}export{V as default};
