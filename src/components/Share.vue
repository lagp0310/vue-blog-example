<template>
    <div class="text-xs-center">
        <v-bottom-sheet 
            v-model="showShare" 
            inset
        >
            <v-list>
                <v-subheader>Share with</v-subheader>
                <v-list-tile
                    v-for="tile in tiles"
                    :key="tile.id"
                    @click="showShare = false"
                >
                    <v-list-tile-avatar v-if="tile.src">
                        <v-avatar 
                            size="32px" 
                            tile
                        >
                            <v-img 
                                :src="tile.img" 
                                :alt="tile.title" 
                            />
                        </v-avatar>
                    </v-list-tile-avatar>
                    <v-icon v-if="!tile.src">{{ tile.icon }}</v-icon>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ tile.title }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <small>
                            <a :href="tile.icons8Link">Check this icon on icons8!</a>
                        </small>
                    </v-list-tile-action>
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
    data: function() {
        return {
            showShare: this.show,
            tiles: [
                { 
                    src: true, 
                    img: 'https://img.icons8.com/material/96/000000/multiply.png', 
                    title: 'Close',
                    icons8Link: 'https://icons8.com/icon/1510/multiply'
                },
                { 
                    src: true, 
                    img: 'https://img.icons8.com/color/48/000000/instagram-new.png', 
                    title: 'Instagram',
                    icons8Link: 'https://icons8.com/icon/32323/instagram' 
                },
                { 
                    src: true, 
                    img: 'https://img.icons8.com/color/96/000000/facebook.png', 
                    title: 'Facebook',
                    icons8Link: 'https://icons8.com/icon/13912/facebook' 
                },
                { 
                    src: true, 
                    img: 'https://img.icons8.com/color/96/000000/facebook-messenger.png', 
                    title: 'Messenger',
                    icons8Link: 'https://icons8.com/icon/20419/facebook-messenger' 
                },
                { 
                    src: true, 
                    img: 'https://img.icons8.com/color/96/000000/twitter.png', 
                    title: 'Twitter',
                    icons8Link: 'https://icons8.com/icon/13963/twitter' 
                }
            ]
        }
    },
    watch: {
        show: function(newValue) {
            this.$data.showShare = newValue;
            this.$emit('update:show', newValue);
        },
        showShare: function(newValue) {
            this.$emit('update:show', newValue);
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>