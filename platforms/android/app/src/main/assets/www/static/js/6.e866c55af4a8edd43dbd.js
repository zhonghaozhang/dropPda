webpackJsonp([6],{EHPh:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("5reh"),a={name:"admin",data:function(){return{showSelect:!1,actions:[{name:"退回扫描",disabled:!0},{name:"修正",disabled:!0}]}},computed:{name:function(){return this.$store.state.user.name}},methods:{logout:function(){var t=this;this.$dialog.confirm({title:"退出登录",message:"是否确认退出登录?"}).then(function(){t.$router.replace("/"),t.$store.commit(e.b)}).catch(function(){})},gotoPage:function(t){"投递量统计"==t?this.$router.push("toudiCount"):"修改密码"==t?this.$router.push("updatePassword"):"揽收量统计"==t?this.$toast("敬请期待!"):"地址维护"==t&&this.$toast("敬请期待!")},onSelect:function(t){"退回扫描"==t.name&&(this.showSelect=!1)},onCancel:function(){this.showSelect=!1}}},s={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"admin"},[i("van-nav-bar",{attrs:{title:"管理",border:""}}),t._v(" "),i("div",{staticClass:"userMessage"},[i("van-image",{attrs:{round:"",src:"https://img.yzcdn.cn/vant/cat.jpeg"}}),t._v(" "),i("div",{staticClass:"username"},[t._v(t._s(t.name))])],1),t._v(" "),i("div",{staticClass:"lists"},[i("van-cell-group",[i("van-cell",{attrs:{title:"投递量统计",size:"large","is-link":""},on:{click:function(n){return t.gotoPage("投递量统计")}}},[i("van-icon",{staticClass:"iconfont",attrs:{slot:"icon","class-prefix":"icon",name:"guanli_toudiliangtongji"},slot:"icon"})],1),t._v(" "),i("van-cell",{attrs:{title:"揽收量统计",size:"large","is-link":""},on:{click:function(n){return t.gotoPage("揽收量统计")}}},[i("van-icon",{staticClass:"iconfont",attrs:{slot:"icon","class-prefix":"icon",name:"guanli_lanshouliangtongji"},slot:"icon"})],1),t._v(" "),i("van-cell",{attrs:{title:"地址维护",size:"large","is-link":""},on:{click:function(n){return t.gotoPage("地址维护")}}},[i("van-icon",{staticClass:"iconfont",attrs:{slot:"icon","class-prefix":"icon",name:"guanli_xiugaimima"},slot:"icon"})],1),t._v(" "),i("van-cell",{attrs:{title:"异常处理",size:"large","is-link":""},on:{click:function(n){t.showSelect=!0}}},[i("van-icon",{staticClass:"iconfont",attrs:{slot:"icon","class-prefix":"icon",name:"guanli_yichangchuli"},slot:"icon"})],1),t._v(" "),i("van-cell",{attrs:{title:"修改密码",size:"large","is-link":""},on:{click:function(n){return t.gotoPage("修改密码")}}},[i("van-icon",{staticClass:"iconfont",attrs:{slot:"icon","class-prefix":"icon",name:"xiugaimima"},slot:"icon"})],1),t._v(" "),i("van-cell",{attrs:{title:"退出",size:"large","is-link":""},on:{click:t.logout}},[i("van-icon",{staticClass:"iconfont",attrs:{slot:"icon","class-prefix":"icon",name:"guanli_tuichu"},slot:"icon"})],1)],1)],1),t._v(" "),i("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消"},on:{select:t.onSelect,cancel:t.onCancel},model:{value:t.showSelect,callback:function(n){t.showSelect=n},expression:"showSelect"}})],1)},staticRenderFns:[]};var o=i("VU/8")(a,s,!1,function(t){i("eOlN")},"data-v-34f7e16e",null);n.default=o.exports},eOlN:function(t,n){}});
//# sourceMappingURL=6.e866c55af4a8edd43dbd.js.map