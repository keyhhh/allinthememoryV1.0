<template>
  <!-- <div style="position: absolute; height: 98%; width: 99%"> -->

  <el-carousel :interval="4000" type="card" style="height: 100%; width: 100%">
    <el-carousel-item
      v-for="item in 12"
      :key="item"
      @click="test1($event, item)"
    >
      <h2 class="tittle">
        中国地震台网正式测定：03月23日04时29分在台湾台东县海域（北纬23.39度，东经121.52度）发生5.7级地震，震源深度20千米。
      </h2>

      <p class="tag">
        <el-tag size="large" style="font-size: 13px; font-weight: bold"
          >{{ item }}标签内容</el-tag
        >
      </p>

      <p style="text-align: center">
        <img style="width: 85%" src="@/assets/测试.jpg" />
      </p>

      <span class="left-span">出现次数：6</span>
      <span class="right-span">发生时间：2023-03-23</span>
      <br />
      <p class="tittle">
        水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水...
      </p>
    </el-carousel-item>
  </el-carousel>
  <!-- </div> -->
</template>

<script>
export default {
  setup() {
    const test1 = (event, value) => {
      console.log("点击事件", value, event);
    };
    return { test1 };
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
::v-deep .el-carousel__container {
  height: 80%;
  width: 100%;
  margin-top: 5%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* 新闻标题 */
.tittle {
  text-indent: 2em;
  text-align: 80px;
  padding: 3%;
}
/* 新闻标签 */
.tag {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
/* 提及数量和时间样式 */
.left-span,
.right-span {
  font-size: 15px;
  margin-top: 2%;
}
.left-span {
  float: left;
  margin-left: 7%;
}
.right-span {
  float: right;
  margin-right: 7%;
}
</style>