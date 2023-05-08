<template>
  <div class="help-detail-div">
    <!-- <div class="help-detail-header"></div> -->
    <h1>{{ helpShow[0].title }}</h1>
    <div class="help-detail-center">
      <el-carousel :interval="5000" arrow="always" v-if="helpShow[0].image">
        <el-carousel-item
          v-for="(index, id) in helpShow[0].image.length"
          :key="index"
          style="text-align: center; background-color: white"
        >
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <img
            :src="require('../../../assets/ALMIMG/' + helpShow[0].image[id])"
            style="height: 100%; margin-right: 5%"
          />
        </el-carousel-item>
      </el-carousel>

      <h1>{{ helpShow[0].message }}</h1>
    </div>

    <div class="help-detail-footer" style="float: buttom">
      <el-card class="discuss-card">
        <template #header>
          <div class="card-header">
            <span style="font-size: 20px; b">评论信息</span>
          </div>
        </template>
        <div
          v-for="(index, id) in helpDiscussShow.length"
          :key="index"
          class="text item"
        >
          {{ helpDiscussShow[id].message }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { reactive } from "vue";

import { getHelpByID, getDiscuss } from "@/axios/help";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    let helpShow = reactive([]);
    let helpDiscussShow = reactive([]);

    let help = {
      helpId: route.query.helpMsgId, //求助信息的id
    };
    getHelpByID(help).then((res) => {
      //获取这一条求助信息

      if (res.data.code) {
        helpShow.push({
          image: res.data.data.image.split(","),
          title: res.data.data.title,
          message: res.data.data.message,
          tag: res.data.data.tag,
          datePublish: res.data.data.datePublish,
          id: res.data.data.helpId,
        });
      } else {
        console.log("不对啊！！");
      }
    });

    getDiscuss(help).then((res) => {
      //获取这条求助信息的评论
      console.log("resresresres", res);
      if (res.data.code) {
        for (let index = 0; index < res.data.data.length; index++) {
          helpDiscussShow.push({
            message: res.data.data[index].message,
          });
        }
      } else {
        console.log("不对啊！！");
      }
    });

    return { helpShow, helpDiscussShow, router };
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