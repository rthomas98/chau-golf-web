import{q as S,r as p,j as e,a as P,y as C}from"./app-XbnY-kOZ.js";import{P as t}from"./index-UNar27Jo.js";import{D as d}from"./Dropdown-CcLY8L9H.js";import{g}from"./proxy-WnHTy-7x.js";const N=({logo:f,links:y,buttons:w,...j})=>{const{url:m,props:{auth:r}}=S(),{logo:v,links:u,buttons:h}={logo:b.logo,links:b.links,buttons:r!=null&&r.user?[]:b.buttons,...j},[i,n]=p.useState(!1),o=s=>s==="/"?m==="/":m.startsWith(s);return e.jsx("nav",{className:"sticky top-0 z-50 flex w-full items-center justify-between border-b border-pearlbush bg-white lg:min-h-18 lg:px-[5%]",children:e.jsxs("div",{className:"size-full lg:flex lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"lg:flex",children:[e.jsxs("div",{className:"flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0",children:[e.jsx("a",{href:"/",className:"text-2xl font-headers text-white hover:text-tahitigold transition-colors",children:e.jsx("img",{src:"/images/ChauChau-Golf.svg",alt:"ChauChau Golf",className:"h-12"})}),e.jsxs("button",{className:"-mr-2 flex size-12 flex-col items-center justify-center lg:hidden",onClick:()=>n(s=>!s),children:[e.jsx(g.span,{className:"my-[3px] h-0.5 w-6 bg-black",animate:i?["open","rotatePhase"]:"closed",variants:M}),e.jsx(g.span,{className:"my-[3px] h-0.5 w-6 bg-black",animate:i?"open":"closed",variants:O}),e.jsx(g.span,{className:"my-[3px] h-0.5 w-6 bg-black",animate:i?["open","rotatePhase"]:"closed",variants:A})]})]}),e.jsx(g.div,{animate:i?"open":"closed",initial:"closed",variants:L,transition:{duration:.4},className:"overflow-auto px-[5%] lg:ml-6 lg:flex lg:items-center lg:px-0",children:e.jsxs("div",{className:"space-y-4 py-6 lg:hidden",children:[u.map((s,a)=>e.jsx("a",{href:s.url,className:`block text-base font-medium transition-colors ${o(s.url)?"text-black":"text-black hover:text-tahitigold"}`,children:s.title},a)),r!=null&&r.user?e.jsxs("div",{className:"mt-6 space-y-4",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800",children:r.user.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:r.user.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx("a",{href:route("dashboard"),className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",children:"Dashboard"}),e.jsx("a",{href:route("profile.edit"),className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",children:"Profile"}),e.jsx(P,{href:route("logout"),method:"post",as:"button",className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",children:"Log Out"})]})]}):e.jsx("div",{className:"mt-6 flex w-full flex-col gap-y-4",children:h.map((s,a)=>e.jsx("a",{href:s.href,className:s.className,children:s.children},a))})]})}),e.jsx("div",{className:"hidden lg:ml-8 lg:flex lg:items-center lg:gap-8",children:u.map((s,a)=>e.jsx("a",{href:s.url,className:`text-base font-medium transition-colors ${o(s.url)?"text-tahitigold":"text-tahitigold hover:text-black"}`,children:s.title},a))})]}),r!=null&&r.user?e.jsx("div",{className:"hidden lg:flex lg:items-center",children:e.jsx("div",{className:"ml-3 relative",children:e.jsxs(d,{children:[e.jsx(d.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[r.user.name,e.jsx("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(d.Content,{children:[e.jsx(d.Link,{href:route("dashboard"),children:"Dashboard"}),e.jsx(d.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(d.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}):e.jsx("div",{className:"hidden lg:flex lg:items-center lg:gap-4",children:h.map((s,a)=>e.jsx("a",{href:s.href,className:s.className,children:s.children},a))})]})})};N.propTypes={logo:t.shape({url:t.string,src:t.string,alt:t.string}),links:t.arrayOf(t.shape({title:t.string,url:t.string,megaMenu:t.shape({categoryLinks:t.arrayOf(t.shape({title:t.string,links:t.arrayOf(t.shape({url:t.string,image:t.shape({src:t.string,alt:t.string}),title:t.string,description:t.string,button:t.shape({children:t.node,className:t.string})}))})),featuredSections:t.shape({title:t.string,links:t.arrayOf(t.shape({url:t.string,image:t.shape({src:t.string,alt:t.string}),title:t.string,description:t.string,button:t.shape({children:t.node,className:t.string})}))}),button:t.shape({children:t.node,className:t.string})})})),buttons:t.arrayOf(t.shape({children:t.node,className:t.string,href:t.string}))};const b={logo:{url:"#",src:"https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",alt:"Logo image"},links:[{title:"Home",url:"/"},{title:"About Us",url:"/about"},{title:"Membership",url:"/membership"},{title:"Courses & Partners",url:"/courses"},{title:"Contact Us",url:"/contact"}],buttons:[{children:"Login",className:"text-chaugreen hover:text-black transition-colors font-medium",href:route("login")},{children:"Register",className:"rounded-lg border-2 border-chaugreen bg-chaugreen px-6 py-2 text-white hover:bg-transparent hover:text-chaugreen transition-all font-medium",href:route("register")}]},L={open:{height:"var(--height-open, 100dvh)"},closed:{height:"var(--height-closed, 0)"}},M={open:{translateY:8,transition:{delay:.1}},rotatePhase:{rotate:-45,transition:{delay:.2}},closed:{translateY:0,rotate:0,transition:{duration:.2}}},O={open:{width:0,transition:{duration:.1}},closed:{width:"1.5rem",transition:{delay:.3,duration:.2}}},A={open:{translateY:-8,transition:{delay:.1}},rotatePhase:{rotate:45,transition:{delay:.2}},closed:{translateY:0,rotate:0,transition:{duration:.2}}};function T(){const{logo:f,inputPlaceholder:y,button:w,termsAndConditions:j,footerText:m,columnLinks:r,footerLinks:v}={logo:{url:"#",src:"https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",alt:"Logo image"},inputPlaceholder:"Enter your email",button:{title:"Subscribe",variant:"secondary",size:"sm"},termsAndConditions:`
    <p class='text-xs'>
      By subscribing you agree to with our 
      <a href='#' class='underline'>Privacy Policy</a>.
    </p>
    `,columnLinks:[{title:"About Us",links:[{title:"Our Story",url:"#"},{title:"Membership",url:"#"},{title:"Courses & Partners",url:"#"},{title:"Contact Us",url:"#"}]},{title:"Resources",links:[{title:"Blog",url:"#"},{title:"Events",url:"#"},{title:"FAQ",url:"#"},{title:"Support",url:"#"}]},{title:"Legal",links:[{title:"Privacy Policy",url:"#"},{title:"Terms of Service",url:"#"},{title:"Cookie Settings",url:"#"}]}],footerText:`&copy; ${new Date().getFullYear()} ChauChau Golf. All rights reserved.`,footerLinks:[{title:"Privacy Policy",url:"#"},{title:"Terms of Service",url:"#"},{title:"Cookies Settings",url:"#"}]},[u,h]=p.useState(""),[i,n]=p.useState({type:"",text:""}),[o,s]=p.useState(!1),a=async l=>{l.preventDefault(),s(!0),n({type:"",text:""});try{const c=await C.post("/api/newsletter/subscribe",{email:u},{preserveState:!0,preserveScroll:!0,onSuccess:()=>{n({type:"success",text:"Thank you for subscribing to our newsletter!"}),h("")},onError:x=>{n({type:"error",text:x.email||"An error occurred. Please try again."})}})}catch(c){console.error("Newsletter subscription error:",c),n({type:"error",text:"An error occurred. Please try again."})}finally{s(!1)}};return e.jsx("footer",{className:"bg-white px-[5%] py-12 text-white md:py-16 lg:py-20",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-[2fr_1fr]",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8",children:[e.jsx("div",{className:"col-span-full mb-8",children:e.jsx("a",{href:"/",className:"text-2xl font-bold text-chaugreen",children:"ChauChau Golf"})}),r.map((l,c)=>e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsx("h3",{className:"font-semibold text-chaugreen",children:l.title}),e.jsx("ul",{className:"space-y-3",children:l.links.map((x,k)=>e.jsx("li",{children:e.jsx("a",{href:x.url,className:"text-sm text-black/90 transition-colors hover:text-chaugreen",children:x.title})},k))})]},c))]}),e.jsxs("div",{className:"lg:pl-8",children:[e.jsx("h3",{className:"mb-4 font-semibold text-chaugreen",children:"Stay Updated"}),e.jsx("p",{className:"mb-4 text-sm text-black/90",children:"Subscribe to our newsletter for the latest updates and exclusive offers."}),e.jsxs("form",{className:"mb-3 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0",onSubmit:a,children:[e.jsx("input",{type:"email",placeholder:y,value:u,onChange:l=>h(l.target.value),className:"flex-1 rounded-lg border border-chaugreen/20 bg-white px-4 py-2 text-sm text-black placeholder-black/50 focus:border-chaugreen focus:outline-none focus:ring-2 focus:ring-chaugreen/20",disabled:o}),e.jsx("button",{type:"submit",className:"rounded-lg bg-chaugreen px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-black disabled:opacity-50",disabled:o,children:o?"Subscribing...":"Subscribe"})]}),i.text&&e.jsx("p",{className:`text-sm ${i.type==="success"?"text-green-600":"text-red-600"}`,children:i.text})]})]}),e.jsx("div",{className:"mt-12 border-t border-white/10 pt-8",children:e.jsxs("div",{className:"flex flex-col items-center justify-between space-y-4 text-sm text-black/70 md:flex-row md:space-y-0",children:[e.jsx("p",{dangerouslySetInnerHTML:{__html:m}}),e.jsx("div",{className:"flex space-x-6",children:v.map((l,c)=>e.jsx("a",{href:l.url,className:"hover:text-chaugreen",children:l.title},c))})]})})]})})}function R({children:f}){return e.jsxs("div",{className:"min-h-screen",children:[e.jsx(N,{}),e.jsx("main",{children:f}),e.jsx(T,{})]})}export{T as F,R as M};
