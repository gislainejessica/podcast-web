_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"++SG":function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/episode/[slug]",function(){return o("8GFE")}])},"20a2":function(e,a,o){e.exports=o("nOHt")},"4+6U":function(e,a,o){"use strict";o.d(a,"a",(function(){return l}));var i=o("/h9T"),r=o("jIYg"),s=36e5,t={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},n=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,d=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function l(e,a){Object(r.a)(1,arguments);var o=a||{},s=null==o.additionalDigits?2:Object(i.a)(o.additionalDigits);if(2!==s&&1!==s&&0!==s)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var t,n=p(e);if(n.date){var d=u(n.date,s);t=m(d.restDateString,d.year)}if(isNaN(t)||!t)return new Date(NaN);var c,l=t.getTime(),g=0;if(n.time&&(g=v(n.time),isNaN(g)||null===g))return new Date(NaN);if(!n.timezone){var b=new Date(l+g),f=new Date(0);return f.setFullYear(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()),f.setHours(b.getUTCHours(),b.getUTCMinutes(),b.getUTCSeconds(),b.getUTCMilliseconds()),f}return c=h(n.timezone),isNaN(c)?new Date(NaN):new Date(l+g+c)}function p(e){var a,o={},i=e.split(t.dateTimeDelimiter);if(i.length>2)return o;if(/:/.test(i[0])?(o.date=null,a=i[0]):(o.date=i[0],a=i[1],t.timeZoneDelimiter.test(o.date)&&(o.date=e.split(t.timeZoneDelimiter)[0],a=e.substr(o.date.length,e.length))),a){var r=t.timezone.exec(a);r?(o.time=a.replace(r[1],""),o.timezone=r[1]):o.time=a}return o}function u(e,a){var o=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+a)+"})|(\\d{2}|[+-]\\d{"+(2+a)+"})$)"),i=e.match(o);if(!i)return{year:null};var r=i[1]&&parseInt(i[1]),s=i[2]&&parseInt(i[2]);return{year:null==s?r:100*s,restDateString:e.slice((i[1]||i[2]).length)}}function m(e,a){if(null===a)return null;var o=e.match(n);if(!o)return null;var i=!!o[4],r=g(o[1]),s=g(o[2])-1,t=g(o[3]),d=g(o[4]),c=g(o[5])-1;if(i)return function(e,a,o){return a>=1&&a<=53&&o>=0&&o<=6}(0,d,c)?function(e,a,o){var i=new Date(0);i.setUTCFullYear(e,0,4);var r=i.getUTCDay()||7,s=7*(a-1)+o+1-r;return i.setUTCDate(i.getUTCDate()+s),i}(a,d,c):new Date(NaN);var l=new Date(0);return function(e,a,o){return a>=0&&a<=11&&o>=1&&o<=(f[a]||(w(e)?29:28))}(a,s,t)&&function(e,a){return a>=1&&a<=(w(e)?366:365)}(a,r)?(l.setUTCFullYear(a,s,Math.max(r,t)),l):new Date(NaN)}function g(e){return e?parseInt(e):1}function v(e){var a=e.match(d);if(!a)return null;var o=b(a[1]),i=b(a[2]),r=b(a[3]);return function(e,a,o){if(24===e)return 0===a&&0===o;return o>=0&&o<60&&a>=0&&a<60&&e>=0&&e<25}(o,i,r)?o*s+6e4*i+1e3*r:NaN}function b(e){return e&&parseFloat(e.replace(",","."))||0}function h(e){if("Z"===e)return 0;var a=e.match(c);if(!a)return 0;var o="+"===a[1]?-1:1,i=parseInt(a[2]),r=a[3]&&parseInt(a[3])||0;return function(e,a){return a>=0&&a<=59}(0,r)?o*(i*s+6e4*r):NaN}var f=[31,null,31,30,31,30,31,31,30,31,30,31];function w(e){return e%400===0||e%4===0&&e%100}},"8GFE":function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return w}));var i=o("nKUr"),r=o("YFqc"),s=o.n(r),t=o("Aiso"),n=o.n(t),d=o("sWYD"),c=o("4+6U"),l=o("4Bjl"),p=o("MFIn"),u=o("qNvn"),m=o.n(u),g=o("F3KW"),v=o("g4pe"),b=o.n(v),h=o("20a2"),f={episodes:[{id:"a-importancia-da-contribuicao-em-open-source",title:"Faladev #30 | A import\xe2ncia da contribui\xe7\xe3o em Open Source",members:"Diego Fernandes, Jo\xe3o Pedro, Diego Haz e Bruno Lemos",published_at:"2021-01-22 16:35:40",thumbnail:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/opensource.jpg",description:"<p>Nesse epis\xf3dio do Faladev, Diego Fernandes se re\xfane com Jo\xe3o Pedro Schmitz, Bruno Lemos e Diego Haz, para discutir sobre a import\xe2ncia da contribui\xe7\xe3o open source e quais desafios circulam na comunidade.</p><p>A gente passa a maior parte do tempo escrevendo c\xf3digo. Agora chegou o momento de falar sobre isso. Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na \xf3rbita da programa\xe7\xe3o.</p><p>O Faladev \xe9 um podcast original Rocketseat.</p>",file:{url:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/opensource.m4a",type:"audio/x-m4a",duration:3981}},{id:"uma-conversa-sobre-programacao-funcional-e-orientacao-a-objetos",title:"Faladev #29 | Duas perspectivas diferentes na mesa: uma conversa sobre PF e OOP",members:"Diego Fernandes, Dani Le\xe3o, Laura Beatris e Rafael Camarda",published_at:"2021-01-15 13:00:00",thumbnail:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/funcional.jpg",description:"<p>Diego e Dani receberam Laura Beatris e Rafael Camarda na mesa do Faladev para conversarem sobre programa\xe7\xe3o funcional e programa\xe7\xe3o orientada a objetos.</p><p>An\xe1lises de mercado, conceitos na pr\xe1tica e desafios na ado\xe7\xe3o de qualquer m\xe9todo de desenvolvimento. Tudo isso numa conversa din\xe2mica e relevante para nosso p\xfablico.</p><p>A gente passa a maior parte do tempo escrevendo c\xf3digo. Agora chegou o momento de falar sobre isso. Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na \xf3rbita da programa\xe7\xe3o.</p><p>O Faladev \xe9 um podcast original Rocketseat.</p>\n",file:{url:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/funcional.m4a",type:"audio/x-m4a",duration:4237}},{id:"barreiras-e-solucoes-propostas-por-micro-servicos",title:"Faladev #28 | Por tr\xe1s de barreiras e solu\xe7\xf5es propostas por micro-servi\xe7os",members:"Diego Fernandes, Dani Le\xe3o, Wesley Williams e Lucas Santos",published_at:"2021-01-08 13:00:00",thumbnail:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/microservicos.jpg",description:"<p>Os desenvolvedores Wesley Willians e Lucas Santos foram convidados para este Faladev para ter uma conversa sobre o que s\xe3o micro-servi\xe7os e quais s\xe3o os desafios e as barreiras de sua aplica\xe7\xe3o.</p><p>Nessa edi\xe7\xe3o, Diego Fernandes e Daniele Evangelista guiam a conversa levantando t\xf3picos e questionamentos relevantes sobre o assunto.</p><p>A gente passa a maior parte do tempo escrevendo c\xf3digo. Agora chegou o momento de falar sobre isso. Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na \xf3rbita da programa\xe7\xe3o.</p><p>O Faladev \xe9 um podcast original Rocketseat. \xa0#programa\xe7\xe3o #rocketseat #programador #programador</p>",file:{url:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/microservicos.m4a",type:"audio/x-m4a",duration:5506}},{id:"aplicacao-de-arquiteturas-mvc-e-clean-architecture-na-pratica",title:"Faladev #27 | Aplica\xe7\xe3o de arquiteturas MVC e CA na pr\xe1tica",members:"Diego Fernandes, Dani Le\xe3o, Ot\xe1vio Lemos e Rodrigo Branas",published_at:"2020-12-18 14:00:00",thumbnail:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/clean.jpg",description:"<p>Diego Fernandes e Daniele Evangelista receberam Ot\xe1vio Lemos e Rodrigo Branas para bater um papo sobre arquiteturas modernas de desenvolvimento, aplicadas na ind\xfastria da tecnologia.</p><p>Quais s\xe3o os fundamentos, os princ\xedpios e a import\xe2ncia de debater arquiteturas neste ecossistema?</p><p>A gente passa a maior parte do tempo escrevendo c\xf3digo. Agora chegou o momento de falar sobre isso. Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na \xf3rbita da programa\xe7\xe3o.</p><p>O Faladev \xe9 um podcast original Rocketseat. \xa0Ficha t\xe9cnica Hosts: Diego Fernandes e Daniele Le\xe3o Evangelista Convidados: Ot\xe1vio Lemos \xa0e Rodrigo Branas Roteiro: Felipe Buzzi, Beatriz Clasen e Thiago Marinho Edi\xe7\xe3o: Thiago Santana Produ\xe7\xe3o: Leonardo Minatti</p>",file:{url:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/clean.m4a",type:"audio/x-m4a",duration:5044}},{id:"entrevista-jose-valim-criador-do-elixir",title:"Faladev #26 | Especial: entrevista exclusiva com Jos\xe9 Valim, criador da linguagem Elixir",members:"Diego Fernandes e Jos\xe9 Valim",published_at:"2020-12-04 15:00:00",thumbnail:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/josevalim.jpg",description:"<p>Nesta edi\xe7\xe3o especial de final de temporada tivemos a oportunidade de ter uma conversa com Jos\xe9 Valim, dev brasileiro que criou a linguagem de programa\xe7\xe3o Elixir \u2014 utilizada internacionalmente em diversas tecnologias, incluindo Discord e Pinterest.</p><p>O assunto da semana girou em diversos processos envolvidos na cria\xe7\xe3o de uma linguagem nova, que prop\xf5e ser uma alternativa eficiente no mercado da tecnologia.</p><p>Al\xe9m de tudo isso, Valim p\xf4de falar de muito c\xf3digo e sobre a sua jornada e experi\xeancia em criar uma comunidade ativa por tr\xe1s do open source.</p><p>A gente passa a maior parte do tempo escrevendo c\xf3digo. Agora chegou o momento de falar sobre isso. Toda semana reunimos tr\xeas profissionais da tecnologia para discutir sobre tudo que circula na \xf3rbita da programa\xe7\xe3o.</p><p>O Faladev \xe9 um podcast original da Rocketseat onde conversamos sobre diversos assuntos que importam para a sua carreira dev.</p>",file:{url:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/jose-valim.m4a",type:"audio/x-m4a",duration:4396}},{id:"o-que-e-ui-ux",title:"Faladev #25 | O que \xe9 UX/UI?",members:"Diego Fernandes, Tiago Luchtenberg e Thainan Librelon",published_at:"2020-10-30 14:00:00",thumbnail:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/design.jpg",description:"<p>A gente passa a maior parte do tempo escrevendo c\xf3digo. Agora chegou o momento de falar sobre isso. Toda semana reunimos tr\xeas profissionais da tecnologia para discutir sobre tudo que circula na \xf3rbita da programa\xe7\xe3o.</p><p>O Faladev \xe9 um podcast original Rocketseat onde conversamos sobre diversos assuntos que importam para a sua carreira dev.</p><p>Nesse epis\xf3dio, Diego Fernandes se re\xfane com Thainan Librelon e Tiago Luchtenberg para discutir sobre: Desenvolvedor pode fazer o trabalho do UI/UX, qual impacto? Qual \xe9 o momento ideal pra ter pessoas especializadas em UX e UI? E afinal, o que \xe9 UI e o que \xe9 UX?</p>",file:{url:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/design.m4a",type:"audio/x-m4a",duration:2715}},{id:"como-virar-lider-desenvolvimento",title:"Faladev #24 | Como virar l\xedder de desenvolvimento?",members:"Diego Fernandes, Jo\xe3o Paulo e Cleiton Souza",published_at:"2020-10-23 14:00:00",thumbnail:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/lider-desenvolvimento.jpg",description:"<p>A gente passa a maior parte do tempo escrevendo c\xf3digo. Agora chegou o momento de falar sobre isso. Toda semana reunimos tr\xeas profissionais da tecnologia para discutir sobre tudo que circula na \xf3rbita da programa\xe7\xe3o.</p><p>O Faladev \xe9 um podcast original Rocketseat onde conversamos sobre diversos assuntos que importam para a sua carreira dev. Nesse epis\xf3dio, Diego Fernandes se re\xfane com Cleiton Souza e Jo\xe3o Paulo de Magalh\xe3es para discutir sobre lideran\xe7a, considerando aspectos profissionais, t\xe9cnicos e at\xe9 mesmo emocionais, o que envolve ser um l\xedder de desenvolvimento? Afinal, o que \xe9 um l\xedder de desenvolvimento?</p>",file:{url:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/lider-desenvolvimento.m4a",type:"audio/x-m4a",duration:2917}},{id:"comunidades-e-tecnologia",title:"FalaDev #23 | O que comunidades t\xeam a ver com tecnologia?",members:"Diego Fernandes, Isabela Castilho e Jo\xe3o In\xe1cio",published_at:"2020-10-16 13:00:00",thumbnail:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/comunidade.jpg",description:"<p>A gente passa a maior parte do tempo escrevendo c\xf3digo. Agora chegou o momento de falar sobre isso. Toda semana reunimos tr\xeas profissionais da tecnologia para discutir sobre tudo que circula na \xf3rbita da programa\xe7\xe3o.</p><p>O Faladev \xe9 um podcast original Rocketseat onde conversamos sobre diversos assuntos que importam para a sua carreira dev.</p><p>Nesse primeiro epis\xf3dio da nova temporada, Diego Fernandes se re\xfane com Isabela Castilho e Jo\xe3o In\xe1cio Neto (Biro) para discutir sobre comunidades e o impacto que elas exercem na carreira de devs em busca do pr\xf3ximo n\xedvel. Afinal, O que \xe9 uma comunidade e o que tem a ver com tecnologia?</p>",file:{url:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/comunidade.m4a",type:"audio/x-m4a",duration:2677}},{id:"typescript-vale-a-pena",title:"FalaDev #22 - TypeScript vale a pena? JavaScript perde sentido?",members:"Diego Fernandes, Mayk Brito e Jo\xe3o Pedro",published_at:"2020-05-04 14:49:35",thumbnail:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/typescript.jpg",description:"<p>Tr\xeas programadores conversam sobre TypeScript.</p><p>Vamos discutir a usabilidade e as previs\xf5es da linguagem no cen\xe1rio da programa\xe7\xe3o.</p><p>A gente passa a maior parte do tempo escrevendo c\xf3digo. Agora chegou o momento de falar sobre isso.</p>",file:{url:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/typescript.m4a",type:"audio/x-m4a",duration:1772}},{id:"estrategias-de-autenticacao-jwt-oauth",title:"FalaDev #21 - Estrat\xe9gias de autentica\xe7\xe3o, JWT, OAuth, qual usar?",members:"Diego Fernandes, Higo Ribeiro e Guilherme Pellizzetti",published_at:"2020-04-09 20:00:00",thumbnail:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/autenticacao.jpg",description:"<p>Tr\xeas programadores conversam sobre estrat\xe9gia de autentica\xe7\xe3o.</p><p>Vamos discutir quais aspectos voc\xea deve considerar na hora de fazer a sua escolha.</p><p>A gente passa a maior parte do tempo escrevendo c\xf3digo. Agora chegou o momento de falar sobre isso.</p>",file:{url:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/autenticacao.m4a",type:"audio/x-m4a",duration:1463}}]};function w(e){e.episode;var a=Object(g.b)().play,o=Object(h.useRouter)().query.slug,r=f.episodes.find((function(e){return e.id===o}));console.log(r),console.log("episodeMine");var t={title:"Faladev #30 | A import\xe2ncia da contribui\xe7\xe3o em Open Source",members:"Diego Fernandes, Jo\xe3o Pedro, Diego Haz e Bruno Lemos",publishedAt:Object(d.a)(Object(c.a)("2021-01-22 16:35:40"),"d MMM yy",{locale:l.a}),thumbnail:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/opensource.jpg",durationAsString:Object(p.a)(3981),description:"<p>Nesse epis\xf3dio do Faladev, Diego Fernandes se re\xfane com Jo\xe3o Pedro Schmitz, Bruno Lemos e Diego Haz, para discutir sobre a import\xe2ncia da contribui\xe7\xe3o open source e quais desafios circulam na comunidade.</p><p>A gente passa a maior parte do tempo escrevendo c\xf3digo. Agora chegou o momento de falar sobre isso. Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na \xf3rbita da programa\xe7\xe3o.</p><p>O Faladev \xe9 um podcast original Rocketseat.</p>",url:"https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/opensource.m4a",duration:3981};return Object(i.jsxs)("div",{className:m.a.episode,children:[Object(i.jsxs)("div",{className:m.a.thumbnailContainer,children:[Object(i.jsx)(b.a,{children:Object(i.jsxs)("title",{children:[" ",t.title," | Podcastr "]})}),Object(i.jsx)(s.a,{href:"/",children:Object(i.jsx)("button",{type:"button",children:Object(i.jsx)("img",{src:"/arrow-left.svg",alt:"Voltar"})})}),Object(i.jsx)(n.a,{width:700,height:160,src:t.thumbnail,alt:t.title,objectFit:"cover"}),Object(i.jsx)("button",{type:"button",onClick:function(){return a(t)},children:Object(i.jsx)("img",{src:"/play.svg",alt:"Tocar Epis\xf3dio"})})]}),Object(i.jsxs)("header",{children:[Object(i.jsxs)("h1",{children:[" ",t.title," "]}),Object(i.jsxs)("span",{children:[" ",t.members," "]}),Object(i.jsxs)("span",{children:[" ",t.publishedAt," "]}),Object(i.jsxs)("span",{children:[" ",t.durationAsString," "]})]}),Object(i.jsx)("div",{className:m.a.description,dangerouslySetInnerHTML:{__html:t.description}})]})}},g4pe:function(e,a,o){e.exports=o("8Kt/")},qNvn:function(e,a,o){e.exports={episode:"episode_episode__1L3r1",thumbnailContainer:"episode_thumbnailContainer__2nDDN",description:"episode_description__soyVN"}}},[["++SG",0,2,1,3]]]);