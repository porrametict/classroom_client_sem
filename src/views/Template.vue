<template>
    <div>
        Nav
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
    import PrimaryButton from "../components/share/PrimaryButton";
    export default {
        name: "Template",
        components: {PrimaryButton}
    }
</script>

<style scoped>

</style>