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
        label="物品id"
       >
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column
        label="图片">
        <template slot-scope="scope" >
          <img :src="scope.row.img" alt="" class="item-img" />
        </template>
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
    <el-dialog title="装备维护" :visible.sync="dialogFormVisible"  width="30%">
      <el-form :model="form" label-position="right" class="monster-form" label-width="100px" ref="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.img" :src="form.img" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-input v-model="form.status" ></el-input>
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
          status: '',
          img: ''
        },
        monsterLists: [
          {
            id: 1,
            name: '任务物品1',
            img:require('@/assets/images/1.jpeg'),
            status:'启用',
            create_at:'2018-09-10 20:20:21',
            update_at:'2018-10-10 20:20:21'
          },
          {
            id: 2,
            name: '任务物品2',
            img:require('@/assets/images/2.jpeg'),
            status:'启用',
            create_at:'2018-09-10 20:20:21',
            update_at:'2018-10-10 20:20:21'
          },
          {
            id: 3,
            name: '任务物品3',
            img:require('@/assets/images/3.jpeg'),
            status:'启用',
            create_at:'2018-09-10 20:20:21',
            update_at:'2018-10-10 20:20:21'
          },
          {
            id: 4,
            name: '任务物品4',
            img:require('@/assets/images/4.jpeg'),
            status:'启用',
            create_at:'2018-09-10 20:20:21',
            update_at:'2018-10-10 20:20:21'
          },
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
          status: '',
          img:''
        }
      },
      handleAvatarSuccess(res, file) {
        this.form.img = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
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
  .item-img{
    width: 60px;
    height: 60px;
  }
  .avatar-uploader .el-upload {
   border: 1px dashed #d9d9d9;
   border-radius: 6px;
   cursor: pointer;
   position: relative;
   overflow: hidden;
   i{
     margin-right:0;
     margin-top: 20px;
   }
 }
 .avatar-uploader .el-upload:hover {
   border-color: #409EFF;
 }
 .avatar-uploader-icon {
   font-size: 28px;
   color: #8c939d;
   width: 80px;
   height: 60px;
   text-align: center;
 }
 .avatar {
   width: 60px;
   height: 60px;
   display: block;
 }
</style>
