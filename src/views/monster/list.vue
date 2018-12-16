<template>
  <div>
    <div class="flex-between">
      <div class="search-bar">
        <div class="search-label">名称：</div>
        <el-input
          placeholder="请输入"
          suffix-icon="el-icon-search"
          class="search-area"
          v-model="keywords">
        </el-input>
        <el-button type="primary">搜索</el-button>
      </div>
      <el-button @click="initFormDialog" type="info">新增</el-button>

    </div>

      <el-table
      :data="monsterLists"
      class="monster-table"
      border
      row-key="id"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="怪物id"
       >
      </el-table-column>
      <el-table-column
        prop="name"
        label="怪物名称">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="quality"
        label="品质">
      </el-table-column>
      <el-table-column
        prop="level"
        label="等级">
      </el-table-column>
      <el-table-column
        prop="blood"
        label="血量">
      </el-table-column>
      <el-table-column
        prop="attack"
        label="攻击">
      </el-table-column>
      <el-table-column
        prop="defence"
        label="防御">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="create_at"
        width="180"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="update_at"
        width="180"
        label="最新修改时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope" >
          <i class="el-icon-edit" @click.stop="edit(scope.row, scope.$index)"></i>
          <i class="el-icon-delete" @click.stop="confirmDelete(scope.row, scope.$index)"></i>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <el-dialog title="怪物维护" :visible.sync="dialogFormVisible"  width="30%">
      <el-form :model="form" label-position="left" class="monster-form" label-width="80px" ref="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-input v-model="form.type" ></el-input>
        </el-form-item>
        <el-form-item label="品质" :label-width="formLabelWidth">
          <el-input v-model="form.quality" ></el-input>
        </el-form-item>
        <el-form-item label="等级" :label-width="formLabelWidth">
          <el-input v-model="form.level" ></el-input>
        </el-form-item>
        <el-form-item label="血量" :label-width="formLabelWidth">
          <el-input v-model="form.blood" ></el-input>
        </el-form-item>
        <el-form-item label="攻击" :label-width="formLabelWidth">
          <el-input v-model="form.attack" ></el-input>
        </el-form-item>
        <el-form-item label="防御" :label-width="formLabelWidth">
          <el-input v-model="form.defence" ></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-radio-group v-model="form.status">
            <el-radio :label="3">启用</el-radio>
            <el-radio :label="6">禁用</el-radio>
            <el-radio :label="9">草稿</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveForm">保 存</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="删除提示"
      :visible.sync="dialogDeleteVisible"
      width="30%">
      <span>确定要删除吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDeleteVisible = false">取 消</el-button>
        <el-button type="primary" @click="excuDelete">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keywords:'',
        dialogFormVisible: false,
        dialogDeleteVisible: false,
        formLabelWidth:'150',
        form: {
          id: 0,
          name: '',
          type:'',
          quality:'',
          level:'',
          blood:'',
          attack:'',
          defence:'',
          status: ''
        },
        monsterLists: [
          {
            id: 1,
            name: '清道夫',
            type:'关卡怪',
            quality:'小怪',
            level:'1',
            blood:'10',
            attack:'1',
            defence:'0',
            status:'启用',
            create_at:'2018-09-10 20:20:21',
            update_at:'2018-10-10 20:20:21'
          },
          {
            id: 2,
            name: '史莱姆',
            type:'关卡怪',
            quality:'小怪',
            level:'1',
            blood:'10',
            attack:'1',
            defence:'0',
            status:'启用',
            create_at:'2018-09-10 20:20:21',
            update_at:'2018-10-10 20:20:21'
          },
          {
            id: 3,
            name: '屠夫',
            type:'关卡怪',
            quality:'boss',
            level:'1',
            blood:'100',
            attack:'10',
            defence:'0',
            status:'启用',
            create_at:'2018-09-10 20:20:21',
            update_at:'2018-10-10 20:20:21'
          },
          {
            id: 4,
            name: '年兽',
            type:'活动怪',
            quality:'boss',
            level:'1',
            blood:'1000',
            attack:'12',
            defence:'0',
            status:'草稿',
            create_at:'2018-09-10 20:20:21',
            update_at:'2018-10-10 20:20:21'
          },
          {
            id: 5,
            name: '土豆',
            type:'任务怪',
            quality:'小怪',
            level:'1',
            blood:'1',
            attack:'0',
            defence:'0',
            status:'废弃',
            create_at:'2018-09-10 20:20:21',
            update_at:'2018-10-10 20:20:21'
          }
        ],
        targetItem: {}
      }
    },
    methods: {
      saveForm() {
        if (this.form.id === 0) {
          this.form.id = this.monsterLists[this.monsterLists.length-1].id + 1
          this.monsterLists.push(this.form)
        } else {
          this.monsterLists[this.selectedIndex] = this.form
        }
        this.dialogFormVisible = false
      },
      edit(item, index) {
        this.form = item
        this.selectedIndex = index
        this.dialogFormVisible = true
      },
      confirmDelete(item,index) {
        this.selectedIndex = index
        this.targetItem = item
        this.dialogDeleteVisible = true
      },
      excuDelete() {
        this.monsterLists.splice(this.selectedIndex,1)
        this.dialogDeleteVisible = false
      },
      initFormDialog() {
        this.resetForm()
        this.dialogFormVisible = true
      },
      resetForm(formName) {
        this.form = {
          id: 0,
          name: '',
          type:'',
          quality:'',
          level:'',
          blood:'',
          attack:'',
          defence:'',
          status: ''
        }
      }
    }
  }
</script>

<style lang="scss">
  .search-bar{
    display: flex;
    .search-label{
      line-height: 40px;
    }
    .search-area{
      width: 200px;
      margin-right: 10px;
    }
  }
  .monster-table{
    margin-top: 30px;
    margin-bottom: 30px;
  }
  i{
    margin-right: 10px;
    cursor: pointer;
  }
  .monster-form{
    width:360px;
    padding-left: 40px;
    .el-form-item{
      display: flex;
    }
    .el-input__inner{
      width: 200px;
    }
  }
</style>
