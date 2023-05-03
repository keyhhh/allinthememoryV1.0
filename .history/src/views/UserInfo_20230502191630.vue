<template>
    <el-row :gutter="20">
      <!-- /**public-left     span:栅格占据的列数 */ -->
      <el-col :span="4" id="public-left">
  
       </el-col>
  
      <!-- /**public-center */ -->
      <el-col :span="15" id="public-center">
        
      </el-col>
  
      <!-- /**public-rignt */ -->
      <el-col :span="5" id="public-right" style="padding: 0">
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

</style>