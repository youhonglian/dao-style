(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[83],{335:function(e,t,o){var l=o(336);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);(0,o(4).default)("a2675280",l,!0,{})},336:function(e,t,o){(e.exports=o(3)(!1)).push([e.i,".demo1 .body[data-v-427d3bf6]{padding:20px}",""])},337:function(e,t,o){var l=o(338);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);(0,o(4).default)("681e64ec",l,!0,{})},338:function(e,t,o){(e.exports=o(3)(!1)).push([e.i,".demo11 .body[data-v-38e05748]{padding:20px}",""])},405:function(e,t,o){"use strict";o.r(t);var l=o(2);var a=function(e){o(335)},i=Object(l.a)({name:"Demo1",data:function(){return{config:{visible:!1}}}},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dao-dialog demo1"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.config.visible=!0}}},[e._v("最简单的默认版本")]),e._v(" "),o("dao-dialog",{attrs:{visible:e.config.visible},on:{"update:visible":function(t){e.$set(e.config,"visible",t)}}},[o("div",{staticClass:"body"},[e._v("\n      在这里自定义Dialog 内容\n    ")])])],1)},[],!1,a,"data-v-427d3bf6",null).exports,s=Object(l.a)({name:"DialogDemoForm",data:function(){return{name:"",age:"",phone:"",addr:""}}},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("dao-setting-section",[o("dao-setting-item",[o("div",{attrs:{slot:"label"},slot:"label"},[e._v("\n      姓名\n    ")]),e._v(" "),o("template",{slot:"content"},[o("dao-input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],2),e._v(" "),o("dao-setting-item",[o("div",{attrs:{slot:"label"},slot:"label"},[e._v("\n      年龄\n    ")]),e._v(" "),o("template",{slot:"content"},[o("dao-input",{model:{value:e.age,callback:function(t){e.age=t},expression:"age"}})],1)],2),e._v(" "),o("dao-setting-item",[o("div",{attrs:{slot:"label"},slot:"label"},[e._v("\n      电话\n    ")]),e._v(" "),o("template",{slot:"content"},[o("dao-input",{model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1)],2),e._v(" "),o("dao-setting-item",[o("div",{attrs:{slot:"label"},slot:"label"},[e._v("\n      地址\n    ")]),e._v(" "),o("template",{slot:"content"},[o("dao-input",{model:{value:e.addr,callback:function(t){e.addr=t},expression:"addr"}})],1)],2)],1)},[],!1,null,null,null).exports,n={name:"Demo2",components:{DialogDemoForm:s},data:function(){return{config:{visible:!1,header:{title:"自定义 Header",showClose:!0}}}}},d={name:"Demo3",components:{DialogDemoForm:s},data:function(){return{config:{visible:!1,header:{title:"自定义 Footer"},footer:{confirmText:"确认1",cancelText:"取消1",confirmDisabled:!0}}}}},c={name:"Demo4",components:{DialogDemoForm:s},data:function(){return{config:{visible:!1,header:{title:"自定义 container class"},containerClass:"custom-class"}}}},r={name:"Demo5",components:{DialogDemoForm:s},data:function(){return{config:{visible:!1,header:{title:"自定义大小"},size:{width:"888px",height:"333px"}}}}},m={name:"Demo6",components:{DialogDemoForm:s},data:function(){return{config:{visible:!1,header:{title:"设置关闭Dialog的方式"},closeOnClickOutside:!0,closeOnPressEscape:!1}}}},v={name:"Demo7",components:{DialogDemoForm:s},data:function(){return{config:{visible:!1,header:{title:"不锁定 body 滚动"},lockScroll:!1}}}},f={name:"Demo8",components:{DialogDemoForm:s},data:function(){return{config:{visible:!1,header:{title:"垂直居中"},middle:!0}}}},u={name:"Demo9",components:{DialogDemoForm:s},data:function(){return{config:{visible:!1,header:{title:"修改 top 和 bottom"},top:"30px",bottom:"50px"}}}},g={name:"Demo10",components:{DialogDemoForm:s},data:function(){return{config:{visible:!1,header:{title:"可以通过拖拽改变大小"},allowResize:!0}}}};var b=function(e){o(337)},p={name:"Demo12",components:{DialogDemoForm:s},data:function(){return{bodyOnly:{visible:!1},customHeaderAndBody:{visible:!1},customTitle:{visible:!1}}}},_={name:"DocsDialog",data:function(){return{dialogAttrs:[{name:"visible",type:"Boolean",desc:"控制 Dialog 是否显示的参数, 与父组件双向绑定 ( 需要加`sync`修饰符 )",options:["—"],default:"false"},{name:"header",type:["Object","Boolean","String"],desc:"header 配置对象, 具体内容见 **header 对象** (当传入 header slot 时，该配置将不会生效), <br />当任何时候都不需要 header 时可以传入 false",options:["—"],default:"-"},{name:"footer",type:["Object","Boolean"],desc:"footer 配置对象, 具体内容见 **footer 对象** (当传入 footer slot 时，该配置将不会生效)， <br />当任何时候都不需要 footer 时可以传入 false",options:["—"],default:"-"},{name:"size",type:["String","Object"],desc:"设置 Dialog 的大小。 可选 `sm`, `md`, `lg`, 或者传入 { width: *, height: * } 具体指定",options:["sm","md","lg"],default:"md"},{name:"containerClass",type:"String",desc:"`dao-dialog` 的容器类名",options:["—"],default:"-"},{name:"closeOnClickOutside",type:"Boolean",desc:"设置点击 Dialog 外面( 遮罩层 ) 是否隐藏 Dialog",options:["—"],default:"false"},{name:"closeOnPressEscape",type:"Boolean",desc:"设置按键 ESC 时是否隐藏 Dialog",options:["—"],default:"true"},{name:"allowResize",type:"Boolean",desc:"是否可以拖拽调整大小",options:["—"],default:"false"},{name:"lockScroll",type:"Boolean",desc:"对话框出现时是否将 body 锁定不滚动",options:["—"],default:"true"},{name:"top",type:"String",desc:"`dao-dialog` 的 `margin-top`",options:["—"],default:"100px"},{name:"bottom",type:"String",desc:"`dao-dialog` 的 `margin-bottom`",options:["—"],default:"20px"},{name:"middle",type:"Boolean",desc:"`dao-dialog` 垂直是否居中",options:["—"],default:"false"}],headerAttrs:[{name:"title",type:"String",desc:"对话框 title",options:["—"],default:"—"},{name:"showClose",type:"Boolean",desc:"是否显示关闭图标(为 `true` 时 `title` 向左对齐， 为 `false` 时 `title` 居中对齐)",options:["—"],default:"false"}],footerAttrs:[{name:"confirmText",type:"String",desc:"确认按钮的文本",options:["—"],default:"确认"},{name:"cancelText",type:"String",desc:"取消按钮的文本",options:["—"],default:"取消"},{name:"confirmDisabled",type:"Boolean",desc:"禁用 confirm",options:["—"],default:"false"}],dialogEvents:[{name:"before-open",desc:"Dialog 即将打开时的回调, 内部 DOM 还未渲染",parameter:"—"},{name:"opened",desc:"Dialog 打开时的回调, 内部 DOM 已经渲染完成",parameter:"—"},{name:"before-close",desc:"对话框即将关闭时的回调, 内部 DOM 还在(confirm 和 cancel 的下一跳也会触发 `close`)",parameter:"—"},{name:"closed",desc:"Dialog 关闭时的回调, 内部 DOM 已经被移除(confirm 和 cancel 的下一跳也会触发 `close`)",parameter:"—"},{name:"confirm",desc:"Dialog 点击 确定 时的触发",parameter:"—"},{name:"cancel",desc:"Dialog 点击 取消 时的触发",parameter:"—"}],dialogSlots:[{name:"header",desc:"Dialog header 的内容(同时配置的 title slot 将不会生效)"},{name:"footer",desc:"Dialog footer 的内容"},{name:"title",desc:"Dialog title 的内容"}]}},components:{Demo1:i,Demo2:Object(l.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dao-dialog demo2"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.config.visible=!0}}},[e._v(e._s(e.config.header.title))]),e._v(" "),o("dao-dialog",{attrs:{visible:e.config.visible,header:e.config.header},on:{"update:visible":function(t){e.$set(e.config,"visible",t)}}},[o("dialog-demo-form")],1)],1)},[],!1,null,null,null).exports,Demo3:Object(l.a)(d,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dao-dialog demo3"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.config.visible=!0}}},[e._v(e._s(e.config.header.title))]),e._v(" "),o("dao-dialog",{attrs:{visible:e.config.visible,header:e.config.header,footer:e.config.footer},on:{"update:visible":function(t){e.$set(e.config,"visible",t)}}},[o("dialog-demo-form")],1)],1)},[],!1,null,null,null).exports,Demo4:Object(l.a)(c,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dao-dialog demo4"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.config.visible=!0}}},[e._v(e._s(e.config.header.title))]),e._v(" "),o("dao-dialog",{attrs:{visible:e.config.visible,header:e.config.header,containerClass:e.config.containerClass},on:{"update:visible":function(t){e.$set(e.config,"visible",t)}}},[o("dialog-demo-form")],1)],1)},[],!1,null,null,null).exports,Demo5:Object(l.a)(r,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dao-dialog demo5"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.config.visible=!0}}},[e._v(e._s(e.config.header.title))]),e._v(" "),o("dao-dialog",{attrs:{visible:e.config.visible,header:e.config.header,size:e.config.size},on:{"update:visible":function(t){e.$set(e.config,"visible",t)}}},[o("dialog-demo-form")],1)],1)},[],!1,null,null,null).exports,Demo6:Object(l.a)(m,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dao-dialog demo6"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.config.visible=!0}}},[e._v(e._s(e.config.header.title))]),e._v(" "),o("dao-dialog",{attrs:{visible:e.config.visible,header:e.config.header,closeOnClickOutside:e.config.closeOnClickOutside,closeOnPressEscape:e.config.closeOnPressEscape},on:{"update:visible":function(t){e.$set(e.config,"visible",t)}}},[o("dialog-demo-form")],1)],1)},[],!1,null,null,null).exports,Demo7:Object(l.a)(v,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dao-dialog demo7"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.config.visible=!0}}},[e._v(e._s(e.config.header.title))]),e._v(" "),o("dao-dialog",{attrs:{visible:e.config.visible,header:e.config.header,lockScroll:e.config.lockScroll},on:{"update:visible":function(t){e.$set(e.config,"visible",t)}}},[o("dialog-demo-form")],1)],1)},[],!1,null,null,null).exports,Demo8:Object(l.a)(f,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dao-dialog demo8"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.config.visible=!0}}},[e._v(e._s(e.config.header.title))]),e._v(" "),o("dao-dialog",{attrs:{visible:e.config.visible,header:e.config.header,middle:e.config.middle},on:{"update:visible":function(t){e.$set(e.config,"visible",t)}}},[o("dialog-demo-form")],1)],1)},[],!1,null,null,null).exports,Demo9:Object(l.a)(u,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dao-dialog demo9"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.config.visible=!0}}},[e._v(e._s(e.config.header.title))]),e._v(" "),o("dao-dialog",{attrs:{visible:e.config.visible,header:e.config.header,top:e.config.top,bottom:e.config.bottom},on:{"update:visible":function(t){e.$set(e.config,"visible",t)}}},[o("dialog-demo-form")],1)],1)},[],!1,null,null,null).exports,Demo10:Object(l.a)(g,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dao-dialog demo10"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.config.visible=!0}}},[e._v(e._s(e.config.header.title))]),e._v(" "),o("dao-dialog",{attrs:{visible:e.config.visible,header:e.config.header,allowResize:e.config.allowResize},on:{"update:visible":function(t){e.$set(e.config,"visible",t)}}},[o("dialog-demo-form")],1)],1)},[],!1,null,null,null).exports,Demo11:Object(l.a)({name:"Demo11",data:function(){return{fatherDialog:{visible:!1,header:{title:"这是外部对话框"},childDialog:{visible:!1,header:{title:"这是内部对话框"}}}}}},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dao-dialog demo11"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.fatherDialog.visible=!0}}},[e._v("打开外部对话框")]),e._v(" "),o("dao-dialog",{attrs:{visible:e.fatherDialog.visible,header:e.fatherDialog.header},on:{"update:visible":function(t){e.$set(e.fatherDialog,"visible",t)}}},[o("div",{staticClass:"body"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.fatherDialog.childDialog.visible=!0}}},[e._v("打开内部对话框")]),e._v(" "),o("dao-dialog",{attrs:{visible:e.fatherDialog.childDialog.visible,size:"sm",header:e.fatherDialog.childDialog.header},on:{"update:visible":function(t){e.$set(e.fatherDialog.childDialog,"visible",t)}}},[o("div",{staticClass:"body"},[e._v("\n          这是一个内部对话框\n        ")])])],1)])],1)},[],!1,b,"data-v-38e05748",null).exports,Demo12:Object(l.a)(p,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dao-dialog demo12"},[o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.bodyOnly.visible=!0}}},[e._v("没有header和footer")]),e._v(" "),o("dao-dialog",{attrs:{visible:e.bodyOnly.visible,closeOnClickOutside:!0,header:!1,footer:!1},on:{"update:visible":function(t){e.$set(e.bodyOnly,"visible",t)}}},[o("dialog-demo-form")],1),e._v(" "),o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.customHeaderAndBody.visible=!0}}},[e._v("定制header, 定制footer")]),e._v(" "),o("dao-dialog",{attrs:{visible:e.customHeaderAndBody.visible,closeOnClickOutside:!0},on:{"update:visible":function(t){e.$set(e.customHeaderAndBody,"visible",t)}}},[o("div",{attrs:{slot:"header"},slot:"header"},[e._v("custom header")]),e._v(" "),o("dialog-demo-form"),e._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[e._v("custom footer")])],1),e._v(" "),o("button",{staticClass:"dao-btn blue",on:{click:function(t){e.customTitle.visible=!0}}},[e._v("自定义title")]),e._v(" "),o("dao-dialog",{attrs:{visible:e.customTitle.visible,closeOnClickOutside:!0},on:{"update:visible":function(t){e.$set(e.customTitle,"visible",t)}}},[o("div",{attrs:{slot:"title"},slot:"title"},[o("i",[e._v("自定义 title")])]),e._v(" "),o("dialog-demo-form")],1)],1)},[],!1,null,null,null).exports}},h=Object(l.a)(_,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"docs-dialog"},[o("docs-title",{attrs:{name:e.$t("dialog"),desc:"dao-dialog 是一个模态对话框组件"}}),e._v(" "),o("docs-section",[o("template",{slot:"title"},[e._v("默认版本")]),e._v(" "),o("template",{slot:"content"},[o("demo-code",[o("demo1",{attrs:{slot:"demo"},slot:"demo"}),e._v(" "),o("code-reader",{attrs:{slot:"code",file:"dialog/demo-1.vue"},slot:"code"}),e._v(" "),o("md-reader",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n          要显示一个默认的 Dialog，将 `dao-dialog` 的 `visible` 属性设置为 `true` 即可\n        ")])],1)],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[e._v("自定义 Header")]),e._v(" "),o("template",{slot:"content"},[o("demo-code",[o("demo2",{attrs:{slot:"demo"},slot:"demo"}),e._v(" "),o("code-reader",{attrs:{slot:"code",file:"dialog/demo-2.vue"},slot:"code"}),e._v(" "),o("md-reader",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n          通过给 `header` 属性传入一个对象来自定义 Dialog 的 Header\n          `header` 对象中的 `title` 属性用于设置 Dialog 的标题\n          默认的 Dialog 不显示关闭按钮，如果需要显示关闭按钮，在 `header` 对象中设置 `showClose` 为 `true` 以显示关闭按钮\n        ")])],1)],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[e._v("自定义 Footer")]),e._v(" "),o("template",{slot:"content"},[o("demo-code",[o("demo3",{attrs:{slot:"demo"},slot:"demo"}),e._v(" "),o("code-reader",{attrs:{slot:"code",file:"dialog/demo-3.vue"},slot:"code"}),e._v(" "),o("md-reader",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n          通过给 `footer` 属性传入一个 `footer` 对象，可以自定义 `footer` 属性\n        ")])],1)],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[e._v("自定义 Dialog 的容器类名")]),e._v(" "),o("template",{slot:"content"},[o("demo-code",[o("demo4",{attrs:{slot:"demo"},slot:"demo"}),e._v(" "),o("code-reader",{attrs:{slot:"code",file:"dialog/demo-4.vue"},slot:"code"}),e._v(" "),o("md-reader",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n          可以通过设置 `containerClass` 属性来自定义 `dao-dialog` 的容器类名\n        ")])],1)],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[e._v("自定义大小")]),e._v(" "),o("template",{slot:"content"},[o("demo-code",[o("demo5",{attrs:{slot:"demo"},slot:"demo"}),e._v(" "),o("code-reader",{attrs:{slot:"code",file:"dialog/demo-5.vue"},slot:"code"}),e._v(" "),o("md-reader",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n          `size` 属性可用于设置 Dialog 的大小\n        ")])],1)],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[e._v("设置关闭 Dialog 的方式")]),e._v(" "),o("template",{slot:"content"},[o("demo-code",[o("demo6",{attrs:{slot:"demo"},slot:"demo"}),e._v(" "),o("code-reader",{attrs:{slot:"code",file:"dialog/demo-6.vue"},slot:"code"}),e._v(" "),o("md-reader",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n          `closeOnClickOutside` 属性用于设置点击 Dialog 外面( 遮罩层 ) 是否隐藏 Dialog，\n          `closeOnPressEscape` 属性用于设置按键 ESC 时是否隐藏 Dialog (默认值为 `true`，即按下ESC隐藏 Dialog，设置其值为 `false `则不可以通过 ESC 关闭 Dialog)\n        ")])],1)],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[e._v("不锁定 body 滚动")]),e._v(" "),o("template",{slot:"content"},[o("demo-code",[o("demo7",{attrs:{slot:"demo"},slot:"demo"}),e._v(" "),o("code-reader",{attrs:{slot:"code",file:"dialog/demo-7.vue"},slot:"code"}),e._v(" "),o("md-reader",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n          默认的 Dialog 出现时其 body 是锁定不可滚动的，若要设置其 body 可滚动，将 `lockScroll` 属性设置为 `false` 即可\n        ")])],1)],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[e._v("垂直居中")]),e._v(" "),o("template",{slot:"content"},[o("demo-code",[o("demo8",{attrs:{slot:"demo"},slot:"demo"}),e._v(" "),o("code-reader",{attrs:{slot:"code",file:"dialog/demo-8.vue"},slot:"code"}),e._v(" "),o("md-reader",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n          将 `middle` 属性设置为 `true` 即可使对话框垂直居中\n        ")])],1)],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[e._v("垂直居中")]),e._v(" "),o("template",{slot:"content"},[o("demo-code",[o("demo9",{attrs:{slot:"demo"},slot:"demo"}),e._v(" "),o("code-reader",{attrs:{slot:"code",file:"dialog/demo-9.vue"},slot:"code"}),e._v(" "),o("md-reader",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n          `top` 和 `bottom` 属性可分别用于设置 Dialog 的 `marign-top` 和 `margin-bottom` \n        ")])],1)],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[e._v("通过拖拽改变大小")]),e._v(" "),o("template",{slot:"content"},[o("demo-code",[o("demo10",{attrs:{slot:"demo"},slot:"demo"}),e._v(" "),o("code-reader",{attrs:{slot:"code",file:"dialog/demo-10.vue"},slot:"code"}),e._v(" "),o("md-reader",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n          将 `allowResize` 属性设置为 `true` 即可通过拖拽改变对话框大小\n          可以通过右下角拖拽图标进行拖拽,这个拖拽做了边缘检测，无法拖出屏幕窗口。并且如果你调整窗口大小，Dialog 也会跟着做最合适的调整\n        ")])],1)],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[e._v("嵌套 Dialog")]),e._v(" "),o("template",{slot:"content"},[o("demo-code",[o("demo11",{attrs:{slot:"demo"},slot:"demo"}),e._v(" "),o("code-reader",{attrs:{slot:"code",file:"dialog/demo-11.vue"},slot:"code"})],1)],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[e._v("定制 Header 和 Footer")]),e._v(" "),o("template",{slot:"content"},[o("demo-code",[o("demo12",{attrs:{slot:"demo"},slot:"demo"}),e._v(" "),o("code-reader",{attrs:{slot:"code",file:"dialog/demo-12.vue"},slot:"code"}),e._v(" "),o("md-reader",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n          可以通过 `header` 和 `footer` 具名 slot 来自定义对话框 Header 和 Footer 的内容，此外也可以通过具名 slot `title` 自定义 Header 中 `title` 的内容\n          如果不需要显示 Header 和 Footer，则将 `header` 和 `footer` 属性的值设置为 `false` 即可\n        ")])],1)],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[o("docs-title",{attrs:{name:"<dao-dialog/> 属性",size:"sm"}})],1),e._v(" "),o("template",{attrs:{type:"attr"},slot:"content"},[o("docs-table",{attrs:{rows:e.dialogAttrs,type:"attr"}})],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[o("docs-title",{attrs:{name:"header 对象",size:"sm"}})],1),e._v(" "),o("template",{attrs:{type:"attr"},slot:"content"},[o("docs-table",{attrs:{rows:e.headerAttrs,type:"attr"}})],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[o("docs-title",{attrs:{name:"footer 对象",size:"sm"}})],1),e._v(" "),o("template",{attrs:{type:"attr"},slot:"content"},[o("docs-table",{attrs:{rows:e.footerAttrs,type:"attr"}})],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[o("docs-title",{attrs:{name:"dialog 触发的事件",size:"sm"}})],1),e._v(" "),o("template",{attrs:{type:"event"},slot:"content"},[o("docs-table",{attrs:{rows:e.dialogEvents,type:"event"}})],1)],2),e._v(" "),o("docs-section",[o("template",{slot:"title"},[o("docs-title",{attrs:{name:"dialog 的具名 slot",size:"sm"}})],1),e._v(" "),o("template",{attrs:{type:"slot"},slot:"content"},[o("docs-table",{attrs:{rows:e.dialogSlots,type:"slot"}})],1)],2)],1)},[],!1,null,null,null);t.default=h.exports}}]);