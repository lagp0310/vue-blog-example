import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Article from '../../src/components/Article.vue';
import Share from '../../src/components/Share.vue';

Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueRouter);

// Some information about Tests.
// Cannot use Vuetify with localVue instance. 
// See https://github.com/vuejs/vue-test-utils/issues/1087
// See https://github.com/vuetifyjs/vuetify/issues/4068
// See https://github.com/vuetifyjs/vuetify/issues/4964

// TODO: Better login screen (background image and form aligned to the right; only on large screens).
// TODO: Pass test props to components and test them.
// TODO: Code cleanup.
// TODO: Vuex Store tests.
// TODO: Reset jest and mocks afterEach test? 
//       See https://github.com/webia1/testing-vuetify/blob/master/tests/unit/HelloWorld.spec.ts
//       See https://jestjs.io/docs/en/setup-teardown
// TODO: Reset store beforeEach test?
// TODO: Import this store from another file.
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

// https://vue-test-utils.vuejs.org/guides/using-with-vuex.html
describe('Article', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Article, {
            mocks: {
                $store
            },
            propsData: {
                article: {
                    articleLink: '/articles/1',
                    show: false,
                    title: 'Lorem ipsum dolor.',
                    articleImageSrc: 'https://picsum.photos/500/?image=0',
                    likes: 45,
                    author: 'Me',
                    profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                }
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is props an Object', () => {
        expect(typeof Article.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(Article.props).toEqual({
            article: expect.any(Object)
        });
    });

    it('has props the correct data', () => {
        const wrapper = shallowMount(Article, {
            mocks: {
                $store
            },
            propsData: {
                article: {
                    articleLink: '/articles/1',
                    show: false,
                    title: 'Lorem ipsum dolor.',
                    articleImageSrc: 'https://picsum.photos/500/?image=0',
                    likes: 45,
                    author: 'Me',
                    profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                }
            }
        });
        expect(wrapper.props()).toEqual({
            article: {
                articleLink: '/articles/1',
                show: false,
                title: 'Lorem ipsum dolor.',
                articleImageSrc: 'https://picsum.photos/500/?image=0',
                likes: 45,
                author: 'Me',
                profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
            }
        });
    });

    it('is data a function', () => {
        expect(typeof Article.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(Article.data()).toEqual({
            showShare: expect.any(Boolean),
            likeArticle: expect.any(Boolean)
        });
    });

    it('is methods an object', () => {
        expect(typeof Article.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(Article.methods).toEqual({
            scrollToTop: expect.any(Function)
        });
    });

    it('is components an object', () => {
        expect(typeof Article.components).toBe('object');
    });

    it('has required components', () => {
        expect(Article.components).toEqual({
            Share
        });
    });

    it('are all components a Vue component', () => {
        const wrapper = shallowMount(Share, {
            propsData: {
                show: true
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});