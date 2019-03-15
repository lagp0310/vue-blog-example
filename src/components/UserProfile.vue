<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex sm4 md3></v-flex>
                <v-flex xs12 sm4 md6>
                    <v-layout row justify-center>
                        <v-avatar
                        size="200px"
                        color="grey lighten-4"
                        >
                            <v-img :src="profileImageSrc" contain alt="avatar" :lazy-src="profileImageSrc">
                                <template v-slot:placeholder>
                                    <v-layout
                                    fill-height
                                    align-center
                                    justify-center
                                    ma-0
                                    >
                                        <v-progress-circular indeterminate color="grey"></v-progress-circular>
                                    </v-layout>
                                </template>
                            </v-img>
                        </v-avatar>
                    </v-layout>
                    <v-layout row justify-center>
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
                        label="Name"
                        required
                        ></v-text-field>
                        <v-text-field
                        v-model="lastname"
                        :rules="lastnameRules"
                        label="Lastname"
                        required
                        ></v-text-field>
                        <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        ></v-text-field>
                        <v-radio-group v-model="gender" row :rules="[genderSelectorRules.required]">
                            <v-radio label="Male" value="male" color="info"></v-radio>
                            <v-radio label="Female" value="female" color="pink"></v-radio>
                        </v-radio-group>
                        <v-divider></v-divider>
                        <v-layout justify-center>
                            <v-btn flat @click="showChangePasswordDialog = !showChangePasswordDialog">
                                <v-icon>mdi-lock</v-icon>&nbsp;
                                Change Password
                            </v-btn>
                        </v-layout>
                    </v-form>
                    <v-btn color="info" block @click="showProfileUpdatedSnackbar = true, updateUsersProfile()">
                        Update Profile
                    </v-btn>
                </v-flex>
                <v-flex sm4 md3></v-flex>
            </v-layout>
        </v-container>
        <v-container justify-center>
            <v-layout row>
                <v-dialog v-model="showChangePasswordDialog" persistent max-width="600px">
                    <v-card>
                        <v-card-title>
                            <v-layout justify-center>
                                <span class="headline">Change Account's Password</span>
                            </v-layout>
                        </v-card-title>
                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout row wrap justify-center>
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
                            <v-spacer></v-spacer>
                            <v-btn color="grey" flat @click="showChangePasswordDialog = false">
                                Cancel
                            </v-btn>
                            <v-btn color="blue darken-1" flat @click="changePassword()">
                                Change Password
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </v-container>
        <Snackbar 
        :show.sync="showProfileUpdatedSnackbar" 
        snackbarColor="grey darken-1" 
        snackbarText="Profile was updated!" 
        :snackbarCloseTime="6000"
        snackbarCloseText="Close"
        ></Snackbar>
    </div>
</template>

<script>
import Snackbar from './Snackbar.vue';

export default {
    data: () => ({
        showChangePasswordDialog: false,
        showProfileUpdatedSnackbar: false,
        loading: false,
        isFormValid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        lastname: '',
        lastnameRules: [
            v => !!v || 'Lastname is required',
            v => (v && v.length <= 10) || 'Lastname must be less than 10 characters'
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
    mounted() {
        this.name = this.$store.state.user.name;
        this.lastname = this.$store.state.user.lastname;
        this.email = this.$store.state.user.email;
        this.gender = this.$store.state.user.gender;
        this.profileImageSrc = this.$store.state.user.profileImageSrc;
    },
    methods: {
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
        updateUsersProfile() {
            this.$store.commit('updateUsersProfile', {
                name: this.name,
                lastname: this.lastname,
                email: this.email,
                gender: this.gender,
                profileImageSrc: this.profileImageSrc,
            });
        }
    },
    watch: {
        loader () {
            const l = this.loader
            this[l] = !this[l]
            setTimeout(() => (this[l] = false), 3000)
            this.loader = null
        }
    },
    components: {
        Snackbar
    }
}
</script>

<style lang="scss" scoped>
    
</style>