<template>
  <div>
    <p>test1</p>
    <el-button @click="apicheck">測試紐</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    apicheck() {
      var url = "/linkCheck"
      this.$store.dispatch("Get",url)
    }
  }
}
</script>

<style>

</style>
