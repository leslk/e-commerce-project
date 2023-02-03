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
                        class="cart-image"
                        />
                        <h2 class="cart-product-title">{{product.productName}}</h2>
                    </div>
                    <div>
                        <div style="position: absolute; bottom: 10px; right: 10px;">
                            <p class="cart-price">{{(product.productPrice * product.quantity / 100).toFixed(2) + ' ' + '€'}}</p>
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
        </el-row>
        <el-row justify="center" align="bottom">
            <el-col :span="10" style="display: flex; align-items: end; height: 100%;">
                <p class="total">PRIX TOTAL : </p>
                <p class="cart-total-price">{{(cartStore.totalPrice / 100).toFixed(2)}} €</p>
            </el-col>
            <el-col :span="4">
                <el-button style="font-size: 1.2em;" size="large" type="primary">Passer commande</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<style>
.cart-product {
    position: relative;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    background-color: white;
    padding: 0 10px 0 10px;
    height: 100%;
} 
.cart-product-title {
    margin-left: 20px;
    text-align: left;
    width: 60%;
    font-size: 1rem;
}

.cart-image {
    margin: 20px;
    height: 150px;
    width: 50px;
    object-fit: contain;
}
.total {
    font-size: 1.2rem;
    font-weight: 700;
    color: #176162;
}
.cart-price {
    color: #176162;
    white-space: nowrap;
    margin: 30px;
    padding: 0px 10px 0 10px;
    font-weight: 700;
    font-size: 1.2rem;
}
.cart-total-price {
    margin-left: 20px;
    font-size: 1.2rem;
    font-weight: 700;
}
</style>