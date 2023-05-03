<template>
  <vue-baberrage
    :barrageList="barrageList"
    :boxHeight="boxHeight"
    :isShow="barrageIsShow"
    :lanesCount="lanesCount"
    :loop="barrageLoop"
    :messageHeight="messageHeight"
    :throttleGap="throttleGap"
  >
  </vue-baberrage>
</template>


<script>
import { MESSAGE_TYPE } from "vue-baberrage";

export default {
  data() {
    return {
      barrageList: [],
      barrageIsShow: true, //是否展示弹幕
      barrageLoop: true, //是否循环播放
      boxHeight: 170, //高度
      messageHeight: 25, //消息高度
      lanesCount: 4, //泳道数量
      throttleGap: 5000, //消息间隔
    };
  },
  mounted() {
    this.addBarrageList();
  },
  methods: {
    addToList() {
      let list = [
        {
          id: 1,
          avatar: "https://api.ddkjt.com/api/img_1.php",
          msg: "第一条弹幕",
          time: 3,
        },
        {
          id: 2,
          avatar: "https://api.ddkjt.com/api/img_1.php",
          msg: "第二条弹幕",
          time: 4,
        },
        {
          id: 3,
          avatar: "https://api.ddkjt.com/api/img_1.php",
          msg: "第三条弹幕",
          time: 3,
        },
        {
          id: 4,
          avatar: "https://api.ddkjt.com/api/img_1.php",
          msg: "第四条弹幕",
          time: 4,
        },
        {
          id: 5,
          avatar: "https://api.ddkjt.com/api/img_1.php",
          msg: "第五条弹幕",
          time: 5,
        },
        {
          id: 6,
          avatar: "https://api.ddkjt.com/api/img_1.php",
          msg: "第六条弹幕",
          time: 6,
        },
        {
          id: 7,
          avatar: "https://api.ddkjt.com/api/img_1.php",
          msg: "第七条弹幕",
          time: 7,
        },
        {
          id: 8,
          avatar: "https://api.ddkjt.com/api/img_1.php",
          msg: "第八条弹幕",
          time: 8,
        },
        {
          id: 9,
          avatar: "https://api.ddkjt.com/api/img_1.php",
          msg: "第九条弹幕",
          time: 9,
        },
        {
          id: 10,
          avatar: "https://api.ddkjt.com/api/img_1.php",
          msg: "第十条弹幕",
          time: 10,
        },
      ];
      list.forEach((v) => {
        this.barrageList.push({
          id: v.id, //弹幕ID
          avatar: v.avatar, //头像
          msg: v.msg, //弹幕消息
          time: v.time, //屏幕展示时间
          type: MESSAGE_TYPE.NORMAL, //类型
        });
      });
    },
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
  positi
</style>