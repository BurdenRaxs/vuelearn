<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark"  @on-select="navselect">
      <div class="navout">
        <div class="layout-logo">
          <router-link to="/"><img src="../assets/logo.png"></router-link>
        </div>
        <div class="layout-left">

          <!--<Menu-item name="mia">-->
            <!--接口测试-->
          <!--</Menu-item>-->
          <Menu-item name="midetail">
            商品
          </Menu-item>
        </div>
        <div class="layout-nav">
          <Menu-item name="miuser" v-if="logstate">
            {{ '用户:'+who }}
          </Menu-item>
          <Menu-item name="miout" v-if="logstate">
            登出
          </Menu-item>
          <Menu-item name="milog" v-if="!logstate">
            登录
          </Menu-item>
          <Menu-item name="mireg" v-if="!logstate">
            注册
          </Menu-item>
          <Menu-item name="miab">
            关于
          </Menu-item>
        </div>
      </div>
    </Menu>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="layout-copy">
      2017 &copy; Raxs
    </div>
    <login :modalshow="modalshow1" :user="user" @back="islogin" @over="resetmodal"></login>
    <register :modalshow="modalshow2"  :user="user" @back="becomeuser" @over="resetmodal"></register>
    <about :modalshow="modalshow3" @over="resetmodal"></about>
  </div>
</template>
<script>
  import about from '../components/about'
  import login from '../components/login'
  import register from '../components/register'
  export default {
    components:{
      about,
      login,
      register
    },
    data(){
      return{
        user:[
          {
            username:'33',
            password:'44'
          },
          {
            username:'ad',
            password:'43'
          },
          {
            username:'raxs',
            password:'wang'
          }
        ],
        who:sessionStorage.who,
        logstate: sessionStorage.state,
        modalshow1: false,
        modalshow2: false,
        modalshow3: false,
        pc: {
            title: 'PC产品',
            list: [
              {
                name: '数据统计',
                url: ''
              },
              {
                name: '数据预测',
                url: ''
              },
              {
                name: '流量分析',
                url: ''
              },
              {
                name: '广告发布',
                url: ''
              }
            ]
          },
        app: {
            title: '手机应用类',
            last: true,
            list: [
              {
                name: '91助手',
                url: ''
              },
              {
                name: '产品助手',
                url: ''
              },
              {
                name: '智能地图',
                url: ''
              },
              {
                name: '团队语音',
                url: ''
              }
            ]
          }
        }
      },
      methods: {
        navselect (name) {
          if(name=='milog'){
            this.modalshow1 = true
          }
          if(name=='mireg'){
            this.modalshow2 = true
          }
          if(name=='miab')
          {
            this.modalshow3 = true
          }
          if(name=='miout'){
            //this.logstate = false

            this.logstate = false
            this.$Message.success('成功登出');
          }
          if(name == 'miuser'){
            this.$router.push({ path: '/user' })
          }
          if(name == 'midetail'){
            this.$router.push({ path: '/detail' })
          }
        },
        resetmodal(){

          this.modalshow1 = false
          this.modalshow2 = false
          this.modalshow3 = false
        },
        becomeuser(newuser){
          let obj={};
          obj.username= newuser.name;
          obj.password = newuser.pwd;
          this.user.push(obj);

          this.modalshow1 = false
          this.modalshow2 = false
          this.modalshow3 = false
        },
        islogin(req){
          //this.logstate = req.state
          sessionStorage.who = req.who
          this.who = sessionStorage.who
          sessionStorage.state = req.state
          this.logstate = sessionStorage.state
          this.modalshow1 = false
        }
      }

  }
</script>

<style scoped>
  .layout{
    /*border: 1px solid #d7dde4;*/
    background-image: url('../assets/images/backgroud.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .navout{
    padding: 0px 50px;
    height: 60px;
  }
  .layout-logo{
    height: 60px;
    float: left;
    /*position: relative;*/
    top: 5px;
    left: 30px;
    padding-left: 100px;
  }
  .layout-logo img{
    padding-top: 5px;
    width: 50px;
  }
  .layout-nav{
    margin: 0 auto;
    float: right;
    padding-right: 100px;
  }
  .layout-left{
    margin: 0 auto;
    float: left;
    padding-left: 100px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: white;
    background: gray;
    opacity: 0.3;
  }
</style>
