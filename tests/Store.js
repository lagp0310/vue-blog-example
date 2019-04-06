import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    theme: 'light',
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
    updateUsersProfile(state, data) {
        state.user = data;
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