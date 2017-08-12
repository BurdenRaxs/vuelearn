<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="product-board">
        <ul>
          <router-link v-for="item in products" :to="{ path: item.path }" tag="li" active-class="active">
            {{ item.name }}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          {
            name: '英国服务器',
            path: 'en',
            active: false
          },
          {
            name: '美国服务器',
            path: 'usa',
            active: false
          },
          {
            name: '香港服务器',
            path: 'hk',
            active: false
          },
          {
            name: '日本服务器',
            path: 'jp',
            active: false
          }
        ]
      }
    },
    computed: {

    }
  }
</script>

<style>
  .detail-wrap {
    width: 1400px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
    height: 1000px;
  }
  .detail-left {
    float: left;
    width: 200px;
    text-align: center;
  }
  .detail-right {
    float: left;
    width: 1100px;
    margin-left: 20px;
    background-color: #fff;
  }
  .product-board {
    background: #fff;
  }
  .product-board ul {
    /*margin-top: 20px;*/
  }
  .product-board li {
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
  }
  .product-board li.active,
  .product-board li:hover {
    background: #4fc08d;
    color: #fff;
  }
  .product-board li a {
    display: block;
  }

</style>
