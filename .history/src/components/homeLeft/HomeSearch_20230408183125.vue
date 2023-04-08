<template>
  <!-- 输入搜索框 
  import { Search } from '@element-plus/icons-vue'
-->
  <div class="demo-input-size">
    <el-input
      v-model="input1"
      class="w-50 m-2"
      size="large"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
  </div>

  <!-- 日期选择框 -->
  <div class="demo-date-picker">
    <el-date-picker
      style="width: 100%"
      id="el-date-picker"
      v-model="value"
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
  </div>

  <!-- 标签选择框,点击事件后期传参数 -->
  <div class="demo-tag-picker">
    <el-tag
      @click.prevent="clickTag($event,tag)"
      v-for="tag in dynamicTags"
      :key="tag"
      class="mx-1"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </el-tag>
    <el-input
      v-if="inputVisible"
      ref="InputRef"
      v-model="inputValue"
      class="ml-1 w-20"
      size="small"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
    />
    <el-button
      v-else
      class="button-new-tag ml-1"
      size="small"
      @click="showInput"
    >
      + New Tag
    </el-button>
  </div>
</template>

<script>
//
import { defineComponent, ref } from "vue";

import { Search } from "@element-plus/icons-vue";

// import { PlusOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  // components: { PlusOutlined },
  setup() {
    //搜索框属性
    const input1 = ref("");

    //日期选择框属性
    const value = ref("2021-10-29");
    const holidays = [
      "2021-10-01",
      "2021-10-02",
      "2021-10-03",
      "2021-10-04",
      "2021-10-05",
      "2021-10-06",
      "2021-10-07",
    ];
    const isHoliday = ({ dayjs }) => {
      return holidays.includes(dayjs.format("YYYY-MM-DD"));
    };

    //tag标签属性
    const inputValue = ref("");
    const dynamicTags = ref(["happy", "sad", "amused"]);
    const inputVisible = ref(false);
    const InputRef = ref("");
    const handleClose = (tag) => {
      dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
    };

    const showInput = () => {
      inputVisible.value = true;
      // nextTick(() => {
      //   InputRef.value!.input!.focus()
      // })
    };

    const handleInputConfirm = () => {
      if (inputValue.value) {
        dynamicTags.value.push(inputValue.value);
      }
      inputVisible.value = false;
      inputValue.value = "";
    };

    function clickTag(event,msg) {
      //点击标签的方法
      console.log("dianle",event,msg);
    }
    return {
      value,
      isHoliday,
      input1,
      Search,
      dynamicTags,
      inputValue,
      inputVisible,
      InputRef,
      handleClose,
      showInput,
      handleInputConfirm,
      clickTag,
    };
  },
});
</script>

<style scoped>
.demo-input-size,
.demo-date-picker,
.demo-tag-picker {
  position: relative;
  margin-left: 15px;
  overflow: auto;
}
.demo-date-picker {
  margin-top: 60px;
}
.demo-tag-picker{
  padding-left: 15px;
}


.demo-date-picker.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100px;
}

.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
}
.cell .text {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.cell.current .text {
  background: #626aef;
  color: #fff;
}
.cell .holiday {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--el-color-danger);
  border-radius: 50%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}


/* 标签选择框样式 */
.demo-tag-picker {
  margin: 30px 15px 30px 0;
}
</style>