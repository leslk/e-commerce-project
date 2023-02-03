import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from "../views/ProductsView.vue";
import CartView from '../views/CartView.vue';

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
        title : "Easy Food Shop : Produits"
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      meta: {
        title : "Easy Food Shop : Panier"
      }
    },
    {
      name : "NotFound",
      path : "/notfound",
      component : () => import("../components/NotFound.vue")
    },
    {
      path : "/:pathMatch(.*)",
      redirect: to => {
        return 'notfound'
      }
    }
  ]
})

router.afterEach((from, to) => {
  document.title = from.meta.title
});

export default router
