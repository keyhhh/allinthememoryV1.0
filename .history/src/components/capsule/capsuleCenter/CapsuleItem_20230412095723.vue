<template>
  <div class="capsule-item">
    <span>{{ capsuleItemTittle }}</span
    ><br />
    <div>
      <span>h1</h3>
    </div>
    <div>
      <img class="capsule-img" src="@/assets/记忆胶囊蓝.png" />
      <img class="capsule-status-img" :src="lockImgSrc" />
    </div>

    <el-divider></el-divider>
  </div>
</template>

<script>
import { ref } from "vue";

import ImgUnLock from "@/assets/开启.png";
import ImgLock from "@/assets/沙漏.png";

export default {
  setup() {
    const lockOrNot = true; //接受后端胶囊是否开启的
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
  /* display: table-; */
  text-align: center;
}
.capsule-item span {
  margin-top: 5%;
}
.capsule-img {
  width: 20%;
}

/* 胶囊状态图片 */
.capsule-status-img {
  width: 5%;
  height: 5%;
  background-color: lightskyblue;
  border-radius: 15px;
  margin: 0 10% 8%;
}
</style>