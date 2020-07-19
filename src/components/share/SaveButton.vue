<template>
    <div>
        <v-btn
                color="green accent-3"
                @click="$emit('click')"
                rounded
        >
            <slot>
                Save
            </slot>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "SaveButton"
    }
</script>

<style scoped>

</style>