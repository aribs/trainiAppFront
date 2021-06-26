import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Trainer from '../components/Trainer.vue'
import Login from '../components/Login.vue'
import NewAd from '../components/NewAd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/entrenador/:idTrainer',
    name: 'Trainer',
    component: Trainer
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/new-ad',
    name: 'NewAd',
    component: NewAd
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
