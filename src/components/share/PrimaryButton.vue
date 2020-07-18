<template>
        <div>
            <v-btn color="primary" @click="$emit('click')">
                <slot>
                    Primary
                    </slot>
            </v-btn>
            </div>
</template>
<script>
export default {
    name : "PrimaryButton",
}
</script>