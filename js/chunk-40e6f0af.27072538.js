(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40e6f0af"],{"0a49":function(t,n,e){var i=e("9b43"),a=e("626a"),r=e("4bf8"),s=e("9def"),o=e("cd1c");t.exports=function(t,n){var e=1==t,u=2==t,l=3==t,c=4==t,h=6==t,f=5==t||h,d=n||o;return function(n,o,p){for(var m,v,g=r(n),V=a(g),b=i(o,p,3),y=s(V.length),E=0,N=e?d(n,y):u?d(n,0):void 0;y>E;E++)if((f||E in V)&&(m=V[E],v=b(m,E,g),t))if(e)N[E]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return E;case 2:N.push(m)}else if(c)return!1;return h?-1:l||c?c:N}}},1169:function(t,n,e){var i=e("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"1a23":function(t,n,e){"use strict";e.r(n),e.d(n,"CountUp",function(){return a});var i=function(){return(i=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var a in n=arguments[e])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}).apply(this,arguments)},a=function(){function t(t,n,e){var a=this;this.target=t,this.endVal=n,this.options=e,this.version="2.0.5",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){a.startTime||(a.startTime=t);var n=t-a.startTime;a.remaining=a.duration-n,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(n,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(n,a.startVal,a.endVal-a.startVal,a.duration):a.countDown?a.frameVal=a.startVal-(a.startVal-a.endVal)*(n/a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(n/a.duration),a.countDown?a.frameVal=a.frameVal<a.endVal?a.endVal:a.frameVal:a.frameVal=a.frameVal>a.endVal?a.endVal:a.frameVal,a.frameVal=Math.round(a.frameVal*a.decimalMult)/a.decimalMult,a.printValue(a.frameVal),n<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.callback&&a.callback()},this.formatNumber=function(t){var n,e,i,r,s,o=t<0?"-":"";if(n=Math.abs(t).toFixed(a.options.decimalPlaces),i=(e=(n+="").split("."))[0],r=e.length>1?a.options.decimal+e[1]:"",a.options.useGrouping){s="";for(var u=0,l=i.length;u<l;++u)0!==u&&u%3==0&&(s=a.options.separator+s),s=i[l-u-1]+s;i=s}return a.options.numerals&&a.options.numerals.length&&(i=i.replace(/[0-9]/g,function(t){return a.options.numerals[+t]}),r=r.replace(/[0-9]/g,function(t){return a.options.numerals[+t]})),o+a.options.prefix+i+r+a.options.suffix},this.easeOutExpo=function(t,n,e,i){return e*(1-Math.pow(2,-10*t/i))*1024/1023+n},this.options=i(i({},this.defaults),e),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var n=t-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var n=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var n=Number(t);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},"28a5":function(t,n,e){"use strict";var i=e("aae3"),a=e("cb7c"),r=e("ebd6"),s=e("0390"),o=e("9def"),u=e("5f1b"),l=e("520a"),c=e("79e5"),h=Math.min,f=[].push,d="split",p="length",m="lastIndex",v=4294967295,g=!c(function(){RegExp(v,"y")});e("214f")("split",2,function(t,n,e,c){var V;return V="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[p]||2!="ab"[d](/(?:ab)*/)[p]||4!="."[d](/(.?)(.?)/)[p]||"."[d](/()()/)[p]>1||""[d](/.?/)[p]?function(t,n){var a=String(this);if(void 0===t&&0===n)return[];if(!i(t))return e.call(a,t,n);var r,s,o,u=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===n?v:n>>>0,g=new RegExp(t.source,c+"g");while(r=l.call(g,a)){if(s=g[m],s>h&&(u.push(a.slice(h,r.index)),r[p]>1&&r.index<a[p]&&f.apply(u,r.slice(1)),o=r[0][p],h=s,u[p]>=d))break;g[m]===r.index&&g[m]++}return h===a[p]?!o&&g.test("")||u.push(""):u.push(a.slice(h)),u[p]>d?u.slice(0,d):u}:"0"[d](void 0,0)[p]?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,i){var a=t(this),r=void 0==e?void 0:e[n];return void 0!==r?r.call(e,a,i):V.call(String(a),e,i)},function(t,n){var i=c(V,t,this,n,V!==e);if(i.done)return i.value;var l=a(t),f=String(this),d=r(l,RegExp),p=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(g?"y":"g"),b=new d(g?l:"^(?:"+l.source+")",m),y=void 0===n?v:n>>>0;if(0===y)return[];if(0===f.length)return null===u(b,f)?[f]:[];var E=0,N=0,x=[];while(N<f.length){b.lastIndex=g?N:0;var A,F=u(b,g?f:f.slice(N));if(null===F||(A=h(o(b.lastIndex+(g?0:N)),f.length))===E)N=s(f,N,p);else{if(x.push(f.slice(E,N)),x.length===y)return x;for(var _=1;_<=F.length-1;_++)if(x.push(F[_]),x.length===y)return x;N=E=A}}return x.push(f.slice(E)),x}]})},"2f21":function(t,n,e){"use strict";var i=e("79e5");t.exports=function(t,n){return!!t&&i(function(){n?t.call(null,function(){},1):t.call(null)})}},3846:function(t,n,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"3c49":function(t,n,e){"use strict";var i=e("bda0"),a=e.n(i);a.a},4012:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("num-scroll",{attrs:{count:t.total}}),e("br"),e("div",{staticClass:"iCountUp"},[e("ICountUp",{attrs:{delay:t.delay,endVal:t.endVal,options:t.options},on:{ready:t.onReady}})],1)],1)},a=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"chartNum"},[e("div",{staticClass:"box-item"},t._l(t.orderNum,function(n,i){return e("li",{key:i,class:{"number-item":!isNaN(n)}},[isNaN(n)?t._e():e("span",[e("i",{ref:"numberItem",refInFor:!0},[t._v("0123456789")])])])}),0)])},s=[],o=(e("d25f"),e("28a5"),e("6b54"),e("87b3"),{data:function(){return{orderNum:["0","0","0","0","0"]}},props:{count:""},created:function(){this.updateData()},mounted:function(){},methods:{updateData:function(){var t=this;setInterval(function(){t.changeNumber(t.count),setTimeout(function(){t.toOrderNum(t.count)},700)},1e4)},changeNumber:function(t){var n=Math.floor(t*Math.random());isNaN(n)||this.toOrderNum(n)},toOrderNum:function(t){t=t.toString(),t.length<5?(t="0"+t,this.toOrderNum(t)):5===t.length?this.orderNum=t.split(""):console.log("超过8位数")},setNumberTransform:function(){this.numberItems=this.$refs.numberItem,this.numberArr=this.orderNum.filter(function(t){return!isNaN(t)});for(var t=0;t<this.numberItems.length;t++){var n=this.numberItems[t];n.style.transform="translate(-50%, -".concat(10*this.numberArr[t],"%)")}}},watch:{count:function(t){this.toOrderNum(t)},orderNum:function(t){this.setNumberTransform()}}}),u=o,l=(e("3c49"),e("2877")),c=Object(l["a"])(u,r,s,!1,null,"983318ae",null),h=c.exports,f=e("87f4"),d=e.n(f),p={data:function(){return{total:0,delay:5e3,endVal:6666,options:{useEasing:!0,useGrouping:!0,separator:"",decimal:".",prefix:"",suffix:""}}},components:{numScroll:h,ICountUp:d.a},created:function(){this.totalAnimation()},methods:{onReady:function(t,n){var e=this;t.update(e.endVal)},totalAnimation:function(){var t=this;this.timer=setInterval(function(){t.total=0,setTimeout(function(){t.total=123},1e3)},15e3)}}},m=p,v=(e("90d8"),Object(l["a"])(m,i,a,!1,null,"06e5f27a",null));n["default"]=v.exports},"6b54":function(t,n,e){"use strict";e("3846");var i=e("cb7c"),a=e("0bfb"),r=e("9e1e"),s="toString",o=/./[s],u=function(t){e("2aba")(RegExp.prototype,s,t,!0)};e("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?u(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?a.call(t):void 0)}):o.name!=s&&u(function(){return o.call(this)})},"87b3":function(t,n,e){var i=Date.prototype,a="Invalid Date",r="toString",s=i[r],o=i.getTime;new Date(NaN)+""!=a&&e("2aba")(i,r,function(){var t=o.call(this);return t===t?s.call(this):a})},"87f4":function(t,n,e){!function(n,i){t.exports=i(e("1a23"))}(0,function(t){"use strict";var n,e=(n="Function",function(t){return Object.prototype.toString.call(t)==="[object ".concat(n,"]")}),i={__countup__:t.CountUp,name:"VueCountUp",props:{delay:{type:Number,required:!1,default:0},endVal:{type:Number,required:!0},options:{type:Object,required:!1}},data:function(){return{instance:null}},watch:{endVal:{handler:function(t){this.instance&&e(this.instance.update)&&this.instance.update(t)},deep:!1}},methods:{create:function(){var n=this;if(!n.instance){var e=n.$el,i=new t.CountUp(e,n.endVal,n.options);i.error||(n.instance=i,n.delay<0?n.$emit("ready",i,t.CountUp):setTimeout(function(){return i.start(function(){return n.$emit("ready",i,t.CountUp)})},n.delay))}},destroy:function(){this.instance=null},printValue:function(t){if(this.instance&&e(this.instance.printValue))return this.instance.printValue(t)},start:function(t){if(this.instance&&e(this.instance.start))return this.instance.start(t)},pauseResume:function(){if(this.instance&&e(this.instance.pauseResume))return this.instance.pauseResume()},reset:function(){if(this.instance&&e(this.instance.reset))return this.instance.reset()},update:function(t){if(this.instance&&e(this.instance.update))return this.instance.update(t)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}};return function(t,n){void 0===n&&(n={});var e=n.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===e&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}(""),function(t,n,e,i,a,r,s,o,u,l){"boolean"!=typeof s&&(u=o,o=s,s=!1);var c,h="function"==typeof e?e.options:e;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,a&&(h.functional=!0)),i&&(h._scopeId=i),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},h._ssrRegister=c):n&&(c=s?function(){n.call(this,l(this.$root.$options.shadowRoot))}:function(t){n.call(this,o(t))}),c)if(h.functional){var f=h.render;h.render=function(t,n){return c.call(n),f(t,n)}}else{var d=h.beforeCreate;h.beforeCreate=d?[].concat(d,c):[c]}return e}({render:function(){var t=this.$createElement;return(this._self._c||t)("span")},staticRenderFns:[]},void 0,i,"data-v-0abbdf5a",!1,void 0,void 0,void 0)})},"90d8":function(t,n,e){"use strict";var i=e("a6ce"),a=e.n(i);a.a},a6ce:function(t,n,e){},aae3:function(t,n,e){var i=e("d3f4"),a=e("2d95"),r=e("2b4c")("match");t.exports=function(t){var n;return i(t)&&(void 0!==(n=t[r])?!!n:"RegExp"==a(t))}},bda0:function(t,n,e){},cd1c:function(t,n,e){var i=e("e853");t.exports=function(t,n){return new(i(t))(n)}},d25f:function(t,n,e){"use strict";var i=e("5ca1"),a=e("0a49")(2);i(i.P+i.F*!e("2f21")([].filter,!0),"Array",{filter:function(t){return a(this,t,arguments[1])}})},e853:function(t,n,e){var i=e("d3f4"),a=e("1169"),r=e("2b4c")("species");t.exports=function(t){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)||(n=void 0),i(n)&&(n=n[r],null===n&&(n=void 0))),void 0===n?Array:n}}}]);