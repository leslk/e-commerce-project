<script>
    import { useProductsStore } from '../stores/products';
    import { useCartStore } from '../stores/cart';

    export default {
        data() {
            return {
                hoverItem :null,
                cartStore : useCartStore(),
                productsStore : useProductsStore()

            }
        },
        methods : {
            checkItemAddedToCart(item) {
                if (this.cartStore.cart.find(element => element.productId === item.productId) != null) {
                    return true;
                }
                return false;
            },
            addToCart(item) {
                if (this.cartStore.cart.find(element => element.productId === item.productId)) {
                    item.quantity ++;
                } else {
                    item["quantity"] = 1;
                    this.cartStore.cart.push(item);
                }
                alert("l'article à été ajouté au panier")
            },
            handleQuantityUpdate(product, quantity) {
                if (quantity === 0) {
                    let itemIndex = this.cartStore.cart.findIndex(element => element.productId === product.productId);
                    this.cartStore.cart.splice(itemIndex, 1);
                    this.hoverItem = null;
                    alert("l'article à été retiré du panier")
                }
                product.quantity = quantity;
            }
        }
    }
</script>

<template>
    <div justify="center" align="center">
        <el-row justify="center" class="cards-container" :gutter="20">
            <el-col
                :xs="24" 
                :sm="12" 
                :md="8" 
                :lg="6" 
                v-for="product in productsStore.setProductsPriceInEuro" 
                :key="product.productId"
            >
            <div>
                <el-card class="card">
                    <div>
                        <img 
                        :src="product.productPicture" 
                        :alt="product.productName" 
                        class="image"
                        />
                        <h2 class="product-title">{{product.productName}}</h2>
                    </div>
                    <div class="bottom">
                        <p class="price">{{product.productPrice.toFixed(2) + ' ' + '€'}}</p>
                        <div
                            v-if="!checkItemAddedToCart(product)"
                            @mouseover="hoverItem = product.productId"
                            @mouseleave="hoverItem = null"
                        >
                            <el-button 
                                v-if="hoverItem === product.productId"
                                size="large"
                                style="font-size: base"
                                round
                                type="primary"
                                @click="addToCart(product); 
                                cartStore.totalCartPrice;
                                cartStore.countCartItems;"
                            >
                                Ajouter au panier
                            </el-button>
                            <el-button 
                                v-else
                                size="large"
                                aria-label="ajouter l'article au panier"
                                round
                                type="primary"
                                @click="addToCart(product); 
                                cartStore.totalCartPrice;
                                cartStore.countCartItems;
                                checkItemAddedToCart(product);"
                            >
                                <font-awesome-icon icon="fa-cart-shopping"/>
                            </el-button>
                        </div>
                        <el-input-number 
                            class="product__input-quantity"
                            v-else 
                            v-model="product.quantity" 
                            :min="0" 
                            :max="100" 
                            @change="(quantity) => {handleQuantityUpdate(product, quantity)}" 
                        />
                    </div>
                </el-card>
            </div>
            </el-col>
        </el-row>
    </div>
</template>

<style>
.cards-container {
    width: 80%;
}
.card {
    border-radius: 25px;
    margin-bottom:20px;
    height: 420px;
}
.el-card__body {
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
}
.product-title {
    padding: 20px 0 20px 0;
    font-size: 1.2rem;
}
.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
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
    font-size: 1rem;
}

.input-quantity {
    width: 100px;
    color: aliceblue;
}
</style>