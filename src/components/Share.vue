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
                    <v-list-tile-avatar>
                        <v-avatar 
                            size="32px" 
                            tile
                        >
                            <v-icon :color="tile.iconColor">{{ tile.icon }}</v-icon>
                        </v-avatar>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ tile.title }}
                        </v-list-tile-title>
                    </v-list-tile-content>
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
                    icon: 'mdi-close', 
                    title: 'Close',
                    iconColor: 'black'
                },
                { 
                    icon: 'mdi-instagram', 
                    title: 'Instagram',
                    iconColor: 'pink'
                },
                { 
                    icon: 'mdi-facebook', 
                    title: 'Facebook',
                    iconColor: 'indigo darken-3'
                },
                { 
                    icon: 'mdi-facebook-messenger', 
                    title: 'Messenger',
                    iconColor: 'blue darken-1' 
                },
                { 
                    icon: 'mdi-twitter', 
                    title: 'Twitter',
                    iconColor: 'blue'
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