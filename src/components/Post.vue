<template>
    <div>
        <div v-if="loading" class="d-flex justify-center">
            <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
            ></v-progress-circular>
        </div>
        <v-container v-if="post && author">
            <v-layout 
                row 
                wrap
            >
                <v-flex xs12>
                    <v-card>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="title mb-0">{{ post.title }}</h3>
                            </div>
                        </v-card-title>
                        <v-divider />
                        <v-card-text 
                            class="font-weight-regular body-1" 
                            v-html="compiledMarkdown(post.body)" 
                        ></v-card-text>
                        <v-divider />
                        <v-card-text class="font-weight-light">
                            <v-chip 
                                v-for="tag in post.tags" 
                                :key="tag.id" 
                                v-ripple
                            >
                                {{ tag }}
                            </v-chip>
                        </v-card-text>
                        <v-divider />
                        <v-card-title primary-title>
                            <div>
                                <v-layout row>
                                    <v-flex xs2>
                                        <v-avatar
                                            size="80px"
                                            color="grey lighten-4"
                                        >
                                            <v-img 
                                                :src="author.picture.large" 
                                                contain 
                                                alt="avatar" 
                                                :lazy-src="author.picture.large"
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
                                    </v-flex>
                                    <v-flex 
                                        xs8 
                                        offset-xs1
                                    >
                                        <h3 class="title mb-0">{{ getAuthorFullname }}</h3>
                                        <br />
                                        <div class="font-weight-regular body-1">
                                            About Me: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <br />
                                            Contact me: {{ author.email }}
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </div>
                        </v-card-title>
                        <v-divider />
                        <v-card-text class="font-weight-regular">
                            <v-container 
                                grid-list-md 
                                text-xs-center
                            >
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn 
                                            flat 
                                            round 
                                            color="pink darken-1"
                                            @click="incrementLikesCounter"
                                        >
                                            <v-icon v-if="!likePost">mdi-heart-outline</v-icon>&nbsp;
                                            <v-icon v-if="likePost">mdi-heart</v-icon>&nbsp;
                                            {{ post.likes }}
                                        </v-btn>
                                        <v-btn 
                                            flat 
                                            round 
                                            color="blue darken-1" 
                                            @click="writeComment()"
                                        >
                                            <v-icon>mdi-message-reply-text</v-icon>&nbsp;
                                            {{ post.comments.length }}
                                        </v-btn>
                                        <v-btn 
                                            v-if="showEditPost(author.authorID)" 
                                            round 
                                            flat 
                                            color="grey darken-1"
                                            @click="editPost(post.postID)"
                                        >
                                            <v-icon>mdi-pencil</v-icon>&nbsp;
                                        </v-btn>
                                        <v-btn 
                                            flat 
                                            round 
                                            color="green darken-1"
                                            @click="showSharePost = !showSharePost"
                                        >
                                            <v-icon>mdi-share-variant</v-icon>
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                    </v-card>
                    <v-divider />
                    <br />
                    <WriteComment 
                        v-if="isLoggedIn"
                        id="write-post-comment" 
                        :post-comments.sync="post.comments" 
                        @updatedComments="$forceUpdate(), scrollToLastPostedComment()"
                    ></WriteComment>
                    <PostComment 
                        v-for="(comment, id) in post.comments" 
                        :key="id" 
                        :comment="comment" 
                        :level="startingCommentLevel"
                    ></PostComment>
                    <v-divider />
                </v-flex>
            </v-layout>
        </v-container>
        <EditPost 
            v-if="!loading"
            :post.sync="post" 
            :show-dialog.sync="showEditPostModal" 
        />
        <Share :show.sync="showSharePost" />
    </div>
</template>

<script>
import PostComment from './PostComment.vue';
import Share from './Share.vue';
import WriteComment from './WriteComment.vue';
import EditPost from './EditPost.vue';

import DOMPurify from 'dompurify';
import marked from 'marked';

import { 
    getRandomAuthor, 
    getPostById, 
    getCommentsForPost,
    getRandomLoremIpsumMarkdown
} from '../utils/util.js';

export default {
    components: {
        PostComment,
        Share,
        WriteComment,
        EditPost
    },
    props: {
        postId: {
            type: String,
            required: true
        },
        startingCommentLevel: {
            type: Number,
            required: true
        }
    },
    data: () => ({
        showSharePost: false,
        likePost: false,
        showEditPostModal: false,
        loading: true,
        post: null,
        author: null
    }),
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        },
        getAuthorFullname() {
            return this.author.name.first + ' ' + this.author.name.last;
        }
    },
    // https://router.vuejs.org/guide/advanced/data-fetching.html
    mounted() {
        if(this.$router.currentRoute.query.section) {
            this.$vuetify.goTo('#'.concat(this.$router.currentRoute.query.section));
            this.goToRef('#'.concat(this.$router.currentRoute.query.section));
        }

        // Get Post data.
        getPostById(this.$props.postId).then((post) => {
            this.post = post;

            getRandomAuthor().then((author) => {
                this.author = author;
            });

            getCommentsForPost(post.id).then((comments) => {
                this.post.comments = comments;
            });

            getRandomLoremIpsumMarkdown().then((text) => {
                this.post.body = text;
                this.post.likes = Math.floor(Math.random() * 50);
                if(this.post.title.split(" ").length > 3) {
                    this.post.tags = this.post.title.split(" ").slice(0, 3);
                } else {
                    // Last argument for slice is not inclusive.
                    let array = this.post.title.split(" ");
                    this.post.tags = array.slice(0, array.length);
                }
                this.loading = false;
            });
        });
    },
    methods: {
        scrollToLastPostedComment() {
            this.$nextTick(function() {
                this.$vuetify.goTo('#'.concat(this.post.comments[0].commentID));                
                this.goToRef('#'.concat(this.post.comments[0].commentID));
            });
        },
        incrementLikesCounter() {
            if(this.likePost) {
                this.post.likes--;
            } else {
                this.post.likes++;
            }

            this.likePost = !this.likePost;
        },
        updatePostComments(newComment) {
            this.post.comments.unshift(newComment);
        },
        goToRef(ref) {
            location.href = ref;
        },
        showEditPost(authorID) {
            return this.$store.state.isLoggedIn && (this.$store.state.author.login.uuid === authorID);
        },
        editPost(postID) {
            this.$data.showEditPostModal = true;
        },
        compiledMarkdown(markdown) {
            const sanitizedMarkdown = DOMPurify.sanitize(markdown);
            return marked(sanitizedMarkdown);
        },
        writeComment() {
            if(!this.isLoggedIn) {
                this.goToRef(
                    '#/login?redirect=#/posts/'
                    .concat(this.$router.currentRoute.params.postId)
                    .concat('&section=write-post-comment')
                );

                return;
            }

            this.$vuetify.goTo('#write-post-comment');
            this.goToRef('#write-post-comment');
        }
    }
};
</script>

<style lang="scss">
    // For responsive images in Markdown.
    img {
        width: 100%;
        height: auto;
    }
</style>