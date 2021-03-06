import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Articles from '../../src/components/Articles.vue';
import Article from '../../src/components/Article.vue';

// Store.
import store from '../Store.js';

Vue.use(VueRouter);
Vue.use(Vuetify);

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
                $store: store
            },
            propsData: {
                article: {
                    articleLink: '/posts/1',
                    title: null,
                    articleImageSrc: 'https://picsum.photos/500/',
                    author: null,
                    loading: true
                }
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});