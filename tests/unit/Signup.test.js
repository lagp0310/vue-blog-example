import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Signup from '../../src/components/Signup.vue';
import TermsOfServiceModal from '../../src/components/TermsOfServiceModal.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

const $store = new Vuex.Store({
    state: {
        isLoggedIn: false,
        user: {
            userID: 1,
            name: 'Test',
            lastname: 'Tested',
            email: 'test@example.com',
            gender: 'male',
            profileImageSrc: 'https://randomuser.me/api/portraits/men/88.jpg',
        },
        currentCommentID: '',
        lastWrittenCommentID: 7
    },
    mutations: {
        changeLoggedInStatus(state) {
            state.isLoggedIn = !state.isLoggedIn;
        },
        updateUsersProfile(state, data) {
            state.user = data;
        },
        changeCurrentCommentID(state, commentID) {
            state.currentCommentID = commentID;
        },
        incrementLastWrittenCommentID(state) {
            state.lastWrittenCommentID++;
        }
    }
});

describe('Signup', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Signup, {
            mocks: {
                $store
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is data a function', () => {
        expect(typeof Signup.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(Signup.data()).toEqual({
            stepNumber: expect.any(Number),
            isFormValid: expect.any(Boolean),
            name: expect.any(String),
            nameRules: expect.any(Array),
            lastname: expect.any(String),
            lastnameRules: expect.any(Array),
            email: expect.any(String),
            emailRules: expect.any(Array),
            password: expect.any(String),
            passwordConfirmation: expect.any(String),
            showPassword: expect.any(Boolean),
            showPasswordConfirmation: expect.any(Boolean),
            passwordRules: expect.any(Object),
            genderSelectorRules: expect.any(Object),
            terms: expect.any(Boolean),
            doesAgree: expect.any(Boolean),
            emailNewContent: expect.any(Boolean),
            emailCommentPost: expect.any(Boolean),
            emailReplyComment: expect.any(Boolean),
        });
    });

    it('is methods an Object', () => {
        expect(typeof Signup.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(Signup.methods).toEqual({
            blurInput: expect.any(Function),
            signup: expect.any(Function),
            validate: expect.any(Function),
            checkPasswordChange: expect.any(Function),
            doPasswordsMatch: expect.any(Function)
        });
    });

    it('is components an Object', () => {
        expect(typeof Signup.components).toBe('object');
    });

    it('has correct components', () => {
        expect(Signup.components).toEqual({
            TermsOfServiceModal
        });
    });

    it('are all components a Vue component', () => {
        const wrapper = shallowMount(TermsOfServiceModal, {
            propsData: {
                agree: true,
                showTerms: true
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});