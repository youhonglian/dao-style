(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[36],{204:function(n,e){n.exports='<template>\n  <div class="demo5">\n    <h3>\n      使用组件\n    </h3>\n    <dao-input\n      v-model="value"\n      size="sm"\n      placeholder="请输入内容">\n    </dao-input>\n    <h3>\n      使用纯样式\n    </h3>\n    <input\n      class="dao-control"\n      size="sm"\n      type="text"\n      placeholder="使用纯样式" v-model="classValue" />\n  </div>\n</template>\n<script>\nexport default {\n  name: \'Demo5\',\n  data() {\n    return {\n      value: \'\',\n      classValue: \'\',\n    };\n  },\n};\n<\/script>\n<style lang="scss" scoped>\n.demo5 h3{\n  margin: 20px 0 10px;\n  &:first-child {\n    margin-top: 0;\n  }\n}\n</style>\n'}}]);