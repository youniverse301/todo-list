(()=>{"use strict";const t=document.getElementById("rightContainer"),e=document.createElement("div");e.setAttribute("id","titleContainer");const n=document.createElement("h1");n.setAttribute("id","allTasksTitle"),document.createElement("div").setAttribute("id","taskContainer");const r=document.createElement("img");r.setAttribute("id","completeTaskBtn"),r.src="./imgs/filledCircle.png",document.createElement("div").setAttribute("id","textContainer");const a=document.createElement("div");a.setAttribute("id","taskTitle"),a.innerHTML="Take out the trash";const i=document.createElement("div");i.setAttribute("id","taskDesc"),i.innerHTML="Dont forget dont forget dont forget",document.createElement("div").setAttribute("id","dateContainer");const o=document.createElement("p");o.setAttribute("id","dateText"),o.innerHTML="02/23/23";const d=document.createElement("img");d.setAttribute("id","importantBtn"),d.src="./imgs/starUnfilled.png";const u=document.createElement("img");u.setAttribute("id","editBtn"),u.src="./imgs/menu-vertical.png";let c=0;function s(t){c++;const e=document.getElementById("projects"),n=document.createElement("div");n.setAttribute("class","project"),n.setAttribute("id",`project-${c}`),e.appendChild(n);const r=document.createElement("img");r.setAttribute("id","projectImg"),r.src="./imgs/sidebarBtn.png",n.appendChild(r);const a=document.createElement("div");a.setAttribute("id","projectTitle"),a.innerHTML=t,n.appendChild(a);const i=document.createElement("div");i.setAttribute("id","menuvertWrap"),n.appendChild(i);const o=document.createElement("img");o.setAttribute("id","menuVert"),o.src="./imgs/menu-vertical.png",i.appendChild(o),document.querySelectorAll(".project").forEach((function(t){t.addEventListener("click",(function(){const e=document.querySelector(".selected");e&&e.classList.remove("selected"),t.classList.add("selected");const n=t.querySelector("#projectTitle");document.getElementById("allTasksTitle").innerHTML=n.innerText;const r=t.getAttribute("id");document.querySelectorAll(".taskContainer").forEach((function(t){t.classList.contains(r)?t.classList.remove("hidden"):t.classList.add("hidden")}))}))})),i.addEventListener("click",l)}function l(t){const e=t.target.parentNode,n=document.getElementById("editContainer");if(n&&e.contains(n))n.remove();else{const t=document.createElement("div");t.setAttribute("id","editContainer");const n=document.createElement("button");n.setAttribute("id","renameBtn"),n.textContent="Rename";const r=document.createElement("button");r.setAttribute("id","deleteBtn"),r.textContent="Delete",t.appendChild(n),t.appendChild(r),n.addEventListener("click",h),r.addEventListener("click",m),e.appendChild(t)}}function m(){event.target.closest(".project").remove()}function h(){const t=event.target.closest(".project"),e=t.querySelector("#projectTitle"),n=document.createElement("form");n.setAttribute("id","renameForm");const r=document.createElement("input");r.type="text",r.value=e.innerText,n.appendChild(r);const a=document.createElement("button");a.type="submit",a.innerText="Rename",n.appendChild(a),t.replaceChild(n,e),document.getElementById("editContainer").remove(),n.addEventListener("submit",(function(e){e.preventDefault();const a=r.value,i=document.createElement("div");i.setAttribute("id","projectTitle"),i.innerText=a,t.replaceChild(i,n),document.getElementById("allTasksTitle").innerText=a}))}document.querySelectorAll(".renameBtn").forEach((function(t){t.addEventListener("click",h)}));const f=document.createElement("form");f.setAttribute("id","projectForm");const g=document.createElement("input");g.setAttribute("id","input1"),g.type="text",g.project="project",f.appendChild(g);const v=document.createElement("button");v.type="submit",v.textContent="Add",f.appendChild(v);const p=document.createElement("button");function b(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function C(t){b(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===w(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function E(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}p.setAttribute("id","cancel"),p.textContent="Cancel",f.appendChild(p),document.getElementById("addProject").addEventListener("click",(function(t){document.getElementById("projects").appendChild(f),document.getElementById("cancel").addEventListener("click",(function(t){f.remove()}))})),f.addEventListener("submit",(function(t){t.preventDefault();const e={},n=document.getElementById("input1").value;e.name=n,console.log(e.name),g.value="",s(n),f.remove()}));var T=864e5;function k(t){b(1,arguments);var e=C(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function M(t){b(1,arguments);var e=C(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=k(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=k(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}var x=6048e5;var A={};function D(){return A}function S(t,e){var n,r,a,i,o,d,u,c;b(1,arguments);var s=D(),l=E(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(d=o.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==a?a:s.weekStartsOn)&&void 0!==r?r:null===(u=s.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=C(t),h=m.getUTCDay(),f=(h<l?7:0)+h-l;return m.setUTCDate(m.getUTCDate()-f),m.setUTCHours(0,0,0,0),m}function L(t,e){var n,r,a,i,o,d,u,c;b(1,arguments);var s=C(t),l=s.getUTCFullYear(),m=D(),h=E(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(d=o.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==r?r:null===(u=m.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(l+1,0,h),f.setUTCHours(0,0,0,0);var g=S(f,e),v=new Date(0);v.setUTCFullYear(l,0,h),v.setUTCHours(0,0,0,0);var p=S(v,e);return s.getTime()>=g.getTime()?l+1:s.getTime()>=p.getTime()?l:l-1}var B=6048e5;function U(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const P=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return U("yy"===e?r%100:r,e.length)},W=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):U(n+1,2)},I=function(t,e){return U(t.getUTCDate(),e.length)},q=function(t,e){return U(t.getUTCHours()%12||12,e.length)},Y=function(t,e){return U(t.getUTCHours(),e.length)},j=function(t,e){return U(t.getUTCMinutes(),e.length)},H=function(t,e){return U(t.getUTCSeconds(),e.length)},N=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return U(Math.floor(r*Math.pow(10,n-3)),e.length)};var O={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return P(t,e)},Y:function(t,e,n,r){var a=L(t,r),i=a>0?a:1-a;return"YY"===e?U(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):U(i,e.length)},R:function(t,e){return U(M(t),e.length)},u:function(t,e){return U(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return U(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return U(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return W(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return U(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){b(1,arguments);var n=C(t),r=S(n,e).getTime()-function(t,e){var n,r,a,i,o,d,u,c;b(1,arguments);var s=D(),l=E(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(d=o.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==a?a:s.firstWeekContainsDate)&&void 0!==r?r:null===(u=s.locale)||void 0===u||null===(c=u.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),m=L(t,e),h=new Date(0);return h.setUTCFullYear(m,0,l),h.setUTCHours(0,0,0,0),S(h,e)}(n,e).getTime();return Math.round(r/B)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):U(a,e.length)},I:function(t,e,n){var r=function(t){b(1,arguments);var e=C(t),n=k(e).getTime()-function(t){b(1,arguments);var e=M(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),k(n)}(e).getTime();return Math.round(n/x)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):U(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):I(t,e)},D:function(t,e,n){var r=function(t){b(1,arguments);var e=C(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/T)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):U(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return U(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return U(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return U(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return q(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Y(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):U(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):U(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):j(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):H(t,e)},S:function(t,e){return N(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return z(a);case"XXXX":case"XX":return Q(a);default:return Q(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return z(a);case"xxxx":case"xx":return Q(a);default:return Q(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+F(a,":");default:return"GMT"+Q(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+F(a,":");default:return"GMT"+Q(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return U(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return U((r._originalDate||t).getTime(),e.length)}};function F(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+U(i,2)}function z(t,e){return t%60==0?(t>0?"-":"+")+U(Math.abs(t)/60,2):Q(t,e)}function Q(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+U(Math.floor(a/60),2)+n+U(a%60,2)}const G=O;var R=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},X=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},J={p:X,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return R(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",R(a,e)).replace("{{time}}",X(i,e))}};const _=J;var V=["D","DD"],$=["YY","YYYY"];function K(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Z={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function tt(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var et,nt={date:tt({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:tt({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:tt({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},rt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function at(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,d=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[d]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function it(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,d=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(d))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(d))return n}(u);return o=t.valueCallback?t.valueCallback(c):c,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(d.length)}}}const ot={code:"en-US",formatDistance:function(t,e,n){var r,a=Z[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:nt,formatRelative:function(t,e,n,r){return rt[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:at({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:at({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:at({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:at({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:at({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(et={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(et.matchPattern);if(!n)return null;var r=n[0],a=t.match(et.parsePattern);if(!a)return null;var i=et.valueCallback?et.valueCallback(a[0]):a[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(r.length)}}),era:it({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:it({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:it({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:it({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:it({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var dt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ut=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ct=/^'([^]*?)'?$/,st=/''/g,lt=/[a-zA-Z]/;function mt(t,e,n){var r,a,i,o,d,u,c,s,l,m,h,f,g,v,p,w,T,k;b(2,arguments);var M=String(e),x=D(),A=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:x.locale)&&void 0!==r?r:ot,S=E(null!==(i=null!==(o=null!==(d=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==d?d:x.firstWeekContainsDate)&&void 0!==o?o:null===(l=x.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==i?i:1);if(!(S>=1&&S<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var L=E(null!==(h=null!==(f=null!==(g=null!==(v=null==n?void 0:n.weekStartsOn)&&void 0!==v?v:null==n||null===(p=n.locale)||void 0===p||null===(w=p.options)||void 0===w?void 0:w.weekStartsOn)&&void 0!==g?g:x.weekStartsOn)&&void 0!==f?f:null===(T=x.locale)||void 0===T||null===(k=T.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==h?h:0);if(!(L>=0&&L<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!A.localize)throw new RangeError("locale must contain localize property");if(!A.formatLong)throw new RangeError("locale must contain formatLong property");var B=C(t);if(!function(t){if(b(1,arguments),!function(t){return b(1,arguments),t instanceof Date||"object"===y(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=C(t);return!isNaN(Number(e))}(B))throw new RangeError("Invalid time value");var U=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(B),P=function(t,e){return b(2,arguments),function(t,e){b(2,arguments);var n=C(t).getTime(),r=E(e);return new Date(n+r)}(t,-E(e))}(B,U),W={firstWeekContainsDate:S,weekStartsOn:L,locale:A,_originalDate:B};return M.match(ut).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,_[e])(t,A.formatLong):t})).join("").match(dt).map((function(r){if("''"===r)return"'";var a,i,o=r[0];if("'"===o)return(i=(a=r).match(ct))?i[1].replace(st,"'"):a;var d,u=G[o];if(u)return null!=n&&n.useAdditionalWeekYearTokens||(d=r,-1===$.indexOf(d))||K(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==V.indexOf(t)}(r)||K(r,e,String(t)),u(P,r,A.localize,W);if(o.match(lt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return r})).join("")}const ht=document.getElementById("rightContainer");document.getElementById("titleContainer"),document.createElement("div").setAttribute("id","taskContainer");const ft=document.createElement("img");ft.setAttribute("id","completeTaskBtn"),ft.src="./imgs/filledCircle.png",document.createElement("div").setAttribute("id","textContainer");const gt=document.createElement("div");gt.setAttribute("id","taskTitle"),gt.innerHTML="Take out the trash";const vt=document.createElement("div");vt.setAttribute("id","taskDesc"),vt.innerHTML="Dont forget dont forget dont forget",document.createElement("div").setAttribute("id","dateContainer");const pt=document.createElement("p");pt.setAttribute("id","dateText"),pt.innerHTML="02/23/23";const bt=document.createElement("img");bt.setAttribute("id","importantBtn"),bt.src="./imgs/starUnfilled.png";const yt=document.createElement("img");yt.setAttribute("id","editBtn"),yt.src="./imgs/menu-vertical.png";const wt=document.createElement("div");wt.setAttribute("id","addTaskContainer"),wt.addEventListener("click",(function(){const t=document.createElement("div");t.setAttribute("id","taskFormContainer"),ht.appendChild(t);const e=document.createElement("form");e.setAttribute("id","taskForm"),t.appendChild(e);const n=document.createElement("label");n.setAttribute("for","titleInput"),n.textContent="Title:",e.appendChild(n);const r=document.createElement("input");r.setAttribute("id","titleInput"),r.type="text",e.appendChild(r);const a=document.createElement("label");a.setAttribute("for","detailsInput"),a.textContent="Details (optional):",e.appendChild(a);const i=document.createElement("input");i.setAttribute("id","detailsInput"),i.type="text",e.appendChild(i);const o=document.createElement("label");o.setAttribute("for","dateInput"),o.textContent="Date:",e.appendChild(o);const d=document.createElement("input");d.setAttribute("id","dateInput"),d.type="date",e.appendChild(d);const u=document.createElement("button");u.type="submit",u.textContent="Add",u.addEventListener("click",kt),e.appendChild(u);const c=document.createElement("button");c.setAttribute("id","cancel"),c.textContent="Cancel",c.addEventListener("click",Tt),e.appendChild(c)}));const Ct=document.createElement("img");Ct.setAttribute("id","addBtn"),Ct.src="./imgs/addBtn.png";const Et=document.createElement("div");function Tt(){event.preventDefault(),document.getElementById("taskFormContainer")}function kt(){event.preventDefault();const t=document.getElementById("titleInput").value,e=document.getElementById("detailsInput").value,n=document.getElementById("dateInput").value,r=function(t,e,n){return{title:t,details:e,date:n,completed:!1}}(t,e,new Date(n).toLocaleDateString("en-US",{timeZone:"UTC"})),a=function(t){Mt++;const e=document.createElement("div");e.setAttribute("class","taskContainer"),e.setAttribute("id",`task-${Mt}`);const n=document.querySelector(".project.selected");document.createElement("div"),e.classList.add(n.id);const r=document.createElement("img");r.setAttribute("id","completeTaskBtn"),r.src="./imgs/filledCircle.png",r.addEventListener("click",Lt);const a=document.createElement("div");a.setAttribute("id","textContainer");const i=document.createElement("div");i.setAttribute("id","taskTitle"),i.innerHTML=t.title;const o=document.createElement("div");o.setAttribute("id","taskDesc"),o.innerHTML=t.details;const d=document.createElement("div");d.setAttribute("id","dateContainer");const u=document.createElement("p");if(u.setAttribute("id","dateText"),t.date)try{const e=mt(new Date(t.date),"MM/dd/yyyy");u.innerHTML=e}catch(t){u.innerHTML=""}else u.innerHTML="";const c=document.createElement("img");c.setAttribute("id","importantBtn"),c.src="./imgs/starUnfilled.png",c.addEventListener("click",St);const s=document.createElement("div");s.setAttribute("id","editBtnContainer"),s.addEventListener("click",xt);const l=document.createElement("img");return l.setAttribute("id","editBtn"),l.src="./imgs/menu-vertical.png",e.appendChild(r),a.appendChild(i),a.appendChild(o),e.appendChild(a),d.appendChild(u),e.appendChild(d),e.appendChild(c),e.appendChild(s),s.appendChild(l),e}(r);ht.appendChild(a),taskFormContainer.remove(),console.log(r),console.log(r.details)}Et.setAttribute("id","addTaskText"),Et.innerHTML="Add Task";let Mt=0;function xt(t){const e=t.target.parentNode,n=document.getElementById("editTaskContainer");if(n&&e.contains(n))n.remove();else{const t=document.createElement("div");t.setAttribute("id","editTaskContainer");const n=document.createElement("button");n.setAttribute("id","editTaskBtn"),n.textContent="Edit";const r=document.createElement("button");r.setAttribute("id","deleteTaskBtn"),r.textContent="Delete",t.appendChild(n),t.appendChild(r),r.addEventListener("click",At),n.addEventListener("click",Dt),e.appendChild(t)}}function At(){event.target.closest(".taskContainer").remove()}function Dt(t){const e=t.target.closest(".taskContainer"),n=e.querySelector("#taskTitle"),r=e.querySelector("#taskDesc"),a=e.querySelector("#dateText"),i=document.createElement("div");i.setAttribute("id","taskFormContainer"),ht.appendChild(i);const o=document.createElement("form");o.setAttribute("id","taskForm"),i.appendChild(o);const d=document.createElement("label");d.setAttribute("for","titleInput"),d.textContent="Title:",o.appendChild(d);const u=document.createElement("input");u.setAttribute("id","titleInput"),u.type="text",u.value=n.innerText,o.appendChild(u);const c=document.createElement("label");c.setAttribute("for","detailsInput"),c.textContent="Details (optional):",o.appendChild(c);const s=document.createElement("input");s.setAttribute("id","detailsInput"),s.type="text",s.value=r.innerText,o.appendChild(s);const l=document.createElement("label");l.setAttribute("for","dateInput"),l.textContent="Date:",o.appendChild(l);const m=document.createElement("input");m.setAttribute("id","dateInput"),m.type="date";const h=mt(new Date(a.innerText),"yyyy-MM-dd");m.value=h,console.log(mt(new Date(a.innerText),"yyyy/MM/dd")),o.appendChild(m);const f=document.createElement("button");f.type="submit",f.textContent="Save",f.addEventListener("click",(function(t){t.preventDefault();const e=u.value,o=document.createElement("div");o.setAttribute("id","taskTitle"),o.innerText=e,n.replaceWith(o);const d=s.value,c=document.createElement("div");c.setAttribute("id","taskDesc"),c.innerText=d,r.replaceWith(c);const l=mt(new Date(m.value),"MM/dd/yyyy"),h=document.createElement("div");h.setAttribute("id","dateText"),h.innerText=l,a.replaceWith(h),i.remove()})),o.appendChild(f);const g=document.createElement("button");g.setAttribute("id","cancel"),g.textContent="Cancel",g.addEventListener("click",Tt),o.appendChild(g)}function St(){const t=event.target.closest(".taskContainer");t.querySelector("#importantBtn").src="./imgs/starFilled.png",t.classList.add("important")}function Lt(){const t=event.target.closest(".taskContainer");t.querySelector("#completeTaskBtn").src="./imgs/filledCircleBlue.png",t.classList.add("completed")}!function(){t.appendChild(e),e.appendChild(n);var r="Default";s(r),document.getElementById("project-1").classList.add("selected"),n.innerHTML=r}(),ht.appendChild(wt),wt.appendChild(Ct),wt.appendChild(Et),function(){const t=new Date;console.log(t);const e=mt(t,"MM/dd/yyyy");console.log(e),document.getElementById("todayDate").innerHTML=e}(),document.getElementById("inbox").addEventListener("click",(function(){document.getElementById("leftContainer").querySelectorAll(".selected").forEach((function(t){t.classList.remove("selected")})),document.getElementById("inbox").classList.add("selected"),document.querySelectorAll(".taskContainer").forEach((function(t){t.classList.remove("hidden")}))})),document.getElementById("today").addEventListener("click",(function(){document.getElementById("leftContainer").querySelectorAll(".selected").forEach((function(t){t.classList.remove("selected")})),document.getElementById("today").classList.add("selected");const t=document.querySelectorAll(".taskContainer"),e=mt(new Date,"MM/dd/yyyy");t.forEach((function(t){t.querySelector("#dateText").textContent===e?t.classList.remove("hidden"):t.classList.add("hidden")}))})),document.getElementById("next7").addEventListener("click",(function(){document.getElementById("leftContainer").querySelectorAll(".selected").forEach((function(t){t.classList.remove("selected")})),document.getElementById("next7").classList.add("selected"),document.querySelectorAll(".taskContainer").forEach((function(t){t.classList.remove("hidden")}))})),document.getElementById("important").addEventListener("click",(function(){document.getElementById("leftContainer").querySelectorAll(".selected").forEach((function(t){t.classList.remove("selected")}));const t=document.querySelectorAll(".taskContainer");document.getElementById("important").classList.add("selected"),t.forEach((function(t){t.classList.contains("important")?t.classList.remove("hidden"):t.classList.add("hidden")}))}))})();