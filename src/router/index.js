import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Page404 from '@/views/Page404.vue'
import Contatti from '@/views/Contatti.vue'
import Saldi from '@/views/Saldi.vue'
import Shop from '@/views/Shop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:catchAll(.*)',
      name: 'Page404',
      component: Page404
    },
    {
      path: '/contatti',
      name: 'Contatti',
      component: Contatti
    },
    {
      path: '/saldi',
      name: 'Saldi',
      component: Saldi
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})

export default router
