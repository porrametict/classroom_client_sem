<template>
    <div>
        <Navbar/>
        <PrimaryButton @click="$router.push({name:'IndexStudent'})">Student Index</PrimaryButton>
        <v-main>
            <v-layout>
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-layout>
        </v-main>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import PrimaryButton from "../components/share/PrimaryButton";
    import {mapState} from 'vuex'

    export default {
        name: "Template",
        components: {Navbar, PrimaryButton},
        mounted() {
            this.checkHasUser()
        },
        computed: {
            ...mapState({
                user: state => state.user.user
            })
        },
        methods: {
            async checkHasUser() {
                if (!this.user) {
                    let data = await this.$store.dispatch('user/getUser')
                    if (!data) {
                        await this.$router.push({
                            name: 'Login'
                        })
                    }
                }

            }
        }
    }
</script>

<style scoped>

</style>