<template>
    <div>
        <v-layout row>
            <v-flex 
                xs12 
                sm8 
                offset-sm2 
                lg6 
                offset-lg3
            >
                <v-hover>
                    <v-card 
                        :loading="article.loading"
                        slot-scope="{ hover }" 
                        :class="`elevation-${hover ? 12 : 2}`"
                    >
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
                                    <v-progress-circular 
                                        indeterminate 
                                        color="grey" 
                                    />
                                </v-layout>
                            </template>
                        </v-img>
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">{{ article.title }}</div>
                                <div 
                                    v-if="!article.loading"
                                    class="text-xs-left grey--text"
                                >
                                    <v-avatar
                                        size="30px"
                                        color="grey lighten-4"
                                    >
                                        <v-img 
                                            :src="article.author.picture.large" 
                                            contain 
                                            alt="avatar" 
                                            :lazy-src="article.author.picture.large"
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
                                                        :size="20" 
                                                    />
                                                </v-layout>
                                            </template>
                                        </v-img>
                                    </v-avatar>
                                    {{ getAuthorsFullName }}
                                </div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn 
                                        :disabled="article.loading"
                                        flat 
                                        icon 
                                        color="pink darken-1"
                                        v-on="on"
                                        @click="likeArticle = !likeArticle"
                                    >
                                        <v-icon v-if="!likeArticle">mdi-heart-outline</v-icon>
                                        <v-icon v-if="likeArticle">mdi-heart</v-icon>
                                    </v-btn>
                                </template>
                                <span>Like</span>
                            </v-tooltip>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn 
                                        :disabled="article.loading"
                                        flat 
                                        icon 
                                        color="green darken-1"
                                        v-on="on"
                                        @click="showShare = !showShare"
                                    >
                                        <v-icon>mdi-share-variant</v-icon>
                                    </v-btn>
                                </template>
                                <span>Share</span>
                            </v-tooltip>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn 
                                        :disabled="article.loading"
                                        flat 
                                        icon 
                                        color="grey darken-1"
                                        :to="article.articleLink"
                                        v-on="on"
                                        @click.native="scrollToTop()"
                                    >
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                    </v-btn>
                                </template>
                                <span>Read More</span>
                            </v-tooltip>
                            <v-spacer />
                        </v-card-actions>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
        <Share :show.sync="showShare" />
    </div>
</template>

<script>
import Share from './Share.vue';

export default {
    components: {
        Share
    },
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        showShare: false,
        likeArticle: false
    }),
    computed: {
        getAuthorsFullName() {
            return this.$props.article.author.name.first + ' ' + this.$props.article.author.name.last;
        }
    },
    methods: {
        scrollToTop() {
            this.$nextTick(function() {
                this.$vuetify.goTo(0);
            });
        }
    }
};
</script>

<style lang="scss" scoped>
    
</style>