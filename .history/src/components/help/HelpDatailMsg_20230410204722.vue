<template>
  <div class="help-detail">
    <div class="help-detail-header"></div>
    <div class="help-detail-center">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="help-detail-header">
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
    <h1>This is an 求助信息的详细界面,要详细展示的是{{ helpDetailName }}</h1>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const helpDetailName = route.query.helpDetailMsgId;

    return { helpDetailName, router };
  },
};
</script>

<style>
/* 走马灯图片的上边的文字的css */
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>