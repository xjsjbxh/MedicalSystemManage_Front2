(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ef3c2f8"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("fb6a"),n("d3b7"),n("25f0"),n("b0c0"),n("a630"),n("3ca3"),n("ac1f");var r=n("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("d3b7");function r(t,e,n,r,a,i,o){try{var c=t[i](o),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function c(t){r(o,a,i,c,u,"next",t)}function u(t){r(o,a,i,c,u,"throw",t)}c(void 0)}))}}},"1f93":function(t,e,n){"use strict";n("689e")},"5bfc":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("a-layout",{staticStyle:{height:"110ch"}},[e("a-layout-sider",{attrs:{breakpoint:"lg","collapsed-width":"0"},on:{collapse:t.onCollapse,breakpoint:t.onBreakpoint}},[e("div",{staticClass:"logo"}),e("a-menu",{attrs:{theme:"dark",mode:"inline","default-selected-keys":["4"]}},[e("a-menu-item",{key:"1"},[e("user-outlined"),e("span",{staticClass:"nav-text",on:{click:t.goToUserManagement}},[t._v("用户管理")])],1),e("a-menu-item",{key:"2",on:{click:t.goToArtiManagement}},[e("video-camera-outlined"),e("span",{staticClass:"nav-text"},[t._v("文章管理")])],1),e("a-menu-item",{key:"3"},[e("upload-outlined"),e("span",{staticClass:"nav-text",on:{click:t.goToArtiKindManagement}},[t._v("文章类别管理")])],1),e("a-menu-item",{key:"4"},[e("user-outlined"),e("span",{staticClass:"nav-text"},[t._v("数据统计")])],1),e("a-menu-item",{key:"5"},[e("user-outlined"),e("span",{staticClass:"nav-text",on:{click:t.goToKnowManagement}},[t._v("知识管理")])],1)],1)],1),e("a-layout",[e("a-layout-header",{style:{background:"#fff",padding:0}},[e("h2",{staticStyle:{"text-align":"center","font-family":"华文中宋"}},[t._v("数据分析")])]),e("a-layout-content",{style:{margin:"24px 16px 0"}},[e("div",{staticStyle:{height:"100ch"},style:{padding:"24px",background:"#fff",minHeight:"360px"}},[e("charts")],1)])],1)],1)},a=[],i=n("8520"),o=n("2b0e"),c=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("a-layout",[e("div",{staticClass:"head"},[e("chart1")],1),e("div",{staticClass:"side"},[e("chart2")],1),e("div",{staticClass:"bottom1"},[e("chart3")],1),e("div",{staticClass:"bottom2"},[e("chart4")],1)])},u=[],s=function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"myChart",staticStyle:{width:"500px",height:"420px",padding:"0px","border-radius":"10px","font-size":"small"}})])},l=[],h=n("6b75");function f(t){if(Array.isArray(t))return Object(h["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function d(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var p=n("06c5");function y(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(t){return f(t)||d(t)||Object(p["a"])(t)||y()}var g=n("c7eb"),m=n("1da1"),b=(n("d81d"),n("313e")),w={data:function(){return{myChart:null,chartOptions:{},indicatorCategories:[],seriesData:[]}},mounted:function(){var t=this;return Object(m["a"])(Object(g["a"])().mark((function e(){var n;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fetchData();case 3:n=e.sent,t.updateChart(n),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()},methods:{fetchData:function(){return Object(m["a"])(Object(g["a"])().mark((function t(){return Object(g["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",{articlesByCategory:[{category:"疾病种类",count:1024},{category:"症状表现",count:512},{category:"治疗方案",count:512},{category:"预防保健",count:512},{category:"药物信息",count:122}]});case 1:case"end":return t.stop()}}),t)})))()},updateChart:function(t){this.indicatorCategories=t.articlesByCategory.map((function(t){return t.category}));var e=t.articlesByCategory.map((function(t){return t.count}));this.chartOptions={title:{text:"不同分类文章数量"},legend:{},radar:{indicator:this.indicatorCategories.map((function(t){return{name:t,max:1.2*Math.max.apply(Math,v(e))}}))},series:[{name:"话题度",type:"radar",data:[{value:e,name:"总计数"}]}]},this.myChart||(this.myChart=b["init"](this.$refs.myChart)),this.myChart.setOption(this.chartOptions)}}},x=w,O=n("2877"),C=Object(O["a"])(x,s,l,!1,null,null,null),j=C.exports,_=function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"lineChart",staticStyle:{width:"600px",height:"300px",padding:"1px","border-radius":"20px"}})])},k=[];n("7db0"),n("4ec3");var L={data:function(){return{lineChart:null,chartOptions:null}},mounted:function(){this.lineChart=b["init"](this.$refs.lineChart),this.getdata()},methods:{getdata:function(){var t=this;return Object(m["a"])(Object(g["a"])().mark((function e(){var n,r,a,i,o;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{n=[{page:"PV",days:["2024-04-10","2024-04-11","2024-04-12","2024-04-13","2024-04-14","2024-04-15","2024-04-16"],views:[120,135,130,160,150,170,180]},{page:"UV",days:["2024-04-10","2024-04-11","2024-04-12","2024-04-13","2024-04-14","2024-04-15","2024-04-16"],views:[80,90,100,110,120,115,105]}],r=n,a=n.find((function(t){return"PV"===t.page})),i=a.days,o=r.map((function(t){return{name:t.page,type:"line",data:t.views}})),t.chartOptions={title:{text:"系统访问量",textStyle:{fontSize:20}},tooltip:{trigger:"axis"},legend:{icon:"circle",left:"center",top:0,data:r.map((function(t){return t.page})),textStyle:{fontSize:14}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{type:"png"},magicType:{type:["line","bar"]}}},xAxis:{type:"category",boundaryGap:!1,data:i},yAxis:{type:"value"},series:o},t.lineChart.setOption(t.chartOptions)}catch(c){}case 1:case"end":return e.stop()}}),e)})))()}}},S=L,A=Object(O["a"])(S,_,k,!1,null,null,null),E=A.exports,T=function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"myChart",staticStyle:{width:"350px",height:"260px",padding:"1px","border-radius":"20px"}})])},P=[],M=(n("b0c0"),{data:function(){return{myChart:null,chartOptions:{}}},mounted:function(){var t=this;this.fetchData().then((function(e){t.updateChart(e)})).catch((function(t){}))},methods:{fetchData:function(){return Object(m["a"])(Object(g["a"])().mark((function t(){return Object(g["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){setTimeout((function(){var e={top5Articles:[{id:"article123",name:"How to Learn Python",views:2500},{id:"article456",name:"The Future of AI",views:2400},{id:"articlesd6",name:"The Future of AI",views:200},{id:"article06",name:"The Future of AI",views:2e3},{id:"article0a6",name:"The Future of AI",views:1400}]};t(e)}),1e3)})));case 1:case"end":return t.stop()}}),t)})))()},updateChart:function(t){var e=t.top5Articles.map((function(t){return{name:t.name,value:t.views}}));this.chartOptions={title:{text:"",subtext:"top5 访问量的文章",left:"center",top:"43%",subtextStyle:{fontSize:10}},tooltip:{trigger:"item"},legend:{icon:"circle",top:"0",left:"right"},series:[{name:"访问量",type:"pie",radius:["40%","55%"],label:{show:!0,padding:[0,-60],overflow:"none",fontSize:"15",fontWeight:"bold",formatter:"{d}%\n\n{c}"},labelLine:{show:!0,length:15,length2:60},itemStyle:{normal:{color:function(t){var e=["#000080","#1E90FF","#87CEFA","#ADD8E6","#87CEFA"];return e[t.dataIndex]}}},data:e}]},this.myChart||(this.myChart=b["init"](this.$refs.myChart)),this.myChart.setOption(this.chartOptions)}}}),F=M,I=Object(O["a"])(F,T,P,!1,null,null,null),G=I.exports,N=function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"lineChart",staticStyle:{width:"600px",height:"300px",padding:"1px","border-radius":"20px"}})])},U=[],z={data:function(){return{lineChart:null,chartOptions:null}},mounted:function(){this.lineChart=b["init"](this.$refs.lineChart),this.getdata()},methods:{getdata:function(){var t=this;return Object(m["a"])(Object(g["a"])().mark((function e(){var n,r,a,i,o;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{n=[{page:"HomePage",days:["2024-04-10","2024-04-11","2024-04-12","2024-04-13","2024-04-14","2024-04-15","2024-04-16"],views:[120,135,130,160,150,170,180]},{page:"AboutPage",days:["2023-09-10","2023-09-11","2023-09-12","2023-09-13","2023-09-14","2023-09-15","2023-09-16"],views:[80,90,100,110,120,115,105]},{page:"ProductsPage",days:["2023-09-10","2023-09-11","2023-09-12","2023-09-13","2023-09-14","2023-09-15","2023-09-16"],views:[60,65,75,85,95,100,105]},{page:"ContactPage",days:["2023-09-10","2023-09-11","2023-09-12","2023-09-13","2023-09-14","2023-09-15","2023-09-16"],views:[30,35,30,35,40,45,50]}],r=n,a=n.find((function(t){return"HomePage"===t.page})),i=a.days,o=r.map((function(t){return{name:t.page,type:"line",data:t.views}})),t.chartOptions={title:{text:"近七天各页面访问量",textStyle:{fontSize:14}},tooltip:{trigger:"axis"},legend:{icon:"circle",left:"center",top:0,data:r.map((function(t){return t.page})),textStyle:{fontSize:8}},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{type:"png"},magicType:{type:["line","bar"]}}},xAxis:{type:"category",boundaryGap:!1,data:i},yAxis:{type:"value"},series:o},t.lineChart.setOption(t.chartOptions)}catch(c){}case 1:case"end":return e.stop()}}),e)})))()}}},D=z,K=Object(O["a"])(D,N,U,!1,null,null,null),$=K.exports,B=Object(o["defineComponent"])({components:{chart1:j,chart2:E,chart3:G,chart4:$}}),V=B,H=(n("efef"),Object(O["a"])(V,c,u,!1,null,null,null)),J=H.exports,Y=Object(o["defineComponent"])({components:{UserOutlined:i["UserOutlined"],VideoCameraOutlined:i["VideoCameraOutlined"],UploadOutlined:i["UploadOutlined"],charts:J},setup:function(){var t=function(t,e){},e=Object(o["ref"])(""),n=function(t){},r=function(t){};return{selectedKeys:Object(o["ref"])(["4"]),onCollapse:t,onBreakpoint:r,value:e,onSearch:n}},methods:{goTo:function(t){this.$router.push({path:t})},goToArtiManagement:function(){this.goTo("/artiManagement")},goToArtiKindManagement:function(){this.goTo("/artiKindManagement")},goToUserManagement:function(){this.goTo("/userManagement")},goToKnowManagement:function(){this.goTo("/knowManagement")}}}),W=Y,q=(n("1f93"),Object(O["a"])(W,r,a,!1,null,null,null));e["default"]=q.exports},"689e":function(t,e,n){},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"9cb7":function(t,e,n){},c7eb:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("159b"),n("b0c0"),n("131a"),n("fb6a");var r=n("53ca");function a(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(E){l=function(t,e,n){return t[e]=n}}function h(t,e,n,r){var a=e&&e.prototype instanceof p?e:p,o=Object.create(a.prototype),c=new L(r||[]);return i(o,"_invoke",{value:C(t,n,c)}),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(E){return{type:"throw",arg:E}}}t.wrap=h;var d={};function p(){}function y(){}function v(){}var g={};l(g,c,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(S([])));b&&b!==e&&n.call(b,c)&&(g=b);var w=v.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function a(i,o,c,u){var s=f(t[i],t,o);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==Object(r["a"])(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){a("next",t,c,u)}),(function(t){a("throw",t,c,u)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return a("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){a(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function C(t,e,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return A()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=j(o,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function j(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var a=f(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:A}}function A(){return{value:void 0,done:!0}}return y.prototype=v,i(w,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(O.prototype),l(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new O(h(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(w),l(w,s,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return o.type="throw",o.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}},efef:function(t,e,n){"use strict";n("9cb7")}}]);