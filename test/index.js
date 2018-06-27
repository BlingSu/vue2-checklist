import Vue from 'vue'
import Test from './test.vue'

import Vue2Checklist from '../dist/vue2-checklist.js'

Vue.use(Vue2Checklist)

new Vue({
  el: '#app',
  render: h => h(Test)
})
