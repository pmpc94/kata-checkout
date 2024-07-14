import { createRouter, createWebHistory } from 'vue-router'
import KataCheckoutView from '@/views/KataCheckoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'checkout',
      component: KataCheckoutView
    },
  ]
})

export default router
