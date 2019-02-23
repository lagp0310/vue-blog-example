<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="title mb-0">{{ post.title }}</h3>
                            </div>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="font-weight-regular body-1">
                            {{ post.body }}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="font-weight-light font-italic text-lowercase"> 
                            Tags: {{ post.tags }}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-title primary-title>
                            <div>
                                <v-layout row>
                                    <v-flex xs2>
                                        <v-avatar
                                        :tile="false"
                                        :size="`80px`"
                                        color="grey lighten-4"
                                        >
                                            <v-img :src="post.author.profileImageSrc" contain alt="avatar"></v-img>
                                        </v-avatar>
                                    </v-flex>
                                    <v-flex xs8 offset-xs1>
                                        <h3 class="title mb-0">{{ post.author.name + ' ' + post.author.lastname }}</h3>
                                        <br />
                                        <div class="font-weight-regular body-1">
                                            About Me: {{ post.author.biography }}
                                            <br />
                                            Contact me: {{ post.author.email }}
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </div>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="font-weight-regular">
                            <v-layout row justify-center>
                                <v-btn flat round color="pink darken-1">
                                    <v-icon>favorite</v-icon>&nbsp;
                                    {{ post.likes }}
                                </v-btn>
                                <v-btn flat round color="blue darken-1">
                                    <v-icon>mdi-message-reply-text</v-icon>&nbsp;
                                    {{ post.comments.length }}
                                </v-btn>
                                <v-btn flat round color="green darken-1"
                                @click="showSharePost = !showSharePost">
                                    <v-icon>share</v-icon>
                                </v-btn>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                    <v-divider></v-divider>
                    <br />
                    <Comment v-for="(comment, id) in post.comments" :key="id" :comment="comment" 
                    :level="level"></Comment>
                    <v-divider></v-divider>
                </v-flex>
            </v-layout>
        </v-container>
        <Share :show.sync="showSharePost"></Share>
    </div>
</template>

<script>
import Comment from './Comment.vue';
import Share from './Share.vue';

export default {
    props: {
        post: Object,
        level: Number,
    },
    data: () => ({
        showSharePost: false,
    }),
    components: {
        Comment,
        Share,
    }
};
</script>

<style lang="scss" scoped>
    
</style>