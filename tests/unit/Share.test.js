import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Share from '../../src/components/Share.vue';

// https://github.com/vuetifyjs/vuetify/issues/3456
const el = document.createElement('div');
el.setAttribute('data-app', true);
document.body.appendChild(el);

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

describe('Share', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(Share, {
            propsData: {
                show: true
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is props an Object', () => {
        expect(typeof Share.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(Share.props).toEqual({
            show: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof Share.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(Share.data()).toEqual({
            tiles: expect.any(Array)
        });
    });
});