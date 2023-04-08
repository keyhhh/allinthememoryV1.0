<template>
  <el-row :gutter="20">
    <!-- /**home-left
       span:栅格占据的列数
       */ -->
    <el-col :span="4" id="home-left">
      <div class="grid-content ep-bg-purple" />
      <HomeLeft id="home-left-search" />
      <!-- <HomeTimeSelect id="home-left-date" /> -->
    </el-col>

    <!-- /**home-center */ -->
    <el-col :span="15" id="home-center">
      <div class="grid-content ep-bg-purple" />
      <HomeCenter />
    </el-col>

    <!-- /**home-rignt */ -->
    <el-col :span="5" id="home-right">
      <div class="grid-content ep-bg-purple" />
      <HomeRight />
    </el-col>
  </el-row>
</template>

<script >
/**left */
import HomeLeft from "../components/homeLeft/HomeLeft.vue";

/**center */
import HomeCenter from "../components/homeCenter/HomeCenter.vue";

/**right */
import HomeRight from "../components/homeRight/HomeRight.vue";

// import { defineComponent, ref } from "vue";
export default {
  name: "HomeView",
  components: {
    HomeLeft,
    HomeCenter,
    HomeRight,
  },
  setup() {},
};
</script>

<style>

.el-row {
  margin-bottom: 20px;
  background-color: aqua;
}
.el-row:last-child {
  margin-bottom: 0;
  background-color: blue;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

/**home-left */
#home-left {
  background-color: chocolate;
}

/**home-center */
#home-center {
  background-color: darkgreen;
}

/**home-right */
#home-right {
  border-left: 2px solid #000;
  background-color: darkviolet;
}
</style>
