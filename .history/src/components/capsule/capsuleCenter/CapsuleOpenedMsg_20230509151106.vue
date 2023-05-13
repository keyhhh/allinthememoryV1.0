<template>
  <div>
    <h1>tittle</h1>
    <p>
      {{ capsuleId }}
    </p>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup(){
    const route = useRoute();
    const capsuleId = route.query.capsuleId; //胶囊界面传递的胶囊id


    return {capsuleId}
  }
};
</script>

<style>
</style>