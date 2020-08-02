<template>
    <div>

        <v-autocomplete
                v-model="course"
                :items="courses"
                color="white"
                :filter="customFilter"
                hide-no-data
                hide-selected
                item-text="course_id"
                label="Course ID"
                return-object
                rounded
                filled
                @change="$emit('change',course)"
        ></v-autocomplete>

    </div>
</template>

<script>
    export default {
        name: "CourseSelect",
        data: () => ({
            courses: [],
            course : null,
        }),
        mounted() {
            this.loadData()
        },
        methods: {
            async loadData() {
                let data = await this.$store.dispatch('course/getCoursesNoPaginate')
                this.courses = data
            },
            customFilter(item,queryText,itemText) {
                const  textOne = item.course_id.toLocaleLowerCase()
                const  searchText = queryText.toLowerCase()

                return textOne.indexOf(searchText) >- 1
            },

        }
    }
</script>

<style scoped>

</style>