import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import WritePost from '../../src/components/WritePost.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

// TODO: Complete this test.

describe('WritePost', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(WritePost);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});