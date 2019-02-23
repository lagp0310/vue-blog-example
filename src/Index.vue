<template>
    <v-app>
        <Navbar></Navbar>
        <!-- This is handled by vue-router module. -->
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Article from './components/Article.vue';

export default {
    data: () => ({
        //
    }),
    components: {
        Navbar,
        Article,
    }
};
</script>

<style lang="scss" scoped>
    
</style>