<template>
    <v-container grid-list-md text-xs-center>
        <v-layout>
            <v-flex sm3 md4></v-flex>
            <v-flex xs12 sm6 md4>
                <v-card>
                    <v-card-title primary-title>
                        <v-container text-xs-center>
                            <v-layout>
                                <v-flex xs12>
                                    <h3 class="font-weight-light headline mb-0">Login</h3>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-title>
                    <v-container grid-list-md text-xs-center>
                        <v-layout row wrap>
                            <v-flex xs12>
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
                                    ></v-text-field>

                                    <v-text-field
                                    :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                                    :rules="passwordRules"
                                    :type="showPassword ? 'text' : 'password'"
                                    v-model="password"
                                    name="password"
                                    label="Password"
                                    value=""
                                    class="input-group--focused"
                                    @click:append="showPassword = !showPassword"
                                    ></v-text-field>

                                    <v-checkbox
                                    v-model="checkbox"
                                    label="Remember Me"
                                    color="blue darken-4"
                                    required
                                    ></v-checkbox>

                                    <v-btn
                                    :disabled="!valid"
                                    color="success"
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
                                    <img src="https://img.icons8.com/color/24/000000/google-logo.png">&nbsp;
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
                                    <v-icon color="blue lighten-1">mdi-twitter</v-icon>&nbsp;
                                    Twitter
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
            <v-flex sm3 md4></v-flex>
        </v-layout>
        <a href="https://icons8.com/icon/17949/google">Google icon by Icons8</a>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail is invalid.'
        ],
        password: '',
        showPassword: false,
        passwordRules: [
            v => !!v || 'Password is required.'
        ],
        checkbox: false,
    }),
    methods: {
        validate() {
            if(this.$refs.form.validate()) {
                return true;
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    
</style>