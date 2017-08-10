import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Common from '@/assets/js/utils.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios
// let baseURL = 'http://192.168.1.214'
// axios.defaults.baseURL = baseURL

Vue.use(MintUI)
Vue.use(Common)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
