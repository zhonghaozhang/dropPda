webpackJsonp([3],{"I/56":function(t,s){},b1YA:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={name:"toudi",data:function(){return{total:0,nodeList:[],mailList:[],SumNum:0,YTNum:0,WTNum:0,isShow:!1,showSelect:!1,actions:[{name:"退回"},{name:"再投"},{name:"转投"}]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.$get("delivered/getDeliveredData",{id:this.$store.state.user.id,deptCode:this.$store.state.user.deptCode}).then(function(s){console.log(s),t.$toast(s.message),t.total=s.mailSum,t.nodeList=s.nodeList}),this.$get("/delivered/getEamilNum",{id:this.$store.state.user.id,deptCode:this.$store.state.user.deptCode}).then(function(s){console.log(s),t.$toast(s.message),t.SumNum=s.SumNum,t.WTNum=s.WTNum,t.YTNum=s.YTNum})},openPhone:function(t){var s=this;this.$get("delivered/call",{nodeId:t}).then(function(t){console.log(t),s.$toast(t.message)})},openScan:function(t){var s=this;1==t?(this.$router.push("scanPage"),this.plugins.openScan(function(t,e){t?(console.log(t),"SCAN_CANCELED"==t.name&&s.$toast("已取消扫描")):(s.plugins.openVibrate(500),s.$get("delivered/thisVote",{mailNumber:e}).then(function(t){console.log(t),s.$toast(t.message)}),s.$router.goBack())})):this.showSelect=!0},onSelect:function(t,s){var e=this;console.log(t),console.log(s),this.showSelect=!1,this.$router.push("scanPage"),this.plugins.openScan(function(s,a){if(s)console.log(s),"SCAN_CANCELED"==s.name&&e.$toast("已取消扫描");else{e.plugins.openVibrate(500);var i="";"退回"==t.name?i=3:"再投"==t.name?i=2:"转投"==t.name&&(i=4),e.$get("delivered/noThisVote",{mailNumber:a,deliveryStatus:i}).then(function(t){console.log(t),e.$toast(t.message)}),e.$router.goBack()}})},onCancel:function(){this.showSelect=!1},openDetails:function(t){this.isShow=!0,this.mailList=t.mailList}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"toudi"},[e("van-nav-bar",{attrs:{title:"妥投",border:""}}),t._v(" "),e("div",{staticClass:"model"},[e("van-row",{staticClass:"row"},[e("van-col",{staticClass:"title",attrs:{span:"8"}},[t._v("总件量")]),t._v(" "),e("van-col",{staticClass:"title",attrs:{span:"8"}},[t._v("已投")]),t._v(" "),e("van-col",{staticClass:"title",attrs:{span:"8"}},[t._v("待投")])],1),t._v(" "),e("van-row",{staticClass:"row"},[e("van-col",{staticClass:"text",attrs:{span:"8"}},[t._v(t._s(t.SumNum))]),t._v(" "),e("van-col",{staticClass:"text",attrs:{span:"8"}},[t._v(t._s(t.YTNum))]),t._v(" "),e("van-col",{staticClass:"text",attrs:{span:"8"}},[t._v(t._s(t.WTNum))])],1)],1),t._v(" "),e("div",{staticClass:"mini-title"},[t._v("待投递 "+t._s(t.total)+"件")]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"list"},t._l(t.nodeList,function(s){return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"left wrap",on:{click:function(e){return t.openDetails(s)}}},[e("div",{staticClass:"top-text"},[t._v(t._s(s.nodeAddress))]),t._v(" "),e("div",{staticClass:"bottom-text"},[t._v("共 "+t._s(s.mailSize)+"件")])]),t._v(" "),e("div",{staticClass:"middle-line"}),t._v(" "),e("div",{staticClass:"right wrap"},[e("i",{staticClass:"iconfont icon-tuotou_dianhua left-icon",on:{click:function(e){return t.openPhone(s.id)}}}),t._v(" "),e("i",{staticClass:"iconfont icon-tuotou_daohang right-icon"})])]),t._v(" "),e("div",{staticClass:"bottom-line"})])}),0)]),t._v(" "),e("div",{staticClass:"buttons"},[e("van-button",{staticClass:"button left-button",attrs:{type:"default"},on:{click:function(s){return t.openScan(1)}}},[t._v("妥投扫描")]),t._v(" "),e("van-button",{staticClass:"button right-button",attrs:{type:"default"},on:{click:function(s){return t.openScan(2)}}},[t._v("未妥投扫描")])],1),t._v(" "),e("van-action-sheet",{attrs:{title:"详细信息"},model:{value:t.isShow,callback:function(s){t.isShow=s},expression:"isShow"}},t._l(t.mailList,function(s){return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"left wrap"},[e("div",{staticClass:"top-text"},[t._v(t._s(s.recAddress))]),t._v(" "),e("div",{staticClass:"bottom-text"},[t._v(t._s(s.receiver)+" "+t._s(s.recPhone))])]),t._v(" "),e("div",{staticClass:"middle-line"}),t._v(" "),e("div",{staticClass:"right wrap"},[e("a",{attrs:{href:"tel:"+s.recPhone}},[e("i",{staticClass:"iconfont icon-tuotou_dianhua left-icon"})]),t._v(" "),e("i",{staticClass:"iconfont icon-tuotou_daohang right-icon"})])]),t._v(" "),e("div",{staticClass:"bottom-line"})])}),0),t._v(" "),e("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消"},on:{select:t.onSelect,cancel:t.onCancel},model:{value:t.showSelect,callback:function(s){t.showSelect=s},expression:"showSelect"}})],1)},staticRenderFns:[]};var n=e("VU/8")(a,i,!1,function(t){e("I/56")},"data-v-53d2d494",null);s.default=n.exports}});
//# sourceMappingURL=3.1adb1060c5ae12eda410.js.map