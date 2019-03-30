import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import UserProfile from '../../src/components/UserProfile.vue';
import Snackbar from '../../src/components/Snackbar.vue';

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

describe('UserProfile', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(UserProfile, {
            mocks: {
                $store
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is data a function', () => {
        expect(typeof UserProfile.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(UserProfile.data()).toEqual({
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
        expect(typeof UserProfile.mounted).toBe('function');
    });

    it('is methods an Object', () => {
        expect(typeof UserProfile.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(UserProfile.methods).toEqual({
            blurInput: expect.any(Function),
            doPasswordsMatch: expect.any(Function),
            changePassword: expect.any(Function),
            checkPasswordChange: expect.any(Function),
            updateUsersProfile: expect.any(Function)
        });
    });

    it('is watch an Object', () => {
        expect(typeof UserProfile.watch).toBe('object');
    });

    it('has watch required functions', () => {
        expect(UserProfile.watch).toEqual({
            loader: expect.any(Function)
        });
    });

    it('is components an Object', () => {
        expect(typeof UserProfile.components).toBe('object');
    });

    it('has correct components', () => {
        expect(UserProfile.components).toEqual({
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