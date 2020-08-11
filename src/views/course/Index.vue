<template>
  <div v-if="Courses">
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
           <template v-slot:item.status="{ item }">
            {{item.status ? 'Avaliable':'Unvaliable'}}
            </template>
            <template  v-slot:item.students="{ item }">
              <v-btn icon>
                <v-icon color="primary" @click="openDialog(item.id)">mdi-book-account-outline</v-icon>
              </v-btn>
            </template>
            <template v-slot:item.actions="{ item }">
              <div class="d-flex">
                <v-btn icon>
                  <v-icon color="orange lighten-2" @click="gotoEdit(item.id)">mdi-pencil</v-icon>
                </v-btn>
                <DeleteDialog @change="deleteCourse($event,item)"></DeleteDialog>
              </div>
            </template>
          </v-data-table>
          <v-pagination
            v-model="form_param.page"
            :length="form_param.length"
            circle
            @input="changePage"
          ></v-pagination>
        </template>
      </div>
    </div>
  <v-row>
    <v-dialog  v-model="dialog" max-width="640">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="closeDialog(null)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Students</v-toolbar-title>
        </v-toolbar>
      <student-in-course/>
      </v-card>
    </v-dialog>
  </v-row>
  </div>
</template>

<script>
import PrimaryButton from "../../components/share/PrimaryButton";
import Template from "../Template";
import DeleteDialog from "../../components/share/DeleteDialog";
import StudentInCourse from "@/components/course/StudentInCourse";

export default {
  name: "CourseIndex",
  components: { DeleteDialog, Template, PrimaryButton, StudentInCourse},
  data() {
    return {
      dialog: false,
      Courses: null,
      value_course_id:null,
      form_param: { search: null, page: 1, length: 0 },
      headers: [
        { text: "Course ID", value: "course_id", align: "start" },
        { text: "Corse Name", value: "name" },
        { text: "Teacher Name", value: "teacher_name" },
        { text: "Status", value: "status" },
        { text: "Students", value: "students" },
        { text: "Manage", value: "actions", sortable: false },
      ],
    };
  },
  mounted() {
    this.getCourse();
  },
  methods: {
    async getCourse() {
      let Courses = await this.$store.dispatch("course/getCourses", this.form_param);
      this.Courses = Courses.results;
      console.log(this.Courses,'Course')
    },
    async deleteCourse(params, item) {
      if (params) {
        let data = await this.$store.dispatch("course/deleteCourse", item.id);
        if (data != null) {
          await this.getCourse();
        }
      }
    },
    setCourseID: async function (item) {
      let course = await this.$store.dispatch("student/setCourse_id", item);
      if (course) {
        console.log(course, 'courseInStore')
      }
    },
    gotoEdit(id) {
      this.$router.push({
        name: 'EditCourse',
        params: {
          id: id,
        },
      });
    },
    changePage(page) {
      this.form_param.page = page;
      this.getCourse();
    },
    openDialog(id){
      this.setCourseID(id)
      this.dialog = true
    },
    closeDialog(id){
      this.setCourseID(id)
      this.dialog = false
    },
  },
};
</script>

<style scoped>
</style>
