import { mount, shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import EditPost from '../../src/components/EditPost.vue';
import Snackbar from '../../src/components/Snackbar.vue';
import PostHelp from '../../src/components/PostHelp.vue';

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
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "# Suam quod non ruricolae eras\n\n## Et absentem unica\n\nLorem markdownum cognoscere in [adoratis\nturpe](http://potenteminproba.io/astris) esse Helicon\n[hastam](http://www.suoque.com/constitit.html), auditur, amari Tirynthius\nliquidas femineo volvitur **est vite**. Monilia isdem ait carpere alios excidit\nspectant umero verbere volant. Erroresque tamen, Albula de credere utraque\nsumma, interea telum sanctasque isto exhortanturque mitra. Dubitant uvis modo\ncur quantum calido, hos est tantae suisque.\n\nSub numina dignas lunae. Hylen esset arma gurgite omnia mora: tam dumque\nThreiciis thalamoque phocus pyra. Dabit laedor uterque avellit non partis pinu.\nEt nec cremata plenos ad hominem auras, nec illa nam trames.\n\nIn magno reddidit miserabile vosne vires dat leti rapax unco Inachis ramos fera\ncinctum. Pro versum laqueis exspes *est nec* fidae, est ego, non putabat integer\nnon sinit certaminis pudici. Tune aera maerens temptant silva, sed vidit per\ndeciderant quoque ungula os saltus proque viget. Orsa generoso ipse proprias\ngentis habet gramen lactis! Non saxis ex tenuere et veris subdit, praeterit\ncardine videri qui altis Actaeon umida et hastam undam umbrosum.\n\n## Nubes tamen vidit domus certo\n\nTot petentes cervix. Ad fatus, esset regno laurus cursus axem, lugebat!\n\n1. Iove hic quatiens portus tum\n2. Voce illa urbes\n3. Tenuavit prius capillos aera\n4. Operique nec terga cyclopum victa\n5. Genetricis nec alios Atlante trepidantes memorata\n6. Pruinas illum Parcite perfida tremula exitus\n\nInfectas iamque. Qua reddita natus accessit maledictaque nurus, somno ad\n[lacrimas quod](http://undis.org/adveniens) mutatus inque tamen primas!\nViolentaque parte de auras foresque inemptum. Sonitum ferarum pretiumque manat\nnumerum caespite, digna exilibus.\n\n## Quosque bellicus o furta Amphrysos\n\nAdnuerat mater cupidi ausus alter! Et rauco, nec otia, si stupri in Ledam.\nLanguida quo teste attonitoque, male iacet, attonitamque voxque ait candida\nagmine. Dis ilia an nefandis Astraea. Pars deorum.\n\nEgo natura corpus postquam neu a freta educere geruntur tunc divitior servantes\nconstitit arma est. Hoc ortus humo ignes tum, est et leporem illas, ut aetas.\nAut vive dant argolico caelaverat remis. Nemus locum quod quaeque: mortale suo\nexpulit ex vincere caelesti habuit; in vicem? Contingere aethere per aequor\nsuperest *nisi* et **Hyperione**, visaque sive subiectis poma oculis, et dixerat\niuvenes?\n\nNon pace natura frater, si viro haut cum paulum paratae est: sua. Est obscura\nmaturo fieri; deos comas feroque frondibus nunc. Alii cibos, *haec* et, resonat\nsive non iam excussit agebat. Non inmitem silvas Thracesque dracones visaque.\nMiserere fatorum subito demittitur funes humo\n[Hectoreis](http://trabibus.org/caesariem-cultis), gerit, frondescere civilibus\n[deponunt ut](http://infantemque-strymone.com/oneris-missa), pro mei.\n",
                    "comments": [
                        {
                            "postId": 1,
                            "id": 1,
                            "name": "id labore ex et quam laborum",
                            "email": "Eliseo@gardner.biz",
                            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
                            "likes": 13
                        },
                        {
                            "postId": 1,
                            "id": 2,
                            "name": "quo vero reiciendis velit similique earum",
                            "email": "Jayne_Kuhic@sydney.com",
                            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
                            "likes": 26
                        },
                        {
                            "postId": 1,
                            "id": 3,
                            "name": "odio adipisci rerum aut animi",
                            "email": "Nikita@garfield.biz",
                            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
                            "likes": 7
                        },
                        {
                            "postId": 1,
                            "id": 4,
                            "name": "alias odio sit",
                            "email": "Lew@alysha.tv","body":"non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
                            "likes": 26
                        },
                        {
                            "postId": 1,
                            "id": 5,
                            "name": "vero eaque aliquid doloribus et culpa",
                            "email": "Hayden@althea.biz","body":"harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
                            "likes":1
                        }
                    ],
                    "likes":7,
                    "tags": ["sunt", "aut", "facere"]
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
            postTagsRules: expect.any(Array),
            showHelpModal: expect.any(Boolean),
            activeTabIndex: expect.any(Number)
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
            Snackbar,
            PostHelp
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