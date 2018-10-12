(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[40],{209:function(n,e){n.exports='<template>\n  <div class="demo9">\n    <h3>\n      普通文件选择框\n    </h3>\n    <dao-file-input\n      v-model="fileValue"\n      accept="image/*"\n      @change="onFileChange"\n      placeholder="请选择文件...">\n    </dao-file-input>\n    <h3>\n      自定义宽度\n    </h3>\n    <dao-file-input\n      v-model="widthFileValue"\n      accept="image/*"\n      style="width: 287px;"\n      @change="onFileChange"\n      placeholder="请选择文件...">\n    </dao-file-input>\n  </div>\n</template>\n<script>\nexport default {\n  name: \'demo9\',\n  data() {\n    return {\n      fileValue: null,\n      widthFileValue: null,\n    };\n  },\n  methods: {\n    onFileChange(file) {\n      console.log(\'select file:\', file);\n    },\n  },\n};\n<\/script>\n<style lang="scss" scoped>\n.demo9 h3{\n  margin: 20px 0 10px;\n  &:first-child {\n    margin-top: 0;\n  }\n}\n</style>\n'}}]);