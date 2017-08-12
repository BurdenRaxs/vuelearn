<template>
  <div class="index-wrap">
    <div class="carousel">
      <Row>
        <div class="dd">
          <mycarousel></mycarousel>
        </div>
      </Row>
    </div>

      <!--<div class="index-board-list">-->
        <!--<div-->
          <!--class="index-board-item"-->
          <!--v-for="(item, index) in boardList"-->
          <!--:class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">-->
          <!--<div class="index-board-item-inner" >-->
            <!--<h2>{{ item.title }}</h2>-->
            <!--<p>{{ item.description }}</p>-->
            <!--<Button type="success">-->
              <!--<router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>-->
            <!--</Button>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <div class="div1">

      <h2>Appsocks致力于游戏、海淘云加速</h2>
      <div class="fenge"></div>
      <p>我们拥有遍布全球的千兆带宽四核SSD服务器，<br>
            提供最稳定的国际网站、手机App、网游云加速，<br>
            让世界触手可及，让你快人一步。<br>
            无论你是Steam亚服游戏、酷爱PS4、Xbox、DMM舰娘、神姬、刀剑乱舞的游戏玩家，<br>
            又或NICONICO、TWITCH的视频控，<br>
            还是Amazon、乐天海淘客<br>
            Appsocks云加速服务都能提供高速、稳定、安全、自由的完美上网体验。（不提供违法翻墙vpn服务）</p>

    </div>
    <div class="div2">

      <Row>
        <Col span="9">
          <div class="div2left"></div>
        </Col>
        <Col span="15">
          <div class="div2right">
            <h2>仅需几步操作<br/>
              即可享受超快服务</h2>
            <p>提供各平台最完善的使用教程，还有专业客服进行指导，售后没有顾虑。</p>
          </div>
        </Col>
      </Row>

    </div>
    <div class="div2">

      <Row>
        <Col span="15">
        <div class="div3left">
          <h2>多种套餐<br/>
            合适自己的才是最好的</h2>
          <p>分别提供高性价比、高速度、高稳定、高流量多阶梯类型的套餐，省心又省钱。</p>
        </div>
        </Col>
        <Col span="9">
        <div class="div3right">

        </div>
        </Col>
      </Row>
    </div>
    <div class="contractus">
      <Row>
        <Col span="24">
        <div class="culeft">
          <h2>联系我们</h2>
          <div class="">
            <p>及时提供QQ、淘宝和邮件的咨询售后服务<br/>
              必要时可免费远程协助调试</p>
          </div>
          <Button type="error" size="large">向我们反馈建议</Button>
        </div>
        </Col>
      </Row>
    </div>

  </div>
</template>

<script>
  import mycarousel from '@/components/carousel'
  export default {
    components:{
      mycarousel
    },
    data () {
      return {
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          }
        ]
      }
    }

  }
</script>

<style scoped>
  .index-wrap {
    margin: 0 auto;
    overflow: hidden;
  }
  .carousel{
    height: 800px;
  }
  .div1{
    background-color: #21b2a6;
    margin: 0 auto;
    padding: 50px 100px;
    text-align: center;
    color: #a6e0db;
  }
  h2{
    font-size: 30px;
  }
  p{
    font-size: 20px;
  }
  .div2{

    margin: 0 auto;
    color: #a6e0db;
  }
  .div2left{
    background: url("../assets/images/cloud.jpg") no-repeat center;
    height: 476px;
  }
  .div2right{
    background: cadetblue ;
    padding: 150px 100px;
    height: 476px;

  }
  .div3left{
    background: darkcyan;
    padding: 150px 100px;
    height: 428px;
  }
  .div3right{
    background: url("../assets/images/webs.jpg") no-repeat center;
    height: 428px;
  }
  .contractus{
    height: 400px;
    margin: 0 auto;
    text-align: center;
    padding: 100px;
    color: white;
  }
  .fenge{
    background:linear-gradient(to
    left,red,rebeccapurple,red);
    height:1px;
    margin: 10px 10px;
  }

  a {
    text-decoraction: none;
  }
  .router-link-active {
    text-decoration: none;
  }
</style>
