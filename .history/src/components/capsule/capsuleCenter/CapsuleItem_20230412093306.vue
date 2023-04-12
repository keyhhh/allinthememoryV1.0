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

import ImgUnLock from "@/assets/开启.png"
import ImgLock from "@/assets/沙漏.png"
export default {
  setup(){
    const lockOrNot = true //接受后端胶囊是否开启的是否
    const lockImgSrc = ImgLock
    const tittle = "致给自己测试"
    const capsuleItemTittle = ref(tittle)
    if(lockOrNot){

    }

    return{capsuleItemTittle,lockImgSrc}
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