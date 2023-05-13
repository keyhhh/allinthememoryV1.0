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

    //模拟胶囊数据，这里应该只会显示一组
    const capsuleShow = reactive({
      capsuleId: "",
      title: "",
      message: "",
    });

    return {capsuleId}
  }
};
</script>

<style>
</style>