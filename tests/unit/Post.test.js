import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Post from '../../src/components/Post.vue';
import PostComment from '../../src/components/PostComment.vue';
import Share from '../../src/components/Share.vue';
import WriteComment from '../../src/components/WriteComment.vue';
import EditPost from '../../src/components/EditPost.vue';

// Store.
import store from '../Store.js';
// Router (VueRouter).
import router from '../Router.js';

Vue.use(VueRouter);
Vue.use(Vuetify);

describe('Post', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Post, {
            mocks: {
                $store: store
            },
            router,
            propsData: {
                postId: "1",
                startingCommentLevel: 0
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is props an Object', () => {
        expect(typeof Post.props).toBe('object');
    });

    it('has correct props type', () => {
        expect(Post.props).toEqual({
            postId: expect.any(Object),
            startingCommentLevel: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof Post.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(Post.data()).toEqual({
            author: expect.any(Object),
            likePost: expect.any(Boolean),
            loading: expect.any(Boolean),
            post: expect.any(Object),
            showEditPostModal: expect.any(Boolean),
            showSharePost: expect.any(Boolean)
        });
    });

    it('is methods an Object', () => {
        expect(typeof Post.methods).toBe('object');
    });

    it('is components an Object', () => {
        expect(typeof Post.components).toBe('object');
    });

    it('has correct components', () => {
        expect(Post.components).toEqual({
            PostComment,
            Share,
            WriteComment,
            EditPost
        });
    });
});