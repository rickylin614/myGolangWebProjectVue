<template>
  <div class="container middle">
    <div class="header">
      <h1>新增餐廳</h1>
    </div>
    <div class="main">
      餐廳名稱: <el-input v-model="name" type="text" placeholder="請輸入餐廳名稱" class="w230 mt5"/><br>
      電話號碼: <el-input v-model="phoneNo" type="number" placeholder="電話號碼" class="w230 mt5" /><br>
      地區    : <el-input v-model="region" type="text" placeholder="地區" class="w230 mt5" /><br>
      <el-button class="mt5" @click="save">提交保存</el-button>
      <el-button class="mt5" @click="back">回查詢畫面</el-button><br>
      <!-- <el-button class="mt5" @click="abc">測試用按鈕</el-button> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      phoneNo: null,
      region: '',
    }
  },
  methods: {
    save () {
      var postData = {
        'url': '/store/insert',
        'data': {
          'Name': this.name,
          'PhoneNo': this.phoneNo,
          'Region': this.region,
        }
      }
      this.$store.dispatch('Post', postData).then(res => {
        this.$message({
          type: 'info',
          message: res.msg
        })
      })
    },
    back() {
      this.$router.push("/orderManage")
    }
  }
}
</script>

<style>
    .middle {
        width: 100%;
        text-align: center;
    }
    .main {
        /* width: 200px; */
        /* text-align: center; */
        align-content: center;
    }
    .mt5 {
        margin-top: 5px;
    }
    .w230 {
        width: 230px;
    }
</style>
