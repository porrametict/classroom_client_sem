<template>
    <v-main>
        <v-container
                class="fill-height"
                fluid
        >
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col
                        cols="12"
                        sm="8"
                        md="4"
                >
                    <div class="text-center mb-12">
                        <p class="display-3 grey--text text--darken-2">Project Name</p>
                    </div>
                    <v-card class="elevation-0">
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                        outlined
                                        rounded
                                        label="Username"
                                        type="text"
                                        prepend-inner-icon="mdi-account"

                                        v-model="form.username"
                                        :rules="[rules.required]"

                                        :error-messages="error.username"


                                ></v-text-field>

                                <v-text-field
                                        outlined
                                        rounded
                                        label="Password"
                                        :type="show_password ? 'text' : 'password'"
                                        prepend-inner-icon="mdi-lock"
                                        :append-icon="show_password ? 'mdi-eye': 'mdi-eye-off'"
                                        @click:append="show_password = !show_password"
                                        @keypress.13="login"

                                        v-model="form.password"
                                        :rules="[rules.required]"


                                        :error-messages="error.password"


                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions class="my-0 py-0">
                            <v-btn
                                    color="c_sky"
                                    x-large
                                    rounded
                                    block
                                    @click="login"
                            >
                                Login
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import Base from "../components/share/Base"
    import PrimaryButton from "../components/share/PrimaryButton";

    export default {
        name: "Login",
        extends: Base,
        components: {PrimaryButton},
        data() {
            return {
                show_password: false,
                form: {
                    username: '',
                    password: ''
                },
                rules: {
                    required: value => !!value || 'Required'
                }
            }
        },
        methods: {
            async login() {
                let data = await this.$store.dispatch('user/getUserToken', this.form)
                if (data) {
                    await this.$router.push({name: 'IndexStudent'})
                }
            }
        }
    }
</script>

<style scoped>

</style>