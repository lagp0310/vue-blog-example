<template>
    <!-- https://forum.vuejs.org/t/computed-properties-in-data/11231 -->
    <v-container>
        <v-layout wrap>
            <v-navigation-drawer
                v-model="showSidenav"
                absolute
                temporary
            >
                <v-list class="pa-1">
                    <div v-if="isLoggedIn">
                        <v-list-tile 
                            avatar 
                            :class="[getSidenavElementsColorAccordingTheme, 'v-btn--flat']"
                        >
                            <v-list-tile-avatar>
                                <v-img 
                                    :src="authorsProfilePictureSrc" 
                                    alt="Author Profile Picture" 
                                    :lazy-src="authorsProfilePictureSrc"
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
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ authorsName }}</v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-btn 
                                    icon 
                                    @click="goToRoute(getAuthorsProfileURL), showSidenav = false"
                                >
                                    <v-icon>mdi-settings</v-icon>
                                </v-btn>
                            </v-list-tile-action>
                        </v-list-tile>
                        <v-divider />
                        <v-list-tile>
                            <v-list-tile-title>{{ getEnableDisableDarkModeText }}</v-list-tile-title>
                            <v-list-tile-action>
                                <v-switch 
                                    v-model="darkMode" 
                                    color="blue" 
                                />
                            </v-list-tile-action>
                        </v-list-tile>
                    </div>
                    <v-container 
                        v-if="!isLoggedIn" 
                        justify-center
                    >
                        <v-layout row>
                            <v-flex xs10>
                                <v-img 
                                    v-if="isLightThemeEnabled" 
                                    src="/public/images/logos/2/logo_transparent.png" 
                                    alt="Bloggy Logo" 
                                    max-height="120px" 
                                    contain 
                                    lazy-src="/public/images/logos/2/logo_transparent.png"
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
                                <v-img 
                                    v-if="isDarkThemeEnabled" 
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
                            </v-flex>
                            <v-flex xs2>
                                <v-btn 
                                    icon 
                                    flat 
                                    @click="showSidenav = false"
                                >
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-list>
                <v-list 
                    class="pt-0" 
                    dense
                >
                    <v-divider />
                    <v-list-tile 
                        v-if="isLoggedIn" 
                        tag="a" 
                        flat 
                        @click="$emit('showWritePost')"
                    >
                        <v-list-tile-action>
                            <v-icon>mdi-pencil</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>New Post</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider v-if="isLoggedIn" />
                    <div 
                        v-for="item in items" 
                        :key="item.id"
                    >
                        <v-list-tile 
                            v-if="showHideLink(item.showOnLoggedIn)"
                            tag="a" 
                            :to="item.to" 
                            :class="[getSidenavElementsColorAccordingTheme, 'v-btn--flat']" 
                            @click="showSidenav = false"
                        >
                            <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </div>
                    <v-list-tile 
                        v-if="isLoggedIn" 
                        tag="a" 
                        color="red" 
                        flat
                        @click="changeLoggedInState(), goToRoute('/'), showSidenav = false"
                    >
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
        show: {
            type: Boolean,
            required: true
        }
    },
    data: function() {
        return {
            darkMode: false,
            showSidenav: false,
            items: [
                { title: 'Articles', icon: 'mdi-view-dashboard', to: '/articles', showOnLoggedIn: true },
                { title: 'About Us', icon: 'mdi-information', to: '/about', showOnLoggedIn: true },
                { title: 'Contact', icon: 'mdi-account-box', to: '/contact', showOnLoggedIn: true },
                { title: 'Signup', icon: 'mdi-account-plus', to: '/signup', showOnLoggedIn: false },
                { title: 'Login', icon: 'mdi-login-variant', to: '/login', showOnLoggedIn: false }
            ]
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        },
        authorsName() {
            return this.$store.state.author.name + ' ' + this.$store.state.author.lastname;
        },
        authorsProfilePictureSrc() {
            return this.$store.state.author.profileImageSrc;
        },
        getCurrentTheme() {
            return this.$store.state.theme;
        },
        getSidenavElementsColorAccordingTheme() {
            return(this.$store.state.theme === 'dark' ? 'grey darken-3' : 'white');
        },
        getEnableDisableDarkModeText() {
            return(this.$store.state.theme === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode');
        },
        isLightThemeEnabled() {
            return(this.$store.state.theme === 'light');
        },
        isDarkThemeEnabled() {
            return(this.$store.state.theme === 'dark');
        },
        getAuthorsProfileURL() {
            return '/my-profile';
        }
    },
    watch: {
        show: function(newValue) {
            this.$data.showSidenav = newValue;
            this.$emit('update:show', newValue);
        },
        showSidenav: function(newValue) {
            this.$emit('update:show', newValue);
        },
        darkMode: function() {
            this.$store.commit('changeTheme');
        }
    },
    created() {
        this.$data.darkMode = this.isDarkThemeEnabled;
        this.$data.showSidenav = this.show;
    },
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
    }
}
</script>

<style lang="scss" scoped>
    
</style>