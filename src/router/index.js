import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Page404 from '@/views/Page404.vue'
import DetailView from '@/views/DetailView.vue'

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
    }
    ,
    {
      path: '/:catchAll(.*)',
      name: 'Page404',
      component: Page404
    }
  ]
})

export default router
