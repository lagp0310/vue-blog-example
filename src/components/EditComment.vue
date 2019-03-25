<template>
    <div :class="['comment', 'level-' + level]">
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
                            v-if="showCancelButton"
                            flat
                            color="grey"
                            class="mb-3"
                            @click="changeCurrentCommentID('')"
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
                            Publish Comment
                        </v-btn>
                    </v-flex>
                    <v-flex xs1 />
                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
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
        postComments: {
            type: Array,
            required: true
        },
        showCancelButton: {
            type: Boolean,
            required: true
        },
        showEditComment: {
            type: Boolean,
            required: true
        },
        showEditedCommentSnackbar: {
            type: Boolean,
            required: true
        }
    },
    data: () => ({
        isFormValid: true,
        textareaComment: '',
        textareaCommentRules: [
            v => !!v || 'Comment cannot be empty.',
            v => (v && v.length <= 1000) || 'Comment cannot exceed 1000 characters.'
        ]
    }),
    computed: {
        getFullname() {
            return this.$store.state.user.name + ' ' + this.$store.state.user.lastname;
        },
        getProfileImageSrc() {
            return this.$store.state.user.profileImageSrc;
        }
    },
    mounted() {
        this.$data.textareaComment = this.$props.comment.content;
    },
    methods: {
        blurInput(event) {
            event.target.blur();
        },
        validate() {
            if(this.$refs.form.validate()) {
                this.$props.comment.content = this.$data.textareaComment;
                this.$props.comment.updatedAt = Date.now();

                this.$data.textareaComment = '';
                this.$data.isFormValid = true;

                this.$emit('update:showEditComment', false);
                this.$emit('update:showEditedCommentSnackbar', true);

                this.changeCurrentCommentID('');

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