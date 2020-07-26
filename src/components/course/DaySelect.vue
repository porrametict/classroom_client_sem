<template>
    <v-select
            :items="days"
            label="day"
            item-value="id"
            item-text="text"
            return-object
            filled rounded dense
            :rules="rules"
            v-model="item"
            @change="dayChange"
            :error="error"

    ></v-select>
</template>

<script>
    export default {
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            error : {
                type : Array,
                require : false
            },
            value: {
                type: Number,
                require: false,
                default: 1
            },
            rules: {
                type: Array,
                require: true
            }
        },
        name: "DaySelect",
        created() {
            this.item = this.value
        },
        data() {
            return {
                item: null,
                days: [
                    {id: 1, text: "SUNDAY"},
                    {id: 2, text: "MONDAY"},
                    {id: 3, text: "TUESDAY"},
                    {id: 4, text: "WEDNESDAY"},
                    {id: 5, text: "THURSDAY"},
                    {id: 6, text: "FRIDAY"},
                    {id: 7, text: "SATURDAY"},
                ],
            }
        },
        methods: {
            dayChange() {
                this.$emit('change', this.item.id)
            }

        }
    }
</script>

<style scoped>

</style>