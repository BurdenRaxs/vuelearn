<template>
  <Modal
    v-model="modalshow"
    title="关于"
    :closable="false"
    @on-ok="ok"
    @on-cancel="cancel">
      <p>Appsocks成立于2016年，</p>
      <p>注册时间为2016年3月，</p>
      <p>主要从事云加速硬件和软件服务,</p>
      <p>由一群年轻有梦想的80后、90后创立，</p>
      <p>专注于游戏、海淘加速器，</p>
      <p>采用国际知名服务器专线，</p>
      <p>支持Mac、Windows、Android和iOS跨平台云加速。</p>

  </Modal>
</template>
<script>
  export default {
    data () {
      return{

      }
    },
    props :{
      modalshow:{
        type:Boolean
      }
    },
    methods: {
      ok () {
        this.$emit('over')
      },
      cancel () {
        this.$emit('over')
      }
    }
  }
</script>
