<template>
  <div class="container middle">
    <div class="header">
      <h1>登入頁面</h1>
    </div>
    <div class="main">
      帳號: <el-input v-model="account" placeholder="請輸入帳號" class="w230 mt5"/><br>
      密碼: <el-input v-model="password" type="password" class="w230 mt5" /><br>
      <el-button class="mt5" @click="login">登入</el-button><br>
      <el-button class="mt5" @click="abc">測試用按鈕</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this.account)
      console.log(this.password)
      this.$message({
        type: 'info',
        message: '帳號' + this.account + ' 密碼:' + this.password + '送出'
      })
      var postData = {
        'url': '/go/login',
        'data': {
          'name': this.account,
          'password': this.password
        }
      }
      this.$store.dispatch('Post', postData)
    },
    abc () {
      this.$message({
        type: 'info',
        message: '帳號' + this.account + ' 密碼:' + this.password + '送出'
      })
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
