import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Page404 from '@/views/Page404.vue'
import About from '@/views/About.vue'
import PaginaProd from '@/views/PaginaProd.vue'

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
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/PaginaProd',
      name: 'PaginaProd',
      component: PaginaProd
    }

  ]
})

export default router
