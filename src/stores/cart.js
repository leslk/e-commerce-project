import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state() {
        return {
            cart : [],
            totalPrice: 0,
            totalQuantity : 0
        }
    },
    getters: {
        // Get cart total quantity
        countCartItems() {
            this.totalQuantity = 0;
            for (let item of this.cart) {
                let totalQuantity = item.quantity;
                this.totalQuantity += totalQuantity;
            }
        },
        // Get cart total price
        totalCartPrice() {
            this.totalPrice = 0;
            for (let item of this.cart) {
                let productTotalPrice = item.productPrice * item.quantity;
                this.totalPrice += productTotalPrice;
            }
        }
    }
});