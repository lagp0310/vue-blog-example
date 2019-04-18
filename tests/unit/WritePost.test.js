import { mount, shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import WritePost from '../../src/components/WritePost.vue';
import Snackbar from '../../src/components/Snackbar.vue';
import PostHelp from '../../src/components/PostHelp.vue';

// Store.
import store from '../Store.js';

// https://github.com/vuetifyjs/vuetify/issues/3456
const el = document.createElement('div');
el.setAttribute('data-app', true);
document.body.appendChild(el);

Vue.use(VueRouter);
Vue.use(Vuetify);

describe('WritePost', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(WritePost, {
            mocks: {
                $store: store
            },
            propsData: {
                showDialog: true
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is props an Object', () => {
        expect(typeof WritePost.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(WritePost.props).toEqual({
            showDialog: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof WritePost.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(WritePost.data()).toEqual({
            isTitleFormValid: expect.any(Boolean),
            isBodyFormValid: expect.any(Boolean),
            isTagsFormValid: expect.any(Boolean),
            showEmptySnackbar: expect.any(Boolean),
            showRepeatedTagSnackbar: expect.any(Boolean),
            postTitle: expect.any(String),
            postTitleRules: expect.any(Array),
            postBody: expect.any(String),
            postBodyRules: expect.any(Array),
            newTag: expect.any(String),
            postTags: expect.any(Array),
            postTagsRules: expect.any(Array),
            showHelpModal: expect.any(Boolean),
            activeTabIndex: expect.any(Number)
        });
    });

    it('is computed an Object', () => {
        expect(typeof WritePost.computed).toBe('object');
    });

    it('has required computed functions', () => {
        expect(WritePost.computed).toEqual({
            getSidenavElementsColorAccordingTheme: expect.any(Function),
            isPostBodyEmpty: expect.any(Function)
        });
    });

    it('is methods an Object', () => {
        expect(typeof WritePost.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(WritePost.methods).toEqual({
            blurInput: expect.any(Function),
            isTagAlreadyInArray: expect.any(Function),
            isTagEmpty: expect.any(Function),
            addTag: expect.any(Function),
            removeTag: expect.any(Function),
            allFieldsValid: expect.any(Function),
            validate: expect.any(Function),
            compiledMarkdown: expect.any(Function)
        });
    });

    it('is components an Object', () => {
        expect(typeof WritePost.components).toBe('object');
    });

    it('has correct components', () => {
        expect(WritePost.components).toEqual({
            Snackbar,
            PostHelp
        });
    });

    it('are all components a Vue component', () => {
        const wrapper = shallowMount(Snackbar, {
            propsData: {
                show: true,
                snackbarColor: 'grey',
                snackbarText: 'Test',
                snackbarCloseTime: 6000,
                snackbarCloseText: 'Close'
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});