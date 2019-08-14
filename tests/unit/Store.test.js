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

    it('updates author profile', () => {
        mutations.updateAuthorsProfile(localState, {
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
        });
        expect(localState.author).toEqual({
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