import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Root from '../views/admin/Root.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import TourPackage from '../views/admin/TourPackage.vue'
import Tours from '../views/admin/Tours.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin_root',
      component: Root,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'tour_package',
          name: 'tour_package',
          component: TourPackage
        },
        {
          path: 'tours',
          name: 'tours',
          component: Tours
        },
      ]
    },
  ]
})

export default router
