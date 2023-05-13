<template>
  <!-- 胶囊tittle -->
  <h3>胶囊标题:{{ capsule.capsuleTittle }}</h3>
  <!-- 胶囊建立时间 -->
  <h3>胶囊建立时间:{{ capsule.capsuleTittle }}</h3>
  <!-- 胶囊发送时间 -->
  <h3>胶囊发送时间:{{ capsule.capsuleTittle }}</h3>
  <!-- 胶囊剩余解锁时间 -->
  <h3>胶囊剩余时间:{{ capsule.capsuleTittle }}小时</h3>
  <!-- 胶囊发送渠道 -->
  <h3>胶囊发送渠道:{{ capsule.capsuleTittle }}</h3>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    //模拟胶囊数据，这里应该只会显示一组
    const capsule = reactive(
      {
        capsuleID: "",
        capsuleTittle: "给自己",
        capsuleBeginData: "2023-3-3",
        capsuleSendData: "2024-3-3",
        surplusData: "0.5",
        sendType: "邮箱",
      }
    );

    return { capsule };
  },
};
</script>

<style>
</style>