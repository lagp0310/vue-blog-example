<template>
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
import Snackbar from './components/Snackbar.vue';

export default {
    data: () => ({
        showEditedCommentSnackbar: false
    }),
    components: {
        Navbar,
        Snackbar
    }
};
</script>

<style lang="scss" scoped>
    
</style>