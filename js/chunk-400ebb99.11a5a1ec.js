(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-400ebb99"],{"09ee":function(t,e,n){},"11e9":function(t,e,n){var i=n("52a7"),o=n("4630"),s=n("6821"),r=n("6a99"),a=n("69a8"),c=n("c69a"),h=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?h:function(t,e){if(t=s(t),e=r(e,!0),c)try{return h(t,e)}catch(n){}if(a(t,e))return o(!i.f.call(t,e),t[e])}},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3b2b":function(t,e,n){var i=n("7726"),o=n("5dbc"),s=n("86cc").f,r=n("9093").f,a=n("aae3"),c=n("0bfb"),h=i.RegExp,l=h,u=h.prototype,d=/a/g,f=/a/g,v=new h(d)!==d;if(n("9e1e")&&(!v||n("79e5")(function(){return f[n("2b4c")("match")]=!1,h(d)!=d||h(f)==f||"/a/i"!=h(d,"i")}))){h=function(t,e){var n=this instanceof h,i=a(t),s=void 0===e;return!n&&i&&t.constructor===h&&s?t:o(v?new l(i&&!s?t.source:t,e):l((i=t instanceof h)?t.source:t,i&&s?c.call(t):e),n?this:u,h)};for(var p=function(t){t in h||s(h,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=r(l),m=0;g.length>m;)p(g[m++]);u.constructor=h,h.prototype=u,n("2aba")(i,"RegExp",h)}n("7a56")("RegExp")},"456d":function(t,e,n){var i=n("4bf8"),o=n("0d58");n("5eda")("keys",function(){return function(t){return o(i(t))}})},"5d58":function(t,e,n){t.exports=n("d8d6")},"5dbc":function(t,e,n){var i=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var s,r=e.constructor;return r!==n&&"function"==typeof r&&(s=r.prototype)!==n.prototype&&i(s)&&o&&o(t,s),t}},"5eda":function(t,e,n){var i=n("5ca1"),o=n("8378"),s=n("79e5");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],r={};r[t]=e(n),i(i.S+i.F*s(function(){n(1)}),"Object",r)}},"67bb":function(t,e,n){t.exports=n("f921")},"6b54":function(t,e,n){"use strict";n("3846");var i=n("cb7c"),o=n("0bfb"),s=n("9e1e"),r="toString",a=/./[r],c=function(t){n("2aba")(RegExp.prototype,r,t,!0)};n("79e5")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?c(function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?o.call(t):void 0)}):a.name!=r&&c(function(){return a.call(this)})},7618:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var i=n("5d58"),o=n.n(i),s=n("67bb"),r=n.n(s);function a(t){return a="function"===typeof r.a&&"symbol"===typeof o.a?function(t){return typeof t}:function(t){return t&&"function"===typeof r.a&&t.constructor===r.a&&t!==r.a.prototype?"symbol":typeof t},a(t)}function c(t){return c="function"===typeof r.a&&"symbol"===a(o.a)?function(t){return a(t)}:function(t){return t&&"function"===typeof r.a&&t.constructor===r.a&&t!==r.a.prototype?"symbol":a(t)},c(t)}},"87b3":function(t,e,n){var i=Date.prototype,o="Invalid Date",s="toString",r=i[s],a=i.getTime;new Date(NaN)+""!=o&&n("2aba")(i,s,function(){var t=a.call(this);return t===t?r.call(this):o})},"8b97":function(t,e,n){var i=n("d3f4"),o=n("cb7c"),s=function(t,e){if(o(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:s}},9093:function(t,e,n){var i=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,o)}},a269:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vueSignature",{ref:"signature",attrs:{sigOption:t.option,w:"800px",h:"400px",disabled:t.disabled,defaultUrl:t.dataUrl}}),n("vueSignature",{ref:"signature1",attrs:{sigOption:t.option}}),n("button",{on:{click:t.save}},[t._v("Save")]),n("button",{on:{click:t.clear}},[t._v("Clear")]),n("button",{on:{click:t.undo}},[t._v("Undo")]),n("button",{on:{click:t.addWaterMark}},[t._v("addWaterMark")]),n("button",{on:{click:t.handleDisabled}},[t._v("disabled")])],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{width:t.w,height:t.h},on:{touchmove:function(t){t.preventDefault()}}},[n("canvas",{staticClass:"canvas",attrs:{id:t.uid,"data-uid":t.uid,disabled:t.disabled}})])},r=[],a=n("7618");n("6b54"),n("87b3"),n("a481"),n("3b2b"),n("ac6a"),n("456d");
/*!
 * Signature Pad v3.0.0-beta.4 | https://github.com/szimek/signature_pad
 * (c) 2020 Szymon Nowak | Released under the MIT license
 */
class c{constructor(t,e,n){this.x=t,this.y=e,this.time=n||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class h{constructor(t,e,n,i,o,s){this.startPoint=t,this.control2=e,this.control1=n,this.endPoint=i,this.startWidth=o,this.endWidth=s}static fromPoints(t,e){const n=this.calculateControlPoints(t[0],t[1],t[2]).c2,i=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new h(t[1],n,i,t[2],e.start,e.end)}static calculateControlPoints(t,e,n){const i=t.x-e.x,o=t.y-e.y,s=e.x-n.x,r=e.y-n.y,a={x:(t.x+e.x)/2,y:(t.y+e.y)/2},h={x:(e.x+n.x)/2,y:(e.y+n.y)/2},l=Math.sqrt(i*i+o*o),u=Math.sqrt(s*s+r*r),d=a.x-h.x,f=a.y-h.y,v=u/(l+u),p={x:h.x+d*v,y:h.y+f*v},g=e.x-p.x,m=e.y-p.y;return{c1:new c(a.x+g,a.y+m),c2:new c(h.x+g,h.y+m)}}length(){const t=10;let e,n,i=0;for(let o=0;o<=t;o+=1){const s=o/t,r=this.point(s,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this.point(s,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(o>0){const t=r-e,o=a-n;i+=Math.sqrt(t*t+o*o)}e=r,n=a}return i}point(t,e,n,i,o){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t}}function l(t,e=250){let n,i,o,s=0,r=null;const a=()=>{s=Date.now(),r=null,n=t.apply(i,o),r||(i=null,o=[])};return function(...c){const h=Date.now(),l=e-(h-s);return i=this,o=c,l<=0||l>e?(r&&(clearTimeout(r),r=null),s=h,n=t.apply(i,o),r||(i=null,o=[])):r||(r=window.setTimeout(a,l)),n}}class u{constructor(t,e={}){this.canvas=t,this.options=e,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{if(t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}},this._handleTouchMove=t=>{t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)},this._handleTouchEnd=t=>{const e=t.target===this.canvas;if(e){t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}},this.velocityFilterWeight=e.velocityFilterWeight||.7,this.minWidth=e.minWidth||.5,this.maxWidth=e.maxWidth||2.5,this.throttle="throttle"in e?e.throttle:16,this.minDistance="minDistance"in e?e.minDistance:5,this.dotSize=e.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=e.penColor||"black",this.backgroundColor=e.backgroundColor||"rgba(0,0,0,0)",this.onBegin=e.onBegin,this.onEnd=e.onEnd,this._strokeMoveUpdate=this.throttle?l(u.prototype._strokeUpdate,this.throttle):u.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:e}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={},n){const i=new Image,o=e.ratio||window.devicePixelRatio||1,s=e.width||this.canvas.width/o,r=e.height||this.canvas.height/o;this._reset(),i.onload=()=>{this._ctx.drawImage(i,0,0,s,r),n&&n()},i.onerror=t=>{n&&n(t)},i.src=t,this._isEmpty=!1}toDataURL(t="image/png",e){switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,e)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,({color:t,curve:e})=>this._drawCurve({color:t,curve:e}),({color:t,point:e})=>this._drawDot({color:t,point:e})),this._data=t}toData(){return this._data}_strokeBegin(t){const e={color:this.penColor,points:[]};"function"===typeof this.onBegin&&this.onBegin(t),this._data.push(e),this._reset(),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);const e=t.clientX,n=t.clientY,i=this._createPoint(e,n),o=this._data[this._data.length-1],s=o.points,r=s.length>0&&s[s.length-1],a=!!r&&i.distanceTo(r)<=this.minDistance,c=o.color;if(!r||!r||!a){const t=this._addPoint(i);r?t&&this._drawCurve({color:c,curve:t}):this._drawDot({color:c,point:i}),s.push({time:i.time,x:i.x,y:i.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"===typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e){const n=this.canvas.getBoundingClientRect();return new c(t-n.left,e-n.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const t=this._calculateCurveWidths(e[1],e[2]),n=h.fromPoints(e,t);return e.shift(),n}return null}_calculateCurveWidths(t,e){const n=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(n),o={end:i,start:this._lastWidth};return this._lastVelocity=n,this._lastWidth=i,o}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,n){const i=this._ctx;i.moveTo(t,e),i.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:e}){const n=this._ctx,i=e.endWidth-e.startWidth,o=2*Math.floor(e.length());n.beginPath(),n.fillStyle=t;for(let s=0;s<o;s+=1){const t=s/o,n=t*t,r=n*t,a=1-t,c=a*a,h=c*a;let l=h*e.startPoint.x;l+=3*c*t*e.control1.x,l+=3*a*n*e.control2.x,l+=r*e.endPoint.x;let u=h*e.startPoint.y;u+=3*c*t*e.control1.y,u+=3*a*n*e.control2.y,u+=r*e.endPoint.y;const d=Math.min(e.startWidth+r*i,this.maxWidth);this._drawCurveSegment(l,u,d)}n.closePath(),n.fill()}_drawDot({color:t,point:e}){const n=this._ctx,i="function"===typeof this.dotSize?this.dotSize():this.dotSize;n.beginPath(),this._drawCurveSegment(e.x,e.y,i),n.closePath(),n.fillStyle=t,n.fill()}_fromData(t,e,n){for(const i of t){const{color:t,points:o}=i;if(o.length>1)for(let n=0;n<o.length;n+=1){const i=o[n],s=new c(i.x,i.y,i.time);this.penColor=t,0===n&&this._reset();const r=this._addPoint(s);r&&e({color:t,curve:r})}else this._reset(),n({color:t,point:o[0]})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),n=0,i=0,o=this.canvas.width/e,s=this.canvas.height/e,r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("width",this.canvas.width.toString()),r.setAttribute("height",this.canvas.height.toString()),this._fromData(t,({color:t,curve:e})=>{const n=document.createElement("path");if(!isNaN(e.control1.x)&&!isNaN(e.control1.y)&&!isNaN(e.control2.x)&&!isNaN(e.control2.y)){const i=`M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} `+`C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} `+`${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} `+`${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;n.setAttribute("d",i),n.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),n.setAttribute("stroke",t),n.setAttribute("fill","none"),n.setAttribute("stroke-linecap","round"),r.appendChild(n)}},({color:t,point:e})=>{const n=document.createElement("circle"),i="function"===typeof this.dotSize?this.dotSize():this.dotSize;n.setAttribute("r",i.toString()),n.setAttribute("cx",e.x.toString()),n.setAttribute("cy",e.y.toString()),n.setAttribute("fill",t),r.appendChild(n)});const a="data:image/svg+xml;base64,",c='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+` viewBox="${n} ${i} ${o} ${s}"`+` width="${o}"`+` height="${s}"`+">";let h=r.innerHTML;if(void 0===h){const t=document.createElement("dummy"),e=r.childNodes;t.innerHTML="";for(let n=0;n<e.length;n+=1)t.appendChild(e[n].cloneNode(!0));h=t.innerHTML}const l="</svg>",u=c+h+l;return a+btoa(u)}}var d=u,f={name:"vueSignature",props:{sigOption:{type:Object,default:function(){return{backgroundColor:"rgb(255,255,255)",penColor:"rgb(0, 0, 0)"}}},w:{type:String,default:"100%"},h:{type:String,default:"100%"},clearOnResize:{type:Boolean,default:!1},waterMark:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1},defaultUrl:{type:String,default:""}},data:function(){return{sig:function(){},option:{backgroundColor:"rgb(255,255,255)",penColor:"rgb(0, 0, 0)"},uid:""}},watch:{disabled:function(t){var e=this;e.sig.off&&(t?e.sig.off():e.sig.on())}},created:function(){var t=this;this.uid="canvas"+t._uid;for(var e=Object.keys(t.sigOption),n=0,i=e;n<i.length;n++){var o=i[n];t.option[o]=t.sigOption[o]}},methods:{draw:function(){var t=this,e=document.getElementById(t.uid);function n(e){var n;t.isEmpty()||(n=t.save());var i=Math.max(window.devicePixelRatio||1,1),o=RegExp(/px/);e.width=o.test(t.w)?t.w.replace(/px/g,"")*i:e.offsetWidth*i,e.height=o.test(t.h)?t.h.replace(/px/g,"")*i:e.offsetHeight*i,e.getContext("2d").scale(i,i),t.clear(),!t.clearOnResize&&void 0!==n&&t.fromDataURL(n),Object.keys(t.waterMark).length&&t.addWaterMark(t.waterMark)}t.sig=new d(e,t.option),window.addEventListener("resize",n(e)),n(e),""!==t.defaultUrl&&t.fromDataURL(t.defaultUrl),t.disabled?t.sig.off():t.sig.on()},clear:function(){var t=this;t.sig.clear()},save:function(t){var e=this;return t?e.sig.toDataURL(t):e.sig.toDataURL()},fromDataURL:function(t){var e=this;e.sig.fromDataURL(t)},isEmpty:function(){var t=this;return t.sig.isEmpty()},undo:function(){var t=this,e=t.sig.toData();e&&(e.pop(),t.sig.fromData(e))},addWaterMark:function(t){var e=this;if("[object Object]"!=Object.prototype.toString.call(t))throw new Error("Expected Object, got "+Object(a["a"])(t)+".");var n=document.getElementById(e.uid),i={text:t.text||"",x:t.x||20,y:t.y||20,sx:t.sx||40,sy:t.sy||40},o=n.getContext("2d");o.font=t.font||"20px sans-serif",o.fillStyle=t.fillStyle||"#333",o.strokeStyle=t.strokeStyle||"#333","all"==t.style?(o.fillText(i.text,i.x,i.y),o.strokeText(i.text,i.sx,i.sy)):"stroke"==t.style?o.strokeText(i.text,i.sx,i.sy):o.fillText(i.text,i.x,i.y),e.sig._isEmpty=!1}},mounted:function(){var t=this;this.$nextTick().then(function(){t.draw()})}},v=f,p=(n("f063"),n("2877")),g=Object(p["a"])(v,s,r,!1,null,null,null),m=g.exports,y=m,x={name:"app",components:{vueSignature:y},data:function(){return{option:{penColor:"rgb(0, 0, 0)",backgroundColor:"rgb(255,255,255)"},disabled:!1,dataUrl:"https://avatars2.githubusercontent.com/u/17644818?s=460&v=4"}},methods:{save:function(){var t=this,e=t.$refs.signature.save(),n=t.$refs.signature.save("image/jpeg"),i=t.$refs.signature.save("image/svg+xml");console.log(e),console.log(n),console.log(i)},clear:function(){var t=this;t.$refs.signature.clear()},undo:function(){var t=this;t.$refs.signature.undo()},addWaterMark:function(){var t=this;t.$refs.signature.addWaterMark({text:"mark text",font:"20px Arial",style:"all",fillStyle:"red",strokeStyle:"blue",x:100,y:200,sx:100,sy:200})},fromDataURL:function(t){var e=this;e.$refs.signature.fromDataURL("data:image/png;base64,iVBORw0K...")},handleDisabled:function(){var t=this;t.disabled=!t.disabled}}},_=x,b=Object(p["a"])(_,i,o,!1,null,null,null);e["default"]=b.exports},a481:function(t,e,n){"use strict";var i=n("cb7c"),o=n("4bf8"),s=n("9def"),r=n("4588"),a=n("0390"),c=n("5f1b"),h=Math.max,l=Math.min,u=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,p){return[function(i,o){var s=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,s,o):n.call(String(s),i,o)},function(t,e){var o=p(n,t,this,e);if(o.done)return o.value;var u=i(t),d=String(this),f="function"===typeof e;f||(e=String(e));var m=u.global;if(m){var y=u.unicode;u.lastIndex=0}var x=[];while(1){var _=c(u,d);if(null===_)break;if(x.push(_),!m)break;var b=String(_[0]);""===b&&(u.lastIndex=a(d,s(u.lastIndex),y))}for(var w="",S=0,E=0;E<x.length;E++){_=x[E];for(var M=String(_[0]),k=h(l(r(_.index),d.length),0),L=[],D=1;D<_.length;D++)L.push(v(_[D]));var T=_.groups;if(f){var P=[M].concat(L,k,d);void 0!==T&&P.push(T);var C=String(e.apply(void 0,P))}else C=g(M,d,k,L,T,e);k>=S&&(w+=d.slice(S,k)+C,S=k+M.length)}return w+d.slice(S)}];function g(t,e,i,s,r,a){var c=i+t.length,h=s.length,l=f;return void 0!==r&&(r=o(r),l=d),n.call(a,l,function(n,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(c);case"<":a=r[o.slice(1,-1)];break;default:var l=+o;if(0===l)return n;if(l>h){var d=u(l/10);return 0===d?n:d<=h?void 0===s[d-1]?o.charAt(1):s[d-1]+o.charAt(1):n}a=s[l-1]}return void 0===a?"":a})}})},aae3:function(t,e,n){var i=n("d3f4"),o=n("2d95"),s=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},ac6a:function(t,e,n){for(var i=n("cadf"),o=n("0d58"),s=n("2aba"),r=n("7726"),a=n("32e9"),c=n("84f2"),h=n("2b4c"),l=h("iterator"),u=h("toStringTag"),d=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(f),p=0;p<v.length;p++){var g,m=v[p],y=f[m],x=r[m],_=x&&x.prototype;if(_&&(_[l]||a(_,l,d),_[u]||a(_,u,m),c[m]=d,y))for(g in i)_[g]||s(_,g,i[g],!0)}},f063:function(t,e,n){"use strict";var i=n("09ee"),o=n.n(i);o.a}}]);