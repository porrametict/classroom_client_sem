<template>
        <div>
            <v-dialog ref="dialog" v-model="dialog" :return-value.sync="date" persistent width="290px">
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                            dense
                            rounded
                            filled
                            v-model="date"
                            :label="label"
                            prepend-icon="mdi-clock-time-four-outline"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            :rules="rules"
                    ></v-text-field>
                </template>
                <v-date-picker v-if="dialog" v-model="date" full-width>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="switchDialog">Cancel</v-btn>
                    <v-btn text color="primary" @click="saveDate(date)">OK</v-btn>
                </v-date-picker>
            </v-dialog>
        </div>
    </template>

<script>
    export default {
        name: "DatePickerInput",
        data: () => ({
            dialog: false,
            date: null,
        }),
        props: {
            rules: {
                type: Array,
                require: true
            },
            label: {
                type: String,
                require: false,
                default: "date picker"
            },
            date_value: {
                type: String,
                require: false,
                default: null
            }
        },
        mounted() {
            this.date = this.date_value;
            this.$refs.dialog.save(this.date_value);
        },
        methods: {
            switchDialog() {
                this.dialog = !this.dialog;
            },
            saveDate(date) {
                this.time = date;
                this.$refs.dialog.save(date);
                this.$emit("change", date);
                this.switchDialog();
            }
        }
    }
</script>

<style scoped>

</style>