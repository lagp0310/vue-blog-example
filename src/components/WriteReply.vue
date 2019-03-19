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
                                v-model="textareaReply"
                                name="textareaReply"
                                counter
                                label="Comment"
                                auto-grow
                                value=""
                                hint="Your comment here."
                                persistent-hint
                                placeholder="Your comment here."
                                :rules="textareaReplyRules"
                                @keydown.enter="validate"
                                @keydown.esc="blurInput($event)"
                                ></v-textarea>
                            </v-form>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container grid-list-md text-xs-right>
                <v-layout row wrap>
                    <v-flex xs11>
                        <v-btn
                        flat
                        color="grey"
                        @click="changeCurrentCommentID(''), $emit('hideWriteReply');"
                        class="mb-3"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                        :disabled="!isFormValid"
                        flat
                        color="primary"
                        @click="validate()"
                        class="mb-3"
                        >
                            Publish Reply
                        </v-btn>
                    </v-flex>
                    <v-flex xs1></v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import Snackbar from './Snackbar.vue';

export default {
    props: {
        level: {
            type: Number,
            required: true
        },
        comment: {
            type: Object,
            required: true
        },
        showPostedReplySnackbar: {
            type: Boolean,
            required: true
        }
    },
    data: () => ({
        isFormValid: true,
        textareaReply: '',
        textareaReplyRules: [
            v => !!v || 'Reply cannot be empty.',
            v => (v && v.length <= 1000) || 'Reply cannot exceed 1000 characters.'
        ]
    }),
    methods: {
        blurInput(event) {
            event.target.blur();
        },
        validate() {
            if(this.$refs.form.validate()) {
                const user = this.$store.state.user;
                const replyText = this.$data.textareaReply;

                this.$store.commit('incrementLastWrittenCommentID');
                const commentID = 'c'.concat(this.$store.state.lastWrittenCommentID);

                const replyToID = this.$props.comment.commentID;

                const replyObject = {
                    user,
                    createdByUserID: user.userID,
                    replyToID: replyToID,
                    commentID: commentID,
                    postId: 567,
                    content: replyText,
                    likes: 44,
                    replies: [],
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                };

                this.$props.comment.replies.push(replyObject);

                this.$data.textareaReply = '';
                this.$data.isFormValid = true;

                this.$emit('hideWriteReply');
                this.$emit('update:showPostedReplySnackbar', true);
                this.$emit('updatedCommentReplies');

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
    },
    components: {
        Snackbar
    }
};
</script>

<style lang="scss" scoped>
    
</style>