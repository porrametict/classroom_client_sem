<template>
    <div>
        <v-btn
                color="grey lighten-1"
                @click="$emit('click')"
                rounded
        >
            <slot>
                Cancel
            </slot>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "CancelButton"
    }
</script>

<style scoped>

</style>