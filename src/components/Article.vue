<template>
    <div>
        <v-layout row>
            <v-flex xs12 sm8 offset-sm2 lg6 offset-lg3>
                <v-hover>
                    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                        <v-img
                        :src="article.articleImageSrc"
                        :lazy-sc="article.articleImageSrc"
                        height="200px"
                        >
                            <template v-slot:placeholder>
                                <v-layout
                                fill-height
                                align-center
                                justify-center
                                ma-0
                                >
                                    <v-progress-circular indeterminate color="grey"></v-progress-circular>
                                </v-layout>
                            </template>
                        </v-img>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">{{ article.title }}</div>
                                <div class="text-xs-left grey--text">
                                    <v-avatar
                                    :tile="false"
                                    :size="`30px`"
                                    color="grey lighten-4"
                                    >
                                        <v-img :src="article.profileImageSrc" contain alt="avatar"></v-img>
                                    </v-avatar>
                                    {{ article.author }}
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat icon color="pink darken-1"
                            @click="likeArticle = !likeArticle">
                                <v-icon v-if="!likeArticle">mdi-heart-outline</v-icon>
                                <v-icon v-if="likeArticle">mdi-heart</v-icon>
                            </v-btn>
                            <v-btn flat icon color="green darken-1"
                            @click="showShare = !showShare">
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                            <v-btn flat icon color="grey darken-1"
                            :to="article.articleLink"
                            @click.native="scrollToTop()">
                                <v-icon>mdi-dots-horizontal</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
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
        likeArticle: false,
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