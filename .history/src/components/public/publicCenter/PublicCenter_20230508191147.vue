<template>
  <el-card
    class="box-card"
    v-for="(card, cardIndex) in publicRecord"
    :key="card.recordId"
  >
    <template #header>
      <div class="card-header">
        <!-- 显示日期 -->
        <span>{{ card.datePublish }}</span>

        <!-- 标签展示
            type属性根据public-record中的is_memory属性，设置标签颜色success表示记录，danger表示集体记忆 -->
        <span>
          <el-tag class="ml-2" type="success">{{ card.tag }} </el-tag>
        </span>

        <!-- 点赞的花朵标签，有点击事件切换样式 -->
        <img
          :src="card.liskeImgSrc"
          style="width: 5%"
          @click="isLikeImg($event, card, cardIndex)"
        />
      </div>
    </template>
    <div class="text item">
      <div v-if="card.image">
        <img
          v-for="(index, id) in card.image.length"
          :key="index"
          :src="require('../../../assets/ALMIMG/' + card.image[id])"
          style="style=width: 80px; height: 100px; margin: 0 1% 0 1%"
        />
      </div>
      <br />
      <p>{{ card.message }}</p>
    </div>
  </el-card>
</template>

<script>
import { reactive, ref } from "vue";

import { getRecordPublic, likeRecordPublic } from "@/axios/public";

import likeG from "@/assets/icon/likeG.png"; //引入点赞的图片地址
import likeR from "@/assets/icon/likeR.png";
export default {
  setup() {
    const liskeImgSrcGNo = likeG; //没点赞图片
    const liskeImgSrcRYes = likeR; //点赞图片
    const publicRecord = reactive([
      //模拟我的记录信息
    ]);

    /**
     * 点赞按钮的点击事件
     */
    const isLikeImg = (event, card, cardIndex) => {
      //cardIndex是卡片的第几个
      // console.log("###", event, "@@@", card,"$$$$",cardIndex);

      let record = {};
      //判断是否为点赞状态
      if (
        //是点赞状态取消点赞
        publicRecord[cardIndex].likedUserId.indexOf(
          localStorage.getItem("userInfo")
        ) != -1
      ) {
        console.log("还不能取消点赞");
      } else {
        //不是点赞状态，设置点赞
        record = {
          //传递后端，记录id和喜欢的用户的id
          recordId: publicRecord[cardIndex].recordId,
          likedUserId: ((publicRecord[cardIndex].likedUserId[
            publicRecord[cardIndex].likedUserId === null
              ? 0
              : publicRecord[cardIndex].likedUserId.length
          ] = localStorage.getItem("userInfo"))).toString(),
          // likedUserId : publicRecord[cardIndex].likedUserId.join()
        };
        console.log("likedUserId",record);
        //点赞的方法
        likeRecordPublic(record).then((res) => {
          if (res.data.code) {
            console.log();
          } else {
            console.log();
          }
        });
      }
    };
    getRecordPublic().then((res) => {
      if (res.data.code) {
        for (let index = 0; index < res.data.data.length; index++) {
          publicRecord.push({
            datePublish: res.data.data[index].datePublish,
            image: res.data.data[index].image.split(","),
            isMemory: res.data.data[index].isMemory,
            isPublic: res.data.data[index].isPublic,
            message: res.data.data[index].message,
            recordId: res.data.data[index].recordId,
            tag: res.data.data[index].tag,
            userId: res.data.data[index].userId,

            likedUserId:
              res.data.data[index].likedUserId == null
                ? []
                : res.data.data[index].likedUserId.split(","),

            liskeImgSrc:
              res.data.data[index].likedUserId == null
                ? ref(liskeImgSrcGNo)
                : res.data.data[index].likedUserId
                    .split(",")
                    .indexOf(localStorage.getItem("userInfo")) != -1
                ? ref(liskeImgSrcRYes)
                : ref(liskeImgSrcGNo),
          });
        }
      } else {
        console.log("返回代码0", res);
      }
    });

    return { publicRecord, isLikeImg };
  },
};
</script>

<style>
/**.box-card */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 0;
}

.el-card {
  padding: 0 0 0 0;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 90%;
  margin: 20px auto;
}
</style>