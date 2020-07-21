<template>
    <ConfirmDialog @change="$emit('change',$event)">

        <template v-slot:activator="{on}">
            <v-btn icon v-on="on" >
                <v-icon  color="red">
                    mdi-delete
                </v-icon>
            </v-btn>
        </template>

        <!--                default slot-->
        <div class="text-center">
            <v-icon x-large color="c_red">
                mdi-delete
            </v-icon>
            <p class="title">
                Delete this item ?
            </p>
        </div>

        <template v-slot:primary_btn="{on}">
            <v-btn
                    color="c_red"
                    rounded
                    v-on="on"
                    class="px-5"
            >
                delete
            </v-btn>

        </template>

        <template v-slot:secondary_btn="{on}">
            <v-btn
                    color="c_grey"
                    rounded
                    v-on="on"
                    class="px-5"

            >
                Cancel
            </v-btn>

        </template>

    </ConfirmDialog>
</template>

<script>
    import ConfirmDialog from "./ConfirmDialog";
    export default {
        name: "DeleteDialog",
        components: {ConfirmDialog},
    }
</script>

<style scoped>

</style>