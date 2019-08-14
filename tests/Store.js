import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    theme: 'light',
    isLoggedIn: false,
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
    currentCommentID: '',
    lastWrittenCommentID: 7
};

const mutations = {
    changeTheme(state) {
        if (state.theme === 'light') {
            state.theme = 'dark';
        } else if (state.theme === 'dark') {
            state.theme = 'light';
        }
    },
    changeLoggedInStatus(state) {
        state.isLoggedIn = !state.isLoggedIn;
    },
    updateAuthorsProfile(state, data) {
        state.author = data;
    },
    changeCurrentCommentID(state, commentID) {
        state.currentCommentID = commentID;
    },
    incrementLastWrittenCommentID(state) {
        state.lastWrittenCommentID++;
    }
};

const store = new Vuex.Store({
    state,
    mutations
});

export { state, mutations };
export default store;