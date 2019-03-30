import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import PrivacyPolicy from '../../src/components/PrivacyPolicy.vue';

// https://github.com/vuetifyjs/vuetify/issues/3456
const el = document.createElement('div');
el.setAttribute('data-app', true);
document.body.appendChild(el);

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

describe('PrivacyPolicy', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(PrivacyPolicy);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is data a function', () => {
        expect(typeof PrivacyPolicy.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(PrivacyPolicy.data()).toEqual({
            dialog: expect.any(Boolean)
        })
    });
});