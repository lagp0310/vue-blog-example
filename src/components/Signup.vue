<template>
    <div>
        <v-stepper v-model="stepNumber">
            <v-stepper-header>
                <v-stepper-step step="1">Basic Information</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2">Terms Of Service</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3">Preferences</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="4">Signup Completed!</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-container>
                        <v-layout>
                            <v-flex sm3 md3></v-flex>
                            <v-flex xs12 sm6 md6>
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
                                    @keydown.enter="validate"
                                    @keydown.esc="blurInput($event)"
                                    ></v-text-field>

                                    <v-text-field
                                    v-model="lastname"
                                    :rules="lastnameRules"
                                    label="Lastname"
                                    required
                                    @keydown.enter="validate"
                                    @keydown.esc="blurInput($event)"
                                    ></v-text-field>

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
                                    :rules="[passwordRules.required, passwordRules.min, checkPasswordChange]"
                                    :type="showPassword ? 'text' : 'password'"
                                    v-model="password"
                                    name="password"
                                    label="Password"
                                    hint="At least 8 characters"
                                    value=""
                                    class="input-group--focused"
                                    @click:append="showPassword = !showPassword"
                                    @keydown.enter="validate"
                                    @keydown.esc="blurInput($event)"
                                    ></v-text-field>

                                    <v-text-field
                                    :append-icon="showPasswordConfirmation ? 'mdi-eye-off' : 'mdi-eye'"
                                    :rules="[passwordRules.required, passwordRules.min, doPasswordsMatch]"
                                    :type="showPasswordConfirmation ? 'text' : 'password'"
                                    v-model="passwordConfirmation"
                                    name="passwordConfirmation"
                                    label="Confirm Password"
                                    hint="At least 8 characters."
                                    value=""
                                    class="input-group--focused"
                                    @click:append="showPasswordConfirmation = !showPasswordConfirmation"
                                    @keydown.enter="validate"
                                    @keydown.esc="blurInput($event)"
                                    ></v-text-field>
                                    <v-container>
                                        <v-layout row wrap>
                                            <v-flex xs8 sm10>
                                                <v-radio-group row :rules="[genderSelectorRules.required]">
                                                    <v-radio label="Male" value="male" color="info"></v-radio>
                                                    <v-radio label="Female" value="female" color="pink"></v-radio>
                                                </v-radio-group>
                                            </v-flex>
                                            <v-flex xs4 sm2>
                                                <v-btn
                                                color="primary"
                                                :disabled="!isFormValid"
                                                @click="validate"
                                                >
                                                    Continue
                                                </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-form>
                            </v-flex>
                            <v-flex sm3 md3></v-flex>
                        </v-layout>
                    </v-container>
                </v-stepper-content>
                <v-stepper-content step="2">
                    <v-container>
                        <v-layout row wrap justify-center>
                            <v-form
                            ref="form1"
                            v-model="isFormValid"
                            lazy-validation
                            >
                                <v-checkbox
                                v-model="doesAgree"
                                :rules="[v => !!v || 'You must agree to continue!']"
                                color="green"
                                required
                                >
                                    <div slot="label">
                                        Do you accept our
                                        <a href="javascript:;" @click.stop="terms = true">Terms Of Service?</a>
                                    </div>
                                </v-checkbox>
                            </v-form>
                        </v-layout>
                        <v-layout row wrap justify-end>
                            <v-btn flat @click="stepNumber = 1, isFormValid = true">Go back</v-btn>
                            <v-btn
                            color="primary"
                            :disabled="!isFormValid"
                            @click="validate"
                            >
                                Continue
                            </v-btn>
                        </v-layout>
                    </v-container>
                </v-stepper-content>
                <v-stepper-content step="3">
                    <v-container>
                        <v-layout row wrap justify-center>
                            <v-form ref="form2">
                                <v-checkbox
                                v-model="emailNewContent"
                                color="blue darken-1"
                                >
                                    <div slot="label">
                                        Send me an email with new content each week.
                                    </div>
                                </v-checkbox>
                                <v-checkbox
                                v-model="emailCommentPost"
                                color="blue darken-1"
                                >
                                    <div slot="label">
                                        Send me an email when someone writes a Comment in one of my Posts.
                                    </div>
                                </v-checkbox>
                                <v-checkbox
                                v-model="emailReplyComment"
                                color="blue darken-1"
                                >
                                    <div slot="label">
                                        Send me an email when someone replies one of my Comments.
                                    </div>
                                </v-checkbox>
                            </v-form>
                        </v-layout>
                        <v-layout row wrap justify-end>
                            <v-btn flat @click="stepNumber = 2, isFormValid = true">Go back</v-btn>
                            <v-btn color="primary" @click="validate">
                                Complete Signup
                            </v-btn>
                        </v-layout>
                    </v-container>
                </v-stepper-content>
                <v-stepper-content step="4">
                    <v-container grid-list-md text-xs-center>
                        <v-layout justify-center>
                            <v-flex xs12>
                                <v-img 
                                src="/public/images/illustrations/undraw_press_play_bx2d.png" 
                                alt="Blog Content Illustration"
                                lazy-src="/public/images/illustrations/undraw_press_play_bx2d.png"
                                max-height="300px"
                                contain
                                >
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
                                <h1 class="headline font-weight-thin text-uppercase hidden-sm-and-up">
                                    Congratulations! <br />You have signed up to Bloggy!
                                </h1>
                                <h1 class="headline font-weight-thin text-uppercase hidden-xs-only">
                                    Congratulations! You have signed up to Bloggy!
                                </h1>
                            </v-flex>
                        </v-layout>
                        <br />
                        <v-layout row wrap justify-center>
                            <v-btn color="primary" @click="signup('/')">
                                Start Blogging!
                            </v-btn>
                        </v-layout>
                    </v-container>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
        <!-- https://vuejs.org/v2/guide/components-custom-events.html#sync-Modifier -->
        <TermsOfServiceModal v-if="terms" :agree.sync="doesAgree" :showTerms.sync="terms"></TermsOfServiceModal>
    </div>
</template>

<script>
import TermsOfServiceModal from './TermsOfServiceModal.vue';

export default {
    data: () => ({
        stepNumber: 0,
        isFormValid: false,
        name: '',
        nameRules: [
            v => !!v || 'Name is required.',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters.',
            v => /^[a-zA-Z]+$/.test(v) || 'Name contain invalid characters.'
        ],
        lastname: '',
        lastnameRules: [
            v => !!v || 'Lastname is required.',
            v => (v && v.length <= 10) || 'Lastname must be less than 10 characters.',
            v => /^[a-zA-Z]+$/.test(v) || 'Lastname contain invalid characters.'
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required.',
            v => /.+@.+/.test(v) || 'E-mail must be valid.'
        ],
        password: '',
        passwordConfirmation: '',
        showPassword: false,
        showPasswordConfirmation: false,
        passwordRules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters.'
        },
        genderSelectorRules: {
            required: value => (value === 'female' || value === 'male') || 'Required.'
        },
        terms: false,
        doesAgree: false,
        emailNewContent: false,
        emailCommentPost: false,
        emailReplyComment: false
    }),
    methods: {
        blurInput(event) {
            event.target.blur();
        },
        signup(ref) {
            this.$store.commit('changeLoggedInStatus');
            this.$router.replace(ref);
        },
        validate() {
            if(this.$refs.form.validate()) {
                this.$data.stepNumber = (++this.$data.stepNumber);
                if(this.stepNumber === 2) this.isFormValid = false;
                return true;
            }
        },
        checkPasswordChange() {
            if(this.passwordConfirmation.length > 0 && this.password !== this.passwordConfirmation) {
                this.passwordConfirmation = '';
            }

            return true;
        },
        doPasswordsMatch() {
            return (this.password === this.passwordConfirmation ? true : 'Passwords do not match!');
        }
    },
    components: {
        TermsOfServiceModal
    }
}
</script>

<style lang="scss" scoped>
    
</style>