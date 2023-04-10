<template>
  <!-- 让el-col居中对齐 -->
  <!-- justify=center 居中对齐
       justify=start 左对齐
       justify=end 右对齐
       justify=space-between 空格间距在中间对齐
       justify=space-around 左右各占半格空格对齐 -->
  <el-row type="flex" justify="center">
    <el-col
      style="margin-bottom: 50px; flex: 0 0 35%"
      v-for="(o, index) in cardNumbers"
      :key="o"
      :span="8"
      :offset="index % 2 > 0 ? 2 : 0"
    >
      <el-card shadow="always" :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>求助大标题</span>
          <!-- 寻找内容标签 -->
          <el-tag class="ml-2" type="success">寻人</el-tag>
          <el-tag class="ml-2" >寻物</el-tag>
          <el-tag class="ml-2" >寻音yue</el-tag>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const currentDate = ref("描述信息的部分内容");
    const cardNumbers = ref(20); //求助信息的卡片数量

    return { currentDate, cardNumbers };
  },
};
</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>