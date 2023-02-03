<script>
    import { useProductsStore } from '../stores/products';
    import { useCartStore } from '../stores/cart';
    import InputNumber from './InputNumber.vue';

    export default {
        data() {
            return {
                hoverItem :null,
                cartStore : useCartStore(),
                productsStore : useProductsStore(),
            }
        },
        components : {
            InputNumber : InputNumber
        },
        methods : {
            productIsInCart(product) {
                // Return true if the given product has already been added to cart
                if (this.cartStore.cart.find(element => element.productId === product.productId) != null) {
                    return true;
                }
                return false;
            }
        }
    }
</script>

<template>
    <div justify="center" align="center" style="margin-top: 40px; margin-bottom: 40px;">
        <el-row justify="center" class="products-container" :gutter="20">
            <el-col
                :xs="24" 
                :sm="10" 
                :md="8" 
                :lg="6" 
                v-for="product in productsStore.products" 
                :key="product.productId"
            >
            <div>
                <el-card class="products-container__card" shadow="hover">
                    <div>
                        <img 
                        :src="product.productPicture" 
                        :alt="product.productName" 
                        class="product-image"
                        />
                        <h2 class="product-title">{{product.productName}}</h2>
                    </div>
                    <p class="price">{{(product.productPrice / 100).toFixed(2) + ' ' + '€'}}</p>
                    <div class="bottom">
                        <div
                            v-if="!productIsInCart(product)"
                            @mouseover="hoverItem = product.productId"
                            @mouseleave="hoverItem = null"
                        >
                            <el-button 
                                v-if="hoverItem === product.productId"
                                bounce
                                size="large"
                                style="font-size: base; width: 100%"
                                type="primary"
                                @click="cartStore.addToCart(product);"
                            >
                                Ajouter au panier
                            </el-button>
                            <el-button 
                                v-else
                                size="large"
                                aria-label="ajouter l'article au panier"
                                type="primary"
                                @click="cartStore.addToCart(product);"
                            >
                                <font-awesome-icon icon="fa-cart-shopping"/>
                            </el-button>
                        </div>
                        <InputNumber v-else :product="product"/>
                        <div class="product-check__container" v-if="productIsInCart(product)">
                            <font-awesome-icon size="4x" class="product-check__icon" icon="fa-circle-check" beat/>
                        </div>
                    </div>
                </el-card>
            </div>
            </el-col>
        </el-row>
    </div>
</template>