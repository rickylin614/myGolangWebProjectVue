<template>
  <div class="userManage">
    <!-- <el-button @click="apicheck">測試扭</el-button>  -->
    <el-button class="button" @click="search">搜尋</el-button>
    <div class="block">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[20, 50, 200, 500]"
        :page-size="pageSize"
        :total="totalCount"
        layout="total, sizes, prev, pager, next, jumper"
        class="mt5 mb5"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
    <el-table
      :data="loginRecord"
      class="trans"
      style="width: 100%;"
      border="">
      <el-table-column 
        type="index" 
        label="序號" 
        align="center"
        width="80"/>
      <el-table-column 
        label="用戶" 
        align="center"
        prop="Name"
        width="150px"/>
      <el-table-column 
        label="登入時間" 
        align="center"
        prop="LoginTime"/>
      <el-table-column 
        label="IP" 
        align="center"
        prop="Ip"
        width="150px"/>
      <el-table-column 
        label="動作" 
        align="center"
        prop="LoginState"
        width="150px"/>
  </el-table></div>
</template>

<script>
export default {
  data() {
    return {
      loginRecord : [],
      currentPage : 0,
      pageSize : 20,
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
      var url = "/user/loginRecord"
      var data = {
        url : url,
        data : {
          "pageNo" : this.currentPage,
          "pageSize" : this.pageSize
        }
      }
      this.$store.dispatch("Post",data).then(res => {
        this.loginRecord = res.data
        this.totalCount = res.dataCount
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
