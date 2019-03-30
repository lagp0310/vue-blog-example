import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Post from '../../src/components/Post.vue';
import PostComment from '../../src/components/PostComment.vue';
import Share from '../../src/components/Share.vue';
import WriteComment from '../../src/components/WriteComment.vue';
import EditPost from '../../src/components/EditPost.vue';

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

describe('Post', () => {
    it('is a Vue instance', () => {
        const wrapper = shallowMount(Post, {
            mocks: {
                $store
            },
            propsData: {
                author: {
                    authorID: 1,
                    name: 'Test',
                    lastname: 'Tested',
                    email: 'test@example.com',
                    profileImageSrc: 'https://randomuser.me/api/portraits/men/86.jpg',
                    biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
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
                level: 0
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('is props an Object', () => {
        expect(typeof Post.props).toBe('object');
    });

    it('has correct props type', () => {
        expect(Post.props).toEqual({
            author: expect.any(Object),
            post: expect.any(Object),
            level: expect.any(Object)
        });
    });

    it('is data a function', () => {
        expect(typeof Post.data).toBe('function');
    });

    it('has data correct data types', () => {
        expect(Post.data()).toEqual({
            showSharePost: expect.any(Boolean),
            likePost: expect.any(Boolean),
            showEditPostModal: expect.any(Boolean)
        });
    });

    it('is methods an Object', () => {
        expect(typeof Post.methods).toBe('object');
    });

    it('is components an Object', () => {
        expect(typeof Post.components).toBe('object');
    });

    it('has correct components', () => {
        expect(Post.components).toEqual({
            PostComment,
            Share,
            WriteComment,
            EditPost
        });
    });

    // TODO: Find a better way to do this.
    it('are all components a Vue component', () => {
        const commentWrapper = shallowMount(PostComment, {
            mocks: {
                $store
            },
            propsData: {
                comment: {
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
                level: 0
            }
        });
        const shareWrapper = shallowMount(Share, {
            propsData: {
                show: true
            }
        });
        const writeCommentWrapper = shallowMount(WriteComment, {
            mocks: {
                $store
            },
            propsData: {
                postComments: [
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
                ]
            }
        });
        const editPostWrapper = shallowMount(EditPost, {
            mocks: {
                $store
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
        expect(commentWrapper.isVueInstance()).toBeTruthy();
        expect(shareWrapper.isVueInstance()).toBeTruthy();
        expect(writeCommentWrapper.isVueInstance()).toBeTruthy();
        expect(editPostWrapper.isVueInstance()).toBeTruthy();
    });
});