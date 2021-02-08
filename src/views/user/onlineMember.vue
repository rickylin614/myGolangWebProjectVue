<template>
  <div class="userManage">
    <!-- <el-button @click="apicheck">測試扭</el-button>  -->
    <el-button class="button" @click="search">搜尋</el-button>
    <div class="block"/>
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
      <el-table-column
        prop="operator"
        label="操作"
        width="80px"
        align="center">
        <template slot-scope="scope">
          <el-tooltip effect="dark" content="踢出在線" placement="right">
            <el-button
              size="small"
              icon="el-icon-delete-solid"
              @click="kick(scope.row.ID)"
            />
          </el-tooltip>
        </template>
      </el-table-column>
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
  created() {
    this.search()
  },
  methods: {
    search() {
      var url = "/user/onlineMemberList"
      var data = {
        url : url,
        data : {
        }
      }
      this.$store.dispatch("Post",data).then(res => {
        this.userData = res.data
      })
    },
    kick(row) {
      var url = "/user/onlineMemberKick"
      var data = {
        url : url,
        data : {
            ID: row
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
  .trans {
    background: transparent;
  }
</style>
