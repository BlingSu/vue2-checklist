/**
 * Vue2-CheckList
 */
import VueCheckList from './VueCheckList.vue'

const Vue2CheckList = {
  VueCheckList,
  install: function(Vue) {
    Vue.component(VueCheckList.name, VueCheckList)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vue2CheckList)
}

export default Vue2CheckList
export { VueCheckList }
