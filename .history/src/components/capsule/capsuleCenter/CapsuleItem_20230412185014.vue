<template>
  <div class="capsule-item" v-for="x in 10   " :key="x" @click="toCapsuleDetail">
    <span>{{ capsuleItemTittle }} </span><br />
      <h1>sasa</h1>
      <img class="capsule-img" :src="openCapsuleSrc" />
      <img class="capsule-status-img" :src="lockImgSrc" />
    <el-divider></el-divider>
  </div>
</template>

<script>
import { ref } from "vue";

import ImgCapsuleClose from "@/assets/记忆胶囊蓝.png";
import ImgCapsuleOpen from "@/assets/胶囊开蓝.png";
import ImgUnLock from "@/assets/开启.png";
import ImgLock from "@/assets/沙漏.png";

export default {
  setup() {
    const lockOrNot = true; //接受后端胶囊是否开启的
    let openCapsuleSrc = ImgCapsuleClose //胶囊关闭图片
    let lockImgSrc = ImgLock; //胶囊关闭状态图片

    const tittle = "致给自己测试";
    const capsuleItemTittle = ref(tittle);

    if (lockOrNot) {
      //判断胶囊状态的，默认式locked
      lockImgSrc = ImgUnLock;
      openCapsuleSrc = ImgCapsuleOpen
    }

    return { capsuleItemTittle,openCapsuleSrc, lockImgSrc };
  },
};
</script>

<style>
.capsule-item {
  /* padding-left: 10%*/
  /* display: table; */
  text-align: center;
}
.capsule-item span {
  margin-top: 5%;
}
.capsule-img {
  width: 20%;
  margin-right: 30%;
}

/* 胶囊状态图片 */
.capsule-status-img {
  width: 5%;
  height: 5%;
  background-color: aliceblue;
  border-radius: 15px;
  margin-bottom:  8%;
}
</style>