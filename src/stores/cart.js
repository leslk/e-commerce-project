import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state() {
        return {
            cart : [],
            totalPrice: 0,
            totalQuantity : 0,
        }
    },
    getters: {
        setCartProductsQuantity() {
            // Update totalQuantity variable to current products quantity in cart
            this.totalQuantity = 0;
            for (let product of this.cart) {
                this.totalQuantity += product.quantity;
            }
        },

        setCartTotalPrice() {
            // Update totalPrice variable to current total price in cart
            this.totalPrice = 0;
            for (let product of this.cart) {
                let productTotalPrice = product.productPrice * product.quantity;
                this.totalPrice += productTotalPrice;
            }
        }
    },
    actions : {
        removeFromCart(product) {
            // Remove a specific product from cart
            const productIndex = this.cart.findIndex(element => element.productId === product.productId);
            this.cart.splice(productIndex, 1);

            // Update cart total price and quantity
            this.setCartTotalPrice;
            this.setCartProductsQuantity;
        },

        addToCart(product) {
            // Add a specific product to cart 
            product["quantity"] = 1;
            this.cart.push(product);

            // Update cart total price and quantity
            this.setCartTotalPrice;
            this.setCartProductsQuantity;
        },

        handleQuantityUpdate(product, quantity) {
            // Update product quantity. If quantity is set to 0, remove the product from cart
            if (quantity === 0) {
                // Remove product from cart
                this.removeFromCart(product);
            } else {
                // Update product quantity
                product.quantity = quantity;
            }
        }
    }
});