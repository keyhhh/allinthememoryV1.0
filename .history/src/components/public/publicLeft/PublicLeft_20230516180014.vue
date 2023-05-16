<template>
  <p style="text-align: center; margin-right: 20%">
    <el-button type="success" round @click="showAll">全部记录</el-button>
  </p>

  <!-- 日期选择器-->
  <div class="demo-date-picker">
    <el-date-picker
      style="width: 200px"
      id="el-date-picker"
      v-model="searchDateValue"
      type="date"
      placeholder="Pick a day"
      format="YYYY/MM/DD"
      value-format="YYYY-MM-DD"
    >
    </el-date-picker>
    <el-button
      style="margin-left: 1%;width: 5%;"
      type="info"
      :icon="Check"
      circle
      @click="showSomeByDate"
    />
  </div>

  <p style="text-align: center; margin-right: 20%">
    <el-button type="success" round @click="showSomeByLiked">我的喜欢</el-button>
  </p>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { ElMessage } from "element-plus"; //elementui

import { Check } from "@element-plus/icons-vue";

export default {
  setup() {
    //路由
    const router = useRouter();
    //这是要进行搜索的日期
    const searchDateValue = ref();

    function showAll() {
      //展示全部记录的方法
      console.log("展示全部记录");
      router.push({
        path: "/public",
      });
    }

    function showSomeByDate() {
      if(searchDateValue.value){
        ElMessage.error("请输入日期")
      }
      //根据日期搜索记录的方法
      console.log("展示日期搜搜", searchDateValue.value);
      router.push({
        path: "/public/byDate",
        query: {
          searchDateValue: searchDateValue.value,
        },
      });
    }

    function showSomeByLiked() {
      //展示我的喜欢
      console.log("展示我的喜欢", searchDateValue.value);
      router.push({
        path: "/public/byMylike",
        query: {
          searchDateValue: searchDateValue.value,
        },
      });
    }

    return {
      Check,

      searchDateValue,

      showAll,
      showSomeByDate,
      showSomeByLiked,
    };
  },
};
</script>

<style>
</style>