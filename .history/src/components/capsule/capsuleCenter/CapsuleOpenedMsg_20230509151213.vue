<template>
  <div>
    <h1>tittle</h1>
    <p>
      {{ capsuleId }}
    </p>
  </div>
</template>

<script>
import
import { useRoute } from "vue-router";

import { getCapsuleById } from "@/axios/capsule";
export default {
  setup(){
    const route = useRoute();
    const capsuleId = route.query.capsuleId; //胶囊界面传递的胶囊id

    //模拟胶囊数据，这里应该只会显示一组
    const capsuleShow = reactive({
      capsuleId: "",
      title: "",
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
        capsuleShow.message= res.data.data.message
        console.log("capsuleShowcapsuleShowcapsuleShow",capsuleShow);
      }else{
        console.log();
      }
    })

    return {capsuleId}
  }
};
</script>

<style>
</style>