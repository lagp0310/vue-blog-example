<template>
    <div :class="['comment', 'level-' + getLevel]">
        <v-card class="mb-4">
            <v-container justify-center>
                <v-layout row>
                    <v-flex 
                        xs3 
                        sm2 
                        class="pt-4 pl-4"
                    >
                        <v-avatar
                            size="60px"
                            color="grey lighten-4"
                        >
                            <v-img 
                                :src="getProfileImageSrc" 
                                contain 
                                alt="avatar" 
                                :lazy-src="getProfileImageSrc"
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
                        <h3 class="body-1 mt-1">{{ getFullname }}</h3>
                    </v-flex>
                    <v-flex 
                        xs8 
                        sm9 
                        offset-xs1 
                        offset-md0 
                        class="mt-4"
                    >
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
            <v-container 
                grid-list-md 
                text-xs-right
            >
                <v-layout 
                    row 
                    wrap
                >
                    <v-flex xs11>
                        <v-btn
                            flat
                            color="grey"
                            class="mb-3"
                            @click="changeCurrentCommentID(''), $emit('hideWriteReply');"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            :disabled="!isFormValid"
                            flat
                            color="primary"
                            class="mb-3"
                            @click="validate()"
                        >
                            Publish Reply
                        </v-btn>
                    </v-flex>
                    <v-flex xs1 />
                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import Snackbar from './Snackbar.vue';

export default {
    components: {
        Snackbar
    },
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
    computed: {
        getLevel() {
            return this.$props.level;
        },
        getFullname() {
            return this.$store.state.author.name.first + ' ' + this.$store.state.author.name.last;
        },
        getProfileImageSrc() {
            return this.$store.state.author.picture.large;
        }
    },
    methods: {
        blurInput(event) {
            event.target.blur();
        },
        validate() {
            if(this.$refs.form.validate()) {
                const author = this.$store.state.author;
                const replyText = this.$data.textareaReply;

                this.$store.commit('incrementLastWrittenCommentID');
                const commentID = 'c'.concat(this.$store.state.lastWrittenCommentID);

                const replyToID = this.$props.comment.commentID;

                const replyObject = {
                    author,
                    createdByauthorID: author.authorID,
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
    }
};
</script>

<style lang="scss" scoped>
    
</style>