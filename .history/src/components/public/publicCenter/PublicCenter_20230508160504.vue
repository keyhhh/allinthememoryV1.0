<template>
  <el-card class="box-card" v-for="card in publicRecord" :key="card.recordId">
    <template #header>
      <div class="card-header">
        <!-- 显示日期 -->
        <span>{{ card.datePublish }}</span>

        <!-- 标签展示
            type属性根据public-record中的is_memory属性，设置标签颜色success表示记录，danger表示集体记忆 -->
        <span
          >标签
          <el-tag
            v-for="(tag, index) in card.recordTag"
            :key="index"
            class="ml-2"
            type="success"
            >{{ card.tag }}
          </el-tag>
        </span>

        <!-- 点赞的花朵标签，有点击事件切换样式 -->
        <img
          :src="liskeImgSrcR"
          style="width: 5%"
          @click="isLikeImg($event, card)"
        />
      </div>
    </template>
    <div class="text item">
      <img
        src="./communist_party.jpg"
       
      />
      <div v-if="record.image">
          <img
            v-for="(index, id) in record.image.length"
            :key="index"
            :src="require('../../../assets/ALMIMG/' + record.image[id])"
            style="width: 45%; margin-right: 5%"
          />
        </div>
      <br />
      <p>{{ card.msg }}</p>
    </div>
  </el-card>
</template>

<script>
import { reactive } from "vue";

import { getRecordPublic } from "@/axios/public";

import likeG from "@/assets/icon/likeG.png"; //引入点赞的图片地址
import likeR from "@/assets/icon/likeR.png";
export default {
  setup() {
    const liskeImgSrcG = likeG; //没点赞图片
    const liskeImgSrcR = likeR; //点赞图片
    const publicRecord = reactive([
      //模拟我的记录信息
    ]);

    const isLikeImg = (event, card) => {
      console.log(card, "@@@@@@@@@###############################");
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
          });
        }
      } else {
        console.log("返回代码0", res);
      }
    });

    return { publicRecord, isLikeImg, liskeImgSrcR, liskeImgSrcG };
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