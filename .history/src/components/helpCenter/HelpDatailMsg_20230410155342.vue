<template>
    <div class="help-detail">
    <h1>This is an 求助信息的详细界面,yan'xiang'xi'zhan'shi'de</h1>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";

export default {
  setup(){
    const route = useRoute();
    const router = useRouter();
    const helpDetailName = route.params.name

    return{helpDetailName}
  }
}
</script>

<style>

</style>