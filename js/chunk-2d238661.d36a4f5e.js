(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238661"],{fee1:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},s=[],c={data:function(){return{}},created:function(){this.creatDatabase()},methods:{creatDatabase:function(){this.dataBase=window.openDatabase("websql","1.0","城市json",4194304,function(){});var t="websqlTable",e="CREATE TABLE IF  NOT EXISTS "+t+" (rowid INTEGER PRIMARY KEY AUTOINCREMENT, NAME text,AGE text,HEIGHT text,WEIGTH text)";this.dataBase.transaction(function(a,n){a.executeSql(e,[],function(e,a){alert("表创建成功 "+t)},function(e,a){alert("创建表失败:"+t+a.message)})})}}},i=c,o=a("2877"),r=Object(o["a"])(i,n,s,!1,null,"acb24d88",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d238661.d36a4f5e.js.map