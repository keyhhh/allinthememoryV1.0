<template>
  <!-- 胶囊tittle -->
  <h3>胶囊标题:{{ capsuleShow.title }}</h3>
  <!-- 胶囊建立时间 -->
  <h3>胶囊建立时间:{{ capsuleShow.capsuleTittle }}</h3>
  <!-- 胶囊发送时间 -->
  <h3>胶囊发送时间:{{ capsuleShow.capsuleTittle }}</h3>
  <!-- 胶囊剩余解锁时间 -->
  <h3>胶囊剩余时间:{{ capsuleShow.capsuleTittle }}小时</h3>
  <!-- 胶囊发送渠道 -->
  <h3>胶囊发送渠道:{{ capsuleShow.typeSend }}</h3>
</template>

<script>
import { reactive } from "vue";
import { useRoute } from "vue-router";

import { getCapsuleById } from "@/axios/capsule";
export default {
  setup() {
    const route = useRoute();
    const capsuleId = route.query.capsuleId; //胶囊界面传递的胶囊id
    //模拟胶囊数据，这里应该只会显示一组
    const capsuleShow = reactive({
      capsuleId: "",
      title: "",
      typeSend: "",//0手机。1邮件，前后端需要类型转换
      dateSend: "", 
      dateCreate:"",
      isLocked: "", //不展示
      message: "",
    });

    /**
     * 根据胶囊传来的胶囊id，查询胶囊的全部信息
     */
    let capsule = {
      capsuleId: capsuleId
    }
    getCapsuleById(capsule).then((res) =>{
      if (res.data.code) {
        console.log("详细界面的饭hi之2",res);
        capsuleShow.capsuleId= res.data.data.capsuleId,
        capsuleShow.title= res.data.data.title,
        capsuleShow.typeSend= res.data.data.typeSend === 1 ? "发送邮件" : "发送短信",
        capsuleShow.dateSend= res.data.data.dateSend,
        capsuleShow.dateSend= res.data.data.dateSend,
        capsuleShow.isLocked= res.data.data.isLocked,
        capsuleShow.message= res.data.data.message
        console.log("capsuleShowcapsuleShowcapsuleShow",capsuleShow);
      }else{
        console.log();
      }
    })

    return { capsuleShow };
  },
};
</script>

<style>
</style>