<template>

    <div>
         <v-btn
            @click="goCreate"
         
         >
            Add Course
        </v-btn>
        <h1>Course list page</h1>
    </div>
</template>

<script>
    export default {
        name: "CourseIndex",
        components: {},
        data: () => ({

        }),
        methods: {
            async goCreate (){
                await this.$router.push( 'create')
            
            }
        }
    }
    
</script>

<style scoped>

</style>