<template>
  <div class="userManage">
    <!-- <el-button @click="apicheck">測試扭</el-button>  -->
    <el-button class="button" @click="search">搜尋</el-button>
    <el-table
      :data="userData"
      style="width: 100%">
      <el-table-column
        prop="CreatedAt"
        label="日期"
        width="180"/>
      <el-table-column
        prop="Name"
        label="姓名"
        width="180"/>
      <el-table-column
        prop="LoginTime"
        label="登入日期"/>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData : [],
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
    }
  }
}
</script>

<style>
  .userManage {
    text-align: left;
  }
</style>
