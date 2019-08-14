import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import PostComment from '../../src/components/PostComment.vue';
import WriteReply from '../../src/components/WriteReply.vue';
import EditComment from '../../src/components/EditComment.vue';
import Snackbar from '../../src/components/Snackbar.vue';

// Store.
import store from '../Store.js';

Vue.use(VueRouter);
Vue.use(Vuetify);

describe('PostComment', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(PostComment, {
            mocks: {
                $store: store
            },
            propsData: {
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
                level: 0
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('has correct name data type', () => {
        expect(typeof PostComment.name).toBe('string');
    });

    it('has correct name string', () => {
        expect(PostComment.name).toEqual('PostComment');
    });

    it('is props an Object', () => {
        expect(typeof PostComment.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(PostComment.props).toEqual({
            comment: expect.any(Object),
            level: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof PostComment.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(PostComment.data()).toEqual({
            author: expect.any(Object),
            likeComment: expect.any(Boolean),
            loading: expect.any(Boolean),
            editCommentContent: expect.any(String),
            showEditCommentData: expect.any(Boolean),
            showEditedCommentSnackbar: expect.any(Boolean),
            showPostedReplySnackbar: expect.any(Boolean)
        });
    });

    it('is methods an Object', () => {
        expect(typeof PostComment.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(PostComment.methods).toEqual({
            addReplyFor: expect.any(Function),
            changeCurrentCommentID: expect.any(Function),
            editComment: expect.any(Function),
            goToRef: expect.any(Function),
            incrementLikesCounter: expect.any(Function),
            scrollTo: expect.any(Function),
            scrollToTop: expect.any(Function),
            showCommentEqualID: expect.any(Function),
            showEditComment: expect.any(Function),
            writeComment: expect.any(Function)
        });
    });

    it('is computed an Object', () => {
        expect(typeof PostComment.computed).toBe('object');
    });

    it('has required computed functions', () => {
        expect(PostComment.computed).toEqual({
            getAuthorProfileURL: expect.any(Function),
            getCommentID: expect.any(Function),
            getFullname: expect.any(Function),
            getLevel: expect.any(Function),
            getNextLevel: expect.any(Function),
            getProfileButtonText: expect.any(Function),
            isLoggedIn: expect.any(Function)
        });
    });

    it('is components an Object', () => {
        expect(typeof PostComment.components).toBe('object');
    });

    it('has correct components', () => {
        expect(PostComment.components).toEqual({
            WriteReply,
            EditComment,
            Snackbar
        });
    });
});