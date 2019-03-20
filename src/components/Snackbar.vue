<template>
    <!-- Input event: https://github.com/vuetifyjs/vuetify/issues/756#issuecomment-452905069 -->
    <v-snackbar
    v-model="showSnackbar"
    :color="snackbarColor"
    :timeout="snackbarCloseTime"
    left
    @input="$emit('update:show', false)"
    >
        {{ snackbarText }}
        <v-btn
        dark
        flat
        @click="$emit('update:show', false)"
        >
            {{ snackbarCloseText }}
        </v-btn>
    </v-snackbar>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true
        },
        snackbarColor: {
            type: String,
            required: true
        },
        snackbarText: {
            type: String,
            required: true
        },
        snackbarCloseTime: {
            type: Number,
            required: true
        },
        snackbarCloseText: {
            type: String,
            required: true
        }
    },
    data: function() {
        return {
            showSnackbar: this.show
        }
    },
    watch: {
        show: function(newValue) {
            this.$data.showSnackbar = newValue;
            this.$emit('update:show', newValue);
        },
        showSnackbar: function(newValue) {
            this.$emit('update:show', newValue);
        }
    }
};
</script>

<style lang="scss" scoped>
    
</style>