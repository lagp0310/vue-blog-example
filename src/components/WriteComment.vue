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
                            </v-form>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container grid-list-md text-xs-right>
                <v-layout row wrap>
                    <v-flex xs11>
                        <v-btn
                        :disabled="!isFormValid"
                        flat
                        color="primary"
                        @click="validate()"
                        class="mb-3"
                        >
                            Publish Comment
                        </v-btn>
                    </v-flex>
                    <v-flex xs1></v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <Snackbar 
        :show.sync="showPostedCommentSnackbar" 
        snackbarColor="grey darken-1" 
        snackbarText="Comment was posted!" 
        :snackbarCloseTime="6000"
        snackbarCloseText="Close"
        ></Snackbar>
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
        postComments: {
            type: Array,
            required: true
        }
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
    methods: {
        validate() {
            if(this.$refs.form.validate()) {
                const user = this.$store.state.user;
                const commentText = this.$data.textareaComment;

                this.$store.commit('incrementLastWrittenCommentID');
                const commentID = this.$store.state.lastWrittenCommentID;

                const commentObject = {
                    user,
                    createdByUserID: user.userID,
                    commentID: commentID,
                    postId: 567,
                    content: commentText,
                    likes: 44,
                    replies: [],
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                };

                this.$props.postComments.unshift(commentObject);

                location.href = '#' + this.$props.postComments[0].commentID;

                this.$data.showPostedCommentSnackbar = true;

                this.$data.textareaComment = '';
                this.$data.isFormValid = true;

                this.$refs.form.resetValidation();

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