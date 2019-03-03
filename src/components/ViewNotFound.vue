<template>
    <v-container text-xs-center>
        <v-layout row wrap>
            <v-flex xs12>
                <v-avatar
                size="400px"
                color="grey lighten-4"
                >
                    <v-img src="/public/images/errors/404/221867-P19WAJ-478.jpg" alt="404 Page Not Found Image" 
                    contain lazy-src="/public/images/errors/404/221867-P19WAJ-478.jpg" max-height="400px">
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
                <br /><br />
                <small>
                    <a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by freepik - www.freepik.com</a>
                </small>
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