<template>
    <v-container text-xs-center>
        <v-layout 
            row 
            wrap 
            align-center
        >
            <v-flex xs12>
                <v-layout fill-height>
                    <v-img 
                        src="/public/images/illustrations/undraw_empty_xct9.png" 
                        alt="404 Page Not Found Illustration" 
                        contain 
                        max-height="450px"
                        lazy-src="/public/images/illustrations/undraw_empty_xct9.png"
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
                </v-layout>
            </v-flex>
            <v-flex xs12>
                <v-layout 
                    justify-center 
                    mt-4
                >
                    <span class="headline font-weight-thin text-uppercase">
                        Sorry, we couldn't find the page you are looking for.
                    </span>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        //
    })
};
</script>

<style lang="scss" scoped>
    
</style>