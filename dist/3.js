(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{10:function(e,t,a){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var r=o.apply(null,n);r&&e.push(r)}else if("object"===i)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},24:function(e,t,a){"use strict";var n=a(1),o=a.n(n),i=a(25),r=a.n(i),l=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,o,i=a.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)r.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(a=i.return)&&a.call(i)}finally{if(o)throw o.error}}return r};t.a=function(e){var t=e.options,a=e.onUpdate,i=e.className,c=e.style,s=l(Object(n.useState)(!1),2),p=s[0],d=s[1];Object(n.useEffect)((function(){d(!1)}),[]);return o.a.createElement("div",{className:r.a.dropdown+" "+i,onMouseLeave:function(){return d(!1)}},o.a.createElement("span",{className:r.a.title,onClick:function(){return d(!p)},onMouseEnter:function(){return d(!0)}},"tags"),p&&o.a.createElement("div",{className:r.a.optionsContainer},o.a.createElement("ul",{className:r.a.options,style:c},t.map((function(e){return o.a.createElement("li",{className:r.a.option,value:e.value,key:e.id},o.a.createElement("label",{className:r.a.label},o.a.createElement("input",{className:r.a.checkbox,type:"checkbox",value:e.id,defaultChecked:e.tagged,onChange:function(){return function(e){a(e.target.value,e.target.checked)}(event)}}),e.description))})))))}},25:function(e,t,a){var n=a(11),o=a(26);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},r=(n(o,i),o.locals?o.locals:{});e.exports=r},26:function(e,t,a){(t=a(12)(!1)).push([e.i,"._2-ccf{cursor:pointer}._3SdHH{position:relative;display:inline-block;user-select:none;font-size:12px}.VGRJU{cursor:pointer;position:relative;z-index:1}._1svvM{position:absolute;top:0;left:-8px;padding:20px 0 0 0;text-align:left}.wpmQA{margin:0;padding:7px;color:#888;border:1px solid #ccc;background:#fff}._1zOVP{list-style-type:none;margin:0;padding:0}._1G-Bz{margin-right:5px}._3WV7W{cursor:pointer;white-space:nowrap}\n",""]),t.locals={value:"_2-ccf",dropdown:"_3SdHH",title:"VGRJU",optionsContainer:"_1svvM",options:"wpmQA",option:"_1zOVP",checkbox:"_1G-Bz",label:"_3WV7W"},e.exports=t},73:function(e,t,a){var n=a(11),o=a(74);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},r=(n(o,i),o.locals?o.locals:{});e.exports=r},74:function(e,t,a){(t=a(12)(!1)).push([e.i,'._3g0Gg{position:absolute;color:#fff;background:#353535;width:100%;text-align:center;bottom:0;z-index:8}._34GWQ{display:none !important}._6X0N5{display:none;color:#000;font-family:"Lucida Grande",sans-serif;padding:20px;min-height:80px}._6X0N5._2p_fI{display:block;position:absolute;top:0;left:0;background:#fff;width:100%;z-index:1;box-shadow:2px 3px 8px -2px rgba(0,0,0,0.53)}._16t5x{max-height:800px;overflow-y:auto;margin-top:55px}._1VGsf{position:relative;border-top:1px solid #e6e6e6;text-align:left;margin:18px 27px 15px 27px}._1VGsf button{background:transparent;border:0;color:#b6b6b6;font-size:12px;padding:0 0 0 0;outline:0;cursor:pointer}@keyframes _3MZyU{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}._32Plk{position:absolute;left:10px;bottom:7px;width:20px;cursor:pointer;opacity:0.5;transition:all 0.3s ease}._32Plk:hover{opacity:1}._32Plk._2p_fI{opacity:1}.iVYEN{position:absolute;top:0;left:0;width:100%;padding:20px;text-align:right}.iVYEN fieldset{border:1px solid #bbb;padding:10px;margin:0}.iVYEN ._32pwd,.iVYEN ._3iozS{border:0;float:left;outline:0}.iVYEN ._32pwd{display:none;width:20px;font-size:13px;font-weight:bold;text-transform:uppercase}.iVYEN ._3iozS{width:80%;font-size:12px;margin-top:1px}.iVYEN ._2H9VL{display:none;float:right;border:0;padding:0;cursor:pointer;font-weight:bold;letter-spacing:0.5px;font-size:12px;line-height:15px;color:#09b309;background:transparent;opacity:0.9}.iVYEN ._2H9VL._2p_fI{display:inline-block}._17O0Z{text-align:left;margin:0 0 0 4px}._1tgv9{margin:0 0 7px 0;position:relative}._1tgv9:last-child{margin-bottom:0}._1tgv9._3NhMt{opacity:0.8}._1tgv9._3NhMt .mR_lE{opacity:0.7}._1tgv9._3NhMt .V9ys7 svg{fill:#afafaf}._1tgv9._2Addv{z-index:1000}._1tgv9 ._2nXoD{display:none;background:#ccc;color:#fff;border:1px solid transparent;font-size:13px;line-height:26px;min-width:22px;padding:0px 5px;text-align:center;text-transform:uppercase;vertical-align:middle;border:0}._1tgv9 .MvYul{border:2px solid #ccc;display:inline-block;position:relative;padding:0 5px;padding-right:0;margin:0;color:#ccc;font-size:12px;line-height:19px;vertical-align:middle}._1tgv9 .LL19_:hover{cursor:edit}._1tgv9 ._3U_iT{border:0;outline:0;cursor:pointer;background:transparent;opacity:0.5;padding:0;vertical-align:middle}._1tgv9 ._3U_iT:hover{opacity:1}._1tgv9 .V9ys7{display:block;width:14px;padding:0}._1tgv9 .V9ys7 svg{fill:red}._1tgv9 ._1pufK{color:#dcdcdc;padding:2px 3px}._1tgv9 .W_l1h{font-size:12px;padding:0 10px;color:#ccc}._1tgv9 .wLUEY{font-size:12px;padding:5px;color:#ccc;display:none}._1tgv9 .PKllq{margin-right:8px;margin-top:2px;width:16px;padding:0px;vertical-align:middle}._1tgv9 .PKllq svg{fill:inherit;animation:_3MZyU 5s linear infinite}._1tgv9 ._1mD45{margin-right:8px;margin-top:2px;width:16px;padding:0px;vertical-align:middle}._1tgv9 ._1mD45 svg{fill:inherit}._1tgv9 .SLte2,._1tgv9 .mR_lE{opacity:0.7;width:18px;margin-right:6px;margin-top:2px;vertical-align:middle;transition:opacity 0.1s linear;cursor:pointer}._1tgv9 .SLte2:hover,._1tgv9 .mR_lE:hover{opacity:1}._1tgv9 .SLte2 svg,._1tgv9 .mR_lE svg{fill:#969696}._1_D6E{display:inline-block}._3mEPp{margin:0 7px 0 1px}._24hVk{color:#333;font-size:13px !important;top:-3px;margin-right:25px}._24hVk li{margin-bottom:5px}._2od3S{width:19px;vertical-align:middle;height:21px;opacity:0.5;right:-3px;top:1px;cursor:pointer;fill:#ccc}._2od3S svg{fill:inherit}._3pUqE{display:inline-block;margin-left:8px;line-height:12px}._3Np9A{display:inline-block;font-size:12px;color:#989898;padding:2px 5px;line-height:12px;background:#f3f0f0;margin-right:4px;border-radius:3px}@media (min-width: 400px){._3g0Gg{top:90px}._1tgv9 ._2nXoD{display:inline-block}._32Plk{bottom:5px}.iVYEN ._32pwd{display:inline-block}}\n',""]),t.locals={labelManager:"_3g0Gg",isFaded:"_34GWQ",content:"_6X0N5",isActive:"_2p_fI",scrollableArea:"_16t5x",toggleHiddenLabels:"_1VGsf",labelIcon:"_32Plk",newLabel:"iVYEN",newLabelShortcut:"_32pwd",newLabelDescription:"_3iozS",submit:"_2H9VL",labels:"_17O0Z",label:"_1tgv9",isHidden:"_3NhMt",inVisibleIcon:"mR_lE",deleteIcon:"V9ys7",isShowingMore:"_2Addv",shortcut:"_2nXoD",description:"MvYul",descriptionText:"LL19_",delete:"_3U_iT",deleteDisabled:"_1pufK",totalDuration:"W_l1h",totalTasks:"wLUEY",spinnerIcon:"PKllq",rotating:"_3MZyU",timerIcon:"_1mD45",visibleIcon:"SLte2",moreOptions:"_1_D6E",tagsDropdown:"_3mEPp",newLabelTagsDropdown:"_24hVk",more:"_2od3S",tags:"_3pUqE",tag:"_3Np9A"},e.exports=t},75:function(e,t,a){var n=a(11),o=a(76);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},r=(n(o,i),o.locals?o.locals:{});e.exports=r},76:function(e,t,a){(t=a(12)(!1)).push([e.i,"._2HVLz{background:#fff;border:0;outline:0;color:inherit;padding:0;width:100px}\n",""]),t.locals={input:"_2HVLz"},e.exports=t},77:function(e,t,a){var n=a(11),o=a(78);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},r=(n(o,i),o.locals?o.locals:{});e.exports=r},78:function(e,t,a){(t=a(12)(!1)).push([e.i,'._3BWyD{position:absolute;color:#fff;background:#353535;width:100%;text-align:center;bottom:0;right:0;z-index:8}._1r2BU{float:left;min-width:20%}.YLnOy{display:none;color:#525253;text-align:left;position:absolute;top:0;left:0;background:#fff;width:100%;min-height:100px;padding:20px;font-family:"Lucida Grande",sans-serif;font-size:14px;z-index:1;box-shadow:2px 3px 8px -2px rgba(0,0,0,0.53)}.YLnOy._3AIPe{display:block}._6aizl{position:absolute;right:13px;bottom:11px;width:21px;cursor:pointer;opacity:0.5;transition:all 0.3s ease}._6aizl svg{fill:#fff}._6aizl:hover{opacity:1}._6aizl._3AIPe{opacity:1}._3pin8{display:inline-block;margin-right:15px;cursor:pointer}.nqmCZ{width:22px;vertical-align:middle;opacity:0.3}.nqmCZ svg{fill:#333}.nqmCZ._3AIPe{opacity:1}.nqmCZ.K1cur._3AIPe svg{fill:#5a5a5a}.nqmCZ._2CI3_{width:16px}.nqmCZ._2CI3_._3AIPe svg{fill:#5a5a5a}.nqmCZ.peO2u{width:20px;filter:grayscale(1)}.nqmCZ.peO2u._3AIPe{filter:none}._1-0dh{display:none}._3zIrL{border:1px solid #bbb;padding:10px;font-family:"Lucida Grande",sans-serif;overflow:hidden;margin:0 0 20px 0}._3zIrL .qG_oJ,._3zIrL ._1uJq0{border:0;float:left;outline:0}._3zIrL .qG_oJ{width:20px;font-size:13px;font-weight:bold;text-transform:uppercase}._3zIrL ._1uJq0{width:90%;font-size:12px;margin-top:1px}._3zIrL .jYJbo{display:none}._2KCa8{margin:0;text-align:left;font-family:"Lucida Grande",sans-serif;overflow:hidden}._2KCa8 .fkvlL{background:#ccc;border:1px solid transparent;clear:both;float:left;font-size:13px;line-height:22px;margin:0 0 6px;min-width:22px;padding:0 5px;text-align:center;text-transform:uppercase}._2KCa8 ._1a6kn{border:2px solid #ccc;float:left;font-size:12px;line-height:20px;margin:0;padding:0 0 0 5px}._2KCa8 ._2dL0J{border:0;color:red;outline:0;cursor:pointer}._1Ud7e{display:block;border-bottom:3px solid #efecec;margin-bottom:15px;padding-bottom:15px}._1Ud7e:last-child{border-bottom:0;margin-bottom:0;padding-bottom:0}._1Ud7e strong{display:block;margin-bottom:10px}._3pUiT{font-size:13px;margin-left:5px;color:#888686}._3kDNw{width:16px;cursor:pointer;vertical-align:middle;opacity:0.3}._3kDNw svg{fill:#333}._3kDNw._3AIPe{opacity:1}._3kDNw._1kX7-._3AIPe svg{fill:#5a5a5a}._3kDNw._2fjpy._3AIPe svg{fill:#5a5a5a}@media (min-width: 400px){._6aizl{right:9px;bottom:6px}}\n',""]),t.locals={preferences:"_3BWyD",col:"_1r2BU",content:"YLnOy",isActive:"_3AIPe",icon:"_6aizl",optionLabel:"_3pin8",optionIcon:"nqmCZ",light:"K1cur",dark:"_2CI3_",extreme:"peO2u",optionRadio:"_1-0dh",newLabel:"_3zIrL",newLabelShortcut:"qG_oJ",newLabelDescription:"_1uJq0",submit:"jYJbo",label:"_2KCa8",labelShortcut:"fkvlL",labelDescription:"_1a6kn",labelDelete:"_2dL0J",option:"_1Ud7e",optionName:"_3pUiT",zoomIcon:"_3kDNw",zoomIn:"_1kX7-",zoomOut:"_2fjpy"},e.exports=t},79:function(e,t,a){var n=a(11),o=a(80);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},r=(n(o,i),o.locals?o.locals:{});e.exports=r},80:function(e,t,a){(t=a(12)(!1)).push([e.i,'._1Y3mR{position:absolute;color:#fff;background:#353535;width:100%;text-align:center;bottom:0;z-index:8}.nW5Ic{display:none !important}._3nfl-{color:#505050;text-align:left;font-size:16px;font-weight:normal;margin-top:5px;margin-bottom:19px}.oPgvp{display:none;color:#000;font-family:"Lucida Grande",sans-serif;padding:20px;padding-bottom:30px}.oPgvp._3Sf8g{display:block;position:absolute;top:0;left:0;background:#fff;width:100%;z-index:1;box-shadow:2px 3px 8px -2px rgba(0,0,0,0.53)}.BSFoB{max-height:800px;overflow-y:auto}._3Kb97{position:relative;border-bottom:1px solid #e6e6e6;text-align:left;margin:0 0 15px 0}._3Kb97 button{background:transparent;border:0;color:#b6b6b6;font-size:12px;padding:0 0 0 0;margin-bottom:4px;outline:0;cursor:pointer}@keyframes _2xFEb{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}._1OoEm{position:absolute;left:100px;left:45px;bottom:5px;width:20px;cursor:pointer;opacity:0.5;transition:all 0.3s ease}._1OoEm:hover{opacity:1}._1OoEm._3Sf8g{opacity:1}._36wyf{position:absolute;top:0;left:0;width:100%;padding:20px}._36wyf fieldset{border:1px solid #bbb;padding:10px;overflow:hidden;margin:0}._36wyf .V9xyB,._36wyf ._3BhmK{border:0;float:left;outline:0}._36wyf .V9xyB{display:none;width:20px;font-size:13px;font-weight:bold;text-transform:uppercase}._36wyf ._3BhmK{width:80%;font-size:12px;margin-top:1px}._36wyf ._3o9IN{display:none;float:right;border:0;padding:0;cursor:pointer;font-weight:bold;letter-spacing:0.5px;font-size:12px;line-height:15px;color:#09b309;background:transparent;opacity:0.9}._36wyf ._3o9IN._3Sf8g{display:inline-block}table{width:100%;border-collapse:collapse}table th{text-align:left;color:#505050;font-size:14px;padding-bottom:7px}table th._2t9Hs{text-align:right}table tbody tr{border-bottom:1px solid #c3bebe;padding-top:5px}table td{text-align:left;font-size:12px;padding-bottom:5px;padding-top:5px}table td._2t9Hs{text-align:right}.ly1nM{text-align:left;margin:0 0 0 4px}.SyHVP{margin:0 0 7px 0;overflow:hidden;position:relative}.SyHVP:last-child{margin-bottom:0}.SyHVP._2RLF2{opacity:0.8}.SyHVP._2RLF2 .lkxL-{opacity:0.7}.SyHVP._2RLF2 ._23ewR svg{fill:#afafaf}.SyHVP ._3YUBa{display:none;background:#ccc;color:#fff;border:1px solid transparent;font-size:13px;line-height:26px;min-width:22px;padding:0px 5px;text-align:center;text-transform:uppercase;vertical-align:middle;border:0}.SyHVP .YJgVX{border:2px solid #ccc;display:inline-block;padding:0 5px;margin:0;color:#ccc;font-size:12px;line-height:22px;vertical-align:middle}.SyHVP ._1bxXb{border:0;outline:0;cursor:pointer;background:transparent;opacity:0.5;padding:0;vertical-align:middle}.SyHVP ._1bxXb:hover{opacity:1}.SyHVP ._23ewR{display:block;width:24px;padding:5px}.SyHVP ._23ewR svg{fill:red}.SyHVP ._39oHO{color:#dcdcdc;padding:2px 3px}.SyHVP ._3zPE_{font-size:12px;padding:0 10px;color:#ccc}.SyHVP ._3GGyO{font-size:12px;padding:5px;color:#ccc;display:none}.SyHVP ._2e4hB{margin-right:8px;margin-top:2px;width:16px;padding:0px;vertical-align:middle}.SyHVP ._2e4hB svg{fill:inherit;animation:_2xFEb 5s linear infinite}.SyHVP ._1btbG{margin-right:8px;margin-top:2px;width:16px;padding:0px;vertical-align:middle}.SyHVP ._1btbG svg{fill:inherit}.SyHVP ._1Fkr8,.SyHVP .lkxL-{opacity:0.7;width:18px;margin-right:6px;margin-top:2px;vertical-align:middle;transition:opacity 0.1s linear;cursor:pointer}.SyHVP ._1Fkr8:hover,.SyHVP .lkxL-:hover{opacity:1}.SyHVP ._1Fkr8 svg,.SyHVP .lkxL- svg{fill:#969696}@media (min-width: 400px){._1Y3mR{top:90px}.SyHVP ._3YUBa{display:inline-block}._3UMem{bottom:5px}._36wyf .V9xyB{display:inline-block}}\n',""]),t.locals={reports:"_1Y3mR",isFaded:"nW5Ic",title:"_3nfl-",content:"oPgvp",isActive:"_3Sf8g",scrollableArea:"BSFoB",navigation:"_3Kb97",reportsIcon:"_1OoEm",newLabel:"_36wyf",newLabelShortcut:"V9xyB",newLabelDescription:"_3BhmK",submit:"_3o9IN",totals:"_2t9Hs",labels:"ly1nM",label:"SyHVP",isHidden:"_2RLF2",inVisibleIcon:"lkxL-",deleteIcon:"_23ewR",shortcut:"_3YUBa",description:"YJgVX",delete:"_1bxXb",deleteDisabled:"_39oHO",totalDuration:"_3zPE_",totalTasks:"_3GGyO",spinnerIcon:"_2e4hB",rotating:"_2xFEb",timerIcon:"_1btbG",visibleIcon:"_1Fkr8",labelIcon:"_3UMem"},e.exports=t},81:function(e,t,a){var n=a(11),o=a(82);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},r=(n(o,i),o.locals?o.locals:{});e.exports=r},82:function(e,t,a){(t=a(12)(!1)).push([e.i,"._3h90B{position:fixed;color:#fff;background:#353535;background-attachment:fixed;width:100%;text-align:center;top:0;left:0;z-index:7}.mD-_6{float:right;margin:0 auto;width:100%}._1ryaj{position:relative;background:linear-gradient(73deg, #353535 0%, #484848 100%);height:70px}._3Llzt{font-family:Futura;font-weight:bold;font-size:22px;line-height:50px;margin:0}._3Llzt .iWoK5{min-width:180px;padding:0 20px;display:inline-block}._3qrp7,._1u9OP{background:none;outline:0;border:0}._2nltG,._2HHou{opacity:0.2;vertical-align:middle;display:inline-block}._2nltG svg,._2HHou svg{fill:#fff}._2nltG._14NE7,._2HHou._14NE7{opacity:0.8;cursor:pointer}._2nltG._14NE7:hover,._2HHou._14NE7:hover{opacity:1}.hDOon{border-bottom:1px solid #353535;bottom:0;color:#c3c3c3;font-family:monospace;font-size:13px;font-style:italic;margin:0;padding:0 0 12px;position:absolute;text-align:center;width:100%}._2SBZL{position:absolute;right:0;bottom:0}@media (min-width: 400px){._3h90B:before{height:88px;left:627px}.mD-_6{float:none;width:700px;border-left:70px solid transparent}._1ryaj{height:90px}._3Llzt{font-size:27px;line-height:70px}.hDOon{padding:0 0 15px}._3rCpe{display:none;position:absolute;right:33px;bottom:0;width:28px;height:28px;opacity:0.2;transition:opacity 0.2s linear;cursor:pointer}._3rCpe:hover{opacity:0.5}._3rCpe svg{fill:inherit}}\n",""]),t.locals={header:"_3h90B",contentWrapper:"mD-_6",content:"_1ryaj",title:"_3Llzt",titleContent:"iWoK5",before:"_3qrp7",after:"_1u9OP",beforeIcon:"_2nltG",nextIcon:"_2HHou",isActive:"_14NE7",subtitle:"hDOon",icon__settings:"_2SBZL",target:"_3rCpe"},e.exports=t},98:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(5),r=a(10),l=a.n(r),c=a(3),s=a(2),p=a(23),d=a(73),u=a.n(d),m=a(75),f=a.n(m),g=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,o,i=a.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)r.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(a=i.return)&&a.call(i)}finally{if(o)throw o.error}}return r},b=function(e){var t=e.defaultValue,a=e.onUpdate,i=e.className,r=void 0===i?"":i,l=g(Object(n.useState)(!1),2),c=l[0],s=l[1],p=function(e){s(!1),e!==t&&a(e)};return c?o.a.createElement("input",{name:"editableText",className:f.a.input,defaultValue:t,onKeyDown:function(e){switch(e.key){case"Enter":p(e.target.value);break;case"Escape":s(!1)}},onBlur:function(){return p(event.target.value)},autoFocus:!0}):o.a.createElement("span",{className:f.a.defaultValue+" "+r,onClick:function(){return s(!0)}},t)},_=a(24),x=function(){return(x=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},h=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,o,i=a.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)r.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(a=i.return)&&a.call(i)}finally{if(o)throw o.error}}return r},y=o.a.memo((function(e){var t,a,n,i,r=e.label,c=e.isFaded,s=e.updateLabelDescription,d=e.updateLabelVisibility,m=e.updateLabelTag,f=e.deleteLabel,g=e.isCurrent,x=e.showMore,h=e.setShowMoreDelay,y=e.setShowMore,v={shortcut:{},description:{},totalDuration:{},spinner:{fill:r.colorDarker}};return r.isVisible&&(v.shortcut={background:r.color},v.description={borderColor:r.colorDarker,color:r.colorDarker},v.totalDuration={color:r.colorDarker},v.more={fill:r.color}),o.a.createElement("div",{key:r.id,className:l()(u.a.label,(t={},t[u.a.isFaded]=c,t[u.a.isHidden]=!r.isVisible,t[u.a.isShowingMore]=x,t))},g&&o.a.createElement(p.a,{type:"timer",className:l()(u.a.timerIcon,(a={},a[u.a.isActive]=!0,a)),style:v.spinner,title:"Actively tracking"}),!g&&r.isVisible&&o.a.createElement(p.a,{type:"visible",className:l()(u.a.visibleIcon,(n={},n[u.a.isActive]=!0,n)),onClick:function(){return d(r.id,!1)},title:"Hide in task tracking menu"}),!g&&!r.isVisible&&o.a.createElement(p.a,{type:"invisible",className:l()(u.a.inVisibleIcon,(i={},i[u.a.isActive]=!0,i)),onClick:function(){return d(r.id,!0)},title:"Show in task tracking menu"}),o.a.createElement("dt",{style:v.shortcut,className:u.a.shortcut},r.shortcut),o.a.createElement("dd",{className:u.a.description,style:v.description,onMouseEnter:function(){return h(r.id)},onMouseLeave:function(){return h(null)}},o.a.createElement(b,{className:u.a.descriptionText,defaultValue:r.description,onUpdate:function(e){s(r.shortcut,e)}}),o.a.createElement(p.a,{type:"more_vertical",className:u.a.more,style:v.more,onClick:function(){return y(x?null:r.id)}}),x&&o.a.createElement("div",{className:l()(u.a.moreOptions)},o.a.createElement(_.a,{className:u.a.tagsDropdown,options:r.tagList,onUpdate:function(e,t){return m(r.id,e,t)}}))),o.a.createElement("div",{className:u.a.tags},r.tagList.map((function(e){if(e.tagged)return o.a.createElement("span",{className:u.a.tag,key:e.id},e.description)}))),o.a.createElement("button",{className:u.a.delete,onClick:function(){return f(r.id)}},o.a.createElement(p.a,{type:"delete",className:u.a.deleteIcon})))})),v=Object(i.inject)("rootStore")(Object(i.observer)((function(e){var t,a,i,r,d=e.rootStore,m=Object(n.useRef)(),f=Object(n.useRef)(),g=Object(n.useRef)();Object(n.useEffect)((function(){d.isLabelManagerOn&&(f.current.value="",g.current.value=d.makeShortcut(),f.current.focus(),I([]),L(f.current.value),R(null))}),[d.isLabelManagerOn]),Object(n.useEffect)((function(){document.addEventListener("keydown",M),document.addEventListener("keyup",Object(c.debounce)(A,100)),document.addEventListener("mousedown",j)}),[]);var b,v,w,E,k=h(Object(n.useState)(""),2),N=k[0],L=k[1],z=h(Object(n.useState)(null),2),S=z[0],V=z[1],O=h(Object(n.useState)([]),2),P=O[0],I=O[1],H=h(Object(n.useState)(!1),2),D=H[0],C=H[1],M=function(e){if("Escape"===e.key&&"editableText"!==e.target.name)return d.toggleLabelManager(!1)},A=function(e){"description"===e.target.name&&L(e.target.value)},j=function(e){m.current.contains(e.target)||d.toggleLabelManager(!1)},B=null,R=function(e){if(e)return clearTimeout(B),void V(e);B=setTimeout((function(){V(null)}),700)},G=function(e,t){s.a.normalizer.cache.clear(),d.updateLabelDescription(e,t)},T=function(e,t){d.updateLabelVisibility(e,t)},U=function(e,t,a){d.updateLabelTag(e,Number(t),a)},Y=(b=d.labelsList,v={visible:[],hidden:[]},r=!0,b.forEach((function(e){var t=!s.a.isMatcher(s.a.normalizer(e.description),s.a.normalizer(N));r&&!t&&(r=!1),v[e.isVisible?"visible":"hidden"].push(o.a.createElement(y,{label:e,key:e.id,showMore:S===e.id,setShowMoreDelay:R,setShowMore:V,isFaded:!s.a.isMatcher(s.a.normalizer(e.description),s.a.normalizer(N)),isCurrent:d.currentTask&&d.currentTask.label.id===e.id,updateLabelDescription:G,updateLabelVisibility:T,updateLabelTag:U,deleteLabel:d.deleteLabel.bind(d)}))})),v),q=Y.visible,K=Y.hidden,F={scrollableArea:{maxHeight:window.innerHeight/2}};return o.a.createElement("section",{className:u.a.labelManager,ref:m},o.a.createElement(p.a,{type:"tag",className:l()(u.a.labelIcon,(t={},t[u.a.isActive]=d.isLabelManagerOn,t)),onClick:function(){d.toggleLabelManager(!d.isLabelManagerOn)},title:"Manage labels"}),o.a.createElement("div",{className:l()(u.a.content,(a={},a[u.a.isActive]=d.isLabelManagerOn,a))},(q.length>0||K.length>0)&&o.a.createElement("div",{className:u.a.scrollableArea,style:F.scrollableArea},o.a.createElement("dl",{className:u.a.labels},q),K.length>0&&o.a.createElement("div",{className:u.a.toggleHiddenLabels},!N&&o.a.createElement("button",{onClick:function(){return C(!D)}},D?"show less":"show more")),(D||N)&&o.a.createElement("dl",{className:l()(u.a.labels,u.a.hiddenCollection)},K)),o.a.createElement("form",{onSubmit:function(e){d.addLabel(g.current.value.toLowerCase(),f.current.value,P)&&(f.current.value="",g.current.value=d.makeShortcut(),I([]),L("")),e.preventDefault()},autoComplete:"off",className:u.a.newLabel},o.a.createElement("fieldset",null,o.a.createElement("input",{name:"shortcut",ref:g,className:u.a.newLabelShortcut,defaultValue:d.makeShortcut(),maxLength:2}),o.a.createElement("input",{name:"description",ref:f,className:u.a.newLabelDescription,placeholder:"What tasks will you track today?",maxLength:70}),r&&o.a.createElement(_.a,{className:u.a.newLabelTagsDropdown,options:(w=d.tags,E=P,w.map((function(e){return x(x({},e),{tagged:E.includes(e.id)})}))),onUpdate:function(e,t){return function(e,t){var a=Number(e);t?P.includes(a)||I(P.concat(a)):P.includes(a)&&I(P.filter((function(e){return e!==a})))}(e,t)}}),o.a.createElement("input",{type:"submit",value:"add",className:l()(u.a.submit,(i={},i[u.a.isActive]=r,i))})))))}))),w=a(77),E=a.n(w),k=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,o,i=a.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)r.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(a=i.return)&&a.call(i)}finally{if(o)throw o.error}}return r},N=Object(i.inject)("rootStore")(Object(i.observer)((function(e){var t,a,i,r,c=e.rootStore,s=Object(n.useRef)(),d=function(e){c.updateTheme(e.target.value)},u=function(e){c.updateDisplayMode(e.target.value)};Object(n.useEffect)((function(){document.addEventListener("keydown",m),document.addEventListener("mousedown",f)}),[]);var m=function(e){if("Escape"===e.key)return c.togglePreferences(!1)},f=function(e){s.current.contains(e.target)||c.togglePreferences(!1)};return o.a.createElement("section",{className:E.a.preferences,ref:s},o.a.createElement("form",{autoComplete:"off"},o.a.createElement(p.a,{type:"settings",className:l()(E.a.icon,(t={},t[E.a.isActive]=c.isPreferencesOn,t)),onClick:function(){c.togglePreferences(!c.isPreferencesOn)},title:"Preferences"}),o.a.createElement("div",{className:l()(E.a.content,(a={},a[E.a.isActive]=c.isPreferencesOn,a))},o.a.createElement("div",{className:E.a.option},o.a.createElement("strong",null,"Theme"),[["light","day"],["dark","night"],["extreme","rainbow"]].map((function(e){var t,a=k(e,2),n=a[0],i=a[1];return o.a.createElement("label",{key:n,className:E.a.optionLabel},o.a.createElement("input",{type:"radio",onChange:d,name:"theme",value:n,className:E.a.optionRadio,checked:c.currentTheme===n}),o.a.createElement(p.a,{type:i,className:l()(E.a.optionIcon,E.a[n],(t={},t[E.a.isActive]=c.currentTheme===n,t))}),o.a.createElement("span",{className:E.a.optionName},n))}))),o.a.createElement("div",{className:E.a.option},o.a.createElement("strong",null,"Display mode"),[["paginate","carrousel"],["stream","stream"]].map((function(e){var t,a=k(e,2),n=a[0],i=a[1];return o.a.createElement("label",{key:n,className:E.a.optionLabel},o.a.createElement("input",{type:"radio",onChange:u,name:"display",value:n,className:E.a.optionRadio,checked:c.currentDisplayMode===n}),o.a.createElement(p.a,{type:i,className:l()(E.a.optionIcon,E.a[n],(t={},t[E.a.isActive]=c.currentDisplayMode===n,t))}),o.a.createElement("span",{className:E.a.optionName},n))}))),o.a.createElement("div",{className:E.a.option},o.a.createElement("strong",null,"Zoom"),o.a.createElement("div",{className:E.a.optionLabel},o.a.createElement(p.a,{type:"zoomout",className:l()(E.a.zoomIcon,E.a.zoomOut,(i={},i[E.a.isActive]=c.canZoomOut,i)),onClick:function(){c.zoomOut()}}),o.a.createElement("span",{className:E.a.optionName},"out")),o.a.createElement("div",{className:E.a.optionLabel},o.a.createElement(p.a,{type:"zoomin",className:l()(E.a.zoomIcon,E.a.zoomIn,(r={},r[E.a.isActive]=c.canZoomIn,r)),onClick:function(){c.zoomIn()}}),o.a.createElement("span",{className:E.a.optionName},"in"))))))}))),L=a(79),z=a.n(L),S=Object(i.inject)("rootStore")(Object(i.observer)((function(e){var t,a,i=e.rootStore,r=Object(n.useRef)();Object(n.useEffect)((function(){}),[i.isReportsOn]),Object(n.useEffect)((function(){document.addEventListener("keydown",c),document.addEventListener("mousedown",s)}),[]);var c=function(e){if("Escape"===e.key)return i.toggleReports(!1)},s=function(e){r.current.contains(e.target)||i.toggleReports(!1)},d={scrollableArea:{maxHeight:window.innerHeight/2}},u=i.readableHeaderDate,m=u.day,f=u.date,g=u.month,b=u.year;return o.a.createElement("section",{className:z.a.reports,ref:r},o.a.createElement(p.a,{type:"chart",className:l()(z.a.reportsIcon,(t={},t[z.a.isActive]=i.isReportsOn,t)),onClick:function(){i.toggleReports(!i.isReportsOn)},title:"Reports"}),o.a.createElement("div",{className:l()(z.a.content,(a={},a[z.a.isActive]=i.isReportsOn,a))},o.a.createElement("h3",{className:z.a.title},m+" "+g+" "+f+", "+b),o.a.createElement("div",{className:z.a.scrollableArea,style:d.scrollableArea},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Task"),o.a.createElement("th",{className:z.a.totals},"Total"))),o.a.createElement("tbody",null,i.taskTotals.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",{className:z.a.description,style:{color:e.label.colorDarker}},e.label.description),o.a.createElement("td",{className:z.a.totals,style:{color:e.label.colorDarker}},e.readableDuration))})))))))}))),V=a(6),O=a(81),P=a.n(O),I=Object(i.inject)("rootStore")(Object(i.observer)((function(e){var t,a,o=e.rootStore,i={header:{backgroundColor:V.a[o.currentTheme].pageBgColor,backgroundImage:"url("+V.a[o.currentTheme].pageBgPatternUrl+")"},content:{background:V.a[o.currentTheme].headerBgColor},target:{fill:"#fff"}},r=o.readableHeaderDate,c=r.date,s=r.month;return n.createElement("header",{className:P.a.header,style:i.header},n.createElement("div",{className:P.a.contentWrapper},n.createElement("div",{className:P.a.content,style:i.content},n.createElement("h1",{className:P.a.title},o.canPaginate&&n.createElement("button",{onClick:function(){o.canPaginateBack&&o.loadDay(-1)},className:P.a.before},n.createElement(p.a,{type:"before",title:"Load previous day",className:l()(P.a.beforeIcon,(t={},t[P.a.isActive]=o.canPaginateBack,t))})),n.createElement("span",{className:P.a.titleContent},s+" "+c),o.canPaginate&&n.createElement("button",{onClick:function(){o.canPaginateNext&&o.loadDay(1)},className:P.a.after},n.createElement(p.a,{type:"next",title:"Load next day",className:l()(P.a.nextIcon,(a={},a[P.a.isActive]=o.canPaginateNext,a))}))),n.createElement("h2",{className:P.a.subtitle},"track.this.moment"),n.createElement(v,null),n.createElement(S,null),n.createElement(N,null),n.createElement(p.a,{type:"target",className:P.a.target,style:i.target,onClick:function(){o.centerTimeMarker(!0)}}))))})));t.default=I}}]);