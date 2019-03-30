import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import EditComment from '../../src/components/EditComment.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

const $store = new Vuex.Store({
    state: {
        isLoggedIn: false,
        user: {
            userID: 1,
            name: 'Test',
            lastname: 'Tested',
            email: 'test@example.com',
            gender: 'male',
            profileImageSrc: 'https://randomuser.me/api/portraits/men/88.jpg',
        },
        currentCommentID: '',
        lastWrittenCommentID: 7
    },
    mutations: {
        changeLoggedInStatus(state) {
            state.isLoggedIn = !state.isLoggedIn;
        },
        updateUsersProfile(state, data) {
            state.user = data;
        },
        changeCurrentCommentID(state, commentID) {
            state.currentCommentID = commentID;
        },
        incrementLastWrittenCommentID(state) {
            state.lastWrittenCommentID++;
        }
    }
});

describe('EditComment', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(EditComment, {
            mocks: {
                $store
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
                ],
                showCancelButton: true,
                showEditComment: true,
                showEditedCommentSnackbar: true
            }   
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is props an Object', () => {
        expect(typeof EditComment.props).toBe('object');
    });

    it('has correct props type', () => {
        expect(EditComment.props).toEqual({
            level: expect.any(Object),
            comment: expect.any(Object),
            postComments: expect.any(Object),
            showCancelButton: expect.any(Object),
            showEditComment: expect.any(Object),
            showEditedCommentSnackbar: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof EditComment.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(EditComment.data()).toEqual({
            isFormValid: expect.any(Boolean),
            textareaComment: expect.any(String),
            textareaCommentRules: expect.any(Array)
        });
    });

    it('is mounted a function', () => {
        expect(typeof EditComment.mounted).toBe('function');
    });

    it('is methods an Object', () => {
        expect(typeof EditComment.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(EditComment.methods).toEqual({
            blurInput: expect.any(Function),
            validate: expect.any(Function),
            changeCurrentCommentID: expect.any(Function)
        });
    });

    it('is computed an Object', () => {
        expect(typeof EditComment.computed).toBe('object');
    });

    it('has required methods', () => {
        expect(EditComment.computed).toEqual({
            getFullname: expect.any(Function),
            getProfileImageSrc: expect.any(Function)
        });
    });
});