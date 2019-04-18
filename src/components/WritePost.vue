<template>
    <!-- TODO: First tab needs to be selected when opening this dialog. -->
    <!-- TODO: Solve help modal problem with the scrollbar. -->
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
                            @click="$emit('update:showDialog', false)"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>New Post</v-toolbar-title>
                        <v-spacer />
                        <v-toolbar-items>
                            <v-btn
                                dark
                                flat
                                icon
                                @click.stop="showHelpModal = true"
                            >
                                <v-icon>mdi-help-circle-outline</v-icon>
                            </v-btn>
                            <v-btn 
                                :disabled="!allFieldsValid" 
                                dark 
                                flat 
                                @click="validate()"
                            >
                                Create Post
                            </v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-tabs 
                        v-model="activeTab"
                        fixed-tabs
                    >
                        <v-tab 
                            ripple
                            href="#tab-0"
                            @click="activeTab = 'tab-0'"
                        >
                            Write Post
                        </v-tab>
                        <v-tab 
                            ripple
                            href="#tab-1"
                            @click="activeTab = 'tab-1'"
                        >
                            Preview Post
                        </v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="activeTab">
                        <v-tab-item value="tab-0">
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
                        </v-tab-item>
                        <v-tab-item value="tab-1">
                            <v-container
                                grid-list-md 
                                text-xs-center
                            >
                                <v-layout 
                                    row 
                                    wrap
                                >
                                    <v-flex xs12>
                                        <div v-html="compiledMarkdown(postBody)" />
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
        <CreatePostHelpModal v-if="showHelpModal" :showHelpModal.sync="showHelpModal"></CreatePostHelpModal>
    </v-container>
</template>

<script>
import Snackbar from './Snackbar.vue';
import CreatePostHelpModal from './CreatePostHelpModal.vue';

import marked from 'marked';

export default {
    components: {
        Snackbar,
        CreatePostHelpModal
    },
    props: {
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
        activeTab: 'tab-0'
    }),
    computed: {
        getSidenavElementsColorAccordingTheme() {
            return(this.$store.state.theme === 'dark' ? 'grey darken-3' : 'primary');
        }
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
                this.$data.postTitle = '';
                this.$data.postBody = '';
                this.$data.postTags = [];
                this.$data.newTag = '';
                this.$refs.title.resetValidation();
                this.$refs.body.resetValidation();
                this.$emit('update:showDialog', false);
                return true;
            }

            return false;
        },
        compiledMarkdown(markdown) {
            return marked(markdown, { sanitize: true });
        }
    }
};
</script>

<style lang="scss" scoped>
    
</style>