import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Navbar from '../../src/components/Navbar.vue';

// Store.
import store from '../Store.js';

Vue.use(VueRouter);
Vue.use(Vuetify);

describe('Navbar', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Navbar, {
            mocks: {
                $store: store
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is data a function', () => {
        expect(typeof Navbar.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(Navbar.data()).toEqual({
            darkMode: expect.any(Boolean),
            menu: expect.any(Boolean)
        });
    });
    
    it('is created a function', () => {
        expect(typeof Navbar.created).toBe('function');
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

    it('is computed an Object', () => {
        expect(typeof Navbar.computed).toBe('object');
    });

    it('has required computed functions', () => {
        expect(Navbar.computed).toEqual({
            isLoggedIn: expect.any(Function),
            usersName: expect.any(Function),
            usersProfilePictureSrc: expect.any(Function),
            getNavbarColorAccordingTheme: expect.any(Function),
            getEnableDisableDarkModeText: expect.any(Function),
            isDarkThemeEnabled: expect.any(Function)
        });
    });

    it('is watch an object', () => {
        expect(typeof Navbar.watch).toBe('object');
    });

    it('has required watch methods', () => {
        expect(Navbar.watch).toEqual({
            darkMode: expect.any(Function)
        });
    });
});