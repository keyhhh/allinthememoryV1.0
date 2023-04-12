<template>
  <el-row :gutter="20">
    <!-- /**help-left
       span:栅格占据的列数
       */ -->
    <el-col :span="4" id="help-left">
      <!-- <div class="grid-content ep-bg-purple" /> -->
    </el-col>

    <!-- /**help-center */ -->
    <el-col :span="15" id="help-center">
      <!-- <div class="grid-content ep-bg-purple" /> -->
      <!-- <HelpCenter></HelpCenter> -->
      <router-view/>
    </el-col>
    <!-- /**help-rignt */ -->
    <el-col :span="5" id="help-right"  style="padding:0">
      <!-- <div class="grid-content ep-bg-purple" /> -->
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