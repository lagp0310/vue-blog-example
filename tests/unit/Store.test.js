import { state, mutations } from '../Store.js';

let localState;

beforeEach(() => {
    localState = state;
});

describe('Vuex Store', () => {
    it('changes theme', () => {
        mutations.changeTheme(localState);
        expect(localState.theme).toEqual('dark');
    });

    it('changes logged in status', () => {
        mutations.changeLoggedInStatus(localState);
        expect(localState.isLoggedIn).toEqual(true);
    });

    it('updates user profile', () => {
        mutations.updateUsersProfile(localState, {
            userID: 1,
            name: 'Tested',
            lastname: 'Tested',
            email: 'test@example.com',
            gender: 'male',
            profileImageSrc: 'https://randomuser.me/api/portraits/men/88.jpg',
        });
        expect(localState.user).toEqual({
            userID: 1,
            name: 'Tested',
            lastname: 'Tested',
            email: 'test@example.com',
            gender: 'male',
            profileImageSrc: 'https://randomuser.me/api/portraits/men/88.jpg',
        });
    });

    it('changes current comment id', () => {
        mutations.changeCurrentCommentID(localState, '1');
        expect(localState.currentCommentID).toEqual('1');
    });

    it('increments last written comment id', () => {
        mutations.incrementLastWrittenCommentID(localState);
        expect(localState.lastWrittenCommentID).toEqual(8);
    });
});