(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[81],{329:function(t,a,o){var n=o(330);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(4).default)("34dd772e",n,!0,{})},330:function(t,a,o){(t.exports=o(3)(!1)).push([t.i,"pre.codeblock[data-v-d2b0f752]{background-color:#060606;color:#0dbf0d}",""])},434:function(t,a,o){"use strict";o.r(a);var n={name:"ClipboardRouter",data:function(){return{text:"mimo"}},methods:{greeting:function(){alert("content copied")}}},e=o(2);var s=function(t){o(329)},d=Object(e.a)(n,function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("h1",[t._v("Clipboard")]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"demo-block"},[o("h2",{staticClass:"demo-block__title"},[t._v(" 使用按钮的形式 ")]),t._v(" "),o("dao-tab",{attrs:{direction:"right"}},[o("dao-tab-item",{attrs:{heading:"模板"}},[o("div",{staticClass:"demo-tab-wrap first"},[o("dao-clipboard",{tag:"div",staticClass:"dao-btn blue",attrs:{caption:"Click here to copy",content:"<span>content to copy</span>","on-success":t.greeting}})])]),t._v(" "),o("dao-tab-item",{attrs:{heading:"JavaScript"}},[o("div",{staticClass:"demo-tab-wrap"},[o("pre",{staticClass:"codeblock"},[t._v("            export default {\n              name: 'ClipboardRouter',\n              methods: {\n                greeting: function() {\n                  alert('content copied');\n                }\n              }\n            }\n          ")])])])],1),t._v(" "),o("h2",[t._v(" Copy Block without button ")]),t._v(" "),o("br"),t._v(" "),o("dao-copy-block",{attrs:{"with-btn":!1}},[t._v("asjdahkdjagsd\n    jahgsdjgajsgdagjs")]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("h2",[t._v(" Copy Block with button ")]),t._v(" "),o("br"),t._v(" "),o("dao-copy-block",[t._v("asjdahkdjagsdjah "+t._s(t.text)+" gsdjgajsgdagjs")]),t._v(" "),o("button",{staticClass:"dao-btn ghost",on:{click:function(a){t.text=""+Math.random()}}},[t._v("change")])],1)])},[],!1,s,"data-v-d2b0f752",null);a.default=d.exports}}]);