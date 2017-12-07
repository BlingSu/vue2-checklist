/**
 * this is vue entry config
 * @author angelasu 
 * @date 2017/12/07
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
