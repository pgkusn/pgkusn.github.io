(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20371e45"],{"0762":function(t,e,a){"use strict";var o=a("85b0"),n=a.n(o);n.a},"7f7f":function(t,e,a){var o=a("86cc").f,n=Function.prototype,s=/^\s*function ([^ (]*)/,r="name";r in n||a("9e1e")&&o(n,r,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},"82ed":function(t,e,a){"use strict";var o=a("d96f"),n=a.n(o);n.a},"85b0":function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("div",{staticClass:"tools"},[a("label",{staticClass:"mainBtn"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.showMarkNotes,expression:"showMarkNotes"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showMarkNotes)?t._i(t.showMarkNotes,null)>-1:t.showMarkNotes},on:{change:function(e){var a=t.showMarkNotes,o=e.target,n=!!o.checked;if(Array.isArray(a)){var s=null,r=t._i(a,s);o.checked?r<0&&(t.showMarkNotes=a.concat([s])):r>-1&&(t.showMarkNotes=a.slice(0,r).concat(a.slice(r+1)))}else t.showMarkNotes=n}}}),a("Icon",{attrs:{name:this.showMarkNotes?"star":"star_border"}}),t._v("顯示星號筆記\n            ")],1),a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"text"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),a("Icon",{attrs:{name:"search"}})],1),a("div",{staticClass:"layoutSwitch icons"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.layout,expression:"layout"}],attrs:{type:"radio",name:"layout",value:"list",checked:""},domProps:{checked:t._q(t.layout,"list")},on:{change:function(e){t.layout="list"}}}),a("Icon",{attrs:{name:"format_list_bulleted"}})],1),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.layout,expression:"layout"}],attrs:{type:"radio",name:"layout",value:"card"},domProps:{checked:t._q(t.layout,"card")},on:{change:function(e){t.layout="card"}}}),a("Icon",{attrs:{name:"grid_on"}})],1)])]),a("ul",{staticClass:"grid",class:t.layout},[a("li",{on:{click:function(e){return e.preventDefault(),t.addNote(e)}}},[t._v("\n                新增筆記本\n                "),a("Icon",{attrs:{name:"add"}})],1),t._l(t.notes,function(e,o){return a("router-link",{key:e.name,attrs:{to:{name:"notebook",params:{id:o}},tag:"li",replace:""}},[t._v("\n                "+t._s(e.name)+"\n                "),a("div",{staticClass:"icons"},[a("Icon",{attrs:{name:e.mark?"star":"star_border"},nativeOn:{click:function(a){return a.stopPropagation(),t.markNote(e)}}}),a("Icon",{attrs:{name:"close"},nativeOn:{click:function(a){return a.stopPropagation(),t.removeNote({note:e,idx:o})}}})],1)])})],2)])])},n=[],s=(a("7f7f"),a("cdae")),r={name:"home",components:{Icon:s["a"]},data:function(){return{showMarkNotes:!1,layout:"list",searchText:""}},computed:{notes:function(){var t=this,e=this.$store.state.notes;return this.showMarkNotes&&(e=e.filter(function(t){return!0===t.mark})),this.searchText&&(e=e.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t.searchText.toLowerCase())})),e}},methods:{addNote:function(){var t=prompt("筆記本名稱");t&&this.$store.commit("addNote",{name:t,mark:!1})},removeNote:function(t){confirm("確定刪除？")&&this.$store.commit("removeNote",t)},markNote:function(t){this.$store.commit("markNote",t)}}},c=r,i=(a("82ed"),a("2877")),l=Object(i["a"])(c,o,n,!1,null,"05712bab",null);e["default"]=l.exports},cdae:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon"},[a("i",{staticClass:"material-icons"},[t._v(t._s(t.name))])])},n=[],s={name:"icon",props:{name:{type:String,required:!0}}},r=s,c=(a("0762"),a("2877")),i=Object(c["a"])(r,o,n,!1,null,"5a813901",null);e["a"]=i.exports},d96f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-20371e45.74cf5204.js.map