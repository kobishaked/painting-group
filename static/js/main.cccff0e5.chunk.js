(this["webpackJsonpreact-pixelart"]=this["webpackJsonpreact-pixelart"]||[]).push([[0],{29:function(e,n,t){e.exports=t(47)},34:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t.n(a),o=t(23),c=t.n(o),i=t(7),l=(t(34),t(10)),u=t(14),s=t(15),f=t.n(s),d=t(12),m=Object(a.createContext)({}),p=function(e){var n=Object(a.useState)({isDrawing:!1,setIsDrawing:function(e){o.isDrawing=e}}),t=Object(l.a)(n,2),o=t[0];t[1];return r.a.createElement(m.Provider,{value:o},e.children)},b=m;function v(){var e=Object(u.a)(["\nmutation updatePixel($id: Int!, $color: String!) {\n  update_pixels(where: {id: {_eq: $id}}, _set: {color: $color}) {\n    returning {  \n      id\n      color\n    }\n  }\n}\n"]);return v=function(){return e},e}var w=f()(v()),g=function(e){var n=e.id,t=e.color,o=e.newColor,c=Object(a.useState)(t),i=Object(l.a)(c,2),u=i[0],s=i[1],f=Object(d.a)(w),m=Object(l.a)(f,1)[0],p=Object(a.useContext)(b),v=p.isDrawing,g=p.setIsDrawing;return Object(a.useEffect)((function(){s(t)}),[t]),r.a.createElement("span",{className:"pixel",onMouseDown:function(){s(o),m({variables:{id:n,color:o}}),g(!0)},onMouseMove:function(){v&&(s(o),m({variables:{id:n,color:o}}))},onMouseUp:function(){g(!1)},onClick:function(){g(!v),s(o),m({variables:{id:n,color:o}})},style:{backgroundColor:u}})},h=["#f44336","#f06292","#9c27b0","#2196f3","#009688","#8bc34a","#ffeb3b","#ff9800","#ffffff","#212121"],E=function(e){return r.a.createElement("span",{className:"palette-color",style:{backgroundColor:e.color},onClick:function(){e.handleClick(e.color)}})},k=function(e){return r.a.createElement("div",{className:"palette"},h.map((function(n,t){return r.a.createElement(E,{handleClick:function(){return e.changeColor(n)},color:n,key:t})})))};function j(){var e=Object(u.a)(["\nsubscription GetPixels {\n  pixels(order_by: {id: asc}) {\n    color\n    id\n  }\n}\n"]);return j=function(){return e},e}new Array(400).fill("white");var C=f()(j());var O=function(){var e=Object(a.useState)("white"),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(d.b)(C),i=c.loading,u=(c.error,c.data);return i?r.a.createElement("div",null,"loading..."):r.a.createElement(p,null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"logo"},"Draw"),r.a.createElement("p",null,"Pick a Color"),r.a.createElement(k,{changeColor:o}),r.a.createElement("p",null,"Click a Pixel"),r.a.createElement("div",{className:"container"},u.pixels.map((function(e){return r.a.createElement(g,{color:e.color,id:e.id,key:e.id,newColor:t})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=t(27),y=t(9),D=t(28),N=new y.a({cache:new D.a,link:new x.a({uri:"wss://painting-group.herokuapp.com/v1/graphql",options:{reconnect:!0}})});c.a.render(r.a.createElement(i.a,{client:N},r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.cccff0e5.chunk.js.map