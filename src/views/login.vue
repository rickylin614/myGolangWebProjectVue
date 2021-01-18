<template>
  <div class="container middle">
    <div class="header">
      <h1>登入頁面</h1>
    </div>
    <div class="main">
      帳號: <el-input v-model="account" placeholder="請輸入帳號" class="w230 mt5"/><br>
      密碼: <el-input v-model="password" type="password" class="w230 mt5" /><br>
      <el-button type="primary" class="mt5" @click="login">登入</el-button>
      <router-link to="/register" class="register">
        <el-button type="info" class="mt5">註冊新帳號</el-button>
      </router-link>
      <!-- <el-button class="mt5" @click="abc">測試用按鈕</el-button> -->
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
      var postData = {
        'url': '/user/login',
        'data': {
          'name': this.account,
          'password': this.password
        }
      }
      this.$store.dispatch('Post', postData).then(() => {
        localStorage.setItem("user",this.account)
        this.$router.push("/")
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
    .register {
      position: fixed;
      left: 10px;
      bottom: 20px;
    }
    .mt5 {
        margin-top: 5px;
    }
    .w230 {
        width: 230px;
    }
</style>
