<template>
  <div>
    <!--content-->
    <div>
      <div>
        <PrimaryButton @click="$router.push({name:'CreateCourse'})">Add Course</PrimaryButton>
      </div>
      <div>
        <template>
          <v-data-table v-if="Courses" :headers="headers" :items="Courses" class="elevation-1">
            <template v-slot:item.actions="{ item }">
              <div class="d-flex">
                <v-btn icon>
                  <v-icon
                    color="orange lighten-2"
                    @click="$router.push({name:'EditCourse'})"
                  >mdi-pencil</v-icon>
                </v-btn>
                <DeleteDialog @change="deleteCourse($event,item)"></DeleteDialog>
              </div>
            </template>
            <v-pagination
              v-model="form_param.page"
              :length="form_param.length"
              circle
              
            ></v-pagination>
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

export default {
  name: "CourseIndex",
  components: { DeleteDialog, Template, PrimaryButton },
  data() {
    return {
      Courses: null,
      form_param: { search: null, page: 1, length: 0 },

      headers: [
        { text: "Course ID", value: "course_id", align: "start" },
        { text: "Full Name", value: "name" },
        { text: "Teacher Name", value: "teacher_name" },
        { text: "Status", value: "status" },
        { text: "Manage", value: "actions", sortable: false },
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
        this.form_param
      );
      this.Courses = Courses.results;
    },
    async deleteCourse(params, item) {
      if (params) {
        let data = await this.$store.dispatch("course/deleteCourse", item.id);
        if (data != null) {
          await this.getCourse();
        }
      }
    },
  }
};
</script>

<style scoped>
</style>
