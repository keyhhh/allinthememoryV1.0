<template>
  <div class="capsule-item">
    <h1>{{}}/h1>
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