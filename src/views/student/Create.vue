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
                    <v-text-field
                            label="Course ID"
                            outlined
                            dense
                    >
                    </v-text-field>
                </div>
                <div>
                    <v-text-field
                            label="Name"
                            outlined
                            dense
                    >
                    </v-text-field>
                </div>
                <v-menu
                        ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"

                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                                v-model="dateFormatted"
                                label="Enroll Date"
                                persistent-hint
                                v-bind="attrs"
                                @blur="date = parseDate(dateFormatted)"
                                v-on="on"
                                outlined
                                dense
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                </v-menu>
                <div>

                </div>
                <div>
                    <v-text-field
                            label="Address"
                            outlined
                            dense
                    >
                    </v-text-field>
                </div>
                <div>
                    <v-text-field
                            label="E-mail"
                            outlined
                            dense
                    ></v-text-field>
                </div>
                <div>
                    <v-text-field
                            label="Contact Details"
                            outlined
                            dense
                    ></v-text-field>
                </div>
                <div>
                    <v-text-field
                            label="Parent Contact"
                            outlined
                            dense
                    ></v-text-field>
                </div>
            </v-card>
        </div>

        <!--button-->
        <div class="ma-5">
            <div class="d-flex justify-space-around flex-wrap">
                <v-btn color="green accent-4">SAVE</v-btn>
                <v-btn color="gary">CANCEL</v-btn>
            </div>
        </div>

    </div>
</template>

<script>
    import Index from '../course/Index'

    export default {
        name: "createStudent",
        components: {
            Index,
        },
        data: vm => ({
            date: new Date().toISOString().substr(0, 10),
            dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
            menu1: false,
        }),
        computed: {
            computedDateFormatted() {
                return this.formatDate(this.date)
            },
        },

        watch: {
            date(val) {
                this.dateFormatted = this.formatDate(this.date)
            },
        },

        methods: {
            formatDate(date) {
                if (!date) return null

                const [year, month, day] = date.split('-')
                return `${month}/${day}/${year}`
            },
            parseDate(date) {
                if (!date) return null

                const [month, day, year] = date.split('/')
                return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            },
        },
    }
</script>

<style scoped>

</style>