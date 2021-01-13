<template>
  <div class="container">
    <el-container class="mainZone">
      <el-aside width="200px" style="height:100%">
        <el-menu
          :router="true"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"/>
              <span slot="title">標題一</span>
            </template>
            <el-menu-item index="1-1" route="/userManager">選項一</el-menu-item>
            <el-menu-item index="1-2" route="/userManager2">選項二</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"/>
              <span slot="title">標題二</span>
            </template>
            <el-menu-item index="2-1" route="/index">選項一</el-menu-item>
            <el-menu-item index="2-2" route="/index">選項二</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="mainArea">
        <div v-if="getPageName !== '首頁'">
          <el-page-header :content="getPageName" @back="goBack"/>
          <router-view/>
        </div>
        <div v-if="getPageName === '首頁'">
          <h1>歡迎來到訂便當系統首頁</h1>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageName:''
    }
  },
  computed:{
    getPageName() {
      return this.$route.name
    }
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    handleOpen () {

    },
    handleClose () {
      // do nothing
    },
    goBack() {
      this.$router.push("/")
    },
    showWindowInfo () {
      var iw = window.innerWidth
      var ow = window.outerWidth
      var ih = window.innerHeight
      var oh = window.outerHeight
      var str = iw + '-' + ow + '-' + ih + '-' + oh
      this.$message({
        type: 'info',
        message: str
      })
    }
  }
}
</script>

<style>
  .mainZone {
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 198px;
    min-height: 100% ;
  }
</style>
