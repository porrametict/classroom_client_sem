<template>
    <div>
            <v-navigation-drawer
                    v-model="drawer"
                    app
                    permanent
            >
                <v-layout column align-center>
                    <v-flex class="mt-10 mb-8">
                        <p class="title">PROJECT</p>
                    </v-flex>
                </v-layout>
                <v-list>
                    <v-list-item
                            v-for="link in links"
                            :key="link.text"
                            router
                            :to="link.route"
                            active-class="blue--text text--accent-4"
                    >
                        <v-list-item-action>
                            <v-icon color="black">{{link.icon}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="black--text">{{link.text}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <template v-slot:append>
                    <div class="pa-2">
                        <v-btn block dark>Logout</v-btn>
                    </div>
                </template>
            </v-navigation-drawer>
        </div>
</template>

<script>
    import Template from "../views/Template";
    export default {
        name: "Navbar",
        components: {Template},
        data: () => ({
            drawer: false,
            links: [
                { icon: "mdi-square-edit-outline", text: "Course Management", route: "/main/course" },
                { icon: "mdi-account-multiple", text: "Student Management", route: "/main/student" },
            ]
        }),
    }
</script>

<style scoped>

</style>