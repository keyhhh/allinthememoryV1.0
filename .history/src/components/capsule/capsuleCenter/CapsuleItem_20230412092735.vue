<template>
  <div class="capsule-item">
    <span>{{ capsuleItemTittle }}</span><br/>
    <img :src="lockImgSrc">
    <img src="@/assets/记忆胶囊蓝.png">
    <el-divider></el-divider>
  </div>
  
</template>

<script>
import { ref } from "vue";
export default {
  setup(){
    const lockOrNot = 
    const tittle = "致给自己测试"
    const capsuleItemTittle = ref(tittle)
    if()

    return{capsuleItemTittle}
  }

}
</script>

<style>
.capsule-item{
  padding-left: 10%;
}
.capsule-item span{
  margin-top: 5%;
}
</style>