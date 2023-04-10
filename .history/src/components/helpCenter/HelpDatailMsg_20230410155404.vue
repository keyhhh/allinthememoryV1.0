<template>
    <div class="help-detail">
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup(){
    const route = useRoute();
    const helpDetailName = route.params.name

    return{helpDetailName}
  }
}
</script>

<style>

</style>