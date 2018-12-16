<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <navigator></navigator>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import navigator from '@/views/common/Navigator'
import Cheader from '@/views/common/Header'
  export default {
    components: {
      navigator,
      Cheader
    }
  }
</script>
<style>
  body,ul,li{
    margin: 0;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    /* background-color: #D3DCE6; */
    color: #000;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    color: #000;
  }
  .text-left{
    text-align: left;
  }
</style>
