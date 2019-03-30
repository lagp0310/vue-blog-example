import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Login from '../../src/components/Login.vue';

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

describe('Login', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Login, {
            mocks: {
                $store
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