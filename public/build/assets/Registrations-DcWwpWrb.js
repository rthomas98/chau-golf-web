import{j as s}from"./relume-CslAMs4F.js";import{Y as G}from"./vendor-CKAj1wZK.js";import{c as V,D as A,C as I,a as J,b as $,d as z,e as U}from"./index-DB8dFmbq.js";import{C as K}from"./calendar-CGBUOQqY.js";import{C as Z,M as ee}from"./map-pin-BxVhzNwP.js";import{D as te}from"./dollar-sign-DDc_CzAZ.js";import"./createLucideIcon-B7GYA0Tr.js";import"./trophy-CfaoNLbg.js";import"./clsx-B-dksMZM.js";const ne=V("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground",success:"border-transparent bg-green-100 text-green-800 hover:bg-green-200",warning:"border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200"}},defaultVariants:{variant:"default"}});function T({className:t,variant:e,...n}){return s.jsx("div",{className:ne({variant:e,className:t}),...n})}const R=6048e5,re=864e5,p=Symbol.for("constructDateFrom");function b(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&p in t?t[p](e):t instanceof Date?new t.constructor(e):new Date(e)}function g(t,e){return b(e||t,t)}let ae={};function S(){return ae}function k(t,e){var u,d,l,f;const n=S(),r=(e==null?void 0:e.weekStartsOn)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??n.weekStartsOn??((f=(l=n.locale)==null?void 0:l.options)==null?void 0:f.weekStartsOn)??0,a=g(t,e==null?void 0:e.in),i=a.getDay(),o=(i<r?7:0)+i-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function W(t,e){return k(t,{...e,weekStartsOn:1})}function X(t,e){const n=g(t,e==null?void 0:e.in),r=n.getFullYear(),a=b(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const i=W(a),o=b(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const u=W(o);return n.getTime()>=i.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function N(t){const e=g(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function ie(t,...e){const n=b.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function C(t,e){const n=g(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function se(t,e,n){const[r,a]=ie(n==null?void 0:n.in,t,e),i=C(r),o=C(a),u=+i-N(i),d=+o-N(o);return Math.round((u-d)/re)}function oe(t,e){const n=X(t,e),r=b(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),W(r)}function ce(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function ue(t){return!(!ce(t)&&typeof t!="number"||isNaN(+g(t)))}function de(t,e){const n=g(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const le={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},me=(t,e,n)=>{let r;const a=le[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function j(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const fe={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},he={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ge={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},we={date:j({formats:fe,defaultWidth:"full"}),time:j({formats:he,defaultWidth:"full"}),dateTime:j({formats:ge,defaultWidth:"full"})},ye={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},be=(t,e,n,r)=>ye[t];function O(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,u=n!=null&&n.width?String(n.width):o;a=t.formattingValues[u]||t.formattingValues[o]}else{const o=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[o]}const i=t.argumentCallback?t.argumentCallback(e):e;return a[i]}}const xe={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ve={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Me={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Pe={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Oe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},De={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ke=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},We={ordinalNumber:ke,era:O({values:xe,defaultWidth:"wide"}),quarter:O({values:ve,defaultWidth:"wide",argumentCallback:t=>t-1}),month:O({values:Me,defaultWidth:"wide"}),day:O({values:Pe,defaultWidth:"wide"}),dayPeriod:O({values:Oe,defaultWidth:"wide",formattingValues:De,defaultFormattingWidth:"wide"})};function D(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;const o=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?Ye(u,w=>w.test(o)):Se(u,w=>w.test(o));let l;l=t.valueCallback?t.valueCallback(d):d,l=n.valueCallback?n.valueCallback(l):l;const f=e.slice(o.length);return{value:l,rest:f}}}function Se(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Ye(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function je(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],i=e.match(t.parsePattern);if(!i)return null;let o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;const u=e.slice(a.length);return{value:o,rest:u}}}const Te=/^(\d+)(th|st|nd|rd)?/i,pe=/\d+/i,Ne={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ce={any:[/^b/i,/^(a|c)/i]},Ee={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Fe={any:[/1/i,/2/i,/3/i,/4/i]},qe={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},_e={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},He={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Qe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Re={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Xe={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Le={ordinalNumber:je({matchPattern:Te,parsePattern:pe,valueCallback:t=>parseInt(t,10)}),era:D({matchPatterns:Ne,defaultMatchWidth:"wide",parsePatterns:Ce,defaultParseWidth:"any"}),quarter:D({matchPatterns:Ee,defaultMatchWidth:"wide",parsePatterns:Fe,defaultParseWidth:"any",valueCallback:t=>t+1}),month:D({matchPatterns:qe,defaultMatchWidth:"wide",parsePatterns:_e,defaultParseWidth:"any"}),day:D({matchPatterns:He,defaultMatchWidth:"wide",parsePatterns:Qe,defaultParseWidth:"any"}),dayPeriod:D({matchPatterns:Re,defaultMatchWidth:"any",parsePatterns:Xe,defaultParseWidth:"any"})},Be={code:"en-US",formatDistance:me,formatLong:we,formatRelative:be,localize:We,match:Le,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ge(t,e){const n=g(t,e==null?void 0:e.in);return se(n,de(n))+1}function Ve(t,e){const n=g(t,e==null?void 0:e.in),r=+W(n)-+oe(n);return Math.round(r/R)+1}function L(t,e){var f,w,M,P;const n=g(t,e==null?void 0:e.in),r=n.getFullYear(),a=S(),i=(e==null?void 0:e.firstWeekContainsDate)??((w=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:w.firstWeekContainsDate)??a.firstWeekContainsDate??((P=(M=a.locale)==null?void 0:M.options)==null?void 0:P.firstWeekContainsDate)??1,o=b((e==null?void 0:e.in)||t,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const u=k(o,e),d=b((e==null?void 0:e.in)||t,0);d.setFullYear(r,0,i),d.setHours(0,0,0,0);const l=k(d,e);return+n>=+u?r+1:+n>=+l?r:r-1}function Ae(t,e){var u,d,l,f;const n=S(),r=(e==null?void 0:e.firstWeekContainsDate)??((d=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??n.firstWeekContainsDate??((f=(l=n.locale)==null?void 0:l.options)==null?void 0:f.firstWeekContainsDate)??1,a=L(t,e),i=b((e==null?void 0:e.in)||t,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),k(i,e)}function Ie(t,e){const n=g(t,e==null?void 0:e.in),r=+k(n,e)-+Ae(n,e);return Math.round(r/R)+1}function c(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const y={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return c(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):c(n+1,2)},d(t,e){return c(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return c(t.getHours()%12||12,e.length)},H(t,e){return c(t.getHours(),e.length)},m(t,e){return c(t.getMinutes(),e.length)},s(t,e){return c(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return c(a,e.length)}},v={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},E={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return y.y(t,e)},Y:function(t,e,n,r){const a=L(t,r),i=a>0?a:1-a;if(e==="YY"){const o=i%100;return c(o,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):c(i,e.length)},R:function(t,e){const n=X(t);return c(n,e.length)},u:function(t,e){const n=t.getFullYear();return c(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return c(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return y.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=Ie(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):c(a,e.length)},I:function(t,e,n){const r=Ve(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):c(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):y.d(t,e)},D:function(t,e,n){const r=Ge(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):c(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return c(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return c(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=v.noon:r===0?a=v.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=v.evening:r>=12?a=v.afternoon:r>=4?a=v.morning:a=v.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return y.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):y.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):y.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):y.s(t,e)},S:function(t,e){return y.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return q(r);case"XXXX":case"XX":return x(r);case"XXXXX":case"XXX":default:return x(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return q(r);case"xxxx":case"xx":return x(r);case"xxxxx":case"xxx":default:return x(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+F(r,":");case"OOOO":default:return"GMT"+x(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+F(r,":");case"zzzz":default:return"GMT"+x(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return c(r,e.length)},T:function(t,e,n){return c(+t,e.length)}};function F(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+e+c(i,2)}function q(t,e){return t%60===0?(t>0?"-":"+")+c(Math.abs(t)/60,2):x(t,e)}function x(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=c(Math.trunc(r/60),2),i=c(r%60,2);return n+a+e+i}const _=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},B=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Je=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return _(t,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",_(r,e)).replace("{{time}}",B(a,e))},$e={p:B,P:Je},ze=/^D+$/,Ue=/^Y+$/,Ke=["D","DD","YY","YYYY"];function Ze(t){return ze.test(t)}function et(t){return Ue.test(t)}function tt(t,e,n){const r=nt(t,e,n);if(console.warn(r),Ke.includes(t))throw new RangeError(r)}function nt(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,at=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,it=/^'([^]*?)'?$/,st=/''/g,ot=/[a-zA-Z]/;function H(t,e,n){var f,w,M,P;const r=S(),a=r.locale??Be,i=r.firstWeekContainsDate??((w=(f=r.locale)==null?void 0:f.options)==null?void 0:w.firstWeekContainsDate)??1,o=r.weekStartsOn??((P=(M=r.locale)==null?void 0:M.options)==null?void 0:P.weekStartsOn)??0,u=g(t,n==null?void 0:n.in);if(!ue(u))throw new RangeError("Invalid time value");let d=e.match(at).map(h=>{const m=h[0];if(m==="p"||m==="P"){const Y=$e[m];return Y(h,a.formatLong)}return h}).join("").match(rt).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const m=h[0];if(m==="'")return{isToken:!1,value:ct(h)};if(E[m])return{isToken:!0,value:h};if(m.match(ot))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return{isToken:!1,value:h}});a.localize.preprocessor&&(d=a.localize.preprocessor(u,d));const l={firstWeekContainsDate:i,weekStartsOn:o,locale:a};return d.map(h=>{if(!h.isToken)return h.value;const m=h.value;(et(m)||Ze(m))&&tt(m,e,String(t));const Y=E[m[0]];return Y(u,m,a.localize,l)}).join("")}function ct(t){const e=t.match(it);return e?e[1].replace(st,"'"):t}const Q=({registration:t,type:e})=>{const n=e==="playDate"?t.play_date:t.tournament,r=e==="playDate"?n.tee_time:n.start_time,a=e==="playDate"?n.location:n.venue,i=e==="playDate"?n.guest_fee:n.entry_fee;return s.jsxs(I,{className:"w-full",children:[s.jsxs(J,{children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx($,{className:"text-xl font-bold",children:n.title}),s.jsx(T,{variant:t.status==="confirmed"?"success":"warning",children:t.status})]}),s.jsx(z,{children:n.description})]}),s.jsx(U,{children:s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex items-center space-x-2 text-sm",children:[s.jsx(K,{className:"h-4 w-4"}),s.jsx("span",{children:H(new Date(n.date),"EEEE, MMMM d, yyyy")})]}),s.jsxs("div",{className:"flex items-center space-x-2 text-sm",children:[s.jsx(Z,{className:"h-4 w-4"}),s.jsx("span",{children:H(new Date(`2000-01-01 ${r}`),"h:mm a")})]}),s.jsxs("div",{className:"flex items-center space-x-2 text-sm",children:[s.jsx(ee,{className:"h-4 w-4"}),s.jsx("span",{children:a})]}),s.jsxs("div",{className:"flex items-center space-x-2 text-sm",children:[s.jsx(te,{className:"h-4 w-4"}),s.jsxs("span",{children:["$",i]})]}),e==="playDate"&&t.is_member&&s.jsx("div",{className:"mt-4",children:s.jsx(T,{variant:"outline",children:"Member"})})]})})]})},bt=({registeredPlayDates:t,registeredTournaments:e})=>s.jsxs(A,{children:[s.jsx(G,{title:"My Registrations"}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Play Date Registrations"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[t.map(n=>s.jsx(Q,{registration:n,type:"playDate"},n.id)),t.length===0&&s.jsx("p",{className:"text-gray-500",children:"No play date registrations found."})]})]}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Tournament Registrations"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.map(n=>s.jsx(Q,{registration:n,type:"tournament"},n.id)),e.length===0&&s.jsx("p",{className:"text-gray-500",children:"No tournament registrations found."})]})]})]})]});export{bt as default};
