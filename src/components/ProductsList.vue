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
                <el-card class="card" shadow="hover">
                    <div>
                        <img 
                        :src="product.productPicture" 
                        :alt="product.productName" 
                        class="image"
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

<style>
.products-container {
    width: 70%;
}
.card {
    border-radius: 0;
    margin-bottom:20px;
    height: 400px;
}
.el-card__body {
    position: relative;
    padding: 20px 0 20px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.product-title {
        width: 80%;
    padding: 20px 0 20px 0;
    font-size: 1em;
    font-weight: 300;
}
.product-check__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.product-check__icon {
    --fa-animation-duration: 500ms;
    --fa-animation-iteration-count: 1;
    color: #49A078;
    filter: opacity(1);
    filter: drop-shadow(2px 4px 10px #fff);
}
.bottom {
    width: 100%;
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image {
    height: 200px;
    object-fit: contain;
    width: 100%;
    display: block;
}
.price {
    padding: 0px 10px 0 10px;
    font-weight: 700;
    font-size: 1.2em;
    color: #176162;
}
</style>