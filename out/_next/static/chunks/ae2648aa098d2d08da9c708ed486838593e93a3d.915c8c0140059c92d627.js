(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/h9T":function(e,t,n){"use strict";function a(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,"a",(function(){return a}))},"4Bjl":function(e,t,n){"use strict";var a={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};var r=n("zMQz"),i={date:Object(r.a)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:Object(r.a)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:Object(r.a)({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:function(e,t,n){var a=e.getUTCDay();return"'"+(0===a||6===a?"\xfaltimo":"\xfaltima")+"' eeee '\xe0s' p"},yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"};var u=n("ku8+");var s={ordinalNumber:function(e,t){var n=Number(e),a=String((t||{}).unit);return"week"===a||"isoWeek"===a?n+"\xaa":n+"\xba"},era:Object(u.a)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},defaultWidth:"wide"}),quarter:Object(u.a)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(u.a)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:Object(u.a)({values:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:Object(u.a)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},defaultFormattingWidth:"wide"})},c=n("wzM+"),d=n("vRX4"),l={code:"pt-BR",formatDistance:function(e,t,n){var r;return n=n||{},r="string"===typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"em "+r:"h\xe1 "+r:r},formatLong:i,formatRelative:function(e,t,n,a){var r=o[e];return"function"===typeof r?r(t,n,a):r},localize:s,match:{ordinalNumber:Object(d.a)({matchPattern:/^(\d+)[\xba\xaao]?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(c.a)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},defaultParseWidth:"any"}),quarter:Object(c.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(c.a)({matchPatterns:{narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},defaultParseWidth:"any"}),day:Object(c.a)({matchPatterns:{narrow:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,short:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[a\xe1]b)/i,wide:/^(domingo|(segunda|ter[c\xe7]a|quarta|quinta|sexta)([- ]feira)?|s[a\xe1]bado)/i},defaultMatchWidth:"wide",parsePatterns:{short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[a\xe1]b/i]},defaultParseWidth:"any"}),dayPeriod:Object(c.a)({matchPatterns:{narrow:/^(a|p|mn|md|(da) (manh\xe3|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manh\xe3|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manh\xe3/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};t.a=l},"98FW":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},Aiso:function(e,t,n){e.exports=n("dQHF")},F3KW:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n("nKUr"),r=n("q1tI"),i=Object(r.createContext)({});function o(e){var t=e.children,n=Object(r.useState)([]),o=n[0],u=n[1],s=Object(r.useState)(0),c=s[0],d=s[1],l=Object(r.useState)(!1),f=l[0],m=l[1],h=Object(r.useState)(!1),g=h[0],b=h[1],v=Object(r.useState)(!1),w=v[0],p=v[1];var y=c>0,M=w||c+1<o.length;return Object(a.jsx)(i.Provider,{value:{episodeList:o,currentEpisodeIndex:c,play:function(e){u([e]),d(0),m(!0)},playList:function(e,t){u(e),d(t),m(!0)},isPlaying:f,isLooping:g,isShuffling:w,tooglePlay:function(){m(!f)},setPlayingState:function(e){m(e)},playPrevius:function(){y&&d(c-1)},playNext:function(){if(w){var e=Math.floor(Math.random()*o.length);d(e)}else M&&d(c+1)},hasPrevius:y,hasNext:M,toogleLooping:function(){b(!g)},toogleShuffle:function(){p(!w)},clearPlayerState:function(){u([]),d(0)}},children:t})}var u=function(){return Object(r.useContext)(i)}},MFIn:function(e,t,n){"use strict";function a(e){return[Math.floor(e/3600),Math.floor(e%3600/60),e%60].map((function(e){return String(e).padStart(2,"0")})).join(":")}n.d(t,"a",(function(){return a}))},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var i=r(n("q1tI")),o=n("elyg"),u=n("nOHt"),s=n("vNVm"),c={};function d(e,t,n,a){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[t+"%"+n+(r?"%"+r:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),r=n&&n.pathname||"/",l=i.default.useMemo((function(){var t=(0,o.resolveHref)(r,e.href,!0),n=a(t,2),i=n[0],u=n[1];return{href:i,as:e.as?(0,o.resolveHref)(r,e.as):u||i}}),[r,e.href,e.as]),f=l.href,m=l.as,h=e.children,g=e.replace,b=e.shallow,v=e.scroll,w=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var p=i.Children.only(h),y=p&&"object"===typeof p&&p.ref,M=(0,s.useIntersection)({rootMargin:"200px"}),j=a(M,2),x=j[0],T=j[1],C=i.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);(0,i.useEffect)((function(){var e=T&&t&&(0,o.isLocalURL)(f),a="undefined"!==typeof w?w:n&&n.locale,r=c[f+"%"+m+(a?"%"+a:"")];e&&!r&&d(n,f,m,{locale:a})}),[m,f,T,w,t,n]);var O={ref:C,onClick:function(e){p.props&&"function"===typeof p.props.onClick&&p.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,i,u,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:i,locale:s,scroll:u}))}(e,n,f,m,g,b,v,w)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(p.props&&"function"===typeof p.props.onMouseEnter&&p.props.onMouseEnter(e),d(n,f,m,{priority:!0}))}};if(e.passHref||"a"===p.type&&!("href"in p.props)){var P="undefined"!==typeof w?w:n&&n.locale,k=n&&n.isLocaleDomain&&(0,o.getDomainLocale)(m,P,n&&n.locales,n&&n.domainLocales);O.href=k||(0,o.addBasePath)((0,o.addLocale)(m,P,n&&n.defaultLocale))}return i.default.cloneElement(p,O)};t.default=l},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var a=n("J4zp"),r=n("RIqP"),i=n("AroE");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,i=void 0!==r&&r,u=e.priority,l=void 0!==u&&u,m=e.loading,h=e.className,g=e.quality,b=e.width,v=e.height,w=e.objectFit,p=e.objectPosition,x=e.loader,T=void 0===x?j:x,C=(0,o.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),O=n?"responsive":"intrinsic",P=!1;"unsized"in C?(P=Boolean(C.unsized),delete C.unsized):"layout"in C&&(C.layout&&(O=C.layout),delete C.layout);0;var k=!l&&("lazy"===m||"undefined"===typeof m);t&&t.startsWith("data:")&&(i=!0,k=!1);var S,D,W,z=(0,f.useIntersection)({rootMargin:"200px",disabled:!k}),E=a(z,2),U=E[0],q=E[1],A=!k||q,Y=M(b),N=M(v),L=M(g),H={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:p};if("undefined"!==typeof Y&&"undefined"!==typeof N&&"fill"!==O){var F=N/Y,X=isNaN(F)?"100%":"".concat(100*F,"%");"responsive"===O?(S={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},D={display:"block",boxSizing:"border-box",paddingTop:X}):"intrinsic"===O?(S={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},D={boxSizing:"border-box",display:"block",maxWidth:"100%"},W='<svg width="'.concat(Y,'" height="').concat(N,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===O&&(S={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:Y,height:N})}else"undefined"===typeof Y&&"undefined"===typeof N&&"fill"===O&&(S={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var R={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};A&&(R=y({src:t,unoptimized:i,layout:O,width:Y,quality:L,sizes:n,loader:T}));P&&(S=void 0,D=void 0,H=void 0);return s.default.createElement("div",{style:S},D?s.default.createElement("div",{style:D},W?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(W))}):null):null,!A&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},C,y({src:t,unoptimized:i,layout:O,width:Y,quality:L,sizes:n,loader:T}),{src:t,decoding:"async",sizes:n,style:H,className:h}))),s.default.createElement("img",Object.assign({},C,R,{decoding:"async",className:h,ref:U,style:H})),l?s.default.createElement(c.default,null,s.default.createElement("link",{key:"__nimg-"+R.src+R.srcSet+R.sizes,rel:"preload",as:"image",href:R.srcSet?void 0:R.src,imagesrcset:R.srcSet,imagesizes:R.sizes})):null)};var o=i(n("98FW")),u=i(n("1ccW")),s=i(n("q1tI")),c=i(n("8Kt/")),d=n("dEHY"),l=n("UWYU"),f=n("vNVm");var m=new Map([["imgix",function(e){var t=e.root,n=e.src,a=e.width,r=e.quality,i=["auto=format","fit=max","w="+a],o="";r&&i.push("q="+r);i.length&&(o="?"+i.join("&"));return"".concat(t).concat(x(n)).concat(o)}],["cloudinary",function(e){var t=e.root,n=e.src,a=e.width,r=e.quality,i=["f_auto","c_limit","w_"+a,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(x(n))}],["akamai",function(e){var t=e.root,n=e.src,a=e.width;return"".concat(t).concat(x(n),"?imwidth=").concat(a)}],["default",function(e){var t=e.root,n=e.src,a=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(a,"&q=").concat(r||75)}]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||l.imageConfigDefault,g=h.deviceSizes,b=h.imageSizes,v=h.loader,w=h.path,p=(h.domains,[].concat(r(g),r(b)));function y(e){var t=e.src,n=e.unoptimized,a=e.layout,i=e.width,o=e.quality,u=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var c=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){var a=r(n.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(e){return parseInt(e[2])}));if(a.length){var i=.01*Math.min.apply(Math,r(a));return{widths:p.filter((function(e){return e>=g[0]*i})),kind:"w"}}return{widths:p,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:g,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return p.find((function(t){return t>=e}))||p[p.length-1]})))),kind:"x"}}(i,a,u),d=c.widths,l=c.kind,f=d.length-1;return{sizes:u||"w"!==l?u:"100vw",srcSet:d.map((function(e,n){return"".concat(s({src:t,quality:o,width:e})," ").concat("w"===l?e:n+1).concat(l)})).join(", "),src:s({src:t,quality:o,width:d[f]})}}function M(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t=m.get(v);if(t)return t((0,u.default)({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(v))}function x(e){return"/"===e[0]?e.slice(1):e}g.sort((function(e,t){return e-t})),p.sort((function(e,t){return e-t}))},jIYg:function(e,t,n){"use strict";function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,"a",(function(){return a}))},"ku8+":function(e,t,n){"use strict";function a(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;a=e.values[s]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}}n.d(t,"a",(function(){return a}))},sWYD:function(e,t,n){"use strict";n.d(t,"a",(function(){return Z}));var a=n("jIYg");function r(e){Object(a.a)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(e){Object(a.a)(1,arguments);var t=r(e);return!isNaN(t)}var o={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};var u=n("zMQz"),s={date:Object(u.a)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Object(u.a)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Object(u.a)({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};var d=n("ku8+");var l={ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Object(d.a)({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Object(d.a)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:Object(d.a)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Object(d.a)({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Object(d.a)({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},f=n("vRX4"),m=n("wzM+"),h={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"===typeof o[e]?o[e]:1===t?o[e].one:o[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:s,formatRelative:function(e,t,n,a){return c[e]},localize:l,match:{ordinalNumber:Object(f.a)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:Object(m.a)({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Object(m.a)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Object(m.a)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Object(m.a)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Object(m.a)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},g=n("/h9T");function b(e,t){Object(a.a)(2,arguments);var n=r(e).getTime(),i=Object(g.a)(t);return new Date(n+i)}function v(e,t){Object(a.a)(2,arguments);var n=Object(g.a)(t);return b(e,-n)}function w(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}var p={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return w("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):w(n+1,2)},d:function(e,t){return w(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return w(e.getUTCHours()%12||12,t.length)},H:function(e,t){return w(e.getUTCHours(),t.length)},m:function(e,t){return w(e.getUTCMinutes(),t.length)},s:function(e,t){return w(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds();return w(Math.floor(a*Math.pow(10,n-3)),t.length)}},y=864e5;function M(e){Object(a.a)(1,arguments);var t=1,n=r(e),i=n.getUTCDay(),o=(i<t?7:0)+i-t;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function j(e){Object(a.a)(1,arguments);var t=r(e),n=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var o=M(i),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var s=M(u);return t.getTime()>=o.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function x(e){Object(a.a)(1,arguments);var t=j(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=M(n);return r}var T=6048e5;function C(e,t){Object(a.a)(1,arguments);var n=t||{},i=n.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:Object(g.a)(o),s=null==n.weekStartsOn?u:Object(g.a)(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=r(e),d=c.getUTCDay(),l=(d<s?7:0)+d-s;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function O(e,t){Object(a.a)(1,arguments);var n=r(e,t),i=n.getUTCFullYear(),o=t||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:Object(g.a)(s),d=null==o.firstWeekContainsDate?c:Object(g.a)(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,d),l.setUTCHours(0,0,0,0);var f=C(l,t),m=new Date(0);m.setUTCFullYear(i,0,d),m.setUTCHours(0,0,0,0);var h=C(m,t);return n.getTime()>=f.getTime()?i+1:n.getTime()>=h.getTime()?i:i-1}function P(e,t){Object(a.a)(1,arguments);var n=t||{},r=n.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:Object(g.a)(i),u=null==n.firstWeekContainsDate?o:Object(g.a)(n.firstWeekContainsDate),s=O(e,t),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var d=C(c,t);return d}var k=6048e5;var S="midnight",D="noon",W="morning",z="afternoon",E="evening",U="night";function q(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=t||"";return n+String(r)+o+w(i,2)}function A(e,t){return e%60===0?(e>0?"-":"+")+w(Math.abs(e)/60,2):Y(e,t)}function Y(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+w(Math.floor(r/60),2)+n+w(r%60,2)}var N={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return p.y(e,t)},Y:function(e,t,n,a){var r=O(e,a),i=r>0?r:1-r;return"YY"===t?w(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):w(i,t.length)},R:function(e,t){return w(j(e),t.length)},u:function(e,t){return w(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return w(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return w(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return p.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return w(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,i){var o=function(e,t){Object(a.a)(1,arguments);var n=r(e),i=C(n,t).getTime()-P(n,t).getTime();return Math.round(i/k)+1}(e,i);return"wo"===t?n.ordinalNumber(o,{unit:"week"}):w(o,t.length)},I:function(e,t,n){var i=function(e){Object(a.a)(1,arguments);var t=r(e),n=M(t).getTime()-x(t).getTime();return Math.round(n/T)+1}(e);return"Io"===t?n.ordinalNumber(i,{unit:"week"}):w(i,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):p.d(e,t)},D:function(e,t,n){var i=function(e){Object(a.a)(1,arguments);var t=r(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),o=n-i;return Math.floor(o/y)+1}(e);return"Do"===t?n.ordinalNumber(i,{unit:"dayOfYear"}):w(i,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return w(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return w(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return w(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?D:0===r?S:r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?E:r>=12?z:r>=4?W:U,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return p.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):p.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):w(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):w(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):p.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):p.s(e,t)},S:function(e,t){return p.S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return A(r);case"XXXX":case"XX":return Y(r);case"XXXXX":case"XXX":default:return Y(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return A(r);case"xxxx":case"xx":return Y(r);case"xxxxx":case"xxx":default:return Y(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+q(r,":");case"OOOO":default:return"GMT"+Y(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+q(r,":");case"zzzz":default:return"GMT"+Y(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return w(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return w((a._originalDate||e).getTime(),t.length)}};function L(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function H(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var F={p:H,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return L(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",L(r,t)).replace("{{time}}",H(i,t))}};function X(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var R=["D","DD"],_=["YY","YYYY"];function I(e){return-1!==R.indexOf(e)}function Q(e){return-1!==_.indexOf(e)}function B(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var G=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,V=/^'([^]*?)'?$/,K=/''/g,$=/[a-zA-Z]/;function Z(e,t,n){Object(a.a)(2,arguments);var o=String(t),u=n||{},s=u.locale||h,c=s.options&&s.options.firstWeekContainsDate,d=null==c?1:Object(g.a)(c),l=null==u.firstWeekContainsDate?d:Object(g.a)(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=s.options&&s.options.weekStartsOn,m=null==f?0:Object(g.a)(f),b=null==u.weekStartsOn?m:Object(g.a)(u.weekStartsOn);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var w=r(e);if(!i(w))throw new RangeError("Invalid time value");var p=X(w),y=v(w,p),M={firstWeekContainsDate:l,weekStartsOn:b,locale:s,_originalDate:w},j=o.match(J).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,F[t])(e,s.formatLong,M):e})).join("").match(G).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return ee(n);var r=N[a];if(r)return!u.useAdditionalWeekYearTokens&&Q(n)&&B(n,t,e),!u.useAdditionalDayOfYearTokens&&I(n)&&B(n,t,e),r(y,n,s.localize,M);if(a.match($))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return j}function ee(e){return e.match(V)[1].replace(K,"'")}},vNVm:function(e,t,n){"use strict";var a=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=(0,r.useRef)(),c=(0,r.useState)(!1),d=a(c,2),l=d[0],f=d[1],m=(0,r.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||l||e&&e.tagName&&(s.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,i=a.observer,o=a.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),u.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,l]);return(0,r.useEffect)((function(){if(!o&&!l){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[l]),[m,l]};var r=n("q1tI"),i=n("0G5g"),o="undefined"!==typeof IntersectionObserver;var u=new Map},vRX4:function(e,t,n){"use strict";function a(e){return function(t,n){var a=String(t),r=n||{},i=a.match(e.matchPattern);if(!i)return null;var o=i[0],u=a.match(e.parsePattern);if(!u)return null;var s=e.valueCallback?e.valueCallback(u[0]):u[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(o.length)}}}n.d(t,"a",(function(){return a}))},"wzM+":function(e,t,n){"use strict";function a(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=a.match(o);if(!u)return null;var s,c=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(d,(function(e){return e.test(c)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,(function(e){return e.test(c)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(c.length)}}}n.d(t,"a",(function(){return a}))},zMQz:function(e,t,n){"use strict";function a(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}n.d(t,"a",(function(){return a}))}}]);