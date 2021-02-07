<template>
  <div class="">
    <el-tabs v-model="nowRoom" type="card" class="mt10" @tab-click="handleClick">
      <el-tab-pane :disabled="nowRoom == 'room1'" label="一號房" name="room1"/>
      <el-tab-pane :disabled="nowRoom == 'room2'" label="二號房" name="room2"/>
    </el-tabs>
    <div class="msgFrame">
      <div style="height: 450px; overflow: auto">
        <div v-for="(item, index) in msgArr" :key="index">
          <div :class="checkIsMe(item.owner)">
            <div
              :style="autoWidth(item.owner, item.msg)"
              class="myDialogText mt5"
            >
              {{ item.owner }} : <br>
              {{ item.msg }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt5" style="display: flex">
        <el-input v-model="newMsg" class="m5" type="text" />
        <el-button class="m5" @click="sendMsg">發送</el-button>
        <el-button class="m5" @click="connect">重新連接</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgArr: [],
      socket: null,
      newMsg: "",
      nowRoom: "room1",
    };
  },
  created() {
    this.$store.dispatch("PingCheck")
    this.connect()
  },
  mounted() {},
  methods: {
    connect() {
      if (socket && socket.readyState != 3) {
        socket.close;
      }
      this.initMsgArr()
      var url = "ws://localhost:8081/go/_ajax/chat?chat=" + this.nowRoom;
      var socket = new WebSocket(url);
      socket.onmessage = this.receiveMsg;
      this.socket = socket;
    },
    receiveMsg(e) {
      e.data.text().then((text) => {
        var jsonStr = JSON.parse(text);
        var msg = {
          owner: jsonStr.n ? jsonStr.n : "unknown",
          msg: jsonStr.m ? jsonStr.m : "unknown",
        };
        this.msgArr.push(msg);
      });
    },
    sendMsg() {
      if (this.socket && this.socket.readyState == 1) {
        this.socket.send(this.newMsg);
      } else {
        this.$message({
          type: "warning",
          message: "連接錯誤",
        });
      }
    },
    initMsgArr() {
        this.msgArr = []
        this.msgArr.push({ owner: "系統", msg: "歡迎來到聊天室" });
    },
    handleClick() {
        this.connect()
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