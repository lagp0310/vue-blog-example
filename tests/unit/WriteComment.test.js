import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import WriteComment from '../../src/components/WriteComment.vue';
import Snackbar from '../../src/components/Snackbar.vue';

// Store.
import store from '../Store.js';

Vue.use(VueRouter);
Vue.use(Vuetify);

describe('WriteComment', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(WriteComment, {
            mocks: {
                $store: store
            },
            propsData: {
                postComments: [
                    {
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
                    {
                        user: {
                            userID: 2,
                            name: 'Test',
                            lastname: 'Tested',
                            profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                        },
                        createdByUserID: 2,
                        commentID: 'c2',
                        postId: 567,
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ex vel \
                        consectetur consectetur. Pellentesque vel leo lacinia.',
                        likes: 4,
                        replies: [
                            {
                                user: {
                                    userID: 3,
                                    name: 'User1',
                                    lastname: 'Replied',
                                    profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                                },
                                createdByUserID: 3,
                                replyToId: 'c2',
                                commentID: 'c3',
                                postId: 567,
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ex vel \
                                consectetur consectetur. Pellentesque vel leo lacinia.',
                                likes: 1,
                                replies: [],
                                createdAt: '1552435603459',
                                updatedAt: '1552435603459'
                            },
                            {
                                user: {
                                    userID: 4,
                                    name: 'User2',
                                    lastname: 'Replied',
                                    profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                                },
                                createdByUserID: 4,
                                replyToId: 'c2',
                                commentID: 'c4',
                                postId: 567,
                                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ex vel \
                                consectetur consectetur. Pellentesque vel leo lacinia.',
                                likes: 3,
                                replies: [
                                    {
                                        user: {
                                            userID: 5,
                                            name: 'User1',
                                            lastname: 'Replied',
                                            profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                                        },
                                        createdByUserID: 5,
                                        replyToId: 'c4',
                                        commentID: 'c5',
                                        postId: 567,
                                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ex vel \
                                        consectetur consectetur. Pellentesque vel leo lacinia.',
                                        likes: 1,
                                        replies: [],
                                        createdAt: '1552435546827',
                                        updatedAt: '1552435546827'
                                    }
                                ],
                                createdAt: '1552435630766',
                                updatedAt: '1552435630766'
                            }
                        ],
                        createdAt: '1552435511192',
                        updatedAt: '1552435511192'
                    },
                    {
                        user: {
                            userID: 1,
                            name: 'Test',
                            lastname: 'Tested',
                            profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                        },
                        createdByUserID: 1,
                        commentID: 'c6',
                        postId: 567,
                        content: 'Lorem ipsum dolor sit amet.',
                        likes: 0,
                        replies: [],
                        createdAt: '1552435558863',
                        updatedAt: '1552435558863'
                    },
                    {
                        user: {
                            userID: 1,
                            name: 'Test',
                            lastname: 'Tested',
                            profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                        },
                        createdByUserID: 1,
                        commentID: 'c7',
                        postId: 567,
                        content: 'Lorem ipsum dolor.',
                        likes: 12,
                        replies: [],
                        createdAt: '1552435558870',
                        updatedAt: '1552435558870'
                    }
                ]
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is props an Object', () => {
        expect(typeof WriteComment.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(WriteComment.props).toEqual({
            postComments: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof WriteComment.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(WriteComment.data()).toEqual({
            showPostedCommentSnackbar: expect.any(Boolean),
            isFormValid: expect.any(Boolean),
            textareaComment: expect.any(String),
            textareaCommentRules: expect.any(Array)
        });
    });

    it('is methods an Object', () => {
        expect(typeof WriteComment.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(WriteComment.methods).toEqual({
            blurInput: expect.any(Function),
            validate: expect.any(Function),
            changeCurrentCommentID: expect.any(Function),
            scrollToTop: expect.any(Function)
        });
    });

    it('is computed an Object', () => {
        expect(typeof WriteComment.computed).toBe('object');
    });

    it('has required computed functions', () => {
        expect(WriteComment.computed).toEqual({
            getFullname: expect.any(Function),
            getProfileImageSrc: expect.any(Function),
            getUserProfileURL: expect.any(Function)
        });
    });

    it('is components an Object', () => {
        expect(typeof WriteComment.components).toBe('object');
    });

    it('has correct components', () => {
        expect(WriteComment.components).toEqual({
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