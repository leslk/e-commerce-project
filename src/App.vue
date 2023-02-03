<script>
import { RouterLink, RouterView } from 'vue-router'
import logo from "./assets/logo_easy-food-shop.png"
import { useCartStore } from './stores/cart'


export default {
  data() {
    return {
      renderComponent: true,
      showCartButton : window.location.href.split("/").pop() == "products",
      showProductsButton : window.location.href.split("/").pop() == "cart",
      cartStore: useCartStore(),
      logo: logo
    }
  },
  methods: {
    setShowProductsButton() {
        this.showCartButton = false;
        this.showProductsButton = true;  
    },
    setShowCartButton() {
        this.showProductsButton = false;
        this.showCartButton = true;
    }
  }
}
</script>

<template>
  <el-affix position="top">
    <header>
          <span>
            <img :src="logo"/>
          </span>
        <div class="wrapper">
          <nav>
            <RouterLink v-if="showProductsButton" to="/products" @click="setShowCartButton()">
              <el-button type="primary" size="large" round>
                <font-awesome-icon icon="fa-arrow-left"/>
                <span class="btn-text">Retour aux produits</span>
              </el-button>
            </RouterLink>
            <RouterLink v-else-if="showCartButton" to="/cart" @click="setShowProductsButton()">
                <el-button type="primary" size="large" round>
                  <font-awesome-icon icon="fa-cart-shopping"/>
                  <span class="header-price">{{(cartStore.totalPrice / 100).toFixed(2)}} €</span>
                </el-button>  
            </RouterLink>
            <RouterLink v-else to="/products" @click="setShowCartButton()">
              <el-button type="primary" size="large" round>
                <font-awesome-icon icon="fa-arrow-left"/>
                <span class="btn-text">Retour à l'accueil</span>
              </el-button>
            </RouterLink>

          </nav>
        </div>
    </header>
  </el-affix>
  <RouterView />
</template>

