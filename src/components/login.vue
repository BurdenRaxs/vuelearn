<template>
  <Modal
    v-model="modalshow"
    title="登录"
    :closable="false"
    @on-ok="ok(user)"
    @on-cancel="cancel">
    <Input v-model="userinput">
    <span slot="prepend">用户名：</span>

    </Input>
    <br>
    <Input v-model="pwdinput">
    <span slot="prepend">密码：</span>

    </Input>
    {{ user }}
  </Modal>
</template>
<script>
  export default {
    data () {
      return{
        userinput:'',
        pwdinput:'',
        logok:true
      }
    },
    props :{
      modalshow:{
        type:Boolean
      },
      user:{
        type:Array
      }
    },
    methods: {
      ok (userarr) {
        var key = 1;
        for(var i in userarr){

          if(this.userinput == userarr[i].username){
            key = 2;
            if(this.pwdinput == userarr[i].password){
              key = 3;
              this.$emit('back',{
                  state:this.state,
                  who:this.userinput
              })
              this.$Message.success('登录成功');
            }
          }
        }
        if(key==1){
          this.$emit('over')
          this.$Message.warning('登录失败，未找到账号');
        }
        if(key==2){
          this.$emit('over')
          this.$Message.warning('登录失败，密码错误');
        }
        this.userinput = null
        this.pwdinput = null
      },
      cancel () {
        this.$emit('over')
      }
    }
  }
</script>
