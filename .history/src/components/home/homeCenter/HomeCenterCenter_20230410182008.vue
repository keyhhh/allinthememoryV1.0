<template>
  <el-timeline v-for="memoryData in myMemoryTestData" :key="memoryData.id">

    <el-timeline-item timestamp={{"2018/4/3"}} placement="top">
      <el-card>
        <img src="" />
        <h4>{{memoryData.msg}}</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <img src="./communist_party.jpg" />
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <img src="./favicon.jpg" />
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>

    <el-timeline-item placement="top" />
  </el-timeline>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const myMemoryTestData = reactive([
      //模拟我的记录信息
      { id: 1, msg: "模拟数据1", data: "模拟时间2023.4.9", mood: ["happy", "sad"] },
      { id: 2, msg: "模拟数据2", data: "模拟时间2023.4.10", mood: ["happy", "mad"] },
      { id: 3, msg: "模拟数据3", data: "模拟时间2023.4.11", mood: ["happy", "anxious"] },
      { id: 4, msg: "模拟数据4", data: "模拟时间2023.4.12", mood: ["happy", "bored"] },
      { id: 5, msg: "模拟数据5", data: "模拟时间2023.4.13", mood: ["happy"] },
    ]);


      return{myMemoryTestData}
  },
};
</script>

<style>
</style>