<template>
    <div>
        <!--header-->
        <div>
            <h1 class="text-center">Course</h1>
        </div>
        <!--content-->
        <div>
            <div>
                <PrimaryButton>Add Course</PrimaryButton>
            </div>
            <div class="my-3">
                <template>
                    <v-data-table
                            :headers="headers"
                            :items="data_items"
                            class="elevation-1"
                            hide-default-footer
                    >
                        <template v-slot:item.manage="{item}">
                            <v-btn icon @click="gotoEdit(item)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                    </v-data-table>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import PrimaryButton from "../../components/share/PrimaryButton";
    import Template from "../Template";

    export default {
        name: "CourseIndex",
        components: {Template, PrimaryButton},
        data() {
            return {
                headers: [
                    {
                        text: 'Course ID',
                        align: 'start',
                        sortable: false,
                        value: 'course_id',
                    },
                    {text: 'Name', value: 'name'},
                    {text: 'teacher', value: 'teacher'},
                    {text: 'Status', value: 'status'},
                    {text: 'Manage', value: 'manage'},
                ],
                data_items: [
                    {
                        course_id: 'Csc101',
                        name: "software introduction",
                        teacher: "David",
                        status: 1,
                    }
                ],

            }
        },
        methods: {
            gotoEdit(item) {
                this.$router.push({
                    name: 'EditCourse',
                    params: {
                        id: item.course_id
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>
