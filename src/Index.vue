<template>
    <!-- TODO: Property validation in props object for each component. -->
    <!-- TODO: Markdown syntax to write Post. Same for EditPost and Comments. -->
    <!-- TODO: Check Vue's Style Guide. -->
    <!-- TODO: Implement light and dark themes. -->
    <v-app>
        <Navbar @showSidenav="showSidenav = true" @showWritePost="showWritePost = true"></Navbar>
        <!-- This is handled by vue-router module. -->
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
        <!-- Sidenav just shows on small screens. -->
        <Sidenav :show.sync="showSidenav" @showWritePost="showWritePost = true"></Sidenav>
        <WritePost :showDialog.sync="showWritePost"></WritePost>
    </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidenav from './components/Sidenav.vue';
import Snackbar from './components/Snackbar.vue';
import WritePost from './components/WritePost.vue';

export default {
    data: () => ({
        showEditedCommentSnackbar: false,
        showSidenav: false,
        showWritePost: false
    }),
    components: {
        Navbar,
        Sidenav,
        Snackbar,
        WritePost
    }
};
</script>

<style lang="scss" scoped>
    
</style>