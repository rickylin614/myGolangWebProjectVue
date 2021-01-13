<template>
  <div class="container">
    <el-container class="mainZone">
      <el-aside width="200px" style="height:100%">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"/>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="mainArea">
        <p>test</p>
        <el-button class="mt5" @click="abc">getHeight</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: {

      }
    }
  },
  methods: {
    handleOpen () {
      // do nothing
    },
    handleClose () {
      // do nothing
    },
    abc () {
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
