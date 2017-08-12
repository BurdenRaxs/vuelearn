<template>
      <Form :model="formItem" :label-width="80">
        <Form-item label="线路">
          <Radio-group v-model="formItem.radio">
            <Radio label="simple">普通</Radio>
            <Radio label="premium">高级</Radio>
            <Radio label="order">专线</Radio>
          </Radio-group>
        </Form-item>
        <Form-item label="共享">
          <i-switch v-model="formItem.switch" size="large">
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
          </i-switch>
        </Form-item>
        <Form-item label="选择器">
          <Select v-model="formItem.select" style="width:200px">
            <Option value="mouth">一个月</Option>
            <Option value="quarter">三个月</Option>
            <Option value="half">半年</Option>
            <Option value="year">一年</Option>
          </Select>
        </Form-item>
        <div class="total">
          <div class="a">总价</div>
          <div class="a b">
            {{ totals }}
          </div>
        </div>
        <Form-item>
            <Button type="primary" v-on:click="order">订购该服务</Button>
        </Form-item>
      </Form>
</template>
<script>
  export default {
    data () {
      return {
        formItem: {
          radio: 'simple',
          switch: true,
          select: 'mouth'
        }
      }
    },
    props:{
        from:{
          type:String
        }
    },
    computed:{
      totals () {
        let sum=0
        if(this.formItem.radio=="simple"){
          sum += 10
        }else if(this.formItem.radio=="premium"){
          sum+=20
        }else {
          sum+=30
        }
        switch (this.formItem.select)
        {
          case 'mouth':
            sum *= 1;
            break;
          case 'quarter':
            sum *= 3;
            break;
          case 'half':
            sum *= 6;
            break;
          case 'year':
            sum *= 12;
            break;
        }
        return sum;
      }
    },
    methods:{
      order(){
        this.$router.push({ name: 'order', params: { price:this.totals,types:this.formItem.radio,date:this.formItem.select,location:this.from }})
      }
    }
  }
</script>
<style>
  .total{
    height: 32px;
    margin: 10px 0px;
  }
  .a{
    width: 80px;
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 12px;
    color: #495060;
    line-height: 1;
    padding: 10px 12px 10px 0;
    box-sizing: border-box;
  }
  .b{
    color: darkcyan;
  }
</style>
