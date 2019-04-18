<template>
    <v-container 
        grid-list-md 
        text-xs-center
    >
        <v-layout>
            <v-flex 
                sm5
                class="hidden-xs-only"
            >
                <v-img
                    src="/public/images/illustrations/undraw_contact_us_15o2.svg"
                    lazy-src="/public/images/illustrations/undraw_contact_us_15o2.svg"
                    contain
                    height="400px"
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
                <v-container 
                    grid-list-md 
                    text-xs-center
                >
                    <v-layout 
                        row 
                        wrap 
                        justify-center
                    >
                        <v-flex xs12>
                            <p class="text-uppercase subheading font-weight-regular">
                                Be sure to follow us on our Social Media
                            </p>
                            <v-btn 
                                class="px-0 text-capitalize font-weight-regular" 
                                flat 
                                round 
                                icon
                                @click="openNewTab('https://facebook.com/')"
                            >
                                <v-icon color="indigo darken-3">mdi-facebook</v-icon>
                            </v-btn>
                            <v-btn 
                                class="px-0 text-capitalize font-weight-regular" 
                                flat 
                                round 
                                icon
                                @click="openNewTab('https://twitter.com/')"
                            >
                                <v-icon color="blue lighten-1">mdi-twitter</v-icon>
                            </v-btn>
                            <v-btn 
                                class="px-0 text-capitalize font-weight-regular" 
                                flat 
                                round 
                                icon
                                @click="openNewTab('https://www.instagram.com/')"
                            >
                                <v-icon color="pink">mdi-instagram</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex 
                sm2 
                class="hidden-xs-only"
            />
            <v-flex 
                xs12 
                sm5
            >
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
                                <v-progress-circular 
                                    indeterminate 
                                    color="grey" 
                                />
                            </v-layout>
                        </template>
                    </v-img>
                    <!-- <v-card-title>
                        <v-card-text>
                            <p class="headline mb-0">Contact Form</p>
                        </v-card-text>
                    </v-card-title> -->
                    <v-card-text>
                        <p class="subheading mb-0 mt-3">You can fill in the following form to get in touch with us.</p>
                        <v-container 
                            grid-list-md 
                            text-xs-center
                        >
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
                                            v-model="fullName"
                                            :rules="fullNameRules"
                                            label="Full Name*"
                                            required
                                            @keydown.enter="validate"
                                            @keydown.esc="blurInput($event)"
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="email"
                                            :rules="emailRules"
                                            label="E-mail*"
                                            required
                                            @keydown.enter="validate"
                                            @keydown.esc="blurInput($event)"
                                        ></v-text-field>
                                        <v-textarea
                                            v-model="textareaContact"
                                            name="textareaContact"
                                            counter
                                            label="Contact Reason*"
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
                                        <p class="text-xs-left text-capitalize red--text">* Required Field</p>
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
                    </v-card-text>
                </v-card>
                <v-container 
                    grid-list-md 
                    text-xs-center
                    class="hidden-sm-and-up"
                >
                    <v-layout 
                        row 
                        wrap 
                        justify-center
                    >
                        <v-flex xs12>
                            <p class="text-uppercase subheading font-weight-regular">
                                Be sure to follow us on our Social Media
                            </p>
                            <v-btn 
                                class="px-0 text-capitalize font-weight-regular" 
                                flat 
                                round 
                                icon
                                @click="openNewTab('https://facebook.com/')"
                            >
                                <v-icon color="indigo darken-3">mdi-facebook</v-icon>
                            </v-btn>
                            <v-btn 
                                class="px-0 text-capitalize font-weight-regular" 
                                flat 
                                round 
                                icon
                                @click="openNewTab('https://twitter.com/')"
                            >
                                <v-icon color="blue lighten-1">mdi-twitter</v-icon>
                            </v-btn>
                            <v-btn 
                                class="px-0 text-capitalize font-weight-regular" 
                                flat 
                                round 
                                icon
                                @click="openNewTab('https://www.instagram.com/')"
                            >
                                <v-icon color="pink">mdi-instagram</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
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
        ]
    }),
    methods: {
        blurInput(event) {
            event.target.blur();
        },
        openNewTab(url) {
            return window.open(url, '_blank');
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