(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97924200"],{"21a6":function(t,e,n){(function(n){var o,c,a;(function(n,r){c=[],o=r,a="function"===typeof o?o.apply(e,c):o,void 0===a||(t.exports=a)})(0,function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function o(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){i(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function c(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(o){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,i=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype?function(t,e,n){var i=r.URL||r.webkitURL,s=document.createElement("a");e=e||t.name||"download",s.download=e,s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?a(s):c(s.href)?o(t,e,n):a(s,s.target="_blank")):(s.href=i.createObjectURL(t),setTimeout(function(){i.revokeObjectURL(s.href)},4e4),setTimeout(function(){a(s)},0))}:"msSaveOrOpenBlob"in navigator?function(t,n,r){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,r),n);else if(c(t))o(t,n,r);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){a(i)})}}:function(t,e,n,c){if(c=c||open("","_blank"),c&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof t)return o(t,e,n);var a="application/octet-stream"===t.type,i=/constructor/i.test(r.HTMLElement)||r.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||a&&i)&&"object"==typeof FileReader){var p=new FileReader;p.onloadend=function(){var t=p.result;t=s?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=t:location=t,c=null},p.readAsDataURL(t)}else{var u=r.URL||r.webkitURL,f=u.createObjectURL(t);c?c.location=f:location.href=f,c=null,setTimeout(function(){u.revokeObjectURL(f)},4e4)}});r.saveAs=i.saveAs=i,t.exports=i})}).call(this,n("c8ba"))},"2ff2":function(t,e,n){"use strict";var o=n("aa03"),c=n.n(o);c.a},"3a9f":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("table",[n("tr",[n("td",{attrs:{rowspan:"7"}},[n("input",{attrs:{type:"checkbox"}}),t._v("\n        *种类和范围唯一")]),n("td",{attrs:{rowspan:"2"}},[n("input",{attrs:{type:"checkbox"}}),t._v("放射源")]),n("td",[n("input",{attrs:{type:"checkbox"}}),t._v(" 销售")]),n("td",[t._v("Ⅰ类 "),n("input",{attrs:{type:"checkbox"}}),t._v(" Ⅱ类 "),n("input",{attrs:{type:"checkbox"}}),t._v(" Ⅲ "),n("input",{attrs:{type:"checkbox"}}),t._v(" Ⅳ类 "),n("input",{attrs:{type:"checkbox"}}),t._v(" Ⅴ类 "),n("input",{attrs:{type:"checkbox"}})])]),n("tr",[n("td",[n("input",{attrs:{type:"checkbox"}}),t._v(" 使用")]),n("td",[t._v("Ⅰ类 "),n("input",{attrs:{type:"checkbox"}}),t._v(" Ⅱ类 "),n("input",{attrs:{type:"checkbox"}}),t._v(" Ⅲ "),n("input",{attrs:{type:"checkbox"}}),t._v(" Ⅳ类 "),n("input",{attrs:{type:"checkbox"}}),t._v(" Ⅴ类 "),n("input",{attrs:{type:"checkbox"}})])]),n("tr",[n("td",[n("input",{attrs:{type:"checkbox"}}),t._v(" 非密封性放射性物质")]),n("td",[n("input",{attrs:{type:"checkbox"}}),t._v(" 生产 "),n("input",{attrs:{type:"checkbox"}}),t._v(" 销售 "),n("input",{attrs:{type:"checkbox"}}),t._v(" 使用")]),n("td",[n("input",{attrs:{type:"checkbox"}}),t._v(" 甲 "),n("input",{attrs:{type:"checkbox"}}),t._v(" 乙 "),n("input",{attrs:{type:"checkbox"}}),t._v(" 丙 "),n("input",{attrs:{type:"checkbox"}}),t._v(" 无")])]),n("tr",[n("td",{attrs:{rowspan:"4"}},[n("input",{attrs:{type:"checkbox"}}),t._v(" 射线装置")]),n("td",[n("input",{attrs:{type:"checkbox"}}),t._v(" 生产 ")]),n("td",[t._v("Ⅱ类 "),n("input",{attrs:{type:"checkbox"}}),t._v(" Ⅲ "),n("input",{attrs:{type:"checkbox"}})])]),n("tr",[n("td",[n("input",{attrs:{type:"checkbox"}}),t._v(" 销售 ")]),n("td",[t._v("Ⅱ类 "),n("input",{attrs:{type:"checkbox"}}),t._v(" Ⅲ "),n("input",{attrs:{type:"checkbox"}})])]),n("tr",[n("td",[n("input",{attrs:{type:"checkbox"}}),t._v(" 使用 ")]),n("td",[t._v("Ⅰ类 "),n("input",{attrs:{type:"checkbox"}}),t._v(" Ⅱ类 "),n("input",{attrs:{type:"checkbox"}}),t._v(" Ⅲ "),n("input",{attrs:{type:"checkbox"}})])]),n("tr",[n("td",{attrs:{colspan:"2"}},[n("input",{attrs:{type:"checkbox"}}),t._v(" 销售(含建造)Ⅰ类射线装置")])])])])}],a=n("21a6"),r={data:function(){return{url:"http://test.sifong.cn:3129/m/sf/test.pdf"}},mounted:function(){},methods:{dowload:function(){console.log("下载"),Object(a["saveAs"])("http://test.sifong.cn:3129/m/sf/test.pdf","test.pdf")}}},i=r,s=(n("2ff2"),n("2877")),p=Object(s["a"])(i,o,c,!1,null,"08948504",null);e["default"]=p.exports},aa03:function(t,e,n){}}]);