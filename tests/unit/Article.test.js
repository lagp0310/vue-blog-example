import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Article from '../../src/components/Article.vue';
import Share from '../../src/components/Share.vue';

// Store.
import store from '../Store.js';

Vue.use(Vuetify);
Vue.use(VueRouter);

describe('Article', () => {
    it('is a Vue instance', () => {
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
        expect(wrapper.props()).toEqual({
            article: {
                articleLink: '/posts/1',
                title: null,
                articleImageSrc: 'https://picsum.photos/500/',
                author: null,
                loading: true
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