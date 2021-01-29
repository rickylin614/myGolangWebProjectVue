<template>
  <div class="" >
    <h1>chatroom</h1>
    <div style="width:500px;border-style:solid;border-width:1px;padding:15px;">
      <div v-for="(item , index) in msg" :key="index">
        <div :class="checkIsMe(item.owner)" >
          <div :style="autoWidth(item.owner,item.msg)" class="myDialogText">
            {{ item.owner }} : <br>
            {{ item.msg }}
          </div>
        </div>
      </div>
      <div class="mt5" style="display:flex;">
        <el-input v-model="newMsg" class="m5" type="text"/>
        <el-button class="m5" @click="test">發送</el-button>
      </div>
      <el-button class="m5" @click="connect">連接</el-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg : [
                {owner:'other',msg:'今天'},
                {owner:'me',msg:'依然是'},
                {owner:'other',msg:'心情憂鬱的'},
                {owner:'me',msg:'一天'},
            ],
            target : {
                ip:'localhost',
                port:'8000',
                message :'testmeesage',
            },
            socket : null,
            newMsg : '',
        }
    },
    mounted() {
        
    },
    methods: {
        connect() {
            
        },
        test() {
            console.log('test')
            this.$socket.emit(this.msg)
        },
        checkIsMe(owner) {
            if (owner && owner == 'me') {
                return 'myRight'
            } else {
                return 'myLeft'
            }
        },
        autoWidth(owner , msg) {
            var ownerWid = owner.length * 18
            var msgWid = msg.length * 18
            var width = ownerWid > msgWid ? ownerWid : msgWid
            console.log("width:" + width + "px")
            return "width:" + width + "px"
            // return ""
        }
    }
}
</script>

<style scoped>
    .myDialogText {
        border-style:solid;
        border-radius: 12px;
        padding: 5px;
    }
    .myLeft {
        text-align: left;
        display: flex;
        justify-content: flex-start;
    }
    .myRight {
        text-align: left;
        display: flex;
        justify-content: flex-end;
    }
</style>