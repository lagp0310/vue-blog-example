import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Login from '../../src/components/Login.vue';

// Store.
import store from '../Store.js';

Vue.use(VueRouter);
Vue.use(Vuetify);

describe('Login', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Login, {
            mocks: {
                $store: store
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is data a function', () => {
        expect(typeof Login.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(Login.data()).toEqual({
            valid: expect.any(Boolean),
            email: expect.any(String),
            emailRules: expect.any(Array),
            password: expect.any(String),
            showPassword: expect.any(Boolean),
            passwordRules: expect.any(Array),
            checkbox: expect.any(Boolean)
        });
    });

    it('is methods an Object', () => {
        expect(typeof Login.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(Login.methods).toEqual({
            blurInput: expect.any(Function),
            validate: expect.any(Function)
        });
    });
});