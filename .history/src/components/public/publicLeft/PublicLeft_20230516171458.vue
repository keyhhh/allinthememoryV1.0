<template>
  <el-divider style="width: 80%" content-position="left">
    <span style="font-size: 10px">全部记录</span>
  </el-divider>

  <p style="text-align: center; margin-right: 20%">
    <el-button type="success" round @click="showAll">全部记录</el-button>
  </p>

  <el-divider style="width: 80%" content-position="right">
    <span style="font-size: 10px">搜索记录</span>
  </el-divider>

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
      style="margin-left: 1%"
      type="info"
      :icon="Check"
      circle
      @click="showSomeByDate"
    />
  </div>
  <!-- 标签 -->
  <div>
    <el-tag
      @click.prevent="showSomeByTag($event, tag)"
      v-for="tag in dynamicTags"
      :key="tag"
      class="mx-1"
      v-model="searchTagValue"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
      style="margin-right: 10px; margin-top: 10px; cursor: pointer"
    >
      {{ tag }}
    </el-tag>
  </div>
  <!-- 标签添加显示 -->
  <div class="demo-tag-picker-search">
    <el-input
      v-if="inputVisible"
      ref="InputRef"
      v-model="inputValue"
      class="ml-1 w-20"
      size="small"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
      style="margin-right: 10px; margin-top: 10px; width: 80%"
    />
    <el-button
      v-else
      class="button-new-tag ml-1"
      size="small"
      @click="showInput"
      style="margin-right: 10px; margin-top: 10px"
    >
      + 添加标签
    </el-button>
  </div>
</template>

<script>
import { ref } from "vue";
import { Check } from "@element-plus/icons-vue";

export default {
  setup() {

    //这是要进行搜索的日期
    const searchDateValue = ref(); 

     /**
     * tag标签属性
     **/
     const inputValue = ref("");
    const searchTagValue = ref(); //这是要进行搜索的标签
    const dynamicTags = ref([
      "开心",
      "伤心",
      "震怒",
      "胆寒",
      "狂喜",
      "得意",
      "畅快",
      "爽朗",
    ]);
    const inputVisible = ref(false);
    const InputRef = ref("");
    const handleClose = (tag) => {
      //删除tag
      dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
    };

    const showInput = () => {
      //让点击添加标签后，焦点锁定在输入框
      inputVisible.value = true;
      nextTick(() => {
        InputRef.value.focus();
      });
    };

    const handleInputConfirm = () => {
      if (inputValue.value) {
        dynamicTags.value.push(inputValue.value);
      }
      inputVisible.value = false;
      inputValue.value = "";
    };


    return { Check,
       searchDateValue,
       handleClose,
       };
  },
};
</script>

<style>
</style>