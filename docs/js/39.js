(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[39],{188:function(n,e){n.exports='<template>\n  <div class="demo8">\n    <h3>\n      普通文本框\n    </h3>\n    <textarea\n      class="dao-control"\n      type="text"\n      rows="3"\n      placeholder="请填写内容" v-model="value">\n    </textarea>\n    <h3>\n     禁用的文本框 \n    </h3>\n    <textarea\n      class="dao-control"\n      disabled="disabled"\n      type="text"\n      rows="3"\n      placeholder="请填写内容" v-model="disableTextarea">\n    </textarea>\n    <h3>\n     错误状态的文本框 \n    </h3>\n    <textarea\n      class="dao-control error"\n      type="text"\n      rows="3"\n      placeholder="请填写内容"\n      v-model="errorTextarea">\n     </textarea>\n  </div>\n</template>\n<script>\nexport default {\n  name: \'demo8\',\n  data() {\n    return {\n      value: \'\',\n      disableTextarea: \'\',\n      errorTextarea: \'\',\n    };\n  },\n};\n<\/script>\n<style lang="scss" scoped>\n.demo8 h3{\n  margin: 20px 0 10px;\n  &:first-child {\n    margin-top: 0;\n  }\n}\n</style>\n'}}]);