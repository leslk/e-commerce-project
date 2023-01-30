<script setup>
    import { useProductsStore } from '../stores/products';
    import { useCartStore } from '../stores/cart';

    const cartStore = useCartStore();
    const productsStore = useProductsStore();
</script>

<template>
    <section>
        <article v-for="product in productsStore.setProductsPriceInEuro" :key="product.productId">
            <h1>{{product.productName}}</h1>
            <div>
                <img :src="product.productPicture" :alt="product.productName"/>
            </div>
            <p>{{product.productPrice + ' ' + '€'}}</p>
            <button @click="addToCart(product); cartStore.totalCartPrice(); cartStore.countCartItems();">Ajouter au panier</button>
        </article>
    </section>
</template>