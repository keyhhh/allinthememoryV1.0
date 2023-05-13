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
          <div style="height: 100%" v-if="helpShow[0].image != ''">
            <img
              :src="require('../../../assets/ALMIMG/' + helpShow[0].image[id])"
              style="height: 100%; margin-right: 5%"
            />
          </div>
          <div style="height: 100%" v-else>
            <img
              src="@/assets/测试.jpg"
              style="height: 100%; margin-right: 5%"
            />
          </div>
        </el-carousel-item>
      </el-carousel>

      <h1>{{ helpShow[0].message }}</h1>
    </div>

    <div class="help-detail-footer" style="float: buttom">
      <el-card class="discuss-card">
        <template #header>
          <div class="card-header">
            <!-- <span style="font-size: 20px; font-weight: bold">评论信息</span> -->
            <el-input
              v-model="newDiscuss"
              :rows="2"
              autosize
              type="newDiscuss"
              placeholder="提供线索"
              style="width: 80%"
            />
            <!-- 同求的滑动选择 -->
            <el-switch
              inline-prompt
              active-text="同求"
              inactive-text=" 点击同求"
              @change="changeSwitch(val)"
              v-model="helpShow[0].isLikedHelp"
            />

            <!-- 提交评论信息的按钮 -->
            <el-button type="success" @click="toUpDiscuss">提交</el-button>
          </div>
        </template>
        <div
          v-for="(index, id) in helpDiscussShow.length"
          :key="index"
          class="text item"
        >
          第{{ id + 1 }}楼：&ensp;&ensp;&ensp;&ensp;&ensp;{{
            helpDiscussShow[id].message
          }}&ensp;&ensp;&ensp;&ensp;&ensp;({{
            helpDiscussShow[id].datePublish
          }})
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { reactive, ref } from "vue";

import { ElMessage } from "element-plus"; //elementui

import { getHelpByID, getDiscuss, upDiscuss,changeUserLike } from "@/axios/help";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    let helpShow = reactive([]); //求助信息展示详细
    let helpDiscussShow = reactive([]); //评论信息
    let newDiscuss = ref("");

    let help = reactive({
      helpId: route.query.helpMsgId, //求助信息的id
      userId: route.query.helpUserId,//这是这条记录创作的作者id，没用
      message: "",
      datePublish: "",
      likedUserId: localStorage.getItem("userInfo")
    });

    //上传评论信息
    function toUpDiscuss() {
      if (newDiscuss.value === "") {
        console.log();
      } else {
        help.message = newDiscuss.value; //评论信息传入对象
        help.datePublish = new Date();
        // console.log("提交", newDiscuss.value, help);
        upDiscuss(help).then((res) => {
          if (res.data.code) {
            getDiscuss(help).then((res) => {
              //刷新评论信息
              console.log("resresresres", res);
              if (res.data.code) {
                // helpDiscussShow = reactive([]);
                // for (let index = 0; index < res.data.data.length; index++) {
                //   helpDiscussShow.push({
                //     message: res.data.data[index].message,
                //     datePublish: res.data.data[index].datePublish,
                //   });
                // }
                helpDiscussShow.push({
                  message: res.data.data[res.data.data.length - 1].message,
                  datePublish: res.data.data[
                    res.data.data.length - 1
                  ].datePublish.slice(0, 10),
                });
              } else {
                ElMessage.error(res.data.msg);
              }
            });
          } else {
            console.log("上传评论失败");
          }
        });
      }
    }

    //切换同求switch的方法
    function changeSwitch(newVal){
      console.log("newVal",newVal)
      changeUserLike(help).then((res))
    }

    //获取这一条求助信息
    getHelpByID(help).then((res) => {
      if (res.data.code) {
        helpShow.push({
          userId: res.data.data.userId,
          image: res.data.data.image.split(","),
          title: res.data.data.title,
          message: res.data.data.message,
          tag: res.data.data.tag,
          datePublish: res.data.data.datePublish,
          id: res.data.data.helpId,
          likedUserId:
            res.data.data.likedUserId == null
              ? []
              : res.data.data.likedUserId.split(","),
          isLikedHelp:
            res.data.data.likedUserId == null
              ? false
              : res.data.data.likedUserId
                  .split(",")
                  .indexOf(localStorage.getItem("userInfo")) != -1
              ? true
              : false,
        });
      } else {
        console.log("不对啊！！");
      }
    });

    //获取这条求助信息的评论
    getDiscuss(help).then((res) => {
      console.log("resresresres", res);
      if (res.data.code) {
        for (let index = 0; index < res.data.data.length; index++) {
          helpDiscussShow.push({
            message: res.data.data[index].message,
            datePublish: res.data.data[index].datePublish.slice(0, 10),
          });
        }
      } else {
        console.log("不对啊！！");
      }
    });

    return { helpShow, helpDiscussShow, newDiscuss, toUpDiscuss, router,changeSwitch };
  },
};
</script>

<style scoped>
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

.discuss-card {
  overflow: auto;
}
</style>