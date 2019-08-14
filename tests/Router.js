import Vue from 'vue';
import VueRouter from 'vue-router';

// Components.
import ViewNotFound from '../src/components/ViewNotFound.vue';
import Signup from '../src/components/Signup.vue';
import Login from '../src/components/Login.vue';
import Post from '../src/components/Post.vue';
import AuthorProfile from '../src/components/AuthorProfile.vue';
import About from '../src/components/About.vue';
import TermsOfServiceModal from '../src/components/TermsOfServiceModal.vue';
import Articles from '../src/components/Articles.vue';
import Contact from '../src/components/Contact.vue';

Vue.use(VueRouter);

// Some information about querySelector for the commentID: 
// https://stackoverflow.com/questions/37270787/uncaught-syntaxerror-failed-to-execute-queryselector-on-document
const routes = [
    { path: '*', component: ViewNotFound },
    { path: '/', redirect: '/articles' },
    { path: '/articles', component: Articles },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/terms', component: TermsOfServiceModal },
    { 
        path: '/signup', component: Signup,
        beforeEnter: (to, from, next) => {
            return store.state.isLoggedIn ? next({ path: '/' }) : next();
        }
    },
    { 
        path: '/login', component: Login,
        beforeEnter: (to, from, next) => {
            return store.state.isLoggedIn ? next({ path: '/' }) : next();
        }
    },
    {
        path: '/posts/:postId', component: Post, props: (route) => ({
            postId: route.params.postId,
            startingCommentLevel: 0
        })
    },
    {
        path: '/my-profile', component: AuthorProfile,
        beforeEnter: (to, from, next) => {
            return store.state.isLoggedIn ? next() : next({ path: '/login?redirect=/my-profile' });
        }
    },
    {
        path: '/authors/:authorId', component: AuthorProfile
    }
];

const router = new VueRouter({
    // https://router.vuejs.org/api/#mode
    // https://stackoverflow.com/questions/34623833/how-to-remove-hashbang-from-url
    // mode: 'history',
    routes
});

export default router;