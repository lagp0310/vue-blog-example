import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Contact from '../../src/components/Contact.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

describe('Contact', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(Contact);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is data a function', () => {
        expect(typeof Contact.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(Contact.data()).toEqual({
            isFormValid: expect.any(Boolean),
            fullName: expect.any(String),
            fullNameRules: expect.any(Array),
            email: expect.any(String),
            emailRules: expect.any(Array),
            textareaContact: expect.any(String),
            textareaContactRules: expect.any(Array)
        });
    });

    it('is methods an Object', () => {
        expect(typeof Contact.methods).toBe('object');
    });

    // TODO: Write test to check which methods are in methods object (must be equal).
    it('has required methods', () => {
        expect(Contact.methods).toEqual({
            blurInput: expect.any(Function),
            validate: expect.any(Function)
        });
    });
});