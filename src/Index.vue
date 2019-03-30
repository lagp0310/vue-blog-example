<template>
    <!-- 
        Thanks: https://vuejs.org/v2/examples/index.html (Markdown Editor)
        Thanks: https://undraw.co/illustrations (Illustrations)
    -->

    <!-- TODO: Internationalization: 
        http://kazupon.github.io/vue-i18n/ 
        https://vuetifyjs.com/en/framework/internationalization#create-translation
    -->
    <v-app 
        :dark="useDarkTheme"
        v-touch="{
            left: () => toggleSidenav(false),
            right: () => toggleSidenav(true)
        }">
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
    },
    methods: {
        toggleSidenav(showOrHide) {
            this.$data.showSidenav = showOrHide;
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