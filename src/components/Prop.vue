<template>
    <h1>{{ greeting }}</h1>
</template>
<script>
    export default{
        name:"prop-comp",
        props:{
            greeting:String
        }
    }
</script>
<style scoped>
    
</style>