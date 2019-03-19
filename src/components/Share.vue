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
        show: {
            type: Boolean,
            required: true
        }
    },
    data: () => ({
        tiles: [
            { src: true, img: 'https://img.icons8.com/material/96/000000/multiply.png', title: 'Close' },
            { src: true, img: 'https://img.icons8.com/color/48/000000/instagram-new.png', title: 'Instagram' },
            { src: true, img: 'https://img.icons8.com/color/96/000000/facebook.png', title: 'Facebook' },
            { src: true, img: 'https://img.icons8.com/color/96/000000/facebook-messenger.png', title: 'Messenger' },
            { src: true, img: 'https://img.icons8.com/color/96/000000/twitter.png', title: 'Twitter' }
        ]
    })
}
</script>

<style lang="scss" scoped>
    
</style>