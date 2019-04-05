<template>
    <!-- https://forum.vuejs.org/t/computed-properties-in-data/11231 -->
    <div>
        <v-toolbar 
            dark 
            :color="getNavbarColorAccordingTheme" 
            class="mb-4"
        >
            <v-toolbar-side-icon 
                class="hidden-md-and-up" 
                @click.stop="$emit('showSidenav');" 
            />
            <v-img 
                src="/public/images/logos/1/logo_transparent.png" 
                alt="Bloggy Logo" 
                max-width="150px" 
                contain 
                lazy-src="/public/images/logos/1/logo_transparent.png"
            >
                <template v-slot:placeholder>
                    <v-layout
                        fill-height
                        align-center
                        justify-center
                        ma-0
                    >
                        <v-progress-circular 
                            indeterminate 
                            color="grey" 
                        />
                    </v-layout>
                </template>
            </v-img>
            <v-spacer />
            <v-toolbar-items class="hidden-sm-and-down">
                <!-- This is handled by vue-router. -->
                <!-- use router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- `<router-link>` will be rendered as an `<a>` tag by default -->                    
                <v-btn 
                    v-if="isLoggedIn" 
                    :class="[getNavbarColorAccordingTheme, 'v-btn--flat']" 
                    @click="$emit('showWritePost')"
                >
                    New Post
                </v-btn>
                <router-link 
                    tag="v-btn" 
                    to="/articles" 
                    :class="[getNavbarColorAccordingTheme, 'v-btn--flat']"
                >
                    Articles
                </router-link>
                <router-link 
                    tag="v-btn" 
                    to="/about" 
                    :class="[getNavbarColorAccordingTheme, 'v-btn--flat']"
                >
                        About Us
                </router-link>
                <router-link 
                    tag="v-btn" 
                    to="/contact" 
                    :class="[getNavbarColorAccordingTheme, 'v-btn--flat']"
                >
                        Contact
                </router-link>
                <router-link 
                    v-if="!isLoggedIn" 
                    tag="v-btn" to="/signup" 
                    :class="[getNavbarColorAccordingTheme, 'v-btn--flat']"
                >
                        Signup
                </router-link>
                <router-link 
                    v-if="!isLoggedIn" 
                    tag="v-btn" to="/login" 
                    :class="[getNavbarColorAccordingTheme, 'v-btn--flat']"
                >
                        Login
                </router-link>
                <v-menu
                    v-if="isLoggedIn"
                    transition="slide-y-transition"
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-x
                >
                    <span 
                        slot="activator" 
                        color="primary" 
                        dark
                    >
                        <v-avatar
                            size="40px"
                            color="grey lighten-4"
                        >
                            <v-img 
                                :src="usersProfilePictureSrc" 
                                contain 
                                alt="avatar" 
                                :lazy-src="usersProfilePictureSrc"
                            >
                                <template v-slot:placeholder>
                                    <v-layout
                                        fill-height
                                        align-center
                                        justify-center
                                        ma-0
                                    >
                                        <v-progress-circular 
                                            indeterminate 
                                            color="grey" 
                                        />
                                    </v-layout>
                                </template>
                            </v-img>
                        </v-avatar>
                    </span>
                    <v-card>
                        <v-list>
                            <v-list-tile avatar>
                                <v-list-tile-avatar>
                                    <v-img 
                                        :src="usersProfilePictureSrc" 
                                        alt="User Profile Picture" 
                                    />
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
                        <v-divider />
                        <v-list>
                            <v-list-tile>
                                <v-list-tile-title>{{ getEnableDisableDarkModeText }}</v-list-tile-title>
                                <v-list-tile-action>
                                    <v-switch 
                                        v-model="darkMode" 
                                        color="blue" 
                                    />
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list>
                        <v-card-actions>
                            <v-spacer />
                            <v-btn 
                                flat 
                                @click="menu = false"
                            >
                                Close
                            </v-btn>
                            <v-btn 
                                color="red" 
                                flat 
                                @click="menu = false, changeLoggedInState(), goToRoute('/')"
                            >
                                Logout
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            darkMode: false,
            menu: false
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
        },
        getNavbarColorAccordingTheme() {
            return(this.$store.state.theme === 'dark' ? 'grey darken-3' : 'primary');
        },
        getEnableDisableDarkModeText() {
            return(this.$store.state.theme === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode');
        },
        isDarkThemeEnabled() {
            return(this.$store.state.theme === 'dark');
        }
    },
    watch: {
        darkMode: function() {
            this.$store.commit('changeTheme');
        }
    },
    created() {
        this.$data.darkMode = this.isDarkThemeEnabled;
    },
    methods: {
        goToRoute(ref) {
            this.$router.replace(ref);
        },
        changeLoggedInState() {
            this.$store.commit('changeLoggedInStatus');
        }
    }
};
</script>

<style lang="scss" scoped>

</style>