<template>
    <div :class="['comment', 'level-' + level]">
        <v-card class="mb-4">
            <v-container justify-center>
                <v-layout row>
                    <v-flex xs3 sm2 class="pt-4 pl-4">
                        <v-avatar
                        size="60px"
                        color="grey lighten-4"
                        >
                            <v-img :src="getProfileImageSrc" contain alt="avatar" :lazy-src="getProfileImageSrc">
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
                        <div class="font-weight-regular body-1">
                            <v-form
                            ref="form"
                            v-model="isFormValid"
                            lazy-validation
                            >
                                <v-textarea
                                v-model="textareaComment"
                                name="textareaComment"
                                counter
                                label="Comment"
                                auto-grow
                                value=""
                                hint="Your comment here."
                                persistent-hint
                                placeholder="Your comment here."
                                :rules="textareaCommentRules"
                                ></v-textarea>
                                <br />
                                <v-container grid-list-md text-xs-center>
                                    <v-layout row wrap>
                                        <v-flex xs12>
                                            <v-btn
                                            v-if="isThisAReply"
                                            flat
                                            color="grey"
                                            @click="changeCurrentCommentID('')"
                                            class="mb-3"
                                            text-xs-center
                                            >
                                                Cancel
                                            </v-btn>
                                            <v-btn
                                            :disabled="!isFormValid"
                                            flat
                                            color="primary"
                                            @click="validate(), $emit('hideWriteReplies')"
                                            class="mb-3"
                                            text-xs-center
                                            >
                                                Publish Comment
                                            </v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-form>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <v-snackbar
        v-model="showPostedCommentSnackbar"
        color="grey darken-2"
        timeout="6000"
        >
            Comment was posted!
            <v-btn
            dark
            flat
            @click="showPostedCommentSnackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    props: {
        level: Number,
        postComments: Array,
        isThisAReply: Boolean,
        commentID: String,
        commentContent: String
    },
    data: () => ({
        showPostedCommentSnackbar: false,
        isFormValid: true,
        textareaComment: '',
        textareaCommentRules: [
            v => !!v || 'Comment cannot be empty.',
            v => (v && v.length <= 1000) || 'Comment cannot exceed 1000 characters.'
        ]
    }),
    beforeMount() {
        this.$data.textareaComment = this.$props.commentContent;
    },
    methods: {
        validate() {
            if(this.$refs.form.validate()) {
                const user = this.$store.state.user;
                const commentText = this.$data.textareaComment;
                const commentObject = {
                    user,
                    createdByUserID: user.userID,
                    commentId: this.$props.commentID,
                    postId: 567,
                    content: commentText,
                    likes: 44,
                    replies: [],
                    createdAt: '02-20-19-14:30',
                    updatedAt: '02-20-19-14:35'
                };
                
                this.$emit('update', commentObject);

                location.href = '#' + this.$props.postComments[0].commentId;

                this.$data.showPostedCommentSnackbar = true;

                this.$data.textareaComment = '';
                this.$data.isFormValid = true;

                return true;
            }
        },
        changeCurrentCommentID(commentID) {
            this.$store.commit('changeCurrentCommentID', commentID);
        }
    },
    computed: {
        getFullname() {
            return this.$store.state.user.name + ' ' + this.$store.state.user.lastname;
        },
        getProfileImageSrc() {
            return this.$store.state.user.profileImageSrc;
        }
    }
};
</script>

<style lang="scss" scoped>
    
</style>