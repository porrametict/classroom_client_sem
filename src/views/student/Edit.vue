<template>
  <div v-if="form">
    <!-- title-->
    <div class="d-flex justify-space-around flex-wrap">
      <h1>EditStudent</h1>
    </div>
    <!-- detail-->
    <div class="d-flex justify-space-around flex-wrap">
      <v-card class="ma-5" min-width="500" elevation="0">
        <div>
          <CourseSelect v-model="form.course_id"
                        :value="form.course_id"
                        disabled>
          </CourseSelect>
        </div>
        <div>
          <v-text-field label="Name"
                        filled rounded dense
                        v-model="form.name"
                        :rules="[rules.required]"

          ></v-text-field>
        </div>
        <DatePickerInput @change="DateChange($event)"
                         :rules="[rules.required]"
                         :error="error.enroll_date"
                         :date_value="form.enroll_date"
        ></DatePickerInput>
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
        <save-button @click="editStudent"></save-button>
        <cancel-button @click="$router.go(-1)"></cancel-button>
      </div>
    </div>
  </div>
</template>


<script>
import SaveButton from "../../components/share/SaveButton";
import CancelButton from "../../components/share/CancelButton";
import Base from "@/components/share/Base";
import DatePickerInput from "@/components/share/DatePickerInput";
import CourseSelect from "../../components/student/CourseSelect";

export default {
  extends : Base,
  name: "EditStudent",
  components: {
    CourseSelect,
    DatePickerInput,
    SaveButton,
    CancelButton
  },
  data() {
    return {
      rules: {
        required: value => !!value || 'Required'
      },
      form: null
    }
  },
  mounted() {
    this.getStudent()
  },
  methods: {
    async getStudent() {
      this.form = await this.$store.dispatch("student/getStudent", this.$route.params.id);
      this.form.enroll_date = this.$moment(this.form.enroll_date).format('YYYY-MM-DD')
      console.log(this.form,'this.form')
    },
    DateChange(e){
      this.form.enroll_date = this.$moment(e).format()
    },
    async editStudent() {
      this.form.enroll_date = this.$moment(this.form.enroll_date).format()
      let data = await this.$store.dispatch("student/updateStudent", this.form);
      if (data) {
        await this.$router.push({name: "IndexStudent"});
      } else {
      }
    },
  }
};
</script>

<style scoped>
</style>