import { defineStore } from "pinia";
import  productsList from "../assets/products.json";

export const useProductsStore = defineStore('products', {
    state() {
        return {
            products: productsList
        }
    }
});