<template>
    <h1 class="top">kāi</h1>
    <div class="links">
            <ul>
                
                <a href="/"><li>home</li></a>
                <a href="/projects"><li>project</li></a>
                <a href="/contact"><li>contact</li></a>
            </ul>
        </div>
</template>
<script>
    export default{
        name:"SideNav"
    }
</script>

<style scoped>
    .top {
        padding-top: 3.5em;
        background-color: black;
        text-decoration: none;
        border-right: solid 2px red;
        width: 10em;
        color: black;
    }
    .links {
        position: absolute;
        background-color: black;
    }
    .links ul{
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 3em;
    }
    .links ul a{
        display: block;
        flex-direction: column;
        text-decoration: none;
        padding: .3em;
        border-radius: 5px;
        transition: none;
    }
    .links ul a:hover{
        background-color: #444;
    }

</style>