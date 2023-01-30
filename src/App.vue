<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ProductsList from './components/ProductsList.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/products">Produits</RouterLink>
        <RouterLink to="/cart">Panier</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

