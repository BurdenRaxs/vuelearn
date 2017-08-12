<template>
  <div class="container">
    <div class="center">

      <div class='head'>请确认你的订单</div>
      <div class="content">
        <div class="total">
          <div class="text">你订购了以下商品:</div>
          <div class=" text parm">
            {{this.$route.params.location}}
            {{ itemtype }}
            {{ itemdate }}
          </div>
        </div>
        <div class="total">
          <div class="text">需要支付的价格:</div>
          <div class=" text parm">
            {{ itemprice }}
          </div>
        </div>
        <div class="total">
          <div class="text">选择支付方式:</div>
          <div v-for="(item,index) in choosebank" @click="borderin(index)" class='bank' :class='[item.banks,{ actived: int ===index }]'></div>
        </div>
        <div class="total">
          <div class="btn">
            <Button type="error">提交订单</Button>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        int:'',
        choosebank: [
          {
            banks:'jianshe'
          },
          {
            banks:'yinlian'
          },
          {
            banks:'nonghang'
          },
          {
            banks:'zhifubao'
          },
          {
            banks:'zhonghang'
          },
          {
            banks:'baidu'
          }
        ]
      }
    },
    computed:{
      itemprice () {

        let price =this.$route.params.price;
        return price;
      },
      itemtype(){

        let type
        if(this.$route.params.types=="simple"){
          type ='普通线路'
        }else if(this.$route.params.types=="premium"){
          type='高级线路'
        }else {
          type='专线'
        }
        return type
      },
      itemdate(){
        let date
        switch (this.$route.params.date)
        {
          case 'mouth':
            date = '一个月'
            break;
          case 'quarter':
            date = '三个月'
            break;
          case 'half':
            date = '半个月'
            break;
          case 'year':
            date = '一年'
            break;
        }
        return date;
      }
    },
    methods:{
      borderin(index){
        this.int = index
      }
    }
  }
</script>

<style>
  .container{
    padding-top: 50px;
    height: 1000px;
  }
  .center{
    margin: 0 auto;
    width: 1000px;
    background-color: white;
    height: 400px;
  }
  .content{
    margin: 50px 0px;
  }
  .head{
    padding: 5px 50px;
    background: #4fc08d;
    height: 32px;
    margin: 10px 0px;
    text-align: center;
  }
  .total{
    height: 32px;
    margin: 10px 0px;
  }
  .btn{
    text-align: center;
    margin: 50px 0px;
  }
  .bank{
    display: inline-block;
    width: 115px;
    height: 30px;
    background-image: url(../assets/banks/banks.png);
    background-repeat: no-repeat;
    /*border: 1px solid #e3e3e3;*/
    cursor: pointer;
    margin-left: 10px;
  }
  .actived{
    border: 1px solid darkcyan ;
  }
  .jianshe{
    background-position: -720px 0;
  }
  .yinlian{
    background-position: -1200px 0;
  }
  .nonghang{
    background-position: -1680px 0;
  }
  .zhifubao{
    background-position: -1920px 0;
  }
  .zhonghang{
    background-position: -2520px 0;
  }
  .baidu{
    background-position: -1320px 0;
  }
  .text{
    width: 200px;
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 12px;
    color: #495060;
    line-height: 1;
    padding: 10px 12px 10px 0;
    box-sizing: border-box;
  }
  .parm{
    color: darkcyan;
  }
</style>
