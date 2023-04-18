<template>
  <el-row :gutter="20">
    <!-- /**capsule-left     span:栅格占据的列数 */ 
    路由显示点击胶囊后信息
    -->
    <el-col :span="4" id="capsule-left">
      <router-view id="capsuleLeft" name="capsuleLeft"></router-view>
     </el-col>

    <!-- /**capsule-center */ -->
    <el-col :span="15" id="capsule-center">
      <router-view id="capsuleCenter" name="capsuleCenter"></router-view>
    </el-col>

    <!-- /**capsule-rignt */ -->
    <el-col :span="5" id="capsule-right" style="padding: 0">
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