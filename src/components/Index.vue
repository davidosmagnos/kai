<template>
	<div class="container">
		<HeaderComp class="header"/>
		<SliderComp/>
	</div>
	
</template>

<script>
import HeaderComp from './Header.vue'
import SliderComp from './Slider.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
	SliderComp
  }
}
</script>

<style>
	*{
		margin:0;
		padding:0;
		box-sizing: border-box;
		font-family: "Montserrat",sans-serif;
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
		overflow: hidden;
	}
</style>
