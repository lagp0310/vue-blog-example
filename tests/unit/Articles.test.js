import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Articles from '../../src/components/Articles.vue';
import Article from '../../src/components/Article.vue';

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

describe('Articles', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Articles);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is data a function', () => {
        expect(typeof Articles.data).toBe('function');
    });

    it('has data the correct data types', () => {
        expect(Articles.data()).toEqual({
            articles: expect.any(Array)
        });
    });

    it('is components an object', () => {
        expect(typeof Articles.components).toBe('object');
    });

    it('has required components', () => {
        expect(Articles.components).toEqual({
            Article
        });
    });

    it('are all components a Vue component', () => {
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
});