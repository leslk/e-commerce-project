<script>
import { RouterLink, RouterView } from 'vue-router'
import logo from "./assets/logo_easy-food-shop.png"
import { useCartStore } from './stores/cart'
export default {
  data() {
    return {
      page : "products",
      cartStore: useCartStore(),
      logo: logo
    }
  }
}
</script>

<template>
  <el-affix position="top">
    <header style="box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .25); background: white; position: relative; display: flex; align-items: center; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
          <span class="text-large font-600 mr-3">
            <img :src="logo"/>
          </span>
        <div class="wrapper">
          <nav>
            <RouterLink v-if="page === 'cart'" to="/products">
              <el-button type="primary" round @click="page = 'products'">
                <font-awesome-icon icon="fa-arrow-left"/>
                <span class="btn-text">Retour aux produits</span>
              </el-button>
            </RouterLink>
            <RouterLink v-else to="/cart">
                <el-button type="primary" round @click="page = 'cart'">
                  <font-awesome-icon icon="fa-cart-shopping"/>
                  <span class="header-price">{{(cartStore.totalPrice / 100).toFixed(2)}} €</span>
                </el-button>  
              </RouterLink>
          </nav>
        </div>
    </header>
  </el-affix>
  <RouterView />
</template>

<style>
.btn-text, .header-price {
  padding-left: 10px;
  font-size: 1.2em;
  color: white;
}

</style>
