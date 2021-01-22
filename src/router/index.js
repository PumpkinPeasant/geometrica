import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Main.vue'
import Login from '@/views/login'
import Profile from '@/views/profile'
import World from '@/views/world'
import Store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: AuthGuard
  },
  {
    path: '/world',
    name: 'World',
    component: World
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
  routes
})

export default router

function AuthGuard(from, to, next){
  if(Store.getters.getsAuthorized)

    next()
  else
    next('/login')
}
