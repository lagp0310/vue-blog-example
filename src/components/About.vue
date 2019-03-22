<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap justify-center>
            <v-flex xs12>
                <h1 id="about-title" class="headline font-weight-thin mb-3 text-uppercase">About Us</h1>
            </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
            <v-flex xs12>
                <v-timeline align-top dense clipped>
                    <v-timeline-item
                    id="item-1"
                    color="purple lighten-2"
                    fill-dot
                    right
                    small
                    >
                        <v-container grid-list-md text-xs-center>
                            <v-layout row wrap justify-center>
                                <v-flex xs10>
                                    <span>
                                        <v-img src="/public/images/illustrations/undraw_blogging_vpvv.png" 
                                        contain 
                                        alt="avatar" 
                                        lazy-src="/public/images/illustrations/undraw_blogging_vpvv.png"
                                        max-height="400px">
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
                                    </span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <div class="py-3">
                            <h2 class="headline font-weight-light mb-3">Lorem ipsum</h2>
                            <div>
                                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet 
                                nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim 
                                zril disputando voluptatibus, vix an salutandi sententiae.
                            </div>
                        </div>
                    </v-timeline-item>
                    <v-timeline-item
                    id="item-2"
                    color="amber lighten-1"
                    fill-dot
                    left
                    small
                    >
                        <v-container grid-list-md text-xs-center>
                            <v-layout row wrap justify-center>
                                <v-flex xs10>
                                    <span>
                                        <v-img src="/public/images/illustrations/undraw_content_vbqo.png" 
                                        contain 
                                        alt="avatar" 
                                        lazy-src="/public/images/illustrations/undraw_content_vbqo.png"
                                        max-height="400px">
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
                                    </span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <div class="py-3">
                            <h2 class="headline font-weight-light mb-3">Lorem ipsum</h2>
                            <div>
                                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet 
                                nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim 
                                zril disputando voluptatibus, vix an salutandi sententiae.
                            </div>
                        </div>
                    </v-timeline-item>
                    <v-timeline-item
                    id="item-3"
                    color="cyan lighten-1"
                    fill-dot
                    right
                    small
                    >
                        <v-container grid-list-md text-xs-center>
                            <v-layout row wrap justify-center>
                                <v-flex xs10>
                                    <span>
                                        <v-img src="/public/images/illustrations/undraw_content_creator_xeju.png" 
                                        contain 
                                        alt="avatar" 
                                        lazy-src="/public/images/illustrations/undraw_content_creator_xeju.png"
                                        max-height="400px">
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
                                    </span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <div class="py-3">
                            <h2 class="headline font-weight-light mb-3">Lorem ipsum</h2>
                            <div>
                                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet 
                                nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim 
                                zril disputando voluptatibus, vix an salutandi sententiae.
                            </div>
                        </div>
                    </v-timeline-item>
                    <v-timeline-item
                    id="item-4"
                    color="red lighten-1"
                    fill-dot
                    left
                    small
                    >
                        <v-container grid-list-md text-xs-center>
                            <v-layout row wrap justify-center>
                                <v-flex xs10>
                                    <span>
                                        <v-img src="/public/images/illustrations/undraw_about_me_wa29.png" 
                                        contain 
                                        alt="avatar" 
                                        lazy-src="/public/images/illustrations/undraw_about_me_wa29.png"
                                        max-height="400px">
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
                                    </span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <div class="py-3">
                            <h2 class="headline font-weight-light mb-3">Lorem ipsum</h2>
                            <div>
                                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet 
                                nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim 
                                zril disputando voluptatibus, vix an salutandi sententiae.
                            </div>
                        </div>
                    </v-timeline-item>
                    <v-timeline-item
                    id="item-5"
                    color="green lighten-1"
                    fill-dot
                    right
                    small
                    >
                        <v-container grid-list-md text-xs-center>
                            <v-layout row wrap justify-center>
                                <v-flex xs10>
                                    <span>
                                        <v-img src="/public/images/illustrations/undraw_image_post_24iy.png" 
                                        contain 
                                        alt="avatar" 
                                        lazy-src="/public/images/illustrations/undraw_image_post_24iy.png"
                                        max-height="400px">
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
                                    </span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <div class="py-3">
                            <h2 class="headline font-weight-light mb-3">Lorem ipsum</h2>
                            <div>
                                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet 
                                nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim 
                                zril disputando voluptatibus, vix an salutandi sententiae.
                            </div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-flex>
        </v-layout>
        <v-btn
        bottom
        color="primary"
        fab
        fixed
        right
        @click="goToNextTimelineElement"
        >
            <v-icon>{{ currentTimelineElement >= 5 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        currentTimelineElement: 0,
        elementsArray: [
            '#about-title',
            '#item-1',
            '#item-2',
            '#item-3',
            '#item-4',
            '#item-5'
        ]
    }),
    methods: {
        goToNextTimelineElement() {
            if(this.$data.currentTimelineElement >= 5) {
                this.$data.currentTimelineElement = 0;
                this.$vuetify.goTo(this.$data.elementsArray[this.$data.currentTimelineElement]);
                return;
            }

            this.$data.currentTimelineElement++;
            this.$vuetify.goTo(this.$data.elementsArray[this.$data.currentTimelineElement]);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

