(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c5748dc"],{"02f4":function(e,t,n){var r=n("4588"),i=n("be13");e.exports=function(e){return function(t,n){var o,a,c=String(i(t)),s=r(n),u=c.length;return s<0||s>=u?e?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?e?c.charAt(s):o:e?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var r=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"04ac":function(e,t,n){},"07e3":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},"0bfb":function(e,t,n){"use strict";var r=n("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"11e9":function(e,t,n){var r=n("52a7"),i=n("4630"),o=n("6821"),a=n("6a99"),c=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?u:function(e,t){if(e=o(e),t=a(t,!0),s)try{return u(e,t)}catch(n){}if(c(e,t))return i(!r.f.call(e,t),e[t])}},"1bc3":function(e,t,n){var r=n("f772");e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},"1d0b":function(e,t,n){"use strict";var r=n("04ac"),i=n.n(r);i.a},"1ec9":function(e,t,n){var r=n("f772"),i=n("e53d").document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},"214f":function(e,t,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),o=n("79e5"),a=n("be13"),c=n("2b4c"),s=n("520a"),u=c("species"),l=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var d=c(e),p=!o(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),h=p?!o(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[u]=function(){return n}),n[d](""),!t}):void 0;if(!p||!h||"replace"===e&&!l||"split"===e&&!f){var v=/./[d],m=n(a,d,""[e],function(e,t,n,r,i){return t.exec===s?p&&!i?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),b=m[0],g=m[1];r(String.prototype,e,b),i(RegExp.prototype,d,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"28a5":function(e,t,n){"use strict";var r=n("aae3"),i=n("cb7c"),o=n("ebd6"),a=n("0390"),c=n("9def"),s=n("5f1b"),u=n("520a"),l=n("79e5"),f=Math.min,d=[].push,p="split",h="length",v="lastIndex",m=4294967295,b=!l(function(){RegExp(m,"y")});n("214f")("split",2,function(e,t,n,l){var g;return g="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(i,e,t);var o,a,c,s=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,p=void 0===t?m:t>>>0,b=new RegExp(e.source,l+"g");while(o=u.call(b,i)){if(a=b[v],a>f&&(s.push(i.slice(f,o.index)),o[h]>1&&o.index<i[h]&&d.apply(s,o.slice(1)),c=o[0][h],f=a,s[h]>=p))break;b[v]===o.index&&b[v]++}return f===i[h]?!c&&b.test("")||s.push(""):s.push(i.slice(f)),s[h]>p?s.slice(0,p):s}:"0"[p](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var i=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):g.call(String(i),n,r)},function(e,t){var r=l(g,e,this,t,g!==n);if(r.done)return r.value;var u=i(e),d=String(this),p=o(u,RegExp),h=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),y=new p(b?u:"^(?:"+u.source+")",v),w=void 0===t?m:t>>>0;if(0===w)return[];if(0===d.length)return null===s(y,d)?[d]:[];var x=0,L=0,O=[];while(L<d.length){y.lastIndex=b?L:0;var S,P=s(y,b?d:d.slice(L));if(null===P||(S=f(c(y.lastIndex+(b?0:L)),d.length))===x)L=a(d,L,h);else{if(O.push(d.slice(x,L)),O.length===w)return O;for(var k=1;k<=P.length-1;k++)if(O.push(P[k]),O.length===w)return O;L=x=S}}return O.push(d.slice(x)),O}]})},"294c":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"35e8":function(e,t,n){var r=n("d9f6"),i=n("aebd");e.exports=n("8e60")?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},"454f":function(e,t,n){n("46a7");var r=n("584a").Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},"456d":function(e,t,n){var r=n("4bf8"),i=n("0d58");n("5eda")("keys",function(){return function(e){return i(r(e))}})},"458e":function(e,t,n){"use strict";var r=n("57c2"),i=n.n(r);i.a},"46a7":function(e,t,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"504e":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fileList"},[n("div",{staticClass:"nav"},[e._m(0),n("label",[n("input",{ref:"file",attrs:{type:"file"},on:{change:e.changeHandler}}),e._v("上傳檔案\n        ")]),n("a",{directives:[{name:"show",rawName:"v-show",value:!e.id,expression:"!id"}],attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.newFolder(t)}}},[e._v("新增資料夾")])]),n("div",{staticClass:"content"},[n("div",{staticClass:"top"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],staticClass:"search",attrs:{type:"text",placeholder:"搜尋您的檔案"},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}})]),n("div",{staticClass:"list"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.folders,expression:"folders"}],staticClass:"list-row"},[n("p",{staticClass:"list-title"},[e._v("資料夾")]),n("ul",e._l(e.folders,function(t,r){return n("li",{key:r,attrs:{"data-del-key":"/folders/"+r},on:{contextmenu:function(t){return t.preventDefault(),e.showMenu(t)},dblclick:function(t){return t.preventDefault(),e.enterFolder(r)}}},[e._v(e._s(r))])}),0)]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.files.length,expression:"files.length"}],staticClass:"list-row"},[n("p",{staticClass:"list-title"},[e._v("檔案：")]),n("ul",e._l(e.files,function(t){return n("li",{key:t.createTime,attrs:{"data-del-key":t.key,"data-del-name":t.name,"data-dl-name":t.name,"data-dl-ulname":t.uploadName},on:{contextmenu:function(t){return t.preventDefault(),e.showMenu(t)}}},[e._v(e._s(t.uploadName))])}),0)])])]),n("MouseMenu",{attrs:{menuPos:e.menuPos,links:e.menuLinks},on:{deleteFile:e.deleteFile,download:e.download}})],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[r("img",{attrs:{src:n("e347"),alt:"Cloud"}})])}],o=(n("8e6e"),n("456d"),n("ac6a"),n("7f7f"),n("28a5"),n("85f2")),a=n.n(o);function c(e,t,n){return t in e?a()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showMenu?n("div",{staticClass:"menu",style:{top:e.menuPos.y+"px",left:e.menuPos.x+"px"}},[e.links.dlName?n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.download(t)}}},[e._v("下載")]):e._e(),n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.deleteFile(t)}}},[e._v("刪除")])]):e._e()},u=[],l={props:{menuPos:{type:Object},links:{type:Object}},computed:{showMenu:function(){return this.$store.state.showMenu}},methods:{download:function(){this.$emit("download",this.links)},deleteFile:function(){this.$emit("deleteFile",this.links)}}},f=l,d=(n("458e"),n("2877")),p=Object(d["a"])(f,s,u,!1,null,"98d448c6",null),h=p.exports;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b,g,y,w={apiKey:"AIzaSyCFQrK8G78IGKJ0cwHYez1P3WSOQyDNA3c",authDomain:"test-abea4.firebaseapp.com",databaseURL:"https://test-abea4.firebaseio.com",projectId:"test-abea4",storageBucket:"test-abea4.appspot.com",messagingSenderId:"942650617694",appId:"1:942650617694:web:6d938b4bdd578ac8"},x={components:{MouseMenu:h},data:function(){return{rootFiles:null,searchText:"",progress:0,menuPos:{x:0,y:0},menuLinks:{delKey:"",delName:"",dlName:"",dlUlname:""}}},computed:{id:function(){return this.$route.params.id},files:function(){var e=this,t=[];for(var n in this.rootFiles)if(this.rootFiles.hasOwnProperty(n)&&"folders"!==n&&"README.md"!==this.rootFiles[n].uploadName){var r=m({key:n},this.rootFiles[n]);t.push(r)}return this.searchText?t.filter(function(t){return-1!==t.uploadName.indexOf(e.searchText)}):t},folders:function(){var e;for(var t in this.rootFiles)this.rootFiles.hasOwnProperty(t)&&"folders"===t&&(e=this.rootFiles[t]);if(this.searchText){var n={};for(var r in e)e.hasOwnProperty(r)&&-1!==r.indexOf(this.searchText)&&(n[r]=e[r]);return n}return e}},watch:{rootFiles:function(e){e&&this.$store.commit("updateLoadingState",!1)}},methods:{init:function(){0===firebase.apps.length&&firebase.initializeApp(w),b=firebase.storage()},getList:function(){var e=this;this.$store.commit("updateLoadingState",!0),g=this.id?firebase.database().ref("w8/folders/".concat(this.id)):firebase.database().ref("w8"),g.on("value",function(t){e.rootFiles=t.val(),null===e.rootFiles&&e.$store.commit("updateLoadingState",!1)})},changeHandler:function(e){var t=this;this.$store.commit("updateLoadingState",!0);var n=e.target.files.item(0),r=(new Date).getTime(),i=n.name.split(".")[n.name.split(".").length-1];y=this.id?b.ref("w8/folders/".concat(this.id,"/").concat(r,".").concat(i)):b.ref("w8/".concat(r,".").concat(i));var o=y.put(n);o.on("state_changed",function(e){return t.progress=e.bytesTransferred/e.totalBytes*100},function(e){return console.log("上傳失敗")},function(e){console.log("上傳成功"),t.submitHandler("".concat(r,".").concat(i),n.name)})},newFolder:function(){var e=this,t=prompt("資料夾名稱");if(t){g=firebase.database().ref("w8/folders/".concat(t));var n="README.md",r=b.ref("w8/folders/".concat(t,"/").concat(n)),i=new File([""],"README.md");r.put(i).then(function(t){e.submitHandler(n,i.name)})}},submitHandler:function(e,t){g.push({name:e,uploadName:t,createTime:(new Date).getTime()}),this.getList(),this.$refs.file.value="",this.$store.commit("updateLoadingState",!1)},deleteFile:function(e){var t,n=e.delKey,r=e.delName;confirm("確定刪除？")&&(r=r||n,t=this.id?b.ref("w8/folders/".concat(this.id,"/").concat(r)):b.ref("w8/".concat(r)),t.listAll().then(function(e){var i=e.items;i.length>0?i.forEach(function(e){t=b.ref("w8/".concat(r,"/").concat(e.name)),t.delete()}):t.delete(),g.child(n).remove()}))},download:function(e){var t=e.dlName,n=e.dlUlname;y=this.id?b.ref("w8/folders/".concat(this.id,"/").concat(t)):b.ref("w8/".concat(t)),y.getDownloadURL().then(function(e){fetch(e).then(function(e){return e.blob()}).then(function(e){var t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=n,r.style.display="none",document.body.appendChild(r),r.click(),URL.revokeObjectURL(e),document.body.removeChild(r)})})},enterFolder:function(e){this.$router.push({path:"folders/".concat(e)})},showMenu:function(e){this.$store.commit("toggleMenu",!0),this.$set(this.menuPos,"x",e.pageX),this.$set(this.menuPos,"y",e.pageY),this.$set(this.menuLinks,"delKey",e.target.dataset.delKey),this.$set(this.menuLinks,"delName",e.target.dataset.delName),this.$set(this.menuLinks,"dlName",e.target.dataset.dlName),this.$set(this.menuLinks,"dlUlname",e.target.dataset.dlUlname)}},created:function(){this.init(),this.getList()}},L=x,O=(n("1d0b"),Object(d["a"])(L,r,i,!1,null,"5586e0a6",null));t["a"]=O.exports},"520a":function(e,t,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[c]||0!==t[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(a=function(e){var t,n,a,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(t=f[c]),a=i.call(f,e),s&&a&&(f[c]=f.global?a.index+a[0].length:t),u&&a&&a.length>1&&o.call(a[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),e.exports=a},"57c2":function(e,t,n){},"584a":function(e,t){var n=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5eda":function(e,t,n){var r=n("5ca1"),i=n("8378"),o=n("79e5");e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},"5f1b":function(e,t,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"63b6":function(e,t,n){var r=n("e53d"),i=n("584a"),o=n("d864"),a=n("35e8"),c=n("07e3"),s="prototype",u=function(e,t,n){var l,f,d,p=e&u.F,h=e&u.G,v=e&u.S,m=e&u.P,b=e&u.B,g=e&u.W,y=h?i:i[t]||(i[t]={}),w=y[s],x=h?r:v?r[t]:(r[t]||{})[s];for(l in h&&(n=t),n)f=!p&&x&&void 0!==x[l],f&&c(y,l)||(d=f?x[l]:n[l],y[l]=h&&"function"!=typeof x[l]?n[l]:b&&f?o(d,r):g&&x[l]==d?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[s]=e[s],t}(d):m&&"function"==typeof d?o(Function.call,d):d,m&&((y.virtual||(y.virtual={}))[l]=d,e&u.R&&w&&!w[l]&&a(w,l,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},"794b":function(e,t,n){e.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"85f2":function(e,t,n){e.exports=n("454f")},"8e60":function(e,t,n){e.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8e6e":function(e,t,n){var r=n("5ca1"),i=n("990b"),o=n("6821"),a=n("11e9"),c=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){var t,n,r=o(e),s=a.f,u=i(r),l={},f=0;while(u.length>f)n=s(r,t=u[f++]),void 0!==n&&c(l,t,n);return l}})},9093:function(e,t,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"990b":function(e,t,n){var r=n("9093"),i=n("2621"),o=n("cb7c"),a=n("7726").Reflect;e.exports=a&&a.ownKeys||function(e){var t=r.f(o(e)),n=i.f;return n?t.concat(n(e)):t}},aae3:function(e,t,n){var r=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},ac6a:function(e,t,n){for(var r=n("cadf"),i=n("0d58"),o=n("2aba"),a=n("7726"),c=n("32e9"),s=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),d=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(p),v=0;v<h.length;v++){var m,b=h[v],g=p[b],y=a[b],w=y&&y.prototype;if(w&&(w[l]||c(w,l,d),w[f]||c(w,f,b),s[b]=d,g))for(m in r)w[m]||o(w,m,r[m],!0)}},aebd:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},b0c5:function(e,t,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},d864:function(e,t,n){var r=n("79aa");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},d9f6:function(e,t,n){var r=n("e4ae"),i=n("794b"),o=n("1bc3"),a=Object.defineProperty;t.f=n("8e60")?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},e347:function(e,t,n){e.exports=n.p+"img/logo.bc3a6621.svg"},e4ae:function(e,t,n){var r=n("f772");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},e53d:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f1ae:function(e,t,n){"use strict";var r=n("86cc"),i=n("4630");e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},f772:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}}}]);
//# sourceMappingURL=chunk-7c5748dc.073b8fbc.js.map