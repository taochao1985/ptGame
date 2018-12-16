import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import titleManage from '@/views/titleManage.vue'
import monsterList from '@/views/monster/list.vue'
import levelMonsterSet from '@/views/monster/set.vue'
import equipmentList from '@/views/equipmentList.vue'
import itemList from '@/views/itemList.vue'
import dailyTask from '@/views/task/daily.vue'
import eventTask from '@/views/task/event.vue'
import cacuTask from '@/views/task/cacu.vue'
import blueTask from '@/views/task/blue.vue'

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
      path: '/monster/set',
      name: 'levelMonsterSet',
      component: levelMonsterSet,
      meta: {title:'关卡怪物设置'}
    },
    {
      path: '/equipment/list',
      name: 'equipmentList',
      component: equipmentList,
      meta: {title:'装备模板维护'}
    },
    {
      path: '/item/list',
      name: 'itemList',
      component: itemList,
      meta: {title:'物品模板维护'}
    },
    {
      path: '/daily/task',
      name: 'dailyTask',
      component: dailyTask,
      meta: {title:'日常任务'}
    },
    {
      path: '/event/task',
      name: 'eventTask',
      component: eventTask,
      meta: {title:'活动任务'}
    },
    {
      path: '/blue/task',
      name: 'blueTask',
      component: blueTask,
      meta: {title:'蓝色任务'}
    },
    {
      path: '/cacu/task',
      name: 'cacuTask',
      component: cacuTask,
      meta: {title:'任务统计'}
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
