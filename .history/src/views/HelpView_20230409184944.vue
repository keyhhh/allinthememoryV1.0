<template>
  <el-row :gutter="20">
    <!-- /**help-left
       span:栅格占据的列数
       */ -->
    <el-col :span="4" id="help-left">
      <div class="grid-content ep-bg-purple" />
    </el-col>

    <!-- /**help-center */ -->
    <el-col :span="15" id="help-center">
      <div class="grid-content ep-bg-purple" />
      <HelpCenter></HelpCenter>
    </el-col>
    <!-- /**help-rignt */ -->
    <el-col :span="5" id="help-right">
      <div class="grid-content ep-bg-purple" />
    </el-col>
  </el-row>
</template>

<script>
import  from '../components/'
import HelpCenter from "../components/helpCenter/HelpCenter.vue";
export default {
  name: "HelpView",
  components: {
    HelpCenter,
  },
  setup() {},
};
</script>

<style >
.el-row {
  margin-bottom: 20px;
  /* background-color: aqua; */
}
.el-row:last-child {
  margin-bottom: 0;
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
  background-color: chocolate;
}

/**help-center */
#help-center {
  background-color: darkgreen;
  margin-bottom: 60px;
}

/**help-right */
#help-right {
  border-left: 2px solid #000;
  background-color: darkviolet;
}
</style>