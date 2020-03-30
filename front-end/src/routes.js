import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/screen/home/home.vue"
import Login from "./components/screen/login/login.vue"
import Register from "./components/screen/register/register.vue"
import Cart from "./components/screen/cart/cart.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: "home"
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    }
  ]
})