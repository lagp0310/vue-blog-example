<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap justify-center>
            <v-flex xs12>
                <h1 class="headline font-weight-light mb-3">About Us</h1>
            </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
            <v-flex xs12>
                <v-timeline align-top>
                    <v-timeline-item
                    color="purple lighten-2"
                    fill-dot
                    right
                    small
                    >
                        <span slot="opposite">
                            <v-avatar
                            :tile="false"
                            size="200px"
                            color="grey lighten-4"
                            >
                                <v-img src="https://picsum.photos/200?image=0" contain alt="avatar"></v-img>
                            </v-avatar>
                        </span>
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
                    color="amber lighten-1"
                    fill-dot
                    left
                    small
                    >
                        <span slot="opposite">
                            <v-avatar
                            :tile="false"
                            size="200px"
                            color="grey lighten-4"
                            >
                                <v-img src="https://picsum.photos/200?image=1" contain alt="avatar"></v-img>
                            </v-avatar>
                        </span>
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
                    color="cyan lighten-1"
                    fill-dot
                    right
                    small
                    >
                        <span slot="opposite">
                            <v-avatar
                            :tile="false"
                            size="200px"
                            color="grey lighten-4"
                            >
                                <v-img src="https://picsum.photos/200?image=2" contain alt="avatar"></v-img>
                            </v-avatar>
                        </span>
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
                    color="red lighten-1"
                    fill-dot
                    left
                    small
                    >
                        <span slot="opposite">
                            <v-avatar
                            :tile="false"
                            size="200px"
                            color="grey lighten-4"
                            >
                                <v-img src="https://picsum.photos/200?image=3" contain alt="avatar"></v-img>
                            </v-avatar>
                        </span>
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
                    color="green lighten-1"
                    fill-dot
                    right
                    small
                    >
                        <span slot="opposite">
                            <v-avatar
                            :tile="false"
                            size="200px"
                            color="grey lighten-4"
                            >
                                <v-img src="https://picsum.photos/200?image=4" contain alt="avatar"></v-img>
                            </v-avatar>
                        </span>
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
    </v-container>
</template>

<script>
export default {
    data: () => ({
        //
    })
}
</script>

<style lang="scss" scoped>
    
</style>

