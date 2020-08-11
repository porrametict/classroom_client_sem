<template>
  <div >
    <!--table-->
    <div>
      <v-data-table

          v-model="students"
          :headers="headers_student"
          :items="students"
          :items-per-page="10"
          class="elevation-1"
          hide-default-footer
      >
        <template v-slot:item.id="{item}">
          {{ item.id.student_id }}
        </template>
        <template v-slot:item.user="{item}">
          {{ item.user.name }}
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
import Template from "@/views/Template";
import DeleteDialog from "@/components/share/DeleteDialog";
import PrimaryButton from "@/components/share/PrimaryButton";
import { mapState } from 'vuex';
export default {
  name: "StudentInCourse",
  components: {Template, DeleteDialog, PrimaryButton},
  props: {
    value: {
      type: Number,
      require: false,
      default: null
    }
  },
  data() {
    return {
      student: null,
      students: [],
      form_params: {
        search: null,
        course_id: null,
        page: 1,
        length: 0,
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
          text: 'Actions',
          align: 'start',
          value: 'actions',
          sortable: false,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      course_id: state => state.student.course_id,
    }),
  },

  mounted(){
    if (this.course_id != null){
      this.form_params.course_id = this.course_id
      this.loadData()
      console.log('if')
    }else {
      console.log('else')
      this.students = []
    }
  },
  methods: {
    async loadData() {
      let data = await this.$store.dispatch('student/getStudents', this.form_params)
      console.log(data, "student")
      this.form_params.length = Math.ceil(data.count / 10)
      this.students = data.results
    },
    changePage(page) {
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
  },

}
</script>

<style scoped>

</style>