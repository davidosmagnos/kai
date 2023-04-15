<template>
    <div class="container">
        <Header/>
    </div>
</template>
<script>
    import Header from './components/Header.vue';
    export default{
        name:"projects-page",
        components:{
            Header
        }
    }
    
</script>
<style scoped>
    .container{
        height: 100vh;
        background-color: black;
    }
</style>