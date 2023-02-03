<script>
    import { useProductsStore } from '../stores/products';
    import { useCartStore } from '../stores/cart';

    export default {
        props: ["product"],
        data() {
            return {
                cartStore : useCartStore(),
                productsStore : useProductsStore()
            }
        }
    }
</script>

<template>
    <div>        
        <el-input-number 
            size="small" 
            :min="0" 
            :max="100" 
            v-model="product.quantity" 
            @change="(quantity) => 
                {  
                    cartStore.handleQuantityUpdate(product, quantity); 
                    quantity === 0 ? hoverItem = null : hoverItem;
                    cartStore.setCartTotalPrice;
                    cartStore.setCartProductsQuantity;
                }"
        />
    </div>
</template>