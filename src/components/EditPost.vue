<template>
    <v-container>
        <v-layout row justify-center>
            <v-dialog v-model="showDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="$emit('update:showDialog', false)">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Edit Post</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn :disabled="!allFieldsValid" dark flat 
                            @click="validate(), $emit('update:showDialog', false)">Save</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-list three-line subheader>
                        <v-subheader>Title</v-subheader>
                        <v-container>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-form
                                    ref="title"
                                    v-model="isTitleFormValid"
                                    lazy-validation
                                    >
                                        <v-text-field
                                        v-model="postTitle"
                                        :rules="postTitleRules"
                                        label="Post Title"
                                        required
                                        ></v-text-field>
                                    </v-form>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-list>
                    <v-divider></v-divider>
                    <v-list three-line subheader>
                        <v-subheader>Body</v-subheader>
                        <v-container grid-list-md text-xs-center>
                            <v-layout row wrap justify-center>
                                <v-flex xs12>
                                    <v-form
                                    ref="body"
                                    v-model="isBodyFormValid"
                                    lazy-validation
                                    >
                                        <v-textarea
                                        v-model="postBody"
                                        name="postBody"
                                        counter
                                        label="Body"
                                        auto-grow
                                        value=""
                                        hint="Post Content"
                                        persistent-hint
                                        placeholder="Post Body"
                                        :rules="postBodyRules"
                                        ></v-textarea>
                                    </v-form>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-list>
                    <v-list three-line subheader>
                        <v-subheader>Tags</v-subheader>
                        <v-container grid-list-md text-xs-center>
                            <v-layout row wrap justify-center>
                                <v-flex xs12>
                                    <v-form
                                    ref="tags"
                                    v-model="isTagsFormValid"
                                    lazy-validation
                                    >
                                        <v-text-field
                                        v-model="postTags"
                                        :rules="postTagsRules"
                                        label="Post Tags"
                                        required
                                        ></v-text-field>
                                    </v-form>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-list>
                </v-card>
            </v-dialog>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: {
        post: Object,
        showDialog: Boolean
    },
    data: () => ({
        isTitleFormValid: false,
        isBodyFormValid: false,
        isTagsFormValid: false,
        postTitle: '',
        postTitleRules: [
            v => !!v || 'Post title is required.',
            v => (v && v.length < 100) || 'Post title must be less than 100 characters.',
            v => /[a-zA-Z0-9\\W]+/.test(v) || 'Post title contain invalid characters.'
        ],
        postBody: '',
        postBodyRules: [
            v => !!v || 'Body is required.',
            v => (v && v.length < 100000) || 'Body must be less than 100,000 characters.',
            v => /[a-zA-Z0-9\\W]+/.test(v) || 'Body contain invalid characters.'
        ],
        postTags: '',
        postTagsRules: [
            v => !!v || 'Tags are required.',
            v => (v && v.length < 100) || 'Tags must be less than 100 characters.',
            v => /[a-zA-Z0-9]+/.test(v) || 'Full name contain invalid characters.'
        ]
    }),
    beforeMount() {
        this.$data.postTitle = this.$props.post.title;
        this.$data.postBody = this.$props.post.body;
        this.$data.postTags = this.$props.post.tags;
    },
    methods: {
        validate() {
            if(this.$refs.title.validate() &&
                this.$refs.body.validate() &&
                this.$refs.tags.validate()) {
                this.$props.post.title = this.$data.postTitle;
                this.$props.post.body = this.$data.postBody;
                this.$props.post.tags = this.$data.postTags;
                this.$emit('update:post', this.$props.post);
                this.$emit('update:showDialog', false);
                return true;
            }

            return false;
        },
        allFieldsValid() {
            return(this.$data.isTitleFormValid && this.$data.isBodyFormValid && this.$data.isTagsFormValid);
        }
    },
    components: {
        //
    }
};
</script>

<style lang="scss" scoped>
    
</style>