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
      typeSend: "",//0手机。1邮件，前后端需要类型转换
      dateSend: "", 
      dateCreate:"",
      isLocked: "", //不展示
      message: "",
    });

    return {capsuleId}
  }
};
</script>

<style>
</style>