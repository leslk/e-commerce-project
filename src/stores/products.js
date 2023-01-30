import { defineStore } from "pinia";
import  productsList from "../assets/products.json";

export const useProductsStore = defineStore('products', {
    state() {
        return {
            products: productsList
        }
    },
    getters: {
        setProductsPriceInEuro() {
            let products = [];
            for (let product of this.products) {
                product.productPrice = product.productPrice / 100;
                products.push(product);
            }
            return products;
        }
    }
});