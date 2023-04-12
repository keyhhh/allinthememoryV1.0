<template>
  <div class="capsule-item">
    <span>{{ capsuleItemTittle }}</span><br/>
    <img src="@/assets/记忆胶囊蓝.png">
    <el-divider></el-divider>
  </div>
  
</template>

<script>
import { ref } from "vue";
export default {
  setup(){
    const tittle = "致给自己测试"
    const capsuleItemTittle = ref(tittle)

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