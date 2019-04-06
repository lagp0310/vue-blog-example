import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Index from '../../src/Index.vue';
import Navbar from '../../src/components/Navbar.vue';
import Sidenav from '../../src/components/Sidenav.vue';
import Snackbar from '../../src/components/Snackbar.vue'; 
import WritePost from '../../src/components/WritePost.vue';

// Store.
import store from '../Store.js';

// Some information about Tests.
// Cannot use Vuetify with localVue instance. 
//   See https://github.com/vuejs/vue-test-utils/issues/1087
//   See https://github.com/vuetifyjs/vuetify/issues/4068
//   See https://github.com/vuetifyjs/vuetify/issues/4964
// https://vue-test-utils.vuejs.org/guides/using-with-vuex.html
// https://lmiller1990.github.io/vue-testing-handbook/vuex-in-components.html#using-a-mock-store
// https://forum.vuejs.org/t/testing-with-jest-vue-test-utils-vuex/26060/4

Vue.use(VueRouter);
Vue.use(Vuetify);

// https://vue-test-utils.vuejs.org/guides/#testing-components-that-use-router-link-or-router-view
describe('Index', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Index, {
            mocks: {
                $store: store
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is data a function', () => {
        expect(typeof Index.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(Index.data()).toEqual({
            showEditedCommentSnackbar: expect.any(Boolean),
            showSidenav: expect.any(Boolean),
            showWritePost: expect.any(Boolean)
        });
    });

    it('is components an Object', () => {
        expect(typeof Index.components).toBe('object');
    });

    it('has correct components', () => {
        expect(Index.components).toEqual({
            Navbar,
            Sidenav,
            Snackbar,
            WritePost
        });
    });
});