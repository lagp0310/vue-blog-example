import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import AuthorProfile from '../../src/components/AuthorProfile.vue';
import Snackbar from '../../src/components/Snackbar.vue';

// Store.
import store from '../Store.js';

Vue.use(VueRouter);
Vue.use(Vuetify);

describe('AuthorProfile', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(AuthorProfile, {
            mocks: {
                $store: store
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is data a function', () => {
        expect(typeof AuthorProfile.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(AuthorProfile.data()).toEqual({
            showChangePasswordDialog: expect.any(Boolean),
            showProfileUpdatedSnackbar: expect.any(Boolean),
            loading: expect.any(Boolean),
            isFormValid: expect.any(Boolean),
            name: expect.any(String),
            nameRules: expect.any(Array),
            lastname: expect.any(String),
            lastnameRules: expect.any(Array),
            email: expect.any(String),
            emailRules: expect.any(Array),
            showPassword: expect.any(Boolean),
            showPasswordConfirmation: expect.any(Boolean),
            password: expect.any(String),
            passwordConfirmation: expect.any(String),
            passwordRules: expect.any(Object),
            gender: expect.any(String),
            genderSelectorRules: expect.any(Object),
            profileImageSrc: expect.any(String)
        });
    });

    it('is mounted a function', () => {
        expect(typeof AuthorProfile.mounted).toBe('function');
    });

    it('is methods an Object', () => {
        expect(typeof AuthorProfile.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(AuthorProfile.methods).toEqual({
            blurInput: expect.any(Function),
            doPasswordsMatch: expect.any(Function),
            changePassword: expect.any(Function),
            checkPasswordChange: expect.any(Function),
            updateAuthorsProfile: expect.any(Function)
        });
    });

    it('is watch an Object', () => {
        expect(typeof AuthorProfile.watch).toBe('object');
    });

    it('has watch required functions', () => {
        expect(AuthorProfile.watch).toEqual({
            loader: expect.any(Function)
        });
    });

    it('is components an Object', () => {
        expect(typeof AuthorProfile.components).toBe('object');
    });

    it('has correct components', () => {
        expect(AuthorProfile.components).toEqual({
            Snackbar
        });
    });

    it('are all components a Vue component', () => {
        const wrapper = shallowMount(Snackbar, {
            propsData: {
                show: true,
                snackbarColor: 'grey',
                snackbarText: 'Test',
                snackbarCloseTime: 6000,
                snackbarCloseText: 'Close'
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});