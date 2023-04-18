<template>
  <el-row :gutter="20">
    <!-- /**public-left     span:栅格占据的列数 */ 
    路由显示点击胶囊后信息
    -->
    <el-col :span="4" id="public-left">
      <router-view id="publicLeft" name="publicLeft"></router-view>
     </el-col>

    <!-- /**public-center */ -->
    <el-col :span="15" id="public-center">
      <router-view id="publicCenter" name="publicCenter"></router-view>
    </el-col>

    <!-- /**public-rignt */ -->
    <el-col :span="5" id="public-right" style="padding: 0">
      <HomeRight></HomeRight>
    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style>

</style>