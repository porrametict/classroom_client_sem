<template>
    <div class="d-flex flex-column flex-grow-1 pa-5">
        <h1 class="display-3 text-center my-5">Add Course</h1>
        <div class="d-flex justify-space-around align-center flex-wrap">
            <v-row justify="space-around" align="center" class="d-flex">
                <v-col>
                    <v-text-field label="Course Name" v-model="form.course_name" filled rounded dense></v-text-field>
                    <v-text-field label="Teacher Name" v-model="form.teacher_name" filled rounded dense></v-text-field>

                    <v-select :items="days" label="day" filled rounded dense></v-select>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex flex-column flex-md-row">
                        <time-picker-input label="Start" v-model="time_start"></time-picker-input>
                        <time-picker-input label="End" v-model="time_end"></time-picker-input>
                    </v-col>
                </v-col>
            </v-row>
        </div>
        <div cols="12" sm="6" md="3">
            <h1>
                Course Status
                <v-switch v-model="switch1" value="on" :label="`Status: ${switch1}`"></v-switch>
            </h1>
        </div>
        <div class="ma-10">
            <div class="d-flex justify-space-around flex-wrap">
                <save-button @click="createCourse"></save-button>
                <cancel-button @click="$router.go(-1)"></cancel-button>
            </div>
        </div>
    </div>
</template>

<script>
    import PrimaryButton from "@/components/share/PrimaryButton";
    import TimePickerInput from "@/components/share/TimePickerInput";
    import SaveButton from "@/components/share/SaveButton";
    import CancelButton from "@/components/share/CancelButton";
    import ConfirmDialog from "@/components/share/ConfirmDialog";

    export default {
        name: "CreateCourse",
        components: {
            PrimaryButton,
            TimePickerInput,
            SaveButton,
            CancelButton,
            ConfirmDialog
        },
        data() {
            return {
                start: false,
                end: false,
                time_start: null,
                time_end: null,
                switch1: [],
                days: [
                    "SUNDAY",
                    "MONDAY",
                    "TUESDAY",
                    "WEDNESDAY",
                    "THURSDAY",
                    "FRIDAY",
                    "SATURDAY"
                ],
                form: {
                    course_name: " ",
                    teacher_name: " ",
                    status
                }
            };
        },
        methods: {
            async createCourse() {
                let data = await this.$store.dispatch("course/Create", this.form);
                if (data) {
                    await this.$router.push({name: "IndexCourse"});
                } else {
                }
            }
        }
    };
</script>

<style scoped>
</style>