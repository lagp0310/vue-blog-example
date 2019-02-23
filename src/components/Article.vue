<template>
    <div>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-hover>
                    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                        <v-img
                        :src="article.articleImageSrc"
                        height="200px"
                        >
                        </v-img>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">{{ article.title }}</div>
                                <div class="text-xs-left grey--text">
                                    <v-avatar
                                    :tile="false"
                                    :size="`40px`"
                                    color="grey lighten-4"
                                    >
                                        <v-img :src="article.profileImageSrc" contain alt="avatar"></v-img>
                                    </v-avatar>
                                    <!-- <v-icon>account_circle</v-icon> -->
                                    {{ article.author }}
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn color="v-btn--flat green--text text--darken-2"
                            @click="showShare = !showShare">
                                <v-icon>share</v-icon>&nbsp;
                                Share
                            </v-btn>
                            <router-link 
                            tag="v-btn" 
                            class="v-btn--flat primary--text text--darken-2" 
                            :to="article.articleLink"
                            @click.native="scrollToTop()">
                                Read More...
                            </router-link>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="article.show = !article.show">
                                <v-icon>{{ article.show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-slide-y-transition>
                            <v-card-text v-show="article.show">
                                {{ article.captionText }}
                            </v-card-text>
                        </v-slide-y-transition>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
        <Share :show.sync="showShare"></Share>
    </div>
</template>

<script>
import Share from './Share.vue';

export default {
    props: {
        article: Object,
    },
    data: () => ({
        showShare: false,
    }),
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }, 
    components: {
        Share,
    }
};
</script>

<style lang="scss" scoped>
    
</style>