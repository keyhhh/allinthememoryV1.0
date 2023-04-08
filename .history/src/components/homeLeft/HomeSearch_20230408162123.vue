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
    
</template>

<script>
import { defineComponent, ref } from "vue";
import { Search } from "@element-plus/icons-vue";
export default defineComponent({
  setup() {
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

    const input1 = ref(""); //搜索框属性

    return { value, isHoliday, input1, Search };
  },
});
</script>

<style scoped>

.demo-input-size,.demo-date-picker{
  position:fixed;
  margin-left:15px ;
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