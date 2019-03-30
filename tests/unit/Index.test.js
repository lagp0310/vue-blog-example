import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Index from '../../src/Index.vue';
import Navbar from '../../src/components/Navbar.vue';
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

// https://vue-test-utils.vuejs.org/guides/#testing-components-that-use-router-link-or-router-view
describe('Index', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Index, {
            mocks: {
                $store
            }
            // Not necessary because we're using Vue.use(VueRouter) and it installs router-link and router-view.
            // stubs: ['router-link', 'router-view']
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is data a function', () => {
        expect(typeof Index.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(Index.data()).toEqual({
            showEditedCommentSnackbar: expect.any(Boolean)
        });
    });

    it('is components an Object', () => {
        expect(typeof Index.components).toBe('object');
    });

    it('has correct components', () => {
        expect(Index.components).toEqual({
            Navbar,
            Snackbar
        });
    });

    // TODO: Find a better way to do this.
    it('are all components a Vue component', () => {
        const navbarWrapper = shallowMount(Navbar, {
            mocks: {
                $store
            }
        });
        const snackbarWrapper = shallowMount(Snackbar, {
            propsData: {
                show: true,
                snackbarColor: 'grey',
                snackbarText: 'Test',
                snackbarCloseTime: 6000,
                snackbarCloseText: 'Close'
            }
        });
        expect(navbarWrapper.isVueInstance()).toBeTruthy();
        expect(snackbarWrapper.isVueInstance()).toBeTruthy();
    });
});