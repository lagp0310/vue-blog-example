<template>
    <v-container @click="$emit('update:show', false)">
        <v-layout wrap>
            <v-navigation-drawer
            v-model="show"
            absolute
            temporary
            >
                <v-list class="pa-1">
                    <v-list-tile avatar class="white v-btn--flat">
                        <v-list-tile-avatar>
                            <v-img v-if="!isLoggedIn" src="/public/logo.png" alt="Bloggy Logo"></v-img>
                            <v-img v-if="isLoggedIn" :src="usersProfilePictureSrc" alt="User Profile Picture"></v-img>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title v-if="!isLoggedIn">Bloggy!</v-list-tile-title>
                            <v-list-tile-title v-if="isLoggedIn">{{ usersName }}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action v-if="isLoggedIn">
                            <v-btn icon>
                                <v-icon @click="goToRoute('/users/1')">mdi-settings</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
                <v-list class="pt-0" dense>
                    <v-divider></v-divider>
                    <div v-for="item in items" :key="item.title" @click="$emit('update:show', false)">
                        <v-list-tile v-if="showHideLink(item.showOnLoggedIn)"
                        tag="a" :to="item.to" class="white v-btn--flat">
                            <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </div>
                    <v-list-tile v-if="isLoggedIn" tag="a" color="red" flat
                    @click="changeLoggedInState(), goToRoute('/')">
                        <v-list-tile-action>
                            <v-icon>mdi-logout-variant</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Logout</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>              
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: {
        show: Boolean
    },
    data: () => ({
        items: [
            { title: 'Articles', icon: 'mdi-view-dashboard', to: '/', showOnLoggedIn: true },
            { title: 'About Us', icon: 'mdi-information', to: '/about', showOnLoggedIn: true },
            { title: 'Contact', icon: 'mdi-account-box', to: '/contact', showOnLoggedIn: true },
            { title: 'Signup', icon: 'mdi-account-plus', to: '/signup', showOnLoggedIn: false },
            { title: 'Login', icon: 'mdi-login-variant', to: '/login', showOnLoggedIn: false }
        ]
    }),
    methods: {
        goToRoute(ref) {
            this.$router.replace(ref);
        },
        changeLoggedInState() {
            this.$store.commit('changeLoggedInStatus');
        },
        showHideLink(showOnLoggedIn) {
            return((this.isLoggedIn && showOnLoggedIn) || !this.isLoggedIn);
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        },
        usersName() {
            return this.$store.state.user.name + ' ' + this.$store.state.user.lastname;
        },
        usersProfilePictureSrc() {
            return this.$store.state.user.profileImageSrc;
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>