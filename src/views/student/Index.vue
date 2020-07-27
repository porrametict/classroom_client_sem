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
                    :items-per-page="5"
                    class="elevation-1"
            >

                <template v-slot:item.Student ID="{item}">
                    {{item.user.id}}
                </template>

                <template v-slot:item.Fullname="{item}">
                    {{item.user.name}}
                </template>


                <template v-slot:item.Course="{item}">
                    {{item.user.courseName}}
                </template>

                <template v-slot:item.actions="{on}">
                    <v-btn
                            icon
                            v-on="on"
                            color="orange lighten-2"
                            @click="$router.push({name:'EditStudent'})"
                    >
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </template>

                <template v-slot:item.manage="{ item }">
                    <ConfirmDialog
                            message="Are you delete?">
<!--                            @change="delete_student($event,item)"-->

                        <template v-slot:activator="{on}">
                            <v-btn
                                    icon
                                    v-on="on"
                                    color="red"
                            >
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </template>
                    </ConfirmDialog>
                </template>

<!--                <template v-slot:item.actions="{ item }">-->
<!--                    <v-btn icon>-->
<!--                        <v-icon @click="" color="orange lighten-2">mdi-pencil</v-icon>-->
<!--                    </v-btn>-->
<!--                    <v-btn icon>-->
<!--                        <v-icon @click="" color="red">mdi-delete</v-icon>-->
<!--                    </v-btn >-->
<!--                </template>-->
            </v-data-table>
        </div>
    </div>
</template>

<script>
    import PrimaryButton from "../../components/share/PrimaryButton";
    import DeleteDialog from "../../components/share/DeleteDialog";

    export default {
        name: "StudentIndex",
        components: {DeleteDialog, PrimaryButton},
        data() {
            return {
                // student: null,
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
                        value: 'courseName',
                    },
                    {
                        text: 'Actions',
                        align: 'start',
                        value: 'actions',
                        sortable: false,
                    },
                ],
                student: [
                    {
                        student_id: '001',
                        name: 'Frozen Yogurt',
                        courseName: 'Basic SA',
                    },
                    {
                        student_id: '002',
                        name: 'Frozen Yogurt',
                        courseName: 'Basic SA',
                    },
                    {
                        student_id: '003',
                        name: 'Frozen Yogurt',
                        courseName: 'Basic SA',
                    }, {
                        student_id: '004',
                        name: 'Frozen Yogurt',
                        courseName: 'Basic SA',
                    }, {
                        student_id: '005',
                        name: 'Frozen Yogurt',
                        courseName: 'Basic SA',
                    }, {
                        student_id: '006',
                        name: 'Frozen Yogurt',
                        courseName: 'Basic SA',
                    },

                ],
            }
        },
        // mounted() {
        //     this.loadData()
        // },
        // methods: {
        //     async loadData() {
        //         let data = await this.$store.dispatch('student/getListStudent')
        //         this.student = data.results
        //     },
        // },
        // async delete_student(e, item) {
        //     if (e) {
        //         let data = await this.$store.dispatch('student/deleteStudent', item.id)
        //         if (data != null) {
        //             await this.loadData()
        //         }
        //     }
        //
        // },
    }
</script>

<style scoped>

</style>