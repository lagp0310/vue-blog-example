<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex sm4 md3></v-flex>
                <v-flex xs12 sm4 md6>
                    <v-layout row justify-center>
                        <v-avatar
                        :tile="false"
                        :size="`200px`"
                        color="grey lighten-4"
                        >
                            <v-img :src="user.profileImageSrc" contain alt="avatar"></v-img>
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
                            <v-icon dark>cloud_upload</v-icon>&nbsp;
                            Upload Profile Picture
                        </v-btn>
                    </v-layout>
                    <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    >
                        <v-text-field
                        v-model="user.name"
                        :rules="nameRules"
                        label="Name"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="user.lastname"
                        :rules="lastnameRules"
                        label="Lastname"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="user.email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        ></v-text-field>
                        <v-radio-group row :rules="[genderSelectorRules.required]" v-model="user.genr">
                            <v-radio label="Male" value="male" color="info"></v-radio>
                            <v-radio label="Female" value="female" color="pink"></v-radio>
                        </v-radio-group>
                        <v-divider></v-divider>
                        <v-layout justify-center>
                            <v-btn flat @click="showChangePasswordDialog = !showChangePasswordDialog">
                                <v-icon>lock</v-icon>&nbsp;
                                Change Password
                            </v-btn>
                        </v-layout>
                    </v-form>
                </v-flex>
                <v-flex sm4 md3></v-flex>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout row justify-center>
                <v-dialog v-model="showChangePasswordDialog" persistent max-width="35%">
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
                                        <v-text-field
                                        :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                                        :rules="[passwordRules.required, passwordRules.min]"
                                        :type="showPassword ? 'text' : 'password'"
                                        label="New Password"
                                        hint="At least 8 characters"
                                        value=""
                                        class="input-group--focused"
                                        @click:append="showPassword = !showPassword"
                                        ></v-text-field>
                                        <v-text-field
                                        :append-icon="showPasswordConfirmation ? 'visibility_off' : 'visibility'"
                                        :rules="[passwordRules.required, passwordRules.min]"
                                        :type="showPasswordConfirmation ? 'text' : 'password'"
                                        label="Confirm New Password"
                                        hint="At least 8 characters."
                                        value=""
                                        class="input-group--focused"
                                        @click:append="showPasswordConfirmation = !showPasswordConfirmation"
                                        ></v-text-field>
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
    </div>
</template>

<script>
export default {
    props: {
        user: Object,
    },
    data: () => ({
        showChangePasswordDialog: false,
        loading: false,
        valid: true,
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
            min: v => v.length >= 8 || 'Min 8 characters',
            passwordsMatch: () => ('The password and the password confirmation does not match!'),
        },
        genderSelectorRules: {
            required: value => (value === 'female' || value === 'male') || 'Required.'
        },
    }),
    methods: {
        doPasswordsMatch () {
            return (this.password === this.passwordConfirmation ? true : 'Passwords do not match!');
        }
    },
    watch: {
        loader () {
            const l = this.loader
            this[l] = !this[l]
            setTimeout(() => (this[l] = false), 3000)
            this.loader = null
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>