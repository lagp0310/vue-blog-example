import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import PostComment from '../../src/components/PostComment.vue';
import WriteReply from '../../src/components/WriteReply.vue';
import EditComment from '../../src/components/EditComment.vue';
import Snackbar from '../../src/components/Snackbar.vue';

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

describe('PostComment', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(PostComment, {
            mocks: {
                $store
            },
            propsData: {
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
                level: 0
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('has correct name data type', () => {
        expect(typeof PostComment.name).toBe('string');
    });

    it('has correct name string', () => {
        expect(PostComment.name).toEqual('PostComment');
    });

    it('is props an Object', () => {
        expect(typeof PostComment.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(PostComment.props).toEqual({
            comment: expect.any(Object),
            level: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof PostComment.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(PostComment.data()).toEqual({
            likeComment: expect.any(Boolean),
            editCommentContent: expect.any(String),
            showEditCommentData: expect.any(Boolean),
            showEditedCommentSnackbar: expect.any(Boolean),
            showPostedReplySnackbar: expect.any(Boolean)
        });
    });

    it('is methods an Object', () => {
        expect(typeof PostComment.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(PostComment.methods).toEqual({
            scrollToLastPostedReply: expect.any(Function),
            goToRef: expect.any(Function),
            incrementLikesCounter: expect.any(Function),
            addReplyFor: expect.any(Function),
            showCommentEqualID: expect.any(Function),
            showEditComment: expect.any(Function),
            editComment: expect.any(Function),
            changeCurrentCommentID: expect.any(Function)
        });
    });

    it('is computed an Object', () => {
        expect(typeof PostComment.computed).toBe('object');
    });

    it('has required computed functions', () => {
        expect(PostComment.computed).toEqual({
            getFullname: expect.any(Function),
            getReferenceToComment: expect.any(Function),
            getLevel: expect.any(Function),
            getNextLevel: expect.any(Function),
            getLastReplyID: expect.any(Function)
        });
    });

    it('is components an Object', () => {
        expect(typeof PostComment.components).toBe('object');
    });

    it('has correct components', () => {
        expect(PostComment.components).toEqual({
            WriteReply,
            EditComment,
            Snackbar
        });
    });

    // TODO: Find a better way to do this.
    it('are all components a Vue component', () => {
        const writeReplyWrapper = shallowMount(WriteReply, {
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
                showPostedReplySnackbar: true
            }
        });
        const editCommentWrapper = shallowMount(EditComment, {
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
        const snackbarWrapper = shallowMount(Snackbar, {
            propsData: {
                show: true,
                snackbarColor: 'grey',
                snackbarText: 'Test',
                snackbarCloseTime: 6000,
                snackbarCloseText: 'Close'
            }
        });
        expect(writeReplyWrapper.isVueInstance()).toBeTruthy();
        expect(editCommentWrapper.isVueInstance()).toBeTruthy();
        expect(snackbarWrapper.isVueInstance()).toBeTruthy();
    });
});