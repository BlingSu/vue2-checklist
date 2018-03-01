import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/recommend' },
    { path: '/rank', component: () => import('./components/rank/rank.vue') },
    { path: '/recommend', component: () => import('./components/recommend/recommend.vue') },
    { path: '/search', component: () => import('./components/search/search.vue') },
    { path: '/singer', component: () => import('./components/singer/singer.vue') }
  ]
})
