(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a760daa8"],{"2a88":function(e,t,a){},"3fb7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"maps-container"},[a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"main"}})])}],i=(a("7f7f"),a("de38")),o={data:function(){return{}},created:function(){},mounted:function(){this.DrawMap()},methods:{DrawMap:function(){this.$echarts.registerMap("yunan",i);var e=this.$echarts.init(document.getElementById("main")),t={"昆明市中医院":[102.712251,25.040609],"昭通市人民医院":[103.717216,27.336999],"红河哈尼族彝族自治州":[103.384182,23.366775],"德宏傣族景颇族自治州":[98.578363,24.436694]},a=function(e){for(var a=[],n=0;n<e.length;n++){var r=t[e[n].name];r&&a.push({name:e[n].name,value:r.concat(e[n].value)})}return a},n={geo:{map:"yunan",itemStyle:{normal:{areaColor:"#e8f6ff",borderColor:"#4a9dc9"}}},series:[{type:"effectScatter",coordinateSystem:"geo",data:a([{name:"昆明市中医院",value:[10]},{name:"昭通市人民医院",value:[20]},{name:"红河哈尼族彝族自治州",value:[30]},{name:"德宏傣族景颇族自治州",value:[40]}]),symbolSize:15,hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#67C23A"}}}]};e.setOption(n)}}},c=o,s=(a("fc18"),a("2877")),u=Object(s["a"])(c,n,r,!1,null,"1a342be1",null);t["default"]=u.exports},fc18:function(e,t,a){"use strict";var n=a("2a88"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-a760daa8.cf419f06.js.map