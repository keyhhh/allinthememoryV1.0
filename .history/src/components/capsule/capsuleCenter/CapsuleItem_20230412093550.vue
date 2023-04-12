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
import { random } from "lodash";
export default {
  setup(){
    const lockOrNot =  //接受后端胶囊是否开启的
    const lockImgSrc = ImgLock //胶囊开启关闭的俩中图片
    const tittle = "致给自己测试"
    const capsuleItemTittle = ref(tittle)
    if(lockOrNot){
      lockImgSrc = ImgUnLock
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