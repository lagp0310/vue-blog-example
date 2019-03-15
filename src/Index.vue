<template>
    <!-- TODO: Better property validation for each Component. -->
    <!-- TODO: Snackbar stack. -->
    <v-app>
        <Navbar></Navbar>
        <!-- This is handled by vue-router module. -->
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
    </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
    data: () => ({
        //
    }),
    components: {
        Navbar
    }
};
</script>

<style lang="scss" scoped>
    
</style>