<template>
    <!-- Some useful links to check out: 

        https://vuetifyjs.com/en/directives/touch-support
        https://vuetifyjs.com/en/framework/internationalization#internationalization
        https://vuejs.org/v2/guide/deployment.html
        https://jestjs.io/docs/en/setup-teardown
        https://vuex.vuejs.org/guide/testing.html

        Thanks: https://vuejs.org/v2/examples/index.html
        Thanks: https://undraw.co/illustrations
    -->

    <!-- TODO: Illustration improvements on dark theme. -->
    <!-- TODO: Backend for testing. -->
    <v-app :dark="useDarkTheme">
        <Navbar 
            @showSidenav="showSidenav = true" 
            @showWritePost="showWritePost = true" 
        />
        <!-- This is handled by vue-router module. -->
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view />
        <!-- Sidenav just shows on small screens. -->
        <Sidenav 
            :show.sync="showSidenav" 
            @showWritePost="showWritePost = true" 
        />
        <WritePost 
            :show-dialog.sync="showWritePost" 
        />
    </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidenav from './components/Sidenav.vue';
import Snackbar from './components/Snackbar.vue';
import WritePost from './components/WritePost.vue';

export default {
    components: {
        Navbar,
        Sidenav,
        Snackbar,
        WritePost
    },
    data: () => ({
        showEditedCommentSnackbar: false,
        showSidenav: false,
        showWritePost: false
    }),
    computed: {
        useDarkTheme() {
            return(this.$store.state.theme === 'dark' ? true : false);
        }
    }
};
</script>

<style lang="scss">
    #app.theme--light {
        background-color: white;
    }
    #app.theme--dark {
        background-color: #2d2d2d;
    }
</style>