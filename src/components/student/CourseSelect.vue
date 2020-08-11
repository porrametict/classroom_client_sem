<template>
  <div>

    <v-autocomplete
        v-model="course"
        :items="courses"
        item-value="id"
        color="white"
        :filter="customFilter"
        hide-no-data
        hide-selected
        item-text="name"
        label="Course ID"
        return-object
        rounded
        filled
        :disabled="disabled"
        @change="$emit('change',course)"
    ></v-autocomplete>

  </div>
</template>

<script>
export default {
  name: "CourseSelect",
  props: {
    disabled:{
      type: Boolean,
      require: false
    },
    value:{
      type: Number,
      require: false,
      default: null
    }
  },
  data: () => ({
    courses: [],
    course : null,
  }),
  created() {
    this.course = this.value
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      let data = await this.$store.dispatch('course/getCoursesNoPaginate')
      console.log('A')
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