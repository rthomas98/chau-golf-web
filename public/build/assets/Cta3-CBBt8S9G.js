import{j as i}from"./relume-CslAMs4F.js";import"./vendor-CKAj1wZK.js";import{P as e}from"./index-BLCQyxOC.js";e.string.isRequired,e.string.isRequired,e.string.isRequired,e.shape({title:e.string.isRequired,onClick:e.func}),e.arrayOf(e.shape({url:e.string.isRequired,image:e.shape({src:e.string.isRequired,alt:e.string}),date:e.shape({weekday:e.string.isRequired,day:e.string.isRequired,monthYear:e.string.isRequired}),category:e.string.isRequired,title:e.string.isRequired,location:e.string.isRequired,description:e.string.isRequired,button:e.shape({title:e.string.isRequired,onClick:e.func})}));const d=a=>{const{heading:n,description:o,buttons:l,image:s}={...g,...a};return i.jsxs("section",{className:"relative px-[5%] py-16 md:py-24 lg:py-28",children:[i.jsx("div",{className:"container mx-auto",children:i.jsxs("div",{className:"w-full max-w-lg",children:[i.jsx("h2",{className:"mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl",children:n}),i.jsx("p",{className:"text-white/90 md:text-lg",children:o}),i.jsx("div",{className:"mt-6 flex flex-wrap gap-4 md:mt-8",children:l.map((t,r)=>i.jsx("a",{href:t.href,className:`rounded-lg px-6 py-3 font-semibold transition-colors ${r===0?"bg-tahitigold hover:bg-midtahitigold text-white":"bg-white/10 hover:bg-white/20 text-white border border-white/20"} ${t.className||""}`,children:t.title},r))})]})}),i.jsxs("div",{className:"absolute inset-0 -z-10",children:[i.jsx("img",{src:s.src,className:"size-full object-cover",alt:s.alt}),i.jsx("div",{className:"absolute inset-0 bg-darkerviridiangreen/70"})]})]})};d.propTypes={heading:e.string,description:e.string,buttons:e.arrayOf(e.shape({title:e.string.isRequired,href:e.string,className:e.string})),image:e.shape({src:e.string.isRequired,alt:e.string})};const g={heading:"Ready to Join Our Golf Community?",description:"Take the first step towards improving your game and joining a community of passionate golfers. Sign up today for exclusive access to events, training, and more.",buttons:[{title:"Join Now",href:"#"},{title:"Learn More",href:"#"}],image:{src:"https://images.unsplash.com/photo-1611374243147-44a702c2d44c?auto=format&fit=crop&q=80&w=2070",alt:"Beautiful golf course at sunset"}};export{d as C};
