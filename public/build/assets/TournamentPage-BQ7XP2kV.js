import{j as e,m as s,A as g,c as R}from"./relume-CUjVMWgW.js";import{a as x,Y as T}from"./vendor-CzJBlmwO.js";import{L as C}from"./Layout10-Dfz8RuZn.js";import{P as t}from"./index-CKfJ9zyE.js";import{C as h}from"./chevron-right-Ds5oO-HI.js";import{X as P}from"./x-C_H57ah-.js";import{S as A}from"./star-DkKUAYBK.js";import{T as I}from"./trophy-BKXr4Ixd.js";import{C as O}from"./check-9SzIVHNv.js";import{C as V}from"./chevron-down-CZjHs5H3.js";import{u as E}from"./index-0ywiU79O.js";import"./createLucideIcon-g5LQwfDy.js";const S=[{url:"https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=3270&auto=format&fit=crop",caption:"Championship Course",category:"Course",year:"2023"},{url:"https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2970&auto=format&fit=crop",caption:"Tournament Opening Ceremony",category:"Events",year:"2023"},{url:"https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=3276&auto=format&fit=crop",caption:"Practice Session",category:"Practice",year:"2023"},{url:"https://images.unsplash.com/photo-1632932197818-6b133cfbf56b?q=80&w=3272&auto=format&fit=crop",caption:"Award Ceremony",category:"Events",year:"2023"},{url:"https://images.unsplash.com/photo-1592919505780-303950717480?q=80&w=3270&auto=format&fit=crop",caption:"Aerial View of Course",category:"Course",year:"2023"},{url:"https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?q=80&w=3270&auto=format&fit=crop",caption:"Final Round Action",category:"Tournament",year:"2023"}],y=({gallery:a={images:S}})=>{const[i,r]=x.useState(null),[o,n]=x.useState("All"),c=["All",...new Set(a.images.map(l=>l.category))],d=o==="All"?a.images:a.images.filter(l=>l.category===o),m=l=>{r(l),document.body.style.overflow="hidden"},u=()=>{r(null),document.body.style.overflow="auto"};return e.jsxs("section",{className:"px-[5%] py-16 md:py-24 lg:py-28 bg-white",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"mx-auto max-w-3xl text-center",children:[e.jsx(s.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-5 text-4xl font-bold text-black md:text-5xl lg:text-6xl",children:"Tournament Gallery"}),e.jsx(s.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"mb-12 text-lg text-black/70 md:mb-16 lg:mb-20 md:text-xl",children:"Relive the excitement from our previous tournaments through these captured moments."})]}),e.jsx(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},className:"mb-12 flex flex-wrap justify-center gap-4",children:c.map((l,p)=>e.jsx("button",{onClick:()=>n(l),className:`rounded-full px-6 py-2 text-sm font-semibold transition-all ${o===l?"bg-chaugreen text-white":"bg-gray/5 text-black hover:bg-gray/10"}`,children:l},p))}),e.jsx(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",children:d.map((l,p)=>e.jsxs(s.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.4,delay:p*.1},className:"group relative cursor-pointer overflow-hidden rounded-lg bg-black",onClick:()=>m(l),children:[e.jsx("div",{className:"aspect-[4/3] overflow-hidden",children:e.jsx("img",{src:l.url,alt:l.caption,className:"h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"})}),e.jsxs("div",{className:"absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100",children:[e.jsx("div",{className:"mb-2",children:e.jsx("span",{className:"inline-block rounded-full bg-chaugreen/90 px-3 py-1 text-xs font-medium text-white",children:l.category})}),e.jsx("p",{className:"text-lg font-semibold text-white",children:l.caption}),l.year&&e.jsx("p",{className:"mt-1 text-sm text-white/80",children:l.year})]})]},p))}),a.viewMoreLink&&e.jsx(s.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"mt-12 text-center md:mt-16",children:e.jsxs("a",{href:a.viewMoreLink,className:"inline-flex items-center gap-2 text-lg font-semibold text-chaugreen hover:text-black transition-colors",children:["View More Photos ",e.jsx(h,{className:"h-5 w-5"})]})})]}),e.jsx(g,{children:i&&e.jsx(s.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm",onClick:u,children:e.jsxs(s.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"relative max-w-5xl",onClick:l=>l.stopPropagation(),children:[e.jsx("button",{onClick:u,className:"absolute -right-4 -top-4 rounded-full bg-white p-2 text-black shadow-lg transition-transform hover:scale-110",children:e.jsx(P,{className:"h-6 w-6"})}),e.jsx("img",{src:i.url,alt:i.caption,className:"max-h-[80vh] w-auto rounded-lg shadow-2xl"}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsx("div",{className:"mb-2",children:e.jsx("span",{className:"inline-block rounded-full bg-chaugreen/90 px-3 py-1 text-xs font-medium text-white",children:i.category})}),e.jsx("p",{className:"text-xl font-semibold text-white",children:i.caption}),i.year&&e.jsx("p",{className:"mt-1 text-white/80",children:i.year})]})]})})})]})};y.propTypes={gallery:t.shape({images:t.arrayOf(t.shape({url:t.string.isRequired,caption:t.string.isRequired,category:t.string.isRequired,year:t.string})).isRequired,viewMoreLink:t.string})};const _=a=>`https://ui-avatars.com/api/?name=${encodeURIComponent(a)}&background=059669&color=fff&size=128&bold=true`,z=[{name:"Michael Chen",title:"PGA Professional",year:"2023",quote:"Exceptionally well-organized tournament with top-notch facilities. The attention to detail and professional atmosphere made this event truly memorable.",rating:5,achievement:"Tournament Champion 2023"},{name:"Sarah Rodriguez",title:"Amateur Champion",year:"2023",quote:"The competition level was outstanding, and the course was in perfect condition. From registration to the awards ceremony, everything ran smoothly.",rating:5,achievement:"Runner-up 2023"},{name:"David Thompson",title:"Golf Enthusiast",year:"2023",quote:"An incredible experience that exceeded all expectations. The practice facilities, tournament organization, and networking opportunities were exceptional.",rating:5},{name:"Emma Wilson",title:"Junior Division Winner",year:"2023",quote:"As a young golfer, this tournament provided the perfect platform to compete at a high level. The inclusive atmosphere and support from organizers was amazing.",rating:5,achievement:"Junior Division Champion 2023"}],f=({testimonials:a=z})=>e.jsx("section",{className:"px-[5%] py-16 md:py-24 lg:py-28 bg-white",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"mx-auto max-w-3xl text-center",children:[e.jsx(s.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-5 text-4xl font-bold text-black md:text-5xl lg:text-6xl",children:"Player Testimonials"}),e.jsx(s.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"mb-12 text-lg text-black/70 md:mb-16 lg:mb-20 md:text-xl",children:"Hear what past participants have to say about their tournament experience."})]}),e.jsx(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2",children:a.map((i,r)=>e.jsxs(s.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5,delay:r*.1},className:"flex h-full flex-col rounded-2xl border border-gray/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md",children:[e.jsxs("div",{className:"mb-6 flex items-center gap-4",children:[e.jsx("img",{src:_(i.name),alt:i.name,className:"h-16 w-16 rounded-full object-cover shadow-sm"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-black",children:i.name}),e.jsxs("p",{className:"text-sm text-black/70",children:[i.title," • ",i.year]})]})]}),e.jsx("div",{className:"mb-6 flex",children:[...Array(i.rating)].map((o,n)=>e.jsx(A,{className:"h-5 w-5 fill-chaugreen text-chaugreen"},n))}),e.jsxs("blockquote",{className:"mb-6 flex-grow text-base text-black/70",children:['"',i.quote,'"']}),i.achievement&&e.jsxs("div",{className:"flex items-center gap-2 rounded-lg bg-chaugreen/5 p-3 text-sm text-chaugreen",children:[e.jsx(I,{className:"h-5 w-5"}),e.jsx("span",{children:i.achievement})]})]},r))}),e.jsx(s.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"mx-auto mt-16 max-w-2xl text-center",children:e.jsxs("p",{className:"text-base text-black/70",children:["Join our next tournament and be part of our growing community of passionate golfers.",e.jsx("br",{}),e.jsx("a",{href:"#register",className:"mt-2 inline-flex items-center gap-1 text-chaugreen hover:text-black",children:"Register for upcoming tournaments →"})]})})]})});f.propTypes={testimonials:t.arrayOf(t.shape({name:t.string.isRequired,title:t.string.isRequired,year:t.string.isRequired,rating:t.number.isRequired,quote:t.string.isRequired,achievement:t.string}))};const D=[{name:"Standard Entry",price:299,description:"Perfect for individual players seeking a professional tournament experience",features:["Tournament entry","Practice round","Cart rental","Range balls","Welcome package"]},{name:"Premium Entry",price:399,description:"Enhanced package with additional practice opportunities and premium perks",featured:!0,features:["Tournament entry","Two practice rounds","Cart rental","Unlimited range balls","Premium welcome package","Tournament polo"]},{name:"VIP Package",price:599,description:"Ultimate tournament experience with exclusive benefits and unlimited access",features:["Tournament entry","Unlimited practice rounds","Cart rental","Unlimited range balls","Luxury welcome package","Tournament polo","VIP parking","Exclusive reception access"]}],b=({tiers:a=D})=>e.jsx("section",{className:"px-[5%] py-16 md:py-24 lg:py-28 bg-white",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"mx-auto max-w-3xl text-center",children:[e.jsx(s.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-5 text-4xl font-bold text-black md:text-5xl lg:text-6xl",children:"Tournament Packages"}),e.jsx(s.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"mb-12 text-lg text-black/70 md:mb-16 lg:mb-20 md:text-xl",children:"Choose the perfect package that suits your tournament experience."})]}),e.jsx(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3",children:a.map((i,r)=>e.jsxs(s.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5,delay:r*.1},className:`relative flex flex-col overflow-hidden rounded-2xl border ${i.featured?"border-chaugreen bg-chaugreen/5 shadow-lg":"border-gray/10 bg-white"}`,children:[i.featured&&e.jsx("div",{className:"absolute -right-20 top-8 rotate-45",children:e.jsx("div",{className:"w-[170px] bg-chaugreen py-1 text-center text-sm text-white shadow-sm",children:"Most Popular"})}),e.jsxs("div",{className:"p-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-black",children:i.name}),e.jsx("p",{className:"mt-4 text-base text-black/70",children:i.description}),e.jsxs("div",{className:"mt-6 flex items-baseline gap-x-1",children:[e.jsxs("span",{className:"text-4xl font-bold text-black",children:["$",i.price]}),e.jsx("span",{className:"text-sm text-black/70",children:"/player"})]}),e.jsx("ul",{role:"list",className:"mt-8 space-y-3",children:i.features.map((o,n)=>e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx(O,{className:`h-5 w-5 flex-shrink-0 ${i.featured?"text-chaugreen":"text-black/50"}`}),e.jsx("span",{className:"text-black/70",children:o})]},n))})]}),e.jsx("div",{className:"mt-auto flex p-8 pt-0",children:e.jsxs(s.button,{whileHover:{scale:1.02},whileTap:{scale:.98},className:`group inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-center text-sm font-semibold transition-all ${i.featured?"bg-chaugreen text-white hover:bg-black":"bg-black text-white hover:bg-chaugreen"}`,children:["Select Package",e.jsx(h,{className:"h-4 w-4 transition-transform group-hover:translate-x-1"})]})})]},r))}),e.jsx(s.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"mx-auto mt-16 max-w-2xl text-center",children:e.jsxs("p",{className:"text-base text-black/70",children:["All packages include tournament entry, access to practice facilities, and participation in the awards ceremony.",e.jsx("br",{}),e.jsxs("a",{href:"#contact",className:"mt-2 inline-flex items-center gap-1 text-chaugreen hover:text-black",children:["Contact us for custom packages ",e.jsx(h,{className:"h-4 w-4"})]})]})})]})});b.propTypes={tiers:t.arrayOf(t.shape({name:t.string.isRequired,description:t.string.isRequired,price:t.number.isRequired,features:t.arrayOf(t.string).isRequired,featured:t.bool}))};const M=[{question:"What are the tournament dates?",answer:"The tournament will be held from [Date] to [Date]. Please check the schedule section for detailed timings of each round and event."},{question:"What is the registration process?",answer:"Registration can be completed online through our tournament portal. You'll need to provide your golf handicap, contact information, and complete the payment process."},{question:"What is included in the entry fee?",answer:"The entry fee includes access to all tournament rounds, practice facilities, cart rental, tournament gift pack, and admission to the awards ceremony."},{question:"What is the format of play?",answer:"The tournament follows a stroke play format over four rounds. Players will be grouped in threesomes for the first two rounds, with cuts made for the final rounds."},{question:"Are caddies available?",answer:"Yes, professional caddies are available for hire. Please request a caddie during registration or contact our tournament office for arrangements."}],j=({faqs:a=M})=>{const[i,r]=x.useState(null),o=n=>{r(i===n?null:n)};return e.jsx("section",{className:"px-[5%] py-16 md:py-24 lg:py-28 bg-white",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"mx-auto max-w-3xl text-center",children:[e.jsx(s.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-5 text-4xl font-bold text-black md:text-5xl lg:text-6xl",children:"Frequently Asked Questions"}),e.jsx(s.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"mb-12 text-lg text-black/70 md:mb-16 lg:mb-20 md:text-xl",children:"Find answers to common questions about the tournament."})]}),e.jsx(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"mx-auto max-w-3xl divide-y divide-gray/10",children:a.map((n,c)=>e.jsxs(s.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:c*.1},className:"py-6",children:[e.jsxs("button",{onClick:()=>o(c),className:"flex w-full items-start justify-between text-left",children:[e.jsx("span",{className:"text-lg font-semibold text-black md:text-xl",children:n.question}),e.jsx(s.span,{animate:{rotate:i===c?180:0},transition:{duration:.3},className:"ml-6 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gray",children:e.jsx(V,{className:"h-5 w-5 text-black"})})]}),e.jsx(g,{children:i===c&&e.jsx(s.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"overflow-hidden",children:e.jsx("p",{className:"mt-4 text-black/70 md:text-lg",children:n.answer})})})]},c))})]})})};j.propTypes={faqs:t.arrayOf(t.shape({question:t.string.isRequired,answer:t.string.isRequired}))};const F={heading:"Tournament Details",children:e.jsxs("div",{children:[e.jsx("p",{className:"mb-4",children:"Join us for an exceptional golf tournament that combines professional competition with the spirit of sportsmanship. Experience world-class facilities, challenging courses, and unforgettable moments."}),e.jsx("p",{className:"mb-4",children:"Our tournament features multiple rounds of competitive play, professional scoring, and extensive practice facilities. Players will have access to premium amenities and expert staff throughout the event."}),e.jsx("p",{children:"Whether you're a seasoned professional or an ambitious amateur, this tournament offers the perfect platform to showcase your skills and compete against top talent. Don't miss this opportunity to be part of a prestigious golfing event."})]}),image:{src:"https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=3270&auto=format&fit=crop",alt:"Tournament highlights"},stats:[{label:"Players",value:"144+"},{label:"Prize Pool",value:"$50K"},{label:"Rounds",value:"4"}]},v=a=>{const{heading:i,children:r,image:o,stats:n}={...F,...a};return e.jsx("section",{id:"tournament-content",className:"px-[5%] py-16 md:py-24 lg:py-28 bg-white",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20",children:[e.jsx(s.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},children:e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:o.src,className:"w-full aspect-[4/3] object-cover rounded-lg shadow-lg",alt:o.alt}),e.jsx("div",{className:"absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 to-transparent"}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:e.jsx("div",{className:"grid grid-cols-3 gap-4",children:n.map((c,d)=>e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-2xl font-bold text-white md:text-3xl",children:c.value}),e.jsx("p",{className:"text-sm text-white/80",children:c.label})]},d))})})]})}),e.jsxs(s.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsx("h2",{className:"mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl",children:i}),e.jsx("div",{className:"prose prose-lg prose-black",children:r})]})]})})})};v.propTypes={heading:t.string,children:t.node,image:t.shape({src:t.string.isRequired,alt:t.string}),stats:t.arrayOf(t.shape({label:t.string.isRequired,value:t.string.isRequired}))};const L={heading:"Tournament name here",description:"Join us for an exceptional golf tournament experience.",tags:[{label:"Professional",url:"#professional"},{label:"Amateur",url:"#amateur"},{label:"Championship",url:"#championship"}],image:{src:"https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2970&auto=format&fit=crop",alt:"Tournament banner image"}},w=a=>{const{heading:i,description:r,tags:o,image:n}={...L,...a};return e.jsx("section",{id:"tournament-header",className:"px-[5%] py-16 md:py-24 lg:py-28 bg-white",children:e.jsxs("div",{className:"container",children:[e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mx-auto mb-12 max-w-2xl text-center md:mb-18 lg:mb-20",children:[e.jsx("h1",{className:"mb-5 text-5xl font-bold text-black md:text-6xl lg:text-7xl",children:i}),e.jsx("p",{className:"mb-6 text-lg text-black/70 md:text-xl",children:r}),e.jsx("ul",{className:"flex flex-wrap justify-center gap-2",children:o.map((c,d)=>e.jsx(s.li,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3,delay:d*.1},className:"flex",children:e.jsx("a",{href:c.url,className:"rounded-full bg-gray px-4 py-2 text-sm font-semibold text-black hover:bg-chaugreen hover:text-white transition-colors duration-200",children:c.label})},d))})]}),e.jsxs(s.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"relative",children:[e.jsx("div",{className:"aspect-[21/9] w-full overflow-hidden rounded-lg",children:e.jsx("img",{src:n.src,alt:n.alt,className:"h-full w-full object-cover transition-transform duration-500 hover:scale-105"})}),e.jsx("div",{className:"absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent"})]})]})})};w.propTypes={heading:t.string,description:t.string,tags:t.arrayOf(t.shape({label:t.string.isRequired,url:t.string.isRequired})),image:t.shape({src:t.string.isRequired,alt:t.string})};const N=({event:a,index:i})=>{var d,m;const r=R(),[o,n]=E({threshold:.2,triggerOnce:!0});x.useEffect(()=>{n&&r.start("visible")},[r,n]);const c={hidden:{opacity:0,x:i%2===0?-50:50},visible:{opacity:1,x:0,transition:{duration:.6,ease:"easeOut",delay:.2}}};return e.jsxs(s.div,{ref:o,initial:"hidden",animate:r,variants:c,className:"relative",children:[e.jsx("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",children:e.jsx("div",{className:"flex h-4 w-4 items-center justify-center rounded-full bg-chaugreen ring-4 ring-white",children:e.jsx("div",{className:"h-2 w-2 rounded-full bg-white"})})}),i>0&&e.jsx("div",{className:"absolute left-1/2 top-[-4rem] h-16 w-px -translate-x-1/2 bg-gray/20"}),e.jsxs("div",{className:`grid grid-cols-2 items-center gap-8 ${i%2===0?"":"direction-rtl"}`,children:[e.jsx("div",{className:i%2===0?"text-right":"order-2",children:e.jsx(s.div,{initial:{scale:.8,opacity:0},animate:r,variants:{visible:{scale:1,opacity:1,transition:{duration:.5,delay:.3}}},className:"aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg",children:e.jsx("img",{src:((d=a.image)==null?void 0:d.src)||"https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=3270&auto=format&fit=crop",alt:((m=a.image)==null?void 0:m.alt)||"Golf course",className:"h-full w-full object-cover transition-transform duration-500 hover:scale-105"})})}),e.jsxs(s.div,{variants:{visible:{opacity:1,y:0,transition:{duration:.5,delay:.4}}},initial:{opacity:0,y:20},className:i%2===0?"pl-8":"pr-8 order-1 text-right",children:[e.jsx("p",{className:"mb-1 text-sm font-semibold text-chaugreen",children:a.time}),e.jsx("h3",{className:"mb-2 text-xl font-bold text-black",children:a.title}),e.jsx("p",{className:"text-black/70",children:a.description}),e.jsxs("div",{className:`mt-3 flex items-center gap-2 text-sm text-black/50 ${i%2===0?"":"justify-end"}`,children:[e.jsx("svg",{className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z",clipRule:"evenodd"})}),a.location]})]})]})]})},k=({tournament:a})=>e.jsx("section",{className:"px-[5%] py-16 md:py-24 lg:py-28 bg-white",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"mx-auto max-w-3xl text-center",children:[e.jsx("p",{className:"mb-4 text-sm font-semibold text-chaugreen",children:"Tagline"}),e.jsx(s.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"mb-5 text-4xl font-bold text-black md:text-5xl lg:text-6xl",children:"Tournament Schedule"}),e.jsx(s.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"mb-12 text-black/70 md:mb-16 lg:mb-20 md:text-lg",children:"A detailed timeline of events for the tournament."})]}),e.jsx(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"mx-auto max-w-5xl",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute left-[50%] top-0 h-full w-px -translate-x-[50%] bg-gray/20"}),e.jsx("div",{className:"space-y-12 md:space-y-16",children:a.schedule.map((i,r)=>e.jsx(N,{event:i,index:r},r))})]})})]})});N.propTypes={event:t.shape({time:t.string.isRequired,title:t.string.isRequired,location:t.string.isRequired,description:t.string.isRequired,image:t.shape({src:t.string.isRequired,alt:t.string.isRequired})}).isRequired,index:t.number.isRequired};k.propTypes={tournament:t.shape({schedule:t.arrayOf(t.shape({time:t.string.isRequired,title:t.string.isRequired,location:t.string.isRequired,description:t.string.isRequired,image:t.shape({src:t.string.isRequired,alt:t.string.isRequired})})).isRequired}).isRequired};const q=({tournament:a})=>e.jsx("div",{className:"bg-chaugreen",children:e.jsx("div",{className:"px-6 py-24 sm:px-6 sm:py-32 lg:px-8",children:e.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[e.jsxs(s.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-3xl font-bold tracking-tight text-white sm:text-4xl",children:["Ready to Join the Tournament?",e.jsx("br",{}),"Register now to secure your spot!"]}),e.jsx(s.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},className:"mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80",children:a.registrationMessage}),e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"mt-10 flex items-center justify-center gap-x-6",children:[e.jsx("a",{href:"#register",className:"rounded-lg bg-white px-6 py-3 text-sm font-semibold text-chaugreen transition-colors hover:bg-black hover:text-white",children:"Register Now"}),e.jsxs("a",{href:"#contact",className:"text-sm font-semibold text-white transition-colors hover:text-black",children:["Contact Us ",e.jsx("span",{"aria-hidden":"true",children:"→"})]})]}),a.earlyBirdOffer&&e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},className:"mt-8 inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-inset ring-white/20",children:[e.jsx("svg",{className:"mr-3 h-5 w-5 text-white",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})}),"Early Bird Offer: ",a.earlyBirdOffer]}),a.spotsRemaining&&e.jsxs(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},className:"mt-4 text-sm text-white/80",children:["Only ",a.spotsRemaining," spots remaining!"]})]})})});q.propTypes={tournament:t.shape({registrationMessage:t.string.isRequired,earlyBirdOffer:t.string,spotsRemaining:t.number}).isRequired};function ee({tournament:a}){return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:a.name}),e.jsxs(C,{children:[e.jsx(w,{title:a.name,description:a.description,imageUrl:a.image_url,location:a.location,courseName:a.course_name,startDate:a.start_date,endDate:a.end_date}),e.jsx(v,{format:a.format,maxParticipants:a.max_participants,spotsRemaining:a.spots_remaining,entryFee:a.entry_fee,rules:a.rules}),e.jsx(k,{schedule:a.schedule}),e.jsx(b,{packages:a.packages}),e.jsx(y,{images:a.gallery}),e.jsx(f,{testimonials:a.testimonials}),e.jsx(j,{faqs:a.faqs}),e.jsx(q,{registrationMessage:a.registration_message,earlyBirdOffer:a.early_bird_offer,spotsRemaining:a.spots_remaining,maxParticipants:a.max_participants})]})]})}export{ee as default};
