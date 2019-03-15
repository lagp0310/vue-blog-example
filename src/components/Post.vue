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
                        <v-card-text class="font-weight-light">
                            <v-chip v-for="tag in post.tags" :key="tag.id">
                                {{ tag }}
                            </v-chip>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-title primary-title>
                            <div>
                                <v-layout row>
                                    <v-flex xs2>
                                        <v-avatar
                                        size="80px"
                                        color="grey lighten-4"
                                        >
                                            <v-img :src="author.profileImageSrc" contain alt="avatar" :lazy-src="author.profileImageSrc">
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
                                        </v-avatar>
                                    </v-flex>
                                    <v-flex xs8 offset-xs1>
                                        <h3 class="title mb-0">{{ author.name + ' ' + author.lastname }}</h3>
                                        <br />
                                        <div class="font-weight-regular body-1">
                                            About Me: {{ author.biography }}
                                            <br />
                                            Contact me: {{ author.email }}
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </div>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text class="font-weight-regular">
                            <v-layout row justify-center>
                                <v-btn flat round color="pink darken-1"
                                @click="incrementLikesCounter">
                                    <v-icon v-if="!likePost">mdi-heart-outline</v-icon>&nbsp;
                                    <v-icon v-if="likePost">mdi-heart</v-icon>&nbsp;
                                    {{ post.likes }}
                                </v-btn>
                                <v-btn flat round color="blue darken-1" 
                                @click="goToWriteComment('#write-post-comment')">
                                    <v-icon>mdi-message-reply-text</v-icon>&nbsp;
                                    {{ post.comments.length }}
                                </v-btn>
                                <v-btn v-if="showEditPost(author.authorID)" 
                                round flat color="grey darken-1"
                                @click="editPost(post.postID)">
                                    <v-icon>mdi-pencil</v-icon>&nbsp;
                                </v-btn>
                                <v-btn flat round color="green darken-1"
                                @click="showSharePost = !showSharePost">
                                    <v-icon>mdi-share-variant</v-icon>
                                </v-btn>
                            </v-layout>
                        </v-card-text>
                    </v-card>
                    <v-divider></v-divider>
                    <br />
                    <WriteComment id="write-post-comment" :level="0" 
                    :postComments="postComments" v-on:update="updatePostComments"></WriteComment>
                    <Comment v-for="(comment, id) in post.comments" :key="id" :comment="comment" :level="level"></Comment>
                    <v-divider></v-divider>
                </v-flex>
            </v-layout>
        </v-container>
        <EditPost :post.sync="post" :showDialog.sync="showEditPostModal"></EditPost>
        <Share :show.sync="showSharePost"></Share>
    </div>
</template>

<script>
import Comment from './Comment.vue';
import Share from './Share.vue';
import WriteComment from './WriteComment.vue';
import EditPost from './EditPost.vue';
import Snackbar from './Snackbar.vue';

export default {
    props: {
        author: {
            type: Object,
            required: true
        },
        post: {
            type: Object,
            required: true
        },
        level: {
            type: Number,
            required: true
        }
    },
    data: () => ({
        postComments: [],
        showSharePost: false,
        likePost: false,
        showEditPostModal: false
    }),
    mounted() {
        this.$data.postComments = this.$props.post.comments;
    },
    methods: {
        incrementLikesCounter() {
            if(this.likePost) {
                this.$props.post.likes--;
            } else {
                this.$props.post.likes++;
            }

            this.likePost = !this.likePost;
            this.$forceUpdate();
        },
        updatePostComments(newComment) {
            this.$props.post.comments.unshift(newComment);
        },
        goToWriteComment(ref) {
            location.href = ref;
        },
        showEditPost(authorID) {
            return this.$store.state.user.userID === authorID;
        },
        editPost(postID) {
            this.$data.showEditPostModal = true;
        }
    },
    components: {
        Comment,
        Share,
        WriteComment,
        EditPost,
        Snackbar
    }
};
</script>

<style lang="scss" scoped>
    
</style>