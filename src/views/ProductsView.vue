<script>
    import ProductsList from '../components/productsList.vue';

    export default {
        components: {
            ProductsList: ProductsList
        } 
    }
</script>

<template>
    <div>
        <div class="banner">
            <h1 class="banner-text">Faites vos courses en toute simplicité,<br/> Easy Food Shop s'occupe de tout</h1>
        </div>
        <el-main>
            <ProductsList/>
        </el-main>
    </div>
</template>

<style>
.banner {
    background: url("../assets/banner.jpeg") no-repeat;
    background-size: cover;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.banner-text {
    padding: 20px;
    text-shadow: 3px 4px 2px #474747, 2px 2px 2px rgba(0,0,0,0);
    width: 80%;
    font-weight: 500;
    text-align: center;
    color: white;
}

</style>