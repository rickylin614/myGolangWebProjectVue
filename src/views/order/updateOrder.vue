<template>
  <div class="container middle">
    <div class="header">
      <h1>修改餐廳</h1>
    </div>
    <div class="main">
      餐廳名稱: <el-input v-model="saveData.name" type="text" placeholder="請輸入餐廳名稱" class="w230 mt5"/><br>
      電話號碼: <el-input v-model="saveData.phoneNo" type="number" placeholder="電話號碼" class="w230 mt5" /><br>
      地區    : <el-input v-model="saveData.region" type="text" placeholder="地區" class="w230 mt5" /><br>
      <el-button class="mt5" @click="save(saveData.id)">提交保存</el-button>
      <el-button class="mt5" @click="back">回查詢畫面</el-button><br>
      <!-- <el-button class="mt5" @click="abc">測試用按鈕</el-button> -->
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      saveData:{
        id : null,
        name: null,
        phoneNo: null,
        region: null
      }
     
    }
  },
  created() {
    
    console.log(this.$route.query.id)
    this.get(this.$route.query.id)
  },
  methods: {
     get(id) {
      var url = "/store/queryStoreById"
      var data = {
        url : url,
        data : {
          "Id" :  Number(id)
        }
      }
      console.log("haha2")
      console.log(data)
      console.log("haha2")
      this.$store.dispatch("Post",data).then(res => {
        this.saveData.id = res.data.ID,
        this.saveData.name = res.data.Name,
         this.saveData.phoneNo= res.data.PhoneNo,
         this.saveData.region = res.data.Region
      })
    },
    save (id) {
      console.log(id)
      var postData = {
        'url': '/store/update',
        data: {
          "Id":Number(id),
          "Name": this.saveData.name,
          "PhoneNo": this.saveData.phoneNo,
          "Region": this.saveData.region,
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
