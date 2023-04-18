<template>
  <h1>有我来介绍胶囊的详情</h1>
</template>

<script>
import { reactive } from "vue";
export default {
  setup(){
    //模拟胶囊数据
    const capsule = reactive([
      {capsuleID:1, capsuleTittle:"给自己", capsuleBeginData:"2023-3-3", capsuleSendData:"2023-3-3", surplusData:"0.5"},
      {capsuleID:2, capsuleTittle:"bi'she", capsuleBeginData:"2023-3-3", capsuleSendData:"2023-3-3", surplusData:"0.5"}
      {capsuleID:3, capsuleTittle:"给自己", capsuleBeginData:"2023-3-3", capsuleSendData:"2023-3-3", surplusData:"0.5"}
    ])
  }

}
</script>

<style>

</style>