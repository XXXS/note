(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d231007"],{ef4d:function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("Child",{attrs:{aaa:t.aaa},on:{postparms:t.getChidValue}}),n("hr"),n("div",[t._v("子组件传递过来的值:---"+t._s(t.val))])],1)},e=[],l=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("h1",[t._v("接收参数的子组件")]),n("div",[t._v("父组件传过来的值--------"+t._s(t.aaa.content))]),n("hr"),n("h1",[t._v("子组件给父组件传参")]),n("div",{on:{click:function(a){return t.postparms()}}},[t._v("点击给父组件传参")])])},o=[],i={data:function(){return{}},props:{aaa:{}},methods:{postparms:function(){this.$emit("postparms",1912381023)}}},r=i,c=n("4e82"),u=Object(c["a"])(r,l,o,!1,null,null,null),d=u.exports,p={data:function(){return{aaa:{id:1,content:"kasjfkasjdfkllasjkdfjaskldf"},val:""}},components:{Child:d},methods:{getChidValue:function(t){console.log(t),this.val=t}}},f=p,h=Object(c["a"])(f,s,e,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d231007.076a701f.js.map