import{r as s,W as y,j as e,Y as N,a as C}from"./app-XbnY-kOZ.js";import{G as E}from"./GuestLayout-CFjMIFQ0.js";import{T as g,I as h}from"./TextInput-Biio70Ot.js";import{I as f}from"./InputLabel-Dj47zsUR.js";import{P as k}from"./PrimaryButton-BHeBbWU-.js";function R({title:r,titleId:l,...o},i){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":l},o),r?s.createElement("title",{id:l},r):null,s.createElement("path",{fillRule:"evenodd",d:"M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z",clipRule:"evenodd"}),s.createElement("path",{d:"m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z"}))}const P=s.forwardRef(R);function S({title:r,titleId:l,...o},i){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":l},o),r?s.createElement("title",{id:l},r):null,s.createElement("path",{d:"M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}),s.createElement("path",{fillRule:"evenodd",d:"M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",clipRule:"evenodd"}))}const A=s.forwardRef(S);function q(){const[r,l]=s.useState(!1),[o,i]=s.useState({score:0,message:"",color:"bg-gray-200"}),{data:d,setData:m,post:x,processing:p,errors:u,reset:w}=y({name:"",email:"",password:"",password_confirmation:""});s.useEffect(()=>()=>{w("password","password_confirmation")},[]);const b=a=>{let t=0,n="",c="bg-gray-200";switch(a.length>=8&&t++,a.match(/[A-Z]/)&&t++,a.match(/[0-9]/)&&t++,a.match(/[^A-Za-z0-9]/)&&t++,t){case 0:n="Very Weak",c="bg-red-500";break;case 1:n="Weak",c="bg-orange-500";break;case 2:n="Fair",c="bg-yellow-500";break;case 3:n="Good",c="bg-blue-500";break;case 4:n="Strong",c="bg-green-500";break}return{score:t/4*100,message:n,color:c}},v=a=>{const t=a.target.value;m("password",t),i(b(t))},j=a=>{a.preventDefault(),x(route("register"))};return e.jsxs(E,{children:[e.jsx(N,{title:"Register"}),e.jsxs("div",{className:"mb-8 text-center",children:[e.jsx("h2",{className:"font-headers text-2xl font-bold text-chaugreen",children:"Create Account"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"Join the ChauChau Golf community"})]}),e.jsxs("form",{onSubmit:j,children:[e.jsxs("div",{children:[e.jsx(f,{htmlFor:"name",value:"Name",className:"text-gray-700"}),e.jsx(g,{id:"name",name:"name",value:d.name,className:"mt-1 block w-full rounded-lg border-gray-300 focus:border-chaugreen focus:ring-chaugreen",autoComplete:"name",isFocused:!0,onChange:a=>m("name",a.target.value),required:!0}),e.jsx(h,{message:u.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(f,{htmlFor:"email",value:"Email",className:"text-gray-700"}),e.jsx(g,{id:"email",type:"email",name:"email",value:d.email,className:"mt-1 block w-full rounded-lg border-gray-300 focus:border-chaugreen focus:ring-chaugreen",autoComplete:"username",onChange:a=>m("email",a.target.value),required:!0}),e.jsx(h,{message:u.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(f,{htmlFor:"password",value:"Password",className:"text-gray-700"}),e.jsxs("div",{className:"relative",children:[e.jsx(g,{id:"password",type:r?"text":"password",name:"password",value:d.password,className:"mt-1 block w-full rounded-lg border-gray-300 focus:border-chaugreen focus:ring-chaugreen pr-10",autoComplete:"new-password",onChange:v,required:!0}),e.jsx("button",{type:"button",className:"absolute right-2 top-[13px] text-gray-500 hover:text-gray-700",onClick:()=>l(!r),children:r?e.jsx(P,{className:"h-5 w-5"}):e.jsx(A,{className:"h-5 w-5"})})]}),d.password&&e.jsxs("div",{className:"mt-2",children:[e.jsx("div",{className:"h-2 w-full bg-gray-200 rounded-full overflow-hidden",children:e.jsx("div",{className:`h-full rounded-full transition-all duration-300 ${o.color}`,style:{width:`${o.score}%`}})}),e.jsx("p",{className:`text-sm mt-1 ${o.color.replace("bg-","text-")}`,children:o.message})]}),e.jsx(h,{message:u.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(f,{htmlFor:"password_confirmation",value:"Confirm Password",className:"text-gray-700"}),e.jsx("div",{className:"relative",children:e.jsx(g,{id:"password_confirmation",type:r?"text":"password",name:"password_confirmation",value:d.password_confirmation,className:"mt-1 block w-full rounded-lg border-gray-300 focus:border-chaugreen focus:ring-chaugreen pr-10",autoComplete:"new-password",onChange:a=>m("password_confirmation",a.target.value),required:!0})}),e.jsx(h,{message:u.password_confirmation,className:"mt-2"})]}),e.jsx("div",{className:"mt-6",children:e.jsx(k,{className:"w-full justify-center rounded-lg bg-chaugreen px-8 py-3 text-base font-semibold text-white shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-chaugreen focus:ring-offset-2 transition-opacity duration-200",disabled:p,children:"Register"})}),e.jsx("div",{className:"mt-6 text-center",children:e.jsx(C,{href:route("login"),className:"text-sm text-gray-600 hover:text-chaugreen transition-colors",children:"Already have an account? Sign in"})})]})]})}export{q as default};
