<template>
    <div class="comment level-0">
        <v-card class="mb-4">
            <v-container 
                grid-list-md 
                text-xs-center 
                justify-center
            >
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
                        <h3 class="body-1 mt-1 text-xs-center">{{ getFullname }}</h3>
                        <v-btn
                            flat
                            color="grey"
                            :to="getAuthorProfileURL"
                            @click.native="scrollToTop()"
                            class="ma-0 mt-1 pa-1"
                        >
                            My Profile
                        </v-btn>
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
                                    @keydown.enter="validate"
                                    @keydown.esc="blurInput($event)"
                                ></v-textarea>
                                <br />
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
                            :disabled="!isFormValid"
                            flat
                            color="primary"
                            class="mb-3"
                            @click="validate()"
                        >
                            Publish Comment
                        </v-btn>
                    </v-flex>
                    <v-flex xs1 />
                </v-layout>
            </v-container>
        </v-card>
        <Snackbar 
            :show.sync="showPostedCommentSnackbar" 
            snackbar-color="grey darken-1" 
            snackbar-text="Comment was posted!" 
            :snackbar-close-time="6000"
            snackbar-close-text="Close"
        ></Snackbar>
    </div>
</template>

<script>
import Snackbar from './Snackbar.vue';

export default {
    components: {
        Snackbar
    },
    props: {
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
    computed: {
        getFullname() {
            return this.$store.state.author.name.first + ' ' + this.$store.state.author.name.last;
        },
        getProfileImageSrc() {
            return this.$store.state.author.picture.large;
        },
        getAuthorProfileURL() {
            return '/my-profile';
        }
    },
    methods: {
        blurInput(event) {
            event.target.blur();
        },
        validate() {
            if(this.$refs.form.validate()) {
                const author = this.$store.state.author;
                const commentText = this.$data.textareaComment;

                this.$store.commit('incrementLastWrittenCommentID');
                const commentID = 'c'.concat(this.$store.state.lastWrittenCommentID);

                const commentObject = {
                    author,
                    createdByAuthorID: author.authorID,
                    commentID: commentID,
                    postId: 567,
                    content: commentText,
                    likes: 44,
                    replies: [],
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                };

                this.$props.postComments.unshift(commentObject);

                this.$data.showPostedCommentSnackbar = true;

                this.$data.textareaComment = '';
                this.$data.isFormValid = true;

                this.$refs.form.resetValidation();

                this.$emit('updatedComments');

                return true;
            }
        },
        changeCurrentCommentID(commentID) {
            this.$store.commit('changeCurrentCommentID', commentID);
        },
        scrollToTop() {
            this.$nextTick(function() {
                this.$vuetify.goTo(0);
            });
        }
    }
};
</script>

<style lang="scss" scoped>
    $border-width: 5px;
    $border-style: solid;
    $write-comment-border-color: #FF6F00;

    .level-0 > div.v-card {
        border-left: $border-width $border-style;
        border-color: $write-comment-border-color;
    }
</style>