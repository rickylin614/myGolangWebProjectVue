<template>
  <div class="">
    <el-tabs v-model="nowRoom" type="card" class="mt10" @tab-click="handleClick">
      <el-tab-pane :disabled="nowRoom == 'room1'" label="一號房" name="room1"/>
      <el-tab-pane :disabled="nowRoom == 'room2'" label="二號房" name="room2"/>
      <el-tab-pane :disabled="nowRoom == 'room3'" label="三號房" name="room3"/>
    </el-tabs>
    <div class="msgFrame">
      <div style="height: 450px; overflow: auto">
        <div v-for="(item, index) in msgArr" :key="index">
          <div :class="checkIsMe(item.owner)">
            <div :style="autoWidth(item.owner, item.msg)" class="myDialogText mt5" >
              {{ item.owner }} : <br>
              {{ item.msg }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt5" style="display: flex">
        <el-input v-model="newMsg" class="m5" type="text" />
        <el-button class="m5" @click="sendMsg">發送</el-button>
        <!-- <el-button class="m5" @click="connect">重新連接</el-button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgArr: [],
      msgMap: {},
      socketMap: {},
      newMsg: "",
      nowRoom: "room1",
    };
  },
  computed: {
    getMsg() {
      return this.msgMap[this.nowRoom]
    }
  },
  created() {
    this.$store.dispatch("PingCheck")
    this.connect()
    this.initMsgArr()
    this.msgArr = this.msgMap[this.nowRoom]
  },
  mounted() {},
  methods: {
    connect() {
      var socket = this.socketMap[this.nowRoom]
      if (socket && socket.readyState != 3) {
        return
      }
      var url = "ws://localhost:8081/go/_ajax/chat?chat=" + this.nowRoom;
      socket = new WebSocket(url);
      socket.onmessage = this.receiveMsg;
      socket.onclose = this.reconnect
      this.socketMap[this.nowRoom] = socket
    },
    reconnect(e) {
      var _this = this
      var intervalId = setInterval(function(){
        console.log('try reconnect',e)
        var url = e.currentTarget.url
        var socket = new WebSocket(url);
        setTimeout(() => {
          console.log(socket)
          if (socket && (socket.readyState == 1)) {
            console.log('reconnected!')
            socket.onmessage = _this.receiveMsg
            socket.onclose = _this.reconnect
            socket.send(localStorage.getItem("user") + "已重新連接")
            _this.socketMap[_this.nowRoom] = socket
            clearInterval(intervalId)
          }
        },3000)
      },5000)
    },
    receiveMsg(e) {
      e.data.text().then((text) => {
        var jsonStr = JSON.parse(text);
        var msg = {
          owner: jsonStr.n ? jsonStr.n : "",
          msg: jsonStr.m ? jsonStr.m : "",
        };
        var room = jsonStr.r ? jsonStr.r : "room1"
        this.msgMap[room].push(msg);
        if (this.nowRoom === room) {
          this.msgArr = this.msgMap[room]
        }
      });
    },
    sendMsg() {
      var socket = this.socketMap[this.nowRoom]
      if (socket && socket.readyState == 1) {
        socket.send(this.newMsg);
        this.newMsg = ""
      } else {
        this.$message({
          type: "warning",
          message: "連接錯誤",
        });
      }
    },
    initMsgArr() {
        this.msgMap[this.nowRoom] = []
        this.msgMap[this.nowRoom].push({ owner: "系統", msg: "歡迎來到聊天室" });
    },
    handleClick() {
      if (this.msgMap[this.nowRoom] == undefined) {
        this.initMsgArr()
      }
      this.connect()
      this.msgArr = this.msgMap[this.nowRoom]
    },
    checkIsMe(owner) {
      if (owner && owner == localStorage.getItem("user")) {
        return "myRight";
      } else if (owner && owner == "系統") {
        return "myMid";
      } else {
        return "myLeft";
      }
    },
    autoWidth(owner, msg) {
      var ownerWid = owner ? owner.length * 18 : 0;
      var msgWid = msg ? msg.length * 18 : 0;
      var width = ownerWid > msgWid ? ownerWid : msgWid;
      return "width:" + width + "px";
    },
  },
};
</script>

<style scoped>
.msgFrame {
    width: 500px;
    border-style: solid;
    border-width: 1px;
    padding: 15px;
}
.myDialogText {
  border-style: solid;
  border-radius: 12px;
  padding: 5px;
}
.myLeft {
  text-align: left;
  display: flex;
  justify-content: flex-start;
}
.myMid {
  text-align: center;
  display: flex;
  justify-content: center;
}
.myRight {
  text-align: left;
  display: flex;
  justify-content: flex-end;
}
</style>