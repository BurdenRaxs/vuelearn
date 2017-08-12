<template>
  <Carousel autoplay v-model="value1" class="mycarousel">
    <Carousel-item>
      <div class="demo-carousel1" ></div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel2"></div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel3"></div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel4"></div>
    </Carousel-item>
  </Carousel>
</template>
<script>
  export default {
    data () {
      return {
        value1: 0
      }
    }
  }
</script>
<style>
  .demo-carousel1{
    background: url("../assets/slideShow/pic1.jpg") no-repeat center;
    height: 800px;
  }
  .demo-carousel2{
    background: url("../assets/slideShow/pic2.jpg") no-repeat center;
    height: 800px;
  }
  .demo-carousel3{
    background: url("../assets/slideShow/pic3.jpg") no-repeat center;
    height: 800px;
  }
  .demo-carousel4{
    background: url("../assets/slideShow/pic4.jpg") no-repeat center;
    height: 800px;
  }
</style>
