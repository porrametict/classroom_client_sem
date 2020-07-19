<template>
    <div>
        <PrimaryButton @click="$router.push({name:'CreateStudent'})">Add Student</PrimaryButton>
        <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
                class="elevation-1">
        <template v-slot:item.actions="{ item }">
            <v-btn icon>
                <v-icon @click="" color="orange lighten-2">mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon @click="" color="red">mdi-delete</v-icon>
            </v-btn >
        </template>
        </v-data-table>
    </div>
</template>

<script>
    import PrimaryButton from "../../components/share/PrimaryButton";
    export default {
        name: "StudentIndex",
        components: {PrimaryButton},
        data () {
            return {
                headers: [
                    { text: 'Student ID', value: 'student_id' ,align: 'start'},
                    { text: 'Full Name', value: 'fullName' },
                    { text: 'Course', value: 'courseName' },
                    { text: 'Actions', value: 'actions', sortable: false },
                ],
                desserts: [
                    {
                        student_id: '001',
                        fullName: 'Frozen Yogurt',
                        courseName: 'Basic SA',
                    },
                    {
                        student_id: '002',
                        fullName: 'Frozen Yogurt',
                        courseName: 'Basic SA',
                    },
                    {
                        student_id: '003',
                        fullName: 'Frozen Yogurt',
                        courseName: 'Basic SA',
                    },{
                        student_id: '004',
                        fullName: 'Frozen Yogurt',
                        courseName: 'Basic SA',
                    },{
                        student_id: '005',
                        fullName: 'Frozen Yogurt',
                        courseName: 'Basic SA',
                    },{
                        student_id: '006',
                        fullName: 'Frozen Yogurt',
                        courseName: 'Basic SA',
                    },

                ],
            }
        },
    }
</script>

<style scoped>

</style>