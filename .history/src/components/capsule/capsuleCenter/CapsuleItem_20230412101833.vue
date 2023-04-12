<template>
  <div class="capsule-item">
    <span>{{ capsuleItemTittle }} </span><br />
      <h1>sasa</h1>
      <img class="capsule-img" :src="openCapsuleSrc" />
      <img class="capsule-status-img" :src="lockImgSrc" />

    <el-divider></el-divider>
  </div>
</template>

<script>
import { ref } from "vue";

import ImgCapsule from "@/assets/开启.png";
import ImgLock from "@/assets/沙漏.png";
import ImgUnLock from "@/assets/开启.png";
import ImgLock from "@/assets/沙漏.png";

export default {
  setup() {
    const lockOrNot = false; //接受后端胶囊是否开启的
    let lockImgSrc = ImgLock; //胶囊开启关闭的俩中图片

    const tittle = "致给自己测试";
    const capsuleItemTittle = ref(tittle);

    if (lockOrNot) {
      //判断胶囊状态的，默认式locked
      lockImgSrc = ImgUnLock;
    }

    return { capsuleItemTittle, lockImgSrc };
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