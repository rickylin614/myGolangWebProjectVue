<template>
  <div class="orderManage">
    <!-- <el-button @click="apicheck">測試扭</el-button>  -->
    <el-button class="button" @click="search">搜尋</el-button>
    <router-link :to="{ path: '/insertOrder'}">
      <el-button
        type="primary"
        icon="el-icon-plus" 
        label="新增">新增</el-button>
    </router-link>
    <el-table
      :data="storeData"
      style="width: 100%">
      <el-table-column
        prop="PhoneNo"
        label="電話"
        width="180"/>
      <el-table-column
        prop="Name"
        label="餐廳名稱"
        width="180"/>
      <el-table-column
        prop="Region"
        label="地區"/>
      <el-table-column
        prop="operator"
        label="操作">
        <template slot-scope="scope">
          <router-link :to="{ path: '/updateOrder' ,query:{id: scope.row.ID}}">
            <el-button
              type="primary"
              icon="el-icon-plus" 
              label="修改">修改</el-button>
          </router-link>
          <el-button class="mt5" icon="el-icon-delete" @click="remove(scope.row.ID)">刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//import { mutations } from './../../api/mutations/mutations'

export default {
  data() {
    return {
      storeData : [],
    }
  },
  beforeCreated() {
    this.search()
  },
  methods: {
    apicheck() {
      var url = "/linkCheck"
      this.$store.dispatch("Get",url)
    },
    remove(id) {
      var postData = {
        'url': '/store/delete',
        data: {
          "Id":Number(id)
        }
      }
      this.$store.dispatch('Post', postData).then(res => {
        this.$message({
          type: 'info',
          message: res.msg
        })
        this.search()
      })
    },
    search() {
      var url = "/store/queryStore"
      var data = {
        url : url,
        data : {
          "pageNo" : 1,
          "pageSize" : 5
        }
      }
      this.$store.dispatch("Post",data).then(res => {
        this.storeData = res.data
      })
    }
  }
}
</script>

<style>
  .orderManage {
    text-align: left;
  }
</style>
