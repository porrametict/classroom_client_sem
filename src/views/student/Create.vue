<template>
  <div>
    <!-- title-->
    <div class="d-flex justify-space-around flex-wrap">
      <h1>Add Student</h1>
    </div>
    <!-- detail-->
    <div class="d-flex justify-space-around flex-wrap">
      <v-card class="ma-5" min-width="500" elevation="0">
        <div>
          <CourseSelect @change="CourseChange"
                        >
          </CourseSelect>
        </div>
        <div>
          <v-text-field label="Name"
                        filled rounded dense
                        v-model="form.name"
                        :rules="[rules.required]"

          ></v-text-field>
        </div>
        <DatePickerInput @change="DateChange" :rules="[rules.required]"></DatePickerInput>
        <div></div>
        <div>
          <v-text-field label="Contact Details" filled rounded dense v-model="form.contact_details" :rules="[rules.required]" ></v-text-field>
        </div>
        <div>
          <v-text-field label="Parent Contact" filled rounded dense v-model="form.parent_contact" :rules="[rules.required]"></v-text-field>
        </div>
      </v-card>
    </div>

    <!--button-->
    <div class="ma-5">
      <div class="d-flex justify-space-around flex-wrap">
        <save-button @click="createStudent"></save-button>
        <cancel-button @click="$router.go(-1)"></cancel-button>
      </div>
    </div>
  </div>
</template>

<script>

import SaveButton from "../../components/share/SaveButton";
import CancelButton from "../../components/share/CancelButton";
import CourseSelect from "../../components/student/CourseSelect";
import DatePickerInput from "../../components/share/DatePickerInput";
import Base from "@/components/share/Base";
export default {
  extends: Base,
  name: "createStudent",
  components: {
    DatePickerInput,
    CourseSelect,
    SaveButton,
    CancelButton
  },
  data() {
    return {
      rules: {
        required: value => !!value || 'Required'
      },
      form: {
        course_id: null,
        enroll_date: null,
        name: null,
        contact_details: null,
        parent_contact: null
      },
    }
  },
  methods: {
    CourseChange(e){
      console.log(e,"change")
      this.form.course_id =e.id
    },
    DateChange(e){
      this.form.enroll_date = this.$moment(e).format()
    },
    async createStudent() {
      console.log(this.form,'create')
      let data = await this.$store.dispatch("student/createStudents", this.form);
      if (data) {
        await this.$router.push({name: "IndexStudent"});
      } else {
      }
    }
  }
};
</script>

<style scoped>

</style>