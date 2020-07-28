<template>
  <div>
    <!--content-->
    <div>
      <div>
        <PrimaryButton @click="$router.push({name:'CreateCourse'})">Add Course</PrimaryButton>
      </div>
      <div>
        <template>
          <v-data-table
          v-if="Courses"
            :headers="headers"
            :items="Courses"
            class="elevation-1"
            hide-default-footer
          >
            <template v-slot:item.manage="{ item }">
              <div class="d-flex">
                <v-btn icon>
                  <v-icon
                    color="orange lighten-2"
                    @click="$router.push({name:'EditCourse',params : {id : item.id}})"
                  >mdi-pencil</v-icon>
                </v-btn>
                <DeleteDialog Courses.id></DeleteDialog>
              </div>
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
import DeleteDialog from "../../components/share/DeleteDialog";
import { delete } from 'vue/types/umd';

export default {
  name: "CourseIndex",
  components: { DeleteDialog, Template, PrimaryButton, },
  data() {
    return {
      Courses: null,
      form_param: {page :1},
      
      headers: [
        { text: "Course ID", value: "course_id", align: "start" },
        { text: "Full Name", value: "name" },
        { text: "Teacher Name", value: "teacher_name" },
        { text: "Status", value: "status" },
        { text: "Manage", value: "manage", sortable: false },
      ],
      
    };
  },
  mounted() {
    this.getCourse();
  },
  methods: {
    async getCourse() {
      let Courses = await this.$store.dispatch(
        "course/getCourses",
        this.form_param,
      );
      this.Courses = Courses.results

    },
    async deleteCourse() {
      if (confirm(DeleteDialog)){
        let Courses = await this.$store.delete(
        "course/deleteCourse", this.Courses.id)
        if (data != null) {
          this.$router.go(-1)

        }
        

      }
      
    },
  }
};
</script>

<style scoped>
</style>
