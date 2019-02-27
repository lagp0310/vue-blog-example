<template>
    <v-container>
        <v-layout wrap>
            <v-navigation-drawer
            v-model="show"
            absolute
            temporary
            >
                <v-list class="pa-1">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <v-img v-if="isLoggedIn" src="https://randomuser.me/api/portraits/men/86.jpg"></v-img>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title v-if="!isLoggedIn">Bloggy!</v-list-tile-title>
                            <v-list-tile-title v-if="isLoggedIn"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
                <v-list class="pt-0" dense>
                    <v-divider></v-divider>
                    <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    @click="$emit('update:show', false)"
                    >
                        <router-link tag="v-btn" :to="item.to" class="white v-btn--flat">
                            <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </router-link>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: {
        show: Boolean,
        user: Object
    },
    data: () => ({
        items: [
            { title: 'Articles', icon: 'mdi-view-dashboard', to: '/' },
            { title: 'About Us', icon: 'mdi-information', to: '/about' },
            { title: 'Contact', icon: 'mdi-account-box', to: '/contact' },
            { title: 'Signup', icon: 'mdi-account-plus', to: '/signup' },
            { title: 'Login', icon: 'mdi-login-variant', to: '/login' },
        ]
    }),
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>