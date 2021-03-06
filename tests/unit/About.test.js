import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import About from '../../src/components/About.vue';

// Vuetify have problems with localVue instance on tests.
Vue.use(Vuetify, {
    iconfont: 'mdi'
});

describe('About', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(About);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});