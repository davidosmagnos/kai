<template>
       <div class="slide scrollUp">
            <img v-for="pic in pictures" :key="pic" :src="getPic(pic)" alt=""/>
       </div>
       <div class="slide scrollDown">
            <img v-for="pic in pictures" :key="pic" :src="getPic(pic)" alt=""/>
       </div>
</template>
<script>
    export default{
        name:"SliderComp",
        data(){
            return {
                pictures:[
                    "pic1.jpg",
                    "pic2.jpg",
                    "pic3.jpg",
                    "pic4.jpg"
                ]
            }
        },
        methods:{
            getPic(pic){
                return require(`@/assets/${pic}`)
            }
        }
    }

</script>
<style scoped>
    .slide{
        height: 30vh;
        width: 30vw;
        position:absolute;
        right:2vw;

    }
    .slide img{
        width: 100%;
        margin-bottom: 40px;
    }
    .scrollUp{
        animation: scroll 10s linear infinite;
    }
    .scrollDown{
        animation: scroll1 10s linear infinite;
    }

    @keyframes scroll {
        from{
            top:0%
        }
        to{
            top:-300vh;
        }
    }

    @keyframes scroll1 {
        from{
            top:300vh
        }
        to{
            top:0%;
        }
    }

</style>