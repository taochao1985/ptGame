<template>
  <div class="home">
    <ul>
      <li>
        <div class="home-label text-left"><i class="iconfont icon-yuangongguanli-mian"></i> 累计用户数量 </div>
        <div class="home-count">17995</div>
      </li>
      <li>
        <div class="home-label text-left"><i class="iconfont icon-lishihuihua"></i> 近7天新用户增量 </div>
        <div class="home-count">195</div>
      </li>
      <li>
        <div class="home-label text-left"><i class="iconfont icon-kehuguanli-mian"></i> 今日登陆人数 </div>
        <div class="home-count">195</div>
      </li>
      <li>
        <div class="home-label text-left"><i class="iconfont icon-lishihuihua"></i> 今日登陆人次 </div>
        <div class="home-count">1950</div>
      </li>
      <li>
        <div class="home-label text-left"><i class="iconfont icon-lishihuihua"></i> 今日新用户 </div>
        <div class="home-count">195</div>
      </li>
      <li>
        <div class="home-label text-left"><i class="iconfont icon-shijian"></i> 当前在线人数 </div>
        <div class="home-count">195</div>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home'
}
</script>
<style lang="scss" scoped>
  .home{
    li{
      display: flex;
      justify-content: flex-start;
      height: 40px;
      line-height: 40px;
      .home-label{
        width: 200px;
        margin-right: 20px;
      }
    }
  }
</style>
