webpackJsonp([5],{"+eoq":function(s,t){},"2ZEU":function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("bOdI"),n=e.n(a),o=e("5reh"),i=n()({name:"login",data:function(){return{username:"",password:""}},mounted:function(){},methods:{login:function(){var s=this;console.log("test"),""==this.username&&""==this.password?this.$toast("用户名或密码不能为空!"):this.$post("login",{account:this.username,password:this.password}).then(function(t){0==t.status?(s.$store.commit(o.a,t.loginUser),s.$router.replace("home"),s.$toast.success(t.message),s.username="",s.password=""):(s.$toast.fail(t.message),s.username="",s.password="")})}}},"mounted",function(){}),l={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"login"},[e("div",{staticClass:"title"},[s._v("智能揽投")]),s._v(" "),e("div",{staticClass:"inputs"},[e("van-cell-group",[e("van-field",{attrs:{clearable:"",label:"用户名",placeholder:"请输入用户名"},model:{value:s.username,callback:function(t){s.username=t},expression:"username"}},[e("i",{staticClass:"icon iconfont icon-denglu_yonghu",attrs:{slot:"left-icon"},slot:"left-icon"})]),s._v(" "),e("van-field",{attrs:{clearable:"",type:"password",label:"密码",placeholder:"请输入密码"},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}},[e("i",{staticClass:"icon iconfont icon-denglu_mima",attrs:{slot:"left-icon"},slot:"left-icon"})])],1)],1),s._v(" "),e("div",{staticClass:"bottom"},[e("Debounce",{attrs:{time:500,isDebounce:""}},[e("van-button",{staticClass:"login-button",attrs:{type:"info",size:"large"},on:{click:s.login}},[s._v("登录")])],1)],1)])},staticRenderFns:[]};var c=e("VU/8")(i,l,!1,function(s){e("+eoq")},"data-v-38d5a57b",null);t.default=c.exports}});
//# sourceMappingURL=5.7a6a77b01bbf88e2c7a7.js.map