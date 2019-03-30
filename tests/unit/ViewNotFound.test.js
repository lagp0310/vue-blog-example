import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import ViewNotFound from '../../src/components/ViewNotFound.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

describe('ViewNotFound', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(ViewNotFound);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});