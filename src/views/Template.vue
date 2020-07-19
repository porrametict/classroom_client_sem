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

    export default {
        name: "Template",
        components: {Navbar, PrimaryButton}
    }
</script>

<style scoped>

</style>