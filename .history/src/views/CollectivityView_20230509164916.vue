<template>
  <el-row :gutter="20">

    <el-col :span="4" id="capsule-left">
      <router-view id="capsuleLeft" name="capsuleLeft"></router-view>
     </el-col>

    <el-col :span="15" id="coll-center">
      <router-view/>
    </el-col>

    <el-col :span="5" id="coll-right" style="padding: 0">
      <HomeRight />
    </el-col>
  </el-row>
</template>

<script>

import HomeRight from "../components/home/homeRight/HomeRight.vue";
export default {
  components: {  HomeRight },
  setup() {},
};
</script>

<style scoped>

.el-row {
  margin-bottom: 20px;
  height: 900px;
}
.el-row:last-child {
  margin-bottom: -10px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

/* 这里的height可以控制界面中间的高度 766px页面就不会滑动*/
#coll-center {
  width: 100%;
  height: 100%;
}
</style>