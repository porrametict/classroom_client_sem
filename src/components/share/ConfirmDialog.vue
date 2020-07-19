<template>
    <div class="text-center">
        <slot name="activator" :on="on">
            <v-btn
                    color="red lighten-2"
                    dark
                    v-on="on"
            >
                {{open_dialog_text}}
            </v-btn>
        </slot>

        <v-dialog
                v-model="dialog"
                width="500"
        >
            <v-card>
                <v-card-title class="d-flex justify-end">
                    <v-btn icon @click="switch_dialog">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>

                <v-card-text>
                    <slot>
                        <p class="text-center title">
                            Are You Sure?
                        </p>
                    </slot>

                </v-card-text>


                <v-card-actions class="pb-4">
                    <v-spacer></v-spacer>

                    <slot name="primary_btn" :on="primary_on">
                        <v-btn
                                large
                                color="c_success"
                                rounded
                                v-on="primary_on"
                        >
                            <span>
                                Yes
                            </span>
                        </v-btn>
                    </slot>

                    <v-spacer></v-spacer>

                    <slot name="secondary_btn" :on="secondary_on">
                        <v-btn
                                large
                                color="c_red"
                                rounded
                                v-on="secondary_on"
                        >
                            <span class="px-4">
                                No
                            </span>
                        </v-btn>
                    </slot>

                    <v-spacer></v-spacer>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "ConfirmDialog",
        props: {
            open_dialog_text: {
                type: String,
                require: false,
                default: "Open Dialog"
            }
        },
        data() {
            return {
                on: {
                    click: this.switch_dialog,
                },
                primary_on: {
                    click: this.primary_btn_click,
                },
                secondary_on: {
                    click: this.secondary_btn_click,
                },
                dialog: false,
            }
        }, methods: {
            switch_dialog() {
                this.dialog = !this.dialog
            },
            primary_btn_click() {
                this.$emit('change', true)
                this.switch_dialog()
            },
            secondary_btn_click() {
                this.$emit('change', false)
                this.switch_dialog()

            }
        }
    }
</script>

<style scoped>

</style>