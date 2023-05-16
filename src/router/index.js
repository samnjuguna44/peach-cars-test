import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginPage from "../components/LoginPage.vue"
import DashBoardPage from "../views/DashBoardPage.vue"
import OrderFeeds from "../views/OrderFeeds.vue"
import SubmitPig from "../views/SubmitPig.vue"

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoardPage
  },
  {
    path: '/feeds',
    name: 'feeds',
    component: OrderFeeds
  },
  {
    path: '/batch',
    name: 'batch',
    component: SubmitPig
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
