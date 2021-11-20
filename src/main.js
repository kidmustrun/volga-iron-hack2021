import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  { path: '/', component: Home },
]
const router = new VueRouter({
  mode: "history",
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
