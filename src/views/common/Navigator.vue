<template>
  <div>
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      :router="true"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="0">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>人物管理</span>
        </template>
        <el-menu-item index="/person/title_manage" >职业模板维护</el-menu-item>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>怪物管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-0" >怪物维护</el-menu-item>
          <el-menu-item index="1-1" >关卡怪设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>装备物品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-0" >装备模板维护</el-menu-item>
          <el-menu-item index="2-1" >物品模板维护</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>任务管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-0" >日常任务</el-menu-item>
          <el-menu-item index="3-1" >活动任务</el-menu-item>
          <el-menu-item index="3-2" >蓝色任务</el-menu-item>
          <el-menu-item index="3-3" >任务统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="4-0" >玩家查询</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-0" >挂机维护参数</el-menu-item>
          <el-menu-item index="5-1" >角色维护</el-menu-item>
          <el-menu-item index="5-2" >后台用户管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>平台内容管理</span>
        </template>
        <el-menu-item index="6-0" >公告</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: '1'
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
