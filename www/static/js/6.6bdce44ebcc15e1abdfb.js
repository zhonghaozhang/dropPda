webpackJsonp([6],{P1Pu:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={name:"home",data:function(){return{active:0}},methods:{menuChange:function(t){console.log(t),0==t?this.$router.push("homeChild"):1==t?this.$router.push("toudi"):2==t?this.$router.push("test3"):3==t&&this.$router.push("test4")}},computed:{updateMenu:function(){return this.$store.state.menuIndex}},watch:{updateMenu:function(t,n){this.active=t}}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("router-view",{staticClass:"child-view"}),t._v(" "),e("van-tabbar",{on:{change:t.menuChange},model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[e("van-tabbar-item",{scopedSlots:t._u([{key:"icon",fn:function(t){return e("i",{staticClass:"iconfont icon-shouye"})}}])},[t._v("\n      首页")]),t._v(" "),e("van-tabbar-item",{scopedSlots:t._u([{key:"icon",fn:function(t){return e("i",{staticClass:"iconfont icon-toudi"})}}])},[t._v("\n      妥投")]),t._v(" "),e("van-tabbar-item",{scopedSlots:t._u([{key:"icon",fn:function(t){return e("i",{staticClass:"iconfont icon-lanshou"})}}])},[t._v("\n      揽收")]),t._v(" "),e("van-tabbar-item",{scopedSlots:t._u([{key:"icon",fn:function(t){return e("i",{staticClass:"iconfont icon-guanli"})}}])},[t._v("\n      管理")])],1)],1)},staticRenderFns:[]};var a=e("VU/8")(i,o,!1,function(t){e("SrCI")},"data-v-2edb0723",null);n.default=a.exports},SrCI:function(t,n){}});
//# sourceMappingURL=6.6bdce44ebcc15e1abdfb.js.map