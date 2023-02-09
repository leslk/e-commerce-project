<script>
import Footer from './Footer.vue';

export default {
    components: {
        Footer: Footer
    }
}
</script>

<template>
    <div class="notfound-container" style="flex-grow: 1;">
        <el-main >
            <img class="notfound-image" src="../assets/not-found.png" alt="erreur 404 image" />
        </el-main>
    </div>
    <Footer/>
</template>