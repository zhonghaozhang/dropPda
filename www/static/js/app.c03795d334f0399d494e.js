webpackJsonp([9],{"4ml/":function(e,t){},"5reh":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r});var o="login",a="logout",r="updateMenu"},"9hUE":function(e,t){},IjVM:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n("7+uW"),r=n("NYxO"),u=n("bOdI"),i=n.n(u),c=n("5reh"),s=n("g4PW"),l={baseUrl:n.n(s)()("production","production")?"http://172.19.1.82:8003/":"api/"};a.a.use(r.a);var h=new r.a.Store({state:{user:void 0==localStorage.getItem("user")?null:localStorage.getItem("user"),menuIndex:0,baseUrl:l.baseUrl},mutations:(o={},i()(o,c.a,function(e,t){localStorage.user=t,e.user=t}),i()(o,c.b,function(e){localStorage.removeItem("user"),e.user=null}),i()(o,c.c,function(e,t){e.menuIndex=t}),o),actions:{}}),d={name:"App",data:function(){return{transition:"slide-left"}},watch:{$route:function(e,t){console.log(e),console.log(t),"homeChild"==e.name?this.$store.commit("updateMenu",0):"toudi"==e.name?this.$store.commit("updateMenu",1):"test3"==e.name?this.$store.commit("updateMenu",2):"test4"==e.name&&this.$store.commit("updateMenu",3);var n=this.$router.isBack;console.log(n),this.transition=n?"slide-right":"slide-left",this.$router.isBack=!1}}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:this.transition}},[t("keep-alive",[t("router-view",{staticClass:"view"})],1)],1)],1)},staticRenderFns:[]};var m=n("VU/8")(d,p,!1,function(e){n("9hUE")},null,null).exports,f=n("/ocq"),g={getPosition:function(e,t){navigator.geolocation.getCurrentPosition(e,t,{maximumAge:3e5,timeout:3e5,enableHighAccuracy:!0})},getImage:function(e,t){var n={quality:50,destinationType:Camera.DestinationType.FILE_URI,sourceType:0};navigator.camera.getPicture(e,t,n)},openScan:function(e){var t=this;QRScanner.prepare(function(n,o){console.log(n),n&&("SCAN_CANCELED"===n.name?t.$toast("已取消扫描"):"BACK_CAMERA_UNAVAILABLE"===n.name?t.$toast("后置摄像头不可用,请检查设置!"):"CAMERA_ACCESS_DENIED"===n.name?t.$toast("用户拒绝摄像机访问!"):"CAMERA_ACCESS_DENIED"===n.name?t.$toast("摄像机访问受到限制 (由于家长控制，组织安全配置配置文件或类似原因)!"):"CAMERA_ACCESS_DENIED"===n.name?t.$toast("相机不可用，因为它不存在或无法配置!"):t.$toast("出现错误,原因不详,请检查手机设置!")),o.authorized?(QRScanner.show(),QRScanner.scan(e)):o.denied&&Vue.$dialog.confirm({title:"是否同意",message:"前往设置打开摄像访问权限?"}).then(function(){QRScanner.openSettings()}).catch(function(){})})},closeScan:function(){QRScanner.cancelScan(),QRScanner.hide(),QRScanner.destroy()},openLight:function(){QRScanner.enableLight()},closeLight:function(){QRScanner.disableLight()},openVibrate:function(e){navigator.vibrate(e)}};f.a.prototype.goBack=function(){console.log(document.getElementById("body")),this.isBack=!0,g.closeScan(),window.history.go(-1)},a.a.use(f.a);var b=new f.a({routes:[{path:"/",name:"login",component:function(e){return n.e(4).then(function(){return e(n("2ZEU"))}.bind(null,n)).catch(n.oe)}},{path:"/home",name:"home",redirect:"homeChild",meta:{requireAuth:!0,index:1},component:function(e){return n.e(6).then(function(){return e(n("P1Pu"))}.bind(null,n)).catch(n.oe)},children:[{name:"homeChild",path:"/homeChild",meta:{requireAuth:!0,menuIndex:0},component:function(e){return n.e(0).then(function(){return e(n("i58q"))}.bind(null,n)).catch(n.oe)}},{name:"toudi",path:"/toudi",meta:{requireAuth:!0,menuIndex:1},component:function(e){return n.e(7).then(function(){return e(n("b1YA"))}.bind(null,n)).catch(n.oe)}},{name:"test3",path:"/test3",meta:{requireAuth:!0,menuIndex:2},component:function(e){return n.e(1).then(function(){return e(n("1y0T"))}.bind(null,n)).catch(n.oe)}},{name:"test4",path:"/test4",meta:{requireAuth:!0,menuIndex:3},component:function(e){return n.e(2).then(function(){return e(n("3WSj"))}.bind(null,n)).catch(n.oe)}}]},{path:"/test5",name:"test5",meta:{requireAuth:!0},component:function(e){return n.e(3).then(function(){return e(n("lTaB"))}.bind(null,n)).catch(n.oe)}},{path:"/scanPage",name:"scanPage",meta:{requireAuth:!0},component:function(e){return n.e(5).then(function(){return e(n("lTbj"))}.bind(null,n)).catch(n.oe)}}]});b.beforeEach(function(e,t,n){console.log(e),e.meta.requireAuth?h.state.user?n():n({path:"/",query:{redirect:e.fullPath}}):n()});var v=b,A=n("Fd2+"),y=(n("4ml/"),n("sVYa"),n("Lw6n")),S=n.n(y),E=(n("IjVM"),n("//Fk")),C=n.n(E),M=n("mtWM"),I=n.n(M);I.a.defaults.baseURL=l.baseUrl,I.a.interceptors.request.use(function(e){return h.state.user&&("get"==e.method?-1==e.url.indexOf("https")&&(e.headers.Authorization=h.state.user.token):e.headers.Authorization=h.state.user.token),e},function(e){return C.a.reject(e)}),I.a.interceptors.response.use(function(e){return e},function(e){if(e.response)switch(console.log(e.response),e.response.status){case 401:h.commit(types.LOGOUT),console.log(v.currentRoute.path),"login"!==v.currentRoute.path&&v.replace({path:"/",query:{redirect:v.currentRoute.path}})}return C.a.reject(e)});var R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new C.a(function(n,o){I()({method:"get",url:e,params:t}).then(function(e){n(e.data)}).catch(function(e){console.log(e,"异常")})})},$=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new C.a(function(n,o){I()({method:"post",url:e,data:t}).then(function(e){n(e.data)}).catch(function(e){console.log(e,"异常")})})},w={name:"Debounce",abstract:!0,props:{time:{type:Number,default:800},events:{type:String,default:"click"},isDebounce:{type:Boolean,default:!1}},created:function(){this.eventKeys=this.events.split(","),this.originMap={},this.debouncedMap={}},render:function(){var e=this,t=this.$slots.default[0];return this.eventKeys.forEach(function(n){var o,a,r,u,i,c,s=t.data.on[n];s===e.originMap[n]&&e.debouncedMap[n]?t.data.on[n]=e.debouncedMap[n]:s&&(e.originMap[n]=s,e.debouncedMap[n]=(o=s,a=e.time,r=e.isDebounce,u=t,r?function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];i&&clearTimeout(i),i=setTimeout(function(){o.apply(u,t)},a)}:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=(new Date).getTime();r-c<a&&c||(c=r,o.apply(u,t))}),t.data.on[n]=e.debouncedMap[n])}),t}};a.a.component("Debounce",w);new S.a;a.a.use(A.a),a.a.prototype.$get=R,a.a.prototype.$post=$,a.a.prototype.plugins=g,a.a.config.productionTip=!1,a.a.use(r.a),document.addEventListener("deviceready",function(){new a.a({el:"#app",router:v,store:h,components:{App:m},template:"<App/>"})},!1)}},["NHnr"]);
//# sourceMappingURL=app.c03795d334f0399d494e.js.map