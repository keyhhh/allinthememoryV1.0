<template>
  <el-row :gutter="20">
    <!-- /**home-left
       span:栅格占据的列数
       */ -->
    <el-col :span="4" id="home-left">
      <div class="grid-content ep-bg-purple" />
      <HomeLeft id="home-left-search" />
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

<script>

</script>

<style >

</style>