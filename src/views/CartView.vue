<script>
    import Cart from '../components/Cart.vue';
    import { useCartStore } from '../stores/cart';
    import Footer from '../components/Footer.vue';

    export default {
        data() {
            return {
                cartStore: useCartStore()
            }
        },
        components: {
            Cart: Cart,
            Footer: Footer
        } 
    }
</script>

<template>
    <div style="flex-grow: 1;">
        <div class="cart-banner">
            <h1 class="cart-banner__text">Easy Food Shop livre votre commande sous 24 heures</h1>
        </div>
        <el-main>
            <div style="margin-top: 40px; margin-bottom: 40px;">
                <div class="cart-main-text"> 
                    <h1>Votre panier</h1>
                    <div class="cart-main-text">
                        <p v-if="cartStore.cart.length === 0">
                            Votre panier est vide
                        </p>
                    </div>
                </div>
                <Cart/>
            </div>
        </el-main>
    </div>
    <Footer/>
</template>
