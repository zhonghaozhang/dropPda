webpackJsonp([1],{"0SbN":function(t,s){},"3yqb":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("et3s"),n=e.n(a),i={name:"lanshou",data:function(){return{map:{},SumNum:0,YTNum:0,WTNum:0,mailSum:0,collectionList:[]}},mounted:function(){this.initMap(),this.getData()},methods:{getData:function(){var t=this;this.$get("collection/getCollectionNum",{userId:this.$store.state.user.id}).then(function(s){console.log(s),t.SumNum=s.ZL,t.WTNum=s.WL,t.YTNum=s.YL}),this.$get("collection/getCollection",{userId:this.$store.state.user.id}).then(function(s){console.log(s),t.$toast(s.message),t.mailSum=s.mailSum,t.collectionList=s.collectionList,t.collectionList.map(function(s,e){var a={position:new BMap.Point(s.longitude,s.latitude),offset:new BMap.Size(0,0)},n=new BMap.Label(e+1,a);n.setStyle({color:"#0091ff",boxShadow:"0 2px 4px 0",border:"1px solid #0091ff",textAlign:"center",fontSize:"14px",width:"18px",height:"18px",lineHeight:"18px",fontFamily:"微软雅黑",borderRadius:"50%"}),t.map.addOverlay(n)})})},initMap:function(){var t=this;this.map=new BMap.Map("map");var s=new BMap.Point(116.391641,40.068351);this.map.centerAndZoom(s,15);var e=new BMap.Geolocation;e.enableSDKLocation(),e.getCurrentPosition(function(s){if(0===e.getStatus()){console.log(s);var a=new BMap.Point(s.longitude,s.latitude),i=new BMap.Icon(n.a,new BMap.Size(40,40),{imageSize:new BMap.Size(40,40)}),o=new BMap.Marker(a,{icon:i});t.map.addOverlay(o),t.map.setCenter(a)}else 2===e.getStatus()?t.$toast("位置未知,请稍后再试!"):8===e.getStatus()?t.$toast("定位超时,请稍后再试!"):6===e.getStatus()&&t.$toast("没有定位权限!")},{enableHighAccuracy:!0,SDKLocation:!0,maximumAge:0,timeout:6e4})}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lanshou"},[e("van-nav-bar",{attrs:{title:"揽收",border:""}}),t._v(" "),e("div",{attrs:{id:"map"}}),t._v(" "),e("div",{staticClass:"model"},[e("van-row",{staticClass:"row"},[e("van-col",{staticClass:"title",attrs:{span:"8"}},[t._v("总件量")]),t._v(" "),e("van-col",{staticClass:"title",attrs:{span:"8"}},[t._v("已揽")]),t._v(" "),e("van-col",{staticClass:"title",attrs:{span:"8"}},[t._v("待揽")])],1),t._v(" "),e("van-row",{staticClass:"row"},[e("van-col",{staticClass:"text",attrs:{span:"8"}},[t._v(t._s(t.SumNum))]),t._v(" "),e("van-col",{staticClass:"text",attrs:{span:"8"}},[t._v(t._s(t.YTNum))]),t._v(" "),e("van-col",{staticClass:"text",attrs:{span:"8"}},[t._v(t._s(t.WTNum))])],1)],1),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v("\n      待揽收 "+t._s(t.mailSum)+"件\n    ")]),t._v(" "),e("div",{staticClass:"subContent"},t._l(t.collectionList,function(s,a){return e("div",{staticClass:"lists"},[e("div",{staticClass:"row"},[e("div",{staticClass:"left wrap"},[e("span",{staticClass:"index"},[t._v(t._s(a+1))]),t._v(" "),e("div",{staticClass:"top-text"},[t._v(t._s(s.senAddress))]),t._v(" "),e("div",{staticClass:"bottom-text"},[t._v(t._s(s.sender)+" "+t._s(s.senPhone))])]),t._v(" "),e("div",{staticClass:"middle-line"}),t._v(" "),e("div",{staticClass:"right wrap"},[e("a",{attrs:{href:"tel:"+s.senPhone}},[e("i",{staticClass:"iconfont icon-tuotou_dianhua left-icon"})]),t._v(" "),e("i",{staticClass:"iconfont icon-tuotou_daohang right-icon"})])]),t._v(" "),e("div",{staticClass:"bottom-line"})])}),0)])],1)},staticRenderFns:[]};var l=e("VU/8")(i,o,!1,function(t){e("0SbN")},"data-v-2026ebc6",null);s.default=l.exports},et3s:function(t,s){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=1.fb2aa11185409a652712.js.map