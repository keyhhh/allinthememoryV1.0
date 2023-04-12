<template>
  <div class="capsule-item">
    <h1>我是胶囊组件的item</h1>
    <img :src="src">

  </div>
  
</template>

<script>
// import { ref } from "vue";
export default {
  setup(){
    const src = ''

    return{src}
  }

}
</script>

<style>
.capsule-item{
  padding-left: 10%;
}
</style>