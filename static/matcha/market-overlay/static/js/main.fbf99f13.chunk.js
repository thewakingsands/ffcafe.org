(this["webpackJsonpmarket-overlay-react"]=this["webpackJsonpmarket-overlay-react"]||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),l=(n(16),n(3)),u=n(9),o=n(4),s=n(10),d=(n(17),/[\?&]OVERLAY_WS=([^&]+)/.exec(window.location.href)),m=null,f=[],v={},y={},p=null,h=!1;if(d){p=function(e){f?f.push(e):m.send(JSON.stringify(e))},function e(){(m=new WebSocket(d[1])).addEventListener("error",(function(e){console.error(e)})),m.addEventListener("open",(function(){console.log("Connected!");var e=f;f=null;var t,n=Object(l.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;p(a)}}catch(r){n.e(r)}finally{n.f()}})),m.addEventListener("message",(function(e){try{e=JSON.parse(e.data)}catch(t){return void console.error("Invalid message received: ",e)}void 0!==e.rseq&&v[e.rseq]?(v[e.rseq](e),delete v[e.rseq]):g(e)})),m.addEventListener("close",(function(){f=[],console.log("Trying to reconnect..."),setTimeout((function(){e()}),300)}))}()}else{p=function(e,t){f?f.push([e,t]):OverlayPluginApi.callHandler(JSON.stringify(e),t)},function e(){if(window.OverlayPluginApi&&window.OverlayPluginApi.ready){var t=f;f=null,window.__OverlayCallback=g;var n,a=Object(l.a)(t);try{for(a.s();!(n=a.n()).done;){var r=Object(o.a)(n.value,2),c=r[0],i=r[1];p(c,i)}}catch(u){a.e(u)}finally{a.f()}}else setTimeout(e,300)}()}function g(e){if(y[e.type]){var t,n=Object(l.a)(y[e.type]);try{for(n.s();!(t=n.n()).done;){(0,t.value)(e)}}catch(a){n.e(a)}finally{n.f()}}}var E=n(1),b=Object(E.c)({price:0,quantity:0,hq:0}),q=Object(E.c)({id:0,name:"",rows:Object(E.b)()});function O(){return r.a.createElement("svg",{className:"hq-icon",viewBox:"0 0 64 67",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M41.1148 9.7149C50.538 9.7149 58.8813 14.3384 64 21.4405C59.3004 8.91467 47.2153 0 33.048 0C14.7961 0 0 14.7961 0 33.048C0 51.2999 14.7961 66.0959 33.048 66.0959C34.469 66.0959 35.8691 66.0062 37.2428 65.8322C33.4767 65.3149 29.9478 64.0537 26.8091 62.2016C25.2784 60.1233 24.3739 57.5554 24.3739 54.7763C24.3739 47.854 29.9856 42.2424 36.9079 42.2424C43.4076 42.2424 48.7518 47.1898 49.3801 53.5242C50.0936 51.5602 50.4827 49.4405 50.4827 47.23C50.4827 37.0501 42.2303 28.7977 32.0504 28.7977C22.6912 28.7977 14.9612 35.7732 13.7757 44.8089C13.2197 42.5998 12.9243 40.2871 12.9243 37.9054C12.9243 22.3362 25.5456 9.7149 41.1148 9.7149Z",fill:"white"}))}n(18);function w(e){var t=e.quantity,n=e.hq;return r.a.createElement("span",{className:"quantity"},"(",(t-n).toLocaleString(),"/",r.a.createElement(O,null),n.toLocaleString(),")")}function j(e){var t=e.server,n=e.item,a=n.get("rows").get(t.id);if(!a||0===a.count())return r.a.createElement("td",{className:"no-record"},"-");var c=a.get(0).toJS(),i=a.reduce((function(e,t){if(e.quantity>=99)return e;var n=t.get("quantity");return{totalPrice:e.totalPrice+t.get("price")*n,quantity:e.quantity+n,hq:e.hq+t.get("hq")}}),{totalPrice:0,quantity:0,hq:0}),l=n.get("rows").every((function(e){var t=e.get(0);return!t||t.get("price")>=c.price}));return r.a.createElement("td",{className:l?"lowest":""},r.a.createElement("div",{className:"single"},c.price.toLocaleString(),r.a.createElement(w,{quantity:c.quantity,hq:c.hq})),r.a.createElement("div",{className:"group"},"~",(i.totalPrice/i.quantity).toLocaleString(void 0,{maximumFractionDigits:0}),r.a.createElement(w,{quantity:i.quantity,hq:i.hq})))}j.Empty=function(){return r.a.createElement("td",null,r.a.createElement("div",{className:"single"},"\u6700\u4f4e\u4ef7",r.a.createElement(w,{quantity:1,hq:0})),r.a.createElement("div",{className:"group"},"\u524d N \u4e2a\u5747\u4ef7",r.a.createElement(w,{quantity:10,hq:2})))};var C="00:0000:Matcha-MarketBoard:";function N(e,t){return t.reduce((function(e,t){var n=Object(o.a)(t,3),a=n[0],r=n[1],c=n[2],i=e.findIndex((function(e){return e.get("price")===a}));return-1===i?e.push(b({price:a,quantity:r,hq:c?r:0})):e.update(i,(function(e){return e.update("quantity",(function(e){return e+r})).update("hq",(function(e){return e+(c?r:0)}))}))}),e)}var S=function(){var e=Object(a.useState)(Object(E.a)()),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(Object(E.a)()),d=Object(o.a)(i,2),m=d[0],f=d[1];return Object(a.useEffect)((function(){var e,t,n=function(e){var t=function(e){var t=e.indexOf(" ");if(-1===t)return null;if(e.substr(t+1,C.length)!==C)return null;var n=e.substr(t+1+C.length);if("$"===n[0])return{type:"command",command:n.substr(1)};try{var a=JSON.parse(n),r=Object(s.a)(a);return{type:"data",mode:r[0],server:{id:r[1],name:r[2]},item:{id:r[3],name:r[4]},data:r.slice(5)}}catch(c){return null}}(e);null!==t&&(console.log(t),"command"===t.type?"reset"===t.command&&(c((function(e){return e.clear()})),f((function(e){return e.clear()}))):"data"===t.type&&(c((function(e){return e.find((function(e){return e.id===t.server.id}))?e:e.push(t.server)})),f((function(e){var n=e.findIndex((function(e){return e.get("id")===t.item.id}));return-1===n?"data"!==t.mode?e:e.push(q(Object(u.a)({},t.item,{rows:Object(E.b)().set(t.server.id,N(Object(E.a)(),t.data))}))):e.update(n,(function(e){return e.update("rows",(function(e){return"count"===t.mode?e.set(t.server.id,Object(E.a)()):e.has(t.server.id)?e.update(t.server.id,(function(e){return N(e,t.data)})):e.set(t.server.id,N(Object(E.a)(),t.data))}))}))}))))};e="onLogEvent",t=function(e){if(e.detail&&e.detail.logs){var t,a=Object(l.a)(e.detail.logs);try{for(a.s();!(t=a.n()).done;){var r=t.value;n(r)}}catch(c){a.e(c)}finally{a.f()}}},h&&y[e]&&console.warn("A new listener for ".concat(e," has been registered after event transmission has already begun.\nSome events might have been missed and no cached values will be transmitted.\nPlease register your listeners before calling startOverlayEvents().")),y[e]||(y[e]=[]),y[e].push(t),h=!1,p({call:"subscribe",events:Object.keys(y)})}),[]),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"logo",style:{width:75}},"\u7269\u4ef7\u5bf9\u6bd4"),m.isEmpty()?r.a.createElement("th",null,"\u7269\u54c1\u540d"):m.map((function(e){var t=e.get("name");return r.a.createElement("th",{key:e.get("id"),className:t.length>=6?"small":""},t)})))),r.a.createElement("tbody",null,n.isEmpty()?r.a.createElement("tr",null,r.a.createElement("th",null,"\u670d\u52a1\u5668"),r.a.createElement(j.Empty,null)):n.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",null,e.name),m.isEmpty()?r.a.createElement(j.Empty,null):m.map((function(t){return r.a.createElement(j,{key:"".concat(e.id,"-").concat(t.get("id")),server:e,item:t})})))}))))};i.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[11,1,2]]]);