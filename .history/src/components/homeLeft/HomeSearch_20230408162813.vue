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
      v-model="value"
      type="date"
      placeholder="Pick a day"
      format="YYYY/MM/DD"
      value-format="YYYY-MM-DD"
      size="large"
    >
      <template #default="cell">
        <div class="cell" :class="{ current: cell.isCurrent }">
          <span class="text">{{ cell.text }}</span>
          <span v-if="isHoliday(cell)" class="holiday" />
        </div>
      </template>
    </el-date-picker>
  </div>

  <!-- 标签选择框 -->
  <div class="demo-tag-picker">
    <a-tooltip v-if="tag.length > 20" :title="tag">
      <a-tag :closable="index !== 0" @close="handleClose(tag)">
        {{ `${tag.slice(0, 20)}...` }}
      </a-tag>
    </a-tooltip>
    <a-tag v-else :closable="index !== 0" @close="handleClose(tag)">
      {{ tag }}
    </a-tag>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, nextTick } from "vue";
import { Search } from "@element-plus/icons-vue";
export default defineComponent({
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
    const inputRef = ref();
    const state = reactive({
      tags: ["Unremovable", "Tag 2", "Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3"],
      inputVisible: false,
      inputValue: "",
    });
    const handleClose = (removedTag) => {
      const tags = state.tags.filter((tag) => tag !== removedTag);
      console.log(tags);
      state.tags = tags;
    };
    const showInput = () => {
      state.inputVisible = true;
      nextTick(() => {
        inputRef.value.focus();
      });
    };
    const handleInputConfirm = () => {
      const inputValue = state.inputValue;
      let tags = state.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      Object.assign(state, {
        tags,
        inputVisible: false,
        inputValue: "",
      });
    };

    return {
      value,
      isHoliday,
      input1,
      Search,
      ...toRefs(state),
      handleClose,
      showInput,
      handleInputConfirm,
      inputRef,
    };
  },
});
</script>

<style scoped>
.demo-input-size,
.demo-date-picker {
  position: fixed;
  margin-left: 15px;
}
.demo-date-picker {
  width: 20px;
  margin-top: 80px;
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
</style>