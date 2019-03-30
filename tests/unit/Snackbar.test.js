import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Snackbar from '../../src/components/Snackbar.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

describe('Snackbar', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(Snackbar, {
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

    it('is props an Object', () => {
        expect(typeof Snackbar.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(Snackbar.props).toEqual({
            show: expect.any(Object),
            snackbarColor: expect.any(Object),
            snackbarText: expect.any(Object),
            snackbarCloseTime: expect.any(Object),
            snackbarCloseText: expect.any(Object)
        });
    });
});