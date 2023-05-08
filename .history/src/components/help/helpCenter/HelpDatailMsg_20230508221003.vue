<template>
  <div class="help-detail-div">
    <div class="help-detail-header"></div>
    <h1>{{helpDetailMsgTitle}}</h1>
    <div class="help-detail-center">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>

      <h1>{{ helpMessage }}</h1>

    </div>

    <div class="help-detail-footer">
      <h3>打算放评论内容</h3>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { reactive } from "vue";

import { getHelpByID } from "@/axios/help";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const helpShow = reactive({})


    let help = {
      helpId: route.query.helpMsgId,
    }
    getHelpByID(help).then((res) =>{
      console.log("resresresres",res)
      if (res.data.code) {
          helpData.push({
            image: res.data.data[index].image.split(","),
            title: res.data.data[index].title,
            message: res.data.data[index].message,
            tag: res.data.data[index].tag,
            datePublish: res.data.data[index].datePublish,
            id: res.data.data[index].helpId
          });
      } else {
        console.log("");
      }
    })

    return { helpShow, router };
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