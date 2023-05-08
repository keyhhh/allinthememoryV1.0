<template>
  <div class="help-detail-div">
    <div class="help-detail-header"></div>
    <h1>{{helpShow[0].title}}</h1>
    <div class="help-detail-center">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
          <div v-if="helpShow.image">
          <img
            v-for="(index, id) in help.image.length"
            :key="index"
            :src="require('../../../assets/ALMIMG/' + help.image[id])"
            style="width: 45%; margin-right: 5%"
          />
        </div>
        </el-carousel-item>
      </el-carousel>

      <h1>{{ helpShow[0].message }}</h1>

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
    let helpShow = reactive([])


    let help = {
      helpId: route.query.helpMsgId, //求助信息的id
    }
    getHelpByID(help).then((res) =>{
      console.log("resresresres",res)
      if (res.data.code) {
        helpShow.push({
            image: res.data.data.image.split(","),
            title: res.data.data.title,
            message: res.data.data.message,
            tag: res.data.data.tag,
            datePublish: res.data.data.datePublish,
            id: res.data.data.helpId
          });
      } else {
        console.log("不对啊！！");
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