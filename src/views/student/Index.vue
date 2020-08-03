<template>
    <div>
        <!--button-->
        <div>
            <PrimaryButton @click="$router.push({name:'CreateStudent'})">Add Student</PrimaryButton>
        </div>

        <!--table-->
        <div>
            <v-data-table
                    :headers="headers_student"
                    :items="student"
                    :items-per-page="10"
                    class="elevation-1"
                    hide-default-footer
            >

                <template v-slot:item.id="{item}">
                    {{item.id.student_id}}
                </template>

                <template v-slot:item.user="{item}">
                    {{item.user.name}}
                </template>


                <template v-slot:item.course="{item}">
                    {{item.course.course_id}}
                </template>

                <template v-slot:item.actions="{item}">
                        <div class="d-flex align-center">
                            <v-btn
                                icon
                                color="orange lighten-2"
                                @click="gotoEdit(item.id)"
                            >
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <delete-dialog @change="deleteStudent($event,item)"></delete-dialog>
                        </div>
                </template>

            </v-data-table>

            <div class="text-center">
                <v-pagination
                        v-model="form_params.page"
                        :length="form_params.length"
                        circle
                        @input="changePage"
                ></v-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import PrimaryButton from "../../components/share/PrimaryButton";
    import DeleteDialog from "../../components/share/DeleteDialog";
    import Template from "../Template";

    export default {
        name: "StudentIndex",
        components: {Template, DeleteDialog, PrimaryButton},
        data() {
            return {
                student: [],
                form_params: {
                    search: null,
                    page: 1,
                    length: 0,
                },
                form: {
                    student_id: "",
                    name: "",
                    course_id: ""
                },
                headers_student: [
                    {
                        text: 'Student ID',
                        align: 'start',
                        value: 'student_id',
                    },
                    {
                        text: 'Full Name',
                        align: 'start',
                        value: 'name',
                    },
                    {
                        text: 'Course',
                        align: 'start',
                        value: 'course_id',
                    },
                    {
                        text: 'Actions',
                        align: 'start',
                        value: 'actions',
                        sortable: false,
                    },
                ],
            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            async loadData() {
                let data = await this.$store.dispatch('student/getStudents', this.form_params)
                this.form_params.length = Math.ceil(data.count/10)
                this.student = data.results
            },
            changePage(page){
              this.form_params.page = page
                this.loadData()
            },
            gotoEdit(id) {
              this.$router.push({
                name: 'EditStudent',
                params: {
                  id: id,
                },
              });
            },
            async deleteStudent(e, item){
                console.log(e,"e",item)
                if (e) {
                    let data = await this.$store.dispatch('student/deleteStudent', item.id)
                    if (data != null) {
                        await this.loadData()
                    }
                }
            },
            gotoEdit(id) {
                this.$router.push({
                    name: 'EditStudent',
                    params: {
                        id: id,
                    },
                });
            },
        }

    }
</script>

<style scoped>

</style>