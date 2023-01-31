<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/products">Produits</RouterLink>
        <el-button type="primary" round>
          <RouterLink to="/cart">Panier</RouterLink>
        </el-button>  
      </nav>
    </div>
  </header>
  <RouterView />
</template>
