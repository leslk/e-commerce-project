import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from "../views/ProductsView.vue"
import Cart from '../components/Cart.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: to => {
        return 'products'
      }
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: {
        title : "Shop : Produits"
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: {
        title : "Shop : Panier"
      }
    },
    {
      name : "NotFound",
      path : "/:pathMatch(.*)",
      component: ProductsView
    }
  ]
})

router.afterEach((from, to) => {
  document.title = from.meta.title
});

export default router
