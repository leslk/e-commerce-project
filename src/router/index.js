import { createRouter, createWebHistory } from 'vue-router'
import ProductsList from '../components/ProductsList.vue'
import Cart from '../components/Cart.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/products',
      name: 'products',
      component: ProductsList
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})

export default router
