import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AtozView from '../views/AtozView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/atoz',
    name: 'atoz',
    component: AtozView
  },
  {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
      
  },
  {
      path: '/login',
      name: 'login',
      component: LoginView
      
  },
  {
      path: '/register',
      name: 'register',
      component: RegisterView
      
  }
]

const router = new VueRouter({
  routes
})

export default router
