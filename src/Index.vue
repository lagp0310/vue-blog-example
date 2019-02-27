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
import Article from './components/Article.vue';

// const user = {
//     name: 'Test',
//     lastname: 'Tested',
//     email: 'test@example.com',
//     gender: 'male',
//     profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg',
// };

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