(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"478caf4c"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"03b1":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"gray",dark:"",flat:"",dense:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Logo-FlightPath",contain:"",src:r("ddfe"),transition:"scale-transition",width:"28"}}),n("h2",{staticClass:"shrink mt-1"},[e._v("FlightPath")])],1)]),n("v-main",{staticClass:"blue-grey lighten-3"},[n("router-view")],1)],1)},o=[],i={name:"App"},s=i,c=(r("5980"),r("2877")),u=r("6544"),l=r.n(u),p=r("7496"),d=r("40dc"),f=r("adda"),m=r("f6c4"),h=Object(c["a"])(s,a,o,!1,null,"95101c02",null),g=h.exports;l()(h,{VApp:p["a"],VAppBar:d["a"],VImg:f["a"],VMain:m["a"]});r("d3b7");var v=r("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("MainMap")],1)},b=[],w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",[e.errored?r("v-alert",{staticClass:"darken-4",attrs:{dense:"",type:"error"}},[r("strong",[e._v(e._s(e.errorResponse))]),e._v(" - Please try again. ")]):e._e()],1)],1),r("v-row",[r("v-col",[r("v-overlay",{attrs:{value:e.loading,absolute:e.absolute}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),r("div",{ref:"map",staticClass:"map",attrs:{id:"map"}})],1)],1)],1)},P=[],O=(r("a623"),r("4160"),r("d81d"),r("b0c0"),r("b680"),r("159b"),r("96cf"),r("1da1")),A=r("bc3a"),j=r.n(A),x=r("e11e"),C=r.n(x),_=(r("20d6"),r("595b")),k={name:"MainMap",data:function(){return{loading:!0,absolute:!0,errored:!1,errorResponse:null,map:null,tileLayer:null,restrictedAirspaceGeoJSON:["https://raw.githubusercontent.com/airspace-link-inc/engineering-challenge/master/faa-controlled-airspace-DTW.geojson","https://raw.githubusercontent.com/automatyk/geojsonexperiments/master/willow-run-airport.geojson"],layers:[],drawnLayers:[]}},mounted:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.a.all(e.restrictedAirspaceGeoJSON.map((function(e){return j.a.get(e)}))).then(j.a.spread((function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];r.map((function(t){var r=t.data,n=r.features[0].properties;n.name=n.name||"Restricted Airspace",n.active=!0,e.layers.push(r)}))}))).catch((function(t){console.warn("Error getting GeoJSON.",t),e.errored=!0,e.errorResponse=t.message})).finally((function(){e.loading=!1,e.initMap(),e.initLayers(),e.initScale(),e.initDraw()}));case 2:case"end":return t.stop()}}),t)})))()},methods:{initMap:function(){this.map=C.a.map("map"),this.tileLayer=C.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),this.tileLayer.addTo(this.map);var e=new C.a.geoJson(this.layers);this.map.fitBounds(e.getBounds())},initLayers:function(){var e={color:"red",weight:0},t=this.layers.map((function(t){return C.a.geoJson(t,e).bindPopup((function(e){return e.feature.properties.name}))})),r=C.a.layerGroup(t);r.addTo(this.map),C.a.control.layers(null,{"Restricted Airspace":r},{collapsed:!1}).addTo(this.map)},initScale:function(){C.a.control.scale().addTo(this.map)},initDraw:function(){var e=(new C.a.FeatureGroup).addTo(this.map).openPopup(),t=(new C.a.FeatureGroup).addTo(this.map).openPopup(),r=this.layers,n=r.map((function(e){return e.features[0].geometry.coordinates})),a={position:"topleft",draw:{polygon:{allowIntersection:!1,drawError:{color:"#ef0e0e",message:"<strong>Sorry.<strong> Intersects are not allowed. Please draw a simpler polygon."},showArea:!0},polyline:!1,circle:!1,circlemarker:!1,marker:!1,rectangle:{showArea:!0}},edit:{featureGroup:e,remove:!0}},o=new C.a.Control.Draw(a);function i(r){t.clearLayers(),r.layer.addTo(e),u()}function s(){t.eachLayer((function(e){return e.closePopup()})),e.eachLayer((function(e){return e.closePopup()}))}function c(){t.clearLayers(),u()}function u(){e.eachLayer((function(e){var r=e,a=e.toGeoJSON().geometry.coordinates,o=n.map((function(e){var t=_["intersect"](_["polygon"](a),_["polygon"](e));if(t){var r=_["area"](_["polygon"](t.geometry.coordinates));t.properties.intersectingArea=r}return t}));function i(){return r.setStyle({color:"green",fillColor:"green"}).bindPopup("<strong>Flight Approved</strong>",{direction:"center",autoClose:!1}).openPopup()}function s(e,r){return C.a.geoJson(e).setStyle({color:"red",fillColor:"red"}).addTo(t).bindPopup(r,{autoClose:!1}).openPopup()}o.every((function(e){return null===e}))?i():o.forEach((function(e){if(e){var t=e.properties.intersectingArea,r="<strong>Flight Denied!</strong><br /> Your path overlaps restricted area by ";t>1e5?(t=_["convertArea"](e.properties.intersectingArea,"meters","kilometers"),r+="".concat(t.toFixed(2)," km<sup>2</sup>")):(t=e.properties.intersectingArea,r+="".concat(t.toFixed(0)," m<sup>2</sup>")),s(e,r)}}))}))}this.map.addControl(o),this.map.on("draw:created",i),this.map.on("draw:editstart",s),this.map.on("draw:edited",c),this.map.on("draw:deleted",c)}}},S=k,L=(r("a093"),r("0798")),M=r("62ad"),T=r("a523"),V=r("a797"),E=r("490a"),J=r("0fd9"),R=Object(c["a"])(S,w,P,!1,null,null,null),F=R.exports;l()(R,{VAlert:L["a"],VCol:M["a"],VContainer:T["a"],VOverlay:V["a"],VProgressCircular:E["a"],VRow:J["a"]});var G={name:"Home",components:{MainMap:F}},D=G,I=Object(c["a"])(D,y,b,!1,null,null,null),N=I.exports;n["a"].use(v["a"]);var U=[{path:"/",name:"Home",component:N},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"*",redirect:"/"}],$=new v["a"]({mode:"history",base:"/",routes:U}),B=$,z=r("2f62");n["a"].use(z["a"]);var H=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),q=r("f309");n["a"].use(q["a"]);var W=new q["a"]({});r("6cc5"),r("5fbf");delete C.a.Icon.Default.prototype._getIconUrl,C.a.Icon.Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")}),n["a"].config.productionTip=!1,new n["a"]({router:B,store:H,vuetify:W,render:function(e){return e(g)}}).$mount("#app")},5980:function(e,t,r){"use strict";r("03b1")},a093:function(e,t,r){"use strict";r("debb")},ddfe:function(e,t,r){e.exports=r.p+"img/icon-drone.9214f028.png"},debb:function(e,t,r){}});
//# sourceMappingURL=app.178bb80e.js.map