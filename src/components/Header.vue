<template>
    <div class="cont">
        <div class="header-section">
        <a href=""><h1 class="header-button">kāi</h1></a>
        <span class="header-subtext">aspiring ui/ux designer & front-end developer</span>
    </div>
        <div class="nav">
            <ul>
                <a href="#"><li>home</li></a>
                <a href="#"><li>project</li></a>
                <a href="#"><li>contact</li></a>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name:"HeaderComp"
    }
</script>
<style scoped>
    .cont{
        display: flex;
        gap:20%;
    }
    .header-section{
        display: flex;
        flex-direction: column;
        padding-top: 5em;
        padding-left: 5em;
    }
    .header-button{
        color:white;
        font-weight: 700;
        font-size: 9.3em;
        line-height: .75em;
    }
    .header-section a{
        text-decoration: none;
    }
    .header-subtext{
        color:white;
        font-size: 1em;
        margin-left: .7em;
    }
    .nav{
        color:white;
        padding-top:4.5em;
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