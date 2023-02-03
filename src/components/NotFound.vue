<script>
import Footer from './Footer.vue';

export default {
    components: {
        Footer: Footer
    }
}
</script>

<template>
    <div class="notfound-container">
        <el-main>
            <img src="../assets/not-found.png" alt="erreur 404 image" />
        </el-main>
    </div>
    <Footer/>
</template>