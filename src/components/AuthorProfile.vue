<template>
    <div>
        <v-container>
            <v-layout 
                row 
                wrap
            >
                <v-flex 
                    sm4 
                    md3 
                />
                <v-flex 
                    xs12 
                    sm4 
                    md6
                >
                    <v-layout 
                        row 
                        justify-center
                    >
                        <v-avatar
                            size="200px"
                            color="grey lighten-4"
                        >
                            <v-img 
                                :src="profileImageSrc" 
                                contain 
                                alt="avatar" 
                                :lazy-src="profileImageSrc"
                            >
                                <template v-slot:placeholder>
                                    <v-layout
                                        fill-height
                                        align-center
                                        justify-center
                                        ma-0
                                    >
                                        <v-progress-circular 
                                            indeterminate 
                                            color="grey" 
                                        />
                                    </v-layout>
                                </template>
                            </v-img>
                        </v-avatar>
                    </v-layout>
                    <v-layout 
                        v-if="isAllowedToUpdate"
                        row 
                        justify-center
                    >
                        <!-- Check: https://vuetifyjs.com/en/components/buttons#loaders -->
                        <v-btn
                            flat
                            :loading="loading"
                            :disabled="loading"
                            color="blue-grey"
                            class="white--text"
                            @click="loader = 'loading'"
                        >
                            <v-icon dark>mdi-cloud-upload</v-icon>&nbsp;
                            Upload Profile Picture
                        </v-btn>
                    </v-layout>
                    <v-form
                        ref="form"
                        v-model="isFormValid"
                        lazy-validation
                    >
                        <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            label="Name:"
                            required
                            @keydown.enter="updateAuthorsProfile()"
                            @keydown.esc="blurInput($event)"
                        ></v-text-field>
                        <v-text-field
                            v-model="lastname"
                            :rules="lastnameRules"
                            label="Lastname:"
                            required
                            @keydown.enter="updateAuthorsProfile()"
                            @keydown.esc="blurInput($event)"
                        ></v-text-field>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail:"
                            required
                            @keydown.enter="updateAuthorsProfile()"
                            @keydown.esc="blurInput($event)"
                        ></v-text-field>
                        <v-radio-group 
                            v-model="gender" 
                            row 
                            :rules="[genderSelectorRules.required]"
                        >
                            <v-radio 
                                label="Male" 
                                value="male" 
                                color="info" 
                            />
                            <v-radio 
                                label="Female" 
                                value="female" 
                                color="pink" 
                            />
                        </v-radio-group>
                        <v-divider />
                        <v-layout 
                            v-if="isAllowedToUpdate"
                            justify-center
                        >
                            <v-btn 
                                flat 
                                @click="showChangePasswordDialog = !showChangePasswordDialog"
                            >
                                <v-icon>mdi-lock</v-icon>&nbsp;
                                Change Password
                            </v-btn>
                        </v-layout>
                    </v-form>
                    <v-btn 
                        v-if="isAllowedToUpdate"
                        color="info" 
                        block 
                        @click="updateAuthorsProfile()"
                    >
                        Update Profile
                    </v-btn>
                </v-flex>
                <v-flex 
                    sm4 
                    md3 
                />
            </v-layout>
        </v-container>
        <v-container justify-center>
            <v-layout row>
                <v-dialog 
                    v-model="showChangePasswordDialog" 
                    persistent 
                    max-width="600px"
                >
                    <v-card>
                        <v-card-title>
                            <v-layout justify-center>
                                <span class="headline">Change Account's Password</span>
                            </v-layout>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout 
                                    row 
                                    wrap 
                                    justify-center
                                >
                                    <v-flex xs12>
                                        <v-form
                                            ref="form"
                                            v-model="isFormValid"
                                            lazy-validation
                                        >
                                            <v-text-field
                                                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                                :rules="[passwordRules.required, passwordRules.min, checkPasswordChange]"
                                                :type="showPassword ? 'text' : 'password'"
                                                v-model="password"
                                                label="New Password"
                                                hint="At least 8 characters"
                                                value=""
                                                class="input-group--focused"
                                                @click:append="showPassword = !showPassword"
                                            ></v-text-field>
                                            <v-text-field
                                                :append-icon="showPasswordConfirmation ? 'mdi-eye-off' : 'mdi-eye'"
                                                :rules="[passwordRules.required, passwordRules.min, doPasswordsMatch]"
                                                :type="showPasswordConfirmation ? 'text' : 'password'"
                                                v-model="passwordConfirmation"
                                                label="Confirm New Password"
                                                hint="At least 8 characters."
                                                value=""
                                                class="input-group--focused"
                                                @click:append="showPasswordConfirmation = !showPasswordConfirmation"
                                            ></v-text-field>
                                        </v-form>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer />
                            <v-btn 
                                color="grey" 
                                flat 
                                @click="showChangePasswordDialog = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn 
                                color="blue darken-1" 
                                flat 
                                @click="changePassword()"
                            >
                                Change Password
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </v-container>
        <Snackbar 
            :show.sync="showProfileUpdatedSnackbar" 
            snackbar-color="grey darken-1" 
            snackbar-text="Profile was updated!" 
            :snackbar-close-time="6000"
            snackbar-close-text="Close"
        ></Snackbar>
    </div>
</template>

<script>
import axios from 'axios';
import lodash from 'lodash';

import Snackbar from './Snackbar.vue';

export default {
    components: {
        Snackbar
    },
    data: () => ({
        showChangePasswordDialog: false,
        showProfileUpdatedSnackbar: false,
        loading: false,
        isFormValid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 20) || 'Name must be less than 20 characters'
        ],
        lastname: '',
        lastnameRules: [
            v => !!v || 'Lastname is required',
            v => (v && v.length <= 20) || 'Lastname must be less than 20 characters'
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        showPassword: false,
        showPasswordConfirmation: false,
        password: '',
        passwordConfirmation: '',
        passwordRules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters'
        },
        gender: '',
        genderSelectorRules: {
            required: value => (value === 'female' || value === 'male') || 'Required.'
        },
        profileImageSrc: ''
    }),
    computed: {
        isAllowedToUpdate() {
            return this.$store.state.isLoggedIn && this.$store.state.author.login.uuid === 'c0c644c3-cdf7-43e8-ab7f-dc5b83a8bbc0';
        }
    },
    watch: {
        loader() {
            const l = this.loader;
            this[l] = !this[l];
            setTimeout(() => (this[l] = false), 3000);
            this.loader = null;
        }
    },
    mounted() {
        // If no filled author Object was provided, get a random one using https://randomuser.me/api/.
        if(!this.$store.state.isLoggedIn) {
            axios.get('https://randomuser.me/api/')
            .then((response) => {
                this.name = response.data.results[0].name.first;
                this.lastname = response.data.results[0].name.last;
                this.email = response.data.results[0].email;
                this.gender = response.data.results[0].gender;
                this.profileImageSrc = response.data.results[0].picture.large;
            })
            .catch((error) => {
                console.log(error);
            });

            return;
        }

        // Check https://randomuser.me/api/ for details.
        this.name = this.$store.state.author.name.first;
        this.lastname = this.$store.state.author.name.last;
        this.email = this.$store.state.author.email;
        this.gender = this.$store.state.author.gender;
        this.profileImageSrc = this.$store.state.author.picture.large;
    },
    methods: {
        blurInput(event) {
            event.target.blur();
        },
        doPasswordsMatch () {
            return (this.password === this.passwordConfirmation ? true : 'Passwords do not match!');
        },
        changePassword() {
            if(this.$refs.form.validate()) {
                this.showChangePasswordDialog = false;
                this.password = '';
                this.passwordConfirmation = '';
                return true;
            }

            return false;
        },
        checkPasswordChange() {
            if(this.passwordConfirmation.length > 0 && this.password !== this.passwordConfirmation) {
                this.passwordConfirmation = '';
            }

            return true;
        },
        updateAuthorsProfile() {
            let currentAuthor = this.$store.state.author;
            currentAuthor.name.first = this.name;
            currentAuthor.name.last = this.lastname;
            currentAuthor.email = this.email;
            currentAuthor.gender = this.gender;
            currentAuthor.profileImageSrc = this.profileImageSrc;
            this.$store.commit('updateAuthorsProfile', currentAuthor);
            this.$data.showProfileUpdatedSnackbar = true;
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>