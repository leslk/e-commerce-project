import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state() {
        return {
            cart : [],
            totalPrice: 0,
            totalQuantity : 0
        }
    }
});