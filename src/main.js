import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Contacts from "./pages/Contacts.vue";
import Booking from "./pages/Booking.vue";
import Events from "./pages/Events.vue";
import Houses from "./pages/Houses.vue";
import Account from "./pages/Account.vue";
import SignIn from "./pages/SignIn.vue";
import SignUp from "./pages/SignUp.vue";
import ViewHouse from './pages/ViewHouse.vue';
import PayHouse from './pages/PayHouse.vue';
import Admin from './pages/Admin.vue';
import AdminRooms from './pages/AdminRooms.vue';
import AdminUsers from './pages/AdminUsers.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);
const isAuthenticated = () => {
  if (localStorage.getItem("token")) return true;
  else false;
};

const routes = [
  { path: "/", component: Home },
  { path: "/events", component: Events },
  { path: "/admin", component: Admin },
  { path: "/adminrooms", component: AdminRooms },
  { path: "/adminusers", component: AdminUsers },
  { path: '/view_house', component: ViewHouse },
  { path: "/contacts", component: Contacts },
  { path: "/pay_house", component: PayHouse },
  {
    path: "/booking",
    component: Booking,
    beforeEnter(to, from, next) {
      if (isAuthenticated()) {
        next();
      } else {
        next("/signin");
      }
    },
  },
  { path: "/houses", component: Houses },
  {
    path: "/account",
    component: Account,
    beforeEnter(to, from, next) {
      if (isAuthenticated()) {
        next();
      } else {
        next("/signin");
      }
    },
  },
  {
    path: "/signin",
    component: SignIn,
    beforeEnter(to, from, next) {
      if (isAuthenticated()) {
        next("/account");
      } else {
        next();
      }
    },
  },
  {
    path: "/signup",
    component: SignUp,
    beforeEnter(to, from, next) {
      if (isAuthenticated()) {
        next("/account");
      } else {
        next();
      }
    },
  },
  { path: "*", redirect: "/" },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
