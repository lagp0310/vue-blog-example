<template>
    <div>
        <v-toolbar dark color="primary" class="mb-4">
            <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="showSidenav = !showSidenav"></v-toolbar-side-icon>
            <v-toolbar-title>Bloggy!</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <!-- This is handled by vue-router. -->
                <!-- use router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
                <router-link tag="v-btn" to="/articles" class="primary v-btn--flat">Articles</router-link>
                <router-link tag="v-btn" to="/about" class="primary v-btn--flat">About Us</router-link>
                <router-link tag="v-btn" to="/contact" class="primary v-btn--flat">Contact</router-link>
                <router-link tag="v-btn" to="/help" class="primary v-btn--flat">Help</router-link>
                <router-link tag="v-btn" to="/signup" class="primary v-btn--flat">Sign Up</router-link>
                <router-link tag="v-btn" to="/login" class="primary v-btn--flat">Login</router-link>
            </v-toolbar-items>
        </v-toolbar>
        <!-- Sidenav just shows on small screens. -->
        <Sidenav v-if="showSidenav" :show="showSidenav"></Sidenav>
    </div>
</template>

<script>
import Sidenav from './Sidenav.vue';

export default {
    data: () => ({
        showSidenav: false,
    }),
    components: {
        Sidenav,
    }
};
</script>

<style lang="scss" scoped>
    
</style>