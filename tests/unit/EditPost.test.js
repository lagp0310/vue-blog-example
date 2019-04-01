import { mount, shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import EditPost from '../../src/components/EditPost.vue';
import Snackbar from '../../src/components/Snackbar.vue';

// Store.
import store from '../Store.js';

// https://github.com/vuetifyjs/vuetify/issues/3456
const el = document.createElement('div');
el.setAttribute('data-app', true);
document.body.appendChild(el);

Vue.use(VueRouter);
Vue.use(Vuetify);

describe('EditPost', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(EditPost, {
            mocks: {
                $store: store
            },
            propsData: {
                post: {
                    postID: 1,
                    title: 'Ut mattis dignissim convallis. Maecenas non magna imperdiet arcu accumsan pulvinar non.',
                    body: '\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed sollicitudin pharetra quam eu fermentum.\
                    Fusce nunc ex, faucibus sit amet augue ac, molestie rutrum eros.Cras semper, libero eu porta \
                    facilisis, ex arcu lacinia ante, eu molestie tellus ipsum sit amet erat.Aenean commodo vehicula sapien \
                    non auctor.Nullam et velit magna.Nunc sed velit eget nisl mollis vehicula vel at metus.Fusce elit \
                    sapien, luctus eget sapien nec, accumsan ultrices ante.Maecenas sapien nulla, fringilla sed nisi quis, \
                    tempus imperdiet velit.Aliquam ac diam neque.\
                    Pellentesque lacinia, metus at semper volutpat, odio purus sagittis elit, non sollicitudin sem felis \
                    et odio. Proin vitae facilisis est, nec iaculis libero.Suspendisse congue facilisis magna, id \
                    condimentum dui blandit et.Etiam magna lorem, pulvinar quis sapien vel, ullamcorper gravida nisl.\
                    Pellentesque ligula mauris, interdum in luctus vel, luctus nec ex.Nam quis sagittis justo.Aliquam \
                    viverra lacus at erat sollicitudin ultrices.Nulla porta sed eros ornare rhoncus.Aliquam nec aliquet \
                    massa, eu efficitur leo.Nulla facilisi.Duis quis diam eu augue semper aliquam nec a lectus.\
                    Praesent semper malesuada pellentesque.Nam placerat id erat eget placerat.Donec ac ipsum ac ex \
                    aliquet aliquam.Etiam hendrerit magna fermentum est viverra, vitae interdum augue tempor.Lorem \
                    ipsum dolor sit amet, consectetur adipiscing elit.Vivamus interdum efficitur tellus, nec egestas \
                    justo posuere in.In finibus non nisl quis mollis.Donec fringilla, lacus non pulvinar tempor, nisl \
                    odio aliquet ex, non viverra sem libero et sem.Vivamus eget sollicitudin felis, non sollicitudin \
                    orci.Donec ligula augue, laoreet ac tristique nec, tempor et arcu.Nulla in rutrum quam, nec feugiat \
                    nunc.Integer eu pulvinar tortor, a ullamcorper mi.Fusce aliquet vulputate lacus, eget maximus felis \
                    convallis nec.Proin non tortor dolor.Suspendisse potenti.\
                    Ut dolor libero, commodo tincidunt diam nec, pretium consectetur quam.Duis tempus iaculis tellus, \
                    sed sodales ligula eleifend quis.Donec vel ligula id nisl gravida bibendum tincidunt varius massa.\
                    Suspendisse potenti.Pellentesque vel bibendum quam.Cras a finibus lacus, nec semper risus.Quisque \
                    placerat, dolor non pretium aliquam, nibh arcu porta massa, in fringilla mauris diam tempor libero.\
                    Proin fermentum mauris placerat orci feugiat eleifend.\
                    Praesent eget suscipit turpis, eget mattis erat.Nulla dictum dolor et tellus cursus euismod.\
                    Nam quis mi sed enim luctus dapibus.Sed aliquet gravida ligula sed placerat.Aenean ac facilisis \
                    metus.Praesent congue feugiat consequat.Suspendisse lobortis vel ipsum vel suscipit.Integer \
                    consequat rhoncus velit ut sodales.Suspendisse elementum finibus lacus, et vulputate ipsum pulvinar \
                    vitae.Cras ut porta nunc.Maecenas elementum augue libero, eget hendrerit velit feugiat quis.\
                    Pellentesque tempor interdum pulvinar.Nullam aliquet bibendum turpis, vitae imperdiet ligula \
                    commodo et.Praesent id turpis et augue interdum tempus.Duis eleifend finibus justo, ac gravida \
                    lorem pharetra id.Duis dapibus nunc at eros vestibulum auctor.Proin maximus laoreet pellentesque.\
                    Nulla dictum sapien in eros mattis, eget blandit arcu iaculis.Suspendisse eu tortor id tortor tempus \
                    tincidunt.Nullam accumsan nunc a lectus sagittis fringilla.Donec consequat ante metus, a convallis \
                    justo rhoncus quis.Phasellus vel dolor a mi congue tempus.\
                    ',
                    comments: [
                        {
                            user: {
                                userID: 1,
                                name: 'Test',
                                lastname: 'Tested',
                                profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                            },
                            createdByUserID: 1,
                            commentID: 'c1',
                            postId: 567,
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor ligula, tincidunt.',
                            likes: 44,
                            replies: [],
                            createdAt: '1552435492020',
                            updatedAt: '1552435492020'
                        },
                        {
                            user: {
                                userID: 2,
                                name: 'Test',
                                lastname: 'Tested',
                                profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                            },
                            createdByUserID: 2,
                            commentID: 'c2',
                            postId: 567,
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ex vel \
                        consectetur consectetur. Pellentesque vel leo lacinia.',
                            likes: 4,
                            replies: [
                                {
                                    user: {
                                        userID: 3,
                                        name: 'User1',
                                        lastname: 'Replied',
                                        profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                                    },
                                    createdByUserID: 3,
                                    replyToId: 'c2',
                                    commentID: 'c3',
                                    postId: 567,
                                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ex vel \
                                consectetur consectetur. Pellentesque vel leo lacinia.',
                                    likes: 1,
                                    replies: [],
                                    createdAt: '1552435603459',
                                    updatedAt: '1552435603459'
                                },
                                {
                                    user: {
                                        userID: 4,
                                        name: 'User2',
                                        lastname: 'Replied',
                                        profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                                    },
                                    createdByUserID: 4,
                                    replyToId: 'c2',
                                    commentID: 'c4',
                                    postId: 567,
                                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ex vel \
                                consectetur consectetur. Pellentesque vel leo lacinia.',
                                    likes: 3,
                                    replies: [
                                        {
                                            user: {
                                                userID: 5,
                                                name: 'User1',
                                                lastname: 'Replied',
                                                profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                                            },
                                            createdByUserID: 5,
                                            replyToId: 'c4',
                                            commentID: 'c5',
                                            postId: 567,
                                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan ex vel \
                                        consectetur consectetur. Pellentesque vel leo lacinia.',
                                            likes: 1,
                                            replies: [],
                                            createdAt: '1552435546827',
                                            updatedAt: '1552435546827'
                                        }
                                    ],
                                    createdAt: '1552435630766',
                                    updatedAt: '1552435630766'
                                }
                            ],
                            createdAt: '1552435511192',
                            updatedAt: '1552435511192'
                        },
                        {
                            user: {
                                userID: 1,
                                name: 'Test',
                                lastname: 'Tested',
                                profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                            },
                            createdByUserID: 1,
                            commentID: 'c6',
                            postId: 567,
                            content: 'Lorem ipsum dolor sit amet.',
                            likes: 0,
                            replies: [],
                            createdAt: '1552435558863',
                            updatedAt: '1552435558863'
                        },
                        {
                            user: {
                                userID: 1,
                                name: 'Test',
                                lastname: 'Tested',
                                profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg'
                            },
                            createdByUserID: 1,
                            commentID: 'c7',
                            postId: 567,
                            content: 'Lorem ipsum dolor.',
                            likes: 12,
                            replies: [],
                            createdAt: '1552435558870',
                            updatedAt: '1552435558870'
                        }
                    ],
                    postImageSrc: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
                    tags: ['#dev', '#test', '#info'],
                    likes: 45
                },
                showDialog: true
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is props an Object', () => {
        expect(typeof EditPost.props).toBe('object');
    });

    it('has props correct data type', () => {
        expect(EditPost.props).toEqual({
            post: expect.any(Object),
            showDialog: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof EditPost.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(EditPost.data()).toEqual({
            isTitleFormValid: expect.any(Boolean),
            isBodyFormValid: expect.any(Boolean),
            isTagsFormValid: expect.any(Boolean),
            showEmptySnackbar: expect.any(Boolean),
            showRepeatedTagSnackbar: expect.any(Boolean),
            postTitle: expect.any(String),
            postTitleRules: expect.any(Array),
            postBody: expect.any(String),
            postBodyRules: expect.any(Array),
            newTag: expect.any(String),
            postTags: expect.any(Array),
            postTagsRules: expect.any(Array)
        });
    });

    it('is mounted a function', () => {
        expect(typeof EditPost.mounted).toBe('function');
    });

    it('is methods an Object', () => {
        expect(typeof EditPost.methods).toBe('object');
    });

    it('has required methods', () => {
        expect(EditPost.methods).toEqual({
            blurInput: expect.any(Function),
            isTagAlreadyInArray: expect.any(Function),
            isTagEmpty: expect.any(Function),
            addTag: expect.any(Function),
            removeTag: expect.any(Function),
            allFieldsValid: expect.any(Function),
            validate: expect.any(Function),
            resetEditPostContent: expect.any(Function),
            compiledMarkdown: expect.any(Function)
        });
    });

    it('is components an Object', () => {
        expect(typeof EditPost.components).toBe('object');
    });

    it('has correct components', () => {
        expect(EditPost.components).toEqual({
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