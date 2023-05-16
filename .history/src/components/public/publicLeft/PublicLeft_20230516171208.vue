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
        <template #default="cell">
          <div class="cell" :class="{ current: cell.isCurrent }">
            <span class="text">{{ cell.text }}</span>
            <span v-if="isHoliday(cell)" class="holiday" />
          </div>
        </template>
      </el-date-picker>
      <el-button
        style="margin-left: 1%"
        type="info"
        :icon="Check"
        circle
        @click="showSomeByDate"
      />
    </div>

    <!-- 标签选择框,点击事件后期传参数 
          @click.prevent="showSomeByTag($event,tag)"  设置标签的点击事件
          style="margin-right:10px;margin-top:10px" 设置每个tag的间距
       -->
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
import { Check } from "@element-plus/icons-vue";

export default {

}
</script>

<style>

</style>