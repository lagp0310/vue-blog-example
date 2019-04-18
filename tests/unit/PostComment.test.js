import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import PostComment from '../../src/components/PostComment.vue';
import WriteReply from '../../src/components/WriteReply.vue';
import EditComment from '../../src/components/EditComment.vue';
import Snackbar from '../../src/components/Snackbar.vue';

// Store.
import store from '../Store.js';

Vue.use(VueRouter);
Vue.use(Vuetify);

describe('PostComment', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(PostComment, {
            mocks: {
                $store: store
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
            scrollTo: expect.any(Function),
            scrollToTop: expect.any(Function),
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
            getCommentID: expect.any(Function),
            getLevel: expect.any(Function),
            getNextLevel: expect.any(Function),
            getLastReplyID: expect.any(Function),
            getUserProfileURL: expect.any(Function),
            getProfileButtonText: expect.any(Function)
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
});