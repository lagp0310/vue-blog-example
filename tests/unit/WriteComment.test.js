import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import WriteComment from '../../src/components/WriteComment.vue';
import Snackbar from '../../src/components/Snackbar.vue';

// Store.
import store from '../Store.js';

Vue.use(VueRouter);
Vue.use(Vuetify);

describe('WriteComment', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(WriteComment, {
            mocks: {
                $store: store
            },
            propsData: {
                postComments: [
                    {
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
                    {
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
                        "id": 2,
                        "name": "quo vero reiciendis velit similique earum",
                        "email": "Jayne_Kuhic@sydney.com",
                        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
                    },
                    {
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
                        "id": 3,
                        "name": "odio adipisci rerum aut animi",
                        "email": "Nikita@garfield.biz",
                        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
                    },
                    {
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
                        "id": 4,
                        "name": "alias odio sit",
                        "email": "Lew@alysha.tv",
                        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
                    }
                ]
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is props an Object', () => {
        expect(typeof WriteComment.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(WriteComment.props).toEqual({
            postComments: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof WriteComment.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(WriteComment.data()).toEqual({
            showPostedCommentSnackbar: expect.any(Boolean),
            isFormValid: expect.any(Boolean),
            textareaComment: expect.any(String),
            textareaCommentRules: expect.any(Array)
        });
    });

    it('is methods an Object', () => {
        expect(typeof WriteComment.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(WriteComment.methods).toEqual({
            blurInput: expect.any(Function),
            validate: expect.any(Function),
            changeCurrentCommentID: expect.any(Function),
            scrollToTop: expect.any(Function)
        });
    });

    it('is computed an Object', () => {
        expect(typeof WriteComment.computed).toBe('object');
    });

    it('has required computed functions', () => {
        expect(WriteComment.computed).toEqual({
            getFullname: expect.any(Function),
            getProfileImageSrc: expect.any(Function),
            getAuthorProfileURL: expect.any(Function)
        });
    });

    it('is components an Object', () => {
        expect(typeof WriteComment.components).toBe('object');
    });

    it('has correct components', () => {
        expect(WriteComment.components).toEqual({
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