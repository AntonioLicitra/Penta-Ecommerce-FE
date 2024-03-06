import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Page404 from '@/views/Page404.vue'
import DetailView from '@/views/DetailView.vue'
import Saldi from '@/views/Saldi.vue'
import Shop from '@/views/Shop.vue'
import About from '@/views/About.vue'
import PaginaProd from '@/views/PaginaProd.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import ConfirmView from '@/views/ConfirmView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: ConfirmView
    },
    {
      path: '/:catchAll(.*)',
      name: 'Page404',
      component: Page404
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
