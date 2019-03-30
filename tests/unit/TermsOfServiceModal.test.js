import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import TermsOfServiceModal from '../../src/components/TermsOfServiceModal.vue';

// https://github.com/vuetifyjs/vuetify/issues/3456
const el = document.createElement('div');
el.setAttribute('data-app', true);
document.body.appendChild(el);

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

describe('TermsOfServiceModal', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(TermsOfServiceModal, {
            propsData: {
                agree: true,
                showTerms: true
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is props an Object', () => {
        expect(typeof TermsOfServiceModal.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(TermsOfServiceModal.props).toEqual({
            agree: expect.any(Object),
            showTerms: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof TermsOfServiceModal.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(TermsOfServiceModal.data()).toEqual({
            dialog: expect.any(Boolean)
        });
    });

    it('is methods an Object', () => {
        expect(typeof TermsOfServiceModal.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(TermsOfServiceModal.methods).toEqual({
            doesAgree: expect.any(Function)
        });
    });
});