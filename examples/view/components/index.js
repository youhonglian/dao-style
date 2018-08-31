import TopBar from './top-bar/index.vue';
import DcosTitle from './docs-title/index.vue';
import StatusIcon from './status-icon/index.vue';
import GithubBtn from './github-btn/index.vue';
import CodeReader from './code-reader/index.vue';
import DemoCode from './demo-code/index.vue';
import MdReader from './md-reader/index.vue';

const coms = {
  TopBar,
  DcosTitle,
  StatusIcon,
  GithubBtn,
  CodeReader,
  DemoCode,
  MdReader,
};

export default function install(Vue) {
  Object.keys(coms).forEach((name) => {
    Vue.component(name, coms[name]);
  });
}