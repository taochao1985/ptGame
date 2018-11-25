import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import titleManage from '@/views/titleManage.vue'
import monsterList from '@/views/monsterList.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/person/title_manage',
      name: 'home',
      component: titleManage,
      meta: {title:'职业模板维护'}
    },
    {
      path: '/monster/list',
      name: 'monsterList',
      component: monsterList,
      meta: {title:'怪物维护'}
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
