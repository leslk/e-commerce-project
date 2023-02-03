<script>
    import { useCartStore } from '../stores/cart';
    import InputNumber from './InputNumber.vue';

    export default {
        data() {
            return {
                cartStore : useCartStore()
            }
        },
        components : {
            InputNumber : InputNumber
        }
    }
</script>

<template>
    <div justify="center" align="middle">
        <el-row  justify="center" align="middle" :gutter="20">
            <el-col
                style="margin-bottom: 20px"
                :xs="24" 
                :sm="20" 
                :md="16" 
                :lg="14" 
                v-for="product in cartStore.cart" 
                :key="product.productId"
            >
                <div class="cart-product">
                    <div style="display: flex; align-items: center;">
                        <img 
                        :src="product.productPicture" 
                        :alt="product.productName" 
                        class="cart-product__image"
                        />
                        <h2 class="cart-product__title">{{product.productName}}</h2>
                    </div>
                    <div>
                        <div style="position: absolute; bottom: 20px; right: 20px;">
                            <p class="cart-product__price">{{(product.productPrice * product.quantity / 100).toFixed(2) + ' ' + '€'}}</p>
                        </div>
                        <el-row justify="space-between" align="middle" style="display: flex; flex-direction: row; align-items: center; position: absolute; top: 20px; right: 20px;">
                            <InputNumber :product="product"/>
                            <div>
                                <el-button 
                                    style="margin-left: 20px"
                                    aria-label="supprimer l'article du panier"
                                    type="primary"
                                    @click="cartStore.removeFromCart(product)"
                                >
                                    <font-awesome-icon icon="fa-trash-can"/>
                                </el-button>
                            </div>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col 
                v-if="cartStore.cart.length > 0"
                class="total-container"
                :xs="24" 
                :sm="20" 
                :md="16" 
                :lg="14" 
            >
                <p class="total-text">PRIX TOTAL : </p>
                <p class="total-price">{{(cartStore.totalPrice / 100).toFixed(2)}} €</p>
            </el-col>
        </el-row>
        <el-row v-if="cartStore.cart.length > 0" justify="center" align="bottom">
            <el-button style="font-size: 1.2em;" size="large" type="primary">Passer commande</el-button>
        </el-row>
    </div>
</template>
