<template>
    <div class="text-xs-center">
        <v-bottom-sheet v-model="show" persistent inset>
            <v-list>
                <v-subheader>Share with</v-subheader>
                <v-list-tile
                v-for="tile in tiles"
                :key="tile.title"
                @click="$emit('update:show', false);"
                >
                    <v-list-tile-avatar v-if="tile.src">
                        <v-avatar size="32px" tile>
                            <v-img :src="tile.img" :alt="tile.title"></v-img>
                        </v-avatar>
                    </v-list-tile-avatar>
                    <v-icon v-if="!tile.src">{{ tile.icon }}</v-icon>
                    <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-bottom-sheet>
    </div>
</template>

<script>
export default {
    props: {
        show: Boolean,
    },
    data: () => ({
        tiles: [
            { src: true, img: 'https://img.icons8.com/ios/24/000000/delete-sign.png', title: 'Close' },
            { src: true, img: 'https://cdn.vuetifyjs.com/images/bottom-sheets/inbox.png', title: 'Inbox' },
            { src: true, img: 'https://cdn.vuetifyjs.com/images/bottom-sheets/hangouts.png', title: 'Hangouts' },
            { src: true, img: 'https://cdn.vuetifyjs.com/images/bottom-sheets/messenger.png', title: 'Messenger' }
        ]
    })
}
</script>

<style lang="scss" scoped>
    
</style>