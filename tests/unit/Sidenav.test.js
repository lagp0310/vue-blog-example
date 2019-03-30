import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Sidenav from '../../src/components/Sidenav.vue';

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

describe('Sidenav', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Sidenav, {
            mocks: {
                $store
            },
            propsData: {
                show: true
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is props an Object', () => {
        expect(typeof Sidenav.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(Sidenav.props).toEqual({
            show: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof Sidenav.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(Sidenav.data()).toEqual({
            items: expect.any(Array)
        });
    });

    it('is methods an Object', () => {
        expect(typeof Sidenav.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(Sidenav.methods).toEqual({
            goToRoute: expect.any(Function),
            changeLoggedInState: expect.any(Function),
            showHideLink: expect.any(Function)
        });
    });

    it('is computed an Object', () => {
        expect(typeof Sidenav.computed).toBe('object');
    });

    it('has required computed methods', () => {
        expect(Sidenav.computed).toEqual({
            isLoggedIn: expect.any(Function),
            usersName: expect.any(Function),
            usersProfilePictureSrc: expect.any(Function)
        });
    });
});