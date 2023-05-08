<template>
  <el-card class="box-card" v-for="card in publicRecord" :key="card.id">
    <template #header>
      <div class="card-header">
        <!-- 显示日期 -->
        <span>2023-3-26</span>

        <!-- 标签展示
            type属性根据public-record中的is_memory属性，设置标签颜色success表示记录，danger表示集体记忆 -->
        <span
          >标签
          <el-tag
            v-for="(tag, index) in card.recordTag"
            :key="index"
            class="ml-2"
            type="success"
            >{{ tag }}
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
      <!-- <el-image
        style="width: 100px; height: 100px"
        src="./communist_party.jpg"
        :zoom-rate="1.2"
        :preview-src-list="srcList"
        :initial-index="4"
        fit="cover"
      /> -->

      <!-- <video style="width:80%"  :src="null" controls />   后期使用v-show判断是否展示 -->
      <img
        src="./communist_party.jpg"
        style="style=width: 80px; height: 100px; margin: 0 1% 0 1%"
      />
      <img
        src="./communist_party.jpg"
        style="style=width: 80px; height: 100px; margin: 0 1% 0 1%"
      />
      <img
        src="./communist_party.jpg"
        style="style=width: 80px; height: 100px; margin: 0 1% 0 1%"
      />
      <video
        controls
        src="@/components/home/homeCenter/《你从未离去》.mp4"
        style="style=width: 80px; height: 100px; margin: 0 1% 0 1%"
      ></video>
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
    getRecordPublic().th

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