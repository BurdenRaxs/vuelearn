
import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
