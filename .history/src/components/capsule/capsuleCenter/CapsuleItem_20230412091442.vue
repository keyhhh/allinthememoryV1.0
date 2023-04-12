<template>
  <div class="capsule-iten">
    <h1>我是胶囊组件的item</h1>
    <img :src="src">

  </div>
  
</template>

<script>
import { ref } from "vue";
export default {
  setup(){
    const src = ref(@/assets/记忆胶囊蓝.png)
  }

}
</script>

<style>
.capsule-iten{
  padding-left: 10%;
}
</style>