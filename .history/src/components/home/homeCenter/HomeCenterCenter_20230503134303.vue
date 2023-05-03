<template>
  <el-timeline>
    <el-timeline-item
      :timestamp="memoryData.data"
      placement="top"
      v-for="memoryData in myMemoryTestData"
      :key="memoryData.id"
    >
      <el-card>
        <img src="./communist_party.jpg" style="width:45%;margin-right: 5%;"/>
        <video style="width:45%"  src="./《你从未离去》.mp4" controls />
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
import { useStor } from "";

import { getRecord } from "@/axios/home";//获取记录api
export default {
  setup() {

    const myMemoryTestData= reactive([
      //#region 
      // //模拟我的记录信息
      // {
      //   id: 1,
      //   msg: "模拟数据我们现在能够确认距今约3000多年的甲骨文已经是非常成熟的文字体系，于1899年被发现。可以考证的汉字发展经历了甲骨文、金文、大篆、小篆、汉隶、楷书、行书、草书等过程。其中，楷书由隶书演变而成，始于东汉，通行。汉字可以划分为两个大阶段。从甲骨文字到小篆是一个阶段；从秦汉时代的隶书以下是另一个阶段。前者属于古文字的范畴 [12]  ，后者属于近代文字的范畴。现代汉字是在汉隶的基础上隶变楷化而来的，即汉字正楷字形。1",
      //   data: "模拟时间2023.4.9",
      //   recordTag: ["happy", "sad"],
      //   recordOpenOrNot:true
      // },
      // {
      //   id: 2,
      //   msg: "模拟数据2汉字是中文的书写体系，即是记录汉民族语言的书面符号体系。 [10]  它是世界上最古老的文字之一，距今已有几千多年的历史。汉字主要起源于记事的象形性图画，象形字是汉字体系得以形成和发展的基础。后来的演变经历了几千年的漫长历程，经历了甲骨文、金文、篆书、隶书、楷书、草书、行书等阶段，普遍使用楷书。",
      //   data: "模拟时间2023.4.10",
      //   recordTag: ["happy", "mad"],
      //   recordOpenOrNot:true
      // },
      // {
      //   id: 3,
      //   msg: "模拟数据3sasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      //   data: "模拟时间2023.4.11",
      //   recordTag: ["happy", "anxious"],
      //   recordOpenOrNot:true
      // },
      // {
      //   id: 4,
      //   msg: "模拟数据4",
      //   data: "模拟时间2023.4.12",
      //   recordTag: ["happy", "bored"],
      //   recordOpenOrNot:false
      // },
      // { id: 5, msg: "模拟数据5", data: "模拟时间2023.4.13", recordTag: ["happy"],recordOpenOrNot:true },
      //#endregion
    ]);
    

    //记录是否公开
    const recordOpenOrNot = ref(true)

    getRecord().then((res) =>{
      console.log(res);
    })

    return { myMemoryTestData, recordOpenOrNot };
  },
};
</script>

<style>
</style>