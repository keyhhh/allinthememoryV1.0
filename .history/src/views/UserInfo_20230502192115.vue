<template>
    <el-row :gutter="20">
      <!-- /**userinfo-left     span:栅格占据的列数 */ -->
      <el-col :span="4" id="userinfo-left">
  
       </el-col>
  
      <!-- /**userinfo-center */ -->
      <el-col :span="15" id="userinfo-center">
        <h1>信息界面</h1>
      </el-col>
  
      <!-- /**userinfo-rignt */ -->
      <el-col :span="5" id="userinfo-right" style="padding: 0">
        <HomeRight></HomeRight>
      </el-col>
    </el-row>
  </template>

<script>
import HomeRight from "../components/home/homeRight/HomeRight.vue";
export default {
    name:"UserInfo",
    components:{HomeRight},
}
</script>

<style>
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

/**userinfo-left */
#userinfo-left {
  background-color: #f5f7fa;
}

/**userinfo-center */
#userinfo-center {
  background-color: darkgreen;
  margin-bottom: 60px;
}

/**userinfo-right */
#userinfo-right {
  border-left: 1px solid #000;
  background-color: #dedfe0;
}
</style>