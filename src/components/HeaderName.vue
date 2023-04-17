<template>
    <div class="cont">
        <div class="header-section">
        <a href=""><h1 class="header-button">kāi</h1></a>
        <span class="header-subtext">aspiring ui/ux designer & front-end developer</span>
    </div>
    </div>
</template>
<script>
    export default{
        name:"HeaderName"
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
        padding-top: 0em;
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
</style>