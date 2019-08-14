<template>
    <div 
        :id="comment.commentID" 
        :class="['comment', getLevel]"
    >
        <div v-if="loading" class="d-flex justify-center">
            <v-progress-circular
            :size="35"
            color="primary"
            indeterminate
            ></v-progress-circular>
        </div>
        <v-card v-if="author" class="mb-4">
            <v-container>
                <v-layout row>
                    <v-flex 
                        xs3 
                        sm2 
                        class="pt-4 text-xs-center"
                    >
                        <v-avatar
                            size="60px"
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
                        <h3 class="body-1 mt-1 text-xs-center">{{ getFullname }}</h3>
                        <v-btn
                            flat
                            color="grey"
                            :to="getAuthorProfileURL"
                            @click.native="scrollToTop()"
                            class="ma-0 mt-1 pa-1"
                        >
                            {{ getProfileButtonText }}
                        </v-btn>
                    </v-flex>
                    <v-flex 
                        xs8 
                        sm9 
                        offset-xs1 
                        offset-md0 
                        class="mt-4"
                    >
                        <!-- Thanks: https://forum.vuejs.org/t/how-to-handle-anchors-bookmarks-with-vue-router/14563/6 -->
                        <router-link 
                            v-if="comment.replyToID" 
                            class="font-weight-regular font-italic caption"
                            :to="getCommentID"
                        >
                            <div @click="scrollTo(getCommentID)">
                                Reply to: {{ comment.replyToID }}
                            </div>
                        </router-link>
                        <div class="font-weight-regular body-1">
                            {{ comment.body }}
                        </div>
                        <br />
                        <v-divider />
                        <v-card-text class="font-weight-regular">
                            <v-layout 
                                row 
                                justify-center
                            >
                                <v-btn 
                                    round 
                                    flat 
                                    color="pink darken-1"
                                    @click="incrementLikesCounter"
                                >
                                    <v-icon v-if="!likeComment">mdi-heart-outline</v-icon>&nbsp;
                                    <v-icon v-if="likeComment">mdi-heart</v-icon>&nbsp;
                                    {{ comment.likes }}&nbsp;
                                </v-btn>
                                <!-- <v-btn 
                                    round 
                                    flat 
                                    color="blue darken-1"
                                    @click="writeComment()"
                                >
                                    <v-icon>mdi-message-reply-text</v-icon>&nbsp;{{ comment.replies.length }}&nbsp;
                                </v-btn> -->
                                <v-btn 
                                    v-if="showEditComment(comment.createdByAuthorID)" 
                                    round 
                                    flat 
                                    color="grey darken-1"
                                    @click="editComment(comment.commentID)"
                                >
                                    <v-icon>mdi-pencil</v-icon>&nbsp;
                                </v-btn>
                            </v-layout>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <WriteReply 
            v-if="showCommentEqualID(comment.commentID) && !showEditCommentData" 
            :level="getNextLevel" 
            :comment="comment"
            :show-posted-reply-snackbar.sync="showPostedReplySnackbar"
            @hideWriteReply="changeCurrentCommentID('')"
            @updatedCommentReplies="scrollTo(getLastReplyID)"
        ></WriteReply>
        <EditComment 
            v-if="showCommentEqualID(comment.commentID) && showEditCommentData" 
            :level="getNextLevel" 
            :comment.sync="comment"
            :post-comments="[comment]"
            :show-cancel-button="true" 
            :show-edit-comment.sync="showEditCommentData"
            :show-edited-comment-snackbar.sync="showEditedCommentSnackbar"
        ></EditComment>
        <!-- https://vuejs.org/v2/guide/components-edge-cases.html#Recursive-Components -->
        <PostComment 
            v-for="(reply, id) in comment.replies" 
            :key="id" 
            :comment="reply" 
            :level="getNextLevel" 
            class="reply"
        ></PostComment>
        <Snackbar 
            :show.sync="showEditedCommentSnackbar" 
            snackbar-color="grey darken-1" 
            snackbar-text="Comment was updated!" 
            :snackbar-close-time="6000"
            snackbar-close-text="Close"
        ></Snackbar>
        <Snackbar 
            :show.sync="showPostedReplySnackbar" 
            snackbar-color="grey darken-1" 
            snackbar-text="Reply was posted!" 
            :snackbar-close-time="6000"
            snackbar-close-text="Close"
        ></Snackbar>
    </div>
</template>

<script>
import WriteReply from './WriteReply.vue';
import EditComment from './EditComment.vue';
import Snackbar from './Snackbar.vue';

import { getRandomAuthor } from '../utils/util.js';

export default {
    // For Recursive Components.
    name: 'PostComment',
    components: {
        WriteReply,
        EditComment,
        Snackbar
    },
    props: {
        comment: {
            type: Object,
            required: true
        },
        level: {
            type: Number,
            required: true
        }
    },
    data: () => ({
        likeComment: false,
        editCommentContent: '',
        showEditCommentData: false,
        showEditedCommentSnackbar: false,
        showPostedReplySnackbar: false,
        author: null,
        loading: true
    }),
    computed: {
        getFullname() {
            return this.author.name.first + ' ' + this.author.name.last;
        },
        getCommentID() {
            return this.$props.comment.replyToID;
        },
        getLevel() {
            return 'level-' + this.$props.level;
        },
        getNextLevel() {
            var nextLevel = this.$props.level;
            return ((++nextLevel) > 10 ? 0 : nextLevel);
        },
        // getLastReplyID() {
        //     var repliesLength = this.$props.comment.replies.length;
        //     return this.$props.comment.replies[repliesLength - 1].commentID;
        // },
        getAuthorProfileURL() {
            return ((this.author.login.uuid === this.$store.state.author.login.uuid) 
                    && this.$store.state.isLoggedIn) 
                ? '/my-profile' 
                : '/authors/'.concat(this.author.login.uuid);
        },
        getProfileButtonText() {
            return((this.$store.state.author.login.uuid === this.comment.createdByAuthorID) && 
                    (this.$store.state.isLoggedIn) 
                ? 'My Profile' 
                : 'View Profile');
        },
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        }
    },
    created() {
        this.$props.comment.likes = Math.floor(Math.random() * 50);
        
        getRandomAuthor().then((author) => {
            this.author = author;
            this.loading = false;
        });
    },
    methods: {
        scrollTo(ref) {
            this.$nextTick(function() {
                this.$vuetify.goTo('#'.concat(ref));                
                this.goToRef('#'.concat(ref));
            });
        },
        scrollToTop() {
            this.$nextTick(function() {
                this.$vuetify.goTo(0);
            });
        },
        goToRef(ref) {
            location.href = ref;
        },
        incrementLikesCounter() {
            if(this.likeComment) {
                this.$props.comment.likes--;
            } else {
                this.$props.comment.likes++;
            }

            this.likeComment = !this.likeComment;
            this.$forceUpdate();
        },
        addReplyFor(commentID) {
            this.$store.commit('changeCurrentCommentID', commentID);
        },
        showCommentEqualID(commentID) {
            return this.$store.state.currentCommentID === commentID;
        },
        showEditComment(createdByAuthorID) {
            return this.$store.state.author.login.uuid === createdByAuthorID;
        },
        editComment(commentID) {
            this.$store.commit('changeCurrentCommentID', commentID);
            this.$data.editCommentContent = this.$props.comment.content;
            this.$data.showEditCommentData = true;
        },
        changeCurrentCommentID(commentID) {
            this.$store.commit('changeCurrentCommentID', commentID);
        },
        writeComment() {
            if(!this.isLoggedIn) {
                this.goToRef(
                    '/login?redirect=/posts/'
                    .concat(this.$router.currentRoute.params.postId)
                    .concat('&section=write-post-comment')
                );
                
                return;
            }

            this.$vuetify.goTo('#'.concat(this.$props.comment.commentID));
            this.goToRef('#'.concat(this.$props.comment.commentID));
            this.addReplyFor(this.$props.comment.commentID);
        }
    }
};
</script>

<style lang="scss" scoped>
    $border-width: 5px;
    $border-style: solid;
    $level-0-border-color: #0D47A1;
    $level-1-border-color: #1B5E20;
    $level-2-border-color: #4A148C;
    $level-3-border-color: #004D40;
    $level-4-border-color: #212121;
    $level-5-border-color: #E65100;
    $level-6-border-color: #263238;
    $level-7-border-color: #3E2723;
    $level-8-border-color: #33691E;
    $level-9-border-color: #F57F17;
    $level-10-border-color: #01579B;
    $margin-sub-levels: 15px;
    $margin-sub-levels-xs: 0px;

    .level-0 > div.v-card {
        border-left: $border-width $border-style;
        border-color: $level-0-border-color;
    }
    .level-1 {
        margin-left: $margin-sub-levels;
    }
    .level-1 > div.v-card {
        border-left: $border-width $border-style;
        border-color: $level-1-border-color;
    }
    .level-2 {
        margin-left: $margin-sub-levels;
    }
    .level-2 > div.v-card {
        border-left: $border-width $border-style;
        border-color: $level-2-border-color;
    }
    .level-3 {
        margin-left: $margin-sub-levels;
    }
    .level-3 > div.v-card {
        border-left: $border-width $border-style;
        border-color: $level-3-border-color;
    }
    .level-4 {
        margin-left: $margin-sub-levels;
    }
    .level-4 > div.v-card {
        border-left: $border-width $border-style;
        border-color: $level-4-border-color;
    }
    .level-5 {
        margin-left: $margin-sub-levels;
    }
    .level-5 > div.v-card {
        border-left: $border-width $border-style;
        border-color: $level-5-border-color;
    }
    .level-6 {
        margin-left: $margin-sub-levels;
    }
    .level-6 > div.v-card {
        border-left: $border-width $border-style;
        border-color: $level-6-border-color;
    }
    .level-7 {
        margin-left: $margin-sub-levels;
    }
    .level-7 > div.v-card {
        border-left: $border-width $border-style;
        border-color: $level-7-border-color;
    }
    .level-8 {
        margin-left: $margin-sub-levels;
    }
    .level-8 > div.v-card {
        border-left: $border-width $border-style;
        border-color: $level-8-border-color;
    }
    .level-9 {
        margin-left: $margin-sub-levels;
    }
    .level-9 > div.v-card {
        border-left: $border-width $border-style;
        border-color: $level-9-border-color;
    }
    .level-10 {
        margin-left: $margin-sub-levels;
    }
    .level-10 > div.v-card {
        border-left: $border-width $border-style;
        border-color: $level-10-border-color;
    }
</style>