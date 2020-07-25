<template>
  <div>
    <v-dialog ref="dialog" v-model="dialog" :return-value.sync="time" persistent width="290px">
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          dense
          rounded
          filled
          v-model="time"
          :label="label"
          prepend-icon="mdi-clock-time-four-outline"
          readonly
          v-bind="attrs"
          v-on="on"
          :rules="rules"
        ></v-text-field>
      </template>
      <v-time-picker v-if="dialog" v-model="time" full-width>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="switchDialog">Cancel</v-btn>
        <v-btn text color="primary" @click="saveTime(time)">OK</v-btn>
      </v-time-picker>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "TimePickerInput",
  data: () => ({
    dialog: false,
    time: null
  }),
  props: {
    rules: {
      type: Array,
      require: true
    },
    label: {
      type: String,
      require: false,
      default: "time picker"
    },
    time_value: {
      type: String,
      require: false,
      default: null
    }
  },
  mounted() {
    this.time = this.time_value;
    this.$refs.dialog.save(this.time_value);
  },
  methods: {
    switchDialog() {
      this.dialog = !this.dialog;
    },
    saveTime(time) {
      this.time = time;
      this.$refs.dialog.save(time);
      this.$emit("change", time);
      this.switchDialog();
    }
  }
};
</script>

<style scoped>
</style>