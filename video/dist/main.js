!function(A){var e={};function t(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return A[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=A,t.c=e,t.d=function(A,e,n){t.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:n})},t.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},t.t=function(A,e){if(1&e&&(A=t(A)),8&e)return A;if(4&e&&"object"==typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var i in A)t.d(n,i,function(e){return A[e]}.bind(null,i));return n},t.n=function(A){var e=A&&A.__esModule?function(){return A.default}:function(){return A};return t.d(e,"a",e),e},t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},t.p="",t(t.s=9)}([function(A,e,t){var n=t(1),i=t(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[A.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);A.exports=i.locals||{}},function(A,e,t){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var A={};return function(e){if(void 0===A[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(A){t=null}A[e]=t}return A[e]}}(),r=[];function c(A){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===A){e=t;break}return e}function M(A,e){for(var t={},n=[],i=0;i<A.length;i++){var o=A[i],M=e.base?o[0]+e.base:o[0],g=t[M]||0,s="".concat(M," ").concat(g);t[M]=g+1;var a=c(s),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==a?(r[a].references++,r[a].updater(u)):r.push({identifier:s,updater:I(u,e),references:1}),n.push(s)}return n}function g(A){var e=document.createElement("style"),n=A.attributes||{};if(void 0===n.nonce){var i=t.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(A){e.setAttribute(A,n[A])})),"function"==typeof A.insert)A.insert(e);else{var r=o(A.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var s,a=(s=[],function(A,e){return s[A]=e,s.filter(Boolean).join("\n")});function u(A,e,t,n){var i=t?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(A.styleSheet)A.styleSheet.cssText=a(e,i);else{var o=document.createTextNode(i),r=A.childNodes;r[e]&&A.removeChild(r[e]),r.length?A.insertBefore(o,r[e]):A.appendChild(o)}}function B(A,e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i?A.setAttribute("media",i):A.removeAttribute("media"),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),A.styleSheet)A.styleSheet.cssText=n;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(n))}}var d=null,l=0;function I(A,e){var t,n,i;if(e.singleton){var o=l++;t=d||(d=g(e)),n=u.bind(null,t,o,!1),i=u.bind(null,t,o,!0)}else t=g(e),n=B.bind(null,t,e),i=function(){!function(A){if(null===A.parentNode)return!1;A.parentNode.removeChild(A)}(t)};return n(A),function(e){if(e){if(e.css===A.css&&e.media===A.media&&e.sourceMap===A.sourceMap)return;n(A=e)}else i()}}A.exports=function(A,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=M(A=A||[],e);return function(A){if(A=A||[],"[object Array]"===Object.prototype.toString.call(A)){for(var n=0;n<t.length;n++){var i=c(t[n]);r[i].references--}for(var o=M(A,e),g=0;g<t.length;g++){var s=c(t[g]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}t=o}}}},function(A,e,t){var n=t(3),i=t(4),o=t(5),r=t(6),c=t(7),M=t(8);e=n(!1);var g=i(o),s=i(o,{hash:"#iefix"}),a=i(r),u=i(c),B=i(M,{hash:"#iconfont"});e.push([A.i,'@font-face {font-family: "iconfont";\n    src: url('+g+"); /* IE9 */\n    src: url("+s+") format('embedded-opentype'), \n    url("+a+") format('woff'),\n    url("+u+") format('truetype'), \n    url("+B+') format(\'svg\'); /* iOS 4.1- */\n  }\ninput{\n    outline:none;\n    background-color: #fff;\n}\n#text{\n    outline: none;\n    border-radius: 10px;\n    border:1px solid rgba(0,0,0,0.3);\n}\n#btn{\n    border-radius:10px;\n    border:1px solid #3498db;\n    box-shadow: 0 1px 1px #39d5ff;\n    color:black;\n}\n#btn:focus{\n    color:#3498db;\n    border:none;\n}\n#color{\n    -webkit-appearance: none;\n    border:none;\n    margin-left:20px;\n}\n#color::-webkit-color-swatch-wrapper{\n    -webkit-appearance: none;\n}\n#color::-webkit-color-swatch{\n    -webkit-appearance: none;\n    border-radius:30px;\n}\n#range{\n    -webkit-appearance: none;\n}\n#range::-webkit-slider-runnable-track{\n    -webkit-appearance: none;\n    height:15px;\n    border-radius:10px;\n    box-shadow: 0 1px 2px #29C5EF;\n}\n#range::-webkit-slider-thumb{\n    -webkit-appearance: none;\n    height:25px;\n    width:20px;\n    margin-top: -5px;\n    background-color: #fff;\n    border-radius:50%;\n    border:solid 1px #4eec91;\n    box-shadow:0 2px 2px #0eac51;\n}\nbutton{\n    cursor:pointer;\n    background-color: white;\n    outline:none;\n}\n#control{\n    padding:0 183px;\n}\n#vd_player{\n    position:relative;\n    margin: 0 200px;\n}\n/* #vd_video{\n    z-index:0;\n    position:absolute;\n} */\n#canvas{\n    position:absolute ;\n    z-index: 1;\n    background-color:rgba(0,0,0,0.1);\n}\n\n#vd_controls{\n    background-color:rgba(0,0,0,0.1);\n}\n/* #vd_play{\n    margin-left:173px;\n} */\n#vd_play,#vd_pause{\n    font-family:"iconfont";\n    color:#1296db;\n    border:none;\n    font-size:23px;\n    float:left;\n    width:30px;\n    height:25px;\n}\n#vd_pause{\n    color:#f4ea2a;\n}\n\n#container{\n    border-radius:3px;\n    margin-top:10px;\n    margin-left: 20px;\n    float:left;\n    width:600px;\n    height:7px;\n    border: 1px solid rgba(0,0,0,0.2);\n    box-shadow: 0 2px 2px #95a5a6;\n}\n#container:hover {\n    cursor:pointer;\n}\n#vd_progress{\n    border-right:1px solid #ffcf4b;\n    float:left;\n    height:7px;\n    width: 0%;\n    background:linear-gradient(to right,#4eec91,#47ebe0)\n    /* transition-delay: 0.1s; */\n}\n\n\n#vd_full{\n    margin-left:20px;\n    border:none;\n    font-family:"iconfont";\n    color:#1296db;\n    font-size:23px;\n}\n#vd_selectRate {\n    margin-left: 15px;;\n    border: solid 1px #000;  \n    border-radius: 3px;\n    appearance:none;\n    background-color: white;\n}\n#vd_selectRate:hover{\n    background-color: #000;\n    color:white;\n}\n#vd_rateFont{\n    appearance: none;\n    font-family:"STHeiti";\n    padding-left:10px;\n}\n#content{\n    padding-left: 250px;\n}\n',""]),A.exports=e},function(A,e,t){"use strict";A.exports=function(A){var e=[];return e.toString=function(){return this.map((function(e){var t=function(A,e){var t=A[1]||"",n=A[3];if(!n)return t;if(e&&"function"==typeof btoa){var i=(r=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),M="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(M," */")),o=n.sources.map((function(A){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(A," */")}));return[t].concat(o).concat([i]).join("\n")}var r,c,M;return[t].join("\n")}(e,A);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(A,t,n){"string"==typeof A&&(A=[[null,A,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var c=0;c<A.length;c++){var M=[].concat(A[c]);n&&i[M[0]]||(t&&(M[2]?M[2]="".concat(t," and ").concat(M[2]):M[2]=t),e.push(M))}},e}},function(A,e,t){"use strict";A.exports=function(A,e){return e||(e={}),"string"!=typeof(A=A&&A.__esModule?A.default:A)?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),e.hash&&(A+=e.hash),/["'() \t\n]/.test(A)||e.needQuotes?'"'.concat(A.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):A)}},function(A,e,t){"use strict";t.r(e),e.default="data:application/vnd.ms-fontobject;base64,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"},function(A,e,t){"use strict";t.r(e),e.default="data:font/woff;base64,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"},function(A,e,t){"use strict";t.r(e),e.default="data:font/ttf;base64,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"},function(A,e,t){"use strict";t.r(e),e.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPCEtLQoyMDEzLTktMzA6IENyZWF0ZWQuCi0tPgo8c3ZnPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgaWNvbmZvbnQKPC9tZXRhZGF0YT4KPGRlZnM+Cgo8Zm9udCBpZD0iaWNvbmZvbnQiIGhvcml6LWFkdi14PSIxMDI0IiA+CiAgPGZvbnQtZmFjZQogICAgZm9udC1mYW1pbHk9Imljb25mb250IgogICAgZm9udC13ZWlnaHQ9IjUwMCIKICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIgogICAgdW5pdHMtcGVyLWVtPSIxMDI0IgogICAgYXNjZW50PSI4OTYiCiAgICBkZXNjZW50PSItMTI4IgogIC8+CiAgICA8bWlzc2luZy1nbHlwaCAvPgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icXVhbnBpbmcxIiB1bmljb2RlPSImIzU5NTEyOyIgZD0iTTAgODk2di0xMDI0aDEwMjRWODk2eiBtNDA5LjYtOTIxLjZIMTAyLjR2MzA3LjJoMTAyLjR2LTIwNC44aDIwNC44ek00MDkuNiA2OTEuMkgyMDQuOHYtMjA0LjhIMTAyLjRWNzkzLjZoMzA3LjJ6IG01MTItNjE0LjR2LTEwMi40aC0zMDcuMnYxMDIuNGgyMDQuOHYyMDQuOGgxMDIuNHogbTAgNjE0LjR2LTIwNC44aC0xMDIuNFY2OTEuMmgtMjA0LjhWNzkzLjZoMzA3LjJ6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+CgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icXVhbnBpbmciIHVuaWNvZGU9IiYjNTg5Mzc7IiBkPSJNODQ2Ljc4NyA3NjIuMjEzYzExLjcxNiAxMS43MTYgMzAuNzEgMTEuNzE2IDQyLjQyNiAwIDExLjcxNi0xMS43MTYgMTEuNzE2LTMwLjcxIDAtNDIuNDI2TDY0OS40NCA0ODAuMDEzYy0xMS43MTUtMTEuNzE2LTMwLjcxLTExLjcxNi00Mi40MjYgMC0xMS43MTYgMTEuNzE2LTExLjcxNiAzMC43MSAwIDQyLjQyNmwyMzkuNzc0IDIzOS43NzR6TTM3My42NDUgMjg5LjA3MmMxMS43MTYgMTEuNzE2IDMwLjcxMSAxMS43MTYgNDIuNDI3IDAgMTEuNzE2LTExLjcxNiAxMS43MTYtMzAuNzEgMC00Mi40MjdMMTc3LjIxMyA3Ljc4N2MtMTEuNzE2LTExLjcxNi0zMC43MS0xMS43MTYtNDIuNDI2IDAtMTEuNzE2IDExLjcxNi0xMS43MTYgMzAuNzEgMCA0Mi40MjZsMjM4Ljg1OCAyMzguODU5ek0xNzcuMjEzIDc2Mi4yMTNjLTExLjcxNiAxMS43MTYtMzAuNzEgMTEuNzE2LTQyLjQyNiAwLTExLjcxNi0xMS43MTYtMTEuNzE2LTMwLjcxIDAtNDIuNDI2bDIzOC44NTgtMjM4Ljg1OWMxMS43MTYtMTEuNzE2IDMwLjcxMS0xMS43MTYgNDIuNDI3IDAgMTEuNzE2IDExLjcxNiAxMS43MTYgMzAuNzEgMCA0Mi40MjdMMTc3LjIxMyA3NjIuMjEzeiBtNDcxLjMxMS00NzEuMzFjLTExLjcxNSAxMS43MTUtMzAuNzEgMTEuNzE1LTQyLjQyNiAwLTExLjcxNi0xMS43MTctMTEuNzE2LTMwLjcxMiAwLTQyLjQyN2wyNDAuNjg5LTI0MC42OWMxMS43MTYtMTEuNzE1IDMwLjcxLTExLjcxNSA0Mi40MjYgMCAxMS43MTYgMTEuNzE3IDExLjcxNiAzMC43MTEgMCA0Mi40MjdsLTI0MC42ODkgMjQwLjY5ek04NjcgNzQwSDY5Mi4zMDJjLTE2LjU2OSAwLTMwIDEzLjQzMS0zMCAzMCAwIDE2LjU2OSAxMy40MzEgMzAgMzAgMzBoMTc3LjIzQzkwMS4yNzIgODAwIDkyNyA3NzQuMjcxIDkyNyA3NDIuNTMzdi0xNzcuNjhjMC0xNi41Ny0xMy40MzEtMzAtMzAtMzAtMTYuNTY5IDAtMzAgMTMuNDMtMzAgMzBWNzQweiBtMC01MzQuMTE4YzAgMTYuNTY5IDEzLjQzMSAzMCAzMCAzMCAxNi41NjkgMCAzMC0xMy40MzEgMzAtMzB2LTE3OC40MTVDOTI3LTQuMjcgOTAxLjI3MS0zMCA4NjkuNTMzLTMwSDY5MS4zODZjLTE2LjU2OCAwLTMwIDEzLjQzMS0zMCAzMCAwIDE2LjU2OSAxMy40MzIgMzAgMzAgMzBIODY3VjIwNS44ODJ6TTMzMi41NSAzMGMxNi41NyAwIDMwLTEzLjQzMSAzMC0zMCAwLTE2LjU2OS0xMy40My0zMC0zMC0zMEgxNTQuNDY4QzEyMi43My0zMCA5Ny00LjI3MSA5NyAyNy40Njd2MTc3LjVjMCAxNi41NjggMTMuNDMxIDMwIDMwIDMwIDE2LjU2OSAwIDMwLTEzLjQzMiAzMC0zMFYzMGgxNzUuNTV6TTE1NyA3NDB2LTE3NS4xNDhjMC0xNi41NjgtMTMuNDMxLTMwLTMwLTMwLTE2LjU2OSAwLTMwIDEzLjQzMi0zMCAzMHYxNzcuNjhDOTcgNzc0LjI3MiAxMjIuNzI5IDgwMCAxNTQuNDY3IDgwMGgxNzguMDg0YzE2LjU2OCAwIDMwLTEzLjQzMSAzMC0zMCAwLTE2LjU2OS0xMy40MzItMzAtMzAtMzBIMTU3eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9InphbnRpbmciIHVuaWNvZGU9IiYjNTg5MjE7IiBkPSJNNTEyLTkzLjg2NjY2N0MyNDkuMTczMzMzLTkzLjg2NjY2NyAzNC4xMzMzMzMgMTIxLjE3MzMzMyAzNC4xMzMzMzMgMzg0UzI0OS4xNzMzMzMgODYxLjg2NjY2NyA1MTIgODYxLjg2NjY2N3M0NzcuODY2NjY3LTIxNS4wNCA0NzcuODY2NjY3LTQ3Ny44NjY2NjctMjE1LjA0LTQ3Ny44NjY2NjctNDc3Ljg2NjY2Ny00NzcuODY2NjY3eiBtMCA4ODcuNDY2NjY3QzI4Ni43MiA3OTMuNiAxMDIuNCA2MDkuMjggMTAyLjQgMzg0czE4NC4zMi00MDkuNiA0MDkuNi00MDkuNiA0MDkuNiAxODQuMzIgNDA5LjYgNDA5LjZTNzM3LjI4IDc5My42IDUxMiA3OTMuNnpNMzc1LjQ2NjY2NyA1NTQuNjY2NjY3aDY4LjI2NjY2NnYtMzQxLjMzMzMzNGgtNjguMjY2NjY2ek01ODAuMjY2NjY3IDU1NC42NjY2NjdoNjguMjY2NjY2di0zNDEuMzMzMzM0aC02OC4yNjY2NjZ6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+CgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYm9mYW5nIiB1bmljb2RlPSImIzU5MzYzOyIgZD0iTTUxNC41Ni01Ni4zMmE0MzcuNzYgNDM3Ljc2IDAgMSAwIDQzNy43NiA0MzcuNzYgNDM4LjI3MiA0MzguMjcyIDAgMCAwLTQzNy43Ni00MzcuNzZ6IG0wIDgwNC4zNTJhMzY2LjU5MiAzNjYuNTkyIDAgMSAxIDM2Ni41OTItMzY2LjU5MiAzNjcuMDI3MiAzNjcuMDI3MiAwIDAgMS0zNjYuNTkyIDM2Ni41OTJ6TTQzNy4xMzUzNiAyMjYuOTc5ODRhNDkuNjY0IDQ5LjY2NCAwIDAgMC00OS43MjU0NCA0OS43MjU0NHYyMTIuMzc3NmE0OS43MjAzMiA0OS43MjAzMiAwIDAgMCA3NC41OTMyOCA0My4wNzQ1NmwxODMuODU5Mi0xMDYuMTczNDRhNDkuNzUxMDQgNDkuNzUxMDQgMCAwIDAgMC04Ni4xNDkxMkw0NjEuOTkyOTYgMjMzLjYyNTZhNDkuNzQ1OTIgNDkuNzQ1OTIgMCAwIDAtMjQuODU3Ni02LjY0NTc2eiBtMjEuMjAxOTIgMjI1LjM2NzA0di0xMzguOTA1NmwxMjAuMjU4NTYgNjkuNDUyOHogbTE2OS43OTQ1Ni04MS44MDczNnogbS0xNy43MzU2OCAzMC43MmgtMC4wMjU2eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAoKCiAgPC9mb250Pgo8L2RlZnM+PC9zdmc+Cg=="},function(A,e,t){"use strict";t.r(e);class n{constructor(){this.handlers={}}subscribe(A,e){this.handlers[A]||(this.handlers[A]=[]),this.handlers[A].push(e)}subscribeOnce(A,e){const t=(...n)=>{e.apply(...n),this.unsubsribe(A,t)};this.subscribe(eventName,t)}publish(A,...e){this.handlers[A]&&this.handlers[A].forEach(A=>{A(...e)})}unsubsribe(A,e){const t=this.handlers[A],n=t.indexof(e);-1!==n&&t.splice(n,1)}subsribeAll(A){this.handlers[A].length=0}}t(0);class i{constructor(A,e){this.value=A.value,this.time=A.time,this.obj=A,this.context=e}init(){this.color=this.obj.color||this.context.color,this.speed=this.obj.speed||this.context.speed,this.opacity=this.obj.opacity||this.context.opacity,this.fontSize=this.obj.fontSize||this.context.fontSize;let A=document.createElement("p");A.style.fontSize=this.fontSize+"px",A.innerHTML=this.value,document.body.appendChild(A),this.width=A.clientWidth,document.body.removeChild(A),this.x=this.context.canvas.width,this.y=this.context.canvas.height*Math.random(),this.y<this.fontSize?this.y=this.fontSize:this.y>this.context.canvas.height-this.fontSize&&(this.y=this.context.canvas.height-this.fontSize)}render(){this.context.ctx.font=this.fontSize+"px Arial",this.context.ctx.fillStyle=this.color,this.context.ctx.fillText(this.value,this.x,this.y)}}let o=document,r=new class{constructor(A){this.dom=document.createElement("video"),this.dom.setAttribute("id","vd_video"),this.dom.src=A.source,A.width?this.dom.setAttribute("width",A.width):this.dom.setAttribute("width","820"),A.height?this.dom.setAttribute("height",A.height):this.dom.setAttribute("height","460"),A.volume?this.dom.setAttribute("volume",A.volume):this.dom.setAttribute("volume","0.5"),document.getElementById("vd_player").appendChild(this.dom,document.getElementById("canvas")),this.event=new n}subscribe(A,e){this.event.subscribe(A,e)}publish(A,e){this.event.publish(A,e)}play(){this.dom.play()}pause(){this.dom.pause()}getVolume(){return this.dom.volume}setVolume(A){this.dom.volume=A>=1?1:A<0?0:A}getCurrentTime(){return this.dom.currentTime}setCurrentTime(A){A<=0?A=0:A>this.dom.duration?A=this.dom.duration:this.dom.currentTime=A}getPercent(){let{currentTime:A,duration:e}=this.dom;return Math.floor(A/e*100)+"%"}setProgress(A){document.getElementById("vd_progress").style.width=A}fullScreen(){this.dom.requestFullscreen()}selectRate(A){this.dom.playbackRate=A}}({source:"./1.mp4"}),c=(o.getElementById("vd_player"),o.getElementById("vd_play")),M=o.getElementById("vd_pause"),g=o.getElementById("container"),s=o.getElementById("vd_full"),a=o.getElementById("vd_selectRate");r.subscribe("play",()=>{r.play()}),r.subscribe("pause",()=>{r.pause()}),r.subscribe("change",A=>{switch(A.keyCode){case 37:r.setCurrentTime(r.getCurrentTime()-5);break;case 38:r.setVolume(r.getVolume()+.1);break;case 40:r.setVolume(r.getVolume()-.1);break;case 39:r.setCurrentTime(r.getCurrentTime()+5)}}),r.subscribe("setProgress",A=>{r.setProgress(A)}),r.subscribe("fullScreen",()=>{r.fullScreen()}),r.subscribe("selectRate",A=>{r.selectRate(A)}),c.addEventListener("click",()=>{r.publish("play")}),M.addEventListener("click",()=>{r.publish("pause")}),r.dom.addEventListener("keyup",A=>{r.publish("change",A)}),r.dom.addEventListener("timeupdate",()=>{let A=r.getPercent();r.publish("setProgress",A)}),g.addEventListener("click",A=>{let e=g.getBoundingClientRect().left,t=(A.pageX-e)/g.offsetWidth;r.dom.currentTime=t*r.dom.duration,r.publish("play")}),s.addEventListener("click",()=>{r.publish("fullScreen")}),a.addEventListener("click",()=>{r.publish("selectRate",a.value)});let u=o.getElementById("canvas"),B=o.getElementById("text"),d=o.getElementById("btn"),l=o.getElementById("color"),I=o.getElementById("range"),N=new class{constructor(A,e,t={}){this.video=e,this.canvas=A,this.canvas.width=e.width,this.canvas.height=e.height,this.ctx=A.getContext("2d");Object.assign(this,{color:"#e91e63",speed:1.5,opacity:.5,fontSize:20,data:[]},t),this.isPaused=!0,this.barrages=this.data.map(A=>new i(A,this)),this.render(),console.log(this)}render(){this.clear(),this.renderBarrage(),!1===this.isPaused&&requestAnimationFrame(this.render.bind(this))}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}renderBarrage(){let A=this.video.currentTime;this.barrages.forEach(e=>{!e.flag&&A>=e.time&&(e.isInit||(e.init(),e.isInit=!0),e.x-=e.speed,e.render(),e.x<-e.width&&(e.flag=!0))})}add(A){this.barrages.push(new i(A,this))}}(u,r.dom,{data:[{value:"太好听了",time:5,color:"red",speed:1,fontSize:30},{value:"我爱班长",time:10,color:"green",speed:1.5,fontSize:26},{value:"好听",time:15}]});r.dom.addEventListener("play",()=>{N.isPaused=!1,N.render()}),r.dom.addEventListener("pause",()=>{N.isPaused=!0});let E=()=>{let A={value:B.value,time:r.dom.currentTime,color:l.value,fontSize:I.value};N.add(A),B.value=""};d.addEventListener("click",E),B.addEventListener("keyup",A=>{13===A.keyCode&&E()})}]);