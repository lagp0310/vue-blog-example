import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import WriteReply from '../../src/components/WriteReply.vue';
import Snackbar from '../../src/components/Snackbar.vue';

// Store.
import store from '../Store.js';

Vue.use(VueRouter);
Vue.use(Vuetify, {
    iconfont: 'mdi'
});

describe('WriteReply', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(WriteReply, {
            mocks: {
                $store: store
            },
            propsData: {
                level: 0,
                comment: {
                    author: {
                        "gender": "female",
                        "name": {
                            "title": "miss",
                            "first": "afra",
                            "last": "leerentveld"
                        },
                        "location": {
                            "street": "7553 herenstraat",
                            "city": "loppersum",
                            "state": "zuid-holland",
                            "postcode": 20040,
                            "coordinates": {
                                "latitude": "43.2735",
                                "longitude": "70.6235"
                            },
                            "timezone": {
                                "offset": "-5:00",
                                "description": "Eastern Time (US & Canada), Bogota, Lima"
                            }
                        },
                        "email": "afra.leerentveld@example.com",
                        "login": {
                            "uuid": "0613c48f-1db8-4bf7-9f2f-7b3ed7861c67",
                            "username": "yellowkoala741",
                            "password": "birgit",
                            "salt": "2TGS9BY7",
                            "md5": "a722903dceac9190837772af9e0e5d00",
                            "sha1": "5a1340e3a5fc11df5cc417360d882abf1570c17e",
                            "sha256": "9a083d8d6509b16bccefd5d41138ae383408bbb38c863535d565b065259c3a73"
                        },
                        "dob": {
                            "date": "1956-07-05T19:47:32Z",
                            "age": 63
                        },
                        "registered": {
                            "date": "2017-04-18T09:00:06Z",
                            "age": 2
                        },
                        "phone": "(453)-073-4451",
                        "cell": "(519)-754-8161",
                        "id": {
                            "name": "BSN",
                            "value": "54918938"
                        },
                        "picture": {
                            "large": "https://randomuser.me/api/portraits/women/82.jpg",
                            "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
                            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
                        },
                        "nat": "NL"
                    },
                    "postId": 1,
                    "id": 1,
                    "name": "id labore ex et quam laborum",
                    "email": "Eliseo@gardner.biz",
                    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                },
                showPostedReplySnackbar: true
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
    
    it('is props an Object', () => {
        expect(typeof WriteReply.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(WriteReply.props).toEqual({
            level: expect.any(Object),
            comment: expect.any(Object),
            showPostedReplySnackbar: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof WriteReply.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(WriteReply.data()).toEqual({
            isFormValid: expect.any(Boolean),
            textareaReply: expect.any(String),
            textareaReplyRules: expect.any(Array)
        });
    });

    it('is methods an Object', () => {
        expect(typeof WriteReply.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(WriteReply.methods).toEqual({
            blurInput: expect.any(Function),
            validate: expect.any(Function),
            changeCurrentCommentID: expect.any(Function)
        });
    });

    it('is computed an Object', () => {
        expect(typeof WriteReply.computed).toBe('object');
    });

    it('has required computed functions', () => {
        expect(WriteReply.computed).toEqual({
            getLevel: expect.any(Function),
            getFullname: expect.any(Function),
            getProfileImageSrc: expect.any(Function)
        });
    });

    it('is components an Object', () => {
        expect(typeof WriteReply.components).toBe('object');
    });

    it('has correct components', () => {
        expect(WriteReply.components).toEqual({
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