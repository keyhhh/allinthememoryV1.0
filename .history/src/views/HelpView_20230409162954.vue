<template>
  <el-row :gutter="20">
    <!-- /**home-left
       span:栅格占据的列数
       */ -->
    <el-col :span="4" id="home-left">
      <div class="grid-content ep-bg-purple" />
    </el-col>

    <!-- /**home-center */ -->
    <el-col :span="15" id="home-center">
      <div class="grid-content ep-bg-purple" />
    </el-col>

    <!-- /**home-rignt */ -->
    <el-col :span="5" id="home-right">
      <div class="grid-content ep-bg-purple" />
    </el-col>
  </el-row>
</template>

<script>
impo
export default {
  name:"HelpView",
  components:{

  },
  setup(){

  }
};
</script>

<style >
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
</style>