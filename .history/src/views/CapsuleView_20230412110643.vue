<template>
  <el-row :gutter="20">
    <!-- /**capsule-left     span:栅格占据的列数 */ 
    路由显示点击胶囊后信息
    -->
    <el-col :span="4" id="capsule-left">
      <router-view id=""/>
     </el-col>

    <!-- /**capsule-center */ -->
    <el-col :span="15" id="capsule-center">
      <router-view/>
    </el-col>

    <!-- /**capsule-rignt */ -->
    <el-col :span="5" id="capsule-right" style="padding: 0">
      <HomeRight></HomeRight>
    </el-col>
  </el-row>
</template>
  
  <script>
import { useStore } from "vuex";

import HomeRight from "../components/home/homeRight/HomeRight.vue";
export default {
  name: "CapsuleView",
  components: {  HomeRight },
  setup() {
    const store = useStore();
    store.dispatch("changeWhichPage", 2);
  },
};
</script>
  
<style >
.el-row {
  margin-bottom: 20px;
  /* background-color: aqua; */
}
.el-row:last-child {
  margin-bottom: -10px;
  /* background-color: blue; */
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

/**capsule-left */
#capsule-left {
  background-color: #f5f7fa;
}

/**capsule-center */
#capsule-center {
  /* background-color: darkgreen; */
  margin-bottom: 60px;
}

/**capsule-right */
#capsule-right {
  border-left: 1px solid #000;
  background-color: #dedfe0;
}
</style>