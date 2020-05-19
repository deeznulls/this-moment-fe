(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{10:function(e,t,a){var i;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)&&i.length){var r=n.apply(null,i);r&&e.push(r)}else if("object"===o)for(var l in i)a.call(i,l)&&i[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()},101:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),o=a(6),r=a(10),l=a.n(r),s=a(23),c=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var i,n,o=a.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(i=o.next()).done;)r.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(a=o.return)&&a.call(o)}finally{if(n)throw n.error}}return r},p=function(e){var t=e.defaultOption,a=e.options,o=e.onUpdate,r=e.className,l=e.style,s=c(Object(i.useState)(!0),2),p=s[0],d=s[1],g=c(Object(i.useState)(t),2),_=g[0],u=g[1];return p?n.a.createElement("select",{className:r,style:l,value:_.value,onChange:function(){return e=event.target.value,t=a.find((function(t){return t.value==e})),u(t.value),d(!1),void o(t.value);var e,t},defaultValue:t},a.map((function(e,t){return n.a.createElement("option",{value:e.value,key:t},e.title)}))):n.a.createElement("span",{onClick:function(){return d(!0)}},_.title)},d=a(73),g=a.n(d),_=a(5),u=function(e){var t=e.action,a=e.onClick;return"stop"===t?n.a.createElement("div",{className:g.a.toggleTask,onClick:a},n.a.createElement(s.a,{type:"stop",className:g.a.stopIcon,title:"Stop tracking task"})):n.a.createElement("div",{className:g.a.toggleTask,onClick:a},n.a.createElement(s.a,{type:"play",className:g.a.playIcon,title:"Continue tracking task"}))},m=Object(o.inject)("rootStore")(Object(o.observer)((function(e){var t=e.rootStore,a=function(e,t){var a=e.title.toLowerCase(),i=t.title.toLowerCase();return a>i?1:a<i?-1:0},i={fill:_.a[t.currentTheme].dayExpandColor};return n.a.createElement(n.a.Fragment,null,t.canExpandDay&&n.a.createElement("button",{className:g.a.expandDay,onClick:function(){t.toggleIsDayExpanded(!0),t.adjustStartAt()}},n.a.createElement(s.a,{type:"arrow_up",className:g.a.expandIcon,style:i,title:"load full day"})),n.a.createElement("div",{className:g.a.tasks},t.tasksWithLabels.map((function(e){var i,o,r,c=t.currentTaskId===e.id,d=t.currentTaskTrimId===e.id,m=t.currentTaskReassignId===e.id,f=t.currentTaskResizeId===e.id,x={task:{top:e.startAtPosition,height:e.pixelHeight,borderColor:e.label.colorDarker,background:e.label.color},labels:{},shortcut:{textShadow:"2px 2px "+e.label.colorDarker},trim:{top:t.taskTrimMeta.position}};return e.label.id<0&&(x.task.borderColor="#333",x.task.color=_.a[t.currentTheme].taskUnassignedColor,x.task.background=_.a[t.currentTheme].taskUnassignedBg,x.task.borderColor=_.a[t.currentTheme].taskUnassignedBorderColor,x.labels.color=_.a[t.currentTheme].taskUnassignedColor,x.labels.borderColor=_.a[t.currentTheme].taskUnassignedColor),t.currentTheme,n.a.createElement("div",{className:l()(g.a.task,(i={},i[g.a.isActive]=c,i[g.a.isResizing]=f,i[g.a.isTrim]=d,i[g.a.isUnassigned]=e.label.id<0,i)),key:e.id,style:x.task,onMouseLeave:function(){t.disableTaskTrim(),t.disableTaskReassign()},onDoubleClick:function(a){c||(t.disableTaskReassign(),t.enableTaskTrim(e.id))}},m&&n.a.createElement("div",{className:g.a.quickInfo},n.a.createElement(p,{className:g.a.labels,style:x.labels,defaultOption:e.label.id,options:(o=t.labelsList,r=o.map((function(e){return{title:e.description,value:e.id}})).sort(a),r.push({title:"Unnasigned",value:-1}),r),onUpdate:function(a){t.reassignTask(e.id,a)}})),!m&&n.a.createElement("div",{className:g.a.quickInfo,onClick:function(){return t.enableTaskReassign(e.id)}},n.a.createElement("span",{className:g.a.shortcut,style:x.shortcut},e.label.shortcut),n.a.createElement("span",{className:g.a.description},e.label.description)),n.a.createElement("span",{className:g.a.startAt},"@",e.readableStartAt," - "),n.a.createElement("span",{className:g.a.endAt}," ",e.readableEndAt),n.a.createElement("span",{className:g.a.duration},e.readableDuration),n.a.createElement("div",{className:g.a.trimContainer},n.a.createElement("div",{className:g.a.trim,style:x.trim},n.a.createElement("strong",null,"Split at: ",t.taskTrimMeta.title))),t.canTaskBeToggled(e.id)&&n.a.createElement(u,{action:c?"stop":"play",onClick:function(){return t.toggleCurrentTask()}}),n.a.createElement("div",{className:g.a.deleteTask,onClick:function(){t.deleteTask(e.id)}},n.a.createElement(s.a,{type:"delete",className:g.a.deleteIcon,title:"Delete task"})),n.a.createElement("div",{className:g.a.resizeTop,onMouseDown:function(){t.enableTaskResize(e.id,"start")}}),!c&&n.a.createElement("div",{className:g.a.resizeBottom,onMouseDown:function(){t.enableTaskResize(e.id,"end")}}),c&&n.a.createElement("div",{className:g.a.tracking},n.a.createElement("span",null,"•"),n.a.createElement("span",null,"•"),n.a.createElement("span",null,"•")))}))))})));t.default=m},73:function(e,t,a){var i=a(11),n=a(74);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1},r=(i(n,o),n.locals?n.locals:{});e.exports=r},74:function(e,t,a){(t=a(12)(!1)).push([e.i,'.xrkn5{position:absolute;right:15px;top:0;width:310px}._1XmD1{position:absolute;top:-28px;right:0;width:100%;border:0;outline:0;opacity:0.5;cursor:pointer;font-family:"Lucida Grande",sans-serif;font-size:12px;height:20px;color:#232323;background:transparent;transition:opacity 0.3s linear;z-index:1}._1XmD1:hover{opacity:0.9}._2uGnI{width:24px}._2uGnI svg{fill:inherit}.IamJw{background:transparent;color:#fff;font-size:12px;border:1px solid #fff;width:auto;margin:2px 7px 2px}._3g8C3{height:60px;width:100%;position:absolute;top:0;left:0;border:7px solid #6209c7;color:#fff;font-family:"Lucida Grande",sans-serif;font-size:12px;opacity:1;overflow:hidden;transition:height .5s linear,margin-top .5s linear,top .5s linear,width 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55),margin-left 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);user-select:none;z-index:3}._3g8C3 ._1CSny{display:block;cursor:pointer}._3g8C3 ._2qDUc{display:none;text-transform:uppercase;padding:5px;font-weight:bold;margin-right:5px;vertical-align:top}._3g8C3 ._1i055{padding:5px;opacity:0.5}._3g8C3 .Wkg8C{padding:5px;opacity:0.5}._3g8C3 ._16FcE,._3g8C3 ._3B_Zm{padding:5px 0 5px 5px;opacity:0.5;display:inline-block}._3g8C3 .lxjxa{opacity:0;background:transparent;border:0;outline:0;color:red;position:absolute;right:0;top:2px;transition:opacity 0.4s linear;width:30px;padding:0;cursor:pointer}._3g8C3 .lxjxa ._1IPN1{display:block}._3g8C3 .lxjxa ._1IPN1 svg{fill:#fff}._3g8C3 .YM_3L{opacity:0;background:transparent;border:0;outline:0;color:gray;position:absolute;right:30px;top:4px;transition:opacity 0.4s linear;width:27px;padding:0;cursor:pointer}._3g8C3 .YM_3L ._2M3_k{display:block}._3g8C3 .YM_3L ._2M3_k svg{fill:#fff}._3g8C3 .YM_3L ._2NdFd{display:block}._3g8C3 .YM_3L ._2NdFd svg{fill:#fff}._3g8C3:hover{min-height:60px;overflow:visible;z-index:4}._3g8C3:hover .YM_3L,._3g8C3:hover .lxjxa{opacity:0.9}._3g8C3:hover ._2E8o9,._3g8C3:hover .Wkg8C,._3g8C3:hover ._1i055{opacity:1}._3o3Kh{cursor:row-resize;position:absolute;top:-4px;left:0;width:100%;height:4px;text-align:center}.xUd2C{cursor:row-resize;position:absolute;bottom:-4px;left:0;width:100%;height:4px;text-align:center}._1f2we{width:24px}._1f2we svg{fill:#fff}.kbhSp{display:none;position:absolute;overflow:hidden;top:0;left:0;width:100%;height:100%;z-index:10}._2Dsx7{position:absolute;top:0;left:0;width:100%;height:20px;border:0;border-top:1px dashed #f33d3d;padding:5px 10px;margin-top:5px}._2Dsx7 strong{background:#f33d3d;color:#fff;padding:3px 6px;height:21px;position:absolute;font-weight:normal;left:10px;top:-10px;user-select:none}._10O9n{display:none}.VA9Ym ._16FcE,.VA9Ym ._3B_Zm,.VA9Ym .Wkg8C,.VA9Ym ._1i055{opacity:1}.VA9Ym ._3o3Kh{display:block}._3BEx8 ._16FcE,._3BEx8 ._3B_Zm,._3BEx8 .Wkg8C,._3BEx8 ._1i055{opacity:0.7}._3BEx8 ._1i055{font-style:italic}._3g8C3._2aNIs{transition:none}._3g8C3._2aNIs:hover{width:100%;margin-left:0}._3g8C3._2aNIs:hover .YM_3L,._3g8C3._2aNIs:hover .lxjxa{display:none}@keyframes _3LPdE{0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}._34_jD{position:absolute;width:100%;bottom:-3px;left:0;color:#dc1f1f;text-align:center;font-size:20px;vertical-align:text-bottom;margin-left:3px}._34_jD span{animation-name:_3LPdE;animation-duration:2s;animation-iteration-count:infinite;animation-fill-mode:both}._34_jD span:nth-child(2){animation-delay:.2s}._34_jD span:nth-child(3){animation-delay:.4s}@media (min-width: 400px){._3g8C3 ._1CSny{display:inline-block}._3g8C3 ._1i055{display:inline-block}._3g8C3 .Wkg8C{float:right}._3g8C3 ._2qDUc{display:inline-block}._3g8C3 .lxjxa{right:-45px;top:0;width:43px;padding:0 10px}._3g8C3 .lxjxa ._1IPN1 svg{fill:red}._3g8C3 .YM_3L{right:-42px;top:25px;width:38px;padding:0 10px}._3g8C3 .YM_3L ._2M3_k svg{fill:#ababab}._3g8C3 .YM_3L ._2NdFd{width:21px}._3g8C3 .YM_3L ._2NdFd svg{fill:#2da945}._3g8C3.VA9Ym{width:101%;margin-left:-0.5%;min-height:38px}._3g8C3:hover{width:110%;margin-left:-5%;min-height:60px}._3g8C3:hover:after{content:\'\';position:absolute;top:-20px;right:-55px;width:85px;height:85px;z-index:-1}._3g8C3:hover .YM_3L,._3g8C3:hover .lxjxa{transition:opacity 0.1s linear;opacity:0.8}._3g8C3:hover .YM_3L:hover,._3g8C3:hover .lxjxa:hover{opacity:1}.xrkn5{right:0;width:630px}._1XmD1{width:630px}._3_7Ac{border-color:#f33d3d !important;cursor:row-resize}._3_7Ac .kbhSp{display:block}._3_7Ac .YM_3L,._3_7Ac .lxjxa{display:none}}\n',""]),t.locals={tasks:"xrkn5",expandDay:"_1XmD1",expandIcon:"_2uGnI",labels:"IamJw",task:"_3g8C3",quickInfo:"_1CSny",shortcut:"_2qDUc",description:"_1i055",duration:"Wkg8C",startAt:"_16FcE",endAt:"_3B_Zm",deleteTask:"lxjxa",deleteIcon:"_1IPN1",toggleTask:"YM_3L",stopIcon:"_2M3_k",playIcon:"_2NdFd",startat:"_2E8o9",resizeTop:"_3o3Kh",resizeBottom:"xUd2C",resizeIcon:"_1f2we",trimContainer:"kbhSp",trim:"_2Dsx7",isHidden:"_10O9n",isActive:"VA9Ym",isUnassigned:"_3BEx8",isResizing:"_2aNIs",tracking:"_34_jD",blink:"_3LPdE",isTrim:"_3_7Ac"},e.exports=t}}]);