<template>
  <!-- 让el-col居中对齐 -->
  justify=center 居中对齐
justify=start 左对齐
justify=end 右对齐
justify=space-between 空格间距在中间对齐
justify=space-around 左右各占半格空格对齐
  <el-row type="flex" justify="center" >
    <el-col
    style="align-items: center;"
      v-for="(o, index) in 6"
      :key="o"
      :span="8"
      :offset="(index%2) > 0 ? 2 : 0"
    >
      <el-card shadow="always" :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
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
    const currentDate = ref(new Date());

    return{currentDate}
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