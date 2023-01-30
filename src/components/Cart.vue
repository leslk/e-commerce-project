<script setup>
    import { useCartStore } from '../stores/cart';

    const cartStore = useCartStore();
</script>

<template>
    <div>
        <h1>Panier</h1>
        <p>{{cartStore.totalQuantity}} articles</p>
        <p>Prix total : {{cartStore.totalPrice}} €</p>
    </div>
</template>