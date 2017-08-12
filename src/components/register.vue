<template>
  <Modal
    v-model="modalshow"
    title="注册"
    :closable="false"
    @on-ok="ok(user)"
    @on-cancel="cancel">
    <Input v-model="newuser">
    <span slot="prepend">用户名：</span>

    </Input>
    <br>
    <Input v-model="newpwd">
    <span slot="prepend">密码：</span>

    </Input>

  </Modal>
</template>
<script>
  export default {
    data () {
      return{
        newuser:null,
        newpwd:null
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
        if(this.newuser == null || this.newpwd == null){
          this.$Message.warning('用户名和密码不能为空');
          this.$emit('over')
        }else {
          var key = true;
          for(var i in userarr){
            if(this.newuser == userarr[i].username){
              this.$Message.warning('用户名重复');
              this.$emit('over')
              key = false
            }
          }
          if(key==true){
            this.$emit('back',{
              name:this.newuser,
              pwd:this.newpwd
            })
            this.$Message.success('注册成功');
          }
        }

        this.newuser = null
        this.newpwd = null
      },
      cancel () {
        this.$emit('over')
      }
    }
  }
</script>
