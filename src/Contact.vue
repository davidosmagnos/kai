<template>
    <SideNav class="side"/>
    <div class="container">
        <div class="links">
            <ul>
                <a href="https://www.behance.net/thatianjuntere" target="_blank"><li>bēhance</li></a>
                <a href="https://github.com/aiaaeiaeau" target="_blank"><li>github</li></a>
                <a href="https://www.linkedin.com/in/thatiana-juntereal-5530461b4/" target="_blank"><li>linkedin</li></a>
                <a href="thatianajuntereal@gmail.com" target="_blank"><li>g-mail</li></a>
        
            </ul>
        </div>
    </div>
</template>

<script>
import SideNav from './components/SideNav.vue'

export default {
    name:"contact-page",
    components: {
        SideNav
  },
}
    
</script>

<style scoped>
    .side {
        width: 10vh;
    }
    .container {
        height: 100vh;
        background-color: black;
    }
    .links {
        padding-left: 100em;
        position: absolute;
        bottom: 5em;
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
        color: white;
        padding: .3em;
        border-radius: 5px;
        transition: none;
    }
    .links ul a:hover{
        background-color: #444;
    }

</style>