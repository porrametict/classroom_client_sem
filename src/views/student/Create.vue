<template>
    <div>
        Add student
        <save-button></save-button>
        <cancel-button></cancel-button>
    </div>
</template>

<script>
    import SaveButton from "../../components/share/SaveButton";
    import CancelButton from "../../components/share/CancelButton";
    export default {
        name: "createStudent",
        components:{SaveButton,CancelButton}
    }
</script>

<style scoped>

</style>