<template>
    <div class="d-flex flex-column flex-grow-1 pa-5">
        <!-- Title -->
        <h1 class="display-3 text-center my-5">Add Course</h1>
        <!-- detail -->

        <div class="d-flex justify-space-around flex-wrap">
            <v-card class="ma-5" min-width="500" elevation="0">
                <div>
                    <v-text-field
                            label="Course Name"
                            filled rounded dense
                            v-model="form.name"
                            :rules="[rules.required]"

                            :error="error.name"

                    ></v-text-field>
                    <v-text-field
                            label="Teacher Name"
                            filled rounded dense
                            v-model="form.teacher_name"
                            :rules="[rules.required]"
                            :error="error.teacher_name"
                    ></v-text-field>
                    <DaySelect
                            v-model="form.teaching_period.day"
                            :rules="[rules.required]"
                            :error="error.day"

                    ></DaySelect>

                    <v-spacer></v-spacer>

                    <v-col class="d-flex flex-column flex-md-row">

                        <time-picker-input
                                label="Start"
                                @change="form.teaching_period.start_time = $event"
                                :rules="[rules.required]"
                                :error="error.start_time"
                        ></time-picker-input>
                        <time-picker-input
                                label="End"
                                @change="form.teaching_period.end_time = $event"
                                :rules="[rules.required]"
                                :error="error.end_time"

                        ></time-picker-input>
                    </v-col>
                    <h1>
                        Course Status
                        <v-switch
                                v-model="form.status"
                                :label="`Status: ${form.status ? 'Available'  : 'Unavailable'}`"
                        ></v-switch>
                    </h1>
                </div>
            </v-card>
        </div>
        <!-- button -->
        <div class="ma-5">
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
    import DaySelect from "../../components/course/DaySelect";
    import Base from "../../components/share/Base";

    export default {
        extends: Base,
        name: "CreateCourse",
        components: {
            DaySelect,
            PrimaryButton,
            TimePickerInput,
            SaveButton,
            CancelButton,
            ConfirmDialog
        },
        data() {
            return {
                rules: {
                    required: value => !!value || 'Required'
                },
                form: {
                    name: null,
                    teacher_name: null,
                    status: true,
                    teaching_period : {
                        day: 1,
                        start_time: null,
                        end_time: null,
                    }
                }
            };
        },
        methods: {
            async createCourse() {

                let data = await this.$store.dispatch("course/createCourses", this.form);
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