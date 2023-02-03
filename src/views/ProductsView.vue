<script>
    import ProductsList from '../components/productsList.vue';
    import Footer from '../components/Footer.vue';

    export default {
        components: {
            ProductsList: ProductsList,
            Footer: Footer
        } 
    }
</script>

<template>
    <div>
        <div class="product-banner">
            <h1 class="product-banner__text">Faites vos courses en toute simplicité,<br/> Easy Food Shop s'occupe de tout</h1>
        </div>
        <el-main>
            <ProductsList/>
        </el-main>
    </div>
    <Footer/>
</template>
