(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{10:function(t,e,r){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)&&o.length){var a=n.apply(null,o);a&&t.push(a)}else if("object"===i)for(var s in o)r.call(o,s)&&o[s]&&t.push(s)}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0===(o=function(){return n}.apply(e,[]))||(t.exports=o)}()},85:function(t,e,r){var o=r(11),n=r(86);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var i={insert:"head",singleton:!1},a=(o(n,i),n.locals?n.locals:{});t.exports=a},86:function(t,e,r){(e=r(12)(!1)).push([t.i,".Vzdtu{filter:blur(2px)}.Vzdtu:after{content:'';background:#000;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;z-index:5}.dR7cI{position:relative;border-top:35px solid transparent;margin-top:70px}._1OKlL{height:100%;position:absolute;top:-200px;right:0;background:#565656;width:375px;height:100%;padding-bottom:200px;z-index:0}@media (min-width: 400px){._1OKlL{width:630px}.dR7cI{margin-top:90px}}\n",""]),e.locals={isBlurred:"Vzdtu",main:"dR7cI",bg:"_1OKlL"},t.exports=e},95:function(t,e,r){"use strict";r.r(e);var o=r(1),n=r(6),i=r(10),a=r.n(i),s=r(5),l=r(85),p=r.n(l),u=Object(n.inject)("rootStore")(Object(n.observer)((function(t){var e,r=t.rootStore,n=t.children,i={bg:{borderLeftColor:s.a[r.currentTheme].clockBgColor,background:s.a[r.currentTheme].taskBgColor}};return o.createElement("div",{id:"main","data-bg":!0,className:a()(p.a.main,(e={},e[p.a.isBlurred]=r.isBlurred,e))},o.createElement("div",{className:p.a.bg,style:i.bg}),n)})));e.default=u}}]);