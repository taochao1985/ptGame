<template>
  <div>
    <div class="levels" v-for="(item, index) in levelMonsters">
      <div class="level-title"><h3>关卡{{item.level}}怪物选择</h3></div>
      <div class="monster-list">
        <div class="monster-item" v-for="(monster, indx) in item.monsters">
          <img :src="monster" alt="">
          <div class="deal-area" @click.stop="removeMonster(index, indx)">
            <i class="el-icon-delete"></i>
          </div>
        </div>
        <div v-if="item.monsters.length < 11" v-for="(index) in (11-item.monsters.length)" class="monster-item empty-item">
          <i class="el-icon-plus"></i>
        </div >
      </div>
      <div class="level-deal-area">
        <el-button type="info" size="mini">重置</el-button>
        <el-button type="danger" size="mini" @click.stop="removeLevel(index)">删除关卡</el-button>
      </div>
    </div>
    <el-button type="primary" class="new-level-btn">
      <i class="el-icon-plus"></i>
    </el-button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        levelMonsters: [
          {
            level: 1,
            monsters:[
              require('@/assets/images/1.jpeg'),
              require('@/assets/images/2.jpeg'),
              require('@/assets/images/3.jpeg'),
              require('@/assets/images/4.jpeg'),
              require('@/assets/images/1.jpeg'),
              require('@/assets/images/2.jpeg'),
              require('@/assets/images/3.jpeg'),
              require('@/assets/images/4.jpeg'),
              require('@/assets/images/1.jpeg'),
              require('@/assets/images/2.jpeg'),
              require('@/assets/images/boss.jpeg')
            ]
          },
          {
            level: 2,
            monsters:[
              require('@/assets/images/1.jpeg'),
              require('@/assets/images/2.jpeg'),
              require('@/assets/images/3.jpeg'),
              require('@/assets/images/4.jpeg'),
              require('@/assets/images/1.jpeg'),
              require('@/assets/images/2.jpeg'),
              require('@/assets/images/3.jpeg'),
              require('@/assets/images/4.jpeg'),
              require('@/assets/images/1.jpeg'),
              require('@/assets/images/2.jpeg'),
              require('@/assets/images/boss.jpeg')
            ]
          },
          {
            level: 3,
            monsters:[
              require('@/assets/images/1.jpeg'),
              require('@/assets/images/2.jpeg'),
              require('@/assets/images/3.jpeg'),
              require('@/assets/images/4.jpeg'),
              require('@/assets/images/1.jpeg'),
              require('@/assets/images/2.jpeg'),
              require('@/assets/images/3.jpeg'),
            ]
          }
        ]
      }
    },
    methods: {
      removeLevel(index) {
        this.levelMonsters.splice(index, 1)
      },
      removeMonster(index, indx){
        this.levelMonsters[index].monsters.splice(indx, 1)
      }
    }
  }
</script>

<style scoped lang="scss">
.monster-list{
  display: flex;
  width: 100%;
  .monster-item{
    flex: 1;
    width: 6%;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin:0 1%;
    img{
      width: 80px;
      height: 80px;
    }
    .deal-area{
      text-align: center;
      background-color: #f56c6c;
      height: 30px;
      width: 100%;
      line-height: 30px;
      color: #fff;
      cursor: pointer;
      i{
        margin: 0;
      }
    }
    &.empty-item{
      line-height: 124px;
      height: 114px;
      i{
        font-size: 40px;
        color: #ddd;
        margin-right: 0;
        margin-top: 10px;
      }
    }
  }
}
.level-deal-area{
  text-align: right;
  margin:20px 0;
}
.new-level-btn{
  text-align: center;
  i{
    margin-right: 0;
  }
}
</style>
