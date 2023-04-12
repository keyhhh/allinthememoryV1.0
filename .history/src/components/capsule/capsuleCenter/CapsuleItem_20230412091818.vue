<template>
  <div class="capsule-item">
    <h1>{{ capsuleItemTittle }}</h1>
    <img :src="src">

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
</style>