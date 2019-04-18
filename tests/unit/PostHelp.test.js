import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import PostHelp from '../../src/components/PostHelp.vue';

// Vuetify have problems with localVue instance on tests.
Vue.use(Vuetify, {
    iconfont: 'mdi'
});

describe('PostHelp', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(PostHelp);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});