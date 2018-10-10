(window.daoStyleJsonpFunction=window.daoStyleJsonpFunction||[]).push([[69],{218:function(n,t){n.exports="<template>\n  <table class=\"dao-table row\">\n    <thead>\n      <tr>\n        <th>应用</th>\n        <th>容器</th>\n        <th>状态</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for=\"row in rows\" :key=\"row.name\">\n        <td>{{row.name}}</td>\n        <td>{{row.containers}} 个</td>\n        <td>{{row.status}}</td>\n      </tr>\n    </tbody>\n  </table>\n</template>\n\n<script>\nexport default {\n  name: 'Demo2',\n  data() {\n    return {\n      rows: [\n        {\n          name: 'DaoCloud Enterprise',\n          containers: 1,\n          status: 'Running',\n        },\n        {\n          name: 'DaoCloud Services',\n          containers: 2,\n          status: 'Waiting',\n        },\n        {\n          name: 'DaoCloud DaoVoice',\n          containers: 3,\n          status: 'Stopped',\n        },\n        {\n          name: 'DaoCloud Insight',\n          containers: 4,\n          status: 'Unknown',\n        },\n      ],\n    };\n  },\n};\n<\/script>"}}]);