<template>
	<div class="container">
        
		<HeaderComp class="header"/>
        <HeaderName class="header"/>
		<SliderComp/>
        <footer class="footer">
            <span>日本語の場合はランダムに生成された文章以外に</span>
            <span>著作権が切れた小説などが利用されることもある。</span>
            <span v-for="greet in greetList" :key="greet">
                <PropComp :greeting="greet"/>
            </span>
        </footer>
	</div>
	
</template>

<script>
import HeaderComp from './Header.vue'
import SliderComp from './Slider.vue'
import PropComp from './Prop.vue'
import HeaderName from './HeaderName.vue'

export default {
  name: 'App',
  components: {
    HeaderName,
    HeaderComp,
	SliderComp,
    PropComp
  },
  data(){
    return{
        greetList:["fuck you","hi","wtf","henlo","shit"]
    }
  }
}
</script>

<style>
	*{
		margin:0;
		padding:0;
		box-sizing: border-box;
		font-family: "Montserrat",sans-serif;
        color:white;
	}
	.container{
		background-color: black;
		height: 100vh;
	}
	h1,h2,h3,h4,h5,h6{
		padding:0;
		margin:0
	}
	.header{
		width: 75vw;;
	}
	body{
		/* overflow: hidden; */
	}
    .footer{
        display: flex;
        flex-direction: column;
        padding-left:5.5em;
        position:absolute;
        bottom:3em;
    }

</style>
