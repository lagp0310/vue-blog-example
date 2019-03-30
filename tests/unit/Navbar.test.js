import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Navbar from '../../src/components/Navbar.vue';
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

describe('Navbar', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Navbar, {
            mocks: {
                $store
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is data a function', () => {
        expect(typeof Navbar.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(Navbar.data()).toEqual({
            showSidenav: expect.any(Boolean),
            darkMode: expect.any(Boolean),
            notifications: expect.any(Boolean),
            menu: expect.any(Boolean)
        });
    });

    it('is methods an Object', () => {
        expect(typeof Navbar.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(Navbar.methods).toEqual({
            goToRoute: expect.any(Function),
            changeLoggedInState: expect.any(Function)
        });
    });

    it('is components an Object', () => {
        expect(typeof Navbar.components).toBe('object');
    });

    it('has correct components', () => {
        expect(Navbar.components).toEqual({
            Sidenav
        });
    });

    it('are all components a Vue component', () => {
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

    it('is computed an Object', () => {
        expect(typeof Navbar.computed).toBe('object');
    });

    it('has required computed methods', () => {
        expect(Navbar.computed).toEqual({
            isLoggedIn: expect.any(Function),
            usersName: expect.any(Function),
            usersProfilePictureSrc: expect.any(Function)
        });
    });
});