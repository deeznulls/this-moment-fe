(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{10:function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var r=a.apply(null,o);r&&e.push(r)}else if("object"===i)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},24:function(e,t,n){"use strict";var o=n(1),a=n.n(o),i=n(25),r=n.n(i),l=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,a,i=n.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)r.push(o.value)}catch(e){a={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return r};t.a=function(e){var t=e.options,n=e.onUpdate,i=e.className,c=e.style,s=l(Object(o.useState)(!1),2),p=s[0],u=s[1];Object(o.useEffect)((function(){u(!1)}),[]);return a.a.createElement("div",{className:r.a.dropdown+" "+i,onMouseLeave:function(){return u(!1)}},a.a.createElement("span",{className:r.a.title,onClick:function(){return u(!p)},onMouseEnter:function(){return u(!0)}},"tags"),p&&a.a.createElement("div",{className:r.a.optionsContainer},a.a.createElement("ul",{className:r.a.options,style:c},t.map((function(e){return a.a.createElement("li",{className:r.a.option,value:e.value,key:e.id},a.a.createElement("label",{className:r.a.label},a.a.createElement("input",{className:r.a.checkbox,type:"checkbox",value:e.id,defaultChecked:e.tagged,onChange:function(){return function(e){n(e.target.value,e.target.checked)}(event)}}),e.description))})))))}},25:function(e,t,n){var o=n(11),a=n(26);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},r=(o(a,i),a.locals?a.locals:{});e.exports=r},26:function(e,t,n){(t=n(12)(!1)).push([e.i,"._2-ccf{cursor:pointer}._3SdHH{position:relative;display:inline-block;user-select:none;font-size:12px}.VGRJU{cursor:pointer;position:relative;z-index:1}._1svvM{position:absolute;top:0;left:-8px;padding:20px 0 0 0;text-align:left}.wpmQA{margin:0;padding:7px;color:#888;border:1px solid #ccc;background:#fff}._1zOVP{list-style-type:none;margin:0;padding:0}._1G-Bz{margin-right:5px}._3WV7W{cursor:pointer;white-space:nowrap}\n",""]),t.locals={value:"_2-ccf",dropdown:"_3SdHH",title:"VGRJU",optionsContainer:"_1svvM",options:"wpmQA",option:"_1zOVP",checkbox:"_1G-Bz",label:"_3WV7W"},e.exports=t},87:function(e,t,n){var o=n(11),a=n(88);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},r=(o(a,i),a.locals?a.locals:{});e.exports=r},88:function(e,t,n){(t=n(12)(!1)).push([e.i,"._3RXSX{position:absolute;z-index:6;margin-left:5px;left:45px}._19EPx{display:none}._6IPVH{display:none;color:#000;font-family:\"Lucida Grande\",sans-serif}._6IPVH:before{content:'';display:block;background:#fff;opacity:0;width:100%;height:100%;position:absolute;left:0;bottom:0}._6IPVH.JOCe3{display:block;position:absolute;bottom:0;left:0;width:100%;padding-bottom:0;z-index:1}._6IPVH._38mVe{position:relative;margin-top:14px}._1vSnt{position:absolute;left:7px;bottom:2px;width:20px;cursor:pointer;opacity:0.5;transition:all 0.3s ease}._1vSnt:hover{opacity:1}._1vSnt.JOCe3{opacity:1}._3J8dF,._9_qF5{width:24px;display:inline-block;position:absolute;top:5px;left:3px;padding:6px;height:24px;background:fff;line-height:13px}._3J8dF svg,._9_qF5 svg{fill:#383838}._9_qF5{width:24px;height:24px;padding:4px}._12Yfx{position:relative;width:100%;margin:0;border:0;padding:0;border-bottom:2px solid gray;clear:both}._12Yfx:before{content:'';display:block;background:#fff;opacity:0.9;width:100%;height:100%;position:absolute;left:0;bottom:0}._12Yfx._38mVe{position:absolute;top:-40px;left:0}._12Yfx ._1_Fv_{float:left;border:0;outline:0;width:20px;font-size:13px;font-weight:bold;text-transform:uppercase}._12Yfx ._3Itr0{float:left;-webkit-appearance:none;outline:0;width:310px;color:#383838;font-size:13px;font-weight:bold;line-height:14px;padding:7px 27px;background:transparent;position:relative;border:2px solid #fff}._12Yfx ._3Itr0::placeholder{font-weight:normal;opacity:0.8}._12Yfx ._1naHd{display:none;float:right;position:absolute;top:0;right:2px;border:0;font-weight:bold;letter-spacing:0.5px;font-size:12px;line-height:29px;color:#09b309;background:transparent;opacity:0.9;cursor:pointer}._12Yfx ._1naHd.JOCe3{display:block}._1mRRp{position:relative;margin:0;text-align:left;clear:both;white-space:nowrap;margin-left:6px}._2T5nz{cursor:pointer;overflow:hidden;margin-bottom:4px;float:left;clear:left;opacity:1;border:1px solid transparent}._2T5nz:hover{position:relative;transition:all 0.1s linear;transform:scale(1.1, 1.1);z-index:2;opacity:1}._2T5nz ._25hlT{display:none;background:#ccc;color:#fff;font-size:13px;line-height:22px;min-width:22px;padding:0 5px;text-align:center;text-transform:uppercase;vertical-align:bottom;height:22px}._2T5nz ._2Am5w{padding:0 5px;font-size:12px;line-height:22px;background:#fff;display:inline-block;margin:0;height:22px}._1lfIx{position:absolute !important;color:#333;font-size:13px !important;top:8px;right:35px;margin-right:25px}._1lfIx li{margin-bottom:5px}._16j8C{display:inline-block;margin-left:8px}._37hcg{display:inline-block;font-size:12px;color:#989898;padding:2px 4px;line-height:12px;background:#f3f0f0;margin-right:4px}@media (min-width: 400px){._3RXSX{left:70px}._12Yfx ._3Itr0{width:620px}._2T5nz ._25hlT{display:inline-block}}\n",""]),t.locals={quickMenu:"_3RXSX",isFaded:"_19EPx",content:"_6IPVH",isActive:"JOCe3",isBelow:"_38mVe",icon:"_1vSnt",searchIcon:"_3J8dF",addIcon:"_9_qF5",newLabel:"_12Yfx",newLabelShortcut:"_1_Fv_",newLabelDescription:"_3Itr0",submit:"_1naHd",labels:"_1mRRp",label:"_2T5nz",shortcut:"_25hlT",description:"_2Am5w",newLabelTagsDropdown:"_1lfIx",tags:"_16j8C",tag:"_37hcg"},e.exports=t},96:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),i=n(6),r=n(3),l=n(2),c=n(23),s=n(10),p=n.n(s),u=n(87),d=n.n(u),f=n(24),b=function(){return(b=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},m=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,a,i=n.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)r.push(o.value)}catch(e){a={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return r},h=a.a.memo((function(e){var t,n=e.label,o=e.isFaded,i=e.onClick,r={label:{borderColor:n.colorDarker},shortcut:{background:n.color},description:{color:n.colorDarker}};return a.a.createElement("div",{key:n.id,tabIndex:1,className:p()(d.a.label,(t={},t[d.a.isFaded]=o,t)),style:r.label,onKeyPress:function(e){"Enter"===e.key&&i(n.shortcut)},onClick:function(){i(n.shortcut)}},a.a.createElement("dt",{style:r.shortcut,className:d.a.shortcut},n.shortcut),a.a.createElement("dd",{className:d.a.description,style:r.description},n.description))})),x=Object(i.inject)("rootStore")(Object(i.observer)((function(e){var t,n,i,s,u=e.rootStore,x=Object(o.useRef)(),g=Object(o.useRef)(),_=Object(o.useRef)(),v=m(Object(o.useState)(""),2),y=v[0],k=v[1],w=m(Object(o.useState)(!0),2),E=w[0],O=(w[1],m(Object(o.useState)([]),2)),z=O[0],j=O[1],S=m(Object(o.useState)([1,2]),2),N=S[0],M=S[1];Object(o.useEffect)((function(){M([120,u.needle.position+48])}),[u.needle.position]),Object(o.useEffect)((function(){u.isQuickMenuOn&&(x.current.focus(),k(x.current.value))}),[u.isQuickMenuOn]),Object(o.useEffect)((function(){return F(),function(){return H()}}),[]);var C,I,L,V,F=function(){document.addEventListener("keydown",P),document.addEventListener("keyup",Object(r.debounce)(R,100))},H=function(){document.removeEventListener("keydown",P),document.removeEventListener("keyup",Object(r.debounce)(R,100))},P=function(e){if(!u.isQuickMenuOn)return!1;switch(e.key){case"Escape":return u.toggleQuickMenu(!1)}},R=function(e){"description"===e.target.name&&k(e.target.value)},T=function(e){J(e)},J=function(e){u.addTask(e),u.toggleQuickMenu(!1)},Y={quickMenu:{top:N[1]}};return a.a.createElement("section",{className:d.a.quickMenu,style:Y.quickMenu,ref:_},a.a.createElement("div",{className:p()(d.a.content,(t={},t[d.a.isActive]=u.isQuickMenuOn,t[d.a.isBelow]=E,t))},a.a.createElement("dl",{className:d.a.labels},u.isQuickMenuOn&&(L=u.labelsList,V=[],s=!0,L.forEach((function(e){var t=!l.a.isMatcher(l.a.normalizer(e.description),l.a.normalizer(y));s&&!t&&(s=!1),e.isVisible&&V.push(a.a.createElement(h,{label:e,key:e.id,isFaded:t,onClick:T}))})),V)),a.a.createElement("form",{onSubmit:function(e){var t=g.current.value.toLowerCase();u.addLabel(t,x.current.value,z)&&(J(t),x.current.value="",j([]),z=[]),e.preventDefault()},autoComplete:"off"},a.a.createElement("fieldset",{className:p()(d.a.newLabel,(n={},n[d.a.isBelow]=E,n))},s?a.a.createElement(c.a,{type:"add",className:d.a.addIcon}):a.a.createElement(c.a,{type:"search",className:d.a.searchIcon}),a.a.createElement("input",{name:"shortcut",ref:g,defaultValue:u.makeShortcut(),type:"hidden"}),a.a.createElement("input",{name:"description",ref:x,className:d.a.newLabelDescription,placeholder:"What are you doing now?"}),s&&a.a.createElement(f.a,{className:d.a.newLabelTagsDropdown,options:(C=u.tags,I=z,C.map((function(e){return b(b({},e),{tagged:I.includes(e.id)})}))),onUpdate:function(e,t){return function(e,t){var n=Number(e);t?z.includes(n)||j(z.concat(n)):z.includes(n)&&j(z.filter((function(e){return e!==n})))}(e,t)}}),a.a.createElement("input",{type:"submit",value:"track",className:p()(d.a.submit,(i={},i[d.a.isActive]=s,i))})))))})));t.default=x}}]);