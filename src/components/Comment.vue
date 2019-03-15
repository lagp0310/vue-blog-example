<template>
    <div :id="comment.commentID" :class="['comment', getLevel]">
        <v-card class="mb-4">
            <v-container grid-list-md>
                <v-layout row>
                    <v-flex xs3 sm2 class="pt-4 pl-4">
                        <v-avatar
                        size="60px"
                        color="grey lighten-4"
                        >
                            <v-img :src="comment.user.profileImageSrc" contain alt="avatar" :lazy-src="comment.user.profileImageSrc">
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
                        <h3 class="body-1 mt-1">{{ getFullname }}</h3>
                    </v-flex>
                    <v-flex xs8 sm9 offset-xs1 offset-md0 class="mt-4">
                        <!-- Thanks: https://forum.vuejs.org/t/how-to-handle-anchors-bookmarks-with-vue-router/14563/6 -->
                        <router-link v-if="comment.replyToId" class="font-weight-regular font-italic caption"
                        :to="getReferenceToComment">
                            <div @click="goToHref(getReferenceToComment)">
                                Reply to: {{ comment.replyToId }}
                            </div>
                        </router-link>
                        <div class="font-weight-regular body-1">
                            {{ comment.content }}
                        </div>
                        <br />
                        <v-divider></v-divider>
                        <v-card-text class="font-weight-regular">
                            <v-layout row justify-center>
                                <v-btn round flat color="pink darken-1"
                                @click="incrementLikesCounter">
                                    <v-icon v-if="!likeComment">mdi-heart-outline</v-icon>&nbsp;
                                    <v-icon v-if="likeComment">mdi-heart</v-icon>&nbsp;
                                    {{ comment.likes }}&nbsp;
                                </v-btn>
                                <v-btn round flat color="blue darken-1"
                                @click="addReplyFor(comment.commentID)">
                                    <v-icon>mdi-message-reply-text</v-icon>&nbsp;{{ comment.replies.length }}&nbsp;
                                </v-btn>
                                <v-btn v-if="showEditComment(comment.createdByUserID)" 
                                round flat color="grey darken-1"
                                @click="editComment(comment.commentID)">
                                    <v-icon>mdi-pencil</v-icon>&nbsp;
                                </v-btn>
                            </v-layout>
                        </v-card-text>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <WriteComment 
        v-if="showCommentEqualID(comment.commentID) && !showEditCommentData" 
        :showCancelButton="true" 
        :level="getNextLevel" 
        :postComments="[comment]"
        ></WriteComment>
        <EditComment 
        v-if="showCommentEqualID(comment.commentID) && showEditCommentData" 
        :level="getNextLevel" 
        :comment.sync="comment"
        :postComments="[comment]"
        :showCancelButton="true" 
        :showEditComment.sync="showEditCommentData"
        :showEditedCommentSnackbar.sync="showEditedCommentSnackbar"
        ></EditComment>
        <!-- https://vuejs.org/v2/guide/components-edge-cases.html#Recursive-Components -->
        <Comment v-for="(reply, id) in comment.replies" :key="id" :comment="reply" :level="getNextLevel" 
        class="reply"></Comment>
        <Snackbar 
        :show.sync="showEditedCommentSnackbar" 
        snackbarColor="grey darken-1" 
        snackbarText="Comment was updated!" 
        :snackbarCloseTime="6000"
        snackbarCloseText="Close"
        ></Snackbar>
    </div>
</template>

<script>
import WriteComment from './WriteComment.vue';
import EditComment from './EditComment.vue';
import Snackbar from './Snackbar.vue';

export default {
    // For Recursive Components.
    name: 'Comment',
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
        showEditedCommentSnackbar: false
    }),
    methods: {
        goToHref(ref) {
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
            this.$store.state.currentCommentID = commentID;
        },
        showCommentEqualID(commentID) {
            return this.$store.state.currentCommentID === commentID;
        },
        showEditComment(createdByUserID) {
            return this.$store.state.user.userID === createdByUserID;
        },
        editComment(commentID) {
            this.$store.commit('changeCurrentCommentID', commentID);
            this.$data.editCommentContent = this.$props.comment.content;
            this.$data.showEditCommentData = true;
        }
    },
    computed: {
        getFullname() {
            return this.$props.comment.user.name + ' ' + this.$props.comment.user.lastname;
        },
        getReferenceToComment() {
            return '#' + this.$props.comment.replyToId;
        },
        getLevel() {
            return 'level-' + this.$props.level;
        },
        getNextLevel() {
            var nextLevel = this.$props.level;
            return ((++nextLevel) > 10 ? 0 : nextLevel);
        }
    },
    components: {
        WriteComment,
        EditComment,
        Snackbar
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

    .level-0 > div > div > div.layout {
        border-left: $border-width $border-style;
        border-color: $level-0-border-color;
    }
    .level-1 {
        margin-left: $margin-sub-levels;
    }
    .level-1 > div > div > div.layout {
        border-left: $border-width $border-style;
        border-color: $level-1-border-color;
    }
    .level-2 {
        margin-left: $margin-sub-levels;
    }
    .level-2 > div > div > div.layout {
        border-left: $border-width $border-style;
        border-color: $level-2-border-color;
    }
    .level-3 {
        margin-left: $margin-sub-levels;
    }
    .level-3 > div > div > div.layout {
        border-left: $border-width $border-style;
        border-color: $level-3-border-color;
    }
    .level-4 {
        margin-left: $margin-sub-levels;
    }
    .level-4 > div > div > div.layout {
        border-left: $border-width $border-style;
        border-color: $level-4-border-color;
    }
    .level-5 {
        margin-left: $margin-sub-levels;
    }
    .level-5 > div > div > div.layout {
        border-left: $border-width $border-style;
        border-color: $level-5-border-color;
    }
    .level-6 {
        margin-left: $margin-sub-levels;
    }
    .level-6 > div > div > div.layout {
        border-left: $border-width $border-style;
        border-color: $level-6-border-color;
    }
    .level-7 {
        margin-left: $margin-sub-levels;
    }
    .level-7 > div > div > div.layout {
        border-left: $border-width $border-style;
        border-color: $level-7-border-color;
    }
    .level-8 {
        margin-left: $margin-sub-levels;
    }
    .level-8 > div > div > div.layout {
        border-left: $border-width $border-style;
        border-color: $level-8-border-color;
    }
    .level-9 {
        margin-left: $margin-sub-levels;
    }
    .level-9 > div > div > div.layout {
        border-left: $border-width $border-style;
        border-color: $level-9-border-color;
    }
    .level-10 {
        margin-left: $margin-sub-levels;
    }
    .level-10 > div > div > div.layout {
        border-left: $border-width $border-style;
        border-color: $level-10-border-color;
    }
</style>