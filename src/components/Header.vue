<template>
        <div class="nav">
            <ul>
                <a href="/"><li>home</li></a>
                <a href="/projects"><li>project</li></a>
                <a href="/contact"><li>contact</li></a>
            </ul>
            
        </div>
        

</template>
<script>
    export default{
        name:"HeaderComp"
    }
</script>
<style scoped>
    .nav{
        color:white;
        padding-top: 4.5em;
        padding-left: 50em;
        z-index: 2;
    }
    .nav ul{
        list-style: none;
        display: flex;
        gap:3em;
    }
    .nav ul a{
        text-decoration: none;
        color: white;
        padding:.3em;
        border-radius: 10%;
        transition: .3s;
    }
    .nav ul a:hover{
        background-color: #444;
    }
</style>