<template>
    <div>
        <v-toolbar dark color="primary" class="mb-4">
            <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="showSidenav = !showSidenav"></v-toolbar-side-icon>
            <v-img text-xs-center src="/public/images/logo/1/logo_transparent.png" alt="Bloggy Logo" max-width="150px" contain></v-img>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <!-- This is handled by vue-router. -->
                <!-- use router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
                <router-link tag="v-btn" to="/articles" class="primary v-btn--flat">Articles</router-link>
                <router-link tag="v-btn" to="/about" class="primary v-btn--flat">About Us</router-link>
                <router-link tag="v-btn" to="/contact" class="primary v-btn--flat">Contact</router-link>
                <router-link v-if="!isLoggedIn" tag="v-btn" to="/signup" class="primary v-btn--flat">Signup</router-link>
                <router-link v-if="!isLoggedIn" tag="v-btn" to="/login" class="primary v-btn--flat">Login</router-link>
                <v-menu
                v-if="isLoggedIn"
                transition="slide-y-transition"
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
                >
                    <span slot="activator" color="primary" dark>
                        <v-avatar
                        :tile="false"
                        :size="`40px`"
                        color="grey lighten-4"
                        >
                            <v-img src="https://randomuser.me/api/portraits/men/86.jpg" contain alt="avatar"></v-img>
                        </v-avatar>
                    </span>
                    <v-card>
                        <v-list>
                            <v-list-tile avatar>
                                <v-list-tile-avatar>
                                    <v-img :src="usersProfilePictureSrc" alt="User Profile Picture"></v-img>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ usersName }}</v-list-tile-title>
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <v-btn
                                    icon
                                    @click="goToRoute('/users/1'), menu = false"
                                    >
                                        <v-icon>mdi-settings</v-icon>
                                    </v-btn>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list>
                        <v-divider></v-divider>
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-switch v-model="notifications" color="blue"></v-switch>
                                </v-list-tile-action>
                                <v-list-tile-title>Enable Notifications</v-list-tile-title>
                            </v-list-tile>
                            <v-list-tile>
                                <v-list-tile-action>
                                <v-switch v-model="darkMode" color="blue"></v-switch>
                                </v-list-tile-action>
                                <v-list-tile-title>Enable Dark Mode</v-list-tile-title>
                            </v-list-tile>
                        </v-list>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat @click="menu = false">Close</v-btn>
                            <v-btn color="red" flat 
                            @click="menu = false, changeLoggedInState(), goToRoute('/')">
                                Logout
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
        <!-- Sidenav just shows on small screens. -->
        <Sidenav v-if="showSidenav" :show.sync="showSidenav"></Sidenav>
    </div>
</template>

<script>
import Sidenav from './Sidenav.vue';

export default {
    data: () => ({
        showSidenav: false,
        darkMode: false,
        notifications: false,
        menu: false
    }),
    methods: {
        goToRoute(ref) {
            this.$router.replace(ref);
        },
        changeLoggedInState() {
            this.$store.commit('changeLoggedInStatus');
        }
    },
    components: {
        Sidenav,
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
};
</script>

<style lang="scss" scoped>
    
</style>