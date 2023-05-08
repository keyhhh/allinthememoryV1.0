<template>
  <el-timeline>
    <el-timeline-item
      v-for="record in recordData"
      :timestamp="record.datePublish"
      placement="top"
      :key="record.id"
    >
      <el-card>
        <!-- :src= "'img/'+record.image" src="http://localhost:8080/img/250b167c-0a82-4ab0-a4ea-af89bb2b074f.997913d9.jpg"  -->
        <img :src= "require"  style="width: 45%; margin-right: 5%" />
        <!-- <video style="width: 45%" src="./《你从未离去》.mp4" controls /> -->
        <h4>{{ record.message }}</h4>
        <!-- v-for="(tag, index) in record.tag"
            :key="index"
            {{ tag }}
          -->
        <el-tag class="ml-2" type="success">{{ record.tag }}</el-tag>
        <!-- 公开开关 -->
        <el-radio-group style="float: right;" v-model.number="record.isPublic" size="small">
          <el-radio :label="1" border>公开</el-radio>
          <el-radio :label="0" border>私密</el-radio>
        </el-radio-group>
      </el-card>
    </el-timeline-item>

    <!-- <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <img src="./communist_party.jpg" />
        <h4>{{record.msg}}</h4>
        <p>{{record.recordTag}}</p>
      </el-card>
    </el-timeline-item>

    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <img src="./favicon.jpg" />
        <h4>{{record.msg}}</h4>
        <p>{{record.recordTag}}</p>
      </el-card>
    </el-timeline-item> -->

    <el-timeline-item placement="top" />
  </el-timeline>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";

import { getRecord } from "@/axios/home"; //获取记录api
export default {
  setup() {
    const store = useStore();

    const recordData = reactive([
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

    /**
     * 获取后端记录数据
     *datePublish: "2023-05-02T22:09:27";
     *image: '"./communist_party.jpg"';
     *isPublic: 1;
     *message: "我是数据库测试的数据，我看你能不能展示出来嗷";
     *recordId: "1";
     *tag: "啥也不会";
     *userId: "1579094138604703745";
     */
    getRecord(store.state.user).then((res) => {
      console.log(res);
      if (res.data.code) {
        for (let index = 0; index < res.data.data.length; index++) {
          recordData.push(res.data.data[index]);
        }
      } else {
        console.log(res);
      }
    });

    return { recordData };
  },
};
</script>

<style>
</style>