<template>
  <div style="position: absolute; height: 90%; width: 90%">
    <el-carousel :interval="4000" type="card" style="height: 100%; width: 100%">
      <el-carousel-item v-for="item in 2" :key="item">
        <h3 text="2xl" justify="center">dadadada{{ item }}</h3>
        <h1 text="10xl" justify="top">dadadada</h1>
        <img src="@/assets/测试.jpg" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 1px;
  /* padding: 1px; */
}

body {
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
/deep/.el-carousel__container {
  height: 90%;
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>