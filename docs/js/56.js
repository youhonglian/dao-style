(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[56],{224:function(n,t){n.exports='<template>\n  <div>\n    <div class="dao-btn ghost" @click="lastStep">上一步</div>\n    <div class="dao-btn blue" @click="nextStep">下一步</div>\n    <dao-steps v-model="currentStep">\n      <dao-step slot="step" index="1" title="步骤一">\n        <dao-substep index="1-1">1-1</dao-substep>\n        <dao-substep index="1-2" :no-click="true">1-2(不可点击)</dao-substep>\n        <dao-substep index="1-3">1-3</dao-substep>\n      </dao-step>\n      <dao-step slot="step" index="2" title="步骤二" :active="activeStepFun">\n        <dao-substep index="2-1"  :no-active="true">2-1(不可访问)</dao-substep>\n        <dao-substep index="2-2" :active="activeSubstepFun">2-2</dao-substep>\n      </dao-step>\n      <dao-step-content\n        v-for="s in steps"\n        :key="s"\n        slot="content"\n        :index="s">\n        步骤 {{s}} 的内容\n      </dao-step-content>\n      </dao-steps>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      currentStep: \'1-1\',\n      steps: [\'1-1\', \'1-2\', \'1-3\', \'2-1\', \'2-2\'],\n    };\n  },\n  methods: {\n    lastStep() {\n      const index = this.steps.indexOf(this.currentStep);\n      if (index === -1 || index === 0) return;\n      this.currentStep = this.steps[index - 1];\n    },\n    nextStep() {\n      const index = this.steps.indexOf(this.currentStep);\n      if (index === -1 || index === this.steps.length - 1) return;\n      this.currentStep = this.steps[index + 1];\n    },\n    activeStepFun() {\n      console.log(\'这是到步骤 二 的回调函数\');\n    },\n    activeSubstepFun() {\n      console.log(\'这是到步骤 2-1 的回调函数\');\n    },\n  },\n  watch: {\n    currentStep: {\n      handler(newV) {\n        console.log(\'当前步骤是：\', newV);\n      },\n      deep: true,\n    },\n  },\n};\n<\/script>\n'}}]);