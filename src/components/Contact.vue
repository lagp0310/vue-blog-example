<template>
    <v-container grid-list-md text-xs-center>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-img
                    src="https://picsum.photos/500/?image=4"
                    lazy-src="https://picsum.photos/500/?image=4"
                    aspect-ratio="2.75"
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
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Contact Us!</h3>
                            <br>
                            <p class="text-xs-center">
                                Feel free to contact us for any inquiries.<br>
                                Fill the following Form describing your situation.
                                We'll answer as soon as we can.
                            </p>
                            <v-container grid-list-md text-xs-center>
                                <v-layout row wrap justify-center>
                                    <v-flex xs12>
                                        <v-form
                                        ref="form"
                                        v-model="isFormValid"
                                        lazy-validation
                                        >
                                            <v-text-field
                                            v-model="fullName"
                                            :rules="fullNameRules"
                                            label="Full Name"
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
                                            <v-textarea
                                            v-model="textareaContact"
                                            name="textareaContact"
                                            counter
                                            label="Contact Reason"
                                            auto-grow
                                            value=""
                                            hint="Reason here."
                                            persistent-hint
                                            placeholder="Your reason here."
                                            :rules="textareaContactRules"
                                            @keydown.enter="validate"
                                            @keydown.esc="blurInput($event)"
                                            ></v-textarea>
                                            <br />
                                            <v-btn
                                            :disabled="!isFormValid"
                                            color="success"
                                            block
                                            @click="validate"
                                            >
                                                Submit
                                            </v-btn>
                                        </v-form>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-container grid-list-md text-xs-center>
                            <v-layout row wrap justify-center>
                                <v-flex xs12>
                                    <v-btn class="px-0 text-capitalize font-weight-regular" flat round icon>
                                        <v-icon color="indigo darken-3">mdi-facebook</v-icon>
                                    </v-btn>
                                    <v-btn class="px-0 text-capitalize font-weight-regular" flat round icon>
                                        <v-icon color="blue lighten-1">mdi-twitter</v-icon>
                                    </v-btn>
                                    <v-btn class="px-0 text-capitalize font-weight-regular" flat round icon>
                                        <v-img src="https://img.icons8.com/color/24/000000/instagram-new.png"></v-img>
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <a href="https://icons8.com/icon/32323/instagram" class="text-xs-center">Instagram icon by Icons8</a>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        isFormValid: false,
        fullName: '',
        fullNameRules: [
            v => !!v || 'Full name is required',
            v => (v && v.length <= 30) || 'Full name must be less than 30 characters.',
            v => /[a-zA-Z]+/.test(v) || 'Full name contain invalid characters.'
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required.',
            v => /.+@.+/.test(v) || 'E-mail is invalid.'
        ],
        textareaContact: '',
        textareaContactRules: [
            v => !!v || 'Contact reason is required.',
            v => /.+/.test(v) || 'Contact reason cannot be empty.'
        ],
    }),
    methods: {
        blurInput(event) {
            event.target.blur();
        },
        validate() {
            if(this.$refs.form.validate()) {
                location.href = '/';
                return true;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    
</style>