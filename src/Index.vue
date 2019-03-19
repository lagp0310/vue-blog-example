<template>
    <!-- TODO: Check and solve Vue Warns in Console about computed properties instead of mutating them. -->
    <v-app>
        <Navbar @showSidenav="showSidenav = true"></Navbar>
        <!-- This is handled by vue-router module. -->
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
        <!-- Sidenav just shows on small screens. -->
        <Sidenav :show.sync="showSidenav"></Sidenav>
    </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidenav from './components/Sidenav.vue';
import Snackbar from './components/Snackbar.vue';

export default {
    data: () => ({
        showEditedCommentSnackbar: false,
        showSidenav: false
    }),
    components: {
        Navbar,
        Sidenav,
        Snackbar
    }
};
</script>

<style lang="scss" scoped>
    
</style>