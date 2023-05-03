<template>
<vue-baberrage
	:barrageList="barrageList"
	:boxHeight="boxHeight"
	:isShow="barrageIsShow"
	:lanesCount="lanesCount"
	:loop="barrageLoop"
	:messageHeight="messageHeight"
	:throttleGap="throttleGap">
</vue-baberrage>

</template>


<script>
import {MESSAGE_TYPE} from 'vue-baberrage';

export default {
  name: "Message",
  components: { Nav },
  mounted() {
    this.listMessage();
  },
  data() {
    return {
      show: false,
      messageNickname: "",
      messageContent: "",
      barrageList: [],
      avatar: "",
      userVo: null,
    };
  },
  methods: {
    addToList() {
      const _this = this;
      if (this.messageNickname.trim() == "") {
        this.$message.error("昵称不能为空");
        return false;
      }
      if (this.messageContent.trim() == "") {
        this.$message.error("留言不能为空");
        return false;
      }
      //如果本地有用户数据则使用本地用户头像
      //否则随机赋予头像(本地存放了30个头像)
      if (this.userVo != null) {
        this.avatar = this.userVo.avatar;
      } else {
        this.avatar =
          "/images/commentAvatar/" +
          "avatar" +
          Math.floor(Math.random() * 30 + 1) +
          ".png";
      }

      var message = {
        avatar: this.avatar,
        nickname: this.messageNickname,
        messageContent: this.messageContent,
        time: Math.floor(Math.random() * (10 - 7)) + 7,
        userVo: this.userVo,
      };
      this.barrageList.push(message);
      this.messageContent = "";

      this.$axios.post("http://localhost:8181/tbMessage", message);
    },
    listMessage() {
      this.$axios.get("http://localhost:8181/tbMessage").then((res) => {
        this.barrageList = res.data.data;
      });
    },
  },
  created() {
    this.userVo = JSON.parse(localStorage.getItem("userInfo"));
    //将localStorage中的用户名取出
    this.messageNickname = this.userVo.username;
  },
};
</script>

<style scoped>
.message-banner {
  position: absolute;

  left: 0;
  right: 0;
  height: 100vh;
  background-color: aqua;

  animation: header-effect 1s;
}
.message-title {
  color: #eee;
  animation: title-scale 1s;
}
.message-container {
  position: absolute;
  width: 360px;
  top: 35%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 5;
  margin: 0 auto;
  color: #fff;
}
.message-input-wrapper {
  display: flex;
  justify-content: center;
  height: 2.5rem;
  margin-top: 2rem;
}
.message-input-wrapper input {
  outline: none;
  width: 70%;
  border-radius: 20px;
  height: 100%;
  padding: 0 1.25rem;
  color: #eee;
  border: #fff 1px solid;
}
.message-input-wrapper input::-webkit-input-placeholder {
  color: #eeee;
}
.message-input-wrapper button {
  outline: none;
  border-radius: 20px;
  height: 100%;
  padding: 0 1.25rem;
  border: #fff 1px solid;
}
.barrage-container {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100% -50px);
  width: 100%;
}
.barrage-items {
  background: rgb(0, 0, 0, 0.7);
  border-radius: 100px;
  color: #fff;
  padding: 5px 10px 5px 5px;
  align-items: center;
  display: flex;
}
.ml-3 {
  margin-left: 12px !important;
}

.ml-2 {
  margin-left: 8px !important;
}
</style>