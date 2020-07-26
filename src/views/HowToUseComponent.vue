<template>
    <div>
        <!--        ConfirmDialog-->
        <div class="text-center">
            <p class="title">
                Confirm dialog
            </p>
            <p>
                @change : left button will return true else false
            </p>
            Without Customize
            <ConfirmDialog @change="cat_alert"></ConfirmDialog>
            With Customize
            <ConfirmDialog>

                <template v-slot:activator="{on}">
                    <v-btn icon v-on="on" x-large>
                        <v-icon x-large color="red">
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
        </div>
        <hr/>
        <!-- TimePickerInput -->
        <div class="text-center">
            <h1 class="title">Time Picker</h1>
            <TimePickerInput
                    label="start"
                    @change="cat_alert"
            >
            </TimePickerInput>
            set value
            <TimePickerInput
                    label="end"
                    @change="cat_alert"
                    :time_value="'11:03'"
            >
            </TimePickerInput>
        </div>
<!-- Date Picker -->
        <div class="text-center">
            <h1 class="title">Date Picker</h1>
            <DatePickerInput
                    label="Date select"
                    @change="cat_alert">
            </DatePickerInput>
        </div>

    </div>
</template>

<script>
    import ConfirmDialog from "../components/share/ConfirmDialog";
    import Template from "./Template";
    import TimePickerInput from "../components/share/TimePickerInput";
    import DatePickerInput from "../components/share/DatePickerInput";
    export default {
        name: "HowToUseComponent",
        components: {DatePickerInput, TimePickerInput, Template, ConfirmDialog},
        methods: {
            cat_alert(e) {
                alert('result is ' + e)
            },
        }
    }
</script>

<style scoped>

</style>