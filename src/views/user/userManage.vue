<template>
  <div class="userManage">
    <!-- <el-button @click="apicheck">測試扭</el-button>  -->
    <el-button class="button" @click="search">搜尋</el-button>
    <el-table
      :data="userData"
      class="trans"
      style="width: 100%;"
      border="">
      <el-table-column 
        type="index" 
        label="序號" 
        align="center"
        width="80"/>
      <el-table-column
        prop="CreatedAt"
        label="註冊日期"
        width="200"
        align="center"/>
      <el-table-column
        prop="Name"
        label="姓名"
        width="100"
        header-align="center"/>
      <el-table-column
        prop="LoginTime"
        label="登入日期"
        width="200"
        align="center"/>
    </el-table>
    <div class="block">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="pageSize"
        :total="0"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData : [],
      currentPage : 0,
      pageSize : 100,
      totalCount : 0,
    }
  },
  created() {
    this.search()
  },
  methods: {
    apicheck() {
      var url = "/linkCheck"
      this.$store.dispatch("Get",url)
    },
    search() {
      var url = "/user/queryUser"
      var data = {
        url : url,
        data : {
          "pageNo" : 1,
          "pageSize" : 5
        }
      }
      this.$store.dispatch("Post",data).then(res => {
        this.userData = res.data
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.search()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.search()
    }
  }
}
</script>

<style>
  .userManage {
    text-align: left;
  }
  .trans {
  background: transparent;
  }
</style>
