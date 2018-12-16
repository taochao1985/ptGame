<template>
  <div class="title-body">
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="150px" class="demo-ruleForm">
      <div class="form-title"><h3>基础信息</h3></div>
      <el-form-item label="职业名称" prop="title_name">
        <el-input type="text" v-model="ruleForm.title_name" ></el-input>
      </el-form-item>
      <div class="form-title"><h3>人物属性</h3></div>
      <div class="form-double-item">
        <el-form-item label="初始攻击" prop="init_attack">
          <el-input type="text" v-model="ruleForm.init_attack" ></el-input>
        </el-form-item>
        <el-form-item label="升级提升攻击" prop="upgrade_attack">
          <el-input type="text" v-model="ruleForm.upgrade_attack"></el-input>
        </el-form-item>
      </div>
      <div class="form-double-item">
        <el-form-item label="初始防御" prop="init_defence">
          <el-input type="text" v-model="ruleForm.init_defence"></el-input>
        </el-form-item>
        <el-form-item label="升级提升防御" prop="upgrade_defence">
          <el-input type="text" v-model="ruleForm.upgrade_defence"></el-input>
        </el-form-item>
      </div>
      <div class="form-double-item">
        <el-form-item label="初始幸运" prop="init_luck">
          <el-input type="text" v-model="ruleForm.init_luck"></el-input>
        </el-form-item>
        <el-form-item label="升级提升幸运" prop="upgrade_luck">
          <el-input type="text" v-model="ruleForm.upgrade_luck"></el-input>
        </el-form-item>
      </div>
      <div class="form-double-item">
        <el-form-item label="初始血量" prop="init_blood">
          <el-input type="text" v-model="ruleForm.init_blood" ></el-input>
        </el-form-item>
        <el-form-item label="升级提升血量" prop="upgrade_blood">
          <el-input type="text" v-model="ruleForm.upgrade_blood"></el-input>
        </el-form-item>
      </div>
      <div class="form-double-item">
        <el-form-item label="初始等级" prop="init_level">
          <el-input type="text" v-model="ruleForm.init_level" ></el-input>
        </el-form-item>
      </div>
      <div class="form-double-item">
        <el-form-item label="升级所需经验" prop="upgrade_experi">
          <el-input type="text" v-model="ruleForm.upgrade_experi" ></el-input>
        </el-form-item>
      </div>

      <div class="form-title"><h3>伤害属性</h3></div>
      <div class="form-double-item">
        <el-form-item label="幸运影响暴击参数" prop="luck_crit_param">
          <el-input type="text" v-model="ruleForm.luck_crit_param" ></el-input>
        </el-form-item>
        <el-form-item label="幸运影响暴伤参数" prop="luck_bruise_param">
          <el-input type="text" v-model="ruleForm.luck_bruise_param"></el-input>
        </el-form-item>
      </div>
      <div class="form-double-item">
        <el-form-item label="对怪物伤害计算公式" prop="monster_hert_formula">
          <el-input type="text" v-model="ruleForm.monster_hert_formula" ></el-input>
        </el-form-item>
      </div>

      <div class="form-title"><h3>死亡复活</h3></div>
      <div class="form-double-item">
        <el-form-item label="复活损失经验" prop="relive_lost_exper">
          <el-input type="text" v-model="ruleForm.relive_lost_exper" ></el-input>
        </el-form-item>
        <el-form-item label="复活需要金币" prop="relive_cost_coin">
          <el-input type="text" v-model="ruleForm.relive_cost_coin"></el-input>
        </el-form-item>
      </div>
      <div class="form-double-item">
        <el-form-item label="复活需要钻石" prop="relive_cost_diamand">
          <el-input type="text" v-model="ruleForm.relive_cost_diamand" ></el-input>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          title_name: '',
          init_attack: '',
          upgrade_attack: '',
          init_defence: '',
          upgrade_defence: '',
          init_luck:'',
          upgrade_luck:'',
          init_blood:'',
          upgrade_blood:'',
          init_level:'',
          upgrade_experi: '',
          luck_crit_param:'',
          luck_bruise_param:'',
          monster_hert_formula:'',
          relive_lost_exper:'',
          relive_cost_coin:'',
          relive_cost_diamand:''
        }
      }
    },

    methods: {
      submitForm(e) {
        this.$message({
          message: '保存成功',
          type: 'success'
        });
        console.log(e)
      }
    }
  }
</script>

<style lang="scss">
.title-body{
  padding:20px;
  .form-title{
    padding-bottom: 1px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
  }
  .form-double-item{
    display: flex;
    .el-form-item{
      flex: 1;

    }
  }
  .el-form-item__content{
    .el-input__inner{
      width: 200px;
    }
  }
}

</style>
