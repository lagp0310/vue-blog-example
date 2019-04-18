<template>
    <v-container>
        <v-layout 
            row 
            justify-center
        >
            <v-dialog 
                v-model="showDialog" 
                fullscreen 
                hide-overlay 
                transition="dialog-bottom-transition"
            >
                <v-card>
                    <v-toolbar 
                        dark 
                        :color="getSidenavElementsColorAccordingTheme"
                    >
                        <v-btn 
                            icon 
                            dark 
                            @click="$emit('update:showDialog', false), resetEditPostContent()"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Edit Post</v-toolbar-title>
                        <v-spacer />
                        <v-toolbar-items>
                            <v-btn 
                                :disabled="!allFieldsValid" 
                                dark 
                                flat 
                                @click="validate()"
                            >
                                    Save
                            </v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-tabs 
                        v-model="activeTabIndex"
                        fixed-tabs
                        icons-and-text
                    >
                        <v-tab 
                            ripple
                            @click="activeTabIndex = 0"
                        >
                            Edit Post
                            <v-icon>mdi-pencil-outline</v-icon>
                        </v-tab>
                        <v-tab 
                            ripple
                            @click="activeTabIndex = 1"
                        >
                            Preview Post
                            <v-icon>mdi-file-find-outline</v-icon>
                        </v-tab>
                        <v-tab 
                            ripple
                            @click="activeTabIndex = 2"
                        >
                            Help
                            <v-icon>mdi-help-circle-outline</v-icon>
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items :value="activeTabIndex">
                        <v-tab-item :value="0">
                            <v-container
                                grid-list-md 
                                text-xs-center
                            >
                                <v-layout 
                                    row 
                                    wrap
                                >
                                    <v-flex xs12>
                                        <v-card>
                                            <v-card-text>
                                                <v-list 
                                                    three-line 
                                                    subheader
                                                >
                                                    <v-subheader>Title</v-subheader>
                                                    <v-container>
                                                        <v-layout 
                                                            row 
                                                            wrap
                                                        >
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
                                                                        @keydown.esc="blurInput($event)"
                                                                    ></v-text-field>
                                                                </v-form>
                                                            </v-flex>
                                                        </v-layout>
                                                    </v-container>
                                                </v-list>
                                                <v-divider />
                                                <v-list 
                                                    three-line 
                                                    subheader
                                                >
                                                    <v-subheader>Body</v-subheader>
                                                    <v-container 
                                                        grid-list-md 
                                                        text-xs-center
                                                    >
                                                        <v-layout 
                                                            row 
                                                            wrap 
                                                            justify-center
                                                        >
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
                                                                        @keydown.esc="blurInput($event)"
                                                                    ></v-textarea>
                                                                </v-form>
                                                            </v-flex>
                                                        </v-layout>
                                                    </v-container>
                                                </v-list>
                                                <v-list 
                                                    three-line 
                                                    subheader
                                                >
                                                    <v-subheader>Tags</v-subheader>
                                                    <v-container 
                                                        grid-list-md 
                                                        text-xs-center
                                                    >
                                                        <v-layout 
                                                            row 
                                                            wrap 
                                                            justify-center
                                                        >
                                                            <v-flex 
                                                                xs12 
                                                                md5
                                                            >
                                                                <v-form
                                                                    ref="tags"
                                                                    v-model="isTagsFormValid"
                                                                    lazy-validation
                                                                >
                                                                    <v-text-field
                                                                        v-model="newTag"
                                                                        :rules="postTagsRules"
                                                                        label="New Tag"
                                                                        prefix="#"
                                                                        @keydown.enter.prevent="addTag(newTag)"
                                                                        @keydown.esc="blurInput($event)"
                                                                    ></v-text-field>
                                                                    <v-btn
                                                                        color="primary"
                                                                        @click="addTag(newTag)"
                                                                    >
                                                                        Add Tag
                                                                    </v-btn>
                                                                </v-form>
                                                            </v-flex>
                                                            <v-flex md1 />
                                                            <v-flex 
                                                                xs12 
                                                                md6
                                                            >
                                                                <v-list-tile-sub-title>Post Tags</v-list-tile-sub-title>
                                                                <v-chip 
                                                                    v-for="(tag, id) in postTags" 
                                                                    :key="id" 
                                                                    v-model="tag.show" 
                                                                    close
                                                                    @input="removeTag(tag)"
                                                                >
                                                                    {{ tag.tagName }}
                                                                </v-chip>
                                                            </v-flex>
                                                        </v-layout>
                                                    </v-container>
                                                </v-list>
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-tab-item>
                        <v-tab-item :value="1">
                            <v-container
                                grid-list-md 
                                text-xs-center
                            >
                                <v-layout 
                                    row 
                                    wrap
                                >
                                    <v-flex xs12>
                                        <v-card v-if="!isPostBodyEmpty">
                                            <v-card-text>
                                                <div v-html="compiledMarkdown(postBody)" />
                                            </v-card-text>
                                        </v-card>
                                        <div v-if="isPostBodyEmpty">
                                            <v-img 
                                                src="/public/images/illustrations/undraw_no_data_qbuo.svg" 
                                                contain 
                                                alt="avatar" 
                                                lazy-src="/public/images/illustrations/undraw_no_data_qbuo.svg"
                                                max-height="400px"
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
                                            <p class="subheading text-xs-center mt-2">
                                                There's nothing to preview yet. Be sure to write an awesome Post!
                                            </p>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-tab-item>
                        <v-tab-item :value="2">
                            <v-container
                                grid-list-md 
                                text-xs-center
                            >
                                <v-layout 
                                    row 
                                    wrap
                                >
                                    <v-flex xs12>
                                        <PostHelp></PostHelp>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-dialog>
        </v-layout>
        <Snackbar 
            :show.sync="showEmptySnackbar" 
            snackbar-color="grey darken-1" 
            snackbar-text="Tag cannot be empty!" 
            :snackbar-close-time="6000"
            snackbar-close-text="Close"
        ></Snackbar>
        <Snackbar 
            :show.sync="showRepeatedTagSnackbar" 
            snackbar-color="grey darken-1" 
            snackbar-text="Tag is already in the List!" 
            :snackbar-close-time="6000"
            snackbar-close-text="Close"
        ></Snackbar>
    </v-container>
</template>

<script>
import Snackbar from './Snackbar.vue';
import PostHelp from './PostHelp.vue';

import marked from 'marked';

export default {
    components: {
        Snackbar,
        PostHelp
    },
    props: {
        post: {
            type: Object,
            required: true
        },
        showDialog: {
            type: Boolean,
            required: true
        }
    },
    data: () => ({
        isTitleFormValid: false,
        isBodyFormValid: false,
        isTagsFormValid: false,
        showEmptySnackbar: false,
        showRepeatedTagSnackbar: false,
        postTitle: '',
        postTitleRules: [
            v => !!v || 'Post title is required.',
            v => (v && v.length < 100) || 'Post title must be less than 100 characters.',
            v => /[a-z]+[0-9\W]*/gi.test(v) || 'Post title contain invalid characters.'
        ],
        postBody: '',
        postBodyRules: [
            v => !!v || 'Body is required.',
            v => (v && v.length < 100000) || 'Body must be less than 100,000 characters.',
            v => /[a-z]+[0-9\W]*/gi.test(v) || 'Body contain invalid characters.'
        ],
        newTag: '',
        postTags: [],
        postTagsRules: [
            v => !!v || 'Tag is required.',
            v => (v && v.length < 20) || 'Tags must be less than 20 characters.',
            v => /^[a-z0-9]*$/gi.test(v) || 'Tags contain invalid characters.'
        ],
        showHelpModal: false,
        activeTabIndex: 0
    }),
    computed: {
        getSidenavElementsColorAccordingTheme() {
            return(this.$store.state.theme === 'dark' ? 'grey darken-3' : 'primary');
        },
        isPostBodyEmpty() {
            return this.$data.postBody.length === 0;
        }
    },
    mounted() {
        this.$data.postTitle = this.$props.post.title;
        this.$data.postBody = this.$props.post.body;
        var that = this;
        this.$props.post.tags.forEach(function(value) {
            that.$data.postTags.push({
                tagName: value,
                show: true
            });
        });
    },
    methods: {
        blurInput(event) {
            event.target.blur();
        },
        isTagAlreadyInArray(tag) {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
            return((this.$data.postTags.findIndex(function(value) {
                return value.tagName === tag
            }) === -1) ? false : true);
        },
        isTagEmpty(tag) {
            return(!tag ? true : false);
        },
        addTag(newTag) {
            if(this.isTagEmpty(newTag)) {
                this.$refs.tags.validate();
                this.$data.showEmptySnackbar = true;
                return;
            }
            
            if(this.$refs.tags.validate()) {
                newTag = newTag.replace(/[#]+/g, '');
                newTag = '#'.concat(newTag);

                if(this.isTagAlreadyInArray(newTag)) {
                    this.$data.showRepeatedTagSnackbar = true;
                    return;
                }

                this.$data.postTags.push({
                    tagName: newTag,
                    show: true
                });
                this.$data.newTag = '';
                this.$refs.tags.resetValidation();
            }
        },
        removeTag(tagObject) {
            this.$data.postTags.splice(this.$data.postTags.indexOf(tagObject), 1);
        },
        allFieldsValid() {
            return(this.$data.isTitleFormValid && this.$data.isBodyFormValid);
        },
        validate() {
            if(this.$refs.title.validate() && this.$refs.body.validate()) {
                this.$props.post.title = this.$data.postTitle;
                this.$props.post.body = this.$data.postBody;
                var tags = [];
                this.$data.postTags.forEach(function(value) {
                    tags.push(value.tagName);
                });
                this.$props.post.tags = tags;
                this.$emit('update:showDialog', false);
                return true;
            }

            return false;
        },
        resetEditPostContent() {
            this.$data.postTitle = this.$props.post.title;
            this.$data.postBody = this.$props.post.body;
            this.$data.postTags = [];
            var that = this;
            this.$props.post.tags.forEach(function(value) {
                that.$data.postTags.push({
                    tagName: value,
                    show: true
                });
            });
        },
        compiledMarkdown(markdown) {
            return marked(markdown, { sanitize: true });
        }
    }
};
</script>

<style lang="scss" scoped>
    
</style>