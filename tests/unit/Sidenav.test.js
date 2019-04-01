import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Sidenav from '../../src/components/Sidenav.vue';

// Store.
import store from '../Store.js';

Vue.use(VueRouter);
Vue.use(Vuetify);

describe('Sidenav', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Sidenav, {
            mocks: {
                $store: store
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
            darkMode: expect.any(Boolean),
            showSidenav: expect.any(Boolean),
            items: expect.any(Array)
        });
    });

    it('is created a function', () => {
        expect(typeof Sidenav.created).toBe('function');
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

    it('has required computed functions', () => {
        expect(Sidenav.computed).toEqual({
            isLoggedIn: expect.any(Function),
            usersName: expect.any(Function),
            usersProfilePictureSrc: expect.any(Function),
            getCurrentTheme: expect.any(Function),
            getSidenavElementsColorAccordingTheme: expect.any(Function),
            getEnableDisableDarkModeText: expect.any(Function),
            isLightThemeEnabled: expect.any(Function),
            isDarkThemeEnabled: expect.any(Function)
        });
    });

    it('is watch an object', () => {
        expect(typeof Sidenav.watch).toBe('object');
    });

    it('has required watch methods', () => {
        expect(Sidenav.watch).toEqual({
            show: expect.any(Function),
            showSidenav: expect.any(Function),
            darkMode: expect.any(Function)
        });
    });
});