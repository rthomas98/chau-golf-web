import{j as e,W as h,Y as p,a as c}from"./app-XbnY-kOZ.js";import{T as m,I as l}from"./TextInput-Biio70Ot.js";import{I as i}from"./InputLabel-Dj47zsUR.js";import{P as f}from"./PrimaryButton-BHeBbWU-.js";import{G as b}from"./GuestLayout-CFjMIFQ0.js";function j({className:r="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"rounded border-gray text-chaugreen shadow-sm focus:ring-chaugreen "+r})}function C({status:r,canResetPassword:a}){const{data:t,setData:o,post:u,processing:d,errors:n,reset:x}=h({email:"",password:"",remember:!1}),g=s=>{s.preventDefault(),u(route("login"),{onFinish:()=>x("password")})};return e.jsxs(b,{children:[e.jsx(p,{title:"Log in"}),e.jsxs("div",{className:"mb-8 text-center",children:[e.jsx("h2",{className:"font-headers text-2xl font-bold text-chaugreen",children:"Welcome Back"}),e.jsx("p",{className:"mt-2 text-gray-600",children:"Sign in to access your account"})]}),r&&e.jsx("div",{className:"mb-4 text-sm font-medium text-chaugreen",children:r}),e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"email",value:"Email",className:"text-gray-700"}),e.jsx(m,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full rounded-lg border-gray-300 focus:border-chaugreen focus:ring-chaugreen",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(l,{message:n.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"Password",className:"text-gray-700"}),e.jsx(m,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full rounded-lg border-gray-300 focus:border-chaugreen focus:ring-chaugreen",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e.jsx(l,{message:n.password,className:"mt-2"})]}),e.jsx("div",{className:"mt-4 block",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(j,{name:"remember",checked:t.remember,onChange:s=>o("remember",s.target.checked),className:"rounded border-gray-300 text-chaugreen focus:ring-chaugreen"}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"mt-6 flex items-center justify-between",children:[a&&e.jsx(c,{href:route("password.request"),className:"text-sm text-gray-600 hover:text-chaugreen transition-colors",children:"Forgot your password?"}),e.jsx(f,{className:"rounded-lg bg-chaugreen px-8 py-3 text-base font-semibold text-white shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-chaugreen focus:ring-offset-2 transition-opacity duration-200",disabled:d,children:"Sign In"})]}),e.jsx("div",{className:"mt-6 text-center",children:e.jsx(c,{href:route("register"),className:"text-sm text-gray-600 hover:text-chaugreen transition-colors",children:"Need an account? Register here"})})]})]})}export{C as default};
