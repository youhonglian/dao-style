(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[90],{363:function(a,t,e){var l=e(364);"string"==typeof l&&(l=[[a.i,l,""]]),l.locals&&(a.exports=l.locals);(0,e(4).default)("591a8712",l,!0,{})},364:function(a,t,e){(a.exports=e(3)(!1)).push([a.i,".demo-container[data-v-1a20fdba]{margin-bottom:40px}",""])},427:function(a,t,e){"use strict";e.r(t);var l=e(31),o=e.n(l),n={data:function(){return{testVal1:"aaa bbz:200",testVal2:"",testVal3:"",testVal4:"",testVal5:"",testVal6:"",testVal7:"",testVal8:"",config:{shutDown:!1},options:[{tabName:"标签",keys:[{val:"location",vals:[{val:"location1"},{val:"location2"}]}]},{tabName:"属性",keys:[{name:"节点类型",val:"node_type",vals:[{name:"控制",val:"ctrl"},{name:"普通",val:"normal"}]},{name:"操作系统",val:"system",vals:[{val:"window"},{val:"linux"}]},{name:"状态",val:"state",vals:[{val:"fail"},{val:"success"}]},{name:"维护模式",val:"state2",vals:[{val:"fail2"},{val:"success2"}]},{name:"NTP 一致性",val:"state3",vals:[{val:"fail"},{val:"success"}]}]}],options6:[{tabName:"标签",keys:[{name:"节点类型",val:"node_type",operations:[":",">",">=","<=","!="],vals:[{name:"控制节点",val:"ctrl_node"},{name:"普通节点",val:"normal_node"}]}]},{tabName:"标签2",keys:[{name:"节点类型2",val:"node_type2",vals:[{name:"控制节点2",val:"ctrl_node2"},{name:"普通节点2",val:"normal_node2"}]}]}],options7:[{tabName:"标签KKKK",keys:[{name:"changed",val:"changed",vals:[{name:"控制节点",val:"ctrl_node"}]}]}],options8:[{keys:[{name:"1超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据",val:"1changed",operations:[":",">",">=","<=","!="],vals:[{name:"1超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据",val:"1ctrl_node"}]},{name:"2超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据",val:"2changed",vals:[{name:"2超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据超长的数据",val:"2ctrl_node"}]}]}],cpOptions7:[]}},created:function(){this.cpOptions7=JSON.parse(o()(this.options7))},methods:{testchange6:function(){var a=this;this.options7=JSON.parse(o()(this.cpOptions7)),console.log("model change",this.testVal7),this.testVal7.indexOf("change")>-1&&setTimeout(function(){a.options7=JSON.parse(o()(a.options))},100)}}},s=e(2);var i=function(a){e(363)},c=Object(s.a)(n,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"demo-container"},[e("h2",[a._v("1.基础")]),a._v(" "),e("dao-input-with-label",{attrs:{placeholder:"init placeholder",config:a.config,options:a.options},model:{value:a.testVal1,callback:function(t){a.testVal1=t},expression:"testVal1"}}),a._v("\n    v-model: "+a._s(a.testVal1)+"\n  ")],1),a._v(" "),e("div",{staticClass:"demo-container"},[e("h2",[a._v("2.自动聚焦")]),a._v(" "),e("dao-input-with-label",{attrs:{placeholder:"init placeholder",config:a.config,autofocus:"",options:a.options},model:{value:a.testVal2,callback:function(t){a.testVal2=t},expression:"testVal2"}})],1),a._v(" "),e("div",{staticClass:"demo-container"},[e("h2",[a._v("3.禁用")]),a._v(" "),e("dao-input-with-label",{attrs:{placeholder:"init placeholder",config:a.config,options:a.options,disabled:""},model:{value:a.testVal3,callback:function(t){a.testVal3=t},expression:"testVal3"}})],1),a._v(" "),e("div",{staticClass:"demo-container"},[e("h2",[a._v("4.shutDown")]),a._v(" "),e("dao-input-with-label",{attrs:{placeholder:"init placeholder",config:{shutDown:!0},options:a.options},model:{value:a.testVal4,callback:function(t){a.testVal4=t},expression:"testVal4"}})],1),a._v(" "),e("div",{staticClass:"demo-container"},[e("h2",[a._v("5.不限制宽度")]),a._v(" "),e("dao-input-with-label",{attrs:{placeholder:"init placeholder",block:"",config:a.config,options:a.options},model:{value:a.testVal5,callback:function(t){a.testVal5=t},expression:"testVal5"}})],1),a._v(" "),e("div",{staticClass:"demo-container"},[e("h2",[a._v("6.多个操作符")]),a._v(" "),e("dao-input-with-label",{attrs:{placeholder:"init placeholder",options:a.options6},model:{value:a.testVal6,callback:function(t){a.testVal6=t},expression:"testVal6"}})],1),a._v(" "),e("div",{staticClass:"demo-container"},[e("h2",[a._v("7.异步数据")]),a._v(" "),e("dao-input-with-label",{attrs:{placeholder:"type 'change'",config:a.config,options:a.options7},on:{change:function(t){a.testchange6()}},model:{value:a.testVal7,callback:function(t){a.testVal7=t},expression:"testVal7"}})],1),a._v(" "),e("div",{staticClass:"demo-container"},[e("h2",[a._v("8.超长的数据,并且没有tabName")]),a._v(" "),e("dao-input-with-label",{attrs:{config:a.config,options:a.options8},model:{value:a.testVal8,callback:function(t){a.testVal8=t},expression:"testVal8"}})],1),a._v(" "),e("div",{staticStyle:{"margin-top":"300px"}})])},[],!1,i,"data-v-1a20fdba",null);t.default=c.exports}}]);