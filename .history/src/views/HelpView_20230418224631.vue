<template>
  <el-row :gutter="20">
    <!-- /**help-left
       span:栅格占据的列数
       */ -->
    <el-col :span="4" id="help-left">
      <!-- <div class="grid-content ep-bg-purple" /> -->
    </el-col>

    <!-- /**help-center */
        路由显示点击原始求助卡片详细信息
    --> 
    <el-col :span="15" id="help-center">
      <router-view/>
    </el-col>

    <!-- /**help-rignt */ -->
    <el-col :span="5" id="help-right"  style="padding:0">
      <HomeRight></HomeRight>
    </el-col>
  </el-row>
</template>

<script>
import HelpLeft fron ""

import HomeRight from "../components/home/homeRight/HomeRight.vue"
// import HelpCenter from "../components/helpCenter/HelpCenter.vue";

export default {
  name: "HelpView",
  components: {
    // HelpCenter,
    HomeRight
  },
  setup() {

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

/**help-left */
#help-left {
  background-color: #F5F7FA;
}

/**help-center */
#help-center {
  /* background-color: darkgreen; */
  margin-bottom: 60px;
}

/**help-right */
#help-right {
  border-left: 1px solid #000;
  background-color:  #dedfe0;
}
</style>