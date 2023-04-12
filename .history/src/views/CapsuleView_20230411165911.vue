<template>
  <el-row :gutter="20">
    <!-- /**capsule-left
       span:栅格占据的列数
       */ -->
    <el-col :span="4" id="help-left">

    </el-col>

    <!-- /**capsule-center */ -->
    <el-col :span="15" id="help-center">

    </el-col>

    <!-- /**capsule-rignt */ -->
    <el-col :span="5" id="capsule-right"  style="padding:0">
      <HomeRight></HomeRight>
    </el-col>
  </el-row>
</template>
  
  <script>
import { useStore } from "vuex";
export default {
  name: "CapsuleView",
  components: {},
  setup() {
    const store = useStore();
    store.dispatch("changeWhichPage", 2);
  },
};
</script>
  
  <style >
</style>