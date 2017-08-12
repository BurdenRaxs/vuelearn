import Vue from 'vue'
import Router from 'vue-router'
import indexpage from '@/pages/index'
import detailpage from '@/pages/detail'
import en from '@/pages/details/en'
import hk from '@/pages/details/hk'
import jp from '@/pages/details/jp'
import usa from '@/pages/details/usa'
import order from '@/pages/order'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'indexpage',
      component: indexpage
    },
    {
      path: '/detail',
      name:'detailpage',
      component:detailpage,
      redirect: '/detail/en',
      children: [
        {
          path: 'en',
          component: en
        },
        {
          path: 'usa',
          component: usa
        },
        {
          path: 'hk',
          component: hk
        },
        {
          path: 'jp',
          component: jp
        }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
