<template>
  <el-card class="box-card" v-for="card in publicRecord" :key="card.id">
    <template #header>
      <div class="card-header">
        <span
          >标签
          <el-tag
            v-for="(tag, index) in card.recordTag"
            :key="index"
            class="ml-2"
            type="success"
            >{{ tag }}
          </el-tag>
        </span>
        <el-button class="button" text>data</el-button>
      </div>
    </template>
    <div class="text item">

      <!-- <el-image
        style="width: 100px; height: 100px"
        src="./communist_party.jpg"
        :zoom-rate="1.2"
        :preview-src-list="srcList"
        :initial-index="4"
        fit="cover"
      /> -->

      <!-- <video style="width:80%"  :src="null" controls />   后期使用v-show判断是否展示 -->
      <img src="./communist_party.jpg" style="style=width: 80px; height: 100px">
      <img src="./communist_party.jpg" style="style=width: 80px; height: 100px">
      <img src="./communist_party.jpg" style="style=width: 80px; height: 100px">
      <video src="@/assets/"
      <br />
      <p>{{ card.msg }}</p>
    </div>
  </el-card>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const publicRecord = reactive([
      //模拟我的记录信息
      {
        id: 1,
        msg: "模拟数据我们现在能够确认距今约3000多年的甲骨文已经是非常成熟的文字体系，于1899年被发现。可以考证的汉字发展经历了甲骨文、金文、大篆、小篆、汉隶、楷书、行书、草书等过程。其中，楷书由隶书演变而成，始于东汉，通行。汉字可以划分为两个大阶段。从甲骨文字到小篆是一个阶段；从秦汉时代的隶书以下是另一个阶段。前者属于古文字的范畴 [12]  ，后者属于近代文字的范畴。现代汉字是在汉隶的基础上隶变楷化而来的，即汉字正楷字形。1",
        data: "模拟时间2023.4.9",
        recordTag: ["happy", "sad"],
        recordOpenOrNot: true,
      },
      {
        id: 2,
        msg: "模拟数据2汉字是中文的书写体系，即是记录汉民族语言的书面符号体系。 [10]  它是世界上最古老的文字之一，距今已有几千多年的历史。汉字主要起源于记事的象形性图画，象形字是汉字体系得以形成和发展的基础。后来的演变经历了几千年的漫长历程，经历了甲骨文、金文、篆书、隶书、楷书、草书、行书等阶段，普遍使用楷书。",
        data: "模拟时间2023.4.10",
        recordTag: ["happy", "mad"],
        recordOpenOrNot: true,
      },
      {
        id: 3,
        msg: "模拟数据3sasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
        data: "模拟时间2023.4.11",
        recordTag: ["happy", "anxious"],
        recordOpenOrNot: true,
      },
      {
        id: 4,
        msg: "模拟数据4",
        data: "模拟时间2023.4.12",
        recordTag: ["happy", "bored"],
        recordOpenOrNot: true,
      },
      {
        id: 5,
        msg: "模拟数据5",
        data: "模拟时间2023.4.13",
        recordTag: ["happy"],
        recordOpenOrNot: true,
      },
    ]);

    return { publicRecord};
  },
};
</script>

<style>
/**.box-card */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 90%;
  margin: 20px auto;
}
</style>