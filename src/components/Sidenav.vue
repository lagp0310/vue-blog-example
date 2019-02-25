<template>
    <v-container>
        <v-layout wrap>
            <v-navigation-drawer
            v-model="show"
            absolute
            temporary
            >
                <v-list class="pa-1">
                    <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/86.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>Bloggy!</v-list-tile-title>
                    </v-list-tile-content>
                    </v-list-tile>
                </v-list>

                <v-list class="pt-0" dense>
                    <v-divider></v-divider>
                    <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    @click="null"
                    >
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: {
        show: Boolean,
    },
    data: () => ({
        items: [
            { title: 'Articles', icon: 'dashboard' },
            { title: 'About', icon: 'question_answer' },
            { title: 'Signup', icon: 'dashboard' },
            { title: 'Login', icon: 'dashboard' },
        ]
    })
}
</script>

<style lang="scss" scoped>
    
</style>