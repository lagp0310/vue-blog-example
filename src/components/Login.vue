<template>
    <v-container grid-list-md text-xs-center>
        <v-layout>
            <v-flex xs1 sm3 md3 lg4></v-flex>
            <v-flex xs10 sm6 md6 lg4>
                <v-card>
                    <v-container grid-list-md text-xs-center>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-img src="/public/images/logos/2/logo_transparent.png" max-height="120px" alt="Bloggy Logo" lazy-src="/public/images/logos/2/logo_transparent.png">
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
                                <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                                >
                                    <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                                    @keydown.enter="validate"
                                    @keydown.esc="blurInput($event)"
                                    ></v-text-field>
                                    <v-text-field
                                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                    :rules="passwordRules"
                                    :type="showPassword ? 'text' : 'password'"
                                    v-model="password"
                                    name="password"
                                    label="Password"
                                    value=""
                                    class="input-group--focused"
                                    @click:append="showPassword = !showPassword"
                                    @keydown.enter="validate"
                                    @keydown.esc="blurInput($event)"
                                    ></v-text-field>
                                    <v-checkbox
                                    v-model="checkbox"
                                    label="Remember Me"
                                    color="blue darken-1"
                                    required
                                    @keydown.enter="validate"
                                    @keydown.esc="blurInput($event)"
                                    ></v-checkbox>
                                    <v-btn
                                    :disabled="!valid"
                                    color="success"
                                    block
                                    @click="validate"
                                    >
                                        Login
                                    </v-btn>
                                </v-form>
                            </v-flex>
                        </v-layout>
                        <br />
                        <v-layout row wrap justify-center>
                            <v-flex xs12>
                                Or Login with
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex xs4>
                                <v-btn class="px-0 text-capitalize font-weight-regular" flat>
                                    <v-img src="https://img.icons8.com/color/48/000000/google-logo.png"></v-img>&nbsp;
                                    Google
                                </v-btn>
                            </v-flex>
                            <v-flex xs4>
                                <v-btn class="px-0 text-capitalize font-weight-regular" flat>
                                    <v-icon color="indigo darken-3">mdi-facebook</v-icon>&nbsp;
                                    Facebook&nbsp;
                                </v-btn>
                            </v-flex>
                            <v-flex xs4>
                                <v-btn class="px-0 text-capitalize font-weight-regular" flat>
                                    <v-img src="https://img.icons8.com/color/48/000000/twitter.png"></v-img>&nbsp;
                                    Twitter
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
            <v-flex xs1 sm3 md3 lg4></v-flex>
        </v-layout>
        <a href="https://icons8.com/icon/17949/google">Google icon by Icons8</a><br />
        <a href="https://icons8.com/icon/13963/twitter">Twitter icon by Icons8</a>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required.',
            v => /.+@.+/.test(v) || 'E-mail is invalid.'
        ],
        password: '',
        showPassword: false,
        passwordRules: [
            v => !!v || 'Password is required.'
        ],
        checkbox: false
    }),
    methods: {
        blurInput(event) {
            event.target.blur();
        },
        validate() {
            if(this.$refs.form.validate()) {
                this.$store.commit('changeLoggedInStatus');
                this.$router.replace('/');
                return true;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>