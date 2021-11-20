import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Contacts from './pages/Contacts.vue'
import Booking from './pages/Booking.vue'
import Events from './pages/Events.vue'
import Houses from './pages/Houses.vue'
import Account from './pages/Account.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  { path: '/', component: Home },
  { path: '/events', component: Events },
  { path: '/contacts', component: Contacts },
  { path: '/booking', component: Booking },
  { path: '/houses', component: Houses },
  { path: '/account', component: Account },
]
const router = new VueRouter({
  mode: "history",
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
