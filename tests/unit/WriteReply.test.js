import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import WriteReply from '../../src/components/WriteReply.vue';
import Snackbar from '../../src/components/Snackbar.vue';

// Store.
import store from '../Store.js';

Vue.use(VueRouter);
Vue.use(Vuetify, {
    iconfont: 'mdi'
});

describe('WriteReply', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(WriteReply, {
            mocks: {
                $store: store
            },
            propsData: {
                level: 0,
                comment: {
                    user: {
                        userID: 1,
                        name: 'Test',
                        lastname: 'Tested',
                        profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                    },
                    createdByUserID: 1,
                    commentID: 'c1',
                    postId: 567,
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor ligula, tincidunt.',
                    likes: 44,
                    replies: [],
                    createdAt: '1552435492020',
                    updatedAt: '1552435492020'
                },
                showPostedReplySnackbar: true
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
    
    it('is props an Object', () => {
        expect(typeof WriteReply.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(WriteReply.props).toEqual({
            level: expect.any(Object),
            comment: expect.any(Object),
            showPostedReplySnackbar: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof WriteReply.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(WriteReply.data()).toEqual({
            isFormValid: expect.any(Boolean),
            textareaReply: expect.any(String),
            textareaReplyRules: expect.any(Array)
        });
    });

    it('is methods an Object', () => {
        expect(typeof WriteReply.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(WriteReply.methods).toEqual({
            blurInput: expect.any(Function),
            validate: expect.any(Function),
            changeCurrentCommentID: expect.any(Function)
        });
    });

    it('is computed an Object', () => {
        expect(typeof WriteReply.computed).toBe('object');
    });

    it('has required computed functions', () => {
        expect(WriteReply.computed).toEqual({
            getLevel: expect.any(Function),
            getFullname: expect.any(Function),
            getProfileImageSrc: expect.any(Function)
        });
    });

    it('is components an Object', () => {
        expect(typeof WriteReply.components).toBe('object');
    });

    it('has correct components', () => {
        expect(WriteReply.components).toEqual({
            Snackbar
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