<template>
  <el-timeline>
    <el-timeline-item
      :timestamp="memoryData.data"
      placement="top"
      v-for="memoryData in myMemoryTestData"
      :key="memoryData.id"
    >
      <el-card>
        <img src="./communist_party.jpg" />
        <h4>{{ memoryData.msg }}</h4>
        <el-tag  v-for="(tag,index) in memoryData.recordTag " :key=index  class="ml-2" type="success">{{ tag }}</el-tag>
        <!-- 公开开关 -->
        <el-switch
          v-model="recordOpenOrNot"
          class="mb-2"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949; margin-left: 20px;"
          active-text="公开"
          inactive-text="私密"
        />
      </el-card>
    </el-timeline-item>

    <!-- <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <img src="./communist_party.jpg" />
        <h4>{{memoryData.msg}}</h4>
        <p>{{memoryData.recordTag}}</p>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <img src="./favicon.jpg" />
        <h4>{{memoryData.msg}}</h4>
        <p>{{memoryData.recordTag}}</p>
      </el-card>
    </el-timeline-item> -->

    <el-timeline-item placement="top" />
  </el-timeline>
</template>

<script>
import { ref,reactive } from "vue";
export default {
  setup() {
    const myMemoryTestData = reactive([
      //模拟我的记录信息
      {
        id: 1,
        msg: "模拟数据1",
        data: "模拟时间2023.4.9",
        recordTag: ["happy", "sad"],
        recordOpenOrNot:true
      },
      {
        id: 2,
        msg: "模拟数据2
简介：中文（Chinese）是中国的语言文字。特指汉族的语言文字，即汉语和汉字。在汉字文化圈和海外华人社区中，中文也被称为华文、汉文。中文（汉语）有标准语和方言之分，其标准语即汉语普通话，是规范后的汉民族共同语，也是中国的国家通用语言。现代汉语方.",
        data: "模拟时间2023.4.10",
        recordTag: ["happy", "mad"],
        recordOpenOrNot:true
      },
      {
        id: 3,
        msg: "模拟数据3sasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
        data: "模拟时间2023.4.11",
        recordTag: ["happy", "anxious"],
        recordOpenOrNot:true
      },
      {
        id: 4,
        msg: "模拟数据4",
        data: "模拟时间2023.4.12",
        recordTag: ["happy", "bored"],
        recordOpenOrNot:true
      },
      { id: 5, msg: "模拟数据5", data: "模拟时间2023.4.13", recordTag: ["happy"],recordOpenOrNot:true },
    ]);

    //记录是否公开
    const recordOpenOrNot = ref(true)

    return { myMemoryTestData, recordOpenOrNot };
  },
};
</script>

<style>
</style>