import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
let baseURL = 'http://192.168.1.198'
axios.defaults.baseURL = baseURL

Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
