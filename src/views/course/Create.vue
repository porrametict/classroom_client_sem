<template>
  <v-content>
    <v-container fluid class="fill-height ma-0 pa-0">
      <div class="d-flex flex-column flex-grow-1 pa-5">
        <h1 class="display-3 text-center my-5">Add Course</h1>
        <div class="d-flex justify-space-around align-center flex-wrap">
          <v-row justify="space-around" align="center"  class="d-flex">
            <v-col >
              <v-text-field label="Course Name" v-model="form.course_name" filled rounded dense></v-text-field>
              <v-text-field label="Teacher Name" v-model="form.teacher_name" filled rounded dense></v-text-field>
              <v-col class="d-flex flex-column flex-md-row" >
                <v-select :items="days" label="day" filled rounded dense></v-select>
                <v-spacer></v-spacer>
                <v-dialog
                  ref="dialog"
                  v-model="start"
                  :return-value.sync="time_start"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="time_start"
                      label="Start"
                      filled
                      rounded
                      dense
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker v-if="start" v-model="time_start" full-width>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="start = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(time_start)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
                <v-spacer></v-spacer>
                <v-dialog
                  ref="dialog"
                  v-model="end"
                  :return-value.sync="time_end"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="time_end"
                      label="End"
                      filled
                      rounded
                      dense
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker v-if="end" v-model="time_end" full-width>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="end = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(time_end)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>
            </v-col>
          </v-row>
        </div>
        <div cols="12" sm="6" md="3">
          <h1>
            Course Status
            <v-switch v-model="switch1" value="on" :label="`Status: ${switch1}`"></v-switch>
          </h1>
        </div>
        <div class="ma-10">
          <div class="d-flex justify-space-around flex-wrap">
            <primary-button @click="createCourse">Save</primary-button>
            <primary-button @click="createCourse">Cancel</primary-button>
          </div>
        </div>
      </div>
      <div></div>
    </v-container>
  </v-content>
</template>

<script>
import PrimaryButton from "@/components/share/PrimaryButton";
export default {
  name: "CreateCourse",
  components: {
    PrimaryButton
  },
  data() {
    return {
      start: false,
      end: false,
      time_start: null,
      time_end: null,
      switch1: [],
      days: [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY"
      ],
      form: {
        course_name: "",
        teacher_name: ""
      }
    };
  },
  methods: {
    async createCourse() {
      let data = await this.$store.dispatch("Course/create", this.form);
      if (data) {
        alert("create success");
        await this.$router.push({ name: "IndexCourse" });
      } else {
        alert("create failed");
      }
    }
  }
};
</script>

<style scoped>
</style>