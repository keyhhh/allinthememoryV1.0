<template>
  <!-- 胶囊tittle -->
  <h1>{{ capsule.capsuleTittle.va }}</h1>
  <!-- 胶囊建立时间 -->
  <h1>{{ capsule.capsuleTittle }}</h1>
  <!-- 胶囊发送时间 -->
  <h1>{{ capsule.capsuleTittle }}</h1>
  <!-- 胶囊剩余解锁时间 -->
  <h1>{{ capsule.capsuleTittle }}</h1>
  <!-- 胶囊发送渠道 -->
  <h1>{{ capsule.capsuleTittle }}</h1>
  <h1>sa</h1>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    //模拟胶囊数据，这里应该只会显示一组
    const capsule = reactive([
      {
        capsuleID: 1,
        capsuleTittle: "给自己",
        capsuleBeginData: "2023-3-3",
        capsuleSendData: "2024-3-3",
        surplusData: "0.5",
        sendType: "邮箱",
      },
      // {capsuleID:2, capsuleTittle:"阶段提示", capsuleBeginData:"2023-3-3", capsuleSendData:"2024-2-3", surplusData:"25"}
      // {capsuleID:3, capsuleTittle:"别忘记", capsuleBeginData:"2023-3-3", capsuleSendData:"2024-1-3", surplusData:"4552"}
    ]);

    return { capsule };
  },
};
</script>

<style>
</style>