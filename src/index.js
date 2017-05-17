// es6 polyfill
import 'core-js/fn/array/find-index';
import './components/dao-svg/svg';

import daoCallout from './components/dao-callout';
import daoDropdown from './components/dao-dropdown';
import daoInput from './components/dao-input';
import daoModal from './components/dao-modal';
import { daoProgress, daoProgressPulsing, daoProgressStacked } from './components/dao-progress';
import daoSteps from './components/dao-steps';
import daoSwitch from './components/dao-switch';
import daoTab from './components/dao-tab';
import daoTooltip from './components/dao-tooltip';
import './components/dao-svg/svg';

const daoStyle = {
  daoCallout,
  daoDropdown,
  daoDropdownMenu: daoDropdown.Menu,
  daoDropdownItem: daoDropdown.Item,
  daoInput,
  daoModal,
  daoProgress,
  daoProgressStacked,
  daoProgressPulsing,
  daoSteps,
  daoStep: daoSteps.step,
  daoSubstep: daoSteps.substep,
  daoStepContent: daoSteps.content,
  daoSwitch,
  daoTab,
  daoTabItem: daoTab.Item,
  daoTooltip,
};

function install(Vue) {
  Object.keys(daoStyle).forEach((key) => {
    Vue.component(key, daoStyle[key]);
  });
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign(daoStyle, { install }); // eslint-disable-line no-undef
